"use client";

import Image from "next/image";
import { useState } from "react";

export default function ConsultationCTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-4 md:px-16">
        <div className="rounded-3xl bg-lele-cream px-8 py-12 md:px-16 md:py-16">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          {/* Left: Illustration */}
          <div className="flex w-full flex-1 items-center justify-center">
            <Image
              src="/images/consultation-cta-img.png"
              alt="E-book eksklusif Metode Le Le"
              width={480}
              height={480}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>

          {/* Right: Content + Form */}
          <div className="w-full flex-2">
            <h2 className="text-3xl font-ostania text-lele-navy md:text-4xl text-center md:text-left">
              Yuk Ngintip{" "}
              <span className="text-lele-orange">Resep Rahasia</span>{" "}
              Kami!
            </h2>
            <p className="mt-4 font-poppins text-base leading-relaxed text-lele-gray text-center md:text-left">
              Di E-book eksklusif ini, kami bongkar 7+ karakter dasar yang
              ternyata cuma GAMBAR. Pelajari &ldquo;Metode Le Le&rdquo; mengungkap logika
              visual tersembunyi agar kosakata langsung &lsquo;klik&rsquo; dan nempel
              permanen, bukan sekadar hafalan.
            </p>

            {/* Form card */}
            <div className="mt-8 font-poppins rounded-2xl bg-white p-8 shadow-sm">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="cta-name"
                    className="mb-1.5 block text-sm font-medium text-lele-navy"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-lele-navy placeholder-gray-400 outline-none focus:border-lele-orange focus:ring-2 focus:ring-lele-orange/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-phone"
                    className="mb-1.5 block text-sm font-medium text-lele-navy"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="Ex: 08729201281"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-lele-navy placeholder-gray-400 outline-none focus:border-lele-orange focus:ring-2 focus:ring-lele-orange/20"
                  />
                  <p className="mt-1.5 text-xs text-lele-gray">
                    Kami menghargai privasi Anda &amp; tidak akan melakukan spam.
                  </p>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-[#2E5AAF] py-4 text-sm font-bold text-white transition-colors hover:bg-lele-navy"
                >
                  Download FREE E-Book!
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
