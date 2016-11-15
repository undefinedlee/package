__d("fbjs@0.8/lib/createNodesFromMarkup.js", ["fbjs@0.8/lib/ExecutionEnvironment.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/createNodesFromMarkup.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * @typechecks
			 */
			
			/*eslint-disable fb-www/unsafe-html*/
			
			var ExecutionEnvironment = require('fbjs@0.8/lib/ExecutionEnvironment.js');
			
			var createArrayFromMixed = __inner_require__(1 /*lib/createArrayFromMixed.js*/);
			var getMarkupWrap = __inner_require__(2 /*lib/getMarkupWrap.js*/);
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Dummy container used to render all markup.
			 */
			var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
			
			/**
			 * Pattern used by `getNodeName`.
			 */
			var nodeNamePattern = /^\s*<(\w+)/;
			
			/**
			 * Extracts the `nodeName` of the first element in a string of markup.
			 *
			 * @param {string} markup String of markup.
			 * @return {?string} Node name of the supplied markup.
			 */
			function getNodeName(markup) {
			  var nodeNameMatch = markup.match(nodeNamePattern);
			  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
			}
			
			/**
			 * Creates an array containing the nodes rendered from the supplied markup. The
			 * optionally supplied `handleScript` function will be invoked once for each
			 * <script> element that is rendered. If no `handleScript` function is supplied,
			 * an exception is thrown if any <script> elements are rendered.
			 *
			 * @param {string} markup A string of valid HTML markup.
			 * @param {?function} handleScript Invoked once for each rendered <script>.
			 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
			 */
			function createNodesFromMarkup(markup, handleScript) {
			  var node = dummyNode;
			  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
			  var nodeName = getNodeName(markup);
			
			  var wrap = nodeName && getMarkupWrap(nodeName);
			  if (wrap) {
			    node.innerHTML = wrap[1] + markup + wrap[2];
			
			    var wrapDepth = wrap[0];
			    while (wrapDepth--) {
			      node = node.lastChild;
			    }
			  } else {
			    node.innerHTML = markup;
			  }
			
			  var scripts = node.getElementsByTagName('script');
			  if (scripts.length) {
			    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
			    createArrayFromMixed(scripts).forEach(handleScript);
			  }
			
			  var nodes = Array.from(node.childNodes);
			  while (node.lastChild) {
			    node.removeChild(node.lastChild);
			  }
			  return nodes;
			}
			
			module.exports = createNodesFromMarkup;
		},		// lib/createArrayFromMixed.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * @typechecks
			 */
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Convert array-like objects to arrays.
			 *
			 * This API assumes the caller knows the contents of the data type. For less
			 * well defined inputs use createArrayFromMixed.
			 *
			 * @param {object|function|filelist} obj
			 * @return {array}
			 */
			function toArray(obj) {
			  var length = obj.length;
			
			  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
			  // in old versions of Safari).
			  !(!Array.isArray(obj) && ((typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;
			
			  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;
			
			  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;
			
			  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;
			
			  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
			  // without method will throw during the slice call and skip straight to the
			  // fallback.
			  if (obj.hasOwnProperty) {
			    try {
			      return Array.prototype.slice.call(obj);
			    } catch (e) {
			      // IE < 9 does not support Array#slice on collections objects
			    }
			  }
			
			  // Fall back to copying key by key. This assumes all keys have a value,
			  // so will not preserve sparsely populated inputs.
			  var ret = Array(length);
			  for (var ii = 0; ii < length; ii++) {
			    ret[ii] = obj[ii];
			  }
			  return ret;
			}
			
			/**
			 * Perform a heuristic test to determine if an object is "array-like".
			 *
			 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
			 *   Joshu replied: "Mu."
			 *
			 * This function determines if its argument has "array nature": it returns
			 * true if the argument is an actual array, an `arguments' object, or an
			 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
			 *
			 * It will return false for other array-like objects like Filelist.
			 *
			 * @param {*} obj
			 * @return {boolean}
			 */
			function hasArrayNature(obj) {
			  return (
			    // not null/false
			    !!obj && (
			    // arrays are objects, NodeLists are functions in Safari
			    (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) == 'object' || typeof obj == 'function') &&
			    // quacks like an array
			    'length' in obj &&
			    // not window
			    !('setInterval' in obj) &&
			    // no DOM node should be considered an array-like
			    // a 'select' element has 'length' and 'item' properties on IE8
			    typeof obj.nodeType != 'number' && (
			    // a real array
			    Array.isArray(obj) ||
			    // arguments
			    'callee' in obj ||
			    // HTMLCollection/NodeList
			    'item' in obj)
			  );
			}
			
			/**
			 * Ensure that the argument is an array by wrapping it in an array if it is not.
			 * Creates a copy of the argument if it is already an array.
			 *
			 * This is mostly useful idiomatically:
			 *
			 *   var createArrayFromMixed = require('createArrayFromMixed');
			 *
			 *   function takesOneOrMoreThings(things) {
			 *     things = createArrayFromMixed(things);
			 *     ...
			 *   }
			 *
			 * This allows you to treat `things' as an array, but accept scalars in the API.
			 *
			 * If you need to convert an array-like object, like `arguments`, into an array
			 * use toArray instead.
			 *
			 * @param {*} obj
			 * @return {array}
			 */
			function createArrayFromMixed(obj) {
			  if (!hasArrayNature(obj)) {
			    return [obj];
			  } else if (Array.isArray(obj)) {
			    return obj.slice();
			  } else {
			    return toArray(obj);
			  }
			}
			
			module.exports = createArrayFromMixed;
		},		// lib/getMarkupWrap.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 */
			
			/*eslint-disable fb-www/unsafe-html */
			
			var ExecutionEnvironment = require('fbjs@0.8/lib/ExecutionEnvironment.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Dummy container used to detect which wraps are necessary.
			 */
			var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
			
			/**
			 * Some browsers cannot use `innerHTML` to render certain elements standalone,
			 * so we wrap them, render the wrapped nodes, then extract the desired node.
			 *
			 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
			 */
			
			var shouldWrap = {};
			
			var selectWrap = [1, '<select multiple="true">', '</select>'];
			var tableWrap = [1, '<table>', '</table>'];
			var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
			
			var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
			
			var markupWrap = {
			  '*': [1, '?<div>', '</div>'],
			
			  'area': [1, '<map>', '</map>'],
			  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
			  'legend': [1, '<fieldset>', '</fieldset>'],
			  'param': [1, '<object>', '</object>'],
			  'tr': [2, '<table><tbody>', '</tbody></table>'],
			
			  'optgroup': selectWrap,
			  'option': selectWrap,
			
			  'caption': tableWrap,
			  'colgroup': tableWrap,
			  'tbody': tableWrap,
			  'tfoot': tableWrap,
			  'thead': tableWrap,
			
			  'td': trWrap,
			  'th': trWrap
			};
			
			// Initialize the SVG elements since we know they'll always need to be wrapped
			// consistently. If they are created inside a <div> they will be initialized in
			// the wrong namespace (and will not display).
			var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
			svgElements.forEach(function (nodeName) {
			  markupWrap[nodeName] = svgWrap;
			  shouldWrap[nodeName] = true;
			});
			
			/**
			 * Gets the markup wrap configuration for the supplied `nodeName`.
			 *
			 * NOTE: This lazily detects which wraps are necessary for the current browser.
			 *
			 * @param {string} nodeName Lowercase `nodeName`.
			 * @return {?array} Markup wrap configuration, if applicable.
			 */
			function getMarkupWrap(nodeName) {
			  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
			  if (!markupWrap.hasOwnProperty(nodeName)) {
			    nodeName = '*';
			  }
			  if (!shouldWrap.hasOwnProperty(nodeName)) {
			    if (nodeName === '*') {
			      dummyNode.innerHTML = '<link />';
			    } else {
			      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
			    }
			    shouldWrap[nodeName] = !dummyNode.firstChild;
			  }
			  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
			}
			
			module.exports = getMarkupWrap;
		}
	];
});