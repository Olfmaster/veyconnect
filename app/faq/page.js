import Link from "next/link";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

const SITE_URL = "https://www.veyconnect.de";

const categories = [
  {
    id: "leistungen",
    label: "Leistungen & Angebot",
    items: [
      {
        q: "Was macht veyconnect genau?",
        a: "veyconnect plant, installiert und wartet Einbruchmeldeanlagen, Videoüberwachung, Brandschutz, Zutrittskontrolle, Smart-Home-Integration und Sicherheitsmodernisierung im Bestandsbau. Alles aus einer Hand, als Sicherheitstechnik-Fachbetrieb mit zertifiziertem Elektromeister-Partner.",
      },
      {
        q: "Für wen ist veyconnect?",
        a: "Wir arbeiten für Privatkund:innen (Einfamilienhaus, Eigentumswohnung, Altbau, Ferienobjekt), KMU (Praxen, Werkstätten, Büros, Lager) und gewerbliche Liegenschaften. Größenordnung typischerweise von der einzelnen Funkalarm-Lösung bis zur vernetzten Mehrobjekt-Anlage.",
      },
      {
        q: "Welche Hersteller verbaut ihr?",
        a: "Als zertifizierter Premium-Partner von AJAX Systems setzen wir den Schwerpunkt auf AJAX-Funkalarmanlagen. Weitere zertifizierte Marken sind Gira, Hager, Siedle, Doorbird, Dahua, UniFi, Mobotix und HIK Vision. Wir arbeiten ausschließlich mit Original-Komponenten und direktem Herstellerzugang.",
      },
      {
        q: "Macht ihr auch klassische Elektroinstallation?",
        a: "Für Elektroarbeiten arbeiten wir mit einem zertifizierten Elektromeister-Betrieb zusammen. So bleibt veyconnect auf das fokussiert, was wir am besten können, nämlich Sicherheits- und Gebäudesystemtechnik, und Sie bekommen trotzdem alles aus einer Hand.",
      },
    ],
  },
  {
    id: "ajax",
    label: "AJAX Systems & Premium-Partner",
    items: [
      {
        q: "Was bedeutet zertifizierter AJAX Premium-Partner?",
        a: "Wir sind direkt bei AJAX Systems zertifiziert und haben die Hersteller-Schulungen durchlaufen. Das bedeutet: direkter Herstellerzugang, Original-Komponenten, Premium-Support, regelmäßige Firmware-Updates und volle AJAX-Garantie für Sie als Endkundin oder Endkunden.",
      },
      {
        q: "Warum AJAX und nicht eine andere Alarmanlage?",
        a: "AJAX ist funkbasiert (keine aufwändige Verkabelung im Bestand), batteriearm (Lebensdauer 5 bis 7 Jahre), verschlüsselt (Jeweller-Funk), wartungsarm und skalierbar, vom Einfamilienhaus bis zur Gewerbeliegenschaft. Bedienung läuft über eine zentrale App auf iOS und Android.",
      },
      {
        q: "Was kostet eine AJAX Alarmanlage?",
        a: "Eine kleine Wohnungs-Lösung mit Hub und 2 bis 3 Sensoren startet typischerweise im niedrigen vierstelligen Bereich. Eine umfassende Einfamilienhaus-Anlage mit Außensicherung, Glasbruch-, Brand- und Bewegungsmeldern liegt höher. Eine kostenlose Vor-Ort-Beratung mit Sicherheits­analyse ist Pflicht, bevor wir ein verbindliches Angebot machen.",
      },
    ],
  },
  {
    id: "ablauf",
    label: "Ablauf, Termine & Service",
    items: [
      {
        q: "Wie läuft eine Anfrage ab?",
        a: "Schritt 1: Kostenlose Vor-Ort-Beratung mit Sicherheits­analyse. Schritt 2: Konzept und verbindliches Angebot. Schritt 3: Termin­absprache und Installation, in der Regel an einem Tag für typische Privatanlagen. Schritt 4: Einweisung, App-Setup und laufende Betreuung.",
      },
      {
        q: "Wie schnell könnt ihr vor Ort sein?",
        a: "In unserer Servicregion Rhein-Main sind wir in der Regel innerhalb weniger Tage vor Ort. Für Notfälle (z. B. Sabotage, Einbruch, Defekt einer Anlage) sind wir 24/7 erreichbar.",
      },
      {
        q: "Bietet ihr Wartung und Service nach der Installation?",
        a: "Ja. Wir bieten regelmäßige Wartungstermine, Batterietausch, Firmware-Updates und Erweiterungen der Anlage. Bestehende Kunden haben Vorrang bei Notfall-Einsätzen.",
      },
      {
        q: "In welchen Städten seid ihr aktiv?",
        a: "Hauptsitz Niederdorfelden. Servicegebiet: Frankfurt am Main, Offenbach, Hanau, Bad Vilbel, Bad Homburg, Maintal, Bruchköbel, Mühlheim, Karben, Friedberg, Schöneck und Umgebung im Rhein-Main-Gebiet. Außerhalb der Liste sind wir auf Anfrage ebenfalls erreichbar.",
      },
    ],
  },
  {
    id: "technik",
    label: "Technik & Normen",
    items: [
      {
        q: "Sind eure Anlagen DSGVO-konform?",
        a: "Ja. Wir planen Videoüberwachung grundsätzlich DSGVO-konform, mit korrekter Kamerakegel-Ausrichtung, Beschilderung und Datenflussdokumentation. Beim Betreiber liegt die Verantwortung für die laufende Datenverarbeitung, wir beraten zur Konfiguration und Kennzeichnung.",
      },
      {
        q: "Was ist im Brandschutz alles enthalten?",
        a: "Funk-Rauchmeldernetz (alle Räume in einem Verbund), CO- und Gasmelder, optional Hausnotrufsysteme und vernetzte Warnmelder. Brandschutz­konzept und vollständige Anlagendokumentation auf Wunsch inklusive.",
      },
      {
        q: "Kann ich die Anlage später erweitern?",
        a: "Ja. AJAX-Systeme sind modular skalierbar. Neue Sensoren werden per App in wenigen Minuten ins bestehende System aufgenommen. Gleiches gilt für Türsprechanlagen, Zutrittskontrolle und UniFi-Netzwerk-Komponenten.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faqpage`,
  mainEntity: categories.flatMap((c) =>
    c.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

export const metadata = {
  title: "FAQ · Häufige Fragen zu Alarmanlagen, AJAX & Sicherheits­technik",
  description:
    "Antworten auf häufige Fragen zu Einbruchschutz, AJAX-Alarmanlagen, Videoüberwachung, Brandschutz, Zutrittskontrolle und Ablauf im Rhein-Main-Gebiet.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="/ FAQ"
        title="Häufige Fragen,"
        accent="ehrliche Antworten."
        intro="Was kostet eine Alarmanlage? Wie schnell sind wir vor Ort? Wie läuft eine Installation ab? Hier die Antworten auf die Fragen, die uns am häufigsten gestellt werden, strukturiert nach Themen."
      >
        <nav aria-label="FAQ Kategorien" className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="label-mono px-3 py-1.5 border border-line/10 rounded-full text-fg-muted hover:text-fg hover:border-[#9162a4] transition-colors"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="relative bg-base py-20 md:py-28 px-6 md:px-10 border-b border-line/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />

        <div className="relative max-w-4xl mx-auto flex flex-col gap-16 md:gap-20">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              <header className="mb-8 md:mb-10">
                <p className="label-mono text-[#9162a4] mb-3">/ {cat.id}</p>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight text-fg">
                  {cat.label}
                </h2>
              </header>

              <ul className="grid gap-3 md:gap-4">
                {cat.items.map((it) => (
                  <li key={it.q}>
                    <details className="group bg-surface border border-line/10 rounded-2xl overflow-hidden hover:border-[#9162a4]/40 transition-colors">
                      <summary className="flex items-start gap-4 cursor-pointer list-none p-5 md:p-7">
                        <span
                          aria-hidden="true"
                          className="shrink-0 mt-1 w-6 h-6 rounded-full border border-[#9162a4]/40 text-[#9162a4] flex items-center justify-center text-base font-light transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                        <h3 className="text-base md:text-lg font-semibold text-fg leading-snug tracking-tight">
                          {it.q}
                        </h3>
                      </summary>
                      <div className="px-5 md:px-7 pb-6 md:pb-7 pl-[60px] md:pl-[68px] -mt-1">
                        <p className="text-sm md:text-base faq-answer leading-relaxed">
                          {it.a}
                        </p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <aside className="mt-4 rounded-2xl border border-[#9162a4]/30 bg-surface p-7 md:p-10 text-center">
            <p className="label-mono text-[#9162a4] mb-3">/ Frage offen?</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4 text-fg">
              Wir antworten persönlich, meist innerhalb eines Werktages.
            </h2>
            <p className="text-fg-muted max-w-xl mx-auto mb-7 leading-relaxed">
              Was hier nicht beantwortet ist, klären wir direkt im Gespräch. Kostenlose Vor-Ort-Beratung im gesamten Rhein-Main-Gebiet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-tech btn-tech-solid">
                <span>Frage stellen</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/leistungen" className="btn-tech">
                <span>Leistungen ansehen</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
