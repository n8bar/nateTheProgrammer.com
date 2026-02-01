# Changelog

## 2026-01-31 22:11
- Rewrite UX guardrails to align with this resume/playground project.
- Align plan with server-only contact email handling and Playground Ghost exception.
- Remove outdated conditional language for references in routing.

## 2026-01-31 22:14
- Adjust Blueprint Night card outlines to gold while keeping accent text blue.

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
