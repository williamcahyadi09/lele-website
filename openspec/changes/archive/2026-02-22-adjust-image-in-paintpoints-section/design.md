## Context

`PainPointsSection.tsx` renders three pain point cards, each with an inline SVG icon, a title (`text-lele-navy`), and a description. The SVGs are being replaced by prepared PNG assets, and the title color is being updated to black.

## Goals / Non-Goals

**Goals:**
- Replace inline SVG icons with `next/image` `<Image>` components
- Change card title color from `text-lele-navy` to `text-black`

**Non-Goals:**
- Changes to card layout, spacing, or any other styling
- Changes to title text, description text, or section heading

## Decisions

### Data structure: replace `icon` JSX with `imageSrc` string
The `painPoints` array currently stores a JSX node in the `icon` field. Change the field to `imageSrc: string` pointing to the PNG path.
**Why**: Cleaner data — image paths are plain strings, not JSX. The render loop then uses `<Image src={point.imageSrc} ... />` instead of `{point.icon}`.

### Image sizing: fixed dimensions matching current SVG area
The existing SVGs use `className="w-36 h-28"` (144×112px). Use the same dimensions for the `<Image>` component with `width={144}` and `height={112}`.
**Why**: Preserves the existing card layout without any spacing changes.

### Title color: Tailwind class swap
Change `text-lele-navy` to `text-black` on the `<h3>` element.
**Why**: Direct one-class swap, no new tokens needed.
