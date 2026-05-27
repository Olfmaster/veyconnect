"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#vertrauen", label: "Vertrauen" },
  { href: "/#region", label: "Region" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.4 }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;
    const items = itemsRef.current.filter(Boolean);
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(panelRef.current, { y: "-100%" }, { y: "0%", duration: 0.55, ease: "power3.out" });
      gsap.fromTo(items, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out", delay: 0.15 });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-colors duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-zinc-200 text-zinc-900"
            : "bg-transparent text-white"
        }`}
        aria-label="Hauptnavigation"
      >
        <Link
          href="/#top"
          className="flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2"
          aria-label="veyconnect — Startseite"
        >
          <Image
            src="/vey_logo.webp"
            alt="veyconnect"
            width={140}
            height={36}
            priority
            className={`h-8 md:h-9 w-auto transition-[filter] ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-violet-500 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 px-0.5 ${scrolled ? "text-zinc-700" : "text-slate-200"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-600 text-white rounded-full text-xs font-medium hover:bg-violet-500 transition-colors"
          >
            Beratung anfragen
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden relative w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 ${scrolled ? "text-zinc-900" : "text-white"}`}
        >
          <span className={`block w-5 h-px bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        className={`fixed inset-0 z-40 md:hidden bg-[#0e0b1f] flex flex-col items-center justify-center gap-2 px-6 ${open ? "" : "pointer-events-none -translate-y-full"}`}
        aria-hidden={!open}
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            ref={(el) => (itemsRef.current[i] = el)}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold tracking-tight text-white py-3 hover:text-violet-300 transition-colors focus:outline-none focus-visible:text-violet-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          ref={(el) => (itemsRef.current[links.length] = el)}
          href="/#kontakt"
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-violet-600 text-white rounded-full text-sm font-medium hover:bg-violet-500 transition-colors"
        >
          Beratung anfragen
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
