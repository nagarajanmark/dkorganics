import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: "DK ORGANICS | Neem Cake Powder (Veppam Punnakku)",
  description:
    "DK ORGANICS brings pure Neem Cake Powder (Veppam Punnakku) for natural soil care and sustainable agriculture.",
  keywords: [
    "DK ORGANICS",
    "Neem Cake Powder",
    "Veppam Punnakku",
    "Neem Cake",
    "Organic Agriculture",
    "Sustainable Farming",
    "Soil Care",
  ],
  icons: {
    icon: "/images/dk-organics-logo.png",
  },
  openGraph: {
    title: "DK ORGANICS — Nature's Strength. Soil's Future.",
    description:
      "Pure Neem Cake Powder (Veppam Punnakku) crafted for natural soil care and sustainable agriculture.",
    type: "website",
    locale: "en_US",
    siteName: "DK ORGANICS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-[#F7F8F3] text-[#0C1A0E] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#064B16] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
