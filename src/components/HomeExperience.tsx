"use client";

import { useState } from "react";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { PageIntro } from "@/components/PageIntro";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { NatureAgricultureSection } from "@/components/NatureAgricultureSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { StorytellingSection } from "@/components/StorytellingSection";
import { CommitmentSection } from "@/components/CommitmentSection";
import { ContactFooterSection } from "@/components/ContactFooterSection";

export function HomeExperience() {
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState(
    "Neem Cake Powder / Veppam Punnakku"
  );

  return (
    <SmoothScrollProvider>
      <PageIntro />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProductShowcase
          onSelectInquiryProduct={(title) => setSelectedInquiryProduct(title)}
        />
        <NatureAgricultureSection />
        <BenefitsSection />
        <StorytellingSection />
        <CommitmentSection />
      </main>
      <ContactFooterSection preselectedProduct={selectedInquiryProduct} />
    </SmoothScrollProvider>
  );
}

