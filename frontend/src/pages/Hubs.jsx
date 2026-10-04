import { Link, useParams } from "react-router-dom";
import { Page } from "../components/Page";
import { BookRow } from "../components/BookRow";
import { AGE_BANDS, GRADES, bandBySlug, gradeBySlug } from "../data/rubric.mjs";
import { routes, booksInBand, booksInGrade, seriesList, seriesBySlug } from "../lib/links.mjs";
import { MaturityDrift } from "../components/MaturityDrift";
import NotFound from "./NotFound";

const List = ({ list }) => <ul style={{ padding: 0, margin: 0 }} data-testid="hub-list">{list.map((b) => <BookRow key={b.slug} book={b} />)}</ul>;

export function AgesIndex() {
  return (
    <Page path="/ages/" eyebrow="Pillar · ages" title="Every title, by the age I would hand it over" intro="Five bands. The stamp on each card is my judgment; the signals explain it." testid="ages-index">
      {AGE_BANDS.map((a) => (
        <section key={a.slug} style={{ marginBottom: "2rem" }}>
          <h2><Link to={routes.age(a.slug)} data-testid={`ages-link-${a.slug}`}>Ages {a.label}</Link> <span className="mono" style={{ color: "var(--ink-faint)" }}>{booksInBand(a.slug).length} titles</span></h2>
          <List list={booksInBand(a.slug)} />
        </section>
      ))}
    </Page>
  );
}

export function AgeHub() {
  const { band } = useParams();
  const a = bandBySlug(band);
  if (!a) return <NotFound />;
  const list = booksInBand(band);
  const i = AGE_BANDS.indexOf(a);
  return (
    <Page path={routes.age(band)} eyebrow={`Ages · ${a.label}`} title={`Fantasy and romantasy ripe at ${a.stamp}`} intro={`Titles I would hand to a ${a.label} reader, with the signal that most shaped the band shown inline. ${gradeBySlug(a.grade).label}, ${gradeBySlug(a.grade).detail}.`} seed={band} testid="age-hub">
      {list.length ? <List list={list} /> : <p>Nothing rated for this band yet. I add titles as I can stand behind them.</p>}
      <p className="mono" style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
        {i > 0 && <Link to={routes.age(AGE_BANDS[i - 1].slug)}>← Ages {AGE_BANDS[i - 1].label}</Link>}
        {i < AGE_BANDS.length - 1 && <Link to={routes.age(AGE_BANDS[i + 1].slug)}>Ages {AGE_BANDS[i + 1].label} →</Link>}
      </p>
    </Page>
  );
}

export function GradesIndex() {
  return (
    <Page path="/grades/" eyebrow="Pillar · grades" title="By grade, for librarians and teachers" intro="The same ratings mapped to school bands. Adult crossover means adult-published titles with a large teen readership." testid="grades-index">
      {GRADES.map((g) => (
        <section key={g.slug} style={{ marginBottom: "2rem" }}>
          <h2><Link to={routes.grade(g.slug)} data-testid={`grades-link-${g.slug}`}>{g.label}</Link> <span className="mono" style={{ color: "var(--ink-faint)" }}>{g.detail}</span></h2>
          <List list={booksInGrade(g.slug)} />
        </section>
      ))}
    </Page>
  );
}

export function GradeHub() {
  const { grade } = useParams();
  const g = gradeBySlug(grade);
  if (!g) return <NotFound />;
  return (
    <Page path={routes.grade(grade)} eyebrow={`Grades · ${g.detail}`} title={`${g.label} fantasy picks`} intro={`Everything I have rated for ${g.label.toLowerCase()} readers. Bands inside the grade still differ; read the stamp.`} seed={grade} testid="grade-hub">
      <List list={booksInGrade(grade)} />
    </Page>
  );
}

export function SeriesIndex() {
  return (
    <Page path="/series/" eyebrow="Pillar · series" title="Does the series grow up with the reader?" intro="Many series start young and end adult. Each series page charts the drift so you can approve one book without approving five." testid="series-index">
      <ul style={{ paddingLeft: "1.2rem" }}>
        {seriesList().map((s) => <li key={s.slug} style={{ marginBottom: "0.5rem" }}><Link to={routes.series(s.slug)} data-testid={`series-link-${s.slug}`}>{s.name}</Link> <span className="mono" style={{ color: "var(--ink-faint)" }}>{s.books.length} rated</span></li>)}
      </ul>
    </Page>
  );
}

export function SeriesHub() {
  const { slug } = useParams();
  const s = seriesBySlug(slug);
  if (!s) return <NotFound />;
  const first = [...s.books].sort((a, b) => a.series.index - b.series.index)[0];
  return (
    <Page path={routes.series(slug)} eyebrow="Series · maturity drift" title={s.name} intro={`${s.books.length} of the series rated so far. Later volumes are described from the record on each book page until I can rate them properly.`} seed={slug} testid="series-hub">
      <MaturityDrift series={s} />
      <h2>Drift note</h2>
      <p>{first.seriesNote}</p>
      <h2>Rated volumes</h2>
      <List list={s.books} />
    </Page>
  );
}
