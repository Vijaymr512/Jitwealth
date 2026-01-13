import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");

  const isApp = location.pathname === "/app";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const goTo = (id) => {
    if (isApp) {
      scrollToSection(id);
    } else {
      navigate("/app");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setActive(id);
      }, 400);
    }
  };

  /* Highlight when navigating pages */
  useEffect(() => {
    if (location.pathname === "/courses") setActive("courses");
    if (location.pathname === "/calculator") setActive("calculator");
    if (location.pathname === "/dashboard") setActive("profile");
  }, [location.pathname]);

  /* Scroll spy */
  useEffect(() => {
    if (!isApp) return;

    const sections = ["home", "courses", "calculator", "market", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isApp]);

  const logout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <nav style={navStyle}>
      <div style={brand} onClick={() => goTo("home")}>
        JitWealth
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <NavBtn active={active === "home"} onClick={() => goTo("home")}>Home</NavBtn>
        <NavBtn active={active === "courses"} onClick={() => goTo("courses")}>Courses</NavBtn>
        <NavBtn active={active === "calculator"} onClick={() => goTo("calculator")}>Calculator</NavBtn>
        <NavBtn active={active === "market"} onClick={() => goTo("market")}>Market</NavBtn>
        <NavBtn active={active === "profile"} onClick={() => navigate("/dashboard")}>Profile</NavBtn>
        <GoldBtn onClick={logout}>Logout</GoldBtn>
      </div>
    </nav>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#fff",
  borderBottom: "1px solid #eee",
  padding: "16px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1000
};

const brand = { fontWeight: "800", fontSize: "26px", cursor: "pointer" };

function NavBtn({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? "#C9A24D" : "transparent",
        color: active ? "#000" : "#111",
        border: "1px solid #C9A24D",
        borderRadius: "20px",
        padding: "8px 16px",
        cursor: "pointer",
        fontWeight: "600",
        transition: "0.3s"
      }}
    >
      {children}
    </button>
  );
}

function GoldBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#C9A24D",
        border: "none",
        borderRadius: "20px",
        padding: "8px 16px",
        cursor: "pointer",
        fontWeight: "700"
      }}
    >
      {children}
    </button>
  );
}
