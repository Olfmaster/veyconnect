import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Über uns — Jan Vey & veyconnect",
  description:
    "Hinter veyconnect steht Jan Vey — Sicherheitstechnik-Fachbetrieb aus Niederdorfelden für das Rhein-Main-Gebiet. Wer wir sind, woran wir glauben und warum Sicherheit für uns Handwerk ist.",
  alternates: { canonical: "/ueber-uns" },
};

const SITE_URL = "https://www.veyconnect.de";

// TODO: Eckdaten zu Jan Vey ergänzen, sobald geliefert.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/ueber-uns#janvey`,
  name: "Jan Vey",
  jobTitle: "Inhaber & Gründer", // [Platzhalter: korrekte Bezeichnung prüfen]
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: `${SITE_URL}/ueber-uns`,
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
      <section className="relative bg-[#050505] text-white py-24 md:py-32 px-6 md:px-10 border-b border-white/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              {/* [Platzhalter] Foto: public/jan-vey.webp ablegen, oben `import Image from "next/image"` ergänzen und folgende Zeile aktivieren: */}
              {/* <Image src="/jan-vey.webp" alt="Jan Vey, Gründer von veyconnect" fill sizes="(min-width:768px) 40vw, 92vw" className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <span className="label-mono text-zinc-600">
                  [ Platzhalter: Foto von Jan Vey ]
                </span>
              </div>
            </div>
            <p className="mt-4 label-mono text-zinc-500">
              Jan Vey · Gründer{/* [Platzhalter: Funktion/Titel] */}
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="label-mono text-[#9162a4] mb-5">/ Die Person</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-2xl">
              Vom <span className="text-[#9162a4]">[Werdegang]</span> zum
              Sicherheitstechnik-Fachbetrieb.
            </h2>

            <div className="mt-7 space-y-5 text-zinc-300 leading-relaxed text-base md:text-[1.05rem] max-w-2xl">
              <p>
                {/* [Platzhalter] Wer ist Jan Vey? Werdegang, Ausbildung,
                    Stationen, Qualifikationen. 2–3 Sätze. */}
                [Platzhalter: Jan Veys Werdegang — z. B. Ausbildung,
                berufliche Stationen, wie es zur Spezialisierung auf
                Sicherheitstechnik kam.]
              </p>
              <p>
                {/* [Platzhalter] Motivation / Gründungsgeschichte: Warum
                    veyconnect? Was treibt ihn an? */}
                [Platzhalter: Warum hat Jan veyconnect gegründet? Was ist
                ihm bei der Arbeit mit Kundinnen und Kunden wichtig?]
              </p>
              <p>
                {/* [Platzhalter] Persönliche Note / Bezug zur Region. */}
                [Platzhalter: Persönlicher Bezug zum Rhein-Main-Gebiet,
                Hobbys oder ein Satz, der ihn nahbar macht.]
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Zertifizierter AJAX Premium-Partner",
                "[Platzhalter: Qualifikation/Zertifikat]",
                "Seit 2023 selbstständig",
              ].map((badge) => (
                <li
                  key={badge}
                  className="label-mono px-3.5 py-2 border border-white/10 rounded-full text-zinc-300 bg-[#0a0a0a]"
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
      <section className="relative bg-[#050505] text-white py-24 md:py-32 px-6 md:px-10 border-b border-white/5 overflow-hidden">
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
                className="border border-white/10 bg-[#0a0a0a] rounded-2xl p-7 md:p-8 hover:border-[#9162a4]/40 transition-colors"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#9162a4]/10 border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{w.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed pl-12">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
