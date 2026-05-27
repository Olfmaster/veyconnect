import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.veyconnect.de";
const TITLE = "veyconnect — VeySecure · Intelligente Sicherheitssysteme im Rhein-Main-Gebiet";
const DESCRIPTION =
  "VeySecure ist die Sicherheitswelt von veyconnect — Einbruchschutz, Brandschutz, Zutrittskontrolle und smarte Sicherheit. Zertifizierter Partner von AJAX Systems. Hauptsitz Niederdorfelden, Servicegebiet Rhein-Main.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · veyconnect" },
  description: DESCRIPTION,
  applicationName: "veyconnect",
  authors: [{ name: "veyconnect", url: SITE_URL }],
  creator: "veyconnect",
  publisher: "veyconnect",
  keywords: [
    "Sicherheitstechnik",
    "Alarmanlage",
    "Einbruchschutz",
    "Videoüberwachung",
    "Smart Home",
    "Zutrittskontrolle",
    "AJAX Systems",
    "Gira KNX",
    "Brandschutz",
    "VeySecure",
    "Rhein-Main",
    "Niederdorfelden",
    "Frankfurt",
    "UniFi",
    "Mobotix",
    "HIK Vision",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "veyconnect",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/vey_favicon.webp", type: "image/webp" }],
    shortcut: "/vey_favicon.webp",
  },
};

export const viewport = {
  themeColor: "#0e0b1f",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "veyconnect",
      url: SITE_URL,
      email: "info@veyconnect.de",
      telephone: "+4917624596941",
      image: `${SITE_URL}/opengraph-image`,
      description: DESCRIPTION,
      priceRange: "€€",
      foundingDate: "2023",
      areaServed: [
        { "@type": "City", name: "Frankfurt am Main" },
        { "@type": "City", name: "Niederdorfelden" },
        { "@type": "City", name: "Offenbach" },
        { "@type": "City", name: "Hanau" },
        { "@type": "City", name: "Bad Vilbel" },
        { "@type": "City", name: "Bad Homburg" },
        { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" },
      ],
      address: { "@type": "PostalAddress", addressCountry: "DE", addressLocality: "Niederdorfelden" },
      makesOffer: [
        "Einbruch- & Überwachungssysteme",
        "Brandschutz & Gefahrenprävention",
        "Zutrittskontrolle & Gebäudesteuerung",
        "Sicherheitsmodernisierung",
        "Smarte Sicherheitsintegration",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        reviewCount: "30",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "veyconnect",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased selection:bg-violet-600 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-violet-600 focus:text-white focus:text-sm focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
