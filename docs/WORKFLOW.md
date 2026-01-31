# Workflow

## Process Rules
- Keep `docs/CHANGELOG.md` updated alongside `docs/PLAN.md` when scope/decisions shift. When adding changes, use the date and time (timestamp) from the system you're running on (format: YYYY-MM-DD HH:MM).
- Specs come first: align on the requirement in the docs, implement, then update the docs to check off what shipped; only reverse-engineer specs from existing code when we’ve explicitly agreed to do so.
- Docs are primarily internal architecture/engineering notes for us and future maintainers, not end-user documentation.
- Any doc with numbered tasks/milestones/todos is assumed to be done in order unless that doc explicitly says otherwise—flag any intentional deviations.
- If the user is asking for your input/feedback (e.g. “what do you think?”, “should we…?”, “does this make sense?”), answer first and confirm before making changes—even if the request sounds actionable.
- If asked to implement code before a spec exists, pause to confirm and recommend documenting the scope first (write the spec, then ship the code) unless the user explicitly insists otherwise.
- Before any push/PR, keep all docs in sync: update specs first when scope shifts, then code, and ensure everything under `docs/` (plus README links) reflects the same state in the same commit.
- Whenever `docs/**` or AGENTS.md changes, commit/push those updates right away.
- Apply the UX guardrails in [`docs/UX_GUARDRAILS.md`](docs/UX_GUARDRAILS.md) on every UX touch: Nielsen/WCAG as baseline; inline guidance, preserved input, no layout shift, focus/error handling, mobile/accessibility.
- Codex owns the terminal tooling: you drive the shell, git, and related commands—assume the user doesn’t have a shell open unless they say otherwise.
