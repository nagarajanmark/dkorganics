"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { useSmoothScroll } from "./SmoothScrollProvider";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Nature", href: "#nature" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Commitment", href: "#commitment" },
];

export function Navbar() {
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMobileOpen(false);
    scrollTo(href, href === "#hero" ? 0 : -68);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex h-12 max-w-4xl items-center justify-between rounded-full px-3.5 ring-1 ring-inset ring-white/75 transition-all duration-500 backdrop-saturate-150 sm:h-[52px] sm:px-5 ${
          scrolled
            ? "border border-[#064B16]/16 bg-white/72 shadow-[0_14px_34px_-12px_rgba(6,75,22,0.22),0_2px_8px_-2px_rgba(12,26,14,0.08)] backdrop-blur-2xl"
            : "border border-[#064B16]/14 bg-white/55 shadow-[0_10px_28px_-12px_rgba(6,75,22,0.2),0_2px_8px_-2px_rgba(12,26,14,0.06)] backdrop-blur-xl"
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          aria-label="DK ORGANICS — Back to top"
          className="inline-flex items-center rounded-full px-1 py-0.5 transition-opacity duration-300 hover:opacity-85"
        >
          <BrandLogo variant="nav" />
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 md:flex lg:gap-7"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-[13px] font-medium tracking-tight text-[#0C1A0E]/85 transition-colors duration-300 hover:text-[#064B16]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#064B16] px-4 py-1.5 text-xs font-medium tracking-tight text-white transition-all duration-300 hover:bg-[#48A900] hover:shadow-[0_10px_24px_-8px_rgba(72,169,0,0.5)] sm:text-[13px]"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#064B16]/15 bg-white/75 text-[#064B16] backdrop-blur-md transition-colors hover:bg-white md:hidden"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="pointer-events-auto mx-auto mt-2 max-w-4xl rounded-3xl border border-[#064B16]/14 bg-white/82 p-5 ring-1 ring-inset ring-white/75 shadow-[0_18px_40px_-16px_rgba(6,75,22,0.24)] backdrop-blur-2xl backdrop-saturate-150 md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="border-b border-[#064B16]/8 pb-2.5 text-sm font-medium text-[#0C1A0E] transition-colors hover:text-[#48A900]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#064B16] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#48A900]"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

