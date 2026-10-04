import { Page } from "../components/Page";

const Slot = ({ name }) => <mark style={{ background: "var(--peach)", padding: "0.1rem 0.4rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }} data-testid={`slot-${name}`}>{`[[SLOT:${name}]]`}</mark>;

export default function About() {
  return (
    <Page path="/about/" eyebrow="Trust · about" title="Who is doing the rating" intro="One reader, named below, with the biases listed rather than hidden." testid="about-page">
      <h2>The reader</h2>
      <p><Slot name="name-and-role" /></p>
      <h2>Why this site exists</h2>
      <p><Slot name="origin-story" /></p>
      <h2>What I bring, and what I don't</h2>
      <p><Slot name="credentials-and-limits" /></p>
      <h2>How to reach me</h2>
      <p><Slot name="contact" /></p>
      <p className="mono" style={{ color: "var(--ink-faint)" }}>These four highlighted markers are intentional. The site's build check stays red until the owner replaces them with real text, so an unfinished about page can never ship quietly.</p>
    </Page>
  );
}

