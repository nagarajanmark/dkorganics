"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BENEFIT_CARDS } from "@/data/siteContent";

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".benefits-header", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".benefit-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="bg-[#F7F8F3] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="benefits-header mb-9 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A85A0A] uppercase">
              Product Benefits
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.85rem,1.2rem+2.5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#064B16]">
              Designed Around Living Soil.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#4A5A4C] sm:text-base">
            Three foundational pillars shaping how our pure neem cake powder supports modern agricultural landscapes.
          </p>
        </div>

        <div className="benefits-grid grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
          {BENEFIT_CARDS.map((card) => (
            <article
              key={card.index}
              className="benefit-card group relative isolate overflow-hidden rounded-[24px] bg-[#064B16] shadow-[0_20px_50px_-30px_rgba(6,75,22,0.28)]"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04240B]/92 via-[#04240B]/28 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
              </div>

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/12 font-display text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                  {card.index}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-[1.65rem]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/82 sm:text-base">
                  {card.caption}
                </p>
                <div className="mt-5 h-[2px] w-10 bg-[#85C900] transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

