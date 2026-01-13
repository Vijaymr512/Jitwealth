import AppNavbar from "../components/AppNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AppHome() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <AppNavbar />

      <div style={{ marginTop: "100px" }}>

        {/* HOME */}
        <Section
          id="home"
          title="JitWealth Home"
          desc="Jit Wealth helps traders and investors understand the Indian stock market with clarity. Learn proven strategies, insights, and tools to grow your wealth consistently."
          arrow
          active={activeSection === "home"}
          onClick={() => {
            setActiveSection("home");
            document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* COURSES */}
        <Section
          id="courses"
          title="Courses"
          desc="Structured programs from beginner to advanced trading."
          action="View Courses"
          active={activeSection === "courses"}
          onClick={() => {
            setActiveSection("courses");
            navigate("/courses");
          }}
        />

        {/* CALCULATOR */}
        <Section
          id="calculator"
          title="Calculator"
          desc="Plan your investments and visualize future wealth."
          action="Open Calculator"
          active={activeSection === "calculator"}
          onClick={() => {
            setActiveSection("calculator");
            navigate("/calculator");
          }}
        />

        {/* MARKET */}
        <Section
          id="market"
          title="Market Tools"
          desc="Live tools, signals, and analytics coming soon."
          action="Coming Soon"
          disabled
          active={activeSection === "market"}
        />

        {/* CONTACT */}
        <Section
          id="contact"
          title="Contact JitWealth"
          desc="Need help? Reach us at support@jitwealth.in"
          action="Mail Us"
          active={activeSection === "contact"}
          onClick={() => {
            setActiveSection("contact");
            window.location.href = "mailto:support@jitwealth.in";
          }}
        />

      </div>
    </>
  );
}

function Section({ id, title, desc, action, onClick, disabled, arrow }) {
  return (
    <div
      id={id}
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        onClick={!disabled ? onClick : null}
        style={{
          background: "#fff",
          padding: "60px",
          borderRadius: "24px",
          width: "80%",
          maxWidth: "900px",
          textAlign: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          border: "1px solid #eee",
          boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
          transition: "0.35s ease",
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = "#FFF7E1";
            e.currentTarget.style.border = "1px solid #C9A24D";
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 35px 70px rgba(201,162,77,0.25)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.border = "1px solid #eee";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.06)";
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#C9A24D" }}>{title}</h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
          {desc}
        </p>

        {/* Action Area */}
        <div style={{ marginTop: "40px" }}>
          {arrow ? (
            <div
              style={{
                fontSize: "42px",
                color: "#C9A24D",
                animation: "bounce 1.5s infinite"
              }}
            >
              ↓
            </div>
          ) : (
            <div
              style={{
                display: "inline-block",
                padding: "14px 34px",
                borderRadius: "30px",
                background: disabled ? "#ddd" : "#C9A24D",
                color: "#000",
                fontWeight: "700"
              }}
            >
              {action}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
