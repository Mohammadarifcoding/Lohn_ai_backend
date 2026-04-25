import { tavilyClient } from "../../providers/tavily.js";
import type { DeepPayrollAnswerInput } from "./assistant.schema.js";

type SearchDocument = {
  title: string;
  url: string;
  snippet: string;
  score?: number;
};

const MAX_SEARCH_RESULTS = 5;
const MAX_RETURNED_SOURCES = 5;
const MAX_SNIPPETS = 4;
const MAX_SNIPPET_LENGTH = 280;
const TRUSTED_DOMAIN_HINTS = [
  "bundesfinanzministerium",
  "gesetze-im-internet",
  "bundesagentur-fuer-arbeit",
  "deutsche-rentenversicherung",
  "gkv-spitzenverband",
  "elster",
  "europa.eu",
  "haufe",
  "datev",
  "ihk",
];

const DEEP_KEYWORDS = [
  "latest",
  "current",
  "as of",
  "deadline",
  "rate",
  "threshold",
  "regulation",
  "law",
  "tax class",
  "social contribution",
  "elstam",
  "minijob",
  "steuerklasse",
  "beitragssatz",
  "fristen",
  "gesetz",
  "sozialversicherung",
  "lohnsteuer",
];

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function needsDeepPayrollSearch(message: string): boolean {
  const normalized = normalizeText(message);
  return DEEP_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function buildSearchQuery(locale: "en" | "de", message: string): string {
  if (locale === "de") {
    return `${message} Deutschland Lohnabrechnung aktuelle Regelung`; 
  }

  return `${message} Germany payroll latest regulation`;
}

function isTrustedSource(url: string): boolean {
  const normalizedUrl = url.toLowerCase();
  return TRUSTED_DOMAIN_HINTS.some((domain) => normalizedUrl.includes(domain));
}

async function fetchPayrollSearchDocuments(
  input: DeepPayrollAnswerInput,
): Promise<SearchDocument[]> {
  const query = buildSearchQuery(input.locale, input.message);

  const searchPayload = await tavilyClient.search(query, {
    searchDepth: "advanced",
    maxResults: MAX_SEARCH_RESULTS,
    includeAnswer: false,
    includeRawContent: false,
    topic: "general",
    timeout: 12000,
  });

  const rawResults = Array.isArray(searchPayload.results)
    ? searchPayload.results
    : [];

  const trusted = rawResults
    .filter((result) => typeof result.url === "string" && isTrustedSource(result.url))
    .slice(0, MAX_SEARCH_RESULTS);

  const fallback = rawResults
    .filter((result) => typeof result.url === "string")
    .slice(0, MAX_SEARCH_RESULTS);

  const selected = trusted.length > 0 ? trusted : fallback;

  return selected
    .filter(
      (item) => typeof item.title === "string" && typeof item.url === "string",
    )
    .map((item) => ({
      title: item.title ?? "Untitled",
      url: item.url ?? "",
      snippet: typeof item.content === "string" ? item.content : "",
      score: typeof item.score === "number" ? item.score : undefined,
    }));
}

function normalizeSnippet(snippet: string): string {
  return snippet
    .replace(/\s+/g, " ")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, MAX_SNIPPET_LENGTH);
}

function computeConfidence(docs: SearchDocument[]): number {
  if (docs.length === 0) {
    return 0;
  }

  const scores = docs
    .map((doc) => (typeof doc.score === "number" ? doc.score : 0.35))
    .slice(0, 3);

  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return Number(Math.max(0, Math.min(1, average)).toFixed(2));
}

export async function generateDeepPayrollContext(input: DeepPayrollAnswerInput): Promise<{
  query: string;
  snippets: string[];
  asOf: string;
  confidence: number;
  sources: Array<{ title: string; url: string }>;
  searched: boolean;
}> {
  const docs = await fetchPayrollSearchDocuments(input);

  const snippets = docs
    .map((doc) => normalizeSnippet(doc.snippet))
    .filter((snippet) => Boolean(snippet))
    .slice(0, MAX_SNIPPETS);

  const confidence = computeConfidence(docs);

  return {
    query: buildSearchQuery(input.locale, input.message),
    snippets,
    asOf: new Date().toISOString().slice(0, 10),
    confidence,
    sources: docs
      .slice(0, MAX_RETURNED_SOURCES)
      .map((doc) => ({ title: doc.title, url: doc.url })),
    searched: docs.length > 0,
  };
}
