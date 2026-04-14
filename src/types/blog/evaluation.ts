import { z } from "zod";

export const EvaluationSchema = z.object({
  score: z.number(),
  issues: z.array(z.string()),
  improvements: z.array(z.string()),
});

export type Evaluation = z.infer<typeof EvaluationSchema>;
