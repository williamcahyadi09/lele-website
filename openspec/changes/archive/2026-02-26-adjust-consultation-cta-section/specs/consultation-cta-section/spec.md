## MODIFIED Requirements

### Requirement: Section headline
The consultation CTA section SHALL display a headline promoting the free E-book offer.

#### Scenario: Headline renders
- **WHEN** the consultation CTA section loads
- **THEN** the text "Yuk Ngintip Resep Rahasia Kami!" SHALL be displayed as a prominent heading
- **AND** the words "Resep Rahasia" SHALL be visually distinguished (orange colour) from the rest of the headline

### Requirement: Consultation form
The consultation CTA section SHALL display a form with labeled input fields for the visitor's name and phone number inside a white card.

#### Scenario: Form fields render
- **WHEN** the consultation CTA section loads
- **THEN** a "Nama Lengkap" labeled input field SHALL be visible with placeholder "Nama"
- **AND** a "Nomor Telepon" labeled input field SHALL be visible with placeholder "Ex: 08729201281"

#### Scenario: Submit button renders
- **WHEN** the consultation CTA section loads
- **THEN** a button with the text "Download FREE E-Book!" SHALL be visible within the form card

## ADDED Requirements

### Requirement: E-book section description
The consultation CTA section SHALL display a paragraph describing the free E-book offer below the headline.

#### Scenario: Description renders
- **WHEN** the consultation CTA section loads
- **THEN** a description paragraph SHALL be visible explaining the E-book content

### Requirement: Privacy disclaimer
The consultation CTA section SHALL display a privacy note reassuring visitors that their data will not be misused.

#### Scenario: Disclaimer renders
- **WHEN** the consultation CTA section loads
- **THEN** the text "Kami menghargai privasi Anda & tidak akan melakukan spam." SHALL be visible below the phone input

### Requirement: Decorative illustration
The consultation CTA section SHALL display a decorative illustration on the left side of the section on desktop viewports.

#### Scenario: Illustration renders on desktop
- **WHEN** the consultation CTA section loads on a viewport of 768px or wider
- **THEN** a decorative illustration area SHALL be visible to the left of the form content
- **AND** the illustration SHALL include a speech bubble element containing the Chinese character "学习"
