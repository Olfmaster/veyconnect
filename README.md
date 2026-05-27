# veyconnect

Marketing-Website für **veyconnect** — Next.js 16, React 19, Tailwind v4, GSAP.

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 16 (App Router, JS — kein TypeScript)
- **UI:** React 19, Tailwind v4 (CSS-first config in `app/globals.css`)
- **Animation:** GSAP 3 + ScrollTrigger + SplitText (siehe `lib/gsap.js`)
- **Font:** Geist Sans via `next/font/google`

## Noch zu definieren

- Brandfarbe (`--color-brand-accent` in `app/globals.css` — aktuell Sky 500 als Platzhalter)
- Konkrete Headline, Subline und CTA-Ziele
- Sektionen unterhalb des Hero (Produkt, Features, Kontakt …)
- Domain (aktuell `www.veyconnect.com` als Platzhalter in `app/layout.js`, `app/robots.js`, `app/sitemap.js`)
- Impressum + Datenschutz vor Launch (DE: §5 TMG / DSGVO)
