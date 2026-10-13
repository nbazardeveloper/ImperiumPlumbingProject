import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { businessConfig, siteConfig } from "@/lib/config";

export const dynamic = "force-static";
export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Satori can't decode webp, so the OG card uses the PNG copy of the logo.
  const logo = await readFile(path.join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
        <div style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
          <img src={logoSrc} width={120} height={120} alt="" />
          <div
            style={{
              display: "flex",
              marginLeft: 28,
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: 1,
            }}
          >
            {businessConfig.legalName}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 800, color: "#ffffff", lineHeight: 1.15 }}>
          {businessConfig.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#f5b400", fontWeight: 700 }}>
          Residential & Commercial · {businessConfig.citiesDisplay}, {businessConfig.stateAbbr}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 30, color: "#cbd5e1", fontWeight: 600 }}>
          {businessConfig.phoneDisplay}
        </div>
      </div>
    ),
    { ...size }
  );
}
