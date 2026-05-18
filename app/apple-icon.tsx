import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4f46e5",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L14 14L22 6M6 22L14 14L22 22M6 6V22M22 6V22"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <circle cx="6" cy="6" r="2.5" fill="white" />
          <circle cx="22" cy="6" r="2.5" fill="white" />
          <circle cx="14" cy="14" r="3" fill="white" />
          <circle cx="6" cy="22" r="2.5" fill="white" />
          <circle cx="22" cy="22" r="2.5" fill="white" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
