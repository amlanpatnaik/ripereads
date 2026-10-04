import { Link } from "react-router-dom";
import { SIGNALS, bandBySlug, signalTotal } from "../data/rubric.mjs";
import { routes } from "../lib/links.mjs";
import { BookCover } from "./BookCover";

export const topSignal = (book) => SIGNALS.map((s) => ({ ...s, score: book.signals[s.key].score })).sort((a, b) => b.score - a.score)[0];

export const BookRow = ({ book, note }) => {
  const band = bandBySlug(book.ageBand);
  const top = topSignal(book);
  return (
    <li className="lift" style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "1rem", padding: "1rem 0", borderTop: "1px solid var(--rule)", listStyle: "none" }} data-testid={`book-row-${book.slug}`}>
      <Link to={routes.book(book)} aria-label={book.title} tabIndex={-1}><BookCover book={book} /></Link>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center", marginBottom: "0.3rem" }}>
          <span className="chip chip-band" data-testid={`row-band-${book.slug}`}>Ripe at {band.stamp}</span>
          <span className="chip" data-testid={`row-signal-${book.slug}`}>{top.label} {top.score}/4</span>
          <span className="chip">{signalTotal(book)}/20</span>
        </div>
        <h3 style={{ margin: 0, fontSize: "1.2rem" }}><Link to={routes.book(book)} data-testid={`row-link-${book.slug}`}>{book.title}</Link></h3>
        <p style={{ margin: "0 0 0.4rem", color: "var(--ink-soft)", fontSize: "0.9rem" }}>{book.author}, {book.year}{book.series ? ` · ${book.series.name} #${book.series.index}` : ""}</p>
        <p style={{ margin: 0, fontSize: "0.95rem" }}>{note || book.verdict}</p>
      </div>
    </li>
  );
};

export const BookGrid = ({ list }) => (
  <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1.5rem 1.25rem", padding: 0, margin: 0, listStyle: "none" }}>
    {list.map((b, i) => (
      <li key={b.slug} className="reveal lift" data-i={(i % 5) + 1} data-testid={`grid-${b.slug}`}>
        <Link to={routes.book(b)} style={{ textDecoration: "none", display: "block" }}>
          <BookCover book={b} />
          <p className="chip chip-band" style={{ marginTop: "0.6rem" }}>Ripe at {bandBySlug(b.ageBand).stamp}</p>
          <p style={{ margin: "0.3rem 0 0", fontFamily: "var(--font-display)", fontSize: "1.02rem", lineHeight: 1.2 }}>{b.title}</p>
          <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--ink-soft)" }}>{b.author}</p>
        </Link>
      </li>
    ))}
  </ul>
);
