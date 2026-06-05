"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Off-Canvas-Detailpanel für eine Leistung.
 * Gesteuert über das `service`-Prop (Objekt mit `.detail` oder null).
 * Schließt per Backdrop-Klick, X-Button oder ESC.
 */
export default function ServiceDetailPanel({ service, onClose }) {
  const [mounted, setMounted] = useState(Boolean(service));
  const [shown, setShown] = useState(false);
  const [data, setData] = useState(service);
  const closeRef = useRef(null);

  // Ein-/Ausblend-Choreografie (mit Exit-Animation)
  useEffect(() => {
    if (service) {
      setData(service);
      setMounted(true);
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    setShown(false);
    const t = setTimeout(() => setMounted(false), 320);
    return () => clearTimeout(t);
  }, [service]);

  // Scroll-Lock + ESC + Fokus, solange offen
  useEffect(() => {
    if (!shown) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [shown, onClose]);

  if (!mounted || !data) return null;

  const d = data.detail;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      onClick={onClose}
      className={`fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 transition-colors duration-300 ${
        shown ? "bg-black/80" : "bg-black/0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden rounded-2xl border border-[#9162a4]/25 bg-[#0f0f12] shadow-2xl transition-all duration-300 ${
          shown ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"
        }`}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-white/5 shrink-0">
          <div className="flex items-center justify-between mb-3.5">
            <p className="label-mono text-[#9162a4] inline-flex items-center gap-2">
              <span aria-hidden="true" className="inline-block w-2.5 h-px bg-[#9162a4]" />
              {d.cat}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Schließen"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-zinc-400 hover:border-[#9162a4]/50 hover:text-[#9162a4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4]"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <h2 className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.02em] text-white leading-tight">
            {data.title}
          </h2>
          <div className="w-7 h-px bg-[#9162a4] mt-3" />
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto">
          <p className="text-[15px] text-zinc-400 leading-relaxed mb-6">{d.lead}</p>

          {d.tags?.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-6">
              {d.tags.map((t) => (
                <li
                  key={t}
                  className="label-mono text-[10px] px-2.5 py-1.5 border border-[#9162a4]/20 rounded-full text-[#9162a4]/90"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {d.note && (
            <div className="border-l-2 border-[#9162a4]/40 bg-[#9162a4]/[0.04] px-4 py-3.5 mb-7">
              <p className="text-sm text-zinc-400 leading-relaxed italic">{d.note}</p>
            </div>
          )}

          {d.sections.map((s) => (
            <div key={s.title} className="mb-7 last:mb-0">
              <p className="label-mono text-[#9162a4] mb-4 flex items-center gap-3">
                {s.title}
                <span aria-hidden="true" className="flex-1 h-px bg-[#9162a4]/20" />
              </p>
              <ul className="flex flex-col gap-3.5">
                {s.items.map((it) => (
                  <li key={it.t} className="flex gap-3.5 items-start">
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full border border-[#9162a4]/30 flex items-center justify-center text-[#9162a4]">
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5l2 2 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white uppercase tracking-wide mb-0.5">
                        {it.t}
                      </p>
                      <p className="text-[13px] text-zinc-400 leading-relaxed">{it.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-5 border-t border-white/5 shrink-0">
          <Link href="/kontakt" onClick={onClose} className="btn-tech btn-tech-solid w-full">
            <span>Unverbindlich anfragen</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
