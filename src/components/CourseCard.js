export default function CourseCard({ image, title, desc, onClick }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #C9A24D",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "14px",
          marginBottom: "15px"
        }}
      />

      <h3 style={{ color: "#111", marginBottom: "8px" }}>
        {title}
      </h3>

      <p style={{ color: "#666", flexGrow: 1 }}>
        {desc}
      </p>

      <button
        onClick={onClick}
        style={{
          marginTop: "15px",
          background: "#C9A24D",
          color: "#000",
          border: "none",
          borderRadius: "20px",
          padding: "10px",
          fontWeight: "700",
          cursor: "pointer"
        }}
      >
        View Details
      </button>
    </div>
  );
}
