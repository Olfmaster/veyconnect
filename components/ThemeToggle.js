"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");

  // Mit dem vom Inline-Script gesetzten Attribut synchronisieren (nach Hydration).
  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    root.classList.add("theme-anim");
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage nicht verfügbar — ignorieren */
    }
    setTheme(next);
    window.clearTimeout(window.__veyThemeT);
    window.__veyThemeT = window.setTimeout(
      () => root.classList.remove("theme-anim"),
      400
    );
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Zu Dark Mode wechseln" : "Zu Light Mode wechseln"}
      title={isLight ? "Dark Mode" : "Light Mode"}
      onClick={toggle}
      className={`group relative inline-flex h-8 w-[58px] shrink-0 items-center rounded-full border border-line/15 bg-line/5 transition-colors hover:border-[#9162a4]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9162a4] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
    >
      {/* Sonne (links) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`absolute left-2 h-4 w-4 transition-opacity ${
          isLight ? "opacity-100 text-[#9162a4]" : "opacity-40 text-fg-faint"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>

      {/* Mond (rechts) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`absolute right-2 h-4 w-4 transition-opacity ${
          isLight ? "opacity-40 text-fg-faint" : "opacity-100 text-[#9162a4]"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>

      {/* Knopf */}
      <span
        aria-hidden="true"
        className={`relative z-10 ml-1 h-6 w-6 rounded-full bg-[#9162a4] shadow-md transition-transform duration-300 ease-out ${
          isLight ? "translate-x-[26px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}
