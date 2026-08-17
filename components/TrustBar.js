import { getGoogleReviews } from "@/lib/google-reviews";

/**
 * Schmale Vertrauensleiste direkt unter dem Hero.
 *
 * Die harten Signale standen bisher erst weit unten auf der Seite (Trust-,
 * Certifications- und Reviews-Sektion) — nach einem bezahlten Klick entscheidet
 * sich aber im ersten Bildschirm, ob jemand bleibt.
 *
 * Bewertung und Anzahl kommen live aus der Places API (stündlich gecacht, siehe
 * lib/google-reviews.js). Fällt die API aus, greifen die bekannten Werte.
 */
export default async function TrustBar() {
  const data = await getGoogleReviews();
  const rating = (data?.rating ?? 5.0).toFixed(1).replace(".", ",");
  const count = data?.count ?? 37;

  const items = [
    { strong: `${rating} Sterne`, rest: `bei ${count}+ Google-Bewertungen` },
    { strong: "Zertifizierter", rest: "AJAX Premium-Partner" },
    { strong: "Seit 2023", rest: "im Rhein-Main-Gebiet" },
    { strong: "24/7", rest: "im Notfall erreichbar" },
  ];

  return (
    <section
      aria-label="Vertrauenssignale"
      className="relative bg-surface border-y border-line/10 px-6 md:px-10 py-5"
    >
      <ul className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
        {items.map((item) => (
          <li key={item.strong} className="flex items-start gap-2.5 text-sm leading-snug">
            <span
              aria-hidden="true"
              className="mt-[3px] w-4 h-4 shrink-0 rounded-full bg-[#9162a4]/10 border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5">
                <path
                  d="m5 12 5 5L20 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-fg-muted">
              <span className="font-semibold text-fg">{item.strong}</span> {item.rest}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
