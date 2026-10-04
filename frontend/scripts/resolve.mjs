import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { books } from "../src/data/books.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "src/data/covers.json");
const existing = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const UA = "RipeReads/1.0 (book cover resolver; build-time only; contact via site)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = async (url) => { const r = await fetch(url, { headers: { "User-Agent": UA } }); if (!r.ok) throw new Error(`${r.status} ${url}`); return r; };

const viaOpenLibraryIsbn = async (b) => {
  if (!b.isbn) return null;
  const url = `https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg?default=false`;
  await get(url);
  return { url, source: "openlibrary-isbn" };
};
const viaOpenLibrarySearch = async (b) => {
  const r = await get(`https://openlibrary.org/search.json?title=${encodeURIComponent(b.title)}&author=${encodeURIComponent(b.author)}&limit=5`);
  const j = await r.json();
  const hit = (j.docs || []).find((d) => d.cover_i);
  return hit ? { url: `https://covers.openlibrary.org/b/id/${hit.cover_i}-L.jpg`, source: "openlibrary-search" } : null;
};
const viaGoogleBooks = async (b) => {
  const r = await get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(b.title)}+inauthor:${encodeURIComponent(b.author)}&maxResults=3`);
  const j = await r.json();
  const hit = (j.items || []).find((i) => i.volumeInfo?.imageLinks?.thumbnail);
  return hit ? { url: hit.volumeInfo.imageLinks.thumbnail.replace("http://", "https://").replace("zoom=1", "zoom=2"), source: "google-books" } : null;
};

const chain = [viaOpenLibraryIsbn, viaOpenLibrarySearch, viaGoogleBooks];
const result = { ...existing };
for (const b of books) {
  if (result[b.slug]?.url && !process.argv.includes("--force")) continue;
  let found = null;
  for (const step of chain) {
    try { found = await step(b); } catch (e) { console.log(`  ${b.slug}: ${step.name} failed (${e.message})`); }
    await sleep(1000);
    if (found) break;
  }
  result[b.slug] = found || { url: null, source: "fallback" };
  console.log(`${b.slug}: ${result[b.slug].source}`);
}
fs.writeFileSync(out, JSON.stringify(result, null, 2));
console.log(`wrote ${out}`);
