## Why

The classes section needs to match the updated Figma design. The current implementation has outdated heading text, simplified card structure, and different content. The redesign introduces richer cards with header areas, description paragraphs, detailed feature items (title + description), and updated copy throughout.

## What Changes

- **Remove** the "Program Kami" subtitle label above the heading
- **Change heading** from "Pilih Kelas 'Akar-Lean' Bersama Kami" to "Pilih Kelas **'Agak Laen'** Bersama Kami"
- **New card structure** — each card now has:
  - A light blue (`#F1F6FE`) header area with decorative background element
  - Class name title (Ostania font)
  - Italic subtitle/tagline
  - A description paragraph explaining the class format
  - "Yang Kamu Dapatkan:" heading (Ostania font)
  - Feature items with checkmark icon, **bold title**, and description text (not just a single line)
  - Blue gradient CTA button: "Lihat Detail Kelas"
- **Regular Class** content:
  - Subtitle: "Belajar Mandarin Tidak Pernah Seseru Ini! Selesaikan Misi, Kumpulkan Poin, Menangkan Beasiswa."
  - 3 features: Gamified Scholarship System, Interactive Group (8-12 Siswa), HSK Standard Curriculum
- **Private Class** content:
  - Subtitle: "Kurikulum yang Menyesuaikan Kebutuhan Anda, Bukan Sebaliknya."
  - 4 features: 100% Tailored Curriculum, Accelerated Progress, Flexible Scheduling, Maximum Speaking Time
- **Remove** the dark navy highlighted style from Private Class — both cards now use white background with light border
- **CTA buttons** change from "Daftar Sekarang" to "Lihat Detail Kelas" with a blue gradient style

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `classes-section`: Heading text, card layout/structure, feature list format, content copy, CTA labels, and visual styling all change to match the revised Figma design

## Impact

- `src/components/home/ClassesSection.tsx` — full rework of card data, layout, and styling
- `openspec/specs/classes-section/spec.md` — requirements update for new heading, card structure, content, and CTA text
