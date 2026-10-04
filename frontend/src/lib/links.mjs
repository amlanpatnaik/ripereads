import { books } from "../data/books.mjs";
import { vibes } from "../data/vibes.mjs";
import { AGE_BANDS, GRADES, SIGNALS, bandIndex, bandBySlug, gradeBySlug, signalTotal } from "../data/rubric.mjs";
import { H2 } from "./text.mjs";

export const routes = {
  book: (b) => `/books/${b.slug}/`,
  age: (slug) => `/ages/${slug}/`,
  grade: (slug) => `/grades/${slug}/`,
  series: (slug) => `/series/${slug}/`,
  readNext: (b) => `/read-next/${b.slug}/`,
  vibe: (v) => `/vibes/${v.slug}/`,
};

const rank = (b) => bandIndex(b.ageBand) * 100 + signalTotal(b);

export const stepDown = (book) =>
  books.filter((b) => b.slug !== book.slug && rank(b) < rank(book)).sort((a, b) => rank(b) - rank(a)).slice(0, 3);

export const stepUp = (book) =>
  books.filter((b) => b.slug !== book.slug && rank(b) > rank(book)).sort((a, b) => rank(a) - rank(b)).slice(0, 3);

export const vibesFor = (book) => vibes.filter((v) => v.books.includes(book.slug));
export const booksInBand = (slug) => books.filter((b) => b.ageBand === slug);
export const booksInGrade = (slug) => books.filter((b) => b.grade === slug);
export const seriesList = () => {
  const map = new Map();
  books.forEach((b) => { if (b.series) map.set(b.series.slug, { ...b.series, books: [...(map.get(b.series.slug)?.books || []), b] }); });
  return [...map.values()];
};
export const seriesBySlug = (slug) => seriesList().find((s) => s.slug === slug);

export const readStats = () => {
  const read = books.filter((b) => b.readStatus === "read").length;
  return { read, total: books.length, ratio: `${read}/${books.length}` };
};

export const allRoutes = () => [
  "/", "/about/", "/method/", "/shelf/", "/corrections/", "/editorial-policy/", "/find/", "/quiz/", "/disagree/", "/challenged/", "/lists/", "/ages/", "/grades/", "/series/", "/read-next/",
  ...books.map(routes.book),
  ...books.map(routes.readNext),
  ...AGE_BANDS.map((a) => routes.age(a.slug)),
  ...GRADES.map((g) => routes.grade(g.slug)),
  ...seriesList().map((s) => routes.series(s.slug)),
  ...vibes.map(routes.vibe),
];

export const outboundLinks = (book) => [
  routes.age(book.ageBand), routes.grade(book.grade), "/method/", routes.readNext(book),
  ...(book.series ? [routes.series(book.series.slug)] : []),
  ...stepDown(book).map(routes.book), ...stepUp(book).map(routes.book),
  ...vibesFor(book).map(routes.vibe),
];

export const inboundCount = (book) => {
  const url = routes.book(book);
  let n = 1 + vibesFor(book).length + 1 + 1;
  books.forEach((b) => { if (b.slug !== book.slug && outboundLinks(b).includes(url)) n += 1; });
  return n;
};

export const stepText = (book, dir) => {
  const list = dir === "down" ? stepDown(book) : stepUp(book);
  const band = bandBySlug(book.ageBand).label;
  if (!list.length) return dir === "down" ? `Nothing on the shelf is gentler than ${book.title} yet; it is the softest title I have rated.` : `Nothing on the shelf sits above ${book.title}; it is the most mature title I have rated.`;
  const lead = dir === "down"
    ? `If ${book.title} feels like a stretch for a ${band} reader, these three sit a step gentler on my scale while keeping the same kind of story.`
    : `If ${book.title} felt easy and the reader is asking for more, these three sit a step up on my scale.`;
  return `${lead} ${list.map((b) => `${b.title} by ${b.author} (${bandBySlug(b.ageBand).label}, signals ${signalTotal(b)}/20).`).join(" ")}`;
};

export const signalText = (book) => SIGNALS.map((s) => {
  const sig = book.signals[s.key];
  return `${s.label}: ${sig.score} of 4, ${s.scale[sig.score]}. ${sig.note}`;
}).join(" ");

export const listsText = (book) => {
  const v = vibesFor(book);
  return v.length ? `${book.title} appears on ${v.length} of my vibes lists: ${v.map((x) => x.title).join("; ")}.` : "";
};

export const quickAnswers = (book) => {
  const band = bandBySlug(book.ageBand);
  return [
    [`What age is ${book.title} appropriate for?`, `I rate it ripe at ${band.stamp}, band ${band.label}. ${book.publisherAge ? `The publisher says ${book.publisherAge}.` : "No publisher age statement verified."}`],
    ...SIGNALS.map((s) => [`How much ${s.label.toLowerCase()} is in ${book.title}?`, `${book.signals[s.key].score} of 4: ${s.scale[book.signals[s.key].score]}.`]),
    [`Has Ripe Reads read ${book.title}?`, book.readStatus === "read" ? "Yes, cover to cover." : "Not yet; this rating is from the publisher record, trade reviews and consistent reader reports."],
  ];
};

export const bookPageText = (book) => {
  const band = bandBySlug(book.ageBand);
  const grade = gradeBySlug(book.grade);
  return [
    `${book.title} by ${book.author}. Ripe at ${band.stamp}. ${book.readStatus === "read" ? "Read by me." : "Not yet read by me; rated from the record."}`,
    H2.short, book.verdict, "Quick answers.", ...quickAnswers(book).map((q) => `${q[0]} ${q[1]}`),
    H2.about, book.summary,
    H2.signals, `Total ${signalTotal(book)} of 20 across five signals.`, signalText(book),
    H2.ripeFor, `My band is ${band.label}, ${grade.label} (${grade.detail}).`, book.ripeFor,
    H2.publisher, `Publisher's stated age: ${book.publisherAge || "not stated or not verified"}.`, book.publisherNote,
    H2.series, book.series ? `${book.series.name}, book ${book.series.index}.` : "A standalone.", book.seriesNote,
    H2.stepDown, stepText(book, "down"), stepDown(book).map((b) => b.verdict).join(" "),
    H2.stepUp, stepText(book, "up"), stepUp(book).map((b) => b.verdict).join(" "),
    H2.lists, listsText(book), `Full read-next page for ${book.title}.`,
    H2.sources, book.sourcesNote, `ISBN: ${book.isbn || "not recorded"}. Pages: ${book.pages || "not recorded"}. Null beats fabrication. Rated with the Ripe Reads method. ${book.sources.map((s) => s.label).join("; ")}. Think I have this wrong? Tell me and I will log it on the corrections page.`,
  ].join("\n");
};
