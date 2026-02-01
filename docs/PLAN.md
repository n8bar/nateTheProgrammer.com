# Plan

## Status
- Last updated: 2026-01-31 22:53

## Project Overview
- Resume site + internet playground for nateTheProgrammer (n8).
- Primary goal: showcase work, make it easy to contact, and leave a strong visual impression.

## Milestones (in order)
## Completed Milestones
1) [x] Scope and information architecture [completed 26/01/31 19:36]
   1) [x] Confirm pages/sections (legacy tabs + blog included, flexible baseline) [completed 26/01/31 19:36]
   2) [x] Define content requirements per section (based on legacy baseline + LinkedIn, flexible baseline) [completed 26/01/31 19:36]
2) [x] Technical architecture [completed 26/01/31 21:45]
   1) [x] Pick framework (Next.js) [completed 26/01/31 20:13]
   2) [x] Initialize git repository and remote [completed 26/01/31 20:30]
   3) [x] Decide content update workflow (self-hosted Ghost headless blog; posts not stored in repo) [completed 26/01/31 21:14]
   4) [x] Decide stack (TypeScript, CSS Modules + CSS variables, pnpm, ESLint + Prettier) [completed 26/01/31 21:27]
   5) [x] Define testing strategy (mixed TDD: Vitest + RTL for logic, Playwright smoke; UI after the fact) [completed 26/01/31 21:27]
   6) [x] Define routing/content structure and data sources [completed 26/01/31 21:45]
3) [x] UX direction [completed 26/01/31 22:19]
   1) [x] Visual theme, typography, motion, and layout system [completed 26/01/31 22:19]
   2) [x] UX guardrails checklist applied per section [completed 26/01/31 21:50]

## Upcoming Milestones (in order)
4) [ ] MVP build
   1) [ ] Implement core pages and global layout
      1) [ ] Global shell + navigation
         1) [ ] Design tokens + layout primitives
            1) [x] Define CSS variables for colors, spacing, type scale [completed 26/01/31 22:48]
            2) [x] Create container and grid utilities [completed 26/01/31 22:48]
            3) [x] Validate contrast + line length targets [completed 26/01/31 22:53]
         2) [ ] Header + navigation
            1) [ ] Build header layout and brand mark slot
            2) [ ] Implement desktop nav layout + active states
            3) [ ] Implement mobile nav (menu, focus trap, close behavior)
            4) [ ] Add skip link + focus-visible styles
         3) [ ] Footer
            1) [ ] Define footer content blocks (contact, social, legal)
            2) [ ] Add backlink/CTA area
            3) [ ] Ensure responsive stacking and spacing
         4) [ ] Layout shell integration
            1) [ ] Wire global layout to app router
            2) [ ] Add base typography styles and rhythm
            3) [ ] Add background grid + glow layers
         5) [ ] Apply UX guardrails checklist
            1) [ ] Verify focus order + keyboard navigation
            2) [ ] Verify no layout shift for nav states
            3) [ ] Verify mobile tap targets + contrast
      2) [ ] Home page
         1) [ ] Compose hero, CTA, and featured highlights
         2) [ ] Bind home copy from `src/content/site.json`
         3) [ ] Apply UX guardrails checklist
      3) [ ] Skills page (Ghost)
         1) [ ] Fetch Ghost page content
         2) [ ] Render rich text blocks
         3) [ ] Apply UX guardrails checklist
      4) [ ] Experience page (Ghost)
         1) [ ] Fetch Ghost page content
         2) [ ] Render timeline layout
         3) [ ] Apply UX guardrails checklist
      5) [ ] Portfolio index (Ghost)
         1) [ ] Fetch Ghost posts tagged `portfolio`
         2) [ ] Render project cards + highlights
         3) [ ] Apply UX guardrails checklist
      6) [ ] Portfolio detail (Ghost)
         1) [ ] Fetch Ghost post by slug
         2) [ ] Render case-study template
         3) [ ] Apply UX guardrails checklist
      7) [ ] References page (Ghost)
         1) [ ] Fetch Ghost page content
         2) [ ] Render quote layout
         3) [ ] Apply UX guardrails checklist
      8) [ ] Certifications page (Ghost)
         1) [ ] Fetch Ghost page content
         2) [ ] Render certifications list
         3) [ ] Apply UX guardrails checklist
      9) [ ] Education page (Ghost)
         1) [ ] Fetch Ghost page content
         2) [ ] Render education details
         3) [ ] Apply UX guardrails checklist
      10) [ ] Blog index (Ghost)
         1) [ ] Fetch Ghost posts for list view
         2) [ ] Render post cards with excerpts
         3) [ ] Apply UX guardrails checklist
      11) [ ] Blog detail (Ghost)
         1) [ ] Fetch Ghost post by slug
         2) [ ] Render post body + meta
         3) [ ] Apply UX guardrails checklist
      12) [ ] Contact page
         1) [ ] Build contact form UI
         2) [ ] Post to `/api/contact` (server-only email)
         3) [ ] Apply UX guardrails checklist
      13) [ ] Playground page
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
- Blog is part of the site; plan for it in IA and MVP.
- Non-Home/Contact content will be curated into Ghost (headless) instead of tracked JSON, except Playground (local clones).

