# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.22](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.21...@thi.ng/csp@1.1.22) (2020-05-03)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.21](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.20...@thi.ng/csp@1.1.21) (2020-04-28)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.20](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.19...@thi.ng/csp@1.1.20) (2020-04-27)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.19](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.18...@thi.ng/csp@1.1.19) (2020-04-20)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.18](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.17...@thi.ng/csp@1.1.18) (2020-04-11)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.17](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.16...@thi.ng/csp@1.1.17) (2020-04-06)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.16](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.15...@thi.ng/csp@1.1.16) (2020-04-05)

**Note:** Version bump only for package @thi.ng/csp





## [1.1.15](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.1.14...@thi.ng/csp@1.1.15) (2020-03-28)

**Note:** Version bump only for package @thi.ng/csp





# [1.1.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@1.0.19...@thi.ng/csp@1.1.0) (2019-07-07)

### Bug Fixes

* **csp:** TS strictNullChecks, update various return types ([da909ac](https://github.com/thi-ng/umbrella/commit/da909ac))

### Features

* **csp:** enable TS strict compiler flags (refactor) ([3d7fba2](https://github.com/thi-ng/umbrella/commit/3d7fba2))
* **csp:** update Mult.tap() to use set semantics ([c9bc953](https://github.com/thi-ng/umbrella/commit/c9bc953))

# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@0.3.79...@thi.ng/csp@1.0.0) (2019-01-21)

### Bug Fixes

* **csp:** disable __State reverse enum lookup ([3b8576f](https://github.com/thi-ng/umbrella/commit/3b8576f))

### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))

### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.

<a name="0.3.64"></a>
## [0.3.64](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@0.3.63...@thi.ng/csp@0.3.64) (2018-09-24)

### Performance Improvements

* **csp:** `State` => const enum ([c3e8d68](https://github.com/thi-ng/umbrella/commit/c3e8d68))

<a name="0.3.11"></a>
## [0.3.11](https://github.com/thi-ng/umbrella/compare/@thi.ng/csp@0.3.10...@thi.ng/csp@0.3.11) (2018-02-08)

### Bug Fixes

* **csp:** fix [#5](https://github.com/thi-ng/umbrella/issues/5), example in readme ([a10a487](https://github.com/thi-ng/umbrella/commit/a10a487))
* **csp:** fix [#5](https://github.com/thi-ng/umbrella/issues/5), more example fixes (rfn calls) ([080c2ee](https://github.com/thi-ng/umbrella/commit/080c2ee))
