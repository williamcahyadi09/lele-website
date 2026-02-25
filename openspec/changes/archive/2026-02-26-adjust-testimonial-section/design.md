## Context

The current `TestimonialsSection.tsx` renders a static 3-card grid on a cream (`bg-lele-cream`) background. The redesign replaces this with a single-testimonial carousel on a white background, matching the updated Figma design. The project uses Next.js App Router with Tailwind v4 and React client components for interactivity.

## Goals / Non-Goals

**Goals:**
- Replace the static grid with a one-at-a-time carousel
- Add prev/next arrow navigation
- Auto-advance every 8 seconds, resetting the timer on manual navigation
- Match Figma typography (Ostania heading, Poppins body/name/role)
- White section background

**Non-Goals:**
- Dot indicator / pagination dots
- Swipe/touch gesture support
- Animated transitions (fade or slide) — plain instant swap
- Fetching testimonial data from an API

## Decisions

### 1. Client component with `useState` + `useEffect`
The carousel tracks an `activeIndex` state. Auto-advance is implemented with `useEffect` that sets an interval. Manual arrow clicks call `setActiveIndex` and also clear/restart the interval (via a `key` reset on the effect or by tracking a `resetKey` state that the effect depends on).

**Chosen:** Use a `resetKey` counter in state — incrementing it inside the click handler causes the `useEffect` to re-run, restarting the 8-second timer naturally. This avoids manual `clearInterval` / `setInterval` bookkeeping.

**Alternative considered:** `useRef` to hold the interval ID and `clearInterval` on each click — more verbose and error-prone on cleanup.

### 2. Quote mark styling
Large decorative `"` and `"` characters rendered as `<span>` elements using `text-lele-orange` with large font size (e.g., `text-6xl font-ostania`). Opening mark is positioned at the top-left of the quote block; closing at the bottom-right.

### 3. Arrow buttons
Plain `<button>` elements with a light-blue circular background (`bg-lele-primary-50`) and a chevron SVG icon. Inline SVG avoids extra dependencies.

### 4. Profile photo
`next/image` `<Image>` with fixed circular dimensions (`w-20 h-20 rounded-full object-cover`).

## Risks / Trade-offs

- **Auto-advance UX**: Users reading a long quote may be interrupted. 8 seconds is the specified interval — no pause-on-hover is in scope.
- **Single file rewrite**: `TestimonialsSection.tsx` is fully replaced. No shared state or sibling components affected.

## Open Questions

_(none — requirements are clear)_
