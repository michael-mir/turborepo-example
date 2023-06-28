# Turborepo example

## Start

`npm install turbo --global`

## What's inside?

This Turborepo includes the following packages:

### Packages

- `@michael-mir/packages-components`: a stub React component library
- `@michael-mir/tools-eslint`: `eslint` configurations
- `@michael-mir/tools-prettier`: `prettier` configurations
- `@michael-mir/tools-tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
- [ESLint](https://eslint.org/) for code linting

### Build

To build all apps and packages, run the following command:

`yarn build`

### Develop

To develop all apps and packages, run the following command:

`yarn dev`

### Versioning & publishing

#### Add a new changeset

`changeset`

#### Create new versions of packages

`changeset version`

#### Publish all changed packages to npm

`changeset publish`

## How to run package scripts?

`yarn workspace {package} {script}`

## Useful Links

Learn more about the power of Turborepo:

- [Changesets](https://github.com/changesets/changesets/blob/main/packages/cli)
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
