### Requirement: Floating WhatsApp button is visible on all pages
The system SHALL display a fixed floating button in the bottom-right corner of the viewport on every page of the site.

The button SHALL:
- Be styled as a green pill/rounded shape
- Display the label "Kontak Kami" alongside a WhatsApp icon on the right
- Remain fixed during scroll (`position: fixed`)
- Appear above all page content (`z-index: 50` or higher)

#### Scenario: Button visible on page load
- **WHEN** a user loads any page on the site
- **THEN** the floating WhatsApp button SHALL be visible in the bottom-right corner of the viewport

#### Scenario: Button stays fixed while scrolling
- **WHEN** a user scrolls down the page
- **THEN** the floating WhatsApp button SHALL remain fixed in the bottom-right corner

### Requirement: Clicking the button opens WhatsApp
The system SHALL open the WhatsApp chat for the configured number when the button is clicked.

The button SHALL open `https://wa.me/<number>` in a new browser tab.

#### Scenario: User clicks the button
- **WHEN** a user clicks the floating WhatsApp button
- **THEN** the browser SHALL open `https://wa.me/<configured-number>` in a new tab

#### Scenario: Button has correct link semantics
- **WHEN** the button is rendered
- **THEN** it SHALL be an anchor (`<a>`) element with `target="_blank"` and `rel="noopener noreferrer"`
