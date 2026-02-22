## ADDED Requirements

### Requirement: Section headline
The classes section SHALL display a headline inviting visitors to choose a class.

#### Scenario: Headline renders
- **WHEN** the classes section loads
- **THEN** the text "Pilih Kelas 'Akar-Lean' Bersama Kami" SHALL be displayed as a prominent heading

### Requirement: Two class cards
The classes section SHALL display two class option cards side by side on desktop.

#### Scenario: Cards render on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** a "Regular Kelas" card and a "Private Class" card SHALL be displayed side by side

#### Scenario: Cards stack on mobile
- **WHEN** the viewport width is below 768px
- **THEN** the two class cards SHALL stack vertically

### Requirement: Class card structure
Each class card SHALL contain a class name, a "Yang Kamu Dapatkan:" label, a feature list, and a CTA button.

#### Scenario: Regular Kelas card content
- **WHEN** the classes section renders
- **THEN** the "Regular Kelas" card SHALL display a feature list under the label "Yang Kamu Dapatkan:"
- **AND** a CTA button SHALL be present on the card

#### Scenario: Private Class card content
- **WHEN** the classes section renders
- **THEN** the "Private Class" card SHALL display a feature list under the label "Yang Kamu Dapatkan:"
- **AND** a CTA button SHALL be present on the card

### Requirement: Class CTA buttons
Each class card SHALL have a call-to-action button that links to the consultation or registration page.

#### Scenario: CTA button interaction
- **WHEN** a user clicks the CTA button on any class card
- **THEN** the user SHALL be navigated to the relevant registration or consultation page
