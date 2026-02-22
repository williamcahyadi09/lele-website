## MODIFIED Requirements

### Requirement: Logo and tagline column
The footer SHALL display the LeLe Mandarin logo image (`/images/logo-lele.svg`) and tagline in the first column. The logo SHALL render at 144x64px using the Next.js `<Image>` component, matching the Figma footer logo sizing.

#### Scenario: Logo and tagline render
- **WHEN** the footer renders
- **THEN** the LeLe logo SHALL be displayed as an image from `/images/logo-lele.svg`
- **AND** the image SHALL have alt text "LeLe Mandarin"
- **AND** the tagline "Belajar Bahasa Mandarin Sampai ke Akar dengan Fun dan Efektif!" SHALL appear below the logo
