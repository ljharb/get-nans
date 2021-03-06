# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Generated by [`auto-changelog`](https://github.com/CookPete/auto-changelog).

## [v2.0.0](https://github.com/ljharb/get-nans/compare/v1.1.1...v2.0.0) - 2020-01-24

### Fixed

- Update list of engines/NaN values. [`#2`](https://github.com/ljharb/get-nans/issues/2)

### Commits

- [Tests] use shared travis-ci configs [`ea0f8d7`](https://github.com/ljharb/get-nans/commit/ea0f8d7c99524cde7f0a8503a08e9ae39803b2aa)
- [Tests] up to `node` `v12.11`, `v11.15`, `v10.16`, `v9.11`, `v8.16`, `v7.10`, `v6.17`, `v5.12`, `v4.9`, `v3.3`; use `nvm install-latest-npm` [`3f9c61e`](https://github.com/ljharb/get-nans/commit/3f9c61e2dc84cee822e91bba3d58cf92c7f6773a)
- Update `tape`, `eslint`, `jscs`, `browserify`, `semver`; use my personal shared `eslint` config [`332d2e3`](https://github.com/ljharb/get-nans/commit/332d2e3e6da4cc5e794993bc639119594347e7bc)
- [Tests] remove `jscs` [`e4aa542`](https://github.com/ljharb/get-nans/commit/e4aa542f0dc6d041fe95191d7162c2c1f3ab859a)
- [Breaking] use more robust NaN-gathering code; return an object with bits as keys instead of an array [`5564f7c`](https://github.com/ljharb/get-nans/commit/5564f7cd99be43b255e7bb58d8e45e64c6d5c447)
- [meta] add `auto-changelog` [`815d73d`](https://github.com/ljharb/get-nans/commit/815d73dfb7a6f75e89f24a7d06c249732d2ac3e7)
- Update `nsp`, `eslint`, `browserify` [`1862915`](https://github.com/ljharb/get-nans/commit/1862915c84aa6c28cf441abfd3bb07369af3ed18)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `browserify`, `semver`, `tape` [`1c82d56`](https://github.com/ljharb/get-nans/commit/1c82d56f4a572d7a5efc0925cf5b8fb4bb493ea4)
- [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `browserify`, `semver`, `isarray` [`bb0a43d`](https://github.com/ljharb/get-nans/commit/bb0a43d7bb33eaa31c64c17ae3d3125aeab8bc7f)
- [actions] add automatic rebasing / merge commit blocking [`c4094a8`](https://github.com/ljharb/get-nans/commit/c4094a8a7011a21361fe4a4904c2fdc4ffebf442)
- [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops [`0b499eb`](https://github.com/ljharb/get-nans/commit/0b499eb8b6d6def1244bb1574d8df053e253cd88)
- [Dev Deps] update `tape`, `jscs` [`062d180`](https://github.com/ljharb/get-nans/commit/062d18021dec391d50f21e69ed81d8dbf449dd09)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `isarray`, `tape` [`29d3511`](https://github.com/ljharb/get-nans/commit/29d3511588c36e9b58eb372723f3146332c80f76)
- Update `eslint` [`302f6b8`](https://github.com/ljharb/get-nans/commit/302f6b8875270431eabb366f189b08c24f997aa6)
- Only apps should have lockfiles [`9194bba`](https://github.com/ljharb/get-nans/commit/9194bbafc8d905235b7895464baf9c6e89f60d8f)
- Test on `io.js` `v2.3` [`5d4a4f4`](https://github.com/ljharb/get-nans/commit/5d4a4f46e42ac17e6e0ec8706c6b0e33c9beccf5)
- [Dev Deps] Update `tape`, `eslint` [`60c3edb`](https://github.com/ljharb/get-nans/commit/60c3edb6311873537c727f15dacfe02da89e8555)
- Test up to `io.js` `v2.5` [`200a044`](https://github.com/ljharb/get-nans/commit/200a04423a7d766451a3d8a74a60b0cd23d6263e)
- [meta] add `funding` field [`bf6ccd2`](https://github.com/ljharb/get-nans/commit/bf6ccd24e9a163f7435c8adcb930a45d1d2639df)
- [meta] add `safe-publish-latest` [`af32294`](https://github.com/ljharb/get-nans/commit/af322944969fc1b5522273e1d6b8ae3b79001284)
- [Dev Deps] update `tape` [`7eb3030`](https://github.com/ljharb/get-nans/commit/7eb303063589645a9114b35dd0e9533640346762)
- Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG. [`5e74a61`](https://github.com/ljharb/get-nans/commit/5e74a61a31071e023bf6e0167db0a12e23b6b652)
- Update `tape` [`c7db5fd`](https://github.com/ljharb/get-nans/commit/c7db5fde44faec4d46f47d3f1ebaf177f32cad93)
- Test on `io.js` `v3.0` [`d7d47f8`](https://github.com/ljharb/get-nans/commit/d7d47f827945adf10dedb083d540081819121d79)

## [v1.1.1](https://github.com/ljharb/get-nans/compare/v1.1.0...v1.1.1) - 2015-06-08

### Commits

- Add another differentiable NaN in IE 10/11. [`93767ce`](https://github.com/ljharb/get-nans/commit/93767ce91e5e1726e5ec430aa05c744502b6a6e4)
- Split out `npm run build` from `npm run test-browser` [`fb436e0`](https://github.com/ljharb/get-nans/commit/fb436e06759f754bb4bb405b8ec731b34de0cef5)
- Add ES spec bug link to readme. [`497fb5d`](https://github.com/ljharb/get-nans/commit/497fb5d04c531ac8f3d111f77b6eaa44940f76fd)

## [v1.1.0](https://github.com/ljharb/get-nans/compare/v1.0.1...v1.1.0) - 2015-06-07

### Commits

- Add `isarray` for browsers without `Array.isArray`. [`514fd8a`](https://github.com/ljharb/get-nans/commit/514fd8aecf7e51a12a7fdc544b75f8afe002797e)
- Refactor to allow for variable number of NaN values. [`937ee1a`](https://github.com/ljharb/get-nans/commit/937ee1a805c7402b29f7dccb17381f8fac08021e)
- Add an IE 10/11 differentiable `NaN` value. [`5eecc27`](https://github.com/ljharb/get-nans/commit/5eecc274504a6a544a723ca89a30f022f97cc398)
- Add relevant links to README. [`137704d`](https://github.com/ljharb/get-nans/commit/137704d3c8f6fc3a8086184f6f503e0d12b6a549)

## [v1.0.1](https://github.com/ljharb/get-nans/compare/v1.0.0...v1.0.1) - 2015-06-07

### Commits

- Updating to note that Firefox has this problem as well. [`e4b2ec6`](https://github.com/ljharb/get-nans/commit/e4b2ec6ed135a85fe50a6a884123b98ab8e28815)

## v1.0.0 - 2015-06-07

### Commits

- Tests [`39c03bd`](https://github.com/ljharb/get-nans/commit/39c03bd0460bb1b016930cf9a09d7a61ff83f0cc)
- Dotfiles [`5ebb45f`](https://github.com/ljharb/get-nans/commit/5ebb45fdf33e4ee43dc5444af655aa25187fc3a5)
- package.json [`be1a07a`](https://github.com/ljharb/get-nans/commit/be1a07a0ac79b5b9b1c5e8c3b11f4ba42f30e2e5)
- Initial commit [`0d9570a`](https://github.com/ljharb/get-nans/commit/0d9570adfa35175cf7a9ce66fc52b4f17de9d1cb)
- read me [`f290a11`](https://github.com/ljharb/get-nans/commit/f290a110ad4f463be1ed7f799ab2f0ebdb8e63b8)
- Implementation [`24aac99`](https://github.com/ljharb/get-nans/commit/24aac996de4e32ed5a04f43873e574257605b90d)
