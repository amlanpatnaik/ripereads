import { SIGNALS, bandBySlug } from "../data/rubric.mjs";
import { FallbackCover, paletteFor } from "./FallbackCover";
import config from "../site.config.mjs";

const Stamp = ({ x, y, text, size = 28 }) => (
  <g transform={`translate(${x} ${y}) rotate(-3.5)`}>
    <rect x="0" y="0" width={size * 7.2} height={size * 2.2} rx="6" fill="none" stroke="#7b1e2c" strokeWidth="5" />
    <text x={size * 3.6} y={size * 1.5} textAnchor="middle" fontFamily="Space Mono, monospace" fontWeight="700" fontSize={size} fill="#7b1e2c" letterSpacing="3">{text}</text>
  </g>
);

export const OgCard = ({ book }) => {
  const band = bandBySlug(book.ageBand);
  return (
    <svg viewBox="0 0 1200 630" width="100%" style={{ display: "block", background: "#f6f0e4" }} data-testid="og-card">
      <rect width="1200" height="630" fill="#f6f0e4" />
      <rect width="22" height="630" fill={paletteFor(book.slug).spine} />
      <g transform="translate(80 95)"><rect width="260" height="390" fill="#2a221d" opacity="0.1" transform="translate(10 10)" /><svg width="260" height="390" viewBox="0 0 400 600"><FallbackCover book={book} /></svg></g>
      <text x="400" y="130" fontFamily="Space Mono, monospace" fontSize="20" letterSpacing="4" fill="#8a7b70">{config.name.toUpperCase()} · RIPENESS CARD</text>
      <foreignObject x="400" y="160" width="720" height="200"><div xmlns="http://www.w3.org/1999/xhtml" style={{ fontFamily: "Fraunces Variable, Georgia, serif", fontSize: 58, lineHeight: 1.05, color: "#2a221d" }}>{book.title}</div></foreignObject>
      <text x="400" y="400" fontFamily="Literata Variable, Georgia, serif" fontSize="28" fill="#5e5047">{book.author}, {book.year}</text>
      {SIGNALS.map((s, i) => (
        <g key={s.key} transform={`translate(400 ${450 + i * 30})`}>
          <text fontFamily="Literata Variable, Georgia, serif" fontSize="19" fill="#5e5047">{s.label}</text>
          {[0, 1, 2, 3].map((j) => <rect key={j} x={300 + j * 26} y="-14" width="20" height="14" rx="2" fill={j < book.signals[s.key].score ? "#3f3029" : "#ece2cd"} />)}
        </g>
      ))}
      <Stamp x={860} y={430} text={`RIPE AT ${band.stamp}`} />
    </svg>
  );
};

export const PinCard = ({ book, list }) => {
  const band = bandBySlug(book.ageBand);
  return (
    <svg viewBox="0 0 1000 1500" width="100%" style={{ display: "block", background: "#f6f0e4" }} data-testid="pin-card">
      <rect width="1000" height="1500" fill="#f6f0e4" />
      <rect width="1000" height="26" fill={paletteFor(book.slug).spine} />
      <text x="500" y="110" textAnchor="middle" fontFamily="Space Mono, monospace" fontSize="24" letterSpacing="6" fill="#8a7b70">{(list || "IS IT RIPE YET?").toUpperCase()}</text>
      <g transform="translate(250 170)"><rect width="500" height="750" fill="#2a221d" opacity="0.12" transform="translate(14 14)" /><svg width="500" height="750" viewBox="0 0 400 600"><FallbackCover book={book} /></svg></g>
      <foreignObject x="80" y="980" width="840" height="200"><div xmlns="http://www.w3.org/1999/xhtml" style={{ fontFamily: "Fraunces Variable, Georgia, serif", fontSize: 64, lineHeight: 1.05, color: "#2a221d", textAlign: "center" }}>{book.title}</div></foreignObject>
      <text x="500" y="1220" textAnchor="middle" fontFamily="Literata Variable, Georgia, serif" fontSize="32" fill="#5e5047">{book.author}</text>
      <Stamp x={330} y={1270} text={`RIPE AT ${band.stamp}`} size={34} />
      <text x="500" y="1440" textAnchor="middle" fontFamily="Space Mono, monospace" fontSize="22" letterSpacing="4" fill="#8a7b70">{config.url.replace("https://", "").toUpperCase()}</text>
    </svg>
  );
};
