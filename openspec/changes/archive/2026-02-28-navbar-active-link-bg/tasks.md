## 1. Update Desktop Active Link Styling

- [x] 1.1 In `src/components/layout/Navbar.tsx`, locate the desktop nav links section (the `hidden items-center gap-6 md:flex` div)
- [x] 1.2 On the active `<Link>`, replace `text-lele-navy` with `text-black` in the className
- [x] 1.3 Add Tailwind background image classes to the active state: `bg-[url('/images/navbar-active.png')] bg-no-repeat bg-center bg-[length:100%_100%]`
- [x] 1.4 Remove the conditionally-rendered `<span>` underline element (`isActive && <span className="absolute -bottom-1 ...">`)

## 2. Update Mobile Active Link Styling

- [x] 2.1 In the mobile menu section of `Navbar.tsx`, change the active link class from `text-lele-navy` to `text-black`

## 3. Verify

- [ ] 3.1 Run the dev server and navigate to each page — confirm active link shows the brushstroke image background with black text
- [ ] 3.2 Confirm non-active links still render gray with navy hover
- [ ] 3.3 Confirm the navy underline is gone on desktop active links
- [ ] 3.4 Confirm mobile active link text is black (no background image on mobile)
