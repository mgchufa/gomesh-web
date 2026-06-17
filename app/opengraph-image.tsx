import { ImageResponse } from "next/og";

export const alt = "Mesh — Build together.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Note: Satori renders with a system sans here (the Playfair Didone isn't
// embedded) — the brand is carried by the palette and the threshold mark.
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
          background: "#FBFAF7",
          color: "#211F19",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark lockup — threshold tile + lowercase mesh */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 15,
              background: "#5E2F52",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#F4F1EA"
                d="M40 196 L40 74 Q40 66 48 66 L192 66 Q200 66 200 74 L200 196 L150 196 L150 116 Q150 112 146 112 L94 112 Q90 112 90 116 L90 196 Z"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 46,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#5E2F52",
              lineHeight: 1,
            }}
          >
            mesh
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div
            style={{
              display: "flex",
              fontSize: 118,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              maxWidth: 1020,
            }}
          >
            Build
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 118,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: "#5E2F52",
            }}
          >
            together.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#56544C",
          }}
        >
          <span style={{ maxWidth: 720, letterSpacing: "0.01em" }}>
            Mesh with digital business owners around the world.
          </span>
          <span
            style={{
              color: "#8C8678",
              fontWeight: 500,
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
