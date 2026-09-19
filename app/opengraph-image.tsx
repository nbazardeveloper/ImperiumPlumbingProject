import { ImageResponse } from "next/og";
import { businessConfig } from "@/lib/config";

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
          justifyContent: "center",
          padding: "80px",
          background: "#0a1830",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 12,
            background: "#f5b400",
            color: "#0a1830",
            fontSize: 30,
            fontWeight: 800,
            marginBottom: 40,
          }}
        >
          IP
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 800, color: "#ffffff", lineHeight: 1.15 }}>
          Fast, Straightforward Plumbing
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#f5b400", fontWeight: 700 }}>
          {businessConfig.legalName} · {businessConfig.serviceArea}
        </div>
      </div>
    ),
    { ...size }
  );
}
