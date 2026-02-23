import { tokens } from "../_lib/tokens";

const links = ["Privacy", "Terms", "Contact"];

export function Footer() {
  return (
    <footer
      style={{
        background: tokens.bg2,
        borderTop: `1px solid ${tokens.border}`,
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          textAlign: "center",
        }}
      >
        <div
          className="mono"
          style={{ fontSize: 11, color: tokens.faint, letterSpacing: "0.04em" }}
        >
          © 2026 Recall Inc. · All rights reserved.
        </div>
        <nav style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }} aria-label="Footer navigation">
          {links.map((l) => (
            <a key={l} href="#" className="nav-link" style={{ fontSize: 11 }}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
