## Why

LeLe Mandarin needs its web presence built from scratch. The homepage is the first thing potential students see and needs to establish brand identity, communicate the value proposition, and drive sign-ups. Starting with the structural skeleton (navbar, hero, footer) gives us the foundation that every other page will share, and validates the tech stack before building out content-heavy sections.

## What Changes

- Scaffold a new Next.js project with TypeScript and Tailwind CSS
- Build a responsive navbar with logo, navigation links, and CTA button
- Build the homepage hero section with headline, subtitle, CTAs, and image area
- Build a responsive footer with logo, navigation links, contact info, and social links
- Establish the shared page layout pattern (navbar + content + footer)

## Capabilities

### New Capabilities
- `site-layout`: Shared page layout wrapper providing consistent navbar and footer across all pages
- `navbar`: Top navigation bar with logo, page links (Beranda, Program Kami, Tentang Kami, Tim Kami, Blog), active state indicator, and primary CTA button
- `hero-section`: Homepage hero with tag badge, headline, subtitle, dual CTA buttons, and image area with decorative elements
- `site-footer`: Four-column footer with logo/tagline, navigation links, contact details (email, phone), and social media links (Instagram, TikTok)

### Modified Capabilities
<!-- None - greenfield project -->

## Impact

- New Next.js project structure at project root
- New shared components: `Navbar`, `Footer`, `Layout`
- New page-specific component: `HeroSection`
- Dependencies: `next`, `react`, `typescript`, `tailwindcss`
- Design reference: Figma "Revised homepage V2" (desktop) + "Homepage (Mobile - EN)" (mobile)
