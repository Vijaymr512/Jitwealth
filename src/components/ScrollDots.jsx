export default function ScrollDots({ active }) {
  const sections = ["home", "courses", "calculator", "contact"];

  return (
    <div
      style={{
        position: "fixed",
        right: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        zIndex: 1000
      }}
    >
      {sections.map(id => (
        <div
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            width: active === id ? "14px" : "10px",
            height: active === id ? "14px" : "10px",
            borderRadius: "50%",
            background: active === id ? "#C9A24D" : "#ddd",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow:
              active === id ? "0 0 12px rgba(201,162,77,0.8)" : "none"
          }}
        />
      ))}
    </div>
  );
}
