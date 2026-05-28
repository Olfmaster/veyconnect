import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] text-zinc-500 border-t border-white/10 px-6 md:px-10 py-16 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Image
            src="/vey_logo.webp"
            alt="veyconnect"
            width={160}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs leading-relaxed text-zinc-500">
            Ganzheitliche Gebäudesicherheit auf elektrotechnischem Fundament —
            seit 2023 im Rhein-Main-Gebiet.
          </p>
          <p className="mt-5 label-mono text-[#9162a4] inline-flex items-center gap-2">
            <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4]" />
            Premium-Partner AJAX Systems
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="label-mono text-zinc-400 mb-4">VeySecure</p>
          <ul className="space-y-2.5">
            <li><Link href="/leistungen/einbruchschutz" className="hover:text-white transition-colors">Einbruchschutz</Link></li>
            <li><Link href="/leistungen/brandschutz" className="hover:text-white transition-colors">Brandschutz</Link></li>
            <li><Link href="/leistungen/zutrittskontrolle" className="hover:text-white transition-colors">Zutrittskontrolle</Link></li>
            <li><Link href="/leistungen/smart-home" className="hover:text-white transition-colors">Smarte Sicherheit</Link></li>
            <li><Link href="/leistungen" className="hover:text-white transition-colors">Alle Leistungen</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-mono text-zinc-400 mb-4">Unternehmen</p>
          <ul className="space-y-2.5">
            <li><Link href="/partner" className="hover:text-white transition-colors">Partner</Link></li>
            <li><Link href="/vertrauen" className="hover:text-white transition-colors">Vertrauen</Link></li>
            <li><Link href="/region" className="hover:text-white transition-colors">Region</Link></li>
            <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-mono text-zinc-400 mb-4">Kontakt</p>
          <ul className="space-y-2.5">
            <li>
              <a href="mailto:info@veyconnect.de" className="hover:text-white transition-colors">
                info@veyconnect.de
              </a>
            </li>
            <li>
              <a href="tel:+4917624596941" className="hover:text-white transition-colors">
                +49 176 24596941
              </a>
            </li>
            <li className="text-zinc-600">Niederdorfelden · Rhein-Main</li>
            <li className="text-zinc-600 text-xs pt-2 inline-flex items-center gap-2">
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[#9162a4] animate-pulse" />
              Notfall 24/7
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© {year} veyconnect. Alle Rechte vorbehalten.</p>
        <ul className="flex items-center gap-5">
          <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
          <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
        </ul>
      </div>
    </footer>
  );
}
