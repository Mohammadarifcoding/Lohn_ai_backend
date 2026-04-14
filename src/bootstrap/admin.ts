import { prisma } from "../config/database.js";
import { auth } from "../config/auth.js";
import { config } from "../config/index.js";
import { logger } from "../utils/logger.js";

export async function bootstrapAdminAccount(): Promise<void> {
  const email = config.ADMIN_EMAIL.trim().toLowerCase();

  const existing = await prisma.user.findUnique({
    where: { email },
    select: { id: true, role: true },
  });

  if (existing) {
    if (existing.role !== "admin") {
      await prisma.user.update({
        where: { id: existing.id },
        data: { role: "admin" },
      });

      logger.info("Existing user elevated to admin role", { email });
      return;
    }

    logger.info("Admin account already exists", { email });
    return;
  }

  await auth.api.signUpEmail({
    body: {
      name: config.ADMIN_NAME,
      email,
      password: config.ADMIN_PASSWORD,
    },
  });

  await prisma.user.update({
    where: { email },
    data: { role: "admin" },
  });

  logger.info("Bootstrap admin account created", { email });
}
