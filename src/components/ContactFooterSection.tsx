"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Send,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/siteContent";
import MeadowRiseFooter, { type MeadowSocial } from "@/components/ui/meadow-rise-footer";
import { useSmoothScroll } from "./SmoothScrollProvider";

interface ContactFooterSectionProps {
  preselectedProduct?: string;
}

export function ContactFooterSection({
  preselectedProduct = "Neem Cake Powder / Veppam Punnakku",
}: ContactFooterSectionProps) {
  const { scrollTo } = useSmoothScroll();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [product, setProduct] = useState(preselectedProduct);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<{
    name: boolean;
    contact: boolean;
  }>({ name: false, contact: false });
  const [showMapEmbed, setShowMapEmbed] = useState(false);

  useEffect(() => {
    setProduct(preselectedProduct);
  }, [preselectedProduct]);

  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, contact: true });

    if (!name.trim() || !contact.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const footerSocials: MeadowSocial[] = CONTACT_INFO.socials.map((social) => ({
    icon: social.name.toLowerCase() as MeadowSocial["icon"],
    href: social.href,
    label: social.name,
  }));

  const handleFooterLinkClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollTo(href, href === "#hero" ? 0 : -68);
  };

  return (
    <div id="contact" className="bg-[#F7F8F3]">
      {/* Contact section */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#A85A0A] uppercase">
            Direct Connection
          </p>
          <h2 className="mt-2.5 font-display text-[clamp(2rem,1.3rem+3vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#064B16]">
            Let&apos;s Grow Naturally.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4A5A4C]">
            Reach out for agricultural supply, bulk neem cake powder orders, or sustainable farming inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Contact Information & Direct Actions */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-5">
            <div className="space-y-4">
              <a
                href={CONTACT_INFO.phoneHref}
                className="group flex items-start gap-4 rounded-2xl border border-[#064B16]/10 bg-white p-4.5 transition-all duration-300 hover:border-[#48A900]/45 hover:shadow-[0_14px_34px_-22px_rgba(6,75,22,0.28)] sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F8F3] text-[#064B16] transition-colors group-hover:bg-[#064B16] group-hover:text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-semibold tracking-wider text-[#A85A0A] uppercase">
                    Phone Number
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-[#0C1A0E]">
                    {CONTACT_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-[#064B16]/10 bg-white p-4.5 transition-all duration-300 hover:border-[#48A900]/45 hover:shadow-[0_14px_34px_-22px_rgba(6,75,22,0.28)] sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F8F3] text-[#064B16] transition-colors group-hover:bg-[#064B16] group-hover:text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-semibold tracking-wider text-[#A85A0A] uppercase">
                    Email Address
                  </span>
                  <span className="mt-1 block break-all font-display text-lg font-semibold text-[#0C1A0E]">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>

              <div className="rounded-2xl border border-[#064B16]/10 bg-white p-4.5 sm:p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F8F3] text-[#064B16]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold tracking-wider text-[#A85A0A] uppercase">
                      Business Address
                    </span>
                    <p className="mt-1 font-display text-base font-semibold text-[#0C1A0E]">
                      {CONTACT_INFO.addressLine1}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#4A5A4C]">
                      {CONTACT_INFO.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3 pl-0 sm:pl-15">
                  <a
                    href={CONTACT_INFO.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-tight text-[#064B16] underline decoration-[#48A900]/50 underline-offset-4 transition-colors hover:text-[#48A900]"
                  >
                    <span>Open Google Maps Location</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <span aria-hidden="true" className="text-[#064B16]/25">
                    ·
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowMapEmbed((prev) => !prev)}
                    className="text-xs font-medium text-[#4A5A4C] transition-colors hover:text-[#064B16]"
                  >
                    {showMapEmbed ? "Hide Map View" : "Preview Map"}
                  </button>
                </div>

                {showMapEmbed && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-[#064B16]/10">
                    <iframe
                      title="DK ORGANICS Location Map"
                      src={CONTACT_INFO.mapsEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-52 w-full border-0"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Prominent WhatsApp Direct Contact CTA */}
            <div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#48A900] px-7 py-4 text-sm font-semibold tracking-tight text-white shadow-[0_14px_34px_-12px_rgba(72,169,0,0.55)] transition-all duration-300 hover:bg-[#064B16]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Chat with DK ORGANICS on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Minimal Luxury Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] border border-[#064B16]/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(6,75,22,0.16)] sm:p-8">
              {submitted ? (
                <div className="flex min-h-[340px] flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F8F3] text-[#48A900]">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#064B16]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4A5A4C]">
                    We have recorded your inquiry regarding{" "}
                    <span className="font-medium text-[#0C1A0E]">{product}</span>.
                    For immediate assistance, you may also connect directly via WhatsApp or phone.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello DK ORGANICS, my name is ${name.trim()} (${contact.trim()}). I am inquiring about ${product}.${message.trim() ? ` Details: ${message.trim()}` : ""}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#48A900] px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#064B16]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Send Directly on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setContact("");
                        setMessage("");
                        setTouched({ name: false, contact: false });
                      }}
                      className="rounded-full border border-[#064B16]/20 px-6 py-2.5 text-xs font-semibold text-[#064B16] transition-colors hover:bg-[#F7F8F3]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[#064B16]">
                      Agricultural Supply Inquiry
                    </h3>
                    <p className="mt-1 text-sm text-[#4A5A4C]">
                      Share your requirements for Neem Cake Powder / Veppam Punnakku.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="mb-2 block text-xs font-semibold tracking-wider text-[#0C1A0E]/80 uppercase"
                      >
                        Your Name *
                      </label>
                      <input
                        id="inquiry-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onBlur={() =>
                          setTouched((prev) => ({ ...prev, name: true }))
                        }
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={touched.name && !name.trim()}
                        placeholder="Full name"
                        className="w-full rounded-xl border border-[#064B16]/15 bg-[#F7F8F3]/60 px-4 py-3.5 text-sm text-[#0C1A0E] placeholder:text-[#4A5A4C]/55 transition-colors focus:border-[#48A900] focus:bg-white focus:outline-none"
                      />
                      {touched.name && !name.trim() && (
                        <p className="mt-1.5 text-xs text-[#A85A0A]">
                          Please enter your name.
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-contact"
                        className="mb-2 block text-xs font-semibold tracking-wider text-[#0C1A0E]/80 uppercase"
                      >
                        Phone or Email *
                      </label>
                      <input
                        id="inquiry-contact"
                        name="contact"
                        type="text"
                        required
                        autoComplete="email"
                        value={contact}
                        onBlur={() =>
                          setTouched((prev) => ({ ...prev, contact: true }))
                        }
                        onChange={(e) => setContact(e.target.value)}
                        aria-invalid={touched.contact && !contact.trim()}
                        placeholder="+91 ... or email@domain.com"
                        className="w-full rounded-xl border border-[#064B16]/15 bg-[#F7F8F3]/60 px-4 py-3.5 text-sm text-[#0C1A0E] placeholder:text-[#4A5A4C]/55 transition-colors focus:border-[#48A900] focus:bg-white focus:outline-none"
                      />
                      {touched.contact && !contact.trim() && (
                        <p className="mt-1.5 text-xs text-[#A85A0A]">
                          Please provide a phone number or email.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-product"
                      className="mb-2 block text-xs font-semibold tracking-wider text-[#0C1A0E]/80 uppercase"
                    >
                      Product Interest
                    </label>
                    <select
                      id="inquiry-product"
                      name="product"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full rounded-xl border border-[#064B16]/15 bg-[#F7F8F3]/60 px-4 py-3.5 text-sm text-[#0C1A0E] transition-colors focus:border-[#48A900] focus:bg-white focus:outline-none"
                    >
                      <option value="Neem Cake Powder / Veppam Punnakku">
                        Neem Cake Powder / Veppam Punnakku
                      </option>
                      <option value="Bulk Supply — Neem Cake Powder / Veppam Punnakku">
                        Bulk Supply — Neem Cake Powder / Veppam Punnakku
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="mb-2 block text-xs font-semibold tracking-wider text-[#0C1A0E]/80 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your farm acreage, crop type, or order quantity..."
                      className="w-full resize-y rounded-xl border border-[#064B16]/15 bg-[#F7F8F3]/60 px-4 py-3.5 text-sm text-[#0C1A0E] placeholder:text-[#4A5A4C]/55 transition-colors focus:border-[#48A900] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#064B16] px-7 py-4 text-sm font-semibold tracking-tight text-white transition-all duration-300 hover:bg-[#48A900] sm:w-auto"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <MeadowRiseFooter
        name={CONTACT_INFO.brandName}
        brandHref="#hero"
        heading={"Grow *living soil*\nwith DK Organics."}
        subheading="Pure Neem Cake Powder (Veppam Punnakku) crafted for natural soil care and sustainable agriculture."
        cta={{ label: "Explore Neem Cake Powder", href: "#product" }}
        tagline="Neem Cake Powder / Veppam Punnakku · Natural Soil Care & Sustainable Agriculture."
        placeholder="Enter your email for updates"
        successMessage="Thank you. We will keep you updated on seasonal harvests and supply."
        columns={[
          {
            title: "Explore",
            links: [
              { label: "Home", href: "#hero" },
              { label: "Product", href: "#product" },
              { label: "Nature", href: "#nature" },
              { label: "Benefits", href: "#benefits" },
            ],
          },
          {
            title: "Journey",
            links: [
              { label: "Four Stages", href: "#process" },
              { label: "Our Commitment", href: "#commitment" },
              { label: "Supply Inquiry", href: "#contact" },
            ],
          },
          {
            title: "Connect",
            links: [
              { label: CONTACT_INFO.phoneDisplay, href: CONTACT_INFO.phoneHref },
              { label: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { label: CONTACT_INFO.shortLocation, href: CONTACT_INFO.mapsQueryUrl },
            ],
          },
        ]}
        socials={footerSocials}
        legal={[
          { label: "Natural Soil Care", href: "#commitment" },
          { label: "Contact Us", href: "#contact" },
        ]}
        onLinkClick={handleFooterLinkClick}
        preset="meadow"
        palette={{
          sky: ["#F7F8F3", "#E9ECE3"],
          haze: "#E3E7DC",
        }}
        height="920px"
        heroHeight="clamp(440px, 60svh, 620px)"
        fontFamily="var(--font-sans)"
      />
    </div>
  );
}

