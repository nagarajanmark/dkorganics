"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Pause, Play } from "lucide-react";
import { HERO_SLIDES } from "@/data/siteContent";
import { useSmoothScroll } from "./SmoothScrollProvider";

export function HeroSection() {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Respect prefers-reduced-motion for auto image crossfade
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsPaused(true);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Subtle entrance stagger synced after initial intro lift
      gsap.from(".hero-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.95,
        stagger: 0.1,
        delay: 0.55,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Gentle Apple-like scroll parallax on hero imagery
      if (bgParallaxRef.current && sectionRef.current) {
        gsap.to(bgParallaxRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[82dvh] w-full items-center overflow-hidden bg-[#064B16] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-[86dvh] lg:pt-24 lg:pb-28"
    >
      {/* Full-bleed cinematic photography layers with smooth transitions */}
      <div
        ref={bgParallaxRef}
        className="pointer-events-none absolute inset-0 h-[112%] w-full will-change-transform"
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                className={`object-cover object-center ${
                  isActive ? "hero-slow-zoom" : ""
                }`}
              />
            </div>
          );
        })}

        {/* Natural editorial contrast veil — subtle, no loud artificial gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04240B]/88 via-[#064B16]/35 to-[#04240B]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04240B]/70 via-[#04240B]/25 to-transparent" />
      </div>

      {/* Foreground editorial copy & CTAs */}
      <div
        ref={headlineRef}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-12 pt-10"
      >
        <div className="max-w-3xl">
          <div className="hero-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#85C900]" />
            <span className="text-xs font-medium tracking-[0.16em] text-white/95 uppercase">
              DK ORGANICS · Pure Botanical Agriculture
            </span>
          </div>

          <h1 className="hero-reveal font-display text-[clamp(2.5rem,1.4rem+4.5vw,5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-white">
            Nature&apos;s Strength.
            <br />
            Soil&apos;s Future.
          </h1>

          <p className="hero-reveal mt-4 max-w-xl text-[clamp(1rem,0.95rem+0.45vw,1.25rem)] font-normal leading-relaxed text-white/88">
            Neem Cake Powder (Veppam Punnakku) – A Natural Choice for Sustainable Agriculture.
          </p>

          <div className="hero-reveal mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#product", -64);
              }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-semibold tracking-tight text-[#064B16] shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-[#85C900] hover:text-[#04240B]"
            >
              <span>Explore Our Product</span>
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact", -64);
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-medium tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Minimal visual playback & slide selector controls */}
        <div className="hero-reveal mt-8 flex items-center justify-between border-t border-white/15 pt-4">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`View hero visual ${idx + 1}: ${slide.label}`}
                aria-pressed={activeSlide === idx}
                className={`group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  activeSlide === idx
                    ? "bg-white/20 text-white backdrop-blur-md"
                    : "text-white/65 hover:text-white"
                }`}
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? "w-6 bg-[#85C900]"
                      : "w-1.5 bg-white/45 group-hover:bg-white/80"
                  }`}
                />
                <span className="hidden sm:inline">{slide.label}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={
              isPaused
                ? "Play background photography transition"
                : "Pause background photography transition"
            }
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md transition-colors hover:bg-black/35 hover:text-white"
          >
            {isPaused ? (
              <>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
