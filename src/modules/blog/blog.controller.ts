import { randomUUID } from "node:crypto";
import type { NextFunction, Response } from "express";
import { z } from "zod";
import { BlogInputSchema } from "../../types/blog/blog.js";
import type { AuthenticatedRequest } from "../../types/index.js";
import { BadRequestError, NotFoundError } from "../../utils/appError.js";
import { sendError, sendSuccess } from "../../utils/apiResponse.js";
import { selectDraftForRunRecord } from "./blog.run-store.js";
import {
  createQueuedRun,
  getPersistedRunMeta,
  getPersistedRunSnapshot,
  incrementRunRetryAndMarkRetrying,
  isRunStale,
  markRunRetryingManual,
  markRunStalled,
  selectPersistedDraftForRun,
  updateQueuedRunTriggerId,
} from "./blog.persistence.js";
import { polishDraftContent, runGenerateBlogInBackground } from "./blog.service.js";
import { translateBlogMdxToEnglish } from "./blog.translate.js";
import { enqueueBlogGenerateTask, enqueueBlogTranslateTask } from "../../trigger/enqueue.js";
import { runBlogGenerateTask } from "../../trigger/blog-generate.task.js";
import { runBlogTranslateTask } from "../../trigger/blog-translate.task.js";
import { logger } from "../../utils/logger.js";

const BlogPolishInputSchema = z.object({
  content: z.string().trim().min(1, "content is required"),
  strictStructure: z.boolean().optional(),
});

const BlogTranslateInputSchema = z.object({
  content: z.string().trim().min(1, "content is required"),
});

const BlogTranslateBackgroundInputSchema = z.object({
  briefId: z.string().trim().min(1, "briefId is required"),
  germanSlug: z.string().trim().min(1, "germanSlug is required"),
  germanMdxContent: z.string().trim().min(1, "germanMdxContent is required"),
  fallbackTitle: z.string().trim().min(1, "fallbackTitle is required"),
  fallbackCategory: z.string().trim().min(1, "fallbackCategory is required"),
  fallbackTopic: z.string().trim().min(1, "fallbackTopic is required"),
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
  let triggerRunId: string | undefined;

  await createQueuedRun({
    requestId,
    userId: req.user?.id,
    topic: parsed.data.topic,
    inputPayload: parsed.data,
  });

  try {
    const enqueueResult = await enqueueBlogGenerateTask({
      requestId,
      userId: req.user?.id,
      input: parsed.data,
    });
    triggerRunId = enqueueResult.triggerRunId;

    if (triggerRunId) {
      await updateQueuedRunTriggerId({
        requestId,
        triggerRunId,
      });
    }
  } catch (error) {
    logger.warn("Blog generation enqueue failed; falling back to direct execution", {
      requestId,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    triggerRunId = undefined;
  }

  if (!triggerRunId) {
    void runBlogGenerateTask({
      requestId,
      userId: req.user?.id,
      input: parsed.data,
    }).catch(() => runGenerateBlogInBackground(requestId, parsed.data, req.user?.id));
  }

  sendSuccess(
    res,
    {
      requestId,
      status: "queued",
      triggerRunId,
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

  const meta = await getPersistedRunMeta(requestId);

  if (meta && (meta.status === "processing" || meta.status === "retrying") && isRunStale(meta.heartbeatAt)) {
    await markRunStalled(requestId);

    if (meta.retryCount < 1 && meta.inputPayload) {
      const retried = await incrementRunRetryAndMarkRetrying(requestId);

      if (retried?.inputPayload) {
        try {
          const retryEnqueue = await enqueueBlogGenerateTask({
            requestId,
            userId: retried.userId,
            input: retried.inputPayload,
          });

          if (retryEnqueue.triggerRunId) {
            await updateQueuedRunTriggerId({
              requestId,
              triggerRunId: retryEnqueue.triggerRunId,
            });
          }

          if (!retryEnqueue.triggerRunId) {
            void runBlogGenerateTask({
              requestId,
              userId: retried.userId,
              input: retried.inputPayload,
            });
          }
        } catch (error) {
          logger.warn("Blog generation stalled retry enqueue failed; falling back to direct execution", {
            requestId,
            error: error instanceof Error ? error.message : "Unknown error",
          });
          void runBlogGenerateTask({
            requestId,
            userId: retried.userId,
            input: retried.inputPayload,
          });
        }
      }
    }
  }

  const persisted = await getPersistedRunSnapshot(requestId);
  if (!persisted) {
    next(new NotFoundError("Run not found"));
    return;
  }

  sendSuccess(res, persisted, "Run status retrieved");
}

export async function retryGenerateRun(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const requestId = getStringParam(req.params.requestId, "requestId");

  const meta = await getPersistedRunMeta(requestId);
  if (!meta) {
    next(new NotFoundError("Run not found"));
    return;
  }

  if (meta.status !== "failed" && meta.status !== "stalled") {
    next(new BadRequestError("Only failed or stalled runs can be retried"));
    return;
  }

  if (!meta.inputPayload) {
    next(new BadRequestError("Missing original workflow input for retry"));
    return;
  }

  const retried = await markRunRetryingManual(requestId);
  if (!retried?.inputPayload) {
    next(new BadRequestError("Missing original workflow input for retry"));
    return;
  }

  try {
    const enqueueResult = await enqueueBlogGenerateTask({
      requestId,
      userId: retried.userId,
      input: retried.inputPayload,
    });

    if (enqueueResult.triggerRunId) {
      await updateQueuedRunTriggerId({
        requestId,
        triggerRunId: enqueueResult.triggerRunId,
      });
    }

    if (!enqueueResult.triggerRunId) {
      void runBlogGenerateTask({
        requestId,
        userId: retried.userId,
        input: retried.inputPayload,
      });
    }
  } catch (error) {
    logger.warn("Blog generation retry enqueue failed; falling back to direct execution", {
      requestId,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    void runBlogGenerateTask({
      requestId,
      userId: retried.userId,
      input: retried.inputPayload,
    });
  }

  sendSuccess(
    res,
    {
      requestId,
      status: "retrying",
    },
    "Run retry started",
  );
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

export async function translateBlog(
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> {
  const parsed = BlogTranslateInputSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    sendError(res, "Validation failed", 400, errors);
    return;
  }

  const translatedContent = await translateBlogMdxToEnglish(parsed.data.content);

  sendSuccess(
    res,
    { translatedContent },
    "Blog translation completed",
  );
}

export async function translateBlogInBackground(
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> {
  const parsed = BlogTranslateBackgroundInputSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    sendError(res, "Validation failed", 400, errors);
    return;
  }

  let triggerRunId: string | undefined;

  try {
    const enqueueResult = await enqueueBlogTranslateTask(parsed.data);
    triggerRunId = enqueueResult.triggerRunId;
  } catch (error) {
    logger.warn("Blog translation enqueue failed; falling back to direct execution", {
      briefId: parsed.data.briefId,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    triggerRunId = undefined;
  }

  if (!triggerRunId) {
    void runBlogTranslateTask(parsed.data).catch((error) => {
      logger.error("Direct blog translation execution failed", {
        briefId: parsed.data.briefId,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    });
  }

  sendSuccess(
    res,
    {
      status: "queued",
      triggerRunId,
    },
    "Blog translation queued",
    202,
  );
}
