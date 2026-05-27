import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0e0b1f] text-slate-400 border-t border-violet-950/40 px-6 md:px-10 py-16 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <Image
            src="/vey_logo.webp"
            alt="veyconnect"
            width={160}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs leading-relaxed text-slate-500">
            Ganzheitliche Gebäudesicherheit auf elektrotechnischem Fundament —
            seit 2023 im Rhein-Main-Gebiet.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
            VeySecure
          </p>
          <ul className="space-y-2">
            <li><Link href="/#leistungen" className="hover:text-violet-300 transition-colors">Einbruchschutz</Link></li>
            <li><Link href="/#leistungen" className="hover:text-violet-300 transition-colors">Brandschutz</Link></li>
            <li><Link href="/#leistungen" className="hover:text-violet-300 transition-colors">Zutrittskontrolle</Link></li>
            <li><Link href="/#leistungen" className="hover:text-violet-300 transition-colors">Sicherheitsmodernisierung</Link></li>
            <li><Link href="/#leistungen" className="hover:text-violet-300 transition-colors">Smarte Sicherheit</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
            Kontakt
          </p>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@veyconnect.de" className="hover:text-violet-300 transition-colors">
                info@veyconnect.de
              </a>
            </li>
            <li>
              <a href="tel:+4917624596941" className="hover:text-violet-300 transition-colors">
                +49 176 24596941
              </a>
            </li>
            <li className="text-slate-500">Rhein-Main · Niederdorfelden</li>
            <li className="text-slate-500 text-xs pt-3">
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 mr-2 align-middle" />
              Notfall-Erreichbarkeit 24/7
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
            Rechtliches
          </p>
          <ul className="space-y-2">
            <li><Link href="/impressum" className="hover:text-violet-300 transition-colors">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-violet-300 transition-colors">Datenschutz</Link></li>
            <li><Link href="/agb" className="hover:text-violet-300 transition-colors">AGB</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-violet-950/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {year} veyconnect. Alle Rechte vorbehalten.</p>
        <p className="flex items-center gap-2 flex-wrap">
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400" />
          AJAX · Gira · Hager · Siedle · Dahua · Doorbird · UniFi · Mobotix · HIK Vision
        </p>
      </div>
    </footer>
  );
}
