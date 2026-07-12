# Advait Bagri — portfolio

**Live:** https://advait-b.github.io/portfolio/

A one-page chess-themed portfolio: a board where every piece opens a story about a project or
interest, alongside education, chess, and travel sections. Built from scratch in React —
no UI kit, no CMS, no component library — to make the repo itself part of the portfolio.

## Why it looks like this

The stack and file layout are deliberately minimal: one page of local UI state doesn't need
Redux or Context, so it uses `useState`/`useReducer` and props instead. Content lives in plain
data files (`src/data/`), never hardcoded into markup, so adding a board piece or an education
entry is one object, not a component edit. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full
layer breakdown and where each design principle shows up in the code.

## Stack

| Layer | Choice | Why |
|---|---|---|
| UI | React 19 + TypeScript + Vite | Component model fits a page of small, list-shaped sections; types catch square/FEN bugs; Vite gives instant HMR with zero config. |
| State | `useState` / `useReducer` + props | One page of local UI state — a state library would be résumé-driven over-engineering. |
| Styling | CSS Modules + `tokens.css` | Scoped styles per component, design tokens as custom properties, no Tailwind/styled-components to fight. |
| Chess logic | [chess.js](https://github.com/jhlywa/chess.js) | Battle-tested SAN/FEN handling powers the game replay; no reason to hand-roll a move parser. |
| Live ratings | Lichess public API + a static FIDE fallback | Live numbers beat hardcoded ones; FIDE has no public API, so that card is a manually verified static value with a "last verified" date. |
| Unit tests | Vitest + React Testing Library | Test components the way users use them (click a piece → plaque text). |
| E2E tests | Playwright | Real browser, headless in CI. |
| Hosting / CI | GitHub Pages + GitHub Actions | Free; lint → typecheck → test → e2e → build on every PR, deploy on merge to `main`. |

## Running locally

```bash
npm install
npm run dev          # http://localhost:5173
```

## Testing

```bash
npm run lint          # eslint
npm run typecheck     # tsc --noEmit
npm test              # vitest (unit + component)
npm run test:e2e      # playwright, starts the dev server itself
npm run build         # production build
```

All five run in CI on every pull request (see `.github/workflows/ci.yml`), plus `npm audit`.
