## ADDED Requirements

### Requirement: Section headline
The consultation CTA section SHALL display an inviting headline encouraging visitors to get in touch.

#### Scenario: Headline renders
- **WHEN** the consultation CTA section loads
- **THEN** the text "Yuk Ngobrol Bareng Bahasa Kami!" SHALL be displayed as a prominent heading

### Requirement: Consultation form
The consultation CTA section SHALL display a form with input fields for the visitor's details.

#### Scenario: Form fields render
- **WHEN** the consultation CTA section loads
- **THEN** at minimum a name input field and a contact input field SHALL be visible

#### Scenario: Submit button renders
- **WHEN** the consultation CTA section loads
- **THEN** a submit/CTA button SHALL be visible within or adjacent to the form

### Requirement: Form is UI-only
The consultation form SHALL render correctly but MAY submit without backend integration in this version.

#### Scenario: Form renders without errors
- **WHEN** the consultation CTA section loads
- **THEN** the form SHALL render with no console errors
- **AND** all input fields SHALL be interactive (typeable/selectable)
