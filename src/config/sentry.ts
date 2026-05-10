import * as Sentry from "@sentry/node";

const dsn = process.env.SENTRY_DSN;

if (!dsn) {
  // eslint-disable-next-line no-console
  console.warn(
    "[Sentry] SENTRY_DSN is not set. Errors will NOT be sent to Sentry. " +
      "Add SENTRY_DSN to your environment variables (e.g. Vercel Dashboard)."
  );
}

Sentry.init({
  dsn,
  sendDefaultPii: true,
  // Capture 100% of transactions for error tracking
  tracesSampleRate: 1.0,
  // Capture 100% of profiles (if profiling is enabled)
  profilesSampleRate: 1.0,
  // Environment tagging
  environment: process.env.NODE_ENV || "development",
  release: process.env.VERCEL_GIT_COMMIT_SHA || undefined,
  // Attach stack traces for all log levels
  attachStacktrace: true,
  // Capture console errors/warnings as breadcrumbs
  beforeSend(event) {
    // Remove sensitive data if needed
    return event;
  },
});

export default Sentry;
