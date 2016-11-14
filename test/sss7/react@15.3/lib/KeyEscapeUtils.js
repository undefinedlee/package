loader.define("react@15.3/lib/KeyEscapeUtils.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/KeyEscapeUtils.js
		function(__inner_require__, exports, module){
			/**
			 * Escape and wrap key so it is safe to use as a reactid
			 *
			 * @param {string} key to be escaped.
			 * @return {string} the escaped key.
			 */
			
			function escape(key) {
			  var escapeRegex = /[=:]/g;
			  var escaperLookup = {
			    '=': '=0',
			    ':': '=2'
			  };
			  var escapedString = ('' + key).replace(escapeRegex, function (match) {
			    return escaperLookup[match];
			  });
			
			  return '$' + escapedString;
			}
			
			/**
			 * Unescape and unwrap key for human-readable display
			 *
			 * @param {string} key to unescape.
			 * @return {string} the unescaped key.
			 */
			function unescape(key) {
			  var unescapeRegex = /(=0|=2)/g;
			  var unescaperLookup = {
			    '=0': '=',
			    '=2': ':'
			  };
			  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
			
			  return ('' + keySubstring).replace(unescapeRegex, function (match) {
			    return unescaperLookup[match];
			  });
			}
			
			var KeyEscapeUtils = {
			  escape: escape,
			  unescape: unescape
			};
			
			module.exports = KeyEscapeUtils;
		}
	];
});