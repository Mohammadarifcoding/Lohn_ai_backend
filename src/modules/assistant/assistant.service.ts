import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { models } from "../../providers/models.js";
import { tavilyClient } from "../../providers/tavily.js";
import type { DeepPayrollAnswerInput } from "./assistant.schema.js";

type SearchDocument = {
  title: string;
  url: string;
  snippet: string;
  score?: number;
};

const MAX_SEARCH_RESULTS = 5;
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

function buildDeepInstructions(locale: "en" | "de") {
  if (locale === "de") {
    return [
      "Du bist der LohnAI Payroll Guide fuer Deutschland.",
      "Nutze die bereitgestellten Suchquellen, um eine praezise, aktuelle Antwort zu geben.",
      "Wenn Informationen unsicher oder widerspruechlich sind, sage das klar und nenne die Unsicherheit.",
      "Antwortstil: 2 bis 5 Saetze, klar und praktisch, keine Markdown-Listen.",
      "Nenne am Ende kurz: 'Stand: <Datum>' und 1-3 Quellen-URLs.",
      "Keine Rechts- oder Steuerberatung behaupten.",
    ].join("\n");
  }

  return [
    "You are the LohnAI Payroll Guide focused on Germany payroll.",
    "Use the provided web sources to give a precise and current answer.",
    "If information is uncertain or conflicting, clearly state uncertainty.",
    "Response style: 2 to 5 concise practical sentences, no markdown lists.",
    "End with: 'As of: <date>' and include 1-3 source URLs.",
    "Do not claim legal or tax advice.",
  ].join("\n");
}

function buildDeepInput(input: DeepPayrollAnswerInput, docs: SearchDocument[]): string {
  const sources = docs
    .map(
      (doc, index) =>
        `Source ${index + 1}: ${doc.title}\nURL: ${doc.url}\nSnippet: ${doc.snippet}`,
    )
    .join("\n\n");

  const history = input.history
    .slice(-6)
    .map((item) => `${item.role === "assistant" ? "Assistant" : "User"}: ${item.content}`)
    .join("\n");

  return [
    sources ? `Web sources:\n${sources}` : "Web sources: none",
    history ? `Conversation context:\n${history}` : "",
    `User question: ${input.message}`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

export async function generateDeepPayrollAnswer(input: DeepPayrollAnswerInput): Promise<{
  answer: string;
  sources: Array<{ title: string; url: string }>;
  searched: boolean;
}> {
  const docs = await fetchPayrollSearchDocuments(input);
  const result = await models.gpt4oMini.invoke([
    new SystemMessage(buildDeepInstructions(input.locale)),
    new HumanMessage(buildDeepInput(input, docs)),
  ]);

  const answer = typeof result.content === "string" ? result.content.trim() : "";
  if (!answer) {
    throw new Error("Deep payroll answer is empty");
  }

  return {
    answer,
    sources: docs.slice(0, 3).map((doc) => ({ title: doc.title, url: doc.url })),
    searched: docs.length > 0,
  };
}
