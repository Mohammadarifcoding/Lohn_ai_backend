import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/index.js";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { DeepPayrollAnswerSchema } from "./assistant.schema.js";
import { generateDeepPayrollAnswer } from "./assistant.service.js";

export async function classifyDeepSearchNeed(
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> {
  const locale =
    typeof req.body?.locale === "string" && (req.body.locale === "en" || req.body.locale === "de")
      ? req.body.locale
      : "en";

  const history = Array.isArray(req.body?.history)
    ? req.body.history
        .filter(
          (item: unknown): item is { role: "user" | "assistant"; content: string } =>
            Boolean(item) &&
            typeof item === "object" &&
            item !== null &&
            "role" in item &&
            "content" in item &&
            (((item as { role?: unknown }).role === "user") ||
              (item as { role?: unknown }).role === "assistant") &&
            typeof (item as { content?: unknown }).content === "string",
        )
        .slice(-6)
    : [];

  const message = typeof req.body?.message === "string" ? req.body.message : "";

  if (!message.trim()) {
    sendError(res, "Message is required", 400);
    return;
  }

  const normalized = message.toLowerCase();
  const capabilityQuestion =
    normalized.includes("can it search") ||
    normalized.includes("can you search") ||
    normalized.includes("online search") ||
    normalized.includes("live internet") ||
    normalized.includes("kannst du suchen") ||
    normalized.includes("kann es suchen");

  const deepSignals = [
    "latest",
    "current",
    "as of",
    "deadline",
    "rate",
    "threshold",
    "regulation",
    "law",
    "elstam",
    "steuerklasse",
    "sozialversicherung",
    "minijob",
    "beitragssatz",
    "frist",
  ];

  const matchedSignals = deepSignals.filter((signal) => normalized.includes(signal));
  const recentHistoryHints = history
    .map((item: { role: "user" | "assistant"; content: string }) =>
      item.content.toLowerCase(),
    )
    .join(" ")
    .slice(-2000);

  const contextualSignal = deepSignals.some((signal) => recentHistoryHints.includes(signal));
  const confidence = Math.min(1, (matchedSignals.length * 0.22) + (contextualSignal ? 0.22 : 0));
  const deepSearchRequired = matchedSignals.length > 0 || confidence >= 0.35;

  sendSuccess(
    res,
    {
      deepSearchRequired,
      confidence,
      reason: capabilityQuestion
        ? "capability"
        : matchedSignals.length > 0
          ? "keyword"
          : contextualSignal
            ? "context"
            : "none",
      locale,
      matchedSignals,
    },
    "Deep search intent classified",
  );
}

export async function answerDeepPayroll(
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> {
  const parsed = DeepPayrollAnswerSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    sendError(res, "Validation failed", 400, errors);
    return;
  }

  const result = await generateDeepPayrollAnswer(parsed.data);

  sendSuccess(
    res,
    {
      answer: result.answer,
      sources: result.sources,
      searched: result.searched,
    },
    "Deep payroll answer generated",
  );
}
