import express, { type Express } from "express";
import cors from "cors";
import * as helmetModule from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth.js";
import { swaggerSpec } from "./config/swagger.js";
import { adminApiLimiter, apiLimiter, authLimiter } from "./middleware/rateLimiter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./utils/logger.js";
import { sendSuccess } from "./utils/apiResponse.js";
import userRoutes from "./modules/user/user.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import assistantRoutes from "./modules/assistant/assistant.routes.js";

const helmetMiddleware = ((helmetModule as { default?: unknown }).default ??
  helmetModule) as unknown as () => express.RequestHandler;

const app: Express = express();

if (process.env.VERCEL || process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// ─── Security & Compression ──────────────────────────────────────────────────
app.use(helmetMiddleware());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);
app.use(compression());

// ─── Rate Limiting ───────────────────────────────────────────────────────────
app.use("/api/auth", authLimiter);
app.use("/api/admin", adminApiLimiter);
app.use("/api/users/me", adminApiLimiter);
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
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use("/api/users", userRoutes);
app.use("/api/admin/blog", blogRoutes);
app.use("/api/assistant", assistantRoutes);

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use(errorHandler);

export default app;
