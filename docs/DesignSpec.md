# Design Specification

This document defines the intended outcomes, behavior, functionality, and standards for the site — the ideal it should meet. It describes *what* the experience should be and *why*, not how to build it.

## Status
- Last updated: 2026-06-08 22:02

## Purpose & Positioning
- The site presents Nate Barlow as a practical, credible, current IT Engineering Professional who builds useful things, exercises sound judgment, and is worth contacting.
- It leads with proof, keeps secondary material in the background, and makes the next step easy.
- Success looks like: a serious visitor quickly understands who Nate is, trusts the work, and knows how to make contact.

## Audience
- Primary: hiring managers.
- Secondary: technical collaborators, project sponsors, and other practical buyers.
- Tone: professional, credible, and focused — not freelance theater.

## Experience Principles
- Proof over self-description: trust comes from concrete evidence — case studies, legible work history, results-framed experience, specific references, and supporting writing.
- Prominence order: (1) a clear introduction to Nate and the work he does, (2) featured case studies, (3) proof of judgment, follow-through, and range, (4) a simple path to contact.
- Every surface earns its place by helping a visitor understand, trust, or act; nothing exists merely to fill out a site map.
- Keep evidence, not structure: reusable facts, strong references, and credible writing matter more than inherited page inventory.
- Restraint: avoid broad skills lists without context, thin pages, chronology for its own sake, and hobby or playground material presented as core proof.

## Information Architecture (intended)
- The site centers on five things a visitor needs: an introduction, the work, the experience behind it, supporting writing, and a way to make contact.
- Primary structure: Home, Work, Experience, Writing, Contact.
- Work is the centerpiece: a small set of strong case studies, not an exhaustive catalog.
- Supporting proof — curated skills, references/testimonials, education, and certifications — appears inline where it strengthens the story, not as standalone destinations.
- Experimental and playground material is clearly secondary and labeled as such.

## The Work (proof set)
- For each featured project, a serious visitor should grasp: what was built, the problem it solved, the outcome, and why the work is trustworthy.
- Launch proof set: CryptoZing, TermiWeb, DoItList.
- Case studies favor depth and credibility over count.

## Content Standards
- Home: a hiring-manager-facing introduction and value proposition; featured case studies, each with a one-line proof statement; inline supporting proof (a concise skills summary and a testimonial or two); a clear primary call to contact.
- Work: each case study communicates the problem, what was built, the outcome/results, Nate's role, the relevant technology, and links to see it; an image where it helps.
- Experience: roles framed around responsibilities and results rather than a bare timeline; a compact credentials summary (curated skills, education, certifications) as supporting detail.
- Writing: credible posts that reinforce the main story; readable and shareable; filler omitted.
- Contact: a simple form (name, email, message) with a clearly stated outcome on submit, plus social links.
- References/testimonials: real quotes, attributed (name and relationship/context), surfaced next to relevant work and on Home.
- Voice: fresh, plain, and specific. Reference material is rewritten, never pasted.
- Privacy: Nate's contact email is never exposed to visitors.

## Visual & Sensory Standards
- Theme: Blueprint Night.
- Typography: Saira Semi Condensed for primary text; JetBrains Mono for metadata and labels.
- Palette: charcoal base, accent blue (#2f6bff) for large text/icons/borders with a lighter accent (#6f97ff) for accent-sized text to meet AA contrast, gold outlines (#ffd166), muted slate text.
- Background: a subtle blueprint grid with soft radial glows.
- Composition: an asymmetric grid with card-based sections and timeline accents; generous, consistent rhythm.
- Brand mark: the glasses-on-lightbulb logo.
- Motion: gentle fade-up reveals and low-amplitude hover lift; always subtle; honors reduced-motion preferences.

## Behavior & Interaction
- Navigation is persistent and consistent across the site, and the current location is always clear.
- The footer rests at the bottom of the viewport on short pages and follows the content on long ones.
- Layout stays stable: nothing shifts as content, navigation states, or validation messages appear.
- Forms preserve input on error, show clear inline guidance, and give visible success and failure feedback; routine validation never relies on modal dialogs.
- External links open safely.
- The playground clearly labels external and experimental demos and warns against entering sensitive data.

## Accessibility & UX Standards
- The site meets WCAG 2.2 AA and the Nielsen-aligned practices captured in [`docs/UX_GUARDRAILS.md`](UX_GUARDRAILS.md), which is the authoritative reference for accessibility and UX behavior.
- Baseline expectations: full keyboard operability, visible focus, a skip link, sufficient contrast, adequate tap targets, and clear status messages.

## Quality Bars
- Fast: quick load and strong perceived performance; LCP and CLS kept in check; minimal JavaScript on largely static pages; imagery lazy-loaded.
- Accessible: accessibility is a first-class requirement, not a finishing pass.
- Resilient: missing images or excerpts degrade gracefully with sensible defaults.
- Maintainable: content can be updated without touching core layout or visual systems.
- Focused: page sprawl is resisted; every new surface must earn its place.
