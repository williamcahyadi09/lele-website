## 1. Create the FloatingWhatsApp component

- [x] 1.1 Create `src/components/layout/FloatingWhatsApp.tsx` with a fixed-position anchor element
- [x] 1.2 Style the button as a green pill using Tailwind (`fixed bottom-6 right-6 z-50`, green background, rounded-full)
- [x] 1.3 Add "Kontak Kami" label text inside the button
- [x] 1.4 Add an inline SVG WhatsApp icon to the right of the label
- [x] 1.5 Set `href` to `https://wa.me/6287817165550` with `target="_blank"` and `rel="noopener noreferrer"`

## 2. Integrate into root layout

- [x] 2.1 Import `FloatingWhatsApp` in `src/app/layout.tsx`
- [x] 2.2 Render `<FloatingWhatsApp />` inside `<body>`, after `<Footer />`

## 3. Verify

- [ ] 3.1 Confirm the button appears fixed in the bottom-right on the homepage while scrolling
- [ ] 3.2 Confirm clicking the button opens `https://wa.me/<number>` in a new tab
- [ ] 3.3 Check on mobile viewport that the button does not obscure primary CTAs
