"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const team = [
  {
    name: "Rara Lao Shi",
    title: "Juara Nasional Chinese Bridge 2023",
    image: "/images/team-img.png",
  },
  {
    name: "Farell Lao Shi",
    title: "Juara Nasional Chinese Bridge 2023",
    image: "/images/team-img.png",
  },
  {
    name: "Metta Lao Shi",
    title: "Juara Nasional Chinese Bridge 2023",
    image: "/images/team-img.png",
  },
];

export default function DreamTeamSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-4 md:px-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-lele-cream px-4 py-1 font-poppins text-sm font-bold text-lele-orange mb-4">
            Tim Kami
          </span>
          <h2 className="font-ostania text-[39px] leading-[44px] text-lele-primary-800">
            Our{" "}
            <span className="text-lele-orange">Dream Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[637px] font-poppins text-base leading-relaxed text-lele-neutral-700">
            Sering ditanya, &lsquo;Apa sih rahasia Le Le Mandarin?&rsquo; Jawabannya simpel: tim kami!
            Setiap anggota membawa &lsquo;Otak&rsquo; (keahlian unik&mdash;dari juara kompetisi hingga veteran)
            dan &lsquo;Jiwa&rsquo; (passion untuk berbagi kecintaan pada Bahasa &amp; Budaya Mandarin).
            Yuk, kenali mereka lebih dekat!
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="aspect-[340/359] flex flex-col overflow-hidden rounded-xl border border-lele-neutral-50 bg-white"
            >
              {/* Photo area — fills remaining space */}
              <div className="relative flex-1 bg-[url('/images/team-card-bg.png')] bg-cover bg-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Name & title */}
              <div className="aspect-[340/103] px-5 flex flex-col justify-center shrink-0 border-t border-lele-neutral-50">
                <h3 className="font-ostania text-xl text-[#2c2c2c]">
                  {member.name}
                </h3>
                <p className="mt-0.5 font-poppins text-xs text-lele-gray">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => router.push("/tim")}
            className="cursor-pointer rounded-full bg-[#2E5AAF] px-8 py-3.5 font-poppins text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Kenalan Sama Dream Team Kami!
          </button>
        </div>
      </div>
    </section>
  );
}
