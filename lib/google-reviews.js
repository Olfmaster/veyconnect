// Liest die aktuellen Google-Rezensionen serverseitig über die Places API (New).
// Gibt bei fehlendem Key oder API-Fehler `null` zurück, damit die UI auf die
// statischen Fallback-Karten zurückfallen kann. Ergebnis wird ~stündlich gecacht
// (ISR), sodass nicht jeder Seitenaufruf einen API-Call auslöst.

const FIELD_MASK = [
  "id",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
].join(",");

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=de`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": FIELD_MASK,
        },
        // Stündlich revalidieren (Places API liefert ohnehin max. 5 Rezensionen).
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.warn("[google-reviews] API-Fehler:", res.status, body);
      return null;
    }

    const data = await res.json();

    const reviews = (data.reviews ?? [])
      .map((r) => ({
        quote: r.text?.text ?? r.originalText?.text ?? "",
        author: r.authorAttribution?.displayName ?? "Google-Nutzer",
        when: r.relativePublishTimeDescription ?? "",
        rating: r.rating ?? 5,
      }))
      .filter((r) => r.quote);

    if (reviews.length === 0) {
      return null;
    }

    return {
      rating: data.rating ?? null,
      count: data.userRatingCount ?? null,
      profileUrl: data.googleMapsUri ?? null,
      reviews,
    };
  } catch (err) {
    console.warn("[google-reviews] Netzwerkfehler:", err);
    return null;
  }
}
