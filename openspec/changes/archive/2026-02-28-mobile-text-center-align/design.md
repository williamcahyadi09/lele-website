## Context

Home-page sections stack into a single column on mobile. Most text blocks lack an explicit mobile alignment class and inherit left-alignment by default, which looks unbalanced. Sections like `PainPointsSection` and `TestimonialsSection` already use `text-center` and serve as the reference pattern. This change brings the remaining sections into alignment — literally.

`ClassesSection` card bodies are intentionally excluded: their feature lists use `flex` rows with icon + text pairs that would break visually if center-aligned.

## Goals / Non-Goals

**Goals:**
- Add `text-center` (mobile) + `md:text-left` (desktop restore) where needed
- Affect only `HeroSection`, `DreamTeamSection`, and `ConsultationCTASection`
- The section heading in `ClassesSection` (outside cards) may be centered
- Preserve all existing desktop layouts exactly

**Non-Goals:**
- Changing layout structure, spacing, or any visual property other than text alignment
- Modifying `ClassesSection` card content (header text, features list, CTA button)
- Touching sections already correctly aligned (`PainPointsSection`, `TestimonialsSection`, `MethodSection`, `FinalCTASection`)

## Decisions

**Decision: Tailwind responsive prefix pattern — `text-center md:text-left`**

Apply `text-center` at the mobile base and override with `md:text-left` on desktop. This is the same pattern already used in other sections in the project. Alternatives considered:

- Wrapping in a container with `text-center` and using `md:text-left` on children — rejected, too much structural change for a cosmetic fix.
- CSS media query in `globals.css` — rejected, Tailwind utility classes are the project convention.

**Decision: Apply at the nearest text-containing parent, not globally**

Each section component owns its alignment. No shared wrapper or global style is introduced. This keeps components self-contained and avoids unintended side-effects on future components.

**Decision: Button groups use `items-center` not `text-center`**

In `HeroSection`, the CTA buttons are a `flex` row. Text-center has no effect on flex children; instead `justify-center` (mobile) + `md:justify-start` is needed for the button group alignment.

## Risks / Trade-offs

- **Risk**: A future component added to a section could inherit unexpected centering.
  → **Mitigation**: Alignment is scoped to specific elements, not parent wrappers — no bleed risk.

- **Trade-off**: Each component gets its own alignment classes rather than a shared pattern.
  → Acceptable — these are small, isolated tweaks and a shared abstraction would be premature.
