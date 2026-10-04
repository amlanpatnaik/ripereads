import { Link } from "react-router-dom";
import { SIGNALS, AGE_BANDS, bandBySlug, bandIndex, signalTotal } from "../data/rubric.mjs";
import { paletteFor } from "./FallbackCover";
import { routes } from "../lib/links.mjs";

export const RipenessCard = ({ book, animate = true }) => {
  const band = bandBySlug(book.ageBand);
  const idx = bandIndex(book.ageBand);
  const isRead = book.readStatus === "read";
  return (
    <article className="rcard" style={{ "--spine": paletteFor(book.slug).spine }} data-testid={`ripeness-card-${book.slug}`} aria-label={`Ripeness card for ${book.title}`}>
      <div className="rcard-spine" aria-hidden="true" />
      <div className="rcard-body">
        <div className="stamp-wrap" style={{ display: "flex", justifyContent: "flex-end", marginBottom: "-0.5rem" }}><div className={`stamp ${animate ? "stamp-in" : ""}`} data-testid="age-stamp">Ripe at {band.stamp}<span className="stamp-sub">{band.label}</span></div></div>
        <p className="mono" style={{ color: "var(--ink-faint)", marginBottom: "0.2rem" }}>Ripeness card</p>
        <h3 className="display" style={{ margin: 0, fontSize: "1.35rem" }}>{book.title}</h3>
        <p style={{ margin: "0 0 0.9rem", color: "var(--ink-soft)", fontSize: "0.95rem" }}>{book.author}, {book.year}</p>
        <div className="ripe-track" aria-label={`Age band ${band.label} of ${AGE_BANDS.length}`} data-testid="ripe-track">
          {AGE_BANDS.map((b) => <span key={b.slug} />)}
          <i className="ripe-dot" style={{ left: `${((idx + 0.5) / AGE_BANDS.length) * 100}%` }} />
        </div>
        <div className="mono" style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-faint)", margin: "0.3rem 0 0.9rem" }}>
          <span>{AGE_BANDS[0].label}</span><span>Signals {signalTotal(book)}/20</span><span>{AGE_BANDS[AGE_BANDS.length - 1].label}</span>
        </div>
        <div style={{ display: "grid", gap: "0.3rem" }}>
          {SIGNALS.map((s) => (
            <div className="sig-row" key={s.key} data-testid={`signal-${s.key}`}>
              <span>{s.label}</span>
              <span className="sig-bar" aria-label={`${book.signals[s.key].score} of 4`}>{[0, 1, 2, 3].map((i) => <i key={i} className={i < book.signals[s.key].score ? "on" : ""} />)}</span>
            </div>
          ))}
        </div>
        <div className={`read-slot ${isRead ? "open" : ""}`} data-testid="read-badge-slot" aria-hidden={!isRead}>
          <div><p className="chip" style={{ marginTop: "0.9rem" }}>Read by me</p></div>
        </div>
        <p className="mono" style={{ marginTop: "0.9rem", color: "var(--ink-faint)" }}>
          {isRead ? "First-person experience on this page" : "Rated from the record · not yet read by me"} · <Link to="/method/" style={{ textTransform: "none", letterSpacing: 0 }}>method</Link>
        </p>
        <span hidden>{routes.book(book)}</span>
      </div>
    </article>
  );
};
