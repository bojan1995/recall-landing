import { tokens } from "../_lib/tokens";

const columns = [
  {
    label: "Before",
    color: tokens.red,
    items: [
      "Searching through old code",
      "Repeating the same fixes",
      "Losing context every day",
      "No visibility into patterns",
    ],
  },
  {
    label: "After",
    color: tokens.accent,
    items: [
      "Instant recall of past work",
      "Reuse solutions in seconds",
      "Clear visibility of your patterns",
      "Time back in your hands",
    ],
  },
];

export function BeforeAfter() {
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
          gridTemplateColumns: "1fr",
        }}
      >
        {columns.map((col, ci) => (
          <div
            key={ci}
            className="reveal"
            style={{
              padding: "40px 16px",
              borderBottom: ci === 0 ? `1px solid ${tokens.border}` : "none",
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: col.color,
              }}
            >
              <span
                style={{ display: "inline-block", width: 16, height: 1, background: col.color }}
              />
              {col.label}
            </div>
            <ul style={{ listStyle: "none" }}>
              {col.items.map((item, i) => (
                <li
                  key={i}
                  className="hover-row"
                  style={{
                    padding: "13px 0",
                    borderBottom:
                      i < col.items.length - 1 ? `1px solid ${tokens.border}` : "none",
                    fontSize: 14,
                    color: ci === 1 ? tokens.text : tokens.dim,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span className="mono" style={{ fontSize: 11, color: tokens.faint }}>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
