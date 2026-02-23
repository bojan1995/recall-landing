import { tokens } from "../_lib/tokens";

export function FinalCTA() {
  return (
    <div
      style={{
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        background: tokens.bg,
        padding: "80px 16px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 700,
          background: `radial-gradient(circle, rgba(232,255,71,0.045) 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div style={{ position: "relative" }}>
        <h2
          className="syne reveal"
          style={{
            fontWeight: 800,
            fontSize: "clamp(38px,6vw,76px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: 48,
          }}
        >
          Stop repeating
          <br />
          <span style={{ color: tokens.accent }}>your own work.</span>
        </h2>
        <button className="cta-primary reveal" style={{ fontSize: 14, padding: "15px 36px" }}>
          Join Early Access →
        </button>
      </div>
    </div>
  );
}
