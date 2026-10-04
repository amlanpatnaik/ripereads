import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { books } from "../src/data/books.mjs";
import { vibes } from "../src/data/vibes.mjs";
import { SIGNALS, AGE_BANDS, GRADES, bandBySlug, gradeBySlug } from "../src/data/rubric.mjs";
import { bookPageText, allRoutes, outboundLinks, inboundCount, routes, stepDown, stepUp, vibesFor } from "../src/lib/links.mjs";
import { wordCount, H2 } from "../src/lib/text.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);

const UNMARKED_SCANNER = /\bI read\b|\bmy daughter\b|\bpage \d+|\bchapter \d+/i;
const SLOT = /\[\[SLOT[^\]]*\]\]/g;
const COMMERCIAL = /bookshop\.org|amazon\.|amzn\./i;

const prose = (b) => [b.verdict, b.summary, b.ripeFor, b.publisherNote, b.seriesNote, b.sourcesNote, ...SIGNALS.map((s) => b.signals[s.key].note), b.challengedNote || ""].join("\n");

for (const b of books) {
  const text = prose(b);
  if (/inappropriate/i.test(text)) fail(`${b.slug}: uses the word "inappropriate"`);
  if (!["read", "unmarked"].includes(b.readStatus)) fail(`${b.slug}: invalid readStatus ${b.readStatus}`);
  if (b.readStatus === "unmarked" && UNMARKED_SCANNER.test(text)) fail(`${b.slug}: unmarked book contains first-person experience or fabricated location (${text.match(UNMARKED_SCANNER)[0]})`);
  if (SLOT.test(text)) fail(`${b.slug}: leftover [[SLOT]] marker`);
  if (!/\b(I|my|me)\b/.test(b.verdict + b.ripeFor)) fail(`${b.slug}: no first-person judgment`);
  const wc = wordCount(bookPageText(b));
  if (wc < 700 || wc > 1800) fail(`${b.slug}: book page is ${wc} words (700–1800 required)`);
  for (const s of SIGNALS) { const sc = b.signals[s.key]?.score; if (!(sc >= 0 && sc <= 4)) fail(`${b.slug}: signal ${s.key} out of range`); }
  if (!bandBySlug(b.ageBand)) fail(`${b.slug}: unknown ageBand ${b.ageBand}`);
  if (!gradeBySlug(b.grade)) fail(`${b.slug}: unknown grade ${b.grade}`);
  if (bandBySlug(b.ageBand)?.grade !== b.grade) fail(`${b.slug}: ageBand ${b.ageBand} does not map to grade ${b.grade}`);
  if (!b.sources?.length) fail(`${b.slug}: no sources`);
  if (b.isbn && !/^\d{10}(\d{3})?$/.test(b.isbn)) fail(`${b.slug}: malformed isbn`);
  if (stepDown(b).length < 3) warnings.push(`${b.slug}: only ${stepDown(b).length} step-down titles available`);
  if (stepUp(b).length < 3) warnings.push(`${b.slug}: only ${stepUp(b).length} step-up titles available`);
  if (!vibesFor(b).length) fail(`${b.slug}: appears on no vibes list`);
  if (!outboundLinks(b).includes("/method/")) fail(`${b.slug}: missing /method/ link`);
  if (inboundCount(b) < 2) fail(`${b.slug}: orphan page`);
}

for (const v of vibes) {
  for (const s of v.books) if (!books.find((b) => b.slug === s)) fail(`vibe ${v.slug}: unknown book ${s}`);
  if (/inappropriate/i.test(v.intro)) fail(`vibe ${v.slug}: uses "inappropriate"`);
}

const scanDir = (dir, cb) => { for (const f of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, f.name); if (f.isDirectory()) scanDir(p, cb); else if (/\.(jsx?|mjs|css)$/.test(f.name)) cb(p, fs.readFileSync(p, "utf8")); } };
scanDir(path.join(root, "src"), (p, src) => {
  const rel = path.relative(root, p);
  if (/inappropriate/i.test(src) && !rel.includes("scripts")) fail(`${rel}: uses the word "inappropriate"`);
  const slots = rel.endsWith("pages/About.jsx") ? (src.match(/<Slot name=/g) || []) : (src.match(SLOT) || []);
  if (slots.length && !rel.endsWith("pages/About.jsx")) fail(`${rel}: leftover [[SLOT]] markers`);
  if (rel.endsWith("pages/About.jsx") && slots.length) fail(`about: ${slots.length} [[SLOT]] markers still unfilled (owner action; build stays red by design)`);
  if (rel.endsWith("pages/Challenged.jsx") && (COMMERCIAL.test(src) || /AffiliateLinks|rel="sponsored"/.test(src))) fail(`challenged: commercial link present`);
  if (rel.endsWith("pages/Challenged.jsx") && /inappropriate/i.test(src)) fail("challenged: forbidden word");
  if (/https?:\/\/(www\.)?(bookshop\.org|amazon\.)/i.test(src) && !/rel="sponsored/.test(src)) fail(`${rel}: commercial link without rel="sponsored"`);
  if (rel.endsWith("index.css")) {
    const stampUses = (src.match(/var\(--stamp\)/g) || []).length;
    const stampBlocks = src.split("}").filter((blk) => blk.includes("var(--stamp)"));
    if (stampBlocks.some((blk) => !/\.stamp\b|--stamp:/.test(blk))) fail("index.css: --stamp used outside the stamp");
    if (!stampUses) warnings.push("index.css: --stamp is never used");
    const green = src.match(/--green:\s*#([0-9a-f]{6});/i);
    if (!green) fail("index.css: --green must be a 6-digit hex");
    else {
      const [r, g, b] = [0, 2, 4].map((i) => parseInt(green[1].slice(i, i + 2), 16) / 255);
      const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
      let hue = 0;
      if (d) hue = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      hue = (hue * 60 + 360) % 360;
      if (!(hue >= 330 || hue <= 15) || max - min < 0.15) fail(`index.css: --green must render as muted wine red (hue ${hue.toFixed(0)} is not wine)`);
    }
  }
});

const routeSet = new Set(allRoutes());
for (const b of books) for (const l of outboundLinks(b)) if (!routeSet.has(l)) fail(`${b.slug}: dangling link ${l}`);

const h2s = Object.values(H2);
if (new Set(h2s).size !== 10) fail("book page must define exactly 10 verbatim H2s");

const footerHardcode = fs.readFileSync(path.join(root, "src/components/Layout.jsx"), "utf8");
if (/\d+\s*\/\s*\d+\s*read/i.test(footerHardcode)) fail("Layout.jsx: footer counter appears hard-coded");

const summary = { books: books.length, vibes: vibes.length, routes: routeSet.size, ageBands: AGE_BANDS.length, grades: GRADES.length, errors: errors.length, warnings: warnings.length };
console.log("Ripe Reads validator", JSON.stringify(summary));
warnings.forEach((w) => console.log("  warn:", w));
errors.forEach((e) => console.log("  FAIL:", e));
fs.mkdirSync(path.join(root, "build-reports"), { recursive: true });
fs.writeFileSync(path.join(root, "build-reports/validate.json"), JSON.stringify({ summary, errors, warnings }, null, 2));
if (errors.length) { console.log(`\n${errors.length} failure(s). Build is red.`); process.exit(1); }
console.log("All rules pass. Build is green.");
