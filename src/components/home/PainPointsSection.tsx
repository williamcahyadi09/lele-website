import Image from "next/image";

const painPoints = [
  {
    imageSrc: "/images/tembok-hafalan.png",
    title: "Tembok Hafalan",
    desc: "Udah berjam-jam menghafal ribuan kosakata dan grammar, tapi tetap lupa dan tidak bisa menggunakannya saat dibutuhkan?",
  },
  {
    imageSrc: "/images/awalnya-semangat.png",
    title: "Awalnya Semangat!",
    desc: "Tapi metode yang monoton dan kurang menarik pernah membuat semangatmu luntur?",
  },
  {
    imageSrc: "/images/deg-deg-ser.png",
    title: "Deg-Deg-Ser",
    desc: "Khawatir salah nada dan artinya jadi aneh? Takut dianggap tidak sopan karena salah pilih kata?",
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        <div className="text-center mb-14 font-ostania tracking-wide">
          <h2 className="text-2xl text-lele-navy md:text-3xl">
            Pernah Merasa Belajar Mandarin Itu...
          </h2>
          <p className="text-4xl text-lele-orange md:text-5xl mt-1">
            Menyiksa?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="relative h-28 w-36">
                <Image
                  src={point.imageSrc}
                  alt={point.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-ostania text-black">{point.title}</h3>
              <p className="text-sm font-poppins leading-relaxed text-black">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
