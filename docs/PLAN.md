# Plan

## Status
- Last updated: 2026-01-30 21:58

## Project Overview
- Resume site + internet playground for nateTheProgrammer (n8).
- Primary goal: showcase work, make it easy to contact, and leave a strong visual impression.

## Content Sources
- Resume baseline: LinkedIn export, excluding non-IT roles.
- Exclude older/borderline roles (Reliance Electric, Tricom Systems Engineer, Western Precision).
- Use Tricom Communications Services Web Application Developer role only.
- Red Oak role listed as I.T. only (no estimator duties).
- Site copy will be a fresh rewrite; LinkedIn text is reference only.
- Reference file: `.cybercreek/LinkedInSummary1.md` (untracked).
- Education: list the BS in Software Development only (omit GED and high school).
- Blog is optional and not planned into IA/MVP until explicitly confirmed.

## Constraints
- Fast load times and accessibility as first-class requirements.
- Content should be easy to update without touching core layout/visual systems.

## Information Architecture (draft v0.1)
- Home: hero + value prop, featured work, primary CTA
- Skills: curated skills (core stack + strengths), not full LinkedIn list
- Experience: IT-only roles, reverse-chronological
- Portfolio: project grid + case-study highlights
- References: testimonials/endorsements (only if real quotes exist)
- Certifications: cert list with dates
- Education: BS in Software Development only
- Blog: optional/future (not planned into IA/MVP)
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

## Milestones (in order)
## Completed Milestones
- (none yet)

## Upcoming Milestones (in order)
1. Scope and information architecture
   - [ ] Confirm pages/sections (legacy tabs + blog optional).
   - [ ] Define content requirements per section (based on legacy baseline + LinkedIn).
2. UX direction
   - [ ] Visual theme, typography, motion, and layout system.
   - [ ] UX guardrails checklist applied per section.
3. Technical architecture
   - [ ] Pick platform (framework + hosting target).
   - [ ] Initialize git repository and remote.
   - [ ] Decide stack, hosting, and content update workflow.
   - [ ] Define routing/content structure and data sources.
4. MVP build
   - [ ] Implement core pages and global layout.
   - [ ] Add baseline SEO, analytics, and accessibility checks.
5. QA + launch
   - [ ] Performance pass, accessibility pass, content polish.

## Open Questions
- Preferred framework and hosting target?
- Any must-have content blocks or interactive playground features?
- Target launch window?
