import { z } from "zod";

export const DraftSchema = z.object({
  idea_index: z.number().int().nonnegative(),
  idea_title: z.string(),
  format: z.literal("mdx"),
  mode: z.enum(["research_backed", "safe_assumption"]),
  content: z.string(),
  word_count_estimate: z.number().int().nonnegative(),
  score: z.number().optional(),
  feedback: z.array(z.string()).optional(),
});

export type Draft = z.infer<typeof DraftSchema>;
