export default function MiniStats() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "40px",
        flexWrap: "wrap"
      }}
    >
      <StatCard title="Courses Enrolled" value="3" desc="You're actively improving your skills." />
      <StatCard title="Portfolio Value" value="₹ 2,45,000" desc="Based on your calculator results." />
      <StatCard title="Success Rate" value="95%" desc="Your trading performance is excellent." />
    </div>
  );
}

function StatCard({ title, value, desc }) {
  return (
    <div
      style={{
        minWidth: "220px",
        padding: "20px",
        borderRadius: "16px",
        background: "#fff",
        border: "1px solid #C9A24D",
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        textAlign: "left"
      }}
    >
      <div style={{ fontSize: "14px", color: "#777", fontWeight: "600" }}>
        {title}
      </div>
      <div style={{ fontSize: "28px", color: "#C9A24D", fontWeight: "800", margin: "8px 0" }}>
        {value}
      </div>
      <div style={{ fontSize: "13px", color: "#555" }}>{desc}</div>
    </div>
  );
}
