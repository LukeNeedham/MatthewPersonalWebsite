<!-- Generated from readme.yml by LukeNeedham/ci-workflows (docs/readme.md). Edit readme.yml, not this file. -->
# MatthewPersonalWebsite

The personal website of Matthew J. Needham, architect.

[Website](https://matthewjneedham.com)

## Description

A personal website for use as an online CV: his name and title in a serif CV typeface, and a blog of articles
that give an insight into the interests of an architect.
It is a Next.js project using React, TypeScript and Chakra UI.

## Getting started as a developer

Requirements: Node.js 24 and yarn.

```
git clone https://github.com/LukeNeedham/MatthewPersonalWebsite.git
cd MatthewPersonalWebsite
yarn install
yarn dev          # the site at http://localhost:3000
yarn lint         # the checks of CI
yarn format       # fix the formatting
yarn typecheck    # the types
yarn test         # unit tests
yarn build        # the production build
```

Every pull request gets a preview on Vercel, which CI links in a comment, and `main` is deployed by Vercel, so do not push to `main` for any other reason than to release.

Like all my websites, it follows the shared architecture and conventions (Next.js, TypeScript, Chakra UI, MVVM with every page split into a `Page` and a `PageContent`): see [ci-workflows](https://github.com/LukeNeedham/ci-workflows/blob/main/docs/next-js-app.md).

The blog is generated at build time. `scripts/build-blog.ts` renders each markdown article to HTML, lists the
articles from their front matter and compiles the article styling to CSS (from the Chakra theme), writing all of
it to `src/generated` (git-ignored). It runs before `dev`, `build`, `typecheck` and `test`; with `yarn dev`
already running, run `yarn generate` after changing an article.

## Blog articles

Articles are markdown files in `content/blog`, and the file name is the article id. To add one, add the file:
there is no list to update. It opens with front matter, and the page shows the title and date itself, so they
are not repeated in the text:

```
---
title: Light and Material
summary: One or two sentences, shown in the list of articles.
date: 2026-09-12
---
The first paragraph has no heading, and `##` starts a section.
```

## Contributing

Branch from `main`, make the change, and open a pull request. CI must be green before it is merged.

## License

All rights reserved. See [LICENSE](LICENSE).
