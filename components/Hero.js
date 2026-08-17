import Image from "next/image";
import Link from "next/link";
import HeroFX from "./HeroFX";

const coreServices = [
  {
    id: "01",
    slug: "smart-home",
    title: "Smarte Sicherheits­integration",
    desc: "UniFi, KNX, AJAX und Cloud: alles aus einer Hand vernetzt und zentral steuerbar.",
    image: "/smart-home-steuerung.webp",
  },
  {
    id: "02",
    slug: "einbruchschutz",
    title: "Einbruchschutz & Videoüberwachung",
    desc: "AJAX-Funkalarm, 4K-Kameras von Dahua, HIK Vision, Mobotix, bis Thermal- und Telezoom.",
    image: "/einbruchschutz-videoueberwachung.webp",
  },
  {
    id: "03",
    slug: "brandschutz",
    title: "Brandschutz & Gefahrenprävention",
    desc: "Vernetzte Rauchmelder, CO- und Gasmelder, Hausnotrufsysteme, normgerecht & vernetzt.",
    image: "/brandschutz-rauchmelder.webp",
  },
  {
    id: "04",
    slug: "zutrittskontrolle",
    title: "Zutrittskontrolle & Türsysteme",
    desc: "Siedle & Doorbird Sprechanlagen, Fingerprint, Transponder, Torantriebe.",
    image: "/zutrittskontrolle-tuersystem.webp",
  },
];

// Server-Komponente: die Intro-Animation läuft rein über CSS (.vc-fade-up /
// .vc-line-up in globals.css) und startet mit dem ersten Paint. Vorher hielt
// eine GSAP-Timeline im useEffect diese Elemente bis zur Hydration auf
// opacity:0 — der Fließtext unten ist das LCP-Element und wurde dadurch erst
// nach dem JS-Bundle sichtbar. Hier darf kein JS mehr davorstehen.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-start text-center px-6 md:px-10 pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden text-fg bg-base"
    >
      <HeroFX />

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl">
        {/* eyebrow with Ajax certified badge */}
        <p
          className="vc-fade-up label-mono inline-flex items-center gap-2 sm:gap-3 text-[#9162a4] mb-8 px-3 py-1.5 border border-[#9162a4]/30 rounded-full bg-[#9162a4]/5 max-w-full text-center"
        >
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] animate-pulse shrink-0" />
          <span>
            <span className="hidden sm:inline">Zertifizierter </span>Premium-Partner <span className="hidden sm:inline">von </span>AJAX Systems
          </span>
        </p>

        <h1 className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] leading-[0.98] sm:leading-[0.95] max-w-5xl">
          <span className="block overflow-hidden pb-[0.12em]">
            <span className="vc-line-up block" style={{ "--vc-delay": "0.08s" }}>
              Einbruchschutz &amp; Sicherheits&shy;technik
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span
              className="vc-line-up block text-[#9162a4]"
              style={{ "--vc-delay": "0.18s" }}
            >
              für Zuhause &amp; Unternehmen.
            </span>
          </span>
        </h1>

        {/* LCP-Element: bewusst nur .vc-rise (transform) statt .vc-fade-up —
            ein Fade ab opacity:0 wäre für Chrome nicht "contentful" und würde
            das LCP wieder nach hinten schieben. */}
        <p
          className="vc-rise mt-8 text-base md:text-lg text-fg-muted max-w-2xl leading-relaxed"
          style={{ "--vc-delay": "0.1s" }}
        >
          VeyConnect entwickelt moderne Lösungen für Einbruchschutz,
          Videoüberwachung, Zutrittskontrolle und Smart Home: von der
          Beratung bis zur Installation bis zur laufenden Betreuung, alles
          aus einer Hand.
        </p>

        <div
          className="vc-fade-up mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          style={{ "--vc-delay": "0.3s" }}
        >
          <Link href="/kontakt" className="btn-tech btn-tech-solid">
            <span>Kostenlose Sicherheitsberatung</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/leistungen" className="btn-tech">
            <span>Leistungen entdecken</span>
          </Link>
        </div>

        {/* Kernleistungen — 4 cards under headline */}
        <div className="relative mt-16 md:mt-20 w-full">
          <div className="flex items-end justify-between mb-5 px-1">
            <p className="label-mono text-fg-faint">Kernleistungen / 04</p>
            <Link
              href="/leistungen"
              className="label-mono text-fg-muted hover:text-[#9162a4] transition-colors inline-flex items-center gap-2"
            >
              alle ansehen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {coreServices.map((s, i) => (
              <Link
                key={s.id}
                href={`/leistungen/${s.slug}`}
                className="vc-fade-up group relative block text-left rounded-2xl overflow-hidden border border-line/10 bg-surface hover:border-[#9162a4]/60 transition-all duration-300 hover:-translate-y-0.5"
                style={{ "--vc-delay": `${0.38 + i * 0.06}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-base">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 24vw, (min-width:640px) 48vw, 92vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 label-mono text-[#9162a4]/90">
                    {s.id}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight leading-snug text-fg">
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-sm text-fg-muted leading-relaxed">
                    {s.desc}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-1 label-mono text-[#9162a4] inline-flex items-center gap-2 transition-transform duration-300 origin-left group-hover:scale-110"
                  >
                    Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 label-mono text-fg-faint z-10"
        aria-hidden="true"
      >
        <span>scrollen</span>
        <span className="block w-px h-8 bg-gradient-to-b from-fg-faint to-[#9162a4]" />
      </div>
    </section>
  );
}
