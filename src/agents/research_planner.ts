import {
  GraphNode,
} from "@langchain/langgraph";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { models } from "../providers/models.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { prompts } from "../prompts/blogAgent.js";
import { ResearchPlanSchema } from "../types/blog/research.js";
import { config } from "../config/index.js";
import { logger } from "../utils/logger.js";
import { normalizeProviderError } from "../utils/providerError.js";

const researchPlannerAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  // 🚨 safety check
  if (!state.requirement) {
    throw new Error("Missing requirement for research planning");
  }

  const llm = models.gpt4o.withStructuredOutput(ResearchPlanSchema);

  let parsed: ReturnType<typeof ResearchPlanSchema.parse> | undefined;
  let lastError: unknown;

  for (let i = 0; i < 2; i++) {
    try {
      const response = await llm.invoke([
        new SystemMessage(prompts.researchPlannerPrompt),
        new HumanMessage(JSON.stringify(state.requirement)),
      ]);

      const result = ResearchPlanSchema.safeParse(response);

      if (result.success) {
        parsed = result.data;
        break;
      }

      const zodMessage = result.error.issues
        .map((issue) => `${issue.path.join(".") || "root"}: ${issue.message}`)
        .join("; ");

      lastError = new Error(`Structured output validation failed: ${zodMessage}`);
      logger.warn("Research planner validation failed", {
        attempt: i + 1,
        issues: zodMessage,
      });
    } catch (err) {
      lastError = err;
      const details = normalizeProviderError(
        err,
        config.NODE_ENV !== "production"
      );

      logger.error("Research planner attempt failed", {
        attempt: i + 1,
        model: "gpt-4o",
        baseURL: config.AI_GATEWAY_URL,
        error: details.message,
        status: details.status,
        code: details.code,
        type: details.type,
        param: details.param,
        requestId: details.requestId,
        raw: details.raw,
      });
    }
  }

  if (!parsed) {
    const details = normalizeProviderError(lastError, config.NODE_ENV !== "production");
    throw new Error(
      `Research planner failed after retries: ${
        details.status ? `[${details.status}] ` : ""
      }${details.message}`
    );
  }

  return {
    research_plan: parsed,
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default researchPlannerAgent;
