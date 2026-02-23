import { tokens } from "../_lib/tokens";

const testimonials = [
  {
    quote:
      "I didn't realize how much time I was wasting until I saw the numbers. 4 hours a week — gone.",
    handle: "@mkaur · Senior Eng, Stripe",
  },
  {
    quote:
      "It feels like my work finally has memory. I stopped re-debugging the same auth issues.",
    handle: "@tross · Staff Eng, Vercel",
  },
];

export function Testimonials() {
  return (
    <div
      style={{
        borderTop: `1px solid ${tokens.border}`,
        background: tokens.bg2,
        padding: "64px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          border: `1px solid ${tokens.border}`,
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              background: tokens.bg2,
              padding: "32px 20px",
              borderBottom: i === 0 ? `1px solid ${tokens.border}` : "none",
            }}
          >
            <blockquote
              className="syne"
              style={{
                fontWeight: 500,
                fontSize: 19,
                lineHeight: 1.45,
                letterSpacing: "-0.015em",
                marginBottom: 20,
                color: tokens.text,
              }}
            >
              <span style={{ color: tokens.accent }}>"</span>
              {t.quote}
              <span style={{ color: tokens.accent }}>"</span>
            </blockquote>
            <cite
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.06em",
                color: tokens.faint,
                textTransform: "uppercase",
                fontStyle: "normal",
              }}
            >
              {t.handle}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
}
