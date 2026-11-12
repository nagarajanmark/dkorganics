"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BrandLogo } from "./BrandLogo";

/**
 * Refined Apple-inspired opening veil that showcases the official DK ORGANICS
 * brand mark briefly before lifting smoothly without blocking interaction.
 */
export function PageIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDismissed(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setDismissed(true),
      });

      tl.fromTo(
        logoWrapRef.current,
        { opacity: 0.25, y: 8, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
      )
        .fromTo(
          progressRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.38, ease: "power2.inOut" },
          "-=0.15"
        )
        .to(
          overlayRef.current,
          {
            yPercent: -100,
            duration: 0.58,
            ease: "power4.inOut",
          },
          "+=0.04"
        );
    });

    return () => ctx.revert();
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFFFF]"
    >
      <div ref={logoWrapRef} className="flex flex-col items-center gap-5 px-6">
        <BrandLogo variant="intro" />
        <div className="h-[2px] w-32 overflow-hidden rounded-full bg-[#064B16]/12">
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-gradient-to-r from-[#064B16] via-[#48A900] to-[#85C900]"
          />
        </div>
      </div>
    </div>
  );
}
