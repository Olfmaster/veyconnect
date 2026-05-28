"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import HeroFX from "./HeroFX";

const coreServices = [
  {
    id: "01",
    title: "Smarte Sicherheits­integration",
    desc: "UniFi, KNX, AJAX und Cloud — alles aus einer Hand vernetzt und zentral steuerbar.",
    image: "/smart-sicherheitsintegration.webp",
    href: "/leistungen/smart-home",
  },
  {
    id: "02",
    title: "Einbruchschutz & Videoüberwachung",
    desc: "AJAX-Funkalarm, 4K-Kameras von Dahua, HIK Vision, Mobotix — bis Thermal- und Telezoom.",
    image: "/einbruch-ueberwachungssystem.webp",
    href: "/leistungen/einbruchschutz",
  },
  {
    id: "03",
    title: "Brandschutz & Elektroschutz",
    desc: "Funk-Rauchmeldernetz, FI-Schalter, Überspannungsschutz — normgerecht & versichert.",
    image: "/smoke-detector-and-remotes-on-blueprint.webp",
    href: "/leistungen/brandschutz",
  },
  {
    id: "04",
    title: "Zutrittskontrolle & Türsysteme",
    desc: "Siedle & Doorbird Sprechanlagen, Fingerprint, Transponder, Torantriebe.",
    image: "/tuersysteme.webp",
    href: "/leistungen/zutrittskontrolle",
  },
];

export default function Hero() {
  const containerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const root = containerRef.current;
      if (!root) return;
      const lines = root.querySelectorAll("[data-reveal]");
      const cards = cardsRef.current.filter(Boolean);

      gsap.set(lines, { yPercent: 110 });
      gsap.set([eyebrowRef.current, subRef.current, ctaRef.current], { autoAlpha: 0, y: 20 });
      gsap.set(cards, { autoAlpha: 0, y: 30 });

      [eyebrowRef.current, headlineRef.current, subRef.current, ctaRef.current]
        .filter(Boolean)
        .forEach((el) => el.setAttribute("data-ready", "1"));
      cards.forEach((el) => el.setAttribute("data-ready", "1"));

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.5 })
        .to(lines, { yPercent: 0, duration: 0.75, stagger: 0.1 }, "-=0.2")
        .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to(cards, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-start text-center px-6 md:px-10 pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden text-white bg-[#050505]"
    >
      <HeroFX />

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl">
        {/* eyebrow with Ajax certified badge */}
        <p
          ref={eyebrowRef}
          className="vc-pre-reveal label-mono inline-flex items-center gap-3 text-[#9162a4] mb-8 px-3 py-1.5 border border-[#9162a4]/30 rounded-full bg-[#9162a4]/5"
        >
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] animate-pulse" />
          Zertifizierter Premium-Partner von AJAX Systems
        </p>

        <h1
          ref={headlineRef}
          className="vc-pre-reveal text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] leading-[0.95] max-w-5xl"
        >
          <span className="block overflow-hidden pb-[0.12em]">
            <span data-reveal className="block">
              Intelligente Sicherheits&shy;systeme
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span data-reveal className="block text-[#9162a4]">
              für Zuhause &amp; Unternehmen.
            </span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="vc-pre-reveal mt-8 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          VeyConnect entwickelt moderne Lösungen für Einbruchschutz,
          Videoüberwachung, Zutrittskontrolle und Smart Home — von der
          Beratung bis zur Installation bis zur laufenden Betreuung, alles
          aus einer Hand.
        </p>

        <div
          ref={ctaRef}
          className="vc-pre-reveal mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/kontakt" className="btn-tech btn-tech-solid">
            <span>Kostenlose Sicherheitsberatung</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/leistungen" className="btn-tech">
            <span>Leistungen entdecken</span>
          </Link>
        </div>

        {/* Kernleistungen — 4 cards under headline */}
        <div className="relative mt-16 md:mt-20 w-full">
          <div className="flex items-end justify-between mb-5 px-1">
            <p className="label-mono text-zinc-500">Kernleistungen / 04</p>
            <Link
              href="/leistungen"
              className="label-mono text-zinc-400 hover:text-[#9162a4] transition-colors inline-flex items-center gap-2"
            >
              alle ansehen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {coreServices.map((s, i) => (
              <Link
                key={s.id}
                href={s.href}
                ref={(el) => (cardsRef.current[i] = el)}
                className="vc-pre-reveal group relative block text-left rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c] hover:border-[#9162a4]/60 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 24vw, (min-width:640px) 48vw, 92vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 label-mono text-[#9162a4]/90">
                    {s.id}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight leading-snug text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-1 label-mono text-[#9162a4] inline-flex items-center gap-2 transition-transform duration-300 origin-left group-hover:scale-110"
                  >
                    Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 label-mono text-zinc-600 z-10"
        aria-hidden="true"
      >
        <span>scrollen</span>
        <span className="block w-px h-8 bg-gradient-to-b from-zinc-700 to-[#9162a4]" />
      </div>
    </section>
  );
}
