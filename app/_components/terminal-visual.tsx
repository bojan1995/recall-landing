import { useState, useEffect } from "react";
import { tokens } from "../_lib/tokens";

type Result = {
  label: string;
  pct: number;
  color: string;
};

export function TerminalVisual() {
  const [phase, setPhase] = useState(0);
  const [scanCount, setScanCount] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setInterval(() => {
      setScanCount((c) => {
        if (c >= 312) {
          clearInterval(t2);
          setPhase(2);
          return 312;
        }
        return c + Math.floor(Math.random() * 12) + 4;
      });
    }, 65);
    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, []);

  const results: Result[] = [
    { label: "Auth / token issues", pct: 73, color: tokens.red },
    { label: "Async / fetch rewrites", pct: 54, color: tokens.accent },
    { label: "Searching old solutions", pct: 41, color: tokens.blue },
  ];

  return (
    <div
      style={{
        border: `1px solid ${tokens.borderM}`,
        background: tokens.bg2,
        fontFamily: "'IBM Plex Mono', monospace",
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
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            color: tokens.faint,
            letterSpacing: "0.06em",
          }}
        >
          recall — session analysis v1.0
        </span>
      </div>

      <div style={{ padding: "20px 24px", fontSize: 13, lineHeight: 1.9, minHeight: 220 }}>
        <div>
          <span style={{ color: tokens.blue }}>→</span>{" "}
          <span style={{ color: tokens.text }}>recall analyze --week --depth=full</span>
        </div>

        {phase >= 1 && (
          <>
            <div style={{ color: tokens.faint }}>
              Scanning sessions · commits · searches...
            </div>
            <div style={{ color: tokens.faint }}>
              {"  ["}
              <span style={{ color: tokens.accent }}>
                {"█".repeat(Math.min(Math.floor(scanCount / 12), 26))}
              </span>
              <span style={{ color: tokens.faint }}>
                {"░".repeat(Math.max(26 - Math.floor(scanCount / 12), 0))}
              </span>
              {"]"} <span style={{ color: tokens.dim }}>{scanCount}</span>
              <span style={{ color: tokens.faint }}>/312 items</span>
            </div>
            <div>&nbsp;</div>
          </>
        )}

        {phase === 2 && (
          <>
            <div style={{ color: tokens.accent }}>⚠ Repetition pattern detected</div>
            <div style={{ color: tokens.dim }}>    63% of this week was repeated work</div>
            <div>&nbsp;</div>
            <div style={{ color: tokens.dim }}>  Top time sinks:</div>
            {results.map((r, i) => (
              <div
                key={i}
                style={{ color: tokens.dim, display: "flex", alignItems: "flex-start", gap: 10, marginTop: 4 }}
              >
                <span style={{ minWidth: 180 }}>
                    {i === 0 ? "├─" : i === results.length - 1 ? "└─" : "├─"}{" "}
                  <span style={{ color: r.color }}>{r.pct}%</span>
                </span>
                <span>{r.label}</span>
              </div>
            ))}
            <div>&nbsp;</div>
            <div>
              <span style={{ color: tokens.blue }}>→</span>{" "}
              <span
                className="blink"
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 14,
                  background: tokens.accent,
                  verticalAlign: "middle",
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
