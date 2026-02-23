import { tokens } from "../_lib/tokens";

type PricingCardProps = {
  tier: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

function PricingCard({ tier, price, desc, features, featured }: PricingCardProps) {
  return (
    <div
      style={{
        padding: "24px 16px",
        borderRight: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        background: featured ? tokens.bg2 : "transparent",
        position: "relative",
      }}
    >
      {featured && (
        <span
          className="mono"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontSize: 9,
            letterSpacing: "0.12em",
            color: tokens.accent,
          }}
          aria-label="Recommended plan"
        >
          RECOMMENDED
        </span>
      )}
      <div
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: "0.1em",
          color: tokens.faint,
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        {tier}
      </div>
      <div
        className="syne"
        style={{
          fontWeight: 800,
          fontSize: 38,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {price === "Free" ? (
          "Free"
        ) : (
          <>
            <span style={{ fontSize: 18, fontWeight: 400, color: tokens.dim }}>$</span>
            {price}
          </>
        )}
        {price !== "Free" && (
          <span
            style={{
              fontFamily: "Epilogue, sans-serif",
              fontSize: 13,
              fontWeight: 400,
              color: tokens.dim,
              letterSpacing: 0,
            }}
          >
            /mo
          </span>
        )}
      </div>
      <div
        style={{
          fontSize: 13,
          color: tokens.dim,
          marginBottom: 24,
          lineHeight: 1.6,
          minHeight: 42,
        }}
      >
        {desc}
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {features.map((f, i) => (
          <li
            key={i}
            className="mono"
            style={{
              fontSize: 12,
              color: tokens.dim,
              display: "flex",
              alignItems: "center",
              gap: 8,
              listStyle: "none",
            }}
          >
            <span style={{ color: tokens.accent }} aria-hidden="true">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        style={{
          width: "100%",
          fontFamily: "'IBM Plex Mono',monospace",
          fontSize: 12,
          letterSpacing: "0.06em",
          fontWeight: 500,
          padding: 11,
          cursor: "pointer",
          background: featured ? tokens.accent : "transparent",
          border: featured
            ? `1px solid ${tokens.accent}`
            : `1px solid ${tokens.borderM}`,
          color: featured ? "#1C1E26" : tokens.dim,
          transition: "all 0.15s",
        }}
      >
        {featured ? "GET STARTED →" : "SELECT PLAN"}
      </button>
    </div>
  );
}

const plans = [
  {
    tier: "Free",
    price: "Free",
    desc: "Basic insights, limited history",
    features: ["7-day history", "Pattern detection", "3 queries/day"],
  },
  {
    tier: "Pro",
    price: "19",
    desc: "Full tracking, advanced analysis",
    features: [
      "Unlimited history",
      "Advanced pattern graph",
      "Unlimited queries",
      "Slack + GitHub sync",
    ],
    featured: true,
  },
  {
    tier: "Team",
    price: "49",
    desc: "Shared insights across team workflows",
    features: [
      "Everything in Pro",
      "Team pattern graph",
      "Shared solution library",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section
      style={{ padding: "64px 16px", maxWidth: 1100, margin: "0 auto" }}
      id="pricing"
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
          Pricing
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
          Simple pricing.
          <br />
          No surprises.
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
        {plans.map((p) => (
          <PricingCard key={p.tier} {...p} />
        ))}
      </div>
    </section>
  );
}
