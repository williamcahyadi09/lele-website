"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function AvatarPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-lele-primary-50">
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-label={name}
      >
        <circle cx="40" cy="32" r="14" fill="#2E5AAF" opacity="0.4" />
        <ellipse cx="40" cy="68" rx="22" ry="14" fill="#2E5AAF" opacity="0.3" />
      </svg>
    </div>
  );
}

const testimonials = [
  {
    name: "Rihan",
    role: "Desainer di perusahaan swasta",
    quote:
      "Belajar Mandarin di Le Le benar-benar mengubah cara pandang saya. Metodenya unik, menyenangkan, dan hasilnya terasa dalam waktu singkat. Sekarang saya sudah bisa berkomunikasi dengan klien dari China!",
    image: "/images/testimonial-rihan.jpg",
  },
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
];

function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="#2E5AAF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="#2E5AAF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [imgError, setImgError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1); // 1 = forward (right→left), -1 = backward (left→right)

  useEffect(() => {
    const interval = setInterval(() => {
      directionRef.current = 1;
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [resetKey]);

  useEffect(() => {
    setImgError(false);
  }, [activeIndex]);

  useEffect(() => {
    if (!contentRef.current) return;
    const fromX = directionRef.current * 80;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: fromX },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [activeIndex]);

  function goNext() {
    directionRef.current = 1;
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setResetKey((k) => k + 1);
  }

  function goPrev() {
    directionRef.current = -1;
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setResetKey((k) => k + 1);
  }

  const current = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-4 md:px-16">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-ostania text-[31px] leading-[38px] text-lele-primary-800 md:text-[39px] md:leading-[44px]">
            Apa Kata Mereka yang Telah
            <br />
            Merasakan Metode Le Le?
          </h2>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-4 overflow-hidden md:gap-8">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-lele-primary-50 transition-opacity hover:opacity-80"
          >
            <ChevronLeftIcon />
          </button>

          {/* Testimonial card */}
          <div ref={contentRef} className="flex flex-1 flex-col items-center text-center">
            {/* Profile photo */}
            <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full bg-lele-neutral-50">
              {imgError ? (
                <AvatarPlaceholder name={current.name} />
              ) : (
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Quote with decorative marks */}
            <div className="relative w-full">
              {/* Opening quote */}
              <span className="font-ostania absolute -top-4 left-0 select-none text-6xl leading-none text-lele-orange">
                &ldquo;
              </span>

              <p className="font-poppins px-8 text-base leading-7 text-lele-neutral-700">
                {current.quote}
              </p>

              {/* Closing quote */}
              <span className="font-ostania absolute -bottom-6 right-0 select-none text-6xl leading-none text-lele-orange">
                &rdquo;
              </span>
            </div>

            {/* Name & role */}
            <div className="mt-10">
              <p className="font-poppins text-base font-bold text-lele-primary-800">
                {current.name}
              </p>
              <p className="font-poppins mt-0.5 text-sm text-lele-gray">
                {current.role}
              </p>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-lele-primary-50 transition-opacity hover:opacity-80"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
