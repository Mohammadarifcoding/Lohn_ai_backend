import type { BlogInput } from "../../types/blog/blog.js";
import { logger } from "../../utils/logger.js";
import { runGenerateBlogGraph } from "../../workflows/blog/generate.graph.js";
import {
  completeRunRecord,
  failRunRecord,
} from "./blog.run-store.js";

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
    const state = await runGenerateBlogGraph(userInput);
    const durationMs = Date.now() - startedAt;

    const output = {
      requestId,
      userId,
      durationMs,
      requirement: state.requirement,
      research_plan: state.research_plan,
      iteration_count: state.iteration_count,
    };

    // Current requirement: print the completed output in console.
    console.log("BLOG_GENERATION_OUTPUT", JSON.stringify(output, null, 2));

    completeRunRecord(requestId, {
      durationMs,
      requirement: state.requirement,
      research_plan: state.research_plan,
      iteration_count: state.iteration_count,
    });

    logger.info("Blog generation workflow finished", {
      requestId,
      userId,
      durationMs,
      iterationCount: state.iteration_count,
      hasRequirement: Boolean(state.requirement),
      hasResearchPlan: Boolean(state.research_plan),
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

    logger.error("Blog generation workflow failed", {
      requestId,
      userId,
      durationMs,
      error: message,
    });
  }
}
