## Why

The PainPointsSection currently uses inline SVG illustrations for each pain point card. These should be replaced with the actual PNG assets that have been prepared for the section, which better match the intended visual design.

## What Changes

- Remove the three inline SVG `icon` entries from the `painPoints` array in `PainPointsSection.tsx`
- Replace each SVG with a `next/image` `<Image>` component pointing to the corresponding PNG:
  - "Tembok Hafalan" → `/images/tembok-hafalan.png`
  - "Awalnya Semangat!" → `/images/awalnya-semangat.png`
  - "Deg-Deg-Ser" → `/images/deg-deg-ser.png`
- Update the `painPoints` data structure to use image `src` strings instead of JSX icon nodes
- Change the card title color from `text-lele-navy` to `text-black`

## Capabilities

### New Capabilities
- (none)

### Modified Capabilities
- (none — this is an implementation-only change, no spec-level behavior changes)

## Impact

- `src/components/home/PainPointsSection.tsx` — data array and rendering updated
- `public/images/tembok-hafalan.png`, `awalnya-semangat.png`, `deg-deg-ser.png` — already present, no new files needed
