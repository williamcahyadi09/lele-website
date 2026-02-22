## ADDED Requirements

### Requirement: Section headline
The dream team section SHALL display a section heading identifying the teaching team.

#### Scenario: Headline renders
- **WHEN** the dream team section loads
- **THEN** the text "Our Dream Team" SHALL be displayed as a prominent heading

### Requirement: Team member cards
The dream team section SHALL display at least three teacher profile cards.

#### Scenario: Cards render on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** team member cards SHALL be displayed in a horizontal row

#### Scenario: Cards stack on mobile
- **WHEN** the viewport width is below 768px
- **THEN** team member cards SHALL stack vertically or wrap into a two-column grid

### Requirement: Team member card content
Each team member card SHALL display a photo, name, and title.

#### Scenario: Kana Lue Shi card
- **WHEN** the dream team section renders
- **THEN** a card for "Kana Lue Shi" SHALL be visible with a photo and name

#### Scenario: Tiariff Lue Shi card
- **WHEN** the dream team section renders
- **THEN** a card for "Tiariff Lue Shi" SHALL be visible with a photo and name

#### Scenario: Nikkie Lue Shi card
- **WHEN** the dream team section renders
- **THEN** a card for "Nikkie Lue Shi" SHALL be visible with a photo and name

### Requirement: Team section CTA
The dream team section SHALL display a call-to-action button below the team grid.

#### Scenario: CTA button renders
- **WHEN** the dream team section renders
- **THEN** a CTA button SHALL appear below the team member cards
