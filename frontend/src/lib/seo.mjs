import config from "../site.config.mjs";
import { SIGNALS, bandBySlug, signalTotal } from "../data/rubric.mjs";
import { routes, quickAnswers } from "./links.mjs";

const abs = (p) => `${config.url}${p}`;

export const bookJsonLd = (book) => {
  const band = bandBySlug(book.ageBand);
  const url = abs(routes.book(book));
  return [
    { "@context": "https://schema.org", "@type": "Book", name: book.title, author: { "@type": "Person", name: book.author }, datePublished: String(book.year), publisher: book.publisher ? { "@type": "Organization", name: book.publisher } : undefined, isbn: book.isbn || undefined, numberOfPages: book.pages || undefined, url, image: abs(`/og/${book.slug}/`), isPartOf: book.series ? { "@type": "BookSeries", name: book.series.name, position: book.series.index } : undefined },
    { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "Book", name: book.title, author: { "@type": "Person", name: book.author } }, author: { "@type": "Person", "@id": `${config.url}/about/#abbey`, name: config.author, url: `${config.url}/about/` }, reviewBody: book.verdict, reviewRating: { "@type": "Rating", ratingValue: signalTotal(book), bestRating: 20, worstRating: 0, name: `Ripe at ${band.stamp}` }, url },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: quickAnswers(book).map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name: `Ages ${band.label}`, item: abs(routes.age(book.ageBand)) },
      { "@type": "ListItem", position: 3, name: book.title, item: url },
    ] },
  ];
};

export const bookMeta = (book) => {
  const band = bandBySlug(book.ageBand);
  return {
    title: `${book.title} by ${book.author}: ripe at ${band.stamp}?`,
    description: `Is ${book.title} appropriate for your kid? I rate it ripe at ${band.stamp}. ${book.verdict}`.slice(0, 155),
    canonical: abs(routes.book(book)),
    image: abs(`/og/${book.slug}/`),
  };
};

export const pageMeta = (path, title, description) => ({ title: `${title} · ${config.name}`, description, canonical: abs(path), image: abs("/og/site/") });
