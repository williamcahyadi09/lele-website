## Why

The current PainPoints section uses plain icon boxes in card containers that don't match the intended illustrated, emotionally expressive design. The target design (paintpoints.png) uses larger hand-drawn style emoji illustrations and removes the card borders for a cleaner, more visually engaging layout.

## What Changes

- Remove the small "Pernah Merasa..." label above the heading; merge it into the main heading copy
- Update heading format: "Pernah Merasa Belajar Mandarin Itu..." (navy, one line) + "Menyiksa?" (orange, second line, larger)
- Replace small geometric SVG icons with larger illustrated emoji-style SVG characters matching the design
- Remove card borders and background boxes — display as open columns (no `border`, `bg-white`, `shadow`)
- Update all three pain point titles and descriptions to match the new copy:
  1. "Tembok Hafalan" — brick wall + confused orange face illustration
  2. "Awalnya Semangat!" — two overlapping faces (happy blue + sad orange)
  3. "Deg-Deg-Ser" — nervous orange face with squiggles

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `pain-points-section`: Visual and copy overhaul of the PainPointsSection component to match paintpoints.png

## Impact

- `src/components/home/PainPointsSection.tsx` — all changes contained to this single file
