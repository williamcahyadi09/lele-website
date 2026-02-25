## 1. Simplify section header

- [x] 1.1 Remove the "Metode Kami" label badge from the header
- [x] 1.2 Remove the subtitle paragraph from the header
- [x] 1.3 Keep only the `h2` heading "Kami Merancang Metode Le Le untuk Belajar Mandarin"

## 2. Add cream section background

- [x] 2.1 Wrap the section content in a `rounded-[20px] bg-[#fef7ec]` container with padding

## 3. Build the "Our Dream Team" card

- [x] 3.1 Create the team card JSX with white background, border, and `rounded-[12px]`
- [x] 3.2 Add the mixed-color title: "Our " in black + "Dream Team" in orange (`#faac25`)
- [x] 3.3 Add the description text from Figma copy
- [x] 3.4 Add the "Kenalan sama Laoshi!" CTA button (navy gradient, rounded pill)
- [x] 3.5 Add two circular avatar placeholders (orange circles) at the bottom of the card

## 4. Build the three photo cards data array

- [x] 4.1 Update the `pillars` data array with the three cards: "Memory Science Jitu", "Pop Culture Kekinian", "Filosofi Kuno & Konteks Budaya"
- [x] 4.2 Set copy (titles and descriptions) to match Figma for all three cards
- [x] 4.3 Set placeholder image paths: `/images/method-memory.jpg`, `/images/method-popculture.jpg`, `/images/method-filosofi.jpg`

## 5. Build the two-row asymmetric layout

- [x] 5.1 Replace the current `grid` with two `flex` rows
- [x] 5.2 Row 1: Team card (`w-[480px] shrink-0`) left + Memory Science card (`flex-1`) right
- [x] 5.3 Row 2: Pop Culture card (`flex-1`) left + Filosofi card (`w-[480px] shrink-0`) right

## 6. Update photo card structure

- [x] 6.1 Update the photo card render: title + description on top (`p-5`), full-width `<Image>` at the bottom
- [x] 6.2 Remove tag badges from photo cards
- [x] 6.3 Set card style: white background, `border border-[#efefef]`, `rounded-[12px]`, `overflow-hidden`
