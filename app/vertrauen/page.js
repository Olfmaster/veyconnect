import PageHero from "@/components/PageHero";
import Trust from "@/components/Trust";
import PainPoints from "@/components/PainPoints";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Vertrauen — Sicherheitstechnik-Fachbetrieb im Rhein-Main",
  description:
    "Sicherheitstechnik-Fachbetrieb mit Elektro-Partner, zertifizierter AJAX-Premium-Partner, alles aus einer Hand und spezialisiert auf Altbau & Bestand im Rhein-Main-Gebiet.",
  alternates: { canonical: "/vertrauen" },
};

export default function VertrauenPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Vertrauen"
        title="Kompetenz, auf die"
        accent="Sie bauen können."
        intro="VeySecure ist die Sicherheitswelt von veyconnect — gegründet 2023, zertifizierter Premium-Partner von AJAX Systems und spezialisiert auf Bestand, Altbau und ganzheitliche Sicherheits­konzepte im Rhein-Main-Gebiet."
      />

      <Trust />
      <Manifesto />
      <PainPoints />
      <Contact />
    </>
  );
}
