"use client";

import { useMemo } from "react";
import { PROCESS_STAGES } from "@/data/siteContent";
import { DishOrbitCarousel, type Dish } from "@/components/ui/dish-orbit-carousel";
import { useSmoothScroll } from "./SmoothScrollProvider";

export function StorytellingSection() {
  const { scrollTo } = useSmoothScroll();

  const stageDishes = useMemo<Dish[]>(
    () =>
      PROCESS_STAGES.map((stage) => ({
        title: stage.orbitTitle,
        subtitle: stage.orbitSubtitle,
        image: stage.image,
        alt: stage.imageAlt,
        eyebrow: stage.eyebrow,
        label: `${stage.number} · ${stage.title}`,
        rating: Number(stage.number),
        badgeText: stage.number,
        chef: stage.detailHeading,
        kitchen: stage.detailSubheading,
        description: stage.caption,
        likes: 0,
        ingredients: stage.highlights,
        accent: stage.accent,
      })),
    []
  );

  return (
    <section
      id="process"
      className="relative overflow-x-clip bg-white pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8 sm:pb-6 lg:px-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#A85A0A] uppercase">
          From Nature to Agriculture
        </p>
        <h2 className="mt-3 font-display text-[clamp(2rem,1.25rem+2.8vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#064B16]">
          Four Disciplined Stages.
        </h2>
      </div>

      <DishOrbitCarousel
        dishes={stageDishes}
        height="100svh"
        loop={false}
        fontSrc={null}
        roundImages
        showTopControls={false}
        showReactions={false}
        primaryActionLabel="Explore Product"
        secondaryActionLabel="Request Inquiry"
        tabLabels={["Process", "Highlights"]}
        badgeIcon="leaf"
        actionIcons="stage"
        ariaLabel="Four Disciplined Stages of DK ORGANICS Neem Cake Powder"
        itemTerm="Stage"
        onPlay={() => scrollTo("#product", -68)}
        onOrder={() => scrollTo("#contact", -68)}
      />
    </section>
  );
}
