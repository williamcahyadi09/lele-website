"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FinalCTASection() {
  const router = useRouter();

  return (
    <section className="py-4">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background image */}
          <Image
            src="/images/final-cta-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />

          {/* ── DESKTOP layout ── */}
          <div className="relative z-10 hidden items-stretch md:flex">
            {/* Image column — left */}
            <div className="relative w-[38%] flex-shrink-0">
              <Image
                src="/images/final-cta-img.png"
                alt="Students ready to learn Mandarin"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Content column — right */}
            <div className="flex flex-1 flex-col justify-center py-12 pr-16 pl-8">
              <h2 className="font-ostania text-3xl text-white md:text-4xl md:leading-tight">
                Siap Gas Pol Perjalanan{" "}
                <span className="text-lele-orange">Bahasa Mandarin</span> Kamu?
              </h2>
              <p className="mt-3 font-poppins text-sm leading-relaxed text-white/80 md:text-base">
                Ambil langkah pertama! Jadwalkan konsultasi gratis dengan tim
                ahli kami dan rasakan bedanya &lsquo;Metode Le Le&rsquo;.
              </p>
              <div className="mt-6 flex flex-col gap-2 font-poppins">
                <button
                  onClick={() => router.push("/konsultasi")}
                  className="cursor-pointer rounded-full border border-b-3 border-lele-orange bg-white px-8 py-2.5 text-sm font-bold text-lele-orange transition-colors hover:bg-lele-orange hover:text-white"
                >
                  Jadwalkan Konsultasi Gratis Kamu
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="cursor-pointer rounded-full border border-white bg-transparent px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Download Ebook Kami
                </button>
              </div>
            </div>
          </div>

          {/* ── MOBILE layout ── */}
          <div className="relative z-10 md:hidden">
            {/* Content at top */}
            <div className="px-6 pt-10 pb-6 text-center">
              <h2 className="font-ostania text-3xl leading-tight text-white">
                Siap Gas Pol Perjalanan{" "}
                <span className="text-lele-orange">Bahasa Mandarin</span> Kamu?
              </h2>
              <p className="mt-3 font-poppins text-sm leading-relaxed text-white/80">
                Ambil langkah pertama! Jadwalkan konsultasi gratis dengan tim
                ahli kami dan rasakan bedanya &lsquo;Metode Le Le&rsquo;.
              </p>
              <div className="mt-6 flex flex-col gap-2 font-poppins">
                <button
                  onClick={() => router.push("/konsultasi")}
                  className="cursor-pointer rounded-full border border-b-3 border-lele-orange bg-white px-8 py-2.5 text-sm font-bold text-lele-orange transition-colors hover:bg-lele-orange hover:text-white"
                >
                  Jadwalkan Konsultasi Gratis Kamu
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="cursor-pointer rounded-full border border-white bg-transparent px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Download Ebook Kami
                </button>
              </div>
            </div>

            {/* Image — edge-to-edge at bottom */}
            <div className="relative">
              <Image
                src="/images/final-cta-img-mobile.png"
                alt="Students ready to learn Mandarin"
                width={490}
                height={442}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
