import Image from "next/image";
import Link from "next/link";
import Certifications from "@/components/Certifications";
import TrustBar from "@/components/TrustBar";
import Trust from "@/components/Trust";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";

const SITE_URL = "https://www.veyconnect.de";

export const metadata = {
  title: "Einbruchschutz: Alarmanlage & Videoüberwachung · Rhein-Main",
  description:
    "Einbruchschutz vom zertifizierten Fachbetrieb: Alarmanlage und Videoüberwachung, geplant, installiert und gewartet aus einer Hand. AJAX-Funkalarmanlage und Kameras, die nachts wirklich etwas erkennen — DSGVO-konform, auch im Altbau nachrüstbar ohne Stemmen. Kostenlose Vor-Ort-Analyse im Rhein-Main-Gebiet.",
  keywords: [
    "Alarmanlage installieren lassen",
    "Alarmanlage Installation",
    "Alarmanlagen Installateur",
    "Alarmanlage Fachbetrieb",
    "Alarmanlage Wartung",
    "Alarmanlage Service",
    "AJAX Alarmanlage",
    "Funkalarmanlage",
    "Einbruchmeldeanlage",
    "Einbruchschutz",
    "Videoüberwachung",
    "Videoüberwachung installieren lassen",
    "Überwachungskamera Haus",
    "Überwachungskamera installieren lassen",
    "Videoüberwachung DSGVO",
    "Alarmanlage Frankfurt",
    "Alarmanlage Rhein-Main",
    "AJAX Systems",
  ],
  alternates: { canonical: "/sicheres-zuhause" },
  // Reine Google-Ads-Landingpage: Traffic kommt bezahlt. Aus dem Index halten,
  // damit sie nicht mit der Startseite um dieselben Keywords konkurriert.
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${SITE_URL}/sicheres-zuhause`,
    siteName: "veyconnect",
    title: "Einbruchschutz: Alarmanlage & Videoüberwachung · Rhein-Main",
    description:
      "Beratung, Installation und laufender Service für Ihre AJAX-Funkalarmanlage und Videoüberwachung — aus einer Hand vom zertifizierten Fachbetrieb im Rhein-Main-Gebiet.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Alarmanlagen- & Videoüberwachungs-Installation fürs Zuhause",
  serviceType:
    "Alarmanlagen-Installation, AJAX Funkalarmanlage, Videoüberwachung, Überwachungskamera-Installation, Wartung & Service",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" },
  description:
    "Beratung, Planung, Installation und laufender Service/Wartung von AJAX-Funkalarmanlagen, Einbruchmeldetechnik und DSGVO-konformer Videoüberwachung für Privathaushalte im Rhein-Main-Gebiet.",
  url: `${SITE_URL}/sicheres-zuhause`,
};

const heroBadges = [
  "AJAX Systems Premium-Partner",
  "5,0 ★ bei 37+ Google-Bewertungen",
  "Zertifizierter Fachbetrieb",
  "Auch im Altbau — ohne Stemmen",
  "Videoüberwachung DSGVO-konform",
  "Installation & Service inklusive",
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

const videoFeatures = [
  {
    name: "Standort vor Optik",
    text: "Wir legen für jeden Bereich vorher fest, ob eine Person nur bemerkt oder tatsächlich erkannt werden muss. Daraus ergeben sich Brennweite, Sensor und Montagehöhe — nicht umgekehrt.",
  },
  {
    name: "Nachtsicht, die den Namen verdient",
    text: "Infrarot, lichtstarke Optik oder Wärmebild — passend zu Distanz und Umgebungslicht. Statt grauem Rauschen ein Bild, mit dem Polizei und Versicherung etwas anfangen können.",
  },
  {
    name: "KI-Objekterkennung statt Fehlalarm",
    text: "Die Kamera unterscheidet Mensch, Fahrzeug und Tier. Kein Alarm mehr wegen Katze, Regen oder wehendem Ast — sonst schaut nach zwei Wochen niemand mehr hin.",
  },
  {
    name: "Ein Alarm, ein Bild, eine App",
    text: "Kamera und AJAX-Alarmanlage arbeiten zusammen: Bei Auslösung bekommen Sie nicht nur eine Meldung, sondern sofort das passende Bild dazu.",
  },
];

const legalPoints = [
  {
    title: "Nachbargrundstück & Gehweg ausgeblendet",
    text: "Fremde Bereiche werden per Privatzonen-Maskierung geschwärzt — genau der Punkt, an dem die meisten Anlagen vor Gericht scheitern.",
  },
  {
    title: "Kein Ton, klare Löschfristen",
    text: "Tonaufzeichnung ist tabu. Aufnahmen werden nach der vereinbarten Frist automatisch gelöscht, statt sich endlos anzusammeln.",
  },
  {
    title: "Hinweisschilder inklusive",
    text: "Sie bekommen die passende Beschilderung und den Informationstext nach Art. 13 DSGVO — an der richtigen Stelle montiert.",
  },
  {
    title: "Unterlagen für Ihre Akte",
    text: "Kamerastandortplan und Konfigurationsprotokoll als PDF nach der Abnahme — falls jemand nachfragt.",
  },
];

const installSteps = [
  {
    step: "01",
    title: "Vor-Ort-Beratung",
    text: "Kostenlose Begehung Ihres Zuhauses — wir analysieren Schwachstellen und planen die passende Alarmanlage.",
  },
  {
    step: "02",
    title: "Individuelles Angebot",
    text: "Transparentes Festpreis-Angebot für Installation, Komponenten und laufenden Service — ohne versteckte Kosten.",
  },
  {
    step: "03",
    title: "Fachgerechte Installation",
    text: "Unsere zertifizierten Techniker montieren und konfigurieren Ihre AJAX-Alarmanlage meist an einem Tag.",
  },
  {
    step: "04",
    title: "Einweisung & Service",
    text: "Persönliche Einweisung in App und Bedienung — danach begleiten wir Sie mit Wartung und Support-Hotline dauerhaft.",
  },
];

export default function SicheresZuhausePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-base text-fg pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="label-mono inline-flex items-center gap-2 text-[#9162a4] mb-6 px-3 py-1.5 border border-[#9162a4]/30 rounded-full bg-[#9162a4]/5">
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] animate-pulse" />
              Einbruchschutz · Alarmanlage & Videoüberwachung
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
              Einbruchschutz vom Fachbetrieb.
              <span className="block text-[#9162a4] mt-2">
                Alarmanlage & Videoüberwachung aus einer Hand.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base md:text-lg text-fg-muted leading-relaxed">
              Beratung, fachgerechte Montage und laufender Service für Ihre{" "}
              <span className="text-fg font-medium">AJAX-Funkalarmanlage</span>{" "}
              und eine{" "}
              <span className="text-fg font-medium">
                Videoüberwachung, die nachts wirklich etwas erkennt
              </span>{" "}
              — geplant, installiert und gewartet vom zertifizierten Fachbetrieb
              im Rhein-Main-Gebiet. DSGVO-konform dokumentiert, in einer App
              gesteuert.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="#kontakt" className="btn-tech btn-tech-solid">
                <span>Kostenlose Installationsberatung</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="tel:+4917624596941"
                data-track-location="lp-hero"
                className="btn-tech"
              >
                <span>Jetzt anrufen</span>
              </a>
            </div>

            <p className="mt-4 text-sm text-fg-faint">
              Kostenlose Vor-Ort-Analyse · Rückmeldung innerhalb eines Werktages
            </p>

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
              src="/alarmanlage-hero-hausfassade.webp"
              alt="Modernes Einfamilienhaus mit dezent installierter Sicherheitskamera und Bewegungsmelder am Eingang"
              fill
              priority
              sizes="(min-width:1024px) 40rem, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Pain points */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Warum Einbruchschutz</p>
            <h2 className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Einbruchschutz beginnt,{" "}
              <span className="text-[#9162a4]">bevor etwas passiert.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="tech-corners relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-line/10 bg-ink">
                <span className="tc-tl" aria-hidden="true" />
                <span className="tc-br" aria-hidden="true" />
                <Image
                  src="/einbrecher-nacht-terrassentuer.webp"
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

      {/* Certificates — trust anchor */}
      <Certifications />

      {/* Solution: AJAX products */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 border-b border-line/5">
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
                aus Europa. Als zertifizierter Premium-Partner übernehmen wir
                Planung, Installation und laufenden Service des kompletten
                Ökosystems — verschlüsselt, wartungsarm und in Minuten
                scharfgeschaltet.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Product list */}
            <div className="lg:col-span-5 flex flex-col gap-4">
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
            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <div className="tech-corners relative rounded-2xl border border-[#9162a4]/25 bg-gradient-to-br from-surface via-surface to-base p-3 md:p-4 overflow-hidden">
                <span className="tc-tl" aria-hidden="true" />
                <span className="tc-br" aria-hidden="true" />
                <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden border border-line/10 bg-ink">
                  <Image
                    src="/ajax-alarmanlage.webp"
                    alt="AJAX Funk-Alarmanlage — Hub, Tür-, Bewegungsmelder, Fernbedienung und Kamera im Set"
                    fill
                    sizes="(min-width:1024px) 40rem, 92vw"
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

      {/* Altbau — das Unterscheidungsmerkmal, auf das auch die Anzeigen einzahlen */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-5">
            <div className="tech-corners relative aspect-[4/3] rounded-2xl overflow-hidden border border-line/10 bg-ink">
              <span className="tc-tl" aria-hidden="true" />
              <span className="tc-br" aria-hidden="true" />
              <Image
                src="/altbau-sicherheitsnachruestung.webp"
                alt="Nachträglich installierter Funk-Öffnungsmelder an einem Altbaufenster, ohne Eingriff in das Mauerwerk"
                fill
                sizes="(min-width:768px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="label-mono text-[#9162a4] mb-5">/ Altbau &amp; Bestand</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Nachrüsten, ohne{" "}
              <span className="text-[#9162a4]">Wände aufzustemmen.</span>
            </h2>
            <p className="mt-7 text-fg-muted leading-relaxed max-w-2xl text-base md:text-[1.05rem]">
              Die meisten Anbieter planen für den Neubau und winken beim
              Bestandsgebäude ab. Genau dort liegt unsere Stärke: Eine
              AJAX-Funkanlage kommt ohne Schlitze, ohne Staub und ohne
              Kabelkanäle aus — auch im denkmalgeschützten Altbau, in der
              Mietwohnung oder im fertig renovierten Haus.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Keine Bauarbeiten",
                  text: "Funkkomponenten werden verschraubt oder geklebt. Kein Stemmen, kein Verputzen, kein Malern danach.",
                },
                {
                  title: "Meist an einem Tag fertig",
                  text: "Die Montage einer typischen Anlage im Einfamilienhaus dauert selten länger als einen Arbeitstag.",
                },
                {
                  title: "Auch zur Miete möglich",
                  text: "Rückstandsfrei demontierbar — die Anlage zieht bei einem Umzug einfach mit um.",
                },
                {
                  title: "Batterien halten Jahre",
                  text: "Bis zu sieben Jahre Laufzeit je Melder, mit rechtzeitiger Warnung in der App.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="border border-line/10 bg-surface rounded-2xl p-5"
                >
                  <p className="font-semibold text-fg text-sm">{item.title}</p>
                  <p className="mt-1.5 text-sm text-fg-muted leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link href="#kontakt" className="btn-tech btn-tech-solid">
                <span>Altbau-Beratung anfragen</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videoüberwachung */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Videoüberwachung</p>
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
                Eine Kamera zu haben heißt nicht,{" "}
                <span className="text-[#9162a4]">etwas zu sehen.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-fg-muted leading-relaxed">
                Die meisten Anlagen liefern genau dann nichts Verwertbares, wenn
                es darauf ankommt: nachts, auf Distanz, bei schlechtem Licht.
                Wir planen jeden Kamerastandort nach DORI-Kriterien und arbeiten
                mit Dahua, HIK Vision und Mobotix — vom kompakten Dome am
                Eingang bis zur Wärmebildkamera für das Grundstück.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Nachtbild */}
            <div className="lg:col-span-5">
              <div className="tech-corners relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-line/10 bg-ink">
                <span className="tc-tl" aria-hidden="true" />
                <span className="tc-br" aria-hidden="true" />
                <Image
                  src="/videoueberwachung-haus-nacht.webp"
                  alt="Außenkamera mit Infrarot-Nachtsicht an einem Einfamilienhaus, Terrasse und Garten bei Nacht"
                  fill
                  sizes="(min-width:1024px) 30rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Features */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-line/5 border border-line/5 rounded-2xl overflow-hidden">
              {videoFeatures.map((f) => (
                <article key={f.name} className="bg-surface p-7 md:p-8 flex flex-col gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#9162a4]" />
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{f.name}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{f.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link href="#kontakt" className="btn-tech btn-tech-solid">
              <span>Kamerakonzept anfragen</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DSGVO */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Rechtssicherheit</p>
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
                DSGVO-konform ist kein Häkchen.{" "}
                <span className="text-[#9162a4]">Es ist Planungsarbeit.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-fg-muted leading-relaxed">
                Eine falsch ausgerichtete Kamera kann Sie mehr kosten als der
                Einbruch, vor dem sie schützen soll. Wir planen und dokumentieren
                so, dass Ihre Aufnahmen im Ernstfall verwertbar sind — und nicht
                gegen Sie verwendet werden.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-line/5 border border-line/5 rounded-2xl overflow-hidden">
              {legalPoints.map((l) => (
                <article key={l.title} className="bg-surface p-7 flex flex-col gap-3">
                  <span className="w-5 h-5 shrink-0 rounded-full border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5l2 2 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-fg">{l.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{l.text}</p>
                </article>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="tech-corners relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-line/10 bg-ink">
                <span className="tc-tl" aria-hidden="true" />
                <span className="tc-br" aria-hidden="true" />
                <Image
                  src="/videoueberwachung-dome-kamera.webp"
                  alt="Moderne Dome-Überwachungskamera, sauber unter der Gebäudekante montiert"
                  fill
                  sizes="(min-width:1024px) 30rem, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-fg-faint max-w-2xl leading-relaxed">
            Hinweis: Wir setzen die technischen und organisatorischen Maßnahmen
            um und dokumentieren sie. Eine Rechtsberatung ersetzt das nicht.
          </p>
        </div>
      </section>

      {/* Installation & Service process */}
      <section className="relative bg-base text-fg py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <p className="md:col-span-3 label-mono text-[#9162a4]">/ Installation & Service</p>
            <h2 className="md:col-span-9 text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
              Von der Beratung bis zum{" "}
              <span className="text-[#9162a4]">laufenden Service.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/5 border border-line/5 rounded-2xl overflow-hidden">
            {installSteps.map((s) => (
              <article key={s.step} className="bg-surface p-7 md:p-8 flex flex-col gap-4">
                <span className="label-mono text-[#9162a4]">{s.step}</span>
                <h3 className="text-lg font-semibold tracking-tight text-fg">{s.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link href="#kontakt" className="btn-tech btn-tech-solid">
              <span>Installationstermin anfragen</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / social proof */}
      <Trust />

      {/* Google-Rezensionen */}
      <GoogleReviews />

      {/* Conversion CTA */}
      <Contact />
    </>
  );
}
