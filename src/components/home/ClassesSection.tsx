"use client";

import { useRouter } from "next/navigation";

const classes = [
  {
    type: "Regular Kelas",
    tagline: "Belajar bersama teman, lebih seru!",
    features: [
      "Kelas kelompok maks. 8 orang",
      "Jadwal terstruktur 2× seminggu",
      "Materi kurikulum Le Le Method",
      "Akses rekaman kelas",
      "Grup belajar eksklusif",
      "Sertifikat kelulusan",
    ],
    cta: "Daftar Sekarang",
    href: "/konsultasi",
    highlight: false,
  },
  {
    type: "Private Class",
    tagline: "Belajar 1-on-1, progress lebih cepat!",
    features: [
      "Sesi privat 1-on-1 dengan guru",
      "Jadwal fleksibel sesuai kamu",
      "Kurikulum disesuaikan kebutuhan",
      "Feedback langsung & personal",
      "Materi tambahan eksklusif",
      "Sertifikat kelulusan + laporan progress",
    ],
    cta: "Daftar Sekarang",
    href: "/konsultasi",
    highlight: true,
  },
];

export default function ClassesSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lele-orange mb-3">
          Program Kami
        </p>
        <h2 className="text-3xl font-extrabold text-lele-navy md:text-4xl">
          Pilih Kelas{" "}
          <span className="text-lele-orange">&ldquo;Akar-Lean&rdquo;</span>{" "}
          Bersama Kami
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {classes.map((cls) => (
          <div
            key={cls.type}
            className={`flex flex-col rounded-2xl border-2 p-8 shadow-sm transition-shadow hover:shadow-md ${
              cls.highlight
                ? "border-lele-orange bg-lele-navy text-white"
                : "border-lele-gray-light bg-white text-lele-navy"
            }`}
          >
            <div className="mb-6">
              <h3
                className={`text-2xl font-extrabold ${
                  cls.highlight ? "text-lele-orange" : "text-lele-navy"
                }`}
              >
                {cls.type}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  cls.highlight ? "text-white/70" : "text-lele-gray"
                }`}
              >
                {cls.tagline}
              </p>
            </div>

            <div className="mb-8 flex-1">
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-wider ${
                  cls.highlight ? "text-lele-orange" : "text-lele-orange"
                }`}
              >
                Yang Kamu Dapatkan:
              </p>
              <ul className="flex flex-col gap-2.5">
                {cls.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-snug">
                    <span
                      className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        cls.highlight
                          ? "bg-lele-orange text-lele-navy"
                          : "bg-lele-orange/10 text-lele-orange"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={cls.highlight ? "text-white/90" : "text-lele-gray"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => router.push(cls.href)}
              className={`cursor-pointer rounded-full py-3.5 text-sm font-semibold transition-colors ${
                cls.highlight
                  ? "bg-lele-orange text-white hover:bg-lele-orange-dark"
                  : "bg-lele-navy text-white hover:bg-lele-navy-dark"
              }`}
            >
              {cls.cta}
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
