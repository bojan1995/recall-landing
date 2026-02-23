import { tokens } from "../_lib/tokens";

export function ConceptSection() {
  return (
    <section
      style={{
        padding: "64px 16px",
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 40,
        alignItems: "center",
      }}
    >
      <div className="reveal">
        <div
          className="mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            color: tokens.faint,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          The System
        </div>
        <h2
          className="syne"
          style={{
            fontWeight: 700,
            fontSize: "clamp(26px,3.5vw,40px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          A system that remembers
          <br />
          your work patterns.
        </h2>
        <p style={{ fontSize: 15, color: tokens.dim, lineHeight: 1.8, marginBottom: 18 }}>
          Most engineers lose hours each week solving problems they've already solved.
          Context disappears into git history, Slack threads, and closed tabs.
        </p>
        <p style={{ fontSize: 15, color: tokens.dim, lineHeight: 1.8 }}>
          Recall builds a persistent map of your work — detecting patterns, surfacing
          relevant past solutions, and showing you exactly where your time goes without
          changing how you work.
        </p>
      </div>
      <div
        className="reveal"
        style={{
          border: `1px solid ${tokens.borderM}`,
          background: tokens.bg2,
          fontFamily: "'IBM Plex Mono',monospace",
          fontSize: 13,
        }}
      >
        <div
          style={{
            height: 36,
            background: tokens.bg3,
            borderBottom: `1px solid ${tokens.border}`,
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
            gap: 6,
          }}
        >
          {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
            <div
              key={c}
              style={{ width: 10, height: 10, borderRadius: "50%", background: c }}
            />
          ))}
          <span style={{ marginLeft: "auto", fontSize: 11, color: tokens.faint }}>
            pattern_graph.json
          </span>
        </div>
        <div style={{ padding: "20px 24px", lineHeight: 1.9 }}>
          <div style={{ color: tokens.faint }}>{"// work pattern graph — last 30d"}</div>
          <div>&nbsp;</div>
          <div style={{ color: tokens.blue }}>
            clusters: <span style={{ color: tokens.text }}>[</span>
          </div>
          {[
            { id: "auth-issues", occ: 14, pct: "0.28" },
            { id: "pagination-logic", occ: 9, pct: "0.11" },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ color: tokens.text }}>&nbsp; {"{"}</div>
              <div>
                &nbsp;&nbsp;&nbsp;<span style={{ color: tokens.accent }}>id</span>:{" "}
                <span style={{ color: tokens.dim }}>"{c.id}"</span>,
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;<span style={{ color: tokens.accent }}>occurrences</span>:{" "}
                <span style={{ color: tokens.red }}>{c.occ}</span>,
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;<span style={{ color: tokens.accent }}>solved_pct</span>:{" "}
                <span style={{ color: tokens.faint }}>{c.pct}</span>
              </div>
              <div style={{ color: tokens.text }}>
                &nbsp; {"}"}
                {i === 0 ? "," : ""}
              </div>
            </div>
          ))}
          <div style={{ color: tokens.text }}>]</div>
        </div>
      </div>
    </section>
  );
}
