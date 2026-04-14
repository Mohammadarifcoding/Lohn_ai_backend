import { z } from "zod";

export const BlogOutlineSchema = z.object({
  section_title: z.string(),
  points: z.array(z.string()),
});

export const BlogIdeaSchema = z.object({
  title: z.string(),
  hook: z.string(),
  unique_angle: z.string(),

  outline: z.array(BlogOutlineSchema),

  storytelling_strategy: z.string(),
  examples: z.array(z.string()),

  seo_usage_plan: z.array(z.string()),

  estimated_word_count: z.number(),
});

export type BlogIdea = z.infer<typeof BlogIdeaSchema>;
