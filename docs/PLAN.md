# Plan

## Status
- Last updated: 2026-06-06 19:58
- Dev serving: containerized on dedicated IP `192.168.68.28:80` (see `docs/DevEnv.md`). Production hosting target remains deferred (milestone 4.3).
- IA reset (2026-06-06): moved from a legacy-mirroring, 10-page site map to a lean, proof-first structure. Driver: local brainstorm notes `.brainstorm/2026-06-06-site-reset-decision.md` and `-coaching.md` (untracked). See Positioning & Priorities below.

## Project Overview
- Resume site + internet playground for nateTheProgrammer (n8).
- Primary goal: present Nate as a practical, credible, current technical generalist — lead with proof, keep secondary material in the background, and make the next step (contact) easy.

## Positioning & Priorities
- Audience: hiring managers first; still legible to technical collaborators and practical buyers. Tone stays professional and credible, not freelance theater.
- Lead with proof, not self-description. Trust comes from concrete evidence: case studies, legible GitHub work, results-framed experience, specific references, supporting writing.
- Prominence order: (1) a clear intro to Nate and the work he does, (2) featured projects/case studies, (3) proof of judgment, follow-through, and range, (4) a simple path to contact.
- First proof set (case studies): **CryptoZing**, **TermiWeb**, **DoItList**. Each must show what was built, the problem solved, and why the work is trustworthy. (DoItList is a live Elixir/Phoenix app already running on the dev VM — demonstrable.)
- Page test: not "did the old site have this page?" but "does this page help a serious visitor understand, trust, and act?"
- Demote / avoid: broad skills lists without context, thin pages that only fill a site map, chronology for its own sake, hobby/playground material presented as core proof, legacy nav structure.
- Keep evidence, not structure: reusable project facts, strong references/testimonials, credible writing, and phrasing worth rewriting (not copying).

## Milestones (in order)
## Completed Milestones
1) [x] Scope and information architecture [completed 26/01/31 19:36]
   1) [x] Confirm pages/sections [completed 26/01/31 19:36] — note: IA revised 26/06/06 to the proof-first structure (see Information Architecture).
   2) [x] Define content requirements per section [completed 26/01/31 19:36] — note: requirements reframed 26/06/06 around proof, not legacy inventory.
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
      1) [ ] Global shell + navigation
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
         4) [ ] Layout shell integration
            1) [ ] Wire global layout to app router
            2) [ ] Add base typography styles and rhythm
            3) [ ] Add background grid + glow layers
         5) [ ] Apply UX guardrails checklist
            1) [ ] Verify focus order + keyboard navigation
            2) [ ] Verify no layout shift for nav states
            3) [ ] Verify mobile tap targets + contrast
      2) [ ] Home page (the lead: intro + featured case studies + proof + contact CTA)
         1) [ ] Compose hero, value prop, and primary CTA
         2) [ ] Feature the case studies (CryptoZing, TermiWeb, DoItList) with one-line proof each
         3) [ ] Surface supporting proof inline (curated skills summary, a testimonial or two)
         4) [ ] Bind home copy from `src/content/site.json`
         5) [ ] Apply UX guardrails checklist
      3) [ ] Work index (case studies)
         1) [ ] Fetch Ghost posts tagged `work`
         2) [ ] Render case-study cards (problem, outcome, tech, links)
         3) [ ] Apply UX guardrails checklist
      4) [ ] Work detail
         1) [ ] Fetch Ghost post by slug
         2) [ ] Render case-study template (what was built, problem solved, why it's trustworthy, results, links)
         3) [ ] Apply UX guardrails checklist
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
- Case-study facts: from GitHub (github.com/n8bar) + Nate; DoItList is observable live on the dev VM.
- Writing supports the main story; keep credible legacy posts, drop filler.

## Constraints
- Fast load times and accessibility as first-class requirements.
- Content should be easy to update without touching core layout/visual systems.
- Resist page sprawl: a new page must earn its place by helping a visitor understand, trust, or act.

