const painPoints = [
  {
    icon: (
      // Brick wall with a confused orange face peeking out
      <svg viewBox="0 0 140 120" fill="none" className="w-36 h-28" aria-hidden="true">
        {/* Brick wall - blue */}
        <rect x="8" y="20" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="44" y="20" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="80" y="20" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="20" y="43" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="56" y="43" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="92" y="43" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="8" y="66" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="44" y="66" width="30" height="18" rx="3" fill="#1B3B6F" />
        <rect x="80" y="66" width="30" height="18" rx="3" fill="#1B3B6F" />
        {/* Orange face circle */}
        <circle cx="76" cy="90" r="28" fill="#FAAC25" />
        {/* Eyes - confused */}
        <ellipse cx="67" cy="86" rx="3.5" ry="4" fill="#1B3B6F" />
        <ellipse cx="85" cy="86" rx="3.5" ry="4" fill="#1B3B6F" />
        {/* Furrowed brow */}
        <path d="M62 79 Q67 76 72 79" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M78 79 Q83 76 88 79" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Frown */}
        <path d="M66 98 Q76 93 86 98" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Sweat drop */}
        <path d="M58 96 Q56 100 60 102 Q64 100 62 96 Z" fill="#1B3B6F" opacity="0.6" />
      </svg>
    ),
    title: "Tembok Hafalan",
    desc: "Udah berjam-jam menghafal ribuan kosakata dan grammar, tapi tetap lupa dan tidak bisa menggunakannya saat dibutuhkan?",
  },
  {
    icon: (
      // Two overlapping faces — happy blue + sad orange
      <svg viewBox="0 0 140 120" fill="none" className="w-36 h-28" aria-hidden="true">
        {/* Blue circle (happy, behind) */}
        <circle cx="55" cy="55" r="38" fill="#1B3B6F" />
        {/* Happy eyes */}
        <path d="M40 48 Q44 43 48 48" stroke="#FAAC25" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M55 48 Q59 43 63 48" stroke="#FAAC25" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Big smile */}
        <path d="M39 62 Q55 76 71 62" stroke="#FAAC25" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Orange circle (sad, front) */}
        <circle cx="92" cy="72" r="34" fill="#FAAC25" />
        {/* Sad eyes */}
        <ellipse cx="81" cy="65" rx="3" ry="3.5" fill="#1B3B6F" />
        <ellipse cx="103" cy="65" rx="3" ry="3.5" fill="#1B3B6F" />
        {/* Sad brows */}
        <path d="M76 57 Q81 54 86 57" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M98 57 Q103 54 108 57" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Frown */}
        <path d="M79 82 Q92 76 105 82" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tear */}
        <path d="M79 70 Q77 75 80 77 Q83 75 81 70 Z" fill="#1B3B6F" opacity="0.5" />
      </svg>
    ),
    title: "Awalnya Semangat!",
    desc: "Tapi metode yang monoton dan kurang menarik pernah membuat semangatmu luntur?",
  },
  {
    icon: (
      // Nervous orange face with squiggles
      <svg viewBox="0 0 140 120" fill="none" className="w-36 h-28" aria-hidden="true">
        {/* Blue outer circle */}
        <circle cx="70" cy="62" r="42" fill="#1B3B6F" />
        {/* Orange inner face */}
        <circle cx="70" cy="62" r="34" fill="#FAAC25" />
        {/* Nervous eyes */}
        <ellipse cx="57" cy="55" rx="4" ry="4.5" fill="#1B3B6F" />
        <ellipse cx="83" cy="55" rx="4" ry="4.5" fill="#1B3B6F" />
        {/* Raised worried brows */}
        <path d="M51 46 Q57 42 63 46" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M77 46 Q83 42 89 46" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Wavy nervous mouth */}
        <path d="M57 76 Q61 72 65 76 Q69 80 73 76 Q77 72 83 76" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Squiggly lines (stress marks) */}
        <path d="M96 30 Q99 26 102 30 Q105 34 108 30" stroke="#1B3B6F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M22 35 Q24 31 27 35" stroke="#FAAC25" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: "Deg-Deg-Ser",
    desc: "Khawatir salah nada dan artinya jadi aneh? Takut dianggap tidak sopan karena salah pilih kata?",
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold text-lele-navy md:text-3xl">
            Pernah Merasa Belajar Mandarin Itu...
          </h2>
          <p className="text-4xl font-extrabold text-lele-orange md:text-5xl mt-1">
            Menyiksa?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              {point.icon}
              <h3 className="text-lg font-bold text-lele-navy">{point.title}</h3>
              <p className="text-sm leading-relaxed text-lele-gray">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
