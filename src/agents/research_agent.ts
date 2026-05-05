import { GraphNode } from "@langchain/langgraph";
import {
  getCachedByQuery,
  normalizeQuery,
  upsertQueryResults,
} from "../modules/blog/research-cache.js";
import {
  MAX_RESULTS_PER_QUERY,
  MAX_TAVILY_CALLS_PER_REQUEST,
} from "../modules/blog/research.constants.js";
import {
  ResearchResultSchema,
  type ResearchResult,
  type SearchHit,
} from "../types/blog/research.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { config } from "../config/index.js";
import { tavilyClient } from "../providers/tavily.js";
import { logger } from "../utils/logger.js";

type SearchStrategy = "base" | "expanded" | "intent_focused";

function toSearchQuery(
  baseQuery: string,
  strategy: SearchStrategy,
  requirement: NonNullable<
    ReturnType<typeof BlogAgentStateSchema.parse>["requirement"]
  >,
): string {
  if (strategy === "base") {
    return baseQuery;
  }

  if (strategy === "expanded") {
    return `${baseQuery} ${requirement.refined_topic} ${requirement.seo.primary_keyword}`;
  }

  return `${baseQuery} ${requirement.seo.search_intent} ${requirement.audience.persona} latest`;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function extractPointFromSnippet(snippet: string, title: string): string {
  const cleanedSnippet = normalizeWhitespace(snippet);
  if (!cleanedSnippet) {
    return normalizeWhitespace(title);
  }

  const sentence = cleanedSnippet
    .split(/[.!?]/)
    .find((part) => part.trim().length > 40);
  if (sentence) {
    return sentence.trim();
  }

  return cleanedSnippet.length > 260
    ? `${cleanedSnippet.slice(0, 257)}...`
    : cleanedSnippet;
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

function mergeResults(results: ResearchResult[]): ResearchResult[] {
  const merged = new Map<string, ResearchResult>();

  for (const result of results) {
    const key = `${normalizeUrl(result.url)}::${result.query.toLowerCase()}`;
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, result);
      continue;
    }

    const pick = result.confidence >= existing.confidence ? result : existing;
    merged.set(key, pick);
  }

  return [...merged.values()];
}

