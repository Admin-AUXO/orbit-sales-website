import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Generated once at build time for the static export.
export const dynamic = "force-static";

export const alt =
  "Neurostellar Orbit — Mental Fitness for Peak Performance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "public/brand/fonts");

export default async function OpengraphImage() {
  const [extraBold, medium, regular, logo] = await Promise.all([
    readFile(join(fontDir, "Manrope-ExtraBold.ttf")),
    readFile(join(fontDir, "Manrope-Medium.ttf")),
    readFile(join(fontDir, "Manrope-Regular.ttf")),
    readFile(
      join(
        process.cwd(),
        "public/brand/logos/neurostellar-logo-horizontal-light.png",
      ),
    ),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0f0f14",
          backgroundImage:
            "radial-gradient(900px 500px at 78% 22%, rgba(56,189,248,0.16), transparent 60%), radial-gradient(800px 520px at 12% 92%, rgba(5,199,150,0.14), transparent 60%)",
          fontFamily: "Manrope",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={244} height={55} alt="Neurostellar" />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#ededf0",
              letterSpacing: -1.5,
            }}
          >
            <span>Mental fitness for</span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #05c796, #38bdf8)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              peak performance
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#9a9aa2",
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            An EEG + PPG wearable and a dedicated performance coach — track
            focus, cognitive load, and recovery.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 500, color: "#6b6b73" }}>
            neuro-stellar.com
          </div>
          <div
            style={{
              width: 220,
              height: 6,
              borderRadius: 3,
              backgroundImage: "linear-gradient(90deg, #05c796, #38bdf8)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: extraBold, weight: 800, style: "normal" },
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
        { name: "Manrope", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
