## MODIFIED Requirements

### Requirement: Section headline
The consultation CTA section SHALL display a headline promoting the free E-book offer.

#### Scenario: Headline renders
- **WHEN** the consultation CTA section loads
- **THEN** the text "Yuk Ngintip Resep Rahasia Kami!" SHALL be displayed as a prominent heading
- **AND** the words "Resep Rahasia" SHALL be visually distinguished (orange colour) from the rest of the headline

#### Scenario: Headline is center-aligned on mobile
- **WHEN** the viewport width is below 768px
- **THEN** the headline SHALL be horizontally centered
- **AND** on viewports 768px or above the headline SHALL be left-aligned

### Requirement: E-book section description
The consultation CTA section SHALL display a paragraph describing the free E-book offer below the headline.

#### Scenario: Description renders
- **WHEN** the consultation CTA section loads
- **THEN** a description paragraph SHALL be visible explaining the E-book content

#### Scenario: Description is center-aligned on mobile
- **WHEN** the viewport width is below 768px
- **THEN** the description paragraph SHALL be horizontally centered
- **AND** on viewports 768px or above the description SHALL be left-aligned
