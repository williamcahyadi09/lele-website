"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const team = [
  {
    name: "Kana Lue Shi",
    title: "Lead Mandarin Instructor",
    image: "/images/team-kana.jpg",
    initials: "K",
  },
  {
    name: "Tiariff Lue Shi",
    title: "Senior Mandarin Teacher",
    image: "/images/team-tiariff.jpg",
    initials: "T",
  },
  {
    name: "Nikkie Lue Shi",
    title: "Mandarin Teacher",
    image: "/images/team-nikkie.jpg",
    initials: "N",
  },
];

export default function DreamTeamSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-lele-orange mb-3">
          Tim Kami
        </p>
        <h2 className="text-3xl font-extrabold text-lele-navy md:text-4xl">
          Our <span className="text-lele-orange">Dream Team</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-lele-gray">
          Guru-guru berpengalaman yang siap menemanimu belajar Mandarin dengan
          cara yang fun dan efektif.
        </p>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-4 rounded-2xl border border-lele-gray-light bg-white px-6 py-10 text-center shadow-sm"
          >
            {/* Photo */}
            <div className="relative h-28 w-28 overflow-hidden rounded-full bg-lele-light-blue">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              {/* Fallback initials shown via CSS if image fails — handled by bg */}
            </div>

            <div>
              <h3 className="text-lg font-bold text-lele-navy">{member.name}</h3>
              <p className="mt-1 text-sm text-lele-gray">{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button
          onClick={() => router.push("/tim")}
          className="cursor-pointer rounded-full border-2 border-lele-navy px-8 py-3.5 text-sm font-semibold text-lele-navy transition-colors hover:bg-lele-navy hover:text-white"
        >
          Kenalan dengan Tim Kami
        </button>
      </div>
      </div>
    </section>
  );
}
