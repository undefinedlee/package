// react-native@0.21/Libraries/vendor/emitter/EventEmitter.js
loader.define("react-native@0.21", "Libraries/vendor/emitter/EventEmitter.js", "1i", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Libraries/vendor/emitter/EventEmitter.js
		function(__inner_require__, exports, module){
			var EmitterSubscription = __inner_require__(1 /*Libraries/vendor/emitter/EmitterSubscription.js*/);
			var ErrorUtils = require('react-native@0.21/Libraries/Utilities/ErrorUtils.js');
			var EventSubscriptionVendor = __inner_require__(3 /*Libraries/vendor/emitter/EventSubscriptionVendor.js*/);
			var emptyFunction = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/emptyFunction.js');
			var invariant = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js');var EventEmitter = function () {
			
			  function EventEmitter() {
			    babelHelpers.classCallCheck(this, EventEmitter);
			    this._subscriber = new EventSubscriptionVendor();
			  }babelHelpers.createClass(EventEmitter, [{ key: 'addListener', value: function addListener(eventType, listener, context) {
			      return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
			    } }, { key: 'once', value: function once(eventType, listener, context) {
			      var emitter = this;
			      return this.addListener(eventType, function () {
			        emitter.removeCurrentListener();
			        listener.apply(context, arguments);
			      });
			    } }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
			      this._subscriber.removeAllSubscriptions(eventType);
			    } }, { key: 'removeCurrentListener', value: function removeCurrentListener() {
			      invariant(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
			
			      this._subscriber.removeSubscription(this._currentSubscription);
			    } }, { key: 'listeners', value: function listeners(eventType) {
			      var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
			      return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
			        return subscription.listener;
			      }) : [];
			    } }, { key: 'emit', value: function emit(eventType) {
			      var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
			      if (subscriptions) {
			        var keys = Object.keys(subscriptions);
			        for (var ii = 0; ii < keys.length; ii++) {
			          var key = keys[ii];
			          var subscription = subscriptions[key];
			
			          if (subscription) {
			            this._currentSubscription = subscription;
			            subscription.listener.apply(subscription.context, Array.prototype.slice.call(arguments, 1));
			          }
			        }
			        this._currentSubscription = null;
			      }
			    } }]);return EventEmitter;
			}();
			
			module.exports = EventEmitter;
		},
		// Libraries/vendor/emitter/EmitterSubscription.js
		function(__inner_require__, exports, module){
			var EventSubscription = __inner_require__(2 /*Libraries/vendor/emitter/EventSubscription.js*/);var EmitterSubscription = function (_EventSubscription) {
			  babelHelpers.inherits(EmitterSubscription, _EventSubscription);
			
			  function EmitterSubscription(subscriber, listener, context) {
			    babelHelpers.classCallCheck(this, EmitterSubscription);var _this = babelHelpers.possibleConstructorReturn(this, (EmitterSubscription.__proto__ || Object.getPrototypeOf(EmitterSubscription)).call(this, subscriber));
			    _this.listener = listener;
			    _this.context = context;return _this;
			  }return EmitterSubscription;
			}(EventSubscription);
			
			module.exports = EmitterSubscription;
		},
		// Libraries/vendor/emitter/EventSubscription.js
		function(__inner_require__, exports, module){
			var EventSubscription = function () {
			
			  function EventSubscription(subscriber) {
			    babelHelpers.classCallCheck(this, EventSubscription);
			    this.subscriber = subscriber;
			  }babelHelpers.createClass(EventSubscription, [{ key: 'remove', value: function remove() {
			      this.subscriber.removeSubscription(this);
			    } }]);return EventSubscription;
			}();
			
			module.exports = EventSubscription;
		},
		// Libraries/vendor/emitter/EventSubscriptionVendor.js
		function(__inner_require__, exports, module){
			var invariant = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js');var EventSubscriptionVendor = function () {
			
			  function EventSubscriptionVendor() {
			    babelHelpers.classCallCheck(this, EventSubscriptionVendor);
			    this._subscriptionsForType = {};
			    this._currentSubscription = null;
			  }babelHelpers.createClass(EventSubscriptionVendor, [{ key: 'addSubscription', value: function addSubscription(eventType, subscription) {
			      invariant(subscription.subscriber === this, 'The subscriber of the subscription is incorrectly set.');
			      if (!this._subscriptionsForType[eventType]) {
			        this._subscriptionsForType[eventType] = [];
			      }
			      var key = this._subscriptionsForType[eventType].length;
			      this._subscriptionsForType[eventType].push(subscription);
			      subscription.eventType = eventType;
			      subscription.key = key;
			      return subscription;
			    } }, { key: 'removeAllSubscriptions', value: function removeAllSubscriptions(eventType) {
			      if (eventType === undefined) {
			        this._subscriptionsForType = {};
			      } else {
			        delete this._subscriptionsForType[eventType];
			      }
			    } }, { key: 'removeSubscription', value: function removeSubscription(subscription) {
			      var eventType = subscription.eventType;
			      var key = subscription.key;
			
			      var subscriptionsForType = this._subscriptionsForType[eventType];
			      if (subscriptionsForType) {
			        delete subscriptionsForType[key];
			      }
			    } }, { key: 'getSubscriptionsForType', value: function getSubscriptionsForType(eventType) {
			      return this._subscriptionsForType[eventType];
			    } }]);return EventSubscriptionVendor;
			}();
			
			module.exports = EventSubscriptionVendor;
		}
	];
});