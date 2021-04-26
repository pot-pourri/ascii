[js-ascii](http://make-github-pseudonymous-again.github.io/js-ascii)
==

ASCII code bricks for JavaScript.

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-ascii/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-ascii.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-ascii)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-ascii.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-ascii)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-ascii)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-ascii)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-ascii#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-ascii#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-ascii)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-ascii.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-ascii)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-ascii.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-ascii/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-ascii.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-ascii)

## Installation

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let ascii = require( "@aureooms/js-ascii" ) ;
```

## Usage

```js
ascii.islower( 'a' ) ; // true
ascii.islower( 'à' ) ; // false
ascii.islower( 'A' ) ; // false
ascii.islower( 'À' ) ; // false
ascii.islower( '0' ) ; // false

ascii.isupper( 'a' ) ; // false
ascii.isupper( 'à' ) ; // false
ascii.isupper( 'A' ) ; // true
ascii.isupper( 'À' ) ; // false
ascii.isupper( '0' ) ; // false

ascii.isdigit( 'a' ) ; // false
ascii.isdigit( 'à' ) ; // false
ascii.isdigit( 'A' ) ; // false
ascii.isdigit( 'À' ) ; // false
ascii.isdigit( '0' ) ; // true
```
