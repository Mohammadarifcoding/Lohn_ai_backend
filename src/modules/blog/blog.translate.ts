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

function validateTranslatedMdx(original: string, translated: string): string[] {
  const issues: string[] = [];

  if (/^---\n[\s\S]+?\n---\n/.test(original) && !/^---\n[\s\S]+?\n---\n/.test(translated)) {
    issues.push("Missing YAML frontmatter");
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
  const response = await models.claude.invoke([
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
