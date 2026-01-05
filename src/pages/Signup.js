import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [pass, setPass]     = useState("");
  const [confirm, setConf]  = useState("");
  const [error, setError]   = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!name || !email || !pass || !confirm){
      setError("Please fill all fields.");
      return;
    }

    if(!gmailPattern.test(email)){
      setError("Only Gmail addresses are allowed.");
      return;
    }

    if(pass.length < 6){
      setError("Password must be at least 6 characters.");
      return;
    }

    if(pass !== confirm){
      setError("Passwords do not match.");
      return;
    }

    setError("Account created! Redirecting...");
    localStorage.setItem("userEmail", email);
    setTimeout(() => navigate("/dashboard"), 900);
  }

  return (
    <>
      <Navbar />

      <div className="auth-box">
        <h2>Create Account</h2>

        <label>Full Name</label>
        <input className="input" value={name} onChange={e=>setName(e.target.value)} />

        <label>Email (Gmail only)</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />

        <label>Password</label>
        <input className="input" type="password" value={pass} onChange={e=>setPass(e.target.value)} />

        <label>Confirm Password</label>
        <input className="input" type="password" value={confirm} onChange={e=>setConf(e.target.value)} />

        <button className="btn primary" style={{width:"100%"}} onClick={handleSignup}>
          Sign Up
        </button>

        <p style={{color: error.includes("created") ? "#7CFF8B" : "#ff6b6b"}}>
          {error}
        </p>
      </div>
    </>
  );
}
