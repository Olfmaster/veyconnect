import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Seite nicht gefunden",
  description: "Diese Seite existiert nicht (mehr).",
};

export default function NotFound() {
  return (
    <PageHero
      eyebrow="/ Fehler 404"
      title="Seite nicht"
      accent="gefunden."
      intro="Diese Adresse existiert nicht (mehr). Vielleicht wurde sie verschoben oder stammt aus einem älteren Webauftritt. Von hier aus geht es weiter:"
    >
      <div className="flex flex-wrap gap-4">
        <Link href="/" className="btn-tech btn-tech-solid">
          <span>Zur Startseite</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/leistungen" className="btn-tech">
          <span>Unsere Leistungen</span>
        </Link>
        <Link href="/kontakt" className="btn-tech">
          <span>Kontakt</span>
        </Link>
      </div>
    </PageHero>
  );
}
