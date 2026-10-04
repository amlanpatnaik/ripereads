import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { OgCard, PinCard } from "../components/Cards";
import { bookBySlug, books } from "../data/books.mjs";
import NotFound from "./NotFound";

const download = (ref, w, h, name) => {
  const svg = ref.current.querySelector("svg");
  const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    c.getContext("2d").drawImage(img, 0, 0, w, h);
    const a = document.createElement("a"); a.download = name; a.href = c.toDataURL("image/png"); a.click();
    URL.revokeObjectURL(url);
  };
  img.src = url;
};

export default function CardPage({ kind }) {
  const { slug } = useParams();
  const ref = useRef(null);
  const book = slug === "site" ? books[0] : bookBySlug(slug);
  if (!book) return <NotFound />;
  const isOg = kind === "og";
  const [w, h] = isOg ? [1200, 630] : [1000, 1500];
  return (
    <div className="wrap" style={{ padding: "2rem 0 4rem" }} data-testid={`${kind}-page`}>
      <Helmet><meta name="robots" content="noindex" /><title>{`${isOg ? "OG card" : "Pin"} · ${book.title}`}</title></Helmet>
      <p className="mono" style={{ color: "var(--ink-faint)" }}>{isOg ? "Open Graph card · 1200×630" : "Pinterest pin · 1000×1500"} · generated from data</p>
      <div ref={ref} style={{ maxWidth: isOg ? 900 : 420, border: "1px solid var(--rule)" }}>{isOg ? <OgCard book={book} /> : <PinCard book={book} />}</div>
      <button className="btn" style={{ marginTop: "1rem" }} onClick={() => download(ref, w, h, `${book.slug}-${kind}.png`)} data-testid={`${kind}-download`}>Download PNG</button>
    </div>
  );
}
