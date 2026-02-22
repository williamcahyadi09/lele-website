## ADDED Requirements

### Requirement: Section headline
The method section SHALL display a headline introducing the Le Le Method.

#### Scenario: Headline renders
- **WHEN** the method section loads
- **THEN** the text "Kami Merancang Metode Le Le untuk Belajar Mandarin" SHALL be displayed as a prominent heading

### Requirement: Three method pillars
The method section SHALL display three pillars of the Le Le Method, each with a title, supporting image, and descriptive text.

#### Scenario: Pillars render on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** three pillars SHALL be displayed in a horizontal row

#### Scenario: Pillars stack on mobile
- **WHEN** the viewport width is below 768px
- **THEN** three pillars SHALL stack vertically

### Requirement: Pillar — Pop Culture
The method section SHALL include a pillar showcasing the pop culture teaching approach.

#### Scenario: Pop Culture pillar content
- **WHEN** the method section renders
- **THEN** a pillar with the title "Pop Culture Advance" SHALL be visible
- **AND** a supporting image SHALL be displayed within the pillar

### Requirement: Pillar — Philosophy and Characters
The method section SHALL include a pillar showcasing the Chinese character philosophy approach.

#### Scenario: Philosophy pillar content
- **WHEN** the method section renders
- **THEN** a pillar with the title "Filosofi Alam & Karakter Bahasa" SHALL be visible
- **AND** a supporting image SHALL be displayed within the pillar

### Requirement: Pillar — Mnemonic System
The method section SHALL include a pillar showcasing the mnemonic memorisation system.

#### Scenario: Mnemonic pillar content
- **WHEN** the method section renders
- **THEN** a pillar covering the mnemonic/memory system approach SHALL be visible
- **AND** a supporting image SHALL be displayed within the pillar
