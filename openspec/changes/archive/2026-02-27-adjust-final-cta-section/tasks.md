## 1. Section & Card Setup

- [x] 1.1 Add `py-16 md:py-24` to the `<section>` element
- [x] 1.2 Change card background from `bg-lele-orange` to `bg-lele-navy`
- [x] 1.3 Remove both decorative blob SVGs from the card
- [x] 1.4 Add a small decorative orange dot (`h-3 w-3 rounded-full bg-lele-orange`, absolute-positioned top-right area of card)

## 2. Layout Restructure

- [x] 2.1 Flip the two-column layout so the image column is on the LEFT and text+buttons column is on the RIGHT
- [x] 2.2 Ensure columns remain `md:flex-row` with text left-aligned on desktop and centered on mobile

## 3. Student Image (Left Column)

- [x] 3.1 Confirm image asset: add `final-cta-img.png` to `public/images/` (current `cta-student.png` does not exist — use placeholder `hero-student.png` if asset not yet available)
- [x] 3.2 Update `<Image>` `src` to the correct asset path
- [x] 3.3 Add first "学习!" speech bubble overlay (absolute-positioned, top-left of image container, white bg, orange text, rounded-full, shadow)
- [x] 3.4 Add second "学习!" speech bubble overlay (absolute-positioned, bottom-left of image container, matching style)

## 4. Headline & Copy (Right Column)

- [x] 4.1 Change `<span>` colour on "Bahasa Mandarin" from `text-white` to `text-lele-orange`
- [x] 4.2 Update body copy to: "Ambil langkah pertama! Jadwalkan konsultasi gratis dengan tim ahli kami dan rasakan bedanya 'Metode Le Le'."
- [x] 4.3 Update body text colour from `text-lele-navy/80` to `text-white/70` (readable on navy bg)

## 5. CTA Buttons

- [x] 5.1 Replace the existing single button with a flex container (`flex flex-col gap-3 md:flex-row`)
- [x] 5.2 Add primary outlined button: text "Jadwalkan Konsultasi Gratis Kamu", style `rounded-full border border-lele-orange px-8 py-4 text-sm font-bold text-lele-orange transition-colors hover:bg-lele-orange hover:text-white`, `onClick` navigates to `/konsultasi`
- [x] 5.3 Add secondary solid button: text "Download Ebook Kami", style `rounded-full bg-white/10 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/20`, `onClick` no-op for now

## 6. Cleanup & Verification

- [x] 6.1 Remove unused `router` import if the router is still only used for the primary button (keep if used)
- [x] 6.2 Run `npx tsc --noEmit` and confirm zero TypeScript errors
- [ ] 6.3 Verify section renders correctly on mobile (stacked) and desktop (two-column) in the browser
