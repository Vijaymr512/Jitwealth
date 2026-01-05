import { Link } from "react-router-dom";

export default function Navbar() {

  // Check if user is logged in
  const userEmail = localStorage.getItem("userEmail");
  const username = userEmail ? userEmail.split("@")[0] : null;

  return (
    <nav style={{display:"flex",justifyContent:"space-between",padding:"18px 60px"}}>
      <div style={{fontWeight:"700"}}>JitWealth</div>

      <div>

        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/calculator">Calculator</Link>

        {username ? (
  <>
    <span style={{ color: "#B78425", marginLeft: "12px" }}>
      Hi, {username} 👋
    </span>

    <button
      style={{
        marginLeft: "14px",
        background: "transparent",
        border: "1px solid #B78425",
        color: "#B78425",
        borderRadius: "20px",
        padding: "6px 14px",
        cursor: "pointer"
      }}
      onClick={() => {
        localStorage.removeItem("userEmail");
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  </>
) : (
  <>
    <Link to="/login" className="nav-btn login">Login</Link>
    <Link to="/signup" className="nav-btn signup">Sign Up</Link>
  </>
)}

      </div>
    </nav>
  );
}
