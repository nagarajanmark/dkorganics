import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { HomeExperience } from "@/components/HomeExperience";
import { CONTACT_INFO, SITE_COMING_SOON } from "@/data/siteContent";

export const metadata: Metadata = SITE_COMING_SOON
  ? {
      title: "DK ORGANIC® | Coming Soon — Natural Organic Inputs for Healthy Crops",
      description:
        "DK ORGANIC website is launching soon. Contact C. Kumar (+91 63801 71836) at Vanamadevi, Cuddalore for pure Neem Cake Powder (Veppam Punnakku).",
    }
  : {
      title: "DK ORGANIC® | Neem Cake Powder (Veppam Punnakku)",
      description:
        "DK ORGANIC brings pure Neem Cake Powder (Veppam Punnakku) for natural soil care and sustainable agriculture.",
    };

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONTACT_INFO.brandName,
    description:
      "DK ORGANIC specializes in natural organic inputs and pure Neem Cake Powder (Veppam Punnakku) for healthy crops and sustainable agriculture.",
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phoneDisplay,
    taxID: CONTACT_INFO.gstNo,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.addressLine1,
      addressLocality: "Vanamadevi, Cuddalore",
      addressRegion: "Tamil Nadu",
      postalCode: "607001",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {SITE_COMING_SOON ? <ComingSoonPage /> : <HomeExperience />}
    </>
  );
}
