import { z } from "zod";

export const BlogInputSchema = z.object({
  // 🔹 Core (required)
  topic: z.string().min(3),
  goal: z.string().min(5),
  audience: z.string().min(3),

  // 🔹 Idea injection (uniqueness)
  user_context: z.string().optional(),

  // 🔹 Control panel (optional)
  tone: z.enum(["professional", "casual", "persuasive"]).optional(),
  keywords: z.array(z.string()).optional(),
  include_services: z.array(z.string()).optional(),
  constraints: z.array(z.string()).optional(),

  // 🔹 Output control
  depth: z.enum(["short", "medium", "long"]).optional(),
});

export type BlogInput = z.infer<typeof BlogInputSchema>;
