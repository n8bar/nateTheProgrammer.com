# Dev Environment

## Purpose
- Track non-sensitive dev environment details for this project.
- Sensitive/local-only details live in `.cybercreek/localDevEnv.md` (untracked).

## Current Environment
- Primary dev VM: AlmaLinux 9 (hostname: AL9).
- Note: other sites share the host (each app binds its own IP on `:80`); avoid port collisions.
- Dedicated IP for this project: `192.168.68.28` (secondary address on `enp0s3`, persisted in NetworkManager).

## Conventions
- Project path: `/opt/ntp`.
- Serving model: Docker container (`ntp-web-1`) publishing `192.168.68.28:80 -> 3000`, matching the per-app per-IP convention on this VM. The container runs the Next.js dev server with hot reload; source is bind-mounted.
- Bind IP is configured via `NTP_BIND_IP` in `.env` (used by `compose.yaml` for the host port mapping).
- Reserved/in-use ports on the host: avoid 22, 3306, 3307, 5173, 9443, 10000. Port 80 is per-IP; this project owns `192.168.68.28:80`.
- Toolchain (host): system Node 20 + pnpm (installed for `n8` at `~/.local/npm/bin`, on PATH via `~/.bashrc`). The container uses its own Node 20 + pnpm; deps install inside the image.

## Runbook (containerized — default)
- Start: `cd /opt/ntp && docker compose up -d --build` → http://192.168.68.28
- Stop: `cd /opt/ntp && docker compose down`
- Logs: `cd /opt/ntp && docker compose logs -f web`
- Rebuild after dependency changes: `docker compose up -d --build`
- Hot reload: editing files under `/opt/ntp` updates the running site (bind mount + `WATCHPACK_POLLING`).

## Runbook (bare process — fallback, no container)
- `cd /opt/ntp && pnpm dev --hostname 0.0.0.0 --port 3000` (serves on `:3000`, not `:80`).
