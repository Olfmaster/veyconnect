// Single source of truth für die Leistungen — genutzt vom Pop-out-Panel
// (components/Services.js) und den Detail-Unterseiten (app/leistungen/[slug]).
export const services = [
  {
    number: "01",
    slug: "einbruchschutz",
    title: "Einbruch- & Überwachungssysteme",
    description:
      "Funkbasierte AJAX-Anlagen, hochauflösende Kameras von HIK Vision, Dahua und Mobotix — bis hin zur Thermalsicht und optischem Zoom für weite Strecken.",
    bullets: [
      "AJAX Alarmanlagen & Sensorik",
      "Video­überwachung 4K + Thermal",
      "Bewegungs-, Glasbruch- & Gasmelder",
      "Hausnotrufsysteme",
    ],
    image: "/einbruch-ueberwachungssystem.webp",
    metaTitle: "Einbruchschutz & Videoüberwachung",
    metaDesc:
      "AJAX Funkalarm, 4K-Videoüberwachung, Bewegungsmelder und Glasbruchsensoren — geplant, installiert und gewartet von veyconnect.",
    detail: {
      cat: "Einbruch & Video",
      lead: "AJAX-Funkalarm, 4K-Videoüberwachung von Dahua, HIK Vision und Mobotix — bis hin zu Thermalsicht und optischem Telezoom für Außenanlagen, Logistik und weitläufige Objekte.",
      tags: ["AJAX Premium-Partner", "4K + Thermal", "VDS-konform", "DSGVO-konform"],
      note: "Als zertifizierter AJAX-Premium-Partner haben wir direkten Herstellerzugang, neueste Firmware und ausschließlich Original-Komponenten.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "AJAX Alarmanlagen", d: "Funkbasiert, schnell installiert, batteriearm — als zertifizierter Premium-Partner direkt vom Hersteller." },
            { t: "Videoüberwachung 4K + Thermal", d: "Dahua, HIK Vision, Mobotix — auch Außenanlagen mit Telezoom und Wärmebild für absolute Dunkelheit." },
            { t: "Bewegungs-, Glasbruch- & Gasmelder", d: "Sensorik für jeden Anwendungsfall, eingebunden in eine zentrale App." },
            { t: "Hausnotrufsysteme", d: "Diskrete Notruflösungen für Privatpersonen und betreutes Wohnen." },
          ],
        },
      ],
    },
  },
  {
    number: "02",
    slug: "brandschutz",
    title: "Brandschutz & Gefahrenprävention",
    description:
      "EN-54-zertifizierte AJAX-Brandwarnanlagen, vernetzte Rauchmelder, CO- und Gasmelder — kabellos, geplant, installiert und dokumentiert nach Norm.",
    bullets: [
      "AJAX EN54 Line (kabellos)",
      "Funk-Rauchmeldernetz",
      "CO- & Gasmelder",
      "Konzept für Bestandsbauten",
    ],
    image: "/smoke-detector-and-remotes-on-blueprint.webp",
    metaTitle: "Brandschutz & Gefahrenprävention — AJAX EN 54",
    metaDesc:
      "EN-54-zertifizierte AJAX-Brandwarnanlagen, Funk-Rauchmeldernetz, CO- und Gasmelder und Brandschutz­konzepte für Privat- und Gewerbeobjekte im Rhein-Main-Gebiet.",
    detail: {
      cat: "Brandschutz",
      lead: "EN-54-zertifizierte AJAX-Brandwarnanlagen, vernetzte Rauchmelder, CO- und Gasmelder, Hausnotrufsysteme — kabellos, normgerecht installiert und vollständig dokumentiert.",
      tags: ["AJAX EN54 Line", "EN-54-zertifiziert", "Funkvernetzt", "Bestand & Altbau"],
      note: "Ohne normgerechte, vernetzte Rauchmelder bleibt im Brandfall wertvolle Zeit zur Warnung ungenutzt — Personenschäden drohen, gerade in Bestandsbauten.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "AJAX EN54 Line", d: "Kabellose, EN-54-zertifizierte Brandwarn- und Alarmanlage für kommerzielle Objekte — zentral über eine App gesteuert." },
            { t: "Funk-Rauchmeldernetz", d: "Alle Räume in einem Verbund — wenn einer auslöst, hören Sie es überall." },
            { t: "CO- & Gasmelder", d: "Frühwarnung vor Kohlenmonoxid und Gaslecks — vernetzt mit Alarm- und Hausautomation." },
            { t: "Hausnotrufsysteme", d: "Diskrete Notruflösungen für Privatpersonen, betreutes Wohnen und alleinarbeitende Personen." },
            { t: "Brandschutzkonzept Bestand", d: "Planung für Altbau und Bestand — abgestimmt auf vorhandene Substanz und örtliche Gegebenheiten." },
          ],
        },
      ],
    },
  },
  {
    number: "03",
    slug: "zutrittskontrolle",
    title: "Zutrittskontrolle & Gebäudesteuerung",
    description:
      "Sprechanlagen von Siedle und Doorbird, elektronische Zutrittskontrolle mit Fingerprint, Transponder oder App. Torantriebe und Schließanlagen integriert.",
    bullets: [
      "Video-Türsprechanlagen",
      "Fingerprint / Transponder / App",
      "Elektronische Schließanlagen",
      "Torantriebe",
    ],
    image: "/tuersysteme.webp",
    metaTitle: "Zutrittskontrolle & Türsysteme",
    metaDesc:
      "Video-Türsprechanlagen, elektronische Schließanlagen, Fingerprint- und Transpondersysteme sowie Torantriebe — installiert von veyconnect.",
    detail: {
      cat: "Zutritt",
      lead: "Sprechanlagen von Siedle und Doorbird, elektronische Zutrittskontrolle mit Fingerprint, Transponder oder App. Torantriebe und Schließanlagen integriert.",
      tags: ["Siedle", "Doorbird", "Fingerprint / App", "Skalierbar"],
      note: "Vergessene oder kopierte Schlüssel sind ein unterschätztes Risiko — elektronische Zutrittssysteme lassen sich jederzeit zentral anpassen.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "Video-Türsprechanlagen", d: "Siedle, Doorbird & Co. — mit Smartphone-Anbindung, auch unterwegs immer im Bild." },
            { t: "Fingerprint / Transponder / App", d: "Vergessene Schlüssel adé — moderne Zutrittssysteme, individuell programmierbar." },
            { t: "Elektronische Schließanlagen", d: "Skalierbar für Mehrfamilienhäuser, Praxen, Werkstätten oder kleine Gewerbeobjekte." },
            { t: "Torantriebe & Außenanlagen", d: "Schiebetore, Drehflügel, Schranken — vernetzt mit der zentralen Steuerung." },
          ],
        },
      ],
    },
  },
  {
    number: "04",
    slug: "altbau",
    title: "Sicherheitsmodernisierung & Altbau",
    description:
      "Veraltete Schließtechnik, fehlende Sensorik, unsichere Außenanlagen — wir machen Bestandsgebäude sicherheitstechnisch wieder zeitgemäß. Marktlücke und unser Spezialgebiet.",
    bullets: [
      "Befundung & Sicherheitskonzept",
      "Nachrüstung Bestandsbauten",
      "Sensorik & Türsicherung",
      "Vollständige Anlagendokumentation",
    ],
    image: "/altbau.webp",
    metaTitle: "Altbau-Modernisierung & Sicherheitsnachrüstung",
    metaDesc:
      "Sicherheitsnachrüstung für Bestandsbauten — Befundung, Sensorik-Nachrüstung, Schließtechnik und Brandmelder, vollständig dokumentiert.",
    detail: {
      cat: "Altbau & Bestand",
      lead: "Veraltete Schließtechnik, fehlende Sensorik, ungesicherte Außenanlagen — wir bringen Bestandsgebäude sicherheitstechnisch in die Gegenwart. Unser Spezialgebiet im Rhein-Main.",
      tags: ["Bestandsbau", "Funknachrüstung", "Ohne Bauchaos", "Dokumentiert"],
      note: "Funkbasierte Technik lässt sich im Bestand nachrüsten, ohne Wände aufzustemmen — schrittweise oder als Komplettpaket.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "Befundung & Sicherheitskonzept", d: "Was ist da überhaupt verbaut? Wir prüfen den Bestand und liefern einen klaren Maßnahmenkatalog." },
            { t: "Sensorik & Funkalarm im Bestand", d: "AJAX-Funkanlagen, Bewegungs-, Glasbruch- und Öffnungsmelder — schrittweise oder als Komplettpaket, ohne große Bauarbeiten." },
            { t: "Schließ- & Türsicherung", d: "Elektronische Zylinder, Mehrfachverriegelung, Video-Türsprechanlagen — Bestand erhalten, Sicherheit erhöhen." },
            { t: "Vollständige Dokumentation", d: "Anlagendokumentation, Konfiguration und Fotodokumentation — lückenlos nachvollziehbar, wenn Sie später Nachweise brauchen." },
          ],
        },
      ],
    },
  },
  {
    number: "05",
    slug: "smart-home",
    title: "Smarte Sicherheitsintegration",
    description:
      "Mehrere Systeme zu einer Lösung verknüpft — UniFi-Netzwerk, KNX, smarte Türschlösser, Präsenz­simulation. Inkl. Internet, Starlink und 5G-Verstärkung für Tiefgaragen oder abgelegene Objekte.",
    bullets: [
      "UniFi-Netzwerk & Video",
      "Smarte Türschlösser",
      "Richtfunk · Starlink · 5G/LTE",
      "Präsenz­simulation & Szenen",
    ],
    image: "/smart-sicherheitsintegration.webp",
    metaTitle: "Smarte Sicherheits­integration",
    metaDesc:
      "UniFi-Netzwerk, KNX, smarte Türschlösser, Starlink und 5G-Verstärkung — alles aus einer Hand integriert.",
    detail: {
      cat: "Smart Integration",
      lead: "Mehrere Systeme zu einer Lösung verknüpft — UniFi-Netzwerk, KNX, smarte Türschlösser, Präsenzsimulation. Inkl. Internet, Starlink und 5G-Verstärkung für Tiefgaragen oder abgelegene Objekte.",
      tags: ["UniFi", "KNX", "Starlink / 5G", "Eine App"],
      note: "Insellösungen sind teuer in der Wartung und schwach in der Wirkung — wir führen alles in einer zentralen Steuerung zusammen.",
      sections: [
        {
          title: "Leistungsumfang",
          items: [
            { t: "UniFi-Netzwerk & Video", d: "Stabile Netzinfrastruktur als Fundament für Kameras, Türen, Heizung und mehr." },
            { t: "Smarte Türschlösser", d: "Schlüsselloser Zugang, Zeitfenster, Gäste-Codes — vom Privathaus bis zur Ferienwohnung." },
            { t: "Richtfunk · Starlink · 5G/LTE", d: "Für abgelegene Objekte, Tiefgaragen oder Baustellen — wir sorgen für stabile Verbindung." },
            { t: "Präsenzsimulation & Szenen", d: "Licht, Rollos und Geräte folgen einem realistischen Muster — auch wenn niemand zuhause ist." },
          ],
        },
      ],
    },
  },
];
