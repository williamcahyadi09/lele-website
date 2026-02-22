## ADDED Requirements

### Requirement: Four-column footer layout
The footer SHALL display four columns: logo/tagline, navigation links, contact information, and social media links.

#### Scenario: Desktop four-column layout
- **WHEN** the viewport width is 768px or above
- **THEN** all four columns SHALL be displayed side by side

#### Scenario: Mobile stacked layout
- **WHEN** the viewport width is below 768px
- **THEN** the columns SHALL stack vertically

### Requirement: Logo and tagline column
The footer SHALL display the LeLe Mandarin logo and tagline in the first column.

#### Scenario: Logo and tagline render
- **WHEN** the footer renders
- **THEN** the LeLe logo SHALL be displayed
- **AND** the tagline "Belajar Bahasa Mandarin Sampai ke Akar dengan Fun dan Efektif!" SHALL appear below the logo

### Requirement: Navigation links column
The footer SHALL display a "Tentang Le Le" section with links to key pages.

#### Scenario: Footer navigation links
- **WHEN** the footer renders
- **THEN** links to Beranda, Program Kami, Tentang Kami, Tim Kami, and Hubungi Kami SHALL be displayed

### Requirement: Contact information column
The footer SHALL display contact details under "Hubungi Kami".

#### Scenario: Contact details render
- **WHEN** the footer renders
- **THEN** the email address (admin@leleinstitute.com) SHALL be displayed with a mail icon
- **AND** the phone number (+62 878 1716 5550) SHALL be displayed with a phone icon

### Requirement: Social media links column
The footer SHALL display social media links under "Follow Us".

#### Scenario: Social links render
- **WHEN** the footer renders
- **THEN** an Instagram link (lele.mandarin) SHALL be displayed with the Instagram icon
- **AND** a TikTok link (lele.mandarin) SHALL be displayed with the TikTok icon
