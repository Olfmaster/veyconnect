const BASE = "https://www.veyconnect.de";

const serviceSlugs = [
  "einbruchschutz",
  "brandschutz",
  "zutrittskontrolle",
  "altbau",
  "smart-home",
];

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/sicheres-zuhause`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...serviceSlugs.map((slug) => ({
      url: `${BASE}/leistungen/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    { url: `${BASE}/partner`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/region`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
