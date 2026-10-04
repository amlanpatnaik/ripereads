const ol = (q) => ({ label: "Open Library record", url: `https://openlibrary.org/search?q=${encodeURIComponent(q)}` });
const K = ["romance", "violence", "language", "substances", "themes"];

export const mk = (b) => ({
  publisher: null, publisherAge: null, isbn: null, pages: null, readStatus: "unmarked", challenged: false,
  ...b,
  signals: Object.fromEntries(K.map((k, i) => [k, { score: b.sig[i][0], note: b.sig[i][1] }])),
  sources: [ol(`${b.title} ${b.author}`), ...(b.sources || [])],
  sig: undefined,
});
