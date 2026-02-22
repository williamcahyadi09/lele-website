## Why

The homepage skeleton uses placeholder colors and images. To match the Figma design ("Revised homepage V2" and "Homepage Mobile - EN"), we need to update the Tailwind theme with accurate brand colors and replace placeholder elements with real image references and decorative SVG assets.

## What Changes

- Update Tailwind theme colors to match Figma design values (navy, orange, cream, light blue, grays)
- Replace the navbar placeholder logo box with an `<Image>` referencing the real logo asset
- Replace the hero section placeholder with a real image reference and proper decorative SVG blob shapes
- Update the footer logo to match the navbar
- Add SVG decorative elements (orange blob, wavy shape) matching Figma's decorative vectors

## Capabilities

### New Capabilities
<!-- None — this is a visual refinement, not new behavior -->

### Modified Capabilities
- `navbar`: Logo display updates from placeholder box to real image asset
- `hero-section`: Hero image area updates from placeholder to real image + accurate decorative SVGs
- `site-footer`: Logo updates from placeholder box to real image asset

## Impact

- `src/app/globals.css`: Updated color theme values
- `src/components/layout/Navbar.tsx`: Logo image swap
- `src/components/layout/Footer.tsx`: Logo image swap
- `src/components/home/HeroSection.tsx`: Hero image + decorative SVG elements
- `public/images/`: New image assets (logo, hero photo) to be placed by user
