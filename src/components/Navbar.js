import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        padding: "16px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* Clickable Brand */}
      <Link
        to="/"
        style={{
          fontWeight: "800",
          fontSize: "35px",
          textDecoration: "none",
          color: "#111",
          cursor: "pointer"
        }}
      >
        JitWealth
      </Link>

      <div style={{ display: "flex", gap: "12px" }}>
        <NavBtn to="/courses">Courses</NavBtn>
        <NavBtn to="/calculator">Calculator</NavBtn>
        <NavBtn to="/login">Login</NavBtn>
        <GoldBtn to="/signup">Sign Up</GoldBtn>
      </div>
    </nav>
  );
}

function NavBtn({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        padding: "8px 16px",
        borderRadius: "20px",
        border: "1px solid #C9A24D",
        color: "#111",
        fontSize: "14px",
        fontWeight: "500"
      }}
    >
      {children}
    </Link>
  );
}

function GoldBtn({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        padding: "8px 18px",
        borderRadius: "20px",
        background: "#C9A24D",
        color: "#000",
        fontSize: "14px",
        fontWeight: "700"
      }}
    >
      {children}
    </Link>
  );
}
