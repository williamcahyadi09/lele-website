"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FinalCTASection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
      <div className="relative overflow-hidden rounded-3xl bg-lele-orange px-8 py-16 md:px-16">
        {/* Decorative blob */}
        <svg
          className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 text-lele-orange-dark/30"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M45.3,-58.2C57.9,-49.5,66.5,-34.6,71.2,-18.3C75.9,-2,76.7,15.7,69.8,29.8C62.9,43.9,48.3,54.4,33,61.3C17.7,68.2,1.6,71.5,-15.5,69.5C-32.6,67.5,-50.7,60.2,-61.4,47.1C-72.1,34,-75.4,15.1,-72.9,-2.5C-70.3,-20.1,-61.9,-36.5,-49.5,-45.3C-37.1,-54.1,-20.7,-55.4,-2.7,-52.2C15.3,-49,32.7,-66.9,45.3,-58.2Z" transform="translate(100 100)" />
        </svg>
        <svg
          className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 text-white/10"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M39.5,-51.1C52.9,-44.3,66.8,-35.2,72.3,-22.3C77.8,-9.4,74.9,7.3,67.7,20.8C60.5,34.3,49,44.6,36.3,53.1C23.6,61.6,9.7,68.3,-4.2,73.5C-18.1,78.7,-32,82.4,-42.4,75.4C-52.8,68.4,-59.7,50.7,-64.4,34.1C-69.1,17.5,-71.6,2,-67.8,-11.3C-64,-24.6,-53.9,-35.7,-42.1,-43C-30.3,-50.3,-16.8,-53.8,-1.6,-51.8C13.6,-49.8,26.1,-57.9,39.5,-51.1Z" transform="translate(100 100)" />
        </svg>

        <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Text + button */}
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-lele-navy md:text-4xl md:leading-tight">
              Siap Gas Pol Perjalanan{" "}
              <span className="text-white">Bahasa Mandarin</span> Kamu?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-lele-navy/80">
              Mulai dengan konsultasi gratis — kami bantu kamu menemukan jalur
              belajar yang paling pas dan menyenangkan.
            </p>
            <button
              onClick={() => router.push("/konsultasi")}
              className="mt-8 cursor-pointer rounded-full bg-lele-navy px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-lele-navy-dark"
            >
              Daftar Konsultasi Gratis Sekarang
            </button>
          </div>

          {/* Student image */}
          <div className="relative hidden h-64 w-56 flex-shrink-0 md:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-lele-orange-dark/20">
              <Image
                src="/images/cta-student.png"
                alt="Student ready to learn Mandarin"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
