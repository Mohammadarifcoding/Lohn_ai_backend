import { GraphNode } from "@langchain/langgraph";
import type { RejectedQuery } from "../types/blog/research.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { MAX_TAVILY_CALLS_PER_REQUEST } from "../modules/blog/research.constants.js";

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeForCompare(value: string): string {
  return normalizeWhitespace(value).toLowerCase();
}

function tokenize(value: string): string[] {
  return normalizeForCompare(value)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(" ")
    .filter((token) => token.length > 2);
}

function tokenOverlapRatio(a: string, b: string): number {
  const aTokens = new Set(tokenize(a));
  const bTokens = new Set(tokenize(b));

  if (aTokens.size === 0 || bTokens.size === 0) {
    return 0;
  }

  let common = 0;
  for (const token of aTokens) {
    if (bTokens.has(token)) {
      common += 1;
    }
  }

  return common / Math.max(aTokens.size, bTokens.size);
}

function isTooVague(query: string): boolean {
  const normalized = normalizeForCompare(query);
  if (normalized.length < 12) {
    return true;
  }

  const lowSignalPhrases = [
    "best software",
    "what is",
    "guide",
    "tips",
    "ideas",
    "examples",
  ];

  return lowSignalPhrases.some((phrase) => normalized === phrase);
}

// Score how strongly a query maps to required coverage points.
// Direct phrase matches are weighted more than partial token overlap.
function scoreCoverage(
  query: string,
  coveragePoints: string[]
): number {
  const normalized = normalizeForCompare(query);
  let score = 0;
  for (const point of coveragePoints) {
    const pointNorm = normalizeForCompare(point);
    if (pointNorm && normalized.includes(pointNorm)) {
      score += 2;
      continue;
    }

    if (tokenOverlapRatio(normalized, pointNorm) >= 0.5) {
      score += 1;
    }
  }

  return score;
}

const researchPlanValidatorAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  if (!state.requirement) {
    throw new Error("Missing requirement for research plan validation");
  }

  if (!state.research_plan) {
    throw new Error("Missing research plan for validation");
  }

  const coveragePoints = [
    ...state.requirement.core_sections,
    ...state.requirement.key_angles,
    state.requirement.seo.primary_keyword,
  ];

  const uniqueCandidates: string[] = [];
  const rejected: RejectedQuery[] = [];

  // First pass: remove obviously weak or near-duplicate queries before scoring.
  for (const rawQuery of state.research_plan.queries) {
    const query = normalizeWhitespace(rawQuery);
    if (!query) {
      continue;
    }

    if (isTooVague(query)) {
      rejected.push({ query, reason: "Query is too vague" });
      continue;
    }

    const isDuplicate = uniqueCandidates.some(
      (existing) => tokenOverlapRatio(existing, query) >= 0.8,
    );
    if (isDuplicate) {
      rejected.push({ query, reason: "Duplicate or near-duplicate query" });
      continue;
    }

    uniqueCandidates.push(query);
  }

  const scored = uniqueCandidates
    .map((query) => ({
      query,
      score: scoreCoverage(query, coveragePoints),
    }))
    .sort((a, b) => b.score - a.score);

  const approvedQueries = scored
    .slice(0, MAX_TAVILY_CALLS_PER_REQUEST)
    .map((entry) => entry.query);

  // Remaining queries are explicitly rejected to make budget decisions visible in run status.
  const droppedForBudget = scored
    .slice(MAX_TAVILY_CALLS_PER_REQUEST)
    .map((entry) => ({
      query: entry.query,
      reason: "Dropped due to Tavily budget cap",
    }));

  rejected.push(...droppedForBudget);

  const issues: string[] = [];
  if (approvedQueries.length === 0) {
    issues.push("No approved queries after validation");
  }
  if (approvedQueries.length < Math.min(3, coveragePoints.length)) {
    issues.push("Approved query count may not fully cover all required points");
  }

  return {
    approved_queries: approvedQueries,
    rejected_queries: rejected,
    research_plan_validation: {
      within_budget: approvedQueries.length <= MAX_TAVILY_CALLS_PER_REQUEST,
      estimated_calls: approvedQueries.length,
      approved_queries: approvedQueries,
      rejected_queries: rejected,
      issues,
    },
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default researchPlanValidatorAgent;
