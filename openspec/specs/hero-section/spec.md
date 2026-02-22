## ADDED Requirements

### Requirement: Tag badge
The hero section SHALL display a small tag badge above the headline with the text "STOP HAFAL MATI!" on a contrasting background.

#### Scenario: Tag badge renders
- **WHEN** the hero section loads
- **THEN** a tag badge SHALL appear above the headline with rounded styling
- **AND** the badge SHALL use the lele-orange background colour with white or dark text

### Requirement: Headline and subtitle
The hero section SHALL display a primary headline and supporting subtitle text.

#### Scenario: Headline content
- **WHEN** the hero section renders
- **THEN** the headline "Belajar Bahasa Mandarin Sampai ke Akar dengan Fun dan Efektif!" SHALL be displayed in large, bold typography
- **AND** the words "Fun" and "Efektif" SHALL be visually emphasized (accent color or italic)

#### Scenario: Subtitle content
- **WHEN** the hero section renders
- **THEN** a subtitle describing the Le Le Method SHALL appear below the headline in smaller text

### Requirement: Dual CTA buttons
The hero section SHALL display two call-to-action buttons below the subtitle.

#### Scenario: Primary CTA
- **WHEN** the hero section renders
- **THEN** a primary button "Daftar Konsultasi Gratis Sekarang" SHALL be displayed with a filled/solid style

#### Scenario: Secondary CTA
- **WHEN** the hero section renders
- **THEN** a secondary button "Kelas Kami" SHALL be displayed adjacent to the primary button with an outlined style

### Requirement: Hero image area
The hero section SHALL display an image area on the right side (desktop) with decorative elements.

#### Scenario: Desktop two-column layout
- **WHEN** the viewport width is 768px or above
- **THEN** the text content SHALL occupy the left column (~50%)
- **AND** the image area SHALL occupy the right column (~40%)
- **AND** decorative blob shapes and emoji elements SHALL appear around the image

#### Scenario: Mobile stacked layout
- **WHEN** the viewport width is below 768px
- **THEN** the text content and image area SHALL stack vertically
- **AND** the image area SHALL appear below the text content
