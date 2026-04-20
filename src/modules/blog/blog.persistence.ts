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
  finalPolishApplied?: boolean;
  finalPolishWarning?: string;
  finalBlog?: string;
  error?: string;
}

interface SelectDraftParams {
  requestId: string;
  draftIndex: number;
  finalBlogOverride?: string;
}

export interface PersistedRunSnapshot {
  requestId: string;
  userId?: string;
  status: "processing" | "completed" | "failed";
  createdAt: string;
  updatedAt: string;
  durationMs?: number;
  error?: string;
  output?: {
    drafts?: Draft[];
    evaluations?: Evaluation[];
    final_evaluation?: {
      workflow_status: string;
      selected_draft_index?: number;
    };
    selected_drafts?: Draft[];
    final_blog?: string;
    final_polish_applied?: boolean;
    final_polish_warning?: string;
    iteration_count?: number;
  };
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
        finalPolishApplied: params.finalPolishApplied,
        finalPolishWarning: params.finalPolishWarning,
        workflowStatus: params.workflowStatus,
        error: params.error,
        completedAt: params.status === "completed" ? new Date() : undefined,
      },
      create: {
        requestId: params.requestId,
        user: params.userId
          ? {
              connect: {
                id: params.userId,
              },
            }
          : undefined,
        topic: params.topic,
        status: params.status,
        durationMs: params.durationMs,
        iterationCount: params.iterationCount,
        selectedDraftIndex: params.selectedDraftIndex,
        finalBlog: params.finalBlog,
        finalPolishApplied: params.finalPolishApplied,
        finalPolishWarning: params.finalPolishWarning,
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

export async function selectPersistedDraftForRun(
  params: SelectDraftParams,
): Promise<{
  requestId: string;
  status: string;
  workflowStatus: string | null;
  selectedDraftIndex: number | null;
  finalBlog: string | null;
}> {
  const run = await withDbRetry(() =>
    prisma.blogGenerationRun.findUnique({
      where: {
        requestId: params.requestId,
      },
      select: {
        id: true,
        requestId: true,
        status: true,
        workflowStatus: true,
      },
    }),
  );

  if (!run) {
    throw new Error("Run not found");
  }

  const draft = await withDbRetry(() =>
    prisma.blogDraft.findUnique({
      where: {
        runId_draftIndex: {
          runId: run.id,
          draftIndex: params.draftIndex,
        },
      },
      select: {
        content: true,
      },
    }),
  );

  if (!draft) {
    throw new Error("Draft not found");
  }

  const updatedRun = await withDbRetry(() =>
    prisma.blogGenerationRun.update({
      where: {
        id: run.id,
      },
      data: {
        selectedDraftIndex: params.draftIndex,
        finalBlog: params.finalBlogOverride ?? draft.content,
      },
      select: {
        requestId: true,
        status: true,
        workflowStatus: true,
        selectedDraftIndex: true,
        finalBlog: true,
      },
    }),
  );

  return updatedRun;
}

export async function getPersistedRunSnapshot(
  requestId: string,
): Promise<PersistedRunSnapshot | undefined> {
  const run = await withDbRetry(() =>
    prisma.blogGenerationRun.findUnique({
      where: { requestId },
      select: {
        requestId: true,
        userId: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        durationMs: true,
        error: true,
        iterationCount: true,
        workflowStatus: true,
        finalPolishApplied: true,
        finalPolishWarning: true,
        selectedDraftIndex: true,
        finalBlog: true,
        drafts: {
          orderBy: { draftIndex: "asc" },
          select: {
            draftIndex: true,
            ideaIndex: true,
            ideaTitle: true,
            mode: true,
            format: true,
            content: true,
            wordCountEstimate: true,
          },
        },
        evaluations: {
          orderBy: { draftIndex: "asc" },
          select: {
            draftIndex: true,
            score: true,
            approved: true,
            issues: true,
            improvements: true,
          },
        },
      },
    }),
  );

  if (!run) {
    return undefined;
  }

  const drafts: Draft[] = run.drafts.map((draft) => ({
    idea_index: draft.ideaIndex,
    idea_title: draft.ideaTitle,
    mode:
      draft.mode === "safe_assumption" ? "safe_assumption" : "research_backed",
    format: "mdx",
    content: draft.content,
    word_count_estimate: draft.wordCountEstimate,
  }));

  const evaluations: Evaluation[] = run.evaluations.map((evaluation) => ({
    draft_index: evaluation.draftIndex,
    score: evaluation.score,
    approved: evaluation.approved,
    issues: Array.isArray(evaluation.issues)
      ? evaluation.issues.map((issue) => String(issue))
      : [],
    improvements: Array.isArray(evaluation.improvements)
      ? evaluation.improvements.map((improvement) => String(improvement))
      : [],
  }));

  const selectedDraft =
    run.selectedDraftIndex !== null && run.selectedDraftIndex !== undefined
      ? drafts[run.selectedDraftIndex]
      : undefined;

  return {
    requestId: run.requestId,
    userId: run.userId ?? undefined,
    status:
      run.status === "completed" || run.status === "failed"
        ? run.status
        : "processing",
    createdAt: run.createdAt.toISOString(),
    updatedAt: run.updatedAt.toISOString(),
    durationMs: run.durationMs ?? undefined,
    error: run.error ?? undefined,
    output: {
      drafts,
      evaluations,
      final_evaluation: run.workflowStatus
        ? {
            workflow_status: run.workflowStatus,
            selected_draft_index: run.selectedDraftIndex ?? undefined,
          }
        : undefined,
      selected_drafts: selectedDraft ? [selectedDraft] : undefined,
      final_blog: run.finalBlog ?? undefined,
      final_polish_applied: run.finalPolishApplied ?? undefined,
      final_polish_warning: run.finalPolishWarning ?? undefined,
      iteration_count: run.iterationCount ?? undefined,
    },
  };
}
