// Initialize Sentry BEFORE importing the app so error handlers are wired
// against an initialized client in serverless (Vercel) environments.
import "../src/config/sentry.js";

import app from "../src/app.js";

export default app;
