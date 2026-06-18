"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import ServiceDetailPanel from "@/components/ServiceDetailPanel";

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
    detail: {
      cat: "Einbruch & Video",
      lead: "AJAX-Funkalarm, 4K-Videoüberwachung von Dahua, HIK Vision und Mobotix — bis hin zu Thermalsicht und optischem Telezoom für Außenanlagen, Logistik und weitläufige Objekte.",
      tags: ["AJAX Premium-Partner", "4K + Thermal", "VDS-konform", "DSGVO-konform"],
      note: "Als zertifizierter AJAX-Premium-Partner haben wir direkten Herstellerzugang, neueste Firmware und ausschließlich Original-Komponenten.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "AJAX Alarmanlagen", d: "Funkbasiert, schnell installiert, batteriearm — als zertifizierter Premium-Partner direkt vom Hersteller." },
            { t: "Videoüberwachung 4K + Thermal", d: "Dahua, HIK Vision, Mobotix — auch Außenanlagen mit Telezoom und Wärmebild für absolute Dunkelheit." },
            { t: "Bewegungs-, Glasbruch- & Gasmelder", d: "Sensorik für jeden Anwendungsfall, eingebunden in eine zentrale App." },
            { t: "Hausnotrufsysteme", d: "Diskrete Notruflösungen für Privatpersonen und betreutes Wohnen." },
          ],
        },
      ],
    },
  },
  {
    number: "02",
    slug: "brandschutz",
    title: "Brandschutz & Gefahrenprävention",
    description:
      "EN-54-zertifizierte AJAX-Brandwarnanlagen, vernetzte Rauchmelder, CO- und Gasmelder — kabellos, geplant, installiert und dokumentiert nach Norm.",
    bullets: [
      "AJAX EN54 Line (kabellos)",
      "Funk-Rauchmeldernetz",
      "CO- & Gasmelder",
      "Konzept für Bestandsbauten",
    ],
    image: "/smoke-detector-and-remotes-on-blueprint.webp",
    detail: {
      cat: "Brandschutz",
      lead: "EN-54-zertifizierte AJAX-Brandwarnanlagen, vernetzte Rauchmelder, CO- und Gasmelder, Hausnotrufsysteme — kabellos, normgerecht installiert und vollständig dokumentiert.",
      tags: ["AJAX EN54 Line", "EN-54-zertifiziert", "Funkvernetzt", "Bestand & Altbau"],
      note: "Ohne normgerechte, vernetzte Rauchmelder bleibt im Brandfall wertvolle Zeit zur Warnung ungenutzt — Personenschäden drohen, gerade in Bestandsbauten.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "AJAX EN54 Line", d: "Kabellose, EN-54-zertifizierte Brandwarn- und Alarmanlage für kommerzielle Objekte — zentral über eine App gesteuert." },
            { t: "Funk-Rauchmeldernetz", d: "Alle Räume in einem Verbund — wenn einer auslöst, hören Sie es überall." },
            { t: "CO- & Gasmelder", d: "Frühwarnung vor Kohlenmonoxid und Gaslecks — vernetzt mit Alarm- und Hausautomation." },
            { t: "Hausnotrufsysteme", d: "Diskrete Notruflösungen für Privatpersonen, betreutes Wohnen und alleinarbeitende Personen." },
            { t: "Brandschutzkonzept Bestand", d: "Planung für Altbau und Bestand — abgestimmt auf vorhandene Substanz und örtliche Gegebenheiten." },
          ],
        },
      ],
    },
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
    detail: {
      cat: "Zutritt",
      lead: "Sprechanlagen von Siedle und Doorbird, elektronische Zutrittskontrolle mit Fingerprint, Transponder oder App. Torantriebe und Schließanlagen integriert.",
      tags: ["Siedle", "Doorbird", "Fingerprint / App", "Skalierbar"],
      note: "Vergessene oder kopierte Schlüssel sind ein unterschätztes Risiko — elektronische Zutrittssysteme lassen sich jederzeit zentral anpassen.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "Video-Türsprechanlagen", d: "Siedle, Doorbird & Co. — mit Smartphone-Anbindung, auch unterwegs immer im Bild." },
            { t: "Fingerprint / Transponder / App", d: "Vergessene Schlüssel adé — moderne Zutrittssysteme, individuell programmierbar." },
            { t: "Elektronische Schließanlagen", d: "Skalierbar für Mehrfamilienhäuser, Praxen, Werkstätten oder kleine Gewerbeobjekte." },
            { t: "Torantriebe & Außenanlagen", d: "Schiebetore, Drehflügel, Schranken — vernetzt mit der zentralen Steuerung." },
          ],
        },
      ],
    },
  },
  {
    number: "04",
    slug: "altbau",
    title: "Sicherheitsmodernisierung & Altbau",
    description:
      "Veraltete Schließtechnik, fehlende Sensorik, unsichere Außenanlagen — wir machen Bestandsgebäude sicherheitstechnisch wieder zeitgemäß. Marktlücke und unser Spezialgebiet.",
    bullets: [
      "Befundung & Sicherheitskonzept",
      "Nachrüstung Bestandsbauten",
      "Sensorik & Türsicherung",
      "Vollständige Anlagendokumentation",
    ],
    image: "/altbau.webp",
    detail: {
      cat: "Altbau & Bestand",
      lead: "Veraltete Schließtechnik, fehlende Sensorik, ungesicherte Außenanlagen — wir bringen Bestandsgebäude sicherheitstechnisch in die Gegenwart. Unser Spezialgebiet im Rhein-Main.",
      tags: ["Bestandsbau", "Funknachrüstung", "Ohne Bauchaos", "Dokumentiert"],
      note: "Funkbasierte Technik lässt sich im Bestand nachrüsten, ohne Wände aufzustemmen — schrittweise oder als Komplettpaket.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "Befundung & Sicherheitskonzept", d: "Was ist da überhaupt verbaut? Wir prüfen den Bestand und liefern einen klaren Maßnahmenkatalog." },
            { t: "Sensorik & Funkalarm im Bestand", d: "AJAX-Funkanlagen, Bewegungs-, Glasbruch- und Öffnungsmelder — schrittweise oder als Komplettpaket, ohne große Bauarbeiten." },
            { t: "Schließ- & Türsicherung", d: "Elektronische Zylinder, Mehrfachverriegelung, Video-Türsprechanlagen — Bestand erhalten, Sicherheit erhöhen." },
            { t: "Vollständige Dokumentation", d: "Anlagendokumentation, Konfiguration und Fotodokumentation — lückenlos nachvollziehbar, wenn Sie später Nachweise brauchen." },
          ],
        },
      ],
    },
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
    detail: {
      cat: "Smart Integration",
      lead: "Mehrere Systeme zu einer Lösung verknüpft — UniFi-Netzwerk, KNX, smarte Türschlösser, Präsenzsimulation. Inkl. Internet, Starlink und 5G-Verstärkung für Tiefgaragen oder abgelegene Objekte.",
      tags: ["UniFi", "KNX", "Starlink / 5G", "Eine App"],
      note: "Insellösungen sind teuer in der Wartung und schwach in der Wirkung — wir führen alles in einer zentralen Steuerung zusammen.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "UniFi-Netzwerk & Video", d: "Stabile Netzinfrastruktur als Fundament für Kameras, Türen, Heizung und mehr." },
            { t: "Smarte Türschlösser", d: "Schlüsselloser Zugang, Zeitfenster, Gäste-Codes — vom Privathaus bis zur Ferienwohnung." },
            { t: "Richtfunk · Starlink · 5G/LTE", d: "Für abgelegene Objekte, Tiefgaragen oder Baustellen — wir sorgen für stabile Verbindung." },
            { t: "Präsenzsimulation & Szenen", d: "Licht, Rollos und Geräte folgen einem realistischen Muster — auch wenn niemand zuhause ist." },
          ],
        },
      ],
    },
  },
];

