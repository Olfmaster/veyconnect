"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  { value: 2023, label: "Gegründet", sub: "regional verwurzelt im Rhein-Main" },
  { value: 5.0, decimals: 1, label: "Google-Bewertung", sub: "über 30 Rezensionen" },
  { value: 24, suffix: "/7", label: "Erreichbarkeit", sub: "im Notfall" },
];

const usps = [
  {
    title: "Elektromeisterbetrieb mit Sicherheitsfokus",
    text: "Andere verkaufen Alarmanlagen. Wir verstehen, was hinter der Wand passiert — vom FI-Schalter bis zur Cloud-Verschlüsselung.",
  },
  {
    title: "Zertifizierter AJAX-Partner",
    text: "Direkter Herstellerzugang, neueste Firmware, originale Komponenten und Premium-Support für Sie als Endkundin oder Endkunde.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Beratung, Planung, Installation und Wartung kommen vom selben Team. Keine Schnittstellen, kein Verantwortungs-Ping-Pong.",
  },
  {
    title: "Spezialisiert auf Altbau & Bestand",
    text: "Wir sind groß im Bestandsbau — wo Standard-Anbieter passen und am Baumarkt-Set scheitern.",
  },
];

const badges = [
  "Ajax Systems Partner",
  "Zertifizierter Fachbetrieb",
  "VDS-Konforme Systeme",
  "DSGVO-konforme Videoüberwachung",
  "DIN VDE 0701/0702",
];

export default function Trust() {
  const sectionRef = useRef(null);
  const numRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-anim]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const obj = { v: stat.value > 100 ? stat.value - 100 : 0 };
        gsap.to(obj, {
          v: stat.value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = stat.decimals
              ? obj.v.toFixed(stat.decimals).replace(".", ",")
              : Math.round(obj.v).toString();
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vertrauen"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-white text-zinc-900 overflow-hidden border-y border-zinc-200"
    >
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <p data-anim className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-violet-600">
            Vertrauen
          </p>
          <h2 data-anim className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight">
            Kompetenz, auf die
            <br />
            Sie <span className="italic font-light text-violet-600">bauen können.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-anim
              className="bg-white p-8 md:p-10 flex flex-col gap-2"
            >
              <p className="text-5xl md:text-6xl font-semibold tracking-tight tabular-nums text-zinc-900">
                <span ref={(el) => (numRefs.current[i] = el)}>0</span>
                {stat.suffix && <span className="text-violet-600">{stat.suffix}</span>}
              </p>
              <p className="text-sm font-medium text-zinc-700 mt-2">{stat.label}</p>
              <p className="text-xs text-zinc-500">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {usps.map((usp) => (
            <article
              key={usp.title}
              data-anim
              className="border border-zinc-200 rounded-2xl p-7 md:p-8 hover:border-violet-300 transition-colors"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-600">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{usp.title}</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed pl-12">{usp.text}</p>
            </article>
          ))}
        </div>

        <ul data-anim className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <li
              key={badge}
              className="text-[11px] uppercase tracking-[0.2em] px-4 py-2 border border-zinc-200 rounded-full text-zinc-700 bg-white"
            >
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-violet-600 mr-2 align-middle" />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
