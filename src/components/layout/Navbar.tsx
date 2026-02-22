"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Program Kami", href: "/program" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Tim Kami", href: "/tim" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-lele-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-lele.svg"
            alt="LeLe Mandarin"
            width={122}
            height={54}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-lele-navy"
                    : "text-lele-gray hover:text-lele-navy"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-lele-navy" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => router.push("/konsultasi")}
          className="hidden cursor-pointer rounded-full bg-lele-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-lele-navy-dark md:block"
        >
          Mulai Sekarang!
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-lele-navy transition-transform ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-lele-navy transition-opacity ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-lele-navy transition-transform ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="border-t border-lele-gray-light bg-lele-white px-4 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium ${
                    isActive ? "text-lele-navy" : "text-lele-gray"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/konsultasi");
              }}
              className="mt-2 w-full cursor-pointer rounded-full bg-lele-navy px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Mulai Sekarang!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
