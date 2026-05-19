import { ImageResponse } from "next/og";

export const alt = "Go Mesh — Real-world connections wherever you are";
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
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(129, 140, 248, 0.35) 0%, transparent 55%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L14 14L22 6M6 22L14 14L22 22M6 6V22M22 6V22"
              stroke="#818cf8"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <circle cx="6" cy="6" r="2.6" fill="#fafafa" />
            <circle cx="22" cy="6" r="2.6" fill="#fafafa" />
            <circle cx="14" cy="14" r="3.2" fill="#818cf8" />
            <circle cx="6" cy="22" r="2.6" fill="#fafafa" />
            <circle cx="22" cy="22" r="2.6" fill="#fafafa" />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
            Go Mesh
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1020,
            }}
          >
            Real-world connections
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#818cf8",
            }}
          >
            wherever you are.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#9ca3af",
          }}
        >
          <span style={{ maxWidth: 760 }}>
            The network for remote digital entrepreneurs.
          </span>
          <span style={{ color: "#fafafa", fontWeight: 500 }}>gomesh.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
