### Requirement: Pain point cards display PNG images
Each pain point card in the PainPointsSection SHALL display a PNG image instead of an inline SVG illustration.

The images SHALL be:
- "Tembok Hafalan" card → `/images/tembok-hafalan.png`
- "Awalnya Semangat!" card → `/images/awalnya-semangat.png`
- "Deg-Deg-Ser" card → `/images/deg-deg-ser.png`

#### Scenario: Correct image shown per card
- **WHEN** the PainPointsSection is rendered
- **THEN** each card SHALL display its corresponding PNG image with no SVG fallback

### Requirement: Pain point card titles are black
Each pain point card title SHALL be rendered in black.

#### Scenario: Title color on render
- **WHEN** the PainPointsSection is rendered
- **THEN** each card title SHALL appear in black (not navy)
