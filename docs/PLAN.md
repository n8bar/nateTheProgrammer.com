# Plan

This plan is the route to meeting the design specification. The intended outcomes, behavior, and standards live in [`docs/DesignSpec.md`](DesignSpec.md); this document tracks the milestones and implementation decisions that get us there.

## Status
- Last updated: 2026-06-15 21:45
- Dev serving: containerized on dedicated IP `192.168.68.28:80` (see `docs/DevEnv.md`). Production hosting target remains deferred (milestone 4.3).
- IA reset (2026-06-06): moved from a legacy-mirroring, 10-page site map to a lean, proof-first structure. Driver: local brainstorm notes `.brainstorm/2026-06-06-site-reset-decision.md` and `-coaching.md` (untracked). The resulting standard is captured in the design spec.

## Project Overview
- Resume site + internet playground for nateTheProgrammer (n8).
- Design reference: see [`docs/DesignSpec.md`](DesignSpec.md) for purpose, positioning, IA intent, content standards, visual system, behavior, and quality bars.

## Milestones (in order)
## Completed Milestones
1) [x] Scope and information architecture [completed 26/01/31 19:36]
   1) [x] Confirm pages/sections [completed 26/01/31 19:36] — note: IA revised 26/06/06 to the proof-first structure (see design spec).
   2) [x] Define content requirements per section [completed 26/01/31 19:36] — note: requirements reframed 26/06/06 around proof, not legacy inventory (see design spec).
2) [x] Technical architecture [completed 26/01/31 21:45]
   1) [x] Pick framework (Next.js) [completed 26/01/31 20:13]
   2) [x] Initialize git repository and remote [completed 26/01/31 20:30]
   3) [x] Decide content update workflow (self-hosted Ghost headless blog; posts not stored in repo) [completed 26/01/31 21:14]
   4) [x] Decide stack (TypeScript, CSS variables, pnpm, ESLint + Prettier) [completed 26/01/31 21:27]
   5) [x] Define testing strategy (mixed TDD: Vitest + RTL for logic, Playwright smoke; UI after the fact) [completed 26/01/31 21:27]
   6) [x] Define routing/content structure and data sources [completed 26/01/31 21:45] — note: routes revised 26/06/06 (see Routing + Data Sources).
3) [x] UX direction [completed 26/01/31 22:19]
   1) [x] Visual theme, typography, motion, and layout system [completed 26/01/31 22:19]
   2) [x] UX guardrails checklist applied per section [completed 26/01/31 21:50]

