import { SIGNALS, bandBySlug, bandIndex, AGE_BANDS } from "../data/rubric.mjs";

export const MaturityDrift = ({ series }) => {
  const sorted = [...series.books].sort((a, b) => a.series.index - b.series.index);
  const w = 640, h = 220, px = 60, py = 20;
  const n = Math.max(sorted.length, 2);
  const x = (i) => px + (i * (w - px * 2)) / (n - 1);
  const y = (v) => h - py - (v / 4) * (h - py * 2);
  return (
    <figure style={{ margin: 0 }} data-testid="maturity-drift">
      <svg className="drift" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`Maturity drift across ${series.name}`}>
        {[0, 1, 2, 3, 4].map((v) => <g key={v}><line x1={px} x2={w - px} y1={y(v)} y2={y(v)} stroke="var(--rule)" /><text x={px - 10} y={y(v) + 3} textAnchor="end">{v}</text></g>)}
        {SIGNALS.map((s, si) => (
          <polyline key={s.key} fill="none" stroke={si === 0 ? "var(--green)" : `hsl(${20 + si * 40} 25% ${35 + si * 8}%)`} strokeWidth={si === 0 ? 3 : 1.5}
            points={sorted.map((b, i) => `${x(i)},${y(b.signals[s.key].score)}`).join(" ")} />
        ))}
        {sorted.map((b, i) => <text key={b.slug} x={x(i)} y={h - 4} textAnchor="middle">#{b.series.index} · {bandBySlug(b.ageBand).stamp}</text>)}
      </svg>
      <figcaption style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
        Signal scores by volume. Wine line is romance & heat. {sorted.length === 1 ? "Only the first volume is rated so far; the drift note below describes the rest from the record." : ""} Age band index: {sorted.map((b) => `${bandIndex(b.ageBand) + 1}/${AGE_BANDS.length}`).join(" → ")}.
      </figcaption>
    </figure>
  );
};
