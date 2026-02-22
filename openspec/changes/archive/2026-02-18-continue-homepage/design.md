## Context

The LeLe Mandarin homepage currently renders only the `HeroSection`. The v2 Figma design adds 7 new sections below the hero, turning the page into a full marketing landing page. All content is static; no API or data layer is involved. The stack is Next.js 16 (App Router), TypeScript, and Tailwind CSS 4.

## Goals / Non-Goals

**Goals:**
- Build all 7 new homepage sections as standalone React components
- Match the v2 Figma layout, colour palette, and typography
- Compose the full page in `app/page.tsx`
- Ensure all sections are responsive (mobile + desktop)

**Non-Goals:**
- Backend integration or form submission logic (consultation form is UI-only for now)
- Animations or scroll-triggered effects
- Page routes other than `/` (homepage only)
- Dark mode support

## Decisions

### One component per section
Each of the 7 sections gets its own file under `src/components/home/`. This keeps components focused, co-locates all markup for a section, and makes the composition in `page.tsx` readable.

**Alternative considered:** A single `HomeSections.tsx` file containing all sections.
**Rejected because:** It would grow to hundreds of lines and be hard to navigate.

### Static data co-located with components
Content arrays (team members, pain points, class features, testimonials) are defined as `const` arrays inside each component file rather than in a separate `data/` folder.

**Alternative considered:** A shared `src/data/homepage.ts` file.
**Rejected because:** The data is only consumed by one component each; extracting it adds indirection without benefit at this scale.

### Next.js `<Image>` for all photos
All person photos and section images use `next/image` with explicit `width`/`height` or `fill` + a sized container. This ensures optimised delivery without additional dependencies.

**Alternative considered:** Plain `<img>` tags.
**Rejected because:** Next.js Image handles WebP conversion, lazy loading, and CLS prevention automatically.

### Tailwind utility classes only — no new custom tokens
The existing colour tokens (`lele-navy`, `lele-orange`, `lele-cream`, etc.) from `globals.css` cover all design needs. No new CSS variables will be added.

### Consultation form: UI-only (no submission)
The `ConsultationCTASection` renders the form fields but `onSubmit` is a no-op for this change. A future change will wire up the submission.

## Risks / Trade-offs

- **Missing image assets** → Placeholder `div` with background colour and fixed dimensions used during dev; real assets to be supplied separately.
- **Copy accuracy** → Section text copied from Figma screenshot; minor wording differences may need correction once Figma MCP access is restored.
- **Hero section v2 diff** → Hero changes are minor (badge text tweak); existing `HeroSection` component is updated in-place rather than replaced.

## Migration Plan

1. Create 7 new component files in `src/components/home/`
2. Update `HeroSection.tsx` for v2 tweaks
3. Update `src/app/page.tsx` to import and render all sections in order
4. Verify responsive layout at 375px (mobile) and 1280px (desktop)
5. No rollback concern — purely additive changes to a static page
