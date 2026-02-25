## Context

The site currently has no persistent contact shortcut. Users who want to reach LeLe via WhatsApp must scroll to find a CTA or footer link. A floating button fixed to the viewport gives instant access on every page across all scroll positions.

The app uses a root layout (`src/app/layout.tsx`) that wraps all pages with `<Navbar>`, `<main>`, and `<Footer>`. The floating button belongs at the layout level so it appears site-wide without modifying individual pages.

## Goals / Non-Goals

**Goals:**
- Display a fixed WhatsApp button in the bottom-right corner of every page
- On click, open `https://wa.me/<number>` in a new tab
- Visually distinct (WhatsApp green, rounded, with icon) and unobtrusive
- Responsive — accessible on mobile and desktop

**Non-Goals:**
- Custom WhatsApp chat widget (no pre-filled message, no chat preview)
- Per-page show/hide logic
- Analytics tracking on the button click

## Decisions

### Placement: root layout vs page-level
Add the button directly in `src/app/layout.tsx` alongside `<Navbar>` and `<Footer>`.
**Why**: It should appear on every page without duplication. The layout is already the single shared shell.

### Component: new `FloatingWhatsApp` component
Create `src/components/layout/FloatingWhatsApp.tsx`.
**Why**: Consistent with existing layout components (`Navbar`, `Footer`). Keeps `layout.tsx` clean. Easy to test or replace later.

### WhatsApp number: hardcoded constant
The phone number is hardcoded in the component (e.g. `6281234567890`).
**Why**: There is no CMS or config system in place. A simple constant is the minimum viable solution; it can be extracted to an env var later if needed.

### Icon: SVG inline
Use an inline SVG WhatsApp logo rather than an external icon library.
**Why**: No additional dependency needed for a single icon.

### Styling: Tailwind fixed positioning
Use `fixed bottom-6 right-6 z-50` with a green background and shadow. Please see the whatsapp-cta.png in this folder for the design.
**Why**: Consistent with the Tailwind-first approach used throughout the project. `z-50` ensures it floats above all page content.

## Risks / Trade-offs

- **Overlaps page content on small screens** → Mitigation: use `bottom-6 right-6` with a reasonably small button (56px) so it doesn't block primary CTAs.
- **Hardcoded phone number** → Mitigation: documented in the component; easy to move to env var when needed.
