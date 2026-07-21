"use client";
import Script from "next/script";

const GTM_ID = "GTM-KWJ242W3";

/**
 * Aktualisiert den Consent-Status zur Laufzeit (Google Consent Mode v2).
 * Wird vom Cookie-Banner aufgerufen, sobald der Nutzer entschieden hat.
 */
export function setConsent(granted) {
  const v = granted ? "granted" : "denied";
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

/**
 * Lädt den Google Tag Manager auf ALLEN Seiten (Google Consent Mode v2).
 *
 * Der Consent-Default steht auf `denied` — gesetzt im `consent-default`-Script
 * im <head> (app/layout.js), das VOR dem GTM läuft. Ohne Einwilligung sendet
 * Google nur cookielose, nicht personenbezogene Signale (daraus modelliert
 * Google die Conversions); bei „Alle akzeptieren“ hebt der Cookie-Banner den
 * Status per setConsent() auf `granted` an, erst dann werden Cookies gesetzt.
 */
export default function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        />
      </noscript>
    </>
  );
}
