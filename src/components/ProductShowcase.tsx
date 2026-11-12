"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PRODUCT_LINEUP } from "@/data/siteContent";
import { useSmoothScroll } from "./SmoothScrollProvider";

interface ProductShowcaseProps {
  onSelectInquiryProduct?: (productTitle: string) => void;
}

export function ProductShowcase({
  onSelectInquiryProduct,
}: ProductShowcaseProps) {
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  const activeProduct = PRODUCT_LINEUP[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { scale: 1.05, opacity: 0.85 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      gsap.from(".product-text-reveal", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInquiry = () => {
    onSelectInquiryProduct?.(activeProduct.title);
    scrollTo("#contact", -64);
  };

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Minimal Apple-style product selector pills */}
        <div className="product-text-reveal mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#A85A0A] uppercase">
              Product Showcase
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,1.25rem+2.8vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#064B16]">
              Pure Origin. Crafted Precision.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 self-start rounded-full bg-[#F7F8F3] px-4 py-2 text-xs font-medium tracking-tight text-[#064B16] lg:self-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#48A900]" />
            <span>Single-Origin Botanical Formula</span>
          </div>
        </div>

        {/* Large visual showcase + sticky minimal editorial copy */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* 70%+ visual weight studio frame */}
          <div className="lg:col-span-7">
            <div
              ref={imageFrameRef}
              className="relative overflow-hidden rounded-[28px] bg-[#F7F8F3] shadow-[0_30px_70px_-36px_rgba(6,75,22,0.22)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
                />
              </div>

              <div className="flex items-center justify-between border-t border-[#064B16]/8 bg-[#F7F8F3]/95 px-6 py-4 backdrop-blur-sm">
                <span className="text-xs font-medium tracking-wide text-[#064B16]/80">
                  {activeProduct.aspectLabel}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#48A900]" />
              </div>
            </div>
          </div>

          {/* Sticky Apple-inspired product content */}
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:py-2">
            <p className="product-text-reveal text-xs font-semibold tracking-[0.18em] text-[#48A900] uppercase">
              {activeProduct.eyebrow}
            </p>

            <h3 className="product-text-reveal mt-2.5 font-display text-[clamp(1.75rem,1.25rem+1.8vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#0C1A0E]">
              {activeProduct.title}
            </h3>

            <p className="product-text-reveal mt-2 text-sm font-medium text-[#A85A0A] sm:text-base">
              {activeProduct.subtitle}
            </p>

            <p className="product-text-reveal mt-4 text-base leading-relaxed text-[#4A5A4C] sm:text-lg">
              {activeProduct.description}
            </p>

            {/* Minimal typographic highlights with hairline dividers */}
            <ul className="product-text-reveal mt-6 divide-y divide-[#064B16]/10 border-y border-[#064B16]/10">
              {activeProduct.highlights.map((highlight, idx) => (
                <li
                  key={highlight}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-sm font-medium tracking-tight text-[#0C1A0E] sm:text-base">
                    {highlight}
                  </span>
                  <span className="font-display text-xs font-semibold tracking-widest text-[#48A900]">
                    0{idx + 1}
                  </span>
                </li>
              ))}
            </ul>

            <div className="product-text-reveal mt-7">
              <button
                type="button"
                onClick={handleInquiry}
                className="group inline-flex items-center gap-3 rounded-full bg-[#064B16] px-7 py-4 text-sm font-semibold tracking-tight text-white transition-all duration-300 hover:bg-[#48A900] hover:shadow-[0_14px_30px_-10px_rgba(72,169,0,0.45)]"
              >
                <span>Request Product Inquiry</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

