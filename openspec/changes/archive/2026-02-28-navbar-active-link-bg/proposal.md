## Why

The current navbar active link indicator is a thin navy underline, which is visually minimal and doesn't reflect the brand's warm, expressive style. Replacing it with the branded `navbar-active.png` brushstroke image creates a more distinctive, on-brand active state that better matches the LeLe Mandarin visual identity.

## What Changes

- Remove the thin navy `<span>` underline rendered when a nav link is active (desktop)
- Add `navbar-active.png` as a CSS background image displayed behind the active link text
- Change active link text color from navy (`text-lele-navy`) to black (`text-black`) for legibility on top of the image
- Mobile active links: update text color from navy to black (no background image on mobile)

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `navbar`: The active page indicator requirement changes — from a navy underline to a brushstroke image background behind the link text, with black text color.

## Impact

- **File**: `src/components/layout/Navbar.tsx` — only file modified
- **Asset**: `public/images/navbar-active.png` — existing image, no changes needed
- **No API, routing, or dependency changes**
