import { GraphNode } from "@langchain/langgraph";
import type { Draft } from "../types/blog/writing.js";
import type { Evaluation } from "../types/blog/evaluation.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";

const APPROVAL_THRESHOLD = 8;

function estimateWordCount(text: string): number {
  return text
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 0).length;
}

function countMatches(text: string, regex: RegExp): number {
  return (text.match(regex) ?? []).length;
}

function evaluateDraftOnce(draft: Draft, draftIndex: number): Evaluation {
  let score = 10;
  const issues: string[] = [];
  const improvements: string[] = [];

  const content = draft.content;
  const wordCount = estimateWordCount(content);
  const currentYear = new Date().getUTCFullYear().toString();
  const semicolonCount = countMatches(content, /;/g);
  const semicolonPerThousandWords =
    wordCount > 0 ? (semicolonCount / wordCount) * 1000 : semicolonCount;

  const years = content.match(/\b20\d{2}\b/g) ?? [];
  const outdatedYears = [...new Set(years.filter((year) => year !== currentYear))];
  if (outdatedYears.length > 0) {
    score -= Math.min(1, outdatedYears.length * 0.3);
    issues.push(`Contains outdated year references: ${outdatedYears.join(", ")}`);
    improvements.push(`Align year references with current year (${currentYear}) where relevant`);
  }

  const fancyDashCount = countMatches(content, /[–—]/g);
  if (fancyDashCount > 0) {
    score -= Math.min(0.5, fancyDashCount * 0.05);
    issues.push("Uses typography dashes that reduce consistency");
    improvements.push("Normalize dash usage to standard hyphen where possible");
  }

  if (!/^---\n[\s\S]+?\n---\n/.test(content)) {
    score -= 2;
    issues.push("Missing YAML frontmatter block");
    improvements.push("Add complete frontmatter with SEO fields");
  }

  const headingCount = countMatches(content, /^##\s+/gm);
  if (headingCount < 3) {
    score -= 1.5;
    issues.push("Insufficient H2 section structure");
    improvements.push("Add clearer section structure with at least three H2 headings");
  }

  if (!/\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(content)) {
    score -= 1;
    issues.push("Missing markdown table");
    improvements.push("Add at least one comparison or target-state table");
  }

  if (wordCount < 900) {
    score -= 1;
    issues.push("Draft is shorter than expected depth");
    improvements.push("Expand practical examples and section depth");
  }

  if (semicolonPerThousandWords > 3) {
    score -= 0.8;
    issues.push("Semicolon usage is too frequent for natural reading flow");
    improvements.push("Reduce semicolon frequency and use simpler punctuation");
  }

  const aiPhrases = [
    "in today's fast-paced",
    "it is important to note",
    "in conclusion",
    "delve into",
    "unlock the power",
  ];
  const lowered = content.toLowerCase();
  const aiMatches = aiPhrases.filter((phrase) => lowered.includes(phrase));
  if (aiMatches.length > 0) {
    score -= Math.min(1.5, aiMatches.length * 0.5);
    issues.push("Contains AI-like generic phrasing");
    improvements.push("Replace generic phrasing with concrete, context-driven language");
  }

  score = Math.max(0, Number(score.toFixed(1)));

  if (issues.length === 0) {
    improvements.push("Draft is strong, keep this structure for final polishing");
  }

  return {
    draft_index: draftIndex,
    score,
    approved: score >= APPROVAL_THRESHOLD,
    issues,
    improvements,
  };
}

function applySingleRefinement(draft: Draft, evaluation: Evaluation): Draft {
  let refined = draft.content;
  const currentYear = new Date().getUTCFullYear().toString();

  if (evaluation.issues.some((issue) => issue.includes("Semicolon usage"))) {
    refined = refined.replace(/;/g, ",");
  }

  if (evaluation.issues.some((issue) => issue.includes("AI-like generic phrasing"))) {
    refined = refined
      .replace(/In today's fast-paced/gi, "In many teams")
      .replace(/It is important to note/gi, "A practical point")
      .replace(/In conclusion/gi, "To wrap up")
      .replace(/delve into/gi, "look at")
      .replace(/unlock the power/gi, "use");
  }

  if (evaluation.issues.some((issue) => issue.includes("outdated year references"))) {
    refined = refined.replace(/\b20\d{2}\b/g, currentYear);
  }

  if (evaluation.issues.some((issue) => issue.includes("typography dashes"))) {
    refined = refined.replace(/[–—]/g, "-");
  }

  return {
    ...draft,
    content: refined,
    word_count_estimate: estimateWordCount(refined),
  };
}

const finalEvaluationAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  const drafts = state.drafts ?? [];
  const evaluations = state.evaluations ?? [];

  if (drafts.length === 0) {
    throw new Error("Missing drafts for final evaluation");
  }

  if (evaluations.length === 0) {
    throw new Error("Missing evaluations for final evaluation");
  }

  const sorted = [...evaluations].sort((a, b) => b.score - a.score);
  const topEvaluation = sorted[0];
  const topDraft = drafts[topEvaluation.draft_index];

  if (!topDraft) {
    throw new Error("Top draft not found for final evaluation");
  }

  if (topEvaluation.score >= APPROVAL_THRESHOLD) {
    const selectedDraft = {
      ...topDraft,
      score: topEvaluation.score,
      feedback: topEvaluation.improvements,
    };

    return {
      selected_drafts: [selectedDraft],
      final_blog: selectedDraft.content,
      final_evaluation: {
        final_score: topEvaluation.score,
        approved: true,
        selected_draft_index: topEvaluation.draft_index,
        refinement_used: false,
        workflow_status: "completed" as const,
        decision_reason: "Top draft already met approval threshold",
        remaining_issues: topEvaluation.issues,
      },
      iteration_count: (state.iteration_count ?? 0) + 1,
    };
  }

  const refinedDraft = applySingleRefinement(topDraft, topEvaluation);
  const refinedEvaluation = evaluateDraftOnce(refinedDraft, topEvaluation.draft_index);
  const mergedEvaluations = evaluations.map((evaluation) =>
    evaluation.draft_index === refinedEvaluation.draft_index
      ? refinedEvaluation
      : evaluation,
  );

  const selectedDraft = {
    ...refinedDraft,
    score: refinedEvaluation.score,
    feedback: refinedEvaluation.improvements,
  };

  const approved = refinedEvaluation.score >= APPROVAL_THRESHOLD;

  return {
    drafts: drafts.map((draft, index) =>
      index === refinedEvaluation.draft_index ? refinedDraft : draft,
    ),
    evaluations: mergedEvaluations,
    selected_drafts: [selectedDraft],
    final_blog: selectedDraft.content,
    final_evaluation: {
      final_score: refinedEvaluation.score,
      approved,
      selected_draft_index: refinedEvaluation.draft_index,
      refinement_used: true,
      workflow_status: approved ? "completed" : "completed_with_warning",
      decision_reason: approved
        ? "Draft approved after one refinement pass"
        : "Draft remained below approval threshold after one refinement pass",
      remaining_issues: refinedEvaluation.issues,
    },
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default finalEvaluationAgent;
