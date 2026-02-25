## 1. Fonts & Color Tokens

- [x] 1.1 Add Ostania font (check availability as web font; if unavailable, source local file or pick similar display font as fallback)
- [x] 1.2 Add Poppins font via `next/font/google` in layout or component
- [x] 1.3 Add new color tokens to `@theme` in `globals.css`: `--color-lele-primary-800` (#2C4195), `--color-lele-primary-50` (#F1F6FE), `--color-lele-neutral-700` (#464646), `--color-lele-neutral-50` (#EFEFEF)

## 2. Update Card Data Model

- [x] 2.1 Restructure the `classes` data array in `ClassesSection.tsx` — each entry gets `type`, `subtitle`, `description`, and `features: Array<{ title: string; description: string }>` fields
- [x] 2.2 Populate Regular Class data: title "Regular Class", subtitle, description paragraph, 3 features (Gamified Scholarship System, Interactive Group 8-12 Siswa, HSK Standard Curriculum) with full description text from Figma
- [x] 2.3 Populate Private Class data: title "Private Class", subtitle, description paragraph, 4 features (100% Tailored Curriculum, Accelerated Progress, Flexible Scheduling, Maximum Speaking Time) with full description text from Figma

## 3. Update Section Header

- [x] 3.1 Remove the "Program Kami" label element
- [x] 3.2 Change heading text from "Akar-Lean" to "Agak Laen" with orange highlight

## 4. Rework Card Layout & Styling

- [x] 4.1 Replace card structure — add light blue (#F1F6FE) header area with class name title and italic subtitle
- [x] 4.2 Remove dark navy highlighted style from Private Class card — both cards use white background with #EFEFEF border and rounded-xl
- [x] 4.3 Add description paragraph section below the header area
- [x] 4.4 Rework "Yang Kamu Dapatkan:" section — render as a heading, then feature items with circle-check SVG icon, bold title, and description text
- [x] 4.5 Create inline SVG circle-check icon matching `icon-park-solid:check-one` style
- [x] 4.6 Replace CTA button — text "Lihat Detail Kelas", blue gradient (`from-[#2E5AAF] to-[#21337B]`), rounded-full, white text

## 5. Verify

- [x] 5.1 Visual check against Figma design on desktop and mobile viewports
