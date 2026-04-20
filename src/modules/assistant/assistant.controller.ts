import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/index.js";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { DeepPayrollAnswerSchema } from "./assistant.schema.js";
import {
  generateDeepPayrollAnswer,
  needsDeepPayrollSearch,
} from "./assistant.service.js";

export async function classifyDeepSearchNeed(
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> {
  const message = typeof req.body?.message === "string" ? req.body.message : "";

  if (!message.trim()) {
    sendError(res, "Message is required", 400);
    return;
  }

  sendSuccess(
    res,
    {
      deepSearchRequired: needsDeepPayrollSearch(message),
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
