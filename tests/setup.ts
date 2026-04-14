// Jest global setup
// Set test environment variables before any imports
process.env.NODE_ENV = "test";
process.env.PORT = "4000";
process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/test_db?sslmode=require";
process.env.BETTER_AUTH_SECRET = "test-secret-at-least-32-characters-long-for-testing";
process.env.BETTER_AUTH_URL = "http://localhost:4000";
process.env.RATE_LIMIT_WINDOW_MS = "900000";
process.env.RATE_LIMIT_MAX = "1000";
