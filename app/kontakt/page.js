import Contact from "@/components/Contact";

export const metadata = {
  title: "Kontakt — Kostenlose Sicherheits­beratung",
  description:
    "Kostenlose Vor-Ort-Beratung mit Sicherheits­analyse. Eine kurze Beschreibung Ihres Vorhabens reicht — wir melden uns innerhalb eines Werktages zurück.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
