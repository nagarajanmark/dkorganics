"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NATURE_GALLERY } from "@/data/siteContent";

export function NatureAgricultureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (heroVisualRef.current) {
        gsap.fromTo(
          heroVisualRef.current,
          { scale: 1.06 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroVisualRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      gsap.from(".nature-headline-reveal", {
        y: 22,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".nature-headline-trigger",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".nature-tile", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".nature-tiles-grid",
          start: "top 84%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nature"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#064B16] text-white"
    >
      {/* Compact full-width immersive visual */}
      <div className="nature-headline-trigger relative flex min-h-[44dvh] w-full items-center justify-center overflow-hidden sm:min-h-[50dvh]">
        <div
          ref={heroVisualRef}
          className="pointer-events-none absolute inset-0 h-full w-full will-change-transform"
        >
          <Image
            src="/images/nature-soil-hands.jpg"
            alt="Agricultural hands gently nurturing a fresh green seedling in dark fertile soil"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#04240B]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064B16]/45 via-transparent to-[#064B16]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
          <p className="nature-headline-reveal text-xs font-semibold tracking-[0.24em] text-[#85C900] uppercase">
            Nature Meets Agriculture
          </p>
          <h2 className="nature-headline-reveal mt-4 font-display text-[clamp(2.1rem,1.3rem+3.4vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
            Inspired by Nature.
            <br />
            Made for Better Soil.
          </h2>
        </div>
      </div>

      {/* Single compact 4-card editorial visual strip */}
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-8 sm:pb-18 lg:px-12 lg:pb-20">
        <div className="nature-tiles-grid grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {NATURE_GALLERY.map((item) => (
            <figure
              key={item.id}
              className="nature-tile group relative overflow-hidden rounded-2xl bg-[#04240B]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04240B]/82 via-transparent to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-5">
                <span className="font-display text-sm font-medium tracking-tight text-white sm:text-base">
                  {item.label}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#85C900]" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
