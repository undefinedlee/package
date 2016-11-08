// react-native@0.21/Libraries/react-native/react-native.js
loader.define("react-native@0.21", "Libraries/react-native/react-native.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/react-native/react-native.js
	function (__inner_require__, exports, module) {
		var ReactNative = babelHelpers.extends({

			get ActivityIndicatorIOS() {
				return __inner_require__(1 /*Libraries/Components/ActivityIndicatorIOS/ActivityIndicatorIOS.ios.js*/);
			},
			get ART() {
				return __inner_require__(89 /*Libraries/ART/ReactNativeART.js*/);
			},
			get DatePickerIOS() {
				return __inner_require__(91 /*Libraries/Components/DatePicker/DatePickerIOS.ios.js*/);
			},
			get DrawerLayoutAndroid() {
				return __inner_require__(92 /*Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.ios.js*/);
			},
			get Image() {
				return __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
			},
			get ImageEditor() {
				return __inner_require__(95 /*Libraries/Image/ImageEditor.js*/);
			},
			get ImageStore() {
				return __inner_require__(96 /*Libraries/Image/ImageStore.js*/);
			},
			get ListView() {
				return __inner_require__(97 /*Libraries/CustomComponents/ListView/ListView.js*/);
			},
			get MapView() {
				return __inner_require__(107 /*Libraries/Components/MapView/MapView.js*/);
			},
			get Modal() {
				return __inner_require__(108 /*Libraries/Modal/Modal.js*/);
			},
			get Navigator() {
				return __inner_require__(109 /*Libraries/CustomComponents/Navigator/Navigator.js*/);
			},
			get NavigatorIOS() {
				return __inner_require__(125 /*Libraries/Components/Navigation/NavigatorIOS.ios.js*/);
			},
			get Picker() {
				return __inner_require__(127 /*Libraries/Components/Picker/Picker.js*/);
			},
			get PickerIOS() {
				return __inner_require__(128 /*Libraries/Picker/PickerIOS.ios.js*/);
			},
			get ProgressBarAndroid() {
				return __inner_require__(130 /*Libraries/Components/ProgressBarAndroid/ProgressBarAndroid.ios.js*/);
			},
			get ProgressViewIOS() {
				return __inner_require__(131 /*Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js*/);
			},
			get ScrollView() {
				return __inner_require__(100 /*Libraries/Components/ScrollView/ScrollView.js*/);
			},
			get SegmentedControlIOS() {
				return __inner_require__(132 /*Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js*/);
			},
			get SliderIOS() {
				return __inner_require__(133 /*Libraries/Components/SliderIOS/SliderIOS.ios.js*/);
			},
			get SnapshotViewIOS() {
				return __inner_require__(134 /*Libraries/RCTTest/SnapshotViewIOS.ios.js*/);
			},
			get Switch() {
				return __inner_require__(135 /*Libraries/Components/Switch/Switch.js*/);
			},
			get PullToRefreshViewAndroid() {
				return __inner_require__(136 /*Libraries/PullToRefresh/PullToRefreshViewAndroid.ios.js*/);
			},
			get RecyclerViewBackedScrollView() {
				return __inner_require__(137 /*Libraries/Components/ScrollView/RecyclerViewBackedScrollView.ios.js*/);
			},
			get RefreshControl() {
				return __inner_require__(138 /*Libraries/Components/RefreshControl/RefreshControl.js*/);
			},
			get StatusBar() {
				return __inner_require__(139 /*Libraries/Components/StatusBar/StatusBar.js*/);
			},
			get SwitchAndroid() {
				return __inner_require__(140 /*Libraries/Components/SwitchAndroid/SwitchAndroid.ios.js*/);
			},
			get SwitchIOS() {
				return __inner_require__(141 /*Libraries/Components/SwitchIOS/SwitchIOS.ios.js*/);
			},
			get TabBarIOS() {
				return __inner_require__(142 /*Libraries/Components/TabBarIOS/TabBarIOS.ios.js*/);
			},
			get Text() {
				return __inner_require__(144 /*Libraries/Text/Text.js*/);
			},
			get TextInput() {
				return __inner_require__(150 /*Libraries/Components/TextInput/TextInput.js*/);
			},
			get ToastAndroid() {
				return __inner_require__(159 /*Libraries/Components/ToastAndroid/ToastAndroid.ios.js*/);
			},
			get ToolbarAndroid() {
				return __inner_require__(160 /*Libraries/Components/ToolbarAndroid/ToolbarAndroid.ios.js*/);
			},
			get Touchable() {
				return __inner_require__(145 /*Libraries/Components/Touchable/Touchable.js*/);
			},
			get TouchableHighlight() {
				return __inner_require__(161 /*Libraries/Components/Touchable/TouchableHighlight.js*/);
			},
			get TouchableNativeFeedback() {
				return __inner_require__(163 /*Libraries/Components/Touchable/TouchableNativeFeedback.ios.js*/);
			},
			get TouchableOpacity() {
				return __inner_require__(164 /*Libraries/Components/Touchable/TouchableOpacity.js*/);
			},
			get TouchableWithoutFeedback() {
				return __inner_require__(157 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
			},
			get View() {
				return __inner_require__(46 /*Libraries/Components/View/View.js*/);
			},
			get ViewPagerAndroid() {
				return __inner_require__(173 /*Libraries/Components/ViewPager/ViewPagerAndroid.ios.js*/);
			},
			get WebView() {
				return __inner_require__(174 /*Libraries/Components/WebView/WebView.ios.js*/);
			},

			get ActionSheetIOS() {
				return __inner_require__(175 /*Libraries/ActionSheetIOS/ActionSheetIOS.js*/);
			},
			get AdSupportIOS() {
				return __inner_require__(176 /*Libraries/AdSupport/AdSupportIOS.js*/);
			},
			get Alert() {
				return require('react-native@0.21/Libraries/Utilities/Alert.js');
			},
			get AlertIOS() {
				return require('react-native@0.21/Libraries/Utilities/AlertIOS.js');
			},
			get Animated() {
				return __inner_require__(165 /*Libraries/Animated/src/Animated.js*/);
			},
			get AppRegistry() {
				return __inner_require__(177 /*Libraries/AppRegistry/AppRegistry.js*/);
			},
			get AppState() {
				return __inner_require__(206 /*Libraries/AppState/AppState.js*/);
			},
			get AppStateIOS() {
				return __inner_require__(207 /*Libraries/AppStateIOS/AppStateIOS.ios.js*/);
			},
			get AsyncStorage() {
				return __inner_require__(208 /*Libraries/Storage/AsyncStorage.js*/);
			},
			get BackAndroid() {
				return __inner_require__(209 /*Libraries/Utilities/BackAndroid.ios.js*/);
			},
			get CameraRoll() {
				return __inner_require__(210 /*Libraries/CameraRoll/CameraRoll.js*/);
			},
			get Clipboard() {
				return __inner_require__(211 /*Libraries/Components/Clipboard/Clipboard.js*/);
			},
			get DatePickerAndroid() {
				return __inner_require__(212 /*Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.js*/);
			},
			get Dimensions() {
				return __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
			},
			get Easing() {
				return __inner_require__(167 /*Libraries/Animated/src/Easing.js*/);
			},
			get ImagePickerIOS() {
				return __inner_require__(213 /*Libraries/CameraRoll/ImagePickerIOS.js*/);
			},
			get IntentAndroid() {
				return __inner_require__(214 /*Libraries/Components/Intent/IntentAndroid.ios.js*/);
			},
			get InteractionManager() {
				return __inner_require__(33 /*Libraries/Interaction/InteractionManager.js*/);
			},
			get LayoutAnimation() {
				return __inner_require__(215 /*Libraries/LayoutAnimation/LayoutAnimation.js*/);
			},
			get Linking() {
				return __inner_require__(216 /*Libraries/Linking/Linking.js*/);
			},
			get LinkingIOS() {
				return __inner_require__(217 /*Libraries/LinkingIOS/LinkingIOS.js*/);
			},
			get NavigationExperimental() {
				return __inner_require__(218 /*Libraries/NavigationExperimental/NavigationExperimental.js*/);
			},
			get NetInfo() {
				return __inner_require__(230 /*Libraries/Network/NetInfo.js*/);
			},
			get PanResponder() {
				return __inner_require__(122 /*Libraries/vendor/react/browser/eventPlugins/PanResponder.js*/);
			},
			get PixelRatio() {
				return __inner_require__(67 /*Libraries/Utilities/PixelRatio.js*/);
			},
			get PushNotificationIOS() {
				return __inner_require__(231 /*Libraries/PushNotificationIOS/PushNotificationIOS.js*/);
			},
			get Settings() {
				return __inner_require__(232 /*Libraries/Settings/Settings.ios.js*/);
			},
			get StatusBarIOS() {
				return __inner_require__(233 /*Libraries/Components/StatusBar/StatusBarIOS.ios.js*/);
			},
			get StyleSheet() {
				return __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
			},
			get TimePickerAndroid() {
				return __inner_require__(234 /*Libraries/Components/TimePickerAndroid/TimePickerAndroid.ios.js*/);
			},
			get UIManager() {
				return require('react-native@0.21/Libraries/Utilities/UIManager.js');
			},
			get VibrationIOS() {
				return __inner_require__(235 /*Libraries/Vibration/VibrationIOS.ios.js*/);
			},

			get DeviceEventEmitter() {
				return require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
			},
			get NativeAppEventEmitter() {
				return __inner_require__(236 /*Libraries/NativeApp/RCTNativeAppEventEmitter.js*/);
			},
			get NativeModules() {
				return require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
			},
			get Platform() {
				return require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
			},
			get processColor() {
				return require('react-native@0.21/Libraries/StyleSheet/processColor.js');
			},
			get requireNativeComponent() {
				return __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);
			},

			get ColorPropType() {
				return __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
			},
			get EdgeInsetsPropType() {
				return __inner_require__(94 /*Libraries/StyleSheet/EdgeInsetsPropType.js*/);
			},
			get PointPropType() {
				return __inner_require__(101 /*Libraries/StyleSheet/PointPropType.js*/);
			},

			addons: {
				get LinkedStateMixin() {
					return __inner_require__(237 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/LinkedStateMixin.js*/);
				},
				Perf: undefined,
				get PureRenderMixin() {
					return __inner_require__(245 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentWithPureRenderMixin.js*/);
				},
				get TestModule() {
					return require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').TestModule;
				},
				TestUtils: undefined,
				get batchedUpdates() {
					return require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js').batchedUpdates;
				},
				get cloneWithProps() {
					return __inner_require__(248 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/cloneWithProps.js*/);
				},
				get createFragment() {
					return __inner_require__(251 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactFragment.js*/).create;
				},
				get update() {
					return __inner_require__(252 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/update.js*/);
				} } }, __inner_require__(9 /*Libraries/ReactNative/React.js*/));

		if (__DEV__) {
			Object.defineProperty(ReactNative.addons, 'Perf', {
				enumerable: true,
				get: function get() {
					return __inner_require__(192 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultPerf.js*/);
				} });

			Object.defineProperty(ReactNative.addons, 'TestUtils', {
				enumerable: true,
				get: function get() {
					return __inner_require__(253 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactTestUtils.js*/);
				} });
		}

		module.exports = ReactNative;
	},
	// Libraries/Components/ActivityIndicatorIOS/ActivityIndicatorIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var GRAY = '#999999';

		var ActivityIndicatorIOS = React.createClass({ displayName: 'ActivityIndicatorIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				animating: PropTypes.bool,

				color: PropTypes.string,

				hidesWhenStopped: PropTypes.bool,

				size: PropTypes.oneOf(['small', 'large']),

				onLayout: PropTypes.func }),

			getDefaultProps: function getDefaultProps() {
				return {
					animating: true,
					color: GRAY,
					hidesWhenStopped: true,
					size: 'small' };
			},

			render: function render() {
				var _props = this.props,
				    onLayout = _props.onLayout,
				    style = _props.style,
				    props = babelHelpers.objectWithoutProperties(_props, ['onLayout', 'style']);
				var sizeStyle = this.props.size === 'large' ? styles.sizeLarge : styles.sizeSmall;
				return React.createElement(View, {
					onLayout: onLayout,
					style: [styles.container, style] }, React.createElement(RCTActivityIndicatorView, babelHelpers.extends({}, props, { style: sizeStyle })));
			} });

		var styles = StyleSheet.create({
			container: {
				alignItems: 'center',
				justifyContent: 'center' },

			sizeSmall: {
				width: 20,
				height: 20 },

			sizeLarge: {
				width: 36,
				height: 36 } });

		var RCTActivityIndicatorView = requireNativeComponent('RCTActivityIndicatorView', ActivityIndicatorIOS, { nativeOnly: { activityIndicatorViewStyle: true } });

		module.exports = ActivityIndicatorIOS;
	},
	// Libraries/ReactIOS/NativeMethodsMixin.js
	function (__inner_require__, exports, module) {
		var ReactNativeAttributePayload = __inner_require__(3 /*Libraries/ReactNative/ReactNativeAttributePayload.js*/);
		var TextInputState = __inner_require__(6 /*Libraries/Components/TextInput/TextInputState.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var findNodeHandle = require('react-native@0.21/Libraries/ReactNative/findNodeHandle.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		function warnForStyleProps(props, validAttributes) {
			for (var key in validAttributes.style) {
				if (!(validAttributes[key] || props[key] === undefined)) {
					console.error('You are setting the style `{ ' + key + ': ... }` as a prop. You ' + 'should nest it in a style object. ' + 'E.g. `{ style: { ' + key + ': ... } }`');
				}
			}
		}

		var NativeMethodsMixin = {

			measure: function measure(callback) {
				UIManager.measure(findNodeHandle(this), mountSafeCallback(this, callback));
			},

			measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
				UIManager.measureLayout(findNodeHandle(this), relativeToNativeNode, mountSafeCallback(this, onFail), mountSafeCallback(this, onSuccess));
			},

			setNativeProps: function setNativeProps(nativeProps) {
				if (__DEV__) {
					warnForStyleProps(nativeProps, this.viewConfig.validAttributes);
				}

				var updatePayload = ReactNativeAttributePayload.create(nativeProps, this.viewConfig.validAttributes);

				UIManager.updateView(findNodeHandle(this), this.viewConfig.uiViewClassName, updatePayload);
			},

			focus: function focus() {
				TextInputState.focusTextInput(findNodeHandle(this));
			},

			blur: function blur() {
				TextInputState.blurTextInput(findNodeHandle(this));
			} };

		function throwOnStylesProp(component, props) {
			if (props.styles !== undefined) {
				var owner = component._owner || null;
				var name = component.constructor.displayName;
				var msg = '`styles` is not a supported property of `' + name + '`, did ' + 'you mean `style` (singular)?';
				if (owner && owner.constructor && owner.constructor.displayName) {
					msg += '\n\nCheck the `' + owner.constructor.displayName + '` parent ' + ' component.';
				}
				throw new Error(msg);
			}
		}
		if (__DEV__) {

			var NativeMethodsMixin_DEV = NativeMethodsMixin;
			invariant(!NativeMethodsMixin_DEV.componentWillMount && !NativeMethodsMixin_DEV.componentWillReceiveProps, 'Do not override existing functions.');

			NativeMethodsMixin_DEV.componentWillMount = function () {
				throwOnStylesProp(this, this.props);
			};
			NativeMethodsMixin_DEV.componentWillReceiveProps = function (newProps) {
				throwOnStylesProp(this, newProps);
			};
		}

		var mountSafeCallback = function mountSafeCallback(context, callback) {
			return function () {
				if (!callback || context.isMounted && !context.isMounted()) {
					return;
				}
				return callback.apply(context, arguments);
			};
		};

		module.exports = NativeMethodsMixin;
	},
	// Libraries/ReactNative/ReactNativeAttributePayload.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');

		var deepDiffer = __inner_require__(4 /*Libraries/Utilities/differ/deepDiffer.js*/);
		var styleDiffer = __inner_require__(5 /*Libraries/StyleSheet/styleDiffer.js*/);
		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');

		function translateKey(propKey) {
			if (propKey === 'transform') {

				if (Platform.OS === 'android') {
					return 'decomposedMatrix';
				} else {
					return 'transformMatrix';
				}
			}
			return propKey;
		}

		function defaultDiffer(prevProp, nextProp) {
			if (typeof nextProp !== 'object' || nextProp === null) {

				return true;
			} else {

				return deepDiffer(prevProp, nextProp);
			}
		}

		function diffNestedProperty(updatePayload, prevProp, nextProp, validAttributes) {

			if (!styleDiffer(prevProp, nextProp)) {
				return updatePayload;
			}

			var previousFlattenedStyle = flattenStyle(prevProp);
			var nextFlattenedStyle = flattenStyle(nextProp);

			if (!previousFlattenedStyle || !nextFlattenedStyle) {
				if (nextFlattenedStyle) {
					return addProperties(updatePayload, nextFlattenedStyle, validAttributes);
				}
				if (previousFlattenedStyle) {
					return clearProperties(updatePayload, previousFlattenedStyle, validAttributes);
				}
				return updatePayload;
			}

			return diffProperties(updatePayload, previousFlattenedStyle, nextFlattenedStyle, validAttributes);
		}

		function clearNestedProperty(updatePayload, prevProp, validAttributes) {

			return diffNestedProperty(updatePayload, prevProp, {}, validAttributes);
		}

		function diffProperties(updatePayload, prevProps, nextProps, validAttributes) {
			var attributeConfig;
			var nextProp;
			var prevProp;

			for (var propKey in nextProps) {
				attributeConfig = validAttributes[propKey];
				if (!attributeConfig) {
					continue;
				}

				var altKey = translateKey(propKey);
				if (!validAttributes[altKey]) {

					altKey = propKey;
				}

				if (updatePayload && updatePayload[altKey] !== undefined) {

					continue;
				}
				prevProp = prevProps[propKey];
				nextProp = nextProps[propKey];

				if (typeof nextProp === 'function') {
					nextProp = true;

					if (typeof prevProp === 'function') {
						prevProp = true;
					}
				}

				if (prevProp === nextProp) {
					continue;
				}

				if (typeof attributeConfig !== 'object') {

					if (defaultDiffer(prevProp, nextProp)) {

						(updatePayload || (updatePayload = {}))[altKey] = nextProp;
					}
				} else if (typeof attributeConfig.diff === 'function' || typeof attributeConfig.process === 'function') {

					var shouldUpdate = prevProp === undefined || (typeof attributeConfig.diff === 'function' ? attributeConfig.diff(prevProp, nextProp) : defaultDiffer(prevProp, nextProp));

					if (shouldUpdate) {
						var nextValue = typeof attributeConfig.process === 'function' ? attributeConfig.process(nextProp) : nextProp;
						(updatePayload || (updatePayload = {}))[altKey] = nextValue;
					}
				} else {

					updatePayload = diffNestedProperty(updatePayload, prevProp, nextProp, attributeConfig);
				}
			}

			for (var propKey in prevProps) {
				if (nextProps[propKey] !== undefined) {
					continue;
				}
				attributeConfig = validAttributes[propKey];
				if (!attributeConfig) {
					continue;
				}

				prevProp = prevProps[propKey];
				if (prevProp === undefined) {
					continue;
				}

				if (typeof attributeConfig !== 'object' || typeof attributeConfig.diff === 'function' || typeof attributeConfig.process === 'function') {

					(updatePayload || (updatePayload = {}))[translateKey(propKey)] = null;
				} else {

					updatePayload = clearNestedProperty(updatePayload, prevProp, attributeConfig);
				}
			}
			return updatePayload;
		}

		function addProperties(updatePayload, props, validAttributes) {
			return diffProperties(updatePayload, {}, props, validAttributes);
		}

		function clearProperties(updatePayload, prevProps, validAttributes) {
			return diffProperties(updatePayload, prevProps, {}, validAttributes);
		}

		var ReactNativeAttributePayload = {

			create: function create(props, validAttributes) {
				return addProperties(null, props, validAttributes);
			},

			diff: function diff(prevProps, nextProps, validAttributes) {
				return diffProperties(null, prevProps, nextProps, validAttributes);
			} };

		module.exports = ReactNativeAttributePayload;
	},
	// Libraries/Utilities/differ/deepDiffer.js
	function (__inner_require__, exports, module) {
		var deepDiffer = function deepDiffer(one, two) {
			if (one === two) {

				return false;
			}
			if (typeof one === 'function' && typeof two === 'function') {

				return false;
			}
			if (typeof one !== 'object' || one === null) {

				return one !== two;
			}
			if (typeof two !== 'object' || two === null) {

				return true;
			}
			if (one.constructor !== two.constructor) {
				return true;
			}
			if (Array.isArray(one)) {

				var len = one.length;
				if (two.length !== len) {
					return true;
				}
				for (var ii = 0; ii < len; ii++) {
					if (deepDiffer(one[ii], two[ii])) {
						return true;
					}
				}
			} else {
				for (var key in one) {
					if (deepDiffer(one[key], two[key])) {
						return true;
					}
				}
				for (var twoKey in two) {

					if (one[twoKey] === undefined && two[twoKey] !== undefined) {
						return true;
					}
				}
			}
			return false;
		};

		module.exports = deepDiffer;
	},
	// Libraries/StyleSheet/styleDiffer.js
	function (__inner_require__, exports, module) {
		var deepDiffer = __inner_require__(4 /*Libraries/Utilities/differ/deepDiffer.js*/);

		function styleDiffer(a, b) {
			return !styleEqual(a, b);
		}

		function styleEqual(a, b) {
			if (!a) {
				return !b;
			}
			if (!b) {
				return !a;
			}
			if (typeof a !== typeof b) {
				return false;
			}
			if (typeof a === 'number') {
				return a === b;
			}

			if (Array.isArray(a)) {
				if (!Array.isArray(b) || a.length !== b.length) {
					return false;
				}
				for (var i = 0; i < a.length; ++i) {
					if (!styleEqual(a[i], b[i])) {
						return false;
					}
				}
				return true;
			}

			for (var key in a) {
				if (deepDiffer(a[key], b[key])) {
					return false;
				}
			}

			for (var key in b) {
				if (!a.hasOwnProperty(key)) {
					return false;
				}
			}

			return true;
		}

		module.exports = styleDiffer;
	},
	// Libraries/Components/TextInput/TextInputState.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var TextInputState = {

			_currentlyFocusedID: null,

			currentlyFocusedField: function currentlyFocusedField() {
				return this._currentlyFocusedID;
			},

			focusTextInput: function focusTextInput(textFieldID) {
				if (this._currentlyFocusedID !== textFieldID && textFieldID !== null) {
					this._currentlyFocusedID = textFieldID;
					if (Platform.OS === 'ios') {
						UIManager.focus(textFieldID);
					} else if (Platform.OS === 'android') {
						UIManager.dispatchViewManagerCommand(textFieldID, UIManager.AndroidTextInput.Commands.focusTextInput, null);
					}
				}
			},

			blurTextInput: function blurTextInput(textFieldID) {
				if (this._currentlyFocusedID === textFieldID && textFieldID !== null) {
					this._currentlyFocusedID = null;
					if (Platform.OS === 'ios') {
						UIManager.blur(textFieldID);
					} else if (Platform.OS === 'android') {
						UIManager.dispatchViewManagerCommand(textFieldID, UIManager.AndroidTextInput.Commands.blurTextInput, null);
					}
				}
			} };

		module.exports = TextInputState;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactPropTypeLocationNames = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocationNames.js');

		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var getIteratorFn = __inner_require__(8 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/getIteratorFn.js*/);

		var ANONYMOUS = '<<anonymous>>';

		var ReactPropTypes = {
			array: createPrimitiveTypeChecker('array'),
			bool: createPrimitiveTypeChecker('boolean'),
			func: createPrimitiveTypeChecker('function'),
			number: createPrimitiveTypeChecker('number'),
			object: createPrimitiveTypeChecker('object'),
			string: createPrimitiveTypeChecker('string'),

			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker };

		function createChainableTypeChecker(validate) {
			function checkType(isRequired, props, propName, componentName, location, propFullName) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (props[propName] == null) {
					var locationName = ReactPropTypeLocationNames[location];
					if (isRequired) {
						return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
					}
					return null;
				} else {
					return validate(props, propName, componentName, location, propFullName);
				}
			}

			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);

			return chainedCheckType;
		}

		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== expectedType) {
					var locationName = ReactPropTypeLocationNames[location];

					var preciseType = getPreciseType(propValue);

					return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunction.thatReturns(null));
		}

		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var locationName = ReactPropTypeLocationNames[location];
					var propType = getPropType(propValue);
					return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
					if (error instanceof Error) {
						return error;
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!ReactElement.isValidElement(props[propName])) {
					var locationName = ReactPropTypeLocationNames[location];
					return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var locationName = ReactPropTypeLocationNames[location];
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				return createChainableTypeChecker(function () {
					return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
				});
			}

			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) {
					if (propValue === expectedValues[i]) {
						return null;
					}
				}

				var locationName = ReactPropTypeLocationNames[location];
				var valuesString = JSON.stringify(expectedValues);
				return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
			}
			return createChainableTypeChecker(validate);
		}

		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== 'object') {
					var locationName = ReactPropTypeLocationNames[location];
					return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
				}
				for (var key in propValue) {
					if (propValue.hasOwnProperty(key)) {
						var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
						if (error instanceof Error) {
							return error;
						}
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				return createChainableTypeChecker(function () {
					return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
				});
			}

			function validate(props, propName, componentName, location, propFullName) {
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					if (checker(props, propName, componentName, location, propFullName) == null) {
						return null;
					}
				}

				var locationName = ReactPropTypeLocationNames[location];
				return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
			}
			return createChainableTypeChecker(validate);
		}

		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) {
					var locationName = ReactPropTypeLocationNames[location];
					return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== 'object') {
					var locationName = ReactPropTypeLocationNames[location];
					return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
				}
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (!checker) {
						continue;
					}
					var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
					if (error) {
						return error;
					}
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}

		function isNode(propValue) {
			switch (typeof propValue) {
				case 'number':
				case 'string':
				case 'undefined':
					return true;
				case 'boolean':
					return !propValue;
				case 'object':
					if (Array.isArray(propValue)) {
						return propValue.every(isNode);
					}
					if (propValue === null || ReactElement.isValidElement(propValue)) {
						return true;
					}

					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) {
								if (!isNode(step.value)) {
									return false;
								}
							}
						} else {

							while (!(step = iterator.next()).done) {
								var entry = step.value;
								if (entry) {
									if (!isNode(entry[1])) {
										return false;
									}
								}
							}
						}
					} else {
						return false;
					}

					return true;
				default:
					return false;}
		}

		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) {
				return 'array';
			}
			if (propValue instanceof RegExp) {

				return 'object';
			}
			return propType;
		}

		function getPreciseType(propValue) {
			var propType = getPropType(propValue);
			if (propType === 'object') {
				if (propValue instanceof Date) {
					return 'date';
				} else if (propValue instanceof RegExp) {
					return 'regexp';
				}
			}
			return propType;
		}

		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) {
				return '<<anonymous>>';
			}
			return propValue.constructor.name;
		}

		module.exports = ReactPropTypes;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/getIteratorFn.js
	function (__inner_require__, exports, module) {
		var ITERATOR_SYMBOL = typeof Symbol === 'function' && (typeof Symbol === 'function' ? Symbol.iterator : '@@iterator');
		var FAUX_ITERATOR_SYMBOL = '@@iterator';

		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === 'function') {
				return iteratorFn;
			}
		}

		module.exports = getIteratorFn;
	},
	// Libraries/ReactNative/React.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(10 /*Libraries/ReactNative/ReactNative.js*/);
	},
	// Libraries/ReactNative/ReactNative.js
	function (__inner_require__, exports, module) {
		var ReactNativeDefaultInjection = __inner_require__(11 /*Libraries/ReactNative/ReactNativeDefaultInjection.js*/);

		var ReactChildren = __inner_require__(83 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildren.js*/);
		var ReactClass = __inner_require__(84 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactClass.js*/);
		var ReactComponent = __inner_require__(85 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponent.js*/);
		var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCurrentOwner.js');
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactElementValidator = __inner_require__(87 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElementValidator.js*/);
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');
		var ReactNativeMount = require('react-native@0.21/Libraries/ReactNative/ReactNativeMount.js');
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');

		var findNodeHandle = require('react-native@0.21/Libraries/ReactNative/findNodeHandle.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var onlyChild = __inner_require__(88 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/onlyChild.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		ReactNativeDefaultInjection.inject();

		var createElement = ReactElement.createElement;
		var createFactory = ReactElement.createFactory;
		var cloneElement = ReactElement.cloneElement;

		if (__DEV__) {
			createElement = ReactElementValidator.createElement;
			createFactory = ReactElementValidator.createFactory;
			cloneElement = ReactElementValidator.cloneElement;
		}

		var resolveDefaultProps = function resolveDefaultProps(element) {

			var defaultProps = element.type.defaultProps;
			var props = element.props;
			for (var propName in defaultProps) {
				if (props[propName] === undefined) {
					props[propName] = defaultProps[propName];
				}
			}
		};

		var augmentElement = function augmentElement(element) {
			if (__DEV__) {
				invariant(false, 'This optimized path should never be used in DEV mode because ' + 'it does not provide validation. Check your JSX transform.');
			}
			element._owner = ReactCurrentOwner.current;
			if (element.type.defaultProps) {
				resolveDefaultProps(element);
			}
			return element;
		};

		var render = function render(element, mountInto, callback) {
			return ReactNativeMount.renderComponent(element, mountInto, callback);
		};

		var ReactNative = {
			hasReactNativeInitialized: false,
			Children: {
				map: ReactChildren.map,
				forEach: ReactChildren.forEach,
				count: ReactChildren.count,
				toArray: ReactChildren.toArray,
				only: onlyChild },

			Component: ReactComponent,
			PropTypes: ReactPropTypes,
			createClass: ReactClass.createClass,
			createElement: createElement,
			createFactory: createFactory,
			cloneElement: cloneElement,
			_augmentElement: augmentElement,
			findNodeHandle: findNodeHandle,
			render: render,
			unmountComponentAtNode: ReactNativeMount.unmountComponentAtNode,

			unstable_batchedUpdates: ReactUpdates.batchedUpdates,

			__spread: Object.assign,

			unmountComponentAtNodeAndRemoveContainer: ReactNativeMount.unmountComponentAtNodeAndRemoveContainer,
			isValidClass: ReactElement.isValidFactory,
			isValidElement: ReactElement.isValidElement,

			renderComponent: function renderComponent(element, mountInto, callback) {
				warning('Use React.render instead of React.renderComponent');
				return ReactNative.render(element, mountInto, callback);
			} };

		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
				CurrentOwner: ReactCurrentOwner,
				InstanceHandles: ReactInstanceHandles,
				Mount: ReactNativeMount,
				Reconciler: require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js'),
				TextComponent: require('react-native@0.21/Libraries/ReactNative/ReactNativeTextComponent.js') });
		}

		module.exports = ReactNative;
	},
	// Libraries/ReactNative/ReactNativeDefaultInjection.js
	function (__inner_require__, exports, module) {
		require('react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js');

		var EventPluginHub = __inner_require__(12 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js*/);
		var EventPluginUtils = __inner_require__(14 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginUtils.js*/);
		var IOSDefaultEventPluginOrder = __inner_require__(19 /*Libraries/ReactIOS/IOSDefaultEventPluginOrder.js*/);
		var IOSNativeBridgeEventPlugin = __inner_require__(20 /*Libraries/ReactIOS/IOSNativeBridgeEventPlugin.js*/);
		var NodeHandle = __inner_require__(26 /*Libraries/vendor/react/platform/NodeHandle.js*/);
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactComponentEnvironment = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentEnvironment.js');
		var ReactDefaultBatchingStrategy = __inner_require__(27 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultBatchingStrategy.js*/);
		var ReactEmptyComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponent.js');
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');
		var ReactNativeComponentEnvironment = __inner_require__(28 /*Libraries/ReactNative/ReactNativeBaseComponentEnvironment.js*/);
		var ReactNativeGlobalInteractionHandler = __inner_require__(32 /*Libraries/ReactNative/ReactNativeGlobalInteractionHandler.js*/);
		var ReactNativeGlobalResponderHandler = __inner_require__(35 /*Libraries/ReactNative/ReactNativeGlobalResponderHandler.js*/);
		var ReactNativeMount = require('react-native@0.21/Libraries/ReactNative/ReactNativeMount.js');
		var ReactNativeTextComponent = require('react-native@0.21/Libraries/ReactNative/ReactNativeTextComponent.js');
		var ReactNativeComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNativeComponent.js');
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');
		var ResponderEventPlugin = __inner_require__(36 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ResponderEventPlugin.js*/);
		var UniversalWorkerNodeHandle = __inner_require__(41 /*Libraries/vendor/react/platformImplementations/universal/worker/UniversalWorkerNodeHandle.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		__inner_require__(42 /*Libraries/BatchedBridge/BatchedBridgedModules/RCTEventEmitter.js*/);
		__inner_require__(45 /*Libraries/Utilities/RCTLog.js*/);
		require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js');

		function inject() {

			EventPluginHub.injection.injectEventPluginOrder(IOSDefaultEventPluginOrder);
			EventPluginHub.injection.injectInstanceHandle(ReactInstanceHandles);

			ResponderEventPlugin.injection.injectGlobalResponderHandler(ReactNativeGlobalResponderHandler);

			ResponderEventPlugin.injection.injectGlobalInteractionHandler(ReactNativeGlobalInteractionHandler);

			EventPluginHub.injection.injectEventPluginsByName({
				'ResponderEventPlugin': ResponderEventPlugin,
				'IOSNativeBridgeEventPlugin': IOSNativeBridgeEventPlugin });

			ReactUpdates.injection.injectReconcileTransaction(ReactNativeComponentEnvironment.ReactReconcileTransaction);

			ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);

			ReactComponentEnvironment.injection.injectEnvironment(ReactNativeComponentEnvironment);

			var EmptyComponent = function EmptyComponent() {

				var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
				return ReactElement.createElement(View, {
					collapsable: true,
					style: { position: 'absolute' } });
			};
			ReactEmptyComponent.injection.injectEmptyComponent(EmptyComponent);

			EventPluginUtils.injection.injectMount(ReactNativeMount);

			ReactNativeComponent.injection.injectTextComponentClass(ReactNativeTextComponent);

			ReactNativeComponent.injection.injectGenericComponentClass(function (tag) {

				var info = '';
				if (typeof tag === 'string' && /^[a-z]/.test(tag)) {
					info += ' Each component name should start with an uppercase letter.';
				}
				invariant(false, 'Expected a component class, got %s.%s', tag, info);
			});

			NodeHandle.injection.injectImplementation(UniversalWorkerNodeHandle);
		}

		module.exports = {
			inject: inject };
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js
	function (__inner_require__, exports, module) {
		var EventPluginRegistry = __inner_require__(13 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginRegistry.js*/);
		var EventPluginUtils = __inner_require__(14 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginUtils.js*/);
		var ReactErrorUtils = __inner_require__(16 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactErrorUtils.js*/);

		var accumulateInto = __inner_require__(17 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/accumulateInto.js*/);
		var forEachAccumulated = __inner_require__(18 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/forEachAccumulated.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var listenerBank = {};

		var eventQueue = null;

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

		var InstanceHandle = null;

		function validateInstanceHandle() {
			var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
			process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
		}

		var EventPluginHub = {

			injection: {

				injectMount: EventPluginUtils.injection.injectMount,

				injectInstanceHandle: function injectInstanceHandle(InjectedInstanceHandle) {
					InstanceHandle = InjectedInstanceHandle;
					if (process.env.NODE_ENV !== 'production') {
						validateInstanceHandle();
					}
				},

				getInstanceHandle: function getInstanceHandle() {
					if (process.env.NODE_ENV !== 'production') {
						validateInstanceHandle();
					}
					return InstanceHandle;
				},

				injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

				injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName },

			eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

			registrationNameModules: EventPluginRegistry.registrationNameModules,

			putListener: function putListener(id, registrationName, listener) {
				!(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;

				var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
				bankForRegistrationName[id] = listener;

				var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
				if (PluginModule && PluginModule.didPutListener) {
					PluginModule.didPutListener(id, registrationName, listener);
				}
			},

			getListener: function getListener(id, registrationName) {
				var bankForRegistrationName = listenerBank[registrationName];
				return bankForRegistrationName && bankForRegistrationName[id];
			},

			deleteListener: function deleteListener(id, registrationName) {
				var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
				if (PluginModule && PluginModule.willDeleteListener) {
					PluginModule.willDeleteListener(id, registrationName);
				}

				var bankForRegistrationName = listenerBank[registrationName];

				if (bankForRegistrationName) {
					delete bankForRegistrationName[id];
				}
			},

			deleteAllListeners: function deleteAllListeners(id) {
				for (var registrationName in listenerBank) {
					if (!listenerBank[registrationName][id]) {
						continue;
					}

					var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
					if (PluginModule && PluginModule.willDeleteListener) {
						PluginModule.willDeleteListener(id, registrationName);
					}

					delete listenerBank[registrationName][id];
				}
			},

			extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
				var events;
				var plugins = EventPluginRegistry.plugins;
				for (var i = 0; i < plugins.length; i++) {

					var possiblePlugin = plugins[i];
					if (possiblePlugin) {
						var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
						if (extractedEvents) {
							events = accumulateInto(events, extractedEvents);
						}
					}
				}
				return events;
			},

			enqueueEvents: function enqueueEvents(events) {
				if (events) {
					eventQueue = accumulateInto(eventQueue, events);
				}
			},

			processEventQueue: function processEventQueue(simulated) {

				var processingEventQueue = eventQueue;
				eventQueue = null;
				if (simulated) {
					forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
				} else {
					forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
				}
				!!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;

				ReactErrorUtils.rethrowCaughtError();
			},

			__purge: function __purge() {
				listenerBank = {};
			},

			__getListenerBank: function __getListenerBank() {
				return listenerBank;
			} };

		module.exports = EventPluginHub;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginRegistry.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var EventPluginOrder = null;

		var namesToPlugins = {};

		function recomputePluginOrdering() {
			if (!EventPluginOrder) {

				return;
			}
			for (var pluginName in namesToPlugins) {
				var PluginModule = namesToPlugins[pluginName];
				var pluginIndex = EventPluginOrder.indexOf(pluginName);
				!(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
				if (EventPluginRegistry.plugins[pluginIndex]) {
					continue;
				}
				!PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
				EventPluginRegistry.plugins[pluginIndex] = PluginModule;
				var publishedEvents = PluginModule.eventTypes;
				for (var eventName in publishedEvents) {
					!publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
				}
			}
		}

		function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
			!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
			EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

			var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
			if (phasedRegistrationNames) {
				for (var phaseName in phasedRegistrationNames) {
					if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
						var phasedRegistrationName = phasedRegistrationNames[phaseName];
						publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
					}
				}
				return true;
			} else if (dispatchConfig.registrationName) {
				publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
				return true;
			}
			return false;
		}

		function publishRegistrationName(registrationName, PluginModule, eventName) {
			!!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
			EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
			EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
		}

		var EventPluginRegistry = {

			plugins: [],

			eventNameDispatchConfigs: {},

			registrationNameModules: {},

			registrationNameDependencies: {},

			injectEventPluginOrder: function injectEventPluginOrder(InjectedEventPluginOrder) {
				!!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;

				EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
				recomputePluginOrdering();
			},

			injectEventPluginsByName: function injectEventPluginsByName(injectedNamesToPlugins) {
				var isOrderingDirty = false;
				for (var pluginName in injectedNamesToPlugins) {
					if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
						continue;
					}
					var PluginModule = injectedNamesToPlugins[pluginName];
					if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
						!!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
						namesToPlugins[pluginName] = PluginModule;
						isOrderingDirty = true;
					}
				}
				if (isOrderingDirty) {
					recomputePluginOrdering();
				}
			},

			getPluginModuleForEvent: function getPluginModuleForEvent(event) {
				var dispatchConfig = event.dispatchConfig;
				if (dispatchConfig.registrationName) {
					return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
				}
				for (var phase in dispatchConfig.phasedRegistrationNames) {
					if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
						continue;
					}
					var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
					if (PluginModule) {
						return PluginModule;
					}
				}
				return null;
			},

			_resetEventPlugins: function _resetEventPlugins() {
				EventPluginOrder = null;
				for (var pluginName in namesToPlugins) {
					if (namesToPlugins.hasOwnProperty(pluginName)) {
						delete namesToPlugins[pluginName];
					}
				}
				EventPluginRegistry.plugins.length = 0;

				var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
				for (var eventName in eventNameDispatchConfigs) {
					if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
						delete eventNameDispatchConfigs[eventName];
					}
				}

				var registrationNameModules = EventPluginRegistry.registrationNameModules;
				for (var registrationName in registrationNameModules) {
					if (registrationNameModules.hasOwnProperty(registrationName)) {
						delete registrationNameModules[registrationName];
					}
				}
			} };

		module.exports = EventPluginRegistry;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginUtils.js
	function (__inner_require__, exports, module) {
		var EventConstants = __inner_require__(15 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js*/);
		var ReactErrorUtils = __inner_require__(16 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactErrorUtils.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var injection = {
			Mount: null,
			injectMount: function injectMount(InjectedMount) {
				injection.Mount = InjectedMount;
				if (process.env.NODE_ENV !== 'production') {
					process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
				}
			} };

		var topLevelTypes = EventConstants.topLevelTypes;

		function isEndish(topLevelType) {
			return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
		}

		function isMoveish(topLevelType) {
			return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
		}
		function isStartish(topLevelType) {
			return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
		}

		var validateEventDispatches;
		if (process.env.NODE_ENV !== 'production') {
			validateEventDispatches = function validateEventDispatches(event) {
				var dispatchListeners = event._dispatchListeners;
				var dispatchIDs = event._dispatchIDs;

				var listenersIsArr = Array.isArray(dispatchListeners);
				var idsIsArr = Array.isArray(dispatchIDs);
				var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
				var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

				process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
			};
		}

		function executeDispatch(event, simulated, listener, domID) {
			var type = event.type || 'unknown-event';
			event.currentTarget = injection.Mount.getNode(domID);
			if (simulated) {
				ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
			} else {
				ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
			}
			event.currentTarget = null;
		}

		function executeDispatchesInOrder(event, simulated) {
			var dispatchListeners = event._dispatchListeners;
			var dispatchIDs = event._dispatchIDs;
			if (process.env.NODE_ENV !== 'production') {
				validateEventDispatches(event);
			}
			if (Array.isArray(dispatchListeners)) {
				for (var i = 0; i < dispatchListeners.length; i++) {
					if (event.isPropagationStopped()) {
						break;
					}

					executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
				}
			} else if (dispatchListeners) {
				executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
			}
			event._dispatchListeners = null;
			event._dispatchIDs = null;
		}

		function executeDispatchesInOrderStopAtTrueImpl(event) {
			var dispatchListeners = event._dispatchListeners;
			var dispatchIDs = event._dispatchIDs;
			if (process.env.NODE_ENV !== 'production') {
				validateEventDispatches(event);
			}
			if (Array.isArray(dispatchListeners)) {
				for (var i = 0; i < dispatchListeners.length; i++) {
					if (event.isPropagationStopped()) {
						break;
					}

					if (dispatchListeners[i](event, dispatchIDs[i])) {
						return dispatchIDs[i];
					}
				}
			} else if (dispatchListeners) {
				if (dispatchListeners(event, dispatchIDs)) {
					return dispatchIDs;
				}
			}
			return null;
		}

		function executeDispatchesInOrderStopAtTrue(event) {
			var ret = executeDispatchesInOrderStopAtTrueImpl(event);
			event._dispatchIDs = null;
			event._dispatchListeners = null;
			return ret;
		}

		function executeDirectDispatch(event) {
			if (process.env.NODE_ENV !== 'production') {
				validateEventDispatches(event);
			}
			var dispatchListener = event._dispatchListeners;
			var dispatchID = event._dispatchIDs;
			!!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
			var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
			event._dispatchListeners = null;
			event._dispatchIDs = null;
			return res;
		}

		function hasDispatches(event) {
			return !!event._dispatchListeners;
		}

		var EventPluginUtils = {
			isEndish: isEndish,
			isMoveish: isMoveish,
			isStartish: isStartish,

			executeDirectDispatch: executeDirectDispatch,
			executeDispatchesInOrder: executeDispatchesInOrder,
			executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
			hasDispatches: hasDispatches,

			getNode: function getNode(id) {
				return injection.Mount.getNode(id);
			},
			getID: function getID(node) {
				return injection.Mount.getID(node);
			},

			injection: injection };

		module.exports = EventPluginUtils;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js
	function (__inner_require__, exports, module) {
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');

		var PropagationPhases = keyMirror({ bubbled: null, captured: null });

		var topLevelTypes = keyMirror({
			topAbort: null,
			topBlur: null,
			topCanPlay: null,
			topCanPlayThrough: null,
			topChange: null,
			topClick: null,
			topCompositionEnd: null,
			topCompositionStart: null,
			topCompositionUpdate: null,
			topContextMenu: null,
			topCopy: null,
			topCut: null,
			topDoubleClick: null,
			topDrag: null,
			topDragEnd: null,
			topDragEnter: null,
			topDragExit: null,
			topDragLeave: null,
			topDragOver: null,
			topDragStart: null,
			topDrop: null,
			topDurationChange: null,
			topEmptied: null,
			topEncrypted: null,
			topEnded: null,
			topError: null,
			topFocus: null,
			topInput: null,
			topKeyDown: null,
			topKeyPress: null,
			topKeyUp: null,
			topLoad: null,
			topLoadedData: null,
			topLoadedMetadata: null,
			topLoadStart: null,
			topMouseDown: null,
			topMouseMove: null,
			topMouseOut: null,
			topMouseOver: null,
			topMouseUp: null,
			topPaste: null,
			topPause: null,
			topPlay: null,
			topPlaying: null,
			topProgress: null,
			topRateChange: null,
			topReset: null,
			topScroll: null,
			topSeeked: null,
			topSeeking: null,
			topSelectionChange: null,
			topStalled: null,
			topSubmit: null,
			topSuspend: null,
			topTextInput: null,
			topTimeUpdate: null,
			topTouchCancel: null,
			topTouchEnd: null,
			topTouchMove: null,
			topTouchStart: null,
			topVolumeChange: null,
			topWaiting: null,
			topWheel: null });

		var EventConstants = {
			topLevelTypes: topLevelTypes,
			PropagationPhases: PropagationPhases };

		module.exports = EventConstants;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactErrorUtils.js
	function (__inner_require__, exports, module) {
		var caughtError = null;

		function invokeGuardedCallback(name, func, a, b) {
			try {
				return func(a, b);
			} catch (x) {
				if (caughtError === null) {
					caughtError = x;
				}
				return undefined;
			}
		}

		var ReactErrorUtils = {
			invokeGuardedCallback: invokeGuardedCallback,

			invokeGuardedCallbackWithCatch: invokeGuardedCallback,

			rethrowCaughtError: function rethrowCaughtError() {
				if (caughtError) {
					var error = caughtError;
					caughtError = null;
					throw error;
				}
			} };

		if (process.env.NODE_ENV !== 'production') {

			if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
				var fakeNode = document.createElement('react');
				ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
					var boundFunc = func.bind(null, a, b);
					var evtType = 'react-' + name;
					fakeNode.addEventListener(evtType, boundFunc, false);
					var evt = document.createEvent('Event');
					evt.initEvent(evtType, false, false);
					fakeNode.dispatchEvent(evt);
					fakeNode.removeEventListener(evtType, boundFunc, false);
				};
			}
		}

		module.exports = ReactErrorUtils;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/accumulateInto.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		function accumulateInto(current, next) {
			!(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
			if (current == null) {
				return next;
			}

			var currentIsArray = Array.isArray(current);
			var nextIsArray = Array.isArray(next);

			if (currentIsArray && nextIsArray) {
				current.push.apply(current, next);
				return current;
			}

			if (currentIsArray) {
				current.push(next);
				return current;
			}

			if (nextIsArray) {

				return [current].concat(next);
			}

			return [current, next];
		}

		module.exports = accumulateInto;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/forEachAccumulated.js
	function (__inner_require__, exports, module) {
		var forEachAccumulated = function forEachAccumulated(arr, cb, scope) {
			if (Array.isArray(arr)) {
				arr.forEach(cb, scope);
			} else if (arr) {
				cb.call(scope, arr);
			}
		};

		module.exports = forEachAccumulated;
	},
	// Libraries/ReactIOS/IOSDefaultEventPluginOrder.js
	function (__inner_require__, exports, module) {
		var IOSDefaultEventPluginOrder = ['ResponderEventPlugin', 'IOSNativeBridgeEventPlugin'];

		module.exports = IOSDefaultEventPluginOrder;
	},
	// Libraries/ReactIOS/IOSNativeBridgeEventPlugin.js
	function (__inner_require__, exports, module) {
		var EventPropagators = __inner_require__(21 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPropagators.js*/);
		var SyntheticEvent = __inner_require__(22 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/SyntheticEvent.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var customBubblingEventTypes = UIManager.customBubblingEventTypes;
		var customDirectEventTypes = UIManager.customDirectEventTypes;

		var allTypesByEventName = {};

		for (var bubblingTypeName in customBubblingEventTypes) {
			allTypesByEventName[bubblingTypeName] = customBubblingEventTypes[bubblingTypeName];
		}

		for (var directTypeName in customDirectEventTypes) {
			warning(!customBubblingEventTypes[directTypeName], 'Event cannot be both direct and bubbling: %s', directTypeName);

			allTypesByEventName[directTypeName] = customDirectEventTypes[directTypeName];
		}

		var IOSNativeBridgeEventPlugin = {

			eventTypes: merge(customBubblingEventTypes, customDirectEventTypes),

			extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
				var bubbleDispatchConfig = customBubblingEventTypes[topLevelType];
				var directDispatchConfig = customDirectEventTypes[topLevelType];
				var event = SyntheticEvent.getPooled(bubbleDispatchConfig || directDispatchConfig, topLevelTargetID, nativeEvent);

				if (bubbleDispatchConfig) {
					EventPropagators.accumulateTwoPhaseDispatches(event);
				} else if (directDispatchConfig) {
					EventPropagators.accumulateDirectDispatches(event);
				} else {
					return null;
				}
				return event;
			} };

		module.exports = IOSNativeBridgeEventPlugin;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPropagators.js
	function (__inner_require__, exports, module) {
		var EventConstants = __inner_require__(15 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js*/);
		var EventPluginHub = __inner_require__(12 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js*/);

		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var accumulateInto = __inner_require__(17 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/accumulateInto.js*/);
		var forEachAccumulated = __inner_require__(18 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/forEachAccumulated.js*/);

		var PropagationPhases = EventConstants.PropagationPhases;
		var getListener = EventPluginHub.getListener;

		function listenerAtPhase(id, event, propagationPhase) {
			var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
			return getListener(id, registrationName);
		}

		function accumulateDirectionalDispatches(domID, upwards, event) {
			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
			}
			var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
			var listener = listenerAtPhase(domID, event, phase);
			if (listener) {
				event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
				event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
			}
		}

		function accumulateTwoPhaseDispatchesSingle(event) {
			if (event && event.dispatchConfig.phasedRegistrationNames) {
				EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
			}
		}

		function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
			if (event && event.dispatchConfig.phasedRegistrationNames) {
				EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
			}
		}

		function accumulateDispatches(id, ignoredDirection, event) {
			if (event && event.dispatchConfig.registrationName) {
				var registrationName = event.dispatchConfig.registrationName;
				var listener = getListener(id, registrationName);
				if (listener) {
					event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
					event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
				}
			}
		}

		function accumulateDirectDispatchesSingle(event) {
			if (event && event.dispatchConfig.registrationName) {
				accumulateDispatches(event.dispatchMarker, null, event);
			}
		}

		function accumulateTwoPhaseDispatches(events) {
			forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
		}

		function accumulateTwoPhaseDispatchesSkipTarget(events) {
			forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
		}

		function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
			EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
		}

		function accumulateDirectDispatches(events) {
			forEachAccumulated(events, accumulateDirectDispatchesSingle);
		}

		var EventPropagators = {
			accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
			accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
			accumulateDirectDispatches: accumulateDirectDispatches,
			accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches };

		module.exports = EventPropagators;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/SyntheticEvent.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var EventInterface = {
			type: null,
			target: null,

			currentTarget: emptyFunction.thatReturnsNull,
			eventPhase: null,
			bubbles: null,
			cancelable: null,
			timeStamp: function timeStamp(event) {
				return event.timeStamp || Date.now();
			},
			defaultPrevented: null,
			isTrusted: null };

		function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
			this.dispatchConfig = dispatchConfig;
			this.dispatchMarker = dispatchMarker;
			this.nativeEvent = nativeEvent;

			var Interface = this.constructor.Interface;
			for (var propName in Interface) {
				if (!Interface.hasOwnProperty(propName)) {
					continue;
				}
				var normalize = Interface[propName];
				if (normalize) {
					this[propName] = normalize(nativeEvent);
				} else {
					if (propName === 'target') {
						this.target = nativeEventTarget;
					} else {
						this[propName] = nativeEvent[propName];
					}
				}
			}

			var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
			if (defaultPrevented) {
				this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
			} else {
				this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
			}
			this.isPropagationStopped = emptyFunction.thatReturnsFalse;
		}

		assign(SyntheticEvent.prototype, {

			preventDefault: function preventDefault() {
				this.defaultPrevented = true;
				var event = this.nativeEvent;
				if (process.env.NODE_ENV !== 'production') {
					process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
				}
				if (!event) {
					return;
				}

				if (event.preventDefault) {
					event.preventDefault();
				} else {
					event.returnValue = false;
				}
				this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
			},

			stopPropagation: function stopPropagation() {
				var event = this.nativeEvent;
				if (process.env.NODE_ENV !== 'production') {
					process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
				}
				if (!event) {
					return;
				}

				if (event.stopPropagation) {
					event.stopPropagation();
				} else {
					event.cancelBubble = true;
				}
				this.isPropagationStopped = emptyFunction.thatReturnsTrue;
			},

			persist: function persist() {
				this.isPersistent = emptyFunction.thatReturnsTrue;
			},

			isPersistent: emptyFunction.thatReturnsFalse,

			destructor: function destructor() {
				var Interface = this.constructor.Interface;
				for (var propName in Interface) {
					this[propName] = null;
				}
				this.dispatchConfig = null;
				this.dispatchMarker = null;
				this.nativeEvent = null;
			} });

		SyntheticEvent.Interface = EventInterface;

		SyntheticEvent.augmentClass = function (Class, Interface) {
			var Super = this;

			var prototype = Object.create(Super.prototype);
			assign(prototype, Class.prototype);
			Class.prototype = prototype;
			Class.prototype.constructor = Class;

			Class.Interface = assign({}, Super.Interface, Interface);
			Class.augmentClass = Super.augmentClass;

			PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
		};

		PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

		module.exports = SyntheticEvent;
	},
	// Libraries/vendor/core/merge.js
	function (__inner_require__, exports, module) {
		var mergeInto = __inner_require__(24 /*Libraries/vendor/core/mergeInto.js*/);

		var merge = function merge(one, two) {
			var result = {};
			mergeInto(result, one);
			mergeInto(result, two);
			return result;
		};

		module.exports = merge;
	},
	// Libraries/vendor/core/mergeInto.js
	function (__inner_require__, exports, module) {
		var mergeHelpers = __inner_require__(25 /*Libraries/vendor/core/mergeHelpers.js*/);

		var checkMergeObjectArg = mergeHelpers.checkMergeObjectArg;
		var checkMergeIntoObjectArg = mergeHelpers.checkMergeIntoObjectArg;

		function mergeInto(one, two) {
			checkMergeIntoObjectArg(one);
			if (two != null) {
				checkMergeObjectArg(two);
				for (var key in two) {
					if (!two.hasOwnProperty(key)) {
						continue;
					}
					one[key] = two[key];
				}
			}
		}

		module.exports = mergeInto;
	},
	// Libraries/vendor/core/mergeHelpers.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');

		var MAX_MERGE_DEPTH = 36;

		var isTerminal = function isTerminal(o) {
			return typeof o !== 'object' || o === null;
		};

		var mergeHelpers = {

			MAX_MERGE_DEPTH: MAX_MERGE_DEPTH,

			isTerminal: isTerminal,

			normalizeMergeArg: function normalizeMergeArg(arg) {
				return arg === undefined || arg === null ? {} : arg;
			},

			checkMergeArrayArgs: function checkMergeArrayArgs(one, two) {
				invariant(Array.isArray(one) && Array.isArray(two), 'Tried to merge arrays, instead got %s and %s.', one, two);
			},

			checkMergeObjectArgs: function checkMergeObjectArgs(one, two) {
				mergeHelpers.checkMergeObjectArg(one);
				mergeHelpers.checkMergeObjectArg(two);
			},

			checkMergeObjectArg: function checkMergeObjectArg(arg) {
				invariant(!isTerminal(arg) && !Array.isArray(arg), 'Tried to merge an object, instead got %s.', arg);
			},

			checkMergeIntoObjectArg: function checkMergeIntoObjectArg(arg) {
				invariant((!isTerminal(arg) || typeof arg === 'function') && !Array.isArray(arg), 'Tried to merge into an object, instead got %s.', arg);
			},

			checkMergeLevel: function checkMergeLevel(level) {
				invariant(level < MAX_MERGE_DEPTH, 'Maximum deep merge depth exceeded. You may be attempting to merge ' + 'circular structures in an unsupported way.');
			},

			checkArrayStrategy: function checkArrayStrategy(strategy) {
				invariant(strategy === undefined || strategy in mergeHelpers.ArrayStrategies, 'You must provide an array strategy to deep merge functions to ' + 'instruct the deep merge how to resolve merging two arrays.');
			},

			ArrayStrategies: keyMirror({
				Clobber: true,
				IndexByIndex: true }) };

		module.exports = mergeHelpers;
	},
	// Libraries/vendor/react/platform/NodeHandle.js
	function (__inner_require__, exports, module) {
		var NodeHandle = {

			injection: {
				injectImplementation: function injectImplementation(Impl) {
					NodeHandle._Implementation = Impl;
				} },

			_Implementation: null,

			getRootNodeID: function getRootNodeID(nodeHandle) {
				return NodeHandle._Implementation.getRootNodeID(nodeHandle);
			} };

		module.exports = NodeHandle;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultBatchingStrategy.js
	function (__inner_require__, exports, module) {
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');
		var Transaction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Transaction.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');

		var RESET_BATCHED_UPDATES = {
			initialize: emptyFunction,
			close: function close() {
				ReactDefaultBatchingStrategy.isBatchingUpdates = false;
			} };

		var FLUSH_BATCHED_UPDATES = {
			initialize: emptyFunction,
			close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates) };

		var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

		function ReactDefaultBatchingStrategyTransaction() {
			this.reinitializeTransaction();
		}

		assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
			getTransactionWrappers: function getTransactionWrappers() {
				return TRANSACTION_WRAPPERS;
			} });

		var transaction = new ReactDefaultBatchingStrategyTransaction();

		var ReactDefaultBatchingStrategy = {
			isBatchingUpdates: false,

			batchedUpdates: function batchedUpdates(callback, a, b, c, d, e) {
				var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

				ReactDefaultBatchingStrategy.isBatchingUpdates = true;

				if (alreadyBatchingUpdates) {
					callback(a, b, c, d, e);
				} else {
					transaction.perform(callback, null, a, b, c, d, e);
				}
			} };

		module.exports = ReactDefaultBatchingStrategy;
	},
	// Libraries/ReactNative/ReactNativeBaseComponentEnvironment.js
	function (__inner_require__, exports, module) {
		var ReactNativeDOMIDOperations = __inner_require__(29 /*Libraries/ReactNative/ReactNativeDOMIDOperations.js*/);
		var ReactNativeReconcileTransaction = __inner_require__(31 /*Libraries/ReactNative/ReactNativeReconcileTransaction.js*/);

		var ReactNativeComponentEnvironment = {

			processChildrenUpdates: ReactNativeDOMIDOperations.dangerouslyProcessChildrenUpdates,

			replaceNodeWithMarkupByID: ReactNativeDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

			unmountIDFromEnvironment: function unmountIDFromEnvironment() {},

			clearNode: function clearNode() {},

			ReactReconcileTransaction: ReactNativeReconcileTransaction };

		module.exports = ReactNativeComponentEnvironment;
	},
	// Libraries/ReactNative/ReactNativeDOMIDOperations.js
	function (__inner_require__, exports, module) {
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var ReactMultiChildUpdateTypes = __inner_require__(30 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMultiChildUpdateTypes.js*/);
		var ReactPerf = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var dangerouslyProcessChildrenUpdates = function dangerouslyProcessChildrenUpdates(childrenUpdates, markupList) {
			if (!childrenUpdates.length) {
				return;
			}
			var byContainerTag = {};

			for (var i = 0; i < childrenUpdates.length; i++) {
				var update = childrenUpdates[i];
				var containerTag = ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(update.parentID);
				var updates = byContainerTag[containerTag] || (byContainerTag[containerTag] = {});
				if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING) {
					(updates.moveFromIndices || (updates.moveFromIndices = [])).push(update.fromIndex);
					(updates.moveToIndices || (updates.moveToIndices = [])).push(update.toIndex);
				} else if (update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
					(updates.removeAtIndices || (updates.removeAtIndices = [])).push(update.fromIndex);
				} else if (update.type === ReactMultiChildUpdateTypes.INSERT_MARKUP) {
					var mountImage = markupList[update.markupIndex];
					var tag = mountImage.tag;
					var rootNodeID = mountImage.rootNodeID;
					ReactNativeTagHandles.associateRootNodeIDWithMountedNodeHandle(rootNodeID, tag);
					(updates.addAtIndices || (updates.addAtIndices = [])).push(update.toIndex);
					(updates.addChildTags || (updates.addChildTags = [])).push(tag);
				}
			}

			for (var updateParentTagString in byContainerTag) {
				var updateParentTagNumber = +updateParentTagString;
				var childUpdatesToSend = byContainerTag[updateParentTagNumber];
				UIManager.manageChildren(updateParentTagNumber, childUpdatesToSend.moveFromIndices, childUpdatesToSend.moveToIndices, childUpdatesToSend.addChildTags, childUpdatesToSend.addAtIndices, childUpdatesToSend.removeAtIndices);
			}
		};

		var ReactNativeDOMIDOperations = {
			dangerouslyProcessChildrenUpdates: ReactPerf.measure('ReactDOMIDOperations', 'dangerouslyProcessChildrenUpdates', dangerouslyProcessChildrenUpdates),

			dangerouslyReplaceNodeWithMarkupByID: ReactPerf.measure('ReactDOMIDOperations', 'dangerouslyReplaceNodeWithMarkupByID', function (id, mountImage) {
				var oldTag = ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(id);
				UIManager.replaceExistingNonRootView(oldTag, mountImage.tag);
				ReactNativeTagHandles.associateRootNodeIDWithMountedNodeHandle(id, mountImage.tag);
			}) };

		module.exports = ReactNativeDOMIDOperations;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMultiChildUpdateTypes.js
	function (__inner_require__, exports, module) {
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');

		var ReactMultiChildUpdateTypes = keyMirror({
			INSERT_MARKUP: null,
			MOVE_EXISTING: null,
			REMOVE_NODE: null,
			SET_MARKUP: null,
			TEXT_CONTENT: null });

		module.exports = ReactMultiChildUpdateTypes;
	},
	// Libraries/ReactNative/ReactNativeReconcileTransaction.js
	function (__inner_require__, exports, module) {
		var CallbackQueue = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/CallbackQueue.js');
		var PooledClass = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js');
		var Transaction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Transaction.js');

		var ON_DOM_READY_QUEUEING = {

			initialize: function initialize() {
				this.reactMountReady.reset();
			},

			close: function close() {
				this.reactMountReady.notifyAll();
			} };

		var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];

		function ReactNativeReconcileTransaction() {
			this.reinitializeTransaction();
			this.reactMountReady = CallbackQueue.getPooled(null);
		}

		var Mixin = {

			getTransactionWrappers: function getTransactionWrappers() {
				return TRANSACTION_WRAPPERS;
			},

			getReactMountReady: function getReactMountReady() {
				return this.reactMountReady;
			},

			destructor: function destructor() {
				CallbackQueue.release(this.reactMountReady);
				this.reactMountReady = null;
			} };

		babelHelpers.extends(ReactNativeReconcileTransaction.prototype, Transaction.Mixin, ReactNativeReconcileTransaction, Mixin);

		PooledClass.addPoolingTo(ReactNativeReconcileTransaction);

		module.exports = ReactNativeReconcileTransaction;
	},
	// Libraries/ReactNative/ReactNativeGlobalInteractionHandler.js
	function (__inner_require__, exports, module) {
		var InteractionManager = __inner_require__(33 /*Libraries/Interaction/InteractionManager.js*/);

		var interactionHandle = null;

		var ReactNativeGlobalInteractionHandler = {
			onChange: function onChange(numberActiveTouches) {
				if (numberActiveTouches === 0) {
					if (interactionHandle) {
						InteractionManager.clearInteractionHandle(interactionHandle);
						interactionHandle = null;
					}
				} else if (!interactionHandle) {
					interactionHandle = InteractionManager.createInteractionHandle();
				}
			} };

		module.exports = ReactNativeGlobalInteractionHandler;
	},
	// Libraries/Interaction/InteractionManager.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');
		var Set = require('react-native@0.21/Libraries/vendor/core/Set.js');
		var TaskQueue = __inner_require__(34 /*Libraries/Interaction/TaskQueue.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');
		var setImmediate = require('react-native@0.21/Libraries/vendor/core/setImmediate.js');

		var _emitter = new EventEmitter();

		var InteractionManager = {
			Events: keyMirror({
				interactionStart: true,
				interactionComplete: true }),

			runAfterInteractions: function runAfterInteractions(task) {
				return new Promise(function (resolve) {
					_scheduleUpdate();
					if (task) {
						_taskQueue.enqueue(task);
					}
					var name = task && task.name || '?';
					_taskQueue.enqueue({ run: resolve, name: 'resolve ' + name });
				});
			},

			createInteractionHandle: function createInteractionHandle() {
				_scheduleUpdate();
				var handle = ++_inc;
				_addInteractionSet.add(handle);
				return handle;
			},

			clearInteractionHandle: function clearInteractionHandle(handle) {
				invariant(!!handle, 'Must provide a handle to clear.');

				_scheduleUpdate();
				_addInteractionSet.delete(handle);
				_deleteInteractionSet.add(handle);
			},

			addListener: _emitter.addListener.bind(_emitter),

			setDeadline: function setDeadline(deadline) {
				_deadline = deadline;
			} };

		var _interactionSet = new Set();
		var _addInteractionSet = new Set();
		var _deleteInteractionSet = new Set();
		var _taskQueue = new TaskQueue({ onMoreTasks: _scheduleUpdate });
		var _nextUpdateHandle = 0;
		var _inc = 0;
		var _deadline = -1;

		function _scheduleUpdate() {
			if (!_nextUpdateHandle) {
				if (_deadline > 0) {
					_nextUpdateHandle = setTimeout(_processUpdate, 0);
				} else {
					_nextUpdateHandle = setImmediate(_processUpdate);
				}
			}
		}

		function _processUpdate() {
			_nextUpdateHandle = 0;

			var interactionCount = _interactionSet.size;
			_addInteractionSet.forEach(function (handle) {
				return _interactionSet.add(handle);
			});

			_deleteInteractionSet.forEach(function (handle) {
				return _interactionSet.delete(handle);
			});

			var nextInteractionCount = _interactionSet.size;

			if (interactionCount !== 0 && nextInteractionCount === 0) {

				_emitter.emit(InteractionManager.Events.interactionComplete);
			} else if (interactionCount === 0 && nextInteractionCount !== 0) {

				_emitter.emit(InteractionManager.Events.interactionStart);
			}

			if (nextInteractionCount === 0) {
				while (_taskQueue.hasTasksToProcess()) {
					_taskQueue.processNext();
					if (_deadline > 0 && BatchedBridge.getEventLoopRunningTime() >= _deadline) {

						_scheduleUpdate();
						break;
					}
				}
			}
			_addInteractionSet.clear();
			_deleteInteractionSet.clear();
		}

		module.exports = InteractionManager;
	},
	// Libraries/Interaction/TaskQueue.js
	function (__inner_require__, exports, module) {
		var ErrorUtils = require('react-native@0.21/Libraries/Utilities/ErrorUtils.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');var TaskQueue = function () {

			function TaskQueue(_ref) {
				var onMoreTasks = _ref.onMoreTasks;babelHelpers.classCallCheck(this, TaskQueue);
				this._onMoreTasks = onMoreTasks;
				this._queueStack = [{ tasks: [], popable: false }];
			}babelHelpers.createClass(TaskQueue, [{ key: 'enqueue', value: function enqueue(task) {
					this._getCurrentQueue().push(task);
				} }, { key: 'hasTasksToProcess', value: function hasTasksToProcess() {
					return this._getCurrentQueue().length > 0;
				} }, { key: 'processNext', value: function processNext() {
					var queue = this._getCurrentQueue();
					if (queue.length) {
						var task = queue.shift();
						try {
							if (task.gen) {
								this._genPromise(task);
							} else if (task.run) {
								task.run();
							} else {
								invariant(typeof task === 'function', 'Expected Function, SimpleTask, or PromiseTask, but got: ' + JSON.stringify(task));

								task();
							}
						} catch (e) {
							e.message = 'TaskQueue: Error with task' + (task.name || ' ') + ': ' + e.message;
							ErrorUtils.reportError(e);
						}
					}
				} }, { key: '_getCurrentQueue', value: function _getCurrentQueue() {
					var stackIdx = this._queueStack.length - 1;
					var queue = this._queueStack[stackIdx];
					if (queue.popable && queue.tasks.length === 0 && this._queueStack.length > 1) {
						this._queueStack.pop();
						return this._getCurrentQueue();
					} else {
						return queue.tasks;
					}
				} }, { key: '_genPromise', value: function _genPromise(task) {
					var _this = this;

					this._queueStack.push({ tasks: [], popable: false });
					var stackIdx = this._queueStack.length - 1;
					ErrorUtils.applyWithGuard(task.gen).then(function () {
						_this._queueStack[stackIdx].popable = true;
						_this.hasTasksToProcess() && _this._onMoreTasks();
					}).catch(function (ex) {
						console.warn('TaskQueue: Error resolving Promise in task ' + task.name, ex);

						throw ex;
					});
				} }]);return TaskQueue;
		}();

		module.exports = TaskQueue;
	},
	// Libraries/ReactNative/ReactNativeGlobalResponderHandler.js
	function (__inner_require__, exports, module) {
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var ReactNativeGlobalResponderHandler = {
			onChange: function onChange(from, to, blockNativeResponder) {
				if (to !== null) {
					UIManager.setJSResponder(ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(to), blockNativeResponder);
				} else {
					UIManager.clearJSResponder();
				}
			} };

		module.exports = ReactNativeGlobalResponderHandler;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ResponderEventPlugin.js
	function (__inner_require__, exports, module) {
		var EventConstants = __inner_require__(15 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js*/);
		var EventPluginUtils = __inner_require__(14 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginUtils.js*/);
		var EventPropagators = __inner_require__(21 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPropagators.js*/);
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');
		var ResponderSyntheticEvent = __inner_require__(37 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ResponderSyntheticEvent.js*/);
		var ResponderTouchHistoryStore = __inner_require__(38 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ResponderTouchHistoryStore.js*/);

		var accumulate = __inner_require__(39 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/accumulate.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);

		var isStartish = EventPluginUtils.isStartish;
		var isMoveish = EventPluginUtils.isMoveish;
		var isEndish = EventPluginUtils.isEndish;
		var executeDirectDispatch = EventPluginUtils.executeDirectDispatch;
		var hasDispatches = EventPluginUtils.hasDispatches;
		var executeDispatchesInOrderStopAtTrue = EventPluginUtils.executeDispatchesInOrderStopAtTrue;

		var responderID = null;

		var trackedTouchCount = 0;

		var previousActiveTouches = 0;

		var changeResponder = function changeResponder(nextResponderID, blockNativeResponder) {
			var oldResponderID = responderID;
			responderID = nextResponderID;
			if (ResponderEventPlugin.GlobalResponderHandler !== null) {
				ResponderEventPlugin.GlobalResponderHandler.onChange(oldResponderID, nextResponderID, blockNativeResponder);
			}
		};

		var eventTypes = {

			startShouldSetResponder: {
				phasedRegistrationNames: {
					bubbled: keyOf({ onStartShouldSetResponder: null }),
					captured: keyOf({ onStartShouldSetResponderCapture: null }) } },

			scrollShouldSetResponder: {
				phasedRegistrationNames: {
					bubbled: keyOf({ onScrollShouldSetResponder: null }),
					captured: keyOf({ onScrollShouldSetResponderCapture: null }) } },

			selectionChangeShouldSetResponder: {
				phasedRegistrationNames: {
					bubbled: keyOf({ onSelectionChangeShouldSetResponder: null }),
					captured: keyOf({ onSelectionChangeShouldSetResponderCapture: null }) } },

			moveShouldSetResponder: {
				phasedRegistrationNames: {
					bubbled: keyOf({ onMoveShouldSetResponder: null }),
					captured: keyOf({ onMoveShouldSetResponderCapture: null }) } },

			responderStart: { registrationName: keyOf({ onResponderStart: null }) },
			responderMove: { registrationName: keyOf({ onResponderMove: null }) },
			responderEnd: { registrationName: keyOf({ onResponderEnd: null }) },
			responderRelease: { registrationName: keyOf({ onResponderRelease: null }) },
			responderTerminationRequest: {
				registrationName: keyOf({ onResponderTerminationRequest: null }) },

			responderGrant: { registrationName: keyOf({ onResponderGrant: null }) },
			responderReject: { registrationName: keyOf({ onResponderReject: null }) },
			responderTerminate: { registrationName: keyOf({ onResponderTerminate: null }) } };

		function setResponderAndExtractTransfer(topLevelType, topLevelTargetID, nativeEvent, nativeEventTarget) {
			var shouldSetEventType = isStartish(topLevelType) ? eventTypes.startShouldSetResponder : isMoveish(topLevelType) ? eventTypes.moveShouldSetResponder : topLevelType === EventConstants.topLevelTypes.topSelectionChange ? eventTypes.selectionChangeShouldSetResponder : eventTypes.scrollShouldSetResponder;

			var bubbleShouldSetFrom = !responderID ? topLevelTargetID : ReactInstanceHandles.getFirstCommonAncestorID(responderID, topLevelTargetID);

			var skipOverBubbleShouldSetFrom = bubbleShouldSetFrom === responderID;
			var shouldSetEvent = ResponderSyntheticEvent.getPooled(shouldSetEventType, bubbleShouldSetFrom, nativeEvent, nativeEventTarget);
			shouldSetEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			if (skipOverBubbleShouldSetFrom) {
				EventPropagators.accumulateTwoPhaseDispatchesSkipTarget(shouldSetEvent);
			} else {
				EventPropagators.accumulateTwoPhaseDispatches(shouldSetEvent);
			}
			var wantsResponderID = executeDispatchesInOrderStopAtTrue(shouldSetEvent);
			if (!shouldSetEvent.isPersistent()) {
				shouldSetEvent.constructor.release(shouldSetEvent);
			}

			if (!wantsResponderID || wantsResponderID === responderID) {
				return null;
			}
			var extracted;
			var grantEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderGrant, wantsResponderID, nativeEvent, nativeEventTarget);
			grantEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;

			EventPropagators.accumulateDirectDispatches(grantEvent);
			var blockNativeResponder = executeDirectDispatch(grantEvent) === true;
			if (responderID) {

				var terminationRequestEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderTerminationRequest, responderID, nativeEvent, nativeEventTarget);
				terminationRequestEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
				EventPropagators.accumulateDirectDispatches(terminationRequestEvent);
				var shouldSwitch = !hasDispatches(terminationRequestEvent) || executeDirectDispatch(terminationRequestEvent);
				if (!terminationRequestEvent.isPersistent()) {
					terminationRequestEvent.constructor.release(terminationRequestEvent);
				}

				if (shouldSwitch) {
					var terminateType = eventTypes.responderTerminate;
					var terminateEvent = ResponderSyntheticEvent.getPooled(terminateType, responderID, nativeEvent, nativeEventTarget);
					terminateEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
					EventPropagators.accumulateDirectDispatches(terminateEvent);
					extracted = accumulate(extracted, [grantEvent, terminateEvent]);
					changeResponder(wantsResponderID, blockNativeResponder);
				} else {
					var rejectEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderReject, wantsResponderID, nativeEvent, nativeEventTarget);
					rejectEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
					EventPropagators.accumulateDirectDispatches(rejectEvent);
					extracted = accumulate(extracted, rejectEvent);
				}
			} else {
				extracted = accumulate(extracted, grantEvent);
				changeResponder(wantsResponderID, blockNativeResponder);
			}
			return extracted;
		}

		function canTriggerTransfer(topLevelType, topLevelTargetID, nativeEvent) {
			return topLevelTargetID && (topLevelType === EventConstants.topLevelTypes.topScroll && !nativeEvent.responderIgnoreScroll || trackedTouchCount > 0 && topLevelType === EventConstants.topLevelTypes.topSelectionChange || isStartish(topLevelType) || isMoveish(topLevelType));
		}

		function noResponderTouches(nativeEvent) {
			var touches = nativeEvent.touches;
			if (!touches || touches.length === 0) {
				return true;
			}
			for (var i = 0; i < touches.length; i++) {
				var activeTouch = touches[i];
				var target = activeTouch.target;
				if (target !== null && target !== undefined && target !== 0) {

					var isAncestor = ReactInstanceHandles.isAncestorIDOf(responderID, EventPluginUtils.getID(target));
					if (isAncestor) {
						return false;
					}
				}
			}
			return true;
		}

		var ResponderEventPlugin = {

			getResponderID: function getResponderID() {
				return responderID;
			},

			eventTypes: eventTypes,

			extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
				if (isStartish(topLevelType)) {
					trackedTouchCount += 1;
				} else if (isEndish(topLevelType)) {
					trackedTouchCount -= 1;
					!(trackedTouchCount >= 0) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Ended a touch event which was not counted in trackedTouchCount.') : invariant(false) : undefined;
				}

				ResponderTouchHistoryStore.recordTouchTrack(topLevelType, nativeEvent, nativeEventTarget);

				var extracted = canTriggerTransfer(topLevelType, topLevelTargetID, nativeEvent) ? setResponderAndExtractTransfer(topLevelType, topLevelTargetID, nativeEvent, nativeEventTarget) : null;

				var isResponderTouchStart = responderID && isStartish(topLevelType);
				var isResponderTouchMove = responderID && isMoveish(topLevelType);
				var isResponderTouchEnd = responderID && isEndish(topLevelType);
				var incrementalTouch = isResponderTouchStart ? eventTypes.responderStart : isResponderTouchMove ? eventTypes.responderMove : isResponderTouchEnd ? eventTypes.responderEnd : null;

				if (incrementalTouch) {
					var gesture = ResponderSyntheticEvent.getPooled(incrementalTouch, responderID, nativeEvent, nativeEventTarget);
					gesture.touchHistory = ResponderTouchHistoryStore.touchHistory;
					EventPropagators.accumulateDirectDispatches(gesture);
					extracted = accumulate(extracted, gesture);
				}

				var isResponderTerminate = responderID && topLevelType === EventConstants.topLevelTypes.topTouchCancel;
				var isResponderRelease = responderID && !isResponderTerminate && isEndish(topLevelType) && noResponderTouches(nativeEvent);
				var finalTouch = isResponderTerminate ? eventTypes.responderTerminate : isResponderRelease ? eventTypes.responderRelease : null;
				if (finalTouch) {
					var finalEvent = ResponderSyntheticEvent.getPooled(finalTouch, responderID, nativeEvent, nativeEventTarget);
					finalEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
					EventPropagators.accumulateDirectDispatches(finalEvent);
					extracted = accumulate(extracted, finalEvent);
					changeResponder(null);
				}

				var numberActiveTouches = ResponderTouchHistoryStore.touchHistory.numberActiveTouches;
				if (ResponderEventPlugin.GlobalInteractionHandler && numberActiveTouches !== previousActiveTouches) {
					ResponderEventPlugin.GlobalInteractionHandler.onChange(numberActiveTouches);
				}
				previousActiveTouches = numberActiveTouches;

				return extracted;
			},

			GlobalResponderHandler: null,
			GlobalInteractionHandler: null,

			injection: {

				injectGlobalResponderHandler: function injectGlobalResponderHandler(GlobalResponderHandler) {
					ResponderEventPlugin.GlobalResponderHandler = GlobalResponderHandler;
				},

				injectGlobalInteractionHandler: function injectGlobalInteractionHandler(GlobalInteractionHandler) {
					ResponderEventPlugin.GlobalInteractionHandler = GlobalInteractionHandler;
				} } };

		module.exports = ResponderEventPlugin;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ResponderSyntheticEvent.js
	function (__inner_require__, exports, module) {
		var SyntheticEvent = __inner_require__(22 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/SyntheticEvent.js*/);

		var ResponderEventInterface = {
			touchHistory: function touchHistory(nativeEvent) {
				return null;
			} };

		function ResponderSyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
			SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
		}

		SyntheticEvent.augmentClass(ResponderSyntheticEvent, ResponderEventInterface);

		module.exports = ResponderSyntheticEvent;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ResponderTouchHistoryStore.js
	function (__inner_require__, exports, module) {
		var EventPluginUtils = __inner_require__(14 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginUtils.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var isMoveish = EventPluginUtils.isMoveish;
		var isStartish = EventPluginUtils.isStartish;
		var isEndish = EventPluginUtils.isEndish;

		var MAX_TOUCH_BANK = 20;

		var touchHistory = {
			touchBank: [],
			numberActiveTouches: 0,

			indexOfSingleActiveTouch: -1,
			mostRecentTimeStamp: 0 };

		var timestampForTouch = function timestampForTouch(touch) {

			return touch.timeStamp || touch.timestamp;
		};

		var initializeTouchData = function initializeTouchData(touch) {
			return {
				touchActive: true,
				startTimeStamp: timestampForTouch(touch),
				startPageX: touch.pageX,
				startPageY: touch.pageY,
				currentPageX: touch.pageX,
				currentPageY: touch.pageY,
				currentTimeStamp: timestampForTouch(touch),
				previousPageX: touch.pageX,
				previousPageY: touch.pageY,
				previousTimeStamp: timestampForTouch(touch) };
		};

		var reinitializeTouchTrack = function reinitializeTouchTrack(touchTrack, touch) {
			touchTrack.touchActive = true;
			touchTrack.startTimeStamp = timestampForTouch(touch);
			touchTrack.startPageX = touch.pageX;
			touchTrack.startPageY = touch.pageY;
			touchTrack.currentPageX = touch.pageX;
			touchTrack.currentPageY = touch.pageY;
			touchTrack.currentTimeStamp = timestampForTouch(touch);
			touchTrack.previousPageX = touch.pageX;
			touchTrack.previousPageY = touch.pageY;
			touchTrack.previousTimeStamp = timestampForTouch(touch);
		};

		var validateTouch = function validateTouch(touch) {
			var identifier = touch.identifier;
			!(identifier != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Touch object is missing identifier') : invariant(false) : undefined;
			if (identifier > MAX_TOUCH_BANK) {
				console.warn('Touch identifier ' + identifier + ' is greater than maximum ' + 'supported ' + MAX_TOUCH_BANK + ' which causes performance issues ' + 'backfilling array locations for all of the indices.');
			}
		};

		var recordStartTouchData = function recordStartTouchData(touch) {
			var touchBank = touchHistory.touchBank;
			var identifier = touch.identifier;
			var touchTrack = touchBank[identifier];
			if (process.env.NODE_ENV !== 'production') {
				validateTouch(touch);
			}
			if (touchTrack) {
				reinitializeTouchTrack(touchTrack, touch);
			} else {
				touchBank[touch.identifier] = initializeTouchData(touch);
			}
			touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
		};

		var recordMoveTouchData = function recordMoveTouchData(touch) {
			var touchBank = touchHistory.touchBank;
			var touchTrack = touchBank[touch.identifier];
			if (process.env.NODE_ENV !== 'production') {
				validateTouch(touch);
				!touchTrack ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Touch data should have been recorded on start') : invariant(false) : undefined;
			}
			touchTrack.touchActive = true;
			touchTrack.previousPageX = touchTrack.currentPageX;
			touchTrack.previousPageY = touchTrack.currentPageY;
			touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
			touchTrack.currentPageX = touch.pageX;
			touchTrack.currentPageY = touch.pageY;
			touchTrack.currentTimeStamp = timestampForTouch(touch);
			touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
		};

		var recordEndTouchData = function recordEndTouchData(touch) {
			var touchBank = touchHistory.touchBank;
			var touchTrack = touchBank[touch.identifier];
			if (process.env.NODE_ENV !== 'production') {
				validateTouch(touch);
				!touchTrack ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Touch data should have been recorded on start') : invariant(false) : undefined;
			}
			touchTrack.previousPageX = touchTrack.currentPageX;
			touchTrack.previousPageY = touchTrack.currentPageY;
			touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
			touchTrack.currentPageX = touch.pageX;
			touchTrack.currentPageY = touch.pageY;
			touchTrack.currentTimeStamp = timestampForTouch(touch);
			touchTrack.touchActive = false;
			touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
		};

		var ResponderTouchHistoryStore = {
			recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
				var touchBank = touchHistory.touchBank;
				if (isMoveish(topLevelType)) {
					nativeEvent.changedTouches.forEach(recordMoveTouchData);
				} else if (isStartish(topLevelType)) {
					nativeEvent.changedTouches.forEach(recordStartTouchData);
					touchHistory.numberActiveTouches = nativeEvent.touches.length;
					if (touchHistory.numberActiveTouches === 1) {
						touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
					}
				} else if (isEndish(topLevelType)) {
					nativeEvent.changedTouches.forEach(recordEndTouchData);
					touchHistory.numberActiveTouches = nativeEvent.touches.length;
					if (touchHistory.numberActiveTouches === 1) {
						for (var i = 0; i < touchBank.length; i++) {
							var touchTrackToCheck = touchBank[i];
							if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
								touchHistory.indexOfSingleActiveTouch = i;
								break;
							}
						}
						if (process.env.NODE_ENV !== 'production') {
							var activeTouchData = touchBank[touchHistory.indexOfSingleActiveTouch];
							var foundActive = activeTouchData != null && !!activeTouchData.touchActive;
							!foundActive ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot find single active touch') : invariant(false) : undefined;
						}
					}
				}
			},

			touchHistory: touchHistory };

		module.exports = ResponderTouchHistoryStore;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/accumulate.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		function accumulate(current, next) {
			!(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulate(...): Accumulated items must be not be null or undefined.') : invariant(false) : undefined;
			if (current == null) {
				return next;
			} else {

				var currentIsArray = Array.isArray(current);
				var nextIsArray = Array.isArray(next);
				if (currentIsArray) {
					return current.concat(next);
				} else {
					if (nextIsArray) {
						return [current].concat(next);
					} else {
						return [current, next];
					}
				}
			}
		}

		module.exports = accumulate;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js
	function (__inner_require__, exports, module) {
		var keyOf = function keyOf(oneKeyObj) {
			var key;
			for (key in oneKeyObj) {
				if (!oneKeyObj.hasOwnProperty(key)) {
					continue;
				}
				return key;
			}
			return null;
		};

		module.exports = keyOf;
	},
	// Libraries/vendor/react/platformImplementations/universal/worker/UniversalWorkerNodeHandle.js
	function (__inner_require__, exports, module) {
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var UniversalWorkerNodeHandle = {
			getRootNodeID: function getRootNodeID(nodeHandle) {
				invariant(nodeHandle !== undefined && nodeHandle !== null && nodeHandle !== 0, 'No node handle defined');

				return ReactNativeTagHandles.tagToRootNodeID[nodeHandle];
			} };

		module.exports = UniversalWorkerNodeHandle;
	},
	// Libraries/BatchedBridge/BatchedBridgedModules/RCTEventEmitter.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');
		var ReactNativeEventEmitter = __inner_require__(43 /*Libraries/ReactNative/ReactNativeEventEmitter.js*/);

		BatchedBridge.registerCallableModule('RCTEventEmitter', ReactNativeEventEmitter);

		module.exports = ReactNativeEventEmitter;
	},
	// Libraries/ReactNative/ReactNativeEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventPluginHub = __inner_require__(12 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js*/);
		var ReactEventEmitterMixin = __inner_require__(44 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEventEmitterMixin.js*/);
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var NodeHandle = __inner_require__(26 /*Libraries/vendor/react/platform/NodeHandle.js*/);
		var EventConstants = __inner_require__(15 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js*/);

		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var topLevelTypes = EventConstants.topLevelTypes;

		var EMPTY_NATIVE_EVENT = {};

		var touchSubsequence = function touchSubsequence(touches, indices) {
			var ret = [];
			for (var i = 0; i < indices.length; i++) {
				ret.push(touches[indices[i]]);
			}
			return ret;
		};

		var removeTouchesAtIndices = function removeTouchesAtIndices(touches, indices) {
			var rippedOut = [];

			var temp = touches;
			for (var i = 0; i < indices.length; i++) {
				var index = indices[i];
				rippedOut.push(touches[index]);
				temp[index] = null;
			}
			var fillAt = 0;
			for (var j = 0; j < temp.length; j++) {
				var cur = temp[j];
				if (cur !== null) {
					temp[fillAt++] = cur;
				}
			}
			temp.length = fillAt;
			return rippedOut;
		};

		var ReactNativeEventEmitter = merge(ReactEventEmitterMixin, {

			registrationNames: EventPluginHub.registrationNameModules,

			putListener: EventPluginHub.putListener,

			getListener: EventPluginHub.getListener,

			deleteListener: EventPluginHub.deleteListener,

			deleteAllListeners: EventPluginHub.deleteAllListeners,

			_receiveRootNodeIDEvent: function _receiveRootNodeIDEvent(rootNodeID, topLevelType, nativeEventParam) {
				var nativeEvent = nativeEventParam || EMPTY_NATIVE_EVENT;
				ReactNativeEventEmitter.handleTopLevel(topLevelType, rootNodeID, rootNodeID, nativeEvent, nativeEvent.target);
			},

			receiveEvent: function receiveEvent(tag, topLevelType, nativeEventParam) {
				var rootNodeID = ReactNativeTagHandles.tagToRootNodeID[tag];
				ReactNativeEventEmitter._receiveRootNodeIDEvent(rootNodeID, topLevelType, nativeEventParam);
			},

			receiveTouches: function receiveTouches(eventTopLevelType, touches, changedIndices) {
				var changedTouches = eventTopLevelType === topLevelTypes.topTouchEnd || eventTopLevelType === topLevelTypes.topTouchCancel ? removeTouchesAtIndices(touches, changedIndices) : touchSubsequence(touches, changedIndices);

				for (var jj = 0; jj < changedTouches.length; jj++) {
					var touch = changedTouches[jj];

					touch.changedTouches = changedTouches;
					touch.touches = touches;
					var nativeEvent = touch;
					var rootNodeID = null;
					var target = nativeEvent.target;
					if (target !== null && target !== undefined) {
						if (target < ReactNativeTagHandles.tagsStartAt) {
							if (__DEV__) {
								warning(false, 'A view is reporting that a touch occured on tag zero.');
							}
						} else {
							rootNodeID = NodeHandle.getRootNodeID(target);
						}
					}
					ReactNativeEventEmitter._receiveRootNodeIDEvent(rootNodeID, eventTopLevelType, nativeEvent);
				}
			} });

		module.exports = ReactNativeEventEmitter;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEventEmitterMixin.js
	function (__inner_require__, exports, module) {
		var EventPluginHub = __inner_require__(12 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js*/);

		function runEventQueueInBatch(events) {
			EventPluginHub.enqueueEvents(events);
			EventPluginHub.processEventQueue(false);
		}

		var ReactEventEmitterMixin = {

			handleTopLevel: function handleTopLevel(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
				var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
				runEventQueueInBatch(events);
			} };

		module.exports = ReactEventEmitterMixin;
	},
	// Libraries/Utilities/RCTLog.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var levelsMap = {
			log: 'log',
			info: 'info',
			warn: 'warn',
			error: 'error',
			fatal: 'error' };var RCTLog = function () {
			function RCTLog() {
				babelHelpers.classCallCheck(this, RCTLog);
			}babelHelpers.createClass(RCTLog, null, [{ key: 'logIfNoNativeHook', value: function logIfNoNativeHook() {
					var args = Array.prototype.slice.call(arguments);
					var level = args.shift();
					var logFn = levelsMap[level];
					invariant(logFn, 'Level "' + level + '" not one of ' + Object.keys(levelsMap));

					if (typeof global.nativeLoggingHook === 'undefined') {

						console[logFn].apply(console, args);
					}
					return true;
				} }]);return RCTLog;
		}();

		BatchedBridge.registerCallableModule('RCTLog', RCTLog);

		module.exports = RCTLog;
	},
	// Libraries/Components/View/View.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactNativeStyleAttributes = __inner_require__(47 /*Libraries/Components/View/ReactNativeStyleAttributes.js*/);
		var ReactNativeViewAttributes = __inner_require__(61 /*Libraries/Components/View/ReactNativeViewAttributes.js*/);
		var StyleSheetPropType = __inner_require__(62 /*Libraries/StyleSheet/StyleSheetPropType.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var stylePropType = StyleSheetPropType(ViewStylePropTypes);

		var AccessibilityTraits = ['none', 'button', 'link', 'header', 'search', 'image', 'selected', 'plays', 'key', 'text', 'summary', 'disabled', 'frequentUpdates', 'startsMedia', 'adjustable', 'allowsDirectInteraction', 'pageTurn'];

		var AccessibilityComponentType = ['none', 'button', 'radiobutton_checked', 'radiobutton_unchecked'];

		var forceTouchAvailable = UIManager.RCTView.Constants && UIManager.RCTView.Constants.forceTouchAvailable || false;

		var statics = {
			AccessibilityTraits: AccessibilityTraits,
			AccessibilityComponentType: AccessibilityComponentType,

			forceTouchAvailable: forceTouchAvailable };

		var View = React.createClass({ displayName: 'View',
			mixins: [NativeMethodsMixin],

			viewConfig: {
				uiViewClassName: 'RCTView',
				validAttributes: ReactNativeViewAttributes.RCTView },

			statics: babelHelpers.extends({}, statics),

			propTypes: {

				accessible: PropTypes.bool,

				accessibilityLabel: PropTypes.string,

				accessibilityComponentType: PropTypes.oneOf(AccessibilityComponentType),

				accessibilityLiveRegion: PropTypes.oneOf(['none', 'polite', 'assertive']),

				importantForAccessibility: PropTypes.oneOf(['auto', 'yes', 'no', 'no-hide-descendants']),

				accessibilityTraits: PropTypes.oneOfType([PropTypes.oneOf(AccessibilityTraits), PropTypes.arrayOf(PropTypes.oneOf(AccessibilityTraits))]),

				onAccessibilityTap: PropTypes.func,

				onMagicTap: PropTypes.func,

				testID: PropTypes.string,

				onResponderGrant: PropTypes.func,
				onResponderMove: PropTypes.func,
				onResponderReject: PropTypes.func,
				onResponderRelease: PropTypes.func,
				onResponderTerminate: PropTypes.func,
				onResponderTerminationRequest: PropTypes.func,
				onStartShouldSetResponder: PropTypes.func,
				onStartShouldSetResponderCapture: PropTypes.func,
				onMoveShouldSetResponder: PropTypes.func,
				onMoveShouldSetResponderCapture: PropTypes.func,

				onLayout: PropTypes.func,

				pointerEvents: PropTypes.oneOf(['box-none', 'none', 'box-only', 'auto']),

				style: stylePropType,

				removeClippedSubviews: PropTypes.bool,

				renderToHardwareTextureAndroid: PropTypes.bool,

				shouldRasterizeIOS: PropTypes.bool,

				collapsable: PropTypes.bool,

				needsOffscreenAlphaCompositing: PropTypes.bool },

			render: function render() {

				return React.createElement(RCTView, this.props);
			} });

		var RCTView = requireNativeComponent('RCTView', View, {
			nativeOnly: {
				nativeBackgroundAndroid: true } });

		if (__DEV__) {
			var viewConfig = UIManager.viewConfigs && UIManager.viewConfigs.RCTView || {};
			for (var prop in viewConfig.nativeProps) {
				var viewAny = View;
				if (!viewAny.propTypes[prop] && !ReactNativeStyleAttributes[prop]) {
					throw new Error('View is missing propType for native prop `' + prop + '`');
				}
			}
		}

		var ViewToExport = RCTView;
		if (__DEV__) {
			ViewToExport = View;
		} else {
			babelHelpers.extends(RCTView, statics);
		}

		module.exports = ViewToExport;
	},
	// Libraries/Components/View/ReactNativeStyleAttributes.js
	function (__inner_require__, exports, module) {
		var ImageStylePropTypes = __inner_require__(48 /*Libraries/Image/ImageStylePropTypes.js*/);
		var TextStylePropTypes = __inner_require__(55 /*Libraries/Text/TextStylePropTypes.js*/);
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');
		var matricesDiffer = __inner_require__(57 /*Libraries/Utilities/differ/matricesDiffer.js*/);
		var processColor = require('react-native@0.21/Libraries/StyleSheet/processColor.js');
		var processTransform = __inner_require__(58 /*Libraries/StyleSheet/processTransform.js*/);
		var sizesDiffer = __inner_require__(60 /*Libraries/Utilities/differ/sizesDiffer.js*/);

		var ReactNativeStyleAttributes = babelHelpers.extends({}, keyMirror(ViewStylePropTypes), keyMirror(TextStylePropTypes), keyMirror(ImageStylePropTypes));

		ReactNativeStyleAttributes.transform = { process: processTransform };
		ReactNativeStyleAttributes.transformMatrix = { diff: matricesDiffer };
		ReactNativeStyleAttributes.shadowOffset = { diff: sizesDiffer };

		ReactNativeStyleAttributes.decomposedMatrix = 'decomposedMatrix';

		var colorAttributes = { process: processColor };
		ReactNativeStyleAttributes.backgroundColor = colorAttributes;
		ReactNativeStyleAttributes.borderBottomColor = colorAttributes;
		ReactNativeStyleAttributes.borderColor = colorAttributes;
		ReactNativeStyleAttributes.borderLeftColor = colorAttributes;
		ReactNativeStyleAttributes.borderRightColor = colorAttributes;
		ReactNativeStyleAttributes.borderTopColor = colorAttributes;
		ReactNativeStyleAttributes.color = colorAttributes;
		ReactNativeStyleAttributes.shadowColor = colorAttributes;
		ReactNativeStyleAttributes.textDecorationColor = colorAttributes;
		ReactNativeStyleAttributes.tintColor = colorAttributes;
		ReactNativeStyleAttributes.textShadowColor = colorAttributes;
		ReactNativeStyleAttributes.overlayColor = colorAttributes;

		module.exports = ReactNativeStyleAttributes;
	},
	// Libraries/Image/ImageStylePropTypes.js
	function (__inner_require__, exports, module) {
		var ImageResizeMode = __inner_require__(49 /*Libraries/Image/ImageResizeMode.js*/);
		var LayoutPropTypes = __inner_require__(50 /*Libraries/StyleSheet/LayoutPropTypes.js*/);
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var ShadowPropTypesIOS = __inner_require__(52 /*Libraries/Components/View/ShadowPropTypesIOS.js*/);
		var TransformPropTypes = __inner_require__(53 /*Libraries/StyleSheet/TransformPropTypes.js*/);

		var ImageStylePropTypes = babelHelpers.extends({}, LayoutPropTypes, ShadowPropTypesIOS, TransformPropTypes, {
			resizeMode: ReactPropTypes.oneOf(Object.keys(ImageResizeMode)),
			backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
			backgroundColor: ColorPropType,
			borderColor: ColorPropType,
			borderWidth: ReactPropTypes.number,
			borderRadius: ReactPropTypes.number,
			overflow: ReactPropTypes.oneOf(['visible', 'hidden']),

			tintColor: ColorPropType,
			opacity: ReactPropTypes.number,

			overlayColor: ReactPropTypes.string });

		module.exports = ImageStylePropTypes;
	},
	// Libraries/Image/ImageResizeMode.js
	function (__inner_require__, exports, module) {
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');

		var ImageResizeMode = keyMirror({

			contain: null,

			cover: null,

			stretch: null });

		module.exports = ImageResizeMode;
	},
	// Libraries/StyleSheet/LayoutPropTypes.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);

		var LayoutPropTypes = {
			width: ReactPropTypes.number,
			height: ReactPropTypes.number,
			top: ReactPropTypes.number,
			left: ReactPropTypes.number,
			right: ReactPropTypes.number,
			bottom: ReactPropTypes.number,
			margin: ReactPropTypes.number,
			marginVertical: ReactPropTypes.number,
			marginHorizontal: ReactPropTypes.number,
			marginTop: ReactPropTypes.number,
			marginBottom: ReactPropTypes.number,
			marginLeft: ReactPropTypes.number,
			marginRight: ReactPropTypes.number,
			padding: ReactPropTypes.number,
			paddingVertical: ReactPropTypes.number,
			paddingHorizontal: ReactPropTypes.number,
			paddingTop: ReactPropTypes.number,
			paddingBottom: ReactPropTypes.number,
			paddingLeft: ReactPropTypes.number,
			paddingRight: ReactPropTypes.number,
			borderWidth: ReactPropTypes.number,
			borderTopWidth: ReactPropTypes.number,
			borderRightWidth: ReactPropTypes.number,
			borderBottomWidth: ReactPropTypes.number,
			borderLeftWidth: ReactPropTypes.number,

			position: ReactPropTypes.oneOf(['absolute', 'relative']),

			flexDirection: ReactPropTypes.oneOf(['row', 'column']),

			flexWrap: ReactPropTypes.oneOf(['wrap', 'nowrap']),

			justifyContent: ReactPropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),

			alignItems: ReactPropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch']),

			alignSelf: ReactPropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'stretch']),

			flex: ReactPropTypes.number };

		module.exports = LayoutPropTypes;
	},
	// Libraries/StyleSheet/ColorPropType.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var ReactPropTypeLocationNames = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocationNames.js');

		var normalizeColor = require('react-native@0.21/Libraries/StyleSheet/normalizeColor.js');

		var colorPropType = function colorPropType(isRequired, props, propName, componentName, location, propFullName) {
			var color = props[propName];
			if (color === undefined || color === null) {
				if (isRequired) {
					var locationName = ReactPropTypeLocationNames[location];
					return new Error('Required ' + locationName + ' `' + (propFullName || propName) + '` was not specified in `' + componentName + '`.');
				}
				return;
			}

			if (typeof color === 'number') {

				return;
			}

			if (normalizeColor(color) === null) {
				var locationName = ReactPropTypeLocationNames[location];
				return new Error('Invalid ' + locationName + ' `' + (propFullName || propName) + '` supplied to `' + componentName + '`: ' + color + '\n' + 'Valid color formats are\n  - \'#f0f\' (#rgb)\n  - \'#f0fc\' (#rgba)\n  - \'#ff00ff\' (#rrggbb)\n  - \'#ff00ff00\' (#rrggbbaa)\n  - \'rgb(255, 255, 255)\'\n  - \'rgba(255, 255, 255, 1.0)\'\n  - \'hsl(360, 100%, 100%)\'\n  - \'hsla(360, 100%, 100%, 1.0)\'\n  - \'transparent\'\n  - \'red\'\n  - 0xff00ff00 (0xrrggbbaa)\n');
			}
		};

		var ColorPropType = colorPropType.bind(null, false);
		ColorPropType.isRequired = colorPropType.bind(null, true);

		module.exports = ColorPropType;
	},
	// Libraries/Components/View/ShadowPropTypesIOS.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);

		var ShadowPropTypesIOS = {

			shadowColor: ColorPropType,

			shadowOffset: ReactPropTypes.shape({ width: ReactPropTypes.number, height: ReactPropTypes.number }),

			shadowOpacity: ReactPropTypes.number,

			shadowRadius: ReactPropTypes.number };

		module.exports = ShadowPropTypesIOS;
	},
	// Libraries/StyleSheet/TransformPropTypes.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var deprecatedPropType = __inner_require__(54 /*Libraries/Utilities/deprecatedPropType.js*/);

		var ArrayOfNumberPropType = ReactPropTypes.arrayOf(ReactPropTypes.number);

		var TransformMatrixPropType = function TransformMatrixPropType(props, propName, componentName) {
			if (props.transform && props.transformMatrix) {
				return new Error('transformMatrix and transform styles cannot be used on the same ' + 'component');
			}
			return ArrayOfNumberPropType(props, propName, componentName);
		};

		var TransformPropTypes = {
			transform: ReactPropTypes.arrayOf(ReactPropTypes.oneOfType([ReactPropTypes.shape({ perspective: ReactPropTypes.number }), ReactPropTypes.shape({ rotate: ReactPropTypes.string }), ReactPropTypes.shape({ rotateX: ReactPropTypes.string }), ReactPropTypes.shape({ rotateY: ReactPropTypes.string }), ReactPropTypes.shape({ rotateZ: ReactPropTypes.string }), ReactPropTypes.shape({ scale: ReactPropTypes.number }), ReactPropTypes.shape({ scaleX: ReactPropTypes.number }), ReactPropTypes.shape({ scaleY: ReactPropTypes.number }), ReactPropTypes.shape({ translateX: ReactPropTypes.number }), ReactPropTypes.shape({ translateY: ReactPropTypes.number }), ReactPropTypes.shape({ skewX: ReactPropTypes.string }), ReactPropTypes.shape({ skewY: ReactPropTypes.string })])),

			transformMatrix: TransformMatrixPropType,

			scaleX: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			scaleY: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			rotation: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			translateX: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			translateY: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') };

		module.exports = TransformPropTypes;
	},
	// Libraries/Utilities/deprecatedPropType.js
	function (__inner_require__, exports, module) {
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		function deprecatedPropType(propType, explanation) {
			return function validate(props, propName, componentName) {

				if (!UIManager[componentName] && props[propName] !== undefined) {
					console.warn('`' + propName + '` supplied to `' + componentName + '` has been deprecated. ' + explanation);
				}

				return propType(props, propName, componentName);
			};
		}

		module.exports = deprecatedPropType;
	},
	// Libraries/Text/TextStylePropTypes.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var TextStylePropTypes = babelHelpers.extends(Object.create(ViewStylePropTypes), {
			color: ColorPropType,
			fontFamily: ReactPropTypes.string,
			fontSize: ReactPropTypes.number,
			fontStyle: ReactPropTypes.oneOf(['normal', 'italic']),

			fontWeight: ReactPropTypes.oneOf(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),

			textShadowOffset: ReactPropTypes.shape({ width: ReactPropTypes.number, height: ReactPropTypes.number }),

			textShadowRadius: ReactPropTypes.number,
			textShadowColor: ColorPropType,

			letterSpacing: ReactPropTypes.number,
			lineHeight: ReactPropTypes.number,

			textAlign: ReactPropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),

			textAlignVertical: ReactPropTypes.oneOf(['auto', 'top', 'bottom', 'center']),

			textDecorationLine: ReactPropTypes.oneOf(['none', 'underline', 'line-through', 'underline line-through']),

			textDecorationStyle: ReactPropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),

			textDecorationColor: ColorPropType,

			writingDirection: ReactPropTypes.oneOf(['auto', 'ltr', 'rtl']) });

		module.exports = TextStylePropTypes;
	},
	// Libraries/Components/View/ViewStylePropTypes.js
	function (__inner_require__, exports, module) {
		var LayoutPropTypes = __inner_require__(50 /*Libraries/StyleSheet/LayoutPropTypes.js*/);
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var ShadowPropTypesIOS = __inner_require__(52 /*Libraries/Components/View/ShadowPropTypesIOS.js*/);
		var TransformPropTypes = __inner_require__(53 /*Libraries/StyleSheet/TransformPropTypes.js*/);

		var ViewStylePropTypes = babelHelpers.extends({}, LayoutPropTypes, ShadowPropTypesIOS, TransformPropTypes, {
			backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
			backgroundColor: ColorPropType,
			borderColor: ColorPropType,
			borderTopColor: ColorPropType,
			borderRightColor: ColorPropType,
			borderBottomColor: ColorPropType,
			borderLeftColor: ColorPropType,
			borderRadius: ReactPropTypes.number,
			borderTopLeftRadius: ReactPropTypes.number,
			borderTopRightRadius: ReactPropTypes.number,
			borderBottomLeftRadius: ReactPropTypes.number,
			borderBottomRightRadius: ReactPropTypes.number,
			borderStyle: ReactPropTypes.oneOf(['solid', 'dotted', 'dashed']),
			borderWidth: ReactPropTypes.number,
			borderTopWidth: ReactPropTypes.number,
			borderRightWidth: ReactPropTypes.number,
			borderBottomWidth: ReactPropTypes.number,
			borderLeftWidth: ReactPropTypes.number,
			opacity: ReactPropTypes.number,
			overflow: ReactPropTypes.oneOf(['visible', 'hidden']),

			elevation: ReactPropTypes.number });

		module.exports = ViewStylePropTypes;
	},
	// Libraries/Utilities/differ/matricesDiffer.js
	function (__inner_require__, exports, module) {
		var matricesDiffer = function matricesDiffer(one, two) {
			if (one === two) {
				return false;
			}
			return !one || !two || one[12] !== two[12] || one[13] !== two[13] || one[14] !== two[14] || one[5] !== two[5] || one[10] !== two[10] || one[1] !== two[1] || one[2] !== two[2] || one[3] !== two[3] || one[4] !== two[4] || one[6] !== two[6] || one[7] !== two[7] || one[8] !== two[8] || one[9] !== two[9] || one[11] !== two[11] || one[15] !== two[15];
		};

		module.exports = matricesDiffer;
	},
	// Libraries/StyleSheet/processTransform.js
	function (__inner_require__, exports, module) {
		var MatrixMath = __inner_require__(59 /*Libraries/Utilities/MatrixMath.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var stringifySafe = require('react-native@0.21/Libraries/Utilities/stringifySafe.js');

		function processTransform(transform) {
			var result = MatrixMath.createIdentityMatrix();

			transform.forEach(function (transformation) {
				var key = Object.keys(transformation)[0];
				var value = transformation[key];
				if (__DEV__) {
					_validateTransform(key, value, transformation);
				}

				switch (key) {
					case 'matrix':
						MatrixMath.multiplyInto(result, result, value);
						break;
					case 'perspective':
						_multiplyTransform(result, MatrixMath.reusePerspectiveCommand, [value]);
						break;
					case 'rotateX':
						_multiplyTransform(result, MatrixMath.reuseRotateXCommand, [_convertToRadians(value)]);
						break;
					case 'rotateY':
						_multiplyTransform(result, MatrixMath.reuseRotateYCommand, [_convertToRadians(value)]);
						break;
					case 'rotate':
					case 'rotateZ':
						_multiplyTransform(result, MatrixMath.reuseRotateZCommand, [_convertToRadians(value)]);
						break;
					case 'scale':
						_multiplyTransform(result, MatrixMath.reuseScaleCommand, [value]);
						break;
					case 'scaleX':
						_multiplyTransform(result, MatrixMath.reuseScaleXCommand, [value]);
						break;
					case 'scaleY':
						_multiplyTransform(result, MatrixMath.reuseScaleYCommand, [value]);
						break;
					case 'translate':
						_multiplyTransform(result, MatrixMath.reuseTranslate3dCommand, [value[0], value[1], value[2] || 0]);
						break;
					case 'translateX':
						_multiplyTransform(result, MatrixMath.reuseTranslate2dCommand, [value, 0]);
						break;
					case 'translateY':
						_multiplyTransform(result, MatrixMath.reuseTranslate2dCommand, [0, value]);
						break;
					case 'skewX':
						_multiplyTransform(result, MatrixMath.reuseSkewXCommand, [_convertToRadians(value)]);
						break;
					case 'skewY':
						_multiplyTransform(result, MatrixMath.reuseSkewYCommand, [_convertToRadians(value)]);
						break;
					default:
						throw new Error('Invalid transform name: ' + key);}
			});

			if (Platform.OS === 'android') {
				return MatrixMath.decomposeMatrix(result);
			}
			return result;
		}

		function _multiplyTransform(result, matrixMathFunction, args) {
			var matrixToApply = MatrixMath.createIdentityMatrix();
			var argsWithIdentity = [matrixToApply].concat(args);
			matrixMathFunction.apply(this, argsWithIdentity);
			MatrixMath.multiplyInto(result, result, matrixToApply);
		}

		function _convertToRadians(value) {
			var floatValue = parseFloat(value, 10);
			return value.indexOf('rad') > -1 ? floatValue : floatValue * Math.PI / 180;
		}

		function _validateTransform(key, value, transformation) {
			invariant(!value.getValue, 'You passed an Animated.Value to a normal component. ' + 'You need to wrap that component in an Animated. For example, ' + 'replace <View /> by <Animated.View />.');

			var multivalueTransforms = ['matrix', 'translate'];

			if (multivalueTransforms.indexOf(key) !== -1) {
				invariant(Array.isArray(value), 'Transform with key of %s must have an array as the value: %s', key, stringifySafe(transformation));
			}
			switch (key) {
				case 'matrix':
					invariant(value.length === 9 || value.length === 16, 'Matrix transform must have a length of 9 (2d) or 16 (3d). ' + 'Provided matrix has a length of %s: %s', value.length, stringifySafe(transformation));

					break;
				case 'translate':
					break;
				case 'rotateX':
				case 'rotateY':
				case 'rotateZ':
				case 'rotate':
				case 'skewX':
				case 'skewY':
					invariant(typeof value === 'string', 'Transform with key of "%s" must be a string: %s', key, stringifySafe(transformation));

					invariant(value.indexOf('deg') > -1 || value.indexOf('rad') > -1, 'Rotate transform must be expressed in degrees (deg) or radians ' + '(rad): %s', stringifySafe(transformation));

					break;
				case 'perspective':
					invariant(typeof value === 'number', 'Transform with key of "%s" must be a number: %s', key, stringifySafe(transformation));

					invariant(value !== 0, 'Transform with key of "%s" cannot be zero: %s', key, stringifySafe(transformation));

					break;
				default:
					invariant(typeof value === 'number', 'Transform with key of "%s" must be a number: %s', key, stringifySafe(transformation));}
		}

		module.exports = processTransform;
	},
	// Libraries/Utilities/MatrixMath.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var MatrixMath = {
			createIdentityMatrix: function createIdentityMatrix() {
				return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
			},

			createCopy: function createCopy(m) {
				return [m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]];
			},

			createOrthographic: function createOrthographic(left, right, bottom, top, near, far) {
				var a = 2 / (right - left);
				var b = 2 / (top - bottom);
				var c = -2 / (far - near);

				var tx = -(right + left) / (right - left);
				var ty = -(top + bottom) / (top - bottom);
				var tz = -(far + near) / (far - near);

				return [a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, tx, ty, tz, 1];
			},

			createFrustum: function createFrustum(left, right, bottom, top, near, far) {
				var r_width = 1 / (right - left);
				var r_height = 1 / (top - bottom);
				var r_depth = 1 / (near - far);
				var x = 2 * (near * r_width);
				var y = 2 * (near * r_height);
				var A = (right + left) * r_width;
				var B = (top + bottom) * r_height;
				var C = (far + near) * r_depth;
				var D = 2 * (far * near * r_depth);
				return [x, 0, 0, 0, 0, y, 0, 0, A, B, C, -1, 0, 0, D, 0];
			},

			createPerspective: function createPerspective(fovInRadians, aspect, near, far) {
				var h = 1 / Math.tan(fovInRadians / 2);
				var r_depth = 1 / (near - far);
				var C = (far + near) * r_depth;
				var D = 2 * (far * near * r_depth);
				return [h / aspect, 0, 0, 0, 0, h, 0, 0, 0, 0, C, -1, 0, 0, D, 0];
			},

			createTranslate2d: function createTranslate2d(x, y) {
				var mat = MatrixMath.createIdentityMatrix();
				MatrixMath.reuseTranslate2dCommand(mat, x, y);
				return mat;
			},

			reuseTranslate2dCommand: function reuseTranslate2dCommand(matrixCommand, x, y) {
				matrixCommand[12] = x;
				matrixCommand[13] = y;
			},

			reuseTranslate3dCommand: function reuseTranslate3dCommand(matrixCommand, x, y, z) {
				matrixCommand[12] = x;
				matrixCommand[13] = y;
				matrixCommand[14] = z;
			},

			createScale: function createScale(factor) {
				var mat = MatrixMath.createIdentityMatrix();
				MatrixMath.reuseScaleCommand(mat, factor);
				return mat;
			},

			reuseScaleCommand: function reuseScaleCommand(matrixCommand, factor) {
				matrixCommand[0] = factor;
				matrixCommand[5] = factor;
			},

			reuseScale3dCommand: function reuseScale3dCommand(matrixCommand, x, y, z) {
				matrixCommand[0] = x;
				matrixCommand[5] = y;
				matrixCommand[10] = z;
			},

			reusePerspectiveCommand: function reusePerspectiveCommand(matrixCommand, p) {
				matrixCommand[11] = -1 / p;
			},

			reuseScaleXCommand: function reuseScaleXCommand(matrixCommand, factor) {
				matrixCommand[0] = factor;
			},

			reuseScaleYCommand: function reuseScaleYCommand(matrixCommand, factor) {
				matrixCommand[5] = factor;
			},

			reuseScaleZCommand: function reuseScaleZCommand(matrixCommand, factor) {
				matrixCommand[10] = factor;
			},

			reuseRotateXCommand: function reuseRotateXCommand(matrixCommand, radians) {
				matrixCommand[5] = Math.cos(radians);
				matrixCommand[6] = Math.sin(radians);
				matrixCommand[9] = -Math.sin(radians);
				matrixCommand[10] = Math.cos(radians);
			},

			reuseRotateYCommand: function reuseRotateYCommand(matrixCommand, amount) {
				matrixCommand[0] = Math.cos(amount);
				matrixCommand[2] = -Math.sin(amount);
				matrixCommand[8] = Math.sin(amount);
				matrixCommand[10] = Math.cos(amount);
			},

			reuseRotateZCommand: function reuseRotateZCommand(matrixCommand, radians) {
				matrixCommand[0] = Math.cos(radians);
				matrixCommand[1] = Math.sin(radians);
				matrixCommand[4] = -Math.sin(radians);
				matrixCommand[5] = Math.cos(radians);
			},

			createRotateZ: function createRotateZ(radians) {
				var mat = MatrixMath.createIdentityMatrix();
				MatrixMath.reuseRotateZCommand(mat, radians);
				return mat;
			},

			reuseSkewXCommand: function reuseSkewXCommand(matrixCommand, radians) {
				matrixCommand[4] = Math.sin(radians);
				matrixCommand[5] = Math.cos(radians);
			},

			reuseSkewYCommand: function reuseSkewYCommand(matrixCommand, radians) {
				matrixCommand[0] = Math.cos(radians);
				matrixCommand[1] = Math.sin(radians);
			},

			multiplyInto: function multiplyInto(out, a, b) {
				var a00 = a[0],
				    a01 = a[1],
				    a02 = a[2],
				    a03 = a[3],
				    a10 = a[4],
				    a11 = a[5],
				    a12 = a[6],
				    a13 = a[7],
				    a20 = a[8],
				    a21 = a[9],
				    a22 = a[10],
				    a23 = a[11],
				    a30 = a[12],
				    a31 = a[13],
				    a32 = a[14],
				    a33 = a[15];

				var b0 = b[0],
				    b1 = b[1],
				    b2 = b[2],
				    b3 = b[3];
				out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
				out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
				out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
				out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

				b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
				out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
				out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
				out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
				out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

				b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
				out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
				out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
				out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
				out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

				b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
				out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
				out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
				out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
				out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
			},

			determinant: function determinant(matrix) {
				var _matrix = babelHelpers.slicedToArray(matrix, 16),
				    m00 = _matrix[0],
				    m01 = _matrix[1],
				    m02 = _matrix[2],
				    m03 = _matrix[3],
				    m10 = _matrix[4],
				    m11 = _matrix[5],
				    m12 = _matrix[6],
				    m13 = _matrix[7],
				    m20 = _matrix[8],
				    m21 = _matrix[9],
				    m22 = _matrix[10],
				    m23 = _matrix[11],
				    m30 = _matrix[12],
				    m31 = _matrix[13],
				    m32 = _matrix[14],
				    m33 = _matrix[15];
				return m03 * m12 * m21 * m30 - m02 * m13 * m21 * m30 - m03 * m11 * m22 * m30 + m01 * m13 * m22 * m30 + m02 * m11 * m23 * m30 - m01 * m12 * m23 * m30 - m03 * m12 * m20 * m31 + m02 * m13 * m20 * m31 + m03 * m10 * m22 * m31 - m00 * m13 * m22 * m31 - m02 * m10 * m23 * m31 + m00 * m12 * m23 * m31 + m03 * m11 * m20 * m32 - m01 * m13 * m20 * m32 - m03 * m10 * m21 * m32 + m00 * m13 * m21 * m32 + m01 * m10 * m23 * m32 - m00 * m11 * m23 * m32 - m02 * m11 * m20 * m33 + m01 * m12 * m20 * m33 + m02 * m10 * m21 * m33 - m00 * m12 * m21 * m33 - m01 * m10 * m22 * m33 + m00 * m11 * m22 * m33;
			},

			inverse: function inverse(matrix) {
				var det = MatrixMath.determinant(matrix);
				if (!det) {
					return matrix;
				}var _matrix2 = babelHelpers.slicedToArray(matrix, 16),
				    m00 = _matrix2[0],
				    m01 = _matrix2[1],
				    m02 = _matrix2[2],
				    m03 = _matrix2[3],
				    m10 = _matrix2[4],
				    m11 = _matrix2[5],
				    m12 = _matrix2[6],
				    m13 = _matrix2[7],
				    m20 = _matrix2[8],
				    m21 = _matrix2[9],
				    m22 = _matrix2[10],
				    m23 = _matrix2[11],
				    m30 = _matrix2[12],
				    m31 = _matrix2[13],
				    m32 = _matrix2[14],
				    m33 = _matrix2[15];
				return [(m12 * m23 * m31 - m13 * m22 * m31 + m13 * m21 * m32 - m11 * m23 * m32 - m12 * m21 * m33 + m11 * m22 * m33) / det, (m03 * m22 * m31 - m02 * m23 * m31 - m03 * m21 * m32 + m01 * m23 * m32 + m02 * m21 * m33 - m01 * m22 * m33) / det, (m02 * m13 * m31 - m03 * m12 * m31 + m03 * m11 * m32 - m01 * m13 * m32 - m02 * m11 * m33 + m01 * m12 * m33) / det, (m03 * m12 * m21 - m02 * m13 * m21 - m03 * m11 * m22 + m01 * m13 * m22 + m02 * m11 * m23 - m01 * m12 * m23) / det, (m13 * m22 * m30 - m12 * m23 * m30 - m13 * m20 * m32 + m10 * m23 * m32 + m12 * m20 * m33 - m10 * m22 * m33) / det, (m02 * m23 * m30 - m03 * m22 * m30 + m03 * m20 * m32 - m00 * m23 * m32 - m02 * m20 * m33 + m00 * m22 * m33) / det, (m03 * m12 * m30 - m02 * m13 * m30 - m03 * m10 * m32 + m00 * m13 * m32 + m02 * m10 * m33 - m00 * m12 * m33) / det, (m02 * m13 * m20 - m03 * m12 * m20 + m03 * m10 * m22 - m00 * m13 * m22 - m02 * m10 * m23 + m00 * m12 * m23) / det, (m11 * m23 * m30 - m13 * m21 * m30 + m13 * m20 * m31 - m10 * m23 * m31 - m11 * m20 * m33 + m10 * m21 * m33) / det, (m03 * m21 * m30 - m01 * m23 * m30 - m03 * m20 * m31 + m00 * m23 * m31 + m01 * m20 * m33 - m00 * m21 * m33) / det, (m01 * m13 * m30 - m03 * m11 * m30 + m03 * m10 * m31 - m00 * m13 * m31 - m01 * m10 * m33 + m00 * m11 * m33) / det, (m03 * m11 * m20 - m01 * m13 * m20 - m03 * m10 * m21 + m00 * m13 * m21 + m01 * m10 * m23 - m00 * m11 * m23) / det, (m12 * m21 * m30 - m11 * m22 * m30 - m12 * m20 * m31 + m10 * m22 * m31 + m11 * m20 * m32 - m10 * m21 * m32) / det, (m01 * m22 * m30 - m02 * m21 * m30 + m02 * m20 * m31 - m00 * m22 * m31 - m01 * m20 * m32 + m00 * m21 * m32) / det, (m02 * m11 * m30 - m01 * m12 * m30 - m02 * m10 * m31 + m00 * m12 * m31 + m01 * m10 * m32 - m00 * m11 * m32) / det, (m01 * m12 * m20 - m02 * m11 * m20 + m02 * m10 * m21 - m00 * m12 * m21 - m01 * m10 * m22 + m00 * m11 * m22) / det];
			},

			transpose: function transpose(m) {
				return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
			},

			multiplyVectorByMatrix: function multiplyVectorByMatrix(v, m) {
				var _v = babelHelpers.slicedToArray(v, 4),
				    vx = _v[0],
				    vy = _v[1],
				    vz = _v[2],
				    vw = _v[3];
				return [vx * m[0] + vy * m[4] + vz * m[8] + vw * m[12], vx * m[1] + vy * m[5] + vz * m[9] + vw * m[13], vx * m[2] + vy * m[6] + vz * m[10] + vw * m[14], vx * m[3] + vy * m[7] + vz * m[11] + vw * m[15]];
			},

			v3Length: function v3Length(a) {
				return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
			},

			v3Normalize: function v3Normalize(vector, v3Length) {
				var im = 1 / (v3Length || MatrixMath.v3Length(vector));
				return [vector[0] * im, vector[1] * im, vector[2] * im];
			},

			v3Dot: function v3Dot(a, b) {
				return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
			},

			v3Combine: function v3Combine(a, b, aScale, bScale) {
				return [aScale * a[0] + bScale * b[0], aScale * a[1] + bScale * b[1], aScale * a[2] + bScale * b[2]];
			},

			v3Cross: function v3Cross(a, b) {
				return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
			},

			quaternionToDegreesXYZ: function quaternionToDegreesXYZ(q, matrix, row) {
				var _q = babelHelpers.slicedToArray(q, 4),
				    qx = _q[0],
				    qy = _q[1],
				    qz = _q[2],
				    qw = _q[3];
				var qw2 = qw * qw;
				var qx2 = qx * qx;
				var qy2 = qy * qy;
				var qz2 = qz * qz;
				var test = qx * qy + qz * qw;
				var unit = qw2 + qx2 + qy2 + qz2;
				var conv = 180 / Math.PI;

				if (test > 0.49999 * unit) {
					return [0, 2 * Math.atan2(qx, qw) * conv, 90];
				}
				if (test < -0.49999 * unit) {
					return [0, -2 * Math.atan2(qx, qw) * conv, -90];
				}

				return [MatrixMath.roundTo3Places(Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx2 - 2 * qz2) * conv), MatrixMath.roundTo3Places(Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy2 - 2 * qz2) * conv), MatrixMath.roundTo3Places(Math.asin(2 * qx * qy + 2 * qz * qw) * conv)];
			},

			roundTo3Places: function roundTo3Places(n) {
				var arr = n.toString().split('e');
				return Math.round(arr[0] + 'e' + (arr[1] ? +arr[1] - 3 : 3)) * 0.001;
			},

			decomposeMatrix: function decomposeMatrix(transformMatrix) {

				invariant(transformMatrix.length === 16, 'Matrix decomposition needs a list of 3d matrix values, received %s', transformMatrix);

				var perspective = [];
				var quaternion = [];
				var scale = [];
				var skew = [];
				var translation = [];

				if (!transformMatrix[15]) {
					return;
				}
				var matrix = [];
				var perspectiveMatrix = [];
				for (var i = 0; i < 4; i++) {
					matrix.push([]);
					for (var j = 0; j < 4; j++) {
						var value = transformMatrix[i * 4 + j] / transformMatrix[15];
						matrix[i].push(value);
						perspectiveMatrix.push(j === 3 ? 0 : value);
					}
				}
				perspectiveMatrix[15] = 1;

				if (!MatrixMath.determinant(perspectiveMatrix)) {
					return;
				}

				if (matrix[0][3] !== 0 || matrix[1][3] !== 0 || matrix[2][3] !== 0) {

					var rightHandSide = [matrix[0][3], matrix[1][3], matrix[2][3], matrix[3][3]];

					var inversePerspectiveMatrix = MatrixMath.inverse(perspectiveMatrix);

					var transposedInversePerspectiveMatrix = MatrixMath.transpose(inversePerspectiveMatrix);

					var perspective = MatrixMath.multiplyVectorByMatrix(rightHandSide, transposedInversePerspectiveMatrix);
				} else {

					perspective[0] = perspective[1] = perspective[2] = 0;
					perspective[3] = 1;
				}

				for (var i = 0; i < 3; i++) {
					translation[i] = matrix[3][i];
				}

				var row = [];
				for (i = 0; i < 3; i++) {
					row[i] = [matrix[i][0], matrix[i][1], matrix[i][2]];
				}

				scale[0] = MatrixMath.v3Length(row[0]);
				row[0] = MatrixMath.v3Normalize(row[0], scale[0]);

				skew[0] = MatrixMath.v3Dot(row[0], row[1]);
				row[1] = MatrixMath.v3Combine(row[1], row[0], 1.0, -skew[0]);

				skew[0] = MatrixMath.v3Dot(row[0], row[1]);
				row[1] = MatrixMath.v3Combine(row[1], row[0], 1.0, -skew[0]);

				scale[1] = MatrixMath.v3Length(row[1]);
				row[1] = MatrixMath.v3Normalize(row[1], scale[1]);
				skew[0] /= scale[1];

				skew[1] = MatrixMath.v3Dot(row[0], row[2]);
				row[2] = MatrixMath.v3Combine(row[2], row[0], 1.0, -skew[1]);
				skew[2] = MatrixMath.v3Dot(row[1], row[2]);
				row[2] = MatrixMath.v3Combine(row[2], row[1], 1.0, -skew[2]);

				scale[2] = MatrixMath.v3Length(row[2]);
				row[2] = MatrixMath.v3Normalize(row[2], scale[2]);
				skew[1] /= scale[2];
				skew[2] /= scale[2];

				var pdum3 = MatrixMath.v3Cross(row[1], row[2]);
				if (MatrixMath.v3Dot(row[0], pdum3) < 0) {
					for (i = 0; i < 3; i++) {
						scale[i] *= -1;
						row[i][0] *= -1;
						row[i][1] *= -1;
						row[i][2] *= -1;
					}
				}

				quaternion[0] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] - row[1][1] - row[2][2], 0));
				quaternion[1] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] + row[1][1] - row[2][2], 0));
				quaternion[2] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] - row[1][1] + row[2][2], 0));
				quaternion[3] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] + row[1][1] + row[2][2], 0));

				if (row[2][1] > row[1][2]) {
					quaternion[0] = -quaternion[0];
				}
				if (row[0][2] > row[2][0]) {
					quaternion[1] = -quaternion[1];
				}
				if (row[1][0] > row[0][1]) {
					quaternion[2] = -quaternion[2];
				}

				var rotationDegrees;
				if (quaternion[0] < 0.001 && quaternion[0] >= 0 && quaternion[1] < 0.001 && quaternion[1] >= 0) {

					rotationDegrees = [0, 0, MatrixMath.roundTo3Places(Math.atan2(row[0][1], row[0][0]) * 180 / Math.PI)];
				} else {
					rotationDegrees = MatrixMath.quaternionToDegreesXYZ(quaternion, matrix, row);
				}

				return {
					rotationDegrees: rotationDegrees,
					perspective: perspective,
					quaternion: quaternion,
					scale: scale,
					skew: skew,
					translation: translation,

					rotate: rotationDegrees[2],
					rotateX: rotationDegrees[0],
					rotateY: rotationDegrees[1],
					scaleX: scale[0],
					scaleY: scale[1],
					translateX: translation[0],
					translateY: translation[1] };
			} };

		module.exports = MatrixMath;
	},
	// Libraries/Utilities/differ/sizesDiffer.js
	function (__inner_require__, exports, module) {
		var dummySize = { width: undefined, height: undefined };

		var sizesDiffer = function sizesDiffer(one, two) {
			one = one || dummySize;
			two = two || dummySize;
			return one !== two && (one.width !== two.width || one.height !== two.height);
		};

		module.exports = sizesDiffer;
	},
	// Libraries/Components/View/ReactNativeViewAttributes.js
	function (__inner_require__, exports, module) {
		var ReactNativeStyleAttributes = __inner_require__(47 /*Libraries/Components/View/ReactNativeStyleAttributes.js*/);

		var ReactNativeViewAttributes = {};

		ReactNativeViewAttributes.UIView = {
			pointerEvents: true,
			accessible: true,
			accessibilityLabel: true,
			accessibilityComponentType: true,
			accessibilityLiveRegion: true,
			accessibilityTraits: true,
			importantForAccessibility: true,
			testID: true,
			renderToHardwareTextureAndroid: true,
			shouldRasterizeIOS: true,
			onLayout: true,
			onAccessibilityTap: true,
			onMagicTap: true,
			collapsable: true,
			needsOffscreenAlphaCompositing: true,
			style: ReactNativeStyleAttributes };

		ReactNativeViewAttributes.RCTView = babelHelpers.extends({}, ReactNativeViewAttributes.UIView, {

			removeClippedSubviews: true });

		module.exports = ReactNativeViewAttributes;
	},
	// Libraries/StyleSheet/StyleSheetPropType.js
	function (__inner_require__, exports, module) {
		var createStrictShapeTypeChecker = __inner_require__(63 /*Libraries/Utilities/createStrictShapeTypeChecker.js*/);
		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');

		function StyleSheetPropType(shape) {
			var shapePropType = createStrictShapeTypeChecker(shape);
			return function (props, propName, componentName, location) {
				var newProps = props;
				if (props[propName]) {

					newProps = {};
					newProps[propName] = flattenStyle(props[propName]);
				}
				return shapePropType(newProps, propName, componentName, location);
			};
		}

		module.exports = StyleSheetPropType;
	},
	// Libraries/Utilities/createStrictShapeTypeChecker.js
	function (__inner_require__, exports, module) {
		var ReactPropTypeLocationNames = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocationNames.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		function createStrictShapeTypeChecker(shapeTypes) {
			function checkType(isRequired, props, propName, componentName, location) {
				if (!props[propName]) {
					if (isRequired) {
						invariant(false, 'Required object `' + propName + '` was not specified in ' + ('`' + componentName + '`.'));
					}
					return;
				}
				var propValue = props[propName];
				var propType = typeof propValue;
				var locationName = location && ReactPropTypeLocationNames[location] || '(unknown)';
				if (propType !== 'object') {
					invariant(false, 'Invalid ' + locationName + ' `' + propName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
				}

				var allKeys = merge(props[propName], shapeTypes);
				for (var key in allKeys) {
					var checker = shapeTypes[key];
					if (!checker) {
						invariant(false, 'Invalid props.' + propName + ' key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
					}
					var error = checker(propValue, key, componentName, location);
					if (error) {
						invariant(false, error.message + '\nBad object: ' + JSON.stringify(props[propName], null, '  '));
					}
				}
			}
			function chainedCheckType(props, propName, componentName, location) {
				return checkType(false, props, propName, componentName, location);
			}
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}

		module.exports = createStrictShapeTypeChecker;
	},
	// Libraries/ReactIOS/requireNativeComponent.js
	function (__inner_require__, exports, module) {
		var ReactNativeStyleAttributes = __inner_require__(47 /*Libraries/Components/View/ReactNativeStyleAttributes.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');
		var UnimplementedView = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);

		var createReactNativeComponentClass = __inner_require__(70 /*Libraries/ReactNative/createReactNativeComponentClass.js*/);

		var insetsDiffer = __inner_require__(77 /*Libraries/Utilities/differ/insetsDiffer.js*/);
		var pointsDiffer = __inner_require__(78 /*Libraries/Utilities/differ/pointsDiffer.js*/);
		var matricesDiffer = __inner_require__(57 /*Libraries/Utilities/differ/matricesDiffer.js*/);
		var processColor = require('react-native@0.21/Libraries/StyleSheet/processColor.js');
		var resolveAssetSource = __inner_require__(79 /*Libraries/Image/resolveAssetSource.js*/);
		var sizesDiffer = __inner_require__(60 /*Libraries/Utilities/differ/sizesDiffer.js*/);
		var verifyPropTypes = __inner_require__(82 /*Libraries/ReactIOS/verifyPropTypes.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function requireNativeComponent(viewName, componentInterface, extraConfig) {
			var viewConfig = UIManager[viewName];
			if (!viewConfig || !viewConfig.NativeProps) {
				warning(false, 'Native component for "%s" does not exist', viewName);
				return UnimplementedView;
			}
			var nativeProps = babelHelpers.extends({}, UIManager.RCTView.NativeProps, viewConfig.NativeProps);

			viewConfig.uiViewClassName = viewName;
			viewConfig.validAttributes = {};
			viewConfig.propTypes = componentInterface && componentInterface.propTypes;
			for (var key in nativeProps) {
				var useAttribute = false;
				var attribute = {};

				var differ = TypeToDifferMap[nativeProps[key]];
				if (differ) {
					attribute.diff = differ;
					useAttribute = true;
				}

				var processor = TypeToProcessorMap[nativeProps[key]];
				if (processor) {
					attribute.process = processor;
					useAttribute = true;
				}

				viewConfig.validAttributes[key] = useAttribute ? attribute : true;
			}

			viewConfig.validAttributes.style = ReactNativeStyleAttributes;

			if (__DEV__) {
				componentInterface && verifyPropTypes(componentInterface, viewConfig, extraConfig && extraConfig.nativeOnly);
			}
			return createReactNativeComponentClass(viewConfig);
		}

		var TypeToDifferMap = {

			CATransform3D: matricesDiffer,
			CGPoint: pointsDiffer,
			CGSize: sizesDiffer,
			UIEdgeInsets: insetsDiffer };

		function processColorArray(colors) {
			return colors && colors.map(processColor);
		}

		var TypeToProcessorMap = {

			CGColor: processColor,
			CGColorArray: processColorArray,
			UIColor: processColor,
			UIColorArray: processColorArray,
			CGImage: resolveAssetSource,
			UIImage: resolveAssetSource,
			RCTImageSource: resolveAssetSource,

			Color: processColor,
			ColorArray: processColorArray };

		module.exports = requireNativeComponent;
	},
	// Libraries/Components/UnimplementedViews/UnimplementedView.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);

		var UnimplementedView = React.createClass({ displayName: 'UnimplementedView',
			setNativeProps: function setNativeProps() {},
			render: function render() {

				var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
				return React.createElement(View, { style: [styles.unimplementedView, this.props.style] }, this.props.children);
			} });

		var styles = StyleSheet.create({
			unimplementedView: {
				borderWidth: 1,
				borderColor: 'red',
				alignSelf: 'flex-start' } });

		module.exports = UnimplementedView;
	},
	// Libraries/StyleSheet/StyleSheet.js
	function (__inner_require__, exports, module) {
		var PixelRatio = __inner_require__(67 /*Libraries/Utilities/PixelRatio.js*/);
		var StyleSheetRegistry = require('react-native@0.21/Libraries/StyleSheet/StyleSheetRegistry.js');
		var StyleSheetValidation = __inner_require__(69 /*Libraries/StyleSheet/StyleSheetValidation.js*/);

		var flatten = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');

		var hairlineWidth = PixelRatio.roundToNearestPixel(0.4);
		if (hairlineWidth === 0) {
			hairlineWidth = 1 / PixelRatio.get();
		}

		module.exports = {

			hairlineWidth: hairlineWidth,

			flatten: flatten,

			create: function create(obj) {
				var result = {};
				for (var key in obj) {
					StyleSheetValidation.validateStyle(key, obj);
					result[key] = StyleSheetRegistry.registerStyle(obj[key]);
				}
				return result;
			} };
	},
	// Libraries/Utilities/PixelRatio.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);var PixelRatio = function () {
			function PixelRatio() {
				babelHelpers.classCallCheck(this, PixelRatio);
			}babelHelpers.createClass(PixelRatio, null, [{ key: 'get', value: function get() {
					return Dimensions.get('window').scale;
				} }, { key: 'getFontScale', value: function getFontScale() {
					return Dimensions.get('window').fontScale || PixelRatio.get();
				} }, { key: 'getPixelSizeForLayoutSize', value: function getPixelSizeForLayoutSize(layoutSize) {
					return Math.round(layoutSize * PixelRatio.get());
				} }, { key: 'roundToNearestPixel', value: function roundToNearestPixel(layoutSize) {
					var ratio = PixelRatio.get();
					return Math.round(layoutSize * ratio) / ratio;
				} }, { key: 'startDetecting', value: function startDetecting() {} }]);return PixelRatio;
		}();

		module.exports = PixelRatio;
	},
	// Libraries/Utilities/Dimensions.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var dimensions = UIManager.Dimensions;

		if (dimensions && dimensions.windowPhysicalPixels) {

			dimensions = JSON.parse(JSON.stringify(dimensions));

			var windowPhysicalPixels = dimensions.windowPhysicalPixels;
			dimensions.window = {
				width: windowPhysicalPixels.width / windowPhysicalPixels.scale,
				height: windowPhysicalPixels.height / windowPhysicalPixels.scale,
				scale: windowPhysicalPixels.scale,
				fontScale: windowPhysicalPixels.fontScale };

			if (Platform.OS === 'android') {

				var screenPhysicalPixels = dimensions.screenPhysicalPixels;
				dimensions.screen = {
					width: screenPhysicalPixels.width / screenPhysicalPixels.scale,
					height: screenPhysicalPixels.height / screenPhysicalPixels.scale,
					scale: screenPhysicalPixels.scale,
					fontScale: screenPhysicalPixels.fontScale };

				delete dimensions.screenPhysicalPixels;
			} else {
				dimensions.screen = dimensions.window;
			}

			delete dimensions.windowPhysicalPixels;
		}var Dimensions = function () {
			function Dimensions() {
				babelHelpers.classCallCheck(this, Dimensions);
			}babelHelpers.createClass(Dimensions, null, [{ key: 'set', value: function set(dims) {
					babelHelpers.extends(dimensions, dims);
					return true;
				} }, { key: 'get', value: function get(dim) {
					invariant(dimensions[dim], 'No dimension set for key ' + dim);
					return dimensions[dim];
				} }]);return Dimensions;
		}();

		module.exports = Dimensions;
	},
	// Libraries/StyleSheet/StyleSheetValidation.js
	function (__inner_require__, exports, module) {
		var ImageStylePropTypes = __inner_require__(48 /*Libraries/Image/ImageStylePropTypes.js*/);
		var ReactPropTypeLocations = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocations.js');
		var TextStylePropTypes = __inner_require__(55 /*Libraries/Text/TextStylePropTypes.js*/);
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');var StyleSheetValidation = function () {
			function StyleSheetValidation() {
				babelHelpers.classCallCheck(this, StyleSheetValidation);
			}babelHelpers.createClass(StyleSheetValidation, null, [{ key: 'validateStyleProp', value: function validateStyleProp(prop, style, caller) {
					if (!__DEV__) {
						return;
					}
					if (allStylePropTypes[prop] === undefined) {
						var message1 = '"' + prop + '" is not a valid style property.';
						var message2 = '\nValid style props: ' + JSON.stringify(Object.keys(allStylePropTypes).sort(), null, '  ');
						styleError(message1, style, caller, message2);
					}
					var error = allStylePropTypes[prop](style, prop, caller, ReactPropTypeLocations.prop);

					if (error) {
						styleError(error.message, style, caller);
					}
				} }, { key: 'validateStyle', value: function validateStyle(name, styles) {
					if (!__DEV__) {
						return;
					}
					for (var prop in styles[name]) {
						StyleSheetValidation.validateStyleProp(prop, styles[name], 'StyleSheet ' + name);
					}
				} }, { key: 'addValidStylePropTypes', value: function addValidStylePropTypes(stylePropTypes) {
					for (var key in stylePropTypes) {
						allStylePropTypes[key] = stylePropTypes[key];
					}
				} }]);return StyleSheetValidation;
		}();

		var styleError = function styleError(message1, style, caller, message2) {
			invariant(false, message1 + '\n' + (caller || '<<unknown>>') + ': ' + JSON.stringify(style, null, '  ') + (message2 || ''));
		};

		var allStylePropTypes = {};

		StyleSheetValidation.addValidStylePropTypes(ImageStylePropTypes);
		StyleSheetValidation.addValidStylePropTypes(TextStylePropTypes);
		StyleSheetValidation.addValidStylePropTypes(ViewStylePropTypes);

		module.exports = StyleSheetValidation;
	},
	// Libraries/ReactNative/createReactNativeComponentClass.js
	function (__inner_require__, exports, module) {
		var ReactNativeBaseComponent = __inner_require__(71 /*Libraries/ReactNative/ReactNativeBaseComponent.js*/);

		var createReactNativeComponentClass = function createReactNativeComponentClass(viewConfig) {
			var Constructor = function Constructor(element) {
				this._currentElement = element;

				this._rootNodeID = null;
				this._renderedChildren = null;
			};
			Constructor.displayName = viewConfig.uiViewClassName;
			Constructor.viewConfig = viewConfig;
			Constructor.propTypes = viewConfig.propTypes;
			Constructor.prototype = new ReactNativeBaseComponent(viewConfig);
			Constructor.prototype.constructor = Constructor;

			return Constructor;
		};

		module.exports = createReactNativeComponentClass;
	},
	// Libraries/ReactNative/ReactNativeBaseComponent.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var ReactNativeAttributePayload = __inner_require__(3 /*Libraries/ReactNative/ReactNativeAttributePayload.js*/);
		var ReactNativeEventEmitter = __inner_require__(43 /*Libraries/ReactNative/ReactNativeEventEmitter.js*/);
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var ReactMultiChild = __inner_require__(72 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMultiChild.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var deepFreezeAndThrowOnMutationInDev = __inner_require__(76 /*Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var registrationNames = ReactNativeEventEmitter.registrationNames;
		var putListener = ReactNativeEventEmitter.putListener;
		var deleteListener = ReactNativeEventEmitter.deleteListener;
		var deleteAllListeners = ReactNativeEventEmitter.deleteAllListeners;

		var ReactNativeBaseComponent = function ReactNativeBaseComponent(viewConfig) {
			this.viewConfig = viewConfig;
		};

		ReactNativeBaseComponent.Mixin = {
			getPublicInstance: function getPublicInstance() {

				return this;
			},

			construct: function construct(element) {
				this._currentElement = element;
			},

			unmountComponent: function unmountComponent() {
				deleteAllListeners(this._rootNodeID);
				this.unmountChildren();
				this._rootNodeID = null;
			},

			initializeChildren: function initializeChildren(children, containerTag, transaction, context) {
				var mountImages = this.mountChildren(children, transaction, context);

				if (mountImages.length) {

					var createdTags = [];
					for (var i = 0, l = mountImages.length; i < l; i++) {
						var mountImage = mountImages[i];
						var childTag = mountImage.tag;
						var childID = mountImage.rootNodeID;
						warning(mountImage && mountImage.rootNodeID && mountImage.tag, 'Mount image returned does not have required data');

						ReactNativeTagHandles.associateRootNodeIDWithMountedNodeHandle(childID, childTag);

						createdTags[i] = mountImage.tag;
					}
					UIManager.setChildren(containerTag, createdTags);
				}
			},

			receiveComponent: function receiveComponent(nextElement, transaction, context) {
				var prevElement = this._currentElement;
				this._currentElement = nextElement;

				if (__DEV__) {
					for (var key in this.viewConfig.validAttributes) {
						if (nextElement.props.hasOwnProperty(key)) {
							deepFreezeAndThrowOnMutationInDev(nextElement.props[key]);
						}
					}
				}

				var updatePayload = ReactNativeAttributePayload.diff(prevElement.props, nextElement.props, this.viewConfig.validAttributes);

				if (updatePayload) {
					UIManager.updateView(ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(this._rootNodeID), this.viewConfig.uiViewClassName, updatePayload);
				}

				this._reconcileListenersUponUpdate(prevElement.props, nextElement.props);

				this.updateChildren(nextElement.props.children, transaction, context);
			},

			_registerListenersUponCreation: function _registerListenersUponCreation(initialProps) {
				for (var key in initialProps) {

					if (registrationNames[key] && initialProps[key]) {
						var listener = initialProps[key];
						putListener(this._rootNodeID, key, listener);
					}
				}
			},

			_reconcileListenersUponUpdate: function _reconcileListenersUponUpdate(prevProps, nextProps) {
				for (var key in nextProps) {
					if (registrationNames[key] && nextProps[key] !== prevProps[key]) {
						if (nextProps[key]) {
							putListener(this._rootNodeID, key, nextProps[key]);
						} else {
							deleteListener(this._rootNodeID, key);
						}
					}
				}
			},

			mountComponent: function mountComponent(rootID, transaction, context) {
				this._rootNodeID = rootID;

				var tag = ReactNativeTagHandles.allocateTag();

				if (__DEV__) {
					for (var key in this.viewConfig.validAttributes) {
						if (this._currentElement.props.hasOwnProperty(key)) {
							deepFreezeAndThrowOnMutationInDev(this._currentElement.props[key]);
						}
					}
				}

				var updatePayload = ReactNativeAttributePayload.create(this._currentElement.props, this.viewConfig.validAttributes);

				var nativeTopRootID = ReactNativeTagHandles.getNativeTopRootIDFromNodeID(rootID);
				if (nativeTopRootID == null) {
					invariant(false, 'nativeTopRootID not found for tag ' + tag + ' view type ' + this.viewConfig.uiViewClassName + ' with rootID ' + rootID);
				}
				UIManager.createView(tag, this.viewConfig.uiViewClassName, ReactNativeTagHandles.rootNodeIDToTag[nativeTopRootID], updatePayload);

				this._registerListenersUponCreation(this._currentElement.props);
				this.initializeChildren(this._currentElement.props.children, tag, transaction, context);

				return {
					rootNodeID: rootID,
					tag: tag };
			} };

		babelHelpers.extends(ReactNativeBaseComponent.prototype, ReactMultiChild.Mixin, ReactNativeBaseComponent.Mixin, NativeMethodsMixin);

		module.exports = ReactNativeBaseComponent;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMultiChild.js
	function (__inner_require__, exports, module) {
		var ReactComponentEnvironment = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentEnvironment.js');
		var ReactMultiChildUpdateTypes = __inner_require__(30 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMultiChildUpdateTypes.js*/);

		var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCurrentOwner.js');
		var ReactReconciler = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js');
		var ReactChildReconciler = __inner_require__(73 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildReconciler.js*/);

		var flattenChildren = __inner_require__(75 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/flattenChildren.js*/);

		var updateDepth = 0;

		var updateQueue = [];

		var markupQueue = [];

		function enqueueInsertMarkup(parentID, markup, toIndex) {

			updateQueue.push({
				parentID: parentID,
				parentNode: null,
				type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
				markupIndex: markupQueue.push(markup) - 1,
				content: null,
				fromIndex: null,
				toIndex: toIndex });
		}

		function enqueueMove(parentID, fromIndex, toIndex) {

			updateQueue.push({
				parentID: parentID,
				parentNode: null,
				type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
				markupIndex: null,
				content: null,
				fromIndex: fromIndex,
				toIndex: toIndex });
		}

		function enqueueRemove(parentID, fromIndex) {

			updateQueue.push({
				parentID: parentID,
				parentNode: null,
				type: ReactMultiChildUpdateTypes.REMOVE_NODE,
				markupIndex: null,
				content: null,
				fromIndex: fromIndex,
				toIndex: null });
		}

		function enqueueSetMarkup(parentID, markup) {

			updateQueue.push({
				parentID: parentID,
				parentNode: null,
				type: ReactMultiChildUpdateTypes.SET_MARKUP,
				markupIndex: null,
				content: markup,
				fromIndex: null,
				toIndex: null });
		}

		function enqueueTextContent(parentID, textContent) {

			updateQueue.push({
				parentID: parentID,
				parentNode: null,
				type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
				markupIndex: null,
				content: textContent,
				fromIndex: null,
				toIndex: null });
		}

		function processQueue() {
			if (updateQueue.length) {
				ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
				clearQueue();
			}
		}

		function clearQueue() {
			updateQueue.length = 0;
			markupQueue.length = 0;
		}

		var ReactMultiChild = {

			Mixin: {

				_reconcilerInstantiateChildren: function _reconcilerInstantiateChildren(nestedChildren, transaction, context) {
					if (process.env.NODE_ENV !== 'production') {
						if (this._currentElement) {
							try {
								ReactCurrentOwner.current = this._currentElement._owner;
								return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
							} finally {
								ReactCurrentOwner.current = null;
							}
						}
					}
					return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
				},

				_reconcilerUpdateChildren: function _reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context) {
					var nextChildren;
					if (process.env.NODE_ENV !== 'production') {
						if (this._currentElement) {
							try {
								ReactCurrentOwner.current = this._currentElement._owner;
								nextChildren = flattenChildren(nextNestedChildrenElements);
							} finally {
								ReactCurrentOwner.current = null;
							}
							return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
						}
					}
					nextChildren = flattenChildren(nextNestedChildrenElements);
					return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
				},

				mountChildren: function mountChildren(nestedChildren, transaction, context) {
					var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
					this._renderedChildren = children;
					var mountImages = [];
					var index = 0;
					for (var name in children) {
						if (children.hasOwnProperty(name)) {
							var child = children[name];

							var rootID = this._rootNodeID + name;
							var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
							child._mountIndex = index++;
							mountImages.push(mountImage);
						}
					}
					return mountImages;
				},

				updateTextContent: function updateTextContent(nextContent) {
					updateDepth++;
					var errorThrown = true;
					try {
						var prevChildren = this._renderedChildren;

						ReactChildReconciler.unmountChildren(prevChildren);

						for (var name in prevChildren) {
							if (prevChildren.hasOwnProperty(name)) {
								this._unmountChild(prevChildren[name]);
							}
						}

						this.setTextContent(nextContent);
						errorThrown = false;
					} finally {
						updateDepth--;
						if (!updateDepth) {
							if (errorThrown) {
								clearQueue();
							} else {
								processQueue();
							}
						}
					}
				},

				updateMarkup: function updateMarkup(nextMarkup) {
					updateDepth++;
					var errorThrown = true;
					try {
						var prevChildren = this._renderedChildren;

						ReactChildReconciler.unmountChildren(prevChildren);
						for (var name in prevChildren) {
							if (prevChildren.hasOwnProperty(name)) {
								this._unmountChildByName(prevChildren[name], name);
							}
						}
						this.setMarkup(nextMarkup);
						errorThrown = false;
					} finally {
						updateDepth--;
						if (!updateDepth) {
							if (errorThrown) {
								clearQueue();
							} else {
								processQueue();
							}
						}
					}
				},

				updateChildren: function updateChildren(nextNestedChildrenElements, transaction, context) {
					updateDepth++;
					var errorThrown = true;
					try {
						this._updateChildren(nextNestedChildrenElements, transaction, context);
						errorThrown = false;
					} finally {
						updateDepth--;
						if (!updateDepth) {
							if (errorThrown) {
								clearQueue();
							} else {
								processQueue();
							}
						}
					}
				},

				_updateChildren: function _updateChildren(nextNestedChildrenElements, transaction, context) {
					var prevChildren = this._renderedChildren;
					var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
					this._renderedChildren = nextChildren;
					if (!nextChildren && !prevChildren) {
						return;
					}
					var name;

					var lastIndex = 0;
					var nextIndex = 0;
					for (name in nextChildren) {
						if (!nextChildren.hasOwnProperty(name)) {
							continue;
						}
						var prevChild = prevChildren && prevChildren[name];
						var nextChild = nextChildren[name];
						if (prevChild === nextChild) {
							this.moveChild(prevChild, nextIndex, lastIndex);
							lastIndex = Math.max(prevChild._mountIndex, lastIndex);
							prevChild._mountIndex = nextIndex;
						} else {
							if (prevChild) {

								lastIndex = Math.max(prevChild._mountIndex, lastIndex);
								this._unmountChild(prevChild);
							}

							this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
						}
						nextIndex++;
					}

					for (name in prevChildren) {
						if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
							this._unmountChild(prevChildren[name]);
						}
					}
				},

				unmountChildren: function unmountChildren() {
					var renderedChildren = this._renderedChildren;
					ReactChildReconciler.unmountChildren(renderedChildren);
					this._renderedChildren = null;
				},

				moveChild: function moveChild(child, toIndex, lastIndex) {

					if (child._mountIndex < lastIndex) {
						enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
					}
				},

				createChild: function createChild(child, mountImage) {
					enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
				},

				removeChild: function removeChild(child) {
					enqueueRemove(this._rootNodeID, child._mountIndex);
				},

				setTextContent: function setTextContent(textContent) {
					enqueueTextContent(this._rootNodeID, textContent);
				},

				setMarkup: function setMarkup(markup) {
					enqueueSetMarkup(this._rootNodeID, markup);
				},

				_mountChildByNameAtIndex: function _mountChildByNameAtIndex(child, name, index, transaction, context) {

					var rootID = this._rootNodeID + name;
					var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
					child._mountIndex = index;
					this.createChild(child, mountImage);
				},

				_unmountChild: function _unmountChild(child) {
					this.removeChild(child);
					child._mountIndex = null;
				} } };

		module.exports = ReactMultiChild;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildReconciler.js
	function (__inner_require__, exports, module) {
		var ReactReconciler = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js');

		var instantiateReactComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/instantiateReactComponent.js');
		var shouldUpdateReactComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/shouldUpdateReactComponent.js');
		var traverseAllChildren = __inner_require__(74 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/traverseAllChildren.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function instantiateChild(childInstances, child, name) {

			var keyUnique = childInstances[name] === undefined;
			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
			}
			if (child != null && keyUnique) {
				childInstances[name] = instantiateReactComponent(child, null);
			}
		}

		var ReactChildReconciler = {

			instantiateChildren: function instantiateChildren(nestedChildNodes, transaction, context) {
				if (nestedChildNodes == null) {
					return null;
				}
				var childInstances = {};
				traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
				return childInstances;
			},

			updateChildren: function updateChildren(prevChildren, nextChildren, transaction, context) {

				if (!nextChildren && !prevChildren) {
					return null;
				}
				var name;
				for (name in nextChildren) {
					if (!nextChildren.hasOwnProperty(name)) {
						continue;
					}
					var prevChild = prevChildren && prevChildren[name];
					var prevElement = prevChild && prevChild._currentElement;
					var nextElement = nextChildren[name];
					if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
						ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
						nextChildren[name] = prevChild;
					} else {
						if (prevChild) {
							ReactReconciler.unmountComponent(prevChild, name);
						}

						var nextChildInstance = instantiateReactComponent(nextElement, null);
						nextChildren[name] = nextChildInstance;
					}
				}

				for (name in prevChildren) {
					if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
						ReactReconciler.unmountComponent(prevChildren[name]);
					}
				}
				return nextChildren;
			},

			unmountChildren: function unmountChildren(renderedChildren) {
				for (var name in renderedChildren) {
					if (renderedChildren.hasOwnProperty(name)) {
						var renderedChild = renderedChildren[name];
						ReactReconciler.unmountComponent(renderedChild);
					}
				}
			} };

		module.exports = ReactChildReconciler;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/traverseAllChildren.js
	function (__inner_require__, exports, module) {
		var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCurrentOwner.js');
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');

		var getIteratorFn = __inner_require__(8 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/getIteratorFn.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var SEPARATOR = ReactInstanceHandles.SEPARATOR;
		var SUBSEPARATOR = ':';

		var userProvidedKeyEscaperLookup = {
			'=': '=0',
			'.': '=1',
			':': '=2' };

		var userProvidedKeyEscapeRegex = /[=.:]/g;

		var didWarnAboutMaps = false;

		function userProvidedKeyEscaper(match) {
			return userProvidedKeyEscaperLookup[match];
		}

		function getComponentKey(component, index) {
			if (component && component.key != null) {

				return wrapUserProvidedKey(component.key);
			}

			return index.toString(36);
		}

		function escapeUserProvidedKey(text) {
			return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
		}

		function wrapUserProvidedKey(key) {
			return '$' + escapeUserProvidedKey(key);
		}

		function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
			var type = typeof children;

			if (type === 'undefined' || type === 'boolean') {

				children = null;
			}

			if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
				callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
				return 1;
			}

			var child;
			var nextName;
			var subtreeCount = 0;
			var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					child = children[i];
					nextName = nextNamePrefix + getComponentKey(child, i);
					subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
				}
			} else {
				var iteratorFn = getIteratorFn(children);
				if (iteratorFn) {
					var iterator = iteratorFn.call(children);
					var step;
					if (iteratorFn !== children.entries) {
						var ii = 0;
						while (!(step = iterator.next()).done) {
							child = step.value;
							nextName = nextNamePrefix + getComponentKey(child, ii++);
							subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
						}
					} else {
						if (process.env.NODE_ENV !== 'production') {
							process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
							didWarnAboutMaps = true;
						}

						while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								child = entry[1];
								nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
								subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
							}
						}
					}
				} else if (type === 'object') {
					var addendum = '';
					if (process.env.NODE_ENV !== 'production') {
						addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
						if (children._isReactElement) {
							addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
						}
						if (ReactCurrentOwner.current) {
							var name = ReactCurrentOwner.current.getName();
							if (name) {
								addendum += ' Check the render method of `' + name + '`.';
							}
						}
					}
					var childrenString = String(children);
					!false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
				}
			}

			return subtreeCount;
		}

		function traverseAllChildren(children, callback, traverseContext) {
			if (children == null) {
				return 0;
			}

			return traverseAllChildrenImpl(children, '', callback, traverseContext);
		}

		module.exports = traverseAllChildren;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/flattenChildren.js
	function (__inner_require__, exports, module) {
		var traverseAllChildren = __inner_require__(74 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/traverseAllChildren.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function flattenSingleChildIntoContext(traverseContext, child, name) {

			var result = traverseContext;
			var keyUnique = result[name] === undefined;
			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
			}
			if (keyUnique && child != null) {
				result[name] = child;
			}
		}

		function flattenChildren(children) {
			if (children == null) {
				return children;
			}
			var result = {};
			traverseAllChildren(children, flattenSingleChildIntoContext, result);
			return result;
		}

		module.exports = flattenChildren;
	},
	// Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js
	function (__inner_require__, exports, module) {
		function deepFreezeAndThrowOnMutationInDev(object) {
			if (__DEV__) {
				if (typeof object !== 'object' || object === null || Object.isFrozen(object) || Object.isSealed(object)) {
					return;
				}

				for (var key in object) {
					if (object.hasOwnProperty(key)) {
						object.__defineGetter__(key, identity.bind(null, object[key]));
						object.__defineSetter__(key, throwOnImmutableMutation.bind(null, key));
					}
				}

				Object.freeze(object);
				Object.seal(object);

				for (var key in object) {
					if (object.hasOwnProperty(key)) {
						deepFreezeAndThrowOnMutationInDev(object[key]);
					}
				}
			}
		}

		function throwOnImmutableMutation(key, value) {
			throw Error('You attempted to set the key `' + key + '` with the value `' + JSON.stringify(value) + '` on an object that is meant to be immutable ' + 'and has been frozen.');
		}

		function identity(value) {
			return value;
		}

		module.exports = deepFreezeAndThrowOnMutationInDev;
	},
	// Libraries/Utilities/differ/insetsDiffer.js
	function (__inner_require__, exports, module) {
		var dummyInsets = {
			top: undefined,
			left: undefined,
			right: undefined,
			bottom: undefined };

		var insetsDiffer = function insetsDiffer(one, two) {
			one = one || dummyInsets;
			two = two || dummyInsets;
			return one !== two && (one.top !== two.top || one.left !== two.left || one.right !== two.right || one.bottom !== two.bottom);
		};

		module.exports = insetsDiffer;
	},
	// Libraries/Utilities/differ/pointsDiffer.js
	function (__inner_require__, exports, module) {
		var dummyPoint = { x: undefined, y: undefined };

		var pointsDiffer = function pointsDiffer(one, two) {
			one = one || dummyPoint;
			two = two || dummyPoint;
			return one !== two && (one.x !== two.x || one.y !== two.y);
		};

		module.exports = pointsDiffer;
	},
	// Libraries/Image/resolveAssetSource.js
	function (__inner_require__, exports, module) {
		var AssetRegistry = __inner_require__(80 /*Libraries/Image/AssetRegistry.js*/);
		var PixelRatio = __inner_require__(67 /*Libraries/Utilities/PixelRatio.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var SourceCode = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').SourceCode;
		var assetPathUtils = __inner_require__(81 /*local-cli/bundle/assetPathUtils.js*/);

		var _serverURL, _offlinePath;

		function getDevServerURL() {
			if (_serverURL === undefined) {
				var scriptURL = SourceCode.scriptURL;
				var match = scriptURL && scriptURL.match(/^https?:\/\/.*?\//);
				if (match) {

					_serverURL = match[0];
				} else {

					_serverURL = null;
				}
			}

			return _serverURL;
		}

		function getOfflinePath() {
			if (_offlinePath === undefined) {
				var scriptURL = SourceCode.scriptURL;
				var match = scriptURL && scriptURL.match(/^file:\/\/(\/.*\/)/);
				if (match) {
					_offlinePath = match[1];
				} else {
					_offlinePath = '';
				}
			}

			return _offlinePath;
		}

		function getPathInArchive(asset) {
			var offlinePath = getOfflinePath();
			if (Platform.OS === 'android') {
				if (offlinePath) {

					return 'file://' + offlinePath + getAssetPathInDrawableFolder(asset);
				}

				return assetPathUtils.getAndroidResourceIdentifier(asset);
			} else {

				return offlinePath + getScaledAssetPath(asset);
			}
		}

		function getPathOnDevserver(devServerUrl, asset) {
			return devServerUrl + getScaledAssetPath(asset) + '?platform=' + Platform.OS + '&hash=' + asset.hash;
		}

		function getScaledAssetPath(asset) {
			var scale = pickScale(asset.scales, PixelRatio.get());
			var scaleSuffix = scale === 1 ? '' : '@' + scale + 'x';
			var assetDir = assetPathUtils.getBasePath(asset);
			return assetDir + '/' + asset.name + scaleSuffix + '.' + asset.type;
		}

		function getAssetPathInDrawableFolder(asset) {
			var scale = pickScale(asset.scales, PixelRatio.get());
			var drawbleFolder = assetPathUtils.getAndroidDrawableFolderName(asset, scale);
			var fileName = assetPathUtils.getAndroidResourceIdentifier(asset);
			return drawbleFolder + '/' + fileName + '.' + asset.type;
		}

		function pickScale(scales, deviceScale) {

			for (var i = 0; i < scales.length; i++) {
				if (scales[i] >= deviceScale) {
					return scales[i];
				}
			}

			return scales[scales.length - 1] || 1;
		}

		function resolveAssetSource(source) {
			if (typeof source === 'object') {
				return source;
			}

			var asset = AssetRegistry.getAssetByID(source);
			if (asset) {
				return assetToImageSource(asset);
			}

			return null;
		}

		function assetToImageSource(asset) {
			var devServerURL = getDevServerURL();
			return {
				__packager_asset: true,
				width: asset.width,
				height: asset.height,
				uri: devServerURL ? getPathOnDevserver(devServerURL, asset) : getPathInArchive(asset),
				scale: pickScale(asset.scales, PixelRatio.get()) };
		}

		module.exports = resolveAssetSource;
		module.exports.pickScale = pickScale;
	},
	// Libraries/Image/AssetRegistry.js
	function (__inner_require__, exports, module) {
		var assets = [];

		function registerAsset(asset) {

			return assets.push(asset);
		}

		function getAssetByID(assetId) {
			return assets[assetId - 1];
		}

		module.exports = { registerAsset: registerAsset, getAssetByID: getAssetByID };
	},
	// local-cli/bundle/assetPathUtils.js
	function (__inner_require__, exports, module) {
		function getAndroidAssetSuffix(scale) {
			switch (scale) {
				case 0.75:
					return 'ldpi';
				case 1:
					return 'mdpi';
				case 1.5:
					return 'hdpi';
				case 2:
					return 'xhdpi';
				case 3:
					return 'xxhdpi';
				case 4:
					return 'xxxhdpi';}
		}

		function getAndroidDrawableFolderName(asset, scale) {
			var suffix = getAndroidAssetSuffix(scale);
			if (!suffix) {
				throw new Error('Don\'t know which android drawable suffix to use for asset: ' + JSON.stringify(asset));
			}
			var androidFolder = 'drawable-' + suffix;
			return androidFolder;
		}

		function getAndroidResourceIdentifier(asset) {
			var folderPath = getBasePath(asset);
			return (folderPath + '/' + asset.name).toLowerCase().replace(/\//g, '_').replace(/([^a-z0-9_])/g, '').replace(/^assets_/, '');
		}

		function getBasePath(asset) {
			var basePath = asset.httpServerLocation;
			if (basePath[0] === '/') {
				basePath = basePath.substr(1);
			}
			return basePath;
		}

		module.exports = {
			getAndroidAssetSuffix: getAndroidAssetSuffix,
			getAndroidDrawableFolderName: getAndroidDrawableFolderName,
			getAndroidResourceIdentifier: getAndroidResourceIdentifier,
			getBasePath: getBasePath };
	},
	// Libraries/ReactIOS/verifyPropTypes.js
	function (__inner_require__, exports, module) {
		var ReactNativeStyleAttributes = __inner_require__(47 /*Libraries/Components/View/ReactNativeStyleAttributes.js*/);

		function verifyPropTypes(componentInterface, viewConfig, nativePropsToIgnore) {
			if (!viewConfig) {
				return;
			}
			var componentName = componentInterface.name || componentInterface.displayName || 'unknown';
			if (!componentInterface.propTypes) {
				throw new Error('`' + componentName + '` has no propTypes defined`');
			}

			var nativeProps = viewConfig.NativeProps;
			for (var prop in nativeProps) {
				if (!componentInterface.propTypes[prop] && !ReactNativeStyleAttributes[prop] && (!nativePropsToIgnore || !nativePropsToIgnore[prop])) {
					var message;
					if (componentInterface.propTypes.hasOwnProperty(prop)) {
						message = '`' + componentName + '` has incorrectly defined propType for native prop `' + viewConfig.uiViewClassName + '.' + prop + '` of native type `' + nativeProps[prop];
					} else {
						message = '`' + componentName + '` has no propType for native prop `' + viewConfig.uiViewClassName + '.' + prop + '` of native type `' + nativeProps[prop] + '`';
					};
					message += '\nIf you haven\'t changed this prop yourself, this usually means that ' + 'your versions of the native code and JavaScript code are out of sync. Updating both ' + 'should make this error go away.';
					throw new Error(message);
				}
			}
		}

		module.exports = verifyPropTypes;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildren.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js');
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');

		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var traverseAllChildren = __inner_require__(74 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/traverseAllChildren.js*/);

		var twoArgumentPooler = PooledClass.twoArgumentPooler;
		var fourArgumentPooler = PooledClass.fourArgumentPooler;

		var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
		function escapeUserProvidedKey(text) {
			return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
		}

		function ForEachBookKeeping(forEachFunction, forEachContext) {
			this.func = forEachFunction;
			this.context = forEachContext;
			this.count = 0;
		}
		ForEachBookKeeping.prototype.destructor = function () {
			this.func = null;
			this.context = null;
			this.count = 0;
		};
		PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

		function forEachSingleChild(bookKeeping, child, name) {
			var func = bookKeeping.func;
			var context = bookKeeping.context;

			func.call(context, child, bookKeeping.count++);
		}

		function forEachChildren(children, forEachFunc, forEachContext) {
			if (children == null) {
				return children;
			}
			var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
			traverseAllChildren(children, forEachSingleChild, traverseContext);
			ForEachBookKeeping.release(traverseContext);
		}

		function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
			this.result = mapResult;
			this.keyPrefix = keyPrefix;
			this.func = mapFunction;
			this.context = mapContext;
			this.count = 0;
		}
		MapBookKeeping.prototype.destructor = function () {
			this.result = null;
			this.keyPrefix = null;
			this.func = null;
			this.context = null;
			this.count = 0;
		};
		PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

		function mapSingleChildIntoContext(bookKeeping, child, childKey) {
			var result = bookKeeping.result;
			var keyPrefix = bookKeeping.keyPrefix;
			var func = bookKeeping.func;
			var context = bookKeeping.context;

			var mappedChild = func.call(context, child, bookKeeping.count++);
			if (Array.isArray(mappedChild)) {
				mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
			} else if (mappedChild != null) {
				if (ReactElement.isValidElement(mappedChild)) {
					mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
				}
				result.push(mappedChild);
			}
		}

		function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
			var escapedPrefix = '';
			if (prefix != null) {
				escapedPrefix = escapeUserProvidedKey(prefix) + '/';
			}
			var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
			traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
			MapBookKeeping.release(traverseContext);
		}

		function mapChildren(children, func, context) {
			if (children == null) {
				return children;
			}
			var result = [];
			mapIntoWithKeyPrefixInternal(children, result, null, func, context);
			return result;
		}

		function forEachSingleChildDummy(traverseContext, child, name) {
			return null;
		}

		function countChildren(children, context) {
			return traverseAllChildren(children, forEachSingleChildDummy, null);
		}

		function toArray(children) {
			var result = [];
			mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
			return result;
		}

		var ReactChildren = {
			forEach: forEachChildren,
			map: mapChildren,
			mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
			count: countChildren,
			toArray: toArray };

		module.exports = ReactChildren;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactClass.js
	function (__inner_require__, exports, module) {
		var ReactComponent = __inner_require__(85 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponent.js*/);
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactPropTypeLocations = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocations.js');
		var ReactPropTypeLocationNames = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocationNames.js');
		var ReactNoopUpdateQueue = __inner_require__(86 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNoopUpdateQueue.js*/);

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyObject = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyObject.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');
		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var MIXINS_KEY = keyOf({ mixins: null });

		var SpecPolicy = keyMirror({

			DEFINE_ONCE: null,

			DEFINE_MANY: null,

			OVERRIDE_BASE: null,

			DEFINE_MANY_MERGED: null });

		var injectedMixins = [];

		var warnedSetProps = false;
		function warnSetProps() {
			if (!warnedSetProps) {
				warnedSetProps = true;
				process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
			}
		}

		var ReactClassInterface = {

			mixins: SpecPolicy.DEFINE_MANY,

			statics: SpecPolicy.DEFINE_MANY,

			propTypes: SpecPolicy.DEFINE_MANY,

			contextTypes: SpecPolicy.DEFINE_MANY,

			childContextTypes: SpecPolicy.DEFINE_MANY,

			getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

			getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

			getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

			render: SpecPolicy.DEFINE_ONCE,

			componentWillMount: SpecPolicy.DEFINE_MANY,

			componentDidMount: SpecPolicy.DEFINE_MANY,

			componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

			shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

			componentWillUpdate: SpecPolicy.DEFINE_MANY,

			componentDidUpdate: SpecPolicy.DEFINE_MANY,

			componentWillUnmount: SpecPolicy.DEFINE_MANY,

			updateComponent: SpecPolicy.OVERRIDE_BASE };

		var RESERVED_SPEC_KEYS = {
			displayName: function displayName(Constructor, _displayName) {
				Constructor.displayName = _displayName;
			},
			mixins: function mixins(Constructor, _mixins) {
				if (_mixins) {
					for (var i = 0; i < _mixins.length; i++) {
						mixSpecIntoComponent(Constructor, _mixins[i]);
					}
				}
			},
			childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
				if (process.env.NODE_ENV !== 'production') {
					validateTypeDef(Constructor, _childContextTypes, ReactPropTypeLocations.childContext);
				}
				Constructor.childContextTypes = assign({}, Constructor.childContextTypes, _childContextTypes);
			},
			contextTypes: function contextTypes(Constructor, _contextTypes) {
				if (process.env.NODE_ENV !== 'production') {
					validateTypeDef(Constructor, _contextTypes, ReactPropTypeLocations.context);
				}
				Constructor.contextTypes = assign({}, Constructor.contextTypes, _contextTypes);
			},

			getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
				if (Constructor.getDefaultProps) {
					Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
				} else {
					Constructor.getDefaultProps = _getDefaultProps;
				}
			},
			propTypes: function propTypes(Constructor, _propTypes) {
				if (process.env.NODE_ENV !== 'production') {
					validateTypeDef(Constructor, _propTypes, ReactPropTypeLocations.prop);
				}
				Constructor.propTypes = assign({}, Constructor.propTypes, _propTypes);
			},
			statics: function statics(Constructor, _statics) {
				mixStaticSpecIntoComponent(Constructor, _statics);
			},
			autobind: function autobind() {} };

		function validateTypeDef(Constructor, typeDef, location) {
			for (var propName in typeDef) {
				if (typeDef.hasOwnProperty(propName)) {

					process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
				}
			}
		}

		function validateMethodOverride(proto, name) {
			var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

			if (ReactClassMixin.hasOwnProperty(name)) {
				!(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
			}

			if (proto.hasOwnProperty(name)) {
				!(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
			}
		}

		function mixSpecIntoComponent(Constructor, spec) {
			if (!spec) {
				return;
			}

			!(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
			!!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;

			var proto = Constructor.prototype;

			if (spec.hasOwnProperty(MIXINS_KEY)) {
				RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
			}

			for (var name in spec) {
				if (!spec.hasOwnProperty(name)) {
					continue;
				}

				if (name === MIXINS_KEY) {

					continue;
				}

				var property = spec[name];
				validateMethodOverride(proto, name);

				if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
					RESERVED_SPEC_KEYS[name](Constructor, property);
				} else {

					var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
					var isAlreadyDefined = proto.hasOwnProperty(name);
					var isFunction = typeof property === 'function';
					var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

					if (shouldAutoBind) {
						if (!proto.__reactAutoBindMap) {
							proto.__reactAutoBindMap = {};
						}
						proto.__reactAutoBindMap[name] = property;
						proto[name] = property;
					} else {
						if (isAlreadyDefined) {
							var specPolicy = ReactClassInterface[name];

							!(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;

							if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
								proto[name] = createMergedResultFunction(proto[name], property);
							} else if (specPolicy === SpecPolicy.DEFINE_MANY) {
								proto[name] = createChainedFunction(proto[name], property);
							}
						} else {
							proto[name] = property;
							if (process.env.NODE_ENV !== 'production') {

								if (typeof property === 'function' && spec.displayName) {
									proto[name].displayName = spec.displayName + '_' + name;
								}
							}
						}
					}
				}
			}
		}

		function mixStaticSpecIntoComponent(Constructor, statics) {
			if (!statics) {
				return;
			}
			for (var name in statics) {
				var property = statics[name];
				if (!statics.hasOwnProperty(name)) {
					continue;
				}

				var isReserved = name in RESERVED_SPEC_KEYS;
				!!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;

				var isInherited = name in Constructor;
				!!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
				Constructor[name] = property;
			}
		}

		function mergeIntoWithNoDuplicateKeys(one, two) {
			!(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;

			for (var key in two) {
				if (two.hasOwnProperty(key)) {
					!(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
					one[key] = two[key];
				}
			}
			return one;
		}

		function createMergedResultFunction(one, two) {
			return function mergedResult() {
				var a = one.apply(this, arguments);
				var b = two.apply(this, arguments);
				if (a == null) {
					return b;
				} else if (b == null) {
					return a;
				}
				var c = {};
				mergeIntoWithNoDuplicateKeys(c, a);
				mergeIntoWithNoDuplicateKeys(c, b);
				return c;
			};
		}

		function createChainedFunction(one, two) {
			return function chainedFunction() {
				one.apply(this, arguments);
				two.apply(this, arguments);
			};
		}

		function bindAutoBindMethod(component, method) {
			var boundMethod = method.bind(component);
			if (process.env.NODE_ENV !== 'production') {
				boundMethod.__reactBoundContext = component;
				boundMethod.__reactBoundMethod = method;
				boundMethod.__reactBoundArguments = null;
				var componentName = component.constructor.displayName;
				var _bind = boundMethod.bind;

				boundMethod.bind = function (newThis) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					if (newThis !== component && newThis !== null) {
						process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
					} else if (!args.length) {
						process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
						return boundMethod;
					}
					var reboundMethod = _bind.apply(boundMethod, arguments);
					reboundMethod.__reactBoundContext = component;
					reboundMethod.__reactBoundMethod = method;
					reboundMethod.__reactBoundArguments = args;
					return reboundMethod;
				};
			}
			return boundMethod;
		}

		function bindAutoBindMethods(component) {
			for (var autoBindKey in component.__reactAutoBindMap) {
				if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
					var method = component.__reactAutoBindMap[autoBindKey];
					component[autoBindKey] = bindAutoBindMethod(component, method);
				}
			}
		}

		var ReactClassMixin = {

			replaceState: function replaceState(newState, callback) {
				this.updater.enqueueReplaceState(this, newState);
				if (callback) {
					this.updater.enqueueCallback(this, callback);
				}
			},

			isMounted: function isMounted() {
				return this.updater.isMounted(this);
			},

			setProps: function setProps(partialProps, callback) {
				if (process.env.NODE_ENV !== 'production') {
					warnSetProps();
				}
				this.updater.enqueueSetProps(this, partialProps);
				if (callback) {
					this.updater.enqueueCallback(this, callback);
				}
			},

			replaceProps: function replaceProps(newProps, callback) {
				if (process.env.NODE_ENV !== 'production') {
					warnSetProps();
				}
				this.updater.enqueueReplaceProps(this, newProps);
				if (callback) {
					this.updater.enqueueCallback(this, callback);
				}
			} };

		var ReactClassComponent = function ReactClassComponent() {};
		assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

		var ReactClass = {

			createClass: function createClass(spec) {
				var Constructor = function Constructor(props, context, updater) {

					if (process.env.NODE_ENV !== 'production') {
						process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
					}

					if (this.__reactAutoBindMap) {
						bindAutoBindMethods(this);
					}

					this.props = props;
					this.context = context;
					this.refs = emptyObject;
					this.updater = updater || ReactNoopUpdateQueue;

					this.state = null;

					var initialState = this.getInitialState ? this.getInitialState() : null;
					if (process.env.NODE_ENV !== 'production') {

						if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {

							initialState = null;
						}
					}
					!(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;

					this.state = initialState;
				};
				Constructor.prototype = new ReactClassComponent();
				Constructor.prototype.constructor = Constructor;

				injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

				mixSpecIntoComponent(Constructor, spec);

				if (Constructor.getDefaultProps) {
					Constructor.defaultProps = Constructor.getDefaultProps();
				}

				if (process.env.NODE_ENV !== 'production') {

					if (Constructor.getDefaultProps) {
						Constructor.getDefaultProps.isReactClassApproved = {};
					}
					if (Constructor.prototype.getInitialState) {
						Constructor.prototype.getInitialState.isReactClassApproved = {};
					}
				}

				!Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;

				if (process.env.NODE_ENV !== 'production') {
					process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
					process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
				}

				for (var methodName in ReactClassInterface) {
					if (!Constructor.prototype[methodName]) {
						Constructor.prototype[methodName] = null;
					}
				}

				return Constructor;
			},

			injection: {
				injectMixin: function injectMixin(mixin) {
					injectedMixins.push(mixin);
				} } };

		module.exports = ReactClass;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponent.js
	function (__inner_require__, exports, module) {
		var ReactNoopUpdateQueue = __inner_require__(86 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNoopUpdateQueue.js*/);

		var canDefineProperty = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/canDefineProperty.js');
		var emptyObject = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyObject.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function ReactComponent(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;

			this.updater = updater || ReactNoopUpdateQueue;
		}

		ReactComponent.prototype.isReactComponent = {};

		ReactComponent.prototype.setState = function (partialState, callback) {
			!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
			}
			this.updater.enqueueSetState(this, partialState);
			if (callback) {
				this.updater.enqueueCallback(this, callback);
			}
		};

		ReactComponent.prototype.forceUpdate = function (callback) {
			this.updater.enqueueForceUpdate(this);
			if (callback) {
				this.updater.enqueueCallback(this, callback);
			}
		};

		if (process.env.NODE_ENV !== 'production') {
			var deprecatedAPIs = {
				getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
				isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
				replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
				replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
				setProps: ['setProps', 'Instead, call render again at the top level.'] };

			var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
				if (canDefineProperty) {
					Object.defineProperty(ReactComponent.prototype, methodName, {
						get: function get() {
							process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
							return undefined;
						} });
				}
			};
			for (var fnName in deprecatedAPIs) {
				if (deprecatedAPIs.hasOwnProperty(fnName)) {
					defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
				}
			}
		}

		module.exports = ReactComponent;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNoopUpdateQueue.js
	function (__inner_require__, exports, module) {
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function warnTDZ(publicInstance, callerName) {
			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
			}
		}

		var ReactNoopUpdateQueue = {

			isMounted: function isMounted(publicInstance) {
				return false;
			},

			enqueueCallback: function enqueueCallback(publicInstance, callback) {},

			enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
				warnTDZ(publicInstance, 'forceUpdate');
			},

			enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
				warnTDZ(publicInstance, 'replaceState');
			},

			enqueueSetState: function enqueueSetState(publicInstance, partialState) {
				warnTDZ(publicInstance, 'setState');
			},

			enqueueSetProps: function enqueueSetProps(publicInstance, partialProps) {
				warnTDZ(publicInstance, 'setProps');
			},

			enqueueReplaceProps: function enqueueReplaceProps(publicInstance, props) {
				warnTDZ(publicInstance, 'replaceProps');
			} };

		module.exports = ReactNoopUpdateQueue;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElementValidator.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactPropTypeLocations = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocations.js');
		var ReactPropTypeLocationNames = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypeLocationNames.js');
		var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCurrentOwner.js');

		var canDefineProperty = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/canDefineProperty.js');
		var getIteratorFn = __inner_require__(8 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/getIteratorFn.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function getDeclarationErrorAddendum() {
			if (ReactCurrentOwner.current) {
				var name = ReactCurrentOwner.current.getName();
				if (name) {
					return ' Check the render method of `' + name + '`.';
				}
			}
			return '';
		}

		var ownerHasKeyUseWarning = {};

		var loggedTypeFailures = {};

		function validateExplicitKey(element, parentType) {
			if (!element._store || element._store.validated || element.key != null) {
				return;
			}
			element._store.validated = true;

			var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
			if (addenda === null) {

				return;
			}
			process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
		}

		function getAddendaForKeyUse(messageType, element, parentType) {
			var addendum = getDeclarationErrorAddendum();
			if (!addendum) {
				var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
				if (parentName) {
					addendum = ' Check the top-level render call using <' + parentName + '>.';
				}
			}

			var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
			if (memoizer[addendum]) {
				return null;
			}
			memoizer[addendum] = true;

			var addenda = {
				parentOrOwner: addendum,
				url: ' See https://fb.me/react-warning-keys for more information.',
				childOwner: null };

			if (element && element._owner && element._owner !== ReactCurrentOwner.current) {

				addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
			}

			return addenda;
		}

		function validateChildKeys(node, parentType) {
			if (typeof node !== 'object') {
				return;
			}
			if (Array.isArray(node)) {
				for (var i = 0; i < node.length; i++) {
					var child = node[i];
					if (ReactElement.isValidElement(child)) {
						validateExplicitKey(child, parentType);
					}
				}
			} else if (ReactElement.isValidElement(node)) {

				if (node._store) {
					node._store.validated = true;
				}
			} else if (node) {
				var iteratorFn = getIteratorFn(node);

				if (iteratorFn) {
					if (iteratorFn !== node.entries) {
						var iterator = iteratorFn.call(node);
						var step;
						while (!(step = iterator.next()).done) {
							if (ReactElement.isValidElement(step.value)) {
								validateExplicitKey(step.value, parentType);
							}
						}
					}
				}
			}
		}

		function checkPropTypes(componentName, propTypes, props, location) {
			for (var propName in propTypes) {
				if (propTypes.hasOwnProperty(propName)) {
					var error;

					try {

						!(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
						error = propTypes[propName](props, propName, componentName, location);
					} catch (ex) {
						error = ex;
					}
					process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : undefined;
					if (error instanceof Error && !(error.message in loggedTypeFailures)) {

						loggedTypeFailures[error.message] = true;

						var addendum = getDeclarationErrorAddendum();
						process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
					}
				}
			}
		}

		function validatePropTypes(element) {
			var componentClass = element.type;
			if (typeof componentClass !== 'function') {
				return;
			}
			var name = componentClass.displayName || componentClass.name;
			if (componentClass.propTypes) {
				checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
			}
			if (typeof componentClass.getDefaultProps === 'function') {
				process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
			}
		}

		var ReactElementValidator = {

			createElement: function createElement(type, props, children) {
				var validType = typeof type === 'string' || typeof type === 'function';

				process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;

				var element = ReactElement.createElement.apply(this, arguments);

				if (element == null) {
					return element;
				}

				if (validType) {
					for (var i = 2; i < arguments.length; i++) {
						validateChildKeys(arguments[i], type);
					}
				}

				validatePropTypes(element);

				return element;
			},

			createFactory: function createFactory(type) {
				var validatedFactory = ReactElementValidator.createElement.bind(null, type);

				validatedFactory.type = type;

				if (process.env.NODE_ENV !== 'production') {
					if (canDefineProperty) {
						Object.defineProperty(validatedFactory, 'type', {
							enumerable: false,
							get: function get() {
								process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
								Object.defineProperty(this, 'type', {
									value: type });

								return type;
							} });
					}
				}

				return validatedFactory;
			},

			cloneElement: function cloneElement(element, props, children) {
				var newElement = ReactElement.cloneElement.apply(this, arguments);
				for (var i = 2; i < arguments.length; i++) {
					validateChildKeys(arguments[i], newElement.type);
				}
				validatePropTypes(newElement);
				return newElement;
			} };

		module.exports = ReactElementValidator;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/onlyChild.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		function onlyChild(children) {
			!ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
			return children;
		}

		module.exports = onlyChild;
	},
	// Libraries/ART/ReactNativeART.js
	function (__inner_require__, exports, module) {
		var Color = require('art@0.10/core/color.js');
		var Path = __inner_require__(90 /*Libraries/ART/ARTSerializablePath.js*/);
		var Transform = require('art@0.10/core/transform.js');

		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactNativeViewAttributes = __inner_require__(61 /*Libraries/Components/View/ReactNativeViewAttributes.js*/);

		var createReactNativeComponentClass = __inner_require__(70 /*Libraries/ReactNative/createReactNativeComponentClass.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		function arrayDiffer(a, b) {
			if (a == null) {
				return true;
			}
			if (a.length !== b.length) {
				return true;
			}
			for (var i = 0; i < a.length; i++) {
				if (a[i] !== b[i]) {
					return true;
				}
			}
			return false;
		}

		function fontAndLinesDiffer(a, b) {
			if (a === b) {
				return false;
			}
			if (a.font !== b.font) {
				if (a.font === null) {
					return true;
				}
				if (b.font === null) {
					return true;
				}

				if (a.font.fontFamily !== b.font.fontFamily || a.font.fontSize !== b.font.fontSize || a.font.fontWeight !== b.font.fontWeight || a.font.fontStyle !== b.font.fontStyle) {
					return true;
				}
			}
			return arrayDiffer(a.lines, b.lines);
		}

		var SurfaceViewAttributes = merge(ReactNativeViewAttributes.UIView, {});

		var NodeAttributes = {
			transform: { diff: arrayDiffer },
			opacity: true };

		var GroupAttributes = merge(NodeAttributes, {
			clipping: { diff: arrayDiffer } });

		var RenderableAttributes = merge(NodeAttributes, {
			fill: { diff: arrayDiffer },
			stroke: { diff: arrayDiffer },
			strokeWidth: true,
			strokeCap: true,
			strokeJoin: true,
			strokeDash: { diff: arrayDiffer } });

		var ShapeAttributes = merge(RenderableAttributes, {
			d: { diff: arrayDiffer } });

		var TextAttributes = merge(RenderableAttributes, {
			alignment: true,
			frame: { diff: fontAndLinesDiffer },
			path: { diff: arrayDiffer } });

		var NativeSurfaceView = createReactNativeComponentClass({
			validAttributes: SurfaceViewAttributes,
			uiViewClassName: 'ARTSurfaceView' });

		var NativeGroup = createReactNativeComponentClass({
			validAttributes: GroupAttributes,
			uiViewClassName: 'ARTGroup' });

		var NativeShape = createReactNativeComponentClass({
			validAttributes: ShapeAttributes,
			uiViewClassName: 'ARTShape' });

		var NativeText = createReactNativeComponentClass({
			validAttributes: TextAttributes,
			uiViewClassName: 'ARTText' });

		function childrenAsString(children) {
			if (!children) {
				return '';
			}
			if (typeof children === 'string') {
				return children;
			}
			if (children.length) {
				return children.join('\n');
			}
			return '';
		}

		var Surface = React.createClass({ displayName: 'Surface',

			render: function render() {
				var props = this.props;
				var w = extractNumber(props.width, 0);
				var h = extractNumber(props.height, 0);
				return React.createElement(NativeSurfaceView, { style: [props.style, { width: w, height: h }] }, this.props.children);
			} });

		function extractNumber(value, defaultValue) {
			if (value == null) {
				return defaultValue;
			}
			return +value;
		}

		var pooledTransform = new Transform();

		function extractTransform(props) {
			var scaleX = props.scaleX != null ? props.scaleX : props.scale != null ? props.scale : 1;
			var scaleY = props.scaleY != null ? props.scaleY : props.scale != null ? props.scale : 1;

			pooledTransform.transformTo(1, 0, 0, 1, 0, 0).move(props.x || 0, props.y || 0).rotate(props.rotation || 0, props.originX, props.originY).scale(scaleX, scaleY, props.originX, props.originY);

			if (props.transform != null) {
				pooledTransform.transform(props.transform);
			}

			return [pooledTransform.xx, pooledTransform.yx, pooledTransform.xy, pooledTransform.yy, pooledTransform.x, pooledTransform.y];
		}

		function extractOpacity(props) {

			if (props.visible === false) {
				return 0;
			}
			if (props.opacity == null) {
				return 1;
			}
			return +props.opacity;
		}

		var Group = React.createClass({ displayName: 'Group',

			render: function render() {
				var props = this.props;
				return React.createElement(NativeGroup, {
					opacity: extractOpacity(props),
					transform: extractTransform(props) }, this.props.children);
			} });

		var ClippingRectangle = React.createClass({ displayName: 'ClippingRectangle',

			render: function render() {
				var props = this.props;
				var x = extractNumber(props.x, 0);
				var y = extractNumber(props.y, 0);
				var w = extractNumber(props.width, 0);
				var h = extractNumber(props.height, 0);
				var clipping = new Path().moveTo(x, y).line(w, 0).line(0, h).line(w, 0).close().toJSON();

				var propsExcludingXAndY = merge(props);
				delete propsExcludingXAndY.x;
				delete propsExcludingXAndY.y;
				return React.createElement(NativeGroup, {
					clipping: clipping,
					opacity: extractOpacity(props),
					transform: extractTransform(propsExcludingXAndY) }, this.props.children);
			} });

		var SOLID_COLOR = 0;
		var LINEAR_GRADIENT = 1;
		var RADIAL_GRADIENT = 2;
		var PATTERN = 3;

		function insertColorIntoArray(color, targetArray, atIndex) {
			var c = new Color(color);
			targetArray[atIndex + 0] = c.red / 255;
			targetArray[atIndex + 1] = c.green / 255;
			targetArray[atIndex + 2] = c.blue / 255;
			targetArray[atIndex + 3] = c.alpha;
		}

		function insertColorsIntoArray(stops, targetArray, atIndex) {
			var i = 0;
			if ('length' in stops) {
				while (i < stops.length) {
					insertColorIntoArray(stops[i], targetArray, atIndex + i * 4);
					i++;
				}
			} else {
				for (var offset in stops) {
					insertColorIntoArray(stops[offset], targetArray, atIndex + i * 4);
					i++;
				}
			}
			return atIndex + i * 4;
		}

		function insertOffsetsIntoArray(stops, targetArray, atIndex, multi, reverse) {
			var offsetNumber;
			var i = 0;
			if ('length' in stops) {
				while (i < stops.length) {
					offsetNumber = i / (stops.length - 1) * multi;
					targetArray[atIndex + i] = reverse ? 1 - offsetNumber : offsetNumber;
					i++;
				}
			} else {
				for (var offsetString in stops) {
					offsetNumber = +offsetString * multi;
					targetArray[atIndex + i] = reverse ? 1 - offsetNumber : offsetNumber;
					i++;
				}
			}
			return atIndex + i;
		}

		function insertColorStopsIntoArray(stops, targetArray, atIndex) {
			var lastIndex = insertColorsIntoArray(stops, targetArray, atIndex);
			insertOffsetsIntoArray(stops, targetArray, lastIndex, 1, false);
		}

		function insertDoubleColorStopsIntoArray(stops, targetArray, atIndex) {
			var lastIndex = insertColorsIntoArray(stops, targetArray, atIndex);
			lastIndex = insertColorsIntoArray(stops, targetArray, lastIndex);
			lastIndex = insertOffsetsIntoArray(stops, targetArray, lastIndex, 0.5, false);
			insertOffsetsIntoArray(stops, targetArray, lastIndex, 0.5, true);
		}

		function applyBoundingBoxToBrushData(brushData, props) {
			var type = brushData[0];
			var width = +props.width;
			var height = +props.height;
			if (type === LINEAR_GRADIENT) {
				brushData[1] *= width;
				brushData[2] *= height;
				brushData[3] *= width;
				brushData[4] *= height;
			} else if (type === RADIAL_GRADIENT) {
				brushData[1] *= width;
				brushData[2] *= height;
				brushData[3] *= width;
				brushData[4] *= height;
				brushData[5] *= width;
				brushData[6] *= height;
			} else if (type === PATTERN) {}
		}

		function extractBrush(colorOrBrush, props) {
			if (colorOrBrush == null) {
				return null;
			}
			if (colorOrBrush._brush) {
				if (colorOrBrush._bb) {

					applyBoundingBoxToBrushData(colorOrBrush._brush, props);
					colorOrBrush._bb = false;
				}
				return colorOrBrush._brush;
			}
			var c = new Color(colorOrBrush);
			return [SOLID_COLOR, c.red / 255, c.green / 255, c.blue / 255, c.alpha];
		}

		function extractColor(color) {
			if (color == null) {
				return null;
			}
			var c = new Color(color);
			return [c.red / 255, c.green / 255, c.blue / 255, c.alpha];
		}

		function extractStrokeCap(strokeCap) {
			switch (strokeCap) {
				case 'butt':
					return 0;
				case 'square':
					return 2;
				default:
					return 1;}
		}

		function extractStrokeJoin(strokeJoin) {
			switch (strokeJoin) {
				case 'miter':
					return 0;
				case 'bevel':
					return 2;
				default:
					return 1;}
		}

		var Shape = React.createClass({ displayName: 'Shape',

			render: function render() {
				var props = this.props;
				var path = props.d || childrenAsString(props.children);
				var d = new Path(path).toJSON();
				return React.createElement(NativeShape, {
					fill: extractBrush(props.fill, props),
					opacity: extractOpacity(props),
					stroke: extractColor(props.stroke),
					strokeCap: extractStrokeCap(props.strokeCap),
					strokeDash: props.strokeDash || null,
					strokeJoin: extractStrokeJoin(props.strokeJoin),
					strokeWidth: extractNumber(props.strokeWidth, 1),
					transform: extractTransform(props),

					d: d });
			} });

		var cachedFontObjectsFromString = {};

		var fontFamilyPrefix = /^[\s"']*/;
		var fontFamilySuffix = /[\s"']*$/;

		function extractSingleFontFamily(fontFamilyString) {

			return fontFamilyString.split(',')[0].replace(fontFamilyPrefix, '').replace(fontFamilySuffix, '');
		}

		function parseFontString(font) {
			if (cachedFontObjectsFromString.hasOwnProperty(font)) {
				return cachedFontObjectsFromString[font];
			}
			var regexp = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?)[ptexm\%]*(?:\s*\/.*?)?\s+)?\s*\"?([^\"]*)/i;
			var match = regexp.exec(font);
			if (!match) {
				return null;
			}
			var fontFamily = extractSingleFontFamily(match[3]);
			var fontSize = +match[2] || 12;
			var isBold = /bold/.exec(match[1]);
			var isItalic = /italic/.exec(match[1]);
			cachedFontObjectsFromString[font] = {
				fontFamily: fontFamily,
				fontSize: fontSize,
				fontWeight: isBold ? 'bold' : 'normal',
				fontStyle: isItalic ? 'italic' : 'normal' };

			return cachedFontObjectsFromString[font];
		}

		function extractFont(font) {
			if (font == null) {
				return null;
			}
			if (typeof font === 'string') {
				return parseFontString(font);
			}
			var fontFamily = extractSingleFontFamily(font.fontFamily);
			var fontSize = +font.fontSize || 12;
			return {

				fontFamily: fontFamily,
				fontSize: fontSize,
				fontWeight: font.fontWeight,
				fontStyle: font.fontStyle };
		}

		var newLine = /\n/g;
		function extractFontAndLines(font, text) {
			return { font: extractFont(font), lines: text.split(newLine) };
		}

		function extractAlignment(alignment) {
			switch (alignment) {
				case 'right':
					return 1;
				case 'center':
					return 2;
				default:
					return 0;}
		}

		var Text = React.createClass({ displayName: 'Text',

			render: function render() {
				var props = this.props;
				var textPath = props.path ? new Path(props.path).toJSON() : null;
				var textFrame = extractFontAndLines(props.font, childrenAsString(props.children));

				return React.createElement(NativeText, {
					fill: extractBrush(props.fill, props),
					opacity: extractOpacity(props),
					stroke: extractColor(props.stroke),
					strokeCap: extractStrokeCap(props.strokeCap),
					strokeDash: props.strokeDash || null,
					strokeJoin: extractStrokeJoin(props.strokeJoin),
					strokeWidth: extractNumber(props.strokeWidth, 1),
					transform: extractTransform(props),

					alignment: extractAlignment(props.alignment),
					frame: textFrame,
					path: textPath });
			} });

		function LinearGradient(stops, x1, y1, x2, y2) {
			var type = LINEAR_GRADIENT;

			if (arguments.length < 5) {
				var angle = (x1 == null ? 270 : x1) * Math.PI / 180;

				var x = Math.cos(angle);
				var y = -Math.sin(angle);
				var l = (Math.abs(x) + Math.abs(y)) / 2;

				x *= l;y *= l;

				x1 = 0.5 - x;
				x2 = 0.5 + x;
				y1 = 0.5 - y;
				y2 = 0.5 + y;
				this._bb = true;
			} else {
				this._bb = false;
			}

			var brushData = [type, +x1, +y1, +x2, +y2];
			insertColorStopsIntoArray(stops, brushData, 5);
			this._brush = brushData;
		}

		function RadialGradient(stops, fx, fy, rx, ry, cx, cy) {
			if (ry == null) {
				ry = rx;
			}
			if (cx == null) {
				cx = fx;
			}
			if (cy == null) {
				cy = fy;
			}
			if (fx == null) {

				fx = fy = rx = ry = cx = cy = 0.5;
				this._bb = true;
			} else {
				this._bb = false;
			}

			var brushData = [RADIAL_GRADIENT, +fx, +fy, +rx * 2, +ry * 2, +cx, +cy];
			insertDoubleColorStopsIntoArray(stops, brushData, 7);
			this._brush = brushData;
		}

		function Pattern(url, width, height, left, top) {
			this._brush = [PATTERN, url, +left || 0, +top || 0, +width, +height];
		}

		function CSSBackgroundPattern() {
			return new Color('rgba(0,0,0,0)');
		}

		var ReactART = {
			LinearGradient: LinearGradient,
			RadialGradient: RadialGradient,
			Pattern: Pattern,
			Transform: Transform,
			Path: Path,
			Surface: Surface,
			Group: Group,
			ClippingRectangle: ClippingRectangle,
			Shape: Shape,
			Text: Text,
			CSSBackgroundPattern: CSSBackgroundPattern };

		module.exports = ReactART;
	},
	// Libraries/ART/ARTSerializablePath.js
	function (__inner_require__, exports, module) {
		var Class = require('art@0.10/core/class.js');
		var Path = require('art@0.10/core/path.js');

		var MOVE_TO = 0;
		var CLOSE = 1;
		var LINE_TO = 2;
		var CURVE_TO = 3;
		var ARC = 4;

		var SerializablePath = Class(Path, {

			initialize: function initialize(path) {
				this.reset();
				if (path instanceof SerializablePath) {
					this.path = path.path.slice(0);
				} else if (path) {
					if (path.applyToPath) {
						path.applyToPath(this);
					} else {
						this.push(path);
					}
				}
			},

			onReset: function onReset() {
				this.path = [];
			},

			onMove: function onMove(sx, sy, x, y) {
				this.path.push(MOVE_TO, x, y);
			},

			onLine: function onLine(sx, sy, x, y) {
				this.path.push(LINE_TO, x, y);
			},

			onBezierCurve: function onBezierCurve(sx, sy, p1x, p1y, p2x, p2y, x, y) {
				this.path.push(CURVE_TO, p1x, p1y, p2x, p2y, x, y);
			},

			_arcToBezier: Path.prototype.onArc,

			onArc: function onArc(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation) {
				if (rx !== ry || rotation) {
					return this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
				}
				this.path.push(ARC, cx, cy, rx, sa, ea, ccw ? 0 : 1);
			},

			onClose: function onClose() {
				this.path.push(CLOSE);
			},

			toJSON: function toJSON() {
				return this.path;
			} });

		module.exports = SerializablePath;
	},
	// Libraries/Components/DatePicker/DatePickerIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var RCTDatePickerIOSConsts = require('react-native@0.21/Libraries/Utilities/UIManager.js').RCTDatePicker.Constants;
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var DatePickerIOS = React.createClass({ displayName: 'DatePickerIOS',

			_picker: undefined,

			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				date: PropTypes.instanceOf(Date).isRequired,

				onDateChange: PropTypes.func.isRequired,

				maximumDate: PropTypes.instanceOf(Date),

				minimumDate: PropTypes.instanceOf(Date),

				mode: PropTypes.oneOf(['date', 'time', 'datetime']),

				minuteInterval: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]),

				timeZoneOffsetInMinutes: PropTypes.number }),

			getDefaultProps: function getDefaultProps() {
				return {
					mode: 'datetime' };
			},

			_onChange: function _onChange(event) {
				var nativeTimeStamp = event.nativeEvent.timestamp;
				this.props.onDateChange && this.props.onDateChange(new Date(nativeTimeStamp));

				this.props.onChange && this.props.onChange(event);

				var propsTimeStamp = this.props.date.getTime();
				if (this._picker && nativeTimeStamp !== propsTimeStamp) {
					this._picker.setNativeProps({
						date: propsTimeStamp });
				}
			},

			render: function render() {
				var _this = this;
				var props = this.props;
				return React.createElement(View, { style: props.style }, React.createElement(RCTDatePickerIOS, {
					ref: function ref(picker) {
						return _this._picker = picker;
					},
					style: styles.datePickerIOS,
					date: props.date.getTime(),
					maximumDate: props.maximumDate ? props.maximumDate.getTime() : undefined,

					minimumDate: props.minimumDate ? props.minimumDate.getTime() : undefined,

					mode: props.mode,
					minuteInterval: props.minuteInterval,
					timeZoneOffsetInMinutes: props.timeZoneOffsetInMinutes,
					onChange: this._onChange }));
			} });

		var styles = StyleSheet.create({
			datePickerIOS: {
				height: RCTDatePickerIOSConsts.ComponentHeight,
				width: RCTDatePickerIOSConsts.ComponentWidth } });

		var RCTDatePickerIOS = requireNativeComponent('RCTDatePicker', DatePickerIOS, {
			nativeOnly: { onChange: true } });

		module.exports = DatePickerIOS;
	},
	// Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Image/Image.ios.js
	function (__inner_require__, exports, module) {
		var EdgeInsetsPropType = __inner_require__(94 /*Libraries/StyleSheet/EdgeInsetsPropType.js*/);
		var ImageResizeMode = __inner_require__(49 /*Libraries/Image/ImageResizeMode.js*/);
		var ImageStylePropTypes = __inner_require__(48 /*Libraries/Image/ImageStylePropTypes.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactNativeViewAttributes = __inner_require__(61 /*Libraries/Components/View/ReactNativeViewAttributes.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var StyleSheetPropType = __inner_require__(62 /*Libraries/StyleSheet/StyleSheetPropType.js*/);

		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);
		var resolveAssetSource = __inner_require__(79 /*Libraries/Image/resolveAssetSource.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');var _require = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    ImageViewManager = _require.ImageViewManager,
		    NetworkImageViewManager = _require.NetworkImageViewManager;

		var Image = React.createClass({ displayName: 'Image',
			propTypes: {
				style: StyleSheetPropType(ImageStylePropTypes),

				source: PropTypes.oneOfType([PropTypes.shape({
					uri: PropTypes.string }), PropTypes.number]),

				defaultSource: PropTypes.oneOfType([PropTypes.shape({
					uri: PropTypes.string }), PropTypes.number]),

				accessible: PropTypes.bool,

				accessibilityLabel: PropTypes.string,

				capInsets: EdgeInsetsPropType,

				resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),

				testID: PropTypes.string,

				onLayout: PropTypes.func,

				onLoadStart: PropTypes.func,

				onProgress: PropTypes.func,

				onError: PropTypes.func,

				onLoad: PropTypes.func,

				onLoadEnd: PropTypes.func },

			statics: {
				resizeMode: ImageResizeMode,

				getSize: function getSize(uri, success, failure) {
					ImageViewManager.getSize(uri, success, failure || function () {
						console.warn('Failed to get size for image: ' + uri);
					});
				} },

			mixins: [NativeMethodsMixin],

			viewConfig: {
				uiViewClassName: 'UIView',
				validAttributes: ReactNativeViewAttributes.UIView },

			contextTypes: {
				isInAParentText: React.PropTypes.bool },

			render: function render() {
				var source = resolveAssetSource(this.props.source) || {};var width = source.width,
				    height = source.height,
				    uri = source.uri;
				var style = flattenStyle([{ width: width, height: height }, styles.base, this.props.style]) || {};

				var isNetwork = uri && uri.match(/^https?:/);
				var RawImage = isNetwork ? RCTNetworkImageView : RCTImageView;
				var resizeMode = this.props.resizeMode || (style || {}).resizeMode || 'cover';
				var tintColor = (style || {}).tintColor;

				if (isNetwork && tintColor) {
					RawImage = RCTImageView;
				}

				if (this.context.isInAParentText) {
					RawImage = RCTVirtualImage;
					if (!width || !height) {
						console.warn('You must specify a width and height for the image %s', uri);
					}
				}

				return React.createElement(RawImage, babelHelpers.extends({}, this.props, {
					style: style,
					resizeMode: resizeMode,
					tintColor: tintColor,
					source: source }));
			} });

		var styles = StyleSheet.create({
			base: {
				overflow: 'hidden' } });

		var RCTImageView = requireNativeComponent('RCTImageView', Image);
		var RCTNetworkImageView = NetworkImageViewManager ? requireNativeComponent('RCTNetworkImageView', Image) : RCTImageView;
		var RCTVirtualImage = requireNativeComponent('RCTVirtualImage', Image);

		module.exports = Image;
	},
	// Libraries/StyleSheet/EdgeInsetsPropType.js
	function (__inner_require__, exports, module) {
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);

		var createStrictShapeTypeChecker = __inner_require__(63 /*Libraries/Utilities/createStrictShapeTypeChecker.js*/);

		var EdgeInsetsPropType = createStrictShapeTypeChecker({
			top: PropTypes.number,
			left: PropTypes.number,
			bottom: PropTypes.number,
			right: PropTypes.number });

		module.exports = EdgeInsetsPropType;
	},
	// Libraries/Image/ImageEditor.js
	function (__inner_require__, exports, module) {
		var RCTImageEditingManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ImageEditingManager;var ImageEditor = function () {
			function ImageEditor() {
				babelHelpers.classCallCheck(this, ImageEditor);
			}babelHelpers.createClass(ImageEditor, null, [{ key: 'cropImage', value: function cropImage(uri, cropData, success, failure) {
					RCTImageEditingManager.cropImage(uri, cropData, success, failure);
				} }]);return ImageEditor;
		}();

		module.exports = ImageEditor;
	},
	// Libraries/Image/ImageStore.js
	function (__inner_require__, exports, module) {
		var RCTImageStoreManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ImageStoreManager;var ImageStore = function () {
			function ImageStore() {
				babelHelpers.classCallCheck(this, ImageStore);
			}babelHelpers.createClass(ImageStore, null, [{ key: 'hasImageForTag', value: function hasImageForTag(uri, callback) {
					if (RCTImageStoreManager.hasImageForTag) {
						RCTImageStoreManager.hasImageForTag(uri, callback);
					} else {
						console.warn('hasImageForTag() not implemented');
					}
				} }, { key: 'removeImageForTag', value: function removeImageForTag(uri) {
					if (RCTImageStoreManager.removeImageForTag) {
						RCTImageStoreManager.removeImageForTag(uri);
					} else {
						console.warn('removeImageForTag() not implemented');
					}
				} }, { key: 'addImageFromBase64', value: function addImageFromBase64(base64ImageData, success, failure) {
					RCTImageStoreManager.addImageFromBase64(base64ImageData, success, failure);
				} }, { key: 'getBase64ForTag', value: function getBase64ForTag(uri, success, failure) {
					RCTImageStoreManager.getBase64ForTag(uri, success, failure);
				} }]);return ImageStore;
		}();

		module.exports = ImageStore;
	},
	// Libraries/CustomComponents/ListView/ListView.js
	function (__inner_require__, exports, module) {
		var ListViewDataSource = __inner_require__(98 /*Libraries/CustomComponents/ListView/ListViewDataSource.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var RCTScrollViewManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ScrollViewManager;
		var ScrollView = __inner_require__(100 /*Libraries/Components/ScrollView/ScrollView.js*/);
		var ScrollResponder = __inner_require__(102 /*Libraries/Components/ScrollResponder.js*/);
		var StaticRenderer = __inner_require__(106 /*Libraries/Components/StaticRenderer.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');

		var isEmpty = __inner_require__(99 /*Libraries/vendor/core/isEmpty.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		var PropTypes = React.PropTypes;

		var DEFAULT_PAGE_SIZE = 1;
		var DEFAULT_INITIAL_ROWS = 10;
		var DEFAULT_SCROLL_RENDER_AHEAD = 1000;
		var DEFAULT_END_REACHED_THRESHOLD = 1000;
		var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
		var SCROLLVIEW_REF = 'listviewscroll';

		var ListView = React.createClass({ displayName: 'ListView',
			mixins: [ScrollResponder.Mixin, TimerMixin],

			statics: {
				DataSource: ListViewDataSource },

			propTypes: babelHelpers.extends({}, ScrollView.propTypes, {

				dataSource: PropTypes.instanceOf(ListViewDataSource).isRequired,

				renderSeparator: PropTypes.func,

				renderRow: PropTypes.func.isRequired,

				initialListSize: PropTypes.number,

				onEndReached: PropTypes.func,

				onEndReachedThreshold: PropTypes.number,

				pageSize: PropTypes.number,

				renderFooter: PropTypes.func,
				renderHeader: PropTypes.func,

				renderSectionHeader: PropTypes.func,

				renderScrollComponent: React.PropTypes.func.isRequired,

				scrollRenderAheadDistance: React.PropTypes.number,

				onChangeVisibleRows: React.PropTypes.func,

				removeClippedSubviews: React.PropTypes.bool,

				stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number) }),

			getMetrics: function getMetrics() {
				return {
					contentLength: this.scrollProperties.contentLength,
					totalRows: this.props.dataSource.getRowCount(),
					renderedRows: this.state.curRenderedRowsCount,
					visibleRows: Object.keys(this._visibleRows).length };
			},

			getScrollResponder: function getScrollResponder() {
				return this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].getScrollResponder();
			},

			scrollTo: function scrollTo() {
				var _refs$SCROLLVIEW_REF;
				this.refs[SCROLLVIEW_REF] && (_refs$SCROLLVIEW_REF = this.refs[SCROLLVIEW_REF]).scrollTo.apply(_refs$SCROLLVIEW_REF, arguments);
			},

			setNativeProps: function setNativeProps(props) {
				this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].setNativeProps(props);
			},

			getDefaultProps: function getDefaultProps() {
				return {
					initialListSize: DEFAULT_INITIAL_ROWS,
					pageSize: DEFAULT_PAGE_SIZE,
					renderScrollComponent: function renderScrollComponent(props) {
						return React.createElement(ScrollView, props);
					},
					scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
					onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
					stickyHeaderIndices: [] };
			},

			getInitialState: function getInitialState() {
				return {
					curRenderedRowsCount: this.props.initialListSize,
					highlightedRow: {} };
			},

			getInnerViewNode: function getInnerViewNode() {
				return this.refs[SCROLLVIEW_REF].getInnerViewNode();
			},

			componentWillMount: function componentWillMount() {

				this.scrollProperties = {
					visibleLength: null,
					contentLength: null,
					offset: 0 };

				this._childFrames = [];
				this._visibleRows = {};
				this._prevRenderedRowsCount = 0;
				this._sentEndForContentLength = null;
			},

			componentDidMount: function componentDidMount() {
				var _this = this;

				this.requestAnimationFrame(function () {
					_this._measureAndUpdateScrollProps();
				});
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				var _this2 = this;
				if (this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) {
					this.setState(function (state, props) {
						_this2._prevRenderedRowsCount = 0;
						return {
							curRenderedRowsCount: Math.min(Math.max(state.curRenderedRowsCount, props.initialListSize), props.dataSource.getRowCount()) };
					}, function () {
						return _this2._renderMoreRowsIfNeeded();
					});
				}
			},

			componentDidUpdate: function componentDidUpdate() {
				var _this3 = this;
				this.requestAnimationFrame(function () {
					_this3._measureAndUpdateScrollProps();
				});
			},

			onRowHighlighted: function onRowHighlighted(sectionID, rowID) {
				this.setState({ highlightedRow: { sectionID: sectionID, rowID: rowID } });
			},

			render: function render() {
				var bodyComponents = [];

				var dataSource = this.props.dataSource;
				var allRowIDs = dataSource.rowIdentities;
				var rowCount = 0;
				var sectionHeaderIndices = [];

				var header = this.props.renderHeader && this.props.renderHeader();
				var footer = this.props.renderFooter && this.props.renderFooter();
				var totalIndex = header ? 1 : 0;

				for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
					var sectionID = dataSource.sectionIdentities[sectionIdx];
					var rowIDs = allRowIDs[sectionIdx];
					if (rowIDs.length === 0) {
						continue;
					}

					if (this.props.renderSectionHeader) {
						var shouldUpdateHeader = rowCount >= this._prevRenderedRowsCount && dataSource.sectionHeaderShouldUpdate(sectionIdx);
						bodyComponents.push(React.createElement(StaticRenderer, {
							key: 's_' + sectionID,
							shouldUpdate: !!shouldUpdateHeader,
							render: this.props.renderSectionHeader.bind(null, dataSource.getSectionHeaderData(sectionIdx), sectionID) }));

						sectionHeaderIndices.push(totalIndex++);
					}

					for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
						var rowID = rowIDs[rowIdx];
						var comboID = sectionID + '_' + rowID;
						var shouldUpdateRow = rowCount >= this._prevRenderedRowsCount && dataSource.rowShouldUpdate(sectionIdx, rowIdx);
						var row = React.createElement(StaticRenderer, {
							key: 'r_' + comboID,
							shouldUpdate: !!shouldUpdateRow,
							render: this.props.renderRow.bind(null, dataSource.getRowData(sectionIdx, rowIdx), sectionID, rowID, this.onRowHighlighted) });

						bodyComponents.push(row);
						totalIndex++;

						if (this.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
							var adjacentRowHighlighted = this.state.highlightedRow.sectionID === sectionID && (this.state.highlightedRow.rowID === rowID || this.state.highlightedRow.rowID === rowIDs[rowIdx + 1]);

							var separator = this.props.renderSeparator(sectionID, rowID, adjacentRowHighlighted);

							bodyComponents.push(separator);
							totalIndex++;
						}
						if (++rowCount === this.state.curRenderedRowsCount) {
							break;
						}
					}
					if (rowCount >= this.state.curRenderedRowsCount) {
						break;
					}
				}var _props = this.props,
				    renderScrollComponent = _props.renderScrollComponent,
				    props = babelHelpers.objectWithoutProperties(_props, ['renderScrollComponent']);
				if (!props.scrollEventThrottle) {
					props.scrollEventThrottle = DEFAULT_SCROLL_CALLBACK_THROTTLE;
				}
				if (props.removeClippedSubviews === undefined) {
					props.removeClippedSubviews = true;
				}
				babelHelpers.extends(props, {
					onScroll: this._onScroll,
					stickyHeaderIndices: this.props.stickyHeaderIndices.concat(sectionHeaderIndices),

					onKeyboardWillShow: undefined,
					onKeyboardWillHide: undefined,
					onKeyboardDidShow: undefined,
					onKeyboardDidHide: undefined });

				return React.cloneElement(renderScrollComponent(props), {
					ref: SCROLLVIEW_REF,
					onContentSizeChange: this._onContentSizeChange,
					onLayout: this._onLayout }, header, bodyComponents, footer);
			},

			_measureAndUpdateScrollProps: function _measureAndUpdateScrollProps() {
				var scrollComponent = this.getScrollResponder();
				if (!scrollComponent || !scrollComponent.getInnerViewNode) {
					return;
				}

				RCTScrollViewManager && RCTScrollViewManager.calculateChildFrames && RCTScrollViewManager.calculateChildFrames(React.findNodeHandle(scrollComponent), this._updateVisibleRows);
			},

			_onContentSizeChange: function _onContentSizeChange(width, height) {
				var contentLength = !this.props.horizontal ? height : width;
				if (contentLength !== this.scrollProperties.contentLength) {
					this.scrollProperties.contentLength = contentLength;
					this._updateVisibleRows();
					this._renderMoreRowsIfNeeded();
				}
				this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
			},

			_onLayout: function _onLayout(event) {
				var _event$nativeEvent$la = event.nativeEvent.layout,
				    width = _event$nativeEvent$la.width,
				    height = _event$nativeEvent$la.height;
				var visibleLength = !this.props.horizontal ? height : width;
				if (visibleLength !== this.scrollProperties.visibleLength) {
					this.scrollProperties.visibleLength = visibleLength;
					this._updateVisibleRows();
					this._renderMoreRowsIfNeeded();
				}
				this.props.onLayout && this.props.onLayout(event);
			},

			_maybeCallOnEndReached: function _maybeCallOnEndReached(event) {
				if (this.props.onEndReached && this.scrollProperties.contentLength !== this._sentEndForContentLength && this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold && this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
					this._sentEndForContentLength = this.scrollProperties.contentLength;
					this.props.onEndReached(event);
					return true;
				}
				return false;
			},

			_renderMoreRowsIfNeeded: function _renderMoreRowsIfNeeded() {
				if (this.scrollProperties.contentLength === null || this.scrollProperties.visibleLength === null || this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
					this._maybeCallOnEndReached();
					return;
				}

				var distanceFromEnd = this._getDistanceFromEnd(this.scrollProperties);
				if (distanceFromEnd < this.props.scrollRenderAheadDistance) {
					this._pageInNewRows();
				}
			},

			_pageInNewRows: function _pageInNewRows() {
				var _this4 = this;
				this.setState(function (state, props) {
					var rowsToRender = Math.min(state.curRenderedRowsCount + props.pageSize, props.dataSource.getRowCount());

					_this4._prevRenderedRowsCount = state.curRenderedRowsCount;
					return {
						curRenderedRowsCount: rowsToRender };
				}, function () {
					_this4._measureAndUpdateScrollProps();
					_this4._prevRenderedRowsCount = _this4.state.curRenderedRowsCount;
				});
			},

			_getDistanceFromEnd: function _getDistanceFromEnd(scrollProperties) {
				return scrollProperties.contentLength - scrollProperties.visibleLength - scrollProperties.offset;
			},

			_updateVisibleRows: function _updateVisibleRows(updatedFrames) {
				var _this5 = this;
				if (!this.props.onChangeVisibleRows) {
					return;
				}
				if (updatedFrames) {
					updatedFrames.forEach(function (newFrame) {
						_this5._childFrames[newFrame.index] = merge(newFrame);
					});
				}
				var isVertical = !this.props.horizontal;
				var dataSource = this.props.dataSource;
				var visibleMin = this.scrollProperties.offset;
				var visibleMax = visibleMin + this.scrollProperties.visibleLength;
				var allRowIDs = dataSource.rowIdentities;

				var header = this.props.renderHeader && this.props.renderHeader();
				var totalIndex = header ? 1 : 0;
				var visibilityChanged = false;
				var changedRows = {};
				for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
					var rowIDs = allRowIDs[sectionIdx];
					if (rowIDs.length === 0) {
						continue;
					}
					var sectionID = dataSource.sectionIdentities[sectionIdx];
					if (this.props.renderSectionHeader) {
						totalIndex++;
					}
					var visibleSection = this._visibleRows[sectionID];
					if (!visibleSection) {
						visibleSection = {};
					}
					for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
						var rowID = rowIDs[rowIdx];
						var frame = this._childFrames[totalIndex];
						totalIndex++;
						if (!frame) {
							break;
						}
						var rowVisible = visibleSection[rowID];
						var min = isVertical ? frame.y : frame.x;
						var max = min + (isVertical ? frame.height : frame.width);
						if (min > visibleMax || max < visibleMin) {
							if (rowVisible) {
								visibilityChanged = true;
								delete visibleSection[rowID];
								if (!changedRows[sectionID]) {
									changedRows[sectionID] = {};
								}
								changedRows[sectionID][rowID] = false;
							}
						} else if (!rowVisible) {
							visibilityChanged = true;
							visibleSection[rowID] = true;
							if (!changedRows[sectionID]) {
								changedRows[sectionID] = {};
							}
							changedRows[sectionID][rowID] = true;
						}
					}
					if (!isEmpty(visibleSection)) {
						this._visibleRows[sectionID] = visibleSection;
					} else if (this._visibleRows[sectionID]) {
						delete this._visibleRows[sectionID];
					}
				}
				visibilityChanged && this.props.onChangeVisibleRows(this._visibleRows, changedRows);
			},

			_onScroll: function _onScroll(e) {
				var isVertical = !this.props.horizontal;
				this.scrollProperties.visibleLength = e.nativeEvent.layoutMeasurement[isVertical ? 'height' : 'width'];

				this.scrollProperties.contentLength = e.nativeEvent.contentSize[isVertical ? 'height' : 'width'];

				this.scrollProperties.offset = e.nativeEvent.contentOffset[isVertical ? 'y' : 'x'];

				this._updateVisibleRows(e.nativeEvent.updatedChildFrames);
				if (!this._maybeCallOnEndReached(e)) {
					this._renderMoreRowsIfNeeded();
				}

				if (this.props.onEndReached && this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) {

					this._sentEndForContentLength = null;
				}

				this.props.onScroll && this.props.onScroll(e);
			} });

		module.exports = ListView;
	},
	// Libraries/CustomComponents/ListView/ListViewDataSource.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var isEmpty = __inner_require__(99 /*Libraries/vendor/core/isEmpty.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function defaultGetRowData(dataBlob, sectionID, rowID) {
			return dataBlob[sectionID][rowID];
		}

		function defaultGetSectionHeaderData(dataBlob, sectionID) {
			return dataBlob[sectionID];
		}var ListViewDataSource = function () {

			function ListViewDataSource(params) {
				babelHelpers.classCallCheck(this, ListViewDataSource);
				invariant(params && typeof params.rowHasChanged === 'function', 'Must provide a rowHasChanged function.');

				this._rowHasChanged = params.rowHasChanged;
				this._getRowData = params.getRowData || defaultGetRowData;
				this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
				this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;

				this._dataBlob = null;
				this._dirtyRows = [];
				this._dirtySections = [];
				this._cachedRowCount = 0;

				this.rowIdentities = [];
				this.sectionIdentities = [];
			}babelHelpers.createClass(ListViewDataSource, [{ key: 'cloneWithRows', value: function cloneWithRows(dataBlob, rowIdentities) {
					var rowIds = rowIdentities ? [rowIdentities] : null;
					if (!this._sectionHeaderHasChanged) {
						this._sectionHeaderHasChanged = function () {
							return false;
						};
					}
					return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
				} }, { key: 'cloneWithRowsAndSections', value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
					invariant(typeof this._sectionHeaderHasChanged === 'function', 'Must provide a sectionHeaderHasChanged function with section data.');

					var newSource = new ListViewDataSource({
						getRowData: this._getRowData,
						getSectionHeaderData: this._getSectionHeaderData,
						rowHasChanged: this._rowHasChanged,
						sectionHeaderHasChanged: this._sectionHeaderHasChanged });

					newSource._dataBlob = dataBlob;
					if (sectionIdentities) {
						newSource.sectionIdentities = sectionIdentities;
					} else {
						newSource.sectionIdentities = Object.keys(dataBlob);
					}
					if (rowIdentities) {
						newSource.rowIdentities = rowIdentities;
					} else {
						newSource.rowIdentities = [];
						newSource.sectionIdentities.forEach(function (sectionID) {
							newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
						});
					}
					newSource._cachedRowCount = countRows(newSource.rowIdentities);

					newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);

					return newSource;
				} }, { key: 'getRowCount', value: function getRowCount() {
					return this._cachedRowCount;
				} }, { key: 'rowShouldUpdate', value: function rowShouldUpdate(sectionIndex, rowIndex) {
					var needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
					warning(needsUpdate !== undefined, 'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex);
					return needsUpdate;
				} }, { key: 'getRowData', value: function getRowData(sectionIndex, rowIndex) {
					var sectionID = this.sectionIdentities[sectionIndex];
					var rowID = this.rowIdentities[sectionIndex][rowIndex];
					warning(sectionID !== undefined && rowID !== undefined, 'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex);

					return this._getRowData(this._dataBlob, sectionID, rowID);
				} }, { key: 'getRowIDForFlatIndex', value: function getRowIDForFlatIndex(index) {
					var accessIndex = index;
					for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
						if (accessIndex >= this.rowIdentities[ii].length) {
							accessIndex -= this.rowIdentities[ii].length;
						} else {
							return this.rowIdentities[ii][accessIndex];
						}
					}
					return null;
				} }, { key: 'getSectionIDForFlatIndex', value: function getSectionIDForFlatIndex(index) {
					var accessIndex = index;
					for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
						if (accessIndex >= this.rowIdentities[ii].length) {
							accessIndex -= this.rowIdentities[ii].length;
						} else {
							return this.sectionIdentities[ii];
						}
					}
					return null;
				} }, { key: 'getSectionLengths', value: function getSectionLengths() {
					var results = [];
					for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
						results.push(this.rowIdentities[ii].length);
					}
					return results;
				} }, { key: 'sectionHeaderShouldUpdate', value: function sectionHeaderShouldUpdate(sectionIndex) {
					var needsUpdate = this._dirtySections[sectionIndex];
					warning(needsUpdate !== undefined, 'missing dirtyBit for section: ' + sectionIndex);
					return needsUpdate;
				} }, { key: 'getSectionHeaderData', value: function getSectionHeaderData(sectionIndex) {
					if (!this._getSectionHeaderData) {
						return null;
					}
					var sectionID = this.sectionIdentities[sectionIndex];
					warning(sectionID !== undefined, 'renderSection called on invalid section: ' + sectionIndex);
					return this._getSectionHeaderData(this._dataBlob, sectionID);
				} }, { key: '_calculateDirtyArrays', value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {

					var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
					var prevRowsHash = {};
					for (var ii = 0; ii < prevRowIDs.length; ii++) {
						var sectionID = prevSectionIDs[ii];
						warning(!prevRowsHash[sectionID], 'SectionID appears more than once: ' + sectionID);

						prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
					}

					this._dirtySections = [];
					this._dirtyRows = [];

					var dirty;
					for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
						var sectionID = this.sectionIdentities[sIndex];

						dirty = !prevSectionsHash[sectionID];
						var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
						if (!dirty && sectionHeaderHasChanged) {
							dirty = sectionHeaderHasChanged(this._getSectionHeaderData(prevDataBlob, sectionID), this._getSectionHeaderData(this._dataBlob, sectionID));
						}
						this._dirtySections.push(!!dirty);

						this._dirtyRows[sIndex] = [];
						for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
							var rowID = this.rowIdentities[sIndex][rIndex];

							dirty = !prevSectionsHash[sectionID] || !prevRowsHash[sectionID][rowID] || this._rowHasChanged(this._getRowData(prevDataBlob, sectionID, rowID), this._getRowData(this._dataBlob, sectionID, rowID));

							this._dirtyRows[sIndex].push(!!dirty);
						}
					}
				} }]);return ListViewDataSource;
		}();

		function countRows(allRowIDs) {
			var totalRows = 0;
			for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
				var rowIDs = allRowIDs[sectionIdx];
				totalRows += rowIDs.length;
			}
			return totalRows;
		}

		function keyedDictionaryFromArray(arr) {
			if (isEmpty(arr)) {
				return {};
			}
			var result = {};
			for (var ii = 0; ii < arr.length; ii++) {
				var key = arr[ii];
				warning(!result[key], 'Value appears more than once in array: ' + key);
				result[key] = true;
			}
			return result;
		}

		module.exports = ListViewDataSource;
	},
	// Libraries/vendor/core/isEmpty.js
	function (__inner_require__, exports, module) {
		function isEmpty(obj) {
			if (Array.isArray(obj)) {
				return obj.length === 0;
			} else if (typeof obj === 'object') {
				for (var i in obj) {
					return false;
				}
				return true;
			} else {
				return !obj;
			}
		}

		module.exports = isEmpty;
	},
	// Libraries/Components/ScrollView/ScrollView.js
	function (__inner_require__, exports, module) {
		var EdgeInsetsPropType = __inner_require__(94 /*Libraries/StyleSheet/EdgeInsetsPropType.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var PointPropType = __inner_require__(101 /*Libraries/StyleSheet/PointPropType.js*/);
		var RCTScrollView = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').UIManager.RCTScrollView;
		var RCTScrollViewManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ScrollViewManager;
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactNativeViewAttributes = __inner_require__(61 /*Libraries/Components/View/ReactNativeViewAttributes.js*/);
		var ScrollResponder = __inner_require__(102 /*Libraries/Components/ScrollResponder.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var StyleSheetPropType = __inner_require__(62 /*Libraries/StyleSheet/StyleSheetPropType.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var deepDiffer = __inner_require__(4 /*Libraries/Utilities/differ/deepDiffer.js*/);
		var deprecatedPropType = __inner_require__(54 /*Libraries/Utilities/deprecatedPropType.js*/);
		var dismissKeyboard = __inner_require__(104 /*Libraries/Utilities/dismissKeyboard.js*/);
		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');
		var insetsDiffer = __inner_require__(77 /*Libraries/Utilities/differ/insetsDiffer.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var pointsDiffer = __inner_require__(78 /*Libraries/Utilities/differ/pointsDiffer.js*/);
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);
		var processDecelerationRate = __inner_require__(105 /*Libraries/Components/ScrollView/processDecelerationRate.js*/);
		var PropTypes = React.PropTypes;

		var SCROLLVIEW = 'ScrollView';
		var INNERVIEW = 'InnerScrollView';

		var ScrollView = React.createClass({ displayName: 'ScrollView',
			propTypes: babelHelpers.extends({}, View.propTypes, {

				automaticallyAdjustContentInsets: PropTypes.bool,

				contentInset: EdgeInsetsPropType,

				contentOffset: PointPropType,

				bounces: PropTypes.bool,

				bouncesZoom: PropTypes.bool,

				alwaysBounceHorizontal: PropTypes.bool,

				alwaysBounceVertical: PropTypes.bool,

				centerContent: PropTypes.bool,

				contentContainerStyle: StyleSheetPropType(ViewStylePropTypes),

				decelerationRate: PropTypes.oneOfType([PropTypes.oneOf(['fast', 'normal']), PropTypes.number]),

				horizontal: PropTypes.bool,

				indicatorStyle: PropTypes.oneOf(['default', 'black', 'white']),

				directionalLockEnabled: PropTypes.bool,

				canCancelContentTouches: PropTypes.bool,

				keyboardDismissMode: PropTypes.oneOf(['none', 'interactive', 'on-drag']),

				keyboardShouldPersistTaps: PropTypes.bool,

				maximumZoomScale: PropTypes.number,

				minimumZoomScale: PropTypes.number,

				onScroll: PropTypes.func,

				onScrollAnimationEnd: PropTypes.func,

				onContentSizeChange: PropTypes.func,

				pagingEnabled: PropTypes.bool,

				scrollEnabled: PropTypes.bool,

				scrollEventThrottle: PropTypes.number,

				scrollIndicatorInsets: EdgeInsetsPropType,

				scrollsToTop: PropTypes.bool,

				sendMomentumEvents: PropTypes.bool,

				showsHorizontalScrollIndicator: PropTypes.bool,

				showsVerticalScrollIndicator: PropTypes.bool,

				stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),
				style: StyleSheetPropType(ViewStylePropTypes),

				snapToInterval: PropTypes.number,

				snapToAlignment: PropTypes.oneOf(['start', 'center', 'end']),

				removeClippedSubviews: PropTypes.bool,

				zoomScale: PropTypes.number,

				refreshControl: PropTypes.element,

				onRefreshStart: deprecatedPropType(PropTypes.func, 'Use the `refreshControl` prop instead.') }),

			mixins: [ScrollResponder.Mixin],

			getInitialState: function getInitialState() {
				return this.scrollResponderMixinGetInitialState();
			},

			setNativeProps: function setNativeProps(props) {
				this.refs[SCROLLVIEW].setNativeProps(props);
			},

			endRefreshing: function endRefreshing() {
				RCTScrollViewManager.endRefreshing(React.findNodeHandle(this));
			},

			getScrollResponder: function getScrollResponder() {
				return this;
			},

			getScrollableNode: function getScrollableNode() {
				return React.findNodeHandle(this.refs[SCROLLVIEW]);
			},

			getInnerViewNode: function getInnerViewNode() {
				return React.findNodeHandle(this.refs[INNERVIEW]);
			},

			scrollTo: function scrollTo(y, x, animated) {
				if (typeof y === 'number') {
					console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
				} else {
					var _ref = y || {};x = _ref.x;y = _ref.y;animated = _ref.animated;
				}

				this.getScrollResponder().scrollResponderScrollTo({ x: x || 0, y: y || 0, animated: animated !== false });
			},

			scrollWithoutAnimationTo: function scrollWithoutAnimationTo() {
				var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead');
				this.scrollTo({ x: x, y: y, animated: false });
			},

			handleScroll: function handleScroll(e) {
				if (__DEV__) {
					if (this.props.onScroll && !this.props.scrollEventThrottle) {
						console.log('You specified `onScroll` on a <ScrollView> but not ' + '`scrollEventThrottle`. You will only receive one event. ' + 'Using `16` you get all the events but be aware that it may ' + 'cause frame drops, use a bigger number if you don\'t need as ' + 'much precision.');
					}
				}
				if (Platform.OS === 'android') {
					if (this.props.keyboardDismissMode === 'on-drag') {
						dismissKeyboard();
					}
				}
				this.scrollResponderHandleScroll(e);
			},

			_handleContentOnLayout: function _handleContentOnLayout(e) {
				var _e$nativeEvent$layout = e.nativeEvent.layout,
				    width = _e$nativeEvent$layout.width,
				    height = _e$nativeEvent$layout.height;
				this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
			},

			render: function render() {
				var contentContainerStyle = [this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle];

				if (__DEV__ && this.props.style) {
					var style = flattenStyle(this.props.style);
					var childLayoutProps = ['alignItems', 'justifyContent'].filter(function (prop) {
						return style && style[prop] !== undefined;
					});
					invariant(childLayoutProps.length === 0, 'ScrollView child layout (' + JSON.stringify(childLayoutProps) + ') must by applied through the contentContainerStyle prop.');
				}

				var contentSizeChangeProps = {};
				if (this.props.onContentSizeChange) {
					contentSizeChangeProps = {
						onLayout: this._handleContentOnLayout };
				}

				var contentContainer = React.createElement(View, babelHelpers.extends({}, contentSizeChangeProps, {
					ref: INNERVIEW,
					style: contentContainerStyle,
					removeClippedSubviews: this.props.removeClippedSubviews,
					collapsable: false }), this.props.children);

				var alwaysBounceHorizontal = this.props.alwaysBounceHorizontal !== undefined ? this.props.alwaysBounceHorizontal : this.props.horizontal;

				var alwaysBounceVertical = this.props.alwaysBounceVertical !== undefined ? this.props.alwaysBounceVertical : !this.props.horizontal;

				var props = babelHelpers.extends({}, this.props, {
					alwaysBounceHorizontal: alwaysBounceHorizontal,
					alwaysBounceVertical: alwaysBounceVertical,
					style: [styles.base, this.props.style],
					onTouchStart: this.scrollResponderHandleTouchStart,
					onTouchMove: this.scrollResponderHandleTouchMove,
					onTouchEnd: this.scrollResponderHandleTouchEnd,
					onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
					onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
					onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
					onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
					onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
					onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
					onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
					onScroll: this.handleScroll,
					onResponderGrant: this.scrollResponderHandleResponderGrant,
					onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
					onResponderTerminate: this.scrollResponderHandleTerminate,
					onResponderRelease: this.scrollResponderHandleResponderRelease,
					onResponderReject: this.scrollResponderHandleResponderReject,
					sendMomentumEvents: this.props.onMomentumScrollBegin || this.props.onMomentumScrollEnd ? true : false });

				var onRefreshStart = this.props.onRefreshStart;
				if (onRefreshStart) {

					props.onRefreshStart = function () {
						onRefreshStart && onRefreshStart(this.endRefreshing);
					}.bind(this);
				}var decelerationRate = this.props.decelerationRate;
				if (decelerationRate) {
					props.decelerationRate = processDecelerationRate(decelerationRate);
				}

				var ScrollViewClass;
				if (Platform.OS === 'ios') {
					ScrollViewClass = RCTScrollView;
				} else if (Platform.OS === 'android') {
					if (this.props.horizontal) {
						ScrollViewClass = AndroidHorizontalScrollView;
					} else {
						ScrollViewClass = AndroidScrollView;
					}
				}
				invariant(ScrollViewClass !== undefined, 'ScrollViewClass must not be undefined');

				var refreshControl = this.props.refreshControl;
				if (refreshControl) {
					if (Platform.OS === 'ios') {

						return React.createElement(ScrollViewClass, babelHelpers.extends({}, props, { ref: SCROLLVIEW }), refreshControl, contentContainer);
					} else if (Platform.OS === 'android') {

						return React.cloneElement(refreshControl, { style: props.style }, React.createElement(ScrollViewClass, babelHelpers.extends({}, props, { style: styles.base, ref: SCROLLVIEW }), contentContainer));
					}
				}
				return React.createElement(ScrollViewClass, babelHelpers.extends({}, props, { ref: SCROLLVIEW }), contentContainer);
			} });

		var styles = StyleSheet.create({
			base: {
				flex: 1 },

			contentContainerHorizontal: {
				alignSelf: 'flex-start',
				flexDirection: 'row' } });

		var validAttributes = babelHelpers.extends({}, ReactNativeViewAttributes.UIView, {
			alwaysBounceHorizontal: true,
			alwaysBounceVertical: true,
			automaticallyAdjustContentInsets: true,
			bounces: true,
			centerContent: true,
			contentInset: { diff: insetsDiffer },
			contentOffset: { diff: pointsDiffer },
			decelerationRate: true,
			horizontal: true,
			indicatorStyle: true,
			keyboardDismissMode: true,
			keyboardShouldPersistTaps: true,
			maximumZoomScale: true,
			minimumZoomScale: true,
			pagingEnabled: true,
			removeClippedSubviews: true,
			scrollEnabled: true,
			scrollIndicatorInsets: { diff: insetsDiffer },
			scrollsToTop: true,
			showsHorizontalScrollIndicator: true,
			showsVerticalScrollIndicator: true,
			snapToInterval: true,
			snapToAlignment: true,
			stickyHeaderIndices: { diff: deepDiffer },
			scrollEventThrottle: true,
			zoomScale: true });

		if (Platform.OS === 'android') {
			var AndroidScrollView = requireNativeComponent('RCTScrollView', ScrollView);
			var AndroidHorizontalScrollView = requireNativeComponent('AndroidHorizontalScrollView', ScrollView);
		} else if (Platform.OS === 'ios') {
			var RCTScrollView = requireNativeComponent('RCTScrollView', ScrollView);
		}

		module.exports = ScrollView;
	},
	// Libraries/StyleSheet/PointPropType.js
	function (__inner_require__, exports, module) {
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);

		var createStrictShapeTypeChecker = __inner_require__(63 /*Libraries/Utilities/createStrictShapeTypeChecker.js*/);

		var PointPropType = createStrictShapeTypeChecker({
			x: PropTypes.number,
			y: PropTypes.number });

		module.exports = PointPropType;
	},
	// Libraries/Components/ScrollResponder.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var Subscribable = __inner_require__(103 /*Libraries/Components/Subscribable.js*/);
		var TextInputState = __inner_require__(6 /*Libraries/Components/TextInput/TextInputState.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');var _require = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    ScrollViewManager = _require.ScrollViewManager;

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;

		var ScrollResponderMixin = {
			mixins: [Subscribable.Mixin],
			scrollResponderMixinGetInitialState: function scrollResponderMixinGetInitialState() {
				return {
					isTouching: false,
					lastMomentumScrollBeginTime: 0,
					lastMomentumScrollEndTime: 0,

					observedScrollSinceBecomingResponder: false,
					becameResponderWhileAnimating: false };
			},

			scrollResponderHandleScrollShouldSetResponder: function scrollResponderHandleScrollShouldSetResponder() {
				return this.state.isTouching;
			},

			scrollResponderHandleStartShouldSetResponder: function scrollResponderHandleStartShouldSetResponder() {
				return false;
			},

			scrollResponderHandleStartShouldSetResponderCapture: function scrollResponderHandleStartShouldSetResponderCapture(e) {

				var currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
				if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput) {
					return true;
				}
				return this.scrollResponderIsAnimating();
			},

			scrollResponderHandleResponderReject: function scrollResponderHandleResponderReject() {
				warning(false, "ScrollView doesn't take rejection well - scrolls anyway");
			},

			scrollResponderHandleTerminationRequest: function scrollResponderHandleTerminationRequest() {
				return !this.state.observedScrollSinceBecomingResponder;
			},

			scrollResponderHandleTouchEnd: function scrollResponderHandleTouchEnd(e) {
				var nativeEvent = e.nativeEvent;
				this.state.isTouching = nativeEvent.touches.length !== 0;
				this.props.onTouchEnd && this.props.onTouchEnd(e);
			},

			scrollResponderHandleResponderRelease: function scrollResponderHandleResponderRelease(e) {
				this.props.onResponderRelease && this.props.onResponderRelease(e);

				var currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
				if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.state.observedScrollSinceBecomingResponder && !this.state.becameResponderWhileAnimating) {
					this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
					TextInputState.blurTextInput(currentlyFocusedTextInput);
				}
			},

			scrollResponderHandleScroll: function scrollResponderHandleScroll(e) {
				this.state.observedScrollSinceBecomingResponder = true;
				this.props.onScroll && this.props.onScroll(e);
			},

			scrollResponderHandleResponderGrant: function scrollResponderHandleResponderGrant(e) {
				this.state.observedScrollSinceBecomingResponder = false;
				this.props.onResponderGrant && this.props.onResponderGrant(e);
				this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
			},

			scrollResponderHandleScrollBeginDrag: function scrollResponderHandleScrollBeginDrag(e) {
				this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
			},

			scrollResponderHandleScrollEndDrag: function scrollResponderHandleScrollEndDrag(e) {
				this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
			},

			scrollResponderHandleMomentumScrollBegin: function scrollResponderHandleMomentumScrollBegin(e) {
				this.state.lastMomentumScrollBeginTime = Date.now();
				this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
			},

			scrollResponderHandleMomentumScrollEnd: function scrollResponderHandleMomentumScrollEnd(e) {
				this.state.lastMomentumScrollEndTime = Date.now();
				this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
			},

			scrollResponderHandleTouchStart: function scrollResponderHandleTouchStart(e) {
				this.state.isTouching = true;
				this.props.onTouchStart && this.props.onTouchStart(e);
			},

			scrollResponderHandleTouchMove: function scrollResponderHandleTouchMove(e) {
				this.props.onTouchMove && this.props.onTouchMove(e);
			},

			scrollResponderIsAnimating: function scrollResponderIsAnimating() {
				var now = Date.now();
				var timeSinceLastMomentumScrollEnd = now - this.state.lastMomentumScrollEndTime;
				var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
				return isAnimating;
			},

			scrollResponderGetScrollableNode: function scrollResponderGetScrollableNode() {
				return this.getScrollableNode ? this.getScrollableNode() : React.findNodeHandle(this);
			},

			scrollResponderScrollTo: function scrollResponderScrollTo(x, y, animated) {
				if (typeof x === 'number') {
					console.warn('`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.');
				} else {
					var _ref = x || {};x = _ref.x;y = _ref.y;animated = _ref.animated;
				}
				UIManager.dispatchViewManagerCommand(this.scrollResponderGetScrollableNode(), UIManager.RCTScrollView.Commands.scrollTo, [x || 0, y || 0, animated !== false]);
			},

			scrollResponderScrollWithoutAnimationTo: function scrollResponderScrollWithoutAnimationTo(offsetX, offsetY) {
				console.warn('`scrollResponderScrollWithoutAnimationTo` is deprecated. Use `scrollResponderScrollTo` instead');
				this.scrollResponderScrollTo(offsetX, offsetY, false);
			},

			scrollResponderZoomTo: function scrollResponderZoomTo(rect, animated) {
				if (Platform.OS === 'android') {
					invariant('zoomToRect is not implemented');
				} else {
					if ('animated' in rect) {
						var animated = rect.animated,
						    rect = babelHelpers.objectWithoutProperties(rect, ['animated']);
					} else if (typeof animated !== 'undefined') {
						console.warn('`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead');
					}
					ScrollViewManager.zoomToRect(this.scrollResponderGetScrollableNode(), rect, animated !== false);
				}
			},

			scrollResponderScrollNativeHandleToKeyboard: function scrollResponderScrollNativeHandleToKeyboard(nodeHandle, additionalOffset, preventNegativeScrollOffset) {
				this.additionalScrollOffset = additionalOffset || 0;
				this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
				UIManager.measureLayout(nodeHandle, React.findNodeHandle(this.getInnerViewNode()), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
			},

			scrollResponderInputMeasureAndScrollToKeyboard: function scrollResponderInputMeasureAndScrollToKeyboard(left, top, width, height) {
				var keyboardScreenY = Dimensions.get('window').height;
				if (this.keyboardWillOpenTo) {
					keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
				}
				var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;

				if (this.preventNegativeScrollOffset) {
					scrollOffsetY = Math.max(0, scrollOffsetY);
				}
				this.scrollResponderScrollTo({ x: 0, y: scrollOffsetY, animated: true });

				this.additionalOffset = 0;
				this.preventNegativeScrollOffset = false;
			},

			scrollResponderTextInputFocusError: function scrollResponderTextInputFocusError(e) {
				console.error('Error measuring text field: ', e);
			},

			componentWillMount: function componentWillMount() {
				this.keyboardWillOpenTo = null;
				this.additionalScrollOffset = 0;
				this.addListenerOn(RCTDeviceEventEmitter, 'keyboardWillShow', this.scrollResponderKeyboardWillShow);
				this.addListenerOn(RCTDeviceEventEmitter, 'keyboardWillHide', this.scrollResponderKeyboardWillHide);
				this.addListenerOn(RCTDeviceEventEmitter, 'keyboardDidShow', this.scrollResponderKeyboardDidShow);
				this.addListenerOn(RCTDeviceEventEmitter, 'keyboardDidHide', this.scrollResponderKeyboardDidHide);
			},

			scrollResponderKeyboardWillShow: function scrollResponderKeyboardWillShow(e) {
				this.keyboardWillOpenTo = e;
				this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
			},

			scrollResponderKeyboardWillHide: function scrollResponderKeyboardWillHide(e) {
				this.keyboardWillOpenTo = null;
				this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
			},

			scrollResponderKeyboardDidShow: function scrollResponderKeyboardDidShow(e) {

				if (e) {
					this.keyboardWillOpenTo = e;
				}
				this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
			},

			scrollResponderKeyboardDidHide: function scrollResponderKeyboardDidHide(e) {
				this.keyboardWillOpenTo = null;
				this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
			} };

		var ScrollResponder = {
			Mixin: ScrollResponderMixin };

		module.exports = ScrollResponder;
	},
	// Libraries/Components/Subscribable.js
	function (__inner_require__, exports, module) {
		var Subscribable = {};

		Subscribable.Mixin = {

			componentWillMount: function componentWillMount() {
				this._subscribableSubscriptions = [];
			},

			componentWillUnmount: function componentWillUnmount() {
				this._subscribableSubscriptions.forEach(function (subscription) {
					return subscription.remove();
				});

				this._subscribableSubscriptions = null;
			},

			addListenerOn: function addListenerOn(eventEmitter, eventType, listener, context) {
				this._subscribableSubscriptions.push(eventEmitter.addListener(eventType, listener, context));
			} };

		module.exports = Subscribable;
	},
	// Libraries/Utilities/dismissKeyboard.js
	function (__inner_require__, exports, module) {
		var TextInputState = __inner_require__(6 /*Libraries/Components/TextInput/TextInputState.js*/);

		function dismissKeyboard() {
			TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
		}

		module.exports = dismissKeyboard;
	},
	// Libraries/Components/ScrollView/processDecelerationRate.js
	function (__inner_require__, exports, module) {
		var ScrollViewConsts = require('react-native@0.21/Libraries/Utilities/UIManager.js').RCTScrollView.Constants;

		function processDecelerationRate(decelerationRate) {
			var ScrollViewDecelerationRateNormal = ScrollViewConsts && ScrollViewConsts.DecelerationRate.normal;
			var ScrollViewDecelerationRateFast = ScrollViewConsts && ScrollViewConsts.DecelerationRate.fast;

			if (typeof decelerationRate === 'string') {
				if (decelerationRate === 'fast') {
					return ScrollViewDecelerationRateFast;
				} else if (decelerationRate === 'normal') {
					return ScrollViewDecelerationRateNormal;
				}
			}
			return decelerationRate;
		}

		module.exports = processDecelerationRate;
	},
	// Libraries/Components/StaticRenderer.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);

		var StaticRenderer = React.createClass({ displayName: 'StaticRenderer',
			propTypes: {
				shouldUpdate: React.PropTypes.bool.isRequired,
				render: React.PropTypes.func.isRequired },

			shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
				return nextProps.shouldUpdate;
			},

			render: function render() {
				return this.props.render();
			} });

		module.exports = StaticRenderer;
	},
	// Libraries/Components/MapView/MapView.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var EdgeInsetsPropType = __inner_require__(94 /*Libraries/StyleSheet/EdgeInsetsPropType.js*/);
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var RCTMapConfig = require('react-native@0.21/Libraries/Utilities/UIManager.js').RCTMap;
		var RCTMapConstants = RCTMapConfig && RCTMapConfig.Constants;
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var deprecatedPropType = __inner_require__(54 /*Libraries/Utilities/deprecatedPropType.js*/);
		var processColor = require('react-native@0.21/Libraries/StyleSheet/processColor.js');
		var resolveAssetSource = __inner_require__(79 /*Libraries/Image/resolveAssetSource.js*/);
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var MapView = React.createClass({ displayName: 'MapView',

			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				style: View.propTypes.style,

				showsUserLocation: React.PropTypes.bool,

				followUserLocation: React.PropTypes.bool,

				showsPointsOfInterest: React.PropTypes.bool,

				showsCompass: React.PropTypes.bool,

				zoomEnabled: React.PropTypes.bool,

				rotateEnabled: React.PropTypes.bool,

				pitchEnabled: React.PropTypes.bool,

				scrollEnabled: React.PropTypes.bool,

				mapType: React.PropTypes.oneOf(['standard', 'satellite', 'hybrid']),

				region: React.PropTypes.shape({

					latitude: React.PropTypes.number.isRequired,
					longitude: React.PropTypes.number.isRequired,

					latitudeDelta: React.PropTypes.number,
					longitudeDelta: React.PropTypes.number }),

				annotations: React.PropTypes.arrayOf(React.PropTypes.shape({

					latitude: React.PropTypes.number.isRequired,
					longitude: React.PropTypes.number.isRequired,

					animateDrop: React.PropTypes.bool,

					draggable: React.PropTypes.bool,

					onDragStateChange: React.PropTypes.func,

					onFocus: React.PropTypes.func,

					onBlur: React.PropTypes.func,

					title: React.PropTypes.string,
					subtitle: React.PropTypes.string,

					leftCalloutView: React.PropTypes.element,
					rightCalloutView: React.PropTypes.element,
					detailCalloutView: React.PropTypes.element,

					tintColor: ColorPropType,

					image: Image.propTypes.source,

					view: React.PropTypes.element,

					id: React.PropTypes.string,

					hasLeftCallout: deprecatedPropType(React.PropTypes.bool, 'Use `leftCalloutView` instead.'),

					hasRightCallout: deprecatedPropType(React.PropTypes.bool, 'Use `rightCalloutView` instead.'),

					onLeftCalloutPress: deprecatedPropType(React.PropTypes.func, 'Use `leftCalloutView` instead.'),

					onRightCalloutPress: deprecatedPropType(React.PropTypes.func, 'Use `rightCalloutView` instead.') })),

				overlays: React.PropTypes.arrayOf(React.PropTypes.shape({

					coordinates: React.PropTypes.arrayOf(React.PropTypes.shape({
						latitude: React.PropTypes.number.isRequired,
						longitude: React.PropTypes.number.isRequired })),

					lineWidth: React.PropTypes.number,
					strokeColor: ColorPropType,
					fillColor: ColorPropType,

					id: React.PropTypes.string })),

				maxDelta: React.PropTypes.number,

				minDelta: React.PropTypes.number,

				legalLabelInsets: EdgeInsetsPropType,

				onRegionChange: React.PropTypes.func,

				onRegionChangeComplete: React.PropTypes.func,

				onAnnotationPress: React.PropTypes.func,

				active: React.PropTypes.bool }),

			render: function render() {
				var _this = this;
				var children = [],
				    _props = this.props,
				    annotations = _props.annotations,
				    overlays = _props.overlays,
				    followUserLocation = _props.followUserLocation;
				annotations = annotations && annotations.map(function (annotation) {
					var id = annotation.id,
					    image = annotation.image,
					    tintColor = annotation.tintColor,
					    view = annotation.view,
					    leftCalloutView = annotation.leftCalloutView,
					    rightCalloutView = annotation.rightCalloutView,
					    detailCalloutView = annotation.detailCalloutView;

					if (!view && image && tintColor) {
						view = React.createElement(Image, {
							style: {
								tintColor: processColor(tintColor) },

							source: image });

						image = undefined;
					}
					if (view) {
						if (image) {
							console.warn('`image` and `view` both set on annotation. Image will be ignored.');
						}
						var viewIndex = children.length;
						children.push(React.cloneElement(view, {
							style: [styles.annotationView, view.props.style || {}] }));
					}
					if (leftCalloutView) {
						var leftCalloutViewIndex = children.length;
						children.push(React.cloneElement(leftCalloutView, {
							style: [styles.calloutView, leftCalloutView.props.style || {}] }));
					}
					if (rightCalloutView) {
						var rightCalloutViewIndex = children.length;
						children.push(React.cloneElement(rightCalloutView, {
							style: [styles.calloutView, rightCalloutView.props.style || {}] }));
					}
					if (detailCalloutView) {
						var detailCalloutViewIndex = children.length;
						children.push(React.cloneElement(detailCalloutView, {
							style: [styles.calloutView, detailCalloutView.props.style || {}] }));
					}

					var result = babelHelpers.extends({}, annotation, {
						tintColor: tintColor && processColor(tintColor),
						image: image,
						viewIndex: viewIndex,
						leftCalloutViewIndex: leftCalloutViewIndex,
						rightCalloutViewIndex: rightCalloutViewIndex,
						detailCalloutViewIndex: detailCalloutViewIndex,
						view: undefined,
						leftCalloutView: undefined,
						rightCalloutView: undefined,
						detailCalloutView: undefined });

					result.id = id || encodeURIComponent(JSON.stringify(result));
					result.image = image && resolveAssetSource(image);
					return result;
				});
				overlays = overlays && overlays.map(function (overlay) {
					var id = overlay.id,
					    fillColor = overlay.fillColor,
					    strokeColor = overlay.strokeColor;
					var result = babelHelpers.extends({}, overlay, {
						strokeColor: strokeColor && processColor(strokeColor),
						fillColor: fillColor && processColor(fillColor) });

					result.id = id || encodeURIComponent(JSON.stringify(result));
					return result;
				});

				var findByAnnotationId = function findByAnnotationId(annotationId) {
					if (!annotations) {
						return null;
					}
					for (var i = 0, l = annotations.length; i < l; i++) {
						if (annotations[i].id === annotationId) {
							return annotations[i];
						}
					}
					return null;
				};

				var onPress = void 0,
				    onAnnotationDragStateChange = void 0,
				    onAnnotationFocus = void 0,
				    onAnnotationBlur = void 0;
				if (annotations) {
					onPress = function onPress(event) {
						if (event.nativeEvent.action === 'annotation-click') {

							_this.props.onAnnotationPress && _this.props.onAnnotationPress(event.nativeEvent.annotation);
						} else if (event.nativeEvent.action === 'callout-click') {
							var annotation = findByAnnotationId(event.nativeEvent.annotationId);
							if (annotation) {

								if (event.nativeEvent.side === 'left' && annotation.onLeftCalloutPress) {
									annotation.onLeftCalloutPress(event.nativeEvent);
								} else if (event.nativeEvent.side === 'right' && annotation.onRightCalloutPress) {
									annotation.onRightCalloutPress(event.nativeEvent);
								}
							}
						}
					};
					onAnnotationDragStateChange = function onAnnotationDragStateChange(event) {
						var annotation = findByAnnotationId(event.nativeEvent.annotationId);
						if (annotation) {

							annotation.latitude = event.nativeEvent.latitude;
							annotation.longitude = event.nativeEvent.longitude;

							annotation.onDragStateChange && annotation.onDragStateChange(event.nativeEvent);
						}
					};
					onAnnotationFocus = function onAnnotationFocus(event) {
						var annotation = findByAnnotationId(event.nativeEvent.annotationId);
						if (annotation && annotation.onFocus) {
							annotation.onFocus(event.nativeEvent);
						}
					};
					onAnnotationBlur = function onAnnotationBlur(event) {
						var annotation = findByAnnotationId(event.nativeEvent.annotationId);
						if (annotation && annotation.onBlur) {
							annotation.onBlur(event.nativeEvent);
						}
					};
				}

				if (this.props.onRegionChange || this.props.onRegionChangeComplete) {
					var onChange = function onChange(event) {
						if (event.nativeEvent.continuous) {
							_this.props.onRegionChange && _this.props.onRegionChange(event.nativeEvent.region);
						} else {
							_this.props.onRegionChangeComplete && _this.props.onRegionChangeComplete(event.nativeEvent.region);
						}
					};
				}

				if (followUserLocation === undefined) {
					followUserLocation = this.props.showUserLocation;
				}

				return React.createElement(RCTMap, babelHelpers.extends({}, this.props, {
					annotations: annotations,
					children: children,
					followUserLocation: followUserLocation,
					overlays: overlays,
					onPress: onPress,
					onChange: onChange,
					onAnnotationDragStateChange: onAnnotationDragStateChange,
					onAnnotationFocus: onAnnotationFocus,
					onAnnotationBlur: onAnnotationBlur }));
			} });

		var styles = StyleSheet.create({
			annotationView: {
				position: 'absolute',
				backgroundColor: 'transparent' },

			calloutView: {
				position: 'absolute',
				backgroundColor: 'white' } });

		var PinColors = RCTMapConstants && RCTMapConstants.PinColors;
		MapView.PinColors = PinColors && {
			RED: PinColors.RED,
			GREEN: PinColors.GREEN,
			PURPLE: PinColors.PURPLE };

		var RCTMap = requireNativeComponent('RCTMap', MapView, {
			nativeOnly: {
				onAnnotationDragStateChange: true,
				onAnnotationFocus: true,
				onAnnotationBlur: true,
				onChange: true,
				onPress: true } });

		module.exports = MapView;
	},
	// Libraries/Modal/Modal.js
	function (__inner_require__, exports, module) {
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);
		var RCTModalHostView = requireNativeComponent('RCTModalHostView', null);var Modal = function (_React$Component) {
			babelHelpers.inherits(Modal, _React$Component);function Modal() {
				babelHelpers.classCallCheck(this, Modal);return babelHelpers.possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
			}babelHelpers.createClass(Modal, [{ key: 'render', value: function render() {
					if (this.props.visible === false) {
						return null;
					}

					if (this.props.transparent) {
						var containerBackgroundColor = { backgroundColor: 'transparent' };
					}

					return React.createElement(RCTModalHostView, {
						animated: this.props.animated,
						transparent: this.props.transparent,
						onDismiss: this.props.onDismiss,
						style: styles.modal }, React.createElement(View, { style: [styles.container, containerBackgroundColor] }, this.props.children));
				} }]);return Modal;
		}(React.Component);

		Modal.propTypes = {
			animated: PropTypes.bool,
			transparent: PropTypes.bool,
			visible: PropTypes.bool,
			onDismiss: PropTypes.func };

		Modal.defaultProps = {
			visible: true };

		var styles = StyleSheet.create({
			modal: {
				position: 'absolute' },

			container: {
				left: 0,
				position: 'absolute',
				top: 0 } });

		module.exports = Modal;
	},
	// Libraries/CustomComponents/Navigator/Navigator.js
	function (__inner_require__, exports, module) {
		var AnimationsDebugModule = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').AnimationsDebugModule;
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
		var InteractionMixin = __inner_require__(110 /*Libraries/Interaction/InteractionMixin.js*/);
		var NavigationContext = __inner_require__(111 /*Libraries/CustomComponents/Navigator/Navigation/NavigationContext.js*/);
		var NavigatorBreadcrumbNavigationBar = __inner_require__(115 /*Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBar.js*/);
		var NavigatorNavigationBar = __inner_require__(120 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBar.js*/);
		var NavigatorSceneConfigs = __inner_require__(121 /*Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js*/);
		var PanResponder = __inner_require__(122 /*Libraries/vendor/react/browser/eventPlugins/PanResponder.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Subscribable = __inner_require__(103 /*Libraries/Components/Subscribable.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var clamp = __inner_require__(124 /*Libraries/vendor/react/core/clamp.js*/);
		var deprecatedPropType = __inner_require__(54 /*Libraries/Utilities/deprecatedPropType.js*/);
		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var rebound = require('rebound@0.0.13/rebound.js');

		var PropTypes = React.PropTypes;

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var SCREEN_HEIGHT = Dimensions.get('window').height;
		var SCENE_DISABLED_NATIVE_PROPS = {
			pointerEvents: 'none',
			style: {
				top: SCREEN_HEIGHT,
				bottom: -SCREEN_HEIGHT,
				opacity: 0 } };

		var __uid = 0;
		function getuid() {
			return __uid++;
		}

		function getRouteID(route) {
			if (route === null || typeof route !== 'object') {
				return String(route);
			}

			var key = '__navigatorRouteID';

			if (!route.hasOwnProperty(key)) {
				Object.defineProperty(route, key, {
					enumerable: false,
					configurable: false,
					writable: false,
					value: getuid() });
			}
			return route[key];
		}

		var styles = StyleSheet.create({
			container: {
				flex: 1,
				overflow: 'hidden' },

			defaultSceneStyle: {
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
				top: 0 },

			baseScene: {
				position: 'absolute',
				overflow: 'hidden',
				left: 0,
				right: 0,
				bottom: 0,
				top: 0 },

			disabledScene: {
				top: SCREEN_HEIGHT,
				bottom: -SCREEN_HEIGHT },

			transitioner: {
				flex: 1,
				backgroundColor: 'transparent',
				overflow: 'hidden' } });

		var GESTURE_ACTIONS = ['pop', 'jumpBack', 'jumpForward'];

		var Navigator = React.createClass({ displayName: 'Navigator',

			propTypes: {

				configureScene: PropTypes.func,

				renderScene: PropTypes.func.isRequired,

				initialRoute: PropTypes.object,

				initialRouteStack: PropTypes.arrayOf(PropTypes.object),

				onWillFocus: PropTypes.func,

				onDidFocus: PropTypes.func,

				navigationBar: PropTypes.node,

				navigator: PropTypes.object,

				sceneStyle: View.propTypes.style },

			statics: {
				BreadcrumbNavigationBar: NavigatorBreadcrumbNavigationBar,
				NavigationBar: NavigatorNavigationBar,
				SceneConfigs: NavigatorSceneConfigs },

			mixins: [TimerMixin, InteractionMixin, Subscribable.Mixin],

			getDefaultProps: function getDefaultProps() {
				return {
					configureScene: function configureScene() {
						return NavigatorSceneConfigs.PushFromRight;
					},
					sceneStyle: styles.defaultSceneStyle };
			},

			getInitialState: function getInitialState() {
				var _this = this;
				this._navigationBarNavigator = this.props.navigationBarNavigator || this;

				this._renderedSceneMap = new Map();

				var routeStack = this.props.initialRouteStack || [this.props.initialRoute];
				invariant(routeStack.length >= 1, 'Navigator requires props.initialRoute or props.initialRouteStack.');

				var initialRouteIndex = routeStack.length - 1;
				if (this.props.initialRoute) {
					initialRouteIndex = routeStack.indexOf(this.props.initialRoute);
					invariant(initialRouteIndex !== -1, 'initialRoute is not in initialRouteStack.');
				}
				return {
					sceneConfigStack: routeStack.map(function (route) {
						return _this.props.configureScene(route, routeStack);
					}),

					routeStack: routeStack,
					presentedIndex: initialRouteIndex,
					transitionFromIndex: null,
					activeGesture: null,
					pendingGestureProgress: null,
					transitionQueue: [] };
			},

			componentWillMount: function componentWillMount() {
				var _this2 = this;

				this.__defineGetter__('navigationContext', this._getNavigationContext);

				this._subRouteFocus = [];
				this.parentNavigator = this.props.navigator;
				this._handlers = {};
				this.springSystem = new rebound.SpringSystem();
				this.spring = this.springSystem.createSpring();
				this.spring.setRestSpeedThreshold(0.05);
				this.spring.setCurrentValue(0).setAtRest();
				this.spring.addListener({
					onSpringEndStateChange: function onSpringEndStateChange() {
						if (!_this2._interactionHandle) {
							_this2._interactionHandle = _this2.createInteractionHandle();
						}
					},
					onSpringUpdate: function onSpringUpdate() {
						_this2._handleSpringUpdate();
					},
					onSpringAtRest: function onSpringAtRest() {
						_this2._completeTransition();
					} });

				this.panGesture = PanResponder.create({
					onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
					onPanResponderRelease: this._handlePanResponderRelease,
					onPanResponderMove: this._handlePanResponderMove,
					onPanResponderTerminate: this._handlePanResponderTerminate });

				this._interactionHandle = null;
				this._emitWillFocus(this.state.routeStack[this.state.presentedIndex]);
			},

			componentDidMount: function componentDidMount() {
				this._handleSpringUpdate();
				this._emitDidFocus(this.state.routeStack[this.state.presentedIndex]);
			},

			componentWillUnmount: function componentWillUnmount() {
				if (this._navigationContext) {
					this._navigationContext.dispose();
					this._navigationContext = null;
				}

				this.spring.destroy();

				if (this._interactionHandle) {
					this.clearInteractionHandle(this._interactionHandle);
				}
			},

			immediatelyResetRouteStack: function immediatelyResetRouteStack(nextRouteStack) {
				var _this3 = this;
				var destIndex = nextRouteStack.length - 1;
				this.setState({
					routeStack: nextRouteStack,
					sceneConfigStack: nextRouteStack.map(function (route) {
						return _this3.props.configureScene(route, nextRouteStack);
					}),

					presentedIndex: destIndex,
					activeGesture: null,
					transitionFromIndex: null,
					transitionQueue: [] }, function () {
					_this3._handleSpringUpdate();
					_this3._navBar && _this3._navBar.immediatelyRefresh();
				});
			},

			_transitionTo: function _transitionTo(destIndex, velocity, jumpSpringTo, cb) {
				if (destIndex === this.state.presentedIndex) {
					return;
				}
				if (this.state.transitionFromIndex !== null) {
					this.state.transitionQueue.push({
						destIndex: destIndex,
						velocity: velocity,
						cb: cb });

					return;
				}
				this.state.transitionFromIndex = this.state.presentedIndex;
				this.state.presentedIndex = destIndex;
				this.state.transitionCb = cb;
				this._onAnimationStart();
				if (AnimationsDebugModule) {
					AnimationsDebugModule.startRecordingFps();
				}
				var sceneConfig = this.state.sceneConfigStack[this.state.transitionFromIndex] || this.state.sceneConfigStack[this.state.presentedIndex];
				invariant(sceneConfig, 'Cannot configure scene at index ' + this.state.transitionFromIndex);

				if (jumpSpringTo != null) {
					this.spring.setCurrentValue(jumpSpringTo);
				}
				this.spring.setOvershootClampingEnabled(true);
				this.spring.getSpringConfig().friction = sceneConfig.springFriction;
				this.spring.getSpringConfig().tension = sceneConfig.springTension;
				this.spring.setVelocity(velocity || sceneConfig.defaultTransitionVelocity);
				this.spring.setEndValue(1);
			},

			_handleSpringUpdate: function _handleSpringUpdate() {
				if (!this.isMounted()) {
					return;
				}

				if (this.state.transitionFromIndex != null) {
					this._transitionBetween(this.state.transitionFromIndex, this.state.presentedIndex, this.spring.getCurrentValue());
				} else if (this.state.activeGesture != null) {
					var presentedToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
					this._transitionBetween(this.state.presentedIndex, presentedToIndex, this.spring.getCurrentValue());
				}
			},

			_completeTransition: function _completeTransition() {
				if (!this.isMounted()) {
					return;
				}

				if (this.spring.getCurrentValue() !== 1 && this.spring.getCurrentValue() !== 0) {

					if (this.state.pendingGestureProgress) {
						this.state.pendingGestureProgress = null;
					}
					return;
				}
				this._onAnimationEnd();
				var presentedIndex = this.state.presentedIndex;
				var didFocusRoute = this._subRouteFocus[presentedIndex] || this.state.routeStack[presentedIndex];
				this._emitDidFocus(didFocusRoute);
				if (AnimationsDebugModule) {
					AnimationsDebugModule.stopRecordingFps(Date.now());
				}
				this.state.transitionFromIndex = null;
				this.spring.setCurrentValue(0).setAtRest();
				this._hideScenes();
				if (this.state.transitionCb) {
					this.state.transitionCb();
					this.state.transitionCb = null;
				}
				if (this._interactionHandle) {
					this.clearInteractionHandle(this._interactionHandle);
					this._interactionHandle = null;
				}
				if (this.state.pendingGestureProgress) {

					var gestureToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
					this._enableScene(gestureToIndex);
					this.spring.setEndValue(this.state.pendingGestureProgress);
					return;
				}
				if (this.state.transitionQueue.length) {
					var queuedTransition = this.state.transitionQueue.shift();
					this._enableScene(queuedTransition.destIndex);
					this._emitWillFocus(this.state.routeStack[queuedTransition.destIndex]);
					this._transitionTo(queuedTransition.destIndex, queuedTransition.velocity, null, queuedTransition.cb);
				}
			},

			_emitDidFocus: function _emitDidFocus(route) {
				this.navigationContext.emit('didfocus', { route: route });

				if (this.props.onDidFocus) {
					this.props.onDidFocus(route);
				}
			},

			_emitWillFocus: function _emitWillFocus(route) {
				this.navigationContext.emit('willfocus', { route: route });

				var navBar = this._navBar;
				if (navBar && navBar.handleWillFocus) {
					navBar.handleWillFocus(route);
				}
				if (this.props.onWillFocus) {
					this.props.onWillFocus(route);
				}
			},

			_hideScenes: function _hideScenes() {
				var gesturingToIndex = null;
				if (this.state.activeGesture) {
					gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				}
				for (var i = 0; i < this.state.routeStack.length; i++) {
					if (i === this.state.presentedIndex || i === this.state.transitionFromIndex || i === gesturingToIndex) {
						continue;
					}
					this._disableScene(i);
				}
			},

			_disableScene: function _disableScene(sceneIndex) {
				this.refs['scene_' + sceneIndex] && this.refs['scene_' + sceneIndex].setNativeProps(SCENE_DISABLED_NATIVE_PROPS);
			},

			_enableScene: function _enableScene(sceneIndex) {

				var sceneStyle = flattenStyle([styles.baseScene, this.props.sceneStyle]);

				var enabledSceneNativeProps = {
					pointerEvents: 'auto',
					style: {
						top: sceneStyle.top,
						bottom: sceneStyle.bottom } };

				if (sceneIndex !== this.state.transitionFromIndex && sceneIndex !== this.state.presentedIndex) {

					enabledSceneNativeProps.style.opacity = 0;
				}
				this.refs['scene_' + sceneIndex] && this.refs['scene_' + sceneIndex].setNativeProps(enabledSceneNativeProps);
			},

			_onAnimationStart: function _onAnimationStart() {
				var fromIndex = this.state.presentedIndex;
				var toIndex = this.state.presentedIndex;
				if (this.state.transitionFromIndex != null) {
					fromIndex = this.state.transitionFromIndex;
				} else if (this.state.activeGesture) {
					toIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				}
				this._setRenderSceneToHardwareTextureAndroid(fromIndex, true);
				this._setRenderSceneToHardwareTextureAndroid(toIndex, true);
				var navBar = this._navBar;
				if (navBar && navBar.onAnimationStart) {
					navBar.onAnimationStart(fromIndex, toIndex);
				}
			},

			_onAnimationEnd: function _onAnimationEnd() {
				var max = this.state.routeStack.length - 1;
				for (var index = 0; index <= max; index++) {
					this._setRenderSceneToHardwareTextureAndroid(index, false);
				}

				var navBar = this._navBar;
				if (navBar && navBar.onAnimationEnd) {
					navBar.onAnimationEnd();
				}
			},

			_setRenderSceneToHardwareTextureAndroid: function _setRenderSceneToHardwareTextureAndroid(sceneIndex, shouldRenderToHardwareTexture) {
				var viewAtIndex = this.refs['scene_' + sceneIndex];
				if (viewAtIndex === null || viewAtIndex === undefined) {
					return;
				}
				viewAtIndex.setNativeProps({ renderToHardwareTextureAndroid: shouldRenderToHardwareTexture });
			},

			_handleTouchStart: function _handleTouchStart() {
				this._eligibleGestures = GESTURE_ACTIONS;
			},

			_handleMoveShouldSetPanResponder: function _handleMoveShouldSetPanResponder(e, gestureState) {
				var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
				if (!sceneConfig) {
					return false;
				}
				this._expectingGestureGrant = this._matchGestureAction(this._eligibleGestures, sceneConfig.gestures, gestureState);
				return !!this._expectingGestureGrant;
			},

			_doesGestureOverswipe: function _doesGestureOverswipe(gestureName) {
				var wouldOverswipeBack = this.state.presentedIndex <= 0 && (gestureName === 'pop' || gestureName === 'jumpBack');
				var wouldOverswipeForward = this.state.presentedIndex >= this.state.routeStack.length - 1 && gestureName === 'jumpForward';
				return wouldOverswipeForward || wouldOverswipeBack;
			},

			_deltaForGestureAction: function _deltaForGestureAction(gestureAction) {
				switch (gestureAction) {
					case 'pop':
					case 'jumpBack':
						return -1;
					case 'jumpForward':
						return 1;
					default:
						invariant(false, 'Unsupported gesture action ' + gestureAction);
						return;}
			},

			_handlePanResponderRelease: function _handlePanResponderRelease(e, gestureState) {
				var _this4 = this;
				var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
				var releaseGestureAction = this.state.activeGesture;
				if (!releaseGestureAction) {

					return;
				}
				var releaseGesture = sceneConfig.gestures[releaseGestureAction];
				var destIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				if (this.spring.getCurrentValue() === 0) {

					this.spring.setCurrentValue(0).setAtRest();
					this._completeTransition();
					return;
				}
				var isTravelVertical = releaseGesture.direction === 'top-to-bottom' || releaseGesture.direction === 'bottom-to-top';
				var isTravelInverted = releaseGesture.direction === 'right-to-left' || releaseGesture.direction === 'bottom-to-top';
				var velocity, gestureDistance;
				if (isTravelVertical) {
					velocity = isTravelInverted ? -gestureState.vy : gestureState.vy;
					gestureDistance = isTravelInverted ? -gestureState.dy : gestureState.dy;
				} else {
					velocity = isTravelInverted ? -gestureState.vx : gestureState.vx;
					gestureDistance = isTravelInverted ? -gestureState.dx : gestureState.dx;
				}
				var transitionVelocity = clamp(-10, velocity, 10);
				if (Math.abs(velocity) < releaseGesture.notMoving) {

					var hasGesturedEnoughToComplete = gestureDistance > releaseGesture.fullDistance * releaseGesture.stillCompletionRatio;
					transitionVelocity = hasGesturedEnoughToComplete ? releaseGesture.snapVelocity : -releaseGesture.snapVelocity;
				}
				if (transitionVelocity < 0 || this._doesGestureOverswipe(releaseGestureAction)) {

					if (this.state.transitionFromIndex == null) {

						var transitionBackToPresentedIndex = this.state.presentedIndex;

						this.state.presentedIndex = destIndex;
						this._transitionTo(transitionBackToPresentedIndex, -transitionVelocity, 1 - this.spring.getCurrentValue());
					}
				} else {

					this._emitWillFocus(this.state.routeStack[destIndex]);
					this._transitionTo(destIndex, transitionVelocity, null, function () {
						if (releaseGestureAction === 'pop') {
							_this4._cleanScenesPastIndex(destIndex);
						}
					});
				}
				this._detachGesture();
			},

			_handlePanResponderTerminate: function _handlePanResponderTerminate(e, gestureState) {
				if (this.state.activeGesture == null) {
					return;
				}
				var destIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				this._detachGesture();
				var transitionBackToPresentedIndex = this.state.presentedIndex;

				this.state.presentedIndex = destIndex;
				this._transitionTo(transitionBackToPresentedIndex, null, 1 - this.spring.getCurrentValue());
			},

			_attachGesture: function _attachGesture(gestureId) {
				this.state.activeGesture = gestureId;
				var gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				this._enableScene(gesturingToIndex);
			},

			_detachGesture: function _detachGesture() {
				this.state.activeGesture = null;
				this.state.pendingGestureProgress = null;
				this._hideScenes();
			},

			_handlePanResponderMove: function _handlePanResponderMove(e, gestureState) {
				if (this._isMoveGestureAttached !== undefined) {
					invariant(this._expectingGestureGrant, 'Responder granted unexpectedly.');

					this._attachGesture(this._expectingGestureGrant);
					this._onAnimationStart();
					this._expectingGestureGrant = undefined;
				}

				var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
				if (this.state.activeGesture) {
					var gesture = sceneConfig.gestures[this.state.activeGesture];
					return this._moveAttachedGesture(gesture, gestureState);
				}
				var matchedGesture = this._matchGestureAction(GESTURE_ACTIONS, sceneConfig.gestures, gestureState);
				if (matchedGesture) {
					this._attachGesture(matchedGesture);
				}
			},

			_moveAttachedGesture: function _moveAttachedGesture(gesture, gestureState) {
				var isTravelVertical = gesture.direction === 'top-to-bottom' || gesture.direction === 'bottom-to-top';
				var isTravelInverted = gesture.direction === 'right-to-left' || gesture.direction === 'bottom-to-top';
				var distance = isTravelVertical ? gestureState.dy : gestureState.dx;
				distance = isTravelInverted ? -distance : distance;
				var gestureDetectMovement = gesture.gestureDetectMovement;
				var nextProgress = (distance - gestureDetectMovement) / (gesture.fullDistance - gestureDetectMovement);
				if (nextProgress < 0 && gesture.isDetachable) {
					var gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
					this._transitionBetween(this.state.presentedIndex, gesturingToIndex, 0);
					this._detachGesture();
					if (this.state.pendingGestureProgress != null) {
						this.spring.setCurrentValue(0);
					}
					return;
				}
				if (this._doesGestureOverswipe(this.state.activeGesture)) {
					var frictionConstant = gesture.overswipe.frictionConstant;
					var frictionByDistance = gesture.overswipe.frictionByDistance;
					var frictionRatio = 1 / (frictionConstant + Math.abs(nextProgress) * frictionByDistance);
					nextProgress *= frictionRatio;
				}
				nextProgress = clamp(0, nextProgress, 1);
				if (this.state.transitionFromIndex != null) {
					this.state.pendingGestureProgress = nextProgress;
				} else if (this.state.pendingGestureProgress) {
					this.spring.setEndValue(nextProgress);
				} else {
					this.spring.setCurrentValue(nextProgress);
				}
			},

			_matchGestureAction: function _matchGestureAction(eligibleGestures, gestures, gestureState) {
				var _this5 = this;
				if (!gestures) {
					return null;
				}
				var matchedGesture = null;
				eligibleGestures.some(function (gestureName, gestureIndex) {
					var gesture = gestures[gestureName];
					if (!gesture) {
						return;
					}
					if (gesture.overswipe == null && _this5._doesGestureOverswipe(gestureName)) {

						return false;
					}
					var isTravelVertical = gesture.direction === 'top-to-bottom' || gesture.direction === 'bottom-to-top';
					var isTravelInverted = gesture.direction === 'right-to-left' || gesture.direction === 'bottom-to-top';
					var currentLoc = isTravelVertical ? gestureState.moveY : gestureState.moveX;
					var travelDist = isTravelVertical ? gestureState.dy : gestureState.dx;
					var oppositeAxisTravelDist = isTravelVertical ? gestureState.dx : gestureState.dy;
					var edgeHitWidth = gesture.edgeHitWidth;
					if (isTravelInverted) {
						currentLoc = -currentLoc;
						travelDist = -travelDist;
						oppositeAxisTravelDist = -oppositeAxisTravelDist;
						edgeHitWidth = isTravelVertical ? -(SCREEN_HEIGHT - edgeHitWidth) : -(SCREEN_WIDTH - edgeHitWidth);
					}
					var moveStartedInRegion = gesture.edgeHitWidth == null || currentLoc < edgeHitWidth;
					if (!moveStartedInRegion) {
						return false;
					}
					var moveTravelledFarEnough = travelDist >= gesture.gestureDetectMovement;
					if (!moveTravelledFarEnough) {
						return false;
					}
					var directionIsCorrect = Math.abs(travelDist) > Math.abs(oppositeAxisTravelDist) * gesture.directionRatio;
					if (directionIsCorrect) {
						matchedGesture = gestureName;
						return true;
					} else {
						_this5._eligibleGestures = _this5._eligibleGestures.slice().splice(gestureIndex, 1);
					}
				});
				return matchedGesture || null;
			},

			_transitionSceneStyle: function _transitionSceneStyle(fromIndex, toIndex, progress, index) {
				var viewAtIndex = this.refs['scene_' + index];
				if (viewAtIndex === null || viewAtIndex === undefined) {
					return;
				}

				var sceneConfigIndex = fromIndex < toIndex ? toIndex : fromIndex;
				var sceneConfig = this.state.sceneConfigStack[sceneConfigIndex];

				if (!sceneConfig) {
					sceneConfig = this.state.sceneConfigStack[sceneConfigIndex - 1];
				}
				var styleToUse = {};
				var useFn = index < fromIndex || index < toIndex ? sceneConfig.animationInterpolators.out : sceneConfig.animationInterpolators.into;
				var directionAdjustedProgress = fromIndex < toIndex ? progress : 1 - progress;
				var didChange = useFn(styleToUse, directionAdjustedProgress);
				if (didChange) {
					viewAtIndex.setNativeProps({ style: styleToUse });
				}
			},

			_transitionBetween: function _transitionBetween(fromIndex, toIndex, progress) {
				this._transitionSceneStyle(fromIndex, toIndex, progress, fromIndex);
				this._transitionSceneStyle(fromIndex, toIndex, progress, toIndex);
				var navBar = this._navBar;
				if (navBar && navBar.updateProgress && toIndex >= 0 && fromIndex >= 0) {
					navBar.updateProgress(progress, fromIndex, toIndex);
				}
			},

			_handleResponderTerminationRequest: function _handleResponderTerminationRequest() {
				return false;
			},

			_getDestIndexWithinBounds: function _getDestIndexWithinBounds(n) {
				var currentIndex = this.state.presentedIndex;
				var destIndex = currentIndex + n;
				invariant(destIndex >= 0, 'Cannot jump before the first route.');

				var maxIndex = this.state.routeStack.length - 1;
				invariant(maxIndex >= destIndex, 'Cannot jump past the last route.');

				return destIndex;
			},

			_jumpN: function _jumpN(n) {
				var destIndex = this._getDestIndexWithinBounds(n);
				this._enableScene(destIndex);
				this._emitWillFocus(this.state.routeStack[destIndex]);
				this._transitionTo(destIndex);
			},

			jumpTo: function jumpTo(route) {
				var destIndex = this.state.routeStack.indexOf(route);
				invariant(destIndex !== -1, 'Cannot jump to route that is not in the route stack');

				this._jumpN(destIndex - this.state.presentedIndex);
			},

			jumpForward: function jumpForward() {
				this._jumpN(1);
			},

			jumpBack: function jumpBack() {
				this._jumpN(-1);
			},

			push: function push(route) {
				var _this6 = this;
				invariant(!!route, 'Must supply route to push');
				var activeLength = this.state.presentedIndex + 1;
				var activeStack = this.state.routeStack.slice(0, activeLength);
				var activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
				var nextStack = activeStack.concat([route]);
				var destIndex = nextStack.length - 1;
				var nextAnimationConfigStack = activeAnimationConfigStack.concat([this.props.configureScene(route, nextStack)]);

				this._emitWillFocus(nextStack[destIndex]);
				this.setState({
					routeStack: nextStack,
					sceneConfigStack: nextAnimationConfigStack }, function () {
					_this6._enableScene(destIndex);
					_this6._transitionTo(destIndex);
				});
			},

			_popN: function _popN(n) {
				var _this7 = this;
				if (n === 0) {
					return;
				}
				invariant(this.state.presentedIndex - n >= 0, 'Cannot pop below zero');

				var popIndex = this.state.presentedIndex - n;
				this._enableScene(popIndex);
				this._emitWillFocus(this.state.routeStack[popIndex]);
				this._transitionTo(popIndex, null, null, function () {
					_this7._cleanScenesPastIndex(popIndex);
				});
			},

			pop: function pop() {
				if (this.state.transitionQueue.length) {

					return;
				}

				if (this.state.presentedIndex > 0) {
					this._popN(1);
				}
			},

			replaceAtIndex: function replaceAtIndex(route, index, cb) {
				var _this8 = this;
				invariant(!!route, 'Must supply route to replace');
				if (index < 0) {
					index += this.state.routeStack.length;
				}

				if (this.state.routeStack.length <= index) {
					return;
				}

				var nextRouteStack = this.state.routeStack.slice();
				var nextAnimationModeStack = this.state.sceneConfigStack.slice();
				nextRouteStack[index] = route;
				nextAnimationModeStack[index] = this.props.configureScene(route, nextRouteStack);

				if (index === this.state.presentedIndex) {
					this._emitWillFocus(route);
				}
				this.setState({
					routeStack: nextRouteStack,
					sceneConfigStack: nextAnimationModeStack }, function () {
					if (index === _this8.state.presentedIndex) {
						_this8._emitDidFocus(route);
					}
					cb && cb();
				});
			},

			replace: function replace(route) {
				this.replaceAtIndex(route, this.state.presentedIndex);
			},

			replacePrevious: function replacePrevious(route) {
				this.replaceAtIndex(route, this.state.presentedIndex - 1);
			},

			popToTop: function popToTop() {
				this.popToRoute(this.state.routeStack[0]);
			},

			popToRoute: function popToRoute(route) {
				var indexOfRoute = this.state.routeStack.indexOf(route);
				invariant(indexOfRoute !== -1, 'Calling popToRoute for a route that doesn\'t exist!');

				var numToPop = this.state.presentedIndex - indexOfRoute;
				this._popN(numToPop);
			},

			replacePreviousAndPop: function replacePreviousAndPop(route) {
				if (this.state.routeStack.length < 2) {
					return;
				}
				this.replacePrevious(route);
				this.pop();
			},

			resetTo: function resetTo(route) {
				var _this9 = this;
				invariant(!!route, 'Must supply route to push');
				this.replaceAtIndex(route, 0, function () {

					if (_this9.state.presentedIndex > 0) {
						_this9._popN(_this9.state.presentedIndex);
					}
				});
			},

			getCurrentRoutes: function getCurrentRoutes() {

				return this.state.routeStack.slice();
			},

			_cleanScenesPastIndex: function _cleanScenesPastIndex(index) {
				var newStackLength = index + 1;

				if (newStackLength < this.state.routeStack.length) {
					this.setState({
						sceneConfigStack: this.state.sceneConfigStack.slice(0, newStackLength),
						routeStack: this.state.routeStack.slice(0, newStackLength) });
				}
			},

			_renderScene: function _renderScene(route, i) {
				var _this10 = this;
				var disabledSceneStyle = null;
				var disabledScenePointerEvents = 'auto';
				if (i !== this.state.presentedIndex) {
					disabledSceneStyle = styles.disabledScene;
					disabledScenePointerEvents = 'none';
				}
				return React.createElement(View, {
					key: 'scene_' + getRouteID(route),
					ref: 'scene_' + i,
					onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture() {
						return _this10.state.transitionFromIndex != null || _this10.state.transitionFromIndex != null;
					},
					pointerEvents: disabledScenePointerEvents,
					style: [styles.baseScene, this.props.sceneStyle, disabledSceneStyle] }, this.props.renderScene(route, this));
			},

			_renderNavigationBar: function _renderNavigationBar() {
				var _this11 = this;var navigationBar = this.props.navigationBar;
				if (!navigationBar) {
					return null;
				}
				return React.cloneElement(navigationBar, {
					ref: function ref(navBar) {
						_this11._navBar = navBar;
						if (navigationBar && typeof navigationBar.ref === 'function') {
							navigationBar.ref(navBar);
						}
					},
					navigator: this._navigationBarNavigator,
					navState: this.state });
			},

			render: function render() {
				var _this12 = this;
				var newRenderedSceneMap = new Map();
				var scenes = this.state.routeStack.map(function (route, index) {
					var renderedScene;
					if (_this12._renderedSceneMap.has(route) && index !== _this12.state.presentedIndex) {
						renderedScene = _this12._renderedSceneMap.get(route);
					} else {
						renderedScene = _this12._renderScene(route, index);
					}
					newRenderedSceneMap.set(route, renderedScene);
					return renderedScene;
				});
				this._renderedSceneMap = newRenderedSceneMap;
				return React.createElement(View, { style: [styles.container, this.props.style] }, React.createElement(View, babelHelpers.extends({
					style: styles.transitioner }, this.panGesture.panHandlers, {
					onTouchStart: this._handleTouchStart,
					onResponderTerminationRequest: this._handleResponderTerminationRequest }), scenes), this._renderNavigationBar());
			},

			_getNavigationContext: function _getNavigationContext() {
				if (!this._navigationContext) {
					this._navigationContext = new NavigationContext();
				}
				return this._navigationContext;
			} });

		module.exports = Navigator;
	},
	// Libraries/Interaction/InteractionMixin.js
	function (__inner_require__, exports, module) {
		var InteractionManager = __inner_require__(33 /*Libraries/Interaction/InteractionManager.js*/);

		var InteractionMixin = {
			componentWillUnmount: function componentWillUnmount() {
				while (this._interactionMixinHandles.length) {
					InteractionManager.clearInteractionHandle(this._interactionMixinHandles.pop());
				}
			},

			_interactionMixinHandles: [],

			createInteractionHandle: function createInteractionHandle() {
				var handle = InteractionManager.createInteractionHandle();
				this._interactionMixinHandles.push(handle);
				return handle;
			},

			clearInteractionHandle: function clearInteractionHandle(clearHandle) {
				InteractionManager.clearInteractionHandle(clearHandle);
				this._interactionMixinHandles = this._interactionMixinHandles.filter(function (handle) {
					return handle !== clearHandle;
				});
			},

			runAfterInteractions: function runAfterInteractions(callback) {
				InteractionManager.runAfterInteractions(callback);
			} };

		module.exports = InteractionMixin;
	},
	// Libraries/CustomComponents/Navigator/Navigation/NavigationContext.js
	function (__inner_require__, exports, module) {
		var NavigationEvent = __inner_require__(112 /*Libraries/CustomComponents/Navigator/Navigation/NavigationEvent.js*/);
		var NavigationEventEmitter = __inner_require__(113 /*Libraries/CustomComponents/Navigator/Navigation/NavigationEventEmitter.js*/);
		var NavigationTreeNode = __inner_require__(114 /*Libraries/CustomComponents/Navigator/Navigation/NavigationTreeNode.js*/);

		var Set = require('react-native@0.21/Libraries/vendor/core/Set.js');

		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');var AT_TARGET = NavigationEvent.AT_TARGET,
		    BUBBLING_PHASE = NavigationEvent.BUBBLING_PHASE,
		    CAPTURING_PHASE = NavigationEvent.CAPTURING_PHASE;

		var LegacyEventTypes = new Set(['willfocus', 'didfocus']);var NavigationContext = function () {

			function NavigationContext() {
				babelHelpers.classCallCheck(this, NavigationContext);
				this._bubbleEventEmitter = new NavigationEventEmitter(this);
				this._captureEventEmitter = new NavigationEventEmitter(this);
				this._currentRoute = null;

				this.__node = new NavigationTreeNode(this);

				this._emitCounter = 0;
				this._emitQueue = [];

				this.addListener('willfocus', this._onFocus);
				this.addListener('didfocus', this._onFocus);
			}babelHelpers.createClass(NavigationContext, [{ key: 'appendChild', value: function appendChild(childContext) {
					this.__node.appendChild(childContext.__node);
				} }, { key: 'addListener', value: function addListener(eventType, listener, useCapture) {
					if (LegacyEventTypes.has(eventType)) {
						useCapture = false;
					}

					var emitter = useCapture ? this._captureEventEmitter : this._bubbleEventEmitter;

					if (emitter) {
						return emitter.addListener(eventType, listener, this);
					} else {
						return { remove: emptyFunction };
					}
				} }, { key: 'emit', value: function emit(eventType, data, didEmitCallback) {
					var _this = this;
					if (this._emitCounter > 0) {

						var args = Array.prototype.slice.call(arguments);
						this._emitQueue.push(args);
						return;
					}

					this._emitCounter++;

					if (LegacyEventTypes.has(eventType)) {

						this.__emit(eventType, data, null, {
							defaultPrevented: false,
							eventPhase: AT_TARGET,
							propagationStopped: true,
							target: this });
					} else {
						var targets = [this];
						var parentTarget = this.parent;
						while (parentTarget) {
							targets.unshift(parentTarget);
							parentTarget = parentTarget.parent;
						}

						var propagationStopped = false;
						var defaultPrevented = false;
						var callback = function callback(event) {
							propagationStopped = propagationStopped || event.isPropagationStopped();
							defaultPrevented = defaultPrevented || event.defaultPrevented;
						};

						targets.some(function (currentTarget) {
							if (propagationStopped) {
								return true;
							}

							var extraInfo = {
								defaultPrevented: defaultPrevented,
								eventPhase: CAPTURING_PHASE,
								propagationStopped: propagationStopped,
								target: _this };

							currentTarget.__emit(eventType, data, callback, extraInfo);
						}, this);

						targets.reverse().some(function (currentTarget) {
							if (propagationStopped) {
								return true;
							}
							var extraInfo = {
								defaultPrevented: defaultPrevented,
								eventPhase: BUBBLING_PHASE,
								propagationStopped: propagationStopped,
								target: _this };

							currentTarget.__emit(eventType, data, callback, extraInfo);
						}, this);
					}

					if (didEmitCallback) {
						var event = NavigationEvent.pool(eventType, this, data);
						propagationStopped && event.stopPropagation();
						defaultPrevented && event.preventDefault();
						didEmitCallback.call(this, event);
						event.dispose();
					}

					this._emitCounter--;
					while (this._emitQueue.length) {
						var args = this._emitQueue.shift();
						this.emit.apply(this, args);
					}
				} }, { key: 'dispose', value: function dispose() {

					this._bubbleEventEmitter && this._bubbleEventEmitter.removeAllListeners();
					this._captureEventEmitter && this._captureEventEmitter.removeAllListeners();
					this._bubbleEventEmitter = null;
					this._captureEventEmitter = null;
					this._currentRoute = null;
				} }, { key: '__emit', value: function __emit(eventType, data, didEmitCallback, extraInfo) {
					var emitter;
					switch (extraInfo.eventPhase) {
						case CAPTURING_PHASE:
							emitter = this._captureEventEmitter;
							break;

						case AT_TARGET:
							emitter = this._bubbleEventEmitter;
							break;

						case BUBBLING_PHASE:
							emitter = this._bubbleEventEmitter;
							break;

						default:
							invariant(false, 'invalid event phase %s', extraInfo.eventPhase);}

					if (extraInfo.target === this) {

						extraInfo.eventPhase = AT_TARGET;
					}

					if (emitter) {
						emitter.emit(eventType, data, didEmitCallback, extraInfo);
					}
				} }, { key: '_onFocus', value: function _onFocus(event) {
					invariant(event.data && event.data.hasOwnProperty('route'), 'event type "%s" should provide route', event.type);

					this._currentRoute = event.data.route;
				} }, { key: 'parent', get: function get() {
					var parent = this.__node.getParent();return parent ? parent.getValue() : null;
				} }, { key: 'top', get: function get() {
					var result = null;var parentNode = this.__node.getParent();while (parentNode) {
						result = parentNode.getValue();parentNode = parentNode.getParent();
					}return result;
				} }, { key: 'currentRoute', get: function get() {
					return this._currentRoute;
				} }]);return NavigationContext;
		}();

		module.exports = NavigationContext;
	},
	// Libraries/CustomComponents/Navigator/Navigation/NavigationEvent.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');var NavigationEventPool = function () {

			function NavigationEventPool() {
				babelHelpers.classCallCheck(this, NavigationEventPool);
				this._list = [];
			}babelHelpers.createClass(NavigationEventPool, [{ key: 'get', value: function get(type, currentTarget, data) {
					var event;
					if (this._list.length > 0) {
						event = this._list.pop();
						event.constructor.call(event, type, currentTarget, data);
					} else {
						event = new NavigationEvent(type, currentTarget, data);
					}
					return event;
				} }, { key: 'put', value: function put(event) {
					this._list.push(event);
				} }]);return NavigationEventPool;
		}();

		var _navigationEventPool = new NavigationEventPool();var NavigationEvent = function () {
			babelHelpers.createClass(NavigationEvent, null, [{ key: 'pool', value: function pool(type, currentTarget, data) {
					return _navigationEventPool.get(type, currentTarget, data);
				} }]);

			function NavigationEvent(type, currentTarget, data) {
				babelHelpers.classCallCheck(this, NavigationEvent);
				this.target = currentTarget;
				this.eventPhase = NavigationEvent.NONE;

				this._type = type;
				this._currentTarget = currentTarget;
				this._data = data;
				this._defaultPrevented = false;
				this._disposed = false;
				this._propagationStopped = false;
			}babelHelpers.createClass(NavigationEvent, [{ key: 'preventDefault', value: function preventDefault() {
					this._defaultPrevented = true;
				} }, { key: 'stopPropagation', value: function stopPropagation() {
					this._propagationStopped = true;
				} }, { key: 'stop', value: function stop() {
					this.preventDefault();
					this.stopPropagation();
				} }, { key: 'isPropagationStopped', value: function isPropagationStopped() {
					return this._propagationStopped;
				} }, { key: 'dispose', value: function dispose() {
					invariant(!this._disposed, 'NavigationEvent is already disposed');
					this._disposed = true;

					this.target = null;
					this.eventPhase = NavigationEvent.NONE;
					this._type = null;
					this._currentTarget = null;
					this._data = null;
					this._defaultPrevented = false;

					_navigationEventPool.put(this);
				} }, { key: 'type', get: function get() {
					return this._type;
				} }, { key: 'currentTarget', get: function get() {
					return this._currentTarget;
				} }, { key: 'data', get: function get() {
					return this._data;
				} }, { key: 'defaultPrevented', get: function get() {
					return this._defaultPrevented;
				} }]);return NavigationEvent;
		}();

		NavigationEvent.NONE = 0;

		NavigationEvent.CAPTURING_PHASE = 1;

		NavigationEvent.AT_TARGET = 2;

		NavigationEvent.BUBBLING_PHASE = 3;

		module.exports = NavigationEvent;
	},
	// Libraries/CustomComponents/Navigator/Navigation/NavigationEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');
		var NavigationEvent = __inner_require__(112 /*Libraries/CustomComponents/Navigator/Navigation/NavigationEvent.js*/);var NavigationEventEmitter = function (_EventEmitter) {
			babelHelpers.inherits(NavigationEventEmitter, _EventEmitter);

			function NavigationEventEmitter(target) {
				babelHelpers.classCallCheck(this, NavigationEventEmitter);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationEventEmitter.__proto__ || Object.getPrototypeOf(NavigationEventEmitter)).call(this));

				_this._emitting = false;
				_this._emitQueue = [];
				_this._target = target;return _this;
			}babelHelpers.createClass(NavigationEventEmitter, [{ key: 'emit', value: function emit(eventType, data, didEmitCallback, extraInfo) {
					if (this._emitting) {

						var args = Array.prototype.slice.call(arguments);
						this._emitQueue.unshift(args);
						return;
					}

					this._emitting = true;

					var event = NavigationEvent.pool(eventType, this._target, data);

					if (extraInfo) {
						if (extraInfo.target) {
							event.target = extraInfo.target;
						}

						if (extraInfo.eventPhase) {
							event.eventPhase = extraInfo.eventPhase;
						}

						if (extraInfo.defaultPrevented) {
							event.preventDefault();
						}

						if (extraInfo.propagationStopped) {
							event.stopPropagation();
						}
					}

					babelHelpers.get(NavigationEventEmitter.prototype.__proto__ || Object.getPrototypeOf(NavigationEventEmitter.prototype), 'emit', this).call(this, String(eventType), event);

					if (typeof didEmitCallback === 'function') {
						didEmitCallback.call(this._target, event);
					}
					event.dispose();

					this._emitting = false;

					while (this._emitQueue.length) {
						var args = this._emitQueue.shift();
						this.emit.apply(this, args);
					}
				} }]);return NavigationEventEmitter;
		}(EventEmitter);

		module.exports = NavigationEventEmitter;
	},
	// Libraries/CustomComponents/Navigator/Navigation/NavigationTreeNode.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var immutable = require('immutable@3/dist/immutable.js');var List = immutable.List;var NavigationTreeNode = function () {

			function NavigationTreeNode(value) {
				babelHelpers.classCallCheck(this, NavigationTreeNode);
				this.__parent = null;
				this._children = new List();
				this._value = value;
			}babelHelpers.createClass(NavigationTreeNode, [{ key: 'getValue', value: function getValue() {
					return this._value;
				} }, { key: 'getParent', value: function getParent() {
					return this.__parent;
				} }, { key: 'getChildrenCount', value: function getChildrenCount() {
					return this._children.size;
				} }, { key: 'getChildAt', value: function getChildAt(index) {
					return index > -1 && index < this._children.size ? this._children.get(index) : null;
				} }, { key: 'appendChild', value: function appendChild(child) {
					if (child.__parent) {
						child.__parent.removeChild(child);
					}
					child.__parent = this;
					this._children = this._children.push(child);
				} }, { key: 'removeChild', value: function removeChild(child) {
					var index = this._children.indexOf(child);

					invariant(index > -1, 'The node to be removed is not a child of this node.');

					child.__parent = null;

					this._children = this._children.splice(index, 1);
				} }, { key: 'indexOf', value: function indexOf(child) {
					return this._children.indexOf(child);
				} }, { key: 'forEach', value: function forEach(callback, context) {
					this._children.forEach(callback, context);
				} }, { key: 'map', value: function map(callback, context) {
					return this._children.map(callback, context).toJS();
				} }, { key: 'some', value: function some(callback, context) {
					return this._children.some(callback, context);
				} }]);return NavigationTreeNode;
		}();

		module.exports = NavigationTreeNode;
	},
	// Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBar.js
	function (__inner_require__, exports, module) {
		var NavigatorBreadcrumbNavigationBarStyles = __inner_require__(116 /*Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBarStyles.ios.js*/);
		var NavigatorNavigationBarStylesAndroid = __inner_require__(119 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesAndroid.js*/);
		var NavigatorNavigationBarStylesIOS = __inner_require__(117 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);var _require = require('immutable@3/dist/immutable.js'),
		    Map = _require.Map;

		var guid = require('react-native@0.21/Libraries/vendor/core/guid.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var Interpolators = NavigatorBreadcrumbNavigationBarStyles.Interpolators;
		var NavigatorNavigationBarStyles = Platform.OS === 'android' ? NavigatorNavigationBarStylesAndroid : NavigatorNavigationBarStylesIOS;
		var PropTypes = React.PropTypes;

		var CRUMB_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var ICON_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var SEPARATOR_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var TITLE_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var RIGHT_BUTTON_PROPS = Interpolators.map(function () {
			return { style: {} };
		});

		var navStatePresentedIndex = function navStatePresentedIndex(navState) {
			if (navState.presentedIndex !== undefined) {
				return navState.presentedIndex;
			}

			return navState.observedTopOfStack;
		};

		var initStyle = function initStyle(index, presentedIndex) {
			return index === presentedIndex ? NavigatorBreadcrumbNavigationBarStyles.Center[index] : index < presentedIndex ? NavigatorBreadcrumbNavigationBarStyles.Left[index] : NavigatorBreadcrumbNavigationBarStyles.Right[index];
		};

		var NavigatorBreadcrumbNavigationBar = React.createClass({ displayName: 'NavigatorBreadcrumbNavigationBar',
			propTypes: {
				navigator: PropTypes.shape({
					push: PropTypes.func,
					pop: PropTypes.func,
					replace: PropTypes.func,
					popToRoute: PropTypes.func,
					popToTop: PropTypes.func }),

				routeMapper: PropTypes.shape({
					rightContentForRoute: PropTypes.func,
					titleContentForRoute: PropTypes.func,
					iconForRoute: PropTypes.func }),

				navState: React.PropTypes.shape({
					routeStack: React.PropTypes.arrayOf(React.PropTypes.object),
					presentedIndex: React.PropTypes.number }),

				style: View.propTypes.style },

			statics: {
				Styles: NavigatorBreadcrumbNavigationBarStyles },

			_updateIndexProgress: function _updateIndexProgress(progress, index, fromIndex, toIndex) {
				var amount = toIndex > fromIndex ? progress : 1 - progress;
				var oldDistToCenter = index - fromIndex;
				var newDistToCenter = index - toIndex;
				var interpolate;
				invariant(Interpolators[index], 'Cannot find breadcrumb interpolators for ' + index);

				if (oldDistToCenter > 0 && newDistToCenter === 0 || newDistToCenter > 0 && oldDistToCenter === 0) {
					interpolate = Interpolators[index].RightToCenter;
				} else if (oldDistToCenter < 0 && newDistToCenter === 0 || newDistToCenter < 0 && oldDistToCenter === 0) {
					interpolate = Interpolators[index].CenterToLeft;
				} else if (oldDistToCenter === newDistToCenter) {
					interpolate = Interpolators[index].RightToCenter;
				} else {
					interpolate = Interpolators[index].RightToLeft;
				}

				if (interpolate.Crumb(CRUMB_PROPS[index].style, amount)) {
					this._setPropsIfExists('crumb_' + index, CRUMB_PROPS[index]);
				}
				if (interpolate.Icon(ICON_PROPS[index].style, amount)) {
					this._setPropsIfExists('icon_' + index, ICON_PROPS[index]);
				}
				if (interpolate.Separator(SEPARATOR_PROPS[index].style, amount)) {
					this._setPropsIfExists('separator_' + index, SEPARATOR_PROPS[index]);
				}
				if (interpolate.Title(TITLE_PROPS[index].style, amount)) {
					this._setPropsIfExists('title_' + index, TITLE_PROPS[index]);
				}
				var right = this.refs['right_' + index];

				var rightButtonStyle = RIGHT_BUTTON_PROPS[index].style;
				if (right && interpolate.RightItem(rightButtonStyle, amount)) {
					right.setNativeProps({
						style: rightButtonStyle,
						pointerEvents: rightButtonStyle.opacity === 0 ? 'none' : 'auto' });
				}
			},

			updateProgress: function updateProgress(progress, fromIndex, toIndex) {
				var max = Math.max(fromIndex, toIndex);
				var min = Math.min(fromIndex, toIndex);
				for (var index = min; index <= max; index++) {
					this._updateIndexProgress(progress, index, fromIndex, toIndex);
				}
			},

			onAnimationStart: function onAnimationStart(fromIndex, toIndex) {
				var max = Math.max(fromIndex, toIndex);
				var min = Math.min(fromIndex, toIndex);
				for (var index = min; index <= max; index++) {
					this._setRenderViewsToHardwareTextureAndroid(index, true);
				}
			},

			onAnimationEnd: function onAnimationEnd() {
				var max = this.props.navState.routeStack.length - 1;
				for (var index = 0; index <= max; index++) {
					this._setRenderViewsToHardwareTextureAndroid(index, false);
				}
			},

			_setRenderViewsToHardwareTextureAndroid: function _setRenderViewsToHardwareTextureAndroid(index, renderToHardwareTexture) {
				var props = {
					renderToHardwareTextureAndroid: renderToHardwareTexture };

				this._setPropsIfExists('icon_' + index, props);
				this._setPropsIfExists('separator_' + index, props);
				this._setPropsIfExists('title_' + index, props);
				this._setPropsIfExists('right_' + index, props);
			},

			componentWillMount: function componentWillMount() {
				this._reset();
			},

			render: function render() {
				var navState = this.props.navState;
				var icons = navState && navState.routeStack.map(this._getBreadcrumb);
				var titles = navState.routeStack.map(this._getTitle);
				var buttons = navState.routeStack.map(this._getRightButton);
				return React.createElement(View, {
					key: this._key,
					style: [styles.breadCrumbContainer, this.props.style] }, titles, icons, buttons);
			},

			immediatelyRefresh: function immediatelyRefresh() {
				this._reset();
				this.forceUpdate();
			},

			_reset: function _reset() {
				this._key = guid();
				this._descriptors = {
					crumb: new Map(),
					title: new Map(),
					right: new Map() };
			},

			_getBreadcrumb: function _getBreadcrumb(route, index) {
				if (this._descriptors.crumb.has(route)) {
					return this._descriptors.crumb.get(route);
				}

				var navBarRouteMapper = this.props.routeMapper;
				var firstStyles = initStyle(index, navStatePresentedIndex(this.props.navState));

				var breadcrumbDescriptor = React.createElement(View, {
					key: 'crumb_' + index,
					ref: 'crumb_' + index,
					style: firstStyles.Crumb }, React.createElement(View, { ref: 'icon_' + index, style: firstStyles.Icon }, navBarRouteMapper.iconForRoute(route, this.props.navigator)), React.createElement(View, { ref: 'separator_' + index, style: firstStyles.Separator }, navBarRouteMapper.separatorForRoute(route, this.props.navigator)));

				this._descriptors.crumb = this._descriptors.crumb.set(route, breadcrumbDescriptor);
				return breadcrumbDescriptor;
			},

			_getTitle: function _getTitle(route, index) {
				if (this._descriptors.title.has(route)) {
					return this._descriptors.title.get(route);
				}

				var titleContent = this.props.routeMapper.titleContentForRoute(this.props.navState.routeStack[index], this.props.navigator);

				var firstStyles = initStyle(index, navStatePresentedIndex(this.props.navState));

				var titleDescriptor = React.createElement(View, {
					key: 'title_' + index,
					ref: 'title_' + index,
					style: firstStyles.Title }, titleContent);

				this._descriptors.title = this._descriptors.title.set(route, titleDescriptor);
				return titleDescriptor;
			},

			_getRightButton: function _getRightButton(route, index) {
				if (this._descriptors.right.has(route)) {
					return this._descriptors.right.get(route);
				}
				var rightContent = this.props.routeMapper.rightContentForRoute(this.props.navState.routeStack[index], this.props.navigator);

				if (!rightContent) {
					this._descriptors.right = this._descriptors.right.set(route, null);
					return null;
				}
				var firstStyles = initStyle(index, navStatePresentedIndex(this.props.navState));
				var rightButtonDescriptor = React.createElement(View, {
					key: 'right_' + index,
					ref: 'right_' + index,
					style: firstStyles.RightItem }, rightContent);

				this._descriptors.right = this._descriptors.right.set(route, rightButtonDescriptor);
				return rightButtonDescriptor;
			},

			_setPropsIfExists: function _setPropsIfExists(ref, props) {
				var ref = this.refs[ref];
				ref && ref.setNativeProps(props);
			} });

		var styles = StyleSheet.create({
			breadCrumbContainer: {
				overflow: 'hidden',
				position: 'absolute',
				height: NavigatorNavigationBarStyles.General.TotalNavHeight,
				top: 0,
				left: 0,
				right: 0 } });

		module.exports = NavigatorBreadcrumbNavigationBar;
	},
	// Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBarStyles.ios.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
		var NavigatorNavigationBarStylesIOS = __inner_require__(117 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js*/);

		var buildStyleInterpolator = __inner_require__(118 /*Libraries/Utilities/buildStyleInterpolator.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var STATUS_BAR_HEIGHT = NavigatorNavigationBarStylesIOS.General.StatusBarHeight;
		var NAV_BAR_HEIGHT = NavigatorNavigationBarStylesIOS.General.NavBarHeight;

		var SPACING = 4;
		var ICON_WIDTH = 40;
		var SEPARATOR_WIDTH = 9;
		var CRUMB_WIDTH = ICON_WIDTH + SEPARATOR_WIDTH;

		var OPACITY_RATIO = 100;
		var ICON_INACTIVE_OPACITY = 0.6;
		var MAX_BREADCRUMBS = 10;

		var CRUMB_BASE = {
			position: 'absolute',
			flexDirection: 'row',
			top: STATUS_BAR_HEIGHT,
			width: CRUMB_WIDTH,
			height: NAV_BAR_HEIGHT,
			backgroundColor: 'transparent' };

		var ICON_BASE = {
			width: ICON_WIDTH,
			height: NAV_BAR_HEIGHT };

		var SEPARATOR_BASE = {
			width: SEPARATOR_WIDTH,
			height: NAV_BAR_HEIGHT };

		var TITLE_BASE = {
			position: 'absolute',
			top: STATUS_BAR_HEIGHT,
			height: NAV_BAR_HEIGHT,
			backgroundColor: 'transparent' };

		var FIRST_TITLE_BASE = merge(TITLE_BASE, {
			left: 0,
			right: 0,
			alignItems: 'center',
			height: NAV_BAR_HEIGHT });

		var RIGHT_BUTTON_BASE = {
			position: 'absolute',
			top: STATUS_BAR_HEIGHT,
			right: SPACING,
			overflow: 'hidden',
			opacity: 1,
			height: NAV_BAR_HEIGHT,
			backgroundColor: 'transparent' };

		var LEFT = [];
		var CENTER = [];
		var RIGHT = [];
		for (var i = 0; i < MAX_BREADCRUMBS; i++) {
			var crumbLeft = CRUMB_WIDTH * i + SPACING;
			LEFT[i] = {
				Crumb: merge(CRUMB_BASE, { left: crumbLeft }),
				Icon: merge(ICON_BASE, { opacity: ICON_INACTIVE_OPACITY }),
				Separator: merge(SEPARATOR_BASE, { opacity: 1 }),
				Title: merge(TITLE_BASE, { left: crumbLeft, opacity: 0 }),
				RightItem: merge(RIGHT_BUTTON_BASE, { opacity: 0 }) };

			CENTER[i] = {
				Crumb: merge(CRUMB_BASE, { left: crumbLeft }),
				Icon: merge(ICON_BASE, { opacity: 1 }),
				Separator: merge(SEPARATOR_BASE, { opacity: 0 }),
				Title: merge(TITLE_BASE, {
					left: crumbLeft + ICON_WIDTH,
					opacity: 1 }),

				RightItem: merge(RIGHT_BUTTON_BASE, { opacity: 1 }) };

			var crumbRight = SCREEN_WIDTH - 100;
			RIGHT[i] = {
				Crumb: merge(CRUMB_BASE, { left: crumbRight }),
				Icon: merge(ICON_BASE, { opacity: 0 }),
				Separator: merge(SEPARATOR_BASE, { opacity: 0 }),
				Title: merge(TITLE_BASE, {
					left: crumbRight + ICON_WIDTH,
					opacity: 0 }),

				RightItem: merge(RIGHT_BUTTON_BASE, { opacity: 0 }) };
		}

		CENTER[0] = {
			Crumb: merge(CRUMB_BASE, { left: SCREEN_WIDTH / 4 }),
			Icon: merge(ICON_BASE, { opacity: 0 }),
			Separator: merge(SEPARATOR_BASE, { opacity: 0 }),
			Title: merge(FIRST_TITLE_BASE, { opacity: 1 }),
			RightItem: CENTER[0].RightItem };

		LEFT[0].Title = merge(FIRST_TITLE_BASE, { left: -SCREEN_WIDTH / 4, opacity: 0 });
		RIGHT[0].Title = merge(FIRST_TITLE_BASE, { opacity: 0 });

		var buildIndexSceneInterpolator = function buildIndexSceneInterpolator(startStyles, endStyles) {
			return {
				Crumb: buildStyleInterpolator({
					left: {
						type: 'linear',
						from: startStyles.Crumb.left,
						to: endStyles.Crumb.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				Icon: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Icon.opacity,
						to: endStyles.Icon.opacity,
						min: 0,
						max: 1 } }),

				Separator: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Separator.opacity,
						to: endStyles.Separator.opacity,
						min: 0,
						max: 1 } }),

				Title: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Title.opacity,
						to: endStyles.Title.opacity,
						min: 0,
						max: 1 },

					left: {
						type: 'linear',
						from: startStyles.Title.left,
						to: endStyles.Title.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				RightItem: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.RightItem.opacity,
						to: endStyles.RightItem.opacity,
						min: 0,
						max: 1,
						round: OPACITY_RATIO } }) };
		};

		var Interpolators = CENTER.map(function (_, ii) {
			return {

				RightToCenter: buildIndexSceneInterpolator(RIGHT[ii], CENTER[ii]),

				CenterToLeft: buildIndexSceneInterpolator(CENTER[ii], LEFT[ii]),

				RightToLeft: buildIndexSceneInterpolator(RIGHT[ii], LEFT[ii]) };
		});

		module.exports = {
			Interpolators: Interpolators,
			Left: LEFT,
			Center: CENTER,
			Right: RIGHT,
			IconWidth: ICON_WIDTH,
			IconHeight: NAV_BAR_HEIGHT,
			SeparatorWidth: SEPARATOR_WIDTH,
			SeparatorHeight: NAV_BAR_HEIGHT };
	},
	// Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);

		var buildStyleInterpolator = __inner_require__(118 /*Libraries/Utilities/buildStyleInterpolator.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var NAV_BAR_HEIGHT = 44;
		var STATUS_BAR_HEIGHT = 20;
		var NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

		var BASE_STYLES = {
			Title: {
				position: 'absolute',
				top: STATUS_BAR_HEIGHT,
				left: 0,
				right: 0,
				alignItems: 'center',
				height: NAV_BAR_HEIGHT,
				backgroundColor: 'transparent' },

			LeftButton: {
				position: 'absolute',
				top: STATUS_BAR_HEIGHT,
				left: 0,
				overflow: 'hidden',
				opacity: 1,
				height: NAV_BAR_HEIGHT,
				backgroundColor: 'transparent' },

			RightButton: {
				position: 'absolute',
				top: STATUS_BAR_HEIGHT,
				right: 0,
				overflow: 'hidden',
				opacity: 1,
				alignItems: 'flex-end',
				height: NAV_BAR_HEIGHT,
				backgroundColor: 'transparent' } };

		var Stages = {
			Left: {
				Title: merge(BASE_STYLES.Title, { left: -SCREEN_WIDTH / 2, opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { left: -SCREEN_WIDTH / 3, opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) },

			Center: {
				Title: merge(BASE_STYLES.Title, { left: 0, opacity: 1 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { left: 0, opacity: 1 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 1 }) },

			Right: {
				Title: merge(BASE_STYLES.Title, { left: SCREEN_WIDTH / 2, opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { left: 0, opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) } };

		var opacityRatio = 100;

		function buildSceneInterpolators(startStyles, endStyles) {
			return {
				Title: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Title.opacity,
						to: endStyles.Title.opacity,
						min: 0,
						max: 1 },

					left: {
						type: 'linear',
						from: startStyles.Title.left,
						to: endStyles.Title.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				LeftButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.LeftButton.opacity,
						to: endStyles.LeftButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.LeftButton.left,
						to: endStyles.LeftButton.left,
						min: 0,
						max: 1 } }),

				RightButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.RightButton.opacity,
						to: endStyles.RightButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.RightButton.left,
						to: endStyles.RightButton.left,
						min: 0,
						max: 1,
						extrapolate: true } }) };
		}

		var Interpolators = {

			RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),

			CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),

			RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left) };

		module.exports = {
			General: {
				NavBarHeight: NAV_BAR_HEIGHT,
				StatusBarHeight: STATUS_BAR_HEIGHT,
				TotalNavHeight: NAV_HEIGHT },

			Interpolators: Interpolators,
			Stages: Stages };
	},
	// Libraries/Utilities/buildStyleInterpolator.js
	function (__inner_require__, exports, module) {
		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);

		var X_DIM = keyOf({ x: null });
		var Y_DIM = keyOf({ y: null });
		var Z_DIM = keyOf({ z: null });
		var W_DIM = keyOf({ w: null });

		var TRANSFORM_ROTATE_NAME = keyOf({ transformRotateRadians: null });

		var ShouldAllocateReusableOperationVars = {
			transformRotateRadians: true,
			transformScale: true,
			transformTranslate: true };

		var InitialOperationField = {
			transformRotateRadians: [0, 0, 0, 1],
			transformTranslate: [0, 0, 0],
			transformScale: [1, 1, 1] };

		var ARGUMENT_NAMES_RE = /([^\s,]+)/g;

		var inline = function inline(func, replaceWithArgs) {
			var fnStr = func.toString();
			var parameterNames = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES_RE) || [];
			var replaceRegexStr = parameterNames.map(function (paramName) {
				return '\\b' + paramName + '\\b';
			}).join('|');
			var replaceRegex = new RegExp(replaceRegexStr, 'g');
			var fnBody = fnStr.substring(fnStr.indexOf('{') + 1, fnStr.lastIndexOf('}'));
			var newFnBody = fnBody.replace(replaceRegex, function (parameterName) {
				var indexInParameterNames = parameterNames.indexOf(parameterName);
				var replacementName = replaceWithArgs[indexInParameterNames];
				return replacementName;
			});
			return newFnBody.split('\n');
		};

		var MatrixOps = {
			unroll: function unroll(matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
				m0 = matVar[0];
				m1 = matVar[1];
				m2 = matVar[2];
				m3 = matVar[3];
				m4 = matVar[4];
				m5 = matVar[5];
				m6 = matVar[6];
				m7 = matVar[7];
				m8 = matVar[8];
				m9 = matVar[9];
				m10 = matVar[10];
				m11 = matVar[11];
				m12 = matVar[12];
				m13 = matVar[13];
				m14 = matVar[14];
				m15 = matVar[15];
			},

			matrixDiffers: function matrixDiffers(retVar, matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
				retVar = retVar || m0 !== matVar[0] || m1 !== matVar[1] || m2 !== matVar[2] || m3 !== matVar[3] || m4 !== matVar[4] || m5 !== matVar[5] || m6 !== matVar[6] || m7 !== matVar[7] || m8 !== matVar[8] || m9 !== matVar[9] || m10 !== matVar[10] || m11 !== matVar[11] || m12 !== matVar[12] || m13 !== matVar[13] || m14 !== matVar[14] || m15 !== matVar[15];
			},

			transformScale: function transformScale(matVar, opVar) {

				var x = opVar[0];
				var y = opVar[1];
				var z = opVar[2];
				matVar[0] = matVar[0] * x;
				matVar[1] = matVar[1] * x;
				matVar[2] = matVar[2] * x;
				matVar[3] = matVar[3] * x;
				matVar[4] = matVar[4] * y;
				matVar[5] = matVar[5] * y;
				matVar[6] = matVar[6] * y;
				matVar[7] = matVar[7] * y;
				matVar[8] = matVar[8] * z;
				matVar[9] = matVar[9] * z;
				matVar[10] = matVar[10] * z;
				matVar[11] = matVar[11] * z;
				matVar[12] = matVar[12];
				matVar[13] = matVar[13];
				matVar[14] = matVar[14];
				matVar[15] = matVar[15];
			},

			transformTranslate: function transformTranslate(matVar, opVar) {

				var x = opVar[0];
				var y = opVar[1];
				var z = opVar[2];
				matVar[12] = matVar[0] * x + matVar[4] * y + matVar[8] * z + matVar[12];
				matVar[13] = matVar[1] * x + matVar[5] * y + matVar[9] * z + matVar[13];
				matVar[14] = matVar[2] * x + matVar[6] * y + matVar[10] * z + matVar[14];
				matVar[15] = matVar[3] * x + matVar[7] * y + matVar[11] * z + matVar[15];
			},

			transformRotateRadians: function transformRotateRadians(matVar, q) {

				var xQuat = q[0],
				    yQuat = q[1],
				    zQuat = q[2],
				    wQuat = q[3];
				var x2Quat = xQuat + xQuat;
				var y2Quat = yQuat + yQuat;
				var z2Quat = zQuat + zQuat;
				var xxQuat = xQuat * x2Quat;
				var xyQuat = xQuat * y2Quat;
				var xzQuat = xQuat * z2Quat;
				var yyQuat = yQuat * y2Quat;
				var yzQuat = yQuat * z2Quat;
				var zzQuat = zQuat * z2Quat;
				var wxQuat = wQuat * x2Quat;
				var wyQuat = wQuat * y2Quat;
				var wzQuat = wQuat * z2Quat;

				var quatMat0 = 1 - (yyQuat + zzQuat);
				var quatMat1 = xyQuat + wzQuat;
				var quatMat2 = xzQuat - wyQuat;
				var quatMat4 = xyQuat - wzQuat;
				var quatMat5 = 1 - (xxQuat + zzQuat);
				var quatMat6 = yzQuat + wxQuat;
				var quatMat8 = xzQuat + wyQuat;
				var quatMat9 = yzQuat - wxQuat;
				var quatMat10 = 1 - (xxQuat + yyQuat);

				var a00 = matVar[0];
				var a01 = matVar[1];
				var a02 = matVar[2];
				var a03 = matVar[3];
				var a10 = matVar[4];
				var a11 = matVar[5];
				var a12 = matVar[6];
				var a13 = matVar[7];
				var a20 = matVar[8];
				var a21 = matVar[9];
				var a22 = matVar[10];
				var a23 = matVar[11];

				var b0 = quatMat0,
				    b1 = quatMat1,
				    b2 = quatMat2;
				matVar[0] = b0 * a00 + b1 * a10 + b2 * a20;
				matVar[1] = b0 * a01 + b1 * a11 + b2 * a21;
				matVar[2] = b0 * a02 + b1 * a12 + b2 * a22;
				matVar[3] = b0 * a03 + b1 * a13 + b2 * a23;
				b0 = quatMat4;b1 = quatMat5;b2 = quatMat6;
				matVar[4] = b0 * a00 + b1 * a10 + b2 * a20;
				matVar[5] = b0 * a01 + b1 * a11 + b2 * a21;
				matVar[6] = b0 * a02 + b1 * a12 + b2 * a22;
				matVar[7] = b0 * a03 + b1 * a13 + b2 * a23;
				b0 = quatMat8;b1 = quatMat9;b2 = quatMat10;
				matVar[8] = b0 * a00 + b1 * a10 + b2 * a20;
				matVar[9] = b0 * a01 + b1 * a11 + b2 * a21;
				matVar[10] = b0 * a02 + b1 * a12 + b2 * a22;
				matVar[11] = b0 * a03 + b1 * a13 + b2 * a23;
			} };

		var MatrixOpsInitial = {
			transformScale: function transformScale(matVar, opVar) {

				matVar[0] = opVar[0];
				matVar[1] = 0;
				matVar[2] = 0;
				matVar[3] = 0;
				matVar[4] = 0;
				matVar[5] = opVar[1];
				matVar[6] = 0;
				matVar[7] = 0;
				matVar[8] = 0;
				matVar[9] = 0;
				matVar[10] = opVar[2];
				matVar[11] = 0;
				matVar[12] = 0;
				matVar[13] = 0;
				matVar[14] = 0;
				matVar[15] = 1;
			},

			transformTranslate: function transformTranslate(matVar, opVar) {

				matVar[0] = 1;
				matVar[1] = 0;
				matVar[2] = 0;
				matVar[3] = 0;
				matVar[4] = 0;
				matVar[5] = 1;
				matVar[6] = 0;
				matVar[7] = 0;
				matVar[8] = 0;
				matVar[9] = 0;
				matVar[10] = 1;
				matVar[11] = 0;
				matVar[12] = opVar[0];
				matVar[13] = opVar[1];
				matVar[14] = opVar[2];
				matVar[15] = 1;
			},

			transformRotateRadians: function transformRotateRadians(matVar, q) {

				var xQuat = q[0],
				    yQuat = q[1],
				    zQuat = q[2],
				    wQuat = q[3];
				var x2Quat = xQuat + xQuat;
				var y2Quat = yQuat + yQuat;
				var z2Quat = zQuat + zQuat;
				var xxQuat = xQuat * x2Quat;
				var xyQuat = xQuat * y2Quat;
				var xzQuat = xQuat * z2Quat;
				var yyQuat = yQuat * y2Quat;
				var yzQuat = yQuat * z2Quat;
				var zzQuat = zQuat * z2Quat;
				var wxQuat = wQuat * x2Quat;
				var wyQuat = wQuat * y2Quat;
				var wzQuat = wQuat * z2Quat;

				var quatMat0 = 1 - (yyQuat + zzQuat);
				var quatMat1 = xyQuat + wzQuat;
				var quatMat2 = xzQuat - wyQuat;
				var quatMat4 = xyQuat - wzQuat;
				var quatMat5 = 1 - (xxQuat + zzQuat);
				var quatMat6 = yzQuat + wxQuat;
				var quatMat8 = xzQuat + wyQuat;
				var quatMat9 = yzQuat - wxQuat;
				var quatMat10 = 1 - (xxQuat + yyQuat);

				var b0 = quatMat0,
				    b1 = quatMat1,
				    b2 = quatMat2;
				matVar[0] = b0;
				matVar[1] = b1;
				matVar[2] = b2;
				matVar[3] = 0;
				b0 = quatMat4;b1 = quatMat5;b2 = quatMat6;
				matVar[4] = b0;
				matVar[5] = b1;
				matVar[6] = b2;
				matVar[7] = 0;
				b0 = quatMat8;b1 = quatMat9;b2 = quatMat10;
				matVar[8] = b0;
				matVar[9] = b1;
				matVar[10] = b2;
				matVar[11] = 0;
				matVar[12] = 0;
				matVar[13] = 0;
				matVar[14] = 0;
				matVar[15] = 1;
			} };

		var setNextValAndDetectChange = function setNextValAndDetectChange(name, tmpVarName) {
			return '  if (!didChange) {\n' + '    var prevVal = result.' + name + ';\n' + '    result.' + name + ' = ' + tmpVarName + ';\n' + '    didChange = didChange  || (' + tmpVarName + ' !== prevVal);\n' + '  } else {\n' + '    result.' + name + ' = ' + tmpVarName + ';\n' + '  }\n';
		};

		var computeNextValLinear = function computeNextValLinear(anim, from, to, tmpVarName) {
			var hasRoundRatio = 'round' in anim;
			var roundRatio = anim.round;
			var fn = '  ratio = (value - ' + anim.min + ') / ' + (anim.max - anim.min) + ';\n';
			if (!anim.extrapolate) {
				fn += '  ratio = ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio);\n';
			}

			var roundOpen = hasRoundRatio ? 'Math.round(' + roundRatio + ' * ' : '';
			var roundClose = hasRoundRatio ? ') / ' + roundRatio : '';
			fn += '  ' + tmpVarName + ' = ' + roundOpen + '(' + from + ' * (1 - ratio) + ' + to + ' * ratio)' + roundClose + ';\n';
			return fn;
		};

		var computeNextValLinearScalar = function computeNextValLinearScalar(anim) {
			return computeNextValLinear(anim, anim.from, anim.to, 'nextScalarVal');
		};

		var computeNextValConstant = function computeNextValConstant(anim) {
			var constantExpression = JSON.stringify(anim.value);
			return '  nextScalarVal = ' + constantExpression + ';\n';
		};

		var computeNextValStep = function computeNextValStep(anim) {
			return '  nextScalarVal = value >= ' + (anim.threshold + ' ? ' + anim.to + ' : ' + anim.from) + ';\n';
		};

		var computeNextValIdentity = function computeNextValIdentity(anim) {
			return '  nextScalarVal = value;\n';
		};

		var operationVar = function operationVar(name) {
			return name + 'ReuseOp';
		};

		var createReusableOperationVars = function createReusableOperationVars(anims) {
			var ret = '';
			for (var name in anims) {
				if (ShouldAllocateReusableOperationVars[name]) {
					ret += 'var ' + operationVar(name) + ' = [];\n';
				}
			}
			return ret;
		};

		var newlines = function newlines(statements) {
			return '\n' + statements.join('\n') + '\n';
		};

		var computeNextMatrixOperationField = function computeNextMatrixOperationField(anim, name, dimension, index) {
			var fieldAccess = operationVar(name) + '[' + index + ']';
			if (anim.from[dimension] !== undefined && anim.to[dimension] !== undefined) {
				return '  ' + anim.from[dimension] !== anim.to[dimension] ? computeNextValLinear(anim, anim.from[dimension], anim.to[dimension], fieldAccess) : fieldAccess + ' = ' + anim.from[dimension] + ';';
			} else {
				return '  ' + fieldAccess + ' = ' + InitialOperationField[name][index] + ';';
			}
		};

		var unrolledVars = [];
		for (var varIndex = 0; varIndex < 16; varIndex++) {
			unrolledVars.push('m' + varIndex);
		}
		var setNextMatrixAndDetectChange = function setNextMatrixAndDetectChange(orderedMatrixOperations) {
			var fn = ['  var transformMatrix = result.transformMatrix !== undefined ? ' + 'result.transformMatrix : (result.transformMatrix = []);'];

			fn.push.apply(fn, inline(MatrixOps.unroll, ['transformMatrix'].concat(unrolledVars)));

			for (var i = 0; i < orderedMatrixOperations.length; i++) {
				var opName = orderedMatrixOperations[i];
				if (i === 0) {
					fn.push.apply(fn, inline(MatrixOpsInitial[opName], ['transformMatrix', operationVar(opName)]));
				} else {
					fn.push.apply(fn, inline(MatrixOps[opName], ['transformMatrix', operationVar(opName)]));
				}
			}
			fn.push.apply(fn, inline(MatrixOps.matrixDiffers, ['didChange', 'transformMatrix'].concat(unrolledVars)));

			return fn;
		};

		var InterpolateMatrix = {
			transformTranslate: true,
			transformRotateRadians: true,
			transformScale: true };

		var createFunctionString = function createFunctionString(anims) {

			var orderedMatrixOperations = [];

			var fn = 'return (function() {\n';
			fn += createReusableOperationVars(anims);
			fn += 'return function(result, value) {\n';
			fn += '  var didChange = false;\n';
			fn += '  var nextScalarVal;\n';
			fn += '  var ratio;\n';

			for (var name in anims) {
				var anim = anims[name];
				if (anim.type === 'linear') {
					if (InterpolateMatrix[name]) {
						orderedMatrixOperations.push(name);
						var setOperations = [computeNextMatrixOperationField(anim, name, X_DIM, 0), computeNextMatrixOperationField(anim, name, Y_DIM, 1), computeNextMatrixOperationField(anim, name, Z_DIM, 2)];

						if (name === TRANSFORM_ROTATE_NAME) {
							setOperations.push(computeNextMatrixOperationField(anim, name, W_DIM, 3));
						}
						fn += newlines(setOperations);
					} else {
						fn += computeNextValLinearScalar(anim, 'nextScalarVal');
						fn += setNextValAndDetectChange(name, 'nextScalarVal');
					}
				} else if (anim.type === 'constant') {
					fn += computeNextValConstant(anim);
					fn += setNextValAndDetectChange(name, 'nextScalarVal');
				} else if (anim.type === 'step') {
					fn += computeNextValStep(anim);
					fn += setNextValAndDetectChange(name, 'nextScalarVal');
				} else if (anim.type === 'identity') {
					fn += computeNextValIdentity(anim);
					fn += setNextValAndDetectChange(name, 'nextScalarVal');
				}
			}
			if (orderedMatrixOperations.length) {
				fn += newlines(setNextMatrixAndDetectChange(orderedMatrixOperations));
			}
			fn += '  return didChange;\n';
			fn += '};\n';
			fn += '})()';
			return fn;
		};

		var buildStyleInterpolator = function buildStyleInterpolator(anims) {

			var interpolator = null;
			function lazyStyleInterpolator(result, value) {
				if (interpolator === null) {
					interpolator = Function(createFunctionString(anims))();
				}
				return interpolator(result, value);
			}
			return lazyStyleInterpolator;
		};

		module.exports = buildStyleInterpolator;
	},
	// Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesAndroid.js
	function (__inner_require__, exports, module) {
		var buildStyleInterpolator = __inner_require__(118 /*Libraries/Utilities/buildStyleInterpolator.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		var NAV_BAR_HEIGHT = 56;
		var TITLE_LEFT = 72;
		var BUTTON_SIZE = 24;
		var TOUCH_TARGT_SIZE = 48;
		var BUTTON_HORIZONTAL_MARGIN = 16;

		var BUTTON_EFFECTIVE_MARGIN = BUTTON_HORIZONTAL_MARGIN - (TOUCH_TARGT_SIZE - BUTTON_SIZE) / 2;
		var NAV_ELEMENT_HEIGHT = NAV_BAR_HEIGHT;

		var BASE_STYLES = {
			Title: {
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				alignItems: 'flex-start',
				height: NAV_ELEMENT_HEIGHT,
				backgroundColor: 'transparent',
				marginLeft: TITLE_LEFT },

			LeftButton: {
				position: 'absolute',
				top: 0,
				left: BUTTON_EFFECTIVE_MARGIN,
				overflow: 'hidden',
				height: NAV_ELEMENT_HEIGHT,
				backgroundColor: 'transparent' },

			RightButton: {
				position: 'absolute',
				top: 0,
				right: BUTTON_EFFECTIVE_MARGIN,
				overflow: 'hidden',
				alignItems: 'flex-end',
				height: NAV_ELEMENT_HEIGHT,
				backgroundColor: 'transparent' } };

		var Stages = {
			Left: {
				Title: merge(BASE_STYLES.Title, { opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) },

			Center: {
				Title: merge(BASE_STYLES.Title, { opacity: 1 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { opacity: 1 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 1 }) },

			Right: {
				Title: merge(BASE_STYLES.Title, { opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) } };

		var opacityRatio = 100;

		function buildSceneInterpolators(startStyles, endStyles) {
			return {
				Title: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Title.opacity,
						to: endStyles.Title.opacity,
						min: 0,
						max: 1 },

					left: {
						type: 'linear',
						from: startStyles.Title.left,
						to: endStyles.Title.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				LeftButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.LeftButton.opacity,
						to: endStyles.LeftButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.LeftButton.left,
						to: endStyles.LeftButton.left,
						min: 0,
						max: 1 } }),

				RightButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.RightButton.opacity,
						to: endStyles.RightButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.RightButton.left,
						to: endStyles.RightButton.left,
						min: 0,
						max: 1,
						extrapolate: true } }) };
		}

		var Interpolators = {

			RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),

			CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),

			RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left) };

		module.exports = {
			General: {
				NavBarHeight: NAV_BAR_HEIGHT,
				StatusBarHeight: 0,
				TotalNavHeight: NAV_BAR_HEIGHT },

			Interpolators: Interpolators,
			Stages: Stages };
	},
	// Libraries/CustomComponents/Navigator/NavigatorNavigationBar.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var NavigatorNavigationBarStylesAndroid = __inner_require__(119 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesAndroid.js*/);
		var NavigatorNavigationBarStylesIOS = __inner_require__(117 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var guid = require('react-native@0.21/Libraries/vendor/core/guid.js');var _require = require('immutable@3/dist/immutable.js'),
		    Map = _require.Map;

		var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];

		var NavigatorNavigationBarStyles = Platform.OS === 'android' ? NavigatorNavigationBarStylesAndroid : NavigatorNavigationBarStylesIOS;

		var navStatePresentedIndex = function navStatePresentedIndex(navState) {
			if (navState.presentedIndex !== undefined) {
				return navState.presentedIndex;
			}

			return navState.observedTopOfStack;
		};

		var NavigatorNavigationBar = React.createClass({ displayName: 'NavigatorNavigationBar',

			propTypes: {
				navigator: React.PropTypes.object,
				routeMapper: React.PropTypes.shape({
					Title: React.PropTypes.func.isRequired,
					LeftButton: React.PropTypes.func.isRequired,
					RightButton: React.PropTypes.func.isRequired }).isRequired,
				navState: React.PropTypes.shape({
					routeStack: React.PropTypes.arrayOf(React.PropTypes.object),
					presentedIndex: React.PropTypes.number }),

				navigationStyles: React.PropTypes.object,
				style: View.propTypes.style },

			statics: {
				Styles: NavigatorNavigationBarStyles,
				StylesAndroid: NavigatorNavigationBarStylesAndroid,
				StylesIOS: NavigatorNavigationBarStylesIOS },

			getDefaultProps: function getDefaultProps() {
				return {
					navigationStyles: NavigatorNavigationBarStyles };
			},

			componentWillMount: function componentWillMount() {
				this._reset();
			},

			immediatelyRefresh: function immediatelyRefresh() {
				this._reset();
				this.forceUpdate();
			},

			_reset: function _reset() {
				var _this = this;
				this._key = guid();
				this._reusableProps = {};
				this._components = {};
				this._descriptors = {};

				COMPONENT_NAMES.forEach(function (componentName) {
					_this._components[componentName] = new Map();
					_this._descriptors[componentName] = new Map();
				});
			},

			_getReusableProps: function _getReusableProps(componentName, index) {
				var propStack = this._reusableProps[componentName];
				if (!propStack) {
					propStack = this._reusableProps[componentName] = [];
				}
				var props = propStack[index];
				if (!props) {
					props = propStack[index] = { style: {} };
				}
				return props;
			},

			_updateIndexProgress: function _updateIndexProgress(progress, index, fromIndex, toIndex) {
				var amount = toIndex > fromIndex ? progress : 1 - progress;
				var oldDistToCenter = index - fromIndex;
				var newDistToCenter = index - toIndex;
				var interpolate;
				if (oldDistToCenter > 0 && newDistToCenter === 0 || newDistToCenter > 0 && oldDistToCenter === 0) {
					interpolate = this.props.navigationStyles.Interpolators.RightToCenter;
				} else if (oldDistToCenter < 0 && newDistToCenter === 0 || newDistToCenter < 0 && oldDistToCenter === 0) {
					interpolate = this.props.navigationStyles.Interpolators.CenterToLeft;
				} else if (oldDistToCenter === newDistToCenter) {
					interpolate = this.props.navigationStyles.Interpolators.RightToCenter;
				} else {
					interpolate = this.props.navigationStyles.Interpolators.RightToLeft;
				}

				COMPONENT_NAMES.forEach(function (componentName) {
					var component = this._components[componentName].get(this.props.navState.routeStack[index]);
					var props = this._getReusableProps(componentName, index);
					if (component && interpolate[componentName](props.style, amount)) {
						component.setNativeProps(props);
					}
				}, this);
			},

			updateProgress: function updateProgress(progress, fromIndex, toIndex) {
				var max = Math.max(fromIndex, toIndex);
				var min = Math.min(fromIndex, toIndex);
				for (var index = min; index <= max; index++) {
					this._updateIndexProgress(progress, index, fromIndex, toIndex);
				}
			},

			render: function render() {
				var _this2 = this;
				var navBarStyle = {
					height: this.props.navigationStyles.General.TotalNavHeight };

				var navState = this.props.navState;
				var components = navState.routeStack.map(function (route, index) {
					return COMPONENT_NAMES.map(function (componentName) {
						return _this2._getComponent(componentName, route, index);
					});
				});

				return React.createElement(View, {
					key: this._key,
					style: [styles.navBarContainer, navBarStyle, this.props.style] }, components);
			},

			_getComponent: function _getComponent(componentName, route, index) {
				var _this3 = this;
				if (this._descriptors[componentName].includes(route)) {
					return this._descriptors[componentName].get(route);
				}

				var rendered = null;

				var content = this.props.routeMapper[componentName](this.props.navState.routeStack[index], this.props.navigator, index, this.props.navState);

				if (!content) {
					return null;
				}

				var initialStage = index === navStatePresentedIndex(this.props.navState) ? this.props.navigationStyles.Stages.Center : this.props.navigationStyles.Stages.Left;
				rendered = React.createElement(View, {
					ref: function ref(_ref) {
						_this3._components[componentName] = _this3._components[componentName].set(route, _ref);
					},
					pointerEvents: 'box-none',
					style: initialStage[componentName] }, content);

				this._descriptors[componentName] = this._descriptors[componentName].set(route, rendered);
				return rendered;
			} });

		var styles = StyleSheet.create({
			navBarContainer: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				backgroundColor: 'transparent' } });

		module.exports = NavigatorNavigationBar;
	},
	// Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
		var PixelRatio = __inner_require__(67 /*Libraries/Utilities/PixelRatio.js*/);

		var buildStyleInterpolator = __inner_require__(118 /*Libraries/Utilities/buildStyleInterpolator.js*/);

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var SCREEN_HEIGHT = Dimensions.get('window').height;

		var FadeToTheLeft = {

			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: -Math.round(Dimensions.get('window').width * 0.3), y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			transformScale: {
				from: { x: 1, y: 1, z: 1 },
				to: { x: 0.95, y: 0.95, z: 1 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			opacity: {
				from: 1,
				to: 0.3,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 },

			translateX: {
				from: 0,
				to: -Math.round(Dimensions.get('window').width * 0.3),
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			scaleX: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			scaleY: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true } };

		var FadeToTheRight = babelHelpers.extends({}, FadeToTheLeft, {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: Math.round(SCREEN_WIDTH * 0.3), y: 0, z: 0 } },

			translateX: {
				from: 0,
				to: Math.round(SCREEN_WIDTH * 0.3) } });

		var FadeIn = {
			opacity: {
				from: 0,
				to: 1,
				min: 0.5,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 } };

		var FadeOut = {
			opacity: {
				from: 1,
				to: 0,
				min: 0,
				max: 0.5,
				type: 'linear',
				extrapolate: false,
				round: 100 } };

		var ToTheLeft = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: -Dimensions.get('window').width, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateX: {
				from: 0,
				to: -Dimensions.get('window').width,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } };

		var ToTheUp = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: 0, y: -Dimensions.get('window').height, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateY: {
				from: 0,
				to: -Dimensions.get('window').height,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } };

		var ToTheDown = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: 0, y: Dimensions.get('window').height, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateY: {
				from: 0,
				to: Dimensions.get('window').height,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } };

		var FromTheRight = {
			opacity: {
				value: 1.0,
				type: 'constant' },

			transformTranslate: {
				from: { x: Dimensions.get('window').width, y: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			translateX: {
				from: Dimensions.get('window').width,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			scaleX: {
				value: 1,
				type: 'constant' },

			scaleY: {
				value: 1,
				type: 'constant' } };

		var FromTheLeft = babelHelpers.extends({}, FromTheRight, {
			transformTranslate: {
				from: { x: -SCREEN_WIDTH, y: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			translateX: {
				from: -SCREEN_WIDTH,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } });

		var FromTheDown = babelHelpers.extends({}, FromTheRight, {
			transformTranslate: {
				from: { y: SCREEN_HEIGHT, x: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			translateY: {
				from: SCREEN_HEIGHT,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } });

		var FromTheTop = babelHelpers.extends({}, FromTheRight, {
			transformTranslate: {
				from: { y: -SCREEN_HEIGHT, x: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			translateY: {
				from: -SCREEN_HEIGHT,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } });

		var ToTheBack = {

			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			transformScale: {
				from: { x: 1, y: 1, z: 1 },
				to: { x: 0.95, y: 0.95, z: 1 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			opacity: {
				from: 1,
				to: 0.3,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 },

			scaleX: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			scaleY: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true } };

		var FromTheFront = {
			opacity: {
				value: 1.0,
				type: 'constant' },

			transformTranslate: {
				from: { x: 0, y: Dimensions.get('window').height, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			translateY: {
				from: Dimensions.get('window').height,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			scaleX: {
				value: 1,
				type: 'constant' },

			scaleY: {
				value: 1,
				type: 'constant' } };

		var ToTheBackAndroid = {
			opacity: {
				value: 1,
				type: 'constant' } };

		var FromTheFrontAndroid = {
			opacity: {
				from: 0,
				to: 1,
				min: 0.5,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 },

			transformTranslate: {
				from: { x: 0, y: 100, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() },

			translateY: {
				from: 100,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PixelRatio.get() } };

		var BaseOverswipeConfig = {
			frictionConstant: 1,
			frictionByDistance: 1.5 };

		var BaseLeftToRightGesture = {

			isDetachable: false,

			gestureDetectMovement: 2,

			notMoving: 0.3,

			directionRatio: 0.66,

			snapVelocity: 2,

			edgeHitWidth: 30,

			stillCompletionRatio: 3 / 5,

			fullDistance: SCREEN_WIDTH,

			direction: 'left-to-right' };

		var BaseRightToLeftGesture = babelHelpers.extends({}, BaseLeftToRightGesture, {
			direction: 'right-to-left' });

		var BaseDownUpGesture = babelHelpers.extends({}, BaseLeftToRightGesture, {
			fullDistance: SCREEN_HEIGHT,
			direction: 'down-to-up' });

		var BaseUpDownGesture = babelHelpers.extends({}, BaseLeftToRightGesture, {
			fullDistance: SCREEN_HEIGHT,
			direction: 'up-to-down' });

		var BaseConfig = {

			gestures: {
				pop: BaseLeftToRightGesture },

			springFriction: 26,
			springTension: 200,

			defaultTransitionVelocity: 1.5,

			animationInterpolators: {
				into: buildStyleInterpolator(FromTheRight),
				out: buildStyleInterpolator(FadeToTheLeft) } };

		var NavigatorSceneConfigs = {
			PushFromRight: babelHelpers.extends({}, BaseConfig),

			FloatFromRight: babelHelpers.extends({}, BaseConfig),

			FloatFromLeft: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					pop: BaseRightToLeftGesture },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheLeft),
					out: buildStyleInterpolator(FadeToTheRight) } }),

			FloatFromBottom: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					pop: babelHelpers.extends({}, BaseLeftToRightGesture, {
						edgeHitWidth: 150,
						direction: 'top-to-bottom',
						fullDistance: SCREEN_HEIGHT }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheFront),
					out: buildStyleInterpolator(ToTheBack) } }),

			FloatFromBottomAndroid: babelHelpers.extends({}, BaseConfig, {
				gestures: null,
				defaultTransitionVelocity: 3,
				springFriction: 20,
				animationInterpolators: {
					into: buildStyleInterpolator(FromTheFrontAndroid),
					out: buildStyleInterpolator(ToTheBackAndroid) } }),

			FadeAndroid: babelHelpers.extends({}, BaseConfig, {
				gestures: null,
				animationInterpolators: {
					into: buildStyleInterpolator(FadeIn),
					out: buildStyleInterpolator(FadeOut) } }),

			HorizontalSwipeJump: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, BaseLeftToRightGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, BaseRightToLeftGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheRight),
					out: buildStyleInterpolator(ToTheLeft) } }),

			HorizontalSwipeJumpFromRight: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, BaseRightToLeftGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, BaseLeftToRightGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					pop: BaseRightToLeftGesture },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheLeft),
					out: buildStyleInterpolator(FadeToTheRight) } }),

			VerticalUpSwipeJump: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, BaseDownUpGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, BaseDownUpGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheDown),
					out: buildStyleInterpolator(ToTheUp) } }),

			VerticalDownSwipeJump: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, BaseUpDownGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, BaseUpDownGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheTop),
					out: buildStyleInterpolator(ToTheDown) } }) };

		module.exports = NavigatorSceneConfigs;
	},
	// Libraries/vendor/react/browser/eventPlugins/PanResponder.js
	function (__inner_require__, exports, module) {
		var TouchHistoryMath = __inner_require__(123 /*Libraries/vendor/react/browser/eventPlugins/TouchHistoryMath.js*/);

		var currentCentroidXOfTouchesChangedAfter = TouchHistoryMath.currentCentroidXOfTouchesChangedAfter;
		var currentCentroidYOfTouchesChangedAfter = TouchHistoryMath.currentCentroidYOfTouchesChangedAfter;
		var previousCentroidXOfTouchesChangedAfter = TouchHistoryMath.previousCentroidXOfTouchesChangedAfter;
		var previousCentroidYOfTouchesChangedAfter = TouchHistoryMath.previousCentroidYOfTouchesChangedAfter;
		var currentCentroidX = TouchHistoryMath.currentCentroidX;
		var currentCentroidY = TouchHistoryMath.currentCentroidY;

		var PanResponder = {

			_initializeGestureState: function _initializeGestureState(gestureState) {
				gestureState.moveX = 0;
				gestureState.moveY = 0;
				gestureState.x0 = 0;
				gestureState.y0 = 0;
				gestureState.dx = 0;
				gestureState.dy = 0;
				gestureState.vx = 0;
				gestureState.vy = 0;
				gestureState.numberActiveTouches = 0;

				gestureState._accountsForMovesUpTo = 0;
			},

			_updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
				gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
				gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);

				gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);

				var movedAfter = gestureState._accountsForMovesUpTo;
				var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
				var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
				var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
				var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
				var nextDX = gestureState.dx + (x - prevX);
				var nextDY = gestureState.dy + (y - prevY);

				var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
				gestureState.vx = (nextDX - gestureState.dx) / dt;
				gestureState.vy = (nextDY - gestureState.dy) / dt;

				gestureState.dx = nextDX;
				gestureState.dy = nextDY;
				gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
			},

			create: function create(config) {
				var gestureState = {

					stateID: Math.random() };

				PanResponder._initializeGestureState(gestureState);
				var panHandlers = {
					onStartShouldSetResponder: function onStartShouldSetResponder(e) {
						return config.onStartShouldSetPanResponder === undefined ? false : config.onStartShouldSetPanResponder(e, gestureState);
					},
					onMoveShouldSetResponder: function onMoveShouldSetResponder(e) {
						return config.onMoveShouldSetPanResponder === undefined ? false : config.onMoveShouldSetPanResponder(e, gestureState);
					},
					onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(e) {

						if (e.nativeEvent.touches.length === 1) {
							PanResponder._initializeGestureState(gestureState);
						}
						gestureState.numberActiveTouches = e.touchHistory.numberActiveTouches;
						return config.onStartShouldSetPanResponderCapture !== undefined ? config.onStartShouldSetPanResponderCapture(e, gestureState) : false;
					},

					onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(e) {
						var touchHistory = e.touchHistory;

						if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
							return false;
						}
						PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
						return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(e, gestureState) : false;
					},

					onResponderGrant: function onResponderGrant(e) {
						gestureState.x0 = currentCentroidX(e.touchHistory);
						gestureState.y0 = currentCentroidY(e.touchHistory);
						gestureState.dx = 0;
						gestureState.dy = 0;
						config.onPanResponderGrant && config.onPanResponderGrant(e, gestureState);

						return config.onShouldBlockNativeResponder === undefined ? true : config.onShouldBlockNativeResponder();
					},

					onResponderReject: function onResponderReject(e) {
						config.onPanResponderReject && config.onPanResponderReject(e, gestureState);
					},

					onResponderRelease: function onResponderRelease(e) {
						config.onPanResponderRelease && config.onPanResponderRelease(e, gestureState);
						PanResponder._initializeGestureState(gestureState);
					},

					onResponderStart: function onResponderStart(e) {
						var touchHistory = e.touchHistory;
						gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
						config.onPanResponderStart && config.onPanResponderStart(e, gestureState);
					},

					onResponderMove: function onResponderMove(e) {
						var touchHistory = e.touchHistory;

						if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
							return;
						}

						PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
						config.onPanResponderMove && config.onPanResponderMove(e, gestureState);
					},

					onResponderEnd: function onResponderEnd(e) {
						var touchHistory = e.touchHistory;
						gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
						config.onPanResponderEnd && config.onPanResponderEnd(e, gestureState);
					},

					onResponderTerminate: function onResponderTerminate(e) {
						config.onPanResponderTerminate && config.onPanResponderTerminate(e, gestureState);
						PanResponder._initializeGestureState(gestureState);
					},

					onResponderTerminationRequest: function onResponderTerminationRequest(e) {
						return config.onPanResponderTerminationRequest === undefined ? true : config.onPanResponderTerminationRequest(e, gestureState);
					} };

				return { panHandlers: panHandlers };
			} };

		module.exports = PanResponder;
	},
	// Libraries/vendor/react/browser/eventPlugins/TouchHistoryMath.js
	function (__inner_require__, exports, module) {
		var TouchHistoryMath = {

			centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
				var touchBank = touchHistory.touchBank;
				var total = 0;
				var count = 0;

				var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;

				if (oneTouchData !== null) {
					if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
						total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
						count = 1;
					}
				} else {
					for (var i = 0; i < touchBank.length; i++) {
						var touchTrack = touchBank[i];
						if (touchTrack !== null && touchTrack !== undefined && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
							var toAdd;
							if (ofCurrent && isXAxis) {
								toAdd = touchTrack.currentPageX;
							} else if (ofCurrent && !isXAxis) {
								toAdd = touchTrack.currentPageY;
							} else if (!ofCurrent && isXAxis) {
								toAdd = touchTrack.previousPageX;
							} else {
								toAdd = touchTrack.previousPageY;
							}
							total += toAdd;
							count++;
						}
					}
				}
				return count > 0 ? total / count : TouchHistoryMath.noCentroid;
			},

			currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
				return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, true);
			},

			currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
				return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, true);
			},

			previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
				return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, false);
			},

			previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
				return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, false);
			},

			currentCentroidX: function currentCentroidX(touchHistory) {
				return TouchHistoryMath.centroidDimension(touchHistory, 0, true, true);
			},

			currentCentroidY: function currentCentroidY(touchHistory) {
				return TouchHistoryMath.centroidDimension(touchHistory, 0, false, true);
			},

			noCentroid: -1 };

		module.exports = TouchHistoryMath;
	},
	// Libraries/vendor/react/core/clamp.js
	function (__inner_require__, exports, module) {
		function clamp(min, value, max) {
			if (value < min) {
				return min;
			}
			if (value > max) {
				return max;
			}
			return value;
		}

		module.exports = clamp;
	},
	// Libraries/Components/Navigation/NavigatorIOS.ios.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var NavigationContext = __inner_require__(111 /*Libraries/CustomComponents/Navigator/Navigation/NavigationContext.js*/);
		var RCTNavigatorManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').NavigatorManager;
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StaticContainer = __inner_require__(126 /*Libraries/Components/StaticContainer.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var logError = require('react-native@0.21/Libraries/Utilities/logError.js');
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);
		var resolveAssetSource = __inner_require__(79 /*Libraries/Image/resolveAssetSource.js*/);

		var TRANSITIONER_REF = 'transitionerRef';

		var PropTypes = React.PropTypes;

		var __uid = 0;
		function getuid() {
			return __uid++;
		}

		var NavigatorTransitionerIOS = React.createClass({ displayName: 'NavigatorTransitionerIOS',
			requestSchedulingNavigation: function requestSchedulingNavigation(cb) {
				RCTNavigatorManager.requestSchedulingJavaScriptNavigation(React.findNodeHandle(this), logError, cb);
			},

			render: function render() {
				return React.createElement(RCTNavigator, this.props);
			} });

		var NavigatorIOS = React.createClass({ displayName: 'NavigatorIOS',

			propTypes: {

				initialRoute: PropTypes.shape({

					component: PropTypes.func.isRequired,

					title: PropTypes.string.isRequired,

					passProps: PropTypes.object,

					backButtonIcon: Image.propTypes.source,

					backButtonTitle: PropTypes.string,

					leftButtonIcon: Image.propTypes.source,

					leftButtonTitle: PropTypes.string,

					onLeftButtonPress: PropTypes.func,

					rightButtonIcon: Image.propTypes.source,

					rightButtonTitle: PropTypes.string,

					onRightButtonPress: PropTypes.func,

					wrapperStyle: View.propTypes.style,

					navigationBarHidden: PropTypes.bool,

					shadowHidden: PropTypes.bool,

					tintColor: PropTypes.string,

					barTintColor: PropTypes.string,

					titleTextColor: PropTypes.string,

					translucent: PropTypes.bool }).isRequired,

				navigationBarHidden: PropTypes.bool,

				shadowHidden: PropTypes.bool,

				itemWrapperStyle: View.propTypes.style,

				tintColor: PropTypes.string,

				barTintColor: PropTypes.string,

				titleTextColor: PropTypes.string,

				translucent: PropTypes.bool },

			navigator: undefined,
			navigationContext: new NavigationContext(),

			componentWillMount: function componentWillMount() {

				this.navigator = {
					push: this.push,
					pop: this.pop,
					popN: this.popN,
					replace: this.replace,
					replacePrevious: this.replacePrevious,
					replacePreviousAndPop: this.replacePreviousAndPop,
					resetTo: this.resetTo,
					popToRoute: this.popToRoute,
					popToTop: this.popToTop,
					navigationContext: this.navigationContext };

				this._emitWillFocus(this.state.routeStack[this.state.observedTopOfStack]);
			},

			componentDidMount: function componentDidMount() {
				this._emitDidFocus(this.state.routeStack[this.state.observedTopOfStack]);
			},

			componentWillUnmount: function componentWillUnmount() {
				this.navigationContext.dispose();
				this.navigationContext = new NavigationContext();
			},

			getDefaultProps: function getDefaultProps() {
				return {
					translucent: true };
			},

			getInitialState: function getInitialState() {
				return {
					idStack: [getuid()],
					routeStack: [this.props.initialRoute],

					requestedTopOfStack: 0,

					observedTopOfStack: 0,
					progress: 1,
					fromIndex: 0,
					toIndex: 0,

					makingNavigatorRequest: false,

					updatingAllIndicesAtOrBeyond: 0 };
			},

			_toFocusOnNavigationComplete: undefined,

			_handleFocusRequest: function _handleFocusRequest(item) {
				if (this.state.makingNavigatorRequest) {
					this._toFocusOnNavigationComplete = item;
				} else {
					this._getFocusEmitter().emit('focus', item);
				}
			},

			_focusEmitter: undefined,

			_getFocusEmitter: function _getFocusEmitter() {

				var focusEmitter = this._focusEmitter;
				if (!focusEmitter) {
					focusEmitter = new EventEmitter();
					this._focusEmitter = focusEmitter;
				}
				return focusEmitter;
			},

			getChildContext: function getChildContext() {
				return {
					onFocusRequested: this._handleFocusRequest,
					focusEmitter: this._getFocusEmitter() };
			},

			childContextTypes: {
				onFocusRequested: React.PropTypes.func,
				focusEmitter: React.PropTypes.instanceOf(EventEmitter) },

			_tryLockNavigator: function _tryLockNavigator(cb) {
				this.refs[TRANSITIONER_REF].requestSchedulingNavigation(function (acquiredLock) {
					return acquiredLock && cb();
				});
			},

			_handleNavigatorStackChanged: function _handleNavigatorStackChanged(e) {
				var newObservedTopOfStack = e.nativeEvent.stackLength - 1;
				this._emitDidFocus(this.state.routeStack[newObservedTopOfStack]);

				invariant(newObservedTopOfStack <= this.state.requestedTopOfStack, 'No navigator item should be pushed without JS knowing about it %s %s', newObservedTopOfStack, this.state.requestedTopOfStack);

				var wasWaitingForConfirmation = this.state.requestedTopOfStack !== this.state.observedTopOfStack;
				if (wasWaitingForConfirmation) {
					invariant(newObservedTopOfStack === this.state.requestedTopOfStack, 'If waiting for observedTopOfStack to reach requestedTopOfStack, ' + 'the only valid observedTopOfStack should be requestedTopOfStack.');
				}

				var nextState = {
					observedTopOfStack: newObservedTopOfStack,
					makingNavigatorRequest: false,
					updatingAllIndicesAtOrBeyond: null,
					progress: 1,
					toIndex: newObservedTopOfStack,
					fromIndex: newObservedTopOfStack };

				this.setState(nextState, this._eliminateUnneededChildren);
			},

			_eliminateUnneededChildren: function _eliminateUnneededChildren() {

				var updatingAllIndicesAtOrBeyond = this.state.routeStack.length > this.state.observedTopOfStack + 1 ? this.state.observedTopOfStack + 1 : null;
				this.setState({
					idStack: this.state.idStack.slice(0, this.state.observedTopOfStack + 1),
					routeStack: this.state.routeStack.slice(0, this.state.observedTopOfStack + 1),

					requestedTopOfStack: this.state.observedTopOfStack,
					makingNavigatorRequest: true,
					updatingAllIndicesAtOrBeyond: updatingAllIndicesAtOrBeyond });
			},

			_emitDidFocus: function _emitDidFocus(route) {
				this.navigationContext.emit('didfocus', { route: route });
			},

			_emitWillFocus: function _emitWillFocus(route) {
				this.navigationContext.emit('willfocus', { route: route });
			},

			push: function push(route) {
				var _this = this;
				invariant(!!route, 'Must supply route to push');

				if (this.state.requestedTopOfStack === this.state.observedTopOfStack) {
					this._tryLockNavigator(function () {
						_this._emitWillFocus(route);

						var nextStack = _this.state.routeStack.concat([route]);
						var nextIDStack = _this.state.idStack.concat([getuid()]);
						_this.setState({

							idStack: nextIDStack,
							routeStack: nextStack,
							requestedTopOfStack: nextStack.length - 1,
							makingNavigatorRequest: true,
							updatingAllIndicesAtOrBeyond: nextStack.length - 1 });
					});
				}
			},

			popN: function popN(n) {
				var _this2 = this;
				if (n === 0) {
					return;
				}

				if (this.state.requestedTopOfStack === this.state.observedTopOfStack) {
					if (this.state.requestedTopOfStack > 0) {
						this._tryLockNavigator(function () {
							var newRequestedTopOfStack = _this2.state.requestedTopOfStack - n;
							invariant(newRequestedTopOfStack >= 0, 'Cannot pop below 0');
							_this2._emitWillFocus(_this2.state.routeStack[newRequestedTopOfStack]);
							_this2.setState({
								requestedTopOfStack: newRequestedTopOfStack,
								makingNavigatorRequest: true,
								updatingAllIndicesAtOrBeyond: _this2.state.requestedTopOfStack - n });
						});
					}
				}
			},

			pop: function pop() {
				this.popN(1);
			},

			replaceAtIndex: function replaceAtIndex(route, index) {
				invariant(!!route, 'Must supply route to replace');
				if (index < 0) {
					index += this.state.routeStack.length;
				}

				if (this.state.routeStack.length <= index) {
					return;
				}

				var nextIDStack = this.state.idStack.slice();
				var nextRouteStack = this.state.routeStack.slice();
				nextIDStack[index] = getuid();
				nextRouteStack[index] = route;

				this.setState({
					idStack: nextIDStack,
					routeStack: nextRouteStack,
					makingNavigatorRequest: false,
					updatingAllIndicesAtOrBeyond: index });

				this._emitWillFocus(route);
				this._emitDidFocus(route);
			},

			replace: function replace(route) {
				this.replaceAtIndex(route, -1);
			},

			replacePrevious: function replacePrevious(route) {
				this.replaceAtIndex(route, -2);
			},

			popToTop: function popToTop() {
				this.popToRoute(this.state.routeStack[0]);
			},

			popToRoute: function popToRoute(route) {
				var indexOfRoute = this.state.routeStack.indexOf(route);
				invariant(indexOfRoute !== -1, 'Calling pop to route for a route that doesn\'t exist!');

				var numToPop = this.state.routeStack.length - indexOfRoute - 1;
				this.popN(numToPop);
			},

			replacePreviousAndPop: function replacePreviousAndPop(route) {
				var _this3 = this;

				if (this.state.requestedTopOfStack !== this.state.observedTopOfStack) {
					return;
				}
				if (this.state.routeStack.length < 2) {
					return;
				}
				this._tryLockNavigator(function () {
					_this3.replacePrevious(route);
					_this3.setState({
						requestedTopOfStack: _this3.state.requestedTopOfStack - 1,
						makingNavigatorRequest: true });
				});
			},

			resetTo: function resetTo(route) {
				invariant(!!route, 'Must supply route to push');

				if (this.state.requestedTopOfStack !== this.state.observedTopOfStack) {
					return;
				}
				this.replaceAtIndex(route, 0);
				this.popToRoute(route);
			},

			handleNavigationComplete: function handleNavigationComplete(e) {
				if (this._toFocusOnNavigationComplete) {
					this._getFocusEmitter().emit('focus', this._toFocusOnNavigationComplete);
					this._toFocusOnNavigationComplete = null;
				}
				this._handleNavigatorStackChanged(e);
			},

			_routeToStackItem: function _routeToStackItem(routeArg, i) {
				var component = routeArg.component,
				    wrapperStyle = routeArg.wrapperStyle,
				    passProps = routeArg.passProps,
				    route = babelHelpers.objectWithoutProperties(routeArg, ['component', 'wrapperStyle', 'passProps']);var _props = this.props,
				    itemWrapperStyle = _props.itemWrapperStyle,
				    props = babelHelpers.objectWithoutProperties(_props, ['itemWrapperStyle']);
				var shouldUpdateChild = this.state.updatingAllIndicesAtOrBeyond != null && this.state.updatingAllIndicesAtOrBeyond >= i;
				var Component = component;
				return React.createElement(StaticContainer, { key: 'nav' + i, shouldUpdate: shouldUpdateChild }, React.createElement(RCTNavigatorItem, babelHelpers.extends({}, props, route, {
					style: [styles.stackItem, itemWrapperStyle, wrapperStyle] }), React.createElement(Component, babelHelpers.extends({
					navigator: this.navigator,
					route: route }, passProps))));
			},

			renderNavigationStackItems: function renderNavigationStackItems() {
				var shouldRecurseToNavigator = this.state.makingNavigatorRequest || this.state.updatingAllIndicesAtOrBeyond !== null;

				var items = shouldRecurseToNavigator ? this.state.routeStack.map(this._routeToStackItem) : null;
				return React.createElement(StaticContainer, { shouldUpdate: shouldRecurseToNavigator }, React.createElement(NavigatorTransitionerIOS, {
					ref: TRANSITIONER_REF,
					style: styles.transitioner,
					vertical: this.props.vertical,
					requestedTopOfStack: this.state.requestedTopOfStack,
					onNavigationComplete: this.handleNavigationComplete }, items));
			},

			render: function render() {
				return React.createElement(View, { style: this.props.style }, this.renderNavigationStackItems());
			} });

		var styles = StyleSheet.create({
			stackItem: {
				backgroundColor: 'white',
				overflow: 'hidden',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0 },

			transitioner: {
				flex: 1 } });

		var RCTNavigator = requireNativeComponent('RCTNavigator');
		var RCTNavigatorItem = requireNativeComponent('RCTNavItem');

		module.exports = NavigatorIOS;
	},
	// Libraries/Components/StaticContainer.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);

		var onlyChild = __inner_require__(88 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/onlyChild.js*/);var StaticContainer = function (_React$Component) {
			babelHelpers.inherits(StaticContainer, _React$Component);function StaticContainer() {
				babelHelpers.classCallCheck(this, StaticContainer);return babelHelpers.possibleConstructorReturn(this, (StaticContainer.__proto__ || Object.getPrototypeOf(StaticContainer)).apply(this, arguments));
			}babelHelpers.createClass(StaticContainer, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps) {
					return !!nextProps.shouldUpdate;
				} }, { key: 'render', value: function render() {
					var child = this.props.children;
					return child === null || child === false ? null : onlyChild(child);
				} }]);return StaticContainer;
		}(React.Component);

		module.exports = StaticContainer;
	},
	// Libraries/Components/Picker/Picker.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var PickerIOS = __inner_require__(128 /*Libraries/Picker/PickerIOS.ios.js*/);
		var PickerAndroid = __inner_require__(129 /*Libraries/Components/Picker/PickerAndroid.ios.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var StyleSheetPropType = __inner_require__(62 /*Libraries/StyleSheet/StyleSheetPropType.js*/);
		var TextStylePropTypes = __inner_require__(55 /*Libraries/Text/TextStylePropTypes.js*/);
		var UnimplementedView = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var itemStylePropType = StyleSheetPropType(TextStylePropTypes);

		var pickerStyleType = StyleSheetPropType(babelHelpers.extends({}, ViewStylePropTypes, {
			color: ColorPropType }));

		var MODE_DIALOG = 'dialog';
		var MODE_DROPDOWN = 'dropdown';

		var Picker = React.createClass({ displayName: 'Picker',

			statics: {

				MODE_DIALOG: MODE_DIALOG,

				MODE_DROPDOWN: MODE_DROPDOWN },

			getDefaultProps: function getDefaultProps() {
				return {
					mode: MODE_DIALOG };
			},

			propTypes: babelHelpers.extends({}, View.propTypes, {
				style: pickerStyleType,

				selectedValue: React.PropTypes.any,

				onValueChange: React.PropTypes.func,

				enabled: React.PropTypes.bool,

				mode: React.PropTypes.oneOf(['dialog', 'dropdown']),

				itemStyle: itemStylePropType,

				prompt: React.PropTypes.string,

				testID: React.PropTypes.string }),

			render: function render() {
				if (Platform.OS === 'ios') {
					return React.createElement(PickerIOS, this.props, this.props.children);
				} else if (Platform.OS === 'android') {
					return React.createElement(PickerAndroid, this.props, this.props.children);
				} else {
					return React.createElement(UnimplementedView, null);
				}
			} });

		Picker.Item = React.createClass({ displayName: 'Item',

			propTypes: {

				label: React.PropTypes.string.isRequired,

				value: React.PropTypes.any,

				color: ColorPropType,

				testID: React.PropTypes.string },

			render: function render() {

				throw null;
			} });

		module.exports = Picker;
	},
	// Libraries/Picker/PickerIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactChildren = __inner_require__(83 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildren.js*/);
		var RCTPickerIOSConsts = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').UIManager.RCTPicker.Constants;
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var StyleSheetPropType = __inner_require__(62 /*Libraries/StyleSheet/StyleSheetPropType.js*/);
		var TextStylePropTypes = __inner_require__(55 /*Libraries/Text/TextStylePropTypes.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var itemStylePropType = StyleSheetPropType(TextStylePropTypes);
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var PickerIOS = React.createClass({ displayName: 'PickerIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {
				itemStyle: itemStylePropType,
				onValueChange: React.PropTypes.func,
				selectedValue: React.PropTypes.any }),

			getInitialState: function getInitialState() {
				return this._stateFromProps(this.props);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				this.setState(this._stateFromProps(nextProps));
			},

			_stateFromProps: function _stateFromProps(props) {
				var selectedIndex = 0;
				var items = [];
				ReactChildren.forEach(props.children, function (child, index) {
					if (child.props.value === props.selectedValue) {
						selectedIndex = index;
					}
					items.push({ value: child.props.value, label: child.props.label });
				});
				return { selectedIndex: selectedIndex, items: items };
			},

			render: function render() {
				var _this = this;
				return React.createElement(View, { style: this.props.style }, React.createElement(RCTPickerIOS, {
					ref: function ref(picker) {
						return _this._picker = picker;
					},
					style: [styles.pickerIOS, this.props.itemStyle],
					items: this.state.items,
					selectedIndex: this.state.selectedIndex,
					onChange: this._onChange }));
			},

			_onChange: function _onChange(event) {
				if (this.props.onChange) {
					this.props.onChange(event);
				}
				if (this.props.onValueChange) {
					this.props.onValueChange(event.nativeEvent.newValue);
				}

				if (this._picker && this.state.selectedIndex !== event.nativeEvent.newIndex) {
					this._picker.setNativeProps({
						selectedIndex: this.state.selectedIndex });
				}
			} });

		PickerIOS.Item = React.createClass({ displayName: 'Item',
			propTypes: {
				value: React.PropTypes.any,
				label: React.PropTypes.string },

			render: function render() {

				return null;
			} });

		var styles = StyleSheet.create({
			pickerIOS: {

				height: RCTPickerIOSConsts.ComponentHeight } });

		var RCTPickerIOS = requireNativeComponent('RCTPicker', {
			propTypes: {
				style: itemStylePropType } }, {
			nativeOnly: {
				items: true,
				onChange: true,
				selectedIndex: true } });

		module.exports = PickerIOS;
	},
	// Libraries/Components/Picker/PickerAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Components/ProgressBarAndroid/ProgressBarAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js
	function (__inner_require__, exports, module) {
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var NativeModules = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var ProgressViewIOS = React.createClass({ displayName: 'ProgressViewIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				progressViewStyle: PropTypes.oneOf(['default', 'bar']),

				progress: PropTypes.number,

				progressTintColor: PropTypes.string,

				trackTintColor: PropTypes.string,

				progressImage: Image.propTypes.source,

				trackImage: Image.propTypes.source }),

			render: function render() {
				return React.createElement(RCTProgressView, babelHelpers.extends({}, this.props, {
					style: [styles.progressView, this.props.style] }));
			} });

		var styles = StyleSheet.create({
			progressView: {
				height: NativeModules.ProgressViewManager.ComponentHeight } });

		var RCTProgressView = requireNativeComponent('RCTProgressView', ProgressViewIOS);

		module.exports = ProgressViewIOS;
	},
	// Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var NativeModules = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var SEGMENTED_CONTROL_REFERENCE = 'segmentedcontrol';

		var SegmentedControlIOS = React.createClass({ displayName: 'SegmentedControlIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				values: PropTypes.arrayOf(PropTypes.string),

				selectedIndex: PropTypes.number,

				onValueChange: PropTypes.func,

				onChange: PropTypes.func,

				enabled: PropTypes.bool,

				tintColor: PropTypes.string,

				momentary: PropTypes.bool }),

			getDefaultProps: function getDefaultProps() {
				return {
					values: [],
					enabled: true };
			},

			_onChange: function _onChange(event) {
				this.props.onChange && this.props.onChange(event);
				this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
			},

			render: function render() {
				return React.createElement(RCTSegmentedControl, babelHelpers.extends({}, this.props, {
					ref: SEGMENTED_CONTROL_REFERENCE,
					style: [styles.segmentedControl, this.props.style],
					onChange: this._onChange }));
			} });

		var styles = StyleSheet.create({
			segmentedControl: {
				height: NativeModules.SegmentedControlManager.ComponentHeight } });

		var RCTSegmentedControl = requireNativeComponent('RCTSegmentedControl', SegmentedControlIOS);

		module.exports = SegmentedControlIOS;
	},
	// Libraries/Components/SliderIOS/SliderIOS.ios.js
	function (__inner_require__, exports, module) {
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var SliderIOS = React.createClass({ displayName: 'SliderIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				style: View.propTypes.style,

				value: PropTypes.number,

				step: PropTypes.number,

				minimumValue: PropTypes.number,

				maximumValue: PropTypes.number,

				minimumTrackTintColor: PropTypes.string,

				maximumTrackTintColor: PropTypes.string,

				disabled: PropTypes.bool,

				trackImage: Image.propTypes.source,

				minimumTrackImage: Image.propTypes.source,

				maximumTrackImage: Image.propTypes.source,

				thumbImage: Image.propTypes.source,

				onValueChange: PropTypes.func,

				onSlidingComplete: PropTypes.func }),

			getDefaultProps: function getDefaultProps() {
				return {
					disabled: false };
			},

			render: function render() {
				var _props = this.props,
				    style = _props.style,
				    onValueChange = _props.onValueChange,
				    onSlidingComplete = _props.onSlidingComplete,
				    props = babelHelpers.objectWithoutProperties(_props, ['style', 'onValueChange', 'onSlidingComplete']);
				props.style = [styles.slider, style];

				props.onValueChange = onValueChange && function (event) {
					onValueChange && onValueChange(event.nativeEvent.value);
				};

				props.onSlidingComplete = onSlidingComplete && function (event) {
					onSlidingComplete && onSlidingComplete(event.nativeEvent.value);
				};

				return React.createElement(RCTSlider, props);
			} });

		var styles = StyleSheet.create({
			slider: {
				height: 40 } });

		var RCTSlider = requireNativeComponent('RCTSlider', SliderIOS);

		module.exports = SliderIOS;
	},
	// Libraries/RCTTest/SnapshotViewIOS.ios.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);var _require = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    TestModule = _require.TestModule;
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var SnapshotViewIOS = React.createClass({ displayName: 'SnapshotViewIOS',
			onDefaultAction: function onDefaultAction(event) {
				TestModule.verifySnapshot(TestModule.markTestPassed);
			},

			render: function render() {
				var testIdentifier = this.props.testIdentifier || 'test';
				var onSnapshotReady = this.props.onSnapshotReady || this.onDefaultAction;
				return React.createElement(RCTSnapshot, babelHelpers.extends({
					style: style.snapshot }, this.props, {
					onSnapshotReady: onSnapshotReady,
					testIdentifier: testIdentifier }));
			},

			propTypes: babelHelpers.extends({}, View.propTypes, {

				onSnapshotReady: React.PropTypes.func,

				testIdentifier: React.PropTypes.string }) });

		var style = StyleSheet.create({
			snapshot: {
				flex: 1 } });

		var RCTSnapshot = UIManager.RCTSnapshot ? requireNativeComponent('RCTSnapshot', SnapshotViewIOS) : View;

		module.exports = SnapshotViewIOS;
	},
	// Libraries/Components/Switch/Switch.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var Switch = React.createClass({ displayName: 'Switch',
			propTypes: babelHelpers.extends({}, View.propTypes, {

				value: React.PropTypes.bool,

				disabled: React.PropTypes.bool,

				onValueChange: React.PropTypes.func,

				testID: React.PropTypes.string,

				tintColor: ColorPropType,

				onTintColor: ColorPropType,

				thumbTintColor: ColorPropType }),

			getDefaultProps: function getDefaultProps() {
				return {
					value: false,
					disabled: false };
			},

			mixins: [NativeMethodsMixin],

			_rctSwitch: {},
			_onChange: function _onChange(event) {
				this.props.onChange && this.props.onChange(event);
				this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);

				if (Platform.OS === 'android') {
					this._rctSwitch.setNativeProps({ on: this.props.value });
				} else {
					this._rctSwitch.setNativeProps({ value: this.props.value });
				}
			},

			render: function render() {
				var _this = this;
				var props = babelHelpers.extends({}, this.props);
				props.onStartShouldSetResponder = function () {
					return true;
				};
				props.onResponderTerminationRequest = function () {
					return false;
				};
				if (Platform.OS === 'android') {
					props.enabled = !this.props.disabled;
					props.on = this.props.value;
					props.style = this.props.style;
				} else if (Platform.OS === 'ios') {
					props.style = [styles.rctSwitchIOS, this.props.style];
				}
				return React.createElement(RCTSwitch, babelHelpers.extends({}, props, {
					ref: function ref(_ref) {
						_this._rctSwitch = _ref;
					},
					onChange: this._onChange }));
			} });

		var styles = StyleSheet.create({
			rctSwitchIOS: {
				height: 31,
				width: 51 } });

		if (Platform.OS === 'android') {
			var RCTSwitch = requireNativeComponent('AndroidSwitch', Switch, {
				nativeOnly: { onChange: true, on: true, enabled: true } });
		} else {
			var RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {
				nativeOnly: { onChange: true } });
		}

		module.exports = Switch;
	},
	// Libraries/PullToRefresh/PullToRefreshViewAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Components/ScrollView/RecyclerViewBackedScrollView.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(100 /*Libraries/Components/ScrollView/ScrollView.js*/);
	},
	// Libraries/Components/RefreshControl/RefreshControl.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		if (Platform.OS === 'ios') {
			var RefreshLayoutConsts = { SIZE: {} };
		} else if (Platform.OS === 'android') {
			var RefreshLayoutConsts = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').UIManager.AndroidSwipeRefreshLayout.Constants;
		}

		var RefreshControl = React.createClass({ displayName: 'RefreshControl',
			statics: {
				SIZE: RefreshLayoutConsts.SIZE },

			propTypes: babelHelpers.extends({}, View.propTypes, {

				onRefresh: React.PropTypes.func,

				refreshing: React.PropTypes.bool,

				tintColor: ColorPropType,

				title: React.PropTypes.string,

				enabled: React.PropTypes.bool,

				colors: React.PropTypes.arrayOf(ColorPropType),

				progressBackgroundColor: ColorPropType,

				size: React.PropTypes.oneOf(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE) }),

			render: function render() {
				return React.createElement(NativeRefreshControl, this.props);
			} });

		if (Platform.OS === 'ios') {
			var NativeRefreshControl = requireNativeComponent('RCTRefreshControl', RefreshControl);
		} else if (Platform.OS === 'android') {
			var NativeRefreshControl = requireNativeComponent('AndroidSwipeRefreshLayout', RefreshControl);
		}

		module.exports = RefreshControl;
	},
	// Libraries/Components/StatusBar/StatusBar.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');

		var processColor = require('react-native@0.21/Libraries/StyleSheet/processColor.js');

		var StatusBarManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').StatusBarManager;

		function mergePropsStack(propsStack) {
			return propsStack.reduce(function (prev, cur) {
				return babelHelpers.extends(prev, cur);
			}, {
				backgroundColor: 'black',
				barStyle: 'default',
				translucent: false,
				hidden: false,
				networkActivityIndicatorVisible: false });
		}

		var StatusBar = React.createClass({ displayName: 'StatusBar',
			statics: {
				_propsStack: [] },

			propTypes: {

				hidden: React.PropTypes.bool,

				animated: React.PropTypes.bool,

				backgroundColor: ColorPropType,

				translucent: React.PropTypes.bool,

				barStyle: React.PropTypes.oneOf(['default', 'light-content']),

				networkActivityIndicatorVisible: React.PropTypes.bool,

				showHideTransition: React.PropTypes.oneOf(['fade', 'slide']) },

			getDefaultProps: function getDefaultProps() {
				return {
					animated: false,
					showHideTransition: 'fade' };
			},

			componentDidMount: function componentDidMount() {

				StatusBar._propsStack.push(this.props);
				this._updatePropsStack();
			},

			componentWillUnmount: function componentWillUnmount() {

				var index = StatusBar._propsStack.indexOf(this.props);
				StatusBar._propsStack.splice(index, 1);

				this._updatePropsStack();
			},

			componentDidUpdate: function componentDidUpdate(oldProps) {
				var index = StatusBar._propsStack.indexOf(oldProps);
				StatusBar._propsStack[index] = this.props;

				this._updatePropsStack();
			},

			_updatePropsStack: function _updatePropsStack() {
				var mergedProps = mergePropsStack(StatusBar._propsStack);

				if (Platform.OS === 'ios') {
					if (mergedProps.barStyle !== undefined) {
						StatusBarManager.setStyle(mergedProps.barStyle, this.props.animated);
					}
					if (mergedProps.hidden !== undefined) {
						StatusBarManager.setHidden(mergedProps.hidden, this.props.animated ? this.props.showHideTransition : 'none');
					}
					if (mergedProps.networkActivityIndicatorVisible !== undefined) {
						StatusBarManager.setNetworkActivityIndicatorVisible(mergedProps.networkActivityIndicatorVisible);
					}
				} else if (Platform.OS === 'android') {
					if (mergedProps.backgroundColor !== undefined) {
						StatusBarManager.setColor(processColor(mergedProps.backgroundColor), this.props.animated);
					}
					if (mergedProps.hidden !== undefined) {
						StatusBarManager.setHidden(mergedProps.hidden);
					}
					if (mergedProps.translucent !== undefined) {
						StatusBarManager.setTranslucent(mergedProps.translucent);
					}
				}
			},

			render: function render() {
				return null;
			} });

		module.exports = StatusBar;
	},
	// Libraries/Components/SwitchAndroid/SwitchAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Components/SwitchIOS/SwitchIOS.ios.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var SWITCH = 'switch';

		var SwitchIOS = React.createClass({ displayName: 'SwitchIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				value: PropTypes.bool,

				disabled: PropTypes.bool,

				onValueChange: PropTypes.func,

				onTintColor: ColorPropType,

				thumbTintColor: ColorPropType,

				tintColor: ColorPropType }),

			getDefaultProps: function getDefaultProps() {
				return {
					value: false,
					disabled: false };
			},

			_onChange: function _onChange(event) {

				this.refs[SWITCH].setNativeProps({ value: this.props.value });

				if (this.props.value === event.nativeEvent.value || this.props.disabled) {
					return;
				}

				this.props.onChange && this.props.onChange(event);
				this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
			},

			render: function render() {
				return React.createElement(RCTSwitch, babelHelpers.extends({}, this.props, {
					ref: SWITCH,
					onChange: this._onChange,
					style: [styles.rkSwitch, this.props.style] }));
			} });

		var styles = StyleSheet.create({
			rkSwitch: {
				height: 31,
				width: 51 } });

		var RCTSwitch = requireNativeComponent('RCTSwitch', SwitchIOS, {
			nativeOnly: { onChange: true } });

		module.exports = SwitchIOS;
	},
	// Libraries/Components/TabBarIOS/TabBarIOS.ios.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var TabBarItemIOS = __inner_require__(143 /*Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var TabBarIOS = React.createClass({ displayName: 'TabBarIOS',
			statics: {
				Item: TabBarItemIOS },

			propTypes: babelHelpers.extends({}, View.propTypes, {
				style: View.propTypes.style,

				tintColor: ColorPropType,

				barTintColor: ColorPropType,

				translucent: React.PropTypes.bool }),

			render: function render() {
				return React.createElement(RCTTabBar, {
					style: [styles.tabGroup, this.props.style],
					tintColor: this.props.tintColor,
					barTintColor: this.props.barTintColor,
					translucent: this.props.translucent !== false }, this.props.children);
			} });

		var styles = StyleSheet.create({
			tabGroup: {
				flex: 1 } });

		var RCTTabBar = requireNativeComponent('RCTTabBar', TabBarIOS);

		module.exports = TabBarIOS;
	},
	// Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js
	function (__inner_require__, exports, module) {
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StaticContainer = __inner_require__(126 /*Libraries/Components/StaticContainer.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var TabBarItemIOS = React.createClass({ displayName: 'TabBarItemIOS',
			propTypes: babelHelpers.extends({}, View.propTypes, {

				badge: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

				systemIcon: React.PropTypes.oneOf(['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated']),

				icon: Image.propTypes.source,

				selectedIcon: Image.propTypes.source,

				onPress: React.PropTypes.func,

				selected: React.PropTypes.bool,

				style: View.propTypes.style,

				title: React.PropTypes.string }),

			getInitialState: function getInitialState() {
				return {
					hasBeenSelected: false };
			},

			componentWillMount: function componentWillMount() {
				if (this.props.selected) {
					this.setState({ hasBeenSelected: true });
				}
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				if (this.state.hasBeenSelected || nextProps.selected) {
					this.setState({ hasBeenSelected: true });
				}
			},

			render: function render() {
				var _props = this.props,
				    style = _props.style,
				    children = _props.children,
				    props = babelHelpers.objectWithoutProperties(_props, ['style', 'children']);

				if (this.state.hasBeenSelected) {
					var tabContents = React.createElement(StaticContainer, { shouldUpdate: this.props.selected }, children);
				} else {
					var tabContents = React.createElement(View, null);
				}

				return React.createElement(RCTTabBarItem, babelHelpers.extends({}, props, {
					style: [styles.tab, style] }), tabContents);
			} });

		var styles = StyleSheet.create({
			tab: {
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0 } });

		var RCTTabBarItem = requireNativeComponent('RCTTabBarItem', TabBarItemIOS);

		module.exports = TabBarItemIOS;
	},
	// Libraries/Text/Text.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactInstanceMap = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceMap.js');
		var ReactNativeViewAttributes = __inner_require__(61 /*Libraries/Components/View/ReactNativeViewAttributes.js*/);
		var StyleSheetPropType = __inner_require__(62 /*Libraries/StyleSheet/StyleSheetPropType.js*/);
		var TextStylePropTypes = __inner_require__(55 /*Libraries/Text/TextStylePropTypes.js*/);
		var Touchable = __inner_require__(145 /*Libraries/Components/Touchable/Touchable.js*/);

		var createReactNativeComponentClass = __inner_require__(70 /*Libraries/ReactNative/createReactNativeComponentClass.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);

		var stylePropType = StyleSheetPropType(TextStylePropTypes);

		var viewConfig = {
			validAttributes: merge(ReactNativeViewAttributes.UIView, {
				isHighlighted: true,
				numberOfLines: true,
				allowFontScaling: true }),

			uiViewClassName: 'RCTText' };

		var Text = React.createClass({ displayName: 'Text',
			propTypes: {

				numberOfLines: React.PropTypes.number,

				onLayout: React.PropTypes.func,

				onPress: React.PropTypes.func,

				suppressHighlighting: React.PropTypes.bool,
				style: stylePropType,

				testID: React.PropTypes.string,

				allowFontScaling: React.PropTypes.bool },

			getDefaultProps: function getDefaultProps() {
				return {
					accessible: true,
					allowFontScaling: true };
			},
			getInitialState: function getInitialState() {
				return merge(Touchable.Mixin.touchableGetInitialState(), {
					isHighlighted: false });
			},
			mixins: [NativeMethodsMixin],
			viewConfig: viewConfig,
			getChildContext: function getChildContext() {
				return { isInAParentText: true };
			},
			childContextTypes: {
				isInAParentText: React.PropTypes.bool },

			contextTypes: {
				isInAParentText: React.PropTypes.bool },

			_handlers: null,

			touchableHandleActivePressIn: null,
			touchableHandleActivePressOut: null,
			touchableHandlePress: null,
			touchableGetPressRectOffset: null,
			render: function render() {
				var _this = this;
				var newProps = this.props;
				if (this.props.onStartShouldSetResponder || this.props.onPress) {
					if (!this._handlers) {
						this._handlers = {
							onStartShouldSetResponder: function onStartShouldSetResponder() {
								var shouldSetFromProps = _this.props.onStartShouldSetResponder && _this.props.onStartShouldSetResponder();
								var setResponder = shouldSetFromProps || !!_this.props.onPress;
								if (setResponder && !_this.touchableHandleActivePressIn) {

									for (var key in Touchable.Mixin) {
										if (typeof Touchable.Mixin[key] === 'function') {
											_this[key] = Touchable.Mixin[key].bind(_this);
										}
									}
									_this.touchableHandleActivePressIn = function () {
										if (_this.props.suppressHighlighting || !_this.props.onPress) {
											return;
										}
										_this.setState({
											isHighlighted: true });
									};

									_this.touchableHandleActivePressOut = function () {
										if (_this.props.suppressHighlighting || !_this.props.onPress) {
											return;
										}
										_this.setState({
											isHighlighted: false });
									};

									_this.touchableHandlePress = function () {
										_this.props.onPress && _this.props.onPress();
									};

									_this.touchableGetPressRectOffset = function () {
										return PRESS_RECT_OFFSET;
									};
								}
								return setResponder;
							},
							onResponderGrant: function (e, dispatchID) {
								this.touchableHandleResponderGrant(e, dispatchID);
								this.props.onResponderGrant && this.props.onResponderGrant.apply(this, arguments);
							}.bind(this),
							onResponderMove: function (e) {
								this.touchableHandleResponderMove(e);
								this.props.onResponderMove && this.props.onResponderMove.apply(this, arguments);
							}.bind(this),
							onResponderRelease: function (e) {
								this.touchableHandleResponderRelease(e);
								this.props.onResponderRelease && this.props.onResponderRelease.apply(this, arguments);
							}.bind(this),
							onResponderTerminate: function (e) {
								this.touchableHandleResponderTerminate(e);
								this.props.onResponderTerminate && this.props.onResponderTerminate.apply(this, arguments);
							}.bind(this),
							onResponderTerminationRequest: function () {

								var allowTermination = this.touchableHandleResponderTerminationRequest();
								if (allowTermination && this.props.onResponderTerminationRequest) {
									allowTermination = this.props.onResponderTerminationRequest.apply(this, arguments);
								}
								return allowTermination;
							}.bind(this) };
					}
					newProps = babelHelpers.extends({}, this.props, this._handlers, {
						isHighlighted: this.state.isHighlighted });
				}
				if (this.context.isInAParentText) {
					return React.createElement(RCTVirtualText, newProps);
				} else {
					return React.createElement(RCTText, newProps);
				}
			} });

		var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var RCTText = createReactNativeComponentClass(viewConfig);
		var RCTVirtualText = RCTText;

		if (Platform.OS === 'android') {
			RCTVirtualText = createReactNativeComponentClass({
				validAttributes: merge(ReactNativeViewAttributes.UIView, {
					isHighlighted: true }),

				uiViewClassName: 'RCTVirtualText' });
		}

		module.exports = Text;
	},
	// Libraries/Components/Touchable/Touchable.js
	function (__inner_require__, exports, module) {
		var BoundingDimensions = __inner_require__(146 /*Libraries/Components/Touchable/BoundingDimensions.js*/);
		var Position = __inner_require__(147 /*Libraries/Components/Touchable/Position.js*/);
		var TouchEventUtils = __inner_require__(148 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/TouchEventUtils.js*/);

		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');
		var queryLayoutByID = __inner_require__(149 /*Libraries/RKBackendNode/queryLayoutByID.js*/);

		var States = keyMirror({
			NOT_RESPONDER: null,
			RESPONDER_INACTIVE_PRESS_IN: null,
			RESPONDER_INACTIVE_PRESS_OUT: null,
			RESPONDER_ACTIVE_PRESS_IN: null,
			RESPONDER_ACTIVE_PRESS_OUT: null,
			RESPONDER_ACTIVE_LONG_PRESS_IN: null,
			RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
			ERROR: null });

		var IsActive = {
			RESPONDER_ACTIVE_PRESS_OUT: true,
			RESPONDER_ACTIVE_PRESS_IN: true };

		var IsPressingIn = {
			RESPONDER_INACTIVE_PRESS_IN: true,
			RESPONDER_ACTIVE_PRESS_IN: true,
			RESPONDER_ACTIVE_LONG_PRESS_IN: true };

		var IsLongPressingIn = {
			RESPONDER_ACTIVE_LONG_PRESS_IN: true };

		var Signals = keyMirror({
			DELAY: null,
			RESPONDER_GRANT: null,
			RESPONDER_RELEASE: null,
			RESPONDER_TERMINATED: null,
			ENTER_PRESS_RECT: null,
			LEAVE_PRESS_RECT: null,
			LONG_PRESS_DETECTED: null });

		var Transitions = {
			NOT_RESPONDER: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
				RESPONDER_RELEASE: States.ERROR,
				RESPONDER_TERMINATED: States.ERROR,
				ENTER_PRESS_RECT: States.ERROR,
				LEAVE_PRESS_RECT: States.ERROR,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_INACTIVE_PRESS_IN: {
				DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_INACTIVE_PRESS_OUT: {
				DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_ACTIVE_PRESS_IN: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN },

			RESPONDER_ACTIVE_PRESS_OUT: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_ACTIVE_LONG_PRESS_IN: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
				LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN },

			RESPONDER_ACTIVE_LONG_PRESS_OUT: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			error: {
				DELAY: States.NOT_RESPONDER,
				RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.NOT_RESPONDER,
				LEAVE_PRESS_RECT: States.NOT_RESPONDER,
				LONG_PRESS_DETECTED: States.NOT_RESPONDER } };

		var HIGHLIGHT_DELAY_MS = 130;

		var PRESS_EXPAND_PX = 20;

		var LONG_PRESS_THRESHOLD = 500;

		var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;

		var LONG_PRESS_ALLOWED_MOVEMENT = 10;

		var TouchableMixin = {

			componentWillUnmount: function componentWillUnmount() {
				this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
				this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
				this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
			},

			touchableGetInitialState: function touchableGetInitialState() {
				return {
					touchable: { touchState: undefined, responderID: null } };
			},

			touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest() {
				return !this.props.rejectResponderTermination;
			},

			touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder() {
				return true;
			},

			touchableLongPressCancelsPress: function touchableLongPressCancelsPress() {
				return true;
			},

			touchableHandleResponderGrant: function touchableHandleResponderGrant(e, dispatchID) {

				e.persist();

				this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
				this.pressOutDelayTimeout = null;

				this.state.touchable.touchState = States.NOT_RESPONDER;
				this.state.touchable.responderID = dispatchID;
				this._receiveSignal(Signals.RESPONDER_GRANT, e);
				var delayMS = this.touchableGetHighlightDelayMS !== undefined ? Math.max(this.touchableGetHighlightDelayMS(), 0) : HIGHLIGHT_DELAY_MS;
				delayMS = isNaN(delayMS) ? HIGHLIGHT_DELAY_MS : delayMS;
				if (delayMS !== 0) {
					this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), delayMS);
				} else {
					this._handleDelay(e);
				}

				var longDelayMS = this.touchableGetLongPressDelayMS !== undefined ? Math.max(this.touchableGetLongPressDelayMS(), 10) : LONG_PRESS_DELAY_MS;
				longDelayMS = isNaN(longDelayMS) ? LONG_PRESS_DELAY_MS : longDelayMS;
				this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, e), longDelayMS + delayMS);
			},

			touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
				this._receiveSignal(Signals.RESPONDER_RELEASE, e);
			},

			touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
				this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
			},

			touchableHandleResponderMove: function touchableHandleResponderMove(e) {

				if (this.state.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
					return;
				}

				if (!this.state.touchable.positionOnActivate) {
					return;
				}

				var positionOnActivate = this.state.touchable.positionOnActivate;
				var dimensionsOnActivate = this.state.touchable.dimensionsOnActivate;
				var pressRectOffset = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : {
					left: PRESS_EXPAND_PX,
					right: PRESS_EXPAND_PX,
					top: PRESS_EXPAND_PX,
					bottom: PRESS_EXPAND_PX };

				var pressExpandLeft = pressRectOffset.left;
				var pressExpandTop = pressRectOffset.top;
				var pressExpandRight = pressRectOffset.right;
				var pressExpandBottom = pressRectOffset.bottom;

				var touch = TouchEventUtils.extractSingleTouch(e.nativeEvent);
				var pageX = touch && touch.pageX;
				var pageY = touch && touch.pageY;

				if (this.pressInLocation) {
					var movedDistance = this._getDistanceBetweenPoints(pageX, pageY, this.pressInLocation.pageX, this.pressInLocation.pageY);
					if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
						this._cancelLongPressDelayTimeout();
					}
				}

				var isTouchWithinActive = pageX > positionOnActivate.left - pressExpandLeft && pageY > positionOnActivate.top - pressExpandTop && pageX < positionOnActivate.left + dimensionsOnActivate.width + pressExpandRight && pageY < positionOnActivate.top + dimensionsOnActivate.height + pressExpandBottom;
				if (isTouchWithinActive) {
					this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
					var curState = this.state.touchable.touchState;
					if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {

						this._cancelLongPressDelayTimeout();
					}
				} else {
					this._cancelLongPressDelayTimeout();
					this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
				}
			},

			_remeasureMetricsOnActivation: function _remeasureMetricsOnActivation() {
				queryLayoutByID(this.state.touchable.responderID, null, this._handleQueryLayout);
			},

			_handleQueryLayout: function _handleQueryLayout(l, t, w, h, globalX, globalY) {
				this.state.touchable.positionOnActivate && Position.release(this.state.touchable.positionOnActivate);
				this.state.touchable.dimensionsOnActivate && BoundingDimensions.release(this.state.touchable.dimensionsOnActivate);
				this.state.touchable.positionOnActivate = Position.getPooled(globalX, globalY);
				this.state.touchable.dimensionsOnActivate = BoundingDimensions.getPooled(w, h);
			},

			_handleDelay: function _handleDelay(e) {
				this.touchableDelayTimeout = null;
				this._receiveSignal(Signals.DELAY, e);
			},

			_handleLongDelay: function _handleLongDelay(e) {
				this.longPressDelayTimeout = null;
				var curState = this.state.touchable.touchState;
				if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
					console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
				} else {
					this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
				}
			},

			_receiveSignal: function _receiveSignal(signal, e) {
				var curState = this.state.touchable.touchState;
				var nextState = Transitions[curState] && Transitions[curState][signal];
				if (!nextState) {
					throw new Error('Unrecognized signal `' + signal + '` or state `' + curState + '` for Touchable responder `' + this.state.touchable.responderID + '`');
				}
				if (nextState === States.ERROR) {
					throw new Error('Touchable cannot transition from `' + curState + '` to `' + signal + '` for responder `' + this.state.touchable.responderID + '`');
				}
				if (curState !== nextState) {
					this._performSideEffectsForTransition(curState, nextState, signal, e);
					this.state.touchable.touchState = nextState;
				}
			},

			_cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
				this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
				this.longPressDelayTimeout = null;
			},

			_isHighlight: function _isHighlight(state) {
				return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
			},

			_savePressInLocation: function _savePressInLocation(e) {
				var touch = TouchEventUtils.extractSingleTouch(e.nativeEvent);
				var pageX = touch && touch.pageX;
				var pageY = touch && touch.pageY;
				var locationX = touch && touch.locationX;
				var locationY = touch && touch.locationY;
				this.pressInLocation = { pageX: pageX, pageY: pageY, locationX: locationX, locationY: locationY };
			},

			_getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
				var deltaX = aX - bX;
				var deltaY = aY - bY;
				return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
			},

			_performSideEffectsForTransition: function _performSideEffectsForTransition(curState, nextState, signal, e) {
				var _this = this;
				var curIsHighlight = this._isHighlight(curState);
				var newIsHighlight = this._isHighlight(nextState);

				var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;

				if (isFinalSignal) {
					this._cancelLongPressDelayTimeout();
				}

				if (!IsActive[curState] && IsActive[nextState]) {
					this._remeasureMetricsOnActivation();
				}

				if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
					this.touchableHandleLongPress && this.touchableHandleLongPress(e);
				}

				if (newIsHighlight && !curIsHighlight) {
					this._savePressInLocation(e);
					this.touchableHandleActivePressIn && this.touchableHandleActivePressIn(e);
				} else if (!newIsHighlight && curIsHighlight && this.touchableHandleActivePressOut) {
					if (this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()) {
						this.pressOutDelayTimeout = setTimeout(function () {
							_this.touchableHandleActivePressOut(e);
						}, this.touchableGetPressOutDelayMS());
					} else {
						this.touchableHandleActivePressOut(e);
					}
				}

				if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
					var hasLongPressHandler = !!this.props.onLongPress;
					var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.touchableLongPressCancelsPress());

					var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
					if (shouldInvokePress && this.touchableHandlePress) {
						this.touchableHandlePress(e);
					}
				}

				this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
				this.touchableDelayTimeout = null;
			} };

		var Touchable = {
			Mixin: TouchableMixin };

		module.exports = Touchable;
	},
	// Libraries/Components/Touchable/BoundingDimensions.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js');

		var twoArgumentPooler = PooledClass.twoArgumentPooler;

		function BoundingDimensions(width, height) {
			this.width = width;
			this.height = height;
		}

		BoundingDimensions.prototype.destructor = function () {
			this.width = null;
			this.height = null;
		};

		BoundingDimensions.getPooledFromElement = function (element) {
			return BoundingDimensions.getPooled(element.offsetWidth, element.offsetHeight);
		};

		PooledClass.addPoolingTo(BoundingDimensions, twoArgumentPooler);

		module.exports = BoundingDimensions;
	},
	// Libraries/Components/Touchable/Position.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js');

		var twoArgumentPooler = PooledClass.twoArgumentPooler;

		function Position(left, top) {
			this.left = left;
			this.top = top;
		}

		Position.prototype.destructor = function () {
			this.left = null;
			this.top = null;
		};

		PooledClass.addPoolingTo(Position, twoArgumentPooler);

		module.exports = Position;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/TouchEventUtils.js
	function (__inner_require__, exports, module) {
		var TouchEventUtils = {

			extractSingleTouch: function extractSingleTouch(nativeEvent) {
				var touches = nativeEvent.touches;
				var changedTouches = nativeEvent.changedTouches;
				var hasTouches = touches && touches.length > 0;
				var hasChangedTouches = changedTouches && changedTouches.length > 0;

				return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
			} };

		module.exports = TouchEventUtils;
	},
	// Libraries/RKBackendNode/queryLayoutByID.js
	function (__inner_require__, exports, module) {
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var queryLayoutByID = function queryLayoutByID(rootNodeID, onError, onSuccess) {

			UIManager.measure(ReactNativeTagHandles.rootNodeIDToTag[rootNodeID], onSuccess);
		};

		module.exports = queryLayoutByID;
	},
	// Libraries/Components/TextInput/TextInput.js
	function (__inner_require__, exports, module) {
		var DocumentSelectionState = __inner_require__(151 /*Libraries/vendor/document/selection/DocumentSelectionState.js*/);
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactChildren = __inner_require__(83 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildren.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var TextInputState = __inner_require__(6 /*Libraries/Components/TextInput/TextInputState.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var TouchableWithoutFeedback = __inner_require__(157 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var createReactNativeComponentClass = __inner_require__(70 /*Libraries/ReactNative/createReactNativeComponentClass.js*/);
		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);

		var onlyMultiline = {
			onTextInput: true,
			children: true };

		var notMultiline = {};

		if (Platform.OS === 'android') {
			var AndroidTextInput = requireNativeComponent('AndroidTextInput', null);
		} else if (Platform.OS === 'ios') {
			var RCTTextView = requireNativeComponent('RCTTextView', null);
			var RCTTextField = requireNativeComponent('RCTTextField', null);
		}

		var TextInput = React.createClass({ displayName: 'TextInput',
			statics: {

				State: TextInputState },

			propTypes: babelHelpers.extends({}, View.propTypes, {

				autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),

				autoCorrect: PropTypes.bool,

				autoFocus: PropTypes.bool,

				editable: PropTypes.bool,

				keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search']),

				keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),

				returnKeyType: PropTypes.oneOf(['default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call']),

				maxLength: PropTypes.number,

				numberOfLines: PropTypes.number,

				enablesReturnKeyAutomatically: PropTypes.bool,

				multiline: PropTypes.bool,

				onBlur: PropTypes.func,

				onFocus: PropTypes.func,

				onChange: PropTypes.func,

				onChangeText: PropTypes.func,

				onEndEditing: PropTypes.func,

				onSelectionChange: PropTypes.func,

				onSubmitEditing: PropTypes.func,

				onKeyPress: PropTypes.func,

				onLayout: PropTypes.func,

				placeholder: PropTypes.string,

				placeholderTextColor: PropTypes.string,

				secureTextEntry: PropTypes.bool,

				selectionColor: PropTypes.string,

				selectionState: PropTypes.instanceOf(DocumentSelectionState),

				value: PropTypes.string,

				defaultValue: PropTypes.string,

				clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),

				clearTextOnFocus: PropTypes.bool,

				selectTextOnFocus: PropTypes.bool,

				blurOnSubmit: PropTypes.bool,

				style: Text.propTypes.style,

				underlineColorAndroid: PropTypes.string }),

			mixins: [NativeMethodsMixin, TimerMixin],

			viewConfig: Platform.OS === 'ios' && RCTTextField ? RCTTextField.viewConfig : Platform.OS === 'android' && AndroidTextInput ? AndroidTextInput.viewConfig : {},

			isFocused: function isFocused() {
				return TextInputState.currentlyFocusedField() === React.findNodeHandle(this.refs.input);
			},

			contextTypes: {
				onFocusRequested: React.PropTypes.func,
				focusEmitter: React.PropTypes.instanceOf(EventEmitter) },

			_focusSubscription: undefined,

			componentDidMount: function componentDidMount() {
				var _this = this;
				if (!this.context.focusEmitter) {
					if (this.props.autoFocus) {
						this.requestAnimationFrame(this.focus);
					}
					return;
				}
				this._focusSubscription = this.context.focusEmitter.addListener('focus', function (el) {
					if (_this === el) {
						_this.requestAnimationFrame(_this.focus);
					} else if (_this.isFocused()) {
						_this.blur();
					}
				});

				if (this.props.autoFocus) {
					this.context.onFocusRequested(this);
				}
			},

			componentWillUnmount: function componentWillUnmount() {
				this._focusSubscription && this._focusSubscription.remove();
				if (this.isFocused()) {
					this.blur();
				}
			},

			getChildContext: function getChildContext() {
				return { isInAParentText: true };
			},

			childContextTypes: {
				isInAParentText: React.PropTypes.bool },

			clear: function clear() {
				this.setNativeProps({ text: '' });
			},

			render: function render() {
				if (Platform.OS === 'ios') {
					return this._renderIOS();
				} else if (Platform.OS === 'android') {
					return this._renderAndroid();
				}
			},

			_getText: function _getText() {
				return typeof this.props.value === 'string' ? this.props.value : this.props.defaultValue;
			},

			_renderIOS: function _renderIOS() {
				var _this2 = this;
				var textContainer;

				var onSelectionChange;
				if (this.props.selectionState || this.props.onSelectionChange) {
					onSelectionChange = function onSelectionChange(event) {
						if (_this2.props.selectionState) {
							var selection = event.nativeEvent.selection;
							_this2.props.selectionState.update(selection.start, selection.end);
						}
						_this2.props.onSelectionChange && _this2.props.onSelectionChange(event);
					};
				}

				var props = babelHelpers.extends({}, this.props);
				props.style = [styles.input, this.props.style];
				if (!props.multiline) {
					for (var propKey in onlyMultiline) {
						if (props[propKey]) {
							throw new Error('TextInput prop `' + propKey + '` is only supported with multiline.');
						}
					}
					textContainer = React.createElement(RCTTextField, babelHelpers.extends({
						ref: 'input' }, props, {
						onFocus: this._onFocus,
						onBlur: this._onBlur,
						onChange: this._onChange,
						onSelectionChange: onSelectionChange,
						onSelectionChangeShouldSetResponder: emptyFunction.thatReturnsTrue,
						text: this._getText() }));
				} else {
					for (var propKey in notMultiline) {
						if (props[propKey]) {
							throw new Error('TextInput prop `' + propKey + '` cannot be used with multiline.');
						}
					}

					var children = props.children;
					var childCount = 0;
					ReactChildren.forEach(children, function () {
						return ++childCount;
					});
					invariant(!(props.value && childCount), 'Cannot specify both value and children.');

					if (childCount > 1) {
						children = React.createElement(Text, null, children);
					}
					if (props.inputView) {
						children = [children, props.inputView];
					}
					textContainer = React.createElement(RCTTextView, babelHelpers.extends({
						ref: 'input' }, props, {
						children: children,
						onFocus: this._onFocus,
						onBlur: this._onBlur,
						onChange: this._onChange,
						onSelectionChange: onSelectionChange,
						onTextInput: this._onTextInput,
						onSelectionChangeShouldSetResponder: emptyFunction.thatReturnsTrue,
						text: this._getText() }));
				}

				return React.createElement(TouchableWithoutFeedback, {
					onPress: this._onPress,
					rejectResponderTermination: true,
					accessible: props.accessible,
					accessibilityLabel: props.accessibilityLabel,
					accessibilityTraits: props.accessibilityTraits,
					testID: props.testID }, textContainer);
			},

			_renderAndroid: function _renderAndroid() {
				var _this3 = this;
				var onSelectionChange;
				if (this.props.selectionState || this.props.onSelectionChange) {
					onSelectionChange = function onSelectionChange(event) {
						if (_this3.props.selectionState) {
							var selection = event.nativeEvent.selection;
							_this3.props.selectionState.update(selection.start, selection.end);
						}
						_this3.props.onSelectionChange && _this3.props.onSelectionChange(event);
					};
				}

				var autoCapitalize = UIManager.AndroidTextInput.Constants.AutoCapitalizationType[this.props.autoCapitalize];
				var children = this.props.children;
				var childCount = 0;
				ReactChildren.forEach(children, function () {
					return ++childCount;
				});
				invariant(!(this.props.value && childCount), 'Cannot specify both value and children.');

				if (childCount > 1) {
					children = React.createElement(Text, null, children);
				}

				var textContainer = React.createElement(AndroidTextInput, {
					ref: 'input',
					style: [this.props.style],
					autoCapitalize: autoCapitalize,
					autoCorrect: this.props.autoCorrect,
					keyboardType: this.props.keyboardType,
					mostRecentEventCount: 0,
					multiline: this.props.multiline,
					numberOfLines: this.props.numberOfLines,
					maxLength: this.props.maxLength,
					onFocus: this._onFocus,
					onBlur: this._onBlur,
					onChange: this._onChange,
					onSelectionChange: onSelectionChange,
					onTextInput: this._onTextInput,
					onEndEditing: this.props.onEndEditing,
					onSubmitEditing: this.props.onSubmitEditing,
					onLayout: this.props.onLayout,
					password: this.props.password || this.props.secureTextEntry,
					placeholder: this.props.placeholder,
					placeholderTextColor: this.props.placeholderTextColor,
					selectionColor: this.props.selectionColor,
					text: this._getText(),
					underlineColorAndroid: this.props.underlineColorAndroid,
					children: children,
					editable: this.props.editable });

				return React.createElement(TouchableWithoutFeedback, {
					onPress: this._onPress,
					accessible: this.props.accessible,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					testID: this.props.testID }, textContainer);
			},

			_onFocus: function _onFocus(event) {
				if (this.props.onFocus) {
					this.props.onFocus(event);
				}

				if (this.props.selectionState) {
					this.props.selectionState.focus();
				}
			},

			_onPress: function _onPress(event) {
				if (this.props.editable || this.props.editable === undefined) {
					this.focus();
				}
			},

			_onChange: function _onChange(event) {

				this.refs.input.setNativeProps({
					mostRecentEventCount: event.nativeEvent.eventCount });

				var text = event.nativeEvent.text;
				this.props.onChange && this.props.onChange(event);
				this.props.onChangeText && this.props.onChangeText(text);

				if (!this.refs.input) {

					return;
				}

				if (text !== this.props.value && typeof this.props.value === 'string') {
					this.refs.input.setNativeProps({
						text: this.props.value });
				}
			},

			_onBlur: function _onBlur(event) {
				this.blur();
				if (this.props.onBlur) {
					this.props.onBlur(event);
				}

				if (this.props.selectionState) {
					this.props.selectionState.blur();
				}
			},

			_onTextInput: function _onTextInput(event) {
				this.props.onTextInput && this.props.onTextInput(event);
			} });

		var styles = StyleSheet.create({
			input: {
				alignSelf: 'stretch' } });

		module.exports = TextInput;
	},
	// Libraries/vendor/document/selection/DocumentSelectionState.js
	function (__inner_require__, exports, module) {
		var mixInEventEmitter = __inner_require__(152 /*Libraries/vendor/emitter/mixInEventEmitter.js*/);var DocumentSelectionState = function () {

			function DocumentSelectionState(anchor, focus) {
				babelHelpers.classCallCheck(this, DocumentSelectionState);
				this._anchorOffset = anchor;
				this._focusOffset = focus;
				this._hasFocus = false;
			}babelHelpers.createClass(DocumentSelectionState, [{ key: 'update', value: function update(anchor, focus) {
					if (this._anchorOffset !== anchor || this._focusOffset !== focus) {
						this._anchorOffset = anchor;
						this._focusOffset = focus;
						this.emit('update');
					}
				} }, { key: 'constrainLength', value: function constrainLength(maxLength) {
					this.update(Math.min(this._anchorOffset, maxLength), Math.min(this._focusOffset, maxLength));
				} }, { key: 'focus', value: function focus() {
					if (!this._hasFocus) {
						this._hasFocus = true;
						this.emit('focus');
					}
				} }, { key: 'blur', value: function blur() {
					if (this._hasFocus) {
						this._hasFocus = false;
						this.emit('blur');
					}
				} }, { key: 'hasFocus', value: function hasFocus() {
					return this._hasFocus;
				} }, { key: 'isCollapsed', value: function isCollapsed() {
					return this._anchorOffset === this._focusOffset;
				} }, { key: 'isBackward', value: function isBackward() {
					return this._anchorOffset > this._focusOffset;
				} }, { key: 'getAnchorOffset', value: function getAnchorOffset() {
					return this._hasFocus ? this._anchorOffset : null;
				} }, { key: 'getFocusOffset', value: function getFocusOffset() {
					return this._hasFocus ? this._focusOffset : null;
				} }, { key: 'getStartOffset', value: function getStartOffset() {
					return this._hasFocus ? Math.min(this._anchorOffset, this._focusOffset) : null;
				} }, { key: 'getEndOffset', value: function getEndOffset() {
					return this._hasFocus ? Math.max(this._anchorOffset, this._focusOffset) : null;
				} }, { key: 'overlaps', value: function overlaps(start, end) {
					return this.hasFocus() && this.getStartOffset() <= end && start <= this.getEndOffset();
				} }]);return DocumentSelectionState;
		}();

		mixInEventEmitter(DocumentSelectionState, {
			'blur': true,
			'focus': true,
			'update': true });

		module.exports = DocumentSelectionState;
	},
	// Libraries/vendor/emitter/mixInEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');
		var EventEmitterWithHolding = __inner_require__(153 /*Libraries/vendor/emitter/EventEmitterWithHolding.js*/);
		var EventHolder = __inner_require__(154 /*Libraries/vendor/emitter/EventHolder.js*/);
		var EventValidator = __inner_require__(155 /*Libraries/vendor/emitter/EventValidator.js*/);

		var copyProperties = __inner_require__(156 /*Libraries/vendor/core/copyProperties.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);

		var TYPES_KEY = keyOf({ __types: true });

		function mixInEventEmitter(klass, types) {
			invariant(types, 'Must supply set of valid event types');

			var target = klass.prototype || klass;

			invariant(!target.__eventEmitter, 'An active emitter is already mixed in');

			var ctor = klass.constructor;
			if (ctor) {
				invariant(ctor === Object || ctor === Function, 'Mix EventEmitter into a class, not an instance');
			}

			if (target.hasOwnProperty(TYPES_KEY)) {
				copyProperties(target.__types, types);
			} else if (target.__types) {
				target.__types = copyProperties({}, target.__types, types);
			} else {
				target.__types = types;
			}
			copyProperties(target, EventEmitterMixin);
		}

		var EventEmitterMixin = {
			emit: function emit(eventType, a, b, c, d, e, _) {
				return this.__getEventEmitter().emit(eventType, a, b, c, d, e, _);
			},

			emitAndHold: function emitAndHold(eventType, a, b, c, d, e, _) {
				return this.__getEventEmitter().emitAndHold(eventType, a, b, c, d, e, _);
			},

			addListener: function addListener(eventType, listener, context) {
				return this.__getEventEmitter().addListener(eventType, listener, context);
			},

			once: function once(eventType, listener, context) {
				return this.__getEventEmitter().once(eventType, listener, context);
			},

			addRetroactiveListener: function addRetroactiveListener(eventType, listener, context) {
				return this.__getEventEmitter().addRetroactiveListener(eventType, listener, context);
			},

			addListenerMap: function addListenerMap(listenerMap, context) {
				return this.__getEventEmitter().addListenerMap(listenerMap, context);
			},

			addRetroactiveListenerMap: function addRetroactiveListenerMap(listenerMap, context) {
				return this.__getEventEmitter().addListenerMap(listenerMap, context);
			},

			removeAllListeners: function removeAllListeners() {
				this.__getEventEmitter().removeAllListeners();
			},

			removeCurrentListener: function removeCurrentListener() {
				this.__getEventEmitter().removeCurrentListener();
			},

			releaseHeldEventType: function releaseHeldEventType(eventType) {
				this.__getEventEmitter().releaseHeldEventType(eventType);
			},

			__getEventEmitter: function __getEventEmitter() {
				if (!this.__eventEmitter) {
					var emitter = new EventEmitter();
					emitter = EventValidator.addValidation(emitter, this.__types);

					var holder = new EventHolder();
					this.__eventEmitter = new EventEmitterWithHolding(emitter, holder);
				}
				return this.__eventEmitter;
			} };

		module.exports = mixInEventEmitter;
	},
	// Libraries/vendor/emitter/EventEmitterWithHolding.js
	function (__inner_require__, exports, module) {
		var EventEmitterWithHolding = function () {

			function EventEmitterWithHolding(emitter, holder) {
				babelHelpers.classCallCheck(this, EventEmitterWithHolding);
				this._emitter = emitter;
				this._eventHolder = holder;
				this._currentEventToken = null;
				this._emittingHeldEvents = false;
			}babelHelpers.createClass(EventEmitterWithHolding, [{ key: 'addListener', value: function addListener(eventType, listener, context) {
					return this._emitter.addListener(eventType, listener, context);
				} }, { key: 'once', value: function once(eventType, listener, context) {
					return this._emitter.once(eventType, listener, context);
				} }, { key: 'addRetroactiveListener', value: function addRetroactiveListener(eventType, listener, context) {
					var subscription = this._emitter.addListener(eventType, listener, context);

					this._emittingHeldEvents = true;
					this._eventHolder.emitToListener(eventType, listener, context);
					this._emittingHeldEvents = false;

					return subscription;
				} }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
					this._emitter.removeAllListeners(eventType);
				} }, { key: 'removeCurrentListener', value: function removeCurrentListener() {
					this._emitter.removeCurrentListener();
				} }, { key: 'listeners', value: function listeners(eventType) {
					return this._emitter.listeners(eventType);
				} }, { key: 'emit', value: function emit(eventType, a, b, c, d, e, _) {
					this._emitter.emit(eventType, a, b, c, d, e, _);
				} }, { key: 'emitAndHold', value: function emitAndHold(eventType, a, b, c, d, e, _) {
					this._currentEventToken = this._eventHolder.holdEvent(eventType, a, b, c, d, e, _);

					this._emitter.emit(eventType, a, b, c, d, e, _);
					this._currentEventToken = null;
				} }, { key: 'releaseCurrentEvent', value: function releaseCurrentEvent() {
					if (this._currentEventToken !== null) {
						this._eventHolder.releaseEvent(this._currentEventToken);
					} else if (this._emittingHeldEvents) {
						this._eventHolder.releaseCurrentEvent();
					}
				} }, { key: 'releaseHeldEventType', value: function releaseHeldEventType(eventType) {
					this._eventHolder.releaseEventType(eventType);
				} }]);return EventEmitterWithHolding;
		}();

		module.exports = EventEmitterWithHolding;
	},
	// Libraries/vendor/emitter/EventHolder.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');var EventHolder = function () {
			function EventHolder() {
				babelHelpers.classCallCheck(this, EventHolder);
				this._heldEvents = {};
				this._currentEventKey = null;
			}babelHelpers.createClass(EventHolder, [{ key: 'holdEvent', value: function holdEvent(eventType, a, b, c, d, e, _) {
					this._heldEvents[eventType] = this._heldEvents[eventType] || [];
					var eventsOfType = this._heldEvents[eventType];
					var key = {
						eventType: eventType,
						index: eventsOfType.length };

					eventsOfType.push([a, b, c, d, e, _]);
					return key;
				} }, { key: 'emitToListener', value: function emitToListener(eventType, listener, context) {
					var _this = this;
					var eventsOfType = this._heldEvents[eventType];
					if (!eventsOfType) {
						return;
					}
					var origEventKey = this._currentEventKey;
					eventsOfType.forEach(function (eventHeld, index) {
						if (!eventHeld) {
							return;
						}
						_this._currentEventKey = {
							eventType: eventType,
							index: index };

						listener.apply(context, eventHeld);
					});
					this._currentEventKey = origEventKey;
				} }, { key: 'releaseCurrentEvent', value: function releaseCurrentEvent() {
					invariant(this._currentEventKey !== null, 'Not in an emitting cycle; there is no current event');

					this.releaseEvent(this._currentEventKey);
				} }, { key: 'releaseEvent', value: function releaseEvent(token) {
					delete this._heldEvents[token.eventType][token.index];
				} }, { key: 'releaseEventType', value: function releaseEventType(type) {
					this._heldEvents[type] = [];
				} }]);return EventHolder;
		}();

		module.exports = EventHolder;
	},
	// Libraries/vendor/emitter/EventValidator.js
	function (__inner_require__, exports, module) {
		var copyProperties = __inner_require__(156 /*Libraries/vendor/core/copyProperties.js*/);

		var EventValidator = {

			addValidation: function addValidation(emitter, types) {
				var eventTypes = Object.keys(types);
				var emitterWithValidation = Object.create(emitter);

				copyProperties(emitterWithValidation, {
					emit: function emit(type, a, b, c, d, e, _) {
						assertAllowsEventType(type, eventTypes);
						return emitter.emit.call(this, type, a, b, c, d, e, _);
					} });

				return emitterWithValidation;
			} };

		function assertAllowsEventType(type, allowedTypes) {
			if (allowedTypes.indexOf(type) === -1) {
				throw new TypeError(errorMessageFor(type, allowedTypes));
			}
		}

		function errorMessageFor(type, allowedTypes) {
			var message = 'Unknown event type "' + type + '". ';
			if (__DEV__) {
				message += recommendationFor(type, allowedTypes);
			}
			message += 'Known event types: ' + allowedTypes.join(', ') + '.';
			return message;
		}

		if (__DEV__) {
			var recommendationFor = function recommendationFor(type, allowedTypes) {
				var closestTypeRecommendation = closestTypeFor(type, allowedTypes);
				if (isCloseEnough(closestTypeRecommendation, type)) {
					return 'Did you mean "' + closestTypeRecommendation.type + '"? ';
				} else {
					return '';
				}
			};

			var closestTypeFor = function closestTypeFor(type, allowedTypes) {
				var typeRecommendations = allowedTypes.map(typeRecommendationFor.bind(this, type));

				return typeRecommendations.sort(recommendationSort)[0];
			};

			var typeRecommendationFor = function typeRecommendationFor(type, recomendedType) {
				return {
					type: recomendedType,
					distance: damerauLevenshteinDistance(type, recomendedType) };
			};

			var recommendationSort = function recommendationSort(recommendationA, recommendationB) {
				if (recommendationA.distance < recommendationB.distance) {
					return -1;
				} else if (recommendationA.distance > recommendationB.distance) {
					return 1;
				} else {
					return 0;
				}
			};

			var isCloseEnough = function isCloseEnough(closestType, actualType) {
				return closestType.distance / actualType.length < 0.334;
			};

			var damerauLevenshteinDistance = function damerauLevenshteinDistance(a, b) {
				var i, j;
				var d = [];

				for (i = 0; i <= a.length; i++) {
					d[i] = [i];
				}

				for (j = 1; j <= b.length; j++) {
					d[0][j] = j;
				}

				for (i = 1; i <= a.length; i++) {
					for (j = 1; j <= b.length; j++) {
						var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;

						d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

						if (i > 1 && j > 1 && a.charAt(i - 1) == b.charAt(j - 2) && a.charAt(i - 2) == b.charAt(j - 1)) {
							d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
						}
					}
				}

				return d[a.length][b.length];
			};
		}

		module.exports = EventValidator;
	},
	// Libraries/vendor/core/copyProperties.js
	function (__inner_require__, exports, module) {
		function copyProperties(obj, a, b, c, d, e, f) {
			obj = obj || {};

			if (__DEV__) {
				if (f) {
					throw new Error('Too many arguments passed to copyProperties');
				}
			}

			var args = [a, b, c, d, e];
			var ii = 0,
			    v;
			while (args[ii]) {
				v = args[ii++];
				for (var k in v) {
					obj[k] = v[k];
				}

				if (v.hasOwnProperty && v.hasOwnProperty('toString') && typeof v.toString != 'undefined' && obj.toString !== v.toString) {
					obj.toString = v.toString;
				}
			}

			return obj;
		}

		module.exports = copyProperties;
	},
	// Libraries/Components/Touchable/TouchableWithoutFeedback.js
	function (__inner_require__, exports, module) {
		var EdgeInsetsPropType = __inner_require__(94 /*Libraries/StyleSheet/EdgeInsetsPropType.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var Touchable = __inner_require__(145 /*Libraries/Components/Touchable/Touchable.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var ensurePositiveDelayProps = __inner_require__(158 /*Libraries/Components/Touchable/ensurePositiveDelayProps.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var onlyChild = __inner_require__(88 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/onlyChild.js*/);

		var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var TouchableWithoutFeedback = React.createClass({ displayName: 'TouchableWithoutFeedback',
			mixins: [TimerMixin, Touchable.Mixin],

			propTypes: {
				accessible: React.PropTypes.bool,
				accessibilityComponentType: React.PropTypes.oneOf(View.AccessibilityComponentType),
				accessibilityTraits: React.PropTypes.oneOfType([React.PropTypes.oneOf(View.AccessibilityTraits), React.PropTypes.arrayOf(React.PropTypes.oneOf(View.AccessibilityTraits))]),

				onPress: React.PropTypes.func,
				onPressIn: React.PropTypes.func,
				onPressOut: React.PropTypes.func,

				onLayout: React.PropTypes.func,

				onLongPress: React.PropTypes.func,

				delayPressIn: React.PropTypes.number,

				delayPressOut: React.PropTypes.number,

				delayLongPress: React.PropTypes.number,

				pressRetentionOffset: EdgeInsetsPropType },

			getInitialState: function getInitialState() {
				return this.touchableGetInitialState();
			},

			componentDidMount: function componentDidMount() {
				ensurePositiveDelayProps(this.props);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				ensurePositiveDelayProps(nextProps);
			},

			touchableHandlePress: function touchableHandlePress(e) {
				this.props.onPress && this.props.onPress(e);
			},

			touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
				this.props.onPressIn && this.props.onPressIn(e);
			},

			touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
				this.props.onPressOut && this.props.onPressOut(e);
			},

			touchableHandleLongPress: function touchableHandleLongPress(e) {
				this.props.onLongPress && this.props.onLongPress(e);
			},

			touchableGetPressRectOffset: function touchableGetPressRectOffset() {
				return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
			},

			touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
				return this.props.delayPressIn || 0;
			},

			touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
				return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
			},

			touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
				return this.props.delayPressOut || 0;
			},

			render: function render() {

				return React.cloneElement(onlyChild(this.props.children), {
					accessible: this.props.accessible !== false,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					accessibilityTraits: this.props.accessibilityTraits,
					testID: this.props.testID,
					onLayout: this.props.onLayout,
					onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
					onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
					onResponderGrant: this.touchableHandleResponderGrant,
					onResponderMove: this.touchableHandleResponderMove,
					onResponderRelease: this.touchableHandleResponderRelease,
					onResponderTerminate: this.touchableHandleResponderTerminate });
			} });

		module.exports = TouchableWithoutFeedback;
	},
	// Libraries/Components/Touchable/ensurePositiveDelayProps.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var ensurePositiveDelayProps = function ensurePositiveDelayProps(props) {
			invariant(!(props.delayPressIn < 0 || props.delayPressOut < 0 || props.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
		};

		module.exports = ensurePositiveDelayProps;
	},
	// Libraries/Components/ToastAndroid/ToastAndroid.ios.js
	function (__inner_require__, exports, module) {
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var ToastAndroid = {

			show: function show(message, duration) {
				warning(false, 'ToastAndroid is not supported on this platform.');
			} };

		module.exports = ToastAndroid;
	},
	// Libraries/Components/ToolbarAndroid/ToolbarAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Components/Touchable/TouchableHighlight.js
	function (__inner_require__, exports, module) {
		var ColorPropType = __inner_require__(51 /*Libraries/StyleSheet/ColorPropType.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var ReactNativeViewAttributes = __inner_require__(61 /*Libraries/Components/View/ReactNativeViewAttributes.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var Touchable = __inner_require__(145 /*Libraries/Components/Touchable/Touchable.js*/);
		var TouchableWithoutFeedback = __inner_require__(157 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var ensureComponentIsNative = __inner_require__(162 /*Libraries/Components/Touchable/ensureComponentIsNative.js*/);
		var ensurePositiveDelayProps = __inner_require__(158 /*Libraries/Components/Touchable/ensurePositiveDelayProps.js*/);
		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);
		var merge = __inner_require__(23 /*Libraries/vendor/core/merge.js*/);
		var onlyChild = __inner_require__(88 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/onlyChild.js*/);

		var DEFAULT_PROPS = {
			activeOpacity: 0.8,
			underlayColor: 'black' };

		var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var TouchableHighlight = React.createClass({ displayName: 'TouchableHighlight',
			propTypes: babelHelpers.extends({}, TouchableWithoutFeedback.propTypes, {

				activeOpacity: React.PropTypes.number,

				underlayColor: ColorPropType,
				style: View.propTypes.style,

				onShowUnderlay: React.PropTypes.func,

				onHideUnderlay: React.PropTypes.func }),

			mixins: [NativeMethodsMixin, TimerMixin, Touchable.Mixin],

			getDefaultProps: function getDefaultProps() {
				return DEFAULT_PROPS;
			},

			computeSyntheticState: function computeSyntheticState(props) {
				return {
					activeProps: {
						style: {
							opacity: props.activeOpacity } },

					activeUnderlayProps: {
						style: {
							backgroundColor: props.underlayColor } },

					underlayStyle: [INACTIVE_UNDERLAY_PROPS.style, props.style] };
			},

			getInitialState: function getInitialState() {
				return merge(this.touchableGetInitialState(), this.computeSyntheticState(this.props));
			},

			componentDidMount: function componentDidMount() {
				ensurePositiveDelayProps(this.props);
				ensureComponentIsNative(this.refs[CHILD_REF]);
			},

			componentDidUpdate: function componentDidUpdate() {
				ensureComponentIsNative(this.refs[CHILD_REF]);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				ensurePositiveDelayProps(nextProps);
				if (nextProps.activeOpacity !== this.props.activeOpacity || nextProps.underlayColor !== this.props.underlayColor || nextProps.style !== this.props.style) {
					this.setState(this.computeSyntheticState(nextProps));
				}
			},

			viewConfig: {
				uiViewClassName: 'RCTView',
				validAttributes: ReactNativeViewAttributes.RCTView },

			touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				this._showUnderlay();
				this.props.onPressIn && this.props.onPressIn(e);
			},

			touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
				if (!this._hideTimeout) {
					this._hideUnderlay();
				}
				this.props.onPressOut && this.props.onPressOut(e);
			},

			touchableHandlePress: function touchableHandlePress(e) {
				this.clearTimeout(this._hideTimeout);
				this._showUnderlay();
				this._hideTimeout = this.setTimeout(this._hideUnderlay, this.props.delayPressOut || 100);
				this.props.onPress && this.props.onPress(e);
			},

			touchableHandleLongPress: function touchableHandleLongPress(e) {
				this.props.onLongPress && this.props.onLongPress(e);
			},

			touchableGetPressRectOffset: function touchableGetPressRectOffset() {
				return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
			},

			touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
				return this.props.delayPressIn;
			},

			touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
				return this.props.delayLongPress;
			},

			touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
				return this.props.delayPressOut;
			},

			_showUnderlay: function _showUnderlay() {
				if (!this.isMounted() || !this._hasPressHandler()) {
					return;
				}

				this.refs[UNDERLAY_REF].setNativeProps(this.state.activeUnderlayProps);
				this.refs[CHILD_REF].setNativeProps(this.state.activeProps);
				this.props.onShowUnderlay && this.props.onShowUnderlay();
			},

			_hideUnderlay: function _hideUnderlay() {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				if (this._hasPressHandler() && this.refs[UNDERLAY_REF]) {
					this.refs[CHILD_REF].setNativeProps(INACTIVE_CHILD_PROPS);
					this.refs[UNDERLAY_REF].setNativeProps(babelHelpers.extends({}, INACTIVE_UNDERLAY_PROPS, {
						style: this.state.underlayStyle }));

					this.props.onHideUnderlay && this.props.onHideUnderlay();
				}
			},

			_hasPressHandler: function _hasPressHandler() {
				return !!(this.props.onPress || this.props.onPressIn || this.props.onPressOut || this.props.onLongPress);
			},

			render: function render() {
				return React.createElement(View, {
					accessible: true,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					accessibilityTraits: this.props.accessibilityTraits,
					ref: UNDERLAY_REF,
					style: this.state.underlayStyle,
					onLayout: this.props.onLayout,
					onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
					onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
					onResponderGrant: this.touchableHandleResponderGrant,
					onResponderMove: this.touchableHandleResponderMove,
					onResponderRelease: this.touchableHandleResponderRelease,
					onResponderTerminate: this.touchableHandleResponderTerminate,
					testID: this.props.testID }, React.cloneElement(onlyChild(this.props.children), {
					ref: CHILD_REF }));
			} });

		var CHILD_REF = keyOf({ childRef: null });
		var UNDERLAY_REF = keyOf({ underlayRef: null });
		var INACTIVE_CHILD_PROPS = {
			style: StyleSheet.create({ x: { opacity: 1.0 } }).x };

		var INACTIVE_UNDERLAY_PROPS = {
			style: StyleSheet.create({ x: { backgroundColor: 'transparent' } }).x };

		module.exports = TouchableHighlight;
	},
	// Libraries/Components/Touchable/ensureComponentIsNative.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var ensureComponentIsNative = function ensureComponentIsNative(component) {
			invariant(component && typeof component.setNativeProps === 'function', 'Touchable child must either be native or forward setNativeProps to a ' + 'native component');
		};

		module.exports = ensureComponentIsNative;
	},
	// Libraries/Components/Touchable/TouchableNativeFeedback.ios.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var DummyTouchableNativeFeedback = React.createClass({ displayName: 'DummyTouchableNativeFeedback',
			render: function render() {
				return React.createElement(View, { style: [styles.container, this.props.style] }, React.createElement(Text, { style: styles.info }, 'TouchableNativeFeedback is not supported on this platform!'));
			} });

		var styles = StyleSheet.create({
			container: {
				height: 100,
				width: 300,
				backgroundColor: '#ffbcbc',
				borderWidth: 1,
				borderColor: 'red',
				alignItems: 'center',
				justifyContent: 'center',
				margin: 10 },

			info: {
				color: '#333333',
				margin: 20 } });

		module.exports = DummyTouchableNativeFeedback;
	},
	// Libraries/Components/Touchable/TouchableOpacity.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(165 /*Libraries/Animated/src/Animated.js*/);
		var NativeMethodsMixin = __inner_require__(2 /*Libraries/ReactIOS/NativeMethodsMixin.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var Touchable = __inner_require__(145 /*Libraries/Components/Touchable/Touchable.js*/);
		var TouchableWithoutFeedback = __inner_require__(157 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);

		var ensurePositiveDelayProps = __inner_require__(158 /*Libraries/Components/Touchable/ensurePositiveDelayProps.js*/);
		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');

		var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var TouchableOpacity = React.createClass({ displayName: 'TouchableOpacity',
			mixins: [TimerMixin, Touchable.Mixin, NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, TouchableWithoutFeedback.propTypes, {

				activeOpacity: React.PropTypes.number }),

			getDefaultProps: function getDefaultProps() {
				return {
					activeOpacity: 0.2 };
			},

			getInitialState: function getInitialState() {
				return babelHelpers.extends({}, this.touchableGetInitialState(), {
					anim: new Animated.Value(1) });
			},

			componentDidMount: function componentDidMount() {
				ensurePositiveDelayProps(this.props);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				ensurePositiveDelayProps(nextProps);
			},

			setOpacityTo: function setOpacityTo(value) {
				Animated.timing(this.state.anim, { toValue: value, duration: 150 }).start();
			},

			touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				this._opacityActive();
				this.props.onPressIn && this.props.onPressIn(e);
			},

			touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
				if (!this._hideTimeout) {
					this._opacityInactive();
				}
				this.props.onPressOut && this.props.onPressOut(e);
			},

			touchableHandlePress: function touchableHandlePress(e) {
				this.clearTimeout(this._hideTimeout);
				this._opacityActive();
				this._hideTimeout = this.setTimeout(this._opacityInactive, this.props.delayPressOut || 100);

				this.props.onPress && this.props.onPress(e);
			},

			touchableHandleLongPress: function touchableHandleLongPress(e) {
				this.props.onLongPress && this.props.onLongPress(e);
			},

			touchableGetPressRectOffset: function touchableGetPressRectOffset() {
				return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
			},

			touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
				return this.props.delayPressIn || 0;
			},

			touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
				return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
			},

			touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
				return this.props.delayPressOut;
			},

			_opacityActive: function _opacityActive() {
				this.setOpacityTo(this.props.activeOpacity);
			},

			_opacityInactive: function _opacityInactive() {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				var childStyle = flattenStyle(this.props.style) || {};
				this.setOpacityTo(childStyle.opacity === undefined ? 1 : childStyle.opacity);
			},

			render: function render() {
				return React.createElement(Animated.View, {
					accessible: true,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					accessibilityTraits: this.props.accessibilityTraits,
					style: [this.props.style, { opacity: this.state.anim }],
					testID: this.props.testID,
					onLayout: this.props.onLayout,
					onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
					onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
					onResponderGrant: this.touchableHandleResponderGrant,
					onResponderMove: this.touchableHandleResponderMove,
					onResponderRelease: this.touchableHandleResponderRelease,
					onResponderTerminate: this.touchableHandleResponderTerminate }, this.props.children);
			} });

		module.exports = TouchableOpacity;
	},
	// Libraries/Animated/src/Animated.js
	function (__inner_require__, exports, module) {
		var AnimatedImplementation = __inner_require__(166 /*Libraries/Animated/src/AnimatedImplementation.js*/);
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		module.exports = babelHelpers.extends({}, AnimatedImplementation, {
			View: AnimatedImplementation.createAnimatedComponent(View),
			Text: AnimatedImplementation.createAnimatedComponent(Text),
			Image: AnimatedImplementation.createAnimatedComponent(Image) });
	},
	// Libraries/Animated/src/AnimatedImplementation.js
	function (__inner_require__, exports, module) {
		var Easing = __inner_require__(167 /*Libraries/Animated/src/Easing.js*/);
		var InteractionManager = __inner_require__(33 /*Libraries/Interaction/InteractionManager.js*/);
		var Interpolation = __inner_require__(169 /*Libraries/Animated/src/Interpolation.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var Set = require('react-native@0.21/Libraries/vendor/core/Set.js');
		var SpringConfig = __inner_require__(170 /*Libraries/Animated/src/SpringConfig.js*/);
		var ViewStylePropTypes = __inner_require__(56 /*Libraries/Components/View/ViewStylePropTypes.js*/);

		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var requestAnimationFrame = __inner_require__(171 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/requestAnimationFrame.js*/);var Animated = function () {
			function Animated() {
				babelHelpers.classCallCheck(this, Animated);
			}babelHelpers.createClass(Animated, [{ key: '__attach', value: function __attach() {} }, { key: '__detach', value: function __detach() {} }, { key: '__getValue', value: function __getValue() {} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					return this.__getValue();
				} }, { key: '__addChild', value: function __addChild(child) {} }, { key: '__removeChild', value: function __removeChild(child) {} }, { key: '__getChildren', value: function __getChildren() {
					return [];
				} }]);return Animated;
		}();var Animation = function () {
			function Animation() {
				babelHelpers.classCallCheck(this, Animation);
			}babelHelpers.createClass(Animation, [{ key: 'start', value: function start(fromValue, onUpdate, onEnd, previousAnimation) {} }, { key: 'stop', value: function stop() {} }, { key: '__debouncedOnEnd', value: function __debouncedOnEnd(result) {
					var onEnd = this.__onEnd;
					this.__onEnd = null;
					onEnd && onEnd(result);
				} }]);return Animation;
		}();var AnimatedWithChildren = function (_Animated) {
			babelHelpers.inherits(AnimatedWithChildren, _Animated);

			function AnimatedWithChildren() {
				babelHelpers.classCallCheck(this, AnimatedWithChildren);var _this = babelHelpers.possibleConstructorReturn(this, (AnimatedWithChildren.__proto__ || Object.getPrototypeOf(AnimatedWithChildren)).call(this));

				_this._children = [];return _this;
			}babelHelpers.createClass(AnimatedWithChildren, [{ key: '__addChild', value: function __addChild(child) {
					if (this._children.length === 0) {
						this.__attach();
					}
					this._children.push(child);
				} }, { key: '__removeChild', value: function __removeChild(child) {
					var index = this._children.indexOf(child);
					if (index === -1) {
						console.warn('Trying to remove a child that doesn\'t exist');
						return;
					}
					this._children.splice(index, 1);
					if (this._children.length === 0) {
						this.__detach();
					}
				} }, { key: '__getChildren', value: function __getChildren() {
					return this._children;
				} }]);return AnimatedWithChildren;
		}(Animated);

		function _flush(rootNode) {
			var animatedStyles = new Set();
			function findAnimatedStyles(node) {
				if (typeof node.update === 'function') {
					animatedStyles.add(node);
				} else {
					node.__getChildren().forEach(findAnimatedStyles);
				}
			}
			findAnimatedStyles(rootNode);
			animatedStyles.forEach(function (animatedStyle) {
				return animatedStyle.update();
			});
		}

		var easeInOut = Easing.inOut(Easing.ease);var TimingAnimation = function (_Animation) {
			babelHelpers.inherits(TimingAnimation, _Animation);

			function TimingAnimation(config) {
				babelHelpers.classCallCheck(this, TimingAnimation);var _this2 = babelHelpers.possibleConstructorReturn(this, (TimingAnimation.__proto__ || Object.getPrototypeOf(TimingAnimation)).call(this));

				_this2._toValue = config.toValue;
				_this2._easing = config.easing !== undefined ? config.easing : easeInOut;
				_this2._duration = config.duration !== undefined ? config.duration : 500;
				_this2._delay = config.delay !== undefined ? config.delay : 0;
				_this2.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;return _this2;
			}babelHelpers.createClass(TimingAnimation, [{ key: 'start', value: function start(fromValue, onUpdate, onEnd) {
					var _this3 = this;
					this.__active = true;
					this._fromValue = fromValue;
					this._onUpdate = onUpdate;
					this.__onEnd = onEnd;

					var start = function start() {
						if (_this3._duration === 0) {
							_this3._onUpdate(_this3._toValue);
							_this3.__debouncedOnEnd({ finished: true });
						} else {
							_this3._startTime = Date.now();
							_this3._animationFrame = requestAnimationFrame(_this3.onUpdate.bind(_this3));
						}
					};
					if (this._delay) {
						this._timeout = setTimeout(start, this._delay);
					} else {
						start();
					}
				} }, { key: 'onUpdate', value: function onUpdate() {
					var now = Date.now();
					if (now >= this._startTime + this._duration) {
						if (this._duration === 0) {
							this._onUpdate(this._toValue);
						} else {
							this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
						}
						this.__debouncedOnEnd({ finished: true });
						return;
					}

					this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));

					if (this.__active) {
						this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
					}
				} }, { key: 'stop', value: function stop() {
					this.__active = false;
					clearTimeout(this._timeout);
					window.cancelAnimationFrame(this._animationFrame);
					this.__debouncedOnEnd({ finished: false });
				} }]);return TimingAnimation;
		}(Animation);var DecayAnimation = function (_Animation2) {
			babelHelpers.inherits(DecayAnimation, _Animation2);

			function DecayAnimation(config) {
				babelHelpers.classCallCheck(this, DecayAnimation);var _this4 = babelHelpers.possibleConstructorReturn(this, (DecayAnimation.__proto__ || Object.getPrototypeOf(DecayAnimation)).call(this));

				_this4._deceleration = config.deceleration !== undefined ? config.deceleration : 0.998;
				_this4._velocity = config.velocity;
				_this4.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;return _this4;
			}babelHelpers.createClass(DecayAnimation, [{ key: 'start', value: function start(fromValue, onUpdate, onEnd) {
					this.__active = true;
					this._lastValue = fromValue;
					this._fromValue = fromValue;
					this._onUpdate = onUpdate;
					this.__onEnd = onEnd;
					this._startTime = Date.now();
					this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
				} }, { key: 'onUpdate', value: function onUpdate() {
					var now = Date.now();

					var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));

					this._onUpdate(value);

					if (Math.abs(this._lastValue - value) < 0.1) {
						this.__debouncedOnEnd({ finished: true });
						return;
					}

					this._lastValue = value;
					if (this.__active) {
						this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
					}
				} }, { key: 'stop', value: function stop() {
					this.__active = false;
					window.cancelAnimationFrame(this._animationFrame);
					this.__debouncedOnEnd({ finished: false });
				} }]);return DecayAnimation;
		}(Animation);

		function withDefault(value, defaultValue) {
			if (value === undefined || value === null) {
				return defaultValue;
			}
			return value;
		}var SpringAnimation = function (_Animation3) {
			babelHelpers.inherits(SpringAnimation, _Animation3);

			function SpringAnimation(config) {
				babelHelpers.classCallCheck(this, SpringAnimation);var _this5 = babelHelpers.possibleConstructorReturn(this, (SpringAnimation.__proto__ || Object.getPrototypeOf(SpringAnimation)).call(this));

				_this5._overshootClamping = withDefault(config.overshootClamping, false);
				_this5._restDisplacementThreshold = withDefault(config.restDisplacementThreshold, 0.001);
				_this5._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.001);
				_this5._initialVelocity = config.velocity;
				_this5._lastVelocity = withDefault(config.velocity, 0);
				_this5._toValue = config.toValue;
				_this5.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;

				var springConfig;
				if (config.bounciness !== undefined || config.speed !== undefined) {
					invariant(config.tension === undefined && config.friction === undefined, 'You can only define bounciness/speed or tension/friction but not both');

					springConfig = SpringConfig.fromBouncinessAndSpeed(withDefault(config.bounciness, 8), withDefault(config.speed, 12));
				} else {
					springConfig = SpringConfig.fromOrigamiTensionAndFriction(withDefault(config.tension, 40), withDefault(config.friction, 7));
				}
				_this5._tension = springConfig.tension;
				_this5._friction = springConfig.friction;return _this5;
			}babelHelpers.createClass(SpringAnimation, [{ key: 'start', value: function start(fromValue, onUpdate, onEnd, previousAnimation) {
					this.__active = true;
					this._startPosition = fromValue;
					this._lastPosition = this._startPosition;

					this._onUpdate = onUpdate;
					this.__onEnd = onEnd;
					this._lastTime = Date.now();

					if (previousAnimation instanceof SpringAnimation) {
						var internalState = previousAnimation.getInternalState();
						this._lastPosition = internalState.lastPosition;
						this._lastVelocity = internalState.lastVelocity;
						this._lastTime = internalState.lastTime;
					}
					if (this._initialVelocity !== undefined && this._initialVelocity !== null) {
						this._lastVelocity = this._initialVelocity;
					}
					this.onUpdate();
				} }, { key: 'getInternalState', value: function getInternalState() {
					return {
						lastPosition: this._lastPosition,
						lastVelocity: this._lastVelocity,
						lastTime: this._lastTime };
				} }, { key: 'onUpdate', value: function onUpdate() {
					var position = this._lastPosition;
					var velocity = this._lastVelocity;

					var tempPosition = this._lastPosition;
					var tempVelocity = this._lastVelocity;

					var MAX_STEPS = 64;
					var now = Date.now();
					if (now > this._lastTime + MAX_STEPS) {
						now = this._lastTime + MAX_STEPS;
					}

					var TIMESTEP_MSEC = 1;
					var numSteps = Math.floor((now - this._lastTime) / TIMESTEP_MSEC);

					for (var i = 0; i < numSteps; ++i) {

						var step = TIMESTEP_MSEC / 1000;

						var aVelocity = velocity;
						var aAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						var tempPosition = position + aVelocity * step / 2;
						var tempVelocity = velocity + aAcceleration * step / 2;

						var bVelocity = tempVelocity;
						var bAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						tempPosition = position + bVelocity * step / 2;
						tempVelocity = velocity + bAcceleration * step / 2;

						var cVelocity = tempVelocity;
						var cAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						tempPosition = position + cVelocity * step / 2;
						tempVelocity = velocity + cAcceleration * step / 2;

						var dVelocity = tempVelocity;
						var dAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						tempPosition = position + cVelocity * step / 2;
						tempVelocity = velocity + cAcceleration * step / 2;

						var dxdt = (aVelocity + 2 * (bVelocity + cVelocity) + dVelocity) / 6;
						var dvdt = (aAcceleration + 2 * (bAcceleration + cAcceleration) + dAcceleration) / 6;

						position += dxdt * step;
						velocity += dvdt * step;
					}

					this._lastTime = now;
					this._lastPosition = position;
					this._lastVelocity = velocity;

					this._onUpdate(position);
					if (!this.__active) {
						return;
					}

					var isOvershooting = false;
					if (this._overshootClamping && this._tension !== 0) {
						if (this._startPosition < this._toValue) {
							isOvershooting = position > this._toValue;
						} else {
							isOvershooting = position < this._toValue;
						}
					}
					var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
					var isDisplacement = true;
					if (this._tension !== 0) {
						isDisplacement = Math.abs(this._toValue - position) <= this._restDisplacementThreshold;
					}

					if (isOvershooting || isVelocity && isDisplacement) {
						if (this._tension !== 0) {

							this._onUpdate(this._toValue);
						}

						this.__debouncedOnEnd({ finished: true });
						return;
					}
					this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
				} }, { key: 'stop', value: function stop() {
					this.__active = false;
					window.cancelAnimationFrame(this._animationFrame);
					this.__debouncedOnEnd({ finished: false });
				} }]);return SpringAnimation;
		}(Animation);

		var _uniqueId = 1;var AnimatedValue = function (_AnimatedWithChildren) {
			babelHelpers.inherits(AnimatedValue, _AnimatedWithChildren);

			function AnimatedValue(value) {
				babelHelpers.classCallCheck(this, AnimatedValue);var _this6 = babelHelpers.possibleConstructorReturn(this, (AnimatedValue.__proto__ || Object.getPrototypeOf(AnimatedValue)).call(this));

				_this6._value = value;
				_this6._offset = 0;
				_this6._animation = null;
				_this6._listeners = {};return _this6;
			}babelHelpers.createClass(AnimatedValue, [{ key: '__detach', value: function __detach() {
					this.stopAnimation();
				} }, { key: '__getValue', value: function __getValue() {
					return this._value + this._offset;
				} }, { key: 'setValue', value: function setValue(value) {
					if (this._animation) {
						this._animation.stop();
						this._animation = null;
					}
					this._updateValue(value);
				} }, { key: 'setOffset', value: function setOffset(offset) {
					this._offset = offset;
				} }, { key: 'flattenOffset', value: function flattenOffset() {
					this._value += this._offset;
					this._offset = 0;
				} }, { key: 'addListener', value: function addListener(callback) {
					var id = String(_uniqueId++);
					this._listeners[id] = callback;
					return id;
				} }, { key: 'removeListener', value: function removeListener(id) {
					delete this._listeners[id];
				} }, { key: 'removeAllListeners', value: function removeAllListeners() {
					this._listeners = {};
				} }, { key: 'stopAnimation', value: function stopAnimation(callback) {
					this.stopTracking();
					this._animation && this._animation.stop();
					this._animation = null;
					callback && callback(this.__getValue());
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, Interpolation.create(config));
				} }, { key: 'animate', value: function animate(animation, callback) {
					var _this7 = this;
					var handle = null;
					if (animation.__isInteraction) {
						handle = InteractionManager.createInteractionHandle();
					}
					var previousAnimation = this._animation;
					this._animation && this._animation.stop();
					this._animation = animation;
					animation.start(this._value, function (value) {
						_this7._updateValue(value);
					}, function (result) {
						_this7._animation = null;
						if (handle !== null) {
							InteractionManager.clearInteractionHandle(handle);
						}
						callback && callback(result);
					}, previousAnimation);
				} }, { key: 'stopTracking', value: function stopTracking() {
					this._tracking && this._tracking.__detach();
					this._tracking = null;
				} }, { key: 'track', value: function track(tracking) {
					this.stopTracking();
					this._tracking = tracking;
				} }, { key: '_updateValue', value: function _updateValue(value) {
					this._value = value;
					_flush(this);
					for (var key in this._listeners) {
						this._listeners[key]({ value: this.__getValue() });
					}
				} }]);return AnimatedValue;
		}(AnimatedWithChildren);var AnimatedValueXY = function (_AnimatedWithChildren2) {
			babelHelpers.inherits(AnimatedValueXY, _AnimatedWithChildren2);

			function AnimatedValueXY(valueIn) {
				babelHelpers.classCallCheck(this, AnimatedValueXY);var _this8 = babelHelpers.possibleConstructorReturn(this, (AnimatedValueXY.__proto__ || Object.getPrototypeOf(AnimatedValueXY)).call(this));

				var value = valueIn || { x: 0, y: 0 };
				if (typeof value.x === 'number' && typeof value.y === 'number') {
					_this8.x = new AnimatedValue(value.x);
					_this8.y = new AnimatedValue(value.y);
				} else {
					invariant(value.x instanceof AnimatedValue && value.y instanceof AnimatedValue, 'AnimatedValueXY must be initalized with an object of numbers or ' + 'AnimatedValues.');

					_this8.x = value.x;
					_this8.y = value.y;
				}
				_this8._listeners = {};return _this8;
			}babelHelpers.createClass(AnimatedValueXY, [{ key: 'setValue', value: function setValue(value) {
					this.x.setValue(value.x);
					this.y.setValue(value.y);
				} }, { key: 'setOffset', value: function setOffset(offset) {
					this.x.setOffset(offset.x);
					this.y.setOffset(offset.y);
				} }, { key: 'flattenOffset', value: function flattenOffset() {
					this.x.flattenOffset();
					this.y.flattenOffset();
				} }, { key: '__getValue', value: function __getValue() {
					return {
						x: this.x.__getValue(),
						y: this.y.__getValue() };
				} }, { key: 'stopAnimation', value: function stopAnimation(callback) {
					this.x.stopAnimation();
					this.y.stopAnimation();
					callback && callback(this.__getValue());
				} }, { key: 'addListener', value: function addListener(callback) {
					var _this9 = this;
					var id = String(_uniqueId++);
					var jointCallback = function jointCallback(_ref) {
						var number = _ref.value;
						callback(_this9.__getValue());
					};
					this._listeners[id] = {
						x: this.x.addListener(jointCallback),
						y: this.y.addListener(jointCallback) };

					return id;
				} }, { key: 'removeListener', value: function removeListener(id) {
					this.x.removeListener(this._listeners[id].x);
					this.y.removeListener(this._listeners[id].y);
					delete this._listeners[id];
				} }, { key: 'getLayout', value: function getLayout() {
					return {
						left: this.x,
						top: this.y };
				} }, { key: 'getTranslateTransform', value: function getTranslateTransform() {
					return [{ translateX: this.x }, { translateY: this.y }];
				} }]);return AnimatedValueXY;
		}(AnimatedWithChildren);var AnimatedInterpolation = function (_AnimatedWithChildren3) {
			babelHelpers.inherits(AnimatedInterpolation, _AnimatedWithChildren3);

			function AnimatedInterpolation(parent, interpolation) {
				babelHelpers.classCallCheck(this, AnimatedInterpolation);var _this10 = babelHelpers.possibleConstructorReturn(this, (AnimatedInterpolation.__proto__ || Object.getPrototypeOf(AnimatedInterpolation)).call(this));

				_this10._parent = parent;
				_this10._interpolation = interpolation;return _this10;
			}babelHelpers.createClass(AnimatedInterpolation, [{ key: '__getValue', value: function __getValue() {
					var parentValue = this._parent.__getValue();
					invariant(typeof parentValue === 'number', 'Cannot interpolate an input which is not a number.');

					return this._interpolation(parentValue);
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, Interpolation.create(config));
				} }, { key: '__attach', value: function __attach() {
					this._parent.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._parent.__removeChild(this);
				} }]);return AnimatedInterpolation;
		}(AnimatedWithChildren);var AnimatedAddition = function (_AnimatedWithChildren4) {
			babelHelpers.inherits(AnimatedAddition, _AnimatedWithChildren4);

			function AnimatedAddition(a, b) {
				babelHelpers.classCallCheck(this, AnimatedAddition);var _this11 = babelHelpers.possibleConstructorReturn(this, (AnimatedAddition.__proto__ || Object.getPrototypeOf(AnimatedAddition)).call(this));

				_this11._a = a;
				_this11._b = b;return _this11;
			}babelHelpers.createClass(AnimatedAddition, [{ key: '__getValue', value: function __getValue() {
					return this._a.__getValue() + this._b.__getValue();
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, Interpolation.create(config));
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
					this._b.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
					this._b.__removeChild(this);
				} }]);return AnimatedAddition;
		}(AnimatedWithChildren);var AnimatedMultiplication = function (_AnimatedWithChildren5) {
			babelHelpers.inherits(AnimatedMultiplication, _AnimatedWithChildren5);

			function AnimatedMultiplication(a, b) {
				babelHelpers.classCallCheck(this, AnimatedMultiplication);var _this12 = babelHelpers.possibleConstructorReturn(this, (AnimatedMultiplication.__proto__ || Object.getPrototypeOf(AnimatedMultiplication)).call(this));

				_this12._a = a;
				_this12._b = b;return _this12;
			}babelHelpers.createClass(AnimatedMultiplication, [{ key: '__getValue', value: function __getValue() {
					return this._a.__getValue() * this._b.__getValue();
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, Interpolation.create(config));
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
					this._b.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
					this._b.__removeChild(this);
				} }]);return AnimatedMultiplication;
		}(AnimatedWithChildren);var AnimatedTransform = function (_AnimatedWithChildren6) {
			babelHelpers.inherits(AnimatedTransform, _AnimatedWithChildren6);

			function AnimatedTransform(transforms) {
				babelHelpers.classCallCheck(this, AnimatedTransform);var _this13 = babelHelpers.possibleConstructorReturn(this, (AnimatedTransform.__proto__ || Object.getPrototypeOf(AnimatedTransform)).call(this));

				_this13._transforms = transforms;return _this13;
			}babelHelpers.createClass(AnimatedTransform, [{ key: '__getValue', value: function __getValue() {
					return this._transforms.map(function (transform) {
						var result = {};
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								result[key] = value.__getValue();
							} else {
								result[key] = value;
							}
						}
						return result;
					});
				} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					return this._transforms.map(function (transform) {
						var result = {};
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								result[key] = value.__getAnimatedValue();
							} else {

								result[key] = value;
							}
						}
						return result;
					});
				} }, { key: '__attach', value: function __attach() {
					var _this14 = this;
					this._transforms.forEach(function (transform) {
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								value.__addChild(_this14);
							}
						}
					});
				} }, { key: '__detach', value: function __detach() {
					var _this15 = this;
					this._transforms.forEach(function (transform) {
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								value.__removeChild(_this15);
							}
						}
					});
				} }]);return AnimatedTransform;
		}(AnimatedWithChildren);var AnimatedStyle = function (_AnimatedWithChildren7) {
			babelHelpers.inherits(AnimatedStyle, _AnimatedWithChildren7);

			function AnimatedStyle(style) {
				babelHelpers.classCallCheck(this, AnimatedStyle);var _this16 = babelHelpers.possibleConstructorReturn(this, (AnimatedStyle.__proto__ || Object.getPrototypeOf(AnimatedStyle)).call(this));

				style = flattenStyle(style) || {};
				if (style.transform) {
					style = babelHelpers.extends({}, style, {
						transform: new AnimatedTransform(style.transform) });
				}
				_this16._style = style;return _this16;
			}babelHelpers.createClass(AnimatedStyle, [{ key: '__getValue', value: function __getValue() {
					var style = {};
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							style[key] = value.__getValue();
						} else {
							style[key] = value;
						}
					}
					return style;
				} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					var style = {};
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							style[key] = value.__getAnimatedValue();
						}
					}
					return style;
				} }, { key: '__attach', value: function __attach() {
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							value.__addChild(this);
						}
					}
				} }, { key: '__detach', value: function __detach() {
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							value.__removeChild(this);
						}
					}
				} }]);return AnimatedStyle;
		}(AnimatedWithChildren);var AnimatedProps = function (_Animated2) {
			babelHelpers.inherits(AnimatedProps, _Animated2);

			function AnimatedProps(props, callback) {
				babelHelpers.classCallCheck(this, AnimatedProps);var _this17 = babelHelpers.possibleConstructorReturn(this, (AnimatedProps.__proto__ || Object.getPrototypeOf(AnimatedProps)).call(this));

				if (props.style) {
					props = babelHelpers.extends({}, props, {
						style: new AnimatedStyle(props.style) });
				}
				_this17._props = props;
				_this17._callback = callback;
				_this17.__attach();return _this17;
			}babelHelpers.createClass(AnimatedProps, [{ key: '__getValue', value: function __getValue() {
					var props = {};
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							props[key] = value.__getValue();
						} else {
							props[key] = value;
						}
					}
					return props;
				} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					var props = {};
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							props[key] = value.__getAnimatedValue();
						}
					}
					return props;
				} }, { key: '__attach', value: function __attach() {
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							value.__addChild(this);
						}
					}
				} }, { key: '__detach', value: function __detach() {
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							value.__removeChild(this);
						}
					}
				} }, { key: 'update', value: function update() {
					this._callback();
				} }]);return AnimatedProps;
		}(Animated);

		function createAnimatedComponent(Component) {
			var refName = 'node';var AnimatedComponent = function (_React$Component) {
				babelHelpers.inherits(AnimatedComponent, _React$Component);function AnimatedComponent() {
					babelHelpers.classCallCheck(this, AnimatedComponent);return babelHelpers.possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).apply(this, arguments));
				}babelHelpers.createClass(AnimatedComponent, [{ key: 'componentWillUnmount', value: function componentWillUnmount() {
						this._propsAnimated && this._propsAnimated.__detach();
					} }, { key: 'setNativeProps', value: function setNativeProps(props) {
						this.refs[refName].setNativeProps(props);
					} }, { key: 'componentWillMount', value: function componentWillMount() {
						this.attachProps(this.props);
					} }, { key: 'attachProps', value: function attachProps(nextProps) {
						var _this19 = this;
						var oldPropsAnimated = this._propsAnimated;

						var callback = function callback() {
							if (_this19.refs[refName].setNativeProps) {
								var value = _this19._propsAnimated.__getAnimatedValue();
								_this19.refs[refName].setNativeProps(value);
							} else {
								_this19.forceUpdate();
							}
						};

						this._propsAnimated = new AnimatedProps(nextProps, callback);

						oldPropsAnimated && oldPropsAnimated.__detach();
					} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
						this.attachProps(nextProps);
					} }, { key: 'render', value: function render() {
						return React.createElement(Component, babelHelpers.extends({}, this._propsAnimated.__getValue(), {
							ref: refName }));
					} }]);return AnimatedComponent;
			}(React.Component);

			AnimatedComponent.propTypes = {
				style: function style(props, propName, componentName) {
					if (!Component.propTypes) {
						return;
					}

					for (var key in ViewStylePropTypes) {
						if (!Component.propTypes[key] && props[key] !== undefined) {
							console.error('You are setting the style `{ ' + key + ': ... }` as a prop. You ' + 'should nest it in a style object. ' + 'E.g. `{ style: { ' + key + ': ... } }`');
						}
					}
				} };

			return AnimatedComponent;
		}var AnimatedTracking = function (_Animated3) {
			babelHelpers.inherits(AnimatedTracking, _Animated3);

			function AnimatedTracking(value, parent, animationClass, animationConfig, callback) {
				babelHelpers.classCallCheck(this, AnimatedTracking);var _this20 = babelHelpers.possibleConstructorReturn(this, (AnimatedTracking.__proto__ || Object.getPrototypeOf(AnimatedTracking)).call(this));

				_this20._value = value;
				_this20._parent = parent;
				_this20._animationClass = animationClass;
				_this20._animationConfig = animationConfig;
				_this20._callback = callback;
				_this20.__attach();return _this20;
			}babelHelpers.createClass(AnimatedTracking, [{ key: '__getValue', value: function __getValue() {
					return this._parent.__getValue();
				} }, { key: '__attach', value: function __attach() {
					this._parent.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._parent.__removeChild(this);
				} }, { key: 'update', value: function update() {
					this._value.animate(new this._animationClass(babelHelpers.extends({}, this._animationConfig, {
						toValue: this._animationConfig.toValue.__getValue() })), this._callback);
				} }]);return AnimatedTracking;
		}(Animated);

		var add = function add(a, b) {
			return new AnimatedAddition(a, b);
		};

		var multiply = function multiply(a, b) {
			return new AnimatedMultiplication(a, b);
		};

		var maybeVectorAnim = function maybeVectorAnim(value, config, anim) {
			if (value instanceof AnimatedValueXY) {
				var configX = babelHelpers.extends({}, config);
				var configY = babelHelpers.extends({}, config);
				for (var key in config) {
					var _config$key = config[key],
					    x = _config$key.x,
					    y = _config$key.y;
					if (x !== undefined && y !== undefined) {
						configX[key] = x;
						configY[key] = y;
					}
				}
				var aX = anim(value.x, configX);
				var aY = anim(value.y, configY);

				return parallel([aX, aY], { stopTogether: false });
			}
			return null;
		};

		var spring = function spring(value, config) {
			return maybeVectorAnim(value, config, spring) || {
				start: function start(callback) {
					var singleValue = value;
					var singleConfig = config;
					singleValue.stopTracking();
					if (config.toValue instanceof Animated) {
						singleValue.track(new AnimatedTracking(singleValue, config.toValue, SpringAnimation, singleConfig, callback));
					} else {
						singleValue.animate(new SpringAnimation(singleConfig), callback);
					}
				},

				stop: function stop() {
					value.stopAnimation();
				} };
		};

		var timing = function timing(value, config) {
			return maybeVectorAnim(value, config, timing) || {
				start: function start(callback) {
					var singleValue = value;
					var singleConfig = config;
					singleValue.stopTracking();
					if (config.toValue instanceof Animated) {
						singleValue.track(new AnimatedTracking(singleValue, config.toValue, TimingAnimation, singleConfig, callback));
					} else {
						singleValue.animate(new TimingAnimation(singleConfig), callback);
					}
				},

				stop: function stop() {
					value.stopAnimation();
				} };
		};

		var decay = function decay(value, config) {
			return maybeVectorAnim(value, config, decay) || {
				start: function start(callback) {
					var singleValue = value;
					var singleConfig = config;
					singleValue.stopTracking();
					singleValue.animate(new DecayAnimation(singleConfig), callback);
				},

				stop: function stop() {
					value.stopAnimation();
				} };
		};

		var sequence = function sequence(animations) {
			var current = 0;
			return {
				start: function start(callback) {
					var onComplete = function onComplete(result) {
						if (!result.finished) {
							callback && callback(result);
							return;
						}

						current++;

						if (current === animations.length) {
							callback && callback(result);
							return;
						}

						animations[current].start(onComplete);
					};

					if (animations.length === 0) {
						callback && callback({ finished: true });
					} else {
						animations[current].start(onComplete);
					}
				},

				stop: function stop() {
					if (current < animations.length) {
						animations[current].stop();
					}
				} };
		};

		var parallel = function parallel(animations, config) {
			var doneCount = 0;

			var hasEnded = {};
			var stopTogether = !(config && config.stopTogether === false);

			var result = {
				start: function start(callback) {
					if (doneCount === animations.length) {
						callback && callback({ finished: true });
						return;
					}

					animations.forEach(function (animation, idx) {
						var cb = function cb(endResult) {
							hasEnded[idx] = true;
							doneCount++;
							if (doneCount === animations.length) {
								doneCount = 0;
								callback && callback(endResult);
								return;
							}

							if (!endResult.finished && stopTogether) {
								result.stop();
							}
						};

						if (!animation) {
							cb({ finished: true });
						} else {
							animation.start(cb);
						}
					});
				},

				stop: function stop() {
					animations.forEach(function (animation, idx) {
						!hasEnded[idx] && animation.stop();
						hasEnded[idx] = true;
					});
				} };

			return result;
		};

		var delay = function delay(time) {

			return timing(new AnimatedValue(0), { toValue: 0, delay: time, duration: 0 });
		};

		var stagger = function stagger(time, animations) {
			return parallel(animations.map(function (animation, i) {
				return sequence([delay(time * i), animation]);
			}));
		};

		var event = function event(argMapping, config) {
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
				var traverse = function traverse(recMapping, recEvt, key) {
					if (typeof recEvt === 'number') {
						invariant(recMapping instanceof AnimatedValue, 'Bad mapping of type ' + typeof recMapping + ' for key ' + key + ', event value must map to AnimatedValue');

						recMapping.setValue(recEvt);
						return;
					}
					invariant(typeof recMapping === 'object', 'Bad mapping of type ' + typeof recMapping + ' for key ' + key);

					invariant(typeof recEvt === 'object', 'Bad event of type ' + typeof recEvt + ' for key ' + key);

					for (var key in recMapping) {
						traverse(recMapping[key], recEvt[key], key);
					}
				};
				argMapping.forEach(function (mapping, idx) {
					traverse(mapping, args[idx], 'arg' + idx);
				});
				if (config && config.listener) {
					config.listener.apply(null, args);
				}
			};
		};

		module.exports = {

			Value: AnimatedValue,

			ValueXY: AnimatedValueXY,

			decay: decay,

			timing: timing,

			spring: spring,

			add: add,

			multiply: multiply,

			delay: delay,

			sequence: sequence,

			parallel: parallel,

			stagger: stagger,

			event: event,

			createAnimatedComponent: createAnimatedComponent,

			__PropsOnlyForTests: AnimatedProps };
	},
	// Libraries/Animated/src/Easing.js
	function (__inner_require__, exports, module) {
		var _bezier = __inner_require__(168 /*Libraries/Animated/src/bezier.js*/);var Easing = function () {
			function Easing() {
				babelHelpers.classCallCheck(this, Easing);
			}babelHelpers.createClass(Easing, null, [{ key: 'step0', value: function step0(n) {
					return n > 0 ? 1 : 0;
				} }, { key: 'step1', value: function step1(n) {
					return n >= 1 ? 1 : 0;
				} }, { key: 'linear', value: function linear(t) {
					return t;
				} }, { key: 'ease', value: function ease(t) {
					return _ease(t);
				} }, { key: 'quad', value: function quad(t) {
					return t * t;
				} }, { key: 'cubic', value: function cubic(t) {
					return t * t * t;
				} }, { key: 'poly', value: function poly(n) {
					return function (t) {
						return Math.pow(t, n);
					};
				} }, { key: 'sin', value: function sin(t) {
					return 1 - Math.cos(t * Math.PI / 2);
				} }, { key: 'circle', value: function circle(t) {
					return 1 - Math.sqrt(1 - t * t);
				} }, { key: 'exp', value: function exp(t) {
					return Math.pow(2, 10 * (t - 1));
				} }, { key: 'elastic', value: function elastic() {
					var bounciness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
					var p = bounciness * Math.PI;
					return function (t) {
						return 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
					};
				} }, { key: 'back', value: function back(s) {
					if (s === undefined) {
						s = 1.70158;
					}
					return function (t) {
						return t * t * ((s + 1) * t - s);
					};
				} }, { key: 'bounce', value: function bounce(t) {
					if (t < 1 / 2.75) {
						return 7.5625 * t * t;
					}

					if (t < 2 / 2.75) {
						t -= 1.5 / 2.75;
						return 7.5625 * t * t + 0.75;
					}

					if (t < 2.5 / 2.75) {
						t -= 2.25 / 2.75;
						return 7.5625 * t * t + 0.9375;
					}

					t -= 2.625 / 2.75;
					return 7.5625 * t * t + 0.984375;
				} }, { key: 'bezier', value: function bezier(x1, y1, x2, y2, epsilon) {
					if (epsilon === undefined) {

						var duration = 500;
						epsilon = 1000 / 60 / duration / 4;
					}

					return _bezier(x1, y1, x2, y2, epsilon);
				} }, { key: 'in', value: function _in(easing) {
					return easing;
				} }, { key: 'out', value: function out(easing) {
					return function (t) {
						return 1 - easing(1 - t);
					};
				} }, { key: 'inOut', value: function inOut(easing) {
					return function (t) {
						if (t < 0.5) {
							return easing(t * 2) / 2;
						}
						return 1 - easing((1 - t) * 2) / 2;
					};
				} }]);return Easing;
		}();

		var _ease = Easing.bezier(0.42, 0, 1, 1);

		module.exports = Easing;
	},
	// Libraries/Animated/src/bezier.js
	function (__inner_require__, exports, module) {
		module.exports = function (x1, y1, x2, y2, epsilon) {

			var curveX = function curveX(t) {
				var v = 1 - t;
				return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
			};

			var curveY = function curveY(t) {
				var v = 1 - t;
				return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
			};

			var derivativeCurveX = function derivativeCurveX(t) {
				var v = 1 - t;
				return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
			};

			return function (t) {

				var x = t,
				    t0,
				    t1,
				    t2,
				    x2,
				    d2,
				    i;

				for (t2 = x, i = 0; i < 8; i++) {
					x2 = curveX(t2) - x;
					if (Math.abs(x2) < epsilon) {
						return curveY(t2);
					}
					d2 = derivativeCurveX(t2);
					if (Math.abs(d2) < 1e-6) {
						break;
					}
					t2 = t2 - x2 / d2;
				}

				t0 = 0;
				t1 = 1;
				t2 = x;

				if (t2 < t0) {
					return curveY(t0);
				}
				if (t2 > t1) {
					return curveY(t1);
				}

				while (t0 < t1) {
					x2 = curveX(t2);
					if (Math.abs(x2 - x) < epsilon) {
						return curveY(t2);
					}
					if (x > x2) {
						t0 = t2;
					} else {
						t1 = t2;
					}
					t2 = (t1 - t0) * 0.5 + t0;
				}

				return curveY(t2);
			};
		};
	},
	// Libraries/Animated/src/Interpolation.js
	function (__inner_require__, exports, module) {
		var normalizeColor = require('react-native@0.21/Libraries/StyleSheet/normalizeColor.js');

		var invariant = function invariant(condition, message) {
			if (!condition) {
				var error = new Error(message);
				error.framesToPop = 1;
				throw error;
			}
		};

		var linear = function linear(t) {
			return t;
		};var Interpolation = function () {
			function Interpolation() {
				babelHelpers.classCallCheck(this, Interpolation);
			}babelHelpers.createClass(Interpolation, null, [{ key: 'create', value: function create(config) {

					if (config.outputRange && typeof config.outputRange[0] === 'string') {
						return createInterpolationFromStringOutputRange(config);
					}

					var outputRange = config.outputRange;
					checkInfiniteRange('outputRange', outputRange);

					var inputRange = config.inputRange;
					checkInfiniteRange('inputRange', inputRange);
					checkValidInputRange(inputRange);

					invariant(inputRange.length === outputRange.length, 'inputRange (' + inputRange.length + ') and outputRange (' + outputRange.length + ') must have the same length');

					var easing = config.easing || linear;

					var extrapolateLeft = 'extend';
					if (config.extrapolateLeft !== undefined) {
						extrapolateLeft = config.extrapolateLeft;
					} else if (config.extrapolate !== undefined) {
						extrapolateLeft = config.extrapolate;
					}

					var extrapolateRight = 'extend';
					if (config.extrapolateRight !== undefined) {
						extrapolateRight = config.extrapolateRight;
					} else if (config.extrapolate !== undefined) {
						extrapolateRight = config.extrapolate;
					}

					return function (input) {
						invariant(typeof input === 'number', 'Cannot interpolation an input which is not a number');

						var range = findRange(input, inputRange);
						return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight);
					};
				} }]);return Interpolation;
		}();

		function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
			var result = input;

			if (result < inputMin) {
				if (extrapolateLeft === 'identity') {
					return result;
				} else if (extrapolateLeft === 'clamp') {
					result = inputMin;
				} else if (extrapolateLeft === 'extend') {}
			}

			if (result > inputMax) {
				if (extrapolateRight === 'identity') {
					return result;
				} else if (extrapolateRight === 'clamp') {
					result = inputMax;
				} else if (extrapolateRight === 'extend') {}
			}

			if (outputMin === outputMax) {
				return outputMin;
			}

			if (inputMin === inputMax) {
				if (input <= inputMin) {
					return outputMin;
				}
				return outputMax;
			}

			if (inputMin === -Infinity) {
				result = -result;
			} else if (inputMax === Infinity) {
				result = result - inputMin;
			} else {
				result = (result - inputMin) / (inputMax - inputMin);
			}

			result = easing(result);

			if (outputMin === -Infinity) {
				result = -result;
			} else if (outputMax === Infinity) {
				result = result + outputMin;
			} else {
				result = result * (outputMax - outputMin) + outputMin;
			}

			return result;
		}

		function colorToRgba(input) {
			var int32Color = normalizeColor(input);
			if (int32Color === null) {
				return input;
			}

			int32Color = int32Color || 0;

			var r = (int32Color & 0xff000000) >>> 24;
			var g = (int32Color & 0x00ff0000) >>> 16;
			var b = (int32Color & 0x0000ff00) >>> 8;
			var a = (int32Color & 0x000000ff) / 255;

			return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
		}

		var stringShapeRegex = /[0-9\.-]+/g;

		function createInterpolationFromStringOutputRange(config) {
			var outputRange = config.outputRange;
			invariant(outputRange.length >= 2, 'Bad output range');
			outputRange = outputRange.map(colorToRgba);
			checkPattern(outputRange);

			var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
				return [];
			});
			outputRange.forEach(function (value) {

				value.match(stringShapeRegex).forEach(function (number, i) {
					outputRanges[i].push(+number);
				});
			});

			var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
				return Interpolation.create(babelHelpers.extends({}, config, {
					outputRange: outputRanges[i] }));
			});

			return function (input) {
				var i = 0;

				return outputRange[0].replace(stringShapeRegex, function () {
					return String(interpolations[i++](input));
				});
			};
		}

		function checkPattern(arr) {
			var pattern = arr[0].replace(stringShapeRegex, '');
			for (var i = 1; i < arr.length; ++i) {
				invariant(pattern === arr[i].replace(stringShapeRegex, ''), 'invalid pattern ' + arr[0] + ' and ' + arr[i]);
			}
		}

		function findRange(input, inputRange) {
			for (var i = 1; i < inputRange.length - 1; ++i) {
				if (inputRange[i] >= input) {
					break;
				}
			}
			return i - 1;
		}

		function checkValidInputRange(arr) {
			invariant(arr.length >= 2, 'inputRange must have at least 2 elements');
			for (var i = 1; i < arr.length; ++i) {
				invariant(arr[i] >= arr[i - 1], 'inputRange must be monotonically increasing ' + arr);
			}
		}

		function checkInfiniteRange(name, arr) {
			invariant(arr.length >= 2, name + ' must have at least 2 elements');
			invariant(arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity, name + 'cannot be ]-infinity;+infinity[ ' + arr);
		}

		module.exports = Interpolation;
	},
	// Libraries/Animated/src/SpringConfig.js
	function (__inner_require__, exports, module) {
		function tensionFromOrigamiValue(oValue) {
			return (oValue - 30) * 3.62 + 194;
		}

		function frictionFromOrigamiValue(oValue) {
			return (oValue - 8) * 3 + 25;
		}

		function fromOrigamiTensionAndFriction(tension, friction) {
			return {
				tension: tensionFromOrigamiValue(tension),
				friction: frictionFromOrigamiValue(friction) };
		}

		function fromBouncinessAndSpeed(bounciness, speed) {
			function normalize(value, startValue, endValue) {
				return (value - startValue) / (endValue - startValue);
			}

			function projectNormal(n, start, end) {
				return start + n * (end - start);
			}

			function linearInterpolation(t, start, end) {
				return t * end + (1 - t) * start;
			}

			function quadraticOutInterpolation(t, start, end) {
				return linearInterpolation(2 * t - t * t, start, end);
			}

			function b3Friction1(x) {
				return 0.0007 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
			}

			function b3Friction2(x) {
				return 0.000044 * Math.pow(x, 3) - 0.006 * Math.pow(x, 2) + 0.36 * x + 2;
			}

			function b3Friction3(x) {
				return 0.00000045 * Math.pow(x, 3) - 0.000332 * Math.pow(x, 2) + 0.1078 * x + 5.84;
			}

			function b3Nobounce(tension) {
				if (tension <= 18) {
					return b3Friction1(tension);
				} else if (tension > 18 && tension <= 44) {
					return b3Friction2(tension);
				} else {
					return b3Friction3(tension);
				}
			}

			var b = normalize(bounciness / 1.7, 0, 20);
			b = projectNormal(b, 0, 0.8);
			var s = normalize(speed / 1.7, 0, 20);
			var bouncyTension = projectNormal(s, 0.5, 200);
			var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);

			return {
				tension: tensionFromOrigamiValue(bouncyTension),
				friction: frictionFromOrigamiValue(bouncyFriction) };
		}

		module.exports = {
			fromOrigamiTensionAndFriction: fromOrigamiTensionAndFriction,
			fromBouncinessAndSpeed: fromBouncinessAndSpeed };
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/requestAnimationFrame.js
	function (__inner_require__, exports, module) {
		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var nativeRequestAnimationFrame = __inner_require__(172 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/nativeRequestAnimationFrame.js*/);

		var lastTime = 0;

		var requestAnimationFrame = nativeRequestAnimationFrame || function (callback) {
			var currTime = Date.now();
			var timeDelay = Math.max(0, 16 - (currTime - lastTime));
			lastTime = currTime + timeDelay;
			return global.setTimeout(function () {
				callback(Date.now());
			}, timeDelay);
		};

		requestAnimationFrame(emptyFunction);

		module.exports = requestAnimationFrame;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/nativeRequestAnimationFrame.js
	function (__inner_require__, exports, module) {
		var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;

		module.exports = nativeRequestAnimationFrame;
	},
	// Libraries/Components/ViewPager/ViewPagerAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(65 /*Libraries/Components/UnimplementedViews/UnimplementedView.js*/);
	},
	// Libraries/Components/WebView/WebView.ios.js
	function (__inner_require__, exports, module) {
		var ActivityIndicatorIOS = __inner_require__(1 /*Libraries/Components/ActivityIndicatorIOS/ActivityIndicatorIOS.ios.js*/);
		var EdgeInsetsPropType = __inner_require__(94 /*Libraries/StyleSheet/EdgeInsetsPropType.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var ScrollView = __inner_require__(100 /*Libraries/Components/ScrollView/ScrollView.js*/);

		var deprecatedPropType = __inner_require__(54 /*Libraries/Utilities/deprecatedPropType.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');
		var processDecelerationRate = __inner_require__(105 /*Libraries/Components/ScrollView/processDecelerationRate.js*/);
		var requireNativeComponent = __inner_require__(64 /*Libraries/ReactIOS/requireNativeComponent.js*/);
		var resolveAssetSource = __inner_require__(79 /*Libraries/Image/resolveAssetSource.js*/);

		var PropTypes = React.PropTypes;
		var RCTWebViewManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').WebViewManager;

		var BGWASH = 'rgba(255,255,255,0.8)';
		var RCT_WEBVIEW_REF = 'webview';

		var WebViewState = keyMirror({
			IDLE: null,
			LOADING: null,
			ERROR: null });

		var NavigationType = {
			click: RCTWebViewManager.NavigationType.LinkClicked,
			formsubmit: RCTWebViewManager.NavigationType.FormSubmitted,
			backforward: RCTWebViewManager.NavigationType.BackForward,
			reload: RCTWebViewManager.NavigationType.Reload,
			formresubmit: RCTWebViewManager.NavigationType.FormResubmitted,
			other: RCTWebViewManager.NavigationType.Other };

		var JSNavigationScheme = RCTWebViewManager.JSNavigationScheme;

		var defaultRenderLoading = function defaultRenderLoading() {
			return React.createElement(View, { style: styles.loadingView }, React.createElement(ActivityIndicatorIOS, null));
		};

		var defaultRenderError = function defaultRenderError(errorDomain, errorCode, errorDesc) {
			return React.createElement(View, { style: styles.errorContainer }, React.createElement(Text, { style: styles.errorTextTitle }, 'Error loading page'), React.createElement(Text, { style: styles.errorText }, 'Domain: ' + errorDomain), React.createElement(Text, { style: styles.errorText }, 'Error Code: ' + errorCode), React.createElement(Text, { style: styles.errorText }, 'Description: ' + errorDesc));
		};

		var WebView = React.createClass({ displayName: 'WebView',
			statics: {
				JSNavigationScheme: JSNavigationScheme,
				NavigationType: NavigationType },

			propTypes: babelHelpers.extends({}, View.propTypes, {

				html: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'),

				url: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'),

				source: PropTypes.oneOfType([PropTypes.shape({

					uri: PropTypes.string,

					method: PropTypes.string,

					headers: PropTypes.object,

					body: PropTypes.string }), PropTypes.shape({

					html: PropTypes.string,

					baseUrl: PropTypes.string }), PropTypes.number]),

				renderError: PropTypes.func,

				renderLoading: PropTypes.func,

				onLoad: PropTypes.func,

				onLoadEnd: PropTypes.func,

				onLoadStart: PropTypes.func,

				onError: PropTypes.func,

				bounces: PropTypes.bool,

				decelerationRate: ScrollView.propTypes.decelerationRate,

				scrollEnabled: PropTypes.bool,
				automaticallyAdjustContentInsets: PropTypes.bool,
				contentInset: EdgeInsetsPropType,
				onNavigationStateChange: PropTypes.func,
				startInLoadingState: PropTypes.bool,
				style: View.propTypes.style,

				javaScriptEnabled: PropTypes.bool,

				domStorageEnabled: PropTypes.bool,

				injectedJavaScript: PropTypes.string,

				scalesPageToFit: PropTypes.bool,

				onShouldStartLoadWithRequest: PropTypes.func,

				allowsInlineMediaPlayback: PropTypes.bool }),

			getInitialState: function getInitialState() {
				return {
					viewState: WebViewState.IDLE,
					lastErrorEvent: null,
					startInLoadingState: true };
			},

			componentWillMount: function componentWillMount() {
				if (this.props.startInLoadingState) {
					this.setState({ viewState: WebViewState.LOADING });
				}
			},

			render: function render() {
				var _this = this;
				var otherView = null;

				if (this.state.viewState === WebViewState.LOADING) {
					otherView = (this.props.renderLoading || defaultRenderLoading)();
				} else if (this.state.viewState === WebViewState.ERROR) {
					var errorEvent = this.state.lastErrorEvent;
					invariant(errorEvent != null, 'lastErrorEvent expected to be non-null');

					otherView = (this.props.renderError || defaultRenderError)(errorEvent.domain, errorEvent.code, errorEvent.description);
				} else if (this.state.viewState !== WebViewState.IDLE) {
					console.error('RCTWebView invalid state encountered: ' + this.state.loading);
				}

				var webViewStyles = [styles.container, styles.webView, this.props.style];
				if (this.state.viewState === WebViewState.LOADING || this.state.viewState === WebViewState.ERROR) {

					webViewStyles.push(styles.hidden);
				}

				var onShouldStartLoadWithRequest = this.props.onShouldStartLoadWithRequest && function (event) {
					var shouldStart = _this.props.onShouldStartLoadWithRequest && _this.props.onShouldStartLoadWithRequest(event.nativeEvent);
					RCTWebViewManager.startLoadWithResult(!!shouldStart, event.nativeEvent.lockIdentifier);
				};var _props = this.props,
				    javaScriptEnabled = _props.javaScriptEnabled,
				    domStorageEnabled = _props.domStorageEnabled;
				if (this.props.javaScriptEnabledAndroid) {
					console.warn('javaScriptEnabledAndroid is deprecated. Use javaScriptEnabled instead');
					javaScriptEnabled = this.props.javaScriptEnabledAndroid;
				}
				if (this.props.domStorageEnabledAndroid) {
					console.warn('domStorageEnabledAndroid is deprecated. Use domStorageEnabled instead');
					domStorageEnabled = this.props.domStorageEnabledAndroid;
				}

				var decelerationRate = processDecelerationRate(this.props.decelerationRate);

				var source = this.props.source || {};
				if (this.props.html) {
					source.html = this.props.html;
				} else if (this.props.url) {
					source.uri = this.props.url;
				}

				var webView = React.createElement(RCTWebView, {
					ref: RCT_WEBVIEW_REF,
					key: 'webViewKey',
					style: webViewStyles,
					source: resolveAssetSource(source),
					injectedJavaScript: this.props.injectedJavaScript,
					bounces: this.props.bounces,
					scrollEnabled: this.props.scrollEnabled,
					decelerationRate: decelerationRate,
					contentInset: this.props.contentInset,
					automaticallyAdjustContentInsets: this.props.automaticallyAdjustContentInsets,
					onLoadingStart: this.onLoadingStart,
					onLoadingFinish: this.onLoadingFinish,
					onLoadingError: this.onLoadingError,
					onShouldStartLoadWithRequest: onShouldStartLoadWithRequest,
					scalesPageToFit: this.props.scalesPageToFit,
					allowsInlineMediaPlayback: this.props.allowsInlineMediaPlayback });

				return React.createElement(View, { style: styles.container }, webView, otherView);
			},

			goForward: function goForward() {
				UIManager.dispatchViewManagerCommand(this.getWebViewHandle(), UIManager.RCTWebView.Commands.goForward, null);
			},

			goBack: function goBack() {
				UIManager.dispatchViewManagerCommand(this.getWebViewHandle(), UIManager.RCTWebView.Commands.goBack, null);
			},

			reload: function reload() {
				UIManager.dispatchViewManagerCommand(this.getWebViewHandle(), UIManager.RCTWebView.Commands.reload, null);
			},

			updateNavigationState: function updateNavigationState(event) {
				if (this.props.onNavigationStateChange) {
					this.props.onNavigationStateChange(event.nativeEvent);
				}
			},

			getWebViewHandle: function getWebViewHandle() {
				return React.findNodeHandle(this.refs[RCT_WEBVIEW_REF]);
			},

			onLoadingStart: function onLoadingStart(event) {
				var onLoadStart = this.props.onLoadStart;
				onLoadStart && onLoadStart(event);
				this.updateNavigationState(event);
			},

			onLoadingError: function onLoadingError(event) {
				event.persist();var _props2 = this.props,
				    onError = _props2.onError,
				    onLoadEnd = _props2.onLoadEnd;
				onError && onError(event);
				onLoadEnd && onLoadEnd(event);
				console.warn('Encountered an error loading page', event.nativeEvent);

				this.setState({
					lastErrorEvent: event.nativeEvent,
					viewState: WebViewState.ERROR });
			},

			onLoadingFinish: function onLoadingFinish(event) {
				var _props3 = this.props,
				    onLoad = _props3.onLoad,
				    onLoadEnd = _props3.onLoadEnd;
				onLoad && onLoad(event);
				onLoadEnd && onLoadEnd(event);
				this.setState({
					viewState: WebViewState.IDLE });

				this.updateNavigationState(event);
			} });

		var RCTWebView = requireNativeComponent('RCTWebView', WebView, {
			nativeOnly: {
				onLoadingStart: true,
				onLoadingError: true,
				onLoadingFinish: true } });

		var styles = StyleSheet.create({
			container: {
				flex: 1 },

			errorContainer: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: BGWASH },

			errorText: {
				fontSize: 14,
				textAlign: 'center',
				marginBottom: 2 },

			errorTextTitle: {
				fontSize: 15,
				fontWeight: '500',
				marginBottom: 10 },

			hidden: {
				height: 0,
				flex: 0 },

			loadingView: {
				backgroundColor: BGWASH,
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				height: 100 },

			webView: {
				backgroundColor: '#ffffff' } });

		module.exports = WebView;
	},
	// Libraries/ActionSheetIOS/ActionSheetIOS.js
	function (__inner_require__, exports, module) {
		var RCTActionSheetManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ActionSheetManager;

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var processColor = require('react-native@0.21/Libraries/StyleSheet/processColor.js');

		var ActionSheetIOS = {
			showActionSheetWithOptions: function showActionSheetWithOptions(options, callback) {
				invariant(typeof options === 'object' && options !== null, 'Options must a valid object');

				invariant(typeof callback === 'function', 'Must provide a valid callback');

				RCTActionSheetManager.showActionSheetWithOptions(babelHelpers.extends({}, options, { tintColor: processColor(options.tintColor) }), callback);
			},

			showShareActionSheetWithOptions: function showShareActionSheetWithOptions(options, failureCallback, successCallback) {
				invariant(typeof options === 'object' && options !== null, 'Options must a valid object');

				invariant(typeof failureCallback === 'function', 'Must provide a valid failureCallback');

				invariant(typeof successCallback === 'function', 'Must provide a valid successCallback');

				RCTActionSheetManager.showShareActionSheetWithOptions(babelHelpers.extends({}, options, { tintColor: processColor(options.tintColor) }), failureCallback, successCallback);
			} };

		module.exports = ActionSheetIOS;
	},
	// Libraries/AdSupport/AdSupportIOS.js
	function (__inner_require__, exports, module) {
		var AdSupport = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').AdSupport;

		module.exports = {
			getAdvertisingId: function getAdvertisingId(onSuccess, onFailure) {
				AdSupport.getAdvertisingId(onSuccess, onFailure);
			},

			getAdvertisingTrackingEnabled: function getAdvertisingTrackingEnabled(onSuccess, onFailure) {
				AdSupport.getAdvertisingTrackingEnabled(onSuccess, onFailure);
			} };
	},
	// Libraries/AppRegistry/AppRegistry.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');
		var ReactNative = __inner_require__(10 /*Libraries/ReactNative/ReactNative.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var renderApplication = __inner_require__(178 /*Libraries/ReactIOS/renderApplication.ios.js*/);

		if (__DEV__) {

			__inner_require__(191 /*Libraries/Utilities/RCTRenderingPerf.js*/);
		}

		var runnables = {};

		var AppRegistry = {
			registerConfig: function registerConfig(config) {
				for (var i = 0; i < config.length; ++i) {
					var appConfig = config[i];
					if (appConfig.run) {
						AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);
					} else {
						invariant(appConfig.component, 'No component provider passed in');
						AppRegistry.registerComponent(appConfig.appKey, appConfig.component);
					}
				}
			},

			registerComponent: function registerComponent(appKey, getComponentFunc) {
				runnables[appKey] = {
					run: function run(appParameters) {
						return renderApplication(getComponentFunc(), appParameters.initialProps, appParameters.rootTag);
					} };

				return appKey;
			},

			registerRunnable: function registerRunnable(appKey, func) {
				runnables[appKey] = { run: func };
				return appKey;
			},

			getAppKeys: function getAppKeys() {
				return Object.keys(runnables);
			},

			runApplication: function runApplication(appKey, appParameters) {
				console.log('Running application "' + appKey + '" with appParams: ' + JSON.stringify(appParameters) + '. ' + '__DEV__ === ' + String(__DEV__) + ', development-level warning are ' + (__DEV__ ? 'ON' : 'OFF') + ', performance optimizations are ' + (__DEV__ ? 'OFF' : 'ON'));

				invariant(runnables[appKey] && runnables[appKey].run, 'Application ' + appKey + ' has not been registered. This ' + 'is either due to a require() error during initialization ' + 'or failure to call AppRegistry.registerComponent.');

				runnables[appKey].run(appParameters);
			},

			unmountApplicationComponentAtRootTag: function unmountApplicationComponentAtRootTag(rootTag) {
				ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
			} };

		BatchedBridge.registerCallableModule('AppRegistry', AppRegistry);

		module.exports = AppRegistry;
	},
	// Libraries/ReactIOS/renderApplication.ios.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Subscribable = __inner_require__(103 /*Libraries/Components/Subscribable.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var Inspector = __DEV__ ? __inner_require__(179 /*Libraries/Inspector/Inspector.js*/) : null;
		var YellowBox = __DEV__ ? __inner_require__(190 /*Libraries/ReactIOS/YellowBox.js*/) : null;

		var AppContainer = React.createClass({ displayName: 'AppContainer',
			mixins: [Subscribable.Mixin],

			getInitialState: function getInitialState() {
				return { inspector: null };
			},

			toggleElementInspector: function toggleElementInspector() {
				var inspector = !__DEV__ || this.state.inspector ? null : React.createElement(Inspector, {
					rootTag: this.props.rootTag,
					inspectedViewTag: React.findNodeHandle(this.refs.main) });

				this.setState({ inspector: inspector });
			},

			componentDidMount: function componentDidMount() {
				this.addListenerOn(RCTDeviceEventEmitter, 'toggleElementInspector', this.toggleElementInspector);
			},

			render: function render() {
				var yellowBox = null;
				if (__DEV__) {
					yellowBox = React.createElement(YellowBox, null);
				}
				return React.createElement(View, { style: styles.appContainer }, React.createElement(View, { collapsible: false, style: styles.appContainer, ref: 'main' }, this.props.children), yellowBox, this.state.inspector);
			} });

		function renderApplication(RootComponent, initialProps, rootTag) {
			invariant(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);

			React.render(React.createElement(AppContainer, { rootTag: rootTag }, React.createElement(RootComponent, babelHelpers.extends({}, initialProps, {
				rootTag: rootTag }))), rootTag);
		}

		var styles = StyleSheet.create({
			appContainer: {
				flex: 1 } });

		module.exports = renderApplication;
	},
	// Libraries/Inspector/Inspector.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
		var InspectorOverlay = __inner_require__(180 /*Libraries/Inspector/InspectorOverlay.js*/);
		var InspectorPanel = __inner_require__(184 /*Libraries/Inspector/InspectorPanel.js*/);
		var InspectorUtils = require('react-native@0.21/Libraries/Inspector/InspectorUtils.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var UIManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').UIManager;
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {

			window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');
		}var Inspector = function (_React$Component) {
			babelHelpers.inherits(Inspector, _React$Component);

			function Inspector(props) {
				babelHelpers.classCallCheck(this, Inspector);var _this = babelHelpers.possibleConstructorReturn(this, (Inspector.__proto__ || Object.getPrototypeOf(Inspector)).call(this, props));

				_this.state = {
					devtoolsAgent: null,
					panelPos: 'bottom',
					inspecting: true,
					perfing: false,
					inspected: null };return _this;
			}babelHelpers.createClass(Inspector, [{ key: 'componentDidMount', value: function componentDidMount() {
					if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
						this.attachToDevtools = this.attachToDevtools.bind(this);
						window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', this.attachToDevtools);

						if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent) {
							this.attachToDevtools(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent);
						}
					}
				} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
					if (this._subs) {
						this._subs.map(function (fn) {
							return fn();
						});
					}
					if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
						window.__REACT_DEVTOOLS_GLOBAL_HOOK__.off('react-devtools', this.attachToDevtools);
					}
				} }, { key: 'attachToDevtools', value: function attachToDevtools(agent) {
					var _this2 = this;
					var _hideWait = null;
					var hlSub = agent.sub('highlight', function (_ref) {
						var node = _ref.node,
						    name = _ref.name,
						    props = _ref.props;
						clearTimeout(_hideWait);
						UIManager.measure(node, function (x, y, width, height, left, top) {
							_this2.setState({
								hierarchy: [],
								inspected: {
									frame: { left: left, top: top, width: width, height: height },
									style: props ? props.style : {} } });
						});
					});
					var hideSub = agent.sub('hideHighlight', function () {
						if (_this2.state.inspected === null) {
							return;
						}

						_hideWait = setTimeout(function () {
							_this2.setState({
								inspected: null });
						}, 100);
					});
					this._subs = [hlSub, hideSub];

					agent.on('shutdown', function () {
						_this2.setState({ devtoolsAgent: null });
						_this2._subs = null;
					});
					this.setState({
						devtoolsAgent: agent });
				} }, { key: 'setSelection', value: function setSelection(i) {
					var _this3 = this;
					var instance = this.state.hierarchy[i];

					var publicInstance = instance._instance || {};
					UIManager.measure(React.findNodeHandle(instance), function (x, y, width, height, left, top) {
						_this3.setState({
							inspected: {
								frame: { left: left, top: top, width: width, height: height },
								style: publicInstance.props ? publicInstance.props.style : {} },

							selection: i });
					});
				} }, { key: 'onTouchInstance', value: function onTouchInstance(instance, frame, pointerY) {
					if (this.state.devtoolsAgent) {
						this.state.devtoolsAgent.selectFromReactInstance(instance, true);
					}
					var hierarchy = InspectorUtils.getOwnerHierarchy(instance);

					var publicInstance = instance._instance || {};
					var props = publicInstance.props || {};
					this.setState({
						panelPos: pointerY > Dimensions.get('window').height / 2 ? 'top' : 'bottom',
						selection: hierarchy.length - 1,
						hierarchy: hierarchy,
						inspected: {
							style: props.style || {},
							frame: frame } });
				} }, { key: 'setPerfing', value: function setPerfing(val) {
					this.setState({
						perfing: val,
						inspecting: false,
						inspected: null });
				} }, { key: 'setInspecting', value: function setInspecting(val) {
					this.setState({
						inspecting: val,
						inspected: null });
				} }, { key: 'render', value: function render() {
					var panelContainerStyle = this.state.panelPos === 'bottom' ? { bottom: 0 } : { top: 0 };
					return React.createElement(View, { style: styles.container, pointerEvents: 'box-none' }, this.state.inspecting && React.createElement(InspectorOverlay, {
						rootTag: this.props.rootTag,
						inspected: this.state.inspected,
						inspectedViewTag: this.props.inspectedViewTag,
						onTouchInstance: this.onTouchInstance.bind(this) }), React.createElement(View, { style: [styles.panelContainer, panelContainerStyle] }, React.createElement(InspectorPanel, {
						devtoolsIsOpen: !!this.state.devtoolsAgent,
						inspecting: this.state.inspecting,
						perfing: this.state.perfing,
						setPerfing: this.setPerfing.bind(this),
						setInspecting: this.setInspecting.bind(this),
						inspected: this.state.inspected,
						hierarchy: this.state.hierarchy,
						selection: this.state.selection,
						setSelection: this.setSelection.bind(this) })));
				} }]);return Inspector;
		}(React.Component);

		var styles = StyleSheet.create({
			container: {
				position: 'absolute',
				backgroundColor: 'transparent',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0 },

			panelContainer: {
				position: 'absolute',
				left: 0,
				right: 0 } });

		module.exports = Inspector;
	},
	// Libraries/Inspector/InspectorOverlay.js
	function (__inner_require__, exports, module) {
		var Dimensions = __inner_require__(68 /*Libraries/Utilities/Dimensions.js*/);
		var InspectorUtils = require('react-native@0.21/Libraries/Inspector/InspectorUtils.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var UIManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').UIManager;
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var ElementBox = __inner_require__(181 /*Libraries/Inspector/ElementBox.js*/);

		var PropTypes = React.PropTypes;

		var InspectorOverlay = React.createClass({ displayName: 'InspectorOverlay',
			propTypes: {
				inspected: PropTypes.shape({
					frame: PropTypes.object,
					style: PropTypes.any }),

				inspectedViewTag: PropTypes.number,
				onTouchInstance: PropTypes.func.isRequired },

			findViewForTouchEvent: function findViewForTouchEvent(e) {
				var _this = this;var _e$nativeEvent$touche = e.nativeEvent.touches[0],
				    locationX = _e$nativeEvent$touche.locationX,
				    locationY = _e$nativeEvent$touche.locationY;
				UIManager.findSubviewIn(this.props.inspectedViewTag, [locationX, locationY], function (nativeViewTag, left, top, width, height) {
					var instance = InspectorUtils.findInstanceByNativeTag(_this.props.rootTag, nativeViewTag);
					if (!instance) {
						return;
					}
					_this.props.onTouchInstance(instance, { left: left, top: top, width: width, height: height }, locationY);
				});
			},

			shouldSetResponser: function shouldSetResponser(e) {
				this.findViewForTouchEvent(e);
				return true;
			},

			render: function render() {
				var content = null;
				if (this.props.inspected) {
					content = React.createElement(ElementBox, { frame: this.props.inspected.frame, style: this.props.inspected.style });
				}

				return React.createElement(View, {
					onStartShouldSetResponder: this.shouldSetResponser,
					onResponderMove: this.findViewForTouchEvent,
					style: [styles.inspector, { height: Dimensions.get('window').height }] }, content);
			} });

		var styles = StyleSheet.create({
			inspector: {
				backgroundColor: 'transparent',
				position: 'absolute',
				left: 0,
				top: 0,
				right: 0 } });

		module.exports = InspectorOverlay;
	},
	// Libraries/Inspector/ElementBox.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var BorderBox = __inner_require__(182 /*Libraries/Inspector/BorderBox.js*/);
		var resolveBoxStyle = __inner_require__(183 /*Libraries/Inspector/resolveBoxStyle.js*/);

		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');var ElementBox = function (_React$Component) {
			babelHelpers.inherits(ElementBox, _React$Component);function ElementBox() {
				babelHelpers.classCallCheck(this, ElementBox);return babelHelpers.possibleConstructorReturn(this, (ElementBox.__proto__ || Object.getPrototypeOf(ElementBox)).apply(this, arguments));
			}babelHelpers.createClass(ElementBox, [{ key: 'render', value: function render() {
					var style = flattenStyle(this.props.style) || {};
					var margin = resolveBoxStyle('margin', style);
					var padding = resolveBoxStyle('padding', style);
					var frameStyle = this.props.frame;
					if (margin) {
						frameStyle = {
							top: frameStyle.top - margin.top,
							left: frameStyle.left - margin.left,
							height: frameStyle.height + margin.top + margin.bottom,
							width: frameStyle.width + margin.left + margin.right };
					}
					var contentStyle = {
						width: this.props.frame.width,
						height: this.props.frame.height };

					if (padding) {
						contentStyle = {
							width: contentStyle.width - padding.left - padding.right,
							height: contentStyle.height - padding.top - padding.bottom };
					}
					return React.createElement(View, { style: [styles.frame, frameStyle], pointerEvents: 'none' }, React.createElement(BorderBox, { box: margin, style: styles.margin }, React.createElement(BorderBox, { box: padding, style: styles.padding }, React.createElement(View, { style: [styles.content, contentStyle] }))));
				} }]);return ElementBox;
		}(React.Component);

		var styles = StyleSheet.create({
			frame: {
				position: 'absolute' },

			content: {
				backgroundColor: 'rgba(200, 230, 255, 0.8)' },

			padding: {
				borderColor: 'rgba(77, 255, 0, 0.3)' },

			margin: {
				borderColor: 'rgba(255, 132, 0, 0.3)' } });

		module.exports = ElementBox;
	},
	// Libraries/Inspector/BorderBox.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);var BorderBox = function (_React$Component) {
			babelHelpers.inherits(BorderBox, _React$Component);function BorderBox() {
				babelHelpers.classCallCheck(this, BorderBox);return babelHelpers.possibleConstructorReturn(this, (BorderBox.__proto__ || Object.getPrototypeOf(BorderBox)).apply(this, arguments));
			}babelHelpers.createClass(BorderBox, [{ key: 'render', value: function render() {
					var box = this.props.box;
					if (!box) {
						return this.props.children;
					}
					var style = {
						borderTopWidth: box.top,
						borderBottomWidth: box.bottom,
						borderLeftWidth: box.left,
						borderRightWidth: box.right };

					return React.createElement(View, { style: [style, this.props.style] }, this.props.children);
				} }]);return BorderBox;
		}(React.Component);

		module.exports = BorderBox;
	},
	// Libraries/Inspector/resolveBoxStyle.js
	function (__inner_require__, exports, module) {
		function resolveBoxStyle(prefix, style) {
			var res = {};
			var subs = ['top', 'left', 'bottom', 'right'];
			var set = false;
			subs.forEach(function (sub) {
				res[sub] = style[prefix] || 0;
			});
			if (style[prefix]) {
				set = true;
			}
			if (style[prefix + 'Vertical']) {
				res.top = res.bottom = style[prefix + 'Vertical'];
				set = true;
			}
			if (style[prefix + 'Horizontal']) {
				res.left = res.right = style[prefix + 'Horizontal'];
				set = true;
			}
			subs.forEach(function (sub) {
				var val = style[prefix + capFirst(sub)];
				if (val) {
					res[sub] = val;
					set = true;
				}
			});
			if (!set) {
				return;
			}
			return res;
		}

		function capFirst(text) {
			return text[0].toUpperCase() + text.slice(1);
		}

		module.exports = resolveBoxStyle;
	},
	// Libraries/Inspector/InspectorPanel.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var ElementProperties = __inner_require__(185 /*Libraries/Inspector/ElementProperties.js*/);
		var PerformanceOverlay = __inner_require__(189 /*Libraries/Inspector/PerformanceOverlay.js*/);
		var TouchableHighlight = __inner_require__(161 /*Libraries/Components/Touchable/TouchableHighlight.js*/);

		var PropTypes = React.PropTypes;var InspectorPanel = function (_React$Component) {
			babelHelpers.inherits(InspectorPanel, _React$Component);function InspectorPanel() {
				babelHelpers.classCallCheck(this, InspectorPanel);return babelHelpers.possibleConstructorReturn(this, (InspectorPanel.__proto__ || Object.getPrototypeOf(InspectorPanel)).apply(this, arguments));
			}babelHelpers.createClass(InspectorPanel, [{ key: 'renderWaiting', value: function renderWaiting() {
					if (this.props.inspecting) {
						return React.createElement(Text, { style: styles.waitingText }, 'Tap something to inspect it');
					}
					return React.createElement(Text, { style: styles.waitingText }, 'Nothing is inspected');
				} }, { key: 'render', value: function render() {
					var contents;
					if (this.props.inspected) {
						contents = React.createElement(ElementProperties, {
							style: this.props.inspected.style,
							frame: this.props.inspected.frame,
							hierarchy: this.props.hierarchy,
							selection: this.props.selection,
							setSelection: this.props.setSelection });
					} else if (this.props.perfing) {
						contents = React.createElement(PerformanceOverlay, null);
					} else {
						contents = React.createElement(View, { style: styles.waiting }, this.renderWaiting());
					}
					return React.createElement(View, { style: styles.container }, !this.props.devtoolsIsOpen && contents, React.createElement(View, { style: styles.buttonRow }, React.createElement(Button, {
						title: 'Inspect',
						pressed: this.props.inspecting,
						onClick: this.props.setInspecting }), React.createElement(Button, { title: 'Perf',
						pressed: this.props.perfing,
						onClick: this.props.setPerfing })));
				} }]);return InspectorPanel;
		}(React.Component);

		InspectorPanel.propTypes = {
			devtoolsIsOpen: PropTypes.bool,
			inspecting: PropTypes.bool,
			setInspecting: PropTypes.func,
			inspected: PropTypes.object,
			perfing: PropTypes.bool,
			setPerfing: PropTypes.func };var Button = function (_React$Component2) {
			babelHelpers.inherits(Button, _React$Component2);function Button() {
				babelHelpers.classCallCheck(this, Button);return babelHelpers.possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
			}babelHelpers.createClass(Button, [{ key: 'render', value: function render() {
					var _this3 = this;
					return React.createElement(TouchableHighlight, { onPress: function onPress() {
							return _this3.props.onClick(!_this3.props.pressed);
						}, style: [styles.button, this.props.pressed && styles.buttonPressed] }, React.createElement(Text, { style: styles.buttonText }, this.props.title));
				} }]);return Button;
		}(React.Component);

		var styles = StyleSheet.create({
			buttonRow: {
				flexDirection: 'row' },

			button: {
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				margin: 2,
				height: 30,
				justifyContent: 'center',
				alignItems: 'center' },

			buttonPressed: {
				backgroundColor: 'rgba(255, 255, 255, 0.3)' },

			buttonText: {
				textAlign: 'center',
				color: 'white',
				margin: 5 },

			container: {
				backgroundColor: 'rgba(0, 0, 0, 0.7)' },

			waiting: {
				height: 100 },

			waitingText: {
				fontSize: 20,
				textAlign: 'center',
				marginVertical: 20 } });

		module.exports = InspectorPanel;
	},
	// Libraries/Inspector/ElementProperties.js
	function (__inner_require__, exports, module) {
		var BoxInspector = __inner_require__(186 /*Libraries/Inspector/BoxInspector.js*/);
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleInspector = __inner_require__(187 /*Libraries/Inspector/StyleInspector.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var TouchableHighlight = __inner_require__(161 /*Libraries/Components/Touchable/TouchableHighlight.js*/);
		var TouchableWithoutFeedback = __inner_require__(157 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var flattenStyle = require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js');
		var mapWithSeparator = __inner_require__(188 /*Libraries/Utilities/mapWithSeparator.js*/);

		var ElementProperties = React.createClass({ displayName: 'ElementProperties',
			propTypes: {
				hierarchy: PropTypes.array.isRequired,
				style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]) },

			render: function render() {
				var _this = this;
				var style = flattenStyle(this.props.style);
				var selection = this.props.selection;

				return React.createElement(TouchableWithoutFeedback, null, React.createElement(View, { style: styles.info }, React.createElement(View, { style: styles.breadcrumb }, mapWithSeparator(this.props.hierarchy, function (item, i) {
					return React.createElement(TouchableHighlight, {
						key: 'item-' + i,
						style: [styles.breadItem, i === selection && styles.selected],
						onPress: function onPress() {
							return _this.props.setSelection(i);
						} }, React.createElement(Text, { style: styles.breadItemText }, item.getName ? item.getName() : 'Unknown'));
				}, function (i) {
					return React.createElement(Text, { key: 'sep-' + i, style: styles.breadSep }, '\u25B8');
				})), React.createElement(View, { style: styles.row }, React.createElement(StyleInspector, { style: style }), React.createElement(BoxInspector, { style: style, frame: this.props.frame }))));
			} });

		var styles = StyleSheet.create({
			breadSep: {
				fontSize: 8,
				color: 'white' },

			breadcrumb: {
				flexDirection: 'row',
				flexWrap: 'wrap',
				marginBottom: 5 },

			selected: {
				borderColor: 'white',
				borderRadius: 5 },

			breadItem: {
				borderWidth: 1,
				borderColor: 'transparent',
				marginHorizontal: 2 },

			breadItemText: {
				fontSize: 10,
				color: 'white',
				marginHorizontal: 5 },

			row: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between' },

			info: {
				padding: 10 },

			path: {
				color: 'white',
				fontSize: 9 } });

		module.exports = ElementProperties;
	},
	// Libraries/Inspector/BoxInspector.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);
		var resolveBoxStyle = __inner_require__(183 /*Libraries/Inspector/resolveBoxStyle.js*/);

		var blank = {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0 };var BoxInspector = function (_React$Component) {
			babelHelpers.inherits(BoxInspector, _React$Component);function BoxInspector() {
				babelHelpers.classCallCheck(this, BoxInspector);return babelHelpers.possibleConstructorReturn(this, (BoxInspector.__proto__ || Object.getPrototypeOf(BoxInspector)).apply(this, arguments));
			}babelHelpers.createClass(BoxInspector, [{ key: 'render', value: function render() {
					var frame = this.props.frame;
					var style = this.props.style;
					var margin = style && resolveBoxStyle('margin', style) || blank;
					var padding = style && resolveBoxStyle('padding', style) || blank;
					return React.createElement(BoxContainer, { title: 'margin', titleStyle: styles.marginLabel, box: margin }, React.createElement(BoxContainer, { title: 'padding', box: padding }, React.createElement(View, null, React.createElement(Text, { style: styles.innerText }, '(', frame.left, ', ', frame.top, ')'), React.createElement(Text, { style: styles.innerText }, frame.width, ' \xD7 ', frame.height))));
				} }]);return BoxInspector;
		}(React.Component);var BoxContainer = function (_React$Component2) {
			babelHelpers.inherits(BoxContainer, _React$Component2);function BoxContainer() {
				babelHelpers.classCallCheck(this, BoxContainer);return babelHelpers.possibleConstructorReturn(this, (BoxContainer.__proto__ || Object.getPrototypeOf(BoxContainer)).apply(this, arguments));
			}babelHelpers.createClass(BoxContainer, [{ key: 'render', value: function render() {
					var box = this.props.box;
					return React.createElement(View, { style: styles.box }, React.createElement(View, { style: styles.row }, React.createElement(Text, { style: [this.props.titleStyle, styles.label] }, this.props.title), React.createElement(Text, { style: styles.boxText }, box.top)), React.createElement(View, { style: styles.row }, React.createElement(Text, { style: styles.boxText }, box.left), this.props.children, React.createElement(Text, { style: styles.boxText }, box.right)), React.createElement(Text, { style: styles.boxText }, box.bottom));
				} }]);return BoxContainer;
		}(React.Component);

		var styles = StyleSheet.create({
			row: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around' },

			marginLabel: {
				width: 60 },

			label: {
				fontSize: 10,
				color: 'rgb(255,100,0)',
				marginLeft: 5,
				flex: 1,
				textAlign: 'left',
				top: -3 },

			buffer: {
				fontSize: 10,
				color: 'yellow',
				flex: 1,
				textAlign: 'center' },

			innerText: {
				color: 'yellow',
				fontSize: 12,
				textAlign: 'center',
				width: 70 },

			box: {
				borderWidth: 1,
				borderColor: 'grey' },

			boxText: {
				color: 'white',
				fontSize: 12,
				marginHorizontal: 3,
				marginVertical: 2,
				textAlign: 'center' } });

		module.exports = BoxInspector;
	},
	// Libraries/Inspector/StyleInspector.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);var StyleInspector = function (_React$Component) {
			babelHelpers.inherits(StyleInspector, _React$Component);function StyleInspector() {
				babelHelpers.classCallCheck(this, StyleInspector);return babelHelpers.possibleConstructorReturn(this, (StyleInspector.__proto__ || Object.getPrototypeOf(StyleInspector)).apply(this, arguments));
			}babelHelpers.createClass(StyleInspector, [{ key: 'render', value: function render() {
					var _this2 = this;
					if (!this.props.style) {
						return React.createElement(Text, { style: styles.noStyle }, 'No style');
					}
					var names = Object.keys(this.props.style);
					return React.createElement(View, { style: styles.container }, React.createElement(View, null, names.map(function (name) {
						return React.createElement(Text, { key: name, style: styles.attr }, name, ':');
					})), React.createElement(View, null, names.map(function (name) {
						var value = typeof _this2.props.style[name] === 'object' ? JSON.stringify(_this2.props.style[name]) : _this2.props.style[name];
						return React.createElement(Text, { key: name, style: styles.value }, value);
					})));
				} }]);return StyleInspector;
		}(React.Component);

		var styles = StyleSheet.create({
			container: {
				flexDirection: 'row' },

			row: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around' },

			attr: {
				fontSize: 10,
				color: '#ccc' },

			value: {
				fontSize: 10,
				color: 'white',
				marginLeft: 10 },

			noStyle: {
				color: 'white',
				fontSize: 10 } });

		module.exports = StyleInspector;
	},
	// Libraries/Utilities/mapWithSeparator.js
	function (__inner_require__, exports, module) {
		function mapWithSeparator(array, valueFunction, separatorFunction) {
			var results = [];
			for (var i = 0; i < array.length; i++) {
				results.push(valueFunction(array[i], i, array));
				if (i !== array.length - 1) {
					results.push(separatorFunction(i));
				}
			}
			return results;
		}

		module.exports = mapWithSeparator;
	},
	// Libraries/Inspector/PerformanceOverlay.js
	function (__inner_require__, exports, module) {
		var PerformanceLogger = require('react-native@0.21/Libraries/Utilities/PerformanceLogger.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var PerformanceOverlay = React.createClass({ displayName: 'PerformanceOverlay',
			render: function render() {
				var perfLogs = PerformanceLogger.getTimespans();
				var items = [];

				for (var key in perfLogs) {
					if (perfLogs[key].totalTime) {
						items.push(React.createElement(View, { style: styles.row }, React.createElement(Text, { style: [styles.text, styles.label] }, key), React.createElement(Text, { style: [styles.text, styles.totalTime] }, perfLogs[key].totalTime + 'ms')));
					}
				}

				return React.createElement(View, { style: styles.container }, items);
			} });

		var styles = StyleSheet.create({
			container: {
				height: 100,
				paddingTop: 10 },

			label: {
				flex: 1 },

			row: {
				flexDirection: 'row',
				paddingHorizontal: 10 },

			text: {
				color: 'white',
				fontSize: 12 },

			totalTime: {
				paddingRight: 100 } });

		module.exports = PerformanceOverlay;
	},
	// Libraries/ReactIOS/YellowBox.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');

		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);

		var _warningEmitter = new EventEmitter();
		var _warningMap = new Map();

		if (__DEV__) {
			(function () {
				var _console = console,
				    error = _console.error,
				    warn = _console.warn;
				console.error = function () {
					error.apply(console, arguments);

					if (typeof arguments[0] === 'string' && arguments[0].startsWith('Warning: ')) {
						updateWarningMap.apply(null, arguments);
					}
				};
				console.warn = function () {
					warn.apply(console, arguments);
					updateWarningMap.apply(null, arguments);
				};
			})();
		}

		function sprintf(format) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}
			var index = 0;
			return format.replace(/%s/g, function (match) {
				return args[index++];
			});
		}

		function updateWarningMap(format) {
			var stringifySafe = require('react-native@0.21/Libraries/Utilities/stringifySafe.js');

			format = String(format);
			var argCount = (format.match(/%s/g) || []).length;for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				args[_key2 - 1] = arguments[_key2];
			}
			var warning = [sprintf.apply(undefined, [format].concat(babelHelpers.toConsumableArray(args.slice(0, argCount))))].concat(babelHelpers.toConsumableArray(args.slice(argCount).map(stringifySafe))).join(' ');

			var count = _warningMap.has(warning) ? _warningMap.get(warning) : 0;
			_warningMap.set(warning, count + 1);
			_warningEmitter.emit('warning', _warningMap);
		}

		function isWarningIgnored(warning) {
			return Array.isArray(console.ignoredYellowBox) && console.ignoredYellowBox.some(function (ignorePrefix) {
				return warning.startsWith(ignorePrefix);
			});
		}

		var WarningRow = function WarningRow(_ref) {
			var count = _ref.count,
			    warning = _ref.warning,
			    onPress = _ref.onPress;
			var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
			var TouchableHighlight = __inner_require__(161 /*Libraries/Components/Touchable/TouchableHighlight.js*/);
			var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

			var countText = count > 1 ? React.createElement(Text, { style: styles.listRowCount }, '(' + count + ') ') : null;

			return React.createElement(View, { style: styles.listRow }, React.createElement(TouchableHighlight, {
				activeOpacity: 0.5,
				onPress: onPress,
				style: styles.listRowContent,
				underlayColor: 'transparent' }, React.createElement(Text, { style: styles.listRowText, numberOfLines: 2 }, countText, warning)));
		};

		var WarningInspector = function WarningInspector(_ref2) {
			var count = _ref2.count,
			    warning = _ref2.warning,
			    onClose = _ref2.onClose,
			    onDismiss = _ref2.onDismiss,
			    onDismissAll = _ref2.onDismissAll;
			var ScrollView = __inner_require__(100 /*Libraries/Components/ScrollView/ScrollView.js*/);
			var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
			var TouchableHighlight = __inner_require__(161 /*Libraries/Components/Touchable/TouchableHighlight.js*/);
			var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

			var countSentence = 'Warning encountered ' + count + ' time' + (count - 1 ? 's' : '') + '.';

			return React.createElement(TouchableHighlight, {
				activeOpacity: 0.95,
				underlayColor: backgroundColor(0.8),
				onPress: onClose,
				style: styles.inspector }, React.createElement(View, { style: styles.inspectorContent }, React.createElement(View, { style: styles.inspectorCount }, React.createElement(Text, { style: styles.inspectorCountText }, countSentence)), React.createElement(ScrollView, { style: styles.inspectorWarning }, React.createElement(Text, { style: styles.inspectorWarningText }, warning)), React.createElement(View, { style: styles.inspectorButtons }, React.createElement(TouchableHighlight, {
				activeOpacity: 0.5,
				onPress: onDismiss,
				style: styles.inspectorButton,
				underlayColor: 'transparent' }, React.createElement(Text, { style: styles.inspectorButtonText }, 'Dismiss')), React.createElement(TouchableHighlight, {
				activeOpacity: 0.5,
				onPress: onDismissAll,
				style: styles.inspectorButton,
				underlayColor: 'transparent' }, React.createElement(Text, { style: styles.inspectorButtonText }, 'Dismiss All')))));
		};var YellowBox = function (_React$Component) {
			babelHelpers.inherits(YellowBox, _React$Component);

			function YellowBox(props, context) {
				babelHelpers.classCallCheck(this, YellowBox);var _this = babelHelpers.possibleConstructorReturn(this, (YellowBox.__proto__ || Object.getPrototypeOf(YellowBox)).call(this, props, context));
				_this.state = {
					inspecting: null,
					warningMap: _warningMap };

				_this.dismissWarning = function (warning) {
					var _this$state = _this.state,
					    inspecting = _this$state.inspecting,
					    warningMap = _this$state.warningMap;
					if (warning) {
						warningMap.delete(warning);
					} else {
						warningMap.clear();
					}
					_this.setState({
						inspecting: warning && inspecting !== warning ? inspecting : null,
						warningMap: warningMap });
				};return _this;
			}babelHelpers.createClass(YellowBox, [{ key: 'componentDidMount', value: function componentDidMount() {
					var _this2 = this;
					var scheduled = null;
					this._listener = _warningEmitter.addListener('warning', function (warningMap) {

						scheduled = scheduled || setImmediate(function () {
							scheduled = null;
							_this2.setState({
								warningMap: warningMap });
						});
					});
				} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
					if (this._listener) {
						this._listener.remove();
					}
				} }, { key: 'render', value: function render() {
					var _this3 = this;
					if (console.disableYellowBox || this.state.warningMap.size === 0) {
						return null;
					}
					var ScrollView = __inner_require__(100 /*Libraries/Components/ScrollView/ScrollView.js*/);
					var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

					var inspecting = this.state.inspecting;
					var inspector = inspecting !== null ? React.createElement(WarningInspector, {
						count: this.state.warningMap.get(inspecting),
						warning: inspecting,
						onClose: function onClose() {
							return _this3.setState({ inspecting: null });
						},
						onDismiss: function onDismiss() {
							return _this3.dismissWarning(inspecting);
						},
						onDismissAll: function onDismissAll() {
							return _this3.dismissWarning(null);
						} }) : null;

					var rows = [];
					this.state.warningMap.forEach(function (count, warning) {
						if (!isWarningIgnored(warning)) {
							rows.push(React.createElement(WarningRow, {
								key: warning,
								count: count,
								warning: warning,
								onPress: function onPress() {
									return _this3.setState({ inspecting: warning });
								},
								onDismiss: function onDismiss() {
									return _this3.dismissWarning(warning);
								} }));
						}
					});

					var listStyle = [styles.list, { height: Math.min(rows.length, 4.4) * (rowGutter + rowHeight) }];

					return React.createElement(View, { style: inspector ? styles.fullScreen : listStyle }, React.createElement(ScrollView, { style: listStyle, scrollsToTop: false }, rows), inspector);
				} }]);return YellowBox;
		}(React.Component);

		var backgroundColor = function backgroundColor(opacity) {
			return 'rgba(250, 186, 48, ' + opacity + ')';
		};
		var textColor = 'white';
		var rowGutter = 1;
		var rowHeight = 46;

		var styles = StyleSheet.create({
			fullScreen: {
				backgroundColor: 'transparent',
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0 },

			inspector: {
				backgroundColor: backgroundColor(0.95),
				flex: 1 },

			inspectorContainer: {
				flex: 1 },

			inspectorButtons: {
				flexDirection: 'row',
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0 },

			inspectorButton: {
				flex: 1,
				padding: 22 },

			inspectorButtonText: {
				color: textColor,
				fontSize: 14,
				opacity: 0.8,
				textAlign: 'center' },

			inspectorContent: {
				flex: 1,
				paddingTop: 5 },

			inspectorCount: {
				padding: 15,
				paddingBottom: 0 },

			inspectorCountText: {
				color: textColor,
				fontSize: 14 },

			inspectorWarning: {
				padding: 15,
				position: 'absolute',
				top: 39,
				bottom: 60 },

			inspectorWarningText: {
				color: textColor,
				fontSize: 16,
				fontWeight: '600' },

			list: {
				backgroundColor: 'transparent',
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0 },

			listRow: {
				position: 'relative',
				backgroundColor: backgroundColor(0.95),
				flex: 1,
				height: rowHeight,
				marginTop: rowGutter },

			listRowContent: {
				flex: 1 },

			listRowCount: {
				color: 'rgba(255, 255, 255, 0.5)' },

			listRowText: {
				color: textColor,
				position: 'absolute',
				left: 0,
				top: Platform.OS === 'android' ? 5 : 7,
				marginLeft: 15,
				marginRight: 15 } });

		module.exports = YellowBox;
	},
	// Libraries/Utilities/RCTRenderingPerf.js
	function (__inner_require__, exports, module) {
		var ReactDefaultPerf = __inner_require__(192 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultPerf.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var perfModules = [];
		var enabled = false;

		var RCTRenderingPerf = {

			toggle: function toggle() {
				console.log('Render perfomance measurements enabled');
				enabled = true;
			},

			start: function start() {
				if (!enabled) {
					return;
				}

				ReactDefaultPerf.start();
				perfModules.forEach(function (module) {
					return module.start();
				});
			},

			stop: function stop() {
				if (!enabled) {
					return;
				}

				ReactDefaultPerf.stop();
				ReactDefaultPerf.printInclusive();
				ReactDefaultPerf.printWasted();

				var totalRender = 0;
				var totalTime = 0;
				var measurements = ReactDefaultPerf.getLastMeasurements();
				for (var ii = 0; ii < measurements.length; ii++) {
					var render = measurements[ii].render;
					for (var nodeName in render) {
						totalRender += render[nodeName];
					}
					totalTime += measurements[ii].totalTime;
				}
				console.log('Total time spent in render(): ' + totalRender + 'ms');

				perfModules.forEach(function (module) {
					return module.stop();
				});
			},

			register: function register(module) {
				invariant(typeof module.start === 'function', 'Perf module should have start() function');

				invariant(typeof module.stop === 'function', 'Perf module should have stop() function');

				perfModules.push(module);
			} };

		module.exports = RCTRenderingPerf;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultPerf.js
	function (__inner_require__, exports, module) {
		var DOMProperty = __inner_require__(193 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/DOMProperty.js*/);
		var ReactDefaultPerfAnalysis = __inner_require__(194 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultPerfAnalysis.js*/);
		var ReactMount = __inner_require__(195 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMount.js*/);
		var ReactPerf = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js');

		var performanceNow = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performanceNow.js');

		function roundFloat(val) {
			return Math.floor(val * 100) / 100;
		}

		function addValue(obj, key, val) {
			obj[key] = (obj[key] || 0) + val;
		}

		var ReactDefaultPerf = {
			_allMeasurements: [],
			_mountStack: [0],
			_injected: false,

			start: function start() {
				if (!ReactDefaultPerf._injected) {
					ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
				}

				ReactDefaultPerf._allMeasurements.length = 0;
				ReactPerf.enableMeasure = true;
			},

			stop: function stop() {
				ReactPerf.enableMeasure = false;
			},

			getLastMeasurements: function getLastMeasurements() {
				return ReactDefaultPerf._allMeasurements;
			},

			printExclusive: function printExclusive(measurements) {
				measurements = measurements || ReactDefaultPerf._allMeasurements;
				var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
				console.table(summary.map(function (item) {
					return {
						'Component class name': item.componentName,
						'Total inclusive time (ms)': roundFloat(item.inclusive),
						'Exclusive mount time (ms)': roundFloat(item.exclusive),
						'Exclusive render time (ms)': roundFloat(item.render),
						'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
						'Render time per instance (ms)': roundFloat(item.render / item.count),
						'Instances': item.count };
				}));
			},

			printInclusive: function printInclusive(measurements) {
				measurements = measurements || ReactDefaultPerf._allMeasurements;
				var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
				console.table(summary.map(function (item) {
					return {
						'Owner > component': item.componentName,
						'Inclusive time (ms)': roundFloat(item.time),
						'Instances': item.count };
				}));
				console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
			},

			getMeasurementsSummaryMap: function getMeasurementsSummaryMap(measurements) {
				var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
				return summary.map(function (item) {
					return {
						'Owner > component': item.componentName,
						'Wasted time (ms)': item.time,
						'Instances': item.count };
				});
			},

			printWasted: function printWasted(measurements) {
				measurements = measurements || ReactDefaultPerf._allMeasurements;
				console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
				console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
			},

			printDOM: function printDOM(measurements) {
				measurements = measurements || ReactDefaultPerf._allMeasurements;
				var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
				console.table(summary.map(function (item) {
					var result = {};
					result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
					result.type = item.type;
					result.args = JSON.stringify(item.args);
					return result;
				}));
				console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
			},

			_recordWrite: function _recordWrite(id, fnName, totalTime, args) {

				var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
				writes[id] = writes[id] || [];
				writes[id].push({
					type: fnName,
					time: totalTime,
					args: args });
			},

			measure: function measure(moduleName, fnName, func) {
				return function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					var totalTime;
					var rv;
					var start;

					if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {

						ReactDefaultPerf._allMeasurements.push({
							exclusive: {},
							inclusive: {},
							render: {},
							counts: {},
							writes: {},
							displayNames: {},
							totalTime: 0,
							created: {} });

						start = performanceNow();
						rv = func.apply(this, args);
						ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
						return rv;
					} else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
						start = performanceNow();
						rv = func.apply(this, args);
						totalTime = performanceNow() - start;

						if (fnName === '_mountImageIntoNode') {
							var mountID = ReactMount.getID(args[1]);
							ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
						} else if (fnName === 'dangerouslyProcessChildrenUpdates') {

							args[0].forEach(function (update) {
								var writeArgs = {};
								if (update.fromIndex !== null) {
									writeArgs.fromIndex = update.fromIndex;
								}
								if (update.toIndex !== null) {
									writeArgs.toIndex = update.toIndex;
								}
								if (update.textContent !== null) {
									writeArgs.textContent = update.textContent;
								}
								if (update.markupIndex !== null) {
									writeArgs.markup = args[1][update.markupIndex];
								}
								ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
							});
						} else {

							var id = args[0];
							if (typeof id === 'object') {
								id = ReactMount.getID(args[0]);
							}
							ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
						}
						return rv;
					} else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')) {

						if (this._currentElement.type === ReactMount.TopLevelWrapper) {
							return func.apply(this, args);
						}

						var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
						var isRender = fnName === '_renderValidatedComponent';
						var isMount = fnName === 'mountComponent';

						var mountStack = ReactDefaultPerf._mountStack;
						var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];

						if (isRender) {
							addValue(entry.counts, rootNodeID, 1);
						} else if (isMount) {
							entry.created[rootNodeID] = true;
							mountStack.push(0);
						}

						start = performanceNow();
						rv = func.apply(this, args);
						totalTime = performanceNow() - start;

						if (isRender) {
							addValue(entry.render, rootNodeID, totalTime);
						} else if (isMount) {
							var subMountTime = mountStack.pop();
							mountStack[mountStack.length - 1] += totalTime;
							addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
							addValue(entry.inclusive, rootNodeID, totalTime);
						} else {
							addValue(entry.inclusive, rootNodeID, totalTime);
						}

						entry.displayNames[rootNodeID] = {
							current: this.getName(),
							owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>' };

						return rv;
					} else {
						return func.apply(this, args);
					}
				};
			} };

		module.exports = ReactDefaultPerf;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/DOMProperty.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		function checkMask(value, bitmask) {
			return (value & bitmask) === bitmask;
		}

		var DOMPropertyInjection = {

			MUST_USE_ATTRIBUTE: 0x1,
			MUST_USE_PROPERTY: 0x2,
			HAS_SIDE_EFFECTS: 0x4,
			HAS_BOOLEAN_VALUE: 0x8,
			HAS_NUMERIC_VALUE: 0x10,
			HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
			HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

			injectDOMPropertyConfig: function injectDOMPropertyConfig(domPropertyConfig) {
				var Injection = DOMPropertyInjection;
				var Properties = domPropertyConfig.Properties || {};
				var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
				var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
				var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
				var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

				if (domPropertyConfig.isCustomAttribute) {
					DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
				}

				for (var propName in Properties) {
					!!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;

					var lowerCased = propName.toLowerCase();
					var propConfig = Properties[propName];

					var propertyInfo = {
						attributeName: lowerCased,
						attributeNamespace: null,
						propertyName: propName,
						mutationMethod: null,

						mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
						mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
						hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
						hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
						hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
						hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
						hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE) };

					!(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
					!(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
					!(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;

					if (process.env.NODE_ENV !== 'production') {
						DOMProperty.getPossibleStandardName[lowerCased] = propName;
					}

					if (DOMAttributeNames.hasOwnProperty(propName)) {
						var attributeName = DOMAttributeNames[propName];
						propertyInfo.attributeName = attributeName;
						if (process.env.NODE_ENV !== 'production') {
							DOMProperty.getPossibleStandardName[attributeName] = propName;
						}
					}

					if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
						propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
					}

					if (DOMPropertyNames.hasOwnProperty(propName)) {
						propertyInfo.propertyName = DOMPropertyNames[propName];
					}

					if (DOMMutationMethods.hasOwnProperty(propName)) {
						propertyInfo.mutationMethod = DOMMutationMethods[propName];
					}

					DOMProperty.properties[propName] = propertyInfo;
				}
			} };

		var defaultValueCache = {};

		var DOMProperty = {

			ID_ATTRIBUTE_NAME: 'data-reactid',

			properties: {},

			getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,

			_isCustomAttributeFunctions: [],

			isCustomAttribute: function isCustomAttribute(attributeName) {
				for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
					var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
					if (isCustomAttributeFn(attributeName)) {
						return true;
					}
				}
				return false;
			},

			getDefaultValueForProperty: function getDefaultValueForProperty(nodeName, prop) {
				var nodeDefaults = defaultValueCache[nodeName];
				var testElement;
				if (!nodeDefaults) {
					defaultValueCache[nodeName] = nodeDefaults = {};
				}
				if (!(prop in nodeDefaults)) {
					testElement = document.createElement(nodeName);
					nodeDefaults[prop] = testElement[prop];
				}
				return nodeDefaults[prop];
			},

			injection: DOMPropertyInjection };

		module.exports = DOMProperty;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDefaultPerfAnalysis.js
	function (__inner_require__, exports, module) {
		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');

		var DONT_CARE_THRESHOLD = 1.2;
		var DOM_OPERATION_TYPES = {
			'_mountImageIntoNode': 'set innerHTML',
			INSERT_MARKUP: 'set innerHTML',
			MOVE_EXISTING: 'move',
			REMOVE_NODE: 'remove',
			SET_MARKUP: 'set innerHTML',
			TEXT_CONTENT: 'set textContent',
			'setValueForProperty': 'update attribute',
			'setValueForAttribute': 'update attribute',
			'deleteValueForProperty': 'remove attribute',
			'setValueForStyles': 'update styles',
			'replaceNodeWithMarkup': 'replace',
			'updateTextContent': 'set textContent' };

		function getTotalTime(measurements) {

			var totalTime = 0;
			for (var i = 0; i < measurements.length; i++) {
				var measurement = measurements[i];
				totalTime += measurement.totalTime;
			}
			return totalTime;
		}

		function getDOMSummary(measurements) {
			var items = [];
			measurements.forEach(function (measurement) {
				Object.keys(measurement.writes).forEach(function (id) {
					measurement.writes[id].forEach(function (write) {
						items.push({
							id: id,
							type: DOM_OPERATION_TYPES[write.type] || write.type,
							args: write.args });
					});
				});
			});
			return items;
		}

		function getExclusiveSummary(measurements) {
			var candidates = {};
			var displayName;

			for (var i = 0; i < measurements.length; i++) {
				var measurement = measurements[i];
				var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

				for (var id in allIDs) {
					displayName = measurement.displayNames[id].current;

					candidates[displayName] = candidates[displayName] || {
						componentName: displayName,
						inclusive: 0,
						exclusive: 0,
						render: 0,
						count: 0 };

					if (measurement.render[id]) {
						candidates[displayName].render += measurement.render[id];
					}
					if (measurement.exclusive[id]) {
						candidates[displayName].exclusive += measurement.exclusive[id];
					}
					if (measurement.inclusive[id]) {
						candidates[displayName].inclusive += measurement.inclusive[id];
					}
					if (measurement.counts[id]) {
						candidates[displayName].count += measurement.counts[id];
					}
				}
			}

			var arr = [];
			for (displayName in candidates) {
				if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
					arr.push(candidates[displayName]);
				}
			}

			arr.sort(function (a, b) {
				return b.exclusive - a.exclusive;
			});

			return arr;
		}

		function getInclusiveSummary(measurements, onlyClean) {
			var candidates = {};
			var inclusiveKey;

			for (var i = 0; i < measurements.length; i++) {
				var measurement = measurements[i];
				var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
				var cleanComponents;

				if (onlyClean) {
					cleanComponents = getUnchangedComponents(measurement);
				}

				for (var id in allIDs) {
					if (onlyClean && !cleanComponents[id]) {
						continue;
					}

					var displayName = measurement.displayNames[id];

					inclusiveKey = displayName.owner + ' > ' + displayName.current;

					candidates[inclusiveKey] = candidates[inclusiveKey] || {
						componentName: inclusiveKey,
						time: 0,
						count: 0 };

					if (measurement.inclusive[id]) {
						candidates[inclusiveKey].time += measurement.inclusive[id];
					}
					if (measurement.counts[id]) {
						candidates[inclusiveKey].count += measurement.counts[id];
					}
				}
			}

			var arr = [];
			for (inclusiveKey in candidates) {
				if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
					arr.push(candidates[inclusiveKey]);
				}
			}

			arr.sort(function (a, b) {
				return b.time - a.time;
			});

			return arr;
		}

		function getUnchangedComponents(measurement) {

			var cleanComponents = {};
			var dirtyLeafIDs = Object.keys(measurement.writes);
			var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

			for (var id in allIDs) {
				var isDirty = false;

				for (var i = 0; i < dirtyLeafIDs.length; i++) {
					if (dirtyLeafIDs[i].indexOf(id) === 0) {
						isDirty = true;
						break;
					}
				}

				if (measurement.created[id]) {
					isDirty = true;
				}
				if (!isDirty && measurement.counts[id] > 0) {
					cleanComponents[id] = true;
				}
			}
			return cleanComponents;
		}

		var ReactDefaultPerfAnalysis = {
			getExclusiveSummary: getExclusiveSummary,
			getInclusiveSummary: getInclusiveSummary,
			getDOMSummary: getDOMSummary,
			getTotalTime: getTotalTime };

		module.exports = ReactDefaultPerfAnalysis;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMount.js
	function (__inner_require__, exports, module) {
		var DOMProperty = __inner_require__(193 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/DOMProperty.js*/);
		var ReactBrowserEventEmitter = __inner_require__(196 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactBrowserEventEmitter.js*/);
		var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCurrentOwner.js');
		var ReactDOMFeatureFlags = __inner_require__(199 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDOMFeatureFlags.js*/);
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactEmptyComponentRegistry = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponentRegistry.js');
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');
		var ReactInstanceMap = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceMap.js');
		var ReactMarkupChecksum = __inner_require__(200 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMarkupChecksum.js*/);
		var ReactPerf = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js');
		var ReactReconciler = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js');
		var ReactUpdateQueue = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdateQueue.js');
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyObject = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyObject.js');
		var containsNode = __inner_require__(202 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/containsNode.js*/);
		var instantiateReactComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/instantiateReactComponent.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var setInnerHTML = __inner_require__(204 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/setInnerHTML.js*/);
		var shouldUpdateReactComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/shouldUpdateReactComponent.js');
		var validateDOMNesting = __inner_require__(205 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/validateDOMNesting.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
		var nodeCache = {};

		var ELEMENT_NODE_TYPE = 1;
		var DOC_NODE_TYPE = 9;
		var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

		var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);

		var instancesByReactRootID = {};

		var containersByReactRootID = {};

		if (process.env.NODE_ENV !== 'production') {

			var rootElementsByReactRootID = {};
		}

		var findComponentRootReusableArray = [];

		function firstDifferenceIndex(string1, string2) {
			var minLen = Math.min(string1.length, string2.length);
			for (var i = 0; i < minLen; i++) {
				if (string1.charAt(i) !== string2.charAt(i)) {
					return i;
				}
			}
			return string1.length === string2.length ? -1 : minLen;
		}

		function getReactRootElementInContainer(container) {
			if (!container) {
				return null;
			}

			if (container.nodeType === DOC_NODE_TYPE) {
				return container.documentElement;
			} else {
				return container.firstChild;
			}
		}

		function getReactRootID(container) {
			var rootElement = getReactRootElementInContainer(container);
			return rootElement && ReactMount.getID(rootElement);
		}

		function getID(node) {
			var id = internalGetID(node);
			if (id) {
				if (nodeCache.hasOwnProperty(id)) {
					var cached = nodeCache[id];
					if (cached !== node) {
						!!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;

						nodeCache[id] = node;
					}
				} else {
					nodeCache[id] = node;
				}
			}

			return id;
		}

		function internalGetID(node) {

			return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
		}

		function setID(node, id) {
			var oldID = internalGetID(node);
			if (oldID !== id) {
				delete nodeCache[oldID];
			}
			node.setAttribute(ATTR_NAME, id);
			nodeCache[id] = node;
		}

		function getNode(id) {
			if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
				nodeCache[id] = ReactMount.findReactNodeByID(id);
			}
			return nodeCache[id];
		}

		function getNodeFromInstance(instance) {
			var id = ReactInstanceMap.get(instance)._rootNodeID;
			if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
				return null;
			}
			if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
				nodeCache[id] = ReactMount.findReactNodeByID(id);
			}
			return nodeCache[id];
		}

		function isValid(node, id) {
			if (node) {
				!(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;

				var container = ReactMount.findReactContainerForID(id);
				if (container && containsNode(container, node)) {
					return true;
				}
			}

			return false;
		}

		function purgeID(id) {
			delete nodeCache[id];
		}

		var deepestNodeSoFar = null;
		function findDeepestCachedAncestorImpl(ancestorID) {
			var ancestor = nodeCache[ancestorID];
			if (ancestor && isValid(ancestor, ancestorID)) {
				deepestNodeSoFar = ancestor;
			} else {

				return false;
			}
		}

		function findDeepestCachedAncestor(targetID) {
			deepestNodeSoFar = null;
			ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);

			var foundNode = deepestNodeSoFar;
			deepestNodeSoFar = null;
			return foundNode;
		}

		function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
			if (ReactDOMFeatureFlags.useCreateElement) {
				context = assign({}, context);
				if (container.nodeType === DOC_NODE_TYPE) {
					context[ownerDocumentContextKey] = container;
				} else {
					context[ownerDocumentContextKey] = container.ownerDocument;
				}
			}
			if (process.env.NODE_ENV !== 'production') {
				if (context === emptyObject) {
					context = {};
				}
				var tag = container.nodeName.toLowerCase();
				context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
			}
			var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
			componentInstance._renderedComponent._topLevelWrapper = componentInstance;
			ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
		}

		function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
			var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(shouldReuseMarkup);
			transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
			ReactUpdates.ReactReconcileTransaction.release(transaction);
		}

		function unmountComponentFromNode(instance, container) {
			ReactReconciler.unmountComponent(instance);

			if (container.nodeType === DOC_NODE_TYPE) {
				container = container.documentElement;
			}

			while (container.lastChild) {
				container.removeChild(container.lastChild);
			}
		}

		function hasNonRootReactChild(node) {
			var reactRootID = getReactRootID(node);
			return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
		}

		function findFirstReactDOMImpl(node) {

			for (; node && node.parentNode !== node; node = node.parentNode) {
				if (node.nodeType !== 1) {

					continue;
				}
				var nodeID = internalGetID(node);
				if (!nodeID) {
					continue;
				}
				var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);

				var current = node;
				var lastID;
				do {
					lastID = internalGetID(current);
					current = current.parentNode;
					if (current == null) {

						return null;
					}
				} while (lastID !== reactRootID);

				if (current === containersByReactRootID[reactRootID]) {
					return node;
				}
			}
			return null;
		}

		var TopLevelWrapper = function TopLevelWrapper() {};
		TopLevelWrapper.prototype.isReactComponent = {};
		if (process.env.NODE_ENV !== 'production') {
			TopLevelWrapper.displayName = 'TopLevelWrapper';
		}
		TopLevelWrapper.prototype.render = function () {

			return this.props;
		};

		var ReactMount = {

			TopLevelWrapper: TopLevelWrapper,

			_instancesByReactRootID: instancesByReactRootID,

			scrollMonitor: function scrollMonitor(container, renderCallback) {
				renderCallback();
			},

			_updateRootComponent: function _updateRootComponent(prevComponent, nextElement, container, callback) {
				ReactMount.scrollMonitor(container, function () {
					ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
					if (callback) {
						ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
					}
				});

				if (process.env.NODE_ENV !== 'production') {

					rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
				}

				return prevComponent;
			},

			_registerComponent: function _registerComponent(nextComponent, container) {
				!(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;

				ReactBrowserEventEmitter.ensureScrollValueMonitoring();

				var reactRootID = ReactMount.registerContainer(container);
				instancesByReactRootID[reactRootID] = nextComponent;
				return reactRootID;
			},

			_renderNewRootComponent: function _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context) {

				process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

				var componentInstance = instantiateReactComponent(nextElement, null);
				var reactRootID = ReactMount._registerComponent(componentInstance, container);

				ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);

				if (process.env.NODE_ENV !== 'production') {

					rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
				}

				return componentInstance;
			},

			renderSubtreeIntoContainer: function renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
				!(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
				return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
			},

			_renderSubtreeIntoContainer: function _renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
				!ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;

				process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;

				var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

				var prevComponent = instancesByReactRootID[getReactRootID(container)];

				if (prevComponent) {
					var prevWrappedElement = prevComponent._currentElement;
					var prevElement = prevWrappedElement.props;
					if (shouldUpdateReactComponent(prevElement, nextElement)) {
						var publicInst = prevComponent._renderedComponent.getPublicInstance();
						var updatedCallback = callback && function () {
							callback.call(publicInst);
						};
						ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
						return publicInst;
					} else {
						ReactMount.unmountComponentAtNode(container);
					}
				}

				var reactRootElement = getReactRootElementInContainer(container);
				var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
				var containerHasNonRootReactChild = hasNonRootReactChild(container);

				if (process.env.NODE_ENV !== 'production') {
					process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;

					if (!containerHasReactMarkup || reactRootElement.nextSibling) {
						var rootElementSibling = reactRootElement;
						while (rootElementSibling) {
							if (internalGetID(rootElementSibling)) {
								process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
								break;
							}
							rootElementSibling = rootElementSibling.nextSibling;
						}
					}
				}

				var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
				var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
				if (callback) {
					callback.call(component);
				}
				return component;
			},

			render: function render(nextElement, container, callback) {
				return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
			},

			registerContainer: function registerContainer(container) {
				var reactRootID = getReactRootID(container);
				if (reactRootID) {

					reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
				}
				if (!reactRootID) {

					reactRootID = ReactInstanceHandles.createReactRootID();
				}
				containersByReactRootID[reactRootID] = container;
				return reactRootID;
			},

			unmountComponentAtNode: function unmountComponentAtNode(container) {

				process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

				!(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;

				var reactRootID = getReactRootID(container);
				var component = instancesByReactRootID[reactRootID];
				if (!component) {

					var containerHasNonRootReactChild = hasNonRootReactChild(container);

					var containerID = internalGetID(container);
					var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);

					if (process.env.NODE_ENV !== 'production') {
						process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
					}

					return false;
				}
				ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
				delete instancesByReactRootID[reactRootID];
				delete containersByReactRootID[reactRootID];
				if (process.env.NODE_ENV !== 'production') {
					delete rootElementsByReactRootID[reactRootID];
				}
				return true;
			},

			findReactContainerForID: function findReactContainerForID(id) {
				var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
				var container = containersByReactRootID[reactRootID];

				if (process.env.NODE_ENV !== 'production') {
					var rootElement = rootElementsByReactRootID[reactRootID];
					if (rootElement && rootElement.parentNode !== container) {
						process.env.NODE_ENV !== 'production' ? warning(internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
						var containerChild = container.firstChild;
						if (containerChild && reactRootID === internalGetID(containerChild)) {

							rootElementsByReactRootID[reactRootID] = containerChild;
						} else {
							process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
						}
					}
				}

				return container;
			},

			findReactNodeByID: function findReactNodeByID(id) {
				var reactRoot = ReactMount.findReactContainerForID(id);
				return ReactMount.findComponentRoot(reactRoot, id);
			},

			getFirstReactDOM: function getFirstReactDOM(node) {
				return findFirstReactDOMImpl(node);
			},

			findComponentRoot: function findComponentRoot(ancestorNode, targetID) {
				var firstChildren = findComponentRootReusableArray;
				var childIndex = 0;

				var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

				if (process.env.NODE_ENV !== 'production') {

					process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
				}

				firstChildren[0] = deepestAncestor.firstChild;
				firstChildren.length = 1;

				while (childIndex < firstChildren.length) {
					var child = firstChildren[childIndex++];
					var targetChild;

					while (child) {
						var childID = ReactMount.getID(child);
						if (childID) {

							if (targetID === childID) {
								targetChild = child;
							} else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {

								firstChildren.length = childIndex = 0;
								firstChildren.push(child.firstChild);
							}
						} else {

							firstChildren.push(child.firstChild);
						}

						child = child.nextSibling;
					}

					if (targetChild) {

						firstChildren.length = 0;

						return targetChild;
					}
				}

				firstChildren.length = 0;

				!false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
			},

			_mountImageIntoNode: function _mountImageIntoNode(markup, container, shouldReuseMarkup, transaction) {
				!(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;

				if (shouldReuseMarkup) {
					var rootElement = getReactRootElementInContainer(container);
					if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
						return;
					} else {
						var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
						rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

						var rootMarkup = rootElement.outerHTML;
						rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

						var normalizedMarkup = markup;
						if (process.env.NODE_ENV !== 'production') {

							var normalizer;
							if (container.nodeType === ELEMENT_NODE_TYPE) {
								normalizer = document.createElement('div');
								normalizer.innerHTML = markup;
								normalizedMarkup = normalizer.innerHTML;
							} else {
								normalizer = document.createElement('iframe');
								document.body.appendChild(normalizer);
								normalizer.contentDocument.write(markup);
								normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
								document.body.removeChild(normalizer);
							}
						}

						var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
						var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

						!(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;

						if (process.env.NODE_ENV !== 'production') {
							process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
						}
					}
				}

				!(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;

				if (transaction.useCreateElement) {
					while (container.lastChild) {
						container.removeChild(container.lastChild);
					}
					container.appendChild(markup);
				} else {
					setInnerHTML(container, markup);
				}
			},

			ownerDocumentContextKey: ownerDocumentContextKey,

			getReactRootID: getReactRootID,

			getID: getID,

			setID: setID,

			getNode: getNode,

			getNodeFromInstance: getNodeFromInstance,

			isValid: isValid,

			purgeID: purgeID };

		ReactPerf.measureMethods(ReactMount, 'ReactMount', {
			_renderNewRootComponent: '_renderNewRootComponent',
			_mountImageIntoNode: '_mountImageIntoNode' });

		module.exports = ReactMount;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactBrowserEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventConstants = __inner_require__(15 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js*/);
		var EventPluginHub = __inner_require__(12 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js*/);
		var EventPluginRegistry = __inner_require__(13 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginRegistry.js*/);
		var ReactEventEmitterMixin = __inner_require__(44 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEventEmitterMixin.js*/);
		var ReactPerf = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js');
		var ViewportMetrics = __inner_require__(197 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ViewportMetrics.js*/);

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var isEventSupported = __inner_require__(198 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/isEventSupported.js*/);

		var alreadyListeningTo = {};
		var isMonitoringScrollValue = false;
		var reactTopListenersCounter = 0;

		var topEventMapping = {
			topAbort: 'abort',
			topBlur: 'blur',
			topCanPlay: 'canplay',
			topCanPlayThrough: 'canplaythrough',
			topChange: 'change',
			topClick: 'click',
			topCompositionEnd: 'compositionend',
			topCompositionStart: 'compositionstart',
			topCompositionUpdate: 'compositionupdate',
			topContextMenu: 'contextmenu',
			topCopy: 'copy',
			topCut: 'cut',
			topDoubleClick: 'dblclick',
			topDrag: 'drag',
			topDragEnd: 'dragend',
			topDragEnter: 'dragenter',
			topDragExit: 'dragexit',
			topDragLeave: 'dragleave',
			topDragOver: 'dragover',
			topDragStart: 'dragstart',
			topDrop: 'drop',
			topDurationChange: 'durationchange',
			topEmptied: 'emptied',
			topEncrypted: 'encrypted',
			topEnded: 'ended',
			topError: 'error',
			topFocus: 'focus',
			topInput: 'input',
			topKeyDown: 'keydown',
			topKeyPress: 'keypress',
			topKeyUp: 'keyup',
			topLoadedData: 'loadeddata',
			topLoadedMetadata: 'loadedmetadata',
			topLoadStart: 'loadstart',
			topMouseDown: 'mousedown',
			topMouseMove: 'mousemove',
			topMouseOut: 'mouseout',
			topMouseOver: 'mouseover',
			topMouseUp: 'mouseup',
			topPaste: 'paste',
			topPause: 'pause',
			topPlay: 'play',
			topPlaying: 'playing',
			topProgress: 'progress',
			topRateChange: 'ratechange',
			topScroll: 'scroll',
			topSeeked: 'seeked',
			topSeeking: 'seeking',
			topSelectionChange: 'selectionchange',
			topStalled: 'stalled',
			topSuspend: 'suspend',
			topTextInput: 'textInput',
			topTimeUpdate: 'timeupdate',
			topTouchCancel: 'touchcancel',
			topTouchEnd: 'touchend',
			topTouchMove: 'touchmove',
			topTouchStart: 'touchstart',
			topVolumeChange: 'volumechange',
			topWaiting: 'waiting',
			topWheel: 'wheel' };

		var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

		function getListeningForDocument(mountAt) {

			if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
				mountAt[topListenersIDKey] = reactTopListenersCounter++;
				alreadyListeningTo[mountAt[topListenersIDKey]] = {};
			}
			return alreadyListeningTo[mountAt[topListenersIDKey]];
		}

		var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

			ReactEventListener: null,

			injection: {

				injectReactEventListener: function injectReactEventListener(ReactEventListener) {
					ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
					ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
				} },

			setEnabled: function setEnabled(enabled) {
				if (ReactBrowserEventEmitter.ReactEventListener) {
					ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
				}
			},

			isEnabled: function isEnabled() {
				return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
			},

			listenTo: function listenTo(registrationName, contentDocumentHandle) {
				var mountAt = contentDocumentHandle;
				var isListening = getListeningForDocument(mountAt);
				var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

				var topLevelTypes = EventConstants.topLevelTypes;
				for (var i = 0; i < dependencies.length; i++) {
					var dependency = dependencies[i];
					if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
						if (dependency === topLevelTypes.topWheel) {
							if (isEventSupported('wheel')) {
								ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
							} else if (isEventSupported('mousewheel')) {
								ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
							} else {

								ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
							}
						} else if (dependency === topLevelTypes.topScroll) {

							if (isEventSupported('scroll', true)) {
								ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
							} else {
								ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
							}
						} else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

							if (isEventSupported('focus', true)) {
								ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
								ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
							} else if (isEventSupported('focusin')) {

								ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
								ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
							}

							isListening[topLevelTypes.topBlur] = true;
							isListening[topLevelTypes.topFocus] = true;
						} else if (topEventMapping.hasOwnProperty(dependency)) {
							ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
						}

						isListening[dependency] = true;
					}
				}
			},

			trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
				return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
			},

			trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
				return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
			},

			ensureScrollValueMonitoring: function ensureScrollValueMonitoring() {
				if (!isMonitoringScrollValue) {
					var refresh = ViewportMetrics.refreshScrollValues;
					ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
					isMonitoringScrollValue = true;
				}
			},

			eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

			registrationNameModules: EventPluginHub.registrationNameModules,

			putListener: EventPluginHub.putListener,

			getListener: EventPluginHub.getListener,

			deleteListener: EventPluginHub.deleteListener,

			deleteAllListeners: EventPluginHub.deleteAllListeners });

		ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
			putListener: 'putListener',
			deleteListener: 'deleteListener' });

		module.exports = ReactBrowserEventEmitter;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ViewportMetrics.js
	function (__inner_require__, exports, module) {
		var ViewportMetrics = {

			currentScrollLeft: 0,

			currentScrollTop: 0,

			refreshScrollValues: function refreshScrollValues(scrollPosition) {
				ViewportMetrics.currentScrollLeft = scrollPosition.x;
				ViewportMetrics.currentScrollTop = scrollPosition.y;
			} };

		module.exports = ViewportMetrics;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/isEventSupported.js
	function (__inner_require__, exports, module) {
		var ExecutionEnvironment = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/ExecutionEnvironment.js');

		var useHasFeature;
		if (ExecutionEnvironment.canUseDOM) {
			useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true;
		}

		/**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
		function isEventSupported(eventNameSuffix, capture) {
			if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
				return false;
			}

			var eventName = 'on' + eventNameSuffix;
			var isSupported = eventName in document;

			if (!isSupported) {
				var element = document.createElement('div');
				element.setAttribute(eventName, 'return;');
				isSupported = typeof element[eventName] === 'function';
			}

			if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {

				isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
			}

			return isSupported;
		}

		module.exports = isEventSupported;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDOMFeatureFlags.js
	function (__inner_require__, exports, module) {
		var ReactDOMFeatureFlags = {
			useCreateElement: false };

		module.exports = ReactDOMFeatureFlags;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMarkupChecksum.js
	function (__inner_require__, exports, module) {
		var adler32 = __inner_require__(201 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/adler32.js*/);

		var TAG_END = /\/?>/;

		var ReactMarkupChecksum = {
			CHECKSUM_ATTR_NAME: 'data-react-checksum',

			addChecksumToMarkup: function addChecksumToMarkup(markup) {
				var checksum = adler32(markup);

				return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
			},

			canReuseMarkup: function canReuseMarkup(markup, element) {
				var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
				existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
				var markupChecksum = adler32(markup);
				return markupChecksum === existingChecksum;
			} };

		module.exports = ReactMarkupChecksum;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/adler32.js
	function (__inner_require__, exports, module) {
		var MOD = 65521;

		function adler32(data) {
			var a = 1;
			var b = 0;
			var i = 0;
			var l = data.length;
			var m = l & ~0x3;
			while (i < m) {
				for (; i < Math.min(i + 4096, m); i += 4) {
					b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
				}
				a %= MOD;
				b %= MOD;
			}
			for (; i < l; i++) {
				b += a += data.charCodeAt(i);
			}
			a %= MOD;
			b %= MOD;
			return a | b << 16;
		}

		module.exports = adler32;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/containsNode.js
	function (__inner_require__, exports, module) {
		var isTextNode = __inner_require__(203 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/isTextNode.js*/);

		function containsNode(_x, _x2) {
			var _again = true;

			_function: while (_again) {
				var outerNode = _x,
				    innerNode = _x2;
				_again = false;

				if (!outerNode || !innerNode) {
					return false;
				} else if (outerNode === innerNode) {
					return true;
				} else if (isTextNode(outerNode)) {
					return false;
				} else if (isTextNode(innerNode)) {
					_x = outerNode;
					_x2 = innerNode.parentNode;
					_again = true;
					continue _function;
				} else if (outerNode.contains) {
					return outerNode.contains(innerNode);
				} else if (outerNode.compareDocumentPosition) {
					return !!(outerNode.compareDocumentPosition(innerNode) & 16);
				} else {
					return false;
				}
			}
		}

		module.exports = containsNode;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/isTextNode.js
	function (__inner_require__, exports, module) {
		var isNode = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/isNode.js');

		function isTextNode(object) {
			return isNode(object) && object.nodeType == 3;
		}

		module.exports = isTextNode;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/setInnerHTML.js
	function (__inner_require__, exports, module) {
		var ExecutionEnvironment = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/ExecutionEnvironment.js');

		var WHITESPACE_TEST = /^[ \r\n\t\f]/;
		var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

		var setInnerHTML = function setInnerHTML(node, html) {
			node.innerHTML = html;
		};

		if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
			setInnerHTML = function setInnerHTML(node, html) {
				MSApp.execUnsafeLocalFunction(function () {
					node.innerHTML = html;
				});
			};
		}

		if (ExecutionEnvironment.canUseDOM) {

			var testElement = document.createElement('div');
			testElement.innerHTML = ' ';
			if (testElement.innerHTML === '') {
				setInnerHTML = function setInnerHTML(node, html) {

					if (node.parentNode) {
						node.parentNode.replaceChild(node, node);
					}

					if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {

						node.innerHTML = String.fromCharCode(0xFEFF) + html;

						var textNode = node.firstChild;
						if (textNode.data.length === 1) {
							node.removeChild(textNode);
						} else {
							textNode.deleteData(0, 1);
						}
					} else {
						node.innerHTML = html;
					}
				};
			}
		}

		module.exports = setInnerHTML;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/validateDOMNesting.js
	function (__inner_require__, exports, module) {
		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var validateDOMNesting = emptyFunction;

		if (process.env.NODE_ENV !== 'production') {

			var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

			var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', 'foreignObject', 'desc', 'title'];

			var buttonScopeTags = inScopeTags.concat(['button']);

			var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

			var emptyAncestorInfo = {
				parentTag: null,

				formTag: null,
				aTagInScope: null,
				buttonTagInScope: null,
				nobrTagInScope: null,
				pTagInButtonScope: null,

				listItemTagAutoclosing: null,
				dlItemTagAutoclosing: null };

			var updatedAncestorInfo = function updatedAncestorInfo(oldInfo, tag, instance) {
				var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
				var info = { tag: tag, instance: instance };

				if (inScopeTags.indexOf(tag) !== -1) {
					ancestorInfo.aTagInScope = null;
					ancestorInfo.buttonTagInScope = null;
					ancestorInfo.nobrTagInScope = null;
				}
				if (buttonScopeTags.indexOf(tag) !== -1) {
					ancestorInfo.pTagInButtonScope = null;
				}

				if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
					ancestorInfo.listItemTagAutoclosing = null;
					ancestorInfo.dlItemTagAutoclosing = null;
				}

				ancestorInfo.parentTag = info;

				if (tag === 'form') {
					ancestorInfo.formTag = info;
				}
				if (tag === 'a') {
					ancestorInfo.aTagInScope = info;
				}
				if (tag === 'button') {
					ancestorInfo.buttonTagInScope = info;
				}
				if (tag === 'nobr') {
					ancestorInfo.nobrTagInScope = info;
				}
				if (tag === 'p') {
					ancestorInfo.pTagInButtonScope = info;
				}
				if (tag === 'li') {
					ancestorInfo.listItemTagAutoclosing = info;
				}
				if (tag === 'dd' || tag === 'dt') {
					ancestorInfo.dlItemTagAutoclosing = info;
				}

				return ancestorInfo;
			};

			var isTagValidWithParent = function isTagValidWithParent(tag, parentTag) {

				switch (parentTag) {

					case 'select':
						return tag === 'option' || tag === 'optgroup' || tag === '#text';
					case 'optgroup':
						return tag === 'option' || tag === '#text';

					case 'option':
						return tag === '#text';

					case 'tr':
						return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';

					case 'tbody':
					case 'thead':
					case 'tfoot':
						return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';

					case 'colgroup':
						return tag === 'col' || tag === 'template';

					case 'table':
						return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';

					case 'head':
						return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';

					case 'html':
						return tag === 'head' || tag === 'body';}

				switch (tag) {
					case 'h1':
					case 'h2':
					case 'h3':
					case 'h4':
					case 'h5':
					case 'h6':
						return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

					case 'rp':
					case 'rt':
						return impliedEndTags.indexOf(parentTag) === -1;

					case 'caption':
					case 'col':
					case 'colgroup':
					case 'frame':
					case 'head':
					case 'tbody':
					case 'td':
					case 'tfoot':
					case 'th':
					case 'thead':
					case 'tr':

						return parentTag == null;}

				return true;
			};

			var findInvalidAncestorForTag = function findInvalidAncestorForTag(tag, ancestorInfo) {
				switch (tag) {
					case 'address':
					case 'article':
					case 'aside':
					case 'blockquote':
					case 'center':
					case 'details':
					case 'dialog':
					case 'dir':
					case 'div':
					case 'dl':
					case 'fieldset':
					case 'figcaption':
					case 'figure':
					case 'footer':
					case 'header':
					case 'hgroup':
					case 'main':
					case 'menu':
					case 'nav':
					case 'ol':
					case 'p':
					case 'section':
					case 'summary':
					case 'ul':

					case 'pre':
					case 'listing':

					case 'table':

					case 'hr':

					case 'xmp':

					case 'h1':
					case 'h2':
					case 'h3':
					case 'h4':
					case 'h5':
					case 'h6':
						return ancestorInfo.pTagInButtonScope;

					case 'form':
						return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

					case 'li':
						return ancestorInfo.listItemTagAutoclosing;

					case 'dd':
					case 'dt':
						return ancestorInfo.dlItemTagAutoclosing;

					case 'button':
						return ancestorInfo.buttonTagInScope;

					case 'a':

						return ancestorInfo.aTagInScope;

					case 'nobr':
						return ancestorInfo.nobrTagInScope;}

				return null;
			};

			var findOwnerStack = function findOwnerStack(instance) {
				if (!instance) {
					return [];
				}

				var stack = [];

				do {

					stack.push(instance);
				} while (instance = instance._currentElement._owner);
				stack.reverse();
				return stack;
			};

			var didWarn = {};

			validateDOMNesting = function validateDOMNesting(childTag, childInstance, ancestorInfo) {
				ancestorInfo = ancestorInfo || emptyAncestorInfo;
				var parentInfo = ancestorInfo.parentTag;
				var parentTag = parentInfo && parentInfo.tag;

				var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
				var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
				var problematic = invalidParent || invalidAncestor;

				if (problematic) {
					var ancestorTag = problematic.tag;
					var ancestorInstance = problematic.instance;

					var childOwner = childInstance && childInstance._currentElement._owner;
					var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

					var childOwners = findOwnerStack(childOwner);
					var ancestorOwners = findOwnerStack(ancestorOwner);

					var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
					var i;

					var deepestCommon = -1;
					for (i = 0; i < minStackLen; i++) {
						if (childOwners[i] === ancestorOwners[i]) {
							deepestCommon = i;
						} else {
							break;
						}
					}

					var UNKNOWN = '(unknown)';
					var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
						return inst.getName() || UNKNOWN;
					});
					var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
						return inst.getName() || UNKNOWN;
					});
					var ownerInfo = [].concat(deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag, invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

					var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
					if (didWarn[warnKey]) {
						return;
					}
					didWarn[warnKey] = true;

					if (invalidParent) {
						var info = '';
						if (ancestorTag === 'table' && childTag === 'tr') {
							info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
						}
						process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
					} else {
						process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
					}
				}
			};

			validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);

			validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

			validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
				ancestorInfo = ancestorInfo || emptyAncestorInfo;
				var parentInfo = ancestorInfo.parentTag;
				var parentTag = parentInfo && parentInfo.tag;
				return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
			};
		}

		module.exports = validateDOMNesting;
	},
	// Libraries/AppState/AppState.js
	function (__inner_require__, exports, module) {
		var Map = require('react-native@0.21/Libraries/vendor/core/Map.js');
		var NativeModules = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var RCTAppState = NativeModules.AppState;

		var logError = require('react-native@0.21/Libraries/Utilities/logError.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var _eventHandlers = {
			change: new Map(),
			memoryWarning: new Map() };

		var AppState = {

			addEventListener: function addEventListener(type, handler) {
				invariant(['change', 'memoryWarning'].indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);

				if (type === 'change') {
					_eventHandlers[type].set(handler, RCTDeviceEventEmitter.addListener('appStateDidChange', function (appStateData) {
						handler(appStateData.app_state);
					}));
				} else if (type === 'memoryWarning') {
					_eventHandlers[type].set(handler, RCTDeviceEventEmitter.addListener('memoryWarning', handler));
				}
			},

			removeEventListener: function removeEventListener(type, handler) {
				invariant(['change', 'memoryWarning'].indexOf(type) !== -1, 'Trying to remove listener for unknown event: "%s"', type);

				if (!_eventHandlers[type].has(handler)) {
					return;
				}
				_eventHandlers[type].get(handler).remove();
				_eventHandlers[type].delete(handler);
			},

			currentState: 'active' };

		RCTDeviceEventEmitter.addListener('appStateDidChange', function (appStateData) {
			AppState.currentState = appStateData.app_state;
		});

		RCTAppState.getCurrentAppState(function (appStateData) {
			AppState.currentState = appStateData.app_state;
		}, logError);

		module.exports = AppState;
	},
	// Libraries/AppStateIOS/AppStateIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeModules = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var RCTAppState = NativeModules.AppState;

		var logError = require('react-native@0.21/Libraries/Utilities/logError.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var _eventHandlers = {
			change: new Map(),
			memoryWarning: new Map() };

		var AppStateIOS = {

			addEventListener: function addEventListener(type, handler) {
				invariant(['change', 'memoryWarning'].indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);

				if (type === 'change') {
					_eventHandlers[type].set(handler, RCTDeviceEventEmitter.addListener('appStateDidChange', function (appStateData) {
						handler(appStateData.app_state);
					}));
				} else if (type === 'memoryWarning') {
					_eventHandlers[type].set(handler, RCTDeviceEventEmitter.addListener('memoryWarning', handler));
				}
			},

			removeEventListener: function removeEventListener(type, handler) {
				invariant(['change', 'memoryWarning'].indexOf(type) !== -1, 'Trying to remove listener for unknown event: "%s"', type);

				if (!_eventHandlers[type].has(handler)) {
					return;
				}
				_eventHandlers[type].get(handler).remove();
				_eventHandlers[type].delete(handler);
			},

			currentState: 'active' };

		RCTDeviceEventEmitter.addListener('appStateDidChange', function (appStateData) {
			AppStateIOS.currentState = appStateData.app_state;
		});

		RCTAppState.getCurrentAppState(function (appStateData) {
			AppStateIOS.currentState = appStateData.app_state;
		}, logError);

		module.exports = AppStateIOS;
	},
	// Libraries/Storage/AsyncStorage.js
	function (__inner_require__, exports, module) {
		var NativeModules = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
		var RCTAsyncSQLiteStorage = NativeModules.AsyncSQLiteDBStorage;
		var RCTAsyncRocksDBStorage = NativeModules.AsyncRocksDBStorage;
		var RCTAsyncFileStorage = NativeModules.AsyncLocalStorage;

		var RCTAsyncStorage = RCTAsyncRocksDBStorage || RCTAsyncSQLiteStorage || RCTAsyncFileStorage;

		var AsyncStorage = {
			_getRequests: [],
			_getKeys: [],
			_immediate: null,

			getItem: function getItem(key, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiGet([key], function (errors, result) {

						var value = result && result[0] && result[0][1] ? result[0][1] : null;
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0], value);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(value);
						}
					});
				});
			},

			setItem: function setItem(key, value, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiSet([[key, value]], function (errors) {
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0]);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(null);
						}
					});
				});
			},

			removeItem: function removeItem(key, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiRemove([key], function (errors) {
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0]);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(null);
						}
					});
				});
			},

			mergeItem: function mergeItem(key, value, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiMerge([[key, value]], function (errors) {
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0]);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(null);
						}
					});
				});
			},

			clear: function clear(callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.clear(function (error) {
						callback && callback(convertError(error));
						if (error && convertError(error)) {
							reject(convertError(error));
						} else {
							resolve(null);
						}
					});
				});
			},

			getAllKeys: function getAllKeys(callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.getAllKeys(function (error, keys) {
						callback && callback(convertError(error), keys);
						if (error) {
							reject(convertError(error));
						} else {
							resolve(keys);
						}
					});
				});
			},

			flushGetRequests: function flushGetRequests() {
				var getRequests = this._getRequests;
				var getKeys = this._getKeys;

				this._getRequests = [];
				this._getKeys = [];

				RCTAsyncStorage.multiGet(getKeys, function (errors, result) {

					var map = {};
					result.forEach(function (_ref) {
						var _ref2 = babelHelpers.slicedToArray(_ref, 2),
						    key = _ref2[0],
						    value = _ref2[1];return map[key] = value;
					});
					var reqLength = getRequests.length;
					for (var i = 0; i < reqLength; i++) {
						var request = getRequests[i];
						var requestKeys = request.keys;
						var requestResult = requestKeys.map(function (key) {
							return [key, map[key]];
						});
						request.callback && request.callback(null, requestResult);
						request.resolve && request.resolve(requestResult);
					}
				});
			},

			multiGet: function multiGet(keys, callback) {
				var _this = this;
				if (!this._immediate) {
					this._immediate = setImmediate(function () {
						_this._immediate = null;
						_this.flushGetRequests();
					});
				}

				var getRequest = {
					keys: keys,
					callback: callback,

					keyIndex: this._getKeys.length,
					resolve: null,
					reject: null };

				var promiseResult = new Promise(function (resolve, reject) {
					getRequest.resolve = resolve;
					getRequest.reject = reject;
				});

				this._getRequests.push(getRequest);

				keys.forEach(function (key) {
					if (_this._getKeys.indexOf(key) === -1) {
						_this._getKeys.push(key);
					}
				});

				return promiseResult;
			},

			multiSet: function multiSet(keyValuePairs, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiSet(keyValuePairs, function (errors) {
						var error = convertErrors(errors);
						callback && callback(error);
						if (error) {
							reject(error);
						} else {
							resolve(null);
						}
					});
				});
			},

			multiRemove: function multiRemove(keys, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiRemove(keys, function (errors) {
						var error = convertErrors(errors);
						callback && callback(error);
						if (error) {
							reject(error);
						} else {
							resolve(null);
						}
					});
				});
			},

			multiMerge: function multiMerge(keyValuePairs, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiMerge(keyValuePairs, function (errors) {
						var error = convertErrors(errors);
						callback && callback(error);
						if (error) {
							reject(error);
						} else {
							resolve(null);
						}
					});
				});
			} };

		if (!RCTAsyncStorage.multiMerge) {
			delete AsyncStorage.mergeItem;
			delete AsyncStorage.multiMerge;
		}

		function convertErrors(errs) {
			if (!errs) {
				return null;
			}
			return (Array.isArray(errs) ? errs : [errs]).map(function (e) {
				return convertError(e);
			});
		}

		function convertError(error) {
			if (!error) {
				return null;
			}
			var out = new Error(error.message);
			out.key = error.key;
			return out;
		}

		module.exports = AsyncStorage;
	},
	// Libraries/Utilities/BackAndroid.ios.js
	function (__inner_require__, exports, module) {
		function emptyFunction() {}

		var BackAndroid = {
			exitApp: emptyFunction,
			addEventListener: emptyFunction,
			removeEventListener: emptyFunction };

		module.exports = BackAndroid;
	},
	// Libraries/CameraRoll/CameraRoll.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var RCTCameraRollManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').CameraRollManager;

		var createStrictShapeTypeChecker = __inner_require__(63 /*Libraries/Utilities/createStrictShapeTypeChecker.js*/);
		var deepFreezeAndThrowOnMutationInDev = __inner_require__(76 /*Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var GROUP_TYPES_OPTIONS = ['Album', 'All', 'Event', 'Faces', 'Library', 'PhotoStream', 'SavedPhotos'];

		var ASSET_TYPE_OPTIONS = ['All', 'Videos', 'Photos'];

		deepFreezeAndThrowOnMutationInDev(GROUP_TYPES_OPTIONS);
		deepFreezeAndThrowOnMutationInDev(ASSET_TYPE_OPTIONS);

		var getPhotosParamChecker = createStrictShapeTypeChecker({

			first: ReactPropTypes.number.isRequired,

			after: ReactPropTypes.string,

			groupTypes: ReactPropTypes.oneOf(GROUP_TYPES_OPTIONS),

			groupName: ReactPropTypes.string,

			assetType: ReactPropTypes.oneOf(ASSET_TYPE_OPTIONS),

			mimeTypes: ReactPropTypes.arrayOf(ReactPropTypes.string) });

		var getPhotosReturnChecker = createStrictShapeTypeChecker({
			edges: ReactPropTypes.arrayOf(createStrictShapeTypeChecker({
				node: createStrictShapeTypeChecker({
					type: ReactPropTypes.string.isRequired,
					group_name: ReactPropTypes.string.isRequired,
					image: createStrictShapeTypeChecker({
						uri: ReactPropTypes.string.isRequired,
						height: ReactPropTypes.number.isRequired,
						width: ReactPropTypes.number.isRequired,
						isStored: ReactPropTypes.bool }).isRequired,
					timestamp: ReactPropTypes.number.isRequired,
					location: createStrictShapeTypeChecker({
						latitude: ReactPropTypes.number,
						longitude: ReactPropTypes.number,
						altitude: ReactPropTypes.number,
						heading: ReactPropTypes.number,
						speed: ReactPropTypes.number }) }).isRequired })).isRequired,
			page_info: createStrictShapeTypeChecker({
				has_next_page: ReactPropTypes.bool.isRequired,
				start_cursor: ReactPropTypes.string,
				end_cursor: ReactPropTypes.string }).isRequired });var CameraRoll = function () {
			function CameraRoll() {
				babelHelpers.classCallCheck(this, CameraRoll);
			}babelHelpers.createClass(CameraRoll, null, [{ key: 'saveImageWithTag', value: function saveImageWithTag(tag) {
					invariant(typeof tag === 'string', 'CameraRoll.saveImageWithTag tag must be a valid string.');

					if (arguments.length > 1) {
						console.warn("CameraRoll.saveImageWithTag(tag, success, error) is deprecated.  Use the returned Promise instead");
						var successCallback = arguments[1];
						var errorCallback = arguments[2] || function () {};
						RCTCameraRollManager.saveImageWithTag(tag).then(successCallback, errorCallback);
						return;
					}
					return RCTCameraRollManager.saveImageWithTag(tag);
				} }, { key: 'getPhotos', value: function getPhotos(params) {
					var _arguments = arguments;
					if (__DEV__) {
						getPhotosParamChecker({ params: params }, 'params', 'CameraRoll.getPhotos');
					}
					if (arguments.length > 1) {
						console.warn("CameraRoll.getPhotos(tag, success, error) is deprecated.  Use the returned Promise instead");
						var successCallback = arguments[1];
						if (__DEV__) {
							(function () {
								var callback = _arguments[1];
								successCallback = function successCallback(response) {
									getPhotosReturnChecker({ response: response }, 'response', 'CameraRoll.getPhotos callback');

									callback(response);
								};
							})();
						}
						var errorCallback = arguments[2] || function () {};
						RCTCameraRollManager.getPhotos(params).then(successCallback, errorCallback);
					}

					return RCTCameraRollManager.getPhotos(params);
				} }]);return CameraRoll;
		}();

		CameraRoll.GroupTypesOptions = GROUP_TYPES_OPTIONS;
		CameraRoll.AssetTypeOptions = ASSET_TYPE_OPTIONS;

		module.exports = CameraRoll;
	},
	// Libraries/Components/Clipboard/Clipboard.js
	function (__inner_require__, exports, module) {
		var Clipboard = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').Clipboard;

		module.exports = {

			getString: function getString() {
				if (arguments.length > 0) {
					var callback = arguments[0];
					console.warn('Clipboard.getString(callback) is deprecated. Use the returned Promise instead');
					Clipboard.getString().then(callback);
					return;
				}
				return Clipboard.getString();
			},

			setString: function setString(content) {
				Clipboard.setString(content);
			} };
	},
	// Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.js
	function (__inner_require__, exports, module) {
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var DatePickerAndroid = {
			open: function open(options) {
				return regeneratorRuntime.async(function open$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {case 0:
								return _context.abrupt('return', Promise.reject({
									message: 'DatePickerAndroid is not supported on this platform.' }));case 1:case 'end':
								return _context.stop();}
					}
				}, null, this);
			} };

		module.exports = DatePickerAndroid;
	},
	// Libraries/CameraRoll/ImagePickerIOS.js
	function (__inner_require__, exports, module) {
		var RCTImagePicker = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ImagePickerIOS;

		var ImagePickerIOS = {
			canRecordVideos: function canRecordVideos(callback) {
				return RCTImagePicker.canRecordVideos(callback);
			},
			canUseCamera: function canUseCamera(callback) {
				return RCTImagePicker.canUseCamera(callback);
			},
			openCameraDialog: function openCameraDialog(config, successCallback, cancelCallback) {
				config = babelHelpers.extends({
					videoMode: false }, config);

				return RCTImagePicker.openCameraDialog(config, successCallback, cancelCallback);
			},
			openSelectDialog: function openSelectDialog(config, successCallback, cancelCallback) {
				config = babelHelpers.extends({
					showImages: true,
					showVideos: false }, config);

				return RCTImagePicker.openSelectDialog(config, successCallback, cancelCallback);
			} };

		module.exports = ImagePickerIOS;
	},
	// Libraries/Components/Intent/IntentAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = {
			openURL: function openURL(url) {
				console.error('IntentAndroid is not supported on iOS');
			} };
	},
	// Libraries/LayoutAnimation/LayoutAnimation.js
	function (__inner_require__, exports, module) {
		var PropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var createStrictShapeTypeChecker = __inner_require__(63 /*Libraries/Utilities/createStrictShapeTypeChecker.js*/);
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');

		var TypesEnum = {
			spring: true,
			linear: true,
			easeInEaseOut: true,
			easeIn: true,
			easeOut: true,
			keyboard: true };

		var Types = keyMirror(TypesEnum);

		var PropertiesEnum = {
			opacity: true,
			scaleXY: true };

		var Properties = keyMirror(PropertiesEnum);

		var animChecker = createStrictShapeTypeChecker({
			duration: PropTypes.number,
			delay: PropTypes.number,
			springDamping: PropTypes.number,
			initialVelocity: PropTypes.number,
			type: PropTypes.oneOf(Object.keys(Types)),

			property: PropTypes.oneOf(Object.keys(Properties)) });

		var configChecker = createStrictShapeTypeChecker({
			duration: PropTypes.number.isRequired,
			create: animChecker,
			update: animChecker,
			delete: animChecker });

		function configureNext(config, onAnimationDidEnd) {
			configChecker({ config: config }, 'config', 'LayoutAnimation.configureNext');
			UIManager.configureNextLayoutAnimation(config, onAnimationDidEnd || function () {}, function () {});
		}

		function create(duration, type, creationProp) {
			return {
				duration: duration,
				create: {
					type: type,
					property: creationProp },

				update: {
					type: type } };
		}

		var Presets = {
			easeInEaseOut: create(300, Types.easeInEaseOut, Properties.opacity),

			linear: create(500, Types.linear, Properties.opacity),

			spring: {
				duration: 700,
				create: {
					type: Types.linear,
					property: Properties.opacity },

				update: {
					type: Types.spring,
					springDamping: 0.4 } } };

		var LayoutAnimation = {

			configureNext: configureNext,

			create: create,
			Types: Types,
			Properties: Properties,
			configChecker: configChecker,
			Presets: Presets,
			easeInEaseOut: configureNext.bind(null, Presets.easeInEaseOut),

			linear: configureNext.bind(null, Presets.linear),

			spring: configureNext.bind(null, Presets.spring) };

		module.exports = LayoutAnimation;
	},
	// Libraries/Linking/Linking.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');var _require = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    IntentAndroid = _require.IntentAndroid,
		    LinkingManagerIOS = _require.LinkingManager;
		var LinkingManager = Platform.OS === 'android' ? IntentAndroid : LinkingManagerIOS;
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var Map = require('react-native@0.21/Libraries/vendor/core/Map.js');

		var _notifHandlers = new Map();

		var DEVICE_NOTIF_EVENT = 'openURL';var Linking = function () {
			function Linking() {
				babelHelpers.classCallCheck(this, Linking);
			}babelHelpers.createClass(Linking, null, [{ key: 'addEventListener', value: function addEventListener(type, handler) {
					if (Platform.OS === 'android') {
						console.warn('Linking.addEventListener is not supported on Android');
					} else {
						invariant(type === 'url', 'Linking only supports `url` events');

						var listener = RCTDeviceEventEmitter.addListener(DEVICE_NOTIF_EVENT, handler);

						_notifHandlers.set(handler, listener);
					}
				} }, { key: 'removeEventListener', value: function removeEventListener(type, handler) {
					if (Platform.OS === 'android') {
						console.warn('Linking.removeEventListener is not supported on Android');
					} else {
						invariant(type === 'url', 'Linking only supports `url` events');

						var listener = _notifHandlers.get(handler);
						if (!listener) {
							return;
						}
						listener.remove();
						_notifHandlers.delete(handler);
					}
				} }, { key: 'openURL', value: function openURL(url) {
					this._validateURL(url);
					return LinkingManager.openURL(url);
				} }, { key: 'canOpenURL', value: function canOpenURL(url) {
					this._validateURL(url);
					return LinkingManager.canOpenURL(url);
				} }, { key: 'getInitialURL', value: function getInitialURL() {
					if (Platform.OS === 'android') {
						return IntentAndroid.getInitialURL();
					} else {
						return Promise.resolve(LinkingManagerIOS.initialURL);
					}
				} }, { key: '_validateURL', value: function _validateURL(url) {
					invariant(typeof url === 'string', 'Invalid URL: should be a string. Was: ' + url);

					invariant(url, 'Invalid URL: cannot be empty');
				} }]);return Linking;
		}();

		module.exports = Linking;
	},
	// Libraries/LinkingIOS/LinkingIOS.js
	function (__inner_require__, exports, module) {
		var Linking = __inner_require__(216 /*Libraries/Linking/Linking.js*/);
		var RCTLinkingManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').LinkingManager;
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var _initialURL = RCTLinkingManager && RCTLinkingManager.initialURL;var LinkingIOS = function () {
			function LinkingIOS() {
				babelHelpers.classCallCheck(this, LinkingIOS);
			}babelHelpers.createClass(LinkingIOS, null, [{ key: 'addEventListener', value: function addEventListener(type, handler) {
					console.warn('"LinkingIOS.addEventListener" is deprecated. Use "Linking.addEventListener" instead.');
					Linking.addEventListener(type, handler);
				} }, { key: 'removeEventListener', value: function removeEventListener(type, handler) {
					console.warn('"LinkingIOS.removeEventListener" is deprecated. Use "Linking.removeEventListener" instead.');
					Linking.removeEventListener(type, handler);
				} }, { key: 'openURL', value: function openURL(url) {
					console.warn('"LinkingIOS.openURL" is deprecated. Use the promise based "Linking.openURL" instead.');
					Linking.openURL(url);
				} }, { key: 'canOpenURL', value: function canOpenURL(url, callback) {
					console.warn('"LinkingIOS.canOpenURL" is deprecated. Use the promise based "Linking.canOpenURL" instead.');
					invariant(typeof callback === 'function', 'A valid callback function is required');

					Linking.canOpenURL(url).then(callback);
				} }, { key: 'popInitialURL', value: function popInitialURL() {
					console.warn('"LinkingIOS.popInitialURL" is deprecated. Use the promise based "Linking.getInitialURL" instead.');
					var initialURL = _initialURL;
					_initialURL = null;
					return initialURL;
				} }]);return LinkingIOS;
		}();

		module.exports = LinkingIOS;
	},
	// Libraries/NavigationExperimental/NavigationExperimental.js
	function (__inner_require__, exports, module) {
		var NavigationAnimatedView = __inner_require__(219 /*Libraries/NavigationExperimental/NavigationAnimatedView.js*/);
		var NavigationCard = __inner_require__(223 /*Libraries/CustomComponents/NavigationExperimental/NavigationCard.js*/);
		var NavigationContainer = __inner_require__(221 /*Libraries/NavigationExperimental/NavigationContainer.js*/);
		var NavigationHeader = __inner_require__(228 /*Libraries/CustomComponents/NavigationExperimental/NavigationHeader.js*/);
		var NavigationRootContainer = __inner_require__(222 /*Libraries/NavigationExperimental/NavigationRootContainer.js*/);
		var NavigationReducer = __inner_require__(224 /*Libraries/NavigationExperimental/Reducer/NavigationReducer.js*/);
		var NavigationState = __inner_require__(220 /*Libraries/NavigationExperimental/NavigationState.js*/);
		var NavigationView = __inner_require__(229 /*Libraries/NavigationExperimental/NavigationView.js*/);

		var NavigationExperimental = {

			State: NavigationState,
			Reducer: NavigationReducer,

			Container: NavigationContainer,
			RootContainer: NavigationRootContainer,

			View: NavigationView,
			AnimatedView: NavigationAnimatedView,

			Header: NavigationHeader,
			Card: NavigationCard };

		module.exports = NavigationExperimental;
	},
	// Libraries/NavigationExperimental/NavigationAnimatedView.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(165 /*Libraries/Animated/src/Animated.js*/);
		var Map = require('react-native@0.21/Libraries/vendor/core/Map.js');
		var NavigationStateUtils = __inner_require__(220 /*Libraries/NavigationExperimental/NavigationState.js*/);
		var NavigationContainer = __inner_require__(221 /*Libraries/NavigationExperimental/NavigationContainer.js*/);
		var React = require('react-native@0.21/Libraries/react-native/react-native.js');
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		function compareKey(one, two) {
			var delta = one.length - two.length;
			if (delta > 0) {
				return 1;
			}
			if (delta < 0) {
				return -1;
			}
			return one > two ? 1 : -1;
		}

		function compareScenes(one, two) {
			if (one.index > two.index) {
				return 1;
			}
			if (one.index < two.index) {
				return -1;
			}

			return compareKey(one.state.key, two.state.key);
		}var NavigationAnimatedView = function (_React$Component) {
			babelHelpers.inherits(NavigationAnimatedView, _React$Component);

			function NavigationAnimatedView(props) {
				babelHelpers.classCallCheck(this, NavigationAnimatedView);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationAnimatedView.__proto__ || Object.getPrototypeOf(NavigationAnimatedView)).call(this, props));
				_this._animatedHeight = new Animated.Value(0);
				_this._animatedWidth = new Animated.Value(0);
				_this.state = {
					position: new Animated.Value(_this.props.navigationState.index),
					scenes: new Map() };return _this;
			}babelHelpers.createClass(NavigationAnimatedView, [{ key: 'componentWillMount', value: function componentWillMount() {
					this.setState({
						scenes: this._reduceScenes(this.state.scenes, this.props.navigationState) });
				} }, { key: 'componentDidMount', value: function componentDidMount() {
					this.postionListener = this.state.position.addListener(this._onProgressChange.bind(this));
				} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
					if (nextProps.navigationState !== this.props.navigationState) {
						this.setState({
							scenes: this._reduceScenes(this.state.scenes, nextProps.navigationState, this.props.navigationState) });
					}
				} }, { key: 'componentDidUpdate', value: function componentDidUpdate(lastProps) {
					if (lastProps.navigationState.index !== this.props.navigationState.index) {
						Animated.spring(this.state.position, { toValue: this.props.navigationState.index }).start();
					}
				} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
					if (this.postionListener) {
						this.state.position.removeListener(this.postionListener);
						this.postionListener = null;
					}
				} }, { key: '_onProgressChange', value: function _onProgressChange(data) {
					var _this2 = this;
					if (Math.abs(data.value - this.props.navigationState.index) > Number.EPSILON) {
						return;
					}
					this.state.scenes.forEach(function (scene, index) {
						if (scene.isStale) {
							var scenes = _this2.state.scenes.slice();
							scenes.splice(index, 1);
							_this2.setState({ scenes: scenes });
						}
					});
				} }, { key: '_reduceScenes', value: function _reduceScenes(scenes, nextState, lastState) {
					var nextScenes = nextState.children.map(function (child, index) {
						return {
							index: index,
							state: child,
							isStale: false };
					});

					if (lastState) {
						lastState.children.forEach(function (child, index) {
							if (!NavigationStateUtils.get(nextState, child.key)) {
								nextScenes.push({
									index: index,
									state: child,
									isStale: true });
							}
						});
					}

					nextScenes = nextScenes.sort(compareScenes);

					return nextScenes;
				} }, { key: 'render', value: function render() {
					var _this3 = this;
					return React.createElement(View, {
						onLayout: function onLayout(e) {
							var _e$nativeEvent$layout = e.nativeEvent.layout,
							    height = _e$nativeEvent$layout.height,
							    width = _e$nativeEvent$layout.width;
							_this3._animatedHeight && _this3._animatedHeight.setValue(height);
							_this3._animatedWidth && _this3._animatedWidth.setValue(width);
							_this3._lastHeight = height;
							_this3._lastWidth = width;
						},
						style: this.props.style }, this.state.scenes.map(this._renderScene, this), this._renderOverlay(this._renderOverlay, this));
				} }, { key: '_getLayout', value: function _getLayout() {
					return {
						height: this._animatedHeight,
						width: this._animatedWidth,
						initWidth: this._lastWidth,
						initHeight: this._lastHeight };
				} }, { key: '_renderScene', value: function _renderScene(scene) {
					return this.props.renderScene(scene.state, scene.index, this.state.position, this._getLayout());
				} }, { key: '_renderOverlay', value: function _renderOverlay() {
					var renderOverlay = this.props.renderOverlay;
					if (renderOverlay) {
						return renderOverlay(this.state.position, this._getLayout());
					}
					return null;
				} }]);return NavigationAnimatedView;
		}(React.Component);

		NavigationAnimatedView = NavigationContainer.create(NavigationAnimatedView);

		module.exports = NavigationAnimatedView;
	},
	// Libraries/NavigationExperimental/NavigationState.js
	function (__inner_require__, exports, module) {
		Object.defineProperty(exports, "__esModule", { value: true });exports.getParent = getParent;exports.get = get;exports.indexOf = indexOf;exports.push = push;exports.pop = pop;exports.reset = reset;exports.set = set;exports.jumpToIndex = jumpToIndex;exports.jumpTo = jumpTo;exports.replaceAt = replaceAt;exports.replaceAtIndex = replaceAtIndex;var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');function getParent(state) {
			if (state instanceof Object && state.children instanceof Array && state.children[0] !== undefined && typeof state.index === 'number' && state.children[state.index] !== undefined) {
				return state;
			}return null;
		}function get(state, key) {
			var parentState = getParent(state);if (!parentState) {
				return null;
			}var childState = parentState.children.find(function (child) {
				return child.key === key;
			});return childState || null;
		}function indexOf(state, key) {
			var parentState = getParent(state);if (!parentState) {
				return null;
			}var index = parentState.children.map(function (child) {
				return child.key;
			}).indexOf(key);if (index === -1) {
				return null;
			}return index;
		}function push(state, newChildState) {
			var parentState = getParent(state);if (!parentState) {
				return state;
			}var lastChildren = parentState.children;return babelHelpers.extends({}, parentState, { children: [].concat(babelHelpers.toConsumableArray(lastChildren), [newChildState]), index: lastChildren.length });
		}function pop(state) {
			var parentState = getParent(state);if (!parentState) {
				return state;
			}var lastChildren = parentState.children;return babelHelpers.extends({}, parentState, { children: lastChildren.slice(0, lastChildren.length - 1), index: lastChildren.length - 2 });
		}function reset(state, nextChildren, nextIndex) {
			var parentState = getParent(state);if (!parentState) {
				return state;
			}var children = nextChildren || parentState.children;var index = nextIndex == null ? parentState.index : nextIndex;if (children === parentState.children && index === parentState.index) {
				return state;
			}return babelHelpers.extends({}, parentState, { children: children, index: index });
		}function set(state, key, nextChildren, nextIndex) {
			if (!state) {
				return { children: nextChildren, index: nextIndex, key: key };
			}var parentState = getParent(state);if (!parentState) {
				return { children: nextChildren, index: nextIndex, key: key };
			}if (nextChildren === parentState.children && nextIndex === parentState.index && key === parentState.key) {
				return parentState;
			}return babelHelpers.extends({}, parentState, { children: nextChildren, index: nextIndex, key: key });
		}function jumpToIndex(state, index) {
			var parentState = getParent(state);if (parentState && parentState.index === index) {
				return parentState;
			}return babelHelpers.extends({}, parentState, { index: index });
		}function jumpTo(state, key) {
			var parentState = getParent(state);if (!parentState) {
				return state;
			}var index = parentState.children.indexOf(parentState.children.find(function (child) {
				return child.key === key;
			}));invariant(index !== -1, 'Cannot find child with matching key in this NavigationState');return babelHelpers.extends({}, parentState, { index: index });
		}function replaceAt(state, key, newState) {
			var parentState = getParent(state);if (!parentState) {
				return state;
			}var children = [].concat(babelHelpers.toConsumableArray(parentState.children));var index = parentState.children.indexOf(parentState.children.find(function (child) {
				return child.key === key;
			}));invariant(index !== -1, 'Cannot find child with matching key in this NavigationState');children[index] = newState;return babelHelpers.extends({}, parentState, { children: children });
		}function replaceAtIndex(state, index, newState) {
			var parentState = getParent(state);
			if (!parentState) {
				return state;
			}
			var children = [].concat(babelHelpers.toConsumableArray(parentState.children));
			children[index] = newState;
			return babelHelpers.extends({}, parentState, {
				children: children });
		}
	},
	// Libraries/NavigationExperimental/NavigationContainer.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.21/Libraries/react-native/react-native.js');
		var NavigationRootContainer = __inner_require__(222 /*Libraries/NavigationExperimental/NavigationRootContainer.js*/);

		function createNavigationContainer(Component) {
			var NavigationComponent = function (_React$Component) {
				babelHelpers.inherits(NavigationComponent, _React$Component);function NavigationComponent() {
					babelHelpers.classCallCheck(this, NavigationComponent);return babelHelpers.possibleConstructorReturn(this, (NavigationComponent.__proto__ || Object.getPrototypeOf(NavigationComponent)).apply(this, arguments));
				}babelHelpers.createClass(NavigationComponent, [{ key: 'render', value: function render() {
						return React.createElement(Component, babelHelpers.extends({
							onNavigate: this.getNavigationHandler() }, this.props));
					} }, { key: 'getNavigationHandler', value: function getNavigationHandler() {
						return this.props.onNavigate || this.context.onNavigate;
					} }, { key: 'getChildContext', value: function getChildContext() {
						return {
							onNavigate: this.getNavigationHandler() };
					} }]);return NavigationComponent;
			}(React.Component);

			NavigationComponent.contextTypes = {
				onNavigate: React.PropTypes.func };

			NavigationComponent.childContextTypes = {
				onNavigate: React.PropTypes.func };

			return NavigationComponent;
		}

		var NavigationContainer = {
			create: createNavigationContainer,
			RootContainer: NavigationRootContainer };

		module.exports = NavigationContainer;
	},
	// Libraries/NavigationExperimental/NavigationRootContainer.js
	function (__inner_require__, exports, module) {
		var AsyncStorage = __inner_require__(208 /*Libraries/Storage/AsyncStorage.js*/);
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var BackAndroid = __inner_require__(209 /*Libraries/Utilities/BackAndroid.ios.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');

		function getBackAction() {
			return { type: 'BackAction' };
		}var NavigationRootContainer = function (_React$Component) {
			babelHelpers.inherits(NavigationRootContainer, _React$Component);

			function NavigationRootContainer(props) {
				babelHelpers.classCallCheck(this, NavigationRootContainer);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationRootContainer.__proto__ || Object.getPrototypeOf(NavigationRootContainer)).call(this, props));
				_this.handleNavigation = _this.handleNavigation.bind(_this);
				var navState = null;
				if (!_this.props.persistenceKey) {
					navState = _this.props.reducer(null, null);
				}
				_this.state = { navState: navState };return _this;
			}babelHelpers.createClass(NavigationRootContainer, [{ key: 'componentDidMount', value: function componentDidMount() {
					var _this2 = this;
					if (this.props.persistenceKey) {
						AsyncStorage.getItem(this.props.persistenceKey, function (err, storedString) {
							if (err || !storedString) {
								_this2.setState({
									navState: _this2.props.reducer(null, null) });

								return;
							}
							_this2.setState({
								navState: JSON.parse(storedString) });
						});
					}
				} }, { key: 'getChildContext', value: function getChildContext() {
					return {
						onNavigate: this.handleNavigation };
				} }, { key: 'handleNavigation', value: function handleNavigation(action) {
					var navState = this.props.reducer(this.state.navState, action);
					if (navState === this.state.navState) {
						return false;
					}
					this.setState({
						navState: navState });

					if (this.props.persistenceKey) {
						AsyncStorage.setItem(this.props.persistenceKey, JSON.stringify(navState));
					}
					return true;
				} }, { key: 'render', value: function render() {
					var navigation = this.props.renderNavigation(this.state.navState, this.handleNavigation);

					return navigation;
				} }]);return NavigationRootContainer;
		}(React.Component);

		NavigationRootContainer.childContextTypes = {
			onNavigate: React.PropTypes.func };

		NavigationRootContainer.getBackAction = getBackAction;

		module.exports = NavigationRootContainer;
	},
	// Libraries/CustomComponents/NavigationExperimental/NavigationCard.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(165 /*Libraries/Animated/src/Animated.js*/);
		var NavigationReducer = __inner_require__(224 /*Libraries/NavigationExperimental/Reducer/NavigationReducer.js*/);
		var NavigationContainer = __inner_require__(221 /*Libraries/NavigationExperimental/NavigationContainer.js*/);
		var PanResponder = __inner_require__(122 /*Libraries/vendor/react/browser/eventPlugins/PanResponder.js*/);
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var React = __inner_require__(9 /*Libraries/ReactNative/React.js*/);
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);

		var ENABLE_GESTURES = Platform.OS !== 'android';var NavigationCard = function (_React$Component) {
			babelHelpers.inherits(NavigationCard, _React$Component);function NavigationCard() {
				babelHelpers.classCallCheck(this, NavigationCard);return babelHelpers.possibleConstructorReturn(this, (NavigationCard.__proto__ || Object.getPrototypeOf(NavigationCard)).apply(this, arguments));
			}babelHelpers.createClass(NavigationCard, [{ key: 'componentWillMount', value: function componentWillMount() {
					if (ENABLE_GESTURES) {
						this._enableGestures();
					}
				} }, { key: '_enableGestures', value: function _enableGestures() {
					var _this2 = this;
					this._responder = PanResponder.create({
						onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(e, _ref) {
							var dx = _ref.dx,
							    dy = _ref.dy,
							    moveX = _ref.moveX,
							    moveY = _ref.moveY,
							    x0 = _ref.x0,
							    y0 = _ref.y0;
							if (_this2.props.navigationState.index === 0) {
								return false;
							}
							if (moveX > 30) {
								return false;
							}
							if (dx > 5 && Math.abs(dy) < 4) {
								return true;
							}
							return false;
						},
						onPanResponderGrant: function onPanResponderGrant(e, _ref2) {
							var dx = _ref2.dx,
							    dy = _ref2.dy,
							    moveX = _ref2.moveX,
							    moveY = _ref2.moveY,
							    x0 = _ref2.x0,
							    y0 = _ref2.y0;
						},
						onPanResponderMove: function onPanResponderMove(e, _ref3) {
							var dx = _ref3.dx;
							var a = -dx / _this2._lastWidth + _this2.props.navigationState.index;
							_this2.props.position.setValue(a);
						},
						onPanResponderRelease: function onPanResponderRelease(e, _ref4) {
							var vx = _ref4.vx,
							    dx = _ref4.dx;
							var xRatio = dx / _this2._lastWidth;
							var doesPop = xRatio + vx > 0.45;
							if (doesPop) {

								_this2.props.onNavigate(NavigationReducer.StackReducer.PopAction());
								return;
							}
							Animated.spring(_this2.props.position, {
								toValue: _this2.props.navigationState.index }).start();
						},
						onPanResponderTerminate: function onPanResponderTerminate(e, _ref5) {
							var vx = _ref5.vx,
							    dx = _ref5.dx;
							Animated.spring(_this2.props.position, {
								toValue: _this2.props.navigationState.index }).start();
						} });
				} }, { key: 'componentDidMount', value: function componentDidMount() {
					var _this3 = this;
					this._lastHeight = this.props.layout.initHeight;
					this._lastWidth = this.props.layout.initWidth;
					this._widthListener = this.props.layout.width.addListener(function (_ref6) {
						var value = _ref6.value;
						_this3._lastWidth = value;
					});
					this._heightListener = this.props.layout.height.addListener(function (_ref7) {
						var value = _ref7.value;
						_this3._lastHeight = value;
					});
				} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
					this.props.layout.width.removeListener(this._widthListener);
					this.props.layout.height.removeListener(this._heightListener);
				} }, { key: 'render', value: function render() {
					var cardPosition = Animated.add(this.props.position, new Animated.Value(-this.props.index));
					var gestureValue = Animated.multiply(cardPosition, this.props.layout.width);
					var touchResponderHandlers = this._responder ? this._responder.panHandlers : null;
					return React.createElement(Animated.View, babelHelpers.extends({}, touchResponderHandlers, {
						style: [styles.card, {
							right: gestureValue,
							left: gestureValue.interpolate({
								inputRange: [0, 1],
								outputRange: [0, -1] }),

							opacity: cardPosition.interpolate({
								inputRange: [-1, 0, 1],
								outputRange: [0, 1, 1] }) }] }), this.props.children);
				} }]);return NavigationCard;
		}(React.Component);

		NavigationCard = NavigationContainer.create(NavigationCard);

		var styles = StyleSheet.create({
			card: {
				backgroundColor: '#E9E9EF',
				shadowColor: 'black',
				shadowOpacity: 0.4,
				shadowOffset: { width: 0, height: 0 },
				shadowRadius: 10,
				top: 0,
				bottom: 0,
				position: 'absolute' } });

		module.exports = NavigationCard;
	},
	// Libraries/NavigationExperimental/Reducer/NavigationReducer.js
	function (__inner_require__, exports, module) {
		var NavigationFindReducer = __inner_require__(225 /*Libraries/NavigationExperimental/Reducer/NavigationFindReducer.js*/);
		var NavigationStackReducer = __inner_require__(226 /*Libraries/NavigationExperimental/Reducer/NavigationStackReducer.js*/);
		var NavigationTabsReducer = __inner_require__(227 /*Libraries/NavigationExperimental/Reducer/NavigationTabsReducer.js*/);

		var NavigationReducer = {
			FindReducer: NavigationFindReducer,
			StackReducer: NavigationStackReducer,
			TabsReducer: NavigationTabsReducer };

		module.exports = NavigationReducer;
	},
	// Libraries/NavigationExperimental/Reducer/NavigationFindReducer.js
	function (__inner_require__, exports, module) {
		function NavigationFindReducer(reducers) {
			return function (lastState, action) {
				for (var i = 0; i < reducers.length; i++) {
					var reducer = reducers[i];
					var newState = reducer(lastState, action);
					if (newState !== lastState) {
						return newState;
					}
				}
				return lastState;
			};
		}

		module.exports = NavigationFindReducer;
	},
	// Libraries/NavigationExperimental/Reducer/NavigationStackReducer.js
	function (__inner_require__, exports, module) {
		var NavigationStateUtils = __inner_require__(220 /*Libraries/NavigationExperimental/NavigationState.js*/);

		var ActionTypes = {
			PUSH: 'react-native/NavigationExperimental/stack-push',
			POP: 'react-native/NavigationExperimental/stack-pop',
			JUMP_TO: 'react-native/NavigationExperimental/stack-jumpTo',
			JUMP_TO_INDEX: 'react-native/NavigationExperimental/stack-jumpToIndex',
			RESET: 'react-native/NavigationExperimental/stack-reset' };

		var DEFAULT_KEY = 'NAV_STACK_DEFAULT_KEY';

		function NavigationStackPushAction(state) {
			return {
				type: ActionTypes.PUSH,
				state: state };
		}

		function NavigationStackPopAction() {
			return {
				type: ActionTypes.POP };
		}

		function NavigationStackJumpToAction(key) {
			return {
				type: ActionTypes.JUMP_TO,
				key: key };
		}

		function NavigationStackJumpToIndexAction(index) {
			return {
				type: ActionTypes.JUMP_TO_INDEX,
				index: index };
		}

		function NavigationStackResetAction(children, index) {
			return {
				type: ActionTypes.RESET,
				index: index,
				children: children };
		}

		function NavigationStackReducer(_ref) {
			var initialStates = _ref.initialStates,
			    initialIndex = _ref.initialIndex,
			    key = _ref.key,
			    matchAction = _ref.matchAction,
			    actionStateMap = _ref.actionStateMap;
			return function (lastState, action) {
				if (key == null) {
					key = DEFAULT_KEY;
				}
				if (initialIndex == null) {
					initialIndex = initialStates.length - 1;
				}
				if (!lastState) {
					lastState = {
						index: initialIndex,
						children: initialStates,
						key: key };
				}
				var lastParentState = NavigationStateUtils.getParent(lastState);
				if (!action || !lastParentState) {
					return lastState;
				}
				switch (action.type) {
					case ActionTypes.PUSH:
						return NavigationStateUtils.push(lastParentState, action.state);

					case ActionTypes.POP:
					case 'BackAction':
						if (lastParentState.index === 0 || lastParentState.children.length === 1) {
							return lastParentState;
						}
						return NavigationStateUtils.pop(lastParentState);
					case ActionTypes.JUMP_TO:
						return NavigationStateUtils.jumpTo(lastParentState, action.key);

					case ActionTypes.JUMP_TO_INDEX:
						return NavigationStateUtils.jumpToIndex(lastParentState, action.index);

					case ActionTypes.RESET:
						return babelHelpers.extends({}, lastParentState, {
							index: action.index,
							children: action.children });}

				if (matchAction(action)) {
					return NavigationStateUtils.push(lastParentState, actionStateMap(action));
				}
				return lastParentState;
			};
		}

		NavigationStackReducer.PushAction = NavigationStackPushAction;
		NavigationStackReducer.PopAction = NavigationStackPopAction;
		NavigationStackReducer.JumpToAction = NavigationStackJumpToAction;
		NavigationStackReducer.JumpToIndexAction = NavigationStackJumpToIndexAction;
		NavigationStackReducer.ResetAction = NavigationStackResetAction;

		module.exports = NavigationStackReducer;
	},
	// Libraries/NavigationExperimental/Reducer/NavigationTabsReducer.js
	function (__inner_require__, exports, module) {
		var NavigationFindReducer = __inner_require__(225 /*Libraries/NavigationExperimental/Reducer/NavigationFindReducer.js*/);
		var NavigationStateUtils = __inner_require__(220 /*Libraries/NavigationExperimental/NavigationState.js*/);

		var ActionTypes = {
			JUMP_TO: 'react-native/NavigationExperimental/tabs-jumpTo',
			ON_TAB_ACTION: 'react-native/NavigationExperimental/tabs-onTabAction' };

		var DEFAULT_KEY = 'TABS_STATE_DEFAULT_KEY';

		function NavigationTabsJumpToAction(index) {
			return {
				type: ActionTypes.JUMP_TO,
				index: index };
		}

		function NavigationTabsOnTabAction(index, action) {
			return {
				type: ActionTypes.ON_TAB_ACTION,
				index: index,
				action: action };
		}

		function NavigationTabsReducer(_ref) {
			var key = _ref.key,
			    initialIndex = _ref.initialIndex,
			    tabReducers = _ref.tabReducers;
			if (initialIndex == null) {
				initialIndex = 0;
			}
			if (key == null) {
				key = DEFAULT_KEY;
			}
			return function (lastNavState, action) {
				if (!lastNavState) {
					lastNavState = {
						children: tabReducers.map(function (reducer) {
							return reducer(null, null);
						}),
						index: initialIndex,
						key: key };
				}
				var lastParentNavState = NavigationStateUtils.getParent(lastNavState);
				if (!action || !lastParentNavState) {
					return lastNavState;
				}
				if (action.type === ActionTypes.JUMP_TO && action.index !== lastParentNavState.index) {
					return NavigationStateUtils.jumpToIndex(lastParentNavState, action.index);
				}
				if (action.type === ActionTypes.ON_TAB_ACTION) {
					var onTabAction = action;
					var lastTabRoute = lastParentNavState.children[onTabAction.index];
					var tabReducer = tabReducers[onTabAction.index];
					if (tabReducer) {
						var newTabRoute = tabReducer(lastTabRoute, action.action);
						if (newTabRoute && newTabRoute !== lastTabRoute) {
							var navState = NavigationStateUtils.replaceAtIndex(lastParentNavState, onTabAction.index, newTabRoute);

							navState = NavigationStateUtils.jumpToIndex(navState, onTabAction.index);

							return navState;
						}
					}
				}
				var subReducers = tabReducers.map(function (tabReducer, tabIndex) {
					return function reduceTab(lastNavState, tabAction) {
						if (!tabReducer || !lastNavState) {
							return lastNavState;
						}
						var lastParentNavState = NavigationStateUtils.getParent(lastNavState);
						var lastSubTabState = lastParentNavState && lastParentNavState.children[tabIndex];
						var nextSubTabState = tabReducer(lastSubTabState, tabAction);
						if (nextSubTabState && lastSubTabState !== nextSubTabState) {
							var tabs = lastParentNavState && lastParentNavState.children || [];
							tabs[tabIndex] = nextSubTabState;
							return babelHelpers.extends({}, lastParentNavState, {
								tabs: tabs,
								index: tabIndex });
						}
						return lastParentNavState;
					};
				});
				var selectedTabReducer = subReducers.splice(lastParentNavState.index, 1)[0];
				subReducers.unshift(selectedTabReducer);
				subReducers.push(function (lastParentNavState, action) {
					if (lastParentNavState && action && action.type === 'BackAction') {
						return NavigationStateUtils.jumpToIndex(lastParentNavState, 0);
					}
					return lastParentNavState;
				});
				var findReducer = NavigationFindReducer(subReducers);
				return findReducer(lastParentNavState, action);
			};
		}

		NavigationTabsReducer.JumpToAction = NavigationTabsJumpToAction;
		NavigationTabsReducer.OnTabAction = NavigationTabsOnTabAction;

		module.exports = NavigationTabsReducer;
	},
	// Libraries/CustomComponents/NavigationExperimental/NavigationHeader.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(165 /*Libraries/Animated/src/Animated.js*/);
		var Image = __inner_require__(93 /*Libraries/Image/Image.ios.js*/);
		var NavigationContainer = __inner_require__(221 /*Libraries/NavigationExperimental/NavigationContainer.js*/);
		var NavigationReducer = __inner_require__(224 /*Libraries/NavigationExperimental/Reducer/NavigationReducer.js*/);
		var React = require('react-native@0.21/Libraries/react-native/react-native.js');
		var StyleSheet = __inner_require__(66 /*Libraries/StyleSheet/StyleSheet.js*/);
		var Text = __inner_require__(144 /*Libraries/Text/Text.js*/);
		var TouchableOpacity = __inner_require__(164 /*Libraries/Components/Touchable/TouchableOpacity.js*/);
		var View = __inner_require__(46 /*Libraries/Components/View/View.js*/);var NavigationHeader = function (_React$Component) {
			babelHelpers.inherits(NavigationHeader, _React$Component);function NavigationHeader() {
				babelHelpers.classCallCheck(this, NavigationHeader);return babelHelpers.possibleConstructorReturn(this, (NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).apply(this, arguments));
			}babelHelpers.createClass(NavigationHeader, [{ key: 'componentWillMount', value: function componentWillMount() {
					this._handleBackPress = this._handleBackPress.bind(this);
				} }, { key: 'render', value: function render() {
					var state = this.props.navigationState;
					return React.createElement(Animated.View, {
						style: [styles.header] }, state.children.map(this._renderTitle, this), this._renderBackButton());
				} }, { key: '_renderBackButton', value: function _renderBackButton() {
					if (this.props.navigationState.index === 0) {
						return null;
					}
					return React.createElement(TouchableOpacity, { style: styles.backButton, onPress: this._handleBackPress }, React.createElement(Image, { source: __inner_require__(-1 /*Libraries/CustomComponents/NavigationExperimental/back_chevron.png*/), style: styles.backButtonImage }));
				} }, { key: '_renderTitle', value: function _renderTitle(childState, index) {
					return React.createElement(Animated.Text, {
						key: childState.key,
						style: [styles.title, {
							opacity: this.props.position.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: [0, 1, 0] }),

							left: this.props.position.interpolate({
								inputRange: [index - 1, index + 1],
								outputRange: [200, -200] }),

							right: this.props.position.interpolate({
								inputRange: [index - 1, index + 1],
								outputRange: [-200, 200] }) }] }, this.props.getTitle(childState));
				} }, { key: '_handleBackPress', value: function _handleBackPress() {
					this.props.onNavigate(NavigationReducer.StackReducer.PopAction());
				} }]);return NavigationHeader;
		}(React.Component);

		NavigationHeader = NavigationContainer.create(NavigationHeader);

		var styles = StyleSheet.create({
			title: {
				textAlign: 'center',
				marginTop: 10,
				fontSize: 18,
				fontWeight: '500',
				color: '#0A0A0A',
				position: 'absolute',
				top: 20,
				left: 0,
				right: 0 },

			header: {
				backgroundColor: '#EFEFF2',
				paddingTop: 20,
				top: 0,
				height: 64,
				right: 0,
				left: 0,
				borderBottomWidth: 0.5,
				borderBottomColor: '#828287',
				position: 'absolute' },

			backButton: {
				width: 29,
				height: 37,
				position: 'absolute',
				bottom: 4,
				left: 2,
				padding: 8 },

			backButtonImage: {
				width: 13,
				height: 21 } });

		module.exports = NavigationHeader;
	},
	// Libraries/NavigationExperimental/NavigationView.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.21/Libraries/react-native/react-native.js');
		var NavigationContainer = __inner_require__(221 /*Libraries/NavigationExperimental/NavigationContainer.js*/);var StyleSheet = React.StyleSheet,
		    View = React.View;

		var NavigationView = React.createClass({ displayName: 'NavigationView',
			propTypes: {

				navigationState: React.PropTypes.object.isRequired,
				renderScene: React.PropTypes.func.isRequired },

			render: function render() {
				return React.createElement(View, {
					style: this.props.style }, this.props.navigationState.children.map(this._renderScene));
			},
			_renderScene: function _renderScene(route, index) {
				var isSelected = index === this.props.navigationState.index;
				return React.createElement(View, {
					key: route.key,
					pointerEvents: isSelected ? 'auto' : 'none',
					style: [styles.navView, { opacity: isSelected ? 1 : 0 }] }, this.props.renderScene(route, index));
			} });

		NavigationView = NavigationContainer.create(NavigationView);

		var styles = StyleSheet.create({
			navView: {
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0 } });

		module.exports = NavigationView;
	},
	// Libraries/Network/NetInfo.js
	function (__inner_require__, exports, module) {
		var Map = require('react-native@0.21/Libraries/vendor/core/Map.js');
		var NativeModules = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var RCTNetInfo = NativeModules.NetInfo;

		var DEVICE_CONNECTIVITY_EVENT = 'networkStatusDidChange';

		var _subscriptions = new Map();

		var _isConnected = void 0;
		if (Platform.OS === 'ios') {
			_isConnected = function _isConnected(reachability) {
				return reachability !== 'none' && reachability !== 'unknown';
			};
		} else if (Platform.OS === 'android') {
			_isConnected = function _isConnected(connectionType) {
				return connectionType !== 'NONE' && connectionType !== 'UNKNOWN';
			};
		}

		var _isConnectedSubscriptions = new Map();

		var NetInfo = {
			addEventListener: function addEventListener(eventName, handler) {
				var listener = RCTDeviceEventEmitter.addListener(DEVICE_CONNECTIVITY_EVENT, function (appStateData) {
					handler(appStateData.network_info);
				});

				_subscriptions.set(handler, listener);
				return {
					remove: function remove() {
						return NetInfo.removeEventListener(eventName, handler);
					} };
			},

			removeEventListener: function removeEventListener(eventName, handler) {
				var listener = _subscriptions.get(handler);
				if (!listener) {
					return;
				}
				listener.remove();
				_subscriptions.delete(handler);
			},

			fetch: function fetch() {
				return new Promise(function (resolve, reject) {
					RCTNetInfo.getCurrentConnectivity(function (resp) {
						resolve(resp.network_info);
					}, reject);
				});
			},

			isConnected: {
				addEventListener: function addEventListener(eventName, handler) {
					var listener = function listener(connection) {
						handler(_isConnected(connection));
					};
					_isConnectedSubscriptions.set(handler, listener);
					NetInfo.addEventListener(eventName, listener);

					return {
						remove: function remove() {
							return NetInfo.isConnected.removeEventListener(eventName, handler);
						} };
				},

				removeEventListener: function removeEventListener(eventName, handler) {
					var listener = _isConnectedSubscriptions.get(handler);
					NetInfo.removeEventListener(eventName, listener);

					_isConnectedSubscriptions.delete(handler);
				},

				fetch: function fetch() {
					return NetInfo.fetch().then(function (connection) {
						return _isConnected(connection);
					});
				} },

			isConnectionExpensive: function isConnectionExpensive(callback) {
				if (Platform.OS === 'android') {
					RCTNetInfo.isConnectionMetered(function (_isMetered) {
						callback(_isMetered);
					});
				} else {

					callback(null, "Unsupported");
				}
			} };

		module.exports = NetInfo;
	},
	// Libraries/PushNotificationIOS/PushNotificationIOS.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var RCTPushNotificationManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').PushNotificationManager;
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var _notifHandlers = new Map();
		var _initialNotification = RCTPushNotificationManager && RCTPushNotificationManager.initialNotification;

		var DEVICE_NOTIF_EVENT = 'remoteNotificationReceived';
		var NOTIF_REGISTER_EVENT = 'remoteNotificationsRegistered';
		var DEVICE_LOCAL_NOTIF_EVENT = 'localNotificationReceived';var PushNotificationIOS = function () {
			babelHelpers.createClass(PushNotificationIOS, null, [{ key: 'presentLocalNotification', value: function presentLocalNotification(details) {
					RCTPushNotificationManager.presentLocalNotification(details);
				} }, { key: 'scheduleLocalNotification', value: function scheduleLocalNotification(details) {
					RCTPushNotificationManager.scheduleLocalNotification(details);
				} }, { key: 'cancelAllLocalNotifications', value: function cancelAllLocalNotifications() {
					RCTPushNotificationManager.cancelAllLocalNotifications();
				} }, { key: 'setApplicationIconBadgeNumber', value: function setApplicationIconBadgeNumber(number) {
					RCTPushNotificationManager.setApplicationIconBadgeNumber(number);
				} }, { key: 'getApplicationIconBadgeNumber', value: function getApplicationIconBadgeNumber(callback) {
					RCTPushNotificationManager.getApplicationIconBadgeNumber(callback);
				} }, { key: 'cancelLocalNotifications', value: function cancelLocalNotifications(userInfo) {
					RCTPushNotificationManager.cancelLocalNotifications(userInfo);
				} }, { key: 'addEventListener', value: function addEventListener(type, handler) {
					invariant(type === 'notification' || type === 'register' || type === 'localNotification', 'PushNotificationIOS only supports `notification`, `register` and `localNotification` events');

					var listener;
					if (type === 'notification') {
						listener = RCTDeviceEventEmitter.addListener(DEVICE_NOTIF_EVENT, function (notifData) {
							handler(new PushNotificationIOS(notifData));
						});
					} else if (type === 'localNotification') {
						listener = RCTDeviceEventEmitter.addListener(DEVICE_LOCAL_NOTIF_EVENT, function (notifData) {
							handler(new PushNotificationIOS(notifData));
						});
					} else if (type === 'register') {
						listener = RCTDeviceEventEmitter.addListener(NOTIF_REGISTER_EVENT, function (registrationInfo) {
							handler(registrationInfo.deviceToken);
						});
					}
					_notifHandlers.set(handler, listener);
				} }, { key: 'requestPermissions', value: function requestPermissions(permissions) {
					var requestedPermissions = {};
					if (permissions) {
						requestedPermissions = {
							alert: !!permissions.alert,
							badge: !!permissions.badge,
							sound: !!permissions.sound };
					} else {
						requestedPermissions = {
							alert: true,
							badge: true,
							sound: true };
					}
					RCTPushNotificationManager.requestPermissions(requestedPermissions);
				} }, { key: 'abandonPermissions', value: function abandonPermissions() {
					RCTPushNotificationManager.abandonPermissions();
				} }, { key: 'checkPermissions', value: function checkPermissions(callback) {
					invariant(typeof callback === 'function', 'Must provide a valid callback');

					RCTPushNotificationManager.checkPermissions(callback);
				} }, { key: 'removeEventListener', value: function removeEventListener(type, handler) {
					invariant(type === 'notification' || type === 'register' || type === 'localNotification', 'PushNotificationIOS only supports `notification`, `register` and `localNotification` events');

					var listener = _notifHandlers.get(handler);
					if (!listener) {
						return;
					}
					listener.remove();
					_notifHandlers.delete(handler);
				} }, { key: 'popInitialNotification', value: function popInitialNotification() {
					var initialNotification = _initialNotification && new PushNotificationIOS(_initialNotification);
					_initialNotification = null;
					return initialNotification;
				} }]);

			function PushNotificationIOS(nativeNotif) {
				var _this = this;babelHelpers.classCallCheck(this, PushNotificationIOS);
				this._data = {};

				Object.keys(nativeNotif).forEach(function (notifKey) {
					var notifVal = nativeNotif[notifKey];
					if (notifKey === 'aps') {
						_this._alert = notifVal.alert;
						_this._sound = notifVal.sound;
						_this._badgeCount = notifVal.badge;
					} else {
						_this._data[notifKey] = notifVal;
					}
				});
			}babelHelpers.createClass(PushNotificationIOS, [{ key: 'getMessage', value: function getMessage() {

					return this._alert;
				} }, { key: 'getSound', value: function getSound() {
					return this._sound;
				} }, { key: 'getAlert', value: function getAlert() {
					return this._alert;
				} }, { key: 'getBadgeCount', value: function getBadgeCount() {
					return this._badgeCount;
				} }, { key: 'getData', value: function getData() {
					return this._data;
				} }]);return PushNotificationIOS;
		}();

		module.exports = PushNotificationIOS;
	},
	// Libraries/Settings/Settings.ios.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var RCTSettingsManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').SettingsManager;

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var subscriptions = [];

		var Settings = {
			_settings: RCTSettingsManager && RCTSettingsManager.settings,

			get: function get(key) {
				return this._settings[key];
			},

			set: function set(settings) {
				this._settings = babelHelpers.extends(this._settings, settings);
				RCTSettingsManager.setValues(settings);
			},

			watchKeys: function watchKeys(keys, callback) {
				if (typeof keys === 'string') {
					keys = [keys];
				}

				invariant(Array.isArray(keys), 'keys should be a string or array of strings');

				var sid = subscriptions.length;
				subscriptions.push({ keys: keys, callback: callback });
				return sid;
			},

			clearWatch: function clearWatch(watchId) {
				if (watchId < subscriptions.length) {
					subscriptions[watchId] = { keys: [], callback: null };
				}
			},

			_sendObservations: function _sendObservations(body) {
				var _this = this;
				Object.keys(body).forEach(function (key) {
					var newValue = body[key];
					var didChange = _this._settings[key] !== newValue;
					_this._settings[key] = newValue;

					if (didChange) {
						subscriptions.forEach(function (sub) {
							if (sub.keys.indexOf(key) !== -1 && sub.callback) {
								sub.callback();
							}
						});
					}
				});
			} };

		RCTDeviceEventEmitter.addListener('settingsUpdated', Settings._sendObservations.bind(Settings));

		module.exports = Settings;
	},
	// Libraries/Components/StatusBar/StatusBarIOS.ios.js
	function (__inner_require__, exports, module) {
		var RCTStatusBarManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').StatusBarManager;

		var StatusBarIOS = {

			setStyle: function setStyle(style, animated) {
				animated = animated || false;
				RCTStatusBarManager.setStyle(style, animated);
			},

			setHidden: function setHidden(hidden, animation) {
				animation = animation || 'none';
				RCTStatusBarManager.setHidden(hidden, animation);
			},

			setNetworkActivityIndicatorVisible: function setNetworkActivityIndicatorVisible(visible) {
				RCTStatusBarManager.setNetworkActivityIndicatorVisible(visible);
			} };

		module.exports = StatusBarIOS;
	},
	// Libraries/Components/TimePickerAndroid/TimePickerAndroid.ios.js
	function (__inner_require__, exports, module) {
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var TimePickerAndroid = {
			open: function open(options) {
				return regeneratorRuntime.async(function open$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {case 0:
								return _context.abrupt('return', Promise.reject({
									message: 'TimePickerAndroid is not supported on this platform.' }));case 1:case 'end':
								return _context.stop();}
					}
				}, null, this);
			} };

		module.exports = TimePickerAndroid;
	},
	// Libraries/Vibration/VibrationIOS.ios.js
	function (__inner_require__, exports, module) {
		var RCTVibration = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').Vibration;

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var VibrationIOS = {
			vibrate: function vibrate() {
				invariant(arguments[0] === undefined, 'Vibration patterns not supported.');

				RCTVibration.vibrate();
			} };

		module.exports = VibrationIOS;
	},
	// Libraries/NativeApp/RCTNativeAppEventEmitter.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');

		var RCTNativeAppEventEmitter = new EventEmitter();

		BatchedBridge.registerCallableModule('RCTNativeAppEventEmitter', RCTNativeAppEventEmitter);

		module.exports = RCTNativeAppEventEmitter;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/LinkedStateMixin.js
	function (__inner_require__, exports, module) {
		var ReactLink = __inner_require__(238 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactLink.js*/);
		var ReactStateSetters = __inner_require__(244 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactStateSetters.js*/);

		var LinkedStateMixin = {

			linkState: function linkState(key) {
				return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
			} };

		module.exports = LinkedStateMixin;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactLink.js
	function (__inner_require__, exports, module) {
		var React = __inner_require__(239 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/React.native.js*/);

		function ReactLink(value, requestChange) {
			this.value = value;
			this.requestChange = requestChange;
		}

		function createLinkTypeChecker(linkType) {
			var shapes = {
				value: typeof linkType === 'undefined' ? React.PropTypes.any.isRequired : linkType.isRequired,
				requestChange: React.PropTypes.func.isRequired };

			return React.PropTypes.shape(shapes);
		}

		ReactLink.PropTypes = {
			link: createLinkTypeChecker };

		module.exports = ReactLink;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/React.native.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(240 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactIsomorphic.js*/);
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactIsomorphic.js
	function (__inner_require__, exports, module) {
		var ReactChildren = __inner_require__(83 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildren.js*/);
		var ReactComponent = __inner_require__(85 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponent.js*/);
		var ReactClass = __inner_require__(84 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactClass.js*/);
		var ReactDOMFactories = __inner_require__(241 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDOMFactories.js*/);
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactElementValidator = __inner_require__(87 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElementValidator.js*/);
		var ReactPropTypes = __inner_require__(7 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTypes.js*/);
		var ReactVersion = __inner_require__(243 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactVersion.js*/);

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var onlyChild = __inner_require__(88 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/onlyChild.js*/);

		var createElement = ReactElement.createElement;
		var createFactory = ReactElement.createFactory;
		var cloneElement = ReactElement.cloneElement;

		if (process.env.NODE_ENV !== 'production') {
			createElement = ReactElementValidator.createElement;
			createFactory = ReactElementValidator.createFactory;
			cloneElement = ReactElementValidator.cloneElement;
		}

		var React = {

			Children: {
				map: ReactChildren.map,
				forEach: ReactChildren.forEach,
				count: ReactChildren.count,
				toArray: ReactChildren.toArray,
				only: onlyChild },

			Component: ReactComponent,

			createElement: createElement,
			cloneElement: cloneElement,
			isValidElement: ReactElement.isValidElement,

			PropTypes: ReactPropTypes,
			createClass: ReactClass.createClass,
			createFactory: createFactory,
			createMixin: function createMixin(mixin) {

				return mixin;
			},

			DOM: ReactDOMFactories,

			version: ReactVersion,

			__spread: assign };

		module.exports = React;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDOMFactories.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactElementValidator = __inner_require__(87 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElementValidator.js*/);

		var mapObject = __inner_require__(242 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/mapObject.js*/);

		function createDOMFactory(tag) {
			if (process.env.NODE_ENV !== 'production') {
				return ReactElementValidator.createFactory(tag);
			}
			return ReactElement.createFactory(tag);
		}

		var ReactDOMFactories = mapObject({
			a: 'a',
			abbr: 'abbr',
			address: 'address',
			area: 'area',
			article: 'article',
			aside: 'aside',
			audio: 'audio',
			b: 'b',
			base: 'base',
			bdi: 'bdi',
			bdo: 'bdo',
			big: 'big',
			blockquote: 'blockquote',
			body: 'body',
			br: 'br',
			button: 'button',
			canvas: 'canvas',
			caption: 'caption',
			cite: 'cite',
			code: 'code',
			col: 'col',
			colgroup: 'colgroup',
			data: 'data',
			datalist: 'datalist',
			dd: 'dd',
			del: 'del',
			details: 'details',
			dfn: 'dfn',
			dialog: 'dialog',
			div: 'div',
			dl: 'dl',
			dt: 'dt',
			em: 'em',
			embed: 'embed',
			fieldset: 'fieldset',
			figcaption: 'figcaption',
			figure: 'figure',
			footer: 'footer',
			form: 'form',
			h1: 'h1',
			h2: 'h2',
			h3: 'h3',
			h4: 'h4',
			h5: 'h5',
			h6: 'h6',
			head: 'head',
			header: 'header',
			hgroup: 'hgroup',
			hr: 'hr',
			html: 'html',
			i: 'i',
			iframe: 'iframe',
			img: 'img',
			input: 'input',
			ins: 'ins',
			kbd: 'kbd',
			keygen: 'keygen',
			label: 'label',
			legend: 'legend',
			li: 'li',
			link: 'link',
			main: 'main',
			map: 'map',
			mark: 'mark',
			menu: 'menu',
			menuitem: 'menuitem',
			meta: 'meta',
			meter: 'meter',
			nav: 'nav',
			noscript: 'noscript',
			object: 'object',
			ol: 'ol',
			optgroup: 'optgroup',
			option: 'option',
			output: 'output',
			p: 'p',
			param: 'param',
			picture: 'picture',
			pre: 'pre',
			progress: 'progress',
			q: 'q',
			rp: 'rp',
			rt: 'rt',
			ruby: 'ruby',
			s: 's',
			samp: 'samp',
			script: 'script',
			section: 'section',
			select: 'select',
			small: 'small',
			source: 'source',
			span: 'span',
			strong: 'strong',
			style: 'style',
			sub: 'sub',
			summary: 'summary',
			sup: 'sup',
			table: 'table',
			tbody: 'tbody',
			td: 'td',
			textarea: 'textarea',
			tfoot: 'tfoot',
			th: 'th',
			thead: 'thead',
			time: 'time',
			title: 'title',
			tr: 'tr',
			track: 'track',
			u: 'u',
			ul: 'ul',
			'var': 'var',
			video: 'video',
			wbr: 'wbr',

			circle: 'circle',
			clipPath: 'clipPath',
			defs: 'defs',
			ellipse: 'ellipse',
			g: 'g',
			image: 'image',
			line: 'line',
			linearGradient: 'linearGradient',
			mask: 'mask',
			path: 'path',
			pattern: 'pattern',
			polygon: 'polygon',
			polyline: 'polyline',
			radialGradient: 'radialGradient',
			rect: 'rect',
			stop: 'stop',
			svg: 'svg',
			text: 'text',
			tspan: 'tspan' }, createDOMFactory);

		module.exports = ReactDOMFactories;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/mapObject.js
	function (__inner_require__, exports, module) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;

		function mapObject(object, callback, context) {
			if (!object) {
				return null;
			}
			var result = {};
			for (var name in object) {
				if (hasOwnProperty.call(object, name)) {
					result[name] = callback.call(context, object[name], name, object);
				}
			}
			return result;
		}

		module.exports = mapObject;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactVersion.js
	function (__inner_require__, exports, module) {
		module.exports = '0.14.8';
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactStateSetters.js
	function (__inner_require__, exports, module) {
		var ReactStateSetters = {

			createStateSetter: function createStateSetter(component, funcReturningState) {
				return function (a, b, c, d, e, f) {
					var partialState = funcReturningState.call(component, a, b, c, d, e, f);
					if (partialState) {
						component.setState(partialState);
					}
				};
			},

			createStateKeySetter: function createStateKeySetter(component, key) {

				var cache = component.__keySetters || (component.__keySetters = {});
				return cache[key] || (cache[key] = _createStateKeySetter(component, key));
			} };

		function _createStateKeySetter(component, key) {

			var partialState = {};
			return function stateKeySetter(value) {
				partialState[key] = value;
				component.setState(partialState);
			};
		}

		ReactStateSetters.Mixin = {

			createStateSetter: function createStateSetter(funcReturningState) {
				return ReactStateSetters.createStateSetter(this, funcReturningState);
			},

			createStateKeySetter: function createStateKeySetter(key) {
				return ReactStateSetters.createStateKeySetter(this, key);
			} };

		module.exports = ReactStateSetters;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentWithPureRenderMixin.js
	function (__inner_require__, exports, module) {
		var shallowCompare = __inner_require__(246 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/shallowCompare.js*/);

		var ReactComponentWithPureRenderMixin = {
			shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
				return shallowCompare(this, nextProps, nextState);
			} };

		module.exports = ReactComponentWithPureRenderMixin;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/shallowCompare.js
	function (__inner_require__, exports, module) {
		var shallowEqual = __inner_require__(247 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/shallowEqual.js*/);

		function shallowCompare(instance, nextProps, nextState) {
			return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
		}

		module.exports = shallowCompare;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/shallowEqual.js
	function (__inner_require__, exports, module) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;

		function shallowEqual(objA, objB) {
			if (objA === objB) {
				return true;
			}

			if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
				return false;
			}

			var keysA = Object.keys(objA);
			var keysB = Object.keys(objB);

			if (keysA.length !== keysB.length) {
				return false;
			}

			var bHasOwnProperty = hasOwnProperty.bind(objB);
			for (var i = 0; i < keysA.length; i++) {
				if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
					return false;
				}
			}

			return true;
		}

		module.exports = shallowEqual;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/cloneWithProps.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactPropTransferer = __inner_require__(249 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTransferer.js*/);

		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var CHILDREN_PROP = keyOf({ children: null });

		var didDeprecatedWarn = false;

		function cloneWithProps(child, props) {
			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(didDeprecatedWarn, 'cloneWithProps(...) is deprecated. ' + 'Please use React.cloneElement instead.') : undefined;
				didDeprecatedWarn = true;
				process.env.NODE_ENV !== 'production' ? warning(!child.ref, 'You are calling cloneWithProps() on a child with a ref. This is ' + 'dangerous because you\'re creating a new child which will not be ' + 'added as a ref to its parent.') : undefined;
			}

			var newProps = ReactPropTransferer.mergeProps(props, child.props);

			if (!newProps.hasOwnProperty(CHILDREN_PROP) && child.props.hasOwnProperty(CHILDREN_PROP)) {
				newProps.children = child.props.children;
			}

			return ReactElement.createElement(child.type, newProps);
		}

		module.exports = cloneWithProps;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPropTransferer.js
	function (__inner_require__, exports, module) {
		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var joinClasses = __inner_require__(250 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/joinClasses.js*/);

		function createTransferStrategy(mergeStrategy) {
			return function (props, key, value) {
				if (!props.hasOwnProperty(key)) {
					props[key] = value;
				} else {
					props[key] = mergeStrategy(props[key], value);
				}
			};
		}

		var transferStrategyMerge = createTransferStrategy(function (a, b) {

			return assign({}, b, a);
		});

		var TransferStrategies = {

			children: emptyFunction,

			className: createTransferStrategy(joinClasses),

			style: transferStrategyMerge };

		function transferInto(props, newProps) {
			for (var thisKey in newProps) {
				if (!newProps.hasOwnProperty(thisKey)) {
					continue;
				}

				var transferStrategy = TransferStrategies[thisKey];

				if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
					transferStrategy(props, thisKey, newProps[thisKey]);
				} else if (!props.hasOwnProperty(thisKey)) {
					props[thisKey] = newProps[thisKey];
				}
			}
			return props;
		}

		var ReactPropTransferer = {

			mergeProps: function mergeProps(oldProps, newProps) {
				return transferInto(assign({}, oldProps), newProps);
			} };

		module.exports = ReactPropTransferer;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/joinClasses.js
	function (__inner_require__, exports, module) {
		function joinClasses(className) {
			if (!className) {
				className = '';
			}
			var nextClass;
			var argLength = arguments.length;
			if (argLength > 1) {
				for (var ii = 1; ii < argLength; ii++) {
					nextClass = arguments[ii];
					if (nextClass) {
						className = (className ? className + ' ' : '') + nextClass;
					}
				}
			}
			return className;
		}

		module.exports = joinClasses;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactFragment.js
	function (__inner_require__, exports, module) {
		var ReactChildren = __inner_require__(83 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactChildren.js*/);
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');

		var emptyFunction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyFunction.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var numericPropertyRegex = /^\d+$/;

		var warnedAboutNumeric = false;

		var ReactFragment = {

			create: function create(object) {
				if (typeof object !== 'object' || !object || Array.isArray(object)) {
					process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
					return object;
				}
				if (ReactElement.isValidElement(object)) {
					process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
					return object;
				}

				!(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;

				var result = [];

				for (var key in object) {
					if (process.env.NODE_ENV !== 'production') {
						if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
							process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
							warnedAboutNumeric = true;
						}
					}
					ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
				}

				return result;
			} };

		module.exports = ReactFragment;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/update.js
	function (__inner_require__, exports, module) {
		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var keyOf = __inner_require__(40 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyOf.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var hasOwnProperty = {}.hasOwnProperty;

		function shallowCopy(x) {
			if (Array.isArray(x)) {
				return x.concat();
			} else if (x && typeof x === 'object') {
				return assign(new x.constructor(), x);
			} else {
				return x;
			}
		}

		var COMMAND_PUSH = keyOf({ $push: null });
		var COMMAND_UNSHIFT = keyOf({ $unshift: null });
		var COMMAND_SPLICE = keyOf({ $splice: null });
		var COMMAND_SET = keyOf({ $set: null });
		var COMMAND_MERGE = keyOf({ $merge: null });
		var COMMAND_APPLY = keyOf({ $apply: null });

		var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

		var ALL_COMMANDS_SET = {};

		ALL_COMMANDS_LIST.forEach(function (command) {
			ALL_COMMANDS_SET[command] = true;
		});

		function invariantArrayCase(value, spec, command) {
			!Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
			var specValue = spec[command];
			!Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
		}

		function update(value, spec) {
			!(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;

			if (hasOwnProperty.call(spec, COMMAND_SET)) {
				!(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;

				return spec[COMMAND_SET];
			}

			var nextValue = shallowCopy(value);

			if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
				var mergeObj = spec[COMMAND_MERGE];
				!(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
				!(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
				assign(nextValue, spec[COMMAND_MERGE]);
			}

			if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
				invariantArrayCase(value, spec, COMMAND_PUSH);
				spec[COMMAND_PUSH].forEach(function (item) {
					nextValue.push(item);
				});
			}

			if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
				invariantArrayCase(value, spec, COMMAND_UNSHIFT);
				spec[COMMAND_UNSHIFT].forEach(function (item) {
					nextValue.unshift(item);
				});
			}

			if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
				!Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
				!Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
				spec[COMMAND_SPLICE].forEach(function (args) {
					!Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
					nextValue.splice.apply(nextValue, args);
				});
			}

			if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
				!(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
				nextValue = spec[COMMAND_APPLY](nextValue);
			}

			for (var k in spec) {
				if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
					nextValue[k] = update(value[k], spec[k]);
				}
			}

			return nextValue;
		}

		module.exports = update;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactTestUtils.js
	function (__inner_require__, exports, module) {
		var EventConstants = __inner_require__(15 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventConstants.js*/);
		var EventPluginHub = __inner_require__(12 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPluginHub.js*/);
		var EventPropagators = __inner_require__(21 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/EventPropagators.js*/);
		var React = __inner_require__(239 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/React.native.js*/);
		var ReactDOM = __inner_require__(254 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDOM.native.js*/);
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactBrowserEventEmitter = __inner_require__(196 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactBrowserEventEmitter.js*/);
		var ReactCompositeComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCompositeComponent.js');
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');
		var ReactInstanceMap = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceMap.js');
		var ReactMount = __inner_require__(195 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMount.js*/);
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');
		var SyntheticEvent = __inner_require__(22 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/SyntheticEvent.js*/);

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var emptyObject = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyObject.js');
		var findDOMNode = __inner_require__(255 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/findDOMNode.js*/);
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var topLevelTypes = EventConstants.topLevelTypes;

		function Event(suffix) {}

		function findAllInRenderedTreeInternal(inst, test) {
			if (!inst || !inst.getPublicInstance) {
				return [];
			}
			var publicInst = inst.getPublicInstance();
			var ret = test(publicInst) ? [publicInst] : [];
			var currentElement = inst._currentElement;
			if (ReactTestUtils.isDOMComponent(publicInst)) {
				var renderedChildren = inst._renderedChildren;
				var key;
				for (key in renderedChildren) {
					if (!renderedChildren.hasOwnProperty(key)) {
						continue;
					}
					ret = ret.concat(findAllInRenderedTreeInternal(renderedChildren[key], test));
				}
			} else if (ReactElement.isValidElement(currentElement) && typeof currentElement.type === 'function') {
				ret = ret.concat(findAllInRenderedTreeInternal(inst._renderedComponent, test));
			}
			return ret;
		}

		var ReactTestUtils = {
			renderIntoDocument: function renderIntoDocument(instance) {
				var div = document.createElement('div');

				return ReactDOM.render(instance, div);
			},

			isElement: function isElement(element) {
				return ReactElement.isValidElement(element);
			},

			isElementOfType: function isElementOfType(inst, convenienceConstructor) {
				return ReactElement.isValidElement(inst) && inst.type === convenienceConstructor;
			},

			isDOMComponent: function isDOMComponent(inst) {
				return !!(inst && inst.nodeType === 1 && inst.tagName);
			},

			isDOMComponentElement: function isDOMComponentElement(inst) {
				return !!(inst && ReactElement.isValidElement(inst) && !!inst.tagName);
			},

			isCompositeComponent: function isCompositeComponent(inst) {
				if (ReactTestUtils.isDOMComponent(inst)) {

					return false;
				}
				return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
			},

			isCompositeComponentWithType: function isCompositeComponentWithType(inst, type) {
				if (!ReactTestUtils.isCompositeComponent(inst)) {
					return false;
				}
				var internalInstance = ReactInstanceMap.get(inst);
				var constructor = internalInstance._currentElement.type;

				return constructor === type;
			},

			isCompositeComponentElement: function isCompositeComponentElement(inst) {
				if (!ReactElement.isValidElement(inst)) {
					return false;
				}

				var prototype = inst.type.prototype;
				return typeof prototype.render === 'function' && typeof prototype.setState === 'function';
			},

			isCompositeComponentElementWithType: function isCompositeComponentElementWithType(inst, type) {
				var internalInstance = ReactInstanceMap.get(inst);
				var constructor = internalInstance._currentElement.type;

				return !!(ReactTestUtils.isCompositeComponentElement(inst) && constructor === type);
			},

			getRenderedChildOfCompositeComponent: function getRenderedChildOfCompositeComponent(inst) {
				if (!ReactTestUtils.isCompositeComponent(inst)) {
					return null;
				}
				var internalInstance = ReactInstanceMap.get(inst);
				return internalInstance._renderedComponent.getPublicInstance();
			},

			findAllInRenderedTree: function findAllInRenderedTree(inst, test) {
				if (!inst) {
					return [];
				}
				!ReactTestUtils.isCompositeComponent(inst) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findAllInRenderedTree(...): instance must be a composite component') : invariant(false) : undefined;
				return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);
			},

			scryRenderedDOMComponentsWithClass: function scryRenderedDOMComponentsWithClass(root, classNames) {
				if (!Array.isArray(classNames)) {
					classNames = classNames.split(/\s+/);
				}
				return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
					if (ReactTestUtils.isDOMComponent(inst)) {
						var className = inst.className;
						if (typeof className !== 'string') {

							className = inst.getAttribute('class') || '';
						}
						var classList = className.split(/\s+/);
						return classNames.every(function (name) {
							return classList.indexOf(name) !== -1;
						});
					}
					return false;
				});
			},

			findRenderedDOMComponentWithClass: function findRenderedDOMComponentWithClass(root, className) {
				var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
				if (all.length !== 1) {
					throw new Error('Did not find exactly one match ' + '(found: ' + all.length + ') for class:' + className);
				}
				return all[0];
			},

			scryRenderedDOMComponentsWithTag: function scryRenderedDOMComponentsWithTag(root, tagName) {
				return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
					return ReactTestUtils.isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
				});
			},

			findRenderedDOMComponentWithTag: function findRenderedDOMComponentWithTag(root, tagName) {
				var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
				if (all.length !== 1) {
					throw new Error('Did not find exactly one match for tag:' + tagName);
				}
				return all[0];
			},

			scryRenderedComponentsWithType: function scryRenderedComponentsWithType(root, componentType) {
				return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
					return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
				});
			},

			findRenderedComponentWithType: function findRenderedComponentWithType(root, componentType) {
				var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
				if (all.length !== 1) {
					throw new Error('Did not find exactly one match for componentType:' + componentType + ' (found ' + all.length + ')');
				}
				return all[0];
			},

			mockComponent: function mockComponent(module, mockTagName) {
				mockTagName = mockTagName || module.mockTagName || 'div';

				module.prototype.render.mockImplementation(function () {
					return React.createElement(mockTagName, null, this.props.children);
				});

				return this;
			},

			simulateNativeEventOnNode: function simulateNativeEventOnNode(topLevelType, node, fakeNativeEvent) {
				fakeNativeEvent.target = node;
				ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
			},

			simulateNativeEventOnDOMComponent: function simulateNativeEventOnDOMComponent(topLevelType, comp, fakeNativeEvent) {
				ReactTestUtils.simulateNativeEventOnNode(topLevelType, findDOMNode(comp), fakeNativeEvent);
			},

			nativeTouchData: function nativeTouchData(x, y) {
				return {
					touches: [{ pageX: x, pageY: y }] };
			},

			createRenderer: function createRenderer() {
				return new ReactShallowRenderer();
			},

			Simulate: null,
			SimulateNative: {} };

		var ReactShallowRenderer = function ReactShallowRenderer() {
			this._instance = null;
		};

		ReactShallowRenderer.prototype.getRenderOutput = function () {
			return this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput || null;
		};

		var NoopInternalComponent = function NoopInternalComponent(element) {
			this._renderedOutput = element;
			this._currentElement = element;
		};

		NoopInternalComponent.prototype = {

			mountComponent: function mountComponent() {},

			receiveComponent: function receiveComponent(element) {
				this._renderedOutput = element;
				this._currentElement = element;
			},

			unmountComponent: function unmountComponent() {},

			getPublicInstance: function getPublicInstance() {
				return null;
			} };

		var ShallowComponentWrapper = function ShallowComponentWrapper() {};
		assign(ShallowComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
			_instantiateReactComponent: function _instantiateReactComponent(element) {
				return new NoopInternalComponent(element);
			},
			_replaceNodeWithMarkupByID: function _replaceNodeWithMarkupByID() {},
			_renderValidatedComponent: ReactCompositeComponent.Mixin._renderValidatedComponentWithoutOwnerOrContext });

		ReactShallowRenderer.prototype.render = function (element, context) {
			!ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Invalid component element.%s', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : invariant(false) : undefined;
			!(typeof element.type !== 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Shallow rendering works only with custom ' + 'components, not primitives (%s). Instead of calling `.render(el)` and ' + 'inspecting the rendered output, look at `el.props` directly instead.', element.type) : invariant(false) : undefined;

			if (!context) {
				context = emptyObject;
			}
			ReactUpdates.batchedUpdates(_batchedRender, this, element, context);
		};

		function _batchedRender(renderer, element, context) {
			var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(false);
			renderer._render(element, transaction, context);
			ReactUpdates.ReactReconcileTransaction.release(transaction);
		}

		ReactShallowRenderer.prototype.unmount = function () {
			if (this._instance) {
				this._instance.unmountComponent();
			}
		};

		ReactShallowRenderer.prototype._render = function (element, transaction, context) {
			if (this._instance) {
				this._instance.receiveComponent(element, transaction, context);
			} else {
				var rootID = ReactInstanceHandles.createReactRootID();
				var instance = new ShallowComponentWrapper(element.type);
				instance.construct(element);

				instance.mountComponent(rootID, transaction, context);

				this._instance = instance;
			}
		};

		function makeSimulator(eventType) {
			return function (domComponentOrNode, eventData) {
				var node;
				if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
					node = findDOMNode(domComponentOrNode);
				} else if (domComponentOrNode.tagName) {
					node = domComponentOrNode;
				}

				var dispatchConfig = ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType];

				var fakeNativeEvent = new Event();
				fakeNativeEvent.target = node;

				var event = new SyntheticEvent(dispatchConfig, ReactMount.getID(node), fakeNativeEvent, node);
				assign(event, eventData);

				if (dispatchConfig.phasedRegistrationNames) {
					EventPropagators.accumulateTwoPhaseDispatches(event);
				} else {
					EventPropagators.accumulateDirectDispatches(event);
				}

				ReactUpdates.batchedUpdates(function () {
					EventPluginHub.enqueueEvents(event);
					EventPluginHub.processEventQueue(true);
				});
			};
		}

		function buildSimulators() {
			ReactTestUtils.Simulate = {};

			var eventType;
			for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {

				ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
			}
		}

		var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
		EventPluginHub.injection.injectEventPluginOrder = function () {
			oldInjectEventPluginOrder.apply(this, arguments);
			buildSimulators();
		};
		var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
		EventPluginHub.injection.injectEventPluginsByName = function () {
			oldInjectEventPlugins.apply(this, arguments);
			buildSimulators();
		};

		buildSimulators();

		function makeNativeSimulator(eventType) {
			return function (domComponentOrNode, nativeEventData) {
				var fakeNativeEvent = new Event(eventType);
				assign(fakeNativeEvent, nativeEventData);
				if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
					ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
				} else if (domComponentOrNode.tagName) {

					ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
				}
			};
		}

		Object.keys(topLevelTypes).forEach(function (eventType) {

			var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;

			ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
		});

		module.exports = ReactTestUtils;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactDOM.native.js
	function (__inner_require__, exports, module) {
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');

		module.exports = {
			unstable_batchedUpdates: ReactUpdates.batchedUpdates };
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/findDOMNode.js
	function (__inner_require__, exports, module) {
		var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCurrentOwner.js');
		var ReactInstanceMap = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceMap.js');
		var ReactMount = __inner_require__(195 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactMount.js*/);

		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		function findDOMNode(componentOrElement) {
			if (process.env.NODE_ENV !== 'production') {
				var owner = ReactCurrentOwner.current;
				if (owner !== null) {
					process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
					owner._warnedAboutRefsInRender = true;
				}
			}
			if (componentOrElement == null) {
				return null;
			}
			if (componentOrElement.nodeType === 1) {
				return componentOrElement;
			}
			if (ReactInstanceMap.has(componentOrElement)) {
				return ReactMount.getNodeFromInstance(componentOrElement);
			}
			!(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
			!false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
		}

		module.exports = findDOMNode;
	}];
});