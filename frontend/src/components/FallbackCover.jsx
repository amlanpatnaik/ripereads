export const hashHue = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h % 360; };

export const paletteFor = (slug) => {
  const hue = hashHue(slug);
  return { bg: `hsl(${hue} 28% 24%)`, mid: `hsl(${(hue + 25) % 360} 32% 38%)`, fg: `hsl(${(hue + 40) % 360} 45% 86%)`, spine: `hsl(${hue} 30% 36%)` };
};

export const FallbackCover = ({ book, width = 400, height = 600 }) => {
  const p = paletteFor(book.slug);
  const words = book.title.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) { if ((cur + " " + w).trim().length > 14 && cur) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim(); }
  if (cur) lines.push(cur);
  const seed = hashHue(book.author);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" role="img" aria-label={`${book.title} by ${book.author}`} style={{ position: "absolute", inset: 0 }} data-testid={`fallback-cover-${book.slug}`}>
      <rect width={width} height={height} fill={p.bg} />
      <circle cx={width * (0.3 + (seed % 40) / 100)} cy={height * 0.3} r={width * 0.42} fill={p.mid} opacity="0.55" />
      <circle cx={width * 0.75} cy={height * 0.72} r={width * 0.3} fill={p.mid} opacity="0.35" />
      <rect x="22" y="22" width={width - 44} height={height - 44} fill="none" stroke={p.fg} strokeOpacity="0.5" strokeWidth="2" />
      {lines.map((l, i) => (
        <text key={i} x={width / 2} y={height * 0.42 + i * 50} textAnchor="middle" fill={p.fg} fontFamily="Fraunces Variable, Georgia, serif" fontSize="44" fontWeight="500">{l}</text>
      ))}
      <text x={width / 2} y={height * 0.42 + lines.length * 50 + 30} textAnchor="middle" fill={p.fg} fontFamily="Space Mono, monospace" fontSize="16" letterSpacing="3">{book.author.toUpperCase()}</text>
    </svg>
  );
};
