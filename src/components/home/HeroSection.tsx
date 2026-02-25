"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 md:flex-row md:items-start md:gap-16 md:px-16">
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Tag Badge */}
          <span className="w-fit rounded-full bg-lele-orange px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase">
            STOP HAFAL MATI!
          </span>

          {/* Headline */}
          <h1 className="text-3xl leading-tight font-extrabold text-lele-navy md:text-5xl md:leading-tight">
            Belajar Bahasa Mandarin Sampai ke Akar dengan{" "}
            <span className="italic text-lele-orange">Fun</span> dan{" "}
            <span className="italic text-lele-orange">Efektif</span>!
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-base leading-relaxed text-lele-gray md:text-lg">
            &quot;Le Le Method&quot; = memory science + pop culture + Chinese
            philosophy. Resep jitu spesial untukmu, paham sampai akar, gak
            ragu-ragu!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => router.push("/konsultasi")}
              className="cursor-pointer rounded-full bg-lele-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-lele-orange-dark"
            >
              Daftar Konsultasi Gratis Sekarang
            </button>
            <button
              onClick={() => router.push("/program")}
              className="cursor-pointer rounded-full border-2 border-lele-navy px-6 py-3.5 text-sm font-semibold text-lele-navy transition-colors hover:bg-lele-navy hover:text-white"
            >
              Kelas Kami
            </button>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative flex-shrink-0 md:w-[472px]">
          {/* Main hero image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[528px]">
            <Image
              src="/images/hero-student.png"
              alt="Student learning Mandarin with LeLe"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative blob - bottom right (organic orange shape) */}
          {/* <svg
            className="absolute -right-6 -bottom-6 h-36 w-36 text-lele-orange/20"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M45.3,-58.2C57.9,-49.5,66.5,-34.6,71.2,-18.3C75.9,-2,76.7,15.7,69.8,29.8C62.9,43.9,48.3,54.4,33,61.3C17.7,68.2,1.6,71.5,-15.5,69.5C-32.6,67.5,-50.7,60.2,-61.4,47.1C-72.1,34,-75.4,15.1,-72.9,-2.5C-70.3,-20.1,-61.9,-36.5,-49.5,-45.3C-37.1,-54.1,-20.7,-55.4,-2.7,-52.2C15.3,-49,32.7,-66.9,45.3,-58.2Z" transform="translate(100 100)" />
          </svg> */}

          {/* Decorative blob - top left (navy shape) */}
          {/* <svg
            className="absolute -top-5 -left-5 h-28 w-28 text-lele-navy/10"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M39.5,-51.1C52.9,-44.3,66.8,-35.2,72.3,-22.3C77.8,-9.4,74.9,7.3,67.7,20.8C60.5,34.3,49,44.6,36.3,53.1C23.6,61.6,9.7,68.3,-4.2,73.5C-18.1,78.7,-32,82.4,-42.4,75.4C-52.8,68.4,-59.7,50.7,-64.4,34.1C-69.1,17.5,-71.6,2,-67.8,-11.3C-64,-24.6,-53.9,-35.7,-42.1,-43C-30.3,-50.3,-16.8,-53.8,-1.6,-51.8C13.6,-49.8,26.1,-57.9,39.5,-51.1Z" transform="translate(100 100)" />
          </svg> */}

          {/* Smiley emoji decoration */}
          {/* <div className="absolute top-16 -right-2 flex h-16 w-16 items-center justify-center rounded-full bg-lele-orange text-2xl md:h-20 md:w-20 md:text-3xl">
            <span role="img" aria-label="smiley face">
              😊
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
