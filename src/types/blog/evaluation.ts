import { z } from "zod";

export const EvaluationSchema = z.object({
  draft_index: z.number().int().nonnegative(),
  score: z.number(),
  approved: z.boolean(),
  issues: z.array(z.string()),
  improvements: z.array(z.string()),
});

export const FinalEvaluationSchema = z.object({
  final_score: z.number(),
  approved: z.boolean(),
  selected_draft_index: z.number().int().nonnegative(),
  refinement_used: z.boolean(),
  workflow_status: z.enum(["completed", "completed_with_warning"]),
  decision_reason: z.string(),
  remaining_issues: z.array(z.string()),
});

export type Evaluation = z.infer<typeof EvaluationSchema>;
export type FinalEvaluation = z.infer<typeof FinalEvaluationSchema>;
