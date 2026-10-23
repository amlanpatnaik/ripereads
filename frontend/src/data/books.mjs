import { booksA } from "./books-a.mjs";
import { booksB } from "./books-b.mjs";
import { booksC } from "./books-c.mjs";
import { booksD } from "./books-d.mjs";
import { booksE } from "./books-e.mjs";
import { booksF } from "./books-f.mjs";
import { booksG } from "./books-g.mjs";
import { booksH } from "./books-h.mjs";
import { booksI } from "./books-i.mjs";
import { booksJ } from "./books-j.mjs";
import { booksK } from "./books-k.mjs";
import { booksL } from "./books-l.mjs";
import { booksM } from "./books-m.mjs";

export const books = [...booksA, ...booksB, ...booksC, ...booksD, ...booksE, ...booksF, ...booksG, ...booksH, ...booksI, ...booksJ, ...booksK, ...booksL, ...booksM];
export const bookBySlug = (slug) => books.find((b) => b.slug === slug);
