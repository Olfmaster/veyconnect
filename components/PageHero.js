// Server-Komponente: die Intro-Animation läuft rein über CSS (.vc-fade-up /
// .vc-line-up in globals.css) und startet mit dem ersten Paint. Vorher lag hier
// eine GSAP-Timeline im useEffect, die die Überschrift bis zur Hydration auf
// opacity:0 hielt — das kostete auf jeder Unterseite LCP.
export default function PageHero({ eyebrow, title, accent, intro, children }) {
  return (
    <section className="relative bg-base text-fg pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 overflow-hidden border-b border-line/5">
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-50" />
      <div aria-hidden="true" className="absolute inset-0 lime-glow opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        {eyebrow && (
          <p className="vc-fade-up label-mono text-[#9162a4] mb-6">{eyebrow}</p>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.98] max-w-4xl">
          <span className="block overflow-hidden pb-[0.12em]">
            <span className="vc-line-up block" style={{ "--vc-delay": "0.08s" }}>
              {title}
            </span>
          </span>
          {accent && (
            <span className="block overflow-hidden pb-[0.12em]">
              <span
                className="vc-line-up block text-[#9162a4]"
                style={{ "--vc-delay": "0.16s" }}
              >
                {accent}
              </span>
            </span>
          )}
        </h1>

        {intro && (
          <p
            className="vc-fade-up mt-6 max-w-2xl text-base md:text-lg text-fg-muted leading-relaxed"
            style={{ "--vc-delay": "0.24s" }}
          >
            {intro}
          </p>
        )}

        {children && (
          <div className="vc-fade-up mt-8" style={{ "--vc-delay": "0.3s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
