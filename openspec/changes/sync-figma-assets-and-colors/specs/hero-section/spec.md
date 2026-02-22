## MODIFIED Requirements

### Requirement: Hero image area
The hero section SHALL display a student photo (`/images/hero-student.png`) on the right side (desktop) with decorative SVG elements matching the Figma design. Decorative elements SHALL include an orange blob shape (bottom-right), a navy blob shape (top-left), and a smiley face circle (top-right).

#### Scenario: Desktop two-column layout
- **WHEN** the viewport width is 768px or above
- **THEN** the text content SHALL occupy the left column (~50%)
- **AND** the image area SHALL occupy the right column (~40%)
- **AND** the hero image SHALL display from `/images/hero-student.png` using the Next.js `<Image>` component
- **AND** the image SHALL have rounded corners (2xl border radius)
- **AND** decorative SVG blob shapes SHALL appear around the image

#### Scenario: Mobile stacked layout
- **WHEN** the viewport width is below 768px
- **THEN** the text content and image area SHALL stack vertically
- **AND** the image area SHALL appear below the text content

#### Scenario: Hero image fallback
- **WHEN** the hero image file is not yet available
- **THEN** a light blue placeholder area with "Hero Image Placeholder" text SHALL be displayed
