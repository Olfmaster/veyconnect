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
    next: { slug: "brandschutz", label: "Brandschutz & Gefahrenprävention" },
  },
  brandschutz: {
    eyebrow: "/ 02 — Brandschutz",
    title: "Brandschutz &",
    accent: "Gefahrenprävention.",
    intro:
      "AJAX EN54 Line, vernetzte Rauchmelder, CO- und Gasmelder, Hausnotruf­systeme — kabellos, EN-54-zertifiziert und vollständig dokumentiert.",
    image: "/smoke-detector-and-remotes-on-blueprint.webp",
    image2: "/brandschutz.webp",
    metaTitle: "Brandschutz & Gefahrenprävention — AJAX EN 54",
    metaDesc:
      "EN-54-zertifizierte AJAX-Brandwarnanlagen, Funk-Rauchmeldernetz, CO- und Gasmelder und Brandschutz­konzepte für Privat- und Gewerbeobjekte im Rhein-Main-Gebiet.",
    bullets: [
      {
        title: "AJAX EN54 Line",
        text: "Kabellose, EN-54-zertifizierte Brandwarn- und Alarmanlage für kommerzielle Objekte — Rauch-, Wärme- und Kombimelder, zentral über eine App gesteuert.",
      },
      {
        title: "Funk-Rauchmeldernetz",
        text: "Alle Räume in einem Verbund — wenn einer auslöst, hören Sie es überall.",
      },
      {
        title: "CO- & Gasmelder",
        text: "Frühwarnung vor Kohlenmonoxid und Gaslecks — vernetzt mit Alarm- und Hausautomation.",
      },
      {
        title: "Hausnotruf­systeme",
        text: "Diskrete Notruflösungen für Privatpersonen, betreutes Wohnen und allein­arbeitende Personen.",
      },
      {
        title: "Brandschutz­konzept Bestand",
        text: "Planung für Altbau und Bestand — abgestimmt auf vorhandene Substanz und örtliche Gegebenheiten.",
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
      "Veraltete Schließtechnik, fehlende Sensorik, ungesicherte Außenanlagen — wir bringen Bestandsgebäude sicherheits­technisch in die Gegenwart. Unser Spezialgebiet im Rhein-Main.",
    image: "/altbau.webp",
    image2: "/brandschutz.webp",
    metaTitle: "Altbau-Modernisierung & Sicherheitsnachrüstung",
    metaDesc:
      "Sicherheitsnachrüstung für Bestandsbauten — Befundung, Sensorik-Nachrüstung, Schließtechnik und Brandmelder, vollständig dokumentiert.",
    bullets: [
      {
        title: "Befundung & Sicherheitskonzept",
        text: "Was ist da überhaupt verbaut? Wir prüfen den Bestand und liefern einen klaren Maßnahmenkatalog.",
      },
      {
        title: "Sensorik & Funkalarm im Bestand",
        text: "AJAX-Funkanlagen, Bewegungs-, Glasbruch- und Öffnungsmelder — schrittweise oder als Komplett­paket, ohne große Bauarbeiten.",
      },
      {
        title: "Schließ- & Türsicherung",
        text: "Elektronische Zylinder, Mehrfach­verriegelung, Video-Türsprechanlagen — Bestand erhalten, Sicherheit erhöhen.",
      },
      {
        title: "Vollständige Dokumentation",
        text: "Anlagen­dokumentation, Konfiguration und Fotodokumentation — lückenlos nachvollziehbar, wenn Sie später Nachweise brauchen.",
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = details[slug];
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDesc,
    alternates: { canonical: `/leistungen/${slug}` },
  };
}

const SITE_URL = "https://www.veyconnect.de";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const d = details[slug];
  if (!d) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/leistungen/${slug}#service`,
    name: d.metaTitle,
    description: d.metaDesc,
    url: `${SITE_URL}/leistungen/${slug}`,
    image: `${SITE_URL}${d.image}`,
    serviceType: d.metaTitle,
    areaServed: { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" },
    provider: { "@id": `${SITE_URL}/#business` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: d.metaTitle,
      itemListElement: d.bullets.map((b) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: b.title, description: b.text },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
      { "@type": "ListItem", position: 3, name: d.metaTitle, item: `${SITE_URL}/leistungen/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
      <section className="relative bg-base py-20 md:py-28 px-6 md:px-10 border-b border-line/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-line/10">
            <Image src={d.image} alt="" fill sizes="(min-width:1024px) 64rem, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Detail bullets */}
      <section className="relative bg-base py-24 md:py-32 px-6 md:px-10 border-b border-line/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <p className="label-mono text-[#9162a4] mb-5">/ Was wir leisten</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Die volle <span className="text-[#9162a4]">Tiefe.</span>
            </h2>
            <p className="mt-5 text-fg-muted leading-relaxed text-sm">
              Eine Auswahl der Komponenten und Verfahren, die wir in diesem
              Bereich planen und umsetzen.
            </p>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {d.bullets.map((b) => (
              <li
                key={b.title}
                className="rounded-2xl border border-line/10 bg-surface p-6 md:p-7 hover:border-[#9162a4]/40 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-fg tracking-tight mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next service */}
      <section className="relative bg-base py-16 md:py-20 px-6 md:px-10 border-b border-line/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <p className="label-mono text-fg-faint">/ Weiter</p>
          <Link
            href={`/leistungen/${d.next.slug}`}
            className="group inline-flex items-center gap-3 text-xl md:text-3xl font-semibold tracking-[-0.02em] text-fg hover:text-[#9162a4] transition-colors text-right"
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
