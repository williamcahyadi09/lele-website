### Requirement: Method section displays four cards in two asymmetric rows
The MethodSection SHALL display four cards arranged in two flex rows:
- Row 1: "Our Dream Team" card (fixed ~480px wide) on the left, "Memory Science Jitu" card (flex-1) on the right
- Row 2: "Pop Culture Kekinian" card (flex-1) on the left, "Filosofi Kuno & Konteks Budaya" card (fixed ~480px wide) on the right

The section SHALL have a cream background (`#fef7ec`) and rounded corners.

#### Scenario: Four cards rendered in correct positions
- **WHEN** the MethodSection is rendered
- **THEN** four cards SHALL be visible in two rows with the specified asymmetric layout

### Requirement: Photo cards display content on top and image at bottom
The three photo cards ("Memory Science Jitu", "Pop Culture Kekinian", "Filosofi Kuno & Konteks Budaya") SHALL each display title and description text at the top, and a full-width photo at the bottom.

#### Scenario: Photo card structure
- **WHEN** a photo card is rendered
- **THEN** the title and description SHALL appear above the image

### Requirement: "Our Dream Team" card has CTA button and avatar illustrations
The "Our Dream Team" card SHALL display:
- Title with "Our" in black and "Dream Team" in orange (`#faac25`)
- Description text
- A "Kenalan sama Laoshi!" CTA button (navy, rounded pill)
- Two circular team member avatar illustrations at the bottom

#### Scenario: Team card CTA button
- **WHEN** the "Our Dream Team" card is rendered
- **THEN** a "Kenalan sama Laoshi!" button SHALL be visible and clickable

### Requirement: Section header shows only the h2 heading
The MethodSection header SHALL display only the heading "Kami Merancang Metode Le Le untuk Belajar Mandarin" with no label badge or subtitle paragraph.

#### Scenario: Simplified header
- **WHEN** the MethodSection is rendered
- **THEN** only the h2 heading SHALL appear in the header — no "Metode Kami" label, no subtitle
