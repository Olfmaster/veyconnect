import Link from "next/link";

/**
 * Kompaktes Handlungsaufforderungs-Band für die Seitenmitte.
 *
 * Bisher gab es pro Seite nur den einen Kontaktblock ganz unten — wer vorher
 * abspringt, hat nie einen Anfrage-Weg gesehen. Bewusst schmal gehalten, damit
 * es zwischen zwei Inhaltssektionen nicht wie eine eigene Sektion wirkt.
 */
export default function CtaBand({
  title = "Unsicher, was Ihr Objekt braucht?",
  text = "Wir schauen es uns kostenlos vor Ort an und sagen Ihnen ehrlich, was sinnvoll ist und was nicht. Rückmeldung innerhalb eines Werktages.",
}) {
  return (
    <section className="relative bg-base px-6 md:px-10 py-14 md:py-16 border-b border-line/5">
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative max-w-6xl mx-auto rounded-2xl border border-[#9162a4]/25 bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-fg">
            {title}
          </h2>
          {/* Kein `md:text-base`: Das Theme definiert --color-base, wodurch
              Tailwind `text-base` als TEXTFARBE erzeugt und die eingebaute
              Schriftgrößen-Utility überschattet. Hinter einem Breakpoint
              gewinnt sie gegen text-fg-muted und malt den Text in der
              Hintergrundfarbe. */}
          <p className="mt-2 text-sm md:text-[1.05rem] text-fg-muted leading-relaxed max-w-xl">
            {text}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link href="/kontakt" className="btn-tech btn-tech-solid">
            <span>Beratung anfragen</span>
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="tel:+4917624596941"
            data-track-location="cta-band"
            className="btn-tech"
          >
            <span>0176 24596941</span>
          </a>
        </div>
      </div>
    </section>
  );
}
