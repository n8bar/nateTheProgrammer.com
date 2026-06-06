# Dev-oriented image: runs the Next.js dev server with hot reload.
# A production image (next build && next start) is a separate concern for the
# hosting/deployment milestone; this exists to serve the dev build on a
# dedicated IP, matching the per-app container convention on the VM.
FROM node:20-bookworm-slim

WORKDIR /app

# pnpm via npm (corepack signature checks can be flaky on slim images).
RUN npm install -g pnpm@10

# Install deps in the image so the container owns its node_modules; the compose
# anonymous volume keeps this from being shadowed by the source bind mount.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Source is bind-mounted at runtime; this COPY is a fallback for standalone runs.
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000

CMD ["pnpm", "dev", "--hostname", "0.0.0.0", "--port", "3000"]
