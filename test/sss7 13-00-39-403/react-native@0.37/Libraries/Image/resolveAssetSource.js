loader.define("react-native@0.37/Libraries/Image/resolveAssetSource.js", ["react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Utilities/PixelRatio.js", "react-native@0.37/Libraries/Utilities/Platform.ios.js", "fbjs@0.8/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Image/resolveAssetSource.js
	function (__inner_require__, exports, module) {
		var AssetRegistry = __inner_require__(1 /*Libraries/Image/AssetRegistry.js*/);
		var AssetSourceResolver = __inner_require__(2 /*Libraries/Image/AssetSourceResolver.js*/);var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
		    SourceCode = _require.SourceCode;

		var _customSourceTransformer = void 0,
		    _serverURL = void 0,
		    _bundleSourcePath = void 0;

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

		function getBundleSourcePath() {
			if (_bundleSourcePath === undefined) {
				var scriptURL = SourceCode.scriptURL;
				if (!scriptURL) {

					_bundleSourcePath = null;
					return _bundleSourcePath;
				}
				if (scriptURL.startsWith('assets://')) {

					_bundleSourcePath = null;
					return _bundleSourcePath;
				}
				if (scriptURL.startsWith('file://')) {

					_bundleSourcePath = scriptURL.substring(7, scriptURL.lastIndexOf('/') + 1);
				} else {
					_bundleSourcePath = scriptURL.substring(0, scriptURL.lastIndexOf('/') + 1);
				}
			}

			return _bundleSourcePath;
		}

		function setCustomSourceTransformer(transformer) {
			_customSourceTransformer = transformer;
		}

		function resolveAssetSource(source) {
			if (typeof source === 'object') {
				return source;
			}

			var asset = AssetRegistry.getAssetByID(source);
			if (!asset) {
				return null;
			}

			var resolver = new AssetSourceResolver(getDevServerURL(), getBundleSourcePath(), asset);
			if (_customSourceTransformer) {
				return _customSourceTransformer(resolver);
			}
			return resolver.defaultAsset();
		}

		module.exports = resolveAssetSource;
		module.exports.pickScale = AssetSourceResolver.pickScale;
		module.exports.setCustomSourceTransformer = setCustomSourceTransformer;
	}, // Libraries/Image/AssetRegistry.js
	function (__inner_require__, exports, module) {
		var assets = [];

		function registerAsset(asset) {

			return assets.push(asset);
		}

		function getAssetByID(assetId) {
			return assets[assetId - 1];
		}

		module.exports = { registerAsset: registerAsset, getAssetByID: getAssetByID };
	}, // Libraries/Image/AssetSourceResolver.js
	function (__inner_require__, exports, module) {
		var PixelRatio = require('react-native@0.37/Libraries/Utilities/PixelRatio.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');

		var assetPathUtils = __inner_require__(3 /*local-cli/bundle/assetPathUtils.js*/);
		var invariant = require('fbjs@0.8/lib/invariant.js');

		function getScaledAssetPath(asset) {
			var scale = AssetSourceResolver.pickScale(asset.scales, PixelRatio.get());
			var scaleSuffix = scale === 1 ? '' : '@' + scale + 'x';
			var assetDir = assetPathUtils.getBasePath(asset);
			return assetDir + '/' + asset.name + scaleSuffix + '.' + asset.type;
		}

		function getAssetPathInDrawableFolder(asset) {
			var scale = AssetSourceResolver.pickScale(asset.scales, PixelRatio.get());
			var drawbleFolder = assetPathUtils.getAndroidDrawableFolderName(asset, scale);
			var fileName = assetPathUtils.getAndroidResourceIdentifier(asset);
			return drawbleFolder + '/' + fileName + '.' + asset.type;
		}var AssetSourceResolver = function () {

			function AssetSourceResolver(serverUrl, bundlePath, asset) {
				babelHelpers.classCallCheck(this, AssetSourceResolver);
				this.serverUrl = serverUrl;
				this.bundlePath = bundlePath;
				this.asset = asset;
			}babelHelpers.createClass(AssetSourceResolver, [{ key: 'isLoadedFromServer', value: function isLoadedFromServer() {
					return !!this.serverUrl;
				} }, { key: 'isLoadedFromFileSystem', value: function isLoadedFromFileSystem() {
					return !!this.bundlePath;
				} }, { key: 'defaultAsset', value: function defaultAsset() {
					if (this.isLoadedFromServer()) {
						return this.assetServerURL();
					}

					if (Platform.OS === 'android') {
						return this.isLoadedFromFileSystem() ? this.drawableFolderInBundle() : this.resourceIdentifierWithoutScale();
					} else {
						return this.scaledAssetPathInBundle();
					}
				} }, { key: 'assetServerURL', value: function assetServerURL() {
					invariant(!!this.serverUrl, 'need server to load from');
					return this.fromSource(this.serverUrl + getScaledAssetPath(this.asset) + '?platform=' + Platform.OS + '&hash=' + this.asset.hash);
				} }, { key: 'scaledAssetPath', value: function scaledAssetPath() {
					return this.fromSource(getScaledAssetPath(this.asset));
				} }, { key: 'scaledAssetPathInBundle', value: function scaledAssetPathInBundle() {
					var path = this.bundlePath || '';
					return this.fromSource(path + getScaledAssetPath(this.asset));
				} }, { key: 'resourceIdentifierWithoutScale', value: function resourceIdentifierWithoutScale() {
					invariant(Platform.OS === 'android', 'resource identifiers work on Android');
					return this.fromSource(assetPathUtils.getAndroidResourceIdentifier(this.asset));
				} }, { key: 'drawableFolderInBundle', value: function drawableFolderInBundle() {
					var path = this.bundlePath || '';
					return this.fromSource('file://' + path + getAssetPathInDrawableFolder(this.asset));
				} }, { key: 'fromSource', value: function fromSource(source) {
					return {
						__packager_asset: true,
						width: this.asset.width,
						height: this.asset.height,
						uri: source,
						scale: AssetSourceResolver.pickScale(this.asset.scales, PixelRatio.get()) };
				} }], [{ key: 'pickScale', value: function pickScale(scales, deviceScale) {

					for (var i = 0; i < scales.length; i++) {
						if (scales[i] >= deviceScale) {
							return scales[i];
						}
					}

					return scales[scales.length - 1] || 1;
				} }]);return AssetSourceResolver;
		}();

		module.exports = AssetSourceResolver;
	}, // local-cli/bundle/assetPathUtils.js
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
	}];
});