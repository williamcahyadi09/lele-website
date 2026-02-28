## ADDED Requirements

### Requirement: Section headline
The dream team section SHALL display a "Tim Kami" pill badge and "Our Dream Team" heading using Ostania font.

#### Scenario: Badge renders
- **WHEN** the dream team section loads
- **THEN** a "Tim Kami" pill badge with cream background and orange bold text SHALL be visible above the heading

#### Scenario: Headline renders
- **WHEN** the dream team section loads
- **THEN** "Our" SHALL be displayed in dark color and "Dream Team" in orange, both using Ostania font

#### Scenario: Description renders
- **WHEN** the dream team section loads
- **THEN** a description paragraph about the team's 'Otak' and 'Jiwa' SHALL be displayed below the heading

### Requirement: Team member cards
The dream team section SHALL display three teacher profile cards with rectangular photo areas and decorative orange wave backgrounds.

#### Scenario: Cards render on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** three team member cards SHALL be displayed in a horizontal row

#### Scenario: Cards stack on mobile
- **WHEN** the viewport width is below 768px
- **THEN** team member cards SHALL stack vertically

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

### Requirement: Team section CTA
The dream team section SHALL display a filled blue CTA button "Kenalan Sama Dream Team Kami!" below the team grid.

#### Scenario: CTA button renders
- **WHEN** the dream team section renders
- **THEN** a filled blue "Kenalan Sama Dream Team Kami!" button SHALL appear below the team cards
