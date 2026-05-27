import Link from "next/link";

export default function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <article className="relative bg-slate-950 text-slate-200 pt-32 md:pt-40 pb-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-400 mb-6">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-8 text-white">
          {title}
        </h1>
        {intro && <p className="text-lg text-slate-400 leading-relaxed mb-12">{intro}</p>}
        <div className="space-y-10 leading-relaxed">{children}</div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-sm">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
            <span aria-hidden="true">←</span> Zur Startseite
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Section({ heading, children }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-3">
        {heading}
      </h2>
      <div className="space-y-3 text-base text-slate-300">{children}</div>
    </section>
  );
}

export function TodoBlock({ label, hint }) {
  return (
    <span className="inline-block bg-amber-950/40 border border-amber-700/60 text-amber-200 rounded-md px-2 py-0.5 text-sm font-mono">
      {label}
      {hint && (
        <span className="ml-2 text-amber-400/80 font-sans not-italic text-xs">
          ({hint})
        </span>
      )}
    </span>
  );
}
