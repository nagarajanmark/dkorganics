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
    <div className="relative flex min-h-[100dvh] flex-col justify-between bg-[#04240B] text-white">
      {/* Deep dark forest green ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(133,201,0,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(72,169,0,0.16),transparent_48%)]"
      />

      {/* Top Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
        <div className="inline-flex items-center rounded-full border border-white/60 bg-white/95 px-3.5 py-1.5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <BrandLogo variant="nav" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[#85C900]/30 bg-[#064B16]/75 px-3.5 py-2 text-xs font-semibold tracking-tight text-white backdrop-blur-md">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#85C900] motion-safe:animate-pulse"
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
        {/* Dark Green Hero Showcase Card */}
        <section
          aria-labelledby="coming-soon-heading"
          className="cs-reveal overflow-hidden rounded-3xl border border-white/14 bg-gradient-to-br from-[#064B16] via-[#053811] to-[#04240B] shadow-[0_28px_70px_-24px_rgba(0,0,0,0.65)]"
        >
          <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
            {/* Left Dark Green Editorial Copy */}
            <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 md:col-span-6 md:py-10 md:pl-10 lg:col-span-6 lg:py-12 lg:pl-12">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#85C900]/30 bg-[#04240B]/55 px-3.5 py-1.5 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#85C900]" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-[0.06em] text-[#D7F0A3]">
                  {CONTACT_INFO.brandName}® · புதிய இணையதளம் விரைவில்
                </span>
              </div>

              <h1
                id="coming-soon-heading"
                className="font-display text-[clamp(1.8rem,1.25rem+2.3vw,2.85rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
              >
                தூய வேப்பம் புண்ணாக்கு
              </h1>

              <p className="mt-1.5 font-display text-base font-medium text-[#B8D8BC] sm:text-lg">
                Pure Neem Cake Powder · Natural Soil Care
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                மொத்த மற்றும் நேரடி ஆர்டர்களுக்கு கீழே தொடர்பு கொள்ளுங்கள்.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappBaseHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#85C900] px-5 py-2.5 text-sm font-semibold tracking-tight text-[#04240B] shadow-[0_12px_28px_-10px_rgba(133,201,0,0.5)] transition-colors duration-300 hover:bg-white hover:text-[#064B16]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp ஆர்டர்</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#85C900]/60 hover:bg-white/16"
                >
                  <Phone className="h-4 w-4 text-[#85C900]" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Panoramic Product Image Panel */}
            <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] md:col-span-6 md:min-h-[360px] lg:col-span-6 lg:min-h-[400px]">
              <Image
                src="/images/neem-cake-banner.jpg"
                alt="Fresh neem leaves and fruits beside wooden bowls of cold-pressed neem cake flakes and finely milled neem cake powder"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-right"
              />
              {/* Soft dark-green edge blend into the left panel */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#053811] via-transparent via-35% to-[#04240B]/35 md:bg-gradient-to-r md:from-[#053811] md:via-[#053811]/35 md:via-28% md:to-transparent" />
            </div>
          </div>
        </section>

        {/* Dark Green Official Company Details Card */}
        <section
          aria-labelledby="company-details-heading"
          className="cs-reveal cs-reveal-delay-1 mt-5 rounded-3xl border border-white/14 bg-[#063A12]/80 p-5 shadow-[0_18px_48px_-24px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-3.5">
            <div>
              <h2
                id="company-details-heading"
                className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl"
              >
                {CONTACT_INFO.brandName}
                <sup className="ml-0.5 text-xs font-medium text-[#85C900]">®</sup>
              </h2>
              <p className="text-xs text-[#B8D8BC]">
                இயற்கை விவசாய இடுபொருட்கள் · {CONTACT_INFO.tagline}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#04240B]/70 px-3.5 py-1.5">
              <User className="h-3.5 w-3.5 text-[#85C900]" aria-hidden="true" />
              <span className="text-xs font-semibold text-white sm:text-sm">
                {CONTACT_INFO.proprietor}
              </span>
              <span className="text-[11px] font-medium text-[#B8D8BC]">
                · உரிமையாளர்
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <a
              href={CONTACT_INFO.phoneHref}
              className="group flex items-start gap-3 rounded-2xl border border-white/12 bg-[#04240B]/60 p-3.5 transition-colors duration-200 hover:border-[#85C900]/55 hover:bg-[#04240B]/85"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#064B16] text-[#85C900] transition-colors group-hover:bg-[#85C900] group-hover:text-[#04240B]">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#85C900]">
                  போன் / WhatsApp
                </span>
                <span className="mt-0.5 block font-display text-sm font-semibold text-white sm:text-base">
                  {CONTACT_INFO.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex items-start gap-3 rounded-2xl border border-white/12 bg-[#04240B]/60 p-3.5 transition-colors duration-200 hover:border-[#85C900]/55 hover:bg-[#04240B]/85"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#064B16] text-[#85C900] transition-colors group-hover:bg-[#85C900] group-hover:text-[#04240B]">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#85C900]">
                  இமெயில் (Email)
                </span>
                <span className="mt-0.5 block break-all font-display text-sm font-semibold text-white sm:text-base">
                  {CONTACT_INFO.email}
                </span>
              </div>
            </a>

            {/* GST Number */}
            <div className="flex items-start gap-3 rounded-2xl border border-white/12 bg-[#04240B]/60 p-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#064B16] text-[#85C900]">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#85C900]">
                  GST எண்
                </span>
                <span className="mt-0.5 block font-mono text-sm font-semibold tracking-wide text-white">
                  {CONTACT_INFO.gstNo}
                </span>
              </div>
            </div>

            {/* Business Address */}
            <a
              href={CONTACT_INFO.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-2xl border border-white/12 bg-[#04240B]/60 p-3.5 transition-colors duration-200 hover:border-[#85C900]/55 hover:bg-[#04240B]/85"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#064B16] text-[#85C900] transition-colors group-hover:bg-[#85C900] group-hover:text-[#04240B]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#85C900]">
                  முகவரி (Address)
                </span>
                <span className="mt-0.5 block text-xs font-medium leading-snug text-white/95 sm:text-sm">
                  {CONTACT_INFO.addressCardDisplay}
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Minimal Dark Green Footer Strip */}
      <footer className="relative z-10 border-t border-white/12 bg-[#031B08]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-3.5 text-xs text-[#B8D8BC] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span className="font-semibold text-white">
            © {new Date().getFullYear()} {CONTACT_INFO.brandName}® · வனமாதேவி, கடலூர்
          </span>
          <span>GST: {CONTACT_INFO.gstNo}</span>
        </div>
      </footer>
    </div>
  );
}
