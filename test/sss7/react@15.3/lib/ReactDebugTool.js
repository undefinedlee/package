__d("react@15.3/lib/ReactDebugTool.js", ["react@15.3/lib/ReactComponentTreeHook.js", "fbjs@0.8/lib/ExecutionEnvironment.js", "fbjs@0.8/lib/performanceNow.js", "fbjs@0.8/lib/warning.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactDebugTool.js
		function(__inner_require__, exports, module){
			var ReactInvalidSetStateWarningHook = __inner_require__(1 /*lib/ReactInvalidSetStateWarningHook.js*/);
			var ReactHostOperationHistoryHook = __inner_require__(2 /*lib/ReactHostOperationHistoryHook.js*/);
			var ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			var ReactChildrenMutationWarningHook = __inner_require__(3 /*lib/ReactChildrenMutationWarningHook.js*/);
			var ExecutionEnvironment = require('fbjs@0.8/lib/ExecutionEnvironment.js');
			
			var performanceNow = require('fbjs@0.8/lib/performanceNow.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var hooks = [];
			var didHookThrowForEvent = {};
			
			function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
			  try {
			    fn.call(context, arg1, arg2, arg3, arg4, arg5);
			  } catch (e) {
			    process.env.NODE_ENV !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
			    didHookThrowForEvent[event] = true;
			  }
			}
			
			function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
			  for (var i = 0; i < hooks.length; i++) {
			    var hook = hooks[i];
			    var fn = hook[event];
			    if (fn) {
			      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
			    }
			  }
			}
			
			var _isProfiling = false;
			var flushHistory = [];
			var lifeCycleTimerStack = [];
			var currentFlushNesting = 0;
			var currentFlushMeasurements = null;
			var currentFlushStartTime = null;
			var currentTimerDebugID = null;
			var currentTimerStartTime = null;
			var currentTimerNestedFlushDuration = null;
			var currentTimerType = null;
			
			var lifeCycleTimerHasWarned = false;
			
			function clearHistory() {
			  ReactComponentTreeHook.purgeUnmountedComponents();
			  ReactHostOperationHistoryHook.clearHistory();
			}
			
			function getTreeSnapshot(registeredIDs) {
			  return registeredIDs.reduce(function (tree, id) {
			    var ownerID = ReactComponentTreeHook.getOwnerID(id);
			    var parentID = ReactComponentTreeHook.getParentID(id);
			    tree[id] = {
			      displayName: ReactComponentTreeHook.getDisplayName(id),
			      text: ReactComponentTreeHook.getText(id),
			      updateCount: ReactComponentTreeHook.getUpdateCount(id),
			      childIDs: ReactComponentTreeHook.getChildIDs(id),
			      // Text nodes don't have owners but this is close enough.
			      ownerID: ownerID || ReactComponentTreeHook.getOwnerID(parentID),
			      parentID: parentID
			    };
			    return tree;
			  }, {});
			}
			
			function resetMeasurements() {
			  var previousStartTime = currentFlushStartTime;
			  var previousMeasurements = currentFlushMeasurements || [];
			  var previousOperations = ReactHostOperationHistoryHook.getHistory();
			
			  if (currentFlushNesting === 0) {
			    currentFlushStartTime = null;
			    currentFlushMeasurements = null;
			    clearHistory();
			    return;
			  }
			
			  if (previousMeasurements.length || previousOperations.length) {
			    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
			    flushHistory.push({
			      duration: performanceNow() - previousStartTime,
			      measurements: previousMeasurements || [],
			      operations: previousOperations || [],
			      treeSnapshot: getTreeSnapshot(registeredIDs)
			    });
			  }
			
			  clearHistory();
			  currentFlushStartTime = performanceNow();
			  currentFlushMeasurements = [];
			}
			
			function checkDebugID(debugID) {
			  var allowRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
			
			  if (allowRoot && debugID === 0) {
			    return;
			  }
			  if (!debugID) {
			    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
			  }
			}
			
			function beginLifeCycleTimer(debugID, timerType) {
			  if (currentFlushNesting === 0) {
			    return;
			  }
			  if (currentTimerType && !lifeCycleTimerHasWarned) {
			    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
			    lifeCycleTimerHasWarned = true;
			  }
			  currentTimerStartTime = performanceNow();
			  currentTimerNestedFlushDuration = 0;
			  currentTimerDebugID = debugID;
			  currentTimerType = timerType;
			}
			
			function endLifeCycleTimer(debugID, timerType) {
			  if (currentFlushNesting === 0) {
			    return;
			  }
			  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
			    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
			    lifeCycleTimerHasWarned = true;
			  }
			  if (_isProfiling) {
			    currentFlushMeasurements.push({
			      timerType: timerType,
			      instanceID: debugID,
			      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
			    });
			  }
			  currentTimerStartTime = null;
			  currentTimerNestedFlushDuration = null;
			  currentTimerDebugID = null;
			  currentTimerType = null;
			}
			
			function pauseCurrentLifeCycleTimer() {
			  var currentTimer = {
			    startTime: currentTimerStartTime,
			    nestedFlushStartTime: performanceNow(),
			    debugID: currentTimerDebugID,
			    timerType: currentTimerType
			  };
			  lifeCycleTimerStack.push(currentTimer);
			  currentTimerStartTime = null;
			  currentTimerNestedFlushDuration = null;
			  currentTimerDebugID = null;
			  currentTimerType = null;
			}
			
			function resumeCurrentLifeCycleTimer() {
			  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop();
			
			  var startTime = _lifeCycleTimerStack$.startTime;
			  var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;
			  var debugID = _lifeCycleTimerStack$.debugID;
			  var timerType = _lifeCycleTimerStack$.timerType;
			
			  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
			  currentTimerStartTime = startTime;
			  currentTimerNestedFlushDuration += nestedFlushDuration;
			  currentTimerDebugID = debugID;
			  currentTimerType = timerType;
			}
			
			var ReactDebugTool = {
			  addHook: function addHook(hook) {
			    hooks.push(hook);
			  },
			  removeHook: function removeHook(hook) {
			    for (var i = 0; i < hooks.length; i++) {
			      if (hooks[i] === hook) {
			        hooks.splice(i, 1);
			        i--;
			      }
			    }
			  },
			  isProfiling: function isProfiling() {
			    return _isProfiling;
			  },
			  beginProfiling: function beginProfiling() {
			    if (_isProfiling) {
			      return;
			    }
			
			    _isProfiling = true;
			    flushHistory.length = 0;
			    resetMeasurements();
			    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
			  },
			  endProfiling: function endProfiling() {
			    if (!_isProfiling) {
			      return;
			    }
			
			    _isProfiling = false;
			    resetMeasurements();
			    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
			  },
			  getFlushHistory: function getFlushHistory() {
			    return flushHistory;
			  },
			  onBeginFlush: function onBeginFlush() {
			    currentFlushNesting++;
			    resetMeasurements();
			    pauseCurrentLifeCycleTimer();
			    emitEvent('onBeginFlush');
			  },
			  onEndFlush: function onEndFlush() {
			    resetMeasurements();
			    currentFlushNesting--;
			    resumeCurrentLifeCycleTimer();
			    emitEvent('onEndFlush');
			  },
			  onBeginLifeCycleTimer: function onBeginLifeCycleTimer(debugID, timerType) {
			    checkDebugID(debugID);
			    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
			    beginLifeCycleTimer(debugID, timerType);
			  },
			  onEndLifeCycleTimer: function onEndLifeCycleTimer(debugID, timerType) {
			    checkDebugID(debugID);
			    endLifeCycleTimer(debugID, timerType);
			    emitEvent('onEndLifeCycleTimer', debugID, timerType);
			  },
			  onBeginProcessingChildContext: function onBeginProcessingChildContext() {
			    emitEvent('onBeginProcessingChildContext');
			  },
			  onEndProcessingChildContext: function onEndProcessingChildContext() {
			    emitEvent('onEndProcessingChildContext');
			  },
			  onHostOperation: function onHostOperation(debugID, type, payload) {
			    checkDebugID(debugID);
			    emitEvent('onHostOperation', debugID, type, payload);
			  },
			  onSetState: function onSetState() {
			    emitEvent('onSetState');
			  },
			  onSetChildren: function onSetChildren(debugID, childDebugIDs) {
			    checkDebugID(debugID);
			    childDebugIDs.forEach(checkDebugID);
			    emitEvent('onSetChildren', debugID, childDebugIDs);
			  },
			  onBeforeMountComponent: function onBeforeMountComponent(debugID, element, parentDebugID) {
			    checkDebugID(debugID);
			    checkDebugID(parentDebugID, true);
			    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
			  },
			  onMountComponent: function onMountComponent(debugID) {
			    checkDebugID(debugID);
			    emitEvent('onMountComponent', debugID);
			  },
			  onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
			    checkDebugID(debugID);
			    emitEvent('onBeforeUpdateComponent', debugID, element);
			  },
			  onUpdateComponent: function onUpdateComponent(debugID) {
			    checkDebugID(debugID);
			    emitEvent('onUpdateComponent', debugID);
			  },
			  onBeforeUnmountComponent: function onBeforeUnmountComponent(debugID) {
			    checkDebugID(debugID);
			    emitEvent('onBeforeUnmountComponent', debugID);
			  },
			  onUnmountComponent: function onUnmountComponent(debugID) {
			    checkDebugID(debugID);
			    emitEvent('onUnmountComponent', debugID);
			  },
			  onTestEvent: function onTestEvent() {
			    emitEvent('onTestEvent');
			  }
			};
			
			// TODO remove these when RN/www gets updated
			ReactDebugTool.addDevtool = ReactDebugTool.addHook;
			ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;
			
			ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
			ReactDebugTool.addHook(ReactComponentTreeHook);
			ReactDebugTool.addHook(ReactChildrenMutationWarningHook);
			var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
			if (/[?&]react_perf\b/.test(url)) {
			  ReactDebugTool.beginProfiling();
			}
			
			module.exports = ReactDebugTool;
		},		// lib/ReactInvalidSetStateWarningHook.js
		function(__inner_require__, exports, module){
			var warning = require('fbjs@0.8/lib/warning.js');
			
			if (process.env.NODE_ENV !== 'production') {
			  var processingChildContext = false;
			
			  var warnInvalidSetState = function warnInvalidSetState() {
			    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
			  };
			}
			
			var ReactInvalidSetStateWarningHook = {
			  onBeginProcessingChildContext: function onBeginProcessingChildContext() {
			    processingChildContext = true;
			  },
			  onEndProcessingChildContext: function onEndProcessingChildContext() {
			    processingChildContext = false;
			  },
			  onSetState: function onSetState() {
			    warnInvalidSetState();
			  }
			};
			
			module.exports = ReactInvalidSetStateWarningHook;
		},		// lib/ReactHostOperationHistoryHook.js
		function(__inner_require__, exports, module){
			var history = [];
			
			var ReactHostOperationHistoryHook = {
			  onHostOperation: function onHostOperation(debugID, type, payload) {
			    history.push({
			      instanceID: debugID,
			      type: type,
			      payload: payload
			    });
			  },
			  clearHistory: function clearHistory() {
			    if (ReactHostOperationHistoryHook._preventClearing) {
			      // Should only be used for tests.
			      return;
			    }
			
			    history = [];
			  },
			  getHistory: function getHistory() {
			    return history;
			  }
			};
			
			module.exports = ReactHostOperationHistoryHook;
		},		// lib/ReactChildrenMutationWarningHook.js
		function(__inner_require__, exports, module){
			var ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			
			var warning = require('fbjs@0.8/lib/warning.js');
			
			function handleElement(debugID, element) {
			  if (element == null) {
			    return;
			  }
			  if (element._shadowChildren === undefined) {
			    return;
			  }
			  if (element._shadowChildren === element.props.children) {
			    return;
			  }
			  var isMutated = false;
			  if (Array.isArray(element._shadowChildren)) {
			    if (element._shadowChildren.length === element.props.children.length) {
			      for (var i = 0; i < element._shadowChildren.length; i++) {
			        if (element._shadowChildren[i] !== element.props.children[i]) {
			          isMutated = true;
			        }
			      }
			    } else {
			      isMutated = true;
			    }
			  }
			  if (!Array.isArray(element._shadowChildren) || isMutated) {
			    process.env.NODE_ENV !== 'production' ? warning(false, 'Component\'s children should not be mutated.%s', ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
			  }
			}
			
			var ReactChildrenMutationWarningHook = {
			  onMountComponent: function onMountComponent(debugID) {
			    handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
			  },
			  onUpdateComponent: function onUpdateComponent(debugID) {
			    handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
			  }
			};
			
			module.exports = ReactChildrenMutationWarningHook;
		}
	];
});