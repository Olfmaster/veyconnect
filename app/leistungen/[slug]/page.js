import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import { services } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: `/leistungen/${slug}` },
  };
}

const SITE_URL = "https://www.veyconnect.de";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();

  const s = services[idx];
  const d = s.detail;
  const next = services[(idx + 1) % services.length];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/leistungen/${slug}#service`,
    name: s.metaTitle,
    description: s.metaDesc,
    url: `${SITE_URL}/leistungen/${slug}`,
    image: `${SITE_URL}${s.image}`,
    serviceType: s.metaTitle,
    areaServed: { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" },
    provider: { "@id": `${SITE_URL}/#business` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.metaTitle,
      itemListElement: d.sections
        .flatMap((sec) => sec.items)
        .map((it) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: it.t, description: it.d },
        })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
      { "@type": "ListItem", position: 3, name: s.metaTitle, item: `${SITE_URL}/leistungen/${slug}` },
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

      {/* Detailkarte im Stil des Leistungs-Pop-outs — mit einem Foto */}
      <section className="relative bg-base text-fg pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6 md:px-10 overflow-hidden border-b border-line/5">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-50" />

        <div className="relative max-w-2xl mx-auto">
          <div className="mb-6">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 label-mono text-fg-muted hover:text-[#9162a4] transition-colors"
            >
              <span aria-hidden="true">←</span> Alle Leistungen
            </Link>
          </div>

          <article className="flex flex-col overflow-hidden rounded-2xl border border-[#9162a4]/25 bg-surface shadow-2xl">
            {/* Foto */}
            <div className="relative aspect-[16/9] overflow-hidden bg-base">
              <Image
                src={s.image}
                alt={s.title}
                fill
                priority
                sizes="(min-width:768px) 42rem, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-5 label-mono text-[#9162a4]">
                {s.number}
              </span>
            </div>

            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-line/5">
              <p className="label-mono text-[#9162a4] inline-flex items-center gap-2 mb-3.5">
                <span aria-hidden="true" className="inline-block w-2.5 h-px bg-[#9162a4]" />
                {d.cat}
              </p>
              <h1 className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.02em] text-fg leading-tight">
                {s.title}
              </h1>
              <div className="w-7 h-px bg-[#9162a4] mt-3" />
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-6">
              <p className="text-[15px] text-fg-muted leading-relaxed mb-6">{d.lead}</p>

              {d.tags?.length > 0 && (
                <ul className="flex flex-wrap gap-2 mb-6">
                  {d.tags.map((t) => (
                    <li
                      key={t}
                      className="label-mono text-[10px] px-2.5 py-1.5 border border-[#9162a4]/20 rounded-full text-[#9162a4]/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              {d.note && (
                <div className="border-l-2 border-[#9162a4]/40 bg-[#9162a4]/[0.04] px-4 py-3.5 mb-7">
                  <p className="text-sm text-fg-muted leading-relaxed italic">{d.note}</p>
                </div>
              )}

              {d.sections.map((sec) => (
                <div key={sec.title} className="mb-7 last:mb-0">
                  <p className="label-mono text-[#9162a4] mb-4 flex items-center gap-3">
                    {sec.title}
                    <span aria-hidden="true" className="flex-1 h-px bg-[#9162a4]/20" />
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {sec.items.map((it) => (
                      <li key={it.t} className="flex gap-3.5 items-start">
                        <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5l2 2 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold text-fg uppercase tracking-wide mb-0.5">
                            {it.t}
                          </p>
                          <p className="text-[13px] text-fg-muted leading-relaxed">{it.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-5 border-t border-line/5">
              <Link href="/kontakt" className="btn-tech btn-tech-solid w-full">
                <span>Unverbindlich anfragen</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Weiter zur nächsten Leistung */}
          <div className="mt-10 flex items-center justify-between gap-4">
            <p className="label-mono text-fg-faint">/ Weiter</p>
            <Link
              href={`/leistungen/${next.slug}`}
              className="group inline-flex items-center gap-3 text-lg md:text-2xl font-semibold tracking-[-0.02em] text-fg hover:text-[#9162a4] transition-colors text-right"
            >
              {next.title}
              <span aria-hidden="true" className="text-[#9162a4] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
