# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

# Copy dependency + config files
COPY package.json pnpm-lock.yaml .npmrc ./
COPY prisma ./prisma/

# Install all dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Generate Prisma client
RUN pnpm db:generate

# Copy source code
COPY . .

# Build TypeScript
RUN pnpm build

# ─── Stage 2: Production ─────────────────────────────────────────────────────
FROM node:20-alpine AS production

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

ENV NODE_ENV=production

# Copy dependency + config files
COPY package.json pnpm-lock.yaml .npmrc ./
COPY prisma ./prisma/

# Install production deps only
RUN pnpm install --frozen-lockfile --prod

# Generate Prisma client (needed at runtime)
RUN pnpm db:generate

# Copy built output from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
