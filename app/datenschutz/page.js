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
          Für den Betrieb der Website verarbeiten wir ausschließlich technisch
          notwendige Daten. Ein Webanalyse-Tool wie Google Analytics setzen wir{" "}
          <strong>nicht</strong> ein.
        </p>
        <p>
          Beim ersten Besuch zeigen wir einen Cookie-Hinweis. Ihre Entscheidung
          speichern wir ausschließlich lokal in Ihrem Browser (localStorage,
          Schlüssel <code>vc-cookie-consent</code>), damit der Hinweis nicht bei
          jedem Aufruf erneut erscheint. Diese Speicherung ist technisch
          notwendig (Art. 6 Abs. 1 lit. f DSGVO), erfolgt ohne Übertragung an
          Dritte und enthält keine personenbezogenen Profile. Sie können die
          Auswahl jederzeit über den Link „Cookie-Einstellungen“ im Seitenfuß
          erneut aufrufen und eine erteilte Einwilligung mit Wirkung für die
          Zukunft widerrufen.
        </p>
        <p>
          Für das Google Ads Conversion-Tracking (Abschnitt 5) setzen wir den
          Google-Einwilligungsmodus (Consent Mode v2) ein. Solange Sie keine
          Einwilligung erteilt haben, werden <strong>keine</strong> Cookies
          gesetzt und keine Informationen auf Ihrem Endgerät gespeichert oder
          ausgelesen. In diesem Zustand werden lediglich cookielose, aggregierte
          Signale ohne Geräte- oder Personenkennung an Google übermittelt, aus
          denen Google Conversions statistisch modelliert. Erst wenn Sie „Alle
          akzeptieren“ wählen, werden Cookies gesetzt und Daten wie in
          Abschnitt 5 beschrieben verarbeitet.
        </p>
      </Section>

      <Section heading="5. Google Ads Conversion-Tracking (Google Consent Mode)">
        <p>
          Wir messen den Erfolg unserer Google-Ads-Anzeigen mit dem{" "}
          <strong>Google Ads Conversion-Tracking</strong>, eingebunden über den{" "}
          <strong>Google Tag Manager</strong>. Der Google Tag Manager wird auf
          allen Seiten geladen, arbeitet aber im{" "}
          <strong>Google-Einwilligungsmodus (Consent Mode v2)</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Ohne Ihre Einwilligung</strong> werden keine Cookies gesetzt
            und keine Endgerät-Kennungen verarbeitet. Google erhält nur
            cookielose, aggregierte Signale und schätzt Conversions statistisch
            (Modellierung).
          </li>
          <li>
            <strong>Mit Ihrer Einwilligung</strong> („Alle akzeptieren“) können
            Cookies gesetzt und Daten (u. a. gekürzte IP-Adresse, die
            Google-Klick-Kennung „gclid“ sowie das Conversion-Ereignis) an
            Google übertragen werden. Wir erhalten dabei keine personenbezogenen
            Klartextdaten, sondern aggregierte Conversion-Statistiken.
          </li>
        </ul>
        <p>
          Anbieter ist <strong>Google Ireland Limited</strong>, Gordon House,
          Barrow Street, Dublin 4, Irland. Eine Übermittlung in die USA
          (Google LLC) ist nicht ausgeschlossen und über das EU-US Data Privacy
          Framework bzw. Standardvertragsklauseln nach Art. 46 DSGVO
          abgesichert.
        </p>
        <p>
          Für das Setzen von Cookies und die damit verbundene Verarbeitung ist
          Rechtsgrundlage Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO in
          Verbindung mit § 25 Abs. 1 TDDDG. Die cookielose Signalübermittlung im
          Einwilligungsmodus, bei der keine Informationen auf Ihrem Endgerät
          gespeichert oder ausgelesen werden, stützen wir auf unser
          berechtigtes Interesse an einer datensparsamen Reichweiten- und
          Werbeerfolgsmessung (Art. 6 Abs. 1 lit. f DSGVO). Sie können eine
          erteilte Einwilligung jederzeit mit Wirkung für die Zukunft über den
          Link „Cookie-Einstellungen“ im Seitenfuß widerrufen.
        </p>
      </Section>

      <Section heading="6. Videoüberwachung beim Kunden">
        <p>
          Bei von uns installierten Videoüberwachungsanlagen ist nicht
          veyconnect, sondern der jeweilige Betreiber der Anlage (z. B. Sie als
          Eigentümer*in) für die Datenverarbeitung verantwortlich. Wir
          beraten gerne zu DSGVO-konformer Kennzeichnung und Konfiguration.
        </p>
      </Section>

      <Section heading="7. Ihre Rechte">
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

      <Section heading="8. Beschwerderecht">
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren (Art. 77 DSGVO).
        </p>
      </Section>

      <Section heading="9. Aktualität">
        <p>Stand: Juli 2026.</p>
      </Section>
    </LegalLayout>
  );
}

