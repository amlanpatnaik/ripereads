import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { books } from "../data/books.mjs";
import { bandBySlug } from "../data/rubric.mjs";
import { routes } from "../lib/links.mjs";

export default function Challenged() {
  const list = books.filter((b) => b.challenged);
  return (
    <Page path="/challenged/" eyebrow="Pillar · challenged books" title="Challenged books, rated the same way" intro="Titles on this page have been formally challenged or removed from school libraries somewhere. I rate them exactly as I rate everything else, and this section carries no shop links of any kind, so nothing here is selling you anything." testid="challenged-page">
      <p>A challenge record is context, not a verdict. The band I give reflects the content as I understand it; the record below tells you where the fight has been. Both are listed so you can make your own call.</p>
      <ul style={{ padding: 0, listStyle: "none" }} data-testid="challenged-list">
        {list.map((b) => (
          <li key={b.slug} style={{ borderTop: "1px solid var(--rule)", padding: "1.25rem 0" }} data-testid={`challenged-${b.slug}`}>
            <span className="chip chip-band">Ripe at {bandBySlug(b.ageBand).stamp}</span>
            <h2 style={{ margin: "0.5rem 0 0.25rem" }}><Link to={routes.book(b)}>{b.title}</Link></h2>
            <p style={{ color: "var(--ink-soft)", margin: "0 0 0.5rem" }}>{b.author}, {b.year}</p>
            <p>{b.challengedNote}</p>
          </li>
        ))}
      </ul>
      <h2>Why no shop links here</h2>
      <p>Pages about challenged books should be able to be cited by a school board, a librarian or a parent without anyone wondering whether I profit from the attention. So the rule is simple and the build checks it: zero commercial links anywhere under this section.</p>
    </Page>
  );
}
