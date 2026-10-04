import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import config from "../site.config.mjs";
import { readStats } from "../lib/links.mjs";

const nav = [["/find/", "Find"], ["/ages/", "Ages"], ["/lists/", "Vibes"], ["/series/", "Series"], ["/challenged/", "Challenged"], ["/method/", "Method"], ["/shelf/", "Shelf"]];

export default function Layout() {
  const { pathname } = useLocation();
  const stats = readStats();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <a href="#main" className="btn" style={{ position: "absolute", left: "-999px", top: "0.5rem" }} onFocus={(e) => { e.currentTarget.style.left = "0.5rem"; }} onBlur={(e) => { e.currentTarget.style.left = "-999px"; }}>Skip to content</a>
      <header className="hdr" data-testid="site-header">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem 2rem", padding: "0.9rem 0" }}>
          <Link to="/" className="display" style={{ fontSize: "1.5rem", color: "var(--paper)" }} data-testid="site-logo">Ripe<span style={{ color: "var(--gold)" }}>·</span>Reads</Link>
          <nav aria-label="Primary" style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem 1.25rem" }} data-testid="primary-nav">
            {nav.map(([to, label]) => <NavLink key={to} to={to} data-testid={`nav-${label.toLowerCase()}`}>{label}</NavLink>)}
          </nav>
        </div>
      </header>
      <main id="main" style={{ flex: 1 }}><Outlet /></main>
      <footer className="ftr" data-testid="site-footer">
        <div className="wrap" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", padding: "2.5rem 0 2rem", fontSize: "0.9rem" }}>
          <div>
            <p className="display" style={{ fontSize: "1.3rem", margin: 0, color: "var(--paper)" }}>{config.name}</p>
            <p style={{ color: "var(--orchard-soft)", margin: "0.3rem 0 0" }}>{config.tagline}</p>
            <p className="mono" style={{ marginTop: "1rem", color: "var(--gold)" }} data-testid="footer-read-counter">Read by me: {stats.ratio} titles ({Math.round((stats.read / stats.total) * 100)}%)</p>
          </div>
          <div style={{ display: "grid", gap: "0.3rem" }}>
            <Link to="/about/">About</Link><Link to="/method/">Method</Link><Link to="/shelf/">The shelf</Link><Link to="/editorial-policy/">Editorial policy</Link><Link to="/corrections/">Corrections</Link><Link to="/disagree/">Disagree with a rating</Link>
          </div>
          <div style={{ display: "grid", gap: "0.3rem" }}>
            <Link to="/quiz/">Ripeness quiz</Link><Link to="/read-next/">Read next</Link><Link to="/grades/">By grade</Link><a href="/llms.txt">llms.txt</a><a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
        <div className="wrap" style={{ padding: "0 0 1.5rem", fontSize: "0.78rem", color: "var(--orchard-soft)" }}>Ratings are one reader's judgment. Publisher age statements are listed separately where they exist. No stock photography; covers resolve from public library records.</div>
      </footer>
    </div>
  );
}
