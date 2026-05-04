import { task } from "@trigger.dev/sdk/v3";
import type { Prisma } from "../generated/prisma/index.js";
import { prisma } from "../config/database.js";
import { translateBlogMdxToEnglish } from "../modules/blog/blog.translate.js";
import { logger } from "../utils/logger.js";

export interface BlogTranslateTaskPayload {
  briefId: string;
  germanSlug: string;
  germanMdxContent: string;
  fallbackTitle: string;
  fallbackCategory: string;
  fallbackTopic: string;
}

function toSlug(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripQuotes(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function parseFrontmatter(content: string): {
  body: string;
  frontmatter: Record<string, string | boolean>;
} {
  const normalized = content.replace(/\r\n/g, "\n").trim();

  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) {
    return {
      body: normalized,
      frontmatter: {},
    };
  }

  const frontmatter: Record<string, string | boolean> = {};
  const yamlBlock = match[1];

  for (const rawLine of yamlBlock.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex <= 0) {
      continue;
    }

    const key = line.slice(0, colonIndex).trim();
    const rawValue = line.slice(colonIndex + 1).trim();

    if (rawValue === "true") {
      frontmatter[key] = true;
    } else if (rawValue === "false") {
      frontmatter[key] = false;
    } else if (rawValue === "") {
      frontmatter[key] = "";
    } else {
      frontmatter[key] = stripQuotes(rawValue);
    }
  }

  return {
    body: (match[2] ?? "").trim(),
    frontmatter,
  };
}

function extractTitle(markdown: string): string | null {
  const headingMatch = markdown.match(/^#\s+(.+)$/m);
  if (headingMatch?.[1]) {
    return headingMatch[1].trim();
  }

  const { frontmatter } = parseFrontmatter(markdown);
  const title = frontmatter.title;
  return typeof title === "string" && title.trim() ? title.trim() : null;
}

function buildExcerptFromBody(content: string, fallbackTopic: string): string {
  const firstParagraph = content
    .split(/\n\n+/)
    .map((segment) => segment.replace(/^#+\s*/, "").trim())
    .find(Boolean);

  return (firstParagraph || `Article about ${fallbackTopic}`).slice(0, 190);
}

function escapeYamlString(value: string): string {
  return JSON.stringify(value);
}

function stringifyMdx(content: string, data: Record<string, unknown>): string {
  const frontmatter = Object.entries(data)
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return `${key}: ${value}`;
      }
      return `${key}: ${escapeYamlString(String(value ?? ""))}`;
    })
    .join("\n");

  return `---\n${frontmatter}\n---\n\n${content.trim()}\n`;
}

function buildPublishedMdx(params: {
  markdown: string;
  fallbackTitle: string;
  fallbackCategory: string;
  fallbackTopic: string;
}): { title: string; content: string; frontmatter: Record<string, unknown> } {
  const parsed = parseFrontmatter(params.markdown);
  const titleFromBody = extractTitle(parsed.body);
  const resolvedTitle =
    (typeof parsed.frontmatter.title === "string" && parsed.frontmatter.title.trim()) ||
    titleFromBody ||
    params.fallbackTitle;

  const mergedData: Record<string, unknown> = {
    ...parsed.frontmatter,
    title: parsed.frontmatter.title ?? resolvedTitle,
    excerpt: parsed.frontmatter.excerpt ?? buildExcerptFromBody(parsed.body, params.fallbackTopic),
    date: parsed.frontmatter.date ?? new Date().toISOString().slice(0, 10),
    author: parsed.frontmatter.author ?? "LohnAI Team",
    category: parsed.frontmatter.category ?? params.fallbackCategory,
    featured: parsed.frontmatter.featured ?? false,
  };

  return {
    title: String(mergedData.title),
    content: stringifyMdx(parsed.body, mergedData),
    frontmatter: mergedData,
  };
}

async function ensureUniqueSlug(baseSlug: string, locale: string): Promise<string> {
  const existing = await prisma.blogPost.findMany({
    where: {
      locale,
      slug: {
        startsWith: baseSlug,
      },
    },
    select: {
      slug: true,
    },
  });

  const existingSet = new Set(existing.map((item) => item.slug).filter(Boolean));
  if (!existingSet.has(baseSlug)) {
    return baseSlug;
  }

  let index = 2;
  while (existingSet.has(`${baseSlug}-${index}`)) {
    index += 1;
  }

  return `${baseSlug}-${index}`;
}

