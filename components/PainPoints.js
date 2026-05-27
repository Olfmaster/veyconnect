"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const points = [
  {
    title: "Einbruch & Vandalismus",
    text: "Jeder dritte Einbruch passiert tagsüber — wenn keiner zu Hause ist. Veraltete Schließtechnik ist in 60 Sekunden überwunden.",
  },
  {
    title: "Veraltete Elektroinstallationen",
    text: "Marode Leitungen sind Brandrisiko Nr. 1 in deutschen Altbauten. Ein Schaden zieht schnell Folgekosten in sechsstelliger Höhe nach sich.",
  },
  {
    title: "Fehlender Brandschutz",
    text: "Ohne normgerechte Rauchmelder und Überspannungsschutz drohen Personenschäden und Versicherungsausschluss im Schadensfall.",
  },
  {
    title: "Komplexe, fragmentierte Systeme",
    text: "Alarmanlage hier, Kamera dort, Türsprechanlage vom Drittanbieter — Insellösungen sind teuer in Wartung und schwach in der Wirkung.",
  },
  {
    title: "Haftungsrisiken im Gewerbe",
    text: "DIN-, VDE- und IEC-Verstöße führen zu Versicherungslücken, Maschinenstillstand und persönlicher Haftung des Geschäftsführers.",
  },
  {
    title: "Unsicherheit bei Altbau-Sanierung",
    text: "Wer alte Substanz modernisiert, braucht ein Sicherheitskonzept — nicht das Standard-Sortiment vom Baumarkt.",
  },
];

export default function PainPoints() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0e0b1f] text-white py-32 md:py-40 px-6 md:px-10 overflow-hidden border-b border-violet-950/40"
      aria-label="Risiken und Pain-Points"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <p data-anim className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-violet-400">
            Risiken
          </p>
          <h2 data-anim className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight">
            Wer Sicherheit aufschiebt,
            <br />
            <span className="italic font-light text-violet-400">zahlt später doppelt.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-violet-950/40 border border-violet-950/40 rounded-2xl overflow-hidden">
          {points.map((point, i) => (
            <article
              key={point.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#0e0b1f] p-8 md:p-10 flex flex-col gap-4 hover:bg-violet-950/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-violet-600/15 border border-violet-500/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-violet-400">
                  <path d="M12 2 2 21h20L12 2Zm0 7v6m0 2.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{point.text}</p>
            </article>
          ))}
        </div>

        <p data-anim className="mt-12 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
          Wer bei VeySecure kauft, kauft <span className="text-white font-medium">Risikominimierung</span> —
          fachlich geplant von einem Elektromeisterbetrieb, der Sicherheit ganzheitlich
          versteht: von der Leitung in der Wand bis zur Cloud.
        </p>
      </div>
    </section>
  );
}
