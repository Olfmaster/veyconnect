import { ImageResponse } from "next/og";

export const alt = "veyconnect · VeySecure — Sicherheit beginnt bei der Basis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 30% 25%, #2e1065 0%, #0e0b1f 65%)",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c4b5fd",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#7c3aed",
              display: "flex",
            }}
          />
          <span style={{ display: "flex" }}>VeySecure · Sicherheitswelt von veyconnect</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              fontSize: 116,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            <span style={{ display: "flex" }}>Sicherheit beginnt</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 116,
              lineHeight: 1,
              fontWeight: 300,
              fontStyle: "italic",
              color: "#a78bfa",
              letterSpacing: "-0.04em",
            }}
          >
            <span style={{ display: "flex" }}>bei der Basis.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 600, color: "#f8fafc" }}>veyconnect.de</span>
            <span>Rhein-Main · Zertifizierter AJAX Partner</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 18,
              color: "#64748b",
            }}
          >
            <span>Einbruch</span>
            <span style={{ color: "#312e81" }}>·</span>
            <span>Brand</span>
            <span style={{ color: "#312e81" }}>·</span>
            <span>Zutritt</span>
            <span style={{ color: "#312e81" }}>·</span>
            <span>Smart</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
