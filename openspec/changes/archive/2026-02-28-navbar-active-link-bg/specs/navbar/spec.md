## MODIFIED Requirements

### Requirement: Navigation links
The navbar SHALL display navigation links: Beranda, Program Kami, Tentang Kami, Tim Kami, Blog.

#### Scenario: Desktop navigation visible
- **WHEN** the viewport width is 768px or above
- **THEN** all five navigation links SHALL be visible in a horizontal row

#### Scenario: Active page indicator
- **WHEN** the user is on a page matching a navigation link
- **THEN** that link SHALL display the `navbar-active.png` brushstroke image as a background behind the link text
- **AND** the active link text SHALL be black in color
- **AND** no underline indicator SHALL be shown
