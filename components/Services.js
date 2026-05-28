"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const services = [
  {
    number: "01",
    slug: "einbruchschutz",
    title: "Einbruch- & Überwachungssysteme",
    description:
      "Funkbasierte AJAX-Anlagen, hochauflösende Kameras von HIK Vision, Dahua und Mobotix — bis hin zur Thermalsicht und optischem Zoom für weite Strecken.",
    bullets: [
      "AJAX Alarmanlagen & Sensorik",
      "Video­überwachung 4K + Thermal",
      "Bewegungs-, Glasbruch- & Gasmelder",
      "Hausnotrufsysteme",
    ],
    image: "/einbruch-ueberwachungssystem.webp",
  },
  {
    number: "02",
    slug: "brandschutz",
    title: "Brandschutz & Gefahrenprävention",
    description:
      "Vernetzte Rauchmelder, FI-Schutzschalter, Überspannungsschutz und Elektroinstallations-Prüfung — normgerecht und versicherungskonform.",
    bullets: [
      "Funk-Rauchmeldernetz",
      "FI-Schutzschalter & ÜSS",
      "E-Check nach DIN VDE",
      "Altbau-Modernisierung",
    ],
    image: "/smoke-detector-and-remotes-on-blueprint.webp",
  },
  {
    number: "03",
    slug: "zutrittskontrolle",
    title: "Zutrittskontrolle & Gebäudesteuerung",
    description:
      "Sprechanlagen von Siedle und Doorbird, elektronische Zutrittskontrolle mit Fingerprint, Transponder oder App. Torantriebe und Schließanlagen integriert.",
    bullets: [
      "Video-Türsprechanlagen",
      "Fingerprint / Transponder / App",
      "Elektronische Schließanlagen",
      "Torantriebe",
    ],
    image: "/tuersysteme.webp",
  },
  {
    number: "04",
    slug: "altbau",
    title: "Sicherheitsmodernisierung & Altbau",
    description:
      "Marode Elektroinstallationen, fehlende Normprüfung, ungesicherte Stromkreise — wir machen Bestandsgebäude wieder safe. Marktlücke und unser Spezialgebiet.",
    bullets: [
      "Normprüfung & Befundung",
      "Nachrüstung Bestandsbauten",
      "Absicherung alter Stromkreise",
      "Versicherungstaugliche Dokumentation",
    ],
    image: "/altbau.webp",
  },
  {
    number: "05",
    slug: "smart-home",
    title: "Smarte Sicherheitsintegration",
    description:
      "Mehrere Systeme zu einer Lösung verknüpft — UniFi-Netzwerk, KNX, smarte Türschlösser, Präsenz­simulation. Inkl. Internet, Starlink und 5G-Verstärkung für Tiefgaragen oder abgelegene Objekte.",
    bullets: [
      "UniFi-Netzwerk & Video",
      "Smarte Türschlösser",
      "Richtfunk · Starlink · 5G/LTE",
      "Präsenz­simulation & Szenen",
    ],
    image: "/smart-sicherheitsintegration.webp",
  },
];

export default function Services({ showHeader = true }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll("[data-anim]"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
          }
        );
      }

      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leistungen"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#050505] text-white overflow-hidden border-b border-white/5"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />

      {showHeader && (
        <div ref={headerRef} className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 mb-14">
          <p data-anim className="md:col-span-3 label-mono text-[#9162a4]">
            / Leistungen
          </p>
          <h2 data-anim className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
            Sicherheitslösungen <span className="text-[#9162a4]">aus einer Hand.</span>
          </h2>
        </div>
      )}

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {services.map((service, i) => (
          <Link
            key={service.number}
            href={`/leistungen/${service.slug}`}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#9162a4]/60 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <span className="absolute top-4 left-5 label-mono text-[#9162a4]">
                {service.number}
              </span>
            </div>
            <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white leading-snug">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-500 pt-3 border-t border-white/5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#9162a4]" />
                    {b}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden="true"
                className="mt-auto pt-4 label-mono text-[#9162a4] inline-flex items-center gap-2 transition-transform duration-300 origin-left group-hover:scale-110"
              >
                Details
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}

        <article className="relative rounded-2xl border border-dashed border-[#9162a4]/30 bg-[#0c0c0c] flex flex-col gap-4 p-7 md:p-8 lg:col-span-1 sm:col-span-2 lg:col-auto">
          <span className="label-mono text-[#9162a4]">/ Elektro</span>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
            Klassische Elektroinstallation?
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Für reine Elektroprojekte vermitteln wir an unseren langjährigen
            Partnerbetrieb. So bleibt VeySecure fokussiert auf das, was wir am
            besten können — und Sie bekommen trotzdem alles aus einer Hand.
          </p>
          <Link
            href="/kontakt"
            className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#9162a4] hover:text-white transition-colors"
          >
            Partner anfragen <span aria-hidden="true">→</span>
          </Link>
        </article>
      </div>
    </section>
  );
}

export { services };
