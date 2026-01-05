import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");
  const username = email ? email.split("@")[0] : "Trader";

  // redirect if not logged in
  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email, navigate]);

  return (
    <>
      <Navbar />

      <section className="section fade-in">
        <h1 style={{ textAlign: "center", color: "#B78425" }}>
          Welcome, {username} 👋
        </h1>

        <p className="subtitle" style={{ textAlign: "center" }}>
          Track your learning progress, investments, and achievements.
        </p>

        <div className="dash-grid">

          <div className="dash-card">
            <h3>Total Courses Enrolled</h3>
            <h2>3</h2>
            <p>You’re actively improving your trading skills.</p>
          </div>

          <div className="dash-card">
            <h3>Estimated Portfolio Value</h3>
            <h2>₹ 2,45,000</h2>
            <p>Based on your last investments & calculator results.</p>
          </div>

          <div className="dash-card">
            <h3>Success Rate</h3>
            <h2>95%</h2>
            <p>Great job — keep learning and practicing!</p>
          </div>

        </div>
      </section>
    </>
  );
}
