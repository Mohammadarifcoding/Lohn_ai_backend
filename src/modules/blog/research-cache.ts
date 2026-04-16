import { createHash } from "node:crypto";
import type { PineconeRecord } from "@pinecone-database/pinecone";
import type { ResearchResult } from "../../types/blog/research.js";
import { researchEmbeddings } from "../../providers/embeddings.js";
import { getResearchNamespace } from "../../providers/pinecone.js";
import { logger } from "../../utils/logger.js";
import { RESEARCH_CACHE_FRESHNESS_DAYS } from "./research.constants.js";

interface CachedLookup {
  fresh: ResearchResult[];
  stale: ResearchResult[];
}

interface CachedMetadata {
  normalized_query: string;
  query: string;
  source: "web" | "docs" | "knowledge_base";
  title: string;
  url: string;
  snippet: string;
  extracted_point: string;
  confidence: number;
  inserted_at: string;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function normalizeQuery(query: string): string {
  return normalizeWhitespace(query).toLowerCase();
}

function daysBetween(earlierIso: string, now: Date): number {
  const earlier = new Date(earlierIso).getTime();
  if (Number.isNaN(earlier)) {
    return Number.POSITIVE_INFINITY;
  }

  const diffMs = Math.max(0, now.getTime() - earlier);
  return diffMs / (1000 * 60 * 60 * 24);
}

function toResearchResult(metadata: CachedMetadata, cacheAgeDays: number): ResearchResult {
  return {
    query: metadata.query,
    source: metadata.source,
    title: metadata.title,
    url: metadata.url,
    snippet: metadata.snippet,
    extracted_point: metadata.extracted_point,
    confidence: metadata.confidence,
    origin: cacheAgeDays <= RESEARCH_CACHE_FRESHNESS_DAYS ? "cache_fresh" : "cache_stale_fallback",
    fetched_at: metadata.inserted_at,
    cache_age_days: Number(cacheAgeDays.toFixed(2)),
  };
}

function isCachedMetadata(value: unknown): value is CachedMetadata {
  if (!value || typeof value !== "object") {
    return false;
  }

  const metadata = value as Record<string, unknown>;
  return (
    typeof metadata.normalized_query === "string" &&
    typeof metadata.query === "string" &&
    typeof metadata.source === "string" &&
    typeof metadata.title === "string" &&
    typeof metadata.url === "string" &&
    typeof metadata.snippet === "string" &&
    typeof metadata.extracted_point === "string" &&
    typeof metadata.confidence === "number" &&
    typeof metadata.inserted_at === "string"
  );
}

export async function getCachedByQuery(
  normalizedQuery: string,
  now: Date = new Date()
): Promise<CachedLookup> {
  try {
    const namespace = getResearchNamespace();
    const vector = await researchEmbeddings.embedQuery(normalizedQuery);

    // Query uses exact normalized_query filtering. Vector search is used for index lookup,
    // while exact matching keeps cache semantics deterministic for v1.
    const response = await namespace.query({
      vector,
      topK: 20,
      includeMetadata: true,
      filter: {
        normalized_query: { $eq: normalizedQuery },
      },
    });

    const fresh: ResearchResult[] = [];
    const stale: ResearchResult[] = [];

    for (const match of response.matches ?? []) {
      if (!isCachedMetadata(match.metadata)) {
        continue;
      }

      const cacheAgeDays = daysBetween(match.metadata.inserted_at, now);
      const result = toResearchResult(match.metadata, cacheAgeDays);

      if (cacheAgeDays <= RESEARCH_CACHE_FRESHNESS_DAYS) {
        fresh.push(result);
      } else {
        stale.push(result);
      }
    }

    return { fresh, stale };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown cache lookup error";
    logger.warn("Research cache lookup failed", {
      normalizedQuery,
      error: message,
    });
    return { fresh: [], stale: [] };
  }
}

function createRecordId(normalizedQuery: string, url: string): string {
  return createHash("sha256")
    .update(`${normalizedQuery}::${url}`)
    .digest("hex")
    .slice(0, 48);
}

export async function upsertQueryResults(
  normalizedQuery: string,
  results: ResearchResult[]
): Promise<void> {
  if (results.length === 0) {
    return;
  }

  try {
    const namespace = getResearchNamespace();
    const vectors: PineconeRecord[] = [];

    // Each URL for a normalized query gets a deterministic record id,
    // so repeated upserts update existing cache entries instead of duplicating them.
    for (const result of results) {
      const text = `${result.query}\n${result.title}\n${result.extracted_point}\n${result.snippet}`;
      const values = await researchEmbeddings.embedQuery(text);
      vectors.push({
        id: createRecordId(normalizedQuery, result.url),
        values,
        metadata: {
          normalized_query: normalizedQuery,
          query: result.query,
          source: result.source,
          title: result.title,
          url: result.url,
          snippet: result.snippet,
          extracted_point: result.extracted_point,
          confidence: result.confidence,
          inserted_at: new Date().toISOString(),
        },
      });
    }

    if (vectors.length > 0) {
      await namespace.upsert(vectors);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown cache upsert error";
    logger.warn("Research cache upsert failed", {
      normalizedQuery,
      count: results.length,
      error: message,
    });
  }
}
