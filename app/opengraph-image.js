import { ImageResponse } from "next/og";

export const alt = "veyconnect · Intelligente Sicherheitssysteme";
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
            "radial-gradient(circle at 30% 25%, #1a1228 0%, #050505 65%)",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#ffffff",
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
            color: "#9162a4",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#9162a4",
              display: "flex",
            }}
          />
          <span style={{ display: "flex" }}>veyconnect · Premium-Partner AJAX Systems</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            <span style={{ display: "flex" }}>Intelligente</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            <span style={{ display: "flex" }}>Sicherheitssysteme.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              lineHeight: 1,
              fontWeight: 600,
              color: "#9162a4",
              letterSpacing: "-0.04em",
            }}
          >
            <span style={{ display: "flex" }}>Aus einer Hand.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#8a8a8a",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 600, color: "#ffffff" }}>veyconnect.de</span>
            <span>Rhein-Main · Niederdorfelden</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 18,
              color: "#4f4f4f",
            }}
          >
            <span>Einbruch</span>
            <span style={{ color: "#232323" }}>·</span>
            <span>Brand</span>
            <span style={{ color: "#232323" }}>·</span>
            <span>Zutritt</span>
            <span style={{ color: "#232323" }}>·</span>
            <span>Smart</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
