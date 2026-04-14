export type BlogRunStatus = "processing" | "completed" | "failed";

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
      requirement: data.requirement,
      research_plan: data.research_plan,
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
