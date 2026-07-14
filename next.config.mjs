/** @type {import('next').NextConfig} */

// Der frühere Webauftritt (e-masters-Template) lief vollständig auf .html-URLs.
// Die stecken weiterhin im Google-Index — u. a. als Sitelinks — und liefen bis
// hierher auf 404. Die neue Site benutzt kein .html, deshalb lässt sich jede
// noch unbekannte Alt-URL am Ende gefahrlos per Catch-all auffangen.
const legacyRedirects = [
  ["/home.html", "/"],
  ["/unsere-leistungen.html", "/leistungen"],
  ["/unsere-leistungen/:path*", "/leistungen"],
  ["/beratung.html", "/leistungen"],
  ["/beratung/:path*", "/leistungen"],
  ["/wir-ueber-uns.html", "/ueber-uns"],
  ["/kontakt.html", "/kontakt"],
  ["/impressum.html", "/impressum"],
  ["/datenschutz.html", "/datenschutz"],
];

const nextConfig = {
  async redirects() {
    return [
      ...legacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // Auffangnetz: alles Übrige auf .html landet auf der Startseite,
      // statt einen 404 auszuliefern. Muss zuletzt stehen.
      {
        source: "/:path(.*)\\.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
