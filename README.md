<!-- Generated from readme.yml by LukeNeedham/ci-workflows (docs/readme.md). Edit readme.yml, not this file. -->
# MatthewPersonalWebsite

A personal website for Matthew, in the style of a CV.

## Description

A one-page personal website showing a name and a title in a serif CV typeface.
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

## Contributing

Branch from `main`, make the change, and open a pull request. CI must be green before it is merged.

## License

All rights reserved. See [LICENSE](LICENSE).
