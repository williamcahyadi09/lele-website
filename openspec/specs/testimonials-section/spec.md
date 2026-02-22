## ADDED Requirements

### Requirement: Section headline
The testimonials section SHALL display a headline prompting social proof.

#### Scenario: Headline renders
- **WHEN** the testimonials section loads
- **THEN** the text "Apa Kata Klien yang Sudah Merasakan Metode Le Le?" SHALL be displayed as a prominent heading

### Requirement: Testimonial display
The testimonials section SHALL display one or more student testimonials, each with a photo and a quote.

#### Scenario: Testimonial card renders
- **WHEN** the testimonials section loads
- **THEN** at least one testimonial card SHALL be visible
- **AND** each card SHALL contain a student photo and a quote text

#### Scenario: Multiple testimonials on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** multiple testimonial cards SHALL be visible simultaneously in a row or grid

#### Scenario: Single column on mobile
- **WHEN** the viewport width is below 768px
- **THEN** testimonial cards SHALL stack vertically in a single column

### Requirement: Testimonial attribution
Each testimonial SHALL include the name of the student providing the quote.

#### Scenario: Student name visible
- **WHEN** a testimonial card renders
- **THEN** the student's name SHALL be displayed alongside or below the quote
