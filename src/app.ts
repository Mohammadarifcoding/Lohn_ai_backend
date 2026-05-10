import express, { type Express } from "express";
import cors, { type CorsOptions } from "cors";
import * as helmetModule from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import * as Sentry from "@sentry/node";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth.js";
import { swaggerSpec } from "./config/swagger.js";
import { adminApiLimiter, analyticsLimiter, apiLimiter, authLimiter, emailLimiter } from "./middleware/rateLimiter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./utils/logger.js";
import { sendSuccess } from "./utils/apiResponse.js";
import userRoutes from "./modules/user/user.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import analyticsRoutes from "./modules/analytics/analytics.routes.js";
import emailRoutes from "./modules/email/email.routes.js";
import testingRoutes from "./modules/testing/testing.routes.js";

const helmetMiddleware = ((helmetModule as { default?: unknown }).default ??
  helmetModule) as unknown as (options?: Record<string, unknown>) => express.RequestHandler;

const app: Express = express();

if (process.env.VERCEL || process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// ─── Security & Compression ──────────────────────────────────────────────────
app.use(helmetMiddleware({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

const allowedOrigins = new Set([
  ...(process.env.CORS_ORIGIN ?? "").split(","),
  ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
  "http://localhost:3000",
  "https://lohnai.vercel.app",
]
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter((origin) => origin.length > 0));

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const normalizedOrigin = origin?.replace(/\/$/, "");

    if (!normalizedOrigin || allowedOrigins.has(normalizedOrigin)) {
      callback(null, true);
      return;
    }

    logger.warn(`CORS blocked for origin: ${origin}`, {
      allowedOrigins: Array.from(allowedOrigins),
      requestedOrigin: origin,
    });

    callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(compression());

// ─── Rate Limiting ───────────────────────────────────────────────────────────
app.use("/api/auth", authLimiter);
app.use("/api/admin", adminApiLimiter);
app.use("/api/users/me", adminApiLimiter);
app.use("/api/analytics", analyticsLimiter);
app.use("/api/email", emailLimiter);
app.use("/api", apiLimiter);

// ─── Better Auth Handler (MUST be before express.json()) ─────────────────────
app.all("/api/auth/*splat", toNodeHandler(auth));

// ─── Body Parsers (AFTER Better Auth) ────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ─── Request Logging ─────────────────────────────────────────────────────────
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.url}`, {
    ip: req.ip,
    userAgent: req.get("User-Agent"),
  });
  next();
});

// ─── Health Check ────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  sendSuccess(res, {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }, "Server is running");
});

// ─── Swagger Docs ────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== "production") {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use("/api/users", userRoutes);
app.use("/api/admin/blog", blogRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/testing", testingRoutes);

// ─── Global Error Handlers ───────────────────────────────────────────────────
Sentry.setupExpressErrorHandler(app);
app.use(errorHandler);

export default app;
