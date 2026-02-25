## 1. Update PainPointsSection data

- [x] 1.1 Replace the `icon` JSX field in each `painPoints` entry with an `imageSrc: string` field
- [x] 1.2 Set `imageSrc` to `/images/tembok-hafalan.png` for "Tembok Hafalan"
- [x] 1.3 Set `imageSrc` to `/images/awalnya-semangat.png` for "Awalnya Semangat!"
- [x] 1.4 Set `imageSrc` to `/images/deg-deg-ser.png` for "Deg-Deg-Ser"

## 2. Update rendering

- [x] 2.1 Import `Image` from `next/image` at the top of `PainPointsSection.tsx`
- [x] 2.2 Replace `{point.icon}` in the render loop with `<Image src={point.imageSrc} alt={point.title} width={144} height={112} />`
- [x] 2.3 Change the card title `<h3>` class from `text-lele-navy` to `text-black`
