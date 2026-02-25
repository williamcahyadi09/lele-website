"use client";

import { useRouter } from "next/navigation";

const classes = [
  {
    type: "Regular Class",
    subtitle:
      "Belajar Mandarin Tidak Pernah Seseru Ini!\nSelesaikan Misi, Kumpulkan Poin, Menangkan Beasiswa.",
    description:
      "Kami mengubah kurikulum HSK (ujian sertifikasi bahasa Mandarin) menjadi serangkaian Misi & Tantangan. Dalam kelas berisi 8-12 orang ini, kamu dan teman sekelasmu akan bekerja sama menghadapi tantangan seru yang telah disiapkan oleh tim Le Le Mandarin.",
    features: [
      {
        title: "Gamified Scholarship System",
        description:
          "Konsep belajar unik berbasis competitive teamwork dengan hadiah/beasiswa yang bisa dibawa pulang di akhir level.",
      },
      {
        title: "Interactive Group (8-12 Siswa)",
        description:
          "Komunitas belajar yang hidup. Temukan teman seperjuangan untuk belajar bahasa Mandarin bersama setiap minggu.",
      },
      {
        title: "HSK Standard Curriculum",
        description:
          "Materi tetap mengacu pada standar ujian internasional HSK, namun disampaikan dengan metode interaktif yang memacu adrenalin.",
      },
    ],
    href: "/konsultasi",
  },
  {
    type: "Private Class",
    subtitle:
      "Kurikulum yang Menyesuaikan Kebutuhan Anda, Bukan Sebaliknya.",
    description:
      'Kami merancang "Learning Map" khusus yang disesuaikan dengan gaya belajar, kecepatan, dan tujuan akhir Anda. Dengan perhatian 100% dari Laoshi, setiap menit di kelas ini didedikasikan untuk mengoreksi nada, memperluas kosakata, dan memastikan Anda fasih jauh lebih cepat.',
    features: [
      {
        title: "100% Tailored Curriculum",
        description:
          "Materi fleksibel. Fokus pada Business Mandarin, Persiapan HSK intensif, atau Conversational Skill? Anda yang tentukan.",
      },
      {
        title: "Accelerated Progress",
        description:
          'Belajar dengan kecepatan Anda sendiri (Self-paced). Bisa "ngebut" menyelesaikan materi atau melambat untuk memperdalam topik sulit.',
      },
      {
        title: "Flexible Scheduling",
        description:
          "Kesibukan bukan lagi alasan. Atur jadwal belajar yang paling cocok dengan agenda pribadi atau jam kerja Anda.",
      },
      {
        title: "Maximum Speaking Time",
        description:
          "Kesempatan bicara penuh tanpa henti. Laoshi akan menjadi partner percakapan intensif untuk melatih refleks bahasa Anda.",
      },
    ],
    href: "/konsultasi",
  },
];

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 opacity-50"
    >
      <circle cx="12" cy="12" r="10" fill="#FAAC25" />
      <path
        d="M8 12.5L10.5 15L16 9.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ClassesSection() {
  const router = useRouter();

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[960px] px-4 md:px-16">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="font-ostania text-[31px] leading-[44px] text-lele-primary-800 md:text-[39px]">
            Pilih Kelas{" "}
            <span className="text-lele-orange">&ldquo;Agak Laen&rdquo;</span>
            <br />
            Bersama Kami
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {classes.map((cls) => (
            <div
              key={cls.type}
              className="flex flex-col overflow-hidden rounded-xl border border-lele-neutral-50 bg-white"
            >
              {/* Card Header */}
              <div className="relative bg-lele-primary-50 bg-[url('/images/class-section-card-header-bg.png')] bg-right bg-no-repeat bg-contain px-5 py-6">
                <h3 className="font-ostania text-[31px] leading-[35px] text-[#2c2c2c]">
                  {cls.type}
                </h3>
                <p className="mt-1 font-albert-sans text-sm italic leading-[18px] tracking-[-0.21px] text-[#4c4c4c]">
                  {cls.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-5 px-5 pt-5 pb-8">
                {/* Description */}
                <p className="font-poppins text-base leading-6 text-lele-neutral-700">
                  {cls.description}
                </p>

                {/* Features */}
                <div className="flex flex-1 flex-col gap-3">
                  <h4 className="font-ostania text-[25px] leading-[29px] text-[#2c2c2c]">
                    Yang Kamu Dapatkan:
                  </h4>
                  <div className="flex flex-col gap-1">
                    {cls.features.map((f) => (
                      <div key={f.title} className="flex gap-1 items-start">
                        <CheckIcon />
                        <div className="font-poppins text-sm leading-6 text-lele-neutral-700">
                          <p className="font-semibold leading-5">
                            {f.title}
                          </p>
                          <p>{f.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => router.push(cls.href)}
                  className="cursor-pointer rounded-full bg-[#2E5AAF] px-5 py-3 font-poppins text-base font-bold text-white transition-opacity hover:opacity-90"
                >
                  Lihat Detail Kelas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
