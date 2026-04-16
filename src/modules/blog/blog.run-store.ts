export type BlogRunStatus = "processing" | "completed" | "failed";

// In-memory run store for async workflow tracking. Records are intentionally ephemeral
// and swept periodically to prevent unbounded memory growth.
const RUN_TTL_MS = 24 * 60 * 60 * 1000;
const SWEEP_INTERVAL_MS = 30 * 60 * 1000;

interface BlogRunRecord {
  requestId: string;
  userId?: string;
  status: BlogRunStatus;
  createdAt: string;
  updatedAt: string;
  durationMs?: number;
  error?: string;
  output?: {
    requirement?: unknown;
    research_plan?: unknown;
    research_plan_validation?: unknown;
    approved_queries?: unknown;
    rejected_queries?: unknown;
    research_results?: unknown;
    research_validation?: unknown;
    research_status?: unknown;
    ideas?: unknown;
    drafts?: unknown;
    evaluations?: unknown;
    final_evaluation?: unknown;
    selected_drafts?: unknown;
    final_blog?: string;
    tavily_calls_used?: number;
    cache_hits?: number;
    cache_misses?: number;
    iteration_count?: number;
  };
}

const runs = new Map<string, BlogRunRecord>();

function sweepExpiredRuns(): void {
  const now = Date.now();

  for (const [requestId, record] of runs.entries()) {
    const lastUpdated = new Date(record.updatedAt).getTime();
    if (Number.isNaN(lastUpdated)) {
      runs.delete(requestId);
      continue;
    }

    if (now - lastUpdated > RUN_TTL_MS) {
      runs.delete(requestId);
    }
  }
}

const sweepTimer = setInterval(sweepExpiredRuns, SWEEP_INTERVAL_MS);
sweepTimer.unref();

export function createRunRecord(requestId: string, userId?: string): void {
  sweepExpiredRuns();
  const now = new Date().toISOString();
  runs.set(requestId, {
    requestId,
    userId,
    status: "processing",
    createdAt: now,
    updatedAt: now,
  });
}

export function completeRunRecord(
  requestId: string,
  data: {
    durationMs: number;
    requirement?: unknown;
    research_plan?: unknown;
    research_plan_validation?: unknown;
    approved_queries?: unknown;
    rejected_queries?: unknown;
    research_results?: unknown;
    research_validation?: unknown;
    research_status?: unknown;
    ideas?: unknown;
    drafts?: unknown;
    evaluations?: unknown;
    final_evaluation?: unknown;
    selected_drafts?: unknown;
    final_blog?: string;
    tavily_calls_used?: number;
    cache_hits?: number;
    cache_misses?: number;
    iteration_count?: number;
  }
): void {
  sweepExpiredRuns();
  const existing = runs.get(requestId);
  if (!existing) {
    return;
  }

  runs.set(requestId, {
    ...existing,
    status: "completed",
    updatedAt: new Date().toISOString(),
    durationMs: data.durationMs,
    output: {
      // Persist the research-stage output snapshot for status polling and debugging.
      requirement: data.requirement,
      research_plan: data.research_plan,
      research_plan_validation: data.research_plan_validation,
      approved_queries: data.approved_queries,
      rejected_queries: data.rejected_queries,
      research_results: data.research_results,
      research_validation: data.research_validation,
      research_status: data.research_status,
      ideas: data.ideas,
      drafts: data.drafts,
      evaluations: data.evaluations,
      final_evaluation: data.final_evaluation,
      selected_drafts: data.selected_drafts,
      final_blog: data.final_blog,
      tavily_calls_used: data.tavily_calls_used,
      cache_hits: data.cache_hits,
      cache_misses: data.cache_misses,
      iteration_count: data.iteration_count,
    },
  });
}

export function failRunRecord(
  requestId: string,
  data: { durationMs: number; error: string }
): void {
  sweepExpiredRuns();
  const existing = runs.get(requestId);
  if (!existing) {
    return;
  }

  runs.set(requestId, {
    ...existing,
    status: "failed",
    updatedAt: new Date().toISOString(),
    durationMs: data.durationMs,
    error: data.error,
  });
}

export function getRunRecord(requestId: string): BlogRunRecord | undefined {
  sweepExpiredRuns();
  return runs.get(requestId);
}
