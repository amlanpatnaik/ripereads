export const SIGNALS = [
  { key: "romance", label: "Romance & heat", scale: ["none", "crushes and kisses", "sensual, fade-to-black", "on-page but not graphic", "explicit on-page sex"] },
  { key: "violence", label: "Violence & gore", scale: ["none", "peril, bloodless", "fights with injury", "deaths, some gore", "torture or sustained gore"] },
  { key: "language", label: "Language", scale: ["clean", "mild (damn, hell)", "occasional strong", "frequent strong", "pervasive strong"] },
  { key: "substances", label: "Substances", scale: ["none", "mentioned", "social drinking", "drunkenness or drugs on page", "glamorised or central"] },
  { key: "themes", label: "Heavy themes", scale: ["light", "grief or loss", "abuse, trauma, prejudice", "sexual threat, self-harm", "sustained or graphic"] },
];

export const AGE_BANDS = [
  { slug: "10-12", label: "10–12", stamp: "10+", grade: "middle-school" },
  { slug: "12-14", label: "12–14", stamp: "12+", grade: "middle-school" },
  { slug: "14-16", label: "14–16", stamp: "14+", grade: "high-school" },
  { slug: "16-18", label: "16–18", stamp: "16+", grade: "high-school" },
  { slug: "18-plus", label: "18+", stamp: "18+", grade: "adult-crossover" },
];

export const GRADES = [
  { slug: "middle-school", label: "Middle school", detail: "grades 6–8" },
  { slug: "high-school", label: "High school", detail: "grades 9–12" },
  { slug: "adult-crossover", label: "Adult crossover", detail: "adult-published, teen-read" },
];

export const bandIndex = (slug) => AGE_BANDS.findIndex((b) => b.slug === slug);
export const bandBySlug = (slug) => AGE_BANDS.find((b) => b.slug === slug);
export const gradeBySlug = (slug) => GRADES.find((g) => g.slug === slug);
export const signalTotal = (book) => SIGNALS.reduce((n, s) => n + book.signals[s.key].score, 0);