## Upcoming Milestones (in order)
4) [ ] MVP build
   1) [ ] Implement core pages and global layout
      1) [x] Global shell + navigation [completed 26/06/07 08:09]
         1) [x] Design tokens + layout primitives [completed 26/01/31 22:53]
            1) [x] Define CSS variables for colors, spacing, type scale [completed 26/01/31 22:48]
            2) [x] Create container and grid utilities [completed 26/01/31 22:48]
            3) [x] Validate contrast + line length targets [completed 26/01/31 22:53]
         2) [x] Header + navigation [completed 26/01/31 23:23] — note: nav set revised 26/06/06 to Home, Work, Experience, Writing, Contact (Playground secondary).
            1) [x] Build header layout and brand mark slot [completed 26/01/31 23:23]
            2) [x] Implement desktop nav layout + active states [completed 26/01/31 23:23]
            3) [x] Implement mobile nav (menu, focus trap, close behavior) [completed 26/01/31 23:23]
            4) [x] Add skip link + focus-visible styles [completed 26/01/31 23:23]
         3) [x] Footer [completed 26/06/06 17:04]
            1) [x] Define footer content blocks (contact, social, legal) [completed 26/06/06 17:04]
            2) [x] Add backlink/CTA area [completed 26/06/06 17:04]
            3) [x] Ensure responsive stacking and spacing [completed 26/06/06 17:04]
         4) [x] Layout shell integration [completed 26/06/06 21:05]
            1) [x] Wire global layout to app router [completed 26/06/06 21:05]
            2) [x] Add base typography styles and rhythm [completed 26/06/06 21:05]
            3) [x] Add background grid + glow layers [completed 26/06/06 21:05]
         5) [x] Apply UX guardrails checklist [completed 26/06/07 08:09]
            1) [x] Verify focus order + keyboard navigation [completed 26/06/06 21:42] — skip link, mobile-menu focus trap + Escape + focus restore, visible focus-visible rings, ARIA on toggle/dialog all verified.
            2) [x] Verify no layout shift for nav states [completed 26/06/06 21:42] — active state changes color/background only (no resize); next/font fallback avoids font CLS; added `scrollbar-gutter: stable` so opening the mobile menu (body overflow hidden) causes no shift.
            3) [x] Verify mobile tap targets + contrast [completed 26/06/07 08:09] — tap targets done (hamburger 44px min; mobile menu links ~50px). Contrast: body 16.3:1 and muted 7.5:1 pass AA; added `--color-accent-text` (#6f97ff, ~6.9:1) for accent-sized text (eyebrows, active nav, prose links), keeping #2f6bff for large text/icons/borders — all accent text now passes AA.
      2) [ ] Home page (the lead: intro + featured case studies + proof + contact CTA)
         1) [ ] Compose hero, value prop, and primary CTA
         2) [ ] Feature the case studies (CryptoZing, TermiWeb, DoItList) with one-line proof each
         3) [ ] Surface supporting proof inline (curated skills summary, a testimonial or two)
         4) [ ] Bind home copy from `src/content/site.json`
         5) [ ] Apply UX guardrails checklist
      3) [x] Work index (case studies) [completed 26/06/15 21:28] — built before Home (user-directed); content from `src/content/work.ts`.
         1) [x] Load case studies from in-repo content (`src/content/work.ts`) [completed 26/06/15 21:28]
         2) [x] Render case-study cards (context/status, tagline, tech, link) [completed 26/06/15 21:28]
         3) [x] Apply UX guardrails checklist [completed 26/06/15 21:28]
      4) [x] Work detail [completed 26/06/15 21:28]
         1) [x] Static params + detail by slug (notFound on miss) [completed 26/06/15 21:28]
         2) [x] Render case-study template (problem / what I built / outcome, meta, links, image) [completed 26/06/15 21:28]
         3) [x] Apply UX guardrails checklist [completed 26/06/15 21:28]
      5) [ ] Experience page (results-framed)
         1) [ ] Fetch Ghost page content
         2) [ ] Render roles framed around responsibilities + results (not a bare timeline)
         3) [ ] Render compact Credentials block (curated skills, education, certifications) from `src/content/site.json`
         4) [ ] Apply UX guardrails checklist
      6) [ ] Writing index (Ghost)
         1) [ ] Fetch Ghost posts for list view
         2) [ ] Render post cards with excerpts
         3) [ ] Apply UX guardrails checklist
      7) [ ] Writing detail (Ghost)
         1) [ ] Fetch Ghost post by slug
         2) [ ] Render post body + meta
         3) [ ] Apply UX guardrails checklist
      8) [ ] Contact page
         1) [ ] Build contact form UI
         2) [ ] Post to `/api/contact` (server-only email)
         3) [ ] Apply UX guardrails checklist
      9) [ ] Playground page (secondary; not in primary nav)
         1) [ ] Render disclaimer + safe layout slots
         2) [ ] Load external repos/demos from `playground/*` clones
         3) [ ] Read `playground.json` metadata per repo
         4) [ ] Render external repo cards/embeds
         5) [ ] Apply UX guardrails checklist
   2) [ ] Add baseline SEO, analytics, and accessibility checks
      1) [ ] SEO baseline
         1) [ ] Add meta, OpenGraph, and Twitter tags
         2) [ ] Add structured data (JSON-LD)
         3) [ ] Validate sitemap + RSS output
      2) [ ] Analytics baseline
         1) [ ] Select analytics provider
         2) [ ] Implement pageview tracking
         3) [ ] Verify event payloads
      3) [ ] Accessibility pass
         1) [ ] Run automated checks (Lighthouse/axe)
         2) [ ] Fix high/medium issues
         3) [ ] Apply UX guardrails checklist
   3) [ ] Select hosting target and deployment approach (after MVP scope stabilizes)
      1) [ ] Hosting requirements
         1) [ ] Document traffic, uptime, and perf needs
         2) [ ] Evaluate options (deferred)
         3) [ ] Decide on hosting target
      2) [ ] Deployment workflow
         1) [ ] Define build + deploy steps
         2) [ ] Plan secrets/env management
         3) [ ] Outline rollback strategy
