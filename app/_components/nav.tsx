import { tokens } from "../_lib/tokens";

export function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        minHeight: 52,
        borderBottom: `1px solid ${tokens.border}`,
        background: "rgba(28,30,38,0.92)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <div
        className="syne"
        style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}
      >
        recall<span style={{ color: tokens.accent }}>.</span>
      </div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {["How it works", "Features", "Pricing"].map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="nav-link">
            {l}
          </a>
        ))}
      </div>
      <button
        className="cta-primary"
        style={{ padding: "7px 16px", fontSize: 12, whiteSpace: "nowrap" }}
      >
        Get Early Access
      </button>
    </nav>
  );
}
