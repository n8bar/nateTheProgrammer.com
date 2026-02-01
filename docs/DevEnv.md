# Dev Environment

## Purpose
- Track non-sensitive dev environment details for this project.
- Sensitive/local-only details live in `.cybercreek/localDevEnv.md` (untracked).

## Current Environment
- Primary dev VM: AlmaLinux 9 (hostname: AL9).
- Note: other sites share the host; avoid port collisions.

## Conventions
- Project path: `/opt/ntp`.
- Default ports: avoid 22, 3306, 3307, 5173, 9443, 10000. Port 80 is already in use; prefer Next dev on 3000.
- Bind host: use `pnpm dev --hostname 0.0.0.0` to make the dev server reachable on the secondary IP.

## Runbook
- Start dev server: `cd /opt/ntp && pnpm dev --hostname 0.0.0.0 --port 3000`.
- Stop dev server: `Ctrl+C` in the same terminal.
- Logs: dev server output in the same terminal.