export default function Services({ showHeader = true }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [openService, setOpenService] = useState(null);

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
      className="relative py-28 md:py-36 px-6 md:px-10 bg-base text-fg overflow-hidden border-b border-line/5"
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
          <article
            key={service.number}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative bg-surface border border-line/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#9162a4]/60 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-base">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
              <span className="absolute top-4 left-5 label-mono text-[#9162a4]">
                {service.number}
              </span>
            </div>
            <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-fg leading-snug">
                {service.title}
              </h3>
              <p className="text-fg-muted leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-1.5 text-xs text-fg-faint pt-3 border-t border-line/5">
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
                Details ansehen
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpenService(service)}
              aria-label={`${service.title} — Details ansehen`}
              aria-haspopup="dialog"
              className="absolute inset-0 z-10 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9162a4]"
            />
          </article>
        ))}

        <article className="relative rounded-2xl border border-dashed border-[#9162a4]/30 bg-surface flex flex-col gap-4 p-7 md:p-8 lg:col-span-1 sm:col-span-2 lg:col-auto">
          <span className="label-mono text-[#9162a4]">/ Elektro</span>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-fg">
            Elektroarbeiten nötig?
          </h3>
          <p className="text-sm text-fg-muted leading-relaxed">
            Für Elektroarbeiten arbeiten wir mit einem zertifizierten
            Elektromeister-Betrieb zusammen — Sie bekommen alles aus einer
            Hand, ohne Schnittstellenverlust.
          </p>
          <Link
            href="/kontakt"
            className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#9162a4] hover:text-fg transition-colors"
          >
            Partner anfragen <span aria-hidden="true">→</span>
          </Link>
        </article>
      </div>

      <ServiceDetailPanel service={openService} onClose={() => setOpenService(null)} />
    </section>
  );
}

export { services };
