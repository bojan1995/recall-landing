import { useState } from "react";
import { useTypewriter } from "../_hooks/use-typewriter";
import { tokens } from "../_lib/tokens";

const scanLines = [
  "→ recall analyze --input",
  "  Tokenizing work log...",
  "  Matching against 47 past sessions...",
  "  Pattern graph computed.",
  "",
  "  ⚠ Repetition detected: 63%",
];

const bars = [
  { label: "Debugging similar issues", pct: 73, color: tokens.red },
  { label: "Rewriting logic", pct: 54, color: tokens.accent },
  { label: "Searching old solutions", pct: 41, color: tokens.blue },
];

export function InteractionDemo() {
  const [value, setValue] = useState("");
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);

  const { displayed } = useTypewriter(scanLines, loading);

  const handleAnalyze = () => {
    if (!value.trim()) return;
    setLoading(true);
    setAnalyzed(false);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, scanLines.length * 18 * 12 + 400);
  };

  return (
    <section
      style={{ padding: "64px 16px", maxWidth: 1100, margin: "0 auto" }}
      id="how-it-works"
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
          Live Demo
        </div>
        <h2
          className="syne"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px,4vw,46px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 48,
          }}
        >
          Type what you
          <br />
          worked on today.
        </h2>
        <div style={{ border: `1px solid ${tokens.border}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
            <div style={{ padding: "24px 16px", borderBottom: `1px solid ${tokens.border}` }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: tokens.faint,
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: tokens.blue,
                    display: "inline-block",
                  }}
                />
                Input
              </div>
              <textarea
                className="work-input"
                placeholder="Fix login bug, update dashboard UI, write API docs, debug pagination issue again..."
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setAnalyzed(false);
                  setLoading(false);
                }}
                aria-label="Work description input"
              />
              <button
                className="cta-primary"
                style={{ marginTop: 14, width: "100%" }}
                onClick={handleAnalyze}
                disabled={!value.trim() || loading}
              >
                {loading ? "Analyzing..." : "Analyze My Work →"}
              </button>
            </div>

            <div style={{ padding: "24px 16px", background: tokens.bg2 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: analyzed ? tokens.accent : tokens.faint,
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: analyzed ? tokens.accent : tokens.faint,
                    display: "inline-block",
                  }}
                />
                Analysis
              </div>

              {!loading && !analyzed && (
                <div className="mono" style={{ fontSize: 12, color: tokens.faint }}>
                  Waiting for input...
                </div>
              )}

              {loading && (
                <div className="mono" style={{ fontSize: 12, lineHeight: 1.9 }}>
                  {displayed.map((line, i) => (
                    <div
                      key={i}
                      style={{
                        color: line.startsWith("  ⚠")
                          ? tokens.accent
                          : line.startsWith("→")
                          ? tokens.blue
                          : tokens.dim,
                      }}
                    >
                      {line}
                      {i === displayed.length - 1 && (
                        <span
                          className="blink"
                          style={{
                            display: "inline-block",
                            width: 7,
                            height: 13,
                            background: tokens.accent,
                            verticalAlign: "middle",
                            marginLeft: 3,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {analyzed && (
                <div>
                  <div
                    className="syne"
                    style={{
                      fontWeight: 800,
                      fontSize: 30,
                      letterSpacing: "-0.03em",
                      color: tokens.accent,
                      lineHeight: 1.1,
                      marginBottom: 24,
                    }}
                  >
                    You repeated
                    <br />
                    63% of your work.
                  </div>
                  {bars.map((b, i) => (
                    <div
                      key={i}
                      className="hover-row"
                      style={{
                        padding: "11px 0",
                        borderBottom:
                          i < bars.length - 1 ? `1px solid ${tokens.border}` : "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span
                        className="mono"
                        style={{ fontSize: 12, color: tokens.dim, minWidth: 180 }}
                      >
                        {b.label}
                      </span>
                      <div
                        style={{
                          flex: 1,
                          height: 3,
                          background: tokens.border,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="bar-animate"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            height: "100%",
                            width: `${b.pct}%`,
                            background: b.color,
                          }}
                        />
                      </div>
                      <span
                        className="mono"
                        style={{
                          fontSize: 11,
                          color: tokens.faint,
                          minWidth: 28,
                          textAlign: "right",
                        }}
                      >
                        {b.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
