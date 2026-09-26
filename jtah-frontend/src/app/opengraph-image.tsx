import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "JTAH Foundation, touching lives since 2000";
// ImageResponse's Node adapter resolves bundled assets with file URLs, which
// fails on Windows during prerendering. The Edge adapter supports this route
// without filesystem URL conversion.
export const runtime = "edge";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "linear-gradient(135deg,#1e1938,#4e3575)",
        color: "white",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, opacity: 0.7 }}>
        JTAH FOUNDATION
      </div>
      <div style={{ fontSize: 72, fontWeight: 700, marginTop: 20 }}>
        Touching lives since 2000
      </div>
      <div style={{ fontSize: 30, marginTop: 24, opacity: 0.8 }}>
        Education · Empowerment · Health · Advocacy
      </div>
    </div>,
    size,
  );
}
