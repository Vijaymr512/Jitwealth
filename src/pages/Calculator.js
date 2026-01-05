import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears]   = useState("");
  const [rate, setRate]     = useState("");

  const [finalValue, setFinalValue] = useState(0);
  const [summary, setSummary]       = useState("");

  function calculate() {
    const p = Number(amount);
    const r = Number(rate) / 100;
    const t = Number(years);

    if (!p || !r || !t) {
      setSummary("Please fill all fields.");
      setFinalValue(0);
      return;
    }

    const final = p * Math.pow(1 + r, t);

    setFinalValue(final.toFixed(2));
    setSummary(
      `In ${t} years, your investment could grow from ₹${p} to ₹${final.toFixed(
        2
      )}.`
    );
  }

  return (
    <>
      <Navbar />

      <section className="section fade-in">
        <h1 style={{ textAlign: "center", fontSize: "38px" }}>
          Investment <span style={{ color: "#B78425" }}>Calculator</span>
        </h1>

        <p className="subtitle" style={{ textAlign: "center" }}>
          Visualize your wealth growth with our powerful compound interest calculator
        </p>

        <div className="calc-container">

          {/* LEFT CARD */}
          <div className="calc-card">
            <h3>Your Details</h3>
            <p className="small">Enter investment info</p>

            <label>Investment Amount</label>
            <input
              className="input"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="₹ Enter amount"
            />

            <label>Duration (Years)</label>
            <input
              className="input"
              type="number"
              value={years}
              onChange={e => setYears(e.target.value)}
              placeholder="Enter years"
            />

            <label>Expected Return (%)</label>
            <input
              className="input"
              type="number"
              value={rate}
              onChange={e => setRate(e.target.value)}
              placeholder="Expected %"
            />

            <button className="btn primary" onClick={calculate}>
              Calculate Returns
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="calc-card">
            <h3>Results</h3>
            <p className="small">Projected wealth growth</p>

            <h2 id="final" style={{ marginTop: 25, color: "#B78425" }}>
              ₹ {finalValue}
            </h2>

            <p id="summary" style={{ color: "#dcdcdc" }}>
              {summary}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
