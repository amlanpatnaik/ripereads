import { booksA } from "./books-a.mjs";
import { booksB } from "./books-b.mjs";
import { booksC } from "./books-c.mjs";
import { booksD } from "./books-d.mjs";
import { booksE } from "./books-e.mjs";
import { booksF } from "./books-f.mjs";
import { booksG } from "./books-g.mjs";
import { booksH } from "./books-h.mjs";
import { booksI } from "./books-i.mjs";

export const books = [...booksA, ...booksB, ...booksC, ...booksD, ...booksE, ...booksF, ...booksG, ...booksH, ...booksI];
export const bookBySlug = (slug) => books.find((b) => b.slug === slug);
