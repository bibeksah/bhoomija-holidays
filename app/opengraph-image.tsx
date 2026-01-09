import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bhumija Holidays - Premium Cultural Travel in Nepal";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Gallery images to use as backgrounds
const galleryImages = [
  "pashupatinath-temple.jpg",
  "boudhanath-stupa.jpg",
  "swayambhunath-stupa.jpg",
  "kathmandu-durbar-square.jpg",
  "patan-durbar-square.jpg",
  "bhaktapur-durbar-square.jpg",
  "changu-narayan-temple.jpg",
  "kopan-monastery.jpg",
  "garden-of-dreams.jpg",
  "thamel.jpg",
  "janaki-mandir.jpg",
  "dhanush-sagar.jpg",
  "mithila-art-center.jpg",
];

export default async function OGImage() {
  // Pick a random image
  const randomImage = galleryImages[Math.floor(Math.random() * galleryImages.length)];
  const imageUrl = `https://bhumijaholidays.com/gallery/${randomImage}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <img
          src={imageUrl}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(11, 61, 145, 0.85) 0%, rgba(8, 48, 112, 0.75) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "40px",
          }}
        >
          {/* Decorative Line */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #D4AF37, #FF8C00)",
              marginBottom: "30px",
              borderRadius: "2px",
            }}
          />

          {/* Logo Text */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#FFFFFF",
                fontFamily: "Georgia, serif",
              }}
            >
              Bhumija
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: "300",
                color: "#FF8C00",
                fontFamily: "Georgia, serif",
                marginLeft: "16px",
              }}
            >
              Holidays
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.95)",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
              marginBottom: "40px",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Premium Cultural Travel in Nepal
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "20px",
            }}
          >
            {["Kathmandu", "Janakpurdham", "Mithila Culture"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#D4AF37",
                  }}
                />
                <span
                  style={{
                    fontSize: "22px",
                    color: "rgba(255, 255, 255, 0.9)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50px",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "18px" }}>
            bhumijaholidays.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
