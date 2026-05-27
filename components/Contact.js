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
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 text-white rounded-full text-sm font-medium hover:bg-violet-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0b1f] shadow-lg shadow-violet-600/30"
    >
      {pending ? "Wird gesendet …" : "Sicherheits­beratung anfragen"}
      <span aria-hidden="true">→</span>
    </button>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [state, formAction] = useActionState(sendContactMessage, initialState);

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
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-[#0e0b1f] text-white overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 glow" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p data-anim className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6">
            Kontakt
          </p>
          <h2 data-anim className="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mb-8">
            Schützen, was Ihnen
            <br />
            <span className="italic font-light text-violet-400">wichtig ist.</span>
          </h2>
          <p data-anim className="text-slate-300 leading-relaxed max-w-md mb-10">
            Kostenlose Vor-Ort-Beratung mit Sicherheitsanalyse — eine kurze
            Beschreibung Ihres Vorhabens reicht. Wir melden uns innerhalb
            eines Werktages zurück.
          </p>

          <ul data-anim className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-slate-500 inline-block w-20 uppercase tracking-widest text-xs pt-1">E-Mail</span>
              <a href="mailto:info@veyconnect.de" className="font-medium text-white hover:text-violet-300 transition-colors">
                info@veyconnect.de
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-500 inline-block w-20 uppercase tracking-widest text-xs pt-1">Telefon</span>
              <a href="tel:+4917624596941" className="font-medium text-white hover:text-violet-300 transition-colors">
                +49 176 24596941
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-500 inline-block w-20 uppercase tracking-widest text-xs pt-1">Region</span>
              <span className="font-medium text-white">Rhein-Main · Niederdorfelden</span>
            </li>
          </ul>
        </div>

        <form
          data-anim
          action={formAction}
          className="md:col-span-7 grid gap-5 bg-violet-950/20 backdrop-blur border border-violet-900/40 rounded-2xl p-8 md:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
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
            <p role="status" className="text-sm text-emerald-200 bg-emerald-950/40 border border-emerald-900/60 rounded-lg px-4 py-3">
              {state.message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur
              Beantwortung Ihrer Anfrage verarbeiten.
            </p>
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required, autoComplete, textarea }) {
  const id = `contact-${name}`;
  const base =
    "peer w-full bg-transparent border-b border-violet-900/60 pt-6 pb-2 px-0 text-base text-white placeholder-transparent focus:outline-none focus:border-violet-400 transition-colors";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={name} rows={4} required={required} placeholder={label} className={base + " resize-none"} />
      ) : (
        <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} placeholder={label} className={base} />
      )}
      <label
        htmlFor={id}
        className="absolute left-0 top-1 text-[10px] uppercase tracking-widest text-slate-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-violet-300"
      >
        {label}
      </label>
    </div>
  );
}
