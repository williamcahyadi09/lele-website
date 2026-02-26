## 1. Section Layout & Background

- [x] 1.1 Replace the dark navy card wrapper with a full-width `bg-lele-cream` section background
- [x] 1.2 Change the inner layout to two-column flex (`md:flex-row`) with equal flex-1 columns, stacking vertically on mobile

## 2. Book Illustration (Left Column)

- [x] 2.1 Create a `BookIllustration` local function component inside the file
- [x] 2.2 Add the orange circle blob (absolute-positioned, centered behind the book)
- [x] 2.3 Add the navy circle element (absolute-positioned, bottom-left)
- [x] 2.4 Add decorative orange dot elements (3 dots, absolute-positioned)
- [x] 2.5 Build the purple book using inline SVG (cover rect, spine rect, bug icon, monospace text lines, divider, bottom caption)
- [x] 2.6 Apply `-rotate-6` tilt and `drop-shadow-2xl` to the book
- [x] 2.7 Add the speech bubble with "学习!" text (absolute-positioned, white bg, orange text, shadow)

## 3. Content & Copy (Right Column)

- [x] 3.1 Update headline to "Yuk Ngintip Resep Rahasia Kami!" with "Resep Rahasia" wrapped in `text-lele-orange`
- [x] 3.2 Add description paragraph about the E-book offer
- [x] 3.3 Wrap the form in a white card (`bg-white rounded-2xl shadow-sm p-8`)

## 4. Form Fields

- [x] 4.1 Replace `contact` state with `phone` state (rename useState variable and handler)
- [x] 4.2 Add `<label htmlFor="cta-name">Nama Lengkap</label>` above the name input
- [x] 4.3 Update name input: `id="cta-name"`, `placeholder="Nama"`, styled with border + rounded-lg (not pill)
- [x] 4.4 Add `<label htmlFor="cta-phone">Nomor Telepon</label>` above the phone input
- [x] 4.5 Update phone input: `id="cta-phone"`, `type="tel"`, `placeholder="Ex: 08729201281"`, matching border style
- [x] 4.6 Add privacy disclaimer `<p>` below the phone input

## 5. CTA Button

- [x] 5.1 Change button text to "Download FREE E-Book!"
- [x] 5.2 Change button colour from `bg-lele-orange` to `bg-lele-navy` with `hover:bg-lele-navy-dark`
- [x] 5.3 Keep `rounded-full` shape and full-width layout

## 6. Cleanup

- [x] 6.1 Remove the decorative blob SVGs from the old dark card layout
- [x] 6.2 Remove the chat bubble icon SVG
- [x] 6.3 Remove the old `contact` useState import/variable if renamed
- [x] 6.4 Verify no console errors and all inputs are interactive in the browser
