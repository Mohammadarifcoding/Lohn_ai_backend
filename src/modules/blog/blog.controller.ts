import { randomUUID } from "node:crypto";
import type { NextFunction, Response } from "express";
import { z } from "zod";
import { BlogInputSchema } from "../../types/blog/blog.js";
import type { AuthenticatedRequest } from "../../types/index.js";
import { BadRequestError, NotFoundError } from "../../utils/appError.js";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import {
  createRunRecord,
  getRunRecord,
  selectDraftForRunRecord,
} from "./blog.run-store.js";
import {
  getPersistedRunSnapshot,
  selectPersistedDraftForRun,
} from "./blog.persistence.js";
import { polishDraftContent, runGenerateBlogInBackground } from "./blog.service.js";

const BlogPolishInputSchema = z.object({
  content: z.string().trim().min(1, "content is required"),
  strictStructure: z.boolean().optional(),
});

function getStringParam(param: string | string[] | undefined, label: string): string {
  const value = Array.isArray(param) ? param[0] : param;
  if (!value) {
    throw new BadRequestError(`Missing ${label}`);
  }
  return value;
}

function parseDraftIndex(input: unknown): number {
  const asNumber =
    typeof input === "number"
      ? input
      : typeof input === "string"
        ? Number.parseInt(input, 10)
        : Number.NaN;

  if (!Number.isInteger(asNumber) || asNumber < 0) {
    throw new BadRequestError("draftIndex must be a non-negative integer");
  }

  return asNumber;
}

function parseOptionalFinalBlogOverride(input: unknown): string | undefined {
  if (typeof input !== "string") {
    return undefined;
  }

  const value = input.trim();
  if (!value) {
    return undefined;
  }

  return value;
}

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
  const requestId = getStringParam(req.params.requestId, "requestId");

  let record = getRunRecord(requestId);
  if (!record) {
    const persisted = await getPersistedRunSnapshot(requestId);
    if (persisted) {
      record = persisted;
    }
  }

  if (!record) {
    next(new NotFoundError("Run not found"));
    return;
  }

  sendSuccess(res, record, "Run status retrieved");
}

export async function selectDraftForRun(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const requestId = getStringParam(req.params.requestId, "requestId");

  const body = req.body as {
    draftIndex?: unknown;
    finalBlogOverride?: unknown;
  };
  const draftIndex = parseDraftIndex(body.draftIndex);
  const finalBlogOverride = parseOptionalFinalBlogOverride(body.finalBlogOverride);

  try {
    const persisted = await selectPersistedDraftForRun({
      requestId,
      draftIndex,
      finalBlogOverride,
    });

    selectDraftForRunRecord(requestId, draftIndex, finalBlogOverride);

    sendSuccess(
      res,
      {
        requestId: persisted.requestId,
        status: persisted.status,
        workflowStatus: persisted.workflowStatus,
        selectedDraftIndex: persisted.selectedDraftIndex,
        finalBlog: persisted.finalBlog,
      },
      "Draft selected successfully",
    );
  } catch (error) {
    if (error instanceof Error && error.message === "Run not found") {
      next(new NotFoundError("Run not found"));
      return;
    }

    if (error instanceof Error && error.message === "Draft not found") {
      next(new BadRequestError("Invalid draftIndex for this run"));
      return;
    }

    next(error);
  }
}

export async function polishDraft(
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> {
  const parsed = BlogPolishInputSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    sendError(res, "Validation failed", 400, errors);
    return;
  }

  const result = await polishDraftContent(parsed.data.content, {
    strictStructure: parsed.data.strictStructure,
  });

  sendSuccess(
    res,
    result,
    "Draft polish completed",
  );
}
