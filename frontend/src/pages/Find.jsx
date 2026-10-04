import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Page } from "../components/Page";
import { BookRow } from "../components/BookRow";
import { books } from "../data/books.mjs";
import { AGE_BANDS, SIGNALS } from "../data/rubric.mjs";

export default function Find() {
  const [q, setQ] = useState("");
  const [band, setBand] = useState("");
  const [maxRomance, setMaxRomance] = useState(4);
  const [maxViolence, setMaxViolence] = useState(4);
  const fuse = useMemo(() => new Fuse(books, { keys: ["title", "author", "series.name", "verdict"], threshold: 0.35 }), []);
  const results = useMemo(() => {
    const base = q.trim() ? fuse.search(q).map((r) => r.item) : books;
    return base.filter((b) => (!band || b.ageBand === band) && b.signals.romance.score <= maxRomance && b.signals.violence.score <= maxViolence);
  }, [q, band, maxRomance, maxViolence, fuse]);
  return (
    <Page path="/find/" eyebrow="Tool · find" title="Find a book that fits" intro="Search by title or author, then narrow by band and by the two signals parents ask about most." wide testid="find-page">
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "1.5rem" }}>
        <label>
          <span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Search</span>
          <input className="field" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Fourth Wing, Bardugo, dragons…" data-testid="find-search-input" />
        </label>
        <label>
          <span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Age band</span>
          <select className="field" value={band} onChange={(e) => setBand(e.target.value)} data-testid="find-band-select">
            <option value="">Any band</option>
            {AGE_BANDS.map((a) => <option key={a.slug} value={a.slug}>{a.label}</option>)}
          </select>
        </label>
        <label>
          <span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>{SIGNALS[0].label} at most: {maxRomance}</span>
          <input type="range" min="0" max="4" value={maxRomance} onChange={(e) => setMaxRomance(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--bark)" }} data-testid="find-romance-range" />
        </label>
        <label>
          <span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>{SIGNALS[1].label} at most: {maxViolence}</span>
          <input type="range" min="0" max="4" value={maxViolence} onChange={(e) => setMaxViolence(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--bark)" }} data-testid="find-violence-range" />
        </label>
      </div>
      <p className="mono" style={{ color: "var(--ink-faint)" }} data-testid="find-count">{results.length} of {books.length} titles</p>
      <ul style={{ padding: 0, margin: 0, maxWidth: "48rem" }} data-testid="find-results">{results.map((b) => <BookRow key={b.slug} book={b} />)}</ul>
      {!results.length && <p data-testid="find-empty">Nothing matches. Loosen a filter or try another spelling.</p>}
    </Page>
  );
}
