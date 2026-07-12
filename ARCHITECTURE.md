# Architecture

A one-page React site built as four strict layers. Each layer only talks to the one below it.

```
src/
  main.tsx                entry
  App.tsx                 composition root — the only file that knows page order
  styles/
    tokens.css            colors/fonts/spacing as custom properties
    global.css            resets, body, reduced-motion rules
  data/                    ─── content: plain objects, never markup ───
    pieces.ts             board pieces: {id, square, glyph, category, title, story, media}
    education.ts          activities/awards: {key, school, kind, title, years, detail}
    games.ts               three classic games: {id, title, event, result, moves[]}
    profile.ts             rating handles + cached fallbacks
  lib/                     ─── pure logic: no React, unit-tested ───
    board.ts              buildBoard(pieces) → 64 squares
    fen.ts                 chess.js wrapper: SAN moves → FEN per ply → 64-cell view model
    ratings/
      provider.ts          RatingProvider interface: { name, fallback, fetch() }
      lichess.ts            fide-static.ts    factory.ts
  hooks/                   ─── behavior: reusable, no markup ───
    useRatings.ts          fetch-on-visible, fallback to cached value on rejection
    useInView.ts           IntersectionObserver wrapper
  components/              ─── markup + styles, one folder per section ───
    Nav/  Hero/  Skills/  Now/  Travel/  Contact/  Sparkle/  StoryDialog/
    Board/
      Board.tsx            grid of piece buttons, selection state (useReducer)
      Plaque.tsx           selected piece detail
    Chess/
      Chess.tsx            owns selected game + ply
      GameList.tsx  MiniBoard.tsx  RatingCards.tsx
tests/
  lib/*.test.ts            board, fen — pure function tests
  components/*.test.tsx    RTL: click piece → plaque text, etc.
  e2e/*.spec.ts            Playwright: nav, board, education, chess, ratings
```

## Where each principle shows up

- **Separation of concerns** — `data/` is what, `lib/` is pure logic, `hooks/` is behavior, `components/` is markup. `lib/` never imports React; components never call `fetch` directly, `useRatings` does.
- **Single responsibility** — one reason to change per file. Redesign the plaque → `Plaque.tsx` + its module.css only. Add a board piece → one object in `pieces.ts`, zero component edits.
- **Open/closed** — the site is data-driven: components map over arrays in `data/`. Adding a piece, an education entry, or a game is adding one object, not editing a component.
- **Liskov / dependency inversion** — `RatingCards` consumes `RatingProvider[]` through `useRatings`; Lichess and static-FIDE providers are fully substitutable, including their failure mode (reject → cached fallback from `profile.ts`). `lib/ratings/factory.ts` is the one factory in the codebase, justified by two real implementations.
- **KISS / YAGNI** — no global state library, no Context (nothing here is shared by distant components), no HOCs. `useReducer` + props is enough for one page of local UI state.

## Testing pyramid

- **Unit (Vitest)** — `lib/board.ts` and `lib/fen.ts`: square math, FEN parsing, malformed-input failure.
- **Component (RTL)** — behavior, not implementation: click piece → plaque text, step replay, rating fetch success/failure paths.
- **E2E (Playwright)** — full-browser flows: every nav anchor scrolls its section into view, every board piece and education item opens and closes its story (mouse and keyboard-only), game switching + replay stepping, ratings falling back to cached values when the network is stubbed offline.

## Watch-outs

- Board/Education/Chess own their own local state via `useState`/`useReducer` — there is no cross-component state to synchronize, so adding one would be the over-engineering this repo is explicitly trying to avoid.
- `useRatings` fetches once, on first intersection, and never retries — a provider that's down stays on its cached fallback for the rest of the session rather than refetching in a loop.
