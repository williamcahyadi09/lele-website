## 1. Update Tailwind Theme Colors

- [x] 1.1 Update `globals.css` color tokens: lele-navy → #1B3B6F, lele-navy-dark → #0F2A4A, lele-orange → #F5A524, lele-orange-dark → #D4900F, lele-cream → #FFF9F0, lele-light-blue → #E8F4FD

## 2. Navbar Logo

- [x] 2.1 Replace placeholder navy box in `Navbar.tsx` with Next.js `<Image>` component referencing `/images/logo-lele.svg` (122x54)
- [x] 2.2 Add alt text "LeLe Mandarin" to the logo image

## 3. Hero Section Image & Decorations

- [x] 3.1 Replace hero placeholder div in `HeroSection.tsx` with Next.js `<Image>` referencing `/images/hero-student.png` (465x528) with rounded-2xl corners
- [x] 3.2 Replace simple circle decorative elements with inline SVG blob shapes (organic forms matching Figma's orange and navy decorative vectors)
- [x] 3.3 Keep smiley emoji decoration as-is (matches Figma)

## 4. Footer Logo

- [x] 4.1 Replace placeholder navy box in `Footer.tsx` with Next.js `<Image>` component referencing `/images/logo-lele.svg` (144x64)
- [x] 4.2 Add alt text "LeLe Mandarin" to the footer logo image

## 5. Verify

- [x] 5.1 Run `next build` to confirm no TypeScript or compilation errors
- [x] 5.2 Confirm components reference correct image paths in `public/images/`
