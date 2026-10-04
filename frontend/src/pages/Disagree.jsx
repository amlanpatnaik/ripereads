import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Page } from "../components/Page";
import { books } from "../data/books.mjs";
import { AGE_BANDS, SIGNALS } from "../data/rubric.mjs";

export default function Disagree() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ book: params.get("book") || "", band: "", signal: "", reason: "", email: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <Page path="/disagree/" eyebrow="Tool · disagree" title="Disagree with a rating" intro="Tell me which book, where you would put it and why. Accepted changes go on the corrections log with your reasoning credited if you want." testid="disagree-page">
      {sent ? (
        <div data-testid="disagree-success"><h2 style={{ marginTop: 0 }}>Noted</h2><p>In this build the form is a stub: nothing was sent or stored. Once the owner wires it, submissions land in the corrections queue.</p></div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); toast("Received (stub). Capture is not wired yet."); }} style={{ display: "grid", gap: "1rem" }} data-testid="disagree-form">
          <label><span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Book</span>
            <select className="field" required value={form.book} onChange={set("book")} data-testid="disagree-book-select"><option value="">Choose a title</option>{books.map((b) => <option key={b.slug} value={b.slug}>{b.title}</option>)}</select></label>
          <label><span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Where would you put it?</span>
            <select className="field" required value={form.band} onChange={set("band")} data-testid="disagree-band-select"><option value="">Choose a band</option>{AGE_BANDS.map((a) => <option key={a.slug} value={a.slug}>{a.label}</option>)}</select></label>
          <label><span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Which signal is off?</span>
            <select className="field" value={form.signal} onChange={set("signal")} data-testid="disagree-signal-select"><option value="">Not sure / the band overall</option>{SIGNALS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}</select></label>
          <label><span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Why</span>
            <textarea className="field" required rows={5} value={form.reason} onChange={set("reason")} placeholder="What did I miss or overstate? Specifics help; I will not publish quotes without checking them." data-testid="disagree-reason-input" /></label>
          <label><span className="mono" style={{ display: "block", marginBottom: "0.3rem" }}>Email (optional, for follow-up)</span>
            <input className="field" type="email" value={form.email} onChange={set("email")} data-testid="disagree-email-input" /></label>
          <button className="btn btn-solid" type="submit" style={{ justifySelf: "start" }} data-testid="disagree-submit">Send</button>
          <p className="mono" style={{ color: "var(--ink-faint)" }}>Capture is a UI stub in this build. Nothing is sent or stored.</p>
        </form>
      )}
    </Page>
  );
}
