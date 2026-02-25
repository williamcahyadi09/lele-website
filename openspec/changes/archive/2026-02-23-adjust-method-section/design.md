## Context

`MethodSection.tsx` currently renders 2 cards in a simple 2-column grid (image on top, content below). The Figma design (node `330-15866`) specifies 4 cards in two asymmetric flex rows with content on top and image at the bottom. The "Our Dream Team" card is structurally distinct from the three photo cards.

Existing images in `public/images/` do not include the three method photos — the user will need to supply them. The current referenced paths (`method-popculture.jpg`, `method-philosophy.jpg`) don't exist on disk.

## Goals / Non-Goals

**Goals:**
- Rebuild the layout to match the Figma: two asymmetric rows, 4 cards total
- Flip card structure: content (title + description) on top, image at bottom
- Match section background, card styling, and copy from Figma
- Handle the "Our Dream Team" card's unique structure (CTA button, avatars instead of photo)

**Non-Goals:**
- Changes to other sections
- Animations or interactivity beyond the existing CTA button

## Decisions

### Layout: two flex rows instead of a grid
Each row is a `flex` container with specific child widths:
- Row 1: Team card (`w-[480px] shrink-0`) + Memory Science card (`flex-1`)
- Row 2: Pop Culture card (`flex-1`) + Filosofi card (`w-[480px] shrink-0`)

**Why**: The two rows have mirrored asymmetry that can't be expressed cleanly with a single CSS grid without named template areas. Two flex rows is straightforward and directly mirrors the Figma structure.

### "Our Dream Team" card: rendered separately
The team card has a fundamentally different structure (CTA button, avatar illustrations, no bottom photo) vs the three photo cards. It will be rendered as a standalone JSX block rather than included in a data array loop.

**Why**: Forcing it into a shared data structure would require too many conditional fields and make the loop logic messy.

### Three photo cards: data array + loop
The three photo cards ("Memory Science Jitu", "Pop Culture Kekinian", "Filosofi Kuno & Konteks Budaya") share the same structure and will remain in a data array, rendered with a shared card component pattern.

### Team card avatars: use existing team images or placeholder
The Figma shows two circular avatar illustrations. These will use `public/images/` assets if available, or be implemented as styled placeholder circles until the user provides the assets.

### Images for photo cards: placeholder paths
The three photo cards need images that don't yet exist in `public/images/`. Placeholder paths will be used (`/images/method-memory.jpg`, `/images/method-popculture.jpg`, `/images/method-filosofi.jpg`). The user should replace them with actual assets.

### Section background: cream wrapper
Wrap the section content in a `rounded-[20px] bg-[#fef7ec]` container to match the Figma.

### Section header: simplified
Remove the "Metode Kami" label and subtitle paragraph. Keep only the `h2` heading.

## Risks / Trade-offs

- **Missing images** → Photo cards will show broken images until the user supplies assets. Noted in tasks.
- **Avatar illustrations for team card** → Will use placeholder circles if team avatar images aren't available.
