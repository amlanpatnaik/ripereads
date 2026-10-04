import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { PillarHeader } from "../components/PillarHeader";
import { bookishLife, bookishLifeBySlug } from "../data/bookishLife.mjs";
import { bookBySlug } from "../data/books.mjs";
import { pageMeta } from "../lib/seo.mjs";
import { bookishLifeJsonLd } from "../lib/seo.mjs";
import NotFound from "./NotFound";

const Credit = ({ credit, creditUrl }) =>
  credit ? (
    <p className="mono" style={{ color: "var(--ink-faint)", margin: "0.4rem 0 0" }}>
      Photo: {creditUrl ? <a href={creditUrl} target="_blank" rel="noopener noreferrer">{credit}</a> : credit}
    </p>
  ) : null;

const CandleCard = ({ candle }) => (
  <figure style={{ margin: 0, breakInside: "avoid" }} data-testid={`candle-${candle.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
    <img src={candle.image.src} alt={candle.image.alt} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }} />
    <Credit credit="Aarka Origins" creditUrl="https://aarkaorigins.com/collections/book-lovers-soy-candles" />
    <figcaption style={{ marginTop: "0.6rem" }}>
      <p style={{ margin: 0, fontWeight: 600 }}>{candle.name} <span className="mono" style={{ color: "var(--ink-faint)", fontWeight: 400 }}>· {candle.price}</span></p>
      <p className="mono" style={{ color: "var(--ink-soft)", margin: "0.2rem 0 0.4rem" }}>{candle.notes}</p>
      <p style={{ margin: 0, color: "var(--ink-soft)" }}>{candle.blurb}</p>
    </figcaption>
  </figure>
);

const Section = ({ section }) => (
  <section style={{ marginBottom: "3rem" }} data-testid={`section-${section.id}`}>
    <h2>{section.heading}</h2>
    <p className="reading" style={{ color: "var(--ink-soft)" }}>{section.lead}</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.75rem", margin: "1.25rem 0 1.5rem" }}>
      {section.candles.map((c) => <CandleCard key={c.name} candle={c} />)}
    </div>
    {section.linkSlug && bookBySlug(section.linkSlug) && (
      <p style={{ margin: 0 }}>
        Reading <Link to={`/books/${section.linkSlug}/`}>{section.linkLabel}</Link>?
        {section.extraLinks?.length ? (
          <> Or: {section.extraLinks.map((l, i) => (
            <span key={l.slug}>
              {i > 0 && ", "}<Link to={`/books/${l.slug}/`}>{l.label}</Link>
            </span>
          ))}.</>
        ) : null}
      </p>
    )}
  </section>
);

export function BookishLifeIndex() {
  return (
    <>
      <Seo meta={pageMeta("/bookish-life/", "The Bookish Life", "Reading nooks, bookish candles, and the lifestyle side of raising a reader.")} />
      <PillarHeader eyebrow="Pillar · the bookish life" title="The Bookish Life" intro="Reading nooks, bookish gifts, and the small sensory things that make reading feel like an occasion. Lighter than the rest of the site, on purpose." seed="/bookish-life/" />
      <div className="wrap" style={{ padding: "2.5rem 0 4rem" }} data-testid="bookish-life-index">
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bookishLife.map((p) => (
            <li key={p.slug} style={{ marginBottom: "1rem" }}>
              <h2 style={{ margin: "0 0 0.3rem" }}><Link to={`/bookish-life/${p.slug}/`} data-testid={`bookish-life-link-${p.slug}`}>{p.title}</Link></h2>
              <p style={{ color: "var(--ink-soft)", margin: 0 }} className="reading">{p.metaDescription}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function BookishLifePost() {
  const { slug } = useParams();
  const post = bookishLifeBySlug(slug);
  if (!post) return <NotFound />;
  return (
    <>
      <Seo meta={pageMeta(`/bookish-life/${post.slug}/`, post.title, post.metaDescription)} jsonld={bookishLifeJsonLd(post)} />
      <PillarHeader eyebrow={post.eyebrow} title={post.title} intro={post.metaDescription} seed={post.slug} />
      <div className="wrap" style={{ padding: "2.5rem 0 4rem" }} data-testid="bookish-life-post">
        <p className="reading" style={{ fontSize: "1.05rem" }}>{post.intro}</p>
        {post.method && <p className="reading" style={{ color: "var(--ink-soft)" }}>{post.method}</p>}

        <figure style={{ margin: "1.5rem 0 2.5rem", maxWidth: 420 }}>
          <img src={post.heroImage.src} alt={post.heroImage.alt} loading="eager" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }} />
          <Credit credit={post.heroImage.credit} creditUrl={post.heroImage.creditUrl} />
        </figure>

        {post.sections.map((s) => <Section key={s.id} section={s} />)}

        <section style={{ marginBottom: "3rem" }} data-testid="section-faq">
          <h2>Quick answers</h2>
          {post.faqs.map((f) => (
            <div key={f.q} style={{ marginBottom: "1.1rem" }} className="reading">
              <h3 style={{ margin: "0 0 0.3rem" }}>{f.q}</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>{f.a}</p>
            </div>
          ))}
        </section>

        <section className="reading" data-testid="section-closing">
          <h2>{post.closing.heading}</h2>
          <p style={{ color: "var(--ink-soft)" }}>{post.closing.body}</p>
          <a className="btn" href={post.closing.ctaUrl} target="_blank" rel="noopener noreferrer">{post.closing.ctaLabel}</a>
        </section>
      </div>
    </>
  );
}
