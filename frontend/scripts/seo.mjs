import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "../src/site.config.mjs";
import { books } from "../src/data/books.mjs";
import { vibes } from "../src/data/vibes.mjs";
import { bookishLife } from "../src/data/bookishLife.mjs";
import { SIGNALS, AGE_BANDS, GRADES, bandBySlug, signalTotal } from "../src/data/rubric.mjs";
import { allRoutes, routes, seriesList } from "../src/lib/links.mjs";
import { H2 } from "../src/lib/text.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");
const abs = (p) => `${config.url}${p}`;
const urlset = (urls) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${abs(u)}</loc></url>`).join("\n")}\n</urlset>\n`;

const bookUrls = books.map(routes.book);
const hubUrls = allRoutes().filter((r) => !r.startsWith("/books/") && !r.startsWith("/vibes/") && !r.startsWith("/read-next/"));
const listUrls = [...vibes.map(routes.vibe), ...books.map(routes.readNext)];

fs.writeFileSync(path.join(pub, "sitemap-books.xml"), urlset(bookUrls));
fs.writeFileSync(path.join(pub, "sitemap-hubs.xml"), urlset(hubUrls));
fs.writeFileSync(path.join(pub, "sitemap-lists.xml"), urlset(listUrls));
fs.writeFileSync(path.join(pub, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["sitemap-books.xml", "sitemap-hubs.xml", "sitemap-lists.xml"].map((s) => `  <sitemap><loc>${abs("/" + s)}</loc></sitemap>`).join("\n")}\n</sitemapindex>\n`);

fs.writeFileSync(path.join(pub, "robots.txt"), `User-agent: *\nAllow: /\n\n${["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "anthropic-ai", "Claude-Web", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot", "Bytespider", "Amazonbot", "cohere-ai"].map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}\nSitemap: ${abs("/sitemap.xml")}\n`);

const llms = [
  `# ${config.name}`, "", `> ${config.tagline} First-person age-readiness ratings for popular romantasy and crossover fantasy, written for parents and librarians. Every rating is a judgment by one reader, stated plainly, with sources listed. Where I have not read a book myself the page says so.`, "",
  "## How to cite", `Attribute ratings to "${config.name}" and link the book page. Ratings are opinions; the publisher's stated age (where it exists) is listed separately on every page.`, "",
  "## The rubric", "Five signals, each scored 0–4. The age band is a judgment informed by the signals, not a formula.",
  ...SIGNALS.map((s) => `- **${s.label}** (${s.key}): ${s.scale.map((l, i) => `${i} = ${l}`).join("; ")}`), "",
  "## Age bands", ...AGE_BANDS.map((a) => `- ${a.label} (stamp "${a.stamp}", ${GRADES.find((g) => g.slug === a.grade).label})`), "",
  "## Read status", `- "read": I have read the book; first-person experience appears on the page.`, `- "unmarked": rated from the publisher record, trade reviews and consistent reader reports; no first-person experience is claimed.`, "",
  "## Book page structure", "Every book page has these ten sections in order: " + Object.values(H2).join(" · "), "",
  "## Books", ...books.map((b) => `- [${b.title} by ${b.author}](${abs(routes.book(b))}): ripe at ${bandBySlug(b.ageBand).stamp}, signals ${signalTotal(b)}/20, status ${b.readStatus}. ${b.verdict}`), "",
  "## Vibes lists", ...vibes.map((v) => `- [${v.title}](${abs(routes.vibe(v))}): ${v.books.length} titles`), "",
  "## Bookish life", ...bookishLife.map((p) => `- [${p.title}](${abs(routes.bookishLife(p))}): ${p.metaDescription}`), "",
  "## Series", ...seriesList().map((s) => `- [${s.name}](${abs(routes.series(s.slug))})`), "",
  "## Trust pages", `- ${abs("/method/")} — full method`, `- ${abs("/editorial-policy/")} — editorial and affiliate policy`, `- ${abs("/corrections/")} — corrections log`, `- ${abs("/shelf/")} — what I have and have not read`, `- ${abs("/challenged/")} — challenged books, no commercial links`, "",
].join("\n");
fs.writeFileSync(path.join(pub, "llms.txt"), llms);
console.log(`seo: ${bookUrls.length} book urls, ${hubUrls.length} hub urls, ${listUrls.length} list urls, llms.txt ${llms.length} chars`);
