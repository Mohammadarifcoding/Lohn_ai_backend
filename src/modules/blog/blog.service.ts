import type { BlogInput } from "../../types/blog/blog.js";
import { runFinalLanguagePolish } from "../../agents/final_language_polish_agent.js";
import { logger } from "../../utils/logger.js";
import { runGenerateBlogGraph } from "../../workflows/blog/generate.graph.js";
import {
  completeRunRecord,
  failRunRecord,
} from "./blog.run-store.js";
import { persistBlogRun } from "./blog.persistence.js";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown error";
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

function splitFrontmatter(content: string): {
  frontmatter: string;
  body: string;
} {
  const match = content.match(/^(---\n[\s\S]+?\n---\n?)([\s\S]*)$/);
  if (!match) {
    return { frontmatter: "", body: content };
  }

  return {
    frontmatter: match[1] ?? "",
    body: match[2] ?? "",
  };
}

function hasFrontmatter(content: string): boolean {
  return /^---\n[\s\S]+?\n---\n/.test(content);
}

function hasTable(content: string): boolean {
  return /\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(content);
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

function isProtectedLine(line: string): boolean {
  const trimmed = line.trim();
  return (
    trimmed.length === 0 ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("<") ||
    trimmed.includes("|") ||
    trimmed.startsWith("```")
  );
}

interface CleanupStats {
  aiPhraseReplacements: number;
  colonFixes: number;
  hyphenFixes: number;
}

interface DeterministicCleanupResult extends CleanupStats {
  content: string;
}

const phraseReplacements: Array<{ pattern: RegExp; replacement: string }> = [
  { pattern: /in today's fast-paced/gi, replacement: "in many teams" },
  { pattern: /it is important to note/gi, replacement: "a practical point" },
  { pattern: /in conclusion/gi, replacement: "to wrap up" },
  { pattern: /\bdelve into\b/gi, replacement: "look at" },
  { pattern: /\bunlock the power\b/gi, replacement: "use" },
  { pattern: /\bleverage\b/gi, replacement: "use" },
  { pattern: /\butilize\b/gi, replacement: "use" },
  { pattern: /\brobust\b/gi, replacement: "reliable" },
  { pattern: /\bseamless\b/gi, replacement: "simple" },
  { pattern: /\bsynergy\b/gi, replacement: "coordination" },
  { pattern: /\bparadigm\b/gi, replacement: "approach" },
  { pattern: /\btransformative\b/gi, replacement: "high-impact" },
  { pattern: /\bcutting-edge\b/gi, replacement: "modern" },
  { pattern: /\bstate-of-the-art\b/gi, replacement: "advanced" },
  { pattern: /\bgame-changer\b/gi, replacement: "important improvement" },
  { pattern: /^\s*picture this:\s*/gim, replacement: "" },
  { pattern: /^\s*imagine this:\s*/gim, replacement: "" },
  { pattern: /^\s*let'?s dive in\.?\s*/gim, replacement: "" },
];

function countProseMatches(content: string, regex: RegExp): number {
  const { body } = splitFrontmatter(content);
  let total = 0;
  let inCodeBlock = false;

  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock || isProtectedLine(line)) {
      continue;
    }
    total += countMatches(line, regex);
  }

  return total;
}

function deterministicCleanup(content: string): DeterministicCleanupResult {
  const { frontmatter, body } = splitFrontmatter(content);
  let aiPhraseReplacements = 0;
  let colonFixes = 0;
  let hyphenFixes = 0;
  let inCodeBlock = false;

  const phraseCleanedBody = body
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        return line;
      }
      if (inCodeBlock || isProtectedLine(line)) {
        return line;
      }

      let next = line;
      for (const entry of phraseReplacements) {
        next = next.replace(entry.pattern, () => {
          aiPhraseReplacements += 1;
          return entry.replacement;
        });
      }

      return next;
    })
    .join("\n");

  let cleaned = `${frontmatter}${phraseCleanedBody}`;
  const wordCount = estimateWordCount(cleaned);
  const colonCount = countProseMatches(cleaned, /:/g);
  const hyphenSeparatorCount = countProseMatches(cleaned, /\s-\s/g);
  const colonPerThousandWords =
    wordCount > 0 ? (colonCount / wordCount) * 1000 : colonCount;
  const hyphenPerThousandWords =
    wordCount > 0
      ? (hyphenSeparatorCount / wordCount) * 1000
      : hyphenSeparatorCount;

  if (colonPerThousandWords > 4 || hyphenPerThousandWords > 3) {
    inCodeBlock = false;
    const transformedBody = phraseCleanedBody
      .split("\n")
      .map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("```")) {
          inCodeBlock = !inCodeBlock;
          return line;
        }
        if (inCodeBlock || isProtectedLine(line)) {
          return line;
        }

        let next = line;
        if (colonPerThousandWords > 4) {
          next = next.replace(/:\s+/g, () => {
            colonFixes += 1;
            return ". ";
          });
        }
        if (hyphenPerThousandWords > 3) {
          next = next.replace(/\s-\s/g, () => {
            hyphenFixes += 1;
            return ", ";
          });
        }

        return next;
      })
      .join("\n");

    cleaned = `${frontmatter}${transformedBody}`;
  }

  return {
    content: cleaned,
    aiPhraseReplacements,
    colonFixes,
    hyphenFixes,
  };
}

