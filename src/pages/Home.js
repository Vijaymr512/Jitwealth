import Navbar from "../components/Navbar";
import logo from "../assets/logo_img.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{
          background: "#ffffff",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          {/* CENTERED TEXT */}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "900",
                lineHeight: "1.1",
                color: "#111"
              }}
            >
              Master Stock Trading
            </h1>

            <h1
              style={{
                fontSize: "72px",
                fontWeight: "900",
                lineHeight: "1.1",
                color: "#C9A24D"
              }}
            >
              with Confidence
            </h1>

            <p
              style={{
                marginTop: "24px",
                fontSize: "18px",
                color: "#555",
                maxWidth: "520px",
                marginInline: "auto"
              }}
            >
              Expert-led coaching and smart investment strategies to help
              you navigate the markets and build lasting wealth.
            </p>

            <div style={{ marginTop: "36px" }}>
              <button
                style={primaryBtn}
                onClick={() => navigate("/signup")}
              >
                Get Started
              </button>

              <button
                style={secondaryBtn}
                onClick={() => navigate("/calculator")}
              >
                Try Calculator
              </button>
            </div>
          </div>

          {/* LOGO ON RIGHT */}
          <div style={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="JitWealth Logo"
              style={{
                width: "260px"
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const primaryBtn = {
  background: "#C9A24D",
  color: "#000",
  padding: "14px 34px",
  borderRadius: "30px",
  border: "none",
  fontSize: "16px",
  fontWeight: "700",
  marginRight: "16px",
  cursor: "pointer"
};

const secondaryBtn = {
  background: "transparent",
  color: "#111",
  padding: "14px 34px",
  borderRadius: "30px",
  border: "1px solid #C9A24D",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer"
};
