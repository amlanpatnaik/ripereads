import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "../src/site.config.mjs";
import { books } from "../src/data/books.mjs";
import { vibes } from "../src/data/vibes.mjs";
import { AGE_BANDS, GRADES, bandBySlug } from "../src/data/rubric.mjs";
import { allRoutes, routes, seriesList, bookPageText } from "../src/lib/links.mjs";
import { bookJsonLd, bookMeta } from "../src/lib/seo.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const build = path.join(root, "build");
const template = fs.readFileSync(path.join(build, "index.html"), "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

const metaFor = (route) => {
  const book = books.find((b) => routes.book(b) === route);
  if (book) return { ...bookMeta(book), jsonld: bookJsonLd(book), body: bookPageText(book) };
  const vibe = vibes.find((v) => routes.vibe(v) === route);
  if (vibe) return { title: `${vibe.title} · ${config.name}`, description: vibe.intro.slice(0, 155), canonical: `${config.url}${route}`, image: `${config.url}/og/site/`, body: `${vibe.title}\n${vibe.intro}\n${vibe.books.map((s) => { const b = books.find((x) => x.slug === s); return `${b.title} by ${b.author}, ripe at ${bandBySlug(b.ageBand).stamp}`; }).join("\n")}` };
  const age = AGE_BANDS.find((a) => routes.age(a.slug) === route);
  if (age) return { title: `Fantasy and romantasy ripe for ages ${age.label} · ${config.name}`, description: `Every title I have rated for ${age.label} readers, with the signals that put it there.`, canonical: `${config.url}${route}`, image: `${config.url}/og/site/`, body: `Ages ${age.label}` };
  const grade = GRADES.find((g) => routes.grade(g.slug) === route);
  if (grade) return { title: `${grade.label} fantasy picks · ${config.name}`, description: `Titles rated for ${grade.label} (${grade.detail}) readers.`, canonical: `${config.url}${route}`, image: `${config.url}/og/site/`, body: grade.label };
  const series = seriesList().find((s) => routes.series(s.slug) === route);
  if (series) return { title: `${series.name}: does the series grow up? · ${config.name}`, description: `Maturity drift across ${series.name}, book by book.`, canonical: `${config.url}${route}`, image: `${config.url}/og/site/`, body: series.name };
  const rn = books.find((b) => routes.readNext(b) === route);
  if (rn) return { title: `What to read after ${rn.title} · ${config.name}`, description: `Step-down and step-up picks after ${rn.title}, by age band.`, canonical: `${config.url}${route}`, image: `${config.url}/og/site/`, body: rn.title };
  const name = route === "/" ? config.tagline : route.replaceAll("/", " ").trim().replace(/-/g, " ");
  return { title: `${name} · ${config.name}`, description: config.tagline, canonical: `${config.url}${route}`, image: `${config.url}/og/site/`, body: name };
};

let n = 0;
for (const route of allRoutes()) {
  const m = metaFor(route);
  const head = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}"/>`,
    `<link rel="canonical" href="${esc(m.canonical)}"/>`,
    `<meta property="og:title" content="${esc(m.title)}"/>`,
    `<meta property="og:description" content="${esc(m.description)}"/>`,
    `<meta property="og:url" content="${esc(m.canonical)}"/>`,
    `<meta property="og:image" content="${esc(m.image)}"/>`,
    `<meta property="og:type" content="${route.startsWith("/books/") ? "article" : "website"}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    ...(m.jsonld || []).map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`),
  ].join("");
  const staticBody = `<main data-prerendered="true">${m.body.split("\n").map((l) => `<p>${esc(l)}</p>`).join("")}</main>`;
  const html = template.replace(/<title>.*?<\/title>/, "").replace("</head>", `${head}</head>`).replace('<div id="root"></div>', `<div id="root">${staticBody}</div>`);
  const dir = path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  n += 1;
}
console.log(`prerender: ${n} routes written with metadata + JSON-LD`);