function validatePolishedParity(
  original: string,
  polished: string,
  strictStructure: boolean,
): string[] {
  const issues: string[] = [];

  if (hasFrontmatter(original) && !hasFrontmatter(polished)) {
    issues.push("Missing YAML frontmatter after polish");
  }
  if (hasTable(original) && !hasTable(polished)) {
    issues.push("Markdown table missing after polish");
  }
  if (hasKnownMdxComponents(original) && !hasKnownMdxComponents(polished)) {
    issues.push("MDX component structure invalid after polish");
  }
  if (strictStructure && /[–—]/.test(polished)) {
    issues.push("Contains typography dash characters after polish");
  }

  return issues;
}

export async function polishDraftContent(
  content: string,
  options?: { strictStructure?: boolean },
): Promise<{
  polishedContent: string;
  finalPolishApplied: boolean;
  finalPolishWarning?: string;
  wordCountBefore: number;
  wordCountAfter: number;
  fallbackUsed: boolean;
  fallbackReason?: string;
  aiPhraseReplacements: number;
  colonFixes: number;
  hyphenFixes: number;
}> {
  const original = content.trim();
  const strictStructure = options?.strictStructure ?? false;
  const cleaned = deterministicCleanup(original);

  const result = await runFinalLanguagePolish(cleaned.content, {
    strictStructure,
  });

  const cleanedWordCount = estimateWordCount(cleaned.content);
  const polishedWordCount = estimateWordCount(result.final_blog);
  const shouldApplyLengthGuard = cleanedWordCount >= 600;
  const minAllowedWordCount = Math.ceil(cleanedWordCount * 0.9);
  const parityIssues = validatePolishedParity(
    cleaned.content,
    result.final_blog,
    strictStructure,
  );

  let fallbackReason: string | undefined;
  if (!result.final_polish_applied) {
    fallbackReason = result.final_polish_warning ?? "Polish was not applied";
  } else if (shouldApplyLengthGuard && polishedWordCount < minAllowedWordCount) {
    fallbackReason = `Polish fallback used: Output shrank below 90% threshold (${polishedWordCount}/${cleanedWordCount} words)`;
  } else if (parityIssues.length > 0) {
    fallbackReason = `Polish fallback used: ${parityIssues.join("; ")}`;
  }

  const finalContent = fallbackReason ? cleaned.content : result.final_blog;
  const finalWordCount = estimateWordCount(finalContent);

  return {
    polishedContent: finalContent,
    finalPolishApplied: !fallbackReason,
    finalPolishWarning: fallbackReason,
    wordCountBefore: estimateWordCount(original),
    wordCountAfter: finalWordCount,
    fallbackUsed: Boolean(fallbackReason),
    fallbackReason,
    aiPhraseReplacements: cleaned.aiPhraseReplacements,
    colonFixes: cleaned.colonFixes,
    hyphenFixes: cleaned.hyphenFixes,
  };
}

