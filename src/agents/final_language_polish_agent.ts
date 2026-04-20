import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { GraphNode } from "@langchain/langgraph";
import { config } from "../config/index.js";
import { models } from "../providers/models.js";
import { prompts } from "../prompts/blogAgent.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { logger } from "../utils/logger.js";
import { normalizeProviderError } from "../utils/providerError.js";

function hasFrontmatter(content: string): boolean {
  return /^---\n[\s\S]+?\n---\n/.test(content);
}

function hasTable(content: string): boolean {
  return /\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(content);
}

function hasHeadingStructure(content: string): boolean {
  const h2Count = (content.match(/^##\s+/gm) ?? []).length;
  return h2Count >= 3;
}

function hasKnownMdxComponents(content: string): boolean {
  const openCount = (
    content.match(/<(Highlight|Callout|SectionDivider)\b/gi) ?? []
  ).length;
  if (openCount === 0) {
    return true;
  }

  const closeHighlight = (content.match(/<\/Highlight>/gi) ?? []).length;
  const openHighlight = (content.match(/<Highlight\b/gi) ?? []).length;
  const closeCallout = (content.match(/<\/Callout>/gi) ?? []).length;
  const openCallout = (content.match(/<Callout\b/gi) ?? []).length;

  return closeHighlight === openHighlight && closeCallout === openCallout;
}

function validatePolishedContent(content: string): string[] {
  const issues: string[] = [];

  if (!hasFrontmatter(content)) {
    issues.push("Missing YAML frontmatter after polish");
  }
  if (!hasHeadingStructure(content)) {
    issues.push("Heading structure degraded after polish");
  }
  if (!hasTable(content)) {
    issues.push("Markdown table missing after polish");
  }
  if (!hasKnownMdxComponents(content)) {
    issues.push("MDX component structure invalid after polish");
  }
  if (/[–—]/.test(content)) {
    issues.push("Contains typography dash characters after polish");
  }

  return issues;
}

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

function normalizeSpacing(value: string): string {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export interface PolishContentResult {
  final_blog: string;
  final_polish_applied: boolean;
  final_polish_warning?: string;
}

export async function runFinalLanguagePolish(
  original: string,
  options?: { strictStructure?: boolean },
): Promise<PolishContentResult> {
  const strictStructure = options?.strictStructure ?? true;

  try {
    const response = await models.gpt4o.invoke([
      new SystemMessage(prompts.finalLanguagePolishPrompt),
      new HumanMessage(original),
    ]);

    const polished = normalizeSpacing(
      extractTextContent(response.content),
    ).replace(/[–—]/g, "-");

    if (!strictStructure) {
      return {
        final_blog: polished,
        final_polish_applied: true,
        final_polish_warning: undefined,
      };
    }

    const issues = validatePolishedContent(polished);
    if (issues.length > 0) {
      return {
        final_blog: original,
        final_polish_applied: false,
        final_polish_warning: `Polish fallback used: ${issues.join("; ")}`,
      };
    }

    return {
      final_blog: polished,
      final_polish_applied: true,
      final_polish_warning: undefined,
    };
  } catch (error) {
    const details = normalizeProviderError(
      error,
      config.NODE_ENV !== "production",
    );
    logger.warn("Final language polish failed", {
      error: details.message,
      status: details.status,
      code: details.code,
      requestId: details.requestId,
    });

    return {
      final_blog: original,
      final_polish_applied: false,
      final_polish_warning: `Polish failed: ${details.message}`,
    };
  }
}

const finalLanguagePolishAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  const original = state.final_blog;
  if (!original) {
    throw new Error("Missing final_blog for language polish");
  }

  return runFinalLanguagePolish(original, { strictStructure: true });
};

export default finalLanguagePolishAgent;
