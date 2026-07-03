"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GTM_ID = "GTM-KWJ242W3";
const STORAGE_KEY = "vc-cookie-consent";

/** Wird vom Cookie-Banner ausgelöst, sobald „Alle akzeptieren“ gewählt wurde. */
export const CONSENT_GRANTED_EVENT = "vc:consent-granted";

/**
 * Lädt den Google Tag Manager ausschließlich nach erteilter Einwilligung
 * (Cookie-Consent === "all"). Ohne Zustimmung wird nichts geladen und keine
 * Daten an Google übertragen. Weil der Container selbst nur mit Einwilligung
 * geladen wird, laufen auch alle GTM-Tags (Conversion-Tracking) erst dann.
 */
export default function GoogleTagManager() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === "all") setEnabled(true);

    const grant = () => setEnabled(true);
    window.addEventListener(CONSENT_GRANTED_EVENT, grant);
    return () => window.removeEventListener(CONSENT_GRANTED_EVENT, grant);
  }, []);

  if (!enabled) return null;

  return (
    <Script id="gtm-loader" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
