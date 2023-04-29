# [NLP 100 Exercise 2020 (Rev 2)](https://nlp100.github.io/en/) in TypeScript

[![Release](https://github.com/neutron0831/nlp100-ts/actions/workflows/release.yml/badge.svg)](https://github.com/neutron0831/nlp100-ts/actions/workflows/release.yml)
[![Test](https://github.com/neutron0831/nlp100-ts/actions/workflows/test.yml/badge.svg)](https://github.com/neutron0831/nlp100-ts/actions/workflows/test.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/38dc774a-becf-44b3-b8c6-6ae07d593f61/deploy-status)](https://app.netlify.com/sites/nlp100-ts/deploys)

[NLP 100 Exercise](https://github.com/nlp100/nlp100.github.io) is a bootcamp designed for learning skills for programming, data analysis, and research activities by taking practical and exciting assignments.  
The aim of this project is to implement all of its exercises in TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)
- [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli#install)

## Installation

```sh
pnpm install
```

## Development

```sh
pnpm dev
```

## Lint and Format

```sh
pnpm lint   # ESLint
pnpm format # Prettier
```

## Test

```sh
pnpm test          # test all Chapters
ch=01 pnpm test:ch # test only Chapter 01
```

> **Note**  
> Staged files are automatically linted, formatted and tested before committing.  
> https://github.com/neutron0831/nlp100-ts/blob/cff17aef578ee1c08cbb0b627b47cf5d4e0a7001/.lintstagedrc.js#L1-L7  
> Newly added or modified `*.test.ts` files will also be tested by [`test.yml`](.github/workflows/test.yml) when a pull request is created.

## Commit

```sh
gitmoji -c
```

## [Changelog](CHANGELOG.md)

```sh
pnpm changelog
```

## [Release](https://github.com/neutron0831/nlp100-ts/releases)

By updating the version field in `package.json` and creating a pull request, a new version will be automatically released by [`release.yml`](.github/workflows/release.yml) when the pull request is closed.

https://github.com/neutron0831/nlp100-ts/blob/d634ac434d75498395444828f917358a16880346/package.json#L3

## Deployment

If there is a push to the `main` branch, whether directly or by a pull request, Netlify will automatically deploy the new version to https://nlp100-ts.netlify.app/.
