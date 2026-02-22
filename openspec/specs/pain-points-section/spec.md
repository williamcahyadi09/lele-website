## ADDED Requirements

### Requirement: Section headline
The pain points section SHALL display a two-part headline: a neutral opener followed by an accented question word.

#### Scenario: Headline renders
- **WHEN** the pain points section loads
- **THEN** the text "Pernah Merasa Belajar Mandarin Itu..." SHALL be displayed
- **AND** the word "MenyiKsa?" SHALL be rendered in the lele-orange accent colour

### Requirement: Three pain point cards
The pain points section SHALL display exactly three pain point cards in a horizontal row on desktop.

#### Scenario: Cards render on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** three cards SHALL be displayed side by side in a single row
- **AND** each card SHALL contain an icon and a short descriptive label

#### Scenario: Cards stack on mobile
- **WHEN** the viewport width is below 768px
- **THEN** the three cards SHALL stack vertically in a single column

### Requirement: Pain point card content
Each pain point card SHALL convey a specific learner frustration with an icon and label.

#### Scenario: Card 1 — memorisation difficulty
- **WHEN** the pain points section renders
- **THEN** a card with the label "Susah Hafalan" SHALL be visible with a supporting icon

#### Scenario: Card 2 — lack of engagement
- **WHEN** the pain points section renders
- **THEN** a card with the label "Kurang Seru" SHALL be visible with a supporting icon

#### Scenario: Card 3 — not enjoyable
- **WHEN** the pain points section renders
- **THEN** a card with the label "Gak Gitu Asik" SHALL be visible with a supporting icon
