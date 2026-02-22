## ADDED Requirements

### Requirement: Full-width CTA banner
The final CTA section SHALL span the full width of the page and use a visually distinct background to signal a closing call-to-action.

#### Scenario: Section renders with accent background
- **WHEN** the final CTA section loads
- **THEN** the section SHALL be displayed with an orange or lele-orange background
- **AND** it SHALL span the full content width

### Requirement: CTA headline
The final CTA section SHALL display a motivational headline.

#### Scenario: Headline renders
- **WHEN** the final CTA section loads
- **THEN** the text "Siap Gas Pol Perjalanan Bahasa Mandarin Kamu?" SHALL be displayed in large, prominent typography

### Requirement: CTA button
The final CTA section SHALL display a primary call-to-action button.

#### Scenario: CTA button renders
- **WHEN** the final CTA section loads
- **THEN** a CTA button SHALL be visible with a contrasting style to the background

#### Scenario: CTA button navigates to consultation
- **WHEN** a user clicks the CTA button
- **THEN** the user SHALL be navigated to the consultation or registration page

### Requirement: Decorative student image
The final CTA section SHALL include a student image to humanise the closing CTA.

#### Scenario: Image renders on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** a student image SHALL be visible alongside the headline and button
