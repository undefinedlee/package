loader.define("react-native@0.37/Libraries/Performance/Systrace.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Performance/Systrace.js
	function (__inner_require__, exports, module) {
		var TRACE_TAG_REACT_APPS = 1 << 17;
		var TRACE_TAG_JSC_CALLS = 1 << 27;

		var _enabled = false;
		var _asyncCookie = 0;

		var ReactSystraceDevtool = null;

		var Systrace = {
			setEnabled: function setEnabled(enabled) {
				if (_enabled !== enabled) {
					_enabled = enabled;
				}
			},

			beginEvent: function beginEvent(profileName, args) {
				if (_enabled) {
					profileName = typeof profileName === 'function' ? profileName() : profileName;
					global.nativeTraceBeginSection(TRACE_TAG_REACT_APPS, profileName, args);
				}
			},

			endEvent: function endEvent() {
				if (_enabled) {
					global.nativeTraceEndSection(TRACE_TAG_REACT_APPS);
				}
			},

			beginAsyncEvent: function beginAsyncEvent(profileName) {
				var cookie = _asyncCookie;
				if (_enabled) {
					_asyncCookie++;
					profileName = typeof profileName === 'function' ? profileName() : profileName;
					global.nativeTraceBeginAsyncSection(TRACE_TAG_REACT_APPS, profileName, cookie, 0);
				}
				return cookie;
			},

			endAsyncEvent: function endAsyncEvent(profileName, cookie) {
				if (_enabled) {
					profileName = typeof profileName === 'function' ? profileName() : profileName;
					global.nativeTraceEndAsyncSection(TRACE_TAG_REACT_APPS, profileName, cookie, 0);
				}
			},

			counterEvent: function counterEvent(profileName, value) {
				if (_enabled) {
					profileName = typeof profileName === 'function' ? profileName() : profileName;
					global.nativeTraceCounter && global.nativeTraceCounter(TRACE_TAG_REACT_APPS, profileName, value);
				}
			},

			attachToRelayProfiler: function attachToRelayProfiler(relayProfiler) {
				relayProfiler.attachProfileHandler('*', function (name) {
					var cookie = Systrace.beginAsyncEvent(name);
					return function () {
						Systrace.endAsyncEvent(name, cookie);
					};
				});

				relayProfiler.attachAggregateHandler('*', function (name, callback) {
					Systrace.beginEvent(name);
					callback();
					Systrace.endEvent();
				});
			},

			swizzleJSON: function swizzleJSON() {
				Systrace.measureMethods(JSON, 'JSON', ['parse', 'stringify']);
			},

			measureMethods: function measureMethods(object, objectName, methodNames) {
				if (!__DEV__) {
					return;
				}

				methodNames.forEach(function (methodName) {
					object[methodName] = Systrace.measure(objectName, methodName, object[methodName]);
				});
			},

			measure: function measure(objName, fnName, func) {
				if (!__DEV__) {
					return func;
				}

				var profileName = objName + '.' + fnName;
				return function () {
					if (!_enabled) {
						return func.apply(this, arguments);
					}

					Systrace.beginEvent(profileName);
					var ret = func.apply(this, arguments);
					Systrace.endEvent();
					return ret;
				};
			} };

		module.exports = Systrace;
	}];
});