function tokenize(value: string): string[] {
  return normalizeWhitespace(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(" ")
    .filter((token) => token.length >= 3);
}

function coversPoint(point: string, corpus: string): boolean {
  const pointLower = point.toLowerCase();
  if (corpus.includes(pointLower)) {
    return true;
  }

  const tokens = tokenize(point);
  if (tokens.length === 0) {
    return false;
  }

  let matched = 0;
  for (const token of tokens) {
    if (corpus.includes(token)) {
      matched += 1;
    }
  }

  return matched / tokens.length >= 0.6;
}

async function searchWeb(
  query: string,
  strategy: SearchStrategy,
  requirement: NonNullable<
    ReturnType<typeof BlogAgentStateSchema.parse>["requirement"]
  >,
): Promise<SearchHit[]> {
  const searchQuery = toSearchQuery(query, strategy, requirement);

  const payload = await tavilyClient.search(searchQuery, {
    searchDepth: "advanced",
    maxResults: MAX_RESULTS_PER_QUERY,
    includeAnswer: false,
    includeRawContent: false,
    topic: "general",
    timeout: 15000,
  });

  const results = payload.results ?? [];

  return results
    .filter((item) => typeof item.title === "string" && typeof item.url === "string")
    .map((item) => ({
      query,
      source: "web" as const,
      title: normalizeWhitespace(item.title ?? "Untitled"),
      url: item.url ?? "",
      snippet: normalizeWhitespace(item.content ?? ""),
      score:
        typeof item.score === "number" && item.score >= 0 && item.score <= 1
          ? item.score
          : undefined,
    }));
}

function validateCoverage(
  requirement: NonNullable<
    ReturnType<typeof BlogAgentStateSchema.parse>["requirement"]
  >,
  results: ResearchResult[],
) {
  const coveragePoints = [
    ...requirement.core_sections,
    ...requirement.key_angles,
    requirement.seo.primary_keyword,
  ];

  const corpus = results
    .map((result) =>
      `${result.title} ${result.snippet} ${result.extracted_point}`.toLowerCase(),
    )
    .join(" ");

  const coveredPoints: string[] = [];
  const missingPoints: string[] = [];

  for (const point of coveragePoints) {
    if (coversPoint(point, corpus)) {
      coveredPoints.push(point);
    } else {
      missingPoints.push(point);
    }
  }

  const coverageScore =
    coveragePoints.length === 0 ? 0 : coveredPoints.length / coveragePoints.length;

  const issues: string[] = [];
  if (results.length < Math.max(3, Math.floor(requirement.core_sections.length / 2))) {
    issues.push("Insufficient research evidence count");
  }
  if (missingPoints.length > 0) {
    issues.push("Missing coverage for important sections or angles");
  }

  const valid = coverageScore >= 0.65 && missingPoints.length <= 2;

  return {
    valid,
    coverage_score: Number(coverageScore.toFixed(2)),
    covered_points: coveredPoints,
    missing_points: missingPoints,
    issues,
  };
}

const strategies: SearchStrategy[] = ["base", "expanded", "intent_focused"];

const researchAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  if (!state.requirement) {
    throw new Error("Missing requirement for research retrieval");
  }

  const approvedQueries = state.approved_queries ?? state.research_plan?.queries ?? [];
  if (approvedQueries.length === 0) {
    throw new Error("No approved queries available for research retrieval");
  }

  const aggregatedResults: ResearchResult[] = [];
  let finalValidation = {
    valid: false,
    coverage_score: 0,
    covered_points: [] as string[],
    missing_points: [...state.requirement.core_sections, ...state.requirement.key_angles],
    issues: ["Research was not executed"],
  };

  let tavilyCallsUsed = 0;
  let cacheHits = 0;
  let cacheMisses = 0;
  const cacheEnabled = config.BLOG_RESEARCH_CACHE_ENABLED;

  // Multi-round strategy allows broader reformulations while still honoring the global budget cap.
  for (let round = 0; round < strategies.length; round += 1) {
    const strategy = strategies[round] ?? "intent_focused";

    logger.info("Research retrieval round started", {
      round: round + 1,
      strategy,
      queries: approvedQueries.length,
      tavilyCallsUsed,
    });

    const roundResults: ResearchResult[] = [];

    for (const query of approvedQueries) {
      const normalizedQuery = normalizeQuery(query);
      const cached = cacheEnabled
        ? await getCachedByQuery(normalizedQuery)
        : { fresh: [], stale: [] };

      // Fresh cache is always preferred over network calls.
      if (cacheEnabled && cached.fresh.length > 0) {
        roundResults.push(...cached.fresh);
        cacheHits += 1;
        continue;
      }

      if (cacheEnabled) {
        cacheMisses += 1;
      }

      // Hard cap on paid web calls. If exhausted, only stale fallback may still be used.
      if (tavilyCallsUsed >= MAX_TAVILY_CALLS_PER_REQUEST) {
        if (cacheEnabled && cached.stale.length > 0) {
          roundResults.push(...cached.stale);
          cacheHits += 1;
        }
        continue;
      }

      try {
        tavilyCallsUsed += 1;
        const hits = await searchWeb(query, strategy, state.requirement);

        const freshWebResults: ResearchResult[] = [];
        for (const hit of hits) {
          const extracted: ResearchResult = {
            query: hit.query,
            source: hit.source,
            title: hit.title,
            url: hit.url,
            snippet: hit.snippet,
            extracted_point: extractPointFromSnippet(hit.snippet, hit.title),
            confidence: hit.score ?? 0.55,
            origin: "web",
            fetched_at: new Date().toISOString(),
          };

          const parsed = ResearchResultSchema.safeParse(extracted);
          if (parsed.success) {
            freshWebResults.push(parsed.data);
          }
        }

        roundResults.push(...freshWebResults);

        // Persist Tavily responses so future identical queries can be served from Pinecone.
        if (cacheEnabled) {
          await upsertQueryResults(normalizedQuery, freshWebResults);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        logger.warn("Research query failed", {
          query,
          strategy,
          error: message,
        });

        // If Tavily fails, stale cache is allowed as an explicit fallback path.
        if (cacheEnabled && cached.stale.length > 0) {
          roundResults.push(...cached.stale);
          cacheHits += 1;
        }
      }
    }

    aggregatedResults.push(...roundResults);
    const merged = mergeResults(aggregatedResults);
    finalValidation = validateCoverage(state.requirement, merged);

    logger.info("Research retrieval round completed", {
      round: round + 1,
      strategy,
      roundResultCount: roundResults.length,
      totalResultCount: merged.length,
      valid: finalValidation.valid,
      coverageScore: finalValidation.coverage_score,
      missingPoints: finalValidation.missing_points.length,
      tavilyCallsUsed,
      cacheHits,
      cacheMisses,
    });

    if (finalValidation.valid) {
      return {
        research_results: merged,
        research_validation: finalValidation,
        research_status: "valid" as const,
        tavily_calls_used: tavilyCallsUsed,
        cache_hits: cacheHits,
        cache_misses: cacheMisses,
        iteration_count: (state.iteration_count ?? 0) + 1,
      };
    }

    if (tavilyCallsUsed >= MAX_TAVILY_CALLS_PER_REQUEST) {
      break;
    }
  }

  const merged = mergeResults(aggregatedResults);
  if (merged.length === 0) {
    return {
      research_results: [],
      research_validation: {
        ...finalValidation,
        issues: [...finalValidation.issues, "No usable research results were found"],
      },
      research_status: "failed" as const,
      tavily_calls_used: tavilyCallsUsed,
      cache_hits: cacheHits,
      cache_misses: cacheMisses,
      iteration_count: (state.iteration_count ?? 0) + 1,
    };
  }

  return {
    research_results: merged,
    research_validation: finalValidation,
    research_status: "partial" as const,
    tavily_calls_used: tavilyCallsUsed,
    cache_hits: cacheHits,
    cache_misses: cacheMisses,
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default researchAgent;
