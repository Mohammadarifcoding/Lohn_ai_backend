import { prisma } from "../../config/database.js";
import { NotFoundError } from "../../utils/appError.js";
import type { UpdateUserInput } from "./user.schema.js";

const userSelect = {
  id: true,
  name: true,
  email: true,
  emailVerified: true,
  image: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} as const;

export class UserService {
  async getUserById(id: string) {
    const foundUser = await prisma.user.findUnique({
      where: { id },
      select: userSelect,
    });

    if (!foundUser) {
      throw new NotFoundError("User not found");
    }

    return foundUser;
  }

  async updateUser(id: string, data: UpdateUserInput) {
    const foundUser = await prisma.user.findUnique({ where: { id } });

    if (!foundUser) {
      throw new NotFoundError("User not found");
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data,
      select: userSelect,
    });

    return updatedUser;
  }

  async deleteUser(id: string) {
    const foundUser = await prisma.user.findUnique({ where: { id } });

    if (!foundUser) {
      throw new NotFoundError("User not found");
    }

    await prisma.user.delete({ where: { id } });
  }

  async getAllUsers(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        select: userSelect,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.user.count(),
    ]);

    return {
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}

export const userService = new UserService();
