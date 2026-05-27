import { ImageResponse } from "next/og";

export const alt = "Mesh — Build Above Your Weight";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#114C5A",
          backgroundImage:
            "radial-gradient(ellipse at 60% 40%, #1A6070 0%, #114C5A 50%, #0A2830 100%)",
          color: "#F1F6F4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#FFC801",
              lineHeight: 0.85,
            }}
          >
            Mesh
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#FFC801",
              marginLeft: 4,
              marginBottom: 4,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              maxWidth: 1020,
            }}
          >
            Build Above
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#FFC801",
            }}
          >
            Your Weight.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "rgba(241,246,244,0.7)",
          }}
        >
          <span style={{ maxWidth: 720, letterSpacing: "0.02em" }}>
            Mesh with your weight class. Retreat with your kind.
          </span>
          <span
            style={{
              color: "#FFC801",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: 16,
            }}
          >
            gomesh.app
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
