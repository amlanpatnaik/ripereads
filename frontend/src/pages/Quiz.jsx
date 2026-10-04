import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Page } from "../components/Page";
import { BookRow } from "../components/BookRow";
import { books } from "../data/books.mjs";
import { AGE_BANDS, bandIndex } from "../data/rubric.mjs";

const QUESTIONS = [
  { key: "age", label: "How old is the reader?", options: [["10", "10–11"], ["12", "12–13"], ["14", "14–15"], ["16", "16–17"], ["18", "18 or older"]] },
  { key: "romance", label: "Romance on the page: where is your line?", options: [["1", "Kisses, nothing more"], ["2", "Sensual but fade to black"], ["3", "On the page, not graphic"], ["4", "Anything goes"]] },
  { key: "violence", label: "Violence and gore?", options: [["2", "Fights, some injury"], ["3", "Deaths and some gore are fine"], ["4", "Anything goes"]] },
  { key: "themes", label: "Heavy themes (abuse, trauma, sexual threat)?", options: [["1", "Keep it light"], ["2", "Some, handled with care"], ["3", "Fine if the book earns it"]] },
];

const bandForAge = (age) => age >= 18 ? "18-plus" : age >= 16 ? "16-18" : age >= 14 ? "14-16" : age >= 12 ? "12-14" : "10-12";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const complete = QUESTIONS.every((q) => answers[q.key]);
  const picks = complete ? books.filter((b) => bandIndex(b.ageBand) <= bandIndex(bandForAge(Number(answers.age))) && b.signals.romance.score <= Number(answers.romance) && b.signals.violence.score <= Number(answers.violence) && b.signals.themes.score <= Number(answers.themes)) : [];
  return (
    <Page path="/quiz/" eyebrow="Tool · quiz" title="The ripeness quiz" intro="Four questions. I match your lines against the five signals and show what fits." wide testid="quiz-page">
      <div style={{ display: "grid", gap: "1.5rem", maxWidth: "48rem" }}>
        {QUESTIONS.map((q) => (
          <fieldset key={q.key} style={{ border: "1px solid var(--rule)", borderRadius: 6, padding: "1rem 1.25rem" }} data-testid={`quiz-${q.key}`}>
            <legend className="display" style={{ fontSize: "1.1rem", padding: "0 0.4rem" }}>{q.label}</legend>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {q.options.map(([v, l]) => (
                <label key={v} className="chip" style={{ cursor: "pointer", borderColor: answers[q.key] === v ? "var(--bark)" : undefined, background: answers[q.key] === v ? "var(--bark)" : undefined, color: answers[q.key] === v ? "var(--paper)" : undefined }}>
                  <input type="radio" name={q.key} value={v} checked={answers[q.key] === v} onChange={() => setAnswers({ ...answers, [q.key]: v })} style={{ position: "absolute", opacity: 0 }} data-testid={`quiz-${q.key}-${v}`} />{l}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      {complete && (
        <section style={{ marginTop: "2.5rem", maxWidth: "48rem" }} data-testid="quiz-results">
          <h2 style={{ marginTop: 0 }}>{picks.length ? `${picks.length} titles fit your lines` : "Nothing on the shelf fits those lines yet"}</h2>
          <p style={{ color: "var(--ink-soft)" }}>Band for the reader: {AGE_BANDS.find((a) => a.slug === bandForAge(Number(answers.age))).label}. {picks.length ? "Sorted gentlest first." : <>Try loosening one line, or browse <Link to="/ages/">by age</Link>.</>}</p>
          <ul style={{ padding: 0 }}>{[...picks].sort((a, b) => bandIndex(a.ageBand) - bandIndex(b.ageBand)).map((b) => <BookRow key={b.slug} book={b} />)}</ul>
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); toast("Saved locally for now. Email capture is not wired yet; the owner will connect it."); }} style={{ marginTop: "2rem", display: "grid", gap: "0.75rem", maxWidth: "28rem" }} data-testid="quiz-capture-form">
            <label><span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Email me this list (optional)</span><input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" data-testid="quiz-email-input" /></label>
            <button className="btn btn-solid" type="submit" disabled={done} data-testid="quiz-submit">{done ? "Noted (stub)" : "Send my list"}</button>
            <p className="mono" style={{ color: "var(--ink-faint)" }}>Capture is a UI stub in this build. Nothing is sent or stored.</p>
          </form>
        </section>
      )}
    </Page>
  );
}
