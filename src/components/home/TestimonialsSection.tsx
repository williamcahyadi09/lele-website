import Image from "next/image";

const testimonials = [
  {
    name: "Rina S.",
    role: "Murid Regular Kelas",
    quote:
      "Sebelumnya aku udah nyoba belajar Mandarin di tempat lain tapi selalu mentok. Sama Le Le, 2 bulan udah bisa percakapan dasar! Metodenya beda banget, gak terasa kayak belajar.",
    image: "/images/testimonial-rina.jpg",
  },
  {
    name: "Budi P.",
    role: "Murid Private Class",
    quote:
      "Karakter Mandarin yang tadinya keliatan semua sama, sekarang aku bisa bedain dan hafal maknanya. Guru Le Le sabar banget ngajarin sampai beneran paham.",
    image: "/images/testimonial-budi.jpg",
  },
  {
    name: "Dewi A.",
    role: "Murid Regular Kelas",
    quote:
      "Suka banget cara belajarnya! Pakai referensi drama Korea yang aku tonton, jadi kosakatanya nyantol di otak. Le Le Method memang beda dari yang lain.",
    image: "/images/testimonial-dewi.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="rounded-3xl bg-lele-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lele-orange mb-3">
          Testimoni
        </p>
        <h2 className="text-3xl font-extrabold text-lele-navy md:text-4xl">
          Apa Kata Klien yang Sudah
          <br className="hidden md:block" /> Merasakan Metode Le Le?
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-sm"
          >
            {/* Quote mark */}
            <span className="text-4xl leading-none text-lele-orange font-serif select-none">
              &ldquo;
            </span>

            <p className="flex-1 text-sm leading-relaxed text-lele-gray -mt-4">
              {t.quote}
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-3 border-t border-lele-gray-light pt-4">
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full bg-lele-light-blue">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-lele-navy">{t.name}</p>
                <p className="text-xs text-lele-gray">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
