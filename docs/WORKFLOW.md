# Workflow

## Process Rules
- Keep `docs/CHANGELOG.md` updated alongside `docs/PLAN.md` when scope/decisions shift. When adding changes, use the date and time (timestamp) from the system you're running on (format: YYYY-MM-DD HH:MM).
- Specs come first: align on the requirement in the docs, implement, then update the docs to check off what shipped; only reverse-engineer specs from existing code when we’ve explicitly agreed to do so.
- Docs are primarily internal architecture/engineering notes for us and future maintainers, not end-user documentation.
- Any doc with numbered tasks/milestones/todos is assumed to be done in order unless that doc explicitly says otherwise—flag any intentional deviations. This order is the default focus unless you specify otherwise; no need to ask which item to tackle when a clear next item exists.
- If a plan splits milestones into Completed and Upcoming sections, keep numbering continuous across both sections.
- When checking off a task, append `[completed yy/mm/dd hh:ii]` to the item.
- Testing approach: use mixed TDD (write tests first for stable logic/helpers; UI/layout tested after the fact). The agent is responsible for creating and maintaining tests.
- When milestones are renumbered or reordered, always refer to them by the current numbering (do not use old numbers).
- In `docs/PLAN.md`, keep only the current version of any section; if versions are used, replace the previous version instead of keeping old copies.
- In `docs/PLAN.md`, task lists use per-level numeric prefixes with the checkbox after the number (example: `1) [ ] Task`).
- If needed for reference, use multilevel decimal notation in discussion only (do not add decimals to the plan items).
- If the user is asking for your input/feedback (e.g. “what do you think?”, “should we…?”, “does this make sense?”), answer first and confirm before making changes—even if the request sounds actionable.
- If asked to implement code before a spec exists, pause to confirm and recommend documenting the scope first (write the spec, then ship the code) unless the user explicitly insists otherwise.
- Before any push/PR, keep all docs in sync: update specs first when scope shifts, then code, and ensure everything under `docs/` (plus README links) reflects the same state in the same commit.
- Whenever `docs/**` or AGENTS.md changes, commit/push those updates right away.
- Apply the UX guardrails in [`docs/UX_GUARDRAILS.md`](docs/UX_GUARDRAILS.md) on every UX touch: Nielsen/WCAG as baseline; inline guidance, preserved input, no layout shift, focus/error handling, mobile/accessibility.
- Codex owns the terminal tooling: you drive the shell, git, and related commands—assume the user doesn’t have a shell open unless they say otherwise.
- Dev environment details live in `docs/DevEnv.md` (sensitive/local-only info in `.cybercreek/localDevEnv.md`).
- Whenever `.env` changes, update `.env.example` with anonymized values.
- If you encounter changes you didn't make, assume the user made them and mention you noticed.
