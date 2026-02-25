## MODIFIED Requirements

### Requirement: Section headline
The classes section SHALL display a headline inviting visitors to choose a class. There SHALL be no subtitle label above the heading.

#### Scenario: Headline renders
- **WHEN** the classes section loads
- **THEN** the text "Pilih Kelas" followed by "Agak Laen" (highlighted in orange) followed by "Bersama Kami" SHALL be displayed as a prominent heading
- **AND** there SHALL be no "Program Kami" label above the heading

### Requirement: Two class cards
The classes section SHALL display two class option cards side by side on desktop. Both cards SHALL use a white background with a light border (#EFEFEF).

#### Scenario: Cards render on desktop
- **WHEN** the viewport width is 768px or above
- **THEN** a "Regular Class" card and a "Private Class" card SHALL be displayed side by side

#### Scenario: Cards stack on mobile
- **WHEN** the viewport width is below 768px
- **THEN** the two class cards SHALL stack vertically

### Requirement: Class card structure
Each class card SHALL contain a header area, a description paragraph, a "Yang Kamu Dapatkan:" section with detailed feature items, and a CTA button.

#### Scenario: Card header area
- **WHEN** the classes section renders
- **THEN** each card SHALL display a light blue (#F1F6FE) header area at the top
- **AND** the header area SHALL contain the class name as a title
- **AND** the header area SHALL contain an italic subtitle/tagline below the class name

#### Scenario: Regular Class card content
- **WHEN** the classes section renders
- **THEN** the "Regular Class" card header SHALL display the title "Regular Class"
- **AND** the subtitle SHALL read "Belajar Mandarin Tidak Pernah Seseru Ini! Selesaikan Misi, Kumpulkan Poin, Menangkan Beasiswa."
- **AND** the description paragraph SHALL explain the HSK curriculum as missions and challenges format with 8-12 students
- **AND** the "Yang Kamu Dapatkan:" section SHALL list 3 features: "Gamified Scholarship System", "Interactive Group (8-12 Siswa)", and "HSK Standard Curriculum"
- **AND** each feature SHALL have a bold title and a description paragraph

#### Scenario: Private Class card content
- **WHEN** the classes section renders
- **THEN** the "Private Class" card header SHALL display the title "Private Class"
- **AND** the subtitle SHALL read "Kurikulum yang Menyesuaikan Kebutuhan Anda, Bukan Sebaliknya."
- **AND** the description paragraph SHALL explain the personalized "Learning Map" approach with 100% teacher attention
- **AND** the "Yang Kamu Dapatkan:" section SHALL list 4 features: "100% Tailored Curriculum", "Accelerated Progress", "Flexible Scheduling", and "Maximum Speaking Time"
- **AND** each feature SHALL have a bold title and a description paragraph

#### Scenario: Feature item structure
- **WHEN** a feature item renders within the "Yang Kamu Dapatkan:" section
- **THEN** it SHALL display a filled circle-check icon on the left
- **AND** a bold feature title
- **AND** a description text below the title

### Requirement: Class CTA buttons
Each class card SHALL have a "Lihat Detail Kelas" button with a blue gradient style that links to the consultation page.

#### Scenario: CTA button display
- **WHEN** the classes section renders
- **THEN** each card SHALL display a "Lihat Detail Kelas" button at the bottom
- **AND** the button SHALL use a blue gradient background (from #2E5AAF to #21337B)
- **AND** the button SHALL have rounded-full styling with white text

#### Scenario: CTA button interaction
- **WHEN** a user clicks the "Lihat Detail Kelas" button on any class card
- **THEN** the user SHALL be navigated to the consultation page
