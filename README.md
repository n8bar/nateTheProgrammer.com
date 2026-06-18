# nateTheProgrammer.com

Resume site + internet playground for Nate Barlow (nateTheProgrammer). A lean,
proof-first portfolio: Home → Work (case studies) → Experience → Writing → Contact.

## Stack at a glance

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Plain CSS** — one `src/app/globals.css` with CSS-variable design tokens. No Tailwind / CSS framework.
- **Self-hosted fonts** via `next/font/local` (Saira Semi Condensed + JetBrains Mono)
- **Content lives in the repo** as typed modules — `src/content/*.ts` (no CMS)
- **pnpm** · ESLint + Prettier
- **Contact email:** Resend (HTTP API) from `/api/contact`
- **SEO:** `next/og` OG image + Next-native `sitemap` / `robots` / RSS
- **Dev runtime:** Docker (`Dockerfile` + `compose.yaml`) running `next dev`

## Run it

```bash
# Containerized (default) — serves on the dedicated IP from .env (NTP_BIND_IP)
docker compose up -d --build      # → http://192.168.68.28
docker compose logs -f web        # tail logs
docker compose down               # stop

# Or bare (no container)
pnpm install
pnpm dev --hostname 0.0.0.0 --port 3000
```

Other scripts: `pnpm build` · `pnpm typecheck` · `pnpm lint` · `pnpm format`

## Where to edit what

| You want to change… | Edit |
| --- | --- |
| **The words** (hero, case studies, roles, posts, skills, testimonials) | `src/content/*.ts` — `site.ts`, `work.ts`, `experience.ts`, `writing.ts` |
| **Page structure / markup** (the JSX) | `src/app/**/page.tsx` and `src/components/*.tsx` |
| **The global shell** (`<head>`, header/footer wrap) | `src/app/layout.tsx` |
| **Look & feel** (colors, spacing, fonts, type scale) | `src/app/globals.css` — design tokens are the `--variables` at the top |

Rule of thumb: **wording → `src/content`**, **layout → the page's `.tsx`**, **style → `globals.css`**.

> ⚠️ `site/*.html` at the repo root are old design mockups, **not** the live site. The real site is everything under `src/`.

## Docs

- [`docs/DesignSpec.md`](docs/DesignSpec.md) — the design specification (intended outcomes, standards — the *what/why*)
- [`docs/PLAN.md`](docs/PLAN.md) — milestones and the route there (the *how*)
- [`docs/DevEnv.md`](docs/DevEnv.md) — dev environment + runbook
- [`docs/WORKFLOW.md`](docs/WORKFLOW.md) — process rules
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) — what changed, when
