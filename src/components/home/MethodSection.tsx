import Image from "next/image";

const pillars = [
  {
    tag: "Pop",
    title: "Pop Culture Advance",
    desc: "Mandarin jadi gampang lewat lagu, drama, dan film yang kamu suka. Otak lebih mudah menyerap kosakata baru lewat konteks yang familiar.",
    image: "/images/method-popculture.jpg",
    imageAlt: "Pop culture approach to learning Mandarin",
    bg: "bg-lele-light-blue",
  },
  {
    tag: "Filosofi",
    title: "Filosofi Alam & Karakter Bahasa",
    desc: "Setiap karakter Mandarin punya cerita. Dengan memahami asal-usul dan filosofi di balik karakter, kamu hafal lebih lama dan lebih dalam.",
    image: "/images/method-philosophy.jpg",
    imageAlt: "Chinese character philosophy",
    bg: "bg-lele-cream",
  },
];

export default function MethodSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lele-orange mb-3">
          Metode Kami
        </p>
        <h2 className="text-3xl font-extrabold text-lele-navy md:text-4xl">
          Kami Merancang Metode Le Le
          <br className="hidden md:block" /> untuk Belajar Mandarin
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-lele-gray">
          Le Le Method menggabungkan ilmu memori modern, budaya pop, dan filosofi
          karakter Mandarin — agar belajar terasa fun dan bekasnya tahan lama.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="overflow-hidden rounded-2xl border border-lele-gray-light bg-white shadow-sm">
            {/* Image area */}
            <div className={`relative h-64 w-full ${pillar.bg}`}>
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-3 p-6">
              <span className="w-fit rounded-full bg-lele-orange/10 px-3 py-1 text-xs font-semibold text-lele-orange">
                {pillar.tag}
              </span>
              <h3 className="text-lg font-bold text-lele-navy">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-lele-gray">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
