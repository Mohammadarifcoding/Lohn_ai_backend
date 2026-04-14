import { config } from "./config/index.js";
import { logger } from "./utils/logger.js";
import app from "./app.js";
import { bootstrapAdminAccount } from "./bootstrap/admin.js";

const startServer = async () => {
  try {
    await bootstrapAdminAccount();

    app.listen(config.PORT, () => {
      logger.info(
        `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
      );
      logger.info(`Health check: ${config.BETTER_AUTH_URL}/api/health`);
      logger.info(`API Docs: ${config.BETTER_AUTH_URL}/api/docs`);
      logger.info(`Auth endpoints: ${config.BETTER_AUTH_URL}/api/auth/*`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received. Shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  logger.info("SIGINT received. Shutting down gracefully...");
  process.exit(0);
});

process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception:", error);
  process.exit(1);
});

startServer();
