import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { GraphNode } from "@langchain/langgraph";
import { config } from "../config/index.js";
import { models } from "../providers/models.js";
import { prompts } from "../prompts/blogAgent.js";
import type { BlogIdea } from "../types/blog/idea_generation.js";
import type { Draft } from "../types/blog/writing.js";
import type { ResearchResult } from "../types/blog/research.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { logger } from "../utils/logger.js";
import { normalizeProviderError } from "../utils/providerError.js";
import {
  analyzeFrontmatterStyle,
  normalizeFrontmatterFields,
} from "../modules/blog/frontmatter-style.js";

const DRAFT_COUNT = 3;

type Requirement = NonNullable<
  ReturnType<typeof BlogAgentStateSchema.parse>["requirement"]
>;

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeDocumentSpacing(value: string): string {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeContentPostGeneration(value: string): string {
  const currentYear = new Date().getUTCFullYear().toString();

  return normalizeFrontmatterFields(value)
    .replace(/\b(20\d{2})\b/g, (match) =>
      match === currentYear ? match : currentYear,
    )
    .replace(/[–—]/g, "-")
    .replace(/\s+-\s+/g, "-");
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

function truncateText(value: string, maxLength: number): string {
  const normalized = normalizeWhitespace(value);
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 3))}...`;
}

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.search = "";
    return parsed.toString().toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}

function estimateWordCount(text: string): number {
  return text
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 0).length;
}

function countMatches(text: string, regex: RegExp): number {
  return (text.match(regex) ?? []).length;
}

function hasFrontmatter(content: string): boolean {
  return /^---\n[\s\S]+?\n---\n/.test(content);
}

function hasTable(content: string): boolean {
  return /\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(content);
}

function countCallouts(content: string): number {
  const openCallouts = content.match(/<Callout\b[^>]*>/gi) ?? [];
  const closeCallouts = content.match(/<\/Callout>/gi) ?? [];
  return Math.min(openCallouts.length, closeCallouts.length);
}

function getMissingInteractiveBlocks(content: string): string[] {
  const missing: string[] = [];
  const hasHighlight = /<Highlight\b[^>]*>[\s\S]*?<\/Highlight>/i.test(content);
  const calloutCount = countCallouts(content);
  const hasDivider = /<SectionDivider\b[^>]*\/?>/i.test(content);

  if (!hasHighlight) {
    missing.push("Highlight block");
  }
  if (calloutCount < 2) {
    missing.push(`Callout blocks (${calloutCount}/2)`);
  }
  if (!hasDivider) {
    missing.push("SectionDivider block");
  }

  return missing;
}

function hasHeadingStructure(content: string): boolean {
  const h2Count = (content.match(/^##\s+/gm) ?? []).length;
  return h2Count >= 3;
}

function runStyleChecks(content: string): string[] {
  const issues: string[] = [];

  const aiPhrases = [
    "in today's fast-paced",
    "it is important to note",
    "in conclusion",
    "delve into",
    "unlock the power",
    "leverage",
    "robust",
    "seamless",
    "synergy",
    "paradigm",
    "transformative",
    "utilize",
    "cutting-edge",
    "state-of-the-art",
    "game-changer",
  ];

  const lowered = content.toLowerCase();
  for (const phrase of aiPhrases) {
    if (lowered.includes(phrase)) {
      issues.push(`Contains AI-like phrase: ${phrase}`);
    }
  }

  const wordCount = estimateWordCount(content);
  const colonCount = countMatches(content, /:/g);
  const hyphenSeparatorCount = countMatches(content, /\s-\s/g);
  const colonPerThousandWords =
    wordCount > 0 ? (colonCount / wordCount) * 1000 : colonCount;
  const hyphenPerThousandWords =
    wordCount > 0
      ? (hyphenSeparatorCount / wordCount) * 1000
      : hyphenSeparatorCount;

  if (colonPerThousandWords > 4) {
    issues.push("Overuses colon-heavy sentence pattern");
  }
  if (hyphenPerThousandWords > 3) {
    issues.push("Overuses mid-sentence hyphen separators");
  }

  const openingParagraph = content
    .split(/\n\s*\n/)
    .find((paragraph) => paragraph.trim().length > 0)
    ?.trim()
    .toLowerCase() ?? "";
  const templatedOpeners = ["picture this:", "imagine this:", "let's dive in", "lets dive in"];
  if (templatedOpeners.some((opener) => openingParagraph.startsWith(opener))) {
    issues.push("Uses repetitive templated opening phrase");
  }

  return issues;
}

function validateDraftHardRequirements(content: string): string[] {
  const issues: string[] = [];

  if (!hasFrontmatter(content)) {
    issues.push("Missing YAML frontmatter");
  }
  if (!hasHeadingStructure(content)) {
    issues.push("Insufficient section heading structure");
  }
  if (!hasTable(content)) {
    issues.push("Missing markdown table");
  }

  return issues;
}

function collectDraftStyleWarnings(content: string): string[] {
  const warnings: string[] = [];

  const missingInteractiveBlocks = getMissingInteractiveBlocks(content);
  if (missingInteractiveBlocks.length > 0) {
    warnings.push(
      `Missing required interactive MDX blocks: ${missingInteractiveBlocks.join(", ")}`,
    );
  }

  warnings.push(...runStyleChecks(content));

  const frontmatterAnalysis = analyzeFrontmatterStyle(content);
  warnings.push(...frontmatterAnalysis.softIssues);

  return warnings;
}

function buildRequirementSummary(requirement: Requirement) {
  return {
    title: requirement.title,
    refined_topic: requirement.refined_topic,
    refined_intent: requirement.refined_intent,
    audience: {
      level: requirement.audience.level,
      persona: requirement.audience.persona,
      pain_points: requirement.audience.pain_points.slice(0, 5),
    },
    seo: {
      primary_keyword: requirement.seo.primary_keyword,
      secondary_keywords: requirement.seo.secondary_keywords.slice(0, 4),
      search_intent: requirement.seo.search_intent,
    },
    core_sections: requirement.core_sections.slice(0, 5),
    key_angles: requirement.key_angles.slice(0, 4),
    tone: requirement.tone,
    constraints: requirement.constraints,
  };
}

function selectResearchPoints(results: ResearchResult[], maxItems: number) {
  const deduped = new Map<string, ResearchResult>();

  for (const result of results) {
    const key = `${normalizeUrl(result.url)}::${normalizeWhitespace(result.title).toLowerCase()}`;
    const existing = deduped.get(key);
    if (!existing || result.confidence > existing.confidence) {
      deduped.set(key, result);
    }
  }

  return [...deduped.values()]
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, maxItems)
    .map((result) => ({
      title: truncateText(result.title, 120),
      extracted_point: truncateText(result.extracted_point, 180),
    }));
}

function buildWritingInput(
  requirement: Requirement,
  idea: BlogIdea,
  state: ReturnType<typeof BlogAgentStateSchema.parse>,
  compact: boolean,
) {
  const status = state.research_status ?? "failed";
  const requirementSummary = buildRequirementSummary(requirement);

  if (status === "valid") {
    return {
      mode: "research_backed" as const,
      requirement_summary: requirementSummary,
      idea,
      research_points: selectResearchPoints(state.research_results ?? [], compact ? 3 : 5),
      metadata: {
        author: "LohnAI Team",
        category: "Lohnabrechnung",
        featured: false,
      },
    };
  }

  return {
    mode: "safe_assumption" as const,
    requirement_summary: requirementSummary,
    idea,
    missing_points: state.research_validation?.missing_points?.slice(0, compact ? 4 : 6) ?? [],
    safe_research_points: selectResearchPoints(state.research_results ?? [], compact ? 1 : 2),
    metadata: {
      author: "LohnAI Team",
      category: "Lohnabrechnung",
      featured: false,
    },
  };
}

function buildSystemPrompt(mode: "research_backed" | "safe_assumption") {
  if (mode === "research_backed") {
    return `${prompts.writingPromptBase}\n${prompts.writingPromptResearchBacked}`;
  }

  return `${prompts.writingPromptBase}\n${prompts.writingPromptSafeAssumption}`;
}

function isLengthLimitError(message: string): boolean {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("length limit was reached") ||
    normalized.includes("maximum context length") ||
    normalized.includes("token limit")
  );
}

async function generateSingleDraft(
  idea: BlogIdea,
  ideaIndex: number,
  state: ReturnType<typeof BlogAgentStateSchema.parse>,
): Promise<Draft> {
  if (!state.requirement) {
    throw new Error("Missing requirement for writing generation");
  }

  let shouldUseCompactRetry = false;
  let lastError: unknown;
  let lastHardIssues: string[] = [];

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const compact = shouldUseCompactRetry && attempt > 0;
    const input = buildWritingInput(state.requirement, idea, state, compact);
    const correctionHint = attempt > 0 && lastHardIssues.length > 0
      ? `\nFix these exact structure issues from previous draft: ${lastHardIssues.join(" | ")}\n`
      : "";
    const prompt = `${buildSystemPrompt(input.mode)}${correctionHint}`;

    try {
      const response = await models.claude.invoke([
        new SystemMessage(prompt),
        new HumanMessage(
          JSON.stringify({
            ...input,
            current_year: new Date().getUTCFullYear(),
          }),
        ),
      ]);

      const content = extractTextContent(response.content);
      const normalized = normalizeContentPostGeneration(
        normalizeDocumentSpacing(content),
      );
      const hardIssues = validateDraftHardRequirements(normalized);
      const frontmatterAnalysis = analyzeFrontmatterStyle(normalized);
      hardIssues.push(...frontmatterAnalysis.hardIssues);
      const styleWarnings = collectDraftStyleWarnings(normalized);
      if (hardIssues.length === 0) {
        return {
          idea_index: ideaIndex,
          idea_title: idea.title,
          format: "mdx",
          mode: input.mode,
          content: normalized,
          word_count_estimate: estimateWordCount(normalized),
          feedback: styleWarnings.length > 0 ? styleWarnings : undefined,
        };
      }

      lastHardIssues = hardIssues;
      lastError = new Error(`Draft hard validation failed: ${hardIssues.join("; ")}`);
      logger.warn("Writing draft validation failed", {
        ideaIndex,
        attempt: attempt + 1,
        compact,
        missingBlocks: getMissingInteractiveBlocks(normalized),
        hardIssues,
        styleWarnings,
        retryReason: "hard_validation",
      });
    } catch (error) {
      lastError = error;
      const details = normalizeProviderError(error, config.NODE_ENV !== "production");
      if (isLengthLimitError(details.message)) {
        shouldUseCompactRetry = true;
      }

      logger.error("Writing draft attempt failed", {
        ideaIndex,
        attempt: attempt + 1,
        compact,
        error: details.message,
        status: details.status,
        code: details.code,
        requestId: details.requestId,
        raw: details.raw,
      });
    }
  }

  const details = normalizeProviderError(lastError, config.NODE_ENV !== "production");
  throw new Error(`Writing draft failed for idea ${ideaIndex + 1}: ${details.message}`);
}

const writingAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  if (!state.requirement) {
    throw new Error("Missing requirement for writing generation");
  }

  const ideas = state.ideas ?? [];
  if (ideas.length === 0) {
    throw new Error("Missing ideas for writing generation");
  }

  const selectedIdeas = ideas.slice(0, DRAFT_COUNT);
  const drafts: Draft[] = [];

  for (let i = 0; i < selectedIdeas.length; i += 1) {
    const draft = await generateSingleDraft(selectedIdeas[i], i, state);
    drafts.push(draft);
  }

  return {
    drafts,
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default writingAgent;
