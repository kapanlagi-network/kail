[![NPM Version][npm-img]][npm-link]
[![Build Status][travis-img]][travis-link]
[![Coverage Status][codecov-img]][codecov-link]
[![Dependency Status][david-img]][david-link]
[![Licence][licence-img]][licence-link]

Git hooks runner
=======================================


## Installation

Using [npm](https://www.npmjs.com) :

```
npm install kail
```


## Documentation

Add `hooks` configuration to your `package.json`. Every [documented hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are supported.

```js
{
  name: 'my-module',
  version: '0.0.1',
  // ...
  hooks: {
    'pre-commit': 'echo "pre-commit hook called"',
    'prepare-commit-msg': 'echo "$1 will be transformed into the first argument of the hook"',
    'post-commit': 'echo "./node_modules/.bin is added to PATH" && my-local-bin'
  }
}
```



[travis-img]: https://img.shields.io/travis/kapanlagi-network/kail.svg?style=flat-square
[travis-link]: https://travis-ci.org/kapanlagi-network/kail

[npm-img]: https://img.shields.io/npm/v/kail.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/kail

[codecov-img]: https://img.shields.io/codecov/c/github/kapanlagi-network/kail/master.svg?style=flat-square
[codecov-link]: https://codecov.io/github/kapanlagi-network/kail?branch=master

[david-img]: https://img.shields.io/david/kapanlagi-network/kail.svg?style=flat-square
[david-link]: https://david-dm.org/kapanlagi-network/kail

[licence-img]: https://img.shields.io/npm/l/kail.svg?style=flat-square
[licence-link]: LICENCE.md
