# get-nans <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

[![browser support][9]][10]

JavaScript should only have one distinguishable `NaN` value. However, some engines violate this, and have at least two.

This module returns an array of all the `NaN`s it knows how to detect on the current engine.

Current known failures:
 - `node` (`v0.6` - `v0.12`)
 - `io.js` (`v1.0` - `v2.2`)
 - Chrome (`v43` - `v45`, at least)
 - Firefox (`v38` - `v41`, at least)
 - Internet Explorer (`v10`, `v11`)

## Example

```js
var getNaNs = require('get-nans');
var assert = require('assert');

var nans = getNaNs();
assert.deepEqual(nans, [NaN]);
```

## Relevant links
 - https://esdiscuss.org/topic/observability-of-nan-distinctions-is-this-a-concern
 - https://bugs.webkit.org/show_bug.cgi?id=53598
 - https://code.google.com/p/v8/issues/detail?id=1101
 - https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-number-type - see "Note"

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/get-nans
[2]: http://vb.teelaun.ch/ljharb/get-nans.svg
[3]: https://travis-ci.org/ljharb/get-nans.svg
[4]: https://travis-ci.org/ljharb/get-nans
[5]: https://david-dm.org/ljharb/get-nans.svg
[6]: https://david-dm.org/ljharb/get-nans
[7]: https://david-dm.org/ljharb/get-nans/dev-status.svg
[8]: https://david-dm.org/ljharb/get-nans#info=devDependencies
[9]: https://ci.testling.com/ljharb/get-nans.png
[10]: https://ci.testling.com/ljharb/get-nans
[11]: https://nodei.co/npm/get-nans.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/get-nans.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/get-nans.svg
[downloads-url]: http://npm-stat.com/charts.html?package=get-nans
