## Why

The current FinalCTA section uses an orange background with a single CTA button and a small student image on the right. The updated Figma design uses a dark navy background, moves the student photo to the left, updates the body copy, and introduces a second CTA button ("Download Ebook Kami") alongside the primary consultation button — better matching the brand direction established in the updated ConsultationCTA section.

## What Changes

- Change section background from `bg-lele-orange` to `bg-lele-navy` (dark navy)
- Move student image from right column to left column
- Update "Bahasa Mandarin" highlight colour from white → orange (readable on dark bg)
- Update body copy to "Ambil langkah pertama! Jadwalkan konsultasi gratis dengan tim ahli kami dan rasakan bedanya 'Metode Le Le'."
- Replace single navy button with two buttons:
  - Primary: "Jadwalkan Konsultasi Gratis Kamu" — outlined style (white border, orange text)
  - Secondary: "Download Ebook Kami" — solid darker button
- Add decorative orange dot and "学习!" speech bubbles overlaid on the image
- Remove decorative blob SVGs (replaced by simpler decorative dot)
- Add vertical padding to section (`py-16 md:py-24`) — currently has none

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `final-cta-section`: Background colour, image position, button count/style, and copy all change from current spec

## Impact

- `src/components/home/FinalCTASection.tsx` — full rewrite
- `openspec/specs/final-cta-section/spec.md` — delta spec to update background colour, button requirements, and image position
