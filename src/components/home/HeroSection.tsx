"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 md:flex-row md:items-start md:gap-16 md:px-16">
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
          {/* Tag Badge */}
          <span className="mx-auto md:mx-0 w-fit rounded-full bg-lele-orange px-4 py-2 text-xs font-semibold font-poppins tracking-wide uppercase text-lele-primary-800 tracking-normal">
            STOP HAFAL MATI!
          </span>

          {/* Headline */}
          <h1 className="text-4xl leading-tight font-ostania font-medium text-lele-primary-800 md:text-5xl">
            Belajar Bahasa Mandarin Sampai ke Akar dengan{" "}
            <span className="text-lele-orange">Fun dan{" "}</span>
            <span className="text-lele-orange">Efektif!</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg font-poppins text-base leading-relaxed text-black md:text-lg">
            &quot;Le Le Method&quot; = memory science + pop culture + Chinese
            philosophy. Resep jitu spesial untukmu, paham sampai akar, gak
            ragu-ragu!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 font-poppins justify-center md:justify-start items-center">
            <button
              onClick={() => router.push("/konsultasi")}
              className="cursor-pointer rounded-full bg-lele-navy px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80 active:opacity-70"
            >
              Daftar Konsultasi Gratis Sekarang
            </button>
            <button
              onClick={() => router.push("/program")}
              className="cursor-pointer rounded-full border-2 border-lele-neutral-50 px-6 py-3 text-sm font-semibold text-lele-neutral-700 transition-opacity duration-200 hover:opacity-60 active:opacity-50"
            >
              Lihat Kelas
            </button>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative w-full flex-shrink-0 md:w-[472px]">
          {/* Main hero image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[528px]">
            <Image
              src="/images/hero-student.png"
              alt="Student learning Mandarin with LeLe"
              fill
              className="object-contain md:object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
