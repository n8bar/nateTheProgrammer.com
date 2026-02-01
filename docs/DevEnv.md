# Dev Environment

## Purpose
- Track non-sensitive dev environment details for this project.
- Sensitive/local-only details live in `.cybercreek/localDevEnv.md` (untracked).

## Current Environment
- Primary dev VM: AlmaLinux 9 with Docker (hostname: AL9).
- Secondary VM: Windows IIS (use only when needed).
- Note: other sites share the host; avoid port collisions.

## Conventions
- Project path: `/opt/ntp`.
- Default ports: avoid 22, 3306, 3307, 5173, 9443, 10000. Port 80 is already in use; this project binds to a dedicated secondary IP.
- Reverse proxy: none; per-project port binds (nginx container for NTP).
- Container naming: docker compose project name `ntp` (network `ntp_default`).

## Runbook
- Start stack: `cd /opt/ntp && docker compose up -d`.
- Stop stack: `cd /opt/ntp && docker compose down`.
- Logs: `cd /opt/ntp && docker compose logs -f`.
