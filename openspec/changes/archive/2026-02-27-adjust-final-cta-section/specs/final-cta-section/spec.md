## MODIFIED Requirements

### Requirement: Full-width CTA banner
The final CTA section SHALL use a visually distinct dark navy background to signal a closing call-to-action, and SHALL include vertical padding to separate it from adjacent sections.

#### Scenario: Section renders with navy background
- **WHEN** the final CTA section loads
- **THEN** the section SHALL be displayed with a navy (`lele-navy`) background
- **AND** it SHALL span the full content width within a rounded-3xl card

### Requirement: CTA headline
The final CTA section SHALL display a motivational headline with "Bahasa Mandarin" visually emphasised in orange.

#### Scenario: Headline renders
- **WHEN** the final CTA section loads
- **THEN** the text "Siap Gas Pol Perjalanan Bahasa Mandarin Kamu?" SHALL be displayed in large, prominent typography
- **AND** the words "Bahasa Mandarin" SHALL be visually distinguished in orange colour

### Requirement: CTA button
The final CTA section SHALL display two call-to-action buttons: a primary outlined button and a secondary solid button.

#### Scenario: Primary CTA button renders
- **WHEN** the final CTA section loads
- **THEN** a button with the text "Jadwalkan Konsultasi Gratis Kamu" SHALL be visible with an outlined style

#### Scenario: Primary CTA button navigates to consultation
- **WHEN** a user clicks the primary CTA button
- **THEN** the user SHALL be navigated to the consultation or registration page

#### Scenario: Secondary CTA button renders
- **WHEN** the final CTA section loads
- **THEN** a button with the text "Download Ebook Kami" SHALL be visible with a solid style

### Requirement: Decorative student image
The final CTA section SHALL include a student image on the LEFT side of the section to humanise the closing CTA.

#### Scenario: Image renders on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** a student image SHALL be visible to the LEFT of the headline and buttons

## ADDED Requirements

### Requirement: Image speech bubble overlays
The student image area SHALL display decorative "学习!" speech bubble elements overlaid on the image.

#### Scenario: Speech bubbles render with image
- **WHEN** the final CTA section loads on a viewport of 768px or wider
- **THEN** at least one "学习!" speech bubble SHALL be visible overlaid on or near the student image
