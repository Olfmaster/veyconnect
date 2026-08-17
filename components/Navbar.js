"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

// Fokussierte Landingpages (z. B. für bezahlte Kampagnen) ohne Navigation.
const NO_NAV_PATHS = ["/sicheres-zuhause"];

const links = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/partner", label: "Partner" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/region", label: "Region" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hideNav = NO_NAV_PATHS.includes(pathname);

  useEffect(() => {
    if (hideNav) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, [hideNav]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;
    const panel = panelRef.current;
    const items = itemsRef.current.filter(Boolean);
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(panel, { y: "-100%" }, { y: "0%", duration: 0.55, ease: "power3.out" });
      gsap.fromTo(items, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", delay: 0.15 });
    } else {
      document.body.style.overflow = "";
      gsap.to(panel, {
        y: "-100%",
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => gsap.set(panel, { clearProps: "transform" }),
      });
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (hideNav) return null;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-base/70 backdrop-blur-md border-b border-line/10"
            : "bg-transparent"
        }`}
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          className="flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2"
          aria-label="veyconnect — Startseite"
        >
          <Image
            src="/vey_logo_light.webp"
            alt="veyconnect"
            width={140}
            height={36}
            priority
            className="h-8 md:h-9 w-auto logo-light"
          />
          {/* Kein priority: die Dark-Variante ist im Default-Theme per CSS
              ausgeblendet — sonst laden wir ein Bild vorrangig vor, das
              die meisten Besucher nie zu sehen bekommen. */}
          <Image
            src="/vey_logo.webp"
            alt="veyconnect"
            width={140}
            height={36}
            className="h-8 md:h-9 w-auto logo-dark"
          />
        </Link>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-fg-muted hover:text-fg hover:bg-line/5 transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2 px-4 py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+4917624596941"
            data-track-location="header"
            className="ml-2 inline-flex items-center gap-2 text-fg-muted hover:text-fg hover:bg-line/5 transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2 px-4 py-2 whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
              <path
                d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z"
                fill="currentColor"
              />
            </svg>
            0176 24596941
          </a>
          <Link href="/kontakt" className="btn-tech btn-tech-sm ml-1">
            <span>Beratung</span>
            <span aria-hidden="true">→</span>
          </Link>
          <ThemeToggle className="ml-3" />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
            className="relative w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2 text-fg"
          >
            <span className={`block w-5 h-px bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        className={`fixed inset-0 z-40 md:hidden bg-base flex flex-col items-center justify-center gap-2 px-6 ${open ? "" : "pointer-events-none -translate-y-full"}`}
        aria-hidden={!open}
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            ref={(el) => (itemsRef.current[i] = el)}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold tracking-tight text-fg py-3 hover:text-[#9162a4] transition-colors focus:outline-none focus-visible:text-[#9162a4]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          ref={(el) => (itemsRef.current[links.length] = el)}
          href="/kontakt"
          onClick={() => setOpen(false)}
          className="btn-tech btn-tech-solid mt-6"
        >
          <span>Beratung anfragen</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
