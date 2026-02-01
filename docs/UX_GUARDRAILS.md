# UX Guardrails (Reference)

Industry-aligned practices to apply across this resume site and the Playground shell (not the embedded demos themselves).

## Baseline standards
- Nielsen's 10 heuristics: match real-world language, visibility of status, user control, consistency, error prevention/recovery, recognition over recall, efficiency for power users, minimalist copy, clear errors/help.
- WCAG 2.2 AA: focus order, keyboard operability, status messages, contrast, target sizes, headings/labels.
- Form guidance (GovUK/USWDS + common HIG patterns): inline errors near fields, preserve input on failure, focus the first errored field, concise hints, no modals for basic validation, readable plain language.

## Project-specific non-negotiables
- Contact form only: no client-side email address exposure. Submit server-side; store address in env.
- Clear status feedback: visible success/failure states; do not clear inputs on error.
- No layout shift: reserve space for helper/error text; avoid reflow on validation.
- Navigation and focus: persistent nav, visible focus rings, skip link, keyboard-navigable sections.
- Content readability: consistent type scale, 60-80 char line length, strong hierarchy, scannable blocks.
- Motion respect: subtle by default, honor prefers-reduced-motion.
- Performance-first: avoid heavy JS for static pages, lazy-load images, keep LCP/CLS in check.
- Ghost content resilience: handle missing images/excerpts gracefully with defaults.
- Playground safety: the host shell must clearly label external demos, open external links safely, and avoid embedding risky origins by default. Embedded demos/repos keep their own UX rules.

## Practical checklist
- Inline guidance over pop-ups; keep critical guidance above the fold.
- Preserve state on error; keep CTAs enabled after validation errors.
- Use accessible labels, hint text, and error messaging with proper aria relationships.
- Ensure sufficient contrast and tap target sizes on mobile.
