"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CommitmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.06 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      gsap.from(".commitment-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="commitment"
      ref={sectionRef}
      className="relative flex min-h-[380px] w-full items-center overflow-hidden bg-[#F7F8F3] py-16 sm:min-h-[420px] sm:py-20 lg:min-h-[clamp(440px,34vw,660px)] lg:py-24"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 h-full w-full will-change-transform"
      >
        <Image
          src="/images/neem_powder_and_seeds_still_life.png"
          alt="Fresh neem leaves and seeds beside wooden bowls of cold-pressed neem cake and finely milled neem powder in warm natural sunlight"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-[78%_center] md:object-[68%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8F3]/92 via-[#F7F8F3]/75 to-[#F7F8F3]/15 md:from-[#F7F8F3]/80 md:via-[#F7F8F3]/40 md:to-transparent lg:from-[#F7F8F3]/45 lg:via-transparent lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-md text-left lg:ml-6 lg:max-w-[26rem] xl:ml-24 xl:max-w-lg 2xl:ml-8">
          <p className="commitment-reveal text-xs font-semibold tracking-[0.24em] text-[#A85A0A] uppercase">
            Our Commitment
          </p>
          <h2 className="commitment-reveal mt-4 font-display text-[clamp(2rem,1.25rem+2.8vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#064B16]">
            Growing a Greener Tomorrow.
          </h2>
          <p className="commitment-reveal mt-5 max-w-md text-[clamp(0.95rem,0.9rem+0.35vw,1.15rem)] font-normal leading-relaxed text-[#0C1A0E]/80">
            Committed to bringing nature-inspired agricultural solutions to modern farming.
          </p>
        </div>
      </div>
    </section>
  );
}

