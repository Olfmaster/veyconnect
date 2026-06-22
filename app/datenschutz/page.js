import LegalLayout, { Section } from "@/components/LegalLayout";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß DSGVO für veyconnect.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      intro="Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Erklärung informiert Sie gemäß Art. 13 DSGVO über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten beim Besuch dieser Website."
    >
      <Section heading="1. Verantwortlicher">
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
          <br />
          <br />
          E-Mail:{" "}
          <a href="mailto:info@veyconnect.de" className="text-fg underline underline-offset-4 hover:text-[#9162a4] transition-colors">
            info@veyconnect.de
          </a>
          <br />
          Telefon: +49 176 24596941
        </p>
      </Section>

      <Section heading="2. Server-Logfiles">
        <p>
          Beim Aufruf dieser Website werden durch unseren Hosting-Anbieter
          technische Zugriffsdaten in Server-Logfiles gespeichert (IP-Adresse
          gekürzt, Zeitpunkt, aufgerufene Seite, User-Agent). Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          Stabilität und Sicherheit).
        </p>
        <p>
          Hosting:{" "}
          <strong>Hostinger International Ltd.</strong>, 61 Lordou Vironos
          Street, 6023 Larnaca, Zypern. Mit dem Anbieter besteht ein
          Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.
        </p>
      </Section>

      <Section heading="3. Kontaktformular">
        <p>
          Wenn Sie uns über das Kontaktformular eine Nachricht senden,
          verarbeiten wir die mitgeteilten Daten (Name, E-Mail, optional
          Telefon, Nachrichtentext) ausschließlich zur Beantwortung Ihrer
          Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a bzw. lit. b DSGVO.
        </p>
        <p>
          Zum technischen Versand nutzen wir den Dienst <strong>Resend</strong>{" "}
          (Resend, Inc., 2261 Market Street #4818, San Francisco, CA 94114,
          USA). Mit Resend besteht ein Auftragsverarbeitungsvertrag.
          Übermittlungen in die USA sind durch Standardvertragsklauseln bzw.
          das EU-US Data Privacy Framework abgesichert.
        </p>
        <p>
          Anfragen werden gelöscht, sobald die Bearbeitung abgeschlossen ist
          und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </Section>

      <Section heading="4. Cookies & Einwilligung">
        <p>
          Diese Website verwendet <strong>keine</strong> Tracking-Cookies und{" "}
          <strong>kein</strong> Webanalyse-Tool wie Google Analytics. Es
          werden ausschließlich technisch notwendige Daten verarbeitet.
        </p>
        <p>
          Beim ersten Besuch zeigen wir einen Cookie-Hinweis. Ihre Entscheidung
          speichern wir ausschließlich lokal in Ihrem Browser (localStorage,
          Schlüssel <code>vc-cookie-consent</code>), damit der Hinweis nicht bei
          jedem Aufruf erneut erscheint. Diese Speicherung ist technisch
          notwendig (Art. 6 Abs. 1 lit. f DSGVO), erfolgt ohne Übertragung an
          Dritte und enthält keine personenbezogenen Profile. Sie können die
          Auswahl jederzeit über den Link „Cookie-Einstellungen“ im Seitenfuß
          erneut aufrufen.
        </p>
      </Section>

      <Section heading="5. Videoüberwachung beim Kunden">
        <p>
          Bei von uns installierten Videoüberwachungsanlagen ist nicht
          veyconnect, sondern der jeweilige Betreiber der Anlage (z. B. Sie als
          Eigentümer*in) für die Datenverarbeitung verantwortlich. Wir
          beraten gerne zu DSGVO-konformer Kennzeichnung und Konfiguration.
        </p>
      </Section>

      <Section heading="6. Ihre Rechte">
        <p>Ihnen stehen folgende Rechte zu:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
      </Section>

      <Section heading="7. Beschwerderecht">
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren (Art. 77 DSGVO).
        </p>
      </Section>

      <Section heading="8. Aktualität">
        <p>Stand: Mai 2026.</p>
      </Section>
    </LegalLayout>
  );
}

