import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "Program Kami", href: "/program" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Tim Kami", href: "/tim" },
  { label: "Hubungi Kami", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-lele-gray-light bg-lele-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-4 md:px-16">
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo-lele.svg"
            alt="LeLe Mandarin"
            width={144}
            height={64}
          />
          <p className="text-sm leading-relaxed text-lele-gray">
            Belajar Bahasa Mandarin Sampai ke Akar dengan Fun dan Efektif!
          </p>
        </div>

        {/* Column 2: Tentang Le Le */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-lele-navy">
            Tentang Le Le
          </h3>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-lele-gray transition-colors hover:text-lele-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Hubungi Kami */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-lele-navy">
            Hubungi Kami
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:admin@leleinstitute.com"
              className="flex items-center gap-2 text-sm text-lele-gray transition-colors hover:text-lele-navy"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              admin@leleinstitute.com
            </a>
            <a
              href="tel:+6287817165550"
              className="flex items-center gap-2 text-sm text-lele-gray transition-colors hover:text-lele-navy"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +62 878 1716 5550
            </a>
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-lele-navy">Follow Us</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com/lele.mandarin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-lele-gray transition-colors hover:text-lele-navy"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
              lele.mandarin
            </a>
            <a
              href="https://tiktok.com/@lele.mandarin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-lele-gray transition-colors hover:text-lele-navy"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
              lele.mandarin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
