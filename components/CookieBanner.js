"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "vc-cookie-consent";
export const OPEN_EVENT = "vc:open-cookie-settings";

/**
 * DSGVO-konformer Cookie-Hinweis.
 *
 * Die Website setzt ausschließlich technisch notwendige Daten ein (kein
 * Tracking, keine Analyse). Der Banner informiert darüber und holt eine
 * bewusste Entscheidung ein. Diese wird nur lokal (localStorage) gespeichert,
 * damit der Hinweis nicht bei jedem Aufruf erscheint. Über den Footer-Link
 * „Cookie-Einstellungen“ lässt sich der Banner jederzeit erneut öffnen.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (!stored) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  // Einblend-Animation
  useEffect(() => {
    if (!open) {
      setShown(false);
      return;
    }
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const decide = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* Speicherung optional — Banner trotzdem schließen */
    }
    setShown(false);
    setTimeout(() => setOpen(false), 300);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Hinweis"
      className={`fixed inset-x-0 bottom-0 z-[9500] px-4 sm:px-6 pb-4 sm:pb-6 transition-all duration-300 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-[#9162a4]/25 bg-surface shadow-2xl p-6 sm:p-7">
        <p className="label-mono text-[#9162a4] inline-flex items-center gap-2 mb-3.5">
          <span aria-hidden="true" className="inline-block w-2.5 h-px bg-[#9162a4]" />
          Datenschutz
        </p>
        <h2 className="text-lg font-semibold tracking-tight text-fg mb-2">
          Wir respektieren Ihre Privatsphäre.
        </h2>
        <p className="text-sm text-fg-muted leading-relaxed">
          Diese Website verwendet ausschließlich technisch notwendige Daten —{" "}
          <strong className="text-fg">kein Tracking</strong>, keine
          Werbe-Cookies und keine Webanalyse. Ihre Auswahl speichern wir nur
          lokal in Ihrem Browser. Mehr dazu in unserer{" "}
          <Link
            href="/datenschutz"
            className="text-fg underline underline-offset-4 hover:text-[#9162a4] transition-colors"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => decide("all")}
            className="btn-tech btn-tech-solid flex-1 justify-center"
          >
            <span>Alle akzeptieren</span>
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            onClick={() => decide("essential")}
            className="btn-tech flex-1 justify-center"
          >
            <span>Nur notwendige</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer-Link, der den Cookie-Banner erneut öffnet. */
export function CookieSettingsButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
