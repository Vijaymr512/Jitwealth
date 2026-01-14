export default function ContactFooter() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "#fff",
        padding: "80px 8%",
        borderTop: "2px solid #C9A24D"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr 1.5fr",
          gap: "60px"
        }}
      >
        {/* LEFT */}
        <div>
          <h2 style={{ color: "#C9A24D", marginBottom: "10px" }}>JitWealth</h2>
          <p style={{ color: "#bbb", maxWidth: "320px", lineHeight: "1.6" }}>
            Master stock trading with confidence. Learn, analyze and grow your
            wealth with expert-led tools and insights.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 style={{ marginBottom: "12px" }}>Stay Connected</h3>
          <p style={{ color: "#aaa", marginBottom: "14px" }}>
            Subscribe to get latest updates.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              placeholder="Enter your email"
              style={{
                padding: "12px",
                flex: 1,
                borderRadius: "8px",
                border: "none",
                outline: "none"
              }}
            />
            <button
              style={{
                background: "#C9A24D",
                color: "#000",
                border: "none",
                borderRadius: "8px",
                padding: "12px 20px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 style={{ marginBottom: "12px" }}>Contact Us</h3>
          <p style={{ color: "#bbb", marginBottom: "10px" }}>
            📞 +91 95355 55644
          </p>
          <p style={{ color: "#bbb" }}>✉ support@jitwealth.in</p>

          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <Icon>f</Icon>
            <Icon>in</Icon>
            <Icon>ig</Icon>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          marginTop: "60px",
          borderTop: "1px solid #222",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          color: "#aaa",
          fontSize: "14px"
        }}
      >
        <span style={{ cursor: "pointer" }}>Privacy Policy</span>
        <span style={{ cursor: "pointer" }}>Terms of Use</span>
        <span style={{ cursor: "pointer" }}>Address</span>
      </div>
    </div>
  );
}

function Icon({ children }) {
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: "#C9A24D",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
        cursor: "pointer"
      }}
    >
      {children}
    </div>
  );
}
