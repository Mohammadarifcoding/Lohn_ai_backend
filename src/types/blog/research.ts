import { z } from "zod";

export const ResearchPlanSchema = z.object({
  topics: z.array(z.string()),
  queries: z.array(z.string()),
  sources: z.array(z.string()),
});

export const ResearchValidationSchema = z.object({
  valid: z.boolean(),
  missing_points: z.array(z.string()),
  issues: z.array(z.string()),
});

export type ResearchPlan = z.infer<typeof ResearchPlanSchema>;
export type ResearchValidation = z.infer<typeof ResearchValidationSchema>;
