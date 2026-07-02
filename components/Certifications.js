"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const certificates = [
  {
    tier: "Baseline",
    title: "Intrusion",
    system: "Einbruchmeldetechnik",
    desc: "Grundzertifizierung für AJAX-Einbruchmeldetechnik — Planung, Installation und Konfiguration nach Herstellerstandard.",
    number: "1782731007005",
    file: "/ajax-zertifikat-baseline-intrusion.pdf",
  },
  {
    tier: "Superior",
    title: "Wireless Intrusion",
    system: "AJAX Jeweller — funkbasiert",
    desc: "Fortgeschrittene Zertifizierung für die funkbasierte AJAX-Jeweller-Technologie — die Basis unserer kabellosen Anlagen.",
    number: "1782731066318",
    file: "/ajax-zertifikat-superior-wireless-intrusion.pdf",
  },
  {
    tier: "Superior",
    title: "Wired Intrusion",
    system: "AJAX Fibra — kabelgebunden",
    desc: "Fortgeschrittene Zertifizierung für die kabelgebundene AJAX-Fibra-Technologie — für Objekte mit fester Verkabelung.",
    number: "1782734663366",
    file: "/ajax-zertifikat-superior-wired-intrusion.pdf",
  },
];

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-anim]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="zertifizierungen"
      className="relative bg-base text-fg py-28 md:py-36 px-6 md:px-10 overflow-hidden border-t border-line/5"
      aria-label="Zertifizierungen der Ajax Academy"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
      <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <p data-anim className="md:col-span-3 label-mono text-[#9162a4]">
            / Zertifizierungen
          </p>
          <div className="md:col-span-9">
            <h2 data-anim className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Geschult, geprüft,{" "}
              <span className="text-[#9162a4]">zertifiziert.</span>
            </h2>
            <p data-anim className="mt-5 max-w-2xl text-fg-muted leading-relaxed">
              Jan Vey ist von der{" "}
              <span className="text-fg font-medium">Ajax Academy</span>{" "}
              geprüfte/r Ajax-Spezialist/in. Die offiziellen Zertifikate
              belegen unsere Herstellerqualifikation — nachweisbar und aktuell.
            </p>
          </div>
        </div>

        {/* Certificate cards */}
        <div data-anim className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <a
              key={c.number}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col tech-corners rounded-2xl border border-line/10 bg-gradient-to-br from-surface via-surface to-base p-6 md:p-7 hover:border-[#9162a4]/50 transition-colors overflow-hidden"
            >
              <span className="tc-tl" aria-hidden="true" />
              <span className="tc-br" aria-hidden="true" />

              <div className="flex items-center justify-between mb-6">
                <span className="label-mono text-fg-faint">Ajax Academy</span>
                <span className="label-mono px-2.5 py-1 rounded-full border border-[#9162a4]/30 bg-[#9162a4]/5 text-[#9162a4]">
                  {c.tier}
                </span>
              </div>

              {/* Seal */}
              <span className="mb-5 w-11 h-11 rounded-full bg-[#9162a4]/10 border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 2l2.4 1.7 2.9-.3 1.2 2.7 2.5 1.5-.6 2.9L22 15l-2 2.1.1 2.9-2.8.9-1.6 2.4L12 22l-2.7 1.3-1.6-2.4-2.8-.9.1-2.9L2 15l1.9-2.3-.6-2.9 2.5-1.5L7 5.4l2.9.3L12 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-fg leading-tight">
                {c.title}
              </h3>
              <p className="mt-1 label-mono text-[#9162a4]">{c.system}</p>

              <p className="mt-4 text-sm text-fg-muted leading-relaxed">
                {c.desc}
              </p>

              <div className="mt-6 pt-5 border-t border-line/5 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-fg">Jan Vey · veyconnect</p>
                  <p className="mt-0.5 label-mono text-fg-faint">Nr. {c.number}</p>
                </div>
                <span className="shrink-0 label-mono text-[#9162a4] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-[gap]">
                  PDF
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
