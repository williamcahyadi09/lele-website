## Context

`DreamTeamSection.tsx` currently uses circular photos, centered card layout, old team member names, and an outline CTA button. The redesign follows the same Ostania/Poppins typography system established in the classes section.

Current globals.css already has: Ostania via `@font-face`, Poppins via `next/font/google`, color tokens including `lele-orange`, `lele-primary-800`, `lele-neutral-700`.

## Goals / Non-Goals

**Goals:**
- Match the Figma design: rectangular photo cards with orange decorative wave background, updated team data, pill badge label, Ostania/Poppins fonts, filled blue CTA
- Stay consistent with the typography/color system set up in the classes section change

**Non-Goals:**
- Adding a team detail page or routing changes beyond the existing `/tim` route
- Pixel-perfect decorative wave (use an image asset if available, otherwise a CSS approximation)

## Decisions

### 1. Card photo area — rectangular with decorative orange wave background image
The Figma shows an orange wave/swirl pattern behind the team photo. Use a background image for this (`public/images/team-card-bg.png` or similar if it exists, otherwise inline SVG or CSS). The photo is left-aligned and takes up most of the card height.

### 2. Typography — Ostania for heading + member names, Poppins for body
- "Our Dream Team" heading: `font-ostania`
- Team member names: `font-ostania font-bold`
- Description and titles: `font-poppins`
- "Tim Kami" badge: `font-poppins`

### 3. "Tim Kami" badge — orange pill with border
Replace the plain uppercase `<p>` with a `<span>` styled as a pill: `border border-lele-orange text-lele-orange rounded-full px-4 py-1 text-sm`.

### 4. CTA button — filled blue (consistent with classes section)
Use `bg-[#2E5AAF]` rounded-full filled button, matching the "Lihat Detail Kelas" button style from the classes section.

### 5. Card layout — full-width photo top, text bottom
Each card: rounded-xl border, photo area as `<div>` with background color + wave image, then a white/light bottom area with name and title left-aligned.

## Risks / Trade-offs

- **Decorative wave asset** — if no image is available, use CSS `bg-lele-orange/10` with a subtle pattern. The card still looks good without the exact wave.
- **Team photo paths** — new names (Rara, Farell, Metta) need corresponding image files. Use the existing image paths if photos aren't updated yet.
