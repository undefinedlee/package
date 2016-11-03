// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceHandles.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceHandles.js", "b", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceHandles.js
		function(__inner_require__, exports, module){
			var ReactRootIndex = __inner_require__(1 /*Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactRootIndex.js*/);
			
			var invariant = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js');
			
			var SEPARATOR = '.';
			var SEPARATOR_LENGTH = SEPARATOR.length;
			
			var MAX_TREE_DEPTH = 10000;
			
			function getReactRootIDString(index) {
			  return SEPARATOR + index.toString(36);
			}
			
			function isBoundary(id, index) {
			  return id.charAt(index) === SEPARATOR || index === id.length;
			}
			
			function isValidID(id) {
			  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
			}
			
			function isAncestorIDOf(ancestorID, descendantID) {
			  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
			}
			
			function getParentID(id) {
			  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
			}
			
			function getNextDescendantID(ancestorID, destinationID) {
			  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
			  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
			  if (ancestorID === destinationID) {
			    return ancestorID;
			  }
			
			  var start = ancestorID.length + SEPARATOR_LENGTH;
			  var i;
			  for (i = start; i < destinationID.length; i++) {
			    if (isBoundary(destinationID, i)) {
			      break;
			    }
			  }
			  return destinationID.substr(0, i);
			}
			
			function getFirstCommonAncestorID(oneID, twoID) {
			  var minLength = Math.min(oneID.length, twoID.length);
			  if (minLength === 0) {
			    return '';
			  }
			  var lastCommonMarkerIndex = 0;
			
			  for (var i = 0; i <= minLength; i++) {
			    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
			      lastCommonMarkerIndex = i;
			    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
			      break;
			    }
			  }
			  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
			  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
			  return longestCommonID;
			}
			
			function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
			  start = start || '';
			  stop = stop || '';
			  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
			  var traverseUp = isAncestorIDOf(stop, start);
			  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
			
			  var depth = 0;
			  var traverse = traverseUp ? getParentID : getNextDescendantID;
			  for (var id = start;; id = traverse(id, stop)) {
			    var ret;
			    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
			      ret = cb(id, traverseUp, arg);
			    }
			    if (ret === false || id === stop) {
			
			      break;
			    }
			    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
			  }
			}
			
			var ReactInstanceHandles = {
			
			  createReactRootID: function createReactRootID() {
			    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
			  },
			
			  createReactID: function createReactID(rootID, name) {
			    return rootID + name;
			  },
			
			  getReactRootIDFromNodeID: function getReactRootIDFromNodeID(id) {
			    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
			      var index = id.indexOf(SEPARATOR, 1);
			      return index > -1 ? id.substr(0, index) : id;
			    }
			    return null;
			  },
			
			  traverseEnterLeave: function traverseEnterLeave(leaveID, enterID, cb, upArg, downArg) {
			    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
			    if (ancestorID !== leaveID) {
			      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
			    }
			    if (ancestorID !== enterID) {
			      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
			    }
			  },
			
			  traverseTwoPhase: function traverseTwoPhase(targetID, cb, arg) {
			    if (targetID) {
			      traverseParentPath('', targetID, cb, arg, true, false);
			      traverseParentPath(targetID, '', cb, arg, false, true);
			    }
			  },
			
			  traverseTwoPhaseSkipTarget: function traverseTwoPhaseSkipTarget(targetID, cb, arg) {
			    if (targetID) {
			      traverseParentPath('', targetID, cb, arg, true, true);
			      traverseParentPath(targetID, '', cb, arg, true, true);
			    }
			  },
			
			  traverseAncestors: function traverseAncestors(targetID, cb, arg) {
			    traverseParentPath('', targetID, cb, arg, true, false);
			  },
			
			  getFirstCommonAncestorID: getFirstCommonAncestorID,
			
			  _getNextDescendantID: getNextDescendantID,
			
			  isAncestorIDOf: isAncestorIDOf,
			
			  SEPARATOR: SEPARATOR };
			
			module.exports = ReactInstanceHandles;
		},
		// Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactRootIndex.js
		function(__inner_require__, exports, module){
			var ReactRootIndexInjection = {
			
			  injectCreateReactRootIndex: function injectCreateReactRootIndex(_createReactRootIndex) {
			    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
			  } };
			
			var ReactRootIndex = {
			  createReactRootIndex: null,
			  injection: ReactRootIndexInjection };
			
			module.exports = ReactRootIndex;
		}
	];
});