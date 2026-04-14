import { randomUUID } from "node:crypto";
import type { NextFunction, Response } from "express";
import { BlogInputSchema } from "../../types/blog/blog.js";
import type { AuthenticatedRequest } from "../../types/index.js";
import { NotFoundError } from "../../utils/appError.js";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { createRunRecord, getRunRecord } from "./blog.run-store.js";
import { runGenerateBlogInBackground } from "./blog.service.js";

export async function generateBlog(
  req: AuthenticatedRequest,
  res: Response
): Promise<void> {
  const parsed = BlogInputSchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    sendError(res, "Validation failed", 400, errors);
    return;
  }

  const requestId = randomUUID();
  createRunRecord(requestId, req.user?.id);

  void runGenerateBlogInBackground(requestId, parsed.data, req.user?.id);

  sendSuccess(
    res,
    {
      requestId,
      status: "processing",
    },
    "Blog generation started",
    202
  );
}

export async function getGenerateStatus(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const requestId = Array.isArray(req.params.requestId)
    ? req.params.requestId[0]
    : req.params.requestId;

  if (!requestId) {
    sendError(res, "Missing requestId", 400);
    return;
  }

  const record = getRunRecord(requestId);
  if (!record) {
    next(new NotFoundError("Run not found"));
    return;
  }

  sendSuccess(res, record, "Run status retrieved");
}
