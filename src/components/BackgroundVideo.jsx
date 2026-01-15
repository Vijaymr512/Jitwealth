export default function BackgroundVideo() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      overflow: "hidden"
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(1.4) contrast(1.05)"
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(201,162,77,0.18))"
      }} />
    </div>
  );
}
