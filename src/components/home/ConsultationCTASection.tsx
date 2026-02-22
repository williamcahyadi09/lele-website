"use client";

import { useState } from "react";

export default function ConsultationCTASection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
      <div className="relative overflow-hidden rounded-3xl bg-lele-navy px-8 py-16 md:px-16">
        {/* Decorative blobs */}
        <svg
          className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 text-lele-orange/10"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M45.3,-58.2C57.9,-49.5,66.5,-34.6,71.2,-18.3C75.9,-2,76.7,15.7,69.8,29.8C62.9,43.9,48.3,54.4,33,61.3C17.7,68.2,1.6,71.5,-15.5,69.5C-32.6,67.5,-50.7,60.2,-61.4,47.1C-72.1,34,-75.4,15.1,-72.9,-2.5C-70.3,-20.1,-61.9,-36.5,-49.5,-45.3C-37.1,-54.1,-20.7,-55.4,-2.7,-52.2C15.3,-49,32.7,-66.9,45.3,-58.2Z" transform="translate(100 100)" />
        </svg>
        <svg
          className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 text-white/5"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M39.5,-51.1C52.9,-44.3,66.8,-35.2,72.3,-22.3C77.8,-9.4,74.9,7.3,67.7,20.8C60.5,34.3,49,44.6,36.3,53.1C23.6,61.6,9.7,68.3,-4.2,73.5C-18.1,78.7,-32,82.4,-42.4,75.4C-52.8,68.4,-59.7,50.7,-64.4,34.1C-69.1,17.5,-71.6,2,-67.8,-11.3C-64,-24.6,-53.9,-35.7,-42.1,-43C-30.3,-50.3,-16.8,-53.8,-1.6,-51.8C13.6,-49.8,26.1,-57.9,39.5,-51.1Z" transform="translate(100 100)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-xl text-center">
          {/* Chat bubble icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lele-orange">
            <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" aria-hidden="true">
              <path d="M4 6h24v16H18l-6 5v-5H4V6z" fill="white" />
              <circle cx="11" cy="14" r="2" fill="#1B3B6F" />
              <circle cx="16" cy="14" r="2" fill="#1B3B6F" />
              <circle cx="21" cy="14" r="2" fill="#1B3B6F" />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Yuk Ngobrol Bareng{" "}
            <span className="text-lele-orange">Bahasa Kami!</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Konsultasi gratis dengan tim Le Le — ceritakan tujuan belajarmu dan
            kami bantu carikan kelas yang paling cocok.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Nama kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-lele-orange focus:ring-2 focus:ring-lele-orange/30"
            />
            <input
              type="text"
              placeholder="No. WhatsApp / Email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-lele-orange focus:ring-2 focus:ring-lele-orange/30"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-lele-orange py-4 text-sm font-bold text-white transition-colors hover:bg-lele-orange-dark"
            >
              Konsultasi Gratis Sekarang 🎉
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
