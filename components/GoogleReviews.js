import { getGoogleReviews } from "@/lib/google-reviews";

// Fallback-Bewertungen, falls die Places API nicht erreichbar ist (z. B. weil der
// API-Key auf HTTP-Referrer beschränkt ist und serverseitige Calls blockt).
// Stand: echte Google-Rezensionen, manuell gepflegt.
const FALLBACK_PROFILE_URL = "https://share.google/5CA0vEFH01kr9Ft1d";
const FALLBACK_RATING = 5.0;
const FALLBACK_COUNT = 36;

const FALLBACK_REVIEWS = [
  {
    quote:
      "Ich schreibe eigentlich selten Bewertungen. Hier lohnt es sich aber auch für andere! Super zuverlässiger und lösungsorientierter Betrieb mit ordentlichem Preis-Leistungsverhältnis. Herr Vey ist zudem sehr sympathisch, hört zu und unterbreitet dann innovative Vorschläge ohne die „Ich-will-was-verkaufen\"-Masche. Wir haben dieses Jahr mehrere Modernisierungen von ihm durchführen lassen. Alles top! 100% Weiterempfehlung!",
    author: "Ann P.",
    when: "vor 6 Monaten",
  },
  {
    quote:
      "Wir sind rundum zufrieden! Die Reparatur unserer Klingelanlage in unserem Mehrfamilienhaus wurde absolut zuverlässig und professionell durchgeführt. Die Kommunikation war durchweg hervorragend – stets erreichbar, freundlich und flexibel in der Terminabsprache. Die Arbeit wurde zügig, sauber und in hoher Qualität umgesetzt. So wünscht man sich Handwerker! Klare Weiterempfehlung – jederzeit wieder!",
    author: "Ziduna Z.",
    when: "vor 11 Monaten",
  },
  {
    quote:
      "Ich kann Herrn Vey nur wärmstens empfehlen! Vom ersten Kontakt bis zur Fertigstellung der Arbeiten hat er uns professionell und freundlich beraten. Mit seiner schnellen, sauberen Arbeitsweise und seinem Auge fürs Detail hat er meine Erwartungen bei Weitem übertroffen. Vielen Dank und auf viele weitere Projekte!",
    author: "Catalin K.",
    when: "vor einem Jahr",
  },
  {
    quote:
      "Von der Beratung bis zur Installation eine tolle Erfahrung gemacht. Transparent, zuverlässig und immer erreichbar.",
    author: "Wassili B.",
    when: "vor 8 Monaten",
  },
  {
    quote:
      "Herr Vey hat unser Problem mit dem Internet super schnell gelöst. Endlich mal jemand, auf den man sich 1000%ig verlassen kann.",
    author: "Natascha H.",
    when: "vor 8 Monaten",
  },
  {
    quote:
      "Ich habe Herrn Vey zufällig kennengelernt und habe erfahren, dass er Alarmanlagen einbaut. Mit Planung, Umsetzung und Funktion sind wir super zufrieden und können ihn nur weiterempfehlen!",
    author: "Alessa R.",
    when: "vor 3 Monaten",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-[#9162a4] fill-current">
          <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.7 1.2 6.6L12 18.6 6.1 20.8l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

const SITE_URL = "https://www.veyconnect.de";

export default async function GoogleReviews() {
  const live = await getGoogleReviews();

  const reviews = live?.reviews ?? FALLBACK_REVIEWS;
  const rating = live?.rating ?? FALLBACK_RATING;
  const reviewCount = live?.count ?? FALLBACK_COUNT;
  const profileUrl = live?.profileUrl ?? FALLBACK_PROFILE_URL;

  // Ergänzt die im Layout definierte LocalBusiness-Entität (gleiche @id) um die
  // Bewertung — nur auf der Seite, die die Rezensionen tatsächlich ausspielt.
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(rating),
      bestRating: "5",
      reviewCount: String(reviewCount),
    },
  };

  return (
    <section
      id="bewertungen"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-base text-fg overflow-hidden border-b border-line/5"
      aria-label="Google-Bewertungen"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label-mono text-[#9162a4] mb-5">/ Bewertungen</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] max-w-2xl leading-[1.05]">
              Das sagen <span className="text-[#9162a4]">unsere Kund:innen.</span>
            </h2>
          </div>

          <div className="md:col-span-5 flex flex-col gap-3 md:items-end">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-line/10 bg-surface px-5 py-4">
              <span className="text-4xl font-semibold tabular-nums tracking-[-0.03em]">
                {rating.toFixed(1).replace(".", ",")}
              </span>
              <span className="flex flex-col gap-1">
                <Stars count={5} />
                <span className="label-mono text-fg-faint">
                  {reviewCount}+ Google-Rezensionen
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-line/10 bg-surface p-7 hover:border-[#9162a4]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars count={5} />
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path fill="#9162a4" d="M12 11v2.8h3.9c-.2 1-.9 1.9-1.8 2.5v2h2.9c1.7-1.6 2.6-3.9 2.6-6.5 0-.6-.1-1.2-.2-1.8H12z" />
                  <path fill="#7d5292" d="M6.5 14.3l-.5.4-1.8 1.4C5.6 18.7 8.6 20.5 12 20.5c2.4 0 4.5-.8 6-2.2l-2.9-2c-.8.5-1.8.8-3.1.8-2.4 0-4.4-1.6-5.1-3.8z" />
                  <path fill="#9162a4" d="M4.2 8.4C3.6 9.5 3.3 10.7 3.3 12s.3 2.5.9 3.6l2.3-1.8c-.2-.5-.3-1.1-.3-1.8s.1-1.3.3-1.8L4.2 8.4z" />
                  <path fill="#6f4885" d="M12 6.4c1.3 0 2.5.5 3.4 1.3l2.6-2.6C16.5 3.7 14.4 2.9 12 2.9 8.6 2.9 5.6 4.8 4.2 7.6l2.3 1.8C7.2 7.2 9.2 6.4 12 6.4z" />
                </svg>
              </div>
              <blockquote className="text-sm text-fg-muted leading-relaxed flex-1">
                „{r.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-line/10 text-xs text-fg-faint">
                <span className="text-fg font-medium">{r.author}</span>
                {r.when ? ` · ${r.when}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tech"
        >
          <span>Alle Bewertungen auf Google ansehen</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
