import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Partner — Premium-Partner AJAX Systems",
  description:
    "Zertifizierter Premium-Partner von AJAX Systems sowie Gira, Hager, Siedle, Doorbird, Dahua, UniFi, Mobotix und HIK Vision. Direkter Herstellerzugang, Originalkomponenten und Premium-Support.",
  alternates: { canonical: "/partner" },
};

const ajaxFacts = [
  { k: "Tier", v: "Premium-Partner" },
  { k: "Linie", v: "Komplettes AJAX-Ökosystem" },
  { k: "Region", v: "Rhein-Main-Gebiet" },
  { k: "Garantie", v: "Original-Hersteller­garantie" },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Partner"
        title="Marken, denen wir"
        accent="vertrauen."
        intro="Wir arbeiten ausschließlich mit zertifizierten Herstellern aus Sicherheits- und Gebäudetechnik. Direkter Herstellerzugang, neueste Firmware, Originalkomponenten."
      />

      {/* AJAX Premium Hero */}
      <section className="relative bg-base py-20 md:py-28 px-6 md:px-10 border-b border-line/5 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-60 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="tech-corners rounded-3xl border border-[#9162a4]/30 bg-gradient-to-br from-surface via-surface to-base p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <span className="tc-tl" />
            <span className="tc-br" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <p className="label-mono text-[#9162a4] mb-5 inline-flex items-center gap-2">
                  <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] animate-pulse" />
                  Premium-Partner / Tier 01
                </p>

                <div className="inline-flex items-center justify-center w-full max-w-[340px] mb-8 rounded-2xl overflow-hidden border border-line/10">
                  <Image
                    src="/partner/ajax_logo.jpg"
                    alt="AJAX Systems"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                <dl className="grid grid-cols-2 gap-px bg-line/5 border border-line/5 rounded-xl overflow-hidden text-sm">
                  {ajaxFacts.map((f) => (
                    <div key={f.k} className="bg-surface p-4">
                      <dt className="label-mono text-fg-faint mb-1">{f.k}</dt>
                      <dd className="text-fg font-medium">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
                  AJAX Systems — <span className="text-[#9162a4]">wireless security, perfected.</span>
                </h2>
                <p className="mt-5 text-fg-muted leading-relaxed">
                  AJAX baut die wahrscheinlich saubersten Funk­alarmanlagen
                  der Welt — verschlüsselt, batterie­arm, schön gestaltet.
                  Als <span className="text-fg font-medium">zertifizierter Premium-Partner</span>{" "}
                  installieren und konfigurieren wir das komplette
                  AJAX-Ökosystem aus einer Hand.
                </p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-fg-muted">
                  {[
                    "Funkalarm-Zentralen & Außensirenen",
                    "Bewegungs-, Glasbruch- & Brandmelder",
                    "Smarte Steckdosen & Relais",
                    "Cloud-App für iOS & Android",
                    "Verschlüsselte Funkstrecke",
                    "Schulungen direkt vom Hersteller",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9162a4] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/leistungen" className="btn-tech btn-tech-solid">
                    <span>AJAX im Einsatz</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/kontakt" className="btn-tech">
                    <span>Persönliche Beratung</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of partner brands grid (reuse Partners but hide AJAX block) */}
      <PartnersOnlyGrid />

      <Contact />
    </>
  );
}

function PartnersOnlyGrid() {
  const logos = [
    { name: "Gira", src: "/partner/gira_logo.jpg" },
    { name: "Hager", src: "/partner/hager_logo.jpg" },
    { name: "Siedle", src: "/partner/siedle_logo.jpg" },
    { name: "Doorbird", src: "/partner/doorbird_logo.jpg" },
    { name: "Dahua", src: "/partner/dahua_logo.jpg" },
    { name: "UniFi", src: "/partner/unifi_logo.jpg" },
  ];
  const others = [
    "Mobotix",
    "HIK Vision",
    "Busch-Jaeger",
    "Schneider Electric",
    "KNX",
  ];
  return (
    <section className="relative bg-base py-24 md:py-32 px-6 md:px-10 border-b border-line/5 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <p className="md:col-span-3 label-mono text-[#9162a4]">/ Weitere Marken</p>
          <h2 className="md:col-span-9 text-3xl md:text-4xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.05]">
            Zertifizierte Hersteller, sauber integriert.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative aspect-square rounded-xl overflow-hidden border border-line/5 hover:scale-[1.02] transition-transform"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {others.map((b) => (
            <li
              key={b}
              className="label-mono px-3.5 py-2 border border-line/10 rounded-full text-fg-muted bg-surface"
            >
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] mr-2 align-middle" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
