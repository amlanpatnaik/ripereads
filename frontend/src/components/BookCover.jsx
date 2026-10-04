import { useEffect, useState } from "react";
import covers from "../data/covers.json";
import { FallbackCover } from "./FallbackCover";

const cache = new Map();

async function resolveRuntime(book) {
  const steps = [
    async () => book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false` : null,
    async () => {
      const r = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&limit=5`);
      const j = await r.json();
      const hit = (j.docs || []).find((d) => d.cover_i);
      return hit ? `https://covers.openlibrary.org/b/id/${hit.cover_i}-L.jpg` : null;
    },
    async () => {
      const r = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(book.title)}+inauthor:${encodeURIComponent(book.author)}&maxResults=3`);
      const j = await r.json();
      const hit = (j.items || []).find((i) => i.volumeInfo?.imageLinks?.thumbnail);
      return hit ? hit.volumeInfo.imageLinks.thumbnail.replace("http://", "https://") : null;
    },
  ];
  for (const step of steps) {
    try { const u = await step(); if (u) return u; } catch { /* fall through */ }
  }
  return null;
}

export const BookCover = ({ book, className = "", priority = false }) => {
  const pre = covers[book.slug]?.url || null;
  const [src, setSrc] = useState(cache.get(book.slug) ?? pre);
  const [state, setState] = useState("loading");

  useEffect(() => {
    if (src || cache.get(book.slug) === null) return;
    let alive = true;
    resolveRuntime(book).then((u) => { cache.set(book.slug, u); if (alive) { setSrc(u); if (!u) setState("fallback"); } });
    return () => { alive = false; };
  }, [book, src]);

  return (
    <div className={`cover-box ${className}`} data-testid={`cover-${book.slug}`}>
      {state !== "loaded" && <FallbackCover book={book} />}
      {src && state !== "fallback" && (
        <img src={src} alt={`Cover of ${book.title}`} loading={priority ? "eager" : "lazy"} className={state === "loaded" ? "loaded" : ""}
          onLoad={(e) => { if (e.currentTarget.naturalWidth > 10) setState("loaded"); else setState("fallback"); }}
          onError={() => { cache.set(book.slug, null); setState("fallback"); }} />
      )}
    </div>
  );
};
