import { booksA } from "./books-a.mjs";
import { booksB } from "./books-b.mjs";
import { booksC } from "./books-c.mjs";

export const books = [...booksA, ...booksB, ...booksC];
export const bookBySlug = (slug) => books.find((b) => b.slug === slug);