## Constraints
- Fast load times and accessibility as first-class requirements.
- Content should be easy to update without touching core layout/visual systems.

## Visual Direction
- Theme: Blueprint Night (locked).
- Typography: Saira Semi Condensed (primary), JetBrains Mono (meta/labels).
- Palette: charcoal base, accent blue (#2f6bff), gold outlines (#ffd166), muted slate text.
- Background: subtle blueprint grid overlay with soft radial glows.
- Motion: gentle fade-up reveals, low-amplitude hover lift, honor prefers-reduced-motion.
- Layout: left-rail nav, asymmetric grid, card-based sections with timeline accents.
- Playground disclaimer: "Playground: experiments in progress; please don't enter sensitive data."
- Logo: keep glasses-on-lightbulb mark.

## Data Sourcing
- Keep super-static content in-repo only (Home + Contact copy/layout, Playground shell).
- Blog posts: Ghost (self-hosted, headless Content API; posts not stored in repo).
- Skills/experience/portfolio/references/certs/education: Ghost (headless Content API; posts not stored in repo).
- Playground entries: external git clones under `playground/` (ignored by repo), each with a `playground.json` metadata file.
- Keep raw LinkedIn export in `.cybercreek/` only.

## Routing + Data Sources
- `/` (Home): `src/content/site.json` (hero/CTA/featured).
- `/skills`: Ghost page `skills` (rich text/Markdown).
- `/experience`: Ghost page `experience`.
- `/portfolio`: Ghost posts tagged `portfolio` (optional detail via `/portfolio/[slug]`).
- `/portfolio/[slug]`: Ghost post detail (tag `portfolio`).
- `/references`: Ghost page `references`.
- `/certifications`: Ghost page `certifications`.
- `/education`: Ghost page `education`.
- `/blog`: Ghost posts (list) with ISR caching (default revalidate 10 min; adjustable).
- `/blog/[slug]`: Ghost post detail; server-side fetch with revalidation.
- `/contact`: form posts to `/api/contact` (Route Handler); email address stays server-only via env.
- `/playground`: in-repo layout shell + local `playground/*/playground.json` metadata for external repos/demos.
- Utility routes: `/sitemap.xml` and `/rss.xml` generated server-side (uses Ghost + in-repo content).

## Information Architecture
- Home: hero + value prop, featured work, primary CTA
- Skills: curated skills (core stack + strengths), not full LinkedIn list
- Experience: IT-only roles, reverse-chronological
- Portfolio: project grid + case-study highlights
- References: testimonials/endorsements (real quotes exist)
- Certifications: cert list with dates
- Education: BS in Software Development only
- Blog: active section with posts list + post detail pages
- Contact Nate: contact form + social links

## Minimum Feature Set (legacy site baseline)
- Global navigation includes: Home, Skills, Experience, Portfolio, References, Certifications, Education, Blog, Contact Nate.
- Home: short intro + hero image + brief story + CTA area.
- Skills: grouped skills list with multiple categories.
- Experience: role list with company, title, dates, and short descriptions.
- Portfolio: project list with short summaries and links to demos or GitHub.
- References: short testimonials with names/dates.
- Certifications: list of certifications (with badges/images where available).
- Education: BS in Software Development (school + dates).
- Contact Nate: contact form.
- Optional legacy widgets (not required for MVP): search, recent posts, archives.

## Content Requirements
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
  - Real quotes exist; include them.
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
  - Server-only email delivery (address stored in env; not exposed client-side).
  - Social links (GitHub, LinkedIn; add others if desired).

## Open Questions
- Preferred hosting target (after MVP scope stabilizes)?
- Any must-have content blocks or interactive playground features?
- Target launch window?
