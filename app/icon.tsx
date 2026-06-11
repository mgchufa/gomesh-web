import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// The canonical app icon: a paper threshold cut from an aubergine tile.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5E2F52",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F4F1EA"
            d="M40 196 L40 74 Q40 66 48 66 L192 66 Q200 66 200 74 L200 196 L150 196 L150 116 Q150 112 146 112 L94 112 Q90 112 90 116 L90 196 Z"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
