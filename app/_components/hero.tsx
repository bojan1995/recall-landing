import { TerminalVisual } from "./terminal-visual";
import { tokens } from "../_lib/tokens";

export function Hero() {
  return (
    <>
      <section style={{ padding: "80px 16px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="mono fade-up-0"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            color: tokens.accent,
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 1,
              background: tokens.accent,
            }}
          />
          Early Access — 2026
        </div>

        <h1
          className="syne fade-up-1"
          style={{
            fontWeight: 800,
            fontSize: "clamp(48px,7.5vw,92px)",
            lineHeight: 0.93,
            letterSpacing: "-0.04em",
            marginBottom: 0,
          }}
        >
          You're working
          <br />
          <span style={{ color: tokens.faint }}>harder</span> than
          <br />
          <span style={{ color: tokens.accent }}>you think.</span>
        </h1>

        <p
          className="syne fade-up-2"
          style={{
            fontWeight: 500,
            fontSize: "clamp(18px,2.4vw,26px)",
            color: tokens.dim,
            letterSpacing: "-0.01em",
            marginTop: 24,
            marginBottom: 48,
            maxWidth: 540,
          }}
        >
          We track what you don't see.
        </p>

        <div
          className="fade-up-3"
          style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}
        >
          <button className="cta-primary">Get Early Access →</button>
          <button className="cta-ghost">See how it works</button>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        <TerminalVisual />
      </div>
    </>
  );
}
