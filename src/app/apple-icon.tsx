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
          background: "#222121",
          borderRadius: 36,
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFC857"
            d="M16 5c-.2 4.2-2.8 6.2-4.6 8.2-1.9 2.1-3.2 4.1-3.2 7 0 4.2 3.4 7.3 7.8 7.3s7.8-3.1 7.8-7.3c0-2.9-1.3-4.9-3.2-7C19 11.2 16.2 9.2 16 5z"
          />
          <path
            fill="#9E6240"
            d="M16 14.5c-.1 2.1-1.4 3.1-2.3 4.1-.9 1-1.5 2-1.5 3.3 0 2.1 1.7 3.6 3.8 3.6s3.8-1.5 3.8-3.6c0-1.3-.6-2.3-1.5-3.3-.9-1-2.2-2-2.3-4.1z"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
