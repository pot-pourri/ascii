(function(exports, undefined){

	'use strict';


/* js/src/isdigit.js */

var isdigit = function ( c ) {

	return c >= "0" && c <= "9" ;

} ;

exports.isdigit = isdigit ;

/* js/src/islower.js */

var islower = function ( c ) {

	return c >= "a" && c <= "z" ;

} ;

exports.islower = islower ;

/* js/src/isupper.js */

var isupper = function ( c ) {

	return c >= "A" && c <= "Z" ;

} ;

exports.isupper = isupper ;

})(typeof exports === 'undefined' ? this['ascii'] = {} : exports);
