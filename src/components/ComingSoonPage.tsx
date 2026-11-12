import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { CONTACT_INFO } from "@/data/siteContent";

export function ComingSoonPage() {
  const whatsappBaseHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  return (
    <div className="relative flex min-h-[100dvh] flex-col justify-between bg-[#F7F8F3] text-[#0C1A0E]">
      {/* Subtle organic ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(133,201,0,0.12),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(6,75,22,0.08),transparent_48%)]"
      />

      {/* Top Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#064B16]/12 bg-white/90 px-3.5 py-1.5 shadow-[0_10px_28px_-14px_rgba(6,75,22,0.2)] backdrop-blur-md">
          <BrandLogo variant="nav" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[#064B16]/15 bg-white/90 px-3.5 py-2 text-xs font-semibold tracking-tight text-[#064B16] shadow-xs backdrop-blur-md">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#48A900] motion-safe:animate-pulse"
          />
          <span>விரைவில் · Coming Soon</span>
        </div>
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 mx-auto my-auto w-full max-w-7xl px-5 py-6 sm:px-8 sm:py-8 lg:px-12"
      >
        {/* Hero Showcase Card featuring the Neem Cake Banner */}
        <section
          aria-labelledby="coming-soon-heading"
          className="cs-reveal overflow-hidden rounded-3xl border border-[#064B16]/12 bg-white shadow-[0_24px_60px_-24px_rgba(6,75,22,0.18)]"
        >
          <div className="relative flex flex-col md:min-h-[340px] md:justify-center lg:min-h-[390px]">
            {/* Mobile: Clean unobstructed banner on top */}
            <div className="relative aspect-[16/6] w-full overflow-hidden bg-[#F7F8F3] md:hidden">
              <Image
                src="/images/neem-cake-banner.jpg"
                alt="Fresh neem leaves and fruits beside wooden bowls of cold-pressed neem cake flakes and finely milled neem cake powder"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-right"
              />
            </div>

            {/* Desktop: Full-bleed panoramic banner keeping the bowls on the right unobstructed */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <Image
                src="/images/neem-cake-banner.jpg"
                alt="Fresh neem leaves and fruits beside wooden bowls of cold-pressed neem cake flakes and finely milled neem cake powder"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/86 via-38% to-transparent to-58%" />
            </div>

            {/* Left Foreground Editorial Copy — Compact width so bowls stay clear */}
            <div className="relative z-10 max-w-md p-6 sm:p-8 md:max-w-lg md:py-10 md:pl-10 lg:py-12 lg:pl-12">
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#064B16]/15 bg-[#F7F8F3] px-3.5 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#48A900]" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-[0.06em] text-[#064B16]">
                  {CONTACT_INFO.brandName}® · புதிய இணையதளம் விரைவில்
                </span>
              </div>

              <h1
                id="coming-soon-heading"
                className="font-display text-[clamp(1.75rem,1.2rem+2.3vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#064B16]"
              >
                தூய வேப்பம் புண்ணாக்கு
              </h1>

              <p className="mt-1.5 font-display text-base font-medium text-[#4A5A4C] sm:text-lg">
                Pure Neem Cake Powder · Natural Soil Care
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#4A5A4C] sm:text-base">
                மொத்த மற்றும் நேரடி ஆர்டர்களுக்கு கீழே தொடர்பு கொள்ளுங்கள்.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappBaseHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#064B16] px-5 py-2.5 text-sm font-semibold tracking-tight text-white shadow-[0_12px_28px_-10px_rgba(6,75,22,0.45)] transition-colors duration-300 hover:bg-[#48A900]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp ஆர்டர்</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#064B16]/20 bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#064B16] transition-colors duration-300 hover:border-[#48A900] hover:bg-[#F7F8F3]"
                >
                  <Phone className="h-4 w-4 text-[#48A900]" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Official Company Details Card */}
        <section
          aria-labelledby="company-details-heading"
          className="cs-reveal cs-reveal-delay-1 mt-5 rounded-3xl border border-[#064B16]/12 bg-white p-5 shadow-[0_16px_42px_-24px_rgba(6,75,22,0.2)] sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#064B16]/10 pb-3.5">
            <div>
              <h2
                id="company-details-heading"
                className="font-display text-xl font-semibold tracking-tight text-[#064B16] sm:text-2xl"
              >
                {CONTACT_INFO.brandName}
                <sup className="ml-0.5 text-xs font-medium">®</sup>
              </h2>
              <p className="text-xs text-[#4A5A4C]">
                இயற்கை விவசாய இடுபொருட்கள் · {CONTACT_INFO.tagline}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#064B16]/15 bg-[#F7F8F3] px-3.5 py-1.5">
              <User className="h-3.5 w-3.5 text-[#064B16]" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#0C1A0E] sm:text-sm">
                {CONTACT_INFO.proprietor}
              </span>
              <span className="text-[11px] font-medium text-[#4A5A4C]">
                · உரிமையாளர்
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <a
              href={CONTACT_INFO.phoneHref}
              className="group flex items-start gap-3 rounded-2xl border border-[#064B16]/10 bg-[#F7F8F3]/75 p-3.5 transition-colors duration-200 hover:border-[#48A900]/45 hover:bg-[#F7F8F3]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#064B16] shadow-xs transition-colors group-hover:bg-[#064B16] group-hover:text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#A85A0A]">
                  போன் / WhatsApp
                </span>
                <span className="mt-0.5 block font-display text-sm font-semibold text-[#0C1A0E] sm:text-base">
                  {CONTACT_INFO.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex items-start gap-3 rounded-2xl border border-[#064B16]/10 bg-[#F7F8F3]/75 p-3.5 transition-colors duration-200 hover:border-[#48A900]/45 hover:bg-[#F7F8F3]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#064B16] shadow-xs transition-colors group-hover:bg-[#064B16] group-hover:text-white">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#A85A0A]">
                  இமெயில் (Email)
                </span>
                <span className="mt-0.5 block break-all font-display text-sm font-semibold text-[#0C1A0E] sm:text-base">
                  {CONTACT_INFO.email}
                </span>
              </div>
            </a>

            {/* GST Number */}
            <div className="flex items-start gap-3 rounded-2xl border border-[#064B16]/10 bg-[#F7F8F3]/75 p-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#064B16] shadow-xs">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#A85A0A]">
                  GST எண்
                </span>
                <span className="mt-0.5 block font-mono text-sm font-semibold tracking-wide text-[#0C1A0E]">
                  {CONTACT_INFO.gstNo}
                </span>
              </div>
            </div>

            {/* Business Address */}
            <a
              href={CONTACT_INFO.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-2xl border border-[#064B16]/10 bg-[#F7F8F3]/75 p-3.5 transition-colors duration-200 hover:border-[#48A900]/45 hover:bg-[#F7F8F3]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#064B16] shadow-xs transition-colors group-hover:bg-[#064B16] group-hover:text-white">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#A85A0A]">
                  முகவரி (Address)
                </span>
                <span className="mt-0.5 block text-xs font-medium leading-snug text-[#0C1A0E] sm:text-sm">
                  {CONTACT_INFO.addressCardDisplay}
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Minimal Footer Strip */}
      <footer className="relative z-10 border-t border-[#064B16]/10 bg-white/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-3.5 text-xs text-[#4A5A4C] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span className="font-semibold text-[#064B16]">
            © {new Date().getFullYear()} {CONTACT_INFO.brandName}® · வனமாதேவி, கடலூர்
          </span>
          <span>GST: {CONTACT_INFO.gstNo}</span>
        </div>
      </footer>
    </div>
  );
}
