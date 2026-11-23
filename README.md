# MatthewPersonalWebsite

A website built with Next.js, React and Chakra UI. Every pull request gets a preview on Vercel and `main` is deployed
by it, so do not push to `main` for any other reason than to release.

## Development

```
yarn install
yarn dev          # http://localhost:3000
yarn lint         # ESLint and Prettier (yarn format fixes the formatting)
yarn typecheck
yarn test
yarn build
```

## How the code is organised

- `src/app/`: the routes, and nothing else. A `page.tsx` only renders the page of its feature.
- `src/domain/`: what the site knows, with no UI. `model/` holds plain types and `provider/` holds the objects that
  hand out data (`UrlProvider` has every route).
- `src/presentation/`: everything on screen. `common/` is shared, `theme/` is the Chakra theme with the text styles, and
  `feature/<name>/` is one folder per page.
- **A page is `XPage` and `XPageContent`**, each in its own file, with `useXViewModel` and `XUiState` next to them.
  `XPage` is stateful: it gets the state from `useXViewModel` and hands it down, with no UI of its own.
  `XPageContent` is stateless and is all of the page's UI: it takes `XUiState` and one callback per user action
  (state down, events up), which makes it easy to test.
- Imports use the alias `@/` (the folder `src/`), never `../`.
- `scripts/`, if the site has one, runs at build time only; `src/` never reads files or builds content.

## Blog articles

Articles are markdown files in `content/blog` (the file name is the article id). To add one, add the file: there is no
list to update. It opens with a front matter block, and the page shows the title and date itself, so they are not
repeated in the text:

```
---
title: Light and Material
summary: One or two sentences, shown in the list of articles.
date: 2026-09-12
---
The first paragraph has no heading, and `##` starts a section.
```

`scripts/` is **build time only**. `scripts/build-blog.ts` renders the markdown to HTML, lists the articles from their front matter and compiles the article styling
to CSS (from the Chakra theme, so it is never written twice), writing both to `src/generated` (git-ignored). It runs
before `dev`, `build`, `typecheck` and `test`; with `yarn dev` already running, run `yarn generate` after changing a post.
