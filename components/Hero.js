"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";
import HeroFX from "./HeroFX";

export default function Hero() {
  const containerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, { type: "lines,words" });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // shorter intro per "Animation am Anfang zu lang" feedback
      tl.fromTo(eyebrowRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
        .fromTo(
          split.words,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.03 },
          "-=0.2"
        )
        .fromTo(subRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
        .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
        .fromTo(badgeRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-24 overflow-hidden text-white"
      style={{ background: "#0e0b1f" }}
    >
      <HeroFX />

      <div className="relative z-10 flex flex-col items-center">
        <p
          ref={eyebrowRef}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-violet-300 mb-8"
        >
          VeySecure · Sicherheitswelt von veyconnect
        </p>
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl"
        >
          Sicherheit beginnt
          <br />
          <span className="italic font-light text-violet-400">bei der Basis.</span>
        </h1>
        <p
          ref={subRef}
          className="mt-10 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed"
        >
          Ganzheitliche Gebäudesicherheit auf elektrotechnischem Fundament —
          professionelle Planung, normgerechte Integration und Umsetzung mit
          modernster Technik. Für Unternehmen und Eigenheime im Rhein-Main-Gebiet.
        </p>
        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 text-white rounded-full text-sm font-medium hover:bg-violet-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0b1f] shadow-lg shadow-violet-600/30"
          >
            Kostenlose Sicherheitsberatung
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0b1f]"
          >
            Leistungen entdecken
          </a>
        </div>
        <p ref={badgeRef} className="mt-10 flex items-center gap-2 text-xs text-slate-400">
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Zertifizierter Partner von <span className="text-white font-medium">AJAX Systems</span>
        </p>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500 z-10"
        aria-hidden="true"
      >
        <span>scrollen</span>
        <span className="block w-px h-10 bg-gradient-to-b from-slate-700 to-violet-400" />
      </div>
    </section>
  );
}
