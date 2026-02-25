"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const pillars = [
  {
    title: "Memory Science Jitu",
    desc: "Lupakan hafalan kaku! Kami gunakan teknik mnemonics, chunking, dan active recall yang terbukti secara ilmiah agar materi 'klik' dan nempel permanen.",
    image: "/images/memory-science.png",
    imageAlt: "Memory science approach to learning Mandarin",
  },
  {
    title: "Pop Culture Kekinian",
    desc: "Bosan dengan contoh kalimat di buku yang gitu-gitu aja? Kami pakai referensi C-Drama terbaru, meme yang lagi viral, dan bahasa gaul biar tetap seru!",
    image: "/images/pop-culture.png",
    imageAlt: "Pop culture approach to learning Mandarin",
  },
  {
    title: "Filosofi Kuno & Konteks Budaya",
    desc: "Bedah filosofi di balik karakter, pahami trivia sejarah, dan kuasai tata krama praktis agar kamu bisa berbicara dengan percaya diri dan penuh pemahaman.",
    image: "/images/filosofi-kuno.png",
    imageAlt: "Chinese philosophy and cultural context",
  },
];

function PhotoCard({ title, desc, image, imageAlt }: (typeof pillars)[0]) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[12px] border border-[#efefef] bg-white h-full">
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">{title}</h3>
        <p className="text-xs leading-relaxed text-[#464646]">{desc}</p>
      </div>
      <div className="relative mt-auto h-48 w-full flex-1 min-h-[160px]">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function MethodSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        {/* Cream wrapper */}
        <div className="rounded-[20px] bg-[#fef7ec] px-4 py-12 md:px-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-lele-navy md:text-4xl">
              Kami Merancang Metode Le Le
              <br className="hidden md:block" /> untuk Belajar Mandarin
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {/* Row 1: Dream Team (480) + Memory Science (532) — height 331 */}
            <div className="flex flex-col gap-6 md:flex-row md:h-[331px]">
              {/* Our Dream Team card — flex ratio 480 */}
              <div className="flex w-full flex-col overflow-hidden rounded-[12px] border border-[#efefef] bg-white p-5 md:[flex:480]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    <span className="text-[#1a1a1a]">Our </span>
                    <span className="text-[#faac25]">Dream Team</span>
                  </h3>
                  <p className="text-xs leading-relaxed text-[#464646]">
                    Sering ditanya, &apos;Apa sih rahasia Le Le Mandarin?&apos; Jawabannya simpel: tim kami! Setiap anggota membawa &apos;Otak&apos; (keahlian unik—dari juara kompetisi hingga veteran) dan &apos;Jiwa&apos; (passion untuk berbagi kecintaan pada Bahasa &amp; Budaya Mandarin).
                  </p>
                  <div className="mt-2 flex items-start justify-between">
                    <button
                      onClick={() => router.push("/tentang-kami")}
                      className="w-fit cursor-pointer rounded-full bg-gradient-to-b from-[#2e5aaf] to-[#21337b] px-4 py-2 text-xs font-bold text-white"
                    >
                      Kenalan sama Laoshi!
                    </button>
                    <Image src="/images/method-teacher.png" alt="Le Le Dream Team" width={194} height={159} />
                  </div>
                </div>
              </div>

              {/* Memory Science card — flex ratio 532 */}
              <div className="md:[flex:532]">
                <PhotoCard {...pillars[0]} />
              </div>
            </div>

            {/* Row 2: Pop Culture (532) + Filosofi (480) — height 314 */}
            <div className="flex flex-col gap-6 md:flex-row md:h-[314px]">
              {/* Pop Culture card — flex ratio 532 */}
              <div className="md:[flex:532]">
                <PhotoCard {...pillars[1]} />
              </div>

              {/* Filosofi card — flex ratio 480 */}
              <div className="md:[flex:480]">
                <PhotoCard {...pillars[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
