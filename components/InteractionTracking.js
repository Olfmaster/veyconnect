"use client";
import { useEffect } from "react";
import { track } from "@/lib/track";

/**
 * Meldet Klicks auf Telefon- und E-Mail-Links an den dataLayer.
 *
 * Ein einziger delegierter Listener am document statt onClick an jedem Link:
 * greift damit auch für Links, die später dazukommen (Footer, Landingpages,
 * Kontaktblock) — ohne dass jemand daran denken muss.
 */
export default function InteractionTracking() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.("a[href^='tel:'], a[href^='mailto:']");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const isTel = href.startsWith("tel:");
      track(isTel ? "tel_click" : "mail_click", {
        link_url: href,
        link_text: (link.textContent || "").trim().slice(0, 120),
        // Woher kam der Klick? Trennt den Header-Button vom Kontaktblock.
        link_location: link.dataset.trackLocation || "unbekannt",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
