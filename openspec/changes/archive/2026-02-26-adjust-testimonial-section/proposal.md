## Why

The testimonials section needs to match the updated Figma design. The current implementation uses a static 3-card grid with a cream background. The redesign replaces it with a centered carousel/slider showing one testimonial at a time, with navigation arrows, a new heading, and consistent Ostania/Poppins typography.

## What Changes

- **Remove** the cream section background (`bg-lele-cream`) — white background instead
- **Remove** the "Testimoni" label above the heading
- **Update heading** to "Apa Kata Mereka yang Telah Merasakan Metode Le Le?" using Ostania font in `lele-primary-800`
- **Replace 3-card grid** with a single-slide carousel:
  - Circular profile photo centered above the quote
  - Opening `"` quote mark in orange on the top-left of the quote
  - Closing `"` quote mark in orange at the bottom-right of the quote
  - Quote text centered, Poppins regular
  - Bold name (Poppins Bold) centered below the quote
  - Role/subtitle in Poppins gray below the name
  - Left and right navigation arrow buttons (light blue, chevron icons) flanking the testimonial
- **Update testimonial data** — add at least one entry: Rihan, "Desainer di perusahaan swasta"
- **Carousel state** — tracks active index, arrows navigate prev/next
- **Auto-advance** — carousel automatically advances to the next testimonial every 8 seconds; manual navigation resets the timer

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `testimonials-section`: Layout changes from static 3-card grid to single-slide carousel, heading text updated, section background removed, typography updated

## Impact

- `src/components/home/TestimonialsSection.tsx` — full rewrite: carousel state, new layout, updated data and typography
- `openspec/specs/testimonials-section/spec.md` — update requirements for carousel, new heading, new data
