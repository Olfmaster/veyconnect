import Image from "next/image";
import Link from "next/link";
import Certifications from "@/components/Certifications";
import Trust from "@/components/Trust";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";

const SITE_URL = "https://www.veyconnect.de";

export const metadata = {
  title: "Einbruchschutz fürs Zuhause · AJAX Alarmanlage im Rhein-Main",
  description:
    "Sicher zu Hause fühlen — mit einer AJAX-Funkalarmanlage vom zertifizierten Fachbetrieb. Einbruchschutz, Videoüberwachung & App-Steuerung aus einer Hand im Rhein-Main-Gebiet. Jetzt kostenlose Sicherheitsberatung sichern.",
  keywords: [
    "Einbruchschutz",
    "Alarmanlage",
    "AJAX Alarmanlage",
    "Funkalarmanlage",
    "Einbruchmeldeanlage",
    "Videoüberwachung",
    "Haus sichern",
    "sicheres Zuhause",
    "Einbruchschutz Frankfurt",
    "Alarmanlage Rhein-Main",
    "AJAX Systems",
  ],
  alternates: { canonical: "/sicheres-zuhause" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${SITE_URL}/sicheres-zuhause`,
    siteName: "veyconnect",
    title: "Einbruchschutz fürs Zuhause · AJAX Alarmanlage im Rhein-Main",
    description:
      "Sicher zu Hause fühlen — AJAX-Funkalarmanlage, Videoüberwachung & App-Steuerung vom zertifizierten Fachbetrieb im Rhein-Main-Gebiet.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Einbruchschutz & Alarmanlagen fürs Zuhause",
  serviceType: "Einbruchschutz, AJAX Funkalarmanlage, Videoüberwachung",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" },
  description:
    "Planung, Installation und Wartung von AJAX-Funkalarmanlagen, Einbruchmeldetechnik und Videoüberwachung für Privathaushalte im Rhein-Main-Gebiet.",
  url: `${SITE_URL}/sicheres-zuhause`,
};

const heroBadges = [
  "AJAX Systems Premium-Partner",
  "5,0 ★ bei Google",
  "Zertifizierter Fachbetrieb",
  "Rhein-Main-Gebiet",
];

const pains = [
  {
    title: "Jeder dritte Einbruch passiert tagsüber",
    text: "Genau dann, wenn Sie bei der Arbeit oder unterwegs sind — und niemand etwas mitbekommt.",
  },
  {
    title: "60 Sekunden reichen",
    text: "Veraltete Schließtechnik und ungesicherte Fenster sind für Einbrecher oft in unter einer Minute überwunden.",
  },
  {
    title: "Ohne Alarm bleibt es unbemerkt",
    text: "Kein Signal, kein Bild, keine Warnung. Sie erfahren erst vom Einbruch, wenn Sie nach Hause kommen.",
  },
  {
    title: "Das Sicherheitsgefühl leidet am längsten",
    text: "Der materielle Schaden ist ersetzbar — das Gefühl, im eigenen Zuhause nicht mehr sicher zu sein, nicht.",
  },
];

const ajaxProducts = [
  { name: "Hub 2 / Hub Hybrid", text: "Die verschlüsselte Zentrale mit Mobilfunk-Backup — das Herz Ihrer Anlage." },
  { name: "MotionCam", text: "Bewegungsmelder mit Foto-Verifikation: bei Alarm sofort ein Bild aufs Handy." },
  { name: "DoorProtect", text: "Öffnungsmelder für Türen und Fenster — meldet jeden unbefugten Zutritt." },
  { name: "CombiProtect", text: "Bewegung und Glasbruch in einem Melder — schützt ganze Räume zuverlässig." },
  { name: "KeyPad & SpaceControl", text: "Scharfschalten per Code oder Fernbedienung — ohne Fummeln, ohne Umwege." },
  { name: "StreetSiren", text: "Laute Außensirene mit Blitz — schreckt ab, bevor etwas passiert." },
];

export default function SicheresZuhausePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-base text-fg pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="label-mono inline-flex items-center gap-2 text-[#9162a4] mb-6 px-3 py-1.5 border border-[#9162a4]/30 rounded-full bg-[#9162a4]/5">
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] animate-pulse" />
              Einbruchschutz · Rhein-Main
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
              Einbruchschutz fürs Zuhause.
              <span className="block text-[#9162a4] mt-2">
                Damit Sie sich wieder sicher fühlen.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base md:text-lg text-fg-muted leading-relaxed">
              Jeder dritte Einbruch passiert tagsüber. Mit einer{" "}
              <span className="text-fg font-medium">AJAX-Funkalarmanlage</span>{" "}
              von veyconnect sichern wir Ihr Zuhause im Rhein-Main-Gebiet —
              Alarmanlage, Videoüberwachung und App-Steuerung aus einer Hand,
              installiert vom zertifizierten AJAX-Fachbetrieb.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="#kontakt" className="btn-tech btn-tech-solid">
                <span>Kostenlose Sicherheitsberatung</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a href="tel:+4917624596941" className="btn-tech">
                <span>Jetzt anrufen</span>
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-2.5">
              {heroBadges.map((b) => (
                <li
                  key={b}
                  className="label-mono px-3 py-1.5 border border-line/10 rounded-full text-fg-muted bg-surface"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-corners relative aspect-[4/3] rounded-2xl overflow-hidden border border-line/10 bg-ink">
            <span className="tc-tl" aria-hidden="true" />
            <span className="tc-br" aria-hidden="true" />
            <Image
              src="/einbruchschutz-videoueberwachung.webp"
              alt="Moderne 4K-Videoüberwachung und AJAX-Einbruchschutz für Ihr Zuhause im Rhein-Main-Gebiet"
              fill
              priority
              sizes="(min-width:1024px) 40rem, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Warum jetzt</p>
            <h2 className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Ein mulmiges Gefühl ist{" "}
              <span className="text-[#9162a4]">ein Warnsignal.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="tech-corners relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-line/10 bg-ink">
                <span className="tc-tl" aria-hidden="true" />
                <span className="tc-br" aria-hidden="true" />
                <Image
                  src="/einbruch-gefahr-nacht.webp"
                  alt="Vermummte Person versucht nachts, eine Terrassentür aufzuhebeln — das Risiko ohne Einbruchschutz"
                  fill
                  sizes="(min-width:1024px) 30rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-line/5 border border-line/5 rounded-2xl overflow-hidden">
              {pains.map((p) => (
                <article key={p.title} className="bg-surface p-7 md:p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#9162a4]/30 bg-[#9162a4]/5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#9162a4]">
                      <path d="M12 2 2 21h20L12 2Zm0 7v6m0 2.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{p.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution: AJAX products */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Die Lösung: AJAX</p>
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
                Ein System. Eine App.{" "}
                <span className="text-[#9162a4]">Rundum geschützt.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-fg-muted leading-relaxed">
                AJAX Systems ist mehrfach ausgezeichnete Funk-Sicherheitstechnik
                aus Europa. Als zertifizierter Premium-Partner planen und
                installieren wir das komplette Ökosystem — verschlüsselt,
                wartungsarm und in Minuten scharfgeschaltet.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Product list */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {ajaxProducts.map((prod) => (
                <article
                  key={prod.name}
                  className="border border-line/10 bg-surface rounded-2xl p-6 hover:border-[#9162a4]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#9162a4] shrink-0" />
                    <h3 className="text-base font-semibold tracking-tight text-fg">{prod.name}</h3>
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed">{prod.text}</p>
                </article>
              ))}
            </div>

            {/* AJAX image */}
            <div className="lg:col-span-5">
              <div className="tech-corners relative rounded-2xl border border-[#9162a4]/25 bg-gradient-to-br from-surface via-surface to-base p-6 md:p-8 overflow-hidden">
                <span className="tc-tl" aria-hidden="true" />
                <span className="tc-br" aria-hidden="true" />
                <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-xl overflow-hidden border border-line/10 bg-ink">
                  <Image
                    src="/ajax-en54-line.webp"
                    alt="AJAX Funk-Sicherheitstechnik — Alarmanlage für Ihr Zuhause"
                    fill
                    sizes="(min-width:1024px) 20rem, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="#kontakt" className="btn-tech btn-tech-solid">
              <span>Passendes AJAX-Paket anfragen</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates — trust anchor */}
      <Certifications />

      {/* Trust / social proof */}
      <Trust />

      {/* Google-Rezensionen */}
      <GoogleReviews />

      {/* Conversion CTA */}
      <Contact />
    </>
  );
}
