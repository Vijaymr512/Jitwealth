import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail]   = useState("");
  const [password, setPass] = useState("");
  const [error, setError]   = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!email || !password){
      setError("Please fill all fields.");
      return;
    }

    if(!gmailPattern.test(email)){
      setError("Only Gmail addresses are allowed (example@gmail.com).");
      return;
    }

    setError("Login successful! Redirecting...");
    localStorage.setItem("userEmail", email);
    setTimeout(() => navigate("/dashboard"), 900);
  }

  return (
    <>
      <Navbar />

      <div className="auth-box">
        <h2>Login</h2>

        <label>Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="example@gmail.com"
        />

        <label>Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={e => setPass(e.target.value)}
          placeholder="Enter password"
        />

        <button className="btn primary" style={{width:"100%"}} onClick={handleLogin}>
          Login
        </button>

        <p style={{color: error.includes("successful") ? "#7CFF8B" : "#ff6b6b"}}>
          {error}
        </p>
      </div>
    </>
  );
}
