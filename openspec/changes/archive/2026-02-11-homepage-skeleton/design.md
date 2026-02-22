## Context

This is a greenfield Next.js project for LeLe Mandarin, a Chinese learning platform. There is no existing code — only the Figma design and OpenSpec config. The homepage skeleton (navbar, hero, footer) is the first implementation, establishing patterns all future pages will follow.

The Figma design specifies a 1200px content width, navy blue (#1B3A6B) primary color, orange/amber accent, and a playful but professional tone with decorative blob shapes and emoji elements.

## Goals / Non-Goals

**Goals:**
- Scaffold a production-ready Next.js 14+ project with App Router
- Establish the component architecture and file organization pattern
- Implement pixel-accurate navbar, hero, and footer matching the Figma design
- Ensure full responsiveness (desktop 1200px → mobile 375px)
- Set up Tailwind CSS with the LeLe Mandarin color palette and typography

**Non-Goals:**
- Internationalization (i18n) — ship Indonesian first, add English later
- Authentication or user accounts
- CMS integration — content is hardcoded for now
- Animations or micro-interactions beyond basic hover states
- SEO optimization beyond basic meta tags
- Other homepage sections (pain points, method, classes, team, testimonials, CTA)

## Decisions

### Decision 1: Next.js App Router with TypeScript

Use Next.js 14+ App Router (not Pages Router). App Router is the recommended approach for new Next.js projects, provides better layouts support (critical for our shared navbar/footer pattern), and React Server Components by default.

**Alternatives considered:**
- Pages Router: More examples available but being phased out. App Router's layout system is a better fit for our shared site layout.
- Astro/Remix: Viable but Next.js is specified in the project config.

### Decision 2: Component file structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (wraps all pages with navbar + footer)
│   ├── page.tsx            ← Homepage
│   └── globals.css         ← Global styles + Tailwind imports
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── home/
│       └── HeroSection.tsx
└── public/
    └── images/             ← Logo, hero image, decorative assets
```

Group components by domain (`layout/` for shared, `home/` for homepage-specific). Each component is a single file until complexity warrants splitting.

**Alternatives considered:**
- Feature-based folders (e.g., `features/navbar/`): Overkill for this stage. Can restructure later if components grow complex.
- Barrel exports with `index.ts`: Unnecessary indirection for a small component set.

### Decision 3: Tailwind CSS with custom theme

Extend the default Tailwind config with LeLe brand tokens:

- **Colors:** Navy primary (`lele-navy`), orange accent (`lele-orange`), cream background (`lele-cream`)
- **Fonts:** Match the Figma typography (likely a rounded/friendly sans-serif)
- **Max width:** `max-w-[1200px]` for the content container, matching the Figma grid

Use Tailwind utility classes directly in components. No CSS modules or styled-components.

### Decision 4: Placeholder assets

Use placeholder images for the hero photo and logo initially. Structure the components so real assets can be dropped in later without code changes — use Next.js `<Image>` component with `public/images/` directory.

### Decision 5: Mobile-first responsive approach

Write styles mobile-first, using Tailwind's `md:` breakpoint (768px) to layer on desktop styles. This matches the Figma's two-viewport approach (desktop + mobile) and is Tailwind's recommended pattern.

## Risks / Trade-offs

- **Placeholder assets look unfinished** → Mitigated by using appropriately sized colored rectangles with descriptive labels, so the layout is clearly intentional
- **Hardcoded content limits future flexibility** → Acceptable for skeleton phase. Content extraction into a data file or CMS can happen in a later change
- **No i18n from the start** → The Figma has both Indonesian and English versions. Building without i18n means content will need refactoring later. Acceptable trade-off to ship faster now — the component structure won't need to change, only how content strings are sourced
