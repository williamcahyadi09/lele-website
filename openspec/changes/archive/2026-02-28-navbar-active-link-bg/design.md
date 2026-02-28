## Context

The navbar active state currently renders a thin navy underline via a conditionally-rendered `<span>` element absolutely positioned below the link text. This change replaces that underline with `navbar-active.png` — an orange brushstroke image — rendered as a CSS background image behind the link text.

The `navbar-active.png` asset already exists in `public/images/`. Only `src/components/layout/Navbar.tsx` needs modification.

## Goals / Non-Goals

**Goals:**
- Display `navbar-active.png` as the background of the active desktop nav link
- Keep active link text black (`text-black`) for legibility over the brushstroke image
- Remove the existing navy underline `<span>`
- Apply black text on mobile active links for consistency

**Non-Goals:**
- Animating the brushstroke (no fade-in/out)
- Changing the active state detection logic (`pathname === link.href`)
- Modifying mobile nav layout beyond text color
- Changing any other nav element (logo, CTA button, hamburger)

## Decisions

### CSS background-image over Next.js `<Image>` component

**Decision**: Use Tailwind CSS arbitrary-value classes for background image to set the image directly on the `<Link>` element.

**Rationale**: The brushstroke image is purely decorative and scales naturally as a CSS background. Using `bg-[length:100%_100%]` stretches it to match the link element's width automatically, regardless of label length. This avoids adding a wrapper element or an absolutely-positioned `<Image>` component, keeping the JSX structure minimal.

**Alternative considered**: Absolutely-positioned `<Image fill>` inside each link. Rejected because it requires a sized container (the link has no explicit height/width), adds JSX complexity, and Next.js `<Image>` optimization overhead isn't warranted for a small decorative background.

### No extra padding needed

**Decision**: Do not add padding to the link element.

**Rationale**: The brushstroke image is designed to sit behind the text. With `bg-center` and `bg-[length:100%_100%]`, it fills the exact bounds of the link element. Adding padding would create unnecessary spacing in the nav bar.

### Mobile: text color only, no background image

**Decision**: Apply `text-black` on mobile active links but skip the background image.

**Rationale**: Mobile nav links are in a vertical drawer and don't benefit from the horizontal brushstroke visual. Keeping mobile simple avoids layout issues in the stacked menu context.

## Risks / Trade-offs

- **Tailwind v4 arbitrary value syntax** — `bg-[url('/images/navbar-active.png')]` and `bg-[length:100%_100%]` require Tailwind v4's JIT engine (already in use). No risk.
- **Image aspect ratio stretch** — `bg-[length:100%_100%]` stretches the image to the link bounds, which may distort the brushstroke shape for very short or very long labels. Mitigation: `bg-[length:100%_auto]` with `bg-bottom` can be used as a fallback if distortion is noticeable.
- **No transition on background image** — the existing `transition-colors` class doesn't animate background-image changes. The brushstroke will appear/disappear instantly on route change. Acceptable given brushstroke is decorative.
