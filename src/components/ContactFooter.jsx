export default function ContactFooter() {
  return (
    <footer
      style={{
        background: "radial-gradient(circle at top, #1a1a1a, #000)",
        color: "#fff",
        padding: "40px 80px 28px",
        marginTop: "80px",
        borderTop: "1px solid rgba(201,162,77,0.3)"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "80px",
          alignItems: "center"
        }}
      >
        {/* LEFT */}
        <div>
          <h2 style={{ color: "#C9A24D", marginBottom: "14px" }}>
            JitWealth
          </h2>

          <p
            style={{
              color: "#bbb",
              maxWidth: "460px",
              lineHeight: "1.7",
              fontSize: "15px"
            }}
          >
            Master stock trading with confidence. Learn, analyze and grow your
            wealth using expert-led strategies, real tools, and powerful
            insights.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 style={{ marginBottom: "18px", color: "#fff" }}>
            Contact Us
          </h3>

          <ContactRow icon="fa-solid fa-phone" text="+91 95355 55644" />
          <ContactRow icon="fa-solid fa-envelope" text="support@jitwealth.in" />

          <div style={{ marginTop: "20px", display: "flex", gap: "14px" }}>
            <Social
              icon="fa-brands fa-facebook-f"
              link="https://facebook.com/jitwealth"
              color="#1877F2"
            />

            <Social
              icon="fa-brands fa-instagram"
              link="https://instagram.com/jitwealth"
              color="#E1306C"
            />

            <Social
              icon="fa-brands fa-whatsapp"
              link="https://wa.me/919535555644"
              color="#25D366"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          margin: "26px 0 14px"
        }}
      />

      {/* Bottom Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          color: "#aaa",
          fontSize: "14px"
        }}
      >
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Address</span>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */

function ContactRow({ icon, text }) {
  return (
    <div
      style={{
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "#ddd",
        fontSize: "15px"
      }}
    >
      <i className={icon} style={{ color: "#C9A24D", fontSize: "18px" }} />
      {text}
    </div>
  );
}

function Social({ icon, link, color }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0 0 0 rgba(0,0,0,0)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.15)";
        e.currentTarget.style.boxShadow = `0 0 25px ${color}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <i className={icon} style={{ color: "#fff", fontSize: "18px" }} />
    </div>
  );
}
