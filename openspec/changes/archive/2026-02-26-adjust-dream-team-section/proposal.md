## Why

The dream team section needs to match the updated Figma design. The current implementation uses circular photos, different team member data, and an outline CTA button. The redesign introduces rectangular photo cards with decorative backgrounds, updated team member names/titles, a new description paragraph, and consistent Ostania/Poppins typography.

## What Changes

- **"Tim Kami" label** — change from plain uppercase text to an orange pill/badge shape (rounded border, orange text)
- **Heading** — "Our Dream Team" uses Ostania font, "Our" in dark color, "Dream Team" in orange
- **Description text** — replace with new copy: "Sering ditanya, 'Apa sih rahasia Le Le Mandarin?'..." paragraph about team's 'Otak' and 'Jiwa'
- **Team member data** — update names and titles:
  - Rara Lao Shi — Juara Nasional Chinese Bridge 2023
  - Farell Lao Shi — Juara Nasional Chinese Bridge 2023
  - Metta Lao Shi — Juara Nasional Chinese Bridge 2023
- **Card layout** — replace circular photo + centered text with:
  - Large rectangular photo area with decorative orange wave pattern in the background
  - Rounded card with light border
  - Name in bold (Ostania font) left-aligned below photo
  - Title in Poppins below name
- **CTA button** — change from outline style "Kenalan dengan Tim Kami" to filled blue button "Kenalan Sama Dream Team Kami!"
- **Typography** — apply Ostania for heading and team names, Poppins for body text and titles (consistent with classes section)

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `dream-team-section`: Card layout, team member data, description text, CTA style, and typography all change to match the revised Figma design

## Impact

- `src/components/home/DreamTeamSection.tsx` — full rework of card layout, data, and styling
- `openspec/specs/dream-team-section/spec.md` — requirements update for new card structure, team data, and CTA
