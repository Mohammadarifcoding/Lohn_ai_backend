import type { BlogInput } from "../../types/blog/blog.js";
import { logger } from "../../utils/logger.js";
import { runGenerateBlogGraph } from "../../workflows/blog/generate.graph.js";
import {
  completeRunRecord,
  failRunRecord,
} from "./blog.run-store.js";
import { persistBlogRun } from "./blog.persistence.js";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown error";
}

export async function runGenerateBlogInBackground(
  requestId: string,
  userInput: BlogInput,
  userId?: string
): Promise<void> {
  const startedAt = Date.now();

  logger.info("Blog generation workflow started", {
    requestId,
    userId,
    topic: userInput.topic,
  });

  try {
    // Execute the workflow fully in background and persist a snapshot of key state
    // so clients can poll status without waiting on a long request.
    const state = await runGenerateBlogGraph(userInput);
    const durationMs = Date.now() - startedAt;

    const output = {
      requestId,
      userId,
      durationMs,
      requirement: state.requirement,
      research_plan: state.research_plan,
      research_plan_validation: state.research_plan_validation,
      approved_queries: state.approved_queries,
      rejected_queries: state.rejected_queries,
      research_results: state.research_results,
      research_validation: state.research_validation,
      research_status: state.research_status,
      ideas: state.ideas,
      drafts: state.drafts,
      evaluations: state.evaluations,
      final_evaluation: state.final_evaluation,
      selected_drafts: state.selected_drafts,
      final_blog: state.final_blog,
      tavily_calls_used: state.tavily_calls_used,
      cache_hits: state.cache_hits,
      cache_misses: state.cache_misses,
      iteration_count: state.iteration_count,
    };

    // Current requirement: print the completed output in console.
    console.log("BLOG_GENERATION_OUTPUT", JSON.stringify(output, null, 2));

    completeRunRecord(requestId, {
      durationMs,
      requirement: state.requirement,
      research_plan: state.research_plan,
      research_plan_validation: state.research_plan_validation,
      approved_queries: state.approved_queries,
      rejected_queries: state.rejected_queries,
      research_results: state.research_results,
      research_validation: state.research_validation,
      research_status: state.research_status,
      ideas: state.ideas,
      drafts: state.drafts,
      evaluations: state.evaluations,
      final_evaluation: state.final_evaluation,
      selected_drafts: state.selected_drafts,
      final_blog: state.final_blog,
      tavily_calls_used: state.tavily_calls_used,
      cache_hits: state.cache_hits,
      cache_misses: state.cache_misses,
      iteration_count: state.iteration_count,
    });

    const selectedDraftIndex = state.selected_drafts?.[0]
      ? state.drafts?.findIndex(
          (draft) => draft.content === state.selected_drafts?.[0]?.content,
        )
      : undefined;

    try {
      await persistBlogRun({
        requestId,
        userId,
        topic: userInput.topic,
        status: "completed",
        durationMs,
        iterationCount: state.iteration_count,
        drafts: state.drafts,
        evaluations: state.evaluations,
        workflowStatus: state.final_evaluation?.workflow_status ?? "completed",
        selectedDraftIndex:
          selectedDraftIndex !== undefined && selectedDraftIndex >= 0
            ? selectedDraftIndex
            : undefined,
        finalBlog: state.final_blog,
      });
    } catch (persistError) {
      const persistMessage = getErrorMessage(persistError);
      logger.warn("Blog generation persistence failed", {
        requestId,
        userId,
        error: persistMessage,
      });
    }

    logger.info("Blog generation workflow finished", {
      requestId,
      userId,
      durationMs,
      iterationCount: state.iteration_count,
      hasRequirement: Boolean(state.requirement),
      hasResearchPlan: Boolean(state.research_plan),
      hasResearchResults: Boolean(state.research_results?.length),
      hasIdeas: Boolean(state.ideas?.length),
      hasDrafts: Boolean(state.drafts?.length),
      hasEvaluations: Boolean(state.evaluations?.length),
      workflowStatus: state.final_evaluation?.workflow_status,
      hasFinalBlog: Boolean(state.final_blog),
      researchStatus: state.research_status,
      tavilyCallsUsed: state.tavily_calls_used,
      cacheHits: state.cache_hits,
      cacheMisses: state.cache_misses,
    });
  } catch (error) {
    const durationMs = Date.now() - startedAt;
    const message = getErrorMessage(error);

    console.error(
      "BLOG_GENERATION_ERROR",
      JSON.stringify(
        {
          requestId,
          userId,
          durationMs,
          error: message,
        },
        null,
        2
      )
    );

    failRunRecord(requestId, {
      durationMs,
      error: message,
    });

    try {
      await persistBlogRun({
        requestId,
        userId,
        topic: userInput.topic,
        status: "failed",
        durationMs,
        iterationCount: 0,
        workflowStatus: "failed",
        error: message,
      });
    } catch (persistError) {
      const persistMessage = getErrorMessage(persistError);
      logger.warn("Failed run persistence failed", {
        requestId,
        userId,
        error: persistMessage,
      });
    }

    logger.error("Blog generation workflow failed", {
      requestId,
      userId,
      durationMs,
      error: message,
    });
  }
}