export async function runGenerateBlogInBackground(
  requestId: string,
  userInput: BlogInput,
  userId?: string
): Promise<void> {
  const startedAt = Date.now();

  logger.info("Blog generation workflow started", {
    requestId,
    userId,
    topic: userInput.topic,
  });

  try {
    // Execute the workflow fully in background and persist a snapshot of key state
    // so clients can poll status without waiting on a long request.
    const state = await runGenerateBlogGraph(userInput);
    const durationMs = Date.now() - startedAt;

    const output = {
      requestId,
      userId,
      durationMs,
      requirement: state.requirement,
      research_plan: state.research_plan,
      research_plan_validation: state.research_plan_validation,
      approved_queries: state.approved_queries,
      rejected_queries: state.rejected_queries,
      research_results: state.research_results,
      research_validation: state.research_validation,
      research_status: state.research_status,
      ideas: state.ideas,
      drafts: state.drafts,
      evaluations: state.evaluations,
      final_evaluation: state.final_evaluation,
      final_polish_applied: state.final_polish_applied,
      final_polish_warning: state.final_polish_warning,
      selected_drafts: state.selected_drafts,
      final_blog: state.final_blog,
      tavily_calls_used: state.tavily_calls_used,
      cache_hits: state.cache_hits,
      cache_misses: state.cache_misses,
      iteration_count: state.iteration_count,
    };

    // Current requirement: print the completed output in console.
    console.log("BLOG_GENERATION_OUTPUT", JSON.stringify(output, null, 2));

    completeRunRecord(requestId, {
      durationMs,
      requirement: state.requirement,
      research_plan: state.research_plan,
      research_plan_validation: state.research_plan_validation,
      approved_queries: state.approved_queries,
      rejected_queries: state.rejected_queries,
      research_results: state.research_results,
      research_validation: state.research_validation,
      research_status: state.research_status,
      ideas: state.ideas,
      drafts: state.drafts,
      evaluations: state.evaluations,
      final_evaluation: state.final_evaluation,
      final_polish_applied: state.final_polish_applied,
      final_polish_warning: state.final_polish_warning,
      selected_drafts: state.selected_drafts,
      final_blog: state.final_blog,
      tavily_calls_used: state.tavily_calls_used,
      cache_hits: state.cache_hits,
      cache_misses: state.cache_misses,
      iteration_count: state.iteration_count,
    });

    const selectedDraftIndex = state.selected_drafts?.[0]
      ? state.drafts?.findIndex(
          (draft) => draft.content === state.selected_drafts?.[0]?.content,
        )
      : undefined;

    try {
      await persistBlogRun({
        requestId,
        userId,
        topic: userInput.topic,
        status: "completed",
        durationMs,
        iterationCount: state.iteration_count,
        drafts: state.drafts,
        evaluations: state.evaluations,
        workflowStatus: state.final_evaluation?.workflow_status ?? "completed",
        finalPolishApplied: state.final_polish_applied,
        finalPolishWarning: state.final_polish_warning,
        selectedDraftIndex:
          selectedDraftIndex !== undefined && selectedDraftIndex >= 0
            ? selectedDraftIndex
            : undefined,
        finalBlog: state.final_blog,
      });
    } catch (persistError) {
      const persistMessage = getErrorMessage(persistError);
      logger.warn("Blog generation persistence failed", {
        requestId,
        userId,
        error: persistMessage,
      });
    }

    logger.info("Blog generation workflow finished", {
      requestId,
      userId,
      durationMs,
      iterationCount: state.iteration_count,
      hasRequirement: Boolean(state.requirement),
      hasResearchPlan: Boolean(state.research_plan),
      hasResearchResults: Boolean(state.research_results?.length),
      hasIdeas: Boolean(state.ideas?.length),
      hasDrafts: Boolean(state.drafts?.length),
      hasEvaluations: Boolean(state.evaluations?.length),
      workflowStatus: state.final_evaluation?.workflow_status,
      finalPolishApplied: state.final_polish_applied,
      finalPolishWarning: state.final_polish_warning,
      hasFinalBlog: Boolean(state.final_blog),
      researchStatus: state.research_status,
      tavilyCallsUsed: state.tavily_calls_used,
      cacheHits: state.cache_hits,
      cacheMisses: state.cache_misses,
    });
  } catch (error) {
    const durationMs = Date.now() - startedAt;
    const message = getErrorMessage(error);

    console.error(
      "BLOG_GENERATION_ERROR",
      JSON.stringify(
        {
          requestId,
          userId,
          durationMs,
          error: message,
        },
        null,
        2
      )
    );

    failRunRecord(requestId, {
      durationMs,
      error: message,
    });

    try {
      await persistBlogRun({
        requestId,
        userId,
        topic: userInput.topic,
        status: "failed",
        durationMs,
        iterationCount: 0,
        workflowStatus: "failed",
        error: message,
      });
    } catch (persistError) {
      const persistMessage = getErrorMessage(persistError);
      logger.warn("Failed run persistence failed", {
        requestId,
        userId,
        error: persistMessage,
      });
    }

    logger.error("Blog generation workflow failed", {
      requestId,
      userId,
      durationMs,
      error: message,
    });
  }
}
