loader.define("react@15.3/lib/EventPluginHub.js", ["react@15.3/lib/reactProdInvariant.js", "react@15.3/lib/EventPluginRegistry.js", "react@15.3/lib/EventPluginUtils.js", "react@15.3/lib/ReactErrorUtils.js", "react@15.3/lib/accumulateInto.js", "react@15.3/lib/forEachAccumulated.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/EventPluginHub.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var EventPluginRegistry = require('react@15.3/lib/EventPluginRegistry.js');
			var EventPluginUtils = require('react@15.3/lib/EventPluginUtils.js');
			var ReactErrorUtils = require('react@15.3/lib/ReactErrorUtils.js');
			
			var accumulateInto = require('react@15.3/lib/accumulateInto.js');
			var forEachAccumulated = require('react@15.3/lib/forEachAccumulated.js');
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Internal store for event listeners
			 */
			var listenerBank = {};
			
			/**
			 * Internal queue of events that have accumulated their dispatches and are
			 * waiting to have their dispatches executed.
			 */
			var eventQueue = null;
			
			/**
			 * Dispatches an event and releases it back into the pool, unless persistent.
			 *
			 * @param {?object} event Synthetic event to be dispatched.
			 * @param {boolean} simulated If the event is simulated (changes exn behavior)
			 * @private
			 */
			var executeDispatchesAndRelease = function executeDispatchesAndRelease(event, simulated) {
			  if (event) {
			    EventPluginUtils.executeDispatchesInOrder(event, simulated);
			
			    if (!event.isPersistent()) {
			      event.constructor.release(event);
			    }
			  }
			};
			var executeDispatchesAndReleaseSimulated = function executeDispatchesAndReleaseSimulated(e) {
			  return executeDispatchesAndRelease(e, true);
			};
			var executeDispatchesAndReleaseTopLevel = function executeDispatchesAndReleaseTopLevel(e) {
			  return executeDispatchesAndRelease(e, false);
			};
			
			var getDictionaryKey = function getDictionaryKey(inst) {
			  // Prevents V8 performance issue:
			  // https://github.com/facebook/react/pull/7232
			  return '.' + inst._rootNodeID;
			};
			
			/**
			 * This is a unified interface for event plugins to be installed and configured.
			 *
			 * Event plugins can implement the following properties:
			 *
			 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
			 *     Required. When a top-level event is fired, this method is expected to
			 *     extract synthetic events that will in turn be queued and dispatched.
			 *
			 *   `eventTypes` {object}
			 *     Optional, plugins that fire events must publish a mapping of registration
			 *     names that are used to register listeners. Values of this mapping must
			 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
			 *
			 *   `executeDispatch` {function(object, function, string)}
			 *     Optional, allows plugins to override how an event gets dispatched. By
			 *     default, the listener is simply invoked.
			 *
			 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
			 *
			 * @public
			 */
			var EventPluginHub = {
			
			  /**
			   * Methods for injecting dependencies.
			   */
			  injection: {
			
			    /**
			     * @param {array} InjectedEventPluginOrder
			     * @public
			     */
			    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
			
			    /**
			     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
			     */
			    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
			
			  },
			
			  /**
			   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
			   *
			   * @param {object} inst The instance, which is the source of events.
			   * @param {string} registrationName Name of listener (e.g. `onClick`).
			   * @param {function} listener The callback to store.
			   */
			  putListener: function putListener(inst, registrationName, listener) {
			    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener === 'undefined' ? 'undefined' : babelHelpers.typeof(listener)) : _prodInvariant('94', registrationName, typeof listener === 'undefined' ? 'undefined' : babelHelpers.typeof(listener)) : void 0;
			
			    var key = getDictionaryKey(inst);
			    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
			    bankForRegistrationName[key] = listener;
			
			    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
			    if (PluginModule && PluginModule.didPutListener) {
			      PluginModule.didPutListener(inst, registrationName, listener);
			    }
			  },
			
			  /**
			   * @param {object} inst The instance, which is the source of events.
			   * @param {string} registrationName Name of listener (e.g. `onClick`).
			   * @return {?function} The stored callback.
			   */
			  getListener: function getListener(inst, registrationName) {
			    var bankForRegistrationName = listenerBank[registrationName];
			    var key = getDictionaryKey(inst);
			    return bankForRegistrationName && bankForRegistrationName[key];
			  },
			
			  /**
			   * Deletes a listener from the registration bank.
			   *
			   * @param {object} inst The instance, which is the source of events.
			   * @param {string} registrationName Name of listener (e.g. `onClick`).
			   */
			  deleteListener: function deleteListener(inst, registrationName) {
			    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
			    if (PluginModule && PluginModule.willDeleteListener) {
			      PluginModule.willDeleteListener(inst, registrationName);
			    }
			
			    var bankForRegistrationName = listenerBank[registrationName];
			    // TODO: This should never be null -- when is it?
			    if (bankForRegistrationName) {
			      var key = getDictionaryKey(inst);
			      delete bankForRegistrationName[key];
			    }
			  },
			
			  /**
			   * Deletes all listeners for the DOM element with the supplied ID.
			   *
			   * @param {object} inst The instance, which is the source of events.
			   */
			  deleteAllListeners: function deleteAllListeners(inst) {
			    var key = getDictionaryKey(inst);
			    for (var registrationName in listenerBank) {
			      if (!listenerBank.hasOwnProperty(registrationName)) {
			        continue;
			      }
			
			      if (!listenerBank[registrationName][key]) {
			        continue;
			      }
			
			      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
			      if (PluginModule && PluginModule.willDeleteListener) {
			        PluginModule.willDeleteListener(inst, registrationName);
			      }
			
			      delete listenerBank[registrationName][key];
			    }
			  },
			
			  /**
			   * Allows registered plugins an opportunity to extract events from top-level
			   * native browser events.
			   *
			   * @return {*} An accumulation of synthetic events.
			   * @internal
			   */
			  extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			    var events;
			    var plugins = EventPluginRegistry.plugins;
			    for (var i = 0; i < plugins.length; i++) {
			      // Not every plugin in the ordering may be loaded at runtime.
			      var possiblePlugin = plugins[i];
			      if (possiblePlugin) {
			        var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
			        if (extractedEvents) {
			          events = accumulateInto(events, extractedEvents);
			        }
			      }
			    }
			    return events;
			  },
			
			  /**
			   * Enqueues a synthetic event that should be dispatched when
			   * `processEventQueue` is invoked.
			   *
			   * @param {*} events An accumulation of synthetic events.
			   * @internal
			   */
			  enqueueEvents: function enqueueEvents(events) {
			    if (events) {
			      eventQueue = accumulateInto(eventQueue, events);
			    }
			  },
			
			  /**
			   * Dispatches all synthetic events on the event queue.
			   *
			   * @internal
			   */
			  processEventQueue: function processEventQueue(simulated) {
			    // Set `eventQueue` to null before processing it so that we can tell if more
			    // events get enqueued while processing.
			    var processingEventQueue = eventQueue;
			    eventQueue = null;
			    if (simulated) {
			      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
			    } else {
			      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
			    }
			    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : _prodInvariant('95') : void 0;
			    // This would be a good time to rethrow if any of the event handlers threw.
			    ReactErrorUtils.rethrowCaughtError();
			  },
			
			  /**
			   * These are needed for tests only. Do not use!
			   */
			  __purge: function __purge() {
			    listenerBank = {};
			  },
			
			  __getListenerBank: function __getListenerBank() {
			    return listenerBank;
			  }
			
			};
			
			module.exports = EventPluginHub;
		}
	];
});