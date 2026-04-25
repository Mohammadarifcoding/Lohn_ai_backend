import { GraphNode } from "@langchain/langgraph";
import type { Draft } from "../types/blog/writing.js";
import type { Evaluation } from "../types/blog/evaluation.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { analyzeFrontmatterStyle } from "../modules/blog/frontmatter-style.js";

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

function evaluateDraft(draft: Draft, draftIndex: number): Evaluation {
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

  if (semicolonPerThousandWords > 3) {
    score -= 0.8;
    issues.push("Semicolon usage is too frequent for natural reading flow");
    improvements.push("Reduce semicolon frequency and use simpler punctuation");
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

  const calloutCount = countMatches(content, /<Callout\s+title="[^"]+"\s+tone="(info|success)">/g);
  if (calloutCount < 2) {
    score -= 1;
    issues.push("Missing required callout components");
    improvements.push("Include at least two callout blocks with informative value");
  }

  if (!/<Highlight>[\s\S]*?<\/Highlight>/.test(content)) {
    score -= 0.5;
    issues.push("Missing Highlight component");
    improvements.push("Add a highlight block for key message emphasis");
  }

  if (!/<SectionDivider\s+label="[^"]+"\s*\/>/.test(content)) {
    score -= 0.5;
    issues.push("Missing SectionDivider component");
    improvements.push("Add a section divider to improve pacing");
  }

  if (!/\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(content)) {
    score -= 1;
    issues.push("Missing markdown table");
    improvements.push("Add at least one comparison or target-state table");
  }

  const frontmatterAnalysis = analyzeFrontmatterStyle(content);
  if (frontmatterAnalysis.hardIssues.length > 0) {
    score -= Math.min(1.8, frontmatterAnalysis.hardIssues.length * 0.6);
    issues.push(...frontmatterAnalysis.hardIssues);
    improvements.push("Rewrite the frontmatter title, SEO title, and excerpt in plain editorial language");
  }
  if (frontmatterAnalysis.softIssues.length > 0) {
    score -= Math.min(0.8, frontmatterAnalysis.softIssues.length * 0.25);
    issues.push(...frontmatterAnalysis.softIssues);
    improvements.push("Make the title and excerpt more specific and less templated");
  }

  if (wordCount < 900) {
    score -= 1;
    issues.push("Draft is shorter than expected depth");
    improvements.push("Expand practical examples and section depth");
  }

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
  const aiMatches = aiPhrases.filter((phrase) => lowered.includes(phrase));
  if (aiMatches.length > 0) {
    if (aiMatches.length > 2) {
      score -= Math.min(1.5, (aiMatches.length - 2) * 0.4);
    }
    issues.push("Contains AI-like generic phrasing");
    improvements.push("Replace generic phrasing with concrete, context-driven language");
  }

  const colonCount = countMatches(content, /:/g);
  const colonPerThousandWords =
    wordCount > 0 ? (colonCount / wordCount) * 1000 : colonCount;
  if (colonPerThousandWords > 4) {
    score -= Math.min(0.8, (colonPerThousandWords - 4) * 0.2);
    issues.push("Colon usage is too frequent for balanced readability");
    improvements.push("Reduce colon-heavy sentence joins and prefer direct sentences");
  }

  const hyphenSeparatorCount = countMatches(content, /\s-\s/g);
  const hyphenPerThousandWords =
    wordCount > 0
      ? (hyphenSeparatorCount / wordCount) * 1000
      : hyphenSeparatorCount;
  if (hyphenPerThousandWords > 3) {
    score -= Math.min(0.8, (hyphenPerThousandWords - 3) * 0.2);
    issues.push("Mid-sentence hyphen separator is overused");
    improvements.push("Use commas or shorter sentences instead of repeated ' - ' separators");
  }

  const openingParagraph = content
    .split(/\n\s*\n/)
    .find((paragraph) => paragraph.trim().length > 0)
    ?.trim()
    .toLowerCase() ?? "";
  const templatedOpeners = ["picture this:", "imagine this:", "let's dive in", "lets dive in"];
  if (templatedOpeners.some((opener) => openingParagraph.startsWith(opener))) {
    score -= 0.6;
    issues.push("Uses repetitive templated opening phrase");
    improvements.push("Start with a context-specific opening instead of stock hook phrases");
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

const evaluationAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  const drafts = state.drafts ?? [];
  if (drafts.length === 0) {
    throw new Error("Missing drafts for evaluation");
  }

  const evaluations = drafts.map((draft, index) => evaluateDraft(draft, index));

  const paired = drafts.map((draft, index) => ({
    draft,
    evaluation: evaluations[index],
  }));

  const approved = paired
    .filter((item) => item.evaluation.approved)
    .sort((a, b) => b.evaluation.score - a.evaluation.score);

  const sortedAll = [...paired].sort((a, b) => b.evaluation.score - a.evaluation.score);

  const selected = approved.length > 0 ? approved[0] : sortedAll[0];

  if (!selected) {
    throw new Error("No draft available for final selection");
  }

  const selectedDraft = {
    ...selected.draft,
    score: selected.evaluation.score,
    feedback: selected.evaluation.improvements,
  };

  return {
    evaluations,
    selected_drafts: [selectedDraft],
    final_blog: selectedDraft.content,
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default evaluationAgent;
