import { Link, useParams } from "react-router-dom";
import { Page } from "../components/Page";
import { BookRow, topSignal } from "../components/BookRow";
import { PinCard } from "../components/Cards";
import { books, bookBySlug } from "../data/books.mjs";
import { vibes } from "../data/vibes.mjs";
import { bandBySlug } from "../data/rubric.mjs";
import { routes, stepDown, stepUp, stepText } from "../lib/links.mjs";
import NotFound from "./NotFound";

export function Lists() {
  return (
    <Page path="/lists/" eyebrow="Pillar · vibes" title="Vibes lists, with the age band beside every title" intro="Teens ask for a vibe, not a genre. Each list shows the band and the loudest signal inline so a parent can scan it in ten seconds." testid="lists-index">
      {vibes.map((v) => (
        <section key={v.slug} style={{ marginBottom: "2.5rem" }}>
          <h2><Link to={routes.vibe(v)} data-testid={`lists-link-${v.slug}`}>{v.title}</Link></h2>
          <p style={{ color: "var(--ink-soft)" }}>{v.intro}</p>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", padding: 0, listStyle: "none" }}>
            {v.books.map((s) => { const b = bookBySlug(s); return <li key={s} className="chip"><Link to={routes.book(b)} style={{ textDecoration: "none" }}>{b.title} · {bandBySlug(b.ageBand).stamp}</Link></li>; })}
          </ul>
        </section>
      ))}
    </Page>
  );
}

export function Vibe() {
  const { slug } = useParams();
  const v = vibes.find((x) => x.slug === slug);
  if (!v) return <NotFound />;
  const list = v.books.map(bookBySlug).sort((a, b) => a.ageBand.localeCompare(b.ageBand));
  return (
    <Page path={routes.vibe(v)} eyebrow="Vibes list" title={v.title} intro={v.intro} seed={v.slug} wide testid="vibe-page">
      <div className="vibe-layout">
        <ul style={{ padding: 0, margin: 0 }} data-testid="vibe-list">
          {list.map((b) => <BookRow key={b.slug} book={b} note={`${bandBySlug(b.ageBand).label} · loudest signal ${topSignal(b).label.toLowerCase()} at ${topSignal(b).score}/4. ${b.verdict}`} />)}
        </ul>
        <aside style={{ maxWidth: 320 }} data-testid="vibe-pin">
          <p className="mono" style={{ color: "var(--ink-faint)" }}>Pin for this list</p>
          <PinCard book={list[0]} list={v.title} />
          <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: "0.5rem" }}>Generated at build time from the data, 1000×1500. <Link to={`/pin/${list[0].slug}/`}>Open full size</Link>.</p>
        </aside>
      </div>
    </Page>
  );
}

export function ReadNextIndex() {
  return (
    <Page path="/read-next/" eyebrow="Pillar · read next" title="What to read after…" intro="Pick the book they just finished. I show three titles a step gentler and three a step up, by my scale." testid="read-next-page">
      <ul style={{ paddingLeft: "1.2rem", columns: "2 14rem" }}>
        {books.map((b) => <li key={b.slug}><Link to={routes.readNext(b)} data-testid={`read-next-link-${b.slug}`}>After {b.title}</Link></li>)}
      </ul>
    </Page>
  );
}

export function ReadNext() {
  const { slug } = useParams();
  const b = bookBySlug(slug);
  if (!b) return <NotFound />;
  return (
    <Page path={routes.readNext(b)} eyebrow="Read next" title={`What to read after ${b.title}`} intro={`${b.title} sits at ${bandBySlug(b.ageBand).label} on my scale. Here is where to go from it, in either direction.`} seed={slug} testid="read-next-page">
      <h2>A step gentler</h2><p>{stepText(b, "down").split(". ")[0]}.</p>
      <ul style={{ padding: 0 }}>{stepDown(b).map((x) => <BookRow key={x.slug} book={x} />)}</ul>
      <h2>A step up</h2><p>{stepText(b, "up").split(". ")[0]}.</p>
      <ul style={{ padding: 0 }}>{stepUp(b).map((x) => <BookRow key={x.slug} book={x} />)}</ul>
      <p><Link to={routes.book(b)}>Back to the {b.title} rating</Link></p>
    </Page>
  );
}