export async function runBlogTranslateTask(
  payload: BlogTranslateTaskPayload,
): Promise<void> {
  await prisma.blogBrief.update({
    where: { id: payload.briefId },
    data: {
      translationStatus: "processing",
      translationError: null,
      translationStartedAt: new Date(),
    },
  });

  try {
    const translatedContent = await translateBlogMdxToEnglish(payload.germanMdxContent);
    const translatedPublishResult = buildPublishedMdx({
      markdown: translatedContent,
      fallbackTitle: payload.fallbackTitle,
      fallbackCategory: payload.fallbackCategory,
      fallbackTopic: payload.fallbackTopic,
    });
    const translatedFrontmatter = translatedPublishResult.frontmatter;
    const translatedSlug = await ensureUniqueSlug(
      toSlug(translatedPublishResult.title || payload.fallbackTitle) || payload.germanSlug,
      "en",
    );

    await prisma.blogPost.upsert({
      where: {
        locale_slug: {
          locale: "en",
          slug: translatedSlug,
        },
      },
      update: {
        title: String(translatedFrontmatter.title ?? translatedPublishResult.title),
        excerpt: String(translatedFrontmatter.excerpt ?? ""),
        author: String(translatedFrontmatter.author ?? "LohnAI Team"),
        category: String(translatedFrontmatter.category ?? payload.fallbackCategory),
        featured: Boolean(translatedFrontmatter.featured ?? false),
        seoTitle:
          typeof translatedFrontmatter.seoTitle === "string"
            ? translatedFrontmatter.seoTitle
            : null,
        seoDescription:
          typeof translatedFrontmatter.seoDescription === "string"
            ? translatedFrontmatter.seoDescription
            : null,
        coverImage:
          typeof translatedFrontmatter.coverImage === "string"
            ? translatedFrontmatter.coverImage
            : null,
        frontmatterJson: translatedFrontmatter as Prisma.InputJsonValue,
        mdxContent: translatedPublishResult.content,
        sourceBriefId: payload.briefId,
        sourceRequestId: null,
        translationGroupId: payload.briefId,
        publishedAt: new Date(),
      },
      create: {
        locale: "en",
        slug: translatedSlug,
        title: String(translatedFrontmatter.title ?? translatedPublishResult.title),
        excerpt: String(translatedFrontmatter.excerpt ?? ""),
        author: String(translatedFrontmatter.author ?? "LohnAI Team"),
        category: String(translatedFrontmatter.category ?? payload.fallbackCategory),
        featured: Boolean(translatedFrontmatter.featured ?? false),
        seoTitle:
          typeof translatedFrontmatter.seoTitle === "string"
            ? translatedFrontmatter.seoTitle
            : null,
        seoDescription:
          typeof translatedFrontmatter.seoDescription === "string"
            ? translatedFrontmatter.seoDescription
            : null,
        coverImage:
          typeof translatedFrontmatter.coverImage === "string"
            ? translatedFrontmatter.coverImage
            : null,
        frontmatterJson: translatedFrontmatter as Prisma.InputJsonValue,
        mdxContent: translatedPublishResult.content,
        sourceBriefId: payload.briefId,
        sourceRequestId: null,
        translationGroupId: payload.briefId,
        publishedAt: new Date(),
      },
    });

    await prisma.blogBrief.update({
      where: { id: payload.briefId },
      data: {
        translationStatus: "completed",
        translationError: null,
        englishSlug: translatedSlug,
        translationCompletedAt: new Date(),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown translation error";
    await prisma.blogBrief.update({
      where: { id: payload.briefId },
      data: {
        translationStatus: "failed",
        translationError: message,
      },
    });

    logger.error("Blog translation task failed", {
      briefId: payload.briefId,
      error: message,
    });
    throw error;
  }
}

export const blogTranslateTask = task({
  id: "blog-translate",
  run: async (payload: BlogTranslateTaskPayload) => {
    logger.info("Trigger job started for blog translation", {
      briefId: payload.briefId,
      germanSlug: payload.germanSlug,
    });
    await runBlogTranslateTask(payload);
  },
});