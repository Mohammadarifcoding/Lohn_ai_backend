import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { GraphNode } from "@langchain/langgraph";
import { z } from "zod";
import { config } from "../config/index.js";
import { models } from "../providers/models.js";
import { prompts } from "../prompts/blogAgent.js";
import { BlogIdeaSchema } from "../types/blog/idea_generation.js";
import type { ResearchResult } from "../types/blog/research.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { logger } from "../utils/logger.js";
import { normalizeProviderError } from "../utils/providerError.js";

const IDEAS_COUNT = 5;
const IdeaResponseSchema = z.object({
  idea: BlogIdeaSchema,
});

type Requirement = NonNullable<
  ReturnType<typeof BlogAgentStateSchema.parse>["requirement"]
>;

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function truncateText(value: string, maxLength: number): string {
  const normalized = normalizeWhitespace(value);
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 3))}...`;
}

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.search = "";
    return parsed.toString().toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}

function buildRequirementSummary(requirement: Requirement) {
  return {
    title: requirement.title,
    refined_topic: requirement.refined_topic,
    intent: requirement.refined_intent,
    audience: {
      level: requirement.audience.level,
      persona: requirement.audience.persona,
      pain_points: requirement.audience.pain_points.slice(0, 5),
    },
    seo: {
      primary_keyword: requirement.seo.primary_keyword,
      secondary_keywords: requirement.seo.secondary_keywords.slice(0, 4),
      search_intent: requirement.seo.search_intent,
    },
    core_sections: requirement.core_sections.slice(0, 5),
    key_angles: requirement.key_angles.slice(0, 4),
    tone: requirement.tone,
    word_count: requirement.constraints.word_count,
    constraints: requirement.constraints,
  };
}

function selectResearchPoints(results: ResearchResult[], maxItems: number) {
  const deduped = new Map<string, ResearchResult>();

  for (const result of results) {
    const key = `${normalizeUrl(result.url)}::${normalizeWhitespace(result.title).toLowerCase()}`;
    const existing = deduped.get(key);
    if (!existing || result.confidence > existing.confidence) {
      deduped.set(key, result);
    }
  }

  return [...deduped.values()]
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, maxItems)
    .map((result) => ({
      title: truncateText(result.title, 120),
      extracted_point: truncateText(result.extracted_point, 180),
    }));
}

function buildIdeaInput(
  state: ReturnType<typeof BlogAgentStateSchema.parse>,
  options?: { compact?: boolean },
) {
  const requirement = state.requirement;
  if (!requirement) {
    throw new Error("Missing requirement for idea generation");
  }

  const compact = options?.compact ?? false;
  const requirementSummary = buildRequirementSummary(requirement);
  const status = state.research_status ?? "failed";

  if (status === "valid") {
    return {
      mode: "research_backed" as const,
      requirement_summary: requirementSummary,
      research_status: status,
      research_points: selectResearchPoints(state.research_results ?? [], compact ? 3 : 5),
    };
  }

  if (status === "partial") {
    return {
      mode: "safe_assumption" as const,
      requirement_summary: requirementSummary,
      research_status: status,
      missing_points: state.research_validation?.missing_points?.slice(0, compact ? 4 : 6) ?? [],
      safe_research_points: selectResearchPoints(state.research_results ?? [], compact ? 1 : 2),
    };
  }

  return {
    mode: "safe_assumption" as const,
    requirement_summary: requirementSummary,
    research_status: status,
  };
}

function buildSystemPrompt(mode: "research_backed" | "safe_assumption") {
  if (mode === "research_backed") {
    return `${prompts.ideaGenerationPromptBase}\n${prompts.ideaGenerationPromptResearchBacked}`;
  }

  return `${prompts.ideaGenerationPromptBase}\n${prompts.ideaGenerationPromptSafeAssumption}`;
}

function isLengthLimitError(message: string): boolean {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("length limit was reached") ||
    normalized.includes("maximum context length") ||
    normalized.includes("token limit")
  );
}

const ideaGenerationAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  if (!state.requirement) {
    throw new Error("Missing requirement for idea generation");
  }

  const llm = models.claude.withStructuredOutput(IdeaResponseSchema);

  const ideas: z.infer<typeof BlogIdeaSchema>[] = [];
  let globalCompactMode = false;

  for (let ideaIndex = 0; ideaIndex < IDEAS_COUNT; ideaIndex += 1) {
    let lastError: unknown;
    let generatedIdea: z.infer<typeof BlogIdeaSchema> | undefined;

    for (let attempt = 0; attempt < 2; attempt += 1) {
      const useCompactInput = globalCompactMode || attempt > 0;
      const ideaInput = buildIdeaInput(state, { compact: useCompactInput });

      try {
        const response = await llm.invoke([
          new SystemMessage(buildSystemPrompt(ideaInput.mode)),
          new HumanMessage(
            JSON.stringify({
            ...ideaInput,
              current_year: new Date().getUTCFullYear(),
              idea_slot: ideaIndex + 1,
              existing_titles: ideas.map((idea) => idea.title),
              requirement_hint: useCompactInput
                ? "Return concise output. Return one idea only in {\"idea\": {...}} format."
                : "Return one idea only in {\"idea\": {...}} format.",
            }),
          ),
        ]);

        const result = IdeaResponseSchema.safeParse(response);
        if (result.success) {
          generatedIdea = result.data.idea;
          break;
        }

        const zodMessage = result.error.issues
          .map((issue) => `${issue.path.join(".") || "root"}: ${issue.message}`)
          .join("; ");

        lastError = new Error(`Structured output validation failed: ${zodMessage}`);
        logger.warn("Idea generation validation failed", {
          ideaIndex,
          attempt: attempt + 1,
          mode: ideaInput.mode,
          issues: zodMessage,
        });
      } catch (err) {
        lastError = err;
        const details = normalizeProviderError(err, config.NODE_ENV !== "production");
        if (isLengthLimitError(details.message)) {
          globalCompactMode = true;
        }

        logger.error("Idea generation attempt failed", {
          ideaIndex,
          attempt: attempt + 1,
          mode: ideaInput.mode,
          compactInput: useCompactInput,
          model: "anthropic/claude-sonnet-4.6",
          error: details.message,
          status: details.status,
          code: details.code,
          requestId: details.requestId,
          raw: details.raw,
        });
      }
    }

    if (!generatedIdea) {
      const details = normalizeProviderError(lastError, config.NODE_ENV !== "production");
      throw new Error(
        `Idea generation failed for slot ${ideaIndex + 1}: ${
          details.status ? `[${details.status}] ` : ""
        }${details.message}`,
      );
    }

    ideas.push(generatedIdea);
  }

  if (ideas.length !== IDEAS_COUNT) {
    throw new Error(
      `Idea generation produced ${ideas.length} ideas, expected ${IDEAS_COUNT}`,
    );
  }

  return {
    ideas,
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default ideaGenerationAgent;
