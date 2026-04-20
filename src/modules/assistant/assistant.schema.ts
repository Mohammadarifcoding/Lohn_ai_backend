import { z } from "zod";

export const DeepPayrollAnswerSchema = z.object({
  locale: z.enum(["en", "de"]).default("en"),
  message: z.string().trim().min(3).max(800),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(800),
      }),
    )
    .max(8)
    .optional()
    .default([]),
});

export type DeepPayrollAnswerInput = z.infer<typeof DeepPayrollAnswerSchema>;
