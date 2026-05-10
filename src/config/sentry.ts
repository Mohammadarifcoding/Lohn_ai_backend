import * as Sentry from "@sentry/node";

const dsn = process.env.SENTRY_DSN;
const isProduction = process.env.NODE_ENV === "production";

function getSampleRate(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 && parsed <= 1 ? parsed : fallback;
}

if (!dsn) {
  // eslint-disable-next-line no-console
  console.warn(
    "[Sentry] SENTRY_DSN is not set. Errors will NOT be sent to Sentry. " +
      "Add SENTRY_DSN to your environment variables (e.g. Vercel Dashboard)."
  );
}

Sentry.init({
  dsn,
  enabled: !!dsn && process.env.SENTRY_ENABLED !== "false",
  sendDefaultPii: true,
  tracesSampleRate: getSampleRate(
    process.env.SENTRY_TRACES_SAMPLE_RATE,
    isProduction ? 0.02 : 0
  ),
  profilesSampleRate: getSampleRate(process.env.SENTRY_PROFILES_SAMPLE_RATE, 0),
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
