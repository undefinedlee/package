__d("react-native@0.37/Libraries/ReactNative/requireNativeComponent.js", ["react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js", "react-native@0.37/Libraries/ReactNative/UIManager.js", "react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js", "react@15.3/lib/createReactNativeComponentClass.js", "react-native@0.37/Libraries/Utilities/differ/matricesDiffer.js", "react-native@0.37/Libraries/StyleSheet/processColor.js", "react-native@0.37/Libraries/Image/resolveAssetSource.js", "react-native@0.37/Libraries/Utilities/differ/sizesDiffer.js", "fbjs@0.8/lib/warning.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/ReactNative/requireNativeComponent.js
	function (__inner_require__, exports, module) {
		var ReactNativeStyleAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js');
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var UnimplementedView = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');

		var createReactNativeComponentClass = require('react@15.3/lib/createReactNativeComponentClass.js');
		var insetsDiffer = __inner_require__(1 /*Libraries/Utilities/differ/insetsDiffer.js*/);
		var matricesDiffer = require('react-native@0.37/Libraries/Utilities/differ/matricesDiffer.js');
		var pointsDiffer = __inner_require__(2 /*Libraries/Utilities/differ/pointsDiffer.js*/);
		var processColor = require('react-native@0.37/Libraries/StyleSheet/processColor.js');
		var resolveAssetSource = require('react-native@0.37/Libraries/Image/resolveAssetSource.js');
		var sizesDiffer = require('react-native@0.37/Libraries/Utilities/differ/sizesDiffer.js');
		var verifyPropTypes = __inner_require__(3 /*Libraries/ReactNative/verifyPropTypes.js*/);
		var warning = require('fbjs@0.8/lib/warning.js');

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
	}, // Libraries/Utilities/differ/insetsDiffer.js
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
	}, // Libraries/Utilities/differ/pointsDiffer.js
	function (__inner_require__, exports, module) {
		var dummyPoint = { x: undefined, y: undefined };

		var pointsDiffer = function pointsDiffer(one, two) {
			one = one || dummyPoint;
			two = two || dummyPoint;
			return one !== two && (one.x !== two.x || one.y !== two.y);
		};

		module.exports = pointsDiffer;
	}, // Libraries/ReactNative/verifyPropTypes.js
	function (__inner_require__, exports, module) {
		var ReactNativeStyleAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js');

		function verifyPropTypes(componentInterface, viewConfig, nativePropsToIgnore) {
			if (!viewConfig) {
				return;
			}
			var componentName = componentInterface.displayName || componentInterface.name || 'unknown';

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
					}
					message += '\nIf you haven\'t changed this prop yourself, this usually means that ' + 'your versions of the native code and JavaScript code are out of sync. Updating both ' + 'should make this error go away.';
					throw new Error(message);
				}
			}
		}

		module.exports = verifyPropTypes;
	}];
});