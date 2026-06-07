# Changelog

## 2026-06-07 08:09
- Resolve the accent contrast finding: add `--color-accent-text` (#6f97ff, ~6.9:1) for accent-sized text (eyebrows, active nav, prose links, link hovers), keeping #2f6bff for large text, the brand mark, icons, and borders. All accent text now passes WCAG AA.
- Update the design spec palette to record the AA accent-text variant.
- Close out the global shell: check off the UX guardrails checklist and the Global shell + navigation milestone.

## 2026-06-06 21:42
- UX guardrails verification pass on the global shell. Focus order/keyboard nav and no-layout-shift verified and checked off.
- Add `scrollbar-gutter: stable` (no shift when the mobile menu toggles body overflow) and bump the mobile nav toggle to a 44px min tap target.
- Contrast finding (open): accent `#2f6bff` fails AA as small text (4.27:1 base / 3.95 panel / 3.73 active pill). Body and muted text pass. Recommended fix logged as an open question: a lighter accent-for-text token (~`#6f97ff`) while keeping `#2f6bff` for large text/icons/borders.

## 2026-06-06 21:16
- Align the footer with the proof-first direction: reframe the CTA to lead with proof and speak to hiring managers first ("See the work, then let's talk."), and add a Selected work column for the case-study set (CryptoZing, TermiWeb, DoItList) linking to `/work/<slug>`.
- Adjust footer layout so three link columns sit cleanly beside the CTA. Note assumed case-study slugs in PLAN Routing.

## 2026-06-06 21:05
- Layout shell integration: add a base typography scale and rhythm (heading hierarchy via clamp, prose flow, blockquotes for testimonials, inline/code blocks, horizontal rule) and a second fixed background glow layer above the blueprint grid. Confirm the global layout is wired through the app router.
- Capture the three case-study repos/live links in PLAN Content Sources (CryptoZing, TermiWeb, DoItList); deeper per-study facts still pending from Nate.

## 2026-06-06 20:52
- Set the real LinkedIn URL in the footer (`linkedin.com/in/nate-barlow`); remove the placeholder TODO and resolve the open question.

## 2026-06-06 20:44
- Split out `docs/DesignSpec.md` as the design specification: intended outcomes, behavior, functionality, and standards (the *what*/*why*) — purpose/positioning, audience, experience principles, IA intent, content standards, visual/sensory standards, behavior, accessibility (references `UX_GUARDRAILS.md`), and quality bars. The spec does not reference the plan or describe how to build.
- Trim `docs/PLAN.md` to the route only: removed the Positioning & Priorities, Visual Direction, Constraints, Information Architecture, and Content Requirements sections (now in the spec) and added a pointer up to the spec. PLAN keeps milestones, content sources, data sourcing, and routing.
- Add a workflow rule defining the distinct, non-overlapping roles of DesignSpec (what/why) vs PLAN (how).
- Note in `UX_GUARDRAILS.md` that it is the accessibility/UX layer the design spec references.

## 2026-06-06 19:58
- Reset the information architecture to a lean, proof-first structure (driver: local `.brainstorm` decision + coaching notes, untracked).
- Primary nav cut from 10 items to 5: Home, Work, Experience, Writing, Contact. Playground demoted to secondary (footer). Update `Header` nav and `Footer` links accordingly.
- Fold standalone Skills/References/Certifications/Education pages into inline proof (Home + Experience credentials block); rename Portfolio -> Work and Blog -> Writing.
- Add a Positioning & Priorities section (audience, prominence order, first proof set: CryptoZing/TermiWeb/DoItList) and reframe Content Requirements/Routing/Data Sourcing around proof over legacy inventory.
- Replace the legacy-baseline feature set with the proof-first framing in `docs/PLAN.md`.

## 2026-06-06 17:04
- Build the global footer: CTA/backlink area (Contact link, server-only email per UX guardrails), Site + Elsewhere link columns (GitHub/LinkedIn, external links use `rel="noopener noreferrer"`), and legal line; responsive stacking via CSS grid. Wire `Footer` into the root layout.
- Note: LinkedIn URL is a placeholder (`linkedin.com/in/n8bar`) pending confirmation.

## 2026-06-06 16:24
- Serve the project from its dedicated host IP `192.168.68.28` (already reserved on `enp0s3` for this project), matching the per-app per-IP convention on the VM.
- Containerize dev serving: add `Dockerfile` (dev image), `.dockerignore`, and `compose.yaml` publishing `192.168.68.28:80 -> 3000` with hot reload (source bind mount + `WATCHPACK_POLLING`).
- Document `NTP_BIND_IP` (`192.168.68.28`) as the compose host-port source and sync `.env.example`.
- Update `docs/DevEnv.md` runbook to the containerized workflow (`docker compose up -d --build`), with the bare `pnpm dev` flow kept as a fallback.
- Housekeeping (operational, not committed): chown `/opt/ntp` from root to `n8`, install pnpm for `n8`, rename `AGENTS.md` -> `CLAUDE.md`.

## 2026-01-31 23:46
- Remove nginx placeholder stack (`compose.yaml`) and drop the placeholder `site/index.html`.
- Update DevEnv runbook to use the Next.js dev server instead of Docker.
- Remove nginx bind placeholder from `.env.example`.

## 2026-01-31 23:23
- Build header/navigation shell with desktop + mobile behaviors and skip link.

## 2026-01-31 23:05
- Mark design tokens + layout primitives parent task complete after all subitems finished.

## 2026-01-31 23:03
- Document parent completion rule when the last sibling task is done.

## 2026-01-31 23:01
- Set app version to 2.0.0-alpha.1 to reflect the rewrite.

## 2026-01-31 22:53
- Validate contrast ratios and line-length targets for design tokens.
- Add CONTACT_EMAIL placeholder to `.env.example`.

## 2026-01-31 22:48
- Implement design tokens and layout primitives (CSS variables, container/grid utilities).

## 2026-01-31 22:38
- Reformat plan task lists to use per-level numeric prefixes with checkboxes after numbers.
- Document numeric prefix format for plan task lists in workflow.

## 2026-01-31 22:41
- Allow multilevel decimals for reference only (not in plan items).

## 2026-01-31 22:26
- Expand Global shell + navigation task into a detailed checklist.

## 2026-01-31 22:24
- Clarify UX guardrails apply to the host site/playground shell, not embedded demos.

## 2026-01-31 22:19
- Lock Blueprint Night as the visual direction and complete UX direction milestone.

## 2026-01-31 22:11
- Rewrite UX guardrails to align with this resume/playground project.
- Align plan with server-only contact email handling and Playground Ghost exception.
- Remove outdated conditional language for references in routing.

## 2026-01-31 22:14
- Adjust Blueprint Night card outlines to gold while keeping accent text blue.

## 2026-01-31 22:15
- Apply gold outline to all Blueprint Night cards.

## 2026-01-31 22:17
- Apply gold outline to Blueprint Night header border.

## 2026-01-31 22:04
- Require the plan to keep only current section versions (no outdated copies).

## 2026-01-31 22:02
- Remove draft version tags from plan sections.

## 2026-01-31 21:59
- Ignore local playground repo clones by default.

## 2026-01-31 21:58
- Define playground as local git clones under `playground/` with per-repo metadata files.

## 2026-01-31 21:56
- Remove Ghost from playground; use in-repo index for external demos.

## 2026-01-31 21:55
- Update playground plan to use Ghost list + external repo embeds.
- Note that playground layout shell stays in repo while demos live elsewhere.

## 2026-01-31 21:50
- Check off UX guardrails item in UX direction and add it to MVP sub-task lists.
- Expand MVP build with sub-subitems and sub-sub-subitems.

## 2026-01-31 21:45
- Mark Technical architecture milestone complete.
- Note that References has real quotes and remove conditional language in the plan.

## 2026-01-31 21:38
- Move non-Home/Contact sections to Ghost-managed content (no repo commits for updates).
- Update routing/data sources to use Ghost pages/posts for skills/experience/portfolio/certs/education.

## 2026-01-31 21:34
- Require milestone references to use current numbering after reorder.

## 2026-01-31 21:31
- Define routing/content structure and data sources (Ghost + in-repo JSON/MDX).
- Document route map and server-only contact handling.

## 2026-01-31 21:27
- Lock in stack defaults (TS, CSS Modules, pnpm, ESLint/Prettier).
- Lock in testing strategy tooling (Vitest/RTL + Playwright).

## 2026-01-31 21:23
- Add mixed TDD guidance and make test creation a responsibility in workflow.
- Add testing strategy decision to the technical architecture milestone.

## 2026-01-31 21:14
- Decide on self-hosted Ghost (headless) for the blog and mark the workflow decision complete.
- Update data sourcing to keep super-static content in repo and pull blog posts from Ghost.

## 2026-01-31 20:31
- Require completion timestamps on checked plan items.
- Backfill completion timestamps for completed MS1/MS2 tasks.

## 2026-01-31 20:30
- Check off git repo initialization in the plan.

## 2026-01-31 20:29
- Require continuous milestone numbering across Completed and Upcoming sections.
- Renumber upcoming milestones to continue after Completed.

## 2026-01-31 20:26
- Clarify that numbered milestones/todos imply the default focus order.

## 2026-01-31 20:24
- Move MS1 into Completed with checkmarks and reorder MS2/MS3.
- Update open questions to remove the framework decision.

## 2026-01-31 20:13
- Select Next.js as the framework.

## 2026-01-31 19:38
- Rename framework decision item for clarity.

## 2026-01-31 19:37
- Separate framework choice from hosting; defer hosting decision to later MVP stage.

## 2026-01-31 19:36
- Mark MS1 scope/IA and content requirements as confirmed (flexible baseline).

## 2026-01-31 19:31
- Note that unexpected changes should be assumed user-made (and called out) in workflow.
- Remove Windows IIS secondary VM from DevEnv (not used for this project).

## 2026-01-31 19:28
- Require `.env.example` updates (anonymized) whenever `.env` changes.

## 2026-01-31 19:20
- Make docker bind IP configurable via `NTP_BIND_IP` and add `.env.example`.
- Ignore `.env` and document bind IP setup in DevEnv.
- Track `compose.yaml` and `site/` in repo (placeholder site + nginx config).

## 2026-01-30 19:54
- Initialize docs folder with CHANGELOG and PLAN.
- Update PLAN with LinkedIn resume baseline and platform/git setup tasks.

## 2026-01-30 20:22
- Document LinkedIn export decisions (IT-only roles, exclusions, rewrite approach).
- Note that LinkedIn summary reference lives in `.cybercreek/LinkedInSummary1.md` (untracked).

## 2026-01-30 20:33
- Split milestones into Completed vs Upcoming with checkbox tracking.

## 2026-01-30 20:34
- Require timestamped changelog entries (AGENTS update).
- Backfill changelog entries with timestamps.

## 2026-01-30 20:45
- Move working style rules into `docs/WORKFLOW.md`.
- Point AGENTS to `docs/WORKFLOW.md` for process rules.

## 2026-01-30 20:46
- Track `docs/UX_GUARDRAILS.md`.

## 2026-01-30 21:09
- Update plan to list only the BS in Software Development (omit GED/high school).

## 2026-01-30 21:10
- Mark blog as optional (not planned into IA/MVP yet).

## 2026-01-30 21:12
- Add IA draft based on existing site tabs.

## 2026-01-30 21:58
- Add legacy site minimum feature set baseline to the plan.

## 2026-01-30 22:00
- Add draft content requirements per section.

## 2026-01-31 14:16
- Promote blog from optional to planned IA/MVP and define blog requirements.

## 2026-01-31 14:27
- Move milestones section above Content Sources in the plan.

## 2026-01-31 16:55
- Add visual direction notes and data sourcing draft.
- Update milestone wording to reflect blog in scope.

## 2026-01-31 16:58
- Clarify visual direction is directional, add playground disclaimer wording.
- Set JSON as preferred data format.

## 2026-01-31 18:26
- Add `docs/DevEnv.md` and document dev environment pointers in AGENTS and workflow.

## 2026-01-31 18:34
- Document reserved VM ports in `docs/DevEnv.md`.

## 2026-01-31 19:08
- Update `docs/DevEnv.md` with VM-specific defaults and runbook.
