"use client";
import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { gsap } from "@/lib/gsap";
import { sendContactMessage } from "@/lib/contact-action";

const initialState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-tech btn-tech-solid">
      <span>{pending ? "Wird gesendet …" : "Sicherheits­beratung anfragen"}</span>
      <span aria-hidden="true">→</span>
    </button>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  // Conversion-Event für Google Ads (via GTM). Feuert nur bei Erfolg; ist GTM
  // mangels Einwilligung nicht geladen, bleibt der Push wirkungslos.
  useEffect(() => {
    if (state.status === "success") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "lead_form_submit" });
    }
  }, [state.status]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-anim]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-base text-fg overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 lime-glow" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p data-anim className="label-mono text-[#9162a4] mb-6">
            / Kontakt
          </p>
          <h2 data-anim className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[0.95] mb-8">
            Schützen, was Ihnen <span className="text-[#9162a4]">wichtig ist.</span>
          </h2>
          <p data-anim className="text-fg-muted leading-relaxed max-w-md mb-10">
            Kostenlose Vor-Ort-Beratung mit Sicherheitsanalyse — eine kurze
            Beschreibung Ihres Vorhabens reicht. Wir melden uns innerhalb
            eines Werktages zurück.
          </p>

          <ul data-anim className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-fg-faint inline-block w-20 label-mono pt-1">E-Mail</span>
              <a href="mailto:info@veyconnect.de" className="font-medium text-fg hover:text-[#9162a4] transition-colors">
                info@veyconnect.de
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-fg-faint inline-block w-20 label-mono pt-1">Telefon</span>
              <a href="tel:+4917624596941" className="font-medium text-fg hover:text-[#9162a4] transition-colors">
                +49 176 24596941
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-fg-faint inline-block w-20 label-mono pt-1">Region</span>
              <span className="font-medium text-fg">Rhein-Main · Niederdorfelden</span>
            </li>
          </ul>
        </div>

        <form
          data-anim
          action={formAction}
          className="md:col-span-7 grid gap-7 bg-surface border border-line/10 rounded-2xl p-8 md:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-7">
            <Field name="name" label="Name" required autoComplete="name" />
            <Field name="email" type="email" label="E-Mail" required autoComplete="email" />
          </div>
          <Field name="phone" label="Telefon (optional)" type="tel" autoComplete="tel" />
          <Field name="message" label="Worum geht es?" required textarea />

          {state.status === "error" && (
            <p role="alert" className="text-sm text-red-300 bg-red-950/40 border border-red-900/60 rounded-lg px-4 py-3">
              {state.message}
            </p>
          )}
          {state.status === "success" && (
            <p role="status" className="text-sm text-[#9162a4] bg-[#9162a4]/10 border border-[#9162a4]/40 rounded-lg px-4 py-3">
              {state.message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-3 border-t border-line/5">
            <div className="flex items-start gap-3 max-w-xs">
              <input
                id="contact-privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#9162a4] cursor-pointer"
              />
              <label htmlFor="contact-privacy" className="text-xs text-fg-faint leading-relaxed cursor-pointer">
                Ich habe die{" "}
                <a href="/datenschutz" className="text-[#9162a4] underline hover:no-underline">
                  Datenschutzbestimmungen
                </a>{" "}
                gelesen und akzeptiere sie.
              </label>
            </div>
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required, autoComplete, textarea }) {
  const id = `contact-${name}`;
  const inputBase =
    "w-full bg-base border border-line/10 rounded-lg px-4 py-3 text-base text-fg placeholder:text-fg-faint focus:outline-none focus:border-[#9162a4] focus:ring-1 focus:ring-[#9162a4]/40 transition-colors";
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-mono text-fg-muted">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required={required}
          className={inputBase + " resize-none"}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={inputBase}
        />
      )}
    </div>
  );
}
