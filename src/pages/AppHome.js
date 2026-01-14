import AppNavbar from "../components/AppNavbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollDots from "../components/ScrollDots";
import ContactFooter from "../components/ContactFooter";

export default function AppHome() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const userEmail = localStorage.getItem("userEmail") || "user@jitwealth.com";
  const userName = userEmail.split("@")[0];

  useEffect(() => {
    const sectionIds = ["home", "courses", "calculator", "contact"];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppNavbar activeSection={activeSection} />
      <ScrollDots active={activeSection} />

      <div
        style={{
          marginTop: "120px",
          background: "linear-gradient(180deg, #fdfaf3, #ffffff)",
          paddingBottom: "200px"
        }}
      >
        {/* HOME */}
        <Section
          id="home"
          title={`Welcome, ${userName}`}
          desc={
            <>
              <div style={{ fontSize: "16px", marginBottom: "12px", color: "#777" }}>
                {userEmail}
              </div>

              {/* STAT CARDS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                  margin: "30px 0"
                }}
              >
                <StatCard
                  title="Courses Enrolled"
                  value="3"
                  text="You're actively improving your skills."
                />
                <StatCard
                  title="Portfolio Value"
                  value="₹ 2,45,000"
                  text="Based on your calculator results."
                />
                <StatCard
                  title="Success Rate"
                  value="95%"
                  text="Your trading performance is excellent."
                />
              </div>

              <div style={{ color: "#555", maxWidth: "700px", margin: "0 auto" }}>
                Jit Wealth helps traders and investors understand the Indian stock market with clarity.
                Learn proven strategies, insights, and tools to grow your wealth consistently.
              </div>
            </>
          }
          arrow
          active={activeSection === "home"}
          onClick={() =>
            document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
          }
        />

        {/* COURSES */}
        <Section
          id="courses"
          title="Courses"
          desc="Structured programs from beginner to advanced trading."
          action="View Courses"
          active={activeSection === "courses"}
          onClick={() => navigate("/courses")}
        />

        {/* CALCULATOR */}
        <Section
          id="calculator"
          title="Calculator"
          desc="Plan your investments and visualize future wealth."
          action="Open Calculator"
          active={activeSection === "calculator"}
          onClick={() => navigate("/calculator")}
        />

        <div id="contact">
  <ContactFooter />
</div>
      </div>
    </>
  );
}

/* ---------------- SECTION COMPONENT ---------------- */

function Section({ id, title, desc, action, onClick, disabled, arrow, active }) {
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
        onClick={!disabled ? onClick : undefined}
        style={{
          background: active ? "#FFF4D6" : "#ffffff",
          padding: "60px",
          borderRadius: "24px",
          width: "80%",
          maxWidth: "900px",
          textAlign: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          border: active ? "2px solid #C9A24D" : "1px solid #eee",
          boxShadow: active
            ? "0 30px 60px rgba(201,162,77,0.35)"
            : "0 20px 50px rgba(0,0,0,0.12)",
          transition: "0.4s"
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#C9A24D" }}>{title}</h1>

        <div style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
          {desc}
        </div>

        <div style={{ marginTop: "40px" }}>
          {arrow ? (
            <div style={{ fontSize: "42px", color: "#C9A24D" }}>↓</div>
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

function StatCard({ title, value, text }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "24px",
        border: "1px solid #f0e0b5",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}
    >
      <h4 style={{ fontSize: "14px", color: "#888" }}>{title}</h4>
      <div style={{ fontSize: "28px", fontWeight: "800", color: "#C9A24D", margin: "10px 0" }}>
        {value}
      </div>
      <p style={{ fontSize: "13px", color: "#666" }}>{text}</p>
    </div>
  );
}
