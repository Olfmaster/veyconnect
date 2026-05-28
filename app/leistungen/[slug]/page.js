import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

const details = {
  einbruchschutz: {
    eyebrow: "/ 01 — Einbruchschutz",
    title: "Einbruch- &",
    accent: "Videoüberwachung.",
    intro:
      "AJAX-Funkalarm, 4K-Videoüberwachung von Dahua, HIK Vision und Mobotix — bis hin zu Thermalsicht und optischem Telezoom für Außenanlagen, Logistik und weitläufige Objekte.",
    image: "/einbruch-ueberwachungssystem.webp",
    image2: "/einbruchschutz.webp",
    metaTitle: "Einbruchschutz & Videoüberwachung",
    metaDesc:
      "AJAX Funkalarm, 4K-Videoüberwachung, Bewegungsmelder und Glasbruchsensoren — geplant, installiert und gewartet von veyconnect.",
    bullets: [
      {
        title: "AJAX Alarmanlagen",
        text: "Funkbasiert, schnell installiert, batterie­arm — als zertifizierter Premium-Partner direkt vom Hersteller.",
      },
      {
        title: "Video­überwachung 4K + Thermal",
        text: "Dahua, HIK Vision, Mobotix — auch Außenanlagen mit Telezoom und Wärmebild für absolute Dunkelheit.",
      },
      {
        title: "Bewegungs-, Glasbruch- & Gasmelder",
        text: "Sensorik für jeden Anwendungsfall, eingebunden in eine zentrale App.",
      },
      {
        title: "Hausnotrufsysteme",
        text: "Diskrete Notruflösungen für Privatpersonen und betreutes Wohnen.",
      },
    ],
    next: { slug: "brandschutz", label: "Brandschutz & Elektroschutz" },
  },
  brandschutz: {
    eyebrow: "/ 02 — Brandschutz",
    title: "Brandschutz &",
    accent: "Elektroschutz.",
    intro:
      "Vernetzte Rauchmelder, FI-Schutzschalter, Überspannungsschutz und Elektroinstallations-Prüfung — normgerecht, versicherungs­konform und dokumentiert.",
    image: "/smoke-detector-and-remotes-on-blueprint.webp",
    image2: "/brandschutz.webp",
    metaTitle: "Brandschutz & Gefahrenprävention",
    metaDesc:
      "Funk-Rauchmeldernetz, FI-Schutzschalter, Überspannungsschutz und E-Check nach DIN VDE für Privat- und Gewerbeobjekte im Rhein-Main-Gebiet.",
    bullets: [
      {
        title: "Funk-Rauchmeldernetz",
        text: "Alle Räume in einem Verbund — wenn einer auslöst, hören Sie es überall.",
      },
      {
        title: "FI-Schutzschalter & ÜSS",
        text: "Personenschutz und Schutz Ihrer Elektronik vor Überspannungs- und Blitzschäden.",
      },
      {
        title: "E-Check nach DIN VDE",
        text: "Normgerechte Prüfung Ihrer Elektroinstallation — die Versicherung verlangt sie. Wir liefern sie.",
      },
      {
        title: "Altbau-Modernisierung",
        text: "Marode Leitungen, fehlende Erdung — wir machen Bestandsbauten wieder safe.",
      },
    ],
    next: { slug: "zutrittskontrolle", label: "Zutrittskontrolle & Türsysteme" },
  },
  zutrittskontrolle: {
    eyebrow: "/ 03 — Zutritt",
    title: "Zutrittskontrolle &",
    accent: "Türsysteme.",
    intro:
      "Sprechanlagen von Siedle und Doorbird, elektronische Zutrittskontrolle mit Fingerprint, Transponder oder App. Torantriebe und Schließanlagen integriert.",
    image: "/tuersysteme.webp",
    image2: "/zutritt-system.webp",
    metaTitle: "Zutrittskontrolle & Türsysteme",
    metaDesc:
      "Video-Türsprechanlagen, elektronische Schließanlagen, Fingerprint- und Transpondersysteme sowie Torantriebe — installiert von veyconnect.",
    bullets: [
      {
        title: "Video-Türsprechanlagen",
        text: "Siedle, Doorbird & Co. — mit Smartphone-Anbindung, auch unterwegs immer im Bild.",
      },
      {
        title: "Fingerprint / Transponder / App",
        text: "Vergessene Schlüssel adé — moderne Zutrittssysteme, individuell programmierbar.",
      },
      {
        title: "Elektronische Schließanlagen",
        text: "Skalierbar für Mehrfamilienhäuser, Praxen, Werkstätten oder kleine Gewerbeobjekte.",
      },
      {
        title: "Torantriebe & Außenanlagen",
        text: "Schiebetore, Drehflügel, Schranken — vernetzt mit der zentralen Steuerung.",
      },
    ],
    next: { slug: "altbau", label: "Altbau & Modernisierung" },
  },
  altbau: {
    eyebrow: "/ 04 — Altbau",
    title: "Sicherheits­modernisierung",
    accent: "& Altbau.",
    intro:
      "Marode Elektroinstallationen, fehlende Normprüfung, ungesicherte Stromkreise — wir machen Bestandsgebäude wieder safe. Unser Spezialgebiet im Rhein-Main.",
    image: "/altbau.webp",
    image2: "/brandschutz.webp",
    metaTitle: "Altbau-Modernisierung & Sicherheitsnachrüstung",
    metaDesc:
      "Sicherheitsnachrüstung für Bestandsbauten — Normprüfung, FI-Nachrüstung, neue Stromkreise, dokumentiert und versicherungs­konform.",
    bullets: [
      {
        title: "Normprüfung & Befundung",
        text: "Was ist da überhaupt verbaut? Wir prüfen den Bestand und liefern einen klaren Maßnahmenkatalog.",
      },
      {
        title: "Nachrüstung Bestandsbauten",
        text: "FI-Schalter, neue Verteiler, getrennte Stromkreise — schrittweise oder als Gesamtsanierung.",
      },
      {
        title: "Absicherung alter Stromkreise",
        text: "Bestand erhalten, Sicherheit erhöhen — auch im laufenden Betrieb.",
      },
      {
        title: "Versicherungs­taugliche Dokumentation",
        text: "Prüfprotokoll, Messwerte, Fotodokumentation — falls der Versicherer fragt, haben Sie die Antworten.",
      },
    ],
    next: { slug: "smart-home", label: "Smarte Sicherheitsintegration" },
  },
  "smart-home": {
    eyebrow: "/ 05 — Smart",
    title: "Smarte",
    accent: "Sicherheits­integration.",
    intro:
      "Mehrere Systeme zu einer Lösung verknüpft — UniFi-Netzwerk, KNX, smarte Türschlösser, Präsenzsimulation. Inkl. Internet, Starlink und 5G-Verstärkung für Tiefgaragen oder abgelegene Objekte.",
    image: "/smart-sicherheitsintegration.webp",
    image2: "/zutritt-system.webp",
    metaTitle: "Smarte Sicherheits­integration",
    metaDesc:
      "UniFi-Netzwerk, KNX, smarte Türschlösser, Starlink und 5G-Verstärkung — alles aus einer Hand integriert.",
    bullets: [
      {
        title: "UniFi-Netzwerk & Video",
        text: "Stabile Netzinfrastruktur als Fundament für Kameras, Türen, Heizung und mehr.",
      },
      {
        title: "Smarte Türschlösser",
        text: "Schlüsselloser Zugang, Zeitfenster, Gäste-Codes — vom Privathaus bis zur Ferienwohnung.",
      },
      {
        title: "Richtfunk · Starlink · 5G/LTE",
        text: "Für abgelegene Objekte, Tiefgaragen oder Baustellen — wir sorgen für stabile Verbindung.",
      },
      {
        title: "Präsenz­simulation & Szenen",
        text: "Licht, Rollos und Geräte folgen einem realistischen Muster — auch wenn niemand zuhause ist.",
      },
    ],
    next: { slug: "einbruchschutz", label: "Einbruchschutz & Videoüberwachung" },
  },
};

