import { z } from "zod";

export const ResearchPlanSchema = z.object({
  topics: z.array(z.string()),
  queries: z.array(z.string()),
  sources: z.array(z.string()),
});

export const RejectedQuerySchema = z.object({
  query: z.string(),
  reason: z.string(),
});

export const ResearchPlanValidationSchema = z.object({
  within_budget: z.boolean(),
  estimated_calls: z.number().int().nonnegative(),
  approved_queries: z.array(z.string()),
  rejected_queries: z.array(RejectedQuerySchema),
  issues: z.array(z.string()),
});

export const ResearchSourceSchema = z.enum(["web", "docs", "knowledge_base"]);

export const SearchHitSchema = z.object({
  query: z.string(),
  source: ResearchSourceSchema,
  title: z.string(),
  url: z.string().url(),
  snippet: z.string(),
  score: z.number().min(0).max(1).optional(),
});

export const ResearchResultSchema = z.object({
  query: z.string(),
  source: ResearchSourceSchema,
  title: z.string(),
  url: z.string().url(),
  snippet: z.string(),
  extracted_point: z.string(),
  confidence: z.number().min(0).max(1),
  origin: z.enum(["web", "cache_fresh", "cache_stale_fallback"]),
  fetched_at: z.string(),
  cache_age_days: z.number().nonnegative().optional(),
});

export const ResearchValidationSchema = z.object({
  valid: z.boolean(),
  coverage_score: z.number().min(0).max(1),
  covered_points: z.array(z.string()),
  missing_points: z.array(z.string()),
  issues: z.array(z.string()),
});

export type ResearchPlan = z.infer<typeof ResearchPlanSchema>;
export type RejectedQuery = z.infer<typeof RejectedQuerySchema>;
export type ResearchPlanValidation = z.infer<typeof ResearchPlanValidationSchema>;
export type SearchHit = z.infer<typeof SearchHitSchema>;
export type ResearchResult = z.infer<typeof ResearchResultSchema>;
export type ResearchValidation = z.infer<typeof ResearchValidationSchema>;
