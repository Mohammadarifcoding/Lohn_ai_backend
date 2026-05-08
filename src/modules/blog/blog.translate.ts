import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { models } from "../../providers/models.js";
import { prompts } from "../../prompts/blogAgent.js";

function extractTextContent(content: unknown): string {
  if (typeof content === "string") {
    return content;
  }

  if (!Array.isArray(content)) {
    return "";
  }

  return content
    .map((part) => {
      if (typeof part === "string") {
        return part;
      }

      if (part && typeof part === "object" && "text" in part) {
        const text = (part as { text?: unknown }).text;
        return typeof text === "string" ? text : "";
      }

      return "";
    })
    .join("\n");
}

function normalizeTranslatedMdx(content: string): string {
  return content
    .replace(/^```(?:mdx|markdown)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function parseFrontmatterKeys(content: string): string[] {
  const normalized = content.replace(/\r\n/g, "\n").trim();
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return [];
  return match[1]
    .split("\n")
    .map((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex <= 0) return null;
      return line.slice(0, colonIndex).trim();
    })
    .filter((key): key is string => key !== null && key.length > 0);
}

function extractFrontmatterValue(content: string, key: string): string | null {
  const normalized = content.replace(/\r\n/g, "\n").trim();
  const fmMatch = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!fmMatch) return null;
  for (const line of fmMatch[1].split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex <= 0) continue;
    const lineKey = line.slice(0, colonIndex).trim();
    if (lineKey === key) {
      let value = line.slice(colonIndex + 1).trim().replace(/^['"]|['"]$/g, "");
      if (value === "true" || value === "false") return value;
      return value || null;
    }
  }
  return null;
}

const COMMON_GERMAN_WORDS = [
  "und", "der", "die", "das", "ist", "für", "von", "mit", "auf", "den",
  "als", "sich", "auch", "noch", "nach", "oder", "aber", "aus", "bei", "durch",
  "für", "gegen", "ohne", "um", "über", "zwischen", "wir", "unser", "unserer",
  "können", "werden", "wurde", "sind", "hat", "haben", "sein", "ihr", "ihre",
];

function looksLikeGerman(text: string): boolean {
  if (!text || text.length < 5) return false;
  const lower = text.toLowerCase();
  const matchCount = COMMON_GERMAN_WORDS.filter((w) => lower.includes(` ${w} `) || lower.startsWith(`${w} `) || lower.endsWith(` ${w}`)).length;
  return matchCount >= 2;
}

function validateTranslatedMdx(original: string, translated: string): string[] {
  const issues: string[] = [];

  if (/^---\n[\s\S]+?\n---\n/.test(original) && !/^---\n[\s\S]+?\n---\n/.test(translated)) {
    issues.push("Missing YAML frontmatter");
  }

  const originalKeys = parseFrontmatterKeys(original);
  const translatedKeys = parseFrontmatterKeys(translated);
  const metadataKeys = ["title", "excerpt", "seoTitle", "seoDescription", "category", "author"];

  for (const key of metadataKeys) {
    if (originalKeys.includes(key) && !translatedKeys.includes(key)) {
      issues.push(`Frontmatter key "${key}" was removed during translation`);
    }
  }

  for (const key of metadataKeys) {
    const value = extractFrontmatterValue(translated, key);
    if (value && looksLikeGerman(value)) {
      issues.push(`Frontmatter "${key}" appears to still be in German: "${value.slice(0, 80)}"`);
    }
  }

  const components = ["Highlight", "Callout", "SectionDivider"];
  for (const component of components) {
    const originalCount = (original.match(new RegExp(`<${component}\\b`, "g")) ?? []).length;
    const translatedCount = (translated.match(new RegExp(`<${component}\\b`, "g")) ?? []).length;
    if (originalCount !== translatedCount) {
      issues.push(`MDX component count mismatch for ${component}`);
    }
  }

  if (/\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(original) && !/\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(translated)) {
    issues.push("Markdown table missing");
  }

  return issues;
}

export async function translateBlogMdxToEnglish(content: string): Promise<string> {
  const source = content.trim();
  const response = await models.gpt55.invoke([
    new SystemMessage(prompts.blogTranslationPrompt),
    new HumanMessage(source),
  ]);

  const translated = normalizeTranslatedMdx(extractTextContent(response.content));
  const issues = validateTranslatedMdx(source, translated);

  if (!translated) {
    throw new Error("Translation returned empty content");
  }

  if (issues.length > 0) {
    throw new Error(`Translation validation failed: ${issues.join("; ")}`);
  }

  return `${translated}\n`;
}
