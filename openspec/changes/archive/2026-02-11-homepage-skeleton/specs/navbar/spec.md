## ADDED Requirements

### Requirement: Logo display
The navbar SHALL display the LeLe Mandarin logo on the left side, linking to the homepage.

#### Scenario: Logo click navigates home
- **WHEN** a user clicks the logo
- **THEN** the browser SHALL navigate to the homepage (`/`)

### Requirement: Navigation links
The navbar SHALL display navigation links: Beranda, Program Kami, Tentang Kami, Tim Kami, Blog.

#### Scenario: Desktop navigation visible
- **WHEN** the viewport width is 768px or above
- **THEN** all five navigation links SHALL be visible in a horizontal row

#### Scenario: Active page indicator
- **WHEN** the user is on a page matching a navigation link
- **THEN** that link SHALL display an underline indicator to show active state

### Requirement: Primary CTA button
The navbar SHALL display a "Mulai Sekarang!" (Start Now) call-to-action button on the right side.

#### Scenario: CTA button visibility
- **WHEN** the navbar renders on desktop
- **THEN** the CTA button SHALL appear on the right side with the primary orange/amber accent color

### Requirement: Mobile responsive navigation
The navbar SHALL adapt to mobile viewports with a hamburger menu pattern.

#### Scenario: Mobile menu collapsed
- **WHEN** the viewport width is below 768px
- **THEN** the navigation links SHALL be hidden behind a hamburger menu icon
- **AND** the logo SHALL remain visible

#### Scenario: Mobile menu expanded
- **WHEN** a user taps the hamburger menu icon
- **THEN** the navigation links and CTA button SHALL be revealed in a vertical overlay or drawer
