import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      alert("Only Gmail addresses are allowed");
      return;
    }

    // Save user
    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff"
        }}
      >
        <div
          style={{
            width: "420px",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #C9A24D",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            background: "#fff",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Welcome Back
          </h2>

          <p style={{ color: "#777", marginBottom: "30px" }}>
            Login to your JitWealth account
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Enter Password"
              required
              style={inputStyle}
            />

            <button type="submit" style={primaryBtn}>
              Login
            </button>
          </form>

          <p style={{ marginTop: "20px", color: "#555" }}>
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "#C9A24D", cursor: "pointer", fontWeight: "600" }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #C9A24D",
  fontSize: "15px"
};

const primaryBtn = {
  width: "100%",
  background: "#C9A24D",
  color: "#000",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer"
};
