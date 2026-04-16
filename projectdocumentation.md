# Project Documentation

## Overview

This project is a TypeScript backend API for authenticated user management and AI-assisted blog workflow orchestration.

Core stack:

- Express 5 + TypeScript (NodeNext)
- Prisma + PostgreSQL
- Better Auth (cookie-based session auth)
- LangGraph for multi-step blog workflow orchestration
- Tavily for web research retrieval
- Pinecone for research cache (vector-backed)

## Architecture

High-level layers:

1. HTTP layer: `src/app.ts`, `src/server.ts`
2. API modules: `src/modules/**` (routes/controllers/services)
3. Workflow layer: `src/workflows/blog/generate.graph.ts`
4. Agent layer: `src/agents/**`
5. Providers: `src/providers/**` (LLM models, Tavily, Pinecone, embeddings)
6. Shared utils/middleware/types: `src/utils/**`, `src/middleware/**`, `src/types/**`

## API Lifecycle

### Blog generation request

1. `POST /api/admin/blog/generate`
2. Input is validated against `BlogInputSchema`
3. Request is accepted immediately with `202` + `requestId`
4. Background workflow starts (`runGenerateBlogInBackground`)
5. Client polls `GET /api/admin/blog/generate/:requestId/status`

### Status model

Run status is tracked in an in-memory run store with TTL cleanup:

- `processing`
- `completed`
- `failed`

Run output includes requirement/research artifacts and execution metrics.

## Workflow Pipeline (Current)

Graph entrypoint: `src/workflows/blog/generate.graph.ts`

Current node order:

1. `requirement_analysis`
2. `research_planner`
3. `research_plan_validator`
4. `research_retrieval`

This order is intentional: query validation happens before paid web retrieval.

## Research Subsystem

### 1) Research Planner

`src/agents/research_planner.ts` creates query candidates from structured requirement analysis.

### 2) Research Plan Validator

`src/agents/research_plan_validator.ts` filters and ranks queries:

- removes vague queries
- deduplicates near-duplicates
- scores coverage relevance to required points
- enforces Tavily budget cap (`MAX_TAVILY_CALLS_PER_REQUEST = 8`)

Outputs:

- `approved_queries`
- `rejected_queries`
- `research_plan_validation`

### 3) Research Retrieval (Cache-first)

`src/agents/research_agent.ts` runs approved queries with this policy:

1. Try Pinecone cache (`exact normalized query` match)
2. If fresh cache exists (<= 21 days), use it
3. Else call Tavily (`@tavily/core`) if budget remains
4. Upsert Tavily results into Pinecone cache
5. If Tavily fails, use stale cache fallback if available

Budget and cache rules:

- max Tavily calls/request: `8`
- cache freshness window: `21 days`
- stale cache is fallback only when Tavily fails

### Coverage validation

Research coverage is validated against requirement points (`core_sections`, `key_angles`, SEO primary keyword), then status is set:

- `valid`
- `partial`
- `failed`

## Key Files

- App/server: `src/app.ts`, `src/server.ts`
- Graph: `src/workflows/blog/generate.graph.ts`
- Agents:
  - `src/agents/requirment_analysis.ts`
  - `src/agents/research_planner.ts`
  - `src/agents/research_plan_validator.ts`
  - `src/agents/research_agent.ts`
- Cache/providers:
  - `src/modules/blog/research-cache.ts`
  - `src/providers/pinecone.ts`
  - `src/providers/embeddings.ts`
  - `src/providers/tavily.ts`
- Run tracking:
  - `src/modules/blog/blog.service.ts`
  - `src/modules/blog/blog.run-store.ts`

## Configuration

Primary env vars used by current architecture:

- `PORT`, `NODE_ENV`
- `DATABASE_URL`
- `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`
- `RATE_LIMIT_WINDOW_MS`, `RATE_LIMIT_MAX`
- `OPENROUTER_API_KEY`, `AI_GATEWAY_URL`
- `TAVILY_API_KEY`
- `PINECONE_API_KEY`, `PINECONE_INDEX`
- `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`

## Operational Notes

- Run-store is in-memory only; state does not survive process restart.
- Workflow logs include research quality and cost-related counters (`tavily_calls_used`, `cache_hits`, `cache_misses`).
- Cache/provider failures are handled gracefully where possible to return best-effort results.

## Developer Commands

- Install deps: `pnpm install`
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Start built server: `pnpm start`
- Type check: `pnpm lint`
- Tests: `pnpm test`

## Suggested Reading Order (Onboarding)

1. `src/app.ts`
2. `src/modules/blog/blog.routes.ts`
3. `src/modules/blog/blog.controller.ts`
4. `src/modules/blog/blog.service.ts`
5. `src/workflows/blog/generate.graph.ts`

## Next Roadmap

Planned next workflow stages after research:

- Idea generation
- Writing drafts
- Evaluation and selection/refinement
- Final output aggregation
