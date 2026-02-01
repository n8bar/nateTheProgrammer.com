# Plan

## Status
- Last updated: 2026-01-31 20:29

## Project Overview
- Resume site + internet playground for nateTheProgrammer (n8).
- Primary goal: showcase work, make it easy to contact, and leave a strong visual impression.

## Milestones (in order)
## Completed Milestones
1. [x] Scope and information architecture
   - [x] Confirm pages/sections (legacy tabs + blog included, flexible baseline).
   - [x] Define content requirements per section (based on legacy baseline + LinkedIn, flexible baseline).

## Upcoming Milestones (in order)
2. Technical architecture
   - [x] Pick framework (Next.js).
   - [ ] Initialize git repository and remote.
   - [ ] Decide stack and content update workflow.
   - [ ] Define routing/content structure and data sources.
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
- Keep content in-repo (initial default).
- Blog posts: Markdown with frontmatter (title, date, excerpt, tags, slug).
- Projects: structured data in JSON (preferred) with optional longform Markdown.
- Experience/skills/certs/education: curated from LinkedIn export into tracked data files (JSON preferred).
- Keep raw LinkedIn export in `.cybercreek/` only.

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
