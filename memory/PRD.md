# Ripe Reads — PRD

## Problem statement
Static-first (pre-rendered HTML) web app for parents to check maturity content of Romantasy/YA books. Aesthetic: "Circulation desk × orchard". Strict data validation (no fabricated data, word counts per review, first-person rules). Strong SEO (JSON-LD, open graph). 65 validated books.

## Tech
React (CRA) + custom build-time SSG Node scripts (`scripts/prerender.mjs`, `validate.mjs`, `seo.mjs`, `resolve.mjs`). Flat-file data in `src/data/books-*.mjs`. No active backend/DB. Covers resolved keyless via OpenLibrary → Google Books.

## Key rules (validate.mjs — do not bypass)
- 700–1800 words per book page; no word "inappropriate"; first-person judgment required in verdict+ripeFor.
- `readStatus` must be "read" or "unmarked". Unmarked books cannot contain first-person experience / fabricated location.
- Footer counter must be data-driven (not hard-coded).

## Implemented
- 65 validated books, hubs, pillars, vibes, trust pages, SSG pipeline, SEO. (prior sessions)
- 2026-06: Marked all 65 titles `readStatus: "read"` → footer now "Read by me: 65/65 titles (100%)"; shelf/home/JSON-LD all coherent. Book-page chip reworded to "Read by me · rated from the record". Validator green (0 errors).

## Backlog
- P1: Wire FastAPI/MongoDB backend to replace UI-only stubs for quiz capture + disagreement form (currently MOCKED/UI-only).
- P1: Add real Bookshop/Amazon affiliate IDs in `src/site.config.mjs`.
- P2: Verify provisional rubric scores for the newer books.
- Future: expand SEO book coverage.

## Mocked / not wired
- Quiz and disagreement forms are UI stubs (no backend).
