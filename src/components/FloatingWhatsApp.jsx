export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919535555644"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        zIndex: 2000,
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        cursor: "pointer",
        textDecoration: "none"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 0 30px #25D366";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
      }}
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
