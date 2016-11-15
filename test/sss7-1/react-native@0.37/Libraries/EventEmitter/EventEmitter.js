__d("react-native@0.37/Libraries/EventEmitter/EventEmitter.js", ["react-native@0.37/Libraries/EventEmitter/EventSubscriptionVendor.js", "fbjs@0.8/lib/emptyFunction.js", "fbjs@0.8/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/EventEmitter/EventEmitter.js
	function (__inner_require__, exports, module) {
		var EmitterSubscription = __inner_require__(1 /*Libraries/EventEmitter/EmitterSubscription.js*/);
		var EventSubscriptionVendor = require('react-native@0.37/Libraries/EventEmitter/EventSubscriptionVendor.js');
		var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');var EventEmitter = function () {

			function EventEmitter(subscriber) {
				babelHelpers.classCallCheck(this, EventEmitter);
				this._subscriber = subscriber || new EventSubscriptionVendor();
			}babelHelpers.createClass(EventEmitter, [{ key: 'addListener', value: function addListener(eventType, listener, context) {

					return this._subscriber.addSubscription(eventType, new EmitterSubscription(this, this._subscriber, listener, context));
				} }, { key: 'once', value: function once(eventType, listener, context) {
					var _this = this;
					return this.addListener(eventType, function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}
						_this.removeCurrentListener();
						listener.apply(context, args);
					});
				} }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
					this._subscriber.removeAllSubscriptions(eventType);
				} }, { key: 'removeCurrentListener', value: function removeCurrentListener() {
					invariant(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');

					this.removeSubscription(this._currentSubscription);
				} }, { key: 'removeSubscription', value: function removeSubscription(subscription) {
					invariant(subscription.emitter === this, 'Subscription does not belong to this emitter.');

					this._subscriber.removeSubscription(subscription);
				} }, { key: 'listeners', value: function listeners(eventType) {
					var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
					return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
						return subscription.listener;
					}) : [];
				} }, { key: 'emit', value: function emit(eventType) {
					var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
					if (subscriptions) {
						for (var i = 0, l = subscriptions.length; i < l; i++) {
							var subscription = subscriptions[i];

							if (subscription) {
								this._currentSubscription = subscription;
								subscription.listener.apply(subscription.context, Array.prototype.slice.call(arguments, 1));
							}
						}
						this._currentSubscription = null;
					}
				} }, { key: 'removeListener', value: function removeListener(eventType, listener) {
					var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
					if (subscriptions) {
						for (var i = 0, l = subscriptions.length; i < l; i++) {
							var subscription = subscriptions[i];

							if (subscription && subscription.listener === listener) {
								subscription.remove();
							}
						}
					}
				} }]);return EventEmitter;
		}();

		module.exports = EventEmitter;
	}, // Libraries/EventEmitter/EmitterSubscription.js
	function (__inner_require__, exports, module) {
		var EventSubscription = __inner_require__(2 /*Libraries/EventEmitter/EventSubscription.js*/);var EmitterSubscription = function (_EventSubscription) {
			babelHelpers.inherits(EmitterSubscription, _EventSubscription);

			function EmitterSubscription(emitter, subscriber, listener, context) {
				babelHelpers.classCallCheck(this, EmitterSubscription);var _this = babelHelpers.possibleConstructorReturn(this, (EmitterSubscription.__proto__ || Object.getPrototypeOf(EmitterSubscription)).call(this, subscriber));
				_this.emitter = emitter;
				_this.listener = listener;
				_this.context = context;return _this;
			}babelHelpers.createClass(EmitterSubscription, [{ key: 'remove', value: function remove() {
					this.emitter.removeSubscription(this);
				} }]);return EmitterSubscription;
		}(EventSubscription);

		module.exports = EmitterSubscription;
	}, // Libraries/EventEmitter/EventSubscription.js
	function (__inner_require__, exports, module) {
		var EventSubscription = function () {

			function EventSubscription(subscriber) {
				babelHelpers.classCallCheck(this, EventSubscription);
				this.subscriber = subscriber;
			}babelHelpers.createClass(EventSubscription, [{ key: 'remove', value: function remove() {
					this.subscriber.removeSubscription(this);
				} }]);return EventSubscription;
		}();

		module.exports = EventSubscription;
	}];
});