import { prisma } from "../../config/database.js";
import type { Evaluation } from "../../types/blog/evaluation.js";
import type { Draft } from "../../types/blog/writing.js";

interface PersistRunParams {
  requestId: string;
  userId?: string;
  topic: string;
  status: "completed" | "failed";
  durationMs: number;
  iterationCount: number;
  drafts?: Draft[];
  evaluations?: Evaluation[];
  selectedDraftIndex?: number;
  workflowStatus?: string;
  finalBlog?: string;
  error?: string;
}

function isRetryableDbError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  const message = error.message.toLowerCase();
  return (
    message.includes("connection") ||
    message.includes("closed") ||
    message.includes("timeout") ||
    message.includes("p1001")
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function withDbRetry<T>(operation: () => Promise<T>): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!isRetryableDbError(error) || attempt === 2) {
        throw error;
      }

      await sleep(250 * (attempt + 1));
    }
  }

  throw lastError;
}

export async function persistBlogRun(params: PersistRunParams): Promise<void> {
  const run = await withDbRetry(() =>
    prisma.blogGenerationRun.upsert({
      where: {
        requestId: params.requestId,
      },
      update: {
        status: params.status,
        durationMs: params.durationMs,
        iterationCount: params.iterationCount,
        selectedDraftIndex: params.selectedDraftIndex,
        finalBlog: params.finalBlog,
        workflowStatus: params.workflowStatus,
        error: params.error,
        completedAt: params.status === "completed" ? new Date() : undefined,
      },
      create: {
        requestId: params.requestId,
        userId: params.userId,
        topic: params.topic,
        status: params.status,
        durationMs: params.durationMs,
        iterationCount: params.iterationCount,
        selectedDraftIndex: params.selectedDraftIndex,
        finalBlog: params.finalBlog,
        workflowStatus: params.workflowStatus,
        error: params.error,
        completedAt: params.status === "completed" ? new Date() : undefined,
      },
    }),
  );

  if (params.status !== "completed") {
    return;
  }

  if ((params.drafts?.length ?? 0) === 0) {
    return;
  }

  await withDbRetry(() => prisma.blogEvaluation.deleteMany({ where: { runId: run.id } }));
  await withDbRetry(() => prisma.blogDraft.deleteMany({ where: { runId: run.id } }));

  const draftIdByIndex = new Map<number, string>();
  for (let i = 0; i < (params.drafts?.length ?? 0); i += 1) {
    const draft = params.drafts![i];
    const created = await withDbRetry(() =>
      prisma.blogDraft.create({
        data: {
          runId: run.id,
          draftIndex: i,
          ideaIndex: draft.idea_index,
          ideaTitle: draft.idea_title,
          mode: draft.mode,
          format: draft.format,
          content: draft.content,
          wordCountEstimate: draft.word_count_estimate,
        },
      }),
    );

    draftIdByIndex.set(i, created.id);
  }

  for (const evaluation of params.evaluations ?? []) {
    const draftId = draftIdByIndex.get(evaluation.draft_index);
    if (!draftId) {
      continue;
    }

    await withDbRetry(() =>
      prisma.blogEvaluation.create({
        data: {
          runId: run.id,
          draftId,
          draftIndex: evaluation.draft_index,
          score: evaluation.score,
          approved: evaluation.approved,
          issues: evaluation.issues,
          improvements: evaluation.improvements,
        },
      }),
    );
  }
}
