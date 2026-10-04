import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Page } from "../components/Page";
import { readStats } from "../lib/links.mjs";
import { corrections } from "../data/corrections.mjs";
import config from "../site.config.mjs";

const Fill = ({ name, hint }) => <mark style={{ background: "var(--peach)", padding: "0.1rem 0.4rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }} data-testid={`fill-${name}`}>{`[[FILL: ${hint}]]`}</mark>;

const Sidebar = () => {
  const s = readStats();
  const row = { display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.5rem 0", borderTop: "1px solid var(--rule)", fontSize: "0.9rem" };
  return (
    <aside style={{ border: "1px solid var(--rule)", borderRadius: 6, padding: "1rem 1.25rem", background: "var(--card-paper)", alignSelf: "start" }} data-testid="about-sidebar">
      <p className="mono" style={{ color: "var(--ink-faint)", margin: "0 0 0.5rem" }}>At a glance</p>
      <div style={row}><span>Books I've read</span><Link to="/shelf/" data-testid="about-read-count">{s.read}</Link></div>
      <div style={row}><span>Books on this site</span><span data-testid="about-total-count">{s.total}</span></div>
      <div style={row}><span>Rubric version</span><Link to="/method/">1.0</Link></div>
      <div style={row}><span>Corrections logged</span><Link to="/corrections/" data-testid="about-corrections-count">{corrections.length}</Link></div>
      <p style={{ ...row, display: "block", fontSize: "0.85rem", color: "var(--ink-soft)" }}>Independent. No sponsored ratings, ever. <Link to="/editorial-policy/">Editorial policy</Link></p>
    </aside>
  );
};

const jsonld = [
  { "@context": "https://schema.org", "@type": "Person", "@id": `${config.url}/about/#abbey`, name: config.author, url: `${config.url}/about/`, description: "Parent and reader behind Ripe Reads; pen name. Rates middle grade and young adult fiction for age readiness." },
  { "@context": "https://schema.org", "@type": "AboutPage", name: "About Abbey", url: `${config.url}/about/`, about: { "@id": `${config.url}/about/#abbey` }, publisher: { "@type": "Organization", name: config.name } },
];

export default function About() {
  return (
    <>
      <Helmet>{jsonld.map((j, i) => <script key={i} type="application/ld+json">{JSON.stringify(j)}</script>)}</Helmet>
      <Page path="/about/" eyebrow="Trust · about" title="About Abbey" intro="One reader, named below, with the biases listed rather than hidden." wide testid="about-page">
        <div className="about-layout">
          <article className="reading">
            <h2 id="the-reader">The reader</h2>
            <p>I'm Abbey Adair. That's a pen name — I'll explain why in a second.</p>
            <p>I'm a mother with a daughter who reads faster than I do. For the last few years I've been trying to stay one book ahead of her, which is how this site started and is still basically what it is.</p>
            <p>I've read several hundred middle grade and young adult novels. Not professionally. At night, on weekends, on planes, in the twenty minutes before everyone else wakes up. I keep a list of every one I've finished, and you can see all of it on <Link to="/shelf/">my shelf</Link>.</p>
            <p>The pen name is for her, not for me. My daughter didn't sign up to be a character on the internet, and keeping her name off it seemed like the least I could do given that this whole site is built on reading over her shoulder. Everything else here is exactly what it says it is.</p>

            <h2 id="why">Why this site exists</h2>
            <p>My daughter brought home a library book with a cover that looked like every other cover on that shelf. A few chapters in, she asked me a question I wasn't ready for.</p>
            <p>The book was fine. It was a good book. But I hadn't read it, I had no way of knowing what was in it, and nobody else on that pickup line did either.</p>
            <p>Movies have ratings. Games have ratings. Books have nothing — and I think that's mostly right. A ratings board deciding what children may read would be worse than the problem it solved. But it leaves parents stuck. You can't pre-read everything. The back cover tells you nothing. And when you search, you get a stranger on a forum guessing, or a one-line age range a publisher wrote to sell copies.</p>
            <p>So I started writing down what was actually in the books. Then I built a system so I'd be consistent about it. Then it turned into this.</p>
            <p>Here's the thing I keep coming back to. A book isn't good or bad for a kid — it's early, or it's right on time. The same novel that flattens an eleven-year-old can be the best thing a thirteen-year-old reads all year, and nothing about the book changed. That's why this place is called Ripe Reads. If something isn't ripe yet, that's not a mark against the book or against your kid. It just means wait a bit.</p>
            <p>I'll tell you what's in it. You decide what to do about it. That second part matters to me more than the first.</p>

            <h2 id="bring">What I bring, and what I don't</h2>
            <h3>What I bring.</h3>
            <p>I've read the books. Several hundred of them, and I mark which ones so you know when I'm speaking from the page and when I'm not.</p>
            <p>I spend my working life building systems that turn messy information into something people can actually make decisions with. <Fill name="day-job" hint="one plain phrase for the day job, no employer name" /> That's most of what this site is: the same questions asked about every book, scored the same way, so that a "3" means the same thing on page four hundred as it did on page one. The whole rubric is published at <Link to="/method/">the method page</Link>. You can check my work.</p>
            <p>I have <Fill name="degree" hint="degree, e.g. a master's in information systems" />, which matters less than the reading but explains why I built a framework instead of just posting opinions.</p>
            <p>And I have a kid in the middle of this, right now. Every verdict here is one I've had to make for real, usually under time pressure, usually in a bookstore.</p>
            <h3>What I don't.</h3>
            <p>I'm not a librarian. I'm not a teacher. I don't have a degree in children's literature and I've never sat on an awards committee. Where professional reviewers know more than me, I say so and cite them.</p>
            <p>I haven't read every book on this site. I'd rather tell you that than imply otherwise — so every page I've read cover to cover carries a mark, and the footer of every page says how many I've done out of how many are here. That number goes up every week. It is deliberately not the whole catalogue.</p>
            <p>I don't know your kid. I know roughly where books tend to land, which is a different and smaller thing. Where I say "twelve to fourteen," you may know your reader is ready at ten or needs until fifteen, and you'll be right and I won't.</p>
            <p>And I'm wrong sometimes. When I am, I fix it and log it at <Link to="/corrections/">corrections</Link> with the date and what changed.</p>
            <h3>What I won't do.</h3>
            <p>I won't tell you a book is unsuitable. I'll tell you what's in it.</p>
            <p>I won't take money to change a rating. No publisher, author, or brand has paid for a verdict here and none ever will. Where a link earns me a commission it says so right next to the link, and it has no effect on the age band.</p>
            <p>I won't pretend to be neutral about reading itself. I think kids should read widely, including things that unsettle them, and I think the conversation afterward is worth more than the gatekeeping beforehand. Knowing what's in a book is how you get ready for that conversation — not how you avoid it.</p>

            <h2 id="reach">How to reach me</h2>
            <p>If I got something wrong, if you read a book differently than I did, or if there's a title you want covered — <Fill name="email" hint="email, e.g. hello@ripereads.com" />.</p>
            <p>I read everything and I answer most of it. Corrections go to the front of the queue.</p>
            <p className="mono" style={{ color: "var(--ink-faint)" }}>The highlighted markers are intentional. The build check stays red until the owner replaces them with real text.</p>
          </article>
          <Sidebar />
        </div>
      </Page>
    </>
  );
}
