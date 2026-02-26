## Context

`FinalCTASection.tsx` is the closing homepage section. It currently renders an orange full-width rounded card with blob SVG decorations, text + single button on the left, and a student image on the right. The updated Figma design inverts the colour scheme to navy, repositions the image to the left, updates the copy, and introduces a two-button layout. The component is a simple presentational component with one router call — no state, no API calls.

## Goals / Non-Goals

**Goals:**
- Recolour the card from `bg-lele-orange` to `bg-lele-navy`
- Reposition student image to the left column
- Update "Bahasa Mandarin" highlight to `text-lele-orange` (previously `text-white`)
- Update body copy to match Figma
- Replace single button with two: outlined "Jadwalkan Konsultasi Gratis Kamu" and solid "Download Ebook Kami"
- Add decorative orange dot and two "学习!" speech bubble overlays on the image
- Add section vertical padding (`py-16 md:py-24`) — currently missing
- Remove decorative blob SVGs

**Non-Goals:**
- Implementing the ebook download flow (button is UI-only, navigates to a route or no-op)
- Changing the student image asset (reuse existing or a new asset if provided)
- Any changes outside `FinalCTASection.tsx`

## Decisions

### 1. Two-button layout: stacked on mobile, inline on desktop
The Figma design shows both buttons side by side. On mobile they will stack (`flex-col`), on desktop they sit inline (`md:flex-row`). Both buttons span the same visual weight — the outlined one uses `border border-lele-orange text-lele-orange bg-transparent` and the solid one uses `bg-white/10 text-white`.

**Alternative considered:** Using a single primary button and a text link for the secondary. Rejected — the design clearly shows two equal pill buttons.

### 2. Speech bubbles and dot as inline JSX, not a separate asset
The "学习!" speech bubbles (two of them, at different corners of the image) and the orange dot are lightweight enough to implement as absolute-positioned `<div>` elements with Tailwind. No new SVG file or image asset needed.

### 3. Image stays in a fixed-height container with `object-cover`
The student image (`hero-student.png` or similar) is placed in a `relative` div with a fixed height, same pattern as the current implementation, now positioned in the left column.

### 4. Add `py-16 md:py-24` to the `<section>`
The current section has no vertical padding, making it flush with the section above. Adding standard padding aligns it with every other section on the page.

### 5. Remove blob SVGs
The blob SVGs from the orange card version are removed. The new design uses a single small orange dot as the only decoration outside the image overlays.

## Risks / Trade-offs

- **Student image asset**: The current code references `/images/cta-student.png` which may not exist. The design shows two students on a scooter. If the correct asset isn't in `public/images/`, a placeholder will be used. → Check `public/images/` at implementation time.
- **Outlined button legibility**: `border-lele-orange text-lele-orange` on a navy background — high contrast, should be fine. If brand review changes the outlined button colour, it's a one-line edit.

## Open Questions

- Should "Download Ebook Kami" navigate to a specific route, or is it a no-op for now? (Assumed: no-op / `e.preventDefault()` until route exists)
