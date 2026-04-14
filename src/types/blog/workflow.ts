import { z } from "zod";
import { BlogInputSchema } from "./blog.js";
import { RequirementAnalysisSchema } from "./requirment_analysis.js";
import { ResearchPlanSchema, ResearchValidationSchema } from "./research.js";
import { BlogIdeaSchema } from "./idea_generation.js";
import { DraftSchema } from "./writing.js";
import { EvaluationSchema } from "./evaluation.js";

export const BlogAgentStateSchema = z.object({
  // INPUT
  user_input: BlogInputSchema,

  // REQUIREMENT
  requirement: RequirementAnalysisSchema.optional(),

  // RESEARCH
  research_plan: ResearchPlanSchema.optional(),
  research_results: z.array(z.string()).optional(),
  research_status: z.enum(["valid", "partial", "failed"]).optional(),
  research_validation: ResearchValidationSchema.optional(),

  // IDEA
  ideas: z.array(BlogIdeaSchema).optional(),

  // WRITING
  drafts: z.array(DraftSchema).optional(),

  // EVALUATION
  evaluations: z.array(EvaluationSchema).optional(),

  // FINAL OUTPUT
  selected_drafts: z.array(DraftSchema).optional(),
  final_blog: z.string().optional(),

  // CONTROL
  iteration_count: z.number(),
  max_iterations: z.number(),

  // DEBUG
  logs: z.array(z.string()).optional(),
});

export type BlogAgentState = z.infer<typeof BlogAgentStateSchema>;
