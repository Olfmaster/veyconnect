import PageHero from "@/components/PageHero";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Über uns — Jan Vey & veyconnect",
  description:
    "Hinter veyconnect steht Jan Vey — Sicherheitstechnik-Fachbetrieb aus Niederdorfelden für das Rhein-Main-Gebiet. Wer wir sind, woran wir glauben und warum Sicherheit für uns Handwerk ist.",
  alternates: { canonical: "/ueber-uns" },
};

const SITE_URL = "https://www.veyconnect.de";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/ueber-uns#janvey`,
  name: "Jan Vey",
  jobTitle: "Inhaber & Gründer",
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: `${SITE_URL}/ueber-uns`,
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niederdorfelden",
      addressRegion: "Hessen",
      addressCountry: "DE",
    },
  },
  knowsAbout: [
    "Einbruchmeldeanlagen",
    "Brandmeldeanlagen",
    "Videoüberwachung",
    "Zutrittskontrolle",
  ],
};

// Werte / Haltung — Texte sind Entwürfe, gern anpassen.
const werte = [
  {
    title: "Sicherheit ist Handwerk",
    text: "Kein Baumarkt-Set, kein Online-Konfigurator. Jede Anlage wird vor Ort befundet, geplant und sauber installiert — von Menschen, die wissen, was sie tun.",
  },
  {
    title: "Ehrliche Beratung",
    text: "Wir verkaufen nur, was Ihre Sicherheit wirklich erhöht. Lieber eine Komponente weniger, dafür ein Konzept, das im Ernstfall trägt.",
  },
  {
    title: "Regional verwurzelt",
    text: "Niederdorfelden ist unser Zuhause, das Rhein-Main-Gebiet unser Revier. Kurze Wege, schnelle Reaktion, ein Ansprechpartner, den Sie kennen.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Beratung, Planung, Installation und Wartung vom selben Team — Elektroarbeiten über unseren zertifizierten Meister-Partner. Kein Verantwortungs-Ping-Pong.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageHero
        eyebrow="/ Über uns"
        title="Hinter veyconnect"
        accent="steht Jan Vey."
        intro="veyconnect ist kein anonymer Konzern, sondern ein Sicherheitstechnik-Fachbetrieb mit Gesicht. Gegründet 2023 in Niederdorfelden, zertifizierter Premium-Partner von AJAX Systems und spezialisiert auf Bestand, Altbau und ganzheitliche Sicherheitskonzepte im Rhein-Main-Gebiet."
      />

      {/* Story / Person */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 border-b border-line/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line/10 bg-surface">
              {/* Sobald das Porträt vorliegt: public/jan-vey.webp ablegen, oben
                  `import Image from "next/image"` ergänzen und den Block unten
                  durch diese Zeile ersetzen:
                  <Image src="/jan-vey.webp" alt="Jan Vey, Gründer von veyconnect" fill sizes="(min-width:768px) 40vw, 92vw" className="object-cover" /> */}
              <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="w-24 h-24 rounded-full border border-[#9162a4]/30 bg-[#9162a4]/10 flex items-center justify-center text-3xl font-semibold tracking-[-0.02em] text-[#9162a4]">
                  JV
                </span>
                <span className="label-mono text-fg-faint">Niederdorfelden</span>
              </div>
            </div>
            <p className="mt-4 label-mono text-fg-faint">
              Jan Vey · Inhaber &amp; Gründer
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="label-mono text-[#9162a4] mb-5">/ Die Person</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-2xl">
              Vom <span className="text-[#9162a4]">Elektrohandwerk</span> zum
              Sicherheitstechnik-Fachbetrieb.
            </h2>

            <div className="mt-7 space-y-5 text-fg-muted leading-relaxed text-base md:text-[1.05rem] max-w-2xl">
              <p>
                Angefangen hat alles mit einer klassischen
                Elektriker-Ausbildung — direkt danach der Wechsel in die
                Sicherheitstechnik: Einbruchmelde- und Brandmeldeanlagen. Es
                folgten mehrere Jahre bei zwei größeren
                Sicherheitstechnik-Unternehmen, in denen ich mein Handwerk von
                Grund auf gelernt habe. Was mich schon damals am meisten
                gepackt hat: Häuser und Gewerbeobjekte wirklich sicher zu
                machen — und die Reaktion der Kunden zu erleben, wenn sie nach
                einem schweren Einbruch endlich wieder ruhig schlafen konnten.
                Genau dieses Gefühl wollte ich zu meinem Beruf machen.
              </p>
              <p>
                2023 habe ich veyconnect gegründet, weil ich Sicherheitstechnik
                anders anbieten wollte: fair, ehrlich und transparent. Mir war
                wichtig, nah an den Kunden zu sein und wirklich zu verstehen,
                was hinter jedem einzelnen Fall steht — statt Anlagen von der
                Stange zu verkaufen. Ehrlichkeit und Vertrauen sind für mich,
                privat wie geschäftlich, das A und O. Heute geben wir das als
                Team weiter: zu dritt, plus unser starker Elektro-Partnerbetrieb
                für alle Elektroarbeiten.
              </p>
              <p>
                Ich lebe mein ganzes Leben schon in Niederdorfelden — die Region
                ist meine Heimat, und genau deshalb liegt mir daran, dass sich
                die Menschen hier wirklich sicher fühlen können. Wenn ich nicht
                gerade Anlagen plane, sitze ich am liebsten auf dem Motorrad.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Zertifizierter AJAX Premium-Partner",
                "Einbruch- & Brandmeldetechnik",
                "Seit 2023 selbstständig",
                "Dreiköpfiges Team",
              ].map((badge) => (
                <li
                  key={badge}
                  className="label-mono px-3.5 py-2 border border-line/10 rounded-full text-fg-muted bg-surface"
                >
                  <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] mr-2 align-middle" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Werte / Haltung */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 border-b border-line/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Haltung</p>
            <h2 className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Woran wir <span className="text-[#9162a4]">glauben.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {werte.map((w) => (
              <article
                key={w.title}
                className="border border-line/10 bg-surface rounded-2xl p-7 md:p-8 hover:border-[#9162a4]/40 transition-colors"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#9162a4]/10 border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{w.title}</h3>
                </div>
                <p className="text-sm text-fg-muted leading-relaxed pl-12">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Certifications />

      <Contact />
    </>
  );
}
