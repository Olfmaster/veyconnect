import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleTagManager from "@/components/GoogleTagManager";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.veyconnect.de";
const TITLE = "veyconnect · Intelligente Sicherheitssysteme im Rhein-Main-Gebiet";
const DESCRIPTION =
  "veyconnect — Einbruchschutz, Brandschutz, Zutrittskontrolle und smarte Sicherheit. Zertifizierter Partner von AJAX Systems. Hauptsitz Niederdorfelden, Servicegebiet Rhein-Main.";

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
    icon: [{ url: "/vey_favicon-white.webp", type: "image/webp" }],
    shortcut: "/vey_favicon-white.webp",
    apple: "/vey_favicon-white.webp",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f4f4f1" },
  ],
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
      address: {
        "@type": "PostalAddress",
        streetAddress: "Berliner Straße 28",
        postalCode: "61138",
        addressLocality: "Niederdorfelden",
        addressRegion: "Hessen",
        addressCountry: "DE",
      },
      makesOffer: [
        "Einbruch- & Überwachungssysteme",
        "Brandschutz & Gefahrenprävention",
        "Zutrittskontrolle & Gebäudesteuerung",
        "Sicherheitsmodernisierung",
        "Smarte Sicherheitsintegration",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      // aggregateRating bewusst nicht hier: es gehört auf die Seite, die die
      // Rezensionen auch anzeigt (components/GoogleReviews.js) — und dort steht
      // die echte Zahl aus der Places API statt eines festen Werts.
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
    <html
      lang="de"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${interTight.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'light';}catch(e){document.documentElement.dataset.theme='light';}})();`}
        </Script>
      </head>
      <body className="min-h-full antialiased bg-base text-fg selection:bg-[#9162a4] selection:text-white">
        <GoogleTagManager />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#9162a4] focus:text-white focus:text-sm focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
