// Shared by Bookish Life posts and vibes lists that carry a candle pairing.
export const Credit = ({ credit, creditUrl }) =>
  credit ? (
    <p className="mono" style={{ color: "var(--ink-faint)", margin: "0.4rem 0 0" }}>
      Photo: {creditUrl ? <a href={creditUrl} target="_blank" rel="noopener noreferrer">{credit}</a> : credit}
    </p>
  ) : null;

export const CandleCard = ({ candle, creditLabel = "Aarka Origins", creditUrl = "https://aarkaorigins.com/collections/book-lovers-soy-candles" }) => (
  <figure style={{ margin: 0, breakInside: "avoid" }} data-testid={`candle-${candle.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
    {candle.url ? (
      <a href={candle.url} target="_blank" rel="noopener noreferrer">
        <img src={candle.image.src} alt={candle.image.alt} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }} />
      </a>
    ) : (
      <img src={candle.image.src} alt={candle.image.alt} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }} />
    )}
    <Credit credit={creditLabel} creditUrl={creditUrl} />
    <figcaption style={{ marginTop: "0.6rem" }}>
      <p style={{ margin: 0, fontWeight: 600 }}>
        {candle.url ? <a href={candle.url} target="_blank" rel="noopener noreferrer">{candle.name}</a> : candle.name}{" "}
        <span className="mono" style={{ color: "var(--ink-faint)", fontWeight: 400 }}>· {candle.price}</span>
      </p>
      <p className="mono" style={{ color: "var(--ink-soft)", margin: "0.2rem 0 0.4rem" }}>{candle.notes}</p>
      {candle.rating != null && (
        <p className="mono" style={{ color: "var(--ink-faint)", margin: "0 0 0.4rem", fontSize: "0.85em" }}>
          {candle.reviewCount > 0 ? `${candle.rating.toFixed(2)}★ · ${candle.reviewCount} review${candle.reviewCount === 1 ? "" : "s"}` : "No reviews yet"}
        </p>
      )}
      <p style={{ margin: 0, color: "var(--ink-soft)" }}>{candle.blurb}</p>
    </figcaption>
  </figure>
);
