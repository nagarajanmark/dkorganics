"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LenisContextValue {
  scrollTo: (target: string | HTMLElement | number, offset?: number) => void;
}

const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    if (mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener("change", handleMotionChange);
      };
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      autoRaf: false,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after fonts and layout settle
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      window.clearTimeout(refreshTimer);
      mediaQuery.removeEventListener("change", handleMotionChange);
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | HTMLElement | number, offset = -64) => {
    if (reducedMotion || !lenisRef.current) {
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "auto" });
        return;
      }
      const element =
        typeof target === "string" ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
      return;
    }

    lenisRef.current.scrollTo(target, {
      offset: typeof target === "number" ? 0 : offset,
      duration: 1.35,
    });
  };

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}

