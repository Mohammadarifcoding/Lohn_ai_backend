import type { Request, RequestHandler } from "express";
import { Redis } from "@upstash/redis";
import * as Sentry from "@sentry/node";
import { config, isProd } from "../config/index.js";
import { logger } from "../utils/logger.js";

interface RateLimitOptions {
  prefix: string;
  windowMs: number;
  max: number;
  message: string;
  skip?: (req: Request) => boolean;
}

interface MemoryLimitEntry {
  count: number;
  resetAt: number;
}

const memoryStore = new Map<string, MemoryLimitEntry>();

const upstashRedisUrl = config.UPSTASH_REDIS_REST_URL?.trim();
const upstashRedisToken = config.UPSTASH_REDIS_REST_TOKEN?.trim();

const redis = isProd && upstashRedisUrl && upstashRedisToken
  ? new Redis({
      url: upstashRedisUrl,
      token: upstashRedisToken,
    })
  : undefined;

function isAdminTraffic(url: string): boolean {
  return url.startsWith("/api/admin/") || url === "/api/users/me";
}

function getClientIp(req: Request): string {
  return req.ip || req.socket.remoteAddress || "unknown-ip";
}

function getWindowKey(prefix: string, ip: string, windowMs: number): string {
  const bucket = Math.floor(Date.now() / windowMs);
  return `rate-limit:${prefix}:${ip}:${bucket}`;
}

function setRateLimitHeaders(
  req: Request,
  max: number,
  count: number,
  resetAt: number,
): void {
  const remaining = Math.max(max - count, 0);
  req.res?.setHeader("RateLimit-Limit", String(max));
  req.res?.setHeader("RateLimit-Remaining", String(remaining));
  req.res?.setHeader("RateLimit-Reset", String(Math.ceil(resetAt / 1000)));
}

async function reportRateLimitHit(req: Request, options: RateLimitOptions, count: number): Promise<void> {
  Sentry.withScope((scope) => {
    scope.setLevel("warning");
    scope.setTag("rate_limit", "true");
    scope.setTag("rate_limit.prefix", options.prefix);
    scope.setTag("http.status_code", "429");
    scope.setContext("rateLimit", {
      prefix: options.prefix,
      max: options.max,
      count,
      windowMs: options.windowMs,
      ip: getClientIp(req),
      method: req.method,
      url: req.originalUrl || req.url,
      userAgent: req.get("User-Agent"),
    });
    Sentry.captureMessage(`Rate limit exceeded: ${options.prefix}`);
  });

  if (process.env.VERCEL || isProd) {
    await Sentry.flush(2000);
  }
}

function incrementMemoryLimit(key: string, windowMs: number): MemoryLimitEntry {
  const now = Date.now();
  const existing = memoryStore.get(key);

  if (existing && existing.resetAt > now) {
    existing.count += 1;
    return existing;
  }

  if (memoryStore.size > 10000) {
    for (const [entryKey, entry] of memoryStore.entries()) {
      if (entry.resetAt <= now) {
        memoryStore.delete(entryKey);
      }
    }
  }

  const entry = { count: 1, resetAt: now + windowMs };
  memoryStore.set(key, entry);
  return entry;
}

async function incrementDistributedLimit(
  key: string,
  windowMs: number,
): Promise<MemoryLimitEntry> {
  if (!redis) {
    return incrementMemoryLimit(key, windowMs);
  }

  const count = await redis.incr(key);
  const ttlSeconds = Math.ceil(windowMs / 1000);

  if (count === 1) {
    await redis.expire(key, ttlSeconds);
  }

  const keyParts = key.split(":");
  const bucket = Number(keyParts[keyParts.length - 1]);
  const resetAt = Number.isFinite(bucket) ? (bucket + 1) * windowMs : Date.now() + windowMs;
  return { count, resetAt };
}

function createRateLimiter(options: RateLimitOptions): RequestHandler {
  return async (req, res, next) => {
    if (options.skip?.(req)) {
      next();
      return;
    }

    const key = getWindowKey(options.prefix, getClientIp(req), options.windowMs);

    try {
      const entry = await incrementDistributedLimit(key, options.windowMs);
      setRateLimitHeaders(req, options.max, entry.count, entry.resetAt);

      if (entry.count > options.max) {
        await reportRateLimitHit(req, options, entry.count);

        res.status(429).json({
          success: false,
          message: options.message,
        });
        return;
      }

      next();
    } catch (error) {
      logger.error("Rate limiter failed; allowing request", {
        prefix: options.prefix,
        store: redis ? "upstash" : "memory",
        error: error instanceof Error ? error.message : "Unknown error",
      });

      if (isProd && redis) {
        res.status(503).json({
          success: false,
          message: "Request protection is temporarily unavailable.",
        });
        return;
      }

      next();
    }
  };
}

/**
 * General API rate limiter.
 * Default: 100 requests per 15 minutes.
 */
export const apiLimiter: RequestHandler = createRateLimiter({
  prefix: "api",
  windowMs: config.RATE_LIMIT_WINDOW_MS,
  max: config.RATE_LIMIT_MAX,
  skip: (req) => isAdminTraffic(req.originalUrl || req.url),
  message: "Too many requests, please try again later.",
});

export const analyticsLimiter: RequestHandler = createRateLimiter({
  prefix: "analytics",
  windowMs: 15 * 60 * 1000,
  max: 120,
  message: "Too many analytics requests, please try again later.",
});

export const emailLimiter: RequestHandler = createRateLimiter({
  prefix: "email",
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many form submissions, please try again later.",
});

/**
 * Higher rate limit for authenticated admin traffic.
 * 1000 requests per 15 minutes.
 */
export const adminApiLimiter: RequestHandler = createRateLimiter({
  prefix: "admin",
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many admin requests, please try again shortly.",
});

/**
 * Stricter rate limiter for auth-related endpoints.
 * 20 requests per 15 minutes.
 */
export const authLimiter: RequestHandler = createRateLimiter({
  prefix: "auth",
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Too many authentication attempts, please try again later.",
});
