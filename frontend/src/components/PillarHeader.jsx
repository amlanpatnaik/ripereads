import { hashHue } from "./FallbackCover";

export const PillarHeader = ({ eyebrow, title, intro, seed = "pillar", children }) => {
  const h = hashHue(seed);
  const dots = Array.from({ length: 18 }, (_, i) => ({ cx: ((i * 137.5 + h) % 100), cy: ((i * 61 + h * 2) % 100), r: 2 + ((i * 7 + h) % 6) }));
  return (
    <section className="pillar-head grain" data-testid="pillar-header">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><radialGradient id={`g-${h}`} cx="20%" cy="30%" r="80%"><stop offset="0" stopColor={`hsl(${h} 30% 36%)`} /><stop offset="1" stopColor="transparent" /></radialGradient></defs>
        <rect width="100" height="100" fill={`url(#g-${h})`} opacity="0.6" />
        {dots.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={i % 3 ? "var(--orchard-soft)" : "var(--gold)"} opacity="0.18" />)}
      </svg>
      <div className="wrap" style={{ position: "relative", padding: "3.5rem 0 3rem" }}>
        {eyebrow && <p className="mono" style={{ color: "var(--gold)" }}>{eyebrow}</p>}
        <h1 style={{ color: "var(--paper)", fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "0 0 1rem", maxWidth: "18ch" }}>{title}</h1>
        {intro && <p style={{ color: "var(--paper-deep)", maxWidth: "60ch", fontSize: "1.05rem", margin: 0 }}>{intro}</p>}
        {children}
      </div>
    </section>
  );
};
