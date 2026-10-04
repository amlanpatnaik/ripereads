import { Link } from "react-router-dom";
import config from "../site.config.mjs";

export const AffiliateLinks = ({ book }) => {
  const { bookshop, amazon } = config.affiliates;
  const q = encodeURIComponent(`${book.title} ${book.author}`);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }} data-testid="affiliate-links">
      <a className="btn" rel="sponsored noopener" target="_blank" href={`https://bookshop.org/search?keywords=${q}${bookshop ? `&affiliate=${bookshop}` : ""}`} data-testid="buy-bookshop">Bookshop.org</a>
      <a className="btn" rel="sponsored noopener" target="_blank" href={`https://www.amazon.com/s?k=${q}${amazon ? `&tag=${amazon}` : ""}`} data-testid="buy-amazon">Amazon</a>
      <Link to="/editorial-policy/" className="mono" style={{ color: "var(--ink-faint)" }}>Affiliate policy</Link>
    </div>
  );
};
