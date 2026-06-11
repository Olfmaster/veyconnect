import LegalLayout, { Section } from "@/components/LegalLayout";

export const metadata = {
  title: "Impressum",
  description: "Impressum und Angaben gemäß §5 TMG für veyconnect.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout eyebrow="Rechtliches" title="Impressum" intro="Angaben gemäß §5 TMG.">
      <Section heading="Anbieter">
        <p>
          veyconnect
          <br />
          Jan Vey
          <br />
          Berliner Straße 28
          <br />
          61138 Niederdorfelden
          <br />
          Deutschland
        </p>
      </Section>

      <Section heading="Kontakt">
        <p>
          Telefon:{" "}
          <a href="tel:+4917624596941" className="text-fg underline underline-offset-4 hover:text-[#9162a4] transition-colors">
            +49 176 24596941
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@veyconnect.de" className="text-fg underline underline-offset-4 hover:text-[#9162a4] transition-colors">
            info@veyconnect.de
          </a>
          <br />
          Web:{" "}
          <a href="https://www.veyconnect.de" className="text-fg underline underline-offset-4 hover:text-[#9162a4] transition-colors">
            www.veyconnect.de
          </a>
        </p>
      </Section>

      <Section heading="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:{" "}
          DE370071051
        </p>
      </Section>

      <Section heading="Eintrag im Handelsregister">
        <p>Nicht im Handelsregister eingetragen.</p>
      </Section>

      <Section heading="Verantwortlich für den Inhalt nach §55 Abs. 2 RStV">
        <p>
          Jan Vey, Anschrift wie oben.
        </p>
      </Section>

      <Section heading="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-fg underline underline-offset-4 hover:text-[#9162a4] transition-colors"
          >
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </Section>

      <Section heading="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>

      <Section heading="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß §7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </Section>

      <Section heading="Urheberrecht">
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers.
        </p>
      </Section>
    </LegalLayout>
  );
}

