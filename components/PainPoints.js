"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const points = [
  {
    title: "Einbruch & Vandalismus",
    text: "Jeder dritte Einbruch passiert tagsüber — wenn keiner zu Hause ist. Veraltete Schließtechnik ist in 60 Sekunden überwunden.",
  },
  {
    title: "Veraltete Schließtechnik",
    text: "Alte Zylinder und Standardbeschläge sind in 60 Sekunden überwunden. Bestandsbauten brauchen ein modernes Sicherheitskonzept — keinen Baumarkt-Beschlag.",
  },
  {
    title: "Fehlender Brandschutz",
    text: "Ohne normgerechte, vernetzte Rauchmelder bleibt im Brandfall wertvolle Zeit zur Warnung ungenutzt — Personenschäden drohen, gerade in Bestandsbauten.",
  },
  {
    title: "Fragmentierte Systeme",
    text: "Alarmanlage hier, Kamera dort, Türsprechanlage vom Drittanbieter — Insellösungen sind teuer in Wartung und schwach in der Wirkung.",
  },
  {
    title: "Haftungsrisiken im Gewerbe",
    text: "DIN-, VDE- und IEC-Verstöße führen zu Maschinenstillstand, Betriebsunterbrechung und persönlicher Haftung des Geschäftsführers.",
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
      className="relative bg-base text-fg py-28 md:py-36 px-6 md:px-10 overflow-hidden border-b border-line/5"
      aria-label="Risiken und Pain-Points"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <p data-anim className="md:col-span-3 label-mono text-[#9162a4]">
            / Einbruchschutz &amp; Risiken
          </p>
          <h2 data-anim className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
            Wer Einbruchschutz aufschiebt, <span className="text-[#9162a4]">zahlt später doppelt.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line/5 border border-line/5 rounded-2xl overflow-hidden">
          {points.map((point, i) => (
            <article
              key={point.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-surface p-7 md:p-9 flex flex-col gap-4 hover:bg-surface-2 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-[#9162a4]/30 bg-[#9162a4]/5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#9162a4]">
                  <path d="M12 2 2 21h20L12 2Zm0 7v6m0 2.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-fg">{point.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{point.text}</p>
            </article>
          ))}
        </div>

        <p data-anim className="mt-12 max-w-2xl text-base md:text-lg text-fg-muted leading-relaxed">
          Wer bei veyconnect kauft, kauft <span className="text-fg font-medium">Risikominimierung</span> —
          fachlich geplant von einem Sicherheitstechnik-Fachbetrieb, der ganzheitlich
          denkt: vom Sensor an der Tür bis zur Cloud, mit Elektro-Partner für alles
          dazwischen.
        </p>
      </div>
    </section>
  );
}
