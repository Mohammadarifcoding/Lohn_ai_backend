import { z } from "zod";

export const DraftSchema = z.object({
  content: z.string(),
  score: z.number().optional(),
  feedback: z.array(z.string()).optional(),
});

export type Draft = z.infer<typeof DraftSchema>;
