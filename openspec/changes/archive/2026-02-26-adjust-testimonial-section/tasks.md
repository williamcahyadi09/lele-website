## 1. Data & State Setup

- [x] 1.1 Add `"use client"` directive and import `useState`, `useEffect` from React
- [x] 1.2 Define the testimonials data array with at least two entries including Rihan ("Desainer di perusahaan swasta")
- [x] 1.3 Add `activeIndex` state (default 0) and `resetKey` state (default 0) for carousel

## 2. Section Layout

- [x] 2.1 Remove `bg-lele-cream` — set section to white background (or no background class)
- [x] 2.2 Remove the "Testimoni" label/badge from the heading area
- [x] 2.3 Update the heading text to "Apa Kata Mereka yang Telah Merasakan Metode Le Le?" using `font-ostania` and `text-lele-primary-800`

## 3. Carousel Layout

- [x] 3.1 Render only the testimonial at `activeIndex` (replace the old grid/map)
- [x] 3.2 Add circular profile photo (`rounded-full object-cover`) centered above the quote
- [x] 3.3 Add opening `"` decorative quote mark (orange, large, top-left of quote area)
- [x] 3.4 Add closing `"` decorative quote mark (orange, large, bottom-right of quote area)
- [x] 3.5 Render the quote text centered using `font-poppins`
- [x] 3.6 Render the student name in `font-poppins font-bold` centered below the quote
- [x] 3.7 Render the student role in `font-poppins text-lele-gray` centered below the name

## 4. Navigation Arrows

- [x] 4.1 Add a left chevron button (light blue background, circular) that navigates to the previous testimonial (wraps to last)
- [x] 4.2 Add a right chevron button (light blue background, circular) that navigates to the next testimonial (wraps to first)
- [x] 4.3 Both arrow clicks increment `resetKey` to reset the auto-advance timer

## 5. Auto-Advance

- [x] 5.1 Add `useEffect` that sets an 8-second interval to advance `activeIndex` (with wrap-around), depending on `resetKey`
- [x] 5.2 Return a cleanup function from the effect to clear the interval on unmount or re-run

## 6. GSAP Animation

- [x] 6.1 Install `gsap` package
- [x] 6.2 Add `useRef` on the testimonial content container
- [x] 6.3 Add `useEffect` that triggers a GSAP `fromTo` fade + slide-up animation on the content ref whenever `activeIndex` changes
