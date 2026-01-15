export default function GlassOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.9))",
        zIndex: -1
      }}
    />
  );
}
