import Navbar from "../components/Navbar";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [chartData, setChartData] = useState(null);

  const calculate = () => {
    if (!amount || !years || !rate) return;

    let labels = [];
    let values = [];

    for (let i = 1; i <= years; i++) {
      labels.push(`Year ${i}`);
      const value = amount * Math.pow(1 + rate / 100, i);
      values.push(value.toFixed(2));
    }

    setChartData({
      labels,
      datasets: [
        {
          label: "Investment Growth",
          data: values,
          borderColor: "#C9A24D",
          tension: 0.4
        }
      ]
    });
  };

  return (
    <>
      <Navbar />

      <section style={page}>
        <h1 style={title}>
          Investment <span style={{ color: "#C9A24D" }}>Calculator</span>
        </h1>
        <p style={subtitle}>Visualize how your wealth grows over time</p>

        <div style={container}>
          {/* INPUT CARD */}
          <div style={card}>
            <h3>Investment Details</h3>

            <input
              style={input}
              type="number"
              placeholder="Investment Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              style={input}
              type="number"
              placeholder="Years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />

            <input
              style={input}
              type="number"
              placeholder="Expected Return (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />

            <button style={primaryBtn} onClick={calculate}>
              Calculate
            </button>
          </div>

          {/* GRAPH */}
          <div style={resultCard}>
            <h3>Wealth Growth</h3>
            {chartData ? (
              <Line data={chartData} />
            ) : (
              <p style={{ color: "#777" }}>
                Enter values and click Calculate
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const page = {
  minHeight: "100vh",
  padding: "60px 20px",
  textAlign: "center"
};

const title = {
  fontSize: "42px",
  fontWeight: "800",
  color: "#111"
};

const subtitle = {
  color: "#666",
  marginBottom: "50px"
};

const container = {
  maxWidth: "900px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px"
};

const card = {
  padding: "35px",
  borderRadius: "20px",
  border: "2px solid #C9A24D",
  boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
};

const resultCard = {
  padding: "40px",
  borderRadius: "20px",
  border: "2px solid #C9A24D"
};

const input = {
  width: "100%",
  padding: "14px",
  margin: "15px 0",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px"
};

const primaryBtn = {
  marginTop: "20px",
  width: "100%",
  color: "#000",
  border: "none",
  padding: "14px",
  borderRadius: "30px",
  fontWeight: "700",
  cursor: "pointer"
};
