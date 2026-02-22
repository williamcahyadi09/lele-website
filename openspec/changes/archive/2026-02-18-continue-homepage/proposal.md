## Why

The homepage currently only renders the Hero section — the remaining 6 sections visible in the v2 Figma design are unbuilt, leaving the page incomplete. This change builds out the full homepage to match the revised design.

## What Changes

- Add `PainPointsSection` — "Pernah Merasa Belajar Mandarin Itu... MenyiKsa?" with 3 pain point cards
- Add `MethodSection` — "Kami Merancang Metode Le Le untuk Belajar Mandarin" showcasing the Le Le method via Pop Culture, Philosophy, and Mnemonics pillars with supporting images
- Add `ClassesSection` — "Pilih Kelas 'Akar-Lean' Bersama Kami" side-by-side Regular Kelas vs Private Class comparison with CTAs
- Add `DreamTeamSection` — "Our Dream Team" with 3 teacher profile cards
- Add `TestimonialsSection` — "Apa Kata Klien yang Sudah Merasakan Metode Le Le?" with student photo + quote carousel/display
- Add `ConsultationCTASection` — "Yuk Ngobrol Bareng Bahasa Kami!" with a consultation signup form
- Add `FinalCTASection` — "Siap Gas Pol Perjalanan Bahasa Mandarin Kamu?" full-width bottom banner with CTA
- Update `app/page.tsx` to compose all sections in order

## Capabilities

### New Capabilities
- `pain-points-section`: Pain point cards section — highlights 3 common Mandarin learning frustrations with icons and short labels
- `method-section`: Le Le Method showcase — 3-pillar explanation (Pop Culture, Philosophy/Characters, Mnemonics) with images and descriptive text
- `classes-section`: Class comparison — side-by-side Regular vs Private class cards with feature lists and CTA buttons
- `dream-team-section`: Team profiles — grid of teacher cards with photo, name, and title
- `testimonials-section`: Social proof — student testimonials with photo and quote
- `consultation-cta-section`: Mid-page CTA — consultation invitation with a contact/signup form
- `final-cta-section`: Bottom CTA banner — full-width closing call-to-action with headline and button

### Modified Capabilities
- `hero-section`: Minor visual updates to match v2 design (tag badge text and layout tweaks)

## Impact

- `src/app/page.tsx` — add all 7 new section components
- `src/components/home/` — 7 new component files
- No new dependencies required (Tailwind + Next.js Image cover all needs)
- No API changes; all content is static
