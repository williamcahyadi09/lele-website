## Context

The homepage skeleton is built with placeholder colors (estimated from screenshots) and placeholder elements (colored boxes instead of images). Now we need to align with the Figma design. Since the Figma MCP rate limit prevented extracting exact values programmatically, colors are best-estimates from visual analysis of the full-page screenshots captured earlier.

## Goals / Non-Goals

**Goals:**
- Match Tailwind theme colors as closely as possible to the Figma design
- Replace placeholder logo boxes with Next.js `<Image>` referencing real asset paths
- Replace hero placeholder with real image reference and SVG decorative elements
- Maintain graceful fallback when image files aren't yet placed in `public/images/`

**Non-Goals:**
- Exporting assets from Figma (user will place files manually)
- Pixel-perfect color matching (will refine when Figma access returns)
- Adding new sections or layout changes
- Animations on decorative elements

## Decisions

### Decision 1: Color values from visual analysis

Update the Tailwind theme in `globals.css` with refined color estimates:

| Token | Current | Updated | Usage |
|-------|---------|---------|-------|
| `lele-navy` | `#1B3A6B` | `#1B3B6F` | Headings, nav, badges |
| `lele-navy-dark` | `#122748` | `#0F2A4A` | Navy hover states |
| `lele-orange` | `#F5A623` | `#F5A524` | CTAs, accents, "Fun"/"Efektif" |
| `lele-orange-dark` | `#E0911A` | `#D4900F` | Orange hover states |
| `lele-cream` | `#FFF8F0` | `#FFF9F0` | Warm section backgrounds |
| `lele-light-blue` | `#E8F0FE` | `#E8F4FD` | Hero image background |

These are close estimates. Once Figma MCP access resets, we can extract exact hex values and do a precision pass.

### Decision 2: Image asset convention

All images go in `public/images/` with these expected filenames:
- `logo-lele.svg` — Logo used in navbar (122x54) and footer (144x64)
- `hero-student.png` — Hero section student photo (465x528)

Use Next.js `<Image>` component with explicit `width` and `height` props. If the file doesn't exist yet, the component will error in dev — this is acceptable and signals to the developer that assets need to be placed.

### Decision 3: Decorative SVG blobs as inline JSX

Rather than external SVG files, render decorative blob shapes as inline JSX within HeroSection. This avoids extra network requests and makes the shapes easy to color-match with Tailwind classes. The blob shapes are abstract organic forms — approximate circles/ellipses with slight distortion are sufficient.

## Risks / Trade-offs

- **Colors may not be exact** → Acceptable for now. A follow-up precision pass can be done when Figma API access resets. The estimates are visually close.
- **Images must be manually placed** → User needs to export from Figma and drop files into `public/images/`. Components will reference these paths and break visibly (Next.js Image error) if missing, making it obvious what's needed.
- **SVG blobs are approximations** → The decorative elements won't be exact Figma vectors. They're background flourishes, so close approximations are acceptable.
