import { rateLimit } from "express-rate-limit";
import { config } from "../config/index.js";

function isAdminTraffic(url: string): boolean {
  return url.startsWith("/api/admin/") || url === "/api/users/me";
}

const limiterValidation = {
  xForwardedForHeader: false,
  forwardedHeader: false,
} as const;

/**
 * General API rate limiter.
 * Default: 100 requests per 15 minutes.
 */
export const apiLimiter = rateLimit({
  windowMs: config.RATE_LIMIT_WINDOW_MS,
  max: config.RATE_LIMIT_MAX,
  skip: (req) => isAdminTraffic(req.originalUrl || req.url),
  validate: limiterValidation,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

/**
 * Higher rate limit for authenticated admin traffic.
 * 1000 requests per 15 minutes.
 */
export const adminApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  validate: limiterValidation,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many admin requests, please try again shortly.",
  },
});

/**
 * Stricter rate limiter for auth-related endpoints.
 * 20 requests per 15 minutes.
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  validate: limiterValidation,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts, please try again later.",
  },
});
