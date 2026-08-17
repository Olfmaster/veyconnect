import Link from "next/link";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Leistungen — Sicherheit aus einer Hand",
  description:
    "Einbruchschutz, Brandschutz, Zutrittskontrolle, Altbau-Modernisierung und Smart-Home-Integration aus einer Hand — geplant, installiert und gewartet von veyconnect.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Leistungen"
        title="Sicherheits­lösungen"
        accent="aus einer Hand."
        intro="Vom Funkalarm über die Türsprechanlage bis hin zum vernetzten UniFi-Backbone: veyconnect plant, installiert und wartet alle Gewerke selbst. Keine Schnittstellen, kein Verantwortungs-Ping-Pong."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/kontakt" className="btn-tech btn-tech-solid">
            <span>Beratung anfragen</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/partner" className="btn-tech">
            <span>Unsere Partner</span>
          </Link>
        </div>
      </PageHero>

      <Services showHeader={false} />
      <CtaBand
        title="Nicht sicher, welche Leistung Sie brauchen?"
        text="Sagen Sie uns, was Sie schützen wollen — wir schlagen vor, was wirklich nötig ist. Kostenlose Vor-Ort-Analyse, Rückmeldung innerhalb eines Werktages."
      />
      <Contact />
    </>
  );
}
