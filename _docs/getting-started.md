# Getting started

If you're using VSCode, run this up in a devcontainer; that will automatically install all your dependencies. This includes a selection of useful, preconfigured, VSCode extensions.

Otherwise install Node 18 and run `npm i`.

## Package scripts

All scripts are preceded by `npm run` on the command line, only the common dev ones are listed:

- `dev`: Run the website in hot-reload mode (updates on save)
- `format:fix`: Run prettier to fix formatting, gives list of errors that need manually fixing.
- `lint:fix`: Run eslint to fix linting issues, gives list of errors that need manually fixing.
- `style:fix`: Run stylelint to fix linting issues, gives list of errors that need manually fixing.
- `storybook`: Run up Storybook to see all components in test mode

## Folder structure

Unless you need to update configuration on the associated frameworks, everything of interest lives under `\src\`.

- `assets`: images etc.
- `components`:
  - `components\x`: Any generic component - should include a .tsx file, a .module.scss file and a .stories.tsx file. Nest sub-components as needed.
  - `components\_layout\x`: Anything that is specifically page framing such as headers, footers etc.
- `providers`: React contexts plus their bundled provider element.
- `themes`: Any global scss or mixins etc to use later.
- `utilities`: Reusable functions plus their tests.
- `views\x`: Pages and nested groups of pages.

## Conventions

- We're using [Tailwind CSS](https://tailwindcss.com/) and [Tailwind UI](https://tailwindui.com/) as a base and wrapping as needed.

- We're using SCSS modules alongside any global/Tailwind styles.

- If anyone knows how, we should probably use SSR where we can...

- Everything gets a test. This will include integration tests when we get that far (using Playwright), but for now it's [Storybook](https://storybook.js.org/) and [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

- We're using conventional commit messages. If you use CLI Git rather than VSCode Git, the cli will walk you through this with zero effort.
