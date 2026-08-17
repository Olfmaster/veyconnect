"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const features = [
  {
    title: "Einbruchschutz & Sensorik",
    text: "AJAX-Funkalarm mit Bewegungs-, Glasbruch- und Öffnungsmeldern: eine Zentrale für das ganze Objekt.",
  },
  {
    title: "Videoüberwachung",
    text: "4K-Kameras von Dahua, HIK Vision und Mobotix, direkt in dieselbe App eingebunden, DSGVO-konform.",
  },
  {
    title: "EN-54-Brandwarnung",
    text: "Kabellose Brandwarn- und Alarmanlage nach EN 54: Rauch-, Wärme- und Kombimelder für kommerzielle Objekte.",
  },
];

const certs = [
  "EN 54-2",
  "EN 54-3",
  "EN 54-4",
  "EN 54-5",
  "EN 54-7",
  "EN 54-13",
  "EN 54-23",
  "EN 50131 Grade 2",
];

export default function EN54Spotlight() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-anim]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        sectionRef.current.querySelector("[data-anim-img]"),
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ajax-en54"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-base text-fg overflow-hidden border-b border-line/5"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
      <div aria-hidden="true" className="absolute inset-0 lime-glow" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <p data-anim className="label-mono text-[#9162a4] mb-6">
            / AJAX EN54 Line
          </p>
          <h2
            data-anim
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-xl"
          >
            Einbruch, Video und{" "}
            <span className="text-[#9162a4]">EN-54-Brandschutz</span> in einem
            System.
          </h2>
          <p
            data-anim
            className="mt-6 text-fg-muted leading-relaxed max-w-xl"
          >
            Mit der kabellosen{" "}
            <span className="text-fg font-medium">AJAX EN54 Line</span> bündeln
            wir Einbruchmeldung, Videoüberwachung und{" "}
            <span className="text-fg font-medium">
              EN-54-zertifizierte Brandwarnung
            </span>{" "}
            in einer Anlage, zentral gesteuert über eine App. Funkbasiert,
            schnell installiert und auch im Bestand nachrüstbar, ohne Wände
            aufzustemmen.
          </p>

          <ul data-anim className="mt-8 space-y-4 max-w-xl">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <span className="mt-1 w-7 h-7 shrink-0 rounded-full bg-[#9162a4]/10 border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="m5 12 5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {f.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <ul data-anim className="mt-8 flex flex-wrap gap-2">
            {certs.map((c) => (
              <li
                key={c}
                className="label-mono px-3 py-1.5 border border-line/10 rounded-full text-fg-muted bg-surface"
              >
                {c}
              </li>
            ))}
          </ul>

          <div data-anim className="mt-10 flex flex-wrap gap-4">
            <Link href="/leistungen/brandschutz" className="btn-tech btn-tech-solid">
              <span>Brandschutz im Detail</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/kontakt" className="btn-tech">
              <span>Beratung anfragen</span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div
            data-anim-img
            className="tech-corners relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border border-line/10 bg-ink"
          >
            <span className="tc-tl" aria-hidden="true" />
            <span className="tc-br" aria-hidden="true" />
            <Image
              src="/ajax-en54-line.webp"
              alt="AJAX EN54 Line: kabellose Brandwarn- und Alarmanlage mit EN-54-Zertifizierung für kommerzielle Objekte"
              fill
              sizes="(min-width:1024px) 28rem, (min-width:640px) 28rem, 92vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
