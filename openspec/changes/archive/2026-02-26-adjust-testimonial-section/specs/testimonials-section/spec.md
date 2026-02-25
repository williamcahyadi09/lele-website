## MODIFIED Requirements

### Requirement: Section headline
The testimonials section SHALL display a heading without a label above it, on a white background.

#### Scenario: Heading renders
- **WHEN** the testimonials section loads
- **THEN** the text "Apa Kata Mereka yang Telah Merasakan Metode Le Le?" SHALL be displayed using Ostania font in `lele-primary-800` color
- **AND** no "Testimoni" label/badge SHALL appear above the heading

#### Scenario: Section background
- **WHEN** the testimonials section loads
- **THEN** the section background SHALL be white (no cream background)

### Requirement: Testimonial display
The testimonials section SHALL display one testimonial at a time in a carousel layout with navigation arrows.

#### Scenario: Single testimonial visible
- **WHEN** the testimonials section loads
- **THEN** only one testimonial SHALL be visible at a time

#### Scenario: Carousel navigation
- **WHEN** the user clicks the left or right arrow button
- **THEN** the displayed testimonial SHALL change to the previous or next testimonial respectively

#### Scenario: Carousel wraps around
- **WHEN** the user clicks next on the last testimonial
- **THEN** the first testimonial SHALL be displayed

#### Scenario: Carousel wraps backward
- **WHEN** the user clicks prev on the first testimonial
- **THEN** the last testimonial SHALL be displayed

#### Scenario: Auto-advance
- **WHEN** the testimonials section is visible and no manual navigation has occurred in 8 seconds
- **THEN** the carousel SHALL automatically advance to the next testimonial

#### Scenario: Manual navigation resets timer
- **WHEN** the user clicks a navigation arrow
- **THEN** the auto-advance timer SHALL reset to 8 seconds before the next advance

### Requirement: Testimonial attribution
Each testimonial SHALL include a circular profile photo, centered quote with decorative orange quote marks, the student's bold name, and their role below the name.

#### Scenario: Profile photo renders
- **WHEN** a testimonial is displayed
- **THEN** a circular profile photo SHALL appear centered above the quote text

#### Scenario: Quote marks render
- **WHEN** a testimonial is displayed
- **THEN** a decorative opening `"` quote mark in orange SHALL appear at the top-left of the quote
- **AND** a decorative closing `"` quote mark in orange SHALL appear at the bottom-right of the quote

#### Scenario: Student name visible
- **WHEN** a testimonial is displayed
- **THEN** the student's name SHALL be displayed in Poppins Bold, centered below the quote

#### Scenario: Student role visible
- **WHEN** a testimonial is displayed
- **THEN** the student's role/subtitle SHALL be displayed in Poppins gray, centered below the name

### Requirement: Testimonial data
The testimonials section SHALL include at least one entry for Rihan with the role "Desainer di perusahaan swasta".

#### Scenario: Rihan testimonial exists
- **WHEN** the testimonials section renders
- **THEN** a testimonial attributed to "Rihan" with role "Desainer di perusahaan swasta" SHALL be present in the carousel
