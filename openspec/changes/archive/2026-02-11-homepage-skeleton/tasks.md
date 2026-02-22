## 1. Project Scaffolding

- [x] 1.1 Initialize Next.js 14+ project with TypeScript and App Router (`create-next-app`)
- [x] 1.2 Install and configure Tailwind CSS
- [x] 1.3 Set up custom Tailwind theme with LeLe brand colors (navy, orange, cream) and typography
- [x] 1.4 Create the file structure: `src/components/layout/`, `src/components/home/`, `public/images/`
- [x] 1.5 Add placeholder logo image to `public/images/`

## 2. Site Layout

- [x] 2.1 Create root layout (`src/app/layout.tsx`) with Navbar and Footer wrapping all pages
- [x] 2.2 Set up responsive container with max-width 1200px, centered, with mobile padding
- [x] 2.3 Ensure footer sticks to bottom when content is short (min-height viewport)

## 3. Navbar

- [x] 3.1 Create `Navbar.tsx` with logo on the left linking to homepage
- [x] 3.2 Add navigation links: Beranda, Program Kami, Tentang Kami, Tim Kami, Blog
- [x] 3.3 Add active page underline indicator using Next.js `usePathname`
- [x] 3.4 Add "Mulai Sekarang!" CTA button on the right with orange accent styling
- [x] 3.5 Implement mobile hamburger menu toggle (hidden on desktop, replaces nav links on mobile)
- [x] 3.6 Implement mobile menu drawer/overlay showing nav links and CTA vertically

## 4. Hero Section

- [x] 4.1 Create `HeroSection.tsx` with two-column layout (text left, image right on desktop)
- [x] 4.2 Add "STOP HAFAL MATI!" tag badge with rounded contrasting styling
- [x] 4.3 Add headline with "Fun" and "Efektif" visually emphasized in accent color
- [x] 4.4 Add subtitle text describing the Le Le Method
- [x] 4.5 Add primary CTA button "Daftar Konsultasi Gratis Sekarang" (filled) and secondary "Kelas Kami" (outlined)
- [x] 4.6 Add hero image placeholder area with decorative blob shapes
- [x] 4.7 Implement responsive stacking (text above image on mobile)

## 5. Footer

- [x] 5.1 Create `Footer.tsx` with four-column grid layout (stacked on mobile)
- [x] 5.2 Add logo and tagline column
- [x] 5.3 Add "Tentang Le Le" navigation links column (Beranda, Program Kami, Tentang Kami, Tim Kami, Hubungi Kami)
- [x] 5.4 Add "Hubungi Kami" contact column with email and phone icons
- [x] 5.5 Add "Follow Us" social media column with Instagram and TikTok icons/links

## 6. Homepage Assembly

- [x] 6.1 Wire up `src/app/page.tsx` with HeroSection as the page content
- [x] 6.2 Verify full page renders correctly at desktop (1200px+) and mobile (375px) viewports
