import PageHero from "@/components/PageHero";
import Region from "@/components/Region";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Servicegebiet Rhein-Main · Vor Ort in Niederdorfelden, Frankfurt & Umgebung",
  description:
    "Vor Ort im Rhein-Main-Gebiet: Niederdorfelden, Frankfurt am Main, Offenbach, Hanau, Bad Vilbel, Bad Homburg und Umgebung. Anfahrt in wenigen Tagen.",
  alternates: { canonical: "/region" },
};

export default function RegionPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Servicegebiet"
        title="Vor Ort im"
        accent="Rhein-Main-Gebiet."
        intro="Hauptsitz in Niederdorfelden. Wir sind in der Regel innerhalb weniger Tage vor Ort, von Frankfurt über Offenbach und Hanau bis Bad Homburg. Auch außerhalb dieser Liste auf Anfrage erreichbar."
      />
      <Region />
      <Contact />
    </>
  );
}
