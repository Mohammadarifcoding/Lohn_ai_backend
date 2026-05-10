import type { Request, Response } from "express";
import { createHash } from "node:crypto";
import { z } from "zod";
import { prisma } from "../../config/database.js";
import { config } from "../../config/index.js";

const PageViewSchema = z.object({
  pathname: z.string().trim().min(1).max(200),
});

const AvatarUsageSchema = z.object({
  conversationId: z.string().trim().min(1).max(128).regex(/^[A-Za-z0-9._:-]+$/),
  route: z.literal("gemini-live").optional(),
});

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

  const visitorSeed = [
    pickClientIp(forwardedFor || realIp),
    userAgent,
    acceptLanguage,
    config.ANALYTICS_SALT,
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
    const parsed = PageViewSchema.safeParse(req.body);

    if (!parsed.success || !isTrackablePathname(parsed.data.pathname)) {
      res.status(400).json({ ok: false });
      return;
    }

    const visitorHash = getVisitorHashFromRequest(req);

    await prisma.sitePageView.create({
      data: {
        pathname: parsed.data.pathname,
        visitorHash,
      },
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Page view analytics failed", error);
    res.status(500).json({ ok: false });
  }
}

export type AvatarAnalyticsRoute = "gemini-live";

export async function trackAvatarUsage(req: Request, res: Response): Promise<void> {
  try {
    const parsed = AvatarUsageSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({ ok: false });
      return;
    }

    const conversationId = parsed.data.conversationId;
    const route: AvatarAnalyticsRoute = parsed.data.route ?? "gemini-live";

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
