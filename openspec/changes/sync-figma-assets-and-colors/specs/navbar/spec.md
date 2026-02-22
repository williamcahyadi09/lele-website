## MODIFIED Requirements

### Requirement: Logo display
The navbar SHALL display the LeLe Mandarin logo image (`/images/logo-lele.svg`) on the left side, linking to the homepage. The logo SHALL render at 122x54px using the Next.js `<Image>` component.

#### Scenario: Logo click navigates home
- **WHEN** a user clicks the logo
- **THEN** the browser SHALL navigate to the homepage (`/`)

#### Scenario: Logo renders as image
- **WHEN** the navbar renders
- **THEN** the logo SHALL display as an image from `/images/logo-lele.svg`
- **AND** the image SHALL have alt text "LeLe Mandarin"
- **AND** the image SHALL render at 122px wide and 54px tall
