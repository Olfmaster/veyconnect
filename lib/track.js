/**
 * Schiebt ein Event in den dataLayer, aus dem der GTM-Container es abgreift.
 *
 * Bewusst ohne Consent-Prüfung: Der dataLayer selbst setzt keine Cookies. Ob
 * daraus ein Tag feuert und was gespeichert wird, entscheidet der Consent Mode
 * (Default `denied`, siehe consent-default in app/layout.js).
 */
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
