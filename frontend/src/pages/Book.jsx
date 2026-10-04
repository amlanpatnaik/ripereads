import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { RipenessCard } from "../components/RipenessCard";
import { BookCover } from "../components/BookCover";
import { BookRow } from "../components/BookRow";
import { AffiliateLinks } from "../components/AffiliateLinks";
import { bookBySlug } from "../data/books.mjs";
import { SIGNALS, bandBySlug, gradeBySlug, signalTotal } from "../data/rubric.mjs";
import { routes, stepDown, stepUp, vibesFor, stepText, quickAnswers } from "../lib/links.mjs";
import { bookJsonLd, bookMeta } from "../lib/seo.mjs";
import { H2 } from "../lib/text.mjs";
import NotFound from "./NotFound";

const Section = ({ id, title, children }) => (
  <section id={id} data-testid={`section-${id}`} style={{ scrollMarginTop: "1rem" }}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default function Book() {
  const { slug } = useParams();
  const book = bookBySlug(slug);
  if (!book) return <NotFound />;
  const band = bandBySlug(book.ageBand);
  const grade = gradeBySlug(book.grade);
  const down = stepDown(book);
  const up = stepUp(book);
  const lists = vibesFor(book);
  const isRead = book.readStatus === "read";
  return (
    <>
      <Seo meta={bookMeta(book)} jsonld={bookJsonLd(book)} />
      <div className="wrap" style={{ padding: "2rem 0 4rem" }} data-testid="book-page">
        <nav aria-label="Breadcrumb" className="mono" style={{ color: "var(--ink-faint)", marginBottom: "1.5rem" }} data-testid="breadcrumb">
          <Link to="/">Home</Link> / <Link to={routes.age(book.ageBand)}>Ages {band.label}</Link> / <span>{book.title}</span>
        </nav>
        <div className="book-layout">
          <aside className="book-aside">
            <BookCover book={book} priority />
            <RipenessCard book={book} />
          </aside>
          <article className="reading">
            <p className="mono" style={{ color: "var(--ink-faint)" }}>{book.series ? `${book.series.name} · book ${book.series.index}` : "Standalone"} · {book.year}</p>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", margin: "0 0 0.4rem" }} data-testid="book-title">{book.title}</h1>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.1rem" }}>by {book.author}</p>
            <p className="chip" data-testid="read-status">{isRead ? "Read by me" : "Not yet read by me · rated from the record"}</p>

            <Section id="short" title={H2.short}>
              <p data-testid="verdict" style={{ fontSize: "1.15rem" }}>{book.verdict}</p>
              <h3 style={{ marginTop: "1.25rem" }}>Quick answers</h3>
              <dl style={{ margin: 0, display: "grid", gap: "0.5rem", fontSize: "0.95rem" }} data-testid="quick-answers">
                {quickAnswers(book).map(([q, a]) => <div key={q}><dt style={{ fontWeight: 600 }}>{q}</dt><dd style={{ margin: 0, color: "var(--ink-soft)" }}>{a}</dd></div>)}
              </dl>
            </Section>
            <Section id="about" title={H2.about}><p>{book.summary}</p></Section>
            <Section id="signals" title={H2.signals}>
              <p className="mono" style={{ color: "var(--ink-faint)" }}>Total {signalTotal(book)} of 20 across five signals</p>
              <dl style={{ display: "grid", gap: "1rem", margin: 0 }}>
                {SIGNALS.map((s) => (
                  <div key={s.key} style={{ borderTop: "1px solid var(--rule)", paddingTop: "0.75rem" }} data-testid={`signal-detail-${s.key}`}>
                    <dt style={{ display: "flex", justifyContent: "space-between", gap: "1rem", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}><span>{s.label}</span><span className="mono" style={{ color: "var(--ink-soft)" }}>{book.signals[s.key].score} / 4 · {s.scale[book.signals[s.key].score]}</span></dt>
                    <dd style={{ margin: "0.3rem 0 0", color: "var(--ink-soft)" }}>{book.signals[s.key].note}</dd>
                  </div>
                ))}
              </dl>
            </Section>
            <Section id="ripe-for" title={H2.ripeFor}>
              <p className="mono" style={{ color: "var(--ink-faint)" }}>My band: <Link to={routes.age(book.ageBand)}>{band.label}</Link> · <Link to={routes.grade(book.grade)}>{grade.label}</Link> ({grade.detail})</p>
              <p>{book.ripeFor}</p>
            </Section>
            <Section id="publisher" title={H2.publisher}>
              <p className="mono" style={{ color: "var(--ink-faint)" }} data-testid="publisher-age">Publisher's stated age: {book.publisherAge || "not stated or not verified"}{book.publisher ? ` · ${book.publisher}` : ""}</p>
              <p>{book.publisherNote}</p>
            </Section>
            <Section id="series" title={H2.series}>
              {book.series ? <p className="mono" style={{ color: "var(--ink-faint)" }}><Link to={routes.series(book.series.slug)}>{book.series.name}</Link>, book {book.series.index} · see the maturity-drift chart</p> : <p className="mono">A standalone.</p>}
              <p>{book.seriesNote}</p>
            </Section>
            <Section id="step-down" title={H2.stepDown}>
              <p>{stepText(book, "down").split(". ")[0]}.</p>
              <ul style={{ padding: 0, margin: 0 }}>{down.map((b) => <BookRow key={b.slug} book={b} />)}</ul>
            </Section>
            <Section id="step-up" title={H2.stepUp}>
              <p>{stepText(book, "up").split(". ")[0]}.</p>
              <ul style={{ padding: 0, margin: 0 }}>{up.map((b) => <BookRow key={b.slug} book={b} />)}</ul>
            </Section>
            <Section id="lists" title={H2.lists}>
              <ul style={{ paddingLeft: "1.2rem" }}>{lists.map((v) => <li key={v.slug}><Link to={routes.vibe(v)} data-testid={`list-link-${v.slug}`}>{v.title}</Link></li>)}</ul>
              <p><Link to={routes.readNext(book)}>Full read-next page for {book.title}</Link></p>
            </Section>
            <Section id="sources" title={H2.sources}>
              <p>{book.sourcesNote}</p>
              <ul style={{ paddingLeft: "1.2rem" }}>{book.sources.map((s) => <li key={s.url}><a href={s.url} rel="noopener" target="_blank">{s.label}</a></li>)}</ul>
              <p className="mono" style={{ color: "var(--ink-faint)" }}>ISBN: {book.isbn || "not recorded"} · Pages: {book.pages || "not recorded"} · Null beats fabrication.</p>
              <p>Rated with the <Link to="/method/">Ripe Reads method</Link>. Think I have this wrong? <Link to="/disagree/" data-testid="disagree-link">Tell me</Link> and I will log it on the <Link to="/corrections/">corrections page</Link>.</p>
              {!book.challenged && <AffiliateLinks book={book} />}
              {book.challenged && <p className="chip">On the challenged list · no commercial links by policy</p>}
            </Section>
          </article>
        </div>
      </div>
    </>
  );
}
