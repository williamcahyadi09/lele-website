## Context

`ConsultationCTASection.tsx` is a homepage section that currently renders a dark navy full-width card with a centered form (name + contact inputs, orange CTA). The updated Figma design completely changes the visual treatment and the value proposition: from a free consultation offer to a free E-book download, using a light two-column layout with a decorative illustration on the left.

The component is a self-contained client component (`"use client"`) with local state for the form fields. There is no backend integration — form submission is UI-only. No routing, API calls, or shared state involved.

## Goals / Non-Goals

**Goals:**
- Match the Figma design layout: cream background, two-column (illustration | form), labeled inputs inside a white card
- Update all copy to reflect the E-book offer (headline, description, field labels, CTA, privacy note)
- Build the book illustration entirely in-component using inline SVG + Tailwind positioned elements (no new image assets required)
- Keep the component self-contained with local useState for form fields

**Non-Goals:**
- Backend form submission or WhatsApp/email integration
- Animations or scroll-triggered effects
- Extracting the book illustration into a separate reusable component
- Any changes outside `ConsultationCTASection.tsx`

## Decisions

### 1. Inline SVG for the book illustration
The Figma design shows a decorative purple book with a bug icon and monospace text. Rather than adding a new image asset (PNG/SVG file), the illustration is built entirely with inline SVG + absolute-positioned Tailwind divs inside the component. This keeps the component self-contained and avoids adding files to `public/images/`.

**Alternative considered:** Use a PNG export from Figma. Rejected because it would require an asset handoff step and is harder to maintain.

### 2. No sub-component extraction for the illustration
The `BookIllustration` helper is a local function inside the file (not exported). The illustration is tightly coupled to this section's layout and has no reuse case elsewhere on the site.

### 3. White form card with labeled inputs
The design uses a white rounded card (`bg-white shadow-sm rounded-2xl`) with separate `<label>` elements above each input, matching the Figma layout. This replaces the previous floating placeholder-only approach.

### 4. Navy CTA button
The CTA button (`bg-lele-navy`) follows the Figma color. The existing orange button (`bg-lele-orange`) was used for the consultation framing — the navy button signals a download action and differentiates this section from other orange CTAs on the page.

### 5. Cream section background
The section background uses `bg-lele-cream` (`#FFF9F0`), already defined in the Tailwind theme, replacing the previous transparent background that revealed the page's default background.

## Risks / Trade-offs

- **SVG text rendering varies across browsers** — monospace font inside SVG may render slightly differently. Mitigation: use `fontFamily="monospace"` which degrades gracefully; the text is decorative, not content-critical.
- **Illustration proportions on mobile** — the two-column layout stacks vertically on mobile. The illustration should still look reasonable at full width. Mitigation: set a fixed height on the illustration container (`h-[400px]`) and use absolute positioning with percentage-based offsets so the circles and book stay centered.
- **Form fields are UI-only** — no validation or submission handling beyond `e.preventDefault()`. This is an accepted constraint per the existing spec.

## Open Questions

- Should the phone field use `type="tel"` with an Indonesian format mask, or stay as a plain text input? (Currently: `type="tel"`, no mask — consistent with current behaviour)
- Is the E-book download CTA expected to trigger a file download or open a WhatsApp/email flow in a future iteration? (Out of scope for this change)
