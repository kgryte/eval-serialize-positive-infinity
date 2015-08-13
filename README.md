Positive Infinity
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Serializes positive infinity for dynamic code evaluation.


## Installation

``` bash
$ npm install eval-serialize-positive-infinity
```


## Usage

``` javascript
var serialize = require( 'eval-serialize-positive-infinity' );
```

#### serialize()

Serializes positive `infinity` for dynamic code evaluation.

``` javascript
var val = Number.POSITIVE_INFINITY;

var str = serialize();
// returns 'Number.POSITIVE_INFINITY'

var v = eval( str );
// returns +infinity

var bool = ( val === v );
// returns true
```


## Examples

``` javascript
var serialize = require( 'eval-serialize-positive-infinity' );

/**
* Returns a function to create a filled array.
*/
function create() {
	var f = '';

	f += 'return function fill( len ) {';
	f += 'var arr = new Array( len );';
	f += 'for ( var i = 0; i < len; i++ ) {';
	f += 'arr[ i ] = ' + serialize() + ';';
	f += '}';
	f += 'return arr;';
	f += '}';
	return ( new Function( f ) )();
}

var fill = create();

console.log( fill( 10 ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eval-serialize-positive-infinity.svg
[npm-url]: https://npmjs.org/package/eval-serialize-positive-infinity

[travis-image]: http://img.shields.io/travis/kgryte/eval-serialize-positive-infinity/master.svg
[travis-url]: https://travis-ci.org/kgryte/eval-serialize-positive-infinity

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eval-serialize-positive-infinity/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eval-serialize-positive-infinity?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eval-serialize-positive-infinity.svg
[dependencies-url]: https://david-dm.org/kgryte/eval-serialize-positive-infinity

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eval-serialize-positive-infinity.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eval-serialize-positive-infinity

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eval-serialize-positive-infinity.svg
[github-issues-url]: https://github.com/kgryte/eval-serialize-positive-infinity/issues