export function generateStaticParams() {
  return Object.keys(details).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const d = details[params.slug];
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDesc,
    alternates: { canonical: `/leistungen/${params.slug}` },
  };
}

export default function ServiceDetailPage({ params }) {
  const d = details[params.slug];
  if (!d) notFound();

  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.title} accent={d.accent} intro={d.intro}>
        <div className="flex flex-wrap gap-4">
          <Link href="/kontakt" className="btn-tech btn-tech-solid">
            <span>Beratung anfragen</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/leistungen" className="btn-tech">
            <span aria-hidden="true">←</span>
            <span>Alle Leistungen</span>
          </Link>
        </div>
      </PageHero>

      {/* Image showcase */}
      <section className="relative bg-[#050505] py-20 md:py-28 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <Image src={d.image} alt="" fill sizes="(min-width:768px) 50vw, 92vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <Image src={d.image2} alt="" fill sizes="(min-width:768px) 50vw, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Detail bullets */}
      <section className="relative bg-[#050505] py-24 md:py-32 px-6 md:px-10 border-b border-white/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <p className="label-mono text-[#9162a4] mb-5">/ Was wir leisten</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Die volle <span className="text-[#9162a4]">Tiefe.</span>
            </h2>
            <p className="mt-5 text-zinc-400 leading-relaxed text-sm">
              Eine Auswahl der Komponenten und Verfahren, die wir in diesem
              Bereich planen und umsetzen.
            </p>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {d.bullets.map((b) => (
              <li
                key={b.title}
                className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-7 hover:border-[#9162a4]/40 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-white tracking-tight mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next service */}
      <section className="relative bg-[#050505] py-16 md:py-20 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <p className="label-mono text-zinc-500">/ Weiter</p>
          <Link
            href={`/leistungen/${d.next.slug}`}
            className="group inline-flex items-center gap-3 text-xl md:text-3xl font-semibold tracking-[-0.02em] text-white hover:text-[#9162a4] transition-colors text-right"
          >
            {d.next.label}
            <span aria-hidden="true" className="text-[#9162a4] transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
