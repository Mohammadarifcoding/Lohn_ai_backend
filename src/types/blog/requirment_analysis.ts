import { z } from "zod";

export const AudienceProfileSchema = z.object({
  level: z.enum(["beginner", "intermediate", "advanced"]),
  persona: z.string(),
  pain_points: z.array(z.string()),
});

export const SEOIntentSchema = z.object({
  primary_keyword: z.string(),
  secondary_keywords: z.array(z.string()),
  search_intent: z.enum(["informational", "commercial", "transactional"]),
});

export const ContentConstraintsSchema = z.object({
  word_count: z.number(),
  must_include: z.array(z.string()),
  must_avoid: z.array(z.string()),
});

export const RequirementAnalysisSchema = z.object({
  refined_topic: z.string(),
  refined_intent: z.string(),

  core_sections: z.array(z.string()),
  key_angles: z.array(z.string()),
  depth_level: z.enum(["low", "medium", "high"]),

  audience: AudienceProfileSchema,
  seo: SEOIntentSchema,

  tone: z.enum(["professional", "casual", "persuasive"]),
  content_format: z.enum(["blog", "guide", "listicle"]),

  constraints: ContentConstraintsSchema,

  title: z.string(),
});

export type RequirementAnalysis = z.infer<typeof RequirementAnalysisSchema>;
