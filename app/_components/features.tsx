import { useState } from "react";
import { tokens } from "../_lib/tokens";

type FeatureCardProps = {
  icon: string;
  name: string;
  desc: string;
};

function FeatureCard({ icon, name, desc }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "24px 16px",
        borderRight: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        background: hovered ? tokens.bg2 : "transparent",
        transition: "background 0.2s",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          border: `1px solid ${hovered ? tokens.borderM : tokens.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          fontSize: 18,
          transition: "border-color 0.2s",
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div
        className="syne"
        style={{
          fontWeight: 700,
          fontSize: 17,
          letterSpacing: "-0.02em",
          marginBottom: 10,
          color: tokens.text,
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 13, color: tokens.dim, lineHeight: 1.75 }}>{desc}</div>
    </div>
  );
}

const features = [
  {
    icon: "⬡",
    name: "Pattern Detection",
    desc: "Automatically surfaces recurring work clusters — debug loops, rewrite cycles, repeated searches — without any manual tagging.",
  },
  {
    icon: "◈",
    name: "Work Memory",
    desc: "Every session, commit, and search is indexed into a queryable graph. Your past solutions are always one keystroke away.",
  },
  {
    icon: "◎",
    name: "Instant Recall",
    desc: "Query your own work history in natural language. Find the exact fix you wrote 3 weeks ago in under 2 seconds.",
  },
];

export function Features() {
  return (
    <section
      style={{ padding: "64px 16px", maxWidth: 1100, margin: "0 auto" }}
      id="features"
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
          Capabilities
        </div>
        <h2
          className="syne"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px,4vw,44px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 48,
          }}
        >
          Built for how
          <br />
          engineers actually work.
        </h2>
      </div>
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          border: `1px solid ${tokens.border}`,
        }}
      >
        {features.map((f) => (
          <FeatureCard key={f.name} {...f} />
        ))}
      </div>
    </section>
  );
}
