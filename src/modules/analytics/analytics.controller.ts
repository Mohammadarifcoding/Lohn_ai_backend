import type { Request, Response } from "express";
import { createHash } from "node:crypto";
import { prisma } from "../../config/database.js";

const DEFAULT_ANALYTICS_SALT = "lohnai-website-analytics";

function pickClientIp(headerValue: string | undefined) {
  if (!headerValue) {
    return "unknown-ip";
  }
  return headerValue.split(",")[0]?.trim() || "unknown-ip";
}

function getVisitorHashFromRequest(req: Request): string {
  const forwardedFor = req.get("x-forwarded-for");
  const realIp = req.get("x-real-ip");
  const userAgent = req.get("user-agent") || "unknown-user-agent";
  const acceptLanguage = req.get("accept-language") || "unknown-language";
  const analyticsSalt = process.env.ANALYTICS_SALT || DEFAULT_ANALYTICS_SALT;

  const visitorSeed = [
    pickClientIp(forwardedFor || realIp),
    userAgent,
    acceptLanguage,
    analyticsSalt,
  ].join("|");

  return createHash("sha256").update(visitorSeed).digest("hex");
}

function isTrackablePathname(pathname: string) {
  if (!pathname.startsWith("/")) {
    return false;
  }
  return !(
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/eval") ||
    pathname.startsWith("/_next")
  );
}

export async function trackPageView(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body as { pathname?: unknown };
    const pathname =
      typeof body.pathname === "string" ? body.pathname.trim().slice(0, 200) : "";

    if (!pathname || !isTrackablePathname(pathname)) {
      res.status(400).json({ ok: false });
      return;
    }

    const visitorHash = getVisitorHashFromRequest(req);

    await prisma.sitePageView.create({
      data: {
        pathname,
        visitorHash,
      },
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Page view analytics failed", error);
    res.status(500).json({ ok: false });
  }
}

function sanitizeConversationId(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }
  const normalized = value.trim();
  if (!normalized || normalized.length > 128) {
    return null;
  }
  return normalized;
}

export type AvatarAnalyticsRoute = "gemini-live";

export async function trackAvatarUsage(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body as { conversationId?: unknown; route?: unknown };
    const conversationId = sanitizeConversationId(body.conversationId);

    if (!conversationId) {
      res.status(400).json({ ok: false });
      return;
    }

    const route: AvatarAnalyticsRoute =
      body.route === "gemini-live" ? "gemini-live" : "gemini-live";

    await prisma.$transaction([
      prisma.aiConversation.upsert({
        where: { conversationId },
        create: {
          conversationId,
          apiHitCount: 1,
        },
        update: {
          apiHitCount: {
            increment: 1,
          },
        },
      }),
      prisma.aiApiHit.create({
        data: {
          conversationId,
          route,
        },
      }),
    ]);

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Avatar analytics failed", error);
    res.status(500).json({ ok: false });
  }
}
