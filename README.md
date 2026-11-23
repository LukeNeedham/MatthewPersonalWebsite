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

The blog content comes from the blog repo [matthewpersonalwebsite-blogcontent](https://github.com/LukeNeedham/matthewpersonalwebsite-blogcontent).

The blog is generated at build time, and its content is not in this repo. The build is the shared
[next-js-blog](https://github.com/LukeNeedham/next-js-blog) package, run by `scripts/build-blog.ts`, which only says
what is this site's own: where its content is, the front matter of an article and the styling of an article. It
downloads the latest `main` of the content repo into `content` (git-ignored), renders each markdown article to HTML,
lists the articles from their front matter, copies the images to `public/blog-images` and compiles the article
styling to CSS (from the Chakra theme), writing the rest to `src/generated` (git-ignored). It runs before `dev`,
`build`, `typecheck` and `test`.

To work on the blog with a local checkout of the content instead of the download, set `BLOG_CONTENT_DIR` to it (and
`BLOG_CONTENT_REF` to download another branch). With `yarn dev` already running, run `yarn generate` after changing
an article. A push to `main` of the blog repo rebuilds the site through a Vercel Deploy Hook.

## Blog articles

Articles are markdown files in `articles` of the content repo, and the file name is the article id. To add one,
add the file: there is no list to update. Images go in `images`, and an article shows one as
`![Alt text](../images/name.png)`. An article opens with front matter, and the page shows the title and date
itself, so they are not repeated in the text:

```
---
title: My Article
summary: One or two sentences, shown in the list of articles.
date: 2026-09-12
---
The first paragraph has no heading, and `##` starts a section.
```

## License

All rights reserved. See [LICENSE](LICENSE).
