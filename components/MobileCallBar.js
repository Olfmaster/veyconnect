import Link from "next/link";

const PHONE = "+4917624596941";

/**
 * Fixierte Anruf-/Anfrage-Leiste am unteren Bildschirmrand, nur auf Mobilgeräten.
 *
 * Bei Sicherheitsthemen wird deutlich häufiger angerufen als ein Formular
 * ausgefüllt — der Anruf gehört deshalb dauerhaft in Daumenreichweite.
 * z-Index bleibt unter dem Cookie-Banner (z-9500), damit die Einwilligung
 * nicht verdeckt wird.
 */
export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-[9000] border-t border-line/10 bg-base/95 backdrop-blur-md px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${PHONE}`}
          data-track-location="mobile-callbar"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#9162a4] text-white font-medium py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
            <path
              d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z"
              fill="currentColor"
            />
          </svg>
          Jetzt anrufen
        </a>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-line/20 text-fg font-medium px-5 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2"
        >
          Anfrage
        </Link>
      </div>
    </div>
  );
}
