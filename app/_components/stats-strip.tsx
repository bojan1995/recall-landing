import { tokens } from "../_lib/tokens";

const stats = [
  { num: "63", unit: "%", label: "Work repeated weekly" },
  { num: "4.2", unit: "h", label: "Lost per dev per week" },
  { num: "91", unit: "%", label: "Problems already solved" },
  { num: "0", unit: "", label: "Systems tracking this" },
];

export function StatsStrip() {
  return (
    <div
      style={{
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        background: tokens.bg2,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="metric-cell reveal"
            style={{
              padding: "24px 16px",
              borderRight: i < 3 ? `1px solid ${tokens.border}` : "none",
              transition: "background 0.2s",
              cursor: "default",
              textAlign: "center",
            }}
          >
            <div
              className="syne"
              style={{
                fontWeight: 800,
                fontSize: "clamp(28px, 5vw, 34px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              <span style={{ color: tokens.accent }}>{s.num}</span>
              {s.unit}
            </div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.06em",
                color: tokens.faint,
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
