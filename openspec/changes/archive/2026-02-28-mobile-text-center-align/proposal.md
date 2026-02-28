## Why

On mobile, most home-page sections render text left-aligned, which looks unbalanced on narrow viewports where content is stacked in a single column. Center-aligning text on mobile creates a more polished, intentional layout that matches the visual style already used in sections like PainPoints and Testimonials.

## What Changes

- Add `text-center` (mobile) with `md:text-left` override to sections that are currently left-aligned on mobile:
  - `HeroSection.tsx` — badge, headline, subtitle, and CTA button group
  - `DreamTeamSection.tsx` — team member name and title inside each card
  - `ConsultationCTASection.tsx` — section heading and supporting text
- The section heading in `ClassesSection.tsx` may be centered, but **card content (card header, features list, CTA) must remain left-aligned** — feature lists with icons rely on left-aligned flex rows and should not be disrupted.
- Sections already centered on mobile (`PainPointsSection`, `TestimonialsSection`, `MethodSection` header, `FinalCTASection`) require no changes.

## Capabilities

### New Capabilities
- none

### Modified Capabilities
- `navbar`: no change
- `hero`: mobile text alignment updated to `text-center`

## Impact

- **Files modified**: `HeroSection.tsx`, `DreamTeamSection.tsx`, `ConsultationCTASection.tsx`, optionally `ClassesSection.tsx` (heading only)
- **Files unchanged**: `ClassesSection.tsx` card content, `PainPointsSection.tsx`, `TestimonialsSection.tsx`, `MethodSection.tsx`, `FinalCTASection.tsx`
- No API, routing, or dependency changes
