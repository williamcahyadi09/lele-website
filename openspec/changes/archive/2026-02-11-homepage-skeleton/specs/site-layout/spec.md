## ADDED Requirements

### Requirement: Page layout wrapper
The system SHALL provide a shared layout component that wraps every page with a consistent navbar at the top and footer at the bottom.

#### Scenario: Layout renders on homepage
- **WHEN** a user navigates to the homepage
- **THEN** the navbar SHALL be visible at the top of the viewport
- **AND** the page content SHALL render between the navbar and footer
- **AND** the footer SHALL be visible at the bottom of the page

#### Scenario: Layout content area fills available space
- **WHEN** the page content is shorter than the viewport height
- **THEN** the footer SHALL remain at the bottom of the viewport (not floating mid-page)

### Requirement: Responsive container
The system SHALL constrain page content to a maximum width of 1200px, centered horizontally, matching the Figma design grid.

#### Scenario: Desktop viewport
- **WHEN** the viewport width exceeds 1200px
- **THEN** the content area SHALL be centered with equal margins on each side

#### Scenario: Mobile viewport
- **WHEN** the viewport width is below 768px
- **THEN** the content area SHALL use full width with horizontal padding
