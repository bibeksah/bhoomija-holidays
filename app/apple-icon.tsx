import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #0B3D91, #083070)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "22%",
        }}
      >
        <span style={{ color: "#FFFFFF", fontFamily: "Georgia, serif", fontWeight: "bold" }}>B</span>
        <span style={{ color: "#FF8C00", fontFamily: "Georgia, serif", fontWeight: "bold" }}>H</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
