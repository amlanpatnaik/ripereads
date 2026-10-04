import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { SIGNALS, AGE_BANDS, GRADES } from "../data/rubric.mjs";
import { books } from "../data/books.mjs";
import { corrections } from "../data/corrections.mjs";
import { readStats, routes } from "../lib/links.mjs";
import { H2 } from "../lib/text.mjs";
import { bandBySlug, signalTotal } from "../data/rubric.mjs";

export function Method() {
  return (
    <Page path="/method/" eyebrow="Trust · method" title="How a book gets its stamp" intro="Five signals, scored 0 to 4. A band chosen by judgment. A read status that says whether I have actually read it." testid="method-page">
      <h2>The five signals</h2>
      {SIGNALS.map((s) => (
        <div key={s.key} style={{ marginBottom: "1rem" }} data-testid={`method-signal-${s.key}`}>
          <h3>{s.label}</h3>
          <ol start={0} style={{ paddingLeft: "1.4rem", color: "var(--ink-soft)" }}>{s.scale.map((l, i) => <li key={i}>{l}</li>)}</ol>
        </div>
      ))}
      <h2>From signals to a band</h2>
      <p>The band is not an average. A single four in romance puts an otherwise gentle book at the adult end; a four in violence inside a book with no other heat might stay at fourteen. I state the reasoning on every page under the heading “{H2.ripeFor}”.</p>
      <ul style={{ paddingLeft: "1.4rem" }}>{AGE_BANDS.map((a) => <li key={a.slug}><Link to={routes.age(a.slug)}>{a.label}</Link>, stamped “Ripe at {a.stamp}”, maps to {GRADES.find((g) => g.slug === a.grade).label}</li>)}</ul>
      <h2>Read status</h2>
      <p><strong>Read</strong> means I have read the book and first-person experience appears on the page. <strong>Unmarked</strong> means I rated it from the publisher's record, trade reviews and consistent reader reports, and the page claims no personal experience. Every new title ships unmarked. The build refuses to publish an unmarked page that says “I read” or cites a page or chapter number.</p>
      <h2>Null beats fabrication</h2>
      <p>If I cannot verify an ISBN, a page count, a publisher age statement or a quotation, the field is left empty and the page says so. A confident wrong number is worse than a visible gap.</p>
      <h2>Words I do not use</h2>
      <p>I never label a book with the word parents reach for first, the one that is a verdict dressed as a description. I describe what is in the book and say the age at which I would hand it over.</p>
      <h2>The ten sections</h2>
      <p>Every book page has the same headings in the same order: {Object.values(H2).join(" · ")}.</p>
      <h2>Corrections</h2>
      <p>Every rating has a <Link to="/disagree/">disagree</Link> link. Accepted corrections are logged on the <Link to="/corrections/">corrections page</Link> with the date and what changed.</p>
    </Page>
  );
}

export function Shelf() {
  const s = readStats();
  const read = books.filter((b) => b.readStatus === "read");
  const unmarked = books.filter((b) => b.readStatus !== "read");
  return (
    <Page path="/shelf/" eyebrow="Trust · the shelf" title="What I have and have not read" intro={`${s.read} of ${s.total} titles read by me. The rest are rated from the record and say so.`} testid="shelf-page">
      <p className="mono" data-testid="shelf-ratio">Read ratio: {s.ratio}</p>
      <h2>Read by me</h2>
      {read.length ? <ul style={{ paddingLeft: "1.2rem" }}>{read.map((b) => <li key={b.slug}><Link to={routes.book(b)}>{b.title}</Link></li>)}</ul> : <p>None yet. Every title on the site is currently rated from the record, and every page says so. This list grows as I read.</p>}
      <h2>Rated from the record</h2>
      <ul style={{ paddingLeft: "1.2rem" }} data-testid="shelf-unmarked">{unmarked.map((b) => <li key={b.slug}><Link to={routes.book(b)}>{b.title}</Link> <span className="mono" style={{ color: "var(--ink-faint)" }}>{bandBySlug(b.ageBand).stamp} · {signalTotal(b)}/20 · provisional</span></li>)}</ul>
    </Page>
  );
}

export function Corrections() {
  return (
    <Page path="/corrections/" eyebrow="Trust · corrections" title="Corrections log" intro="Every accepted correction, with the date and what changed. Nothing is edited silently." testid="corrections-page">
      <h2>Open review</h2>
      <p>All {books.length} seed titles are flagged for an owner verification pass. Rubric scores and notes on these pages are provisional and marked as such on <Link to="/shelf/">the shelf</Link>.</p>
      <h2>Log</h2>
      {corrections.length ? (
        <ul style={{ paddingLeft: "1.2rem" }} data-testid="corrections-list">{corrections.map((c, i) => <li key={i}><span className="mono">{c.date}</span> — {c.book ? <Link to={`/books/${c.book}/`}>{c.book}</Link> : "site"}: {c.what}{c.credit ? ` (credit: ${c.credit})` : ""}</li>)}</ul>
      ) : <p className="mono" style={{ color: "var(--ink-faint)" }} data-testid="corrections-empty">No corrections logged yet.</p>}
      <p>Spotted something? Use the <Link to="/disagree/">disagreement form</Link>.</p>
    </Page>
  );
}

export function EditorialPolicy() {
  return (
    <Page path="/editorial-policy/" eyebrow="Trust · editorial policy" title="Editorial and affiliate policy" intro="Short, because the rules are short." testid="policy-page">
      <h2>Independence</h2>
      <p>No publisher, author or retailer pays for a rating or sees it before publication. Review copies, if ever accepted, will be noted on the book page.</p>
      <h2>Affiliate links</h2>
      <p>Some book pages carry Bookshop.org and Amazon links marked <code>rel="sponsored"</code>. If the owner has added affiliate IDs, a purchase may earn a small commission at no cost to you. Links never appear on pages under <Link to="/challenged/">/challenged/</Link>.</p>
      <h2>Images</h2>
      <p>No stock photography. Covers are resolved from public library records (Open Library, then Google Books) at build time; when none exists, a generated placeholder is shown. Social cards and pins are generated from the rating data.</p>
      <h2>AI crawlers</h2>
      <p>This site welcomes citation. <a href="/llms.txt">llms.txt</a> carries the full rubric and signal definitions so answers quoting a rating can quote the method with it.</p>
      <h2>Changes</h2>
      <p>Ratings change when evidence changes. Every change is logged on the <Link to="/corrections/">corrections page</Link>.</p>
    </Page>
  );
}
