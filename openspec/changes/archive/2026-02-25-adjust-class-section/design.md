## Context

The `ClassesSection.tsx` component currently renders two class cards with simple feature lists (single-line items) and a dark navy highlight on the Private Class card. The Figma redesign introduces a richer card structure with header areas, description paragraphs, and feature items that each have a bold title + description.

Current stack: Next.js + Tailwind v4 (`@theme` block in `globals.css`). Fonts: only Inter is configured. Colors: `lele-navy` (#1B3B6F), `lele-orange` (#FAAC25), etc.

The Figma design uses Ostania (headings), Poppins (body), and Albert Sans (italic subtitles), plus colors like primary/800 (#2C4195), primary/50 (#F1F6FE), and neutral/700 (#464646) that don't map 1:1 to existing tokens.

## Goals / Non-Goals

**Goals:**
- Match the Figma design visually for the classes section
- Keep the component maintainable with a data-driven card structure
- Add necessary fonts and color tokens

**Non-Goals:**
- Redesigning other sections or global typography
- Adding new page routes (CTA still links to `/konsultasi`)
- Pixel-perfect decorative background element in the card header (use a subtle CSS approach instead of importing the Figma asset)

## Decisions

### 1. Font strategy — Add Ostania and Poppins via Google Fonts / local files

The Figma design uses Ostania for section heading and "Yang Kamu Dapatkan" heading, Poppins for body text, and Albert Sans for italic subtitles. Rather than mapping everything to Inter, add these fonts to match the design. Use `next/font/google` for Poppins. Ostania is not on Google Fonts — check if it's available locally or use a similar decorative serif as fallback.

**Alternative considered**: Map to Inter only — rejected because the Ostania heading is a distinctive design element.

### 2. Color tokens — Add new tokens to `@theme` for the Figma palette

Add tokens for colors used in this section that aren't in the current palette:
- `--color-lele-primary-800: #2C4195` (heading text blue, different from lele-navy)
- `--color-lele-primary-50: #F1F6FE` (card header background)
- `--color-lele-neutral-700: #464646` (body text)
- `--color-lele-neutral-50: #EFEFEF` (card border)

**Alternative considered**: Reuse existing `lele-navy` for heading — rejected because #2C4195 is noticeably different from #1B3B6F.

### 3. Card structure — Keep data-driven approach with richer data model

Expand the class data objects to include: `type`, `subtitle`, `description`, and `features` (array of `{ title, description }` objects). This keeps the rendering logic clean and content easy to update.

### 4. Card header — Light blue area with CSS background

Use a `bg-lele-primary-50` div with `overflow-hidden` and a subtle decorative SVG or CSS gradient in the corner. Skip importing the exact Figma decorative asset to avoid asset management complexity.

### 5. Checkmark icon — Inline SVG or icon component

Use a simple filled circle-check SVG inline in the component, matching the Figma's `icon-park-solid:check-one` style. No need for an icon library dependency for a single icon.

### 6. CTA button — Blue gradient matching Figma

The Figma button uses a gradient from #2E5AAF to #21337B with a #2849A5 border. Implement as a Tailwind gradient class: `bg-gradient-to-b from-[#2E5AAF] to-[#21337B]`.

## Risks / Trade-offs

- **Ostania font availability** — If Ostania is not available as a web font, we'll need a local font file or a visually similar fallback. → Check availability first; if unavailable, use a similar serif/display font.
- **Color token proliferation** — Adding several new tokens could diverge from the existing minimal palette. → These align with the Figma design system's primary/neutral scale, so they're intentional additions.
- **No dark-mode Private Class card** — The current highlighted dark navy card for Private Class is being removed. Both cards look the same structurally. → This matches the Figma design intent.