5) [ ] QA + launch
   1) [ ] Performance pass, accessibility pass, content polish

## Content Sources
- Resume baseline: LinkedIn export, excluding non-IT roles.
- Exclude older/borderline roles (Reliance Electric, Tricom Systems Engineer, Western Precision).
- Use Tricom Communications Services Web Application Developer role only.
- Red Oak role listed as I.T. only (no estimator duties).
- Site copy will be a fresh rewrite; LinkedIn text is reference only.
- Reference file: `.cybercreek/LinkedInSummary1.md` (untracked).
- Education: list the BS in Software Development only (omit GED and high school).
- Case studies (repos + live links found; deeper problem/build/results facts still to come from Nate):
  - CryptoZing — https://github.com/n8bar/CryptoZing (PHP) — Bitcoin invoicing with on-chain payment tracking — live: https://cryptozing.app
  - TermiWeb — https://github.com/n8bar/TermiWeb (TypeScript) — open-source browser terminal for a Windows host — live: https://termiweb.com
  - DoItList — https://github.com/n8bar/DoItList (Elixir / Phoenix LiveView + Postgres) — task trees with rolled-up progress — live on the dev VM
- Writing supports the main story; keep credible legacy posts, drop filler.

## Data Sourcing
- Keep super-static, stable content in-repo (`src/content/site.json`): Home copy, curated skills summary, education, certifications, testimonials, plus Contact and Playground shells.
- Case studies (Work): in-repo, typed (`src/content/work.ts`) — a small curated proof set where layout control matters; case-study images in `public/work/`. (Ghost deferred; revisit if the set grows.)
- Experience narrative: Ghost page `experience`.
- Writing (blog): Ghost posts (headless Content API; not stored in repo).
- Playground entries: external git clones under `playground/` (ignored by repo), each with a `playground.json` metadata file.
- Keep raw LinkedIn export in `.cybercreek/` only.
- Rationale: skills/education/certifications/references are stable and surfaced inline as proof, so they live in-repo rather than as standalone Ghost pages.

## Routing + Data Sources
- `/` (Home): `src/content/site.json` (hero/value prop/CTA, featured case-study refs, skills summary, testimonials).
- `/work`: case-study index from `src/content/work.ts`.
- `/work/[slug]`: case-study detail (statically generated). Slugs: `colorado-city-fuel`, `ticker-automotive`, `blackcloud-pos`, `cryptozing`, `termiweb`.
- `/experience`: Ghost page `experience`, plus an in-repo Credentials block (skills/education/certs) from `site.json`.
- `/writing`: Ghost posts (list) with ISR caching (default revalidate 10 min; adjustable).
- `/writing/[slug]`: Ghost post detail; server-side fetch with revalidation.
- `/contact`: form posts to `/api/contact` (Route Handler); email address stays server-only via env.
- `/playground`: in-repo layout shell + local `playground/*/playground.json` metadata for external repos/demos (secondary; linked from footer, not primary nav).
- Utility routes: `/sitemap.xml` and `/rss.xml` generated server-side (uses Ghost + in-repo content).
- Retired routes (folded into the above): `/skills`, `/references`, `/certifications`, `/education`; `/portfolio` → `/work`; `/blog` → `/writing`.

## Open Questions
- Gather deeper per-study facts (problem/build/results) for the three case studies — repos/tech/live links are captured in Content Sources; needed when Work content is built, not for the shell.
- Preferred hosting target (after MVP scope stabilizes)?
- Target launch window?
