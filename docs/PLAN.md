# Plan

## Status
- Last updated: 2026-01-31 21:38

## Project Overview
- Resume site + internet playground for nateTheProgrammer (n8).
- Primary goal: showcase work, make it easy to contact, and leave a strong visual impression.

## Milestones (in order)
## Completed Milestones
1. [x] Scope and information architecture [completed 26/01/31 19:36]
   - [x] Confirm pages/sections (legacy tabs + blog included, flexible baseline). [completed 26/01/31 19:36]
   - [x] Define content requirements per section (based on legacy baseline + LinkedIn, flexible baseline). [completed 26/01/31 19:36]

## Upcoming Milestones (in order)
2. Technical architecture
   - [x] Pick framework (Next.js). [completed 26/01/31 20:13]
   - [x] Initialize git repository and remote. [completed 26/01/31 20:30]
   - [x] Decide content update workflow (self-hosted Ghost headless blog; posts not stored in repo). [completed 26/01/31 21:14]
   - [x] Decide stack (TypeScript, CSS Modules + CSS variables, pnpm, ESLint + Prettier). [completed 26/01/31 21:27]
   - [x] Define testing strategy (mixed TDD: Vitest + RTL for logic, Playwright smoke; UI after the fact). [completed 26/01/31 21:27]
   - [x] Define routing/content structure and data sources. [completed 26/01/31 21:38]
3. UX direction
   - [ ] Visual theme, typography, motion, and layout system.
   - [ ] UX guardrails checklist applied per section.
4. MVP build
   - [ ] Implement core pages and global layout.
   - [ ] Add baseline SEO, analytics, and accessibility checks.
   - [ ] Select hosting target and deployment approach (after MVP scope stabilizes).
5. QA + launch
   - [ ] Performance pass, accessibility pass, content polish.

## Content Sources
- Resume baseline: LinkedIn export, excluding non-IT roles.
- Exclude older/borderline roles (Reliance Electric, Tricom Systems Engineer, Western Precision).
- Use Tricom Communications Services Web Application Developer role only.
- Red Oak role listed as I.T. only (no estimator duties).
- Site copy will be a fresh rewrite; LinkedIn text is reference only.
- Reference file: `.cybercreek/LinkedInSummary1.md` (untracked).
- Education: list the BS in Software Development only (omit GED and high school).
- Blog is part of the site; plan for it in IA and MVP.
- Non-Home/Contact content will be curated into Ghost (headless) instead of tracked JSON.

## Constraints
- Fast load times and accessibility as first-class requirements.
- Content should be easy to update without touching core layout/visual systems.

## Visual Direction (draft v0.1)
- Overall tone: polished hire-me with a single Playground tab for in-progress experiments (directional, not final).
- Playground disclaimer (directional): "Playground: experiments in progress; please don't enter sensitive data."
- Palette: blues from legacy site as primary; charcoal base (avoid white backgrounds).
- Accents: tiny hits of yellow (e.g., outlines, highlights).
- Logo: keep glasses-on-lightbulb mark.

## Data Sourcing (draft v0.1)
- Keep super-static content in-repo only (Home + Contact copy and layout).
- Blog posts: Ghost (self-hosted, headless Content API; posts not stored in repo).
- Skills/experience/portfolio/references/certs/education: Ghost (headless Content API; posts not stored in repo).
- Keep raw LinkedIn export in `.cybercreek/` only.

## Routing + Data Sources (draft v0.2)
- `/` (Home): `src/content/site.json` (hero/CTA/featured).
- `/skills`: Ghost page `skills` (rich text/Markdown).
- `/experience`: Ghost page `experience`.
- `/portfolio`: Ghost posts tagged `portfolio` (optional detail via `/portfolio/[slug]`).
- `/portfolio/[slug]`: Ghost post detail (tag `portfolio`).
- `/references`: Ghost page `references` (only if real quotes exist).
- `/certifications`: Ghost page `certifications`.
- `/education`: Ghost page `education`.
- `/blog`: Ghost posts (list) with ISR caching (default revalidate 10 min; adjustable).
- `/blog/[slug]`: Ghost post detail; server-side fetch with revalidation.
- `/contact`: form posts to `/api/contact` (Route Handler); email address stays server-only via env.
- `/playground`: in-repo experiments; gated with disclaimer copy from `src/content/site.json`.
- Utility routes: `/sitemap.xml` and `/rss.xml` generated server-side (uses Ghost + in-repo content).

## Information Architecture (draft v0.1)
- Home: hero + value prop, featured work, primary CTA
- Skills: curated skills (core stack + strengths), not full LinkedIn list
- Experience: IT-only roles, reverse-chronological
- Portfolio: project grid + case-study highlights
- References: testimonials/endorsements (only if real quotes exist)
- Certifications: cert list with dates
- Education: BS in Software Development only
- Blog: active section with posts list + post detail pages
- Contact Nate: contact form + direct email + social links

## Minimum Feature Set (legacy site baseline)
- Global navigation includes: Home, Skills, Experience, Portfolio, References, Certifications, Education, Blog, Contact Nate.
- Home: short intro + hero image + brief story + CTA area.
- Skills: grouped skills list with multiple categories.
- Experience: role list with company, title, dates, and short descriptions.
- Portfolio: project list with short summaries and links to demos or GitHub.
- References: short testimonials with names/dates.
- Certifications: list of certifications (with badges/images where available).
- Education: BS in Software Development (school + dates).
- Contact Nate: contact form plus direct email.
- Optional legacy widgets (not required for MVP): search, recent posts, archives.

## Content Requirements (draft v0.1)
- Home
  - Hero headline + 1-2 sentence subhead (fresh rewrite).
  - Primary CTA (contact or portfolio).
  - 3 featured items (projects or highlights).
  - Optional hero media (photo or illustration).
- Skills
  - Curated list (6-12) grouped by category (e.g., Languages, Frameworks, Platforms).
  - Source: LinkedIn skills list, curated down.
- Experience
  - IT-only roles, reverse-chronological.
  - Fields: company, title, location, dates, 2-4 bullets per role.
  - Source: LinkedIn export + manual refinements.
- Portfolio
  - 3-8 projects at launch.
  - Fields: title, short summary, role, tech stack, links (demo/GitHub), 1 image each if available.
  - Source: GitHub + existing site + manual updates.
- References
  - Only if real quotes exist.
  - Fields: quote, name, relationship/context, date (optional).
- Certifications
  - 1-2 certifications at launch.
  - Fields: name, issuer, date, credential link (optional).
  - Source: LinkedIn export.
- Education
  - BS in Software Development only.
  - Fields: school, degree, dates.
- Blog
  - Posts index with date, title, short excerpt.
  - Post detail pages with readable layout and shareable URLs.
  - Start with legacy posts (even if last post was 2023).
- Contact Nate
  - Contact form: name, email, message.
  - Direct email link + social links (GitHub, LinkedIn; add others if desired).

## Open Questions
- Preferred hosting target (after MVP scope stabilizes)?
- Any must-have content blocks or interactive playground features?
- Target launch window?
