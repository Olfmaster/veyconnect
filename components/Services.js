"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const services = [
  {
    number: "01",
    title: "Einbruch- & Überwachungssysteme",
    description:
      "Funkbasierte AJAX-Anlagen, hochauflösende Kameras von HIK Vision, Dahua und Mobotix — bis hin zur Thermalsicht und optischem Zoom für weite Strecken.",
    bullets: [
      "AJAX Alarmanlagen & Sensorik",
      "Video­überwachung 4K + Thermal",
      "Bewegungs-, Glasbruch- & Gasmelder",
      "Hausnotrufsysteme",
    ],
    image: "/einbruchschutz.webp",
  },
  {
    number: "02",
    title: "Brandschutz & Gefahrenprävention",
    description:
      "Vernetzte Rauchmelder, FI-Schutzschalter, Überspannungsschutz und Elektroinstallations-Prüfung — normgerecht und versicherungskonform.",
    bullets: [
      "Funk-Rauchmeldernetz",
      "FI-Schutzschalter & ÜSS",
      "E-Check nach DIN VDE",
      "Altbau-Modernisierung",
    ],
    image: "/brandschutz_Leistung.webp",
  },
  {
    number: "03",
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
    title: "Sicherheitsmodernisierung & Altbau",
    description:
      "Marode Elektroinstallationen, fehlende Norm­prüfung, ungesicherte Stromkreise — wir machen Bestandsgebäude wieder safe. Marktlücke und unser Spezialgebiet.",
    bullets: [
      "Norm­prüfung & Befundung",
      "Nachrüstung Bestandsbauten",
      "Absicherung alter Stromkreise",
      "Versicherungstaugliche Dokumentation",
    ],
    image: "/altbau.webp",
  },
  {
    number: "05",
    title: "Smarte Sicherheitsintegration",
    description:
      "Mehrere Systeme zu einer Lösung verknüpft — UniFi-Netzwerk, KNX, smarte Türschlösser, Präsenz­simulation. Inkl. Internet, Starlink und 5G-Verstärkung für Tiefgaragen oder abgelegene Objekte.",
    bullets: [
      "UniFi-Netzwerk & Video",
      "Smarte Türschlösser",
      "Richtfunk · Starlink · 5G/LTE",
      "Präsenz­simulation & Szenen",
    ],
    image: "/smarthome.webp",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.querySelectorAll("[data-anim]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leistungen"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-paper text-zinc-900 overflow-hidden"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-60" />

      <div ref={headerRef} className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 mb-16">
        <p data-anim className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-violet-600">
          Leistungen · VeySecure
        </p>
        <h2 data-anim className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight text-zinc-900">
          Sicherheitslösungen
          <br />
          aus <span className="italic font-light text-violet-600">einer Hand.</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, i) => (
          <article
            key={service.number}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col hover:border-violet-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-5 text-[10px] font-mono uppercase tracking-[0.25em] text-violet-700 bg-white/85 backdrop-blur px-2 py-1 rounded">
                {service.number}
              </span>
            </div>
            <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-500 mt-auto pt-3 border-t border-zinc-100">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-violet-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </article>
        ))}

        {/* Elektro-Verweis-Karte: Strategiekorrektur — Elektrobereich raus, Verweis auf Partner */}
        <article className="relative rounded-2xl border border-dashed border-violet-300 bg-violet-50/60 flex flex-col gap-4 p-7 md:p-8 lg:col-span-1 sm:col-span-2 lg:col-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-violet-700">
            Elektro
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
            Klassische Elektroinstallation?
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed">
            Für reine Elektroprojekte vermitteln wir an unseren langjährigen
            Partnerbetrieb. So bleibt VeySecure fokussiert auf das, was wir am
            besten können — und Sie bekommen trotzdem alles aus einer Hand.
          </p>
          <a
            href="#kontakt"
            className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900 transition-colors"
          >
            Partner anfragen <span aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  );
}
