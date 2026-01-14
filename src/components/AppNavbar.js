import { useNavigate } from "react-router-dom";

export default function AppNavbar({ activeSection }) {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: "14px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      {/* LOGO */}
      <div
        style={{ fontWeight: "800", fontSize: "26px", cursor: "pointer" }}
        onClick={() => go("/app")}
      >
        JitWealth
      </div>

      {/* NAV BUTTONS */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <NavBtn active={activeSection === "home"} onClick={() => go("/app")}>
          Home
        </NavBtn>

        <NavBtn onClick={() => go("/courses")}>Courses</NavBtn>

        <NavBtn onClick={() => go("/calculator")}>Calculator</NavBtn>

        {/* PROFILE ICON */}
        <div
          onClick={() => go("/dashboard")}
          title="Profile"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "#C9A24D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "700",
            color: "#000"
          }}
        >
          👤
        </div>

        <GoldBtn onClick={() => {
          localStorage.clear();
          go("/");
        }}>
          Logout
        </GoldBtn>
      </div>
    </nav>
  );
}

/* ---------------- BUTTONS ---------------- */

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
        fontWeight: "600"
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
        padding: "8px 18px",
        cursor: "pointer",
        fontWeight: "700"
      }}
    >
      {children}
    </button>
  );
}
