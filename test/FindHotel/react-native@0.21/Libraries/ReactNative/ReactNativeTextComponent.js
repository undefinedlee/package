// react-native@0.21/Libraries/ReactNative/ReactNativeTextComponent.js
loader.define("react-native@0.21", "Libraries/ReactNative/ReactNativeTextComponent.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/ReactNative/ReactNativeTextComponent.js
	function (__inner_require__, exports, module) {
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var ReactNativeTextComponent = function ReactNativeTextComponent(props) {};

		assign(ReactNativeTextComponent.prototype, {

			construct: function construct(text) {

				this._currentElement = text;
				this._stringText = '' + text;
				this._rootNodeID = null;
			},

			mountComponent: function mountComponent(rootID, transaction, context) {
				invariant(context.isInAParentText, 'RawText "' + this._stringText + '" must be wrapped in an explicit ' + '<Text> component.');

				this._rootNodeID = rootID;
				var tag = ReactNativeTagHandles.allocateTag();
				var nativeTopRootID = ReactNativeTagHandles.getNativeTopRootIDFromNodeID(rootID);
				UIManager.createView(tag, 'RCTRawText', nativeTopRootID ? ReactNativeTagHandles.rootNodeIDToTag[nativeTopRootID] : null, { text: this._stringText });

				return {
					rootNodeID: rootID,
					tag: tag };
			},

			receiveComponent: function receiveComponent(nextText, transaction, context) {
				if (nextText !== this._currentElement) {
					this._currentElement = nextText;
					var nextStringText = '' + nextText;
					if (nextStringText !== this._stringText) {
						this._stringText = nextStringText;
						UIManager.updateView(ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(this._rootNodeID), 'RCTRawText', { text: this._stringText });
					}
				}
			},

			unmountComponent: function unmountComponent() {
				this._currentElement = null;
				this._stringText = null;
				this._rootNodeID = null;
			} });

		module.exports = ReactNativeTextComponent;
	}];
});