import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CourseDetails() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <>
      <Navbar />

      <section style={page}>
        <div style={container}>
          {/* LEFT */}
          <div>
            <h1 style={title}>
              Stock Market <span style={{ color: "#C9A24D" }}>Basics</span>
            </h1>

            <p style={subtitle}>
              Beginner friendly roadmap to understand markets, risk, and trading discipline.
            </p>

            <h3>What you'll learn</h3>
            <ul style={list}>
              <li>How the stock market works</li>
              <li>Stock types & trading styles</li>
              <li>Basics of chart reading</li>
              <li>Risk management & psychology</li>
            </ul>

            <button style={enrollBtn}>Enroll Now</button>

            <div style={priceCard}>
              <h3>Course Price</h3>
              <h1>₹ 4,999</h1>
              <p>One-time payment. Lifetime access.</p>
            </div>

            <div style={instructor}>
              <h3>Instructor</h3>
              <p><b>Rahul Mehta</b></p>
              <p>SEBI Certified Market Analyst</p>
              <p>12+ years experience in Indian stock markets.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div style={infoCard}>
              <h3>Course Info</h3>
              <p><b>Duration:</b> 6 Weeks</p>
              <p><b>Level:</b> Beginner</p>
              <p><b>Certification:</b> Yes</p>
            </div>

            <div style={syllabus}>
              <h3>Course Syllabus</h3>

              {["Market Basics", "Technical Analysis", "Risk Management", "Trading Psychology"].map((item, i) => (
                <div key={i} style={accordion}>
                  <div style={accHeader} onClick={() => toggle(i)}>
                    {item}
                    <span>{open === i ? "−" : "+"}</span>
                  </div>
                  {open === i && <div style={accBody}>Detailed lessons and live trading setups.</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const page = {
  background: "#ffffff",
  minHeight: "100vh",
  padding: "60px 20px"
};

const container = {
  maxWidth: "1200px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "1.4fr 1fr",
  gap: "60px"
};

const title = { fontSize: "42px", color: "#111" };
const subtitle = { color: "#666", fontSize: "18px", marginBottom: "25px" };
const list = { lineHeight: "2", color: "#444" };

const enrollBtn = {
  marginTop: "30px",
  background: "#C9A24D",
  color: "#000",
  border: "none",
  borderRadius: "30px",
  padding: "14px 40px",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer"
};

const priceCard = {
  marginTop: "40px",
  padding: "25px",
  border: "2px solid #C9A24D",
  borderRadius: "20px"
};

const instructor = {
  marginTop: "30px",
  padding: "20px",
  background: "#f9f9f9",
  borderRadius: "15px"
};

const infoCard = {
  padding: "30px",
  border: "2px solid #C9A24D",
  borderRadius: "20px"
};

const syllabus = {
  marginTop: "30px",
  padding: "30px",
  borderRadius: "20px",
  background: "#fff",
  border: "1px solid #ddd"
};

const accordion = {
  marginTop: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const accHeader = {
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  fontWeight: "600"
};

const accBody = {
  padding: "15px",
  color: "#666"
};
