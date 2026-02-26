## Why

The current ConsultationCTA section uses a dark navy card with a generic "chat" framing that does not match the updated Figma design. The new design reframes the section as a free E-book download offer — a higher-value lead magnet — with a two-column light-background layout and a decorative book illustration that better reflects the LeLe Mandarin brand.

## What Changes

- Replace dark navy card layout with a full-width cream-background two-column section
- Replace chat icon + "Yuk Ngobrol Bareng" copy with "Yuk Ngintip Resep Rahasia Kami!" E-book framing
- Add decorative left-column book illustration with orange circle blob, navy circle, speech bubble ("学习!"), and a purple book SVG
- Replace bare pill-shaped dark inputs with a white form card containing labeled inputs (Nama Lengkap, Nomor Telepon)
- Change submit CTA from orange "Konsultasi Gratis" to navy "Download FREE E-Book!"
- Add privacy disclaimer text below phone input

## Capabilities

### New Capabilities
- None (no new capabilities introduced)

### Modified Capabilities
- `consultation-cta-section`: Requirements change — headline text, form field names, CTA action (consultation → e-book download), and visual layout (dark card → light two-column with illustration) all differ from current spec

## Impact

- `src/components/home/ConsultationCTASection.tsx` — full rewrite
- `openspec/specs/consultation-cta-section/spec.md` — delta spec needed to update headline, field names, and CTA requirement scenarios
