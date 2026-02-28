## MODIFIED Requirements

### Requirement: Team member card content
Each team member card SHALL display a rectangular photo area with decorative orange wave background, name in bold Poppins, and title in Poppins below the photo.

#### Scenario: Rara Lao Shi card
- **WHEN** the dream team section renders
- **THEN** a card for "Rara Lao Shi" SHALL be visible with photo, name, and title "Juara Nasional Chinese Bridge 2023"

#### Scenario: Farell Lao Shi card
- **WHEN** the dream team section renders
- **THEN** a card for "Farell Lao Shi" SHALL be visible with photo, name, and title "Juara Nasional Chinese Bridge 2023"

#### Scenario: Metta Lao Shi card
- **WHEN** the dream team section renders
- **THEN** a card for "Metta Lao Shi" SHALL be visible with photo, name, and title "Juara Nasional Chinese Bridge 2023"

#### Scenario: Card name and title are center-aligned on mobile
- **WHEN** the viewport width is below 768px
- **THEN** each team member card's name and title text SHALL be horizontally centered below the photo
