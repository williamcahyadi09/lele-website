## Why

The current `MethodSection` only shows 2 pillar cards and doesn't match the Figma design (node `330-15866`). The design specifies 4 distinct cards in an asymmetric two-row layout with a cream section background, which better communicates the full Le Le Method.

## What Changes

- Replace the current 2-card grid with 4 cards matching the Figma layout:
  - **Row 1** (two asymmetric columns):
    1. **"Our Dream Team"** card (wider, fixed ~480px) — title with mixed color ("Our" in black, "Dream Team" in orange), description, a "Kenalan sama Laoshi!" CTA button (navy, rounded pill), and two circular team member avatar illustrations at the bottom-right
    2. **"Memory Science Jitu"** card (flexible width) — title, description, and a full-width photo at the bottom
  - **Row 2** (two asymmetric columns, mirrored):
    1. **"Pop Culture Kekinian"** card (flexible width) — title, description, and a full-width photo at the bottom
    2. **"Filosofi Kuno & Konteks Budaya"** card (wider, fixed ~480px) — title, description, and a full-width photo at the bottom
- Change card layout: title + description at top, image at bottom (currently: image on top, content below)
- Remove tag badges from cards (not in Figma design)
- Simplify section header: keep only the `h2` heading, remove the "Metode Kami" label and subtitle paragraph
- Add cream background (`bg-[#fef7ec]`) and `rounded-[20px]` to the section container
- Update card content (titles and descriptions) to match Figma copy
- Each card has a white background, light border (`border-[#efefef]`), and `rounded-[12px]`

## Capabilities

### New Capabilities
- (none)

### Modified Capabilities
- (none — implementation-only change, no spec-level behavior changes)

## Impact

- `src/components/home/MethodSection.tsx` — full layout and content overhaul
- New images needed in `public/images/` for the three photo cards (Memory Science, Pop Culture, Filosofi); team illustration for "Our Dream Team" card
- Figma design reference: https://www.figma.com/design/HnuNFT8Fj4uSDoRaxVQxhQ/LeLe-Mandarin-Website?node-id=330-15866
