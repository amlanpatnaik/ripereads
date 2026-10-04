import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { RipenessCard } from "../components/RipenessCard";
import { BookGrid } from "../components/BookRow";
import { pageMeta } from "../lib/seo.mjs";
import { books } from "../data/books.mjs";
import { vibes } from "../data/vibes.mjs";
import { AGE_BANDS } from "../data/rubric.mjs";
import { routes, booksInBand, readStats } from "../lib/links.mjs";
import config from "../site.config.mjs";

export default function Home() {
  const featured = books.find((b) => b.slug === "fourth-wing") || books[0];
  const stats = readStats();
  return (
    <>
      <Seo meta={pageMeta("/", config.tagline, "First-person age-readiness ratings for romantasy and crossover fantasy, written for parents who want a straight answer.")} />
      <section className="pillar-head grain" data-testid="home-hero">
        <div className="wrap home-hero-grid" style={{ position: "relative", padding: "3.5rem 0 3rem" }}>
          <div>
            <p className="mono" style={{ color: "var(--gold)" }}>Circulation desk · romantasy &amp; crossover fantasy</p>
            <h1 style={{ color: "var(--paper)", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", margin: "0 0 1.25rem", maxWidth: "14ch" }}>Is this book ripe for your kid yet?</h1>
            <p style={{ color: "var(--paper-deep)", maxWidth: "52ch", fontSize: "1.1rem" }}>One reader, five signals, a plain age stamp. I say what the publisher says, what the book actually contains, and where I would draw the line. When I have not read a title myself, the page says so.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
              <Link to="/find/" className="btn" style={{ borderColor: "var(--gold)", color: "var(--paper)" }} data-testid="hero-find">Find a book</Link>
              <Link to="/quiz/" className="btn" style={{ borderColor: "var(--paper-deep)", color: "var(--paper)" }} data-testid="hero-quiz">Take the ripeness quiz</Link>
            </div>
            <p className="mono" style={{ color: "var(--orchard-soft)", marginTop: "1.5rem" }}>{stats.total} titles rated · {stats.read} read by me · everything else rated from the record</p>
          </div>
          <div style={{ maxWidth: "26rem", justifySelf: "start" }} className="home-card"><RipenessCard book={featured} /></div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "3rem 0 1rem" }}>
        <h2 style={{ margin: "0 0 0.5rem" }}>By age band</h2>
        <p className="reading" style={{ color: "var(--ink-soft)" }}>Bands are my judgment, informed by the five signals, never a formula. The dot on each card shows where a title sits.</p>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.75rem", padding: 0, listStyle: "none" }}>
          {AGE_BANDS.map((a) => (
            <li key={a.slug}><Link to={routes.age(a.slug)} className="lift" style={{ display: "block", padding: "1rem", border: "1px solid var(--rule)", borderRadius: 6, background: "var(--card-paper)", textDecoration: "none" }} data-testid={`home-band-${a.slug}`}>
              <span className="display" style={{ fontSize: "1.6rem" }}>{a.label}</span>
              <span className="mono" style={{ display: "block", color: "var(--ink-faint)", marginTop: "0.3rem" }}>{booksInBand(a.slug).length} titles</span>
            </Link></li>
          ))}
        </ul>
      </section>

      <section className="wrap" style={{ padding: "2rem 0" }}>
        <h2 style={{ margin: "0 0 1rem" }}>Vibes, with the age band beside every title</h2>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", padding: 0, listStyle: "none" }}>
          {vibes.map((v) => (
            <li key={v.slug}><Link to={routes.vibe(v)} className="lift" style={{ display: "block", padding: "1.25rem", border: "1px solid var(--rule)", borderRadius: 6, background: "var(--card-paper)", textDecoration: "none", height: "100%" }} data-testid={`home-vibe-${v.slug}`}>
              <span className="display" style={{ fontSize: "1.2rem", lineHeight: 1.2, display: "block" }}>{v.title}</span>
              <span className="mono" style={{ display: "block", color: "var(--ink-faint)", marginTop: "0.5rem" }}>{v.books.length} titles</span>
            </Link></li>
          ))}
        </ul>
      </section>

      <section className="wrap" style={{ padding: "2rem 0 4rem" }}>
        <h2 style={{ margin: "0 0 1rem" }}>Everything on the shelf</h2>
        <BookGrid list={books} />
      </section>
    </>
  );
}