## Visual Direction
- Theme: Blueprint Night (locked).
- Typography: Saira Semi Condensed (primary), JetBrains Mono (meta/labels).
- Palette: charcoal base, accent blue (#2f6bff), gold outlines (#ffd166), muted slate text.
- Background: subtle blueprint grid overlay with soft radial glows.
- Motion: gentle fade-up reveals, low-amplitude hover lift, honor prefers-reduced-motion.
- Layout: asymmetric grid, card-based sections with timeline accents.
- Playground disclaimer: "Playground: experiments in progress; please don't enter sensitive data."
- Logo: keep glasses-on-lightbulb mark.

## Data Sourcing
- Keep super-static, stable content in-repo (`src/content/site.json`): Home copy, curated skills summary, education, certifications, testimonials, plus Contact and Playground shells.
- Case studies (Work): Ghost posts tagged `work` (headless Content API; not stored in repo).
- Experience narrative: Ghost page `experience`.
- Writing (blog): Ghost posts (headless Content API; not stored in repo).
- Playground entries: external git clones under `playground/` (ignored by repo), each with a `playground.json` metadata file.
- Keep raw LinkedIn export in `.cybercreek/` only.
- Rationale: skills/education/certifications/references are stable and surfaced inline as proof, so they live in-repo rather than as standalone Ghost pages.

## Routing + Data Sources
- `/` (Home): `src/content/site.json` (hero/value prop/CTA, featured case-study refs, skills summary, testimonials).
- `/work`: Ghost posts tagged `work` (case-study index).
- `/work/[slug]`: Ghost post detail (case-study template).
- `/experience`: Ghost page `experience`, plus an in-repo Credentials block (skills/education/certs) from `site.json`.
- `/writing`: Ghost posts (list) with ISR caching (default revalidate 10 min; adjustable).
- `/writing/[slug]`: Ghost post detail; server-side fetch with revalidation.
- `/contact`: form posts to `/api/contact` (Route Handler); email address stays server-only via env.
- `/playground`: in-repo layout shell + local `playground/*/playground.json` metadata for external repos/demos (secondary; linked from footer, not primary nav).
- Utility routes: `/sitemap.xml` and `/rss.xml` generated server-side (uses Ghost + in-repo content).
- Retired routes (folded into the above): `/skills`, `/references`, `/certifications`, `/education`; `/portfolio` → `/work`; `/blog` → `/writing`.

## Information Architecture
- Primary nav (5): Home, Work, Experience, Writing, Contact.
- Secondary (footer, not primary nav): Playground, GitHub, LinkedIn.
- Home: intro + value prop, featured case studies, inline proof (skills summary + testimonial), primary CTA.
- Work: the centerpiece — case-study index + detail pages, led by CryptoZing, TermiWeb, DoItList.
- Experience: IT-only roles framed around responsibilities + results, with a compact Credentials block (curated skills, education, certifications).
- Writing: supporting posts that reinforce the main story.
- Contact: contact form + social links.
- Folded in as inline proof (no standalone pages): Skills, References/testimonials, Certifications, Education.

## Content Requirements
- Home
  - Hero headline + 1-2 sentence subhead (fresh rewrite), aimed at hiring managers.
  - Primary CTA (contact) and a clear path into Work.
  - 3 featured case studies with a one-line proof statement each.
  - Inline proof: short curated skills summary + 1-2 testimonials.
  - Optional hero media (photo or illustration).
- Work (case studies)
  - Launch set: CryptoZing, TermiWeb, DoItList (3-8 total acceptable, but quality over count).
  - Per study: title, the problem, what was built, the outcome/results, role, tech stack, links (live demo/GitHub), 1 image if available.
  - Bar: a serious visitor should grasp what was built, the problem solved, and why it's trustworthy.
  - Source: GitHub + Nate. DoItList is demonstrable live on the VM.
- Experience
  - IT-only roles, framed around responsibilities and results (not chronology for its own sake).
  - Fields: company, title, location, dates, 2-4 result-oriented bullets per role.
  - Credentials block: curated skills (6-12, grouped), education (BS in Software Development), certifications (1-2 with issuer/date/link).
  - Source: LinkedIn export + manual refinement; skills/education/certs in `site.json`.
- Writing
  - Posts index with date, title, short excerpt; detail pages with readable layout and shareable URLs.
  - Keep credible legacy posts that still reflect Nate's standards; drop filler.
- Contact
  - Contact form: name, email, message.
  - Server-only email delivery (address stored in env; not exposed client-side).
  - Social links (GitHub, LinkedIn; add others if desired).
- References/testimonials (inline, not a page)
  - Real quotes exist; surface them next to relevant work and on Home.
  - Fields: quote, name, relationship/context, date (optional).

## Open Questions
- Confirm the three case studies (CryptoZing, TermiWeb, DoItList) and gather per-study facts (problem/build/results/links).
- Confirm the real LinkedIn profile URL (footer currently uses a placeholder).
- Preferred hosting target (after MVP scope stabilizes)?
- Target launch window?
