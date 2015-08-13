/* jshint evil:true */
'use strict';

var serialize = require( './../lib' );

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
