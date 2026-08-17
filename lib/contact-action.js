"use server";

const FIELDS = ["name", "email", "phone", "objektart", "message"];

export async function sendContactMessage(_prevState, formData) {
  const data = Object.fromEntries(
    FIELDS.map((key) => {
      const raw = formData.get(key);
      return [key, typeof raw === "string" ? raw.trim() : ""];
    })
  );

  if (!data.name || !data.message) {
    return {
      status: "error",
      message: "Bitte füllen Sie Name und Nachricht aus.",
    };
  }

  // Telefon ODER E-Mail genügt — jedes zusätzliche Pflichtfeld kostet Abschlüsse.
  if (!data.email && !data.phone) {
    return {
      status: "error",
      message: "Bitte hinterlassen Sie eine Telefonnummer oder eine E-Mail-Adresse.",
    };
  }

  if (!formData.get("privacy")) {
    return {
      status: "error",
      message: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
    };
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return {
      status: "error",
      message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    };
  }

  if (data.message.length > 5000) {
    return {
      status: "error",
      message: "Bitte kürzen Sie Ihre Nachricht auf maximal 5000 Zeichen.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? "info@veyconnect.de";
  const from = process.env.CONTACT_FROM ?? "veyconnect Website <onboarding@resend.dev>";

  const objektart = data.objektart === "gewerbe" ? "Gewerbe" : "Privat";
  const subject = `Neue Anfrage (${objektart}) von ${data.name}`;
  const text = [
    `Name: ${data.name}`,
    `E-Mail: ${data.email || "nicht angegeben"}`,
    `Telefon: ${data.phone || "nicht angegeben"}`,
    `Objektart: ${objektart}`,
    "",
    "Nachricht:",
    data.message,
  ].join("\n");

  if (!apiKey) {
    console.warn(
      "[contact-action] RESEND_API_KEY ist nicht gesetzt — Nachricht nur geloggt."
    );
    console.log({ to, from, subject, text });
    return {
      status: "success",
      message: "Vielen Dank! Ihre Nachricht ist eingegangen.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        ...(data.email ? { reply_to: data.email } : {}),
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[contact-action] Resend-Fehler:", res.status, body);
      return {
        status: "error",
        message:
          "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an info@veyconnect.de.",
      };
    }
  } catch (err) {
    console.error("[contact-action] Netzwerkfehler:", err);
    return {
      status: "error",
      message:
        "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an info@veyconnect.de.",
    };
  }

  return {
    status: "success",
    message: "Vielen Dank! Ihre Anfrage ist angekommen. Wir melden uns zeitnah.",
    // Geht als Parameter mit ins Conversion-Event, damit sich die Kosten pro
    // Anfrage später nach Privat und Gewerbe trennen lassen.
    objektart,
  };
}
