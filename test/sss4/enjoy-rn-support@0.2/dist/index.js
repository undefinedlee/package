loader.define("enjoy-rn-support@0.2/dist/index.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-common-support@0.2/dist/index.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// dist/index.js
		function(__inner_require__, exports, module){
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _enjoyCommonSupport = require("enjoy-common-support@0.2/dist/index.js");
			
			var _enjoyCommonSupport2 = _interopRequireDefault(_enjoyCommonSupport);
			
			var _hex = __inner_require__(1 /*dist/lib/hex.js*/);
			
			var _hex2 = _interopRequireDefault(_hex);
			
			var _StyleSheet = __inner_require__(2 /*dist/style/StyleSheet.js*/);
			
			var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
			
			var _defaultCss = __inner_require__(4 /*dist/style/default-css.js*/);
			
			var _defaultCss2 = _interopRequireDefault(_defaultCss);
			
			var _Element = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element2 = _interopRequireDefault(_Element);
			
			var _Box = __inner_require__(8 /*dist/tag/Box.js*/);
			
			var _Box2 = _interopRequireDefault(_Box);
			
			var _A = __inner_require__(9 /*dist/tag/A.js*/);
			
			var _A2 = _interopRequireDefault(_A);
			
			var _View = __inner_require__(18 /*dist/tag/View.js*/);
			
			var _View2 = _interopRequireDefault(_View);
			
			var _Text = __inner_require__(19 /*dist/tag/Text.js*/);
			
			var _Text2 = _interopRequireDefault(_Text);
			
			var _Label = __inner_require__(20 /*dist/tag/Label.js*/);
			
			var _Label2 = _interopRequireDefault(_Label);
			
			var _Image = __inner_require__(21 /*dist/tag/Image.js*/);
			
			var _Image2 = _interopRequireDefault(_Image);
			
			var _Input = __inner_require__(22 /*dist/tag/Input.js*/);
			
			var _Input2 = _interopRequireDefault(_Input);
			
			var _Textarea = __inner_require__(23 /*dist/tag/Textarea.js*/);
			
			var _Textarea2 = _interopRequireDefault(_Textarea);
			
			var _Select = __inner_require__(24 /*dist/tag/Select.js*/);
			
			var _Select2 = _interopRequireDefault(_Select);
			
			var _Body = __inner_require__(25 /*dist/tag/Body.js*/);
			
			var _Body2 = _interopRequireDefault(_Body);
			
			var _ScrollView = __inner_require__(26 /*dist/components/ScrollView.js*/);
			
			var _ScrollView2 = _interopRequireDefault(_ScrollView);
			
			var _Container = __inner_require__(13 /*dist/components/Container.js*/);
			
			var _Container2 = _interopRequireDefault(_Container);
			
			var _Router = __inner_require__(27 /*dist/components/Router.js*/);
			
			var _Router2 = _interopRequireDefault(_Router);
			
			var _Layer = __inner_require__(10 /*dist/components/Layer.js*/);
			
			var _Layer2 = _interopRequireDefault(_Layer);
			
			var _layers = __inner_require__(30 /*dist/components/layers.js*/);
			
			var _layers2 = _interopRequireDefault(_layers);
			
			var _Component = __inner_require__(31 /*dist/components/Component.js*/);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			var _Swiper = __inner_require__(32 /*dist/components/Swiper.js*/);
			
			var _Swiper2 = _interopRequireDefault(_Swiper);
			
			var _FadeNavBar = __inner_require__(33 /*dist/components/FadeNavBar.js*/);
			
			var _FadeNavBar2 = _interopRequireDefault(_FadeNavBar);
			
			var _SwiperPager = __inner_require__(34 /*dist/components/SwiperPager.js*/);
			
			var _SwiperPager2 = _interopRequireDefault(_SwiperPager);
			
			var _StaticFactory = __inner_require__(17 /*dist/components/StaticFactory.js*/);
			
			var _StaticFactory2 = _interopRequireDefault(_StaticFactory);
			
			var _ParallaxScroll = __inner_require__(35 /*dist/components/ParallaxScroll.js*/);
			
			var _ParallaxScroll2 = _interopRequireDefault(_ParallaxScroll);
			
			var _GuideMask = __inner_require__(36 /*dist/components/GuideMask.js*/);
			
			var _GuideMask2 = _interopRequireDefault(_GuideMask);
			
			var _Toast = __inner_require__(39 /*dist/components/Toast.js*/);
			
			var _Toast2 = _interopRequireDefault(_Toast);
			
			var _SearchInput = __inner_require__(40 /*dist/components/SearchInput.js*/);
			
			var _SearchInput2 = _interopRequireDefault(_SearchInput);
			
			var _Screen = __inner_require__(15 /*dist/tools/Screen.js*/);
			
			var _Screen2 = _interopRequireDefault(_Screen);
			
			var _NodeMethods = __inner_require__(37 /*dist/tools/NodeMethods.js*/);
			
			var _NodeMethods2 = _interopRequireDefault(_NodeMethods);
			
			var _Document = __inner_require__(14 /*dist/tools/Document.js*/);
			
			var _Document2 = _interopRequireDefault(_Document);
			
			var _Geolocation = __inner_require__(41 /*dist/tools/Geolocation.js*/);
			
			var _Geolocation2 = _interopRequireDefault(_Geolocation);
			
			var _Ajax = __inner_require__(42 /*dist/tools/Ajax.js*/);
			
			var _Ajax2 = _interopRequireDefault(_Ajax);
			
			var _Trap = __inner_require__(43 /*dist/tools/Trap.js*/);
			
			var _Trap2 = _interopRequireDefault(_Trap);
			
			var _Platform = __inner_require__(44 /*dist/tools/Platform.js*/);
			
			var _Platform2 = _interopRequireDefault(_Platform);
			
			var _Storage = __inner_require__(45 /*dist/tools/Storage.js*/);
			
			var _Storage2 = _interopRequireDefault(_Storage);
			
			var _NativeModules = __inner_require__(29 /*dist/lib/NativeModules.js*/);
			
			var _NativeModules2 = _interopRequireDefault(_NativeModules);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			_StyleSheet2.default.globalStylesheets.push(new _StyleSheet2.default(_defaultCss2.default));
			
			var htmlIndex = 0;
			
			var DOT_RE = /\/\.\//g;
			var DOUBLE_DOT_RE = /\/[^/]+\/\.\.\//;
			var MULTI_SLASH_RE = /([^:/])\/+\//g;
			
			function realpath(path) {
				// /a/b/./c/./d ==> /a/b/c/d
				path = path.replace(DOT_RE, "/");
			
				/**
			  *	a//b/c ==> a/b/c
			  *	a///b/////c ==> a/b/c
			  *	DOUBLE_DOT_RE matches a/b/c//../d path correctly only if replace // with / first
			  */
				path = path.replace(MULTI_SLASH_RE, "$1/");
			
				// a/b/c/../../d  ==>  a/b/../d  ==>  a/d
				while (path.match(DOUBLE_DOT_RE)) {
					path = path.replace(DOUBLE_DOT_RE, "/");
				}
			
				return path;
			}
			
			function transClassName(classNames) {
				return classNames.map(function (className) {
					var type = typeof className === "undefined" ? "undefined" : _typeof(className);
			
					if (type === "string") {
						return className;
					} else if (className instanceof Array) {
						return transClassName(className);
					} else if (type === "object") {
						return Object.keys(className).filter(function (key) {
							return className[key];
						}).join(" ");
					} else {
						return "";
					}
				}).join(" ");
			}
			
			var Util = {
				createElement: function createElement(tag, props) {
					for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
						children[_key - 2] = arguments[_key];
					}
			
					return _reactNative2.default.createElement.apply(_reactNative2.default, [tag, props].concat(children));
				},
				getHtmlIndex: function getHtmlIndex() {
					return (0, _hex2.default)(htmlIndex++) + "-";
				},
				arrayClass: function arrayClass(classNames) {
					return transClassName(classNames).split(/\s+/).map(function (className) {
						return (/^[a-zA-Z]/.test(className) ? "." + className : className
						);
					});
				},
				realpath: realpath,
				pageUtil: function pageUtil(path) {
					var realpath = this.realpath;
					var dir = path.split("/");
					dir.pop();
					dir = dir.join("/");
					return {
						path: path,
						dir: dir,
						require: function (_require) {
							function require(_x) {
								return _require.apply(this, arguments);
							}
			
							require.toString = function () {
								return _require.toString();
							};
			
							return require;
						}(function (path) {
							return require(this.resolve(path));
						}),
						resolve: function resolve(path) {
							if (/^\.{1,2}\//.test(path)) {
								return realpath(dir + "/" + path);
							} else {
								return path;
							}
						},
						header: function header(router) {
							_Router2.default.config(path, router);
						}
					};
				}
			};
			
			// export Util;
			// export StyleSheet;
			// export Element;
			// export Box;
			// export A;
			// export Label;
			// export Image;
			// export Input;
			// export Textarea;
			// export Select;
			// export ScrollView;
			// export Navigator;
			// export Swiper;
			
			// 替换Service模块的ajax模块
			_enjoyCommonSupport2.default.Service.ajax = _Ajax2.default;
			
			module.exports = Object.assign({}, _enjoyCommonSupport2.default, {
				Util: Util,
				StyleSheet: _StyleSheet2.default,
				Element: _Element2.default,
				Box: _Box2.default,
				A: _A2.default,
				Text: _Text2.default,
				View: _View2.default,
				Label: _Label2.default,
				Image: _Image2.default,
				Input: _Input2.default,
				Textarea: _Textarea2.default,
				Select: _Select2.default,
				Body: _Body2.default,
				ScrollView: _ScrollView2.default,
				Container: _Container2.default,
				Router: _Router2.default,
				Layer: _Layer2.default,
				layers: _layers2.default,
				Component: _Component2.default,
				Swiper: _Swiper2.default,
				FadeNavBar: _FadeNavBar2.default,
				SwiperPager: _SwiperPager2.default,
				StaticFactory: _StaticFactory2.default,
				ParallaxScroll: _ParallaxScroll2.default,
				GuideMask: _GuideMask2.default,
				Toast: _Toast2.default,
				SearchInput: _SearchInput2.default,
				Screen: _Screen2.default,
				NodeMethods: _NodeMethods2.default,
				document: _Document2.default,
				Geolocation: _Geolocation2.default,
				ajax: _Ajax2.default,
				Trap: _Trap2.default,
				Platform: _Platform2.default,
				Storage: _Storage2.default,
				NativeModules: _NativeModules2.default,
				InteractionManager: _reactNative2.default.InteractionManager
			});
		},		// dist/lib/hex.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = hex;
			var Index = [],
			    i;
			// 数字
			for (i = 48; i < 58; i++) {
				Index.push(String.fromCharCode(i));
			}
			// 大写
			for (i = 65; i < 91; i++) {
				Index.push(String.fromCharCode(i));
			}
			// 小写
			for (i = 97; i < 123; i++) {
				Index.push(String.fromCharCode(i));
			}
			
			var _hex = 62;
			// 10进制转62进制
			function hex(num) {
				if (num == 0) return "0";
			
				var result = [],
				    item = 1;
				while (num >= item) {
					result.unshift(Index[num % (item * _hex) / item | 0]);
					item *= _hex;
				}
				return result.join("");
			};
		},		// dist/style/StyleSheet.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _class, _temp;
			
			var _cacheFn = __inner_require__(3 /*dist/lib/cacheFn.js*/);
			
			var _cacheFn2 = _interopRequireDefault(_cacheFn);
			
			var _hex = __inner_require__(1 /*dist/lib/hex.js*/);
			
			var _hex2 = _interopRequireDefault(_hex);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			//var stylesheets = [];
			
			var Undefined;
			
			function makeArray(array) {
				return array || [];
			}
			
			// 计算一个css选择器的权重
			var computeCssLevel = (0, _cacheFn2.default)(function (selector) {
				// tag数量
				var tagCount = makeArray(selector.match(/\.rn\-/g)).length;
				// class数量
				var classCount = makeArray(selector.match(/\./g)).length - tagCount;
				// id数量
				var idCount = makeArray(selector.match(/#/g)).length;
				// 伪类数量
				var psuedoClassCount = makeArray(selector.match(/\:(focus|enabled|disabled|checked|active)/g)).length;
				// 伪元素数量
				var psuedoElementCount = makeArray(selector.match(/\:(first\-letter|first\-line|first\-child|last\-child|before|after|nth\-child|input-placeholder)/g)).length;
				// 属相选择器数量
				var attrCount = makeArray(selector.match(/\[/g)).length;
			
				return idCount * 100 + (classCount + attrCount + psuedoClassCount) * 10 + tagCount + psuedoElementCount;
			});
			// 格式化选择器
			// "#mod .container>.item[a=123] .rn-a:focus"
			// =>
			// {
			// 	selector: ".rn-a",
			//	psuedoClass: ["focus"],
			// 	parent: {
			// 		selector: ".item",
			//		attrs: ["a=123"],
			// 		onlyParent: false,
			// 		parent: {
			// 			selector: ".container",
			// 			onlyParent: true,
			// 			parent: {
			// 				selector: "#mod",
			// 				onlyParent: false
			// 			}
			// 		}
			// 	}
			// }
			var formatSelector = (0, _cacheFn2.default)(function (selector) {
				var current;
				selector.split(/\s+/).forEach(function (selector) {
					selector = selector.split(">");
					var lastIndex = selector.length - 1;
			
					selector.forEach(function (selector, index) {
						var attrs = [],
						    psuedoClass = [],
						    psuedoElement = [];
						selector = selector.replace(/\[([^\]]+)\]/g, function (all, content) {
							content = content.split("=");
							// 属性选择器
							attrs.push({
								hasValue: content.length === 2,
								key: content[0],
								value: content[1] ? content[1].replace(/(^["']|["']$)/g, "") : Undefined
							});
							return "";
						}).replace(/\:([^:]+)/g, function (all, content) {
							if (/focus|enabled|disabled|checked|active/.test(content)) {
								// 伪类选择器
								psuedoClass.push(content);
							} else {
								// 伪元素选择器
								psuedoElement.push(content);
							}
							return "";
						});
						if (selector) {
							selector = selector.replace(/^\./, "").split(".").map(function (item) {
								return (/^#/.test(item) ? "" : ".") + item;
							});
						} else {
							selector = Undefined;
						}
			
						current = {
							// >父子选择器
							onlyParent: index !== lastIndex,
							// id、class选择器
							selector: selector,
							// 属性选择器
							attrs: attrs.length ? attrs : Undefined,
							// 伪类选择器
							psuedoClass: psuedoClass.length ? psuedoClass : Undefined,
							// 伪元素选择器
							psuedoElement: psuedoElement.length ? psuedoElement : Undefined,
							// 
							parent: current
						};
					});
				});
			
				return current;
			});
			
			// 样式表监听事件
			var listeners = {
				"add": [],
				"remove": []
			};
			
			function fireEvent(eventName) {
				var argus = Array.prototype.slice.call(arguments, 1);
				listeners[eventName].forEach(function (listener) {
					listener.apply(StyleSheet, argus);
				});
			}
			
			// 样式表类
			var StyleSheet = (_temp = _class = function () {
				// 样式表
				//rules;
				// 末端选择器索引
				//index;
			
				// 构造新的样式表
				function StyleSheet(style) {
					_classCallCheck(this, StyleSheet);
			
					var index = style.index;
			
					//var styleIndexKey = "k" + hex(stylesheets.length) + "-";
			
					var items;
					// 计算选择器权重
					for (var selector in index) {
						items = index[selector];
			
						items.forEach(function (item) {
							//item.key = styleIndexKey + item.key;
							if (item.selector) {
								item.level = computeCssLevel(item.selector);
								item.selector = formatSelector(item.selector);
							} else {
								item.level = computeCssLevel(selector);
							}
						});
					}
			
					var rules = {};
					var _rules = style.rules;
					for (var classKey in _rules) {
						//rules[styleIndexKey + classKey] = _rules[classKey];
						rules[classKey] = _rules[classKey];
					}
			
					this.rules = rules;
					this.index = index;
			
					//StyleSheet.create(rules);
			
					//stylesheets.push(this);
			
					fireEvent("add", this);
				}
			
				// 销毁样式表
			
			
				_createClass(StyleSheet, [{
					key: "destroy",
					value: function destroy() {
						//stylesheets.splice(stylesheets.indexOf(this), 1);
						fireEvent("remove", this);
					}
			
					// 查找末端选择器匹配selector的所有class
			
				}], [{
					key: "match",
					value: function match(selector, stylesheets) {
						var results = [];
			
						var matchStyle = function matchStyle(stylesheet) {
							if (!stylesheet) {
								return;
							}
			
							var rules = stylesheet.rules;
			
							var matchs;
							if (matchs = stylesheet.index["*"]) {
								matchs.forEach(function (m) {
									m.style = rules[m.key];
								});
								results = results.concat(matchs);
							}
							if (matchs = stylesheet.index[selector]) {
								matchs.forEach(function (m) {
									m.style = rules[m.key];
								});
								results = results.concat(matchs);
							}
						};
			
						StyleSheet.globalStylesheets.forEach(matchStyle);
			
						if (stylesheets) {
							stylesheets.forEach(matchStyle);
						}
			
						return results;
					}
			
					// 绑定样式表变化事件
			
				}, {
					key: "on",
					value: function on(eventName, listener) {
						listeners[eventName].push(listener);
					}
			
					// 取消绑定样式表变化事件
			
				}, {
					key: "off",
					value: function off(eventName, listener) {
						var _listeners = listeners[eventName];
						_listeners.splice(_listeners.indexOf(listener), 1);
					}
			
					// 全局样式表
			
				}]);
			
				return StyleSheet;
			}(), _class.globalStylesheets = [], _temp);
			exports.default = StyleSheet;
		},		// dist/lib/cacheFn.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = cacheFn;
			// 对函数计算结果做缓存
			// 由于业务特点，仅做单参数及不为空的类型支持
			function cacheFn(fn) {
				var fnCaches = {};
				return function (param) {
					return fnCaches[param] || (fnCaches[param] = fn(param));
				};
			}
		},		// dist/style/default-css.js
		function(__inner_require__, exports, module){
			module.exports = {
				rules: {
					"0": {
						display: "inline"
					},
					"1": {
						display: "block"
					},
					"2": {
						backgroundColor: "transparent"
					},
					"3": {
						fontSize: "14px",
						lineHeight: "1.5"
					},
					"4": {
						flex: "1",
						display: "flex",
						flexDirection: "column"
					},
					"5": {
						fontWeight: "bold"
					},
					"6": {
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "#ccc",
						backgroundColor: "#fff"
					},
					"7": {
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "#ccc",
						backgroundColor: "#fff"
					},
					"8": {
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						height: "44px",
						"ios-paddingTop": "20px",
						"ios-height": "64px",
						backgroundColor: "rgba(255,255,255,.95)"
					},
					"9": {
						textAlign: "center",
						height: "44px",
						lineHeight: "44px",
						fontSize: "17px",
						color: "#555",
						fontWeight: "bold"
					},
					A: {
						position: "absolute",
						top: "0",
						"ios-top": "20px",
						height: "44px",
						lineHeight: "44px",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						fontSize: "14px",
						color: "#38f"
					},
					B: {
						left: "10px",
						justifyContent: "flex-start"
					},
					C: {
						right: "10px",
						justifyContent: "flex-end"
					},
					D: {
						display: "none !important"
					}
				},
				index: {
					".rn-a": [{
						key: "0"
					}],
					".rn-abbr": [{
						key: "0"
					}],
					".rn-b": [{
						key: "0"
					}, {
						key: "5"
					}],
					".rn-bdi": [{
						key: "0"
					}],
					".rn-bdo": [{
						key: "0"
					}],
					".rn-big": [{
						key: "0"
					}],
					".rn-cite": [{
						key: "0"
					}],
					".rn-code": [{
						key: "0"
					}],
					".rn-del": [{
						key: "0"
					}],
					".rn-dfn": [{
						key: "0"
					}],
					".rn-em": [{
						key: "0"
					}],
					".rn-i": [{
						key: "0"
					}],
					".rn-ins": [{
						key: "0"
					}],
					".rn-kbd": [{
						key: "0"
					}],
					".rn-mark": [{
						key: "0"
					}],
					".rn-meter": [{
						key: "0"
					}],
					".rn-output": [{
						key: "0"
					}],
					".rn-q": [{
						key: "0"
					}],
					".rn-samp": [{
						key: "0"
					}],
					".rn-small": [{
						key: "0"
					}],
					".rn-span": [{
						key: "0"
					}],
					".rn-strong": [{
						key: "0"
					}, {
						key: "5"
					}],
					".rn-sub": [{
						key: "0"
					}],
					".rn-sup": [{
						key: "0"
					}],
					".rn-time": [{
						key: "0"
					}],
					".rn-tt": [{
						key: "0"
					}],
					".rn-var": [{
						key: "0"
					}],
					".rn-label": [{
						key: "0"
					}],
					".rn-button": [{
						key: "0"
					}],
					".rn-menuitem": [{
						key: "0"
					}],
					".rn-img": [{
						key: "0"
					}],
					".rn-address": [{
						key: "1"
					}],
					".rn-article": [{
						key: "1"
					}],
					".rn-aside": [{
						key: "1"
					}],
					".rn-blockquote": [{
						key: "1"
					}],
					".rn-body": [{
						key: "1"
					}, {
						key: "4"
					}],
					".rn-dd": [{
						key: "1"
					}],
					".rn-details": [{
						key: "1"
					}],
					".rn-div": [{
						key: "1"
					}],
					".rn-dl": [{
						key: "1"
					}],
					".rn-dt": [{
						key: "1"
					}],
					".rn-fieldset": [{
						key: "1"
					}],
					".rn-figcaption": [{
						key: "1"
					}],
					".rn-figure": [{
						key: "1"
					}],
					".rn-footer": [{
						key: "1"
					}],
					".rn-form": [{
						key: "1"
					}],
					".rn-h1": [{
						key: "1"
					}, {
						key: "5"
					}],
					".rn-h2": [{
						key: "1"
					}, {
						key: "5"
					}],
					".rn-h3": [{
						key: "1"
					}, {
						key: "5"
					}],
					".rn-h4": [{
						key: "1"
					}, {
						key: "5"
					}],
					".rn-h5": [{
						key: "1"
					}, {
						key: "5"
					}],
					".rn-h6": [{
						key: "1"
					}, {
						key: "5"
					}],
					".rn-head": [{
						key: "1"
					}],
					".rn-left": [{
						key: "1"
					}],
					".rn-right": [{
						key: "1"
					}],
					".rn-header": [{
						key: "1"
					}],
					".rn-legend": [{
						key: "1"
					}],
					".rn-li": [{
						key: "1"
					}],
					".rn-main": [{
						key: "1"
					}],
					".rn-menu": [{
						key: "1"
					}],
					".rn-nav": [{
						key: "1"
					}],
					".rn-ol": [{
						key: "1"
					}],
					".rn-p": [{
						key: "1"
					}],
					".rn-pre": [{
						key: "1"
					}],
					".rn-section": [{
						key: "1"
					}],
					".rn-summary": [{
						key: "1"
					}],
					".rn-ul": [{
						key: "1"
					}],
					".rn-input": [{
						key: "1"
					}, {
						key: "6"
					}],
					".rn-textarea": [{
						key: "1"
					}, {
						key: "7"
					}],
					".rn-select": [{
						key: "1"
					}],
					".rn-title": [{
						key: "1"
					}],
					"*": [{
						key: "2"
					}],
					".rn-html": [{
						key: "3"
					}],
					".navbar": [{
						key: "8"
					}],
					".navbar-title": [{
						key: "9"
					}],
					".navbar-left": [{
						key: "A"
					}, {
						key: "B"
					}],
					".navbar-right": [{
						key: "A"
					}, {
						key: "C"
					}],
					".fn-hide": [{
						key: "D"
					}]
				}
			};
		},		// dist/tag/Element.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _StyleSheet = __inner_require__(2 /*dist/style/StyleSheet.js*/);
			
			var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			var _compatStyle2 = __inner_require__(7 /*dist/lib/compatStyle.js*/);
			
			var _compatStyle3 = _interopRequireDefault(_compatStyle2);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var checkImportant = /!important$/;
			
			// 根据选择器的权重，排序一组样式
			function sortLevel(classList) {
				if (classList.length) {
					var _ret = function () {
						var importantStyle = {};
			
						var styleList = classList.sort(function (a, b) {
							// 按照权重从小到大排序
							return a.level - b.level;
						}).map(function (item) {
							var style = item.style;
							for (var property in style) {
								if (checkImportant.test(style[property])) {
									importantStyle[property] = style[property].replace(checkImportant, "").trim();
								}
							}
							return style;
						});
			
						styleList.push(importantStyle);
			
						return {
							v: styleList
						};
					}();
			
					if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
				} else {
					return classList;
				}
			}
			
			// 样式属性的平台前缀
			var stylePrefix = "";
			if (_reactNative.Platform.OS === "ios") {
				stylePrefix = /^ios\-/;
			} else if (_reactNative.Platform.OS === "android") {
				stylePrefix = /^android\-/;
			}
			
			// 合并对象列表为一个对象
			function mergeObj(objList) {
				var styleObj = {};
				objList.forEach(function (o) {
					for (var key in o) {
						styleObj[key.replace(stylePrefix, "")] = o[key];
					}
				});
				return styleObj;
			}
			
			// 所有标签的基类
			// 主要功能如下：
			// 1、生成ID映射树，创建节点父子关联关系
			// 2、根据样式表解析匹配与当前节点的样式
			// 3、对事件做兼容转换
			
			var Element = function (_React$Component) {
				_inherits(Element, _React$Component);
			
				// 当前节点的路径
				function Element() {
					_classCallCheck(this, Element);
			
					var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));
			
					_this.path = "";
					_this._prevState = null;
					_this._psuedoClassStatus = {
						"focus": false,
						"active": false
					};
					_this._inheritStyleIsNew = false;
					_this.__canInheritStyle = {};
					_this._style = null;
					_this.parentNode = null;
					_this._events = {};
					_this._classList = [];
					return _this;
				}
			
				// 扩展子节点的属性
			
				// 上一次的状态
			
			
				_createClass(Element, [{
					key: "_extendChildren",
					value: function _extendChildren(props) {
						var _this2 = this;
			
						var _id = props._id;
			
						// 设置子节点的父节点
						var children = props.children;
						var lastIndex = _reactNative2.default.Children.count(children) - 1;
						_reactNative2.default.Children.forEach(children, function (child, index) {
							if (child && child.props) {
								// 在ID映射树上设置子节点信息
								Nodes[child.props._id] = {
									// 父节点
									//parent: this,
									parent: _id,
									// body元素
									body: _this2.bodyNodeId,
									// 标签上生效的样式表
									_inheritStylesheets: _this2.stylesheets,
									stylesheets: _this2.stylesheets,
									// 当前是父元素第几个子节点
									index: index,
									// 是否是第一个节点
									isFirst: index === 0,
									// 是否是最后一个节点
									isLast: index === lastIndex
								};
							}
						});
					}
				}, {
					key: "_extendThis",
					value: function _extendThis(props) {
						var node = Nodes[props._id];
			
						if (!node && props._component_id) {
							var componentNode = Nodes[props._component_id];
							if (componentNode) {
								delete componentNode.style;
								node = Nodes[props._id] = componentNode;
							}
						}
			
						// 获取父节点
						if (node) {
							// if(!node.parent && props._component_id){
							// 	// 检测是否会执行到这里
							// 	console.log("!!!!!!!!!!!!!!!!!!!!!!");
							// 	let componentNode = Nodes[props._component_id];
			
							// 	if(componentNode && componentNode.parent){
							// 		node.parent = componentNode.parent;
							// 	}
							// }
			
							this.parentNode = node.parent ? Nodes[node.parent].target : null;
			
							this.bodyNodeId = node.body;
			
							var newPath = [this.parentNode ? this.parentNode.path : "", props.css ? props.css.join("") : ""].join(">");
							if (newPath !== this.path) {
								this.path = newPath;
								this._style = node.style;
							}
			
							this._prevState = this.state;
							// this.setState({
							// 	// parents: (function(parent){
							// 	// 	var ids = [];
			
							// 	// 	do{
							// 	// 		ids.push(parent.props._id);
							// 	// 	}while(parent = parent.parent);
			
							// 	// 	return ids.join(".");
							// 	// })(node.parent),
							// 	index: node.index,
							// 	isFirst: node.isFirst,
							// 	isLast: node.isLast
							// });
						} else {
							node = Nodes[props._id] = {};
			
							this.parentNode = null;
							this.path = "";
							this._style = null;
							this._prevState = null;
						}
			
						if (props._styles) {
							if (node.stylesheets) {
								node.stylesheets = [].concat(node._inheritStylesheets, props._styles);
							} else {
								node.stylesheets = props._styles;
							}
						}
			
						this.stylesheets = node.stylesheets;
			
						if (!this._style) {
							this._style = Element.matchStyle(props);
						}
			
						this._compatStyle(this._style);
			
						// 将ID映射数中对应的节点指向自己
						node.target = this;
					}
			
					// 节点挂载的时候解析样式，并监听样式表的变化同步更新
			
				}, {
					key: "componentWillMount",
					value: function componentWillMount() {
						//StyleSheet.on("add", this.updateClassList);
						//StyleSheet.on("remove", this.updateClassList);
						this._extendThis(this.props);
						this._extendChildren(this.props);
			
						// if(!this._style){
						// 	this._style = Element.matchStyle(this.props);
						// }
						// this._compatStyle(this._style);
			
						// 将自己传出去，让别的节点可以获取自己
						this.props._ref && this.props._ref(this);
					}
			
					// 节点移除的时候，取消监听样式表的变化
			
				}, {
					key: "componentWillUnmount",
					value: function componentWillUnmount() {
						//StyleSheet.off("add", this.updateClassList);
						//StyleSheet.off("remove", this.updateClassList);
						this.parentNode = null;
						// 节点移除的时候移除关系树种相应节点
						this._clear();
					}
				}, {
					key: "_clear",
					value: function _clear() {
						// 清除映射树中关联的节点
						if (Nodes[this.props._id]) {
							delete Nodes[this.props._id];
						}
					}
				}, {
					key: "componentWillReceiveProps",
					value: function componentWillReceiveProps(nextProps) {
						// 如果新的ID与老的ID不同，则清除老的ID对应的映射树中的节点
						if (nextProps._id !== this.props._id) {
							this._clear();
						}
			
						this._extendThis(nextProps);
						this._extendChildren(nextProps);
			
						// if(!this._style){
						// 	this._style = Element.matchStyle(nextProps);
						// }
						// this._compatStyle(this._style);
					}
				}, {
					key: "shouldComponentUpdate",
					value: function shouldComponentUpdate(nextProps, nextState) {
						if (this.props._checkChange) {
							return this.props._checkChange();
						}
			
						if (this.props.isStatic) {
							return false;
						}
			
						return true;
			
						// console.log(nextProps);
						// console.log(nextState);
						// if(!nextState){
						// 	return false;
						// }
			
						// var currentState;
						// if(nextState){
						// 	currentState = this.state || {};
						// }else{
						// 	currentState = this._prevState || {};
						// 	nextState = this.state || {};
						// }
			
						// var keys = Object.keys(nextState);
						// if(keys.length === Object.keys(currentState).length && keys.every(function(key){
						// 	return nextState[key] === currentState[key];
						// })){
						// 	// 如果状态没变，则不需重新渲染
						// 	return false;
						// }else{
						// 	if(!this.style){
						// 		this.style = Element.matchStyle(this.props);
						// 	}
						// 	this._compatStyle(this.style);
						// 	return true;
						// }
					}
			
					// onClickProxy(e, handler){}
					// onDbClickProxy(e, handler){}
					// onTouchStartProxy(e, handler){}
					// onTouchMoveProxy(e, handler){}
					// onTouchEndProxy(e, handler){}
					// onTouchCancelProxy(e, handler){}
			
					// 伪类状态
			
				}, {
					key: "setPsuedoClassStatus",
			
					// 设置伪类状态
					value: function setPsuedoClassStatus(name, value) {
						this._psuedoClassStatus[name] = value;
					}
			
					// 做样式兼容
			
				}, {
					key: "_compatStyle",
					value: function _compatStyle(_style) {
						var _this3 = this;
			
						var style = _style.style,
						    beforeStyle = _style.beforeStyle,
						    afterStyle = _style.afterStyle,
						    canInheritStyle = _style.canInheritStyle,
						    focusStyle = _style.focusStyle,
						    activeStyle = _style.activeStyle,
						    enabledStyle = _style.enabledStyle,
						    disabledStyle = _style.disabledStyle,
						    checkedStyle = _style.checkedStyle;
						// 如果有背景图，则获取背景图原始尺寸
			
						if (typeof style.backgroundImage === "string") {
							style.backgroundImage = style.backgroundImage.replace(/(^url\("?|"?\))/g, "");
			
							_reactNative.Image.getSize && _reactNative.Image.getSize(style.backgroundImage, function (width, height) {
								_this3.setState({
									backgroundImageWidth: width,
									backgroundImageHeight: height
								});
							});
						}
			
						// 设置可继承样式
						if (canInheritStyle) {
							this.__canInheritStyle = canInheritStyle;
							this._inheritStyleIsNew = true;
						} else {
							this._inheritStyleIsNew = false;
						}
					}
			
					// 可继承属性是否是最新
			
					// 可继承样式（不一定是最新的，需要根据_inheritStyleIsNew判断，是否需要重新计算）
			
				}, {
					key: "_supportEvents",
			
					// 处理事件
					value: function _supportEvents(props) {
						var clickHandler = props.onClick;
						if (clickHandler) {
							delete props.onClick;
			
							props.onPress = this.clickProxy ? this.clickProxy(clickHandler) : clickHandler;
						}
			
						var touchStartHandler = props.onTouchStart;
						if (touchStartHandler) {
							props.onTouchStart = this.touchStartProxy ? this.touchStartProxy(touchStartHandler) : touchStartHandler;
						}
			
						var touchMoveHandler = props.onTouchMove;
						if (touchMoveHandler) {
							props.onTouchMove = this.touchMoveProxy ? this.touchMoveProxy(touchMoveHandler) : touchMoveHandler;
						}
			
						var touchEndHandler = props.onTouchEnd;
						if (touchEndHandler) {
							props.onTouchEnd = this.touchEndProxy ? this.touchEndProxy(touchEndHandler) : touchEndHandler;
						}
			
						return props;
			
						var touchStartHandler = props.onTouchStart;
						if (touchStartHandler) {
							delete props.onTouchStart;
			
							console.log(this.touchStartProxy);
			
							props.onStartShouldSetResponder = function () {
								return true;
							};
							props.onResponderTerminationRequest = function () {
								return true;
							};
							props.onResponderGrant = this.touchStartProxy ? this.touchStartProxy(touchStartHandler) : touchStartHandler;
						}
			
						var touchMoveHandler = props.onTouchMove;
						if (touchMoveHandler) {
							delete props.onTouchMove;
			
							props.onMoveShouldSetResponder = function () {
								return true;
							};
							props.onResponderTerminationRequest = function () {
								return true;
							};
							props.onResponderMove = touchMoveHandler;
						}
			
						var touchEndHandler = props.onTouchEnd;
						if (touchEndHandler) {
							delete props.onTouchEnd;
			
							props.onResponderRelease = this.touchEndProxy ? this.touchEndProxy(touchEndHandler) : touchEndHandler;
						}
			
						return props;
					}
			
					// 在原生标签上添加事件监听
			
				}, {
					key: "_addEvent",
					value: function _addEvent(eventName) {
						var _this4 = this;
			
						var events = _defineProperty({}, eventName.replace(/^[a-z]/, function (char) {
							return "on" + char.toUpperCase();
						}), function (e) {
							_this4._events[eventName].forEach(function (listener) {
								listener.call(_this4, e);
							});
						});
			
						this._supportEvents(events);
			
						this.nativeNode.setNativeProps(events);
					}
			
					// 在原生标签上移除事件监听
			
				}, {
					key: "_removeEvent",
					value: function _removeEvent(eventName) {
						var events = _defineProperty({}, eventName.replace(/^[a-z]/, function (char) {
							return "on" + char.toUpperCase();
						}), function (e) {});
			
						this._supportEvents(events);
			
						this.nativeNode.setNativeProps(events);
					}
			
					// 绑定事件（要考虑重绘的时候是否能够保留）
			
				}, {
					key: "addEventListener",
					value: function addEventListener(eventName, listener, useCapture) {
						if (!this._events[eventName]) {
							this._events[eventName] = [];
							this._addEvent(eventName);
						}
			
						this._events[eventName].push(listener);
					}
			
					// 移除事件
			
				}, {
					key: "removeEventListener",
					value: function removeEventListener(eventName, listener, useCapture) {
						if (this._events[eventName]) {
							this._events[eventName].splice(this._events[eventName].indexOf(listener), 1);
							if (this._events.length === 0) {
								delete this._events[eventName];
								this._removeEvent(eventName);
							}
						}
					}
			
					//
			
				}, {
					key: "getAttribute",
					value: function getAttribute(name) {
						return this.props[name];
					}
			
					// 要考虑重绘的时候是否能够保留
			
				}, {
					key: "setAttribute",
					value: function setAttribute(name, value) {
						// this.nativeNode.setNativeProps({
						// 	[name]: value
						// });
					}
				}, {
					key: "getElementsByTagName",
					value: function getElementsByTagName(tagName) {}
				}, {
					key: "getElementsByClassName",
					value: function getElementsByClassName(className) {}
				}, {
					key: "insertBefore",
					value: function insertBefore() {}
				}, {
					key: "appendChild",
					value: function appendChild() {}
				}, {
					key: "removeChild",
					value: function removeChild() {}
				}, {
					key: "replaceChild",
					value: function replaceChild() {}
				}, {
					key: "_canInheritStyle",
			
					// 可继承给子元素的样式
					get: function get() {
						if (!this._inheritStyleIsNew) {
							this.__canInheritStyle = (0, _filterStyle.createInheritStyle)(this._style.style);
							this._inheritStyleIsNew = true;
						}
			
						return this.__canInheritStyle;
					}
			
					// selector: 要检测的CSS选择器，可选，如果不传selector，则从全局样式表匹配样式
			
				}, {
					key: "nativeNode",
			
					// 获取自定义元素生成完成之后的reactnative提供的元素
					// 默认在自定义元素渲染方法里面最外层reactnative元素添加ref="_native_node"
					get: function get() {
						return this.refs["_native_node"];
					}
			
					// 解析后，应用在元素上的样式
			
				}, {
					key: "style",
			
					// 获取样式
					get: function get() {
						return this._style.style;
					}
					// 设置样式
			
					, set: function set(style) {
						var _style = {};
			
						style && Object.keys(style).forEach(function (property) {
							var value = style[property];
							var rnStyle = (0, _compatStyle3.default)(property, value);
							property = rnStyle.property;
							value = rnStyle.value;
			
							if (value !== null) {
								if (typeof property === "string") {
									_style[property] = value;
								} else if (property instanceof Array) {
									property.forEach(function (property, index) {
										_style[property] = value[index];
									});
								}
							}
						});
			
						this._style = Element.matchStyle(Object.assign({}, this.props, style ? {
							style: _style
						} : {}));
						this._compatStyle(this._style);
						this.forceUpdate();
					}
			
					// 父节点
			
				}, {
					key: "childNodes",
			
					// 子节点
					get: function get() {
						var children = [];
			
						var thisId = this.props._id;
						Object.keys(Nodes).forEach(function (id) {
							var node = Nodes[id];
							if (node.parent === thisId) {
								children.push(node.target);
							}
						});
			
						return children;
					}
			
					//
			
				}, {
					key: "classList",
			
					//
					get: function get() {
						var classList = this._classList.filter(function (className) {
							return !/^(#|\.rn\-)/.test(className);
						}).map(function (className) {
							return className.replace(/^\./, "");
						});
			
						classList.add = function () {};
			
						classList.remove = function () {};
			
						classList.contains = function () {};
			
						classList.toggle = function () {};
			
						return classList;
					}
				}], [{
					key: "checkCssMatch",
					value: function checkCssMatch(selector, props, parent) {
						var _ref = Nodes[props._id] || {
							index: -1,
							isFirst: false,
							isLast: false
						},
						    index = _ref.index,
						    isFirst = _ref.isFirst,
						    isLast = _ref.isLast;
			
						var isMatch = false;
						// 组合class检测，例(.className1.className2、tagName.className3)
						isMatch = selector.selector.every(function (selector) {
							return props.css.indexOf(selector) !== -1;
						});
						// 伪元素选择器检测
						if (isMatch && selector.psuedoElement) {
							index += 1;
							isMatch = selector.psuedoElement.every(function (psuedoElement) {
								var childMatch;
								if (childMatch = psuedoElement.match(/^nth\-child\(((\d+)n\+)?(\d+)\)$/)) {
									if (childMatch[2]) {
										return (index - childMatch[3]) % childMatch[2] === 0;
									} else {
										return index == childMatch[3];
									}
								}
			
								switch (psuedoElement) {
									case "first-child":
										return isFirst;
									case "last-child":
										return isLast;
									case "before":
									case "after":
										return true;
									default:
										return false;
								}
							});
						}
						// 属性选择器检测
						if (isMatch && selector.attrs) {
							isMatch = selector.attrs.every(function (attr) {
								if (attr.hasValue) {
									return props[attr.key] == attr.value;
								} else {
									return props.hasOwnProperty(attr.key);
								}
							});
						}
			
						if (isMatch) {
							return !selector.parent || parent && Element.checkCssMatch(selector.parent, parent.props, parent.parentNode);
						} else {
							return !selector.onlyParent && parent && Element.checkCssMatch(selector, parent.props, parent.parentNode);
						}
					}
			
					// 获取匹配到的样式
			
				}, {
					key: "matchStyle",
					value: function matchStyle(props, parent) {
						var node = Nodes[props._id];
						var stylesheets = [];
			
						if (node) {
							if (!parent) {
								parent = node.parent ? Nodes[node.parent].target : null;
							}
			
							stylesheets = node.stylesheets;
						}
			
						var nodePath = [parent ? parent.path : "", props.css ? props.css.join("") : ""].join(">");
			
						// if(styleCache[nodePath] && !props.style){
						// 	// 暂时有很多问题
						// 	return styleCache[nodePath];
						// }
			
						var classList = [];
						// 伪元素样式列表
						var beforeClassList = [];
						var afterClassList = [];
						// 伪类样式列表
						var psuedoClassList = {
							"focus": [],
							"active": [],
							"enabled": [],
							"disabled": [],
							"checked": []
						};
			
						if (props.css) {
							// 获取所有末级选择器匹配的样式
							props.css.forEach(function (css) {
								classList = classList.concat(_StyleSheet2.default.match(css, stylesheets));
							});
							// 检测父级选择器是否匹配
							classList = classList.filter(function (selector) {
								var _selector;
								if (_selector = selector.selector) {
									var psuedoElement = _selector.psuedoElement;
			
									if (psuedoElement && psuedoElement.indexOf("before") !== -1) {
										if (Element.checkCssMatch(_selector, props, parent)) {
											beforeClassList.push(selector);
										}
										return false;
									} else if (psuedoElement && psuedoElement.indexOf("after") !== -1) {
										if (Element.checkCssMatch(_selector, props, parent)) {
											afterClassList.push(selector);
										}
										return false;
									} else if (Element.checkCssMatch(_selector, props, parent)) {
										var psuedoClass = _selector.psuedoClass;
										if (psuedoClass) {
											psuedoClass.forEach(function (psuedoClass) {
												psuedoClassList[psuedoClass].push(selector);
											});
											return false;
										} else {
											return true;
										}
									} else {
										return false;
									}
								} else {
									return true;
								}
							});
							// 按照权重排序
							classList = sortLevel(classList);
							//
							beforeClassList = sortLevel(beforeClassList);
							//
							afterClassList = sortLevel(afterClassList);
							//
							for (var psuedoClass in psuedoClassList) {
								psuedoClassList[psuedoClass] = sortLevel(psuedoClassList[psuedoClass]);
							}
						}
			
						// 继承的样式
						if (parent) {
							classList.unshift(parent._canInheritStyle);
						} else {
							var rootInheritStyle = (0, _filterStyle.createInheritStyle)(mergeObj(sortLevel(_StyleSheet2.default.match(".rn-html", stylesheets))));
							classList.unshift(rootInheritStyle);
						}
						// 加入内联样式
						if (props.style) {
							classList.push(props.style);
						}
			
						var styleObj = (0, _filterStyle.transUnit)(mergeObj(classList));
			
						// 暂时先这么写，对于内联元素中的内联元素绝对定位会有问题
						if (styleObj.display === "inline" && (parent && parent._style.style.display === "flex" || styleObj.position === "absolute")) {
							styleObj.display = "block";
						}
						// inline内部不能嵌套block元素
						else if ((styleObj.display === "block" || styleObj.display === "flex") && parent && parent._style.style.display === "inline") {
								styleObj.display = "inline";
							}
			
						// flex-direction 默认值为 row，与浏览器保持一致
						if (styleObj.display === "flex" && !styleObj.flexDirection) {
							styleObj.flexDirection = "row";
						}
			
						var canInheritStyle;
						var beforeStyle;
						if (beforeClassList.length) {
							canInheritStyle = (0, _filterStyle.createInheritStyle)(styleObj);
			
							beforeClassList.unshift(canInheritStyle);
			
							beforeStyle = (0, _filterStyle.transUnit)(mergeObj(beforeClassList));
						}
			
						var afterStyle;
						if (afterClassList.length) {
							if (!canInheritStyle) {
								canInheritStyle = (0, _filterStyle.createInheritStyle)(styleObj);
							}
							afterClassList.unshift(canInheritStyle);
			
							afterStyle = (0, _filterStyle.transUnit)(mergeObj(afterClassList));
						}
			
						var psuedoClassStyle = {};
						for (var _psuedoClass in psuedoClassList) {
							var psuedoClassObj = void 0;
							if ((psuedoClassObj = psuedoClassList[_psuedoClass]) && psuedoClassObj.length) {
								//psuedoClassObj = psuedoClassObj.map(transUnit);
								psuedoClassStyle[_psuedoClass] = (0, _filterStyle.transUnit)(mergeObj(psuedoClassObj));
							}
						}
			
						var result = {
							style: styleObj,
							beforeStyle: beforeStyle,
							afterStyle: afterStyle,
							canInheritStyle: canInheritStyle,
							focusStyle: psuedoClassStyle["focus"],
							activeStyle: psuedoClassStyle["active"],
							enabledStyle: psuedoClassStyle["enabled"],
							disabledStyle: psuedoClassStyle["disabled"],
							checkedStyle: psuedoClassStyle["checked"]
						};
			
						if (props.style) {
							return result;
						} else {
							return styleCache[nodePath] = result;
						}
					}
				}]);
			
				return Element;
			}(_reactNative2.default.Component);
			// ID映射树
			// 由于react中没有父子节点关系，所以用节点的ID映射一棵树，用来存放节点的父子关系及其他信息
			
			
			var Nodes = Element.Nodes = {};
			var styleCache = {};
			
			exports.default = Element;
		},		// dist/style/filterStyle.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.transUnit = exports.filterTouchableStyle = exports.createTouchableStyle = exports.createInheritStyle = exports.createImageStyle = exports.createTextStyle = exports.createViewStyle = undefined;
			
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			exports.fixLineHeight = fixLineHeight;
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var flexboxProperties = "alignItems alignSelf borderBottomWidth borderLeftWidth borderRightWidth borderTopWidth borderWidth bottom flex flexDirection flexWrap height justifyContent left margin marginBottom marginHorizontal marginLeft marginRight marginTop marginVertical padding paddingBottom paddingHorizontal paddingLeft paddingRight paddingTop paddingVertical position right top width".split(" ");
			
			var shadowProperties = "shadowColor shadowOffset shadowOpacity shadowRadius".split(" ");
			
			var transformProperties = "transform transformMatrix".split(" ");
			
			var viewProperties = "backfaceVisibility backgroundColor borderBottomColor borderBottomLeftRadius borderBottomRightRadius borderBottomWidth borderColor borderLeftColor borderLeftWidth borderRadius borderRightColor borderRightWidth borderStyle borderTopColor borderTopLeftRadius borderTopRightRadius borderTopWidth borderWidth opacity overflow".split(" ");
			
			var touchableProperties = "alignSelf flex position top right bottom left margin marginBottom marginHorizontal marginLeft marginRight marginTop marginVertical".split(" ");
			
			var textProperties = "color fontFamily fontSize fontStyle fontWeight lineHeight textAlign textShadowColor textShadowOffset textShadowRadius".split(" ");
			
			var inheritProperties = textProperties.concat("whiteSpace".split(" "));
			
			var imageProperties = "backfaceVisibility backgroundColor borderColor borderRadius borderWidth opacity overflow resizeMode".split(" ");
			
			function createNewStyle(filterProperties, plugins) {
				return function (style) {
					var newStyle = {};
					for (var property in style) {
						if (filterProperties.indexOf(property) !== -1) {
							newStyle[property] = style[property];
						}
					}
					if (plugins) {
						plugins.forEach(function (plugin) {
							newStyle = plugin(newStyle);
						});
					}
					return newStyle;
				};
			}
			
			// 修复行高问题
			function fixLineHeight(style) {
				if (style.lineHeight) {
					if (style.fontSize) {
						if (typeof style.lineHeight === "number" || /^\d+(\.\d+)?$/.test(style.lineHeight)) {
							// 兼容倍数行高
							style.lineHeight = style.fontSize * style.lineHeight;
						} else {
							style.lineHeight = parseInt(style.lineHeight);
						}
			
						if (_reactNative.Platform.OS === 'ios') {
							// 修复IOS行高的问题
							var moreHeight = style.lineHeight - style.fontSize;
							if (moreHeight > 0) {
								// 对于多行文本，这里还有问题
								style.lineHeight = style.fontSize + moreHeight / 2;
								style.paddingBottom = (style.paddingBottom || 0) + moreHeight / 2;
								//style.marginTop = (style.marginTop || 0) - moreHeight / 2;
							}
						} else {
							// 修复Android行高的问题
							var _moreHeight = style.lineHeight - style.fontSize;
							if (_moreHeight > 0) {
								var diffHeight = _moreHeight / 2 - 3;
								//let diffHeight = moreHeight / 2;
								style.marginTop = (style.marginTop || 0) + diffHeight;
								style.marginBottom = (style.marginBottom || 0) - diffHeight;
							} else {
								style.lineHeight = style.fontSize + 3;
								style.marginTop = (style.marginTop || 0) - 3;
							}
							// 安卓下，行高只支持整数
							style.lineHeight = style.lineHeight | 0;
						}
					} else {
						style.lineHeight = parseInt(style.lineHeight);
					}
				}
				return style;
			}
			
			// 修复圆角背景溢出问题
			function fixBorderRadius(style) {
				if (style.borderRadius && style.backgroundColor) {
					style.overflow = "hidden";
				}
				return style;
			}
			
			function fixFixed(style) {
				if (style.position === "fixed") {
					style.position = "absolute";
				}
			
				return style;
			}
			
			function fixAndroidTextAlignVertical(style) {
				if (_reactNative.Platform.OS === "android") {
					style.textAlignVertical = "center";
				}
				return style;
			}
			
			// View标签支持的样式
			var createViewStyle = exports.createViewStyle = createNewStyle([].concat(flexboxProperties, shadowProperties, transformProperties, viewProperties), [fixBorderRadius, fixFixed]);
			
			// Text标签支持的样式
			var createTextStyle = exports.createTextStyle = createNewStyle([].concat(flexboxProperties, shadowProperties, transformProperties, viewProperties, textProperties), [fixLineHeight, fixFixed, fixAndroidTextAlignVertical]);
			
			// Image标签支持的样式
			var createImageStyle = exports.createImageStyle = createNewStyle([].concat(flexboxProperties, shadowProperties, transformProperties, imageProperties));
			
			// 可继承样式
			var createInheritStyle = exports.createInheritStyle = createNewStyle(inheritProperties);
			
			var createTouchableStyle = exports.createTouchableStyle = createNewStyle(touchableProperties, [fixFixed]);
			
			var filterTouchableStyle = exports.filterTouchableStyle = function filterTouchableStyle(style) {
				var newStyle = {};
			
				var isAbsolute = (style.position === "absolute" || style.position === "fixed") && !style.width;
			
				Object.keys(style).forEach(function (prop) {
					if (touchableProperties.indexOf(prop) === -1) {
						newStyle[prop] = style[prop];
					}
				});
			
				if (isAbsolute) {
					newStyle.position = "absolute";
					newStyle.left = newStyle.right = newStyle.top = newStyle.bottom = 0;
				} else {
					newStyle.flex = 1;
				}
			
				return newStyle;
			};
			
			// 转换数字单位
			var transUnit = exports.transUnit = function transUnit(obj) {
				var value;
				for (var key in obj) {
					value = obj[key];
					// 由于lineHeight要做倍数处理，所以此处不转换行高
					if (/(fontSize|^border|width|height|top|right|bottom|left|^margin|^padding|Radius|flex|opacity$)/.test(key) && typeof value === "string" && /^\-?\d/.test(value)) {
						obj[key] = parseFloat(value);
					} else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
						var _value = void 0;
						for (var _key in value) {
							_value = value[_key];
							if (typeof _value === "string" && /^\-?\d/.test(_value)) {
								value[_key] = parseFloat(_value);
							}
						}
					}
				}
				return obj;
			};
		},		// dist/lib/compatStyle.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (property, value) {
				var isImportant = false;
			
				if (/!important$/.test(value)) {
					value = value.replace(/!important$/, "").trim();
					isImportant = true;
				}
			
				if (/^background/.test(property)) {
					(function () {
						var transBackgroundImage = function transBackgroundImage(url) {
							var imageUrl = url.replace(/(^url\("?|"?\))/g, "");
			
							if (/^(http:|https:)?\/\//.test(imageUrl)) {
								return imageUrl;
							}
							// else{
							// 	if(!/^\.{1,2}\//.test(imageUrl)){
							// 		imageUrl = "./" + imageUrl;
							// 	}
							// 	return "require(" + imageUrl + ")";
							// }
						};
						// 背景
			
						(function () {
							switch (property) {
								case "background":
									// 将缩写形式的属性值按照空格进行分割
									var _value = value.replace(/\([^\)]+\)/, function (str) {
										return str.replace(/\s+/g, "");
									}).split(/\s+/);
			
									property = [];
									value = [];
									var backgroundPosition = [];
									// 识别分割后的每一项属性
									_value.forEach(function (v) {
										if (colorRegex.test(v)) {
											property.push("backgroundColor");
											value.push(v);
										} else if (/url\([^\)]+\)/.test(v)) {
											property.push("backgroundImage");
											value.push(transBackgroundImage(v));
										} else if (/(^repeat|no\-repeat)/.test(v)) {
											property.push("backgroundRepeat");
											value.push(v);
										} else {
											backgroundPosition.push(v);
										}
									});
									// 过滤有效的北京位置
									backgroundPosition.filter(function (p) {
										return (/(^\d+|left|center|right|top|bottom)/.test(p)
										);
									});
			
									if (backgroundPosition.length === 2) {
										property.push("backgroundPosition");
										value.push(backgroundPosition.join(" "));
									}
			
									break;
								case "backgroundImage":
									value = transBackgroundImage(value);
									break;
								case "backgroundColor":
								//case "backgroundRepeat":
								case "backgroundPosition":
								case "backgroundSize":
									//case "backgroundAttachment":
									//case "backgroundClip":
									//case "backgroundOrigin":
									break;
								default:
									property = null;
									break;
							}
						})();
					})();
				} else if (/^border/.test(property)) {
					var parseBorder = function parseBorder(borderStr, direction) {
						var property = [];
						var value = [];
			
						if (borderStr === "none") {
							property = "border" + direction + "Width";
							value = 0;
						} else {
							borderStr.replace(/\([^\)]+\)/g, function (color) {
								return color.replace(/\s+/g, "");
							}).split(/\s+/).forEach(function (v) {
								if (colorRegex.test(v)) {
									property.push("border" + direction + "Color");
									value.push(v);
								} else if (/^(solid|dotted|dashed)$/.test(v)) {
									property.push("borderStyle");
									value.push(v);
								} else if (/^\d/.test(v)) {
									property.push("border" + direction + "Width");
									value.push(v);
								}
							});
						}
			
						return {
							property: property,
							value: value
						};
					};
			
					var parseAbbr = function parseAbbr(property, value, properties) {
						value = value.replace(/\([^\)]+\)/g, function (color) {
							return color.replace(/\s+/g, "");
						}).split(/\s+/).slice(0, 4);
			
						if (value.length > 1) {
							property = properties;
						}
						switch (value.length) {
							case 1:
								value = value[0];
								break;
							case 2:
								value = [value[0], value[1], value[1], value[1]];
								break;
							case 3:
								value = [value[0], value[1], value[2], value[1]];
								break;
						}
			
						return {
							property: property,
							value: value
						};
					};
			
					var result = void 0;
					// 边框
					switch (property) {
						case "border":
							result = parseBorder(value, "");
							property = result.property;
							value = result.value;
							break;
						case "borderStyle":
							value = value.split(/\s+/);
							if (value.length > 1) {
								console.warn("class: " + selector + " 中border-style不支持各边使用不同样式");
							}
							value = value[0];
							break;
						case "borderTopStyle":
						case "borderRightStyle":
						case "borderBottomStyle":
						case "borderLeftStyle":
							property = "borderStyle";
							break;
						case "borderColor":
							result = parseAbbr(property, value, ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]);
							property = result.property;
							value = result.value;
							break;
						case "borderWidth":
							result = parseAbbr(property, value, ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"]);
							property = result.property;
							value = result.value;
							break;
						case "borderRadius":
							result = parseAbbr(property, value, ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]);
							property = result.property;
							value = result.value;
							break;
						case "borderTop":
							result = parseBorder(value, "Top");
							property = result.property;
							value = result.value;
							break;
						case "borderRight":
							result = parseBorder(value, "Right");
							property = result.property;
							value = result.value;
							break;
						case "borderBottom":
							result = parseBorder(value, "Bottom");
							property = result.property;
							value = result.value;
							break;
						case "borderLeft":
							result = parseBorder(value, "Left");
							property = result.property;
							value = result.value;
							break;
						case "borderTopColor":
						case "borderTopWidth":
						case "borderRightColor":
						case "borderRightWidth":
						case "borderBottomColor":
						case "borderBottomWidth":
						case "borderLeftColor":
						case "borderLeftWidth":
						case "borderTopLeftRadius":
						case "borderTopRightRadius":
						case "borderBottomLeftRadius":
						case "borderBottomRightRadius":
							break;
						default:
							property = null;
							break;
					}
				} else if (/^margin/.test(property)) {
					// 外边距
					switch (property) {
						case "margin":
							value = value.split(/\s+/).slice(0, 4);
							switch (value.length) {
								case 1:
									value = value[0];
									break;
								case 2:
									property = ["marginVertical", "marginHorizontal"];
									break;
								case 3:
									property = ["marginTop", "marginHorizontal", "marginBottom"];
									break;
								case 4:
									property = ["marginTop", "marginRight", "marginBottom", "marginLeft"];
									break;
							}
							break;
					}
				} else if (/^padding/.test(property)) {
					// 内边距
					switch (property) {
						case "padding":
							value = value.split(/\s+/).slice(0, 4);
							switch (value.length) {
								case 1:
									value = value[0];
									break;
								case 2:
									property = ["paddingVertical", "paddingHorizontal"];
									break;
								case 3:
									property = ["paddingTop", "paddingHorizontal", "paddingBottom"];
									break;
								case 4:
									property = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"];
									break;
							}
							break;
					}
				} else if (property === "position") {
					if (!/^(absolute|relative|fixed|static)$/.test(value)) {
						value = null;
					}
				} else if (property === "display") {
					if (!/^(block|inline|none|flex|inline-flex)$/.test(value)) {
						value = null;
					}
				} else if (/^overflow/.test(property)) {
					if (property !== "overflow") {
						property = null;
					} else if (!/^(visible|hidden|auto)$/.test(value)) {
						value = null;
					}
				} else if (/^font/.test(property)) {
					switch (property) {
						case "font":
							var _value = value.replace(/"[^"]"/g, function (str) {
								return str.replace(/\s+/, "______");
							}).replace(/\s*(,|\/)\s*/g, "$1").split(/\s+/);
							value = [];
							property = [];
							_value.forEach(function (v, index) {
								if (/^([1-9]00|bold(er)?|inherit|initial|lighter|normal)$/.test(v)) {
									property.push("fontWeight");
									switch (v) {
										case "bolder":
											v = "bold";
											break;
										case "lighter":
											v = 100;
											break;
									}
									value.push(v);
								} else if (/^(inherit|initial|normal|italic|oblique)$/.test(v)) {
									if (v !== "oblique") {
										property.push("fontStyle");
										value.push(v);
									}
								} else if (/^\d+(px|rem|em|pt)$/.test(v)) {
									property.push("fontSize");
									value.push(v);
								} else if (/^\d+(px|rem|em|pt)\/\d/.test(v)) {
									property.push("fontSize");
									property.push("lineHeight");
									value = value.concat(v.split("/"));
								} else {
									property.push("fontFamily");
									value.push(v.replace(/_{6}/g, " "));
								}
							});
							break;
						case "fontSize":
						case "fontFamily":
						case "fontStyle":
						case "fontWeight":
							break;
						default:
							property = null;
					}
				} else if (property === "textShadow") {
					// 仅支持IOS
					value = value.split(/\s+/);
					value = [{
						width: value[0],
						height: value[1]
					}, value[2], value.slice(3).join(" ")];
			
					property = ["textShadowOffset", "textShadowRadius", "textShadowColor"];
				} else if (property === "boxShadow") {
					// 仅支持IOS
					// value = value.split(",");
					// if(value.length > 1){
					// 	console.warn("class: " + selector + " box-shadow 不支持多个阴影");
					// }
					//value = value[0].split(/\s+/);
					value = value.split(/\s+/);
					value = [{
						width: value[0],
						height: value[1]
					}, value[2], 1, value.slice(3).join(" ")];
			
					property = ["shadowOffset", "shadowRadius", "shadowOpacity", "shadowColor"];
				} else if (property === "transform") {
					(function () {
						var _value = [];
			
						value.replace(/(translate|translateX|translateY|scale|scaleX|scaleY|rotate|rotateX|rotateY|rotateZ|skew|skewX|skewY)\(\s*([^\(\)]+)\s*\)/g, function (all, key, value) {
							switch (key) {
								case "translate":
									value = value.split(/\s*,\s*/);
			
									_value.push({
										translateX: parseFloat(value[0])
									});
									_value.push({
										translateY: parseFloat(value[1])
									});
									break;
								case "skew":
									value = value.split(/\s*,\s*/);
			
									_value.push({
										skewX: value[0]
									});
									_value.push({
										skewY: value[1]
									});
									break;
								case "translateX":
								case "translateY":
								case "scale":
								case "scaleX":
								case "scaleY":
									_value.push(_defineProperty({}, key, parseFloat(value)));
									break;
								case "rotate":
								case "rotateX":
								case "rotateY":
								case "rotateZ":
								case "skewX":
								case "skewY":
									_value.push(_defineProperty({}, key, value));
									break;
							}
			
							return "";
						});
			
						value = _value;
					})();
				} else if (/^animation/.test(property)) {
					property = null;
				} else if (/^transition/.test(property)) {
					value = value.split(/\s*,\s*/).map(function (item) {
						item = item.split(/\s+/);
						var property = (item[0] || "all").replace(/\-[a-z]/g, function (str) {
							return str.replace("-").toUpperCase();
						});
			
						if (property === "all") {
							property = canAnimateProperties;
						} else if (canAnimateProperties.indexOf(property) !== -1) {
							property = [property];
						} else {
							property = null;
						}
			
						if (property) {
							return {
								property: property,
								duration: transTime(item[1]),
								timingFunction: item[2] || "ease",
								delay: transTime(item[3])
							};
						} else {
							return null;
						}
					}).filter(function (item) {
						return item !== null;
					});
				} else if (property === "pointerEvents") {
					if (!/^(auto|none|box\-none|box\-only)$/.test(value)) {
						value = null;
					}
				} else {
					switch (property) {
						case "backfaceVisibility":
						case "opacity":
						case "color":
						case "lineHeight":
						case "textAlign":
						case "top":
						case "right":
						case "bottom":
						case "left":
						case "width":
						case "height":
						case "flex":
						case "alignItems":
						case "alignSelf":
						case "flexDirection":
						case "flexWrap":
						case "justifyContent":
						case "whiteSpace":
							break;
						case "content":
							value = value.replace(/(^"|"$)/g, "");
							break;
						case "verticalAlign":
						case "visibility":
						case "zIndex":
						case "textIndent":
						case "minWidth":
						case "maxWidth":
						case "minHeight":
						case "maxHeight":
							property = null;
							break;
						default:
							property = null;
							break;
					}
				}
			
				return {
					property: property,
					value: isImportant ? value + " !important" : value
				};
			};
			
			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}
			
			// 匹配颜色
			var colorRegex = /(^|\s)(#([0-9a-f]{3}|[0-9a-f]{6})|(rgba?|hsla?)\([^\)]+\)|transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)(\s|$)/;
			
			var canAnimateProperties = "transform opacity width height top right bottom left borderRadius".split(" ");
			
			function transTime(time) {
				if (typeof time === "string") {
					if (/ms$/.test(time)) {
						return parseFloat(time);
					} else if (/s$/.test(time)) {
						return parseFloat(time) * 1000;
					}
				}
			
				return 0;
			}
			
			;
		},		// dist/tag/Box.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _slicedToArray = function () {
				function sliceIterator(arr, i) {
					var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;_e = err;
					} finally {
						try {
							if (!_n && _i["return"]) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}return _arr;
				}return function (arr, i) {
					if (Array.isArray(arr)) {
						return arr;
					} else if (Symbol.iterator in Object(arr)) {
						return sliceIterator(arr, i);
					} else {
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
				};
			}();
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _defineProperty(obj, key, value) {
				if (key in obj) {
					Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
				} else {
					obj[key] = value;
				}return obj;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			function transAnimateFun(name) {
				var ani = {
					"linear": _reactNative.Easing.linear,
					"ease": _reactNative.Easing.ease,
					"ease-in": _reactNative.Easing.in(_reactNative.Easing.ease),
					"ease-out": _reactNative.Easing.out(_reactNative.Easing.ease),
					"ease-in-out": _reactNative.Easing.inOut(_reactNative.Easing.ease)
				}[name];
			
				if (ani) {
					return ani;
				} else if (/^cubic\-bezier\(\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*\)/.test(name)) {
					var match = name.match(/^cubic\-bezier\(\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*\)/);
					return _reactNative.Easing.bezier(+match[1], +match[2], +match[3], +match[4]);
				} else {
					return _reactNative.Easing.ease;
				}
			}
			
			var Box = function (_Element) {
				_inherits(Box, _Element);
			
				function Box() {
					_classCallCheck(this, Box);
			
					var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this));
			
					_this.fixedLayerId = 0;
					return _this;
				}
			
				_createClass(Box, [{
					key: "clearFixedLayer",
					value: function clearFixedLayer() {
						// 之所以加Element.Nodes[this.bodyNodeId]判断，是因为在页面整体卸载的时候，body标签先卸载
						// 只有在页面不卸载，浮动组件单独卸载的时候，此处才生效
						if (this.fixedLayerId && this.bodyNodeId && _Element3.default.Nodes[this.bodyNodeId]) {
							_Element3.default.Nodes[this.bodyNodeId].target.removeLayer(this.fixedLayerId);
						}
					}
				}, {
					key: "componentWillUnmount",
					value: function componentWillUnmount() {
						_get(Box.prototype.__proto__ || Object.getPrototypeOf(Box.prototype), "componentWillUnmount", this).call(this);
						this.clearFixedLayer();
					}
			
					// 支持背景图，目前仅block元素支持背景图
			
				}, {
					key: "supportBackgroundImage",
					value: function supportBackgroundImage(style) {
						var backgroundImage;
						if (style.backgroundImage) {
							var backgroundImageProps = {};
			
							if (typeof style.backgroundImage === "string") {
								backgroundImageProps.source = {
									uri: style.backgroundImage
								};
							} else {
								backgroundImageProps.source = style.backgroundImage;
							}
			
							var containerStyle = {
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								overflow: "hidden"
							};
							var imageStyle = {};
			
							// 背景位置
							var backgroundPosition = void 0;
							if (backgroundPosition = style.backgroundPosition) {
								var _backgroundPosition$s = backgroundPosition.split(" "),
								    _backgroundPosition$s2 = _slicedToArray(_backgroundPosition$s, 2),
								    x = _backgroundPosition$s2[0],
								    y = _backgroundPosition$s2[1];
			
								if (x === "left" || x === "0%") {
									containerStyle.alignItems = "flex-start";
								} else if (x === "right" || x === "100%") {
									containerStyle.alignItems = "flex-end";
								} else if (x === "center" || x === "50%") {
									containerStyle.alignItems = "center";
								} else if (/^\-?\d+px$/.test(x)) {
									imageStyle.position = "absolute";
									imageStyle.left = parseFloat(x);
								}
			
								if (y === "top" || y === "0%") {
									containerStyle.justifyContent = "flex-start";
								} else if (y === "bottom" || y === "100%") {
									containerStyle.justifyContent = "flex-end";
								} else if (y === "center" || y === "50%") {
									containerStyle.justifyContent = "center";
								} else if (/^\-?\d+px$/.test(y)) {
									imageStyle.top = parseFloat(y);
								}
							}
			
							// 背景图尺寸
							var backgroundSize = void 0;
							if (backgroundSize = style.backgroundSize) {
								if (backgroundSize === "cover") {
									imageStyle.resizeMode = _reactNative.Image.resizeMode.cover;
									delete imageStyle.position;
									delete containerStyle.alignItems;
									delete containerStyle.justifyContent;
									imageStyle.flex = 1;
								} else if (backgroundSize === "contain") {
									imageStyle.resizeMode = _reactNative.Image.resizeMode.contain;
									delete imageStyle.position;
									delete containerStyle.alignItems;
									delete containerStyle.justifyContent;
									imageStyle.flex = 1;
								} else if (/100%\s+100%/.test(backgroundSize)) {
									imageStyle.resizeMode = _reactNative.Image.resizeMode.stretch;
									delete imageStyle.position;
									delete containerStyle.alignItems;
									delete containerStyle.justifyContent;
									imageStyle.flex = 1;
								} else {
									var _backgroundSize$split = backgroundSize.split(" "),
									    _backgroundSize$split2 = _slicedToArray(_backgroundSize$split, 2),
									    width = _backgroundSize$split2[0],
									    height = _backgroundSize$split2[1];
			
									if (width && height) {
										if (/^\d+px$/.test(width)) {
											imageStyle.width = parseFloat(width);
											if (height === "auto" && this.state && this.state.backgroundImageWidth && this.state.backgroundImageHeight) {
												imageStyle.height = this.state.backgroundImageHeight / this.state.backgroundImageWidth * imageStyle.width;
											}
										}
										if (/^\d+px$/.test(height)) {
											imageStyle.height = parseFloat(height);
											if (width === "auto" && this.state && this.state.backgroundImageWidth && this.state.backgroundImageHeight) {
												imageStyle.width = this.state.backgroundImageWidth / this.state.backgroundImageHeight * imageStyle.height;
											}
										}
									} else {
										//imageStyle.width = imageStyle.height = 10;
									}
								}
							} else if (this.state && this.state.backgroundImageWidth && this.state.backgroundImageHeight) {
								imageStyle.width = this.state.backgroundImageWidth;
								imageStyle.height = this.state.backgroundImageHeight;
							} else {
								//imageStyle.width = imageStyle.height = 10;
							}
			
							backgroundImage = _reactNative2.default.createElement(_reactNative.View, { style: containerStyle }, _reactNative2.default.createElement(_reactNative.Image, _extends({ style: imageStyle }, backgroundImageProps)));
						}
						return backgroundImage;
					}
			
					// 支持:before、:after伪元素
			
				}, {
					key: "supportBeforeAndAfter",
					value: function supportBeforeAndAfter() {
						var beforeStyle = this._style.beforeStyle;
						var beforeElement;
						if (beforeStyle) {
							if (beforeStyle.display === "block") {
								var viewStyle = (0, _filterStyle.createViewStyle)(beforeStyle);
								var backgroundImage = this.supportBackgroundImage(beforeStyle);
								if (beforeStyle.content) {
									beforeElement = _reactNative2.default.createElement(_reactNative.View, { style: viewStyle }, backgroundImage, _reactNative2.default.createElement(_reactNative.Text, { style: (0, _filterStyle.createTextStyle)(beforeStyle) }, beforeStyle.content));
								} else {
									beforeElement = _reactNative2.default.createElement(_reactNative.View, { style: viewStyle }, backgroundImage);
								}
							} else if (beforeStyle.display === "none") {
								beforeElement = null;
							} else {
								beforeElement = _reactNative2.default.createElement(_reactNative.Text, { style: (0, _filterStyle.createTextStyle)(beforeStyle) }, beforeStyle.content || " ");
							}
						}
			
						var afterStyle = this._style.afterStyle;
						var afterElement;
						if (afterStyle) {
							if (afterStyle.display === "block") {
								var _viewStyle = (0, _filterStyle.createViewStyle)(afterStyle);
								var _backgroundImage = this.supportBackgroundImage(afterStyle);
								if (afterStyle.content) {
									afterElement = _reactNative2.default.createElement(_reactNative.View, { style: _viewStyle }, _backgroundImage, _reactNative2.default.createElement(_reactNative.Text, { style: (0, _filterStyle.createTextStyle)(afterStyle) }, afterStyle.content));
								} else {
									afterElement = _reactNative2.default.createElement(_reactNative.View, { style: _viewStyle }, _backgroundImage);
								}
							} else if (afterStyle.display === "none") {
								afterElement = null;
							} else {
								afterElement = _reactNative2.default.createElement(_reactNative.Text, { style: (0, _filterStyle.createTextStyle)(afterStyle) }, afterStyle.content || " ");
							}
						}
			
						return {
							beforeElement: beforeElement,
							afterElement: afterElement
						};
					}
				}, {
					key: "supportAnimate",
					value: function supportAnimate(style, transition) {
						var _this2 = this;
			
						if (transition) {
							(function () {
								if (!_this2.animateProperties) {
									_this2.animateProperties = {};
								}
			
								var animateProperties = _this2.animateProperties;
								var animates = [];
			
								Object.keys(style).forEach(function (property) {
									var animate = transition.find(function (trans) {
										return trans.property.indexOf(property) !== -1;
									});
			
									if (animate) {
										(function () {
											var animateProperty = animateProperties[property];
			
											if (property === "transform") {
												(function () {
													if (!animateProperty) {
														animateProperty = animateProperties[property] = [];
													}
			
													var easing = transAnimateFun(animate.timingFunction);
													var duration = animate.duration;
			
													style[property].forEach(function (trans) {
														var property = void 0;
														for (property in trans) {
															break;
														}
			
														var ani = animateProperty.find(function (item) {
															return item[property];
														});
			
														if (ani) {
															animates.push(_reactNative.Animated.timing(ani[property], {
																toValue: trans[property],
																easing: easing,
																duration: duration
															}));
														} else {
															animateProperty.push(_defineProperty({}, property, new _reactNative.Animated.Value(trans[property])));
														}
													});
												})();
											} else {
												if (animateProperty) {
													animates.push(_reactNative.Animated.timing(animateProperty, {
														toValue: style[property],
														easing: transAnimateFun(animate.timingFunction),
														duration: animate.duration
													}));
												} else {
													animateProperties[property] = new _reactNative.Animated.Value(style[property]);
												}
											}
										})();
									}
								});
			
								if (animates.length) {
									_reactNative.Animated.parallel(animates).start();
								}
							})();
						}
			
						return Object.assign(style, this.animateProperties);
					}
			
					// 由于所有的文字必须在Text标签内，所以所有的文本子元素必须用Text标签包起来
					// 由于Text内部的Text才是inline，所以所有两个以上的inline子元素必须要用Text标签包起来
			
				}, {
					key: "packageText",
					value: function packageText(style, children, beforeElement, afterElement) {
						var self = this;
			
						var textStyle;
						var props;
			
						var packageText = function packageText(child, isPackage) {
							if (!textStyle) {
								textStyle = (0, _filterStyle.createInheritStyle)(style);
								textStyle = (0, _filterStyle.createTextStyle)(textStyle);
			
								// 兼容不换行属性
								props = {};
								if (style.whiteSpace === "nowrap") {
									props.numberOfLines = 1;
								}
							}
			
							if (isPackage) {
								// 安卓下，包装Text内部如果行高高于包装行高，会被截断
								var _textStyle = textStyle,
								    lineHeight = _textStyle.lineHeight,
								    otherStyle = _objectWithoutProperties(_textStyle, ["lineHeight"]);
			
								return _reactNative2.default.createElement(_reactNative.Text, _extends({ style: otherStyle }, props), child);
							} else {
								return _reactNative2.default.createElement(_reactNative.Text, _extends({ style: textStyle }, props), child);
							}
						};
			
						var lastTexts = [];
						var newChildren = [];
			
						var pushToNewChild = function pushToNewChild() {
							var length = lastTexts.length;
							if (length === 1) {
								newChildren.push(lastTexts[0]);
							} else if (length > 1) {
								newChildren.push(packageText(lastTexts, true));
							}
						};
			
						if (children) {
							if ((typeof children === "undefined" ? "undefined" : _typeof(children)) !== "object") {
								children = [children];
								if (beforeElement) {
									if (beforeElement.type === _reactNative.View) {
										newChildren.push(beforeElement);
									} else {
										children.unshift(beforeElement);
									}
								}
			
								if (afterElement) {
									if (afterElement.type === _reactNative.View) {
										newChildren.push(packageText(children));
										newChildren.push(afterElement);
									} else {
										children.push(afterElement);
										newChildren.push(packageText(children));
									}
								} else {
									newChildren.push(packageText(children));
								}
								//newChildren = packageText(children);
							} else {
								if (beforeElement) {
									if (beforeElement.type === _reactNative.View) {
										newChildren.push(beforeElement);
									} else {
										lastTexts.push(beforeElement);
									}
								}
								_reactNative2.default.Children.forEach(children, function (child, index) {
									if (!child) {
										return;
									}
			
									var isBlock = false;
									if ((typeof child === "undefined" ? "undefined" : _typeof(child)) !== "object") {
										child = packageText(child);
									} else {
										var _style = _Element3.default.matchStyle(child.props, self);
			
										_Element3.default.Nodes[child.props._id].style = _style;
			
										var display = _style.style.display;
										if (display === "block" || display === "flex" || display === "none" || !(child.type === Box || child.type.prototype instanceof Box)) {
											isBlock = true;
										}
									}
			
									if (isBlock) {
										pushToNewChild();
										newChildren.push(child);
										lastTexts = [];
									} else {
										lastTexts.push(child);
									}
								});
								if (afterElement) {
									if (afterElement.type === _reactNative.View) {
										pushToNewChild();
										newChildren.push(afterElement);
										lastTexts = [];
									} else {
										lastTexts.push(afterElement);
									}
								}
								pushToNewChild();
							}
						}
			
						return newChildren;
					}
				}, {
					key: "packageTextItem",
					value: function packageTextItem(style, children, beforeElement, afterElement) {
						var newChildren = [];
			
						var textStyle;
						var props;
			
						var packageText = function packageText(child, isPackage) {
							if (!textStyle) {
								textStyle = (0, _filterStyle.createInheritStyle)(style);
								textStyle = (0, _filterStyle.createTextStyle)(textStyle);
							}
			
							return _reactNative2.default.createElement(_reactNative.Text, _extends({ style: textStyle }, props), child);
						};
			
						if (children) {
							if ((typeof children === "undefined" ? "undefined" : _typeof(children)) !== "object") {
								newChildren.push(packageText(children));
							} else {
								_reactNative2.default.Children.forEach(children, function (child, index) {
									if (!child) {
										return;
									}
			
									if ((typeof child === "undefined" ? "undefined" : _typeof(child)) !== "object") {
										child = packageText(child);
									}
									newChildren.push(child);
								});
							}
						}
			
						if (beforeElement) {
							newChildren.unshift(beforeElement);
						}
						if (afterElement) {
							newChildren.push(afterElement);
						}
			
						return newChildren;
					}
				}, {
					key: "render",
					value: function render() {
						var _props = this.props,
						    children = _props.children,
						    css = _props.css,
						    style = _props.style,
						    props = _objectWithoutProperties(_props, ["children", "css", "style"]);
			
						if (this.state && this.state.children) {
							children = this.state.children;
						}
			
						style = this._style.style;
			
						if (this.state && this.state.activeing && this._style.activeStyle) {
							style = Object.assign({}, style, this._style.activeStyle);
						}
			
						// 处理背景图
						var backgroundImage = this.supportBackgroundImage(style);
						// 处理:before、:after伪元素
			
						var _supportBeforeAndAfte = this.supportBeforeAndAfter(),
						    beforeElement = _supportBeforeAndAfte.beforeElement,
						    afterElement = _supportBeforeAndAfte.afterElement;
						// 处理事件
			
			
						this._supportEvents(props);
			
						var display = style.display || "block";
			
						// css3动画
						var transition = style.transition;
			
						var renderNode = null;
			
						if (display === "block" || display === "flex") {
							var newChildren = void 0;
							if (display === "block") {
								newChildren = this.packageText(style, children, beforeElement, afterElement);
							} else {
								newChildren = this.packageTextItem(style, children, beforeElement, afterElement);
							}
			
							if (style.pointerEvents) {
								props.pointerEvents = style.pointerEvents;
							}
			
							if (props.onPress) {
								var onPress = props.onPress;
								delete props.onPress;
			
								var vstyle = (0, _filterStyle.createViewStyle)(style);
								var containerStyle = (0, _filterStyle.createTouchableStyle)(vstyle);
								var contentStyle = (0, _filterStyle.filterTouchableStyle)(vstyle);
								var Tag = _reactNative.View;
								if (transition) {
									contentStyle = this.supportAnimate(contentStyle, transition);
									Tag = _reactNative.Animated.View;
								}
								renderNode = _reactNative2.default.createElement(_reactNative.TouchableOpacity, { ref: "_native_node", style: containerStyle, onPress: onPress, activeOpacity: 1 }, _reactNative2.default.createElement(Tag, _extends({ style: contentStyle }, props), backgroundImage, newChildren));
							} else {
								var _vstyle = (0, _filterStyle.createViewStyle)(style);
								var _Tag = _reactNative.View;
								if (transition) {
									_vstyle = this.supportAnimate(_vstyle, transition);
									_Tag = _reactNative.Animated.View;
								}
								renderNode = _reactNative2.default.createElement(_Tag, _extends({ style: _vstyle }, props, { ref: "_native_node" }), backgroundImage, newChildren);
							}
						} else if (display === "inline") {
							if (style.whiteSpace === "nowrap") {
								props.numberOfLines = 1;
							}
			
							var tstyle = (0, _filterStyle.createTextStyle)(style);
							var _Tag2 = _reactNative.Text;
							if (transition) {
								tstyle = this.supportAnimate(tstyle, transition);
								_Tag2 = _reactNative.Animated.Text;
							}
			
							renderNode = _reactNative2.default.createElement(_Tag2, _extends({ style: tstyle }, props, { ref: "_native_node" }), beforeElement, children, afterElement);
						}
						// display: none 暂时不进行节点渲染，以达到隐藏的效果
			
						this.clearFixedLayer();
			
						if (style.position === "fixed") {
							if (this.bodyNodeId) {
								var body = _Element3.default.Nodes[this.bodyNodeId].target;
								this.fixedLayerId = body.addLayer(renderNode);
								// 由于ReactNative组件在卸载的时候，要联动卸载其所属于的合成组件，然后会有联动卸载
								// 当合成组件中的ReactNative组件移动到别处后，造成与合成组件不对应，卸载的时候会报错
								// 所以需要把移动的ReactNative组件所属于的合成组件指向新的合成组件
								// 但是这里用到了私有属性，不太稳定，此处是个坑
								renderNode._owner = body._reactInternalInstance;
								return null;
							} else {
								console.error("非body元素内的元素不支持‘position:fixed’特性");
								return renderNode;
							}
						} else {
							return renderNode;
						}
					}
				}, {
					key: "innerText",
					set: function set(children) {
						if (!this.state || children !== this.state.children) {
							this.setState({
								children: children
							});
						}
					},
					get: function get() {
						return (this.state ? this.state.children : "") || _typeof(this.props.children) ? this.props.children : "";
					}
				}, {
					key: "innerHTML",
					get: function get() {},
					set: function set(html) {}
				}]);
			
				return Box;
			}(_Element3.default);
			
			exports.default = Box;
		},		// dist/tag/A.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};
			
			var _Box2 = __inner_require__(8 /*dist/tag/Box.js*/);
			
			var _Box3 = _interopRequireDefault(_Box2);
			
			var _Layer = __inner_require__(10 /*dist/components/Layer.js*/);
			
			var _Layer2 = _interopRequireDefault(_Layer);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var A = function (_Box) {
				_inherits(A, _Box);
			
				function A(props) {
					_classCallCheck(this, A);
			
					var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this));
			
					_this.touchY = 0;
					return _this;
				}
			
				_createClass(A, [{
					key: "clickProxy",
					value: function clickProxy(hander) {
						var _this2 = this;
			
						var href = this.props.href;
						if (href) {
							var _ret = function () {
								var target = _this2.props.target;
								var onHide = _this2.props.onHide;
								var util = _this2.props._util;
								var navigator = _this2.props._navigator;
								return {
									v: function v(e) {
										var result = hander(e);
										if (result !== false) {
											if (target === "_layer") {
												//Layer.open(util.resolve(href)).onHide(onHide);
											} else {
												var params = void 0;
												if (_this2.props.title) {
													params = {
														title: _this2.props.title,
														isNaviHidden: false
													};
												} else {
													params = {
														isNaviHidden: true
													};
												}
			
												if (target === "_replace") {
													navigator.replace(util.resolve(href), params);
												} else {
													navigator.go(util.resolve(href), params);
												}
											}
										}
									}
								};
							}();
			
							if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
						} else {
							return function (e) {
								hander(e);
							};
						}
					}
				}, {
					key: "touchStartProxy",
					value: function touchStartProxy(hander) {
						var _this3 = this;
			
						return function (e) {
							_this3.setState({
								activeing: true
							});
							_this3.touchY = e.nativeEvent.pageY;
							_this3.isFirstMove = true;
							hander(e);
						};
					}
				}, {
					key: "touchMoveProxy",
					value: function touchMoveProxy(hander) {
						var _this4 = this;
			
						return function (e) {
							if (_this4.state && _this4.state.activeing && e.nativeEvent.pageY !== _this4.touchY) {
								_this4.setState({
									activeing: false
								});
							}
			
							hander(e);
						};
					}
				}, {
					key: "touchEndProxy",
					value: function touchEndProxy(hander) {
						var _this5 = this;
			
						return function (e) {
							if (_this5.state && _this5.state.activeing) {
								_this5.setState({
									activeing: false
								});
							}
							hander(e);
						};
					}
				}, {
					key: "_supportEvents",
					value: function _supportEvents(props) {
						if (this.props.href && !props.onClick) {
							props.onClick = function () {};
						}
			
						if (this._style.activeStyle) {
							if (!props.onTouchStart) {
								props.onTouchStart = function () {};
							}
			
							if (!props.onTouchMove) {
								props.onTouchMove = function () {};
							}
			
							if (!props.onTouchEnd) {
								props.onTouchEnd = function () {};
							}
						}
			
						return _get(A.prototype.__proto__ || Object.getPrototypeOf(A.prototype), "_supportEvents", this).call(this, props);
					}
				}]);
			
				return A;
			}(_Box3.default);
			
			exports.default = A;
		},		// dist/components/Layer.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.Layer = exports.LayerClass = exports.Mode = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _dec, _class, _dec2, _class2;
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _event = __inner_require__(11 /*dist/lib/event.js*/);
			
			var _event2 = _interopRequireDefault(_event);
			
			var _LayerContainer = __inner_require__(12 /*dist/components/LayerContainer.js*/);
			
			var _LayerContainer2 = _interopRequireDefault(_LayerContainer);
			
			var _readyRun = __inner_require__(16 /*dist/lib/readyRun.js*/);
			
			var _readyRun2 = _interopRequireDefault(_readyRun);
			
			var _StaticFactory = __inner_require__(17 /*dist/components/StaticFactory.js*/);
			
			var _StaticFactory2 = _interopRequireDefault(_StaticFactory);
			
			var _enjoyCommonSupport = require("enjoy-common-support@0.2/dist/index.js");
			
			var _Screen = __inner_require__(15 /*dist/tools/Screen.js*/);
			
			var _Screen2 = _interopRequireDefault(_Screen);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			// 打开、关闭动画类型
			var Mode = exports.Mode = {
				// 底部滑入滑出
				downSide: 1,
				// 顶部滑入滑出
				upSide: 2,
				// 左侧滑入滑出
				leftSide: 3,
				// 右侧滑入滑出
				rightSide: 4,
				// 缩小进放大出
				scaleUp: 5,
				// 放大进缩小出
				scaleDown: 6,
				// 渐隐进出
				opacity: 7
			};
			
			// 背景蒙版总透明度
			var ACTIVE_BG_OPACITY = 0.6;
			
			// 弹层类，可以进行实例化操作
			var LayerClass = exports.LayerClass = (_dec = (0, _enjoyCommonSupport.events)(["ready", "memory once"], "show", "hide"), _dec(_class = function () {
				function LayerClass(component) {
					var _this = this;
			
					_classCallCheck(this, LayerClass);
			
					this.waitLayer = new _readyRun2.default();
			
					// 初始化时向弹层容器注册一个弹层组件
					_LayerContainer2.default.add(this, function (layer) {
						_this.layer = layer;
						_this.waitLayer.ready();
			
						layer.onShow(function () {
							_this.fireShow();
						}).onHide(function () {
							_this.fireHide.apply(_this, arguments);
						});
					}).then(function (layerIndex) {
						_this.layerIndex = layerIndex;
					});
			
					if (component) {
						this.fill(component);
					}
				}
			
				_createClass(LayerClass, [{
					key: "destroy",
					value: function destroy() {
						_LayerContainer2.default.remove(this.layerIndex);
					}
				}, {
					key: "fill",
					value: function fill(component) {
						var _this2 = this;
			
						this.waitLayer.ready(function () {
							_reactNative.InteractionManager.runAfterInteractions(function () {
								_this2.layer.fill(component, function () {
									_this2.fireReady();
								});
							});
						});
					}
				}, {
					key: "show",
					value: function show(mode) {
						var _this3 = this;
			
						this.waitLayer.ready(function () {
							_this3.onReady(function () {
								_this3.layer.show(mode);
							});
						});
					}
				}, {
					key: "hide",
					value: function hide() {
						var _this4 = this;
			
						for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
							params[_key] = arguments[_key];
						}
			
						this.waitLayer.ready(function () {
							var _layer;
			
							(_layer = _this4.layer).hide.apply(_layer, params);
						});
					}
				}, {
					key: "open",
					value: function open(component, mode) {
						var _this5 = this;
			
						this.waitLayer.ready(function () {
							_this5.layer.open(component, mode);
						});
					}
				}, {
					key: "close",
					value: function close() {
						var _this6 = this;
			
						for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
							params[_key2] = arguments[_key2];
						}
			
						this.waitLayer.ready(function () {
							var _layer2;
			
							(_layer2 = _this6.layer).close.apply(_layer2, params);
						});
					}
				}, {
					key: "component",
					get: function get() {
						if (this.layer) {
							return this.layer.refs.active.refs.component;
						}
			
						return null;
					}
				}]);
			
				return LayerClass;
			}()) || _class);
			
			// 弹层组件
			
			var Layer = exports.Layer = (_dec2 = (0, _enjoyCommonSupport.events)("show", "hide"), _dec2(_class2 = function (_React$Component) {
				_inherits(Layer, _React$Component);
			
				function Layer() {
					_classCallCheck(this, Layer);
			
					// 打开/关闭方式
					var _this7 = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this));
			
					_this7.activeMode = Mode.downSide;
					// 活动组件的尺寸
					_this7.activeSize = null;
			
					_this7.state = {
						// 之前已打开的所有组件列表（不算最后一个打开的）
						components: [],
						// 活动中的组件
						activeComponent: null,
						// 活动中的组件的X坐标
						activeX: new _reactNative.Animated.Value(0),
						// 活动中的组件的Y坐标
						activeY: new _reactNative.Animated.Value(0),
						// 活动中的组件的opacity
						activeOpacity: new _reactNative.Animated.Value(1),
						// 活动中的组件的scale
						activeScale: new _reactNative.Animated.Value(1),
						// 背景透明度
						activeBgOpacity: new _reactNative.Animated.Value(0)
					};
					return _this7;
				}
			
				//isOpen = false
			
				_createClass(Layer, [{
					key: "componentDidMount",
					value: function componentDidMount() {
						// 弹层组件挂载成功后，传出自己，用于在弹层类的实例中使用
						this.props.hander && this.props.hander(this);
					}
			
					// 添加一个组件到弹层
			
				}, {
					key: "fill",
					value: function fill(component, onSync) {
						var event = (0, _event2.default)(["show", "hide"]);
			
						var components = this.state.components;
			
						if (this.state.activeComponent) {
							components.push(this.state.activeComponent);
						}
			
						this.activeSize = null;
			
						this.setState({
							components: components,
							activeComponent: {
								component: (0, _StaticFactory2.default)(component),
								event: event
							}
						}, onSync);
			
						return event;
					}
			
					// 设置活动组件的尺寸
			
				}, {
					key: "onLayout",
					value: function onLayout(e) {
						this.activeSize = e.nativeEvent.layout;
					}
			
					// 展示弹层
			
				}, {
					key: "show",
					value: function show(mode) {
						if (mode) {
							this.activeMode = mode;
						}
			
						this.resetOpenAnimate();
			
						//this.isOpen = true;
			
						this.refs.container && this.refs.container.setNativeProps({
							style: [styles.layer, {
								transform: [{
									translateX: 0
								}]
							}],
							pointerEvents: "auto"
						});
			
						this.state.activeComponent.event.fire.apply(this.state.activeComponent.event, ["show"]);
						this.fireShow();
			
						this.runOpenAnimate();
					}
			
					// 隐藏弹层
			
				}, {
					key: "hide",
					value: function hide() {
						var _this8 = this;
			
						for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
							params[_key3] = arguments[_key3];
						}
			
						this.resetCloseAnimate();
			
						var components = this.state.components;
			
						if (!this.state.activeComponent) {
							this.setState({
								activeComponent: components.pop(),
								components: components
							});
						}
			
						this.state.activeComponent.event.fire.apply(this.state.activeComponent.event, ["hide"].concat(params));
			
						this.runCloseAnimate();
			
						if (components.length === 0) {
							this.refs.container && this.refs.container.setNativeProps({
								pointerEvents: "none"
							});
			
							_reactNative.InteractionManager.runAfterInteractions(function () {
								//this.isOpen = false;
								_this8.refs.container && _this8.refs.container.setNativeProps({
									style: [styles.layer, {
										transform: [{
											translateX: 10000
										}]
									}]
								});
								_this8.fireHide.apply(_this8, params);
							});
						}
					}
			
					// 添加一个组件并展示出来
			
				}, {
					key: "open",
					value: function open(component, mode) {
						var _this9 = this;
			
						return this.fill(component, function () {
							_this9.show(mode);
						});
					}
			
					// 隐藏弹层并删除活动组件
			
				}, {
					key: "close",
					value: function close() {
						var _this10 = this;
			
						this.hide.apply(this, arguments);
			
						_reactNative.InteractionManager.runAfterInteractions(function () {
							_this10.setState({
								activeComponent: null
							});
						});
					}
				}, {
					key: "resetOpenAnimate",
					value: function resetOpenAnimate() {
						var windowSize = _Screen2.default.size;
						var componentSize = this.activeSize || windowSize;
						componentSize.width = componentSize.width || windowSize.width;
						componentSize.height = componentSize.height || windowSize.height;
			
						switch (this.activeMode) {
							case Mode.downSide:
								this.state.activeY.setValue(windowSize.height);
								break;
							case Mode.upSide:
								this.state.activeY.setValue(-componentSize.height);
								break;
							case Mode.leftSide:
								this.state.activeX.setValue(-componentSize.width);
								break;
							case Mode.rightSide:
								this.state.activeX.setValue(windowSize.width);
								break;
							case Mode.scaleUp:
								this.state.activeX.setValue(windowSize.width - componentSize.width);
								this.state.activeY.setValue(windowSize.height - componentSize.height);
								this.state.activeOpacity.setValue(0);
								this.state.activeScale.setValue(2);
								break;
							case Mode.scaleDown:
								this.state.activeX.setValue(0);
								this.state.activeY.setValue(0);
								this.state.activeOpacity.setValue(0);
								this.state.activeScale.setValue(0);
								break;
							case Mode.opacity:
								this.state.activeOpacity.setValue(0);
								break;
						}
			
						this.state.activeBgOpacity.setValue(0);
					}
				}, {
					key: "runOpenAnimate",
					value: function runOpenAnimate() {
						var windowSize = _Screen2.default.size;
						var componentSize = this.activeSize || windowSize;
						componentSize.width = componentSize.width || windowSize.width;
						componentSize.height = componentSize.height || windowSize.height;
			
						var animates = [];
			
						switch (this.activeMode) {
							case Mode.downSide:
								animates = [_reactNative.Animated.timing(this.state.activeY, {
									toValue: windowSize.height - componentSize.height,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.upSide:
								animates = [_reactNative.Animated.timing(this.state.activeY, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.leftSide:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.rightSide:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: windowSize.width - componentSize.width,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.scaleUp:
							case Mode.scaleDown:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: (windowSize.width - componentSize.width) / 2,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeY, {
									toValue: (windowSize.height - componentSize.height) / 2,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeOpacity, {
									toValue: 1,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeScale, {
									toValue: 1,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.opacity:
								animates = [_reactNative.Animated.timing(this.state.activeOpacity, {
									toValue: 1,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
						}
			
						// 如果弹出的层不能完全充满屏幕，则显示背景遮罩
						if (componentSize.width < windowSize.width || componentSize.height < windowSize.height) {
							animates.push(_reactNative.Animated.timing(this.state.activeBgOpacity, {
								toValue: ACTIVE_BG_OPACITY,
								easing: _reactNative.Easing.out(_reactNative.Easing.exp)
							}));
						}
			
						_reactNative.Animated.parallel(animates).start();
					}
				}, {
					key: "resetCloseAnimate",
					value: function resetCloseAnimate() {
						var windowSize = _Screen2.default.size;
						var componentSize = this.activeSize || windowSize;
						componentSize.width = componentSize.width || windowSize.width;
						componentSize.height = componentSize.height || windowSize.height;
			
						switch (this.activeMode) {
							case Mode.downSide:
								this.state.activeY.setValue(windowSize.height - componentSize.height);
								break;
							case Mode.upSide:
								this.state.activeY.setValue(0);
								break;
							case Mode.leftSide:
								this.state.activeX.setValue(0);
								break;
							case Mode.rightSide:
								this.state.activeX.setValue(windowSize.width - componentSize.width);
								break;
							case Mode.scaleUp:
							case Mode.scaleDown:
								this.state.activeX.setValue((windowSize.width - componentSize.width) / 2);
								this.state.activeY.setValue((windowSize.height - componentSize.height) / 2);
								this.state.activeOpacity.setValue(1);
								this.state.activeScale.setValue(1);
								break;
							case Mode.opacity:
								this.state.activeOpacity.setValue(1);
								break;
						}
			
						// 如果弹出的层不能完全充满屏幕，则显示背景遮罩
						if (componentSize.width < windowSize.width || componentSize.height < windowSize.height) {
							this.state.activeBgOpacity.setValue(ACTIVE_BG_OPACITY);
						}
					}
				}, {
					key: "runCloseAnimate",
					value: function runCloseAnimate() {
						var windowSize = _Screen2.default.size;
						var componentSize = this.activeSize || windowSize;
						componentSize.width = componentSize.width || windowSize.width;
						componentSize.height = componentSize.height || windowSize.height;
			
						var _Dimensions$get = _reactNative.Dimensions.get('window'),
						    allHeight = _Dimensions$get.height;
			
						var animates = [];
			
						switch (this.activeMode) {
							case Mode.downSide:
								animates = [_reactNative.Animated.timing(this.state.activeY, {
									// 由于有一种情况，当弹层关闭的时候，会隐藏底部tab，以至于关闭的位置不对
									// 暂时加上TAB的高度，后面想想怎么改
									toValue: Math.min(allHeight, windowSize.height + 44),
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.upSide:
								animates = [_reactNative.Animated.timing(this.state.activeY, {
									toValue: -componentSize.height,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.leftSide:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: -componentSize.width,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.rightSide:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: windowSize.width,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.scaleUp:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: windowSize.width - componentSize.width,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeY, {
									toValue: windowSize.height - componentSize.height,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeOpacity, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeScale, {
									toValue: 2,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.scaleDown:
								animates = [_reactNative.Animated.timing(this.state.activeX, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeY, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeOpacity, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								}), _reactNative.Animated.timing(this.state.activeScale, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
							case Mode.opacity:
								animates = [_reactNative.Animated.timing(this.state.activeOpacity, {
									toValue: 0,
									easing: _reactNative.Easing.out(_reactNative.Easing.exp)
								})];
								break;
						}
			
						// 如果弹出的层不能完全充满屏幕，则显示背景遮罩
						if (componentSize.width < windowSize.width || componentSize.height < windowSize.height) {
							animates.push(_reactNative.Animated.timing(this.state.activeBgOpacity, {
								toValue: 0,
								easing: _reactNative.Easing.out(_reactNative.Easing.exp)
							}));
						}
			
						_reactNative.Animated.parallel(animates).start();
					}
				}, {
					key: "render",
					value: function render() {
						var _this11 = this;
			
						var backgroundLayer = this.state.components.map(function (component) {
							return _reactNative2.default.createElement(_reactNative.View, { style: styles.layer }, _reactNative2.default.createElement(component.component, { layer: _this11 }));
						});
			
						var ActiveComponent = this.state.activeComponent ? this.state.activeComponent.component : _reactNative.View;
			
						var height = _Screen2.default.size.height;
			
						var activeBg = _reactNative2.default.createElement(_reactNative.TouchableWithoutFeedback, { onPress: this.hide.bind(this) }, _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [styles.layer, {
								backgroundColor: "#000",
								opacity: this.state.activeBgOpacity
							}] }));
			
						return _reactNative2.default.createElement(_reactNative.Animated.View, {
							ref: "container",
							style: [styles.layer, {
								// height: height,
								// top: -height,
								transform: [{
									translateX: 10000
								}]
							}]
							// style={styles.layer}
							, pointerEvents: "none" }, backgroundLayer, activeBg, _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [styles.layer, {
								transform: [{
									translateX: this.state.activeX
								}, {
									translateY: this.state.activeY
								}, {
									scale: this.state.activeScale
								}],
								opacity: this.state.activeOpacity
							}] }, _reactNative2.default.createElement(ActiveComponent, { ref: "active", layer: this, onLayout: this.onLayout.bind(this) })));
					}
				}]);
			
				return Layer;
			}(_reactNative2.default.Component)) || _class2);
			
			var styles = _reactNative.StyleSheet.create({
				layer: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					backgroundColor: "transparent"
				}
			});
			
			var layer = new LayerClass();
			
			exports.default = {
				open: function open(component, mode) {
					if (layer) {
						return layer.open(component, mode);
					}
				},
				close: function close() {
					if (layer) {
						layer.close.apply(layer, arguments);
					}
				},
				LayerClass: LayerClass,
				Mode: Mode
			};
		},		// dist/lib/event.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (eventNames) {
				var event = {};
				var handlers = {};
			
				eventNames.forEach(function (eventName) {
					handlers[eventName] = [];
			
					event["on" + eventName.replace(/(^[a-z]|\-[a-z])/g, function (char) {
						return char.replace("-", "").toUpperCase();
					})] = function (handler) {
						handlers[eventName].push(handler);
						return this;
					};
				});
			
				event.fire = function (eventName) {
					var argus = Array.prototype.splice.call(arguments, 1);
			
					handlers[eventName].forEach(function (handler) {
						handler.apply(null, argus);
					});
					return this;
				};
			
				return event;
			};
			
			;
		},		// dist/components/LayerContainer.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.LayerContainer = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _Container = __inner_require__(13 /*dist/components/Container.js*/);
			
			var _Container2 = _interopRequireDefault(_Container);
			
			var _Layer = __inner_require__(10 /*dist/components/Layer.js*/);
			
			var _readyRun = __inner_require__(16 /*dist/lib/readyRun.js*/);
			
			var _readyRun2 = _interopRequireDefault(_readyRun);
			
			var _Screen = __inner_require__(15 /*dist/tools/Screen.js*/);
			
			var _Screen2 = _interopRequireDefault(_Screen);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var layerContainer;
			var waitLayerContainer = new _readyRun2.default();
			
			// 所有弹出层Layer的包裹容器，挂载在Container节点下
			
			var LayerContainer = exports.LayerContainer = function (_React$Component) {
				_inherits(LayerContainer, _React$Component);
			
				function LayerContainer() {
					_classCallCheck(this, LayerContainer);
			
					var _this = _possibleConstructorReturn(this, (LayerContainer.__proto__ || Object.getPrototypeOf(LayerContainer)).call(this));
			
					_this.state = {
						layers: []
					};
					return _this;
				}
			
				_createClass(LayerContainer, [{
					key: "componentDidMount",
					value: function componentDidMount() {
						layerContainer = this;
						waitLayerContainer.ready();
					}
				}, {
					key: "add",
					value: function add(layer, hander) {
						var index = this.state.layers.length;
			
						this.state.layers.push({
							layer: layer,
							component: _reactNative2.default.createElement(_Layer.Layer, { key: index, hander: hander })
						});
			
						this.setState({
							layers: this.state.layers
						});
			
						return index;
					}
				}, {
					key: "remove",
					value: function remove(index) {
						this.state.layers[index] = null;
			
						this.setState({
							layers: this.state.layers
						});
					}
				}, {
					key: "render",
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.View, { style: styles.container, pointerEvents: "box-none" }, this.state.layers.filter(function (layer) {
							return layer !== null;
						}).map(function (layer) {
							return layer.component;
						}));
					}
				}]);
			
				return LayerContainer;
			}(_reactNative2.default.Component);
			
			var styles = _reactNative.StyleSheet.create({
				container: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					overflow: "hidden",
					backgroundColor: "transparent"
				}
			});
			
			_Container2.default.appendComponent(_reactNative2.default.createElement(LayerContainer, null), 10);
			
			exports.default = {
				add: function add(layer, hander) {
					return new Promise(function (resolve, reject) {
						waitLayerContainer.ready(function () {
							resolve(layerContainer.add(layer, hander));
						});
					});
				},
				remove: function remove(index) {
					waitLayerContainer.ready(function () {
						layerContainer.remove(index);
					});
				}
			};
		},		// dist/components/Container.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _Document = __inner_require__(14 /*dist/tools/Document.js*/);
			
			var _Document2 = _interopRequireDefault(_Document);
			
			var _Screen = __inner_require__(15 /*dist/tools/Screen.js*/);
			
			var _Screen2 = _interopRequireDefault(_Screen);
			
			var _readyRun = __inner_require__(16 /*dist/lib/readyRun.js*/);
			
			var _readyRun2 = _interopRequireDefault(_readyRun);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var container;
			var waitContainer = new _readyRun2.default();
			
			var Container = function (_Element) {
				_inherits(Container, _Element);
			
				function Container() {
					_classCallCheck(this, Container);
			
					var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));
			
					_this._attached_components = null;
			
					_Document2.default.documentElement = _this;
					return _this;
				}
			
				_createClass(Container, [{
					key: "componentWillMount",
					value: function componentWillMount() {
						_get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), "componentWillMount", this).call(this);
						container = this;
						waitContainer.ready();
					}
				}, {
					key: "onLayout",
					value: function onLayout(e) {
						_Screen2.default.size = {
							width: e.nativeEvent.layout.width,
							height: e.nativeEvent.layout.height
						};
					}
			
					// 向页面底部附加组件
			
				}, {
					key: "appendComponent",
					value: function appendComponent(component, zIndex) {
						zIndex = zIndex || 0;
						if (!this._attached_components) {
							this._attached_components = [];
						}
			
						this._attached_components.push({
							component: component,
							zIndex: zIndex
						});
			
						this._attached_components.sort(function (c1, c2) {
							return c1.zIndex - c2.zIndex;
						});
			
						this.setState({
							_attached_components: this._attached_components.map(function (component) {
								return component.component;
							})
						});
					}
				}, {
					key: "render",
			
					// {
					// 	Platform.OS === "android" ?
					// 		<StatusBar
					// 			hidden={true}
					// 			/>
					// 		:
					// 		null
					// }
			
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.View, {
							ref: "_native_node",
							style: styles.container,
							onLayout: this.onLayout }, this.props.children, this.state._attached_components);
					}
				}], [{
					key: "appendComponent",
					value: function appendComponent(component, zIndex) {
						waitContainer.ready(function () {
							container.appendComponent(component, zIndex);
						});
					}
				}]);
			
				return Container;
			}(_Element3.default);
			
			exports.default = Container;
			
			var styles = _reactNative.StyleSheet.create({
				container: {
					flex: 1
				}
			});
		},		// dist/tools/Document.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = {
				documentElement: null,
				getElementById: function getElementById() {},
				getElementsByTagName: function getElementsByTagName() {},
				getElementsByClassName: function getElementsByClassName() {},
				createElement: function createElement() {}
			};
		},		// dist/tools/Screen.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _enjoyCommonSupport = require("enjoy-common-support@0.2/dist/index.js");
			
			var size = {
				width: 0,
				height: 0
			};
			
			exports.default = (0, _enjoyCommonSupport.events)("resize")({
				// 屏幕的像素密度
				pixelRatio: _reactNative.PixelRatio.get(),
				// 屏幕尺寸
				// 在Container组件初始化的时候设置
				get size() {
					return size;
				},
				set size(_size) {
					size = _size;
			
					this.fireResize(size);
				}
			});
		},		// dist/lib/readyRun.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			var ReadyRun = function () {
				function ReadyRun() {
					_classCallCheck(this, ReadyRun);
			
					this.isReady = false;
					this.waitings = [];
				}
			
				_createClass(ReadyRun, [{
					key: "ready",
					value: function ready(fn) {
						if (fn) {
							if (this.isReady) {
								fn();
							} else {
								this.waitings.push(fn);
							}
						} else {
							this.isReady = true;
							if (this.waitings.length) {
								this.waitings.forEach(function (fn) {
									fn();
								});
								this.waitings = [];
							}
						}
					}
				}]);
			
				return ReadyRun;
			}();
			
			exports.default = ReadyRun;
		},		// dist/components/StaticFactory.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			exports.default = StaticFactory;
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			function StaticFactory(Component) {
				return function (_React$Component) {
					_inherits(StaticComponent, _React$Component);
			
					function StaticComponent() {
						_classCallCheck(this, StaticComponent);
			
						return _possibleConstructorReturn(this, (StaticComponent.__proto__ || Object.getPrototypeOf(StaticComponent)).apply(this, arguments));
					}
			
					_createClass(StaticComponent, [{
						key: "shouldComponentUpdate",
						value: function shouldComponentUpdate(nextProps, nextState) {
							return false;
						}
					}, {
						key: "render",
						value: function render() {
							return _reactNative2.default.createElement(Component, _extends({ ref: "component" }, this.props));
						}
					}]);
			
					return StaticComponent;
				}(_reactNative2.default.Component);
			}
		},		// dist/tag/View.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var View = function (_Element) {
				_inherits(View, _Element);
			
				function View() {
					_classCallCheck(this, View);
			
					return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));
				}
			
				_createClass(View, [{
					key: "render",
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.View, this.props, this.props.children);
					}
				}]);
			
				return View;
			}(_Element3.default);
			
			exports.default = View;
		},		// dist/tag/Text.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element2 = _interopRequireDefault(_Element);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Text = function (_React$Component) {
				_inherits(Text, _React$Component);
			
				function Text() {
					_classCallCheck(this, Text);
			
					return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));
				}
			
				_createClass(Text, [{
					key: "render",
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.Text, this.props, this.props.children);
					}
				}]);
			
				return Text;
			}(_reactNative2.default.Component);
			
			exports.default = Text;
		},		// dist/tag/Label.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Box2 = __inner_require__(8 /*dist/tag/Box.js*/);
			
			var _Box3 = _interopRequireDefault(_Box2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Label = function (_Box) {
				_inherits(Label, _Box);
			
				function Label() {
					_classCallCheck(this, Label);
			
					return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this));
				}
			
				_createClass(Label, [{
					key: "clickProxy",
					value: function clickProxy(hander) {
						return function (e) {
							hander(e);
						};
					}
				}]);
			
				return Label;
			}(_Box3.default);
			
			exports.default = Label;
		},		// dist/tag/Image.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Image = function (_Element) {
				_inherits(Image, _Element);
			
				function Image() {
					_classCallCheck(this, Image);
			
					return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
				}
			
				_createClass(Image, [{
					key: "shouldComponentUpdate",
			
					// constructor() {
					// 	super();
			
					// 	this.state = {
					// 		naturalWidth: 0,
					// 		naturalHeight: 0,
					// 		width: 0,
					// 		height: 0
					// 	};
					// }
			
					// getSize(){
					// 	if(/^(http:|https:)?\/\//.test(this.props.src)){
					// 		ReactImage.getSize && ReactImage.getSize(this.props.src, (width, height) => {
					// 			this.setState({
					// 				naturalWidth: width,
					// 				naturalHeight: height
					// 			});
					// 		});
					// 	}
					// }
			
					// componentWillMount(){
					// 	super.componentWillMount();
					// 	//this.getSize();
					// }
			
					// componentWillReceiveProps(nextProps){
					// 	super.componentWillReceiveProps(nextProps);
					// 	if(nextProps.src !== this.props.src){
					// 		this.setState({
					// 			naturalWidth: 0,
					// 			naturalHeight: 0,
					// 			width: 0,
					// 			height: 0
					// 		});
					// 		//this.getSize();
					// 	}
					// }
			
					value: function shouldComponentUpdate(nextProps, nextState) {
						return nextProps.src !== this.props.src;
			
						// var currentState = this.state;
						// var currentProps = this.props;
			
						// if(nextProps.src !== currentProps.src ||
						// 	(nextState.naturalWidth !== currentState.naturalWidth ||
						// 	nextState.naturalHeight !== currentState.naturalHeight ||
						// 	nextState.width !== currentState.width ||
						// 	nextState.height !== currentState.height) &&
						// 	nextState.naturalWidth &&
						// 	nextState.naturalHeight &&
						// 	nextState.width &&
						// 	nextState.height){
						// 	// 暂时这么比较，其实还需要比较其他属性
						// 	return true;
						// }else{
						// 	return false;
						// }
					}
				}, {
					key: "render",
					value: function render() {
						var _props = this.props,
						    css = _props.css,
						    src = _props.src,
						    style = _props.style,
						    _util = _props._util,
						    props = _objectWithoutProperties(_props, ["css", "src", "style", "_util"]);
			
						if (!src) {
							return null;
						}
			
						props.style = [(0, _filterStyle.createImageStyle)(this._style.style), {
							flex: 1
						}];
			
						props.resizeMode = props.resizeMode || "cover";
			
						if (/^(http:|https:)?\/\//.test(src)) {
							props.source = { uri: src };
						} else {
							props.source = _util.require(src);
						}
			
						return _reactNative2.default.createElement(_reactNative.Image, _extends({}, props, { ref: "_native_node" }));
					}
			
					// render() {
					// 	var {css, src, style, _util, ...props} = this.props;
			
					// 	props.style = [createImageStyle(this.style.style), {
					// 		flex: 1
					// 	}];
			
					// 	if(/^(http:|https:)?\/\//.test(src)){
					// 		let {naturalWidth, naturalHeight, width, height} = this.state;
					// 		if(width){
					// 			props.source = { uri: src, width: width, height: height };
					// 		}else{
					// 			props.source = { uri: src };
					// 		}
					// 	}else{
					// 		props.source = _util.require(src);
					// 	}
			
					// 	return <ReactImage
					// 				onLayout={(e)=>{
					// 					var {width, height} = e.nativeEvent.layout;
					// 					this.setState({
					// 						width: width,
					// 						height: height
					// 					});
					// 				}}
					// 				{...props} />
					// }
			
				}]);
			
				return Image;
			}(_Element3.default);
			
			exports.default = Image;
		},		// dist/tag/Input.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Input = function (_Element) {
				_inherits(Input, _Element);
			
				function Input(props) {
					_classCallCheck(this, Input);
			
					var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
			
					_this.value = "";
			
					_this.value = props.value;
					return _this;
				}
			
				_createClass(Input, [{
					key: "focus",
					value: function focus() {
						this.refs.input.focus();
					}
				}, {
					key: "blur",
					value: function blur() {
						this.refs.input.blur();
					}
				}, {
					key: "render",
					value: function render() {
						var _this2 = this;
			
						var _props = this.props,
						    css = _props.css,
						    style = _props.style,
						    value = _props.value,
						    _onFocus = _props.onFocus,
						    _onBlur = _props.onBlur,
						    props = _objectWithoutProperties(_props, ["css", "style", "value", "onFocus", "onBlur"]);
			
						var containerStyle = (0, _filterStyle.createViewStyle)(this._style.style);
						var inputStyle = (0, _filterStyle.createInheritStyle)(this._style.style);
			
						if (_reactNative.Platform.OS === "android") {
							inputStyle.paddingTop = 0;
							inputStyle.paddingBottom = 0;
							delete inputStyle.lineHeight;
							props.underlineColorAndroid = "transparent";
							props.textAlignVertical = "center";
						}
			
						var focusStyle = this._style.focusStyle;
						var focusContainerStyle, focusInputStyle;
						if (focusStyle) {
							focusContainerStyle = (0, _filterStyle.createViewStyle)(focusStyle);
							focusInputStyle = (0, _filterStyle.createInheritStyle)(focusStyle);
						}
			
						var refreshStyle = function (isFocus) {
							if (focusStyle) {
								if (isFocus) {
									this.refs._native_node.setNativeProps({
										style: [containerStyle, focusContainerStyle]
									});
									this.refs.input.setNativeProps({
										style: [inputStyle, {
											flex: 1
										}, focusInputStyle]
									});
								} else {
									this.refs._native_node.setNativeProps({
										style: [containerStyle]
									});
									this.refs.input.setNativeProps({
										style: [inputStyle, {
											flex: 1
										}]
									});
								}
							}
						}.bind(this);
			
						if (props.onChange) {
							(function () {
								var onChange = props.onChange;
								delete props.onChange;
								props.onChangeText = function (text) {
									_this2.value = text;
									onChange({
										target: _this2
									});
								};
							})();
						} else {
							props.onChangeText = function (text) {
								_this2.value = text;
							};
						}
			
						return _reactNative2.default.createElement(_reactNative.View, {
							ref: "_native_node",
							style: containerStyle }, _reactNative2.default.createElement(_reactNative.TextInput, _extends({
							ref: "input",
							style: [inputStyle, {
								flex: 1
							}],
							onFocus: function onFocus(e) {
								refreshStyle(true);
			
								requestAnimationFrame(function () {
									_onFocus && _onFocus(e);
								});
							},
							onBlur: function onBlur(e) {
								refreshStyle(false);
			
								requestAnimationFrame(function () {
									_onBlur && _onBlur(e);
								});
							},
							autoCapitalize: "none",
							autoCorrect: false,
							defaultValue: value
						}, props)));
					}
				}]);
			
				return Input;
			}(_Element3.default);
			
			exports.default = Input;
		},		// dist/tag/Textarea.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Textarea = function (_Element) {
				_inherits(Textarea, _Element);
			
				function Textarea() {
					_classCallCheck(this, Textarea);
			
					return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this));
				}
			
				_createClass(Textarea, [{
					key: "render",
					value: function render() {
						var _props = this.props,
						    css = _props.css,
						    style = _props.style,
						    other = _objectWithoutProperties(_props, ["css", "style"]);
			
						return _reactNative2.default.createElement(_reactNative.TextInput, _extends({ style: (0, _filterStyle.createTextStyle)(this._style.style) }, other, { multiline: true }));
					}
				}]);
			
				return Textarea;
			}(_Element3.default);
			
			exports.default = Textarea;
		},		// dist/tag/Select.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Select = function (_Element) {
				_inherits(Select, _Element);
			
				function Select() {
					_classCallCheck(this, Select);
			
					return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));
				}
			
				_createClass(Select, [{
					key: "render",
					value: function render() {
						var _props = this.props,
						    css = _props.css,
						    style = _props.style,
						    other = _objectWithoutProperties(_props, ["css", "style"]);
			
						return React.createElement(_reactNative.Text, _extends({ style: createImageStyle(this._style.style) }, other), "待实现");
					}
				}]);
			
				return Select;
			}(_Element3.default);
			
			exports.default = Select;
		},		// dist/tag/Body.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};
			
			var _Box2 = __inner_require__(8 /*dist/tag/Box.js*/);
			
			var _Box3 = _interopRequireDefault(_Box2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			var _Layer = __inner_require__(10 /*dist/components/Layer.js*/);
			
			var _Layer2 = _interopRequireDefault(_Layer);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var Body = function (_Box) {
				_inherits(Body, _Box);
			
				function Body(props) {
					_classCallCheck(this, Body);
			
					var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));
			
					_this.state = {
						layers: []
					};
			
					_this.layers = {};
					_this.layerId = 1;
					return _this;
				}
			
				_createClass(Body, [{
					key: "_extendThis",
					value: function _extendThis(props) {
						_get(Body.prototype.__proto__ || Object.getPrototypeOf(Body.prototype), "_extendThis", this).call(this, props);
			
						this.bodyNodeId = props._id;
					}
				}, {
					key: "addLayer",
					value: function addLayer(layer) {
						var layerId = this.layerId++;
						this.layers[layerId] = layer;
						this.refreshLayers();
						return layerId;
					}
				}, {
					key: "removeLayer",
					value: function removeLayer(layerId) {
						delete this.layers[layerId];
						this.refreshLayers();
					}
				}, {
					key: "refreshLayers",
					value: function refreshLayers() {
						var _this2 = this;
			
						this.setState({
							layers: Object.keys(this.layers).map(function (layerId) {
								return _this2.layers[layerId];
							})
						});
					}
				}, {
					key: "render",
					value: function render() {
						var _props = this.props,
						    children = _props.children,
						    css = _props.css,
						    style = _props.style,
						    props = _objectWithoutProperties(_props, ["children", "css", "style"]);
			
						style = this._style.style;
			
						if (style.height) {
							delete style.flex;
						}
			
						// 处理背景图
						var backgroundImage = this.supportBackgroundImage(style);
						// 处理事件
						this._supportEvents(props);
			
						var newChildren = this.packageText(style, children);
			
						if (props.onPress) {
							var onPress = props.onPress;
							delete props.onPress;
			
							var vstyle = (0, _filterStyle.createViewStyle)(style);
							var containerStyle = (0, _filterStyle.createTouchableStyle)(vstyle);
							var contentStyle = (0, _filterStyle.filterTouchableStyle)(vstyle);
							return _reactNative2.default.createElement(_reactNative.TouchableOpacity, { ref: "_native_node", style: containerStyle, onPress: onPress, activeOpacity: 1 }, _reactNative2.default.createElement(_reactNative.View, _extends({ style: contentStyle }, props), backgroundImage, newChildren, this.state.layers));
						} else {
							var _vstyle = (0, _filterStyle.createViewStyle)(style);
							return _reactNative2.default.createElement(_reactNative.View, _extends({ style: _vstyle }, props, { ref: "_native_node" }), backgroundImage, newChildren, this.state.layers);
						}
					}
				}]);
			
				return Body;
			}(_Box3.default);
			
			exports.default = Body;
		},		// dist/components/ScrollView.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _class, _temp;
			
			var _Box2 = __inner_require__(8 /*dist/tag/Box.js*/);
			
			var _Box3 = _interopRequireDefault(_Box2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _asyncToGenerator(fn) {
				return function () {
					var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
						function step(key, arg) {
							try {
								var info = gen[key](arg);var value = info.value;
							} catch (error) {
								reject(error);return;
							}if (info.done) {
								resolve(value);
							} else {
								return Promise.resolve(value).then(function (value) {
									step("next", value);
								}, function (err) {
									step("throw", err);
								});
							}
						}return step("next");
					});
				};
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var ScrollView = (_temp = _class = function (_Box) {
				_inherits(ScrollView, _Box);
			
				function ScrollView(props) {
					_classCallCheck(this, ScrollView);
			
					var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));
			
					_this.scrollLeft = 0;
					_this.scrollTop = 0;
					_this.containerWidth = 0;
					_this.containerHeight = 0;
					_this.contentWidth = 0;
					_this.contentHeight = 0;
			
					_this.events = _this.transEvent(props);
			
					_this.state = {
						refreshing: false
					};
					return _this;
				}
			
				_createClass(ScrollView, [{
					key: "transEvent",
					value: function transEvent(props) {
						var _this2 = this;
			
						var events = {};
			
						// 滚动到底部加载更多
						if (props.onEndPoint) {
							(function () {
								var loading = false;
			
								var containerSize = 0;
								var contentSize = 0;
								var offsetSize = 0;
			
								events.onLayout = function (e) {
									e = e.nativeEvent.layout;
			
									_this2.containerWidth = e.width;
									_this2.containerHeight = e.height;
			
									if (props.horizontal) {
										containerSize = e.width;
									} else {
										containerSize = e.height;
									}
			
									offsetSize = contentSize - containerSize;
								};
			
								events.onContentSizeChange = function (contentWidth, contentHeight) {
									_this2.contentWidth = contentWidth;
									_this2.contentHeight = contentHeight;
			
									if (props.horizontal) {
										contentSize = contentWidth;
									} else {
										contentSize = contentHeight;
									}
			
									offsetSize = contentSize - containerSize;
			
									loading = false;
								};
			
								var onScroll = props.onScroll;
								var onEndPoint = props.onEndPoint;
								var endPointThreshold = props.endPointThreshold;
								//delete props.onEndPoint;
								//delete props.endPointThreshold;
								events.onScroll = function (e) {
									if (!loading) {
										(function () {
											var result = void 0;
			
											if (props.horizontal) {
												if (e.scrollLeft > offsetSize - endPointThreshold) {
													result = onEndPoint();
												}
											} else {
												if (e.scrollTop > offsetSize - endPointThreshold) {
													result = onEndPoint();
												}
											}
			
											if (result) {
												if (result instanceof Promise) {
													loading = true;
													_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
														return regeneratorRuntime.wrap(function _callee$(_context) {
															while (1) {
																switch (_context.prev = _context.next) {
																	case 0:
																		_context.next = 2;
																		return result;
			
																	case 2:
																		loading = _context.sent;
			
																	case 3:
																	case "end":
																		return _context.stop();
																}
															}
														}, _callee, _this2);
													}))();
												} else {
													loading = result;
												}
											}
										})();
									}
			
									onScroll && onScroll(e);
								};
							})();
						}
			
						// 下拉刷新
						if (props.onRefresh) {
							(function () {
								var onRefresh = props.onRefresh;
								var refreshThreshold = props.refreshThreshold;
			
								events.onScrollEndDrag = function (e) {
									if (-e.nativeEvent.contentOffset.y > refreshThreshold) {
										(function () {
											_this2.setState({
												refreshing: true
											});
			
											var result = onRefresh();
			
											if (result instanceof Promise) {
												_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
													return regeneratorRuntime.wrap(function _callee2$(_context2) {
														while (1) {
															switch (_context2.prev = _context2.next) {
																case 0:
																	_context2.next = 2;
																	return result;
			
																case 2:
																	_this2.setState({
																		refreshing: false
																	});
			
																case 3:
																case "end":
																	return _context2.stop();
															}
														}
													}, _callee2, _this2);
												}))();
											} else {
												_this2.setState({
													refreshing: false
												});
											}
										})();
									}
								};
							})();
						}
			
						if (events.onScroll || props.onScroll) {
							(function () {
								events.scrollEventThrottle = props.scrollEventThrottle || 16;
			
								var onScroll = events.onScroll || props.onScroll;
								events.onScroll = function (e) {
									var contentOffset = e.nativeEvent.contentOffset;
			
									_this2.scrollLeft = contentOffset.x;
									_this2.scrollTop = contentOffset.y;
			
									onScroll({
										scrollLeft: contentOffset.x,
										scrollTop: contentOffset.y
									});
								};
			
								// delete events.onScroll;
			
								// let startX, startY;
			
								// events.onStartShouldSetResponder = () => true;
								// events.onResponderTerminationRequest = () => true;
								// events.onResponderGrant = (e) => {
								// 	let {pageX, pageY} = e.nativeEvent;
								// 	startX = pageX;
								// 	startY = pageY;
								// };
			
								// events.onMoveShouldSetResponder = () => true;
								// events.onResponderTerminationRequest = () => true;
								// events.onResponderMove = (e) => {
								// 	let {pageX, pageY} = e.nativeEvent;
			
								// 	onScroll({
								// 		scrollLeft: 0,
								// 		scrollTop: pageY - startY
								// 	});
								// };
							})();
						}
			
						return events;
					}
				}, {
					key: "scrollTo",
					value: function scrollTo(x, y, animated) {
						var _this3 = this;
			
						this.refs["_native_node"].scrollTo({
							x: x,
							y: y,
							animated: animated
						});
			
						if (this.events.onScroll) {
							//InteractionManager.runAfterInteractions(() => {
							setTimeout(function () {
								_this3.events.onScroll({
									nativeEvent: {
										contentOffset: {
											x: x,
											y: y
										}
									}
								});
							}, 500);
						}
					}
				}, {
					key: "onScrollEnd",
					value: function onScrollEnd(e) {
						if (this.events.onScroll) {
							this.events.onScroll(e);
						}
					}
				}, {
					key: "render",
					value: function render() {
						var _props = this.props,
						    children = _props.children,
						    css = _props.css,
						    style = _props.style,
						    onScroll = _props.onScroll,
						    onEndPoint = _props.onEndPoint,
						    endPointThreshold = _props.endPointThreshold,
						    onRefresh = _props.onRefresh,
						    refreshThreshold = _props.refreshThreshold,
						    scrollEventThrottle = _props.scrollEventThrottle,
						    props = _objectWithoutProperties(_props, ["children", "css", "style", "onScroll", "onEndPoint", "endPointThreshold", "onRefresh", "refreshThreshold", "scrollEventThrottle"]);
			
						style = this._style.style;
			
						// 处理背景图
						var backgroundImage = this.supportBackgroundImage(style);
						// 处理:before、:after伪元素
			
						var _supportBeforeAndAfte = this.supportBeforeAndAfter(),
						    beforeElement = _supportBeforeAndAfte.beforeElement,
						    afterElement = _supportBeforeAndAfte.afterElement;
			
						var newChildren = this.packageText(style, children, beforeElement, afterElement);
			
						if (style.pointerEvents) {
							props.pointerEvents = style.pointerEvents;
						}
			
						return _reactNative2.default.createElement(_reactNative.ScrollView, _extends({}, props, this.events, {
							removeClippedSubviews: true,
							collapsable: true,
							contentContainerStyle: (0, _filterStyle.createViewStyle)(style),
							showsHorizontalScrollIndicator: false,
							showsVerticalScrollIndicator: false,
							onMomentumScrollEnd: this.onScrollEnd.bind(this),
							ref: "_native_node" }), newChildren);
					}
				}, {
					key: "nativeNode",
					get: function get() {
						return this.refs["_native_node"].refs.ScrollView;
					}
				}]);
			
				return ScrollView;
			}(_Box3.default), _class.propTypes = {
				// 加载更多的阀值
				endPointThreshold: _reactNative2.default.PropTypes.number,
				// 刷新阀值
				refreshThreshold: _reactNative2.default.PropTypes.number
			}, _class.defaultProps = {
				endPointThreshold: 60,
				refreshThreshold: 100
			}, _temp);
			exports.default = ScrollView;
		},		// dist/components/Router.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _NavBar = __inner_require__(28 /*dist/components/NavBar.js*/);
			
			var _NavBar2 = _interopRequireDefault(_NavBar);
			
			var _readyRun = __inner_require__(16 /*dist/lib/readyRun.js*/);
			
			var _readyRun2 = _interopRequireDefault(_readyRun);
			
			var _NativeModules = __inner_require__(29 /*dist/lib/NativeModules.js*/);
			
			var _NativeModules2 = _interopRequireDefault(_NativeModules);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var routes = {};
			
			// 解析url
			function parseUrl(url, util) {
				url = url.split("?");
			
				var params = function (queryString) {
					var params = {};
					if (queryString) {
						queryString.split("&").forEach(function (item) {
							item = item.split("=");
							params[item[0]] = item[1];
						});
					}
					return params;
				}(url[1]);
			
				url = url[0];
			
				return {
					header: routes[util.resolve(url).replace(/\.js$/, "")],
					component: util.require(url).default,
					params: params
				};
			}
			
			function defaultMap(url, util) {
				url = url.split("?");
			
				return util.resolve(url[0]) + (url[1] ? "?" + url[1] : "");
			}
			
			var Router = function (_React$Component) {
				_inherits(Router, _React$Component);
			
				function Router(props) {
					_classCallCheck(this, Router);
			
					return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));
				}
			
				_createClass(Router, [{
					key: "componentDidMount",
					value: function componentDidMount() {
						var _this2 = this;
			
						// 绑定安卓后退按钮
						if (_reactNative.Platform.OS === "android") {
							(function () {
								var navigator = _this2._navigator;
								if (navigator) {
									_reactNative.BackAndroid.addEventListener('hardwareBackPress', function () {
										if (navigator && navigator.canBack) {
											navigator.back();
											return true;
										}
										return false;
									});
								}
							})();
						}
					}
				}, {
					key: "componentWillUnmount",
					value: function componentWillUnmount() {
						// 解除安卓后退按钮绑定
						if (_reactNative.Platform.OS === "android") {
							if (this._navigator) {
								_reactNative.BackAndroid.removeEventListener('hardwareBackPress');
							}
						}
					}
			
					// 由于导航栏使用过程中都是内部渲染，所以导航控件不进行二次渲染
			
				}, {
					key: "shouldComponentUpdate",
					value: function shouldComponentUpdate() {
						return false;
					}
			
					// 配置页面导航信息
					// key: 页面url
					// router: 头部节点
			
				}, {
					key: "render",
					value: function render() {
						var util = this.props._util;
						// 路由规则
						var map = this.props.map || defaultMap;
						// 反向URL解析
						var reverseMap = this.props.reverseMap || function (url, util) {
							return url;
						};
						// 默认页
						var defaultPage = map(this.props.href, util);
						// 解析默认页
						var router = parseUrl(defaultPage, util);
						var self = this;
			
						// 导航的历史记录
						var history = [{
							url: defaultPage,
							isFromNative: this.props.isFromNative
						}];
			
						var _navigator;
						var _navBar;
			
						var waitNavBar = new _readyRun2.default();
			
						// 传递给页面的导航方法集
						var navUtil = self._navigator = {
							// 是否第一个页面
							get isFirst() {
								return history.length < 2;
							},
							get canBack() {
								return !this.isFirst || history[history.length - 1].isFromNative;
							},
							// 跳转
							go: function go(url, params, opts) {
								opts = opts || {
									isReplace: false,
									isFromNative: false
								};
			
								url = map(url, util);
			
								if (/^(http|https)\:\/\//.test(url)) {
									// 跳转h5页面
									params = Object.assign({
										isNaviHidden: false,
										title: "",
										style: 2
									}, params);
			
									_NativeModules2.default.MozartTransfer.transfer(JSON.stringify({
										"action": "webPage",
										"params": {
											"url": url,
											"isNaviHidden": params.isNaviHidden,
											"title": params.title,
											"style": params.style
										}
									}), function (err, data) {});
								} else if (/^native\:\/\//.test(url)) {
									// 跳转native页面
									var _params = {};
									url = url.split("?");
									if (url[1]) {
										_params = function (items) {
											var params = {};
											items.forEach(function (item) {
												item = item.split("=");
												params[item[0]] = item[1];
											});
											return params;
										}(url[1].split("&"));
									}
			
									url = url[0].replace(/^native\:\/\//, "");
			
									_NativeModules2.default.MozartTransfer.transfer(JSON.stringify({
										"action": url,
										"params": _params
									}), function (err, data) {});
								} else {
									// 如果要跳转的是上一个页面，直接返回
									if (history.length > 1 && url === history[history.length - 2].url && !opts.isFromNative) {
										this.back();
										return;
									}
			
									// 假如不是替换页面，并且新页面与当前页一样，则不做任何操作
									if (!opts.isReplace && url === history[history.length - 1].url) {
										return;
									}
			
									var replacedPage = void 0;
			
									if (opts.isReplace) {
										replacedPage = history.pop();
									}
			
									history.push({
										url: url,
										isFromNative: opts.isFromNative || (replacedPage ? replacedPage.isFromNative : false)
									});
			
									// 通过url解析出跳转页面数据
									var _router = parseUrl(url, util);
			
									if (_navBar) {
										_navBar.checkHeader(_router.header, navUtil, false);
									}
			
									if (opts.isReplace) {
										_navigator.replace({
											url: url,
											referrer: history[history.length - 1].isFromNative ? "native" : history[history.length - 2].url,
											component: _router.component,
											params: _router.params
										});
									} else {
										_navigator.push({
											url: url,
											referrer: opts.isFromNative ? "native" : history[history.length - 2].url,
											component: _router.component,
											params: _router.params
										});
									}
			
									if (replacedPage) {
										var page = replacedPage.page;
										if (page && page.onForwardTo) {
											page.onForwardTo(reverseMap(url, util));
										}
									} else if (history.length > 1) {
										var _page = history[history.length - 2].page;
										if (_page && _page.onForwardTo) {
											_page.onForwardTo(reverseMap(url, util));
										}
									}
								}
							},
							// 后退
							back: function back() {
								// 如果是第一个页面，不能后退
								if (!this.canBack) {
									return;
								}
			
								// history回退到上一个
								var prevPage = history.pop();
			
								// 当前页
								if (history.length) {
									var page = history[history.length - 1];
			
									if (prevPage.page && prevPage.page.onBackTo && !prevPage.isFromNative) {
										prevPage.page.onBackTo(reverseMap(page.url, util));
									}
			
									if (page.page && page.page.onBackFrom) {
										page.page.onBackFrom(reverseMap(prevPage.url, util));
									}
			
									var _router2 = parseUrl(page.url, util);
			
									if (_navBar) {
										if (page.header) {
											// 对于有缓存头的页面，使用缓存头渲染
											_navBar.checkHeader(page.header, navUtil, true);
										} else {
											// 没有缓存头的页面，使用配置头渲染
											_navBar.checkHeader(_router2.header, navUtil, true);
										}
									}
			
									_navigator.pop();
								}
			
								// 如果来源是原生页面，则跳回原生页面
								if (prevPage.isFromNative) {
									_NativeModules2.default.eLongReactModule.backHome();
			
									if (prevPage.page && prevPage.page.onBackTo) {
										prevPage.page.onBackTo("native");
									}
								}
							},
							// 重新加载
							reload: function reload() {
								this.replace(history[history.length - 1].url);
							},
							// 替换当前页面
							replace: function replace(url) {
								this.go(url, null, {
									isReplace: true
								});
							},
							goFromNative: function goFromNative(url, params) {
								this.go(url, null, {
									isFromNative: true,
									referrer: params ? params.referrer : ""
								});
							},
							// 导航栏
							navbar: {
								view: function view(header) {
									if (map(header.url) !== history[history.length - 1].url) {
										return;
									}
			
									waitNavBar.ready(function () {
										_navBar.view(header.render(navUtil));
										// 对于需要页面数据渲染的导航，在回退的时候，渲染时机太晚
										// 所以此处对导航栏做个缓存，在回退的时候先行渲染
										history[history.length - 1].header = header;
									});
								}
							}
						};
			
						return _reactNative2.default.createElement(_reactNative.View, {
							style: {
								flex: 1
							} }, _reactNative2.default.createElement(_reactNative.Navigator, {
							style: {
								flex: 1
							},
							initialRoute: {
								url: history[0].url,
								component: router.component,
								params: router.params,
								referrer: ""
							},
							configureScene: function configureScene() {
								// 此处gestures设为null，禁用左滑返回上一页的功能
								return Object.assign({}, _reactNative.Navigator.SceneConfigs.PushFromRight, {
									gestures: null
								});
							},
							navigationBar: _reactNative2.default.createElement(_NavBar2.default, {
								header: router.header,
								navUtil: navUtil,
								hander: function hander(navbar) {
									_navBar = navbar;
									waitNavBar.ready();
								}
							}),
							renderScene: function renderScene(route, navigator) {
								var Component = route.component;
								if (Component) {
									// navigator.addListener('willfocus', function(){
									// 	console.log(arguments);
									// });
									_navigator = navigator;
			
									return _reactNative2.default.createElement(Component, _extends({}, route.params, {
										navigator: navUtil,
										_pageInfo: {
											navigator: navUtil,
											url: reverseMap(route.url, util),
											referrer: route.referrer ? reverseMap(route.referrer, util) : ""
										},
										_ref: function _ref(page) {
											if (history[history.length - 1].url === route.url) {
												history[history.length - 1].page = page;
											}
										} }));
								}
							} }));
					}
				}], [{
					key: "config",
					value: function config(key, router) {
						routes[key] = router;
					}
				}]);
			
				return Router;
			}(_reactNative2.default.Component);
			
			exports.default = Router;
			;
		},		// dist/components/NavBar.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var NAV_BAR_HEIGHT = _reactNative.Platform.OS === "ios" ? 64 : 44;
			
			var NavBar = function (_React$Component) {
				_inherits(NavBar, _React$Component);
			
				function NavBar(props) {
					_classCallCheck(this, NavBar);
			
					// 导航栏隐藏方式
					// move：向上划出屏幕隐藏
					// opacity：透明隐藏
					var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));
			
					_this.containerHideMode = "move";
					// 导航栏是否已隐藏
					_this.containerIsHide = true;
					// 是否是后退（主要用于区分前进后退动画）
					_this.isBack = false;
					// 是否是切页面(主要用于防止当页重绘页头时的动画效果)
					_this.isSwitch = false;
					// 导航栏当前内容透明度
					var contentOpacity = new _reactNative.Animated.Value(1);
					// 动画参数，为了配合进行减法运算
					var minus = new _reactNative.Animated.Value(-1);
			
					_this.state = {
						// 导航栏top，为了实现move隐藏
						containerTop: new _reactNative.Animated.Value(-NAV_BAR_HEIGHT),
						// 导航栏opacity，为了实现透明隐藏
						containerOpacity: new _reactNative.Animated.Value(1),
						// 背景样式
						backgroundStyle: {
							backgroundColor: "#fff",
							//backgroundColor: "transparent",
							opacity: 0
						},
						// 当前导航内容透明度
						contentOpacity: contentOpacity,
						contentX: new _reactNative.Animated.Value(0),
						// 上一个导航内容透明度(与当前内容透明度正好相反，以实现透明切换)
						prevContentOpacity: _reactNative.Animated.add(new _reactNative.Animated.Value(1), _reactNative.Animated.multiply(contentOpacity, minus)),
						prevContentX: new _reactNative.Animated.Value(0)
					};
					return _this;
				}
			
				_createClass(NavBar, [{
					key: "componentWillMount",
					value: function componentWillMount() {
						// 初始化第一个导航栏
						this.checkHeader(this.props.header, this.props.navUtil);
						// 传出自己
						this.props.hander && this.props.hander(this);
					}
			
					// 显示导航栏
			
				}, {
					key: "show",
					value: function show() {
						if (!this.containerIsHide) {
							return;
						}
						this.containerIsHide = false;
			
						switch (this.containerHideMode) {
							case "move":
								_reactNative.Animated.timing(this.state.containerTop, {
									toValue: 0
								}).start();
								break;
							case "opacity":
								_reactNative.Animated.timing(this.state.containerOpacity, {
									toValue: 1
								}).start();
								break;
						}
					}
					// 隐藏导航栏
			
				}, {
					key: "hide",
					value: function hide(mode) {
						if (this.containerIsHide) {
							if (mode && mode !== this.containerHideMode) {
								this.show();
								this.hide(mode);
							}
							return;
						}
						this.containerIsHide = true;
			
						this.containerHideMode = mode || this.containerHideMode;
			
						switch (this.containerHideMode) {
							case "move":
								_reactNative.Animated.timing(this.state.containerTop, {
									toValue: -NAV_BAR_HEIGHT
								}).start();
								break;
							case "opacity":
								_reactNative.Animated.timing(this.state.containerOpacity, {
									toValue: 0
								}).start();
								break;
						}
					}
					// 设置背景样式
			
				}, {
					key: "backgroundStyle",
					value: function backgroundStyle(style) {
						this.setState({
							backgroundStyle: Object.assign({}, this.state.backgroundStyle, style)
						});
					}
					// 填充渲染导航栏
			
				}, {
					key: "view",
					value: function view(content) {
						// var width = Dimensions.get('window').width;
			
						// if(this.isBack){
						// 	width = -width;
						// }
			
						if (this.isSwitch) {
							this.state.contentOpacity.setValue(0);
							//this.state.contentX.setValue(width / 2);
							//this.state.prevContentX.setValue(0);
			
							this.setState({
								prevContent: this.state.content,
								content: content
							});
			
							_reactNative.Animated.parallel([
							// Animated.timing(
							// 	this.state.contentX,
							// 	{
							// 		toValue: 0
							// 	}
							// ),
							// Animated.timing(
							// 	this.state.prevContentX,
							// 	{
							// 		toValue: -width / 2
							// 	}
							// ),
							_reactNative.Animated.timing(this.state.contentOpacity, {
								toValue: 1
								//,easing: Easing.out(Easing.exp)
							})]).start();
						} else {
							//InteractionManager.runAfterInteractions(() => {
							this.setState({
								content: content
							});
							//});
						}
			
						this.isSwitch = false;
					}
					// 导航栏分为三种情况
					// 1、不显示导航栏（header为空）
					// 2、显示静态导航栏（header不为空，header.render也不为空，通过header.render渲染出静态导航栏）
					// 3、显示动态导航栏（header不为空，header.render为空，导航栏显示节点等待程序中调用view方法来渲染）
					// util为提供给导航栏渲染时的工具包，包括导航的方法
			
				}, {
					key: "checkHeader",
					value: function checkHeader(header, util, isBack) {
						this.isBack = isBack;
						// 如果header不为空，则显示头部
						if (header) {
							this.isSwitch = true;
							this.show();
							// 如果有填充内容，则填充头部
							if (header.render) {
								this.view(header.render(util));
							}
						} else {
							this.hide();
						}
					}
				}, {
					key: "render",
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [styles.container, {
								top: this.state.containerTop,
								opacity: this.state.containerOpacity
							}] }, _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [styles.layer, this.state.backgroundStyle] }), _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [styles.layer, {
								opacity: this.state.prevContentOpacity,
								transform: [{
									translateX: this.state.prevContentX
								}]
							}] }, this.state.prevContent), _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [styles.layer, {
								opacity: this.state.contentOpacity,
								transform: [{
									translateX: this.state.contentX
								}]
							}] }, this.state.content));
					}
				}]);
			
				return NavBar;
			}(_reactNative2.default.Component);
			
			exports.default = NavBar;
			
			var styles = _reactNative.StyleSheet.create({
				container: {
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: NAV_BAR_HEIGHT,
					backgroundColor: "transparent"
				},
				layer: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					backgroundColor: "transparent"
				}
			});
		},		// dist/lib/NativeModules.js
		function(__inner_require__, exports, module){
			var _enjoyCommonSupport = require("enjoy-common-support@0.2/dist/index.js");
			
			var NativeModules = null;
			function NOOP(fn) {
				fn("no module");
			}
			
			module.exports = (0, _enjoyCommonSupport.events)(["ready", "memory once async"])({
				get MozartRequester() {
					return NativeModules ? NativeModules.MozartRequester : {
						request: NOOP
					};
				},
				get MozartTransfer() {
					return NativeModules ? NativeModules.MozartTransfer : {
						transfer: NOOP
					};
				},
				get MozartGetLocation() {
					return NativeModules ? NativeModules.MozartGetLocation : {
						getLocationInfoWithCallback: NOOP
					};
				},
				get MozartCountly() {
					return NativeModules ? NativeModules.MozartCountly : {
						countlyWith: NOOP
					};
				},
				get eLongReactModule() {
					return NativeModules ? NativeModules.eLongReactModule : {
						backHome: NOOP
					};
				},
				init: function init(_NativeModules) {
					NativeModules = _NativeModules;
					this.fireReady(NativeModules);
				}
			});
		},		// dist/components/layers.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _Layer = __inner_require__(10 /*dist/components/Layer.js*/);
			
			exports.default = function (layers) {
				return function (TargetClass) {
					if (!TargetClass.__start_list__) {
						TargetClass.__start_list__ = [];
					}
			
					TargetClass.__start_list__.push(function () {
						this._init_layers = function () {
							var _this = this;
			
							Object.keys(layers).forEach(function (layerName) {
								_this[layerName] = new _Layer.LayerClass(layers[layerName]);
							});
						};
			
						this._destroy_layers = function () {
							var _this2 = this;
			
							Object.keys(layers).forEach(function (layerName) {
								_this2[layerName].destroy();
							});
						};
					});
				};
			};
		},		// dist/components/Component.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			function compare(obj1, obj2) {
				if (obj1 === obj2) {
					return true;
				}
			
				var obj1Keys = Object.keys(obj1);
				var obj2Keys = Object.keys(obj2);
			
				if (obj1Keys.length === obj2Keys.length && obj1Keys.every(function (key) {
					return obj1[key] === obj2[key];
				})) {
					return true;
				}
				return false;
			}
			
			function NOOP() {}
			
			var Component = function (_React$Component) {
				_inherits(Component, _React$Component);
			
				// 打点对象
				function Component(props) {
					_classCallCheck(this, Component);
			
					//console.log(this.constructor.name + "-constructor:" + +new Date());
			
					var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));
			
					_this.view = {
						render: function render() {
							return null;
						}
					};
					_this.trap = {};
					_this.traps = {};
					_this._attached_components = null;
					var pageInfo = props._pageInfo;
					if (pageInfo) {
						_this.page = {
							url: pageInfo.url,
							referrer: pageInfo.url,
							go: pageInfo.navigator.go,
							replace: pageInfo.navigator.replace,
							back: pageInfo.navigator.back,
							reload: pageInfo.navigator.reload,
							navbar: pageInfo.navigator.navbar
						};
					} else {
						_this.page = {
							url: "",
							referrer: "",
							go: NOOP,
							replace: NOOP,
							back: NOOP,
							reload: NOOP,
							navbar: null
						};
					}
			
					//console.log(this.constructor.name + ": constructor");
					return _this;
				}
				// 配置打点信息
			
				// 视图对象
			
			
				_createClass(Component, [{
					key: "componentWillMount",
					value: function componentWillMount() {
						this._init_start_time = +new Date();
			
						this._refs = {};
						// if(this.view.header && this.view.header.render){
						// 	this.view.header.render();
						// }
			
						if (this.props._ref) {
							this.props._ref(this);
						}
			
						//console.log(this.constructor.name + ": componentWillMount");
					}
				}, {
					key: "componentDidMount",
					value: function componentDidMount() {
						// 初始化挂在的浮层
						if (this._init_layers) {
							this._init_layers();
						}
						//console.log(this.constructor.name + " init time: " + (+new Date() - this._init_start_time) + "ms");
			
						//console.log(this.constructor.name + ": didMount");
			
						//console.log(this.constructor.name + "-didMount:" + +new Date());
					}
				}, {
					key: "componentWillUpdate",
					value: function componentWillUpdate() {
						//this._update_start_time = +new Date();
			
						//console.log(this.constructor.name + ": componentWillUpdate");
					}
				}, {
					key: "componentDidUpdate",
					value: function componentDidUpdate() {
						//console.log(this.constructor.name + " update time: " + (+new Date() - this._update_start_time) + "ms");
			
						//console.log(this.constructor.name + ": componentDidUpdate");
					}
				}, {
					key: "componentWillUnmount",
					value: function componentWillUnmount() {
						// 卸载挂载的浮层
						if (this._destroy_layers) {
							this._destroy_layers();
						}
						//console.log(this.constructor.name + ": willUnmount");
					}
				}, {
					key: "shouldComponentUpdate",
					value: function shouldComponentUpdate(nextProps, nextState) {
			
						// if(compare(this.state, nextState)){
						// 	return false;
						// }
			
						return true;
					}
			
					// 向页面底部附加组件
			
				}, {
					key: "appendComponent",
					value: function appendComponent(component) {
						if (!this._attached_components) {
							this._attached_components = [];
						}
						this._attached_components.push(component);
			
						this.setState({
							_attached_components: this._attached_components
						});
					}
				}, {
					key: "render",
					value: function render() {
			
						//console.log(this.constructor.name + "-render:" + +new Date());
						// 
						if (this.view.header && this.view.header.render && this.view.header.check()) {
							this.view.header.render();
						}
			
						return this.view.render(this.state ? this.state._attached_components : null);
					}
				}]);
			
				return Component;
			}(_reactNative2.default.Component);
			
			exports.default = Component;
			;
		},		// dist/components/Swiper.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _get = function get(object, property, receiver) {
				if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
					var parent = Object.getPrototypeOf(object);if (parent === null) {
						return undefined;
					} else {
						return get(parent, property, receiver);
					}
				} else if ("value" in desc) {
					return desc.value;
				} else {
					var getter = desc.get;if (getter === undefined) {
						return undefined;
					}return getter.call(receiver);
				}
			};
			
			var _class, _temp;
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			// 暂时只支持横向滚动
			var Swiper = (_temp = _class = function (_Element) {
				_inherits(Swiper, _Element);
			
				function Swiper(props) {
					_classCallCheck(this, Swiper);
			
					var _this = _possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, props));
			
					_this.initState(props);
					_this.play(props);
					return _this;
				}
			
				_createClass(Swiper, [{
					key: "initState",
					value: function initState(props) {
						var state = {
							width: 0,
							height: 0,
							index: props.loop ? 1 : 0,
							isScrolling: false
						};
						this.state = state;
					}
				}, {
					key: "stop",
					value: function stop() {
						if (this.timer) {
							clearTimeout(this.timer);
						}
					}
				}, {
					key: "play",
					value: function play(props) {
						var _this2 = this;
			
						var autoplay = (props || this.props).autoplay;
						if (!autoplay) {
							return;
						}
			
						if (typeof autoplay !== "number") {
							autoplay = 5000;
						}
			
						if (this.timer) {
							clearTimeout(this.timer);
						}
						this.timer = setTimeout(function () {
							if (!_this2.state.isScrolling) {
								_this2.scrollTo(_this2.state.index);
								_this2.timer = null;
								_this2.play();
							}
						}, autoplay);
					}
				}, {
					key: "componentWillUnmount",
					value: function componentWillUnmount() {
						_get(Swiper.prototype.__proto__ || Object.getPrototypeOf(Swiper.prototype), "componentWillUnmount", this).call(this);
			
						if (this.timer) {
							clearTimeout(this.timer);
						}
					}
			
					// 修改控件尺寸
			
				}, {
					key: "size",
					value: function size(_size) {
						var width = _size.width,
						    height = _size.height;
			
						if (width !== this.state.width || height !== this.state.height) {
							this.setState({
								width: width,
								height: height
							});
						}
					}
			
					// 滚动到某一页
			
				}, {
					key: "scrollTo",
					value: function scrollTo(pageIndex, animated) {
						if (!this.refs.swiper || _reactNative2.default.Children.count(this.props.children) < 2 || this.state.isScrolling) {
							return;
						}
			
						if (this.props.loop) {
							pageIndex += 1;
						}
			
						if (animated !== false) {
							animated = true;
						}
			
						if (_reactNative.Platform.OS === "ios") {
							this.refs.swiper.scrollTo({
								x: pageIndex * this.state.width,
								y: 0,
								animated: animated
							});
			
							if (!animated) {
								this.scrollEnd(pageIndex);
							}
						} else {
							if (animated) {
								this.refs.swiper.setPage(pageIndex);
							} else {
								this.refs.swiper.setPageWithoutAnimation(pageIndex);
							}
			
							this.scrollEnd(pageIndex);
						}
					}
				}, {
					key: "lock",
					value: function lock() {
						if (_reactNative.Platform.OS === "android") {} else {
							this.refs.swiper.setNativeProps({
								scrollEnabled: false
							});
						}
					}
				}, {
					key: "unlock",
					value: function unlock() {
						if (_reactNative.Platform.OS === "android") {} else {
							this.refs.swiper.setNativeProps({
								scrollEnabled: true
							});
						}
					}
				}, {
					key: "busy",
					value: function busy(isBusy) {
						if (isBusy === this.state.isScrolling) {
							return;
						}
			
						this.setState({
							isScrolling: isBusy
						});
			
						if (!isBusy) {
							if (_reactNative.Platform.OS === "android") {
								this.refs.swiper.setPageWithoutAnimation(this.state.index);
							}
							this.play();
						}
					}
			
					// 滚动结束时
			
				}, {
					key: "scrollEnd",
					value: function scrollEnd(pageIndex) {
						// 如果是循环滚动，滚动结束时，自动对接首尾帧
						if (this.props.loop) {
							var count = _reactNative2.default.Children.count(this.props.children);
							if (pageIndex === 0) {
								pageIndex = count;
							} else if (pageIndex === count + 1) {
								pageIndex = 1;
							}
						}
			
						this.setState({
							index: pageIndex
						});
			
						if (this.props.onChange) {
							this.props.onChange(pageIndex - (this.props.loop ? 1 : 0));
						}
					}
			
					// 渲染滚动组件
			
				}, {
					key: "renderScrollView",
					value: function renderScrollView() {
						var _this3 = this;
			
						var _state = this.state,
						    width = _state.width,
						    height = _state.height,
						    index = _state.index;
			
						var count = _reactNative2.default.Children.count(this.props.children);
			
						// if(!width || !height){
						// 	return null;
						// }
			
						var _props = this.props,
						    children = _props.children,
						    css = _props.css,
						    style = _props.style,
						    loop = _props.loop,
						    other = _objectWithoutProperties(_props, ["children", "css", "style", "loop"]);
			
						var pageStyle = {
							width: width,
							height: height,
							overflow: "hidden"
						};
			
						var pages;
			
						// 包装每个子元素
						if (count > 1) {
							pages = Object.keys(children);
							if (loop) {
								pages.unshift(count - 1);
								pages.push(0);
							}
							pages = pages.map(function (pageIndex, index) {
								return _reactNative2.default.createElement(_reactNative.View, {
									key: index,
									style: [styles.page, pageStyle] }, children[pageIndex]);
							});
						} else {
							pages = _reactNative2.default.createElement(_reactNative.View, {
								style: [styles.page, pageStyle] }, children);
						}
			
						if (_reactNative.Platform.OS === "ios") {
							return _reactNative2.default.createElement(_reactNative.ScrollView, {
								ref: "swiper",
								horizontal: true,
								removeClippedSubviews: false,
								pagingEnabled: true,
								showsHorizontalScrollIndicator: false,
								contentOffset: {
									x: index * width,
									y: 0
								},
								onScrollBeginDrag: function onScrollBeginDrag(e) {
									_this3.busy(true);
								},
								onMomentumScrollEnd: function onMomentumScrollEnd(e) {
									_this3.scrollEnd(e.nativeEvent.contentOffset.x / width);
									_this3.busy(false);
								} }, pages);
						} else {
							return _reactNative2.default.createElement(_reactNative.ViewPagerAndroid, {
								ref: "swiper",
								style: {
									flex: 1
								},
								initialPage: index,
								onPageScrollStateChanged: function onPageScrollStateChanged(e) {
									_this3.busy(e !== "idle");
								},
								onPageSelected: function onPageSelected(e) {
									_this3.scrollEnd(e.nativeEvent.position);
								} }, pages);
						}
					}
				}, {
					key: "render",
					value: function render() {
						var _this4 = this;
			
						return _reactNative2.default.createElement(_reactNative.View, {
							style: (0, _filterStyle.createViewStyle)(this._style.style),
							onLayout: function onLayout(e) {
								_this4.size(e.nativeEvent.layout);
							} }, this.renderScrollView());
					}
				}]);
			
				return Swiper;
			}(_Element3.default), _class.propTypes = {
				// 循环滚动
				loop: _reactNative2.default.PropTypes.bool,
				// 自动滚动
				autoplay: _reactNative2.default.PropTypes.bool,
				// 切换后的事件
				onChange: _reactNative2.default.PropTypes.func
			}, _class.defaultProps = {
				loop: false,
				autoplay: false,
				onChange: null
			}, _temp);
			exports.default = Swiper;
			
			var styles = _reactNative.StyleSheet.create({
				page: {
					backgroundColor: 'transparent'
				}
			});
		},		// dist/components/FadeNavBar.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var FadeNavBar = function (_Element) {
				_inherits(FadeNavBar, _Element);
			
				function FadeNavBar(props) {
					_classCallCheck(this, FadeNavBar);
			
					// 导航栏当前内容透明度
					var _this = _possibleConstructorReturn(this, (FadeNavBar.__proto__ || Object.getPrototypeOf(FadeNavBar)).call(this, props));
			
					var opacity = new _reactNative.Animated.Value(0);
					// 动画参数，为了配合进行减法运算
					var minus = new _reactNative.Animated.Value(-1);
			
					_this.state = {
						opacity0: _reactNative.Animated.add(new _reactNative.Animated.Value(1), _reactNative.Animated.multiply(opacity, minus)),
						opacity1: opacity
					};
			
					_this.progress(props.progress);
					return _this;
				}
			
				_createClass(FadeNavBar, [{
					key: "componentWillReceiveProps",
					value: function componentWillReceiveProps(nextProps) {
						this.progress(nextProps.progress);
					}
				}, {
					key: "progress",
					value: function progress(_progress) {
						_progress = Math.max(0, Math.min(1, _progress));
						this.state.opacity1.setValue(_progress);
					}
				}, {
					key: "render",
					value: function render() {
						var _this2 = this;
			
						var children = this.props.children;
			
						return _reactNative2.default.createElement(_reactNative.View, {
							style: styles.layer }, _reactNative2.default.Children.map(children, function (child, index) {
							switch (index) {
								case 0:
									return _reactNative2.default.createElement(_reactNative.Animated.View, {
										style: [styles.layer, {
											opacity: _this2.state.opacity0
										}] }, child);
									break;
								case 1:
									return _reactNative2.default.createElement(_reactNative.Animated.View, {
										style: [styles.layer, {
											opacity: _this2.state.opacity1
										}] }, child);
									break;
							}
							return null;
						}));
					}
				}]);
			
				return FadeNavBar;
			}(_Element3.default);
			
			exports.default = FadeNavBar;
			
			var styles = _reactNative.StyleSheet.create({
				layer: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					backgroundColor: "transparent"
				}
			});
		},		// dist/components/SwiperPager.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var SwiperPager = function (_Element) {
				_inherits(SwiperPager, _Element);
			
				function SwiperPager() {
					_classCallCheck(this, SwiperPager);
			
					var _this = _possibleConstructorReturn(this, (SwiperPager.__proto__ || Object.getPrototypeOf(SwiperPager)).call(this));
			
					_this.state = {
						index: 0
					};
					return _this;
				}
			
				_createClass(SwiperPager, [{
					key: "select",
					value: function select(index) {
						this.setState({
							index: index
						});
					}
				}, {
					key: "render",
					value: function render() {
						var _props = this.props,
						    count = _props.count,
						    current = _props.current,
						    itemStyle = _props.itemStyle,
						    currentStyle = _props.currentStyle;
			
						itemStyle = (0, _filterStyle.transUnit)(itemStyle || {});
						currentStyle = (0, _filterStyle.transUnit)(currentStyle || {});
			
						return _reactNative2.default.createElement(_reactNative.View, {
							style: [styles.container, (0, _filterStyle.createViewStyle)(this._style.style)] }, new Array(count + 1).join("|").split("").map(function (item, index) {
							if (index === current) {
								return _reactNative2.default.createElement(_reactNative.View, { style: [styles.item, itemStyle, styles.current, currentStyle], key: index });
							} else {
								return _reactNative2.default.createElement(_reactNative.View, { style: [styles.item, itemStyle], key: index });
							}
						}));
					}
				}]);
			
				return SwiperPager;
			}(_Element3.default);
			
			exports.default = SwiperPager;
			
			var styles = _reactNative.StyleSheet.create({
				container: {
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center"
				},
				item: {
					width: 8,
					height: 8,
					borderRadius: 4,
					backgroundColor: "rgba(255,255,255,0.8)",
					marginHorizontal: 3,
					overflow: "hidden"
				},
				current: {
					backgroundColor: "#38f"
				}
			});
		},		// dist/components/ParallaxScroll.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var ParallaxScroll = function (_Element) {
				_inherits(ParallaxScroll, _Element);
			
				function ParallaxScroll(props) {
					_classCallCheck(this, ParallaxScroll);
			
					var _this = _possibleConstructorReturn(this, (ParallaxScroll.__proto__ || Object.getPrototypeOf(ParallaxScroll)).call(this, props));
			
					_this.state = {
						y: new _reactNative.Animated.Value(0)
					};
					return _this;
				}
			
				_createClass(ParallaxScroll, [{
					key: "setY",
					value: function setY(y) {
						this.state.y.setValue(y);
					}
				}, {
					key: "render",
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.Animated.View, {
							style: [this._style.style, {
								transform: [{
									translateY: this.state.y
								}]
							}] }, this.props.children);
					}
				}]);
			
				return ParallaxScroll;
			}(_Element3.default);
			
			exports.default = ParallaxScroll;
		},		// dist/components/GuideMask.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.GuideMask = undefined;
			
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _Container = __inner_require__(13 /*dist/components/Container.js*/);
			
			var _Container2 = _interopRequireDefault(_Container);
			
			var _NodeMethods = __inner_require__(37 /*dist/tools/NodeMethods.js*/);
			
			var _NodeMethods2 = _interopRequireDefault(_NodeMethods);
			
			var _Element = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element2 = _interopRequireDefault(_Element);
			
			var _readyRun = __inner_require__(16 /*dist/lib/readyRun.js*/);
			
			var _readyRun2 = _interopRequireDefault(_readyRun);
			
			var _asyncList = __inner_require__(38 /*dist/lib/asyncList.js*/);
			
			var _asyncList2 = _interopRequireDefault(_asyncList);
			
			var _Screen = __inner_require__(15 /*dist/tools/Screen.js*/);
			
			var _Screen2 = _interopRequireDefault(_Screen);
			
			var _ScrollView = __inner_require__(26 /*dist/components/ScrollView.js*/);
			
			var _ScrollView2 = _interopRequireDefault(_ScrollView);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var layerContainer;
			var waitLayerContainer = new _readyRun2.default();
			
			var _Dimensions$get = _reactNative.Dimensions.get("window"),
			    width = _Dimensions$get.width,
			    height = _Dimensions$get.height;
			// 屏幕对角线的长度
			
			
			var borderWidth = Math.pow(Math.pow(width, 2) + Math.pow(height, 2), 0.5) | 0;
			
			//var useAnimate = borderWidth > 800 ? false : true;
			var useAnimate = true;
			
			// 所有弹出层Layer的包裹容器，挂载在Container节点下
			
			var GuideMask = exports.GuideMask = function (_React$Component) {
				_inherits(GuideMask, _React$Component);
			
				function GuideMask() {
					_classCallCheck(this, GuideMask);
			
					var _this = _possibleConstructorReturn(this, (GuideMask.__proto__ || Object.getPrototypeOf(GuideMask)).call(this));
			
					_this.points = [];
					_this.lastScrollView = null;
					_this.onClose = null;
			
					if (_reactNative.Platform.OS === "ios") {
						var left = new _reactNative.Animated.Value(0);
						var top = new _reactNative.Animated.Value(0);
						var right = new _reactNative.Animated.Value(0);
						var bottom = new _reactNative.Animated.Value(0);
						var radius = new _reactNative.Animated.Value(0);
						var minusRadius = new _reactNative.Animated.multiply(radius, new _reactNative.Animated.Value(-1));
			
						_this.state = {
							isOpen: false,
							left: left,
							top: top,
							right: right,
							bottom: bottom,
							screenWidth: 0,
							screenHeight: 0,
							radius: radius,
							maskRadius: _reactNative.Animated.multiply(radius, new _reactNative.Animated.Value(2)),
							maskLeft: _reactNative.Animated.add(left, minusRadius),
							maskRight: _reactNative.Animated.add(right, minusRadius),
							maskTop: _reactNative.Animated.add(top, minusRadius),
							maskBottom: _reactNative.Animated.add(bottom, minusRadius),
							infoNode: null,
							infoLeft: new _reactNative.Animated.Value(0),
							infoTop: new _reactNative.Animated.Value(0),
							infoOpacity: new _reactNative.Animated.Value(0),
							infoScale: new _reactNative.Animated.Value(0.5)
						};
					} else {
						var _radius = new _reactNative.Animated.Value(0);
						_this.state = {
							isOpen: false,
							left: new _reactNative.Animated.Value(0),
							top: new _reactNative.Animated.Value(0),
							width: new _reactNative.Animated.Value(0),
							height: new _reactNative.Animated.Value(0),
							radius: _radius,
							minusRadius: new _reactNative.Animated.multiply(_radius, new _reactNative.Animated.Value(-1)),
							radius2: new _reactNative.Animated.multiply(_radius, new _reactNative.Animated.Value(2)),
							infoNode: null,
							infoLeft: new _reactNative.Animated.Value(0),
							infoTop: new _reactNative.Animated.Value(0),
							infoOpacity: new _reactNative.Animated.Value(0),
							infoScale: new _reactNative.Animated.Value(0.5)
						};
					}
					return _this;
				}
			
				_createClass(GuideMask, [{
					key: "componentDidMount",
					value: function componentDidMount() {
						layerContainer = this;
						waitLayerContainer.ready();
					}
			
					// 最后一个聚焦点的scrollView
			
				}, {
					key: "viewPoint",
					value: function viewPoint(animated) {
						var _this2 = this;
			
						animated = animated === false ? false : useAnimate;
			
						if (this.points.length) {
							(function () {
								var point = _this2.points.shift();
								var target = point.target;
			
								var _Screen$size = _Screen2.default.size,
								    width = _Screen$size.width,
								    height = _Screen$size.height;
			
								var showInfo = function showInfo() {
									if (point.info) {
										_this2.state.infoLeft.setValue(point.info.left);
										_this2.state.infoTop.setValue(point.info.top);
										_this2.setState({
											infoNode: point.info.target
										});
			
										if (animated) {
											_reactNative.Animated.parallel([_reactNative.Animated.timing(_this2.state.infoOpacity, {
												toValue: 1,
												easing: _reactNative.Easing.linear,
												duration: 200
											}), _reactNative.Animated.timing(_this2.state.infoScale, {
												toValue: 1,
												easing: _reactNative.Easing.linear,
												duration: 200
											})]).start();
										} else {
											_this2.state.infoOpacity.setValue(1);
											_this2.state.infoScale.setValue(1);
										}
									} else {
										_this2.setState({
											infoNode: null
										});
									}
			
									if (_this2.points.length === 0) {
										_this2.close();
			
										if (_this2.onClose) {
											_this2.onClose();
										}
									}
								};
			
								// 如果当前聚焦点不在可视区域内，需要滚动滚动条，将聚焦点滚动到目标区域内
								var scrollView = point.scrollView;
								if (scrollView) {
									var endScrollTop = scrollView.scrollTop;
			
									if (target.top + target.height > height + scrollView.scrollTop) {
										endScrollTop = target.top + target.height - height;
			
										scrollView.scrollTo(scrollView.scrollLeft, endScrollTop);
									} else if (target.top < scrollView.scrollTop) {
										endScrollTop = target.top;
			
										scrollView.scrollTop(scrollView.scrollLeft, endScrollTop);
									}
			
									target.top -= endScrollTop;
									if (point.info) {
										point.info.top -= endScrollTop;
									}
			
									_this2.lastScrollView = scrollView;
								}
			
								if (_this2.points.length === 0) {
									if (_this2.lastScrollView) {
										_this2.lastScrollView.scrollTo(0, 0);
									}
								}
			
								if (_reactNative.Platform.OS === "ios") {
									if (animated) {
										var animates = [_reactNative.Animated.timing(_this2.state.left, {
											toValue: target.left,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}), _reactNative.Animated.timing(_this2.state.top, {
											toValue: target.top,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}), _reactNative.Animated.timing(_this2.state.right, {
											toValue: width - target.width - target.left,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}), _reactNative.Animated.timing(_this2.state.bottom, {
											toValue: height - target.height - target.top,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										})];
			
										if (point.radius === 0) {
											animates.push(_reactNative.Animated.timing(_this2.state.radius, {
												toValue: 1,
												easing: _reactNative.Easing.out(_reactNative.Easing.exp)
											}));
										} else {
											animates.push(_reactNative.Animated.timing(_this2.state.radius, {
												toValue: point.radius,
												easing: _reactNative.Easing.out(_reactNative.Easing.exp)
											}));
										}
			
										if (_this2.state.infoNode) {
											animates.push(_reactNative.Animated.timing(_this2.state.infoOpacity, {
												toValue: 0,
												easing: _reactNative.Easing.linear,
												duration: 200
											}));
											animates.push(_reactNative.Animated.timing(_this2.state.infoScale, {
												toValue: 0.5,
												easing: _reactNative.Easing.linear,
												duration: 200
											}));
										}
			
										_reactNative.Animated.parallel(animates).start();
			
										_reactNative.InteractionManager.runAfterInteractions(function () {
											showInfo();
										});
									} else {
										_this2.state.left.setValue(target.left);
										_this2.state.top.setValue(target.top);
										_this2.state.right.setValue(width - target.width - target.left);
										_this2.state.bottom.setValue(height - target.height - target.top);
										_this2.state.radius.setValue(point.radius);
										if (_this2.state.infoNode) {
											_this2.state.infoOpacity.setValue(0);
											_this2.state.infoScale.setValue(0.5);
										}
			
										showInfo();
									}
								} else {
									if (animated) {
										var _animates = [_reactNative.Animated.timing(_this2.state.left, {
											toValue: target.left,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}), _reactNative.Animated.timing(_this2.state.top, {
											toValue: target.top,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}), _reactNative.Animated.timing(_this2.state.width, {
											toValue: target.width + borderWidth * 2,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}), _reactNative.Animated.timing(_this2.state.height, {
											toValue: target.height + borderWidth * 2,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										})];
			
										_animates.push(_reactNative.Animated.timing(_this2.state.radius, {
											toValue: point.radius,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}));
			
										if (_this2.state.infoNode) {
											_animates.push(_reactNative.Animated.timing(_this2.state.infoOpacity, {
												toValue: 0,
												easing: _reactNative.Easing.linear,
												duration: 200
											}));
											_animates.push(_reactNative.Animated.timing(_this2.state.infoScale, {
												toValue: 0.5,
												easing: _reactNative.Easing.linear,
												duration: 200
											}));
										}
			
										_reactNative.Animated.parallel(_animates).start();
			
										// InteractionManager.runAfterInteractions(() => {
										// 	showInfo();
										// });
										setTimeout(showInfo, 300);
									} else {
										_this2.state.left.setValue(target.left);
										_this2.state.top.setValue(target.top);
										_this2.state.width.setValue(target.width + borderWidth * 2);
										_this2.state.height.setValue(target.height + borderWidth * 2);
										_this2.state.radius.setValue(point.radius);
										if (_this2.state.infoNode) {
											_this2.state.infoOpacity.setValue(0);
											_this2.state.infoScale.setValue(0.5);
										}
			
										showInfo();
									}
								}
							})();
						}
					}
				}, {
					key: "_open",
					value: function _open(points) {
						var _this3 = this;
			
						this.points = points;
			
						this.viewPoint(false);
			
						var _Screen$size2 = _Screen2.default.size,
						    width = _Screen$size2.width,
						    height = _Screen$size2.height;
			
						this.setState({
							isOpen: true,
							screenWidth: width,
							screenHeight: height
						}, function () {
							_this3.viewPoint();
						});
					}
				}, {
					key: "open",
					value: function open(points, onClose) {
						var _this4 = this;
			
						this.lastScrollView = null;
						this.onClose = onClose;
			
						var _Screen$size3 = _Screen2.default.size,
						    width = _Screen$size3.width,
						    height = _Screen$size3.height;
			
						points.unshift({
							target: {
								left: 0,
								top: 0,
								width: width,
								height: height
							}
						});
						points.push({
							target: {
								left: 0,
								top: 0,
								width: width,
								height: height
							}
						});
			
						(0, _asyncList2.default)(points.map(function (point) {
							return function (callback) {
								var transOther = function transOther() {
									// 计算padding
									var padding = point.padding;
									if (padding) {
										var paddingTop = 0;
										var paddingRight = 0;
										var paddingBottom = 0;
										var paddingLeft = 0;
			
										switch (typeof padding === "undefined" ? "undefined" : _typeof(padding)) {
											case "number":
												paddingTop = paddingRight = paddingBottom = paddingLeft = padding;
												break;
											case "string":
												padding = padding.split(/\s+/);
												switch (padding.length) {
													case 1:
														paddingTop = paddingRight = paddingBottom = paddingLeft = +padding[0];
														break;
													case 2:
														paddingTop = paddingBottom = +padding[0];
														paddingRight = paddingLeft = +padding[1];
														break;
													case 3:
														paddingTop = +padding[0];
														paddingRight = paddingLeft = +padding[1];
														paddingBottom = +padding[2];
														break;
													case 4:
														paddingTop = +padding[0];
														paddingRight = +padding[1];
														paddingBottom = +padding[2];
														paddingLeft = +padding[3];
														break;
												}
												break;
										}
			
										point.target.left -= paddingLeft;
										point.target.top -= paddingTop;
										point.target.width += paddingLeft + paddingRight;
										point.target.height += paddingTop + paddingBottom;
									}
			
									if (!point.radius) {
										point.radius = 0;
									} else if (point.radius === "half") {
										point.radius = Math.min(point.target.width, point.target.height) / 2;
									}
			
									if (point.info) {
										if (!point.info.offset) {
											point.info.offset = {
												left: 0,
												top: 0
											};
										}
			
										point.info.left = point.target.left + point.info.offset.left;
										point.info.top = point.target.top + point.info.offset.top;
									}
			
									callback();
								};
			
								if (point.target instanceof _Element2.default) {
									(0, _NodeMethods2.default)(point.target).measure(function (x, y, width, height) {
										var target = point.target.parentNode;
										while (target && !(target instanceof _ScrollView2.default)) {
											target = target.parentNode;
										}
										if (target instanceof _ScrollView2.default) {
											point.scrollView = target;
										}
			
										point.target = {
											left: x,
											top: y,
											width: width,
											height: height
										};
			
										transOther();
									});
								} else {
									transOther();
								}
							};
						}), function () {
							_this4._open(points);
						});
					}
				}, {
					key: "close",
					value: function close() {
						this.setState({
							isOpen: false
						});
					}
				}, {
					key: "render",
					value: function render() {
						if (this.state.isOpen) {
							if (_reactNative.Platform.OS === "ios") {
								return _reactNative2.default.createElement(_reactNative.TouchableOpacity, { style: styles.container, onPress: this.viewPoint.bind(this), activeOpacity: 1 }, _reactNative2.default.createElement(_reactNative.View, {
									style: [styles.container, {
										opacity: 0.8
									}] }, _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.border, styles.borderTop, {
										width: this.state.screenWidth,
										height: this.state.top
									}] }), _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.border, styles.borderRight, {
										width: this.state.right,
										height: this.state.screenHeight
									}] }), _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.border, styles.borderBottom, {
										width: this.state.screenWidth,
										height: this.state.bottom
									}] }), _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.border, styles.borderLeft, {
										width: this.state.left,
										height: this.state.screenHeight
									}] }), _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.mask, {
										left: this.state.maskLeft,
										right: this.state.maskRight,
										top: this.state.maskTop,
										bottom: this.state.maskBottom,
										borderRadius: this.state.maskRadius,
										borderWidth: this.state.radius
									}] })), _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.info, {
										transform: [{
											translateX: this.state.infoLeft
										}, {
											translateY: this.state.infoTop
										}, {
											scale: this.state.infoScale
										}],
										opacity: this.state.infoOpacity
									}] }, this.state.infoNode));
							} else {
								return _reactNative2.default.createElement(_reactNative.TouchableOpacity, { style: styles.container, onPress: this.viewPoint.bind(this), activeOpacity: 1 }, _reactNative2.default.createElement(_reactNative.View, {
									style: [styles.container, {
										opacity: 0.8
									}] }, _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.mask, {
										transform: [{
											translateX: this.state.left
										}, {
											translateY: this.state.top
										}],
										width: this.state.width,
										height: this.state.height
										//borderRadius: this.state.radius
									}] }, _reactNative2.default.createElement(_reactNative.View, { style: styles.maskContent }, _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.maskRadius, {
										left: this.state.minusRadius,
										right: this.state.minusRadius,
										top: this.state.minusRadius,
										bottom: this.state.minusRadius,
										borderWidth: this.state.radius,
										borderRadius: this.state.radius2
									}] })))), _reactNative2.default.createElement(_reactNative.Animated.View, {
									style: [styles.info, {
										transform: [{
											translateX: this.state.infoLeft
										}, {
											translateY: this.state.infoTop
										}, {
											scale: this.state.infoScale
										}],
										opacity: this.state.infoOpacity
									}] }, this.state.infoNode));
							}
						} else {
							return null;
						}
					}
				}]);
			
				return GuideMask;
			}(_reactNative2.default.Component);
			
			var styles = _reactNative.Platform.OS === "ios" ? _reactNative.StyleSheet.create({
				container: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					overflow: "hidden",
					backgroundColor: "transparent"
				},
				border: {
					position: "absolute",
					backgroundColor: "#000"
				},
				borderTop: {
					left: 0,
					top: 0
				},
				borderRight: {
					right: 0,
					top: 0
				},
				borderBottom: {
					left: 0,
					bottom: 0
				},
				borderLeft: {
					left: 0,
					top: 0
				},
				mask: {
					position: "absolute",
					borderStyle: "solid",
					borderColor: "#000"
				},
				info: {
					position: "absolute",
					left: 0,
					top: 0
				}
			}) : _reactNative.StyleSheet.create({
				container: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					overflow: "hidden",
					backgroundColor: "transparent"
				},
				mask: {
					position: "absolute",
					left: -borderWidth,
					top: -borderWidth,
					borderWidth: borderWidth,
					borderStyle: "solid",
					borderColor: "rgba(0,0,0,.8)"
				},
				maskContent: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					overflow: "hidden"
				},
				maskRadius: {
					position: "absolute",
					borderStyle: "solid",
					borderColor: "rgba(0,0,0,.8)"
				},
				info: {
					position: "absolute",
					left: 0,
					top: 0
				}
			});
			
			_Container2.default.appendComponent(_reactNative2.default.createElement(GuideMask, null), 20);
			
			exports.default = {
				open: function open(points, onClose) {
					waitLayerContainer.ready(function () {
						layerContainer.open(points, onClose);
					});
				},
				close: function close() {
					waitLayerContainer.ready(function () {
						layerContainer.close();
					});
				}
			};
		},		// dist/tools/NodeMethods.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = NodeMethods;
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function NodeMethods(node) {
				var nativeNode = node.nativeNode;
			
				return {
					measure: function measure(offsetParent, callback) {
						var promise = null;
			
						if (arguments.length === 0 || arguments.length === 1 && typeof offsetParent === "function") {
							callback = offsetParent;
			
							if (!callback) {
								promise = new Promise(function (resolve, reject) {
									callback = function callback(x, y, width, height) {
										resolve({
											x: x,
											y: y,
											width: width,
											height: height
										});
									};
								});
							}
			
							nativeNode.measure(function (x, y, width, height, pageX, pageY) {
								callback(pageX, pageY, width, height);
							});
						} else {
							if (!callback) {
								promise = new Promise(function (resolve, reject) {
									callback = function callback(x, y, width, height) {
										resolve({
											x: x,
											y: y,
											width: width,
											height: height
										});
									};
								});
							}
			
							if (offsetParent === "parent") {
								nativeNode.measure(callback);
							} else {
								if (_reactNative.Platform.OS === "ios") {
									(function () {
										// ios下当元素还没有布局的时候，调用measureLayout方法会报错，所以ios下改用measure方法计算
										var x = void 0,
										    y = void 0,
										    width = void 0,
										    height = void 0;
										var _node = node;
			
										var measure = function measure() {
											if ((_node = _node.parentNode) && _node !== offsetParent && _node.nativeNode && _node.nativeNode.measure) {
												_node.nativeNode.measure(function (_x, _y, _width, _height) {
													x += _x;
													y += _y;
			
													measure();
												});
											} else {
												callback(x, y, width, height);
											}
										};
			
										nativeNode.measure(function (_x, _y, _width, _height) {
											x = _x;
											y = _y;
											width = _width;
											height = _height;
			
											measure();
										});
									})();
								} else {
									nativeNode.measureLayout(_reactNative2.default.findNodeHandle(offsetParent), callback);
								}
							}
						}
			
						return promise;
					},
			
					get style() {
						return node.style;
					},
			
					set style(style) {
						node.style = style;
					},
			
					setNativeProps: function setNativeProps(props) {
						nativeNode.setNativeProps(props);
					}
				};
			}
		},		// dist/lib/asyncList.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (list, callback) {
				var count = list.length,
				    results = [];
				if (list && count > 0) {
					list.forEach(function (item, index) {
						item(function (result) {
							results[index] = result;
							count--;
							if (count === 0) {
								callback.apply(null, results);
							}
						});
					});
				} else {
					callback();
				}
			};
			
			; // 异步列表
		},		// dist/components/Toast.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.Toast = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _Container = __inner_require__(13 /*dist/components/Container.js*/);
			
			var _Container2 = _interopRequireDefault(_Container);
			
			var _readyRun = __inner_require__(16 /*dist/lib/readyRun.js*/);
			
			var _readyRun2 = _interopRequireDefault(_readyRun);
			
			var _Screen = __inner_require__(15 /*dist/tools/Screen.js*/);
			
			var _Screen2 = _interopRequireDefault(_Screen);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			var layerContainer;
			var waitLayerContainer = new _readyRun2.default();
			
			var margin = 20;
			
			// 所有弹出层Layer的包裹容器，挂载在Container节点下
			
			var Toast = exports.Toast = function (_React$Component) {
				_inherits(Toast, _React$Component);
			
				function Toast() {
					_classCallCheck(this, Toast);
			
					var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this));
			
					_this.duration = 0;
			
					_this.state = {
						isShow: false,
						message: "",
						opacity: new _reactNative.Animated.Value(0)
					};
					return _this;
				}
			
				_createClass(Toast, [{
					key: "componentDidMount",
					value: function componentDidMount() {
						layerContainer = this;
						waitLayerContainer.ready();
					}
				}, {
					key: "show",
					value: function show(message, duration) {
						var _this2 = this;
			
						this.duration = duration;
			
						this.setState({
							isShow: true,
							message: message
						}, function () {
							_reactNative.Animated.timing(_this2.state.opacity, {
								toValue: 1,
								easing: _reactNative.Easing.linear,
								duration: 50
							}).start();
			
							setTimeout(function () {
								_reactNative.Animated.timing(_this2.state.opacity, {
									toValue: 0,
									easing: _reactNative.Easing.linear,
									duration: 300
								}).start();
			
								_reactNative.InteractionManager.runAfterInteractions(function () {
									_this2.setState({
										isShow: false,
										message: ""
									});
								});
							}, _this2.duration || 1500);
						});
					}
				}, {
					key: "render",
					value: function render() {
						if (this.state.isShow) {
							return _reactNative2.default.createElement(_reactNative.View, { style: styles.container, pointerEvents: "none" }, _reactNative2.default.createElement(_reactNative.Animated.View, { style: [styles.messageContainer, {
									opacity: this.state.opacity
								}] }, _reactNative2.default.createElement(_reactNative.Text, { style: styles.message }, this.state.message)));
						} else {
							return null;
						}
					}
				}]);
			
				return Toast;
			}(_reactNative2.default.Component);
			
			var styles = _reactNative.StyleSheet.create({
				container: {
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					justifyContent: "center",
					alignItems: "center"
				},
				messageContainer: _reactNative.Platform.OS === "ios" ? {
					backgroundColor: "rgba(0,0,0,.8)",
					borderRadius: 5,
					paddingTop: 4,
					paddingBottom: 10,
					paddingHorizontal: 10,
					margin: margin
				} : {
					backgroundColor: "rgba(0,0,0,.8)",
					borderRadius: 5,
					paddingTop: 7,
					paddingBottom: 7,
					paddingHorizontal: 10,
					margin: margin
				},
				message: {
					fontSize: 12,
					lineHeight: 18,
					color: "#fff"
				}
			});
			
			_Container2.default.appendComponent(_reactNative2.default.createElement(Toast, null), 30);
			
			exports.default = {
				show: function show(message, duration) {
					waitLayerContainer.ready(function () {
						layerContainer.show(message, duration);
					});
				},
			
				SHORT: 1500,
				LONG: 3000
			};
		},		// dist/components/SearchInput.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _Element2 = __inner_require__(5 /*dist/tag/Element.js*/);
			
			var _Element3 = _interopRequireDefault(_Element2);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = _interopRequireDefault(_reactNative);
			
			var _filterStyle = __inner_require__(6 /*dist/style/filterStyle.js*/);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _objectWithoutProperties(obj, keys) {
				var target = {};for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
				}return target;
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
			}
			
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}
			
			function fixLineHeight(style) {
				if (style.lineHeight && style.fontSize) {
					if (typeof style.lineHeight === "number" || /^\d+(\.\d+)?$/.test(style.lineHeight)) {
						// 兼容倍数行高
						style.lineHeight = style.fontSize * style.lineHeight | 0;
					} else {
						style.lineHeight = parseInt(style.lineHeight);
					}
				}
				return style;
			}
			
			var Span = function (_React$Component) {
				_inherits(Span, _React$Component);
			
				function Span(props) {
					_classCallCheck(this, Span);
			
					var _this = _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).call(this, props));
			
					_this.state = {
						text: props.text,
						style: props.style
					};
					return _this;
				}
			
				_createClass(Span, [{
					key: "render",
					value: function render() {
						return _reactNative2.default.createElement(_reactNative.Text, { ref: "_native_node", style: this.state.style }, this.state.text || this.props.placeholder);
					}
				}, {
					key: "node",
					get: function get() {
						return this.refs["_native_node"];
					}
				}, {
					key: "text",
					set: function set(text) {
						this.setState({
							text: text
						});
					}
				}, {
					key: "style",
					set: function set(style) {
						this.setState({
							style: style
						});
					}
				}]);
			
				return Span;
			}(_reactNative2.default.Component);
			
			var Input = function (_Element) {
				_inherits(Input, _Element);
			
				function Input(props) {
					_classCallCheck(this, Input);
			
					var _this2 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
			
					_this2._value = "";
			
					_this2.state = {
						iconMarginLeft: new _reactNative.Animated.Value(0),
						placeholderTextOpacity: new _reactNative.Animated.Value(1),
						clearButtonX: _reactNative.Platform.OS === "android" ? new _reactNative.Animated.Value(props.value ? 0 : 1000) : null
					};
			
					_this2._value = props.value;
			
					if (_reactNative.Platform.OS === 'android') {
						_reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
					}
					return _this2;
				}
			
				_createClass(Input, [{
					key: "shouldComponentUpdate",
					value: function shouldComponentUpdate(nextProps, nextState) {
						return false;
					}
				}, {
					key: "focus",
					value: function focus() {
						this.refs.input.focus();
					}
				}, {
					key: "blur",
					value: function blur() {
						this.refs.input.blur();
					}
				}, {
					key: "render",
					value: function render() {
						var _this3 = this;
			
						var _props = this.props,
						    css = _props.css,
						    style = _props.style,
						    value = _props.value,
						    _onFocus = _props.onFocus,
						    _onBlur = _props.onBlur,
						    placeholder = _props.placeholder,
						    props = _objectWithoutProperties(_props, ["css", "style", "value", "onFocus", "onBlur", "placeholder"]);
			
						var containerStyle = (0, _filterStyle.createViewStyle)(this._style.style);
						var inputStyle = fixLineHeight((0, _filterStyle.createInheritStyle)(this._style.style));
						var textStyle = (0, _filterStyle.createTextStyle)((0, _filterStyle.createInheritStyle)(this._style.style));
			
						if (_reactNative.Platform.OS === "android") {
							props.underlineColorAndroid = "transparent";
							props.textAlignVertical = "center";
							inputStyle.padding = 0;
							delete inputStyle.lineHeight;
						}
			
						var refreshStyle = function refreshStyle(isFocus) {
							if (isFocus) {
								if (_reactNative.Platform.OS === "android" && _this3._value) {
									_this3.state.clearButtonX.setValue(0);
								}
			
								_this3.refs.placeholderText.node.measure(function (x, y, width, height) {
									_reactNative.Animated.timing(_this3.state.iconMarginLeft, {
										duration: 300,
										toValue: -(x - 18) * 2 + 14,
										easing: _reactNative.Easing.out(_reactNative.Easing.exp)
									}).start();
									_reactNative.InteractionManager.runAfterInteractions(function () {
										_this3.refs.placeholder.setNativeProps({
											style: [styles.placeholder, {
												justifyContent: "flex-start"
											}]
										});
										_this3.state.iconMarginLeft.setValue(5);
			
										_this3.refs.input.setNativeProps({
											style: [inputStyle, styles.input, {
												opacity: 1
											}]
										});
										if (_this3._value) {
											if (_reactNative.Platform.OS === "android") {
												_this3.refs.input.setNativeProps({
													text: _this3._value
												});
											}
			
											_this3.refs.placeholderText.style = [textStyle, styles.placeholderText, {
												opacity: 0
											}];
										}
									});
								});
							} else {
								if (_reactNative.Platform.OS === "android") {
									_this3.state.clearButtonX.setValue(1000);
								}
			
								_this3.refs.placeholder.measure(function (x, y, width, height) {
									_this3.refs.placeholderText.node.measure(function (_x, _y, _width, _height) {
										_this3.refs.input.setNativeProps({
											style: [inputStyle, styles.input, {
												opacity: 0
											}]
										});
			
										_this3.refs.placeholderText.style = [textStyle, styles.placeholderText, {
											opacity: 1,
											color: _this3._value ? textStyle.color || "#333" : "#999"
										}];
			
										_reactNative.Animated.timing(_this3.state.iconMarginLeft, {
											duration: 300,
											toValue: (width - _width - 18) / 2 + 2,
											easing: _reactNative.Easing.out(_reactNative.Easing.exp)
										}).start();
			
										_reactNative.InteractionManager.runAfterInteractions(function () {
											_this3.refs.placeholder.setNativeProps({
												style: [styles.placeholder, {
													justifyContent: "center"
												}]
											});
											_this3.state.iconMarginLeft.setValue(0);
										});
									});
								});
							}
						};
			
						var onChange = props.onChange;
						delete props.onChange;
						props.onChangeText = this.onChangeText = function (text) {
							if (text && !_this3._value) {
								_this3.refs.placeholderText.style = [textStyle, styles.placeholderText, {
									opacity: 0
								}];
							} else if (!text && _this3._value) {
								_this3.refs.placeholderText.style = [textStyle, styles.placeholderText, {
									opacity: 1
								}];
							}
			
							if (_reactNative.Platform.OS === "android") {
								_this3.state.clearButtonX.setValue(text ? 0 : 1000);
							}
			
							_this3.refs.placeholderText.text = text;
			
							_this3._value = text;
							onChange && onChange(text);
						};
			
						return _reactNative2.default.createElement(_reactNative.View, {
							ref: "_native_node",
							style: containerStyle }, _reactNative2.default.createElement(_reactNative.View, {
							ref: "placeholder",
							style: styles.placeholder,
							onTouchStart: function onTouchStart() {
								_this3.focus();
							} }, _reactNative2.default.createElement(_reactNative.Animated.Image, { ref: "placeholderIcon",
							source: {
								uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHmSURBVHjatNbPahNRFMfxT4LaklC6F0tBqP8eoAS0VIOKuNGNulAQF0XzDrryIRJElIpu6kazKIg2bamWonuJIohEH6AUg4JYNycwxolJ0+QHw/xm7j3nO+fO5NxkqtWqDtqHKyjiBCbj/he8Rg0L+KkHZTqA7uISDneJ/xiwO91A2bbryXjS2wGp4SamMBLHVNxbwqGYW0tUnKo9CT+BRRxDHSWspMR8iuMeTqKMUxF7Do1uFc0HZBXTHSDtWom5qxE7323pWk9VxwVs6V1bEVOPHOVOoFHcwjZuYNPOtRmx25FrNA10OfwSNvSvjcghkfMvUDH8gt2rlaOYBpoJXxsAqJVjJg00Eb4xAFAj8VP5B9RqISOGqCy+hd8/gHwH4vw1DfQu/PQAQMfj/CYNtBb+6gBA1+K8lgZ6Ev4sCruAFHAm/OM00HdUkMFDjPcBGceDyFFBs1OvK2EZR/AcYzuAjEXM0WiypW7d+zreYxZve1zGQsydxQ/8Rq4bqIHzicrW8QJzOIi9yMfYXIytx/Vy9LpiVJfrdSsvRxfuRZVYrhyexQfxKraOZqetXOKd5WM5H+EzfkXgB9yPsXzinTRxES9xur2yzH/+BfWr1MqyQ2hrqZVlh9RD22FPhwVKwhYx8WcACn5yqeDjh3UAAAAASUVORK5CYII="
							},
							style: [styles.placeholderIcon, {
								marginLeft: this.state.iconMarginLeft
							}] }), _reactNative2.default.createElement(Span, { ref: "placeholderText",
							style: [textStyle, styles.placeholderText],
							placeholder: placeholder,
							text: this._value })), _reactNative2.default.createElement(_reactNative.TextInput, _extends({
							ref: "input",
							style: [inputStyle, styles.input, {
								opacity: 0
							}],
							onFocus: function onFocus(e) {
								refreshStyle(true);
								requestAnimationFrame(function () {
									_onFocus && _onFocus(e);
								});
							},
							onBlur: function onBlur(e) {
								refreshStyle(false);
								requestAnimationFrame(function () {
									_onBlur && _onBlur(e);
								});
							},
							autoCapitalize: "none",
							autoCorrect: false,
							defaultValue: this._value,
							clearButtonMode: "while-editing"
						}, props)), _reactNative.Platform.OS === "android" ? _reactNative2.default.createElement(_reactNative.TouchableOpacity, {
							style: {
								position: "absolute",
								top: 0,
								bottom: 0,
								right: 0,
								width: 36,
								paddingHorizontal: 10,
								justifyContent: "center",
								alignItems: "center",
								transform: [{
									translateX: this.state.clearButtonX
								}]
							},
							onPress: function onPress() {
								_this3.refs.input.clear();
								props.onChangeText("");
							} }, _reactNative2.default.createElement(_reactNative.Image, {
							source: {
								uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTFDQkVBMzI0NEREMTFFNkE5ODZERjAwNjdERkVFMkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTFDQkVBMzM0NEREMTFFNkE5ODZERjAwNjdERkVFMkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMUNCRUEzMDQ0REQxMUU2QTk4NkRGMDA2N0RGRUUyRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMUNCRUEzMTQ0REQxMUU2QTk4NkRGMDA2N0RGRUUyRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3/BW8AAAKTSURBVHjavFdBaBNREJ0NrXRbrdJotxcLYm6CipdSyEV6kWohwa6YnhXPvViPHtVDK3jVc4VGUqiKl+Il0luRhXoxxXOMFW01EXqI88JE03X3/7/bXR88COz/8152Zv7+6VtcfEKGOMq8yrzMvMg8wzwuz74zPzHfM98yXzF/mATtM1iTYy4wS8yhkDWjwgnmHeZP5jLzIbOmCp5RPBtgPmBuMW8pxIMwJHu2xMRAVANnmRvyz49QfGDvXYmVMzVwiflO8pwUEKsqsZUG4PIN06Hk4UjsXJgBm1lmnqL0gNgvROsfA/eZFyh9nBetAwZQdPP0/zDfTUXXwD1mf9jq8fHTVCq5ZNu2NjLWzM3d6OxRoF80OwaOySETCMuyKJ+fpLExh1y3oDSBZ65bJMcZ7ezR4Ca0YWBadci0221aXV2jnZ2vlM1mQ010xbPZkc7aSmXN5LCahoEp3cpms0XlcqXHRPGACb/4ykqFWq2WSS1MZaQqKZqJkT8mDiHe6QiLv4YN/nHSdMfgoE2zs38FgZjiwBe8geEoO/xv4hDiwHAmThNzXSYGGNiNsgEp6M25vyYiYhcGtuPmH689qDAjYBsGvLjiyHlYdxjCg4H1uOK6FjXAOgy8ljtc6FFcKMxoq91volic0TYUtGFgj/lcdRRXqxtUr3/WtlrXBNZijwa4tO5Zci3Hp/GD6osYBXhrbXWv7jPPMT92zwFcnZeS6u22/qB4DPGgG5FH6cMLuhEBSO51ZiNF8YZoNMNuxUjFFWY9BfG6xK7p5oJNZj7hdHgSc9N0MqrJnPdIKjYu9iXGRNiMqPoa/pLRDO3ytDdvBkA9PZO9CxIr9nSMdrktV+lrvvH8hKz55hvPX5qO578FGAAx+xilII94jwAAAABJRU5ErkJggg=="
							},
							style: {
								width: 16,
								height: 16
							} })) : null);
					}
				}, {
					key: "value",
					get: function get() {
						return this._value;
					},
					set: function set(value) {
						this._value = value;
						if (this.refs.input) {
							this.refs.input.setNativeProps({ text: value });
						}
						if (this.onChangeText) {
							this.onChangeText(value);
						}
					}
				}]);
			
				return Input;
			}(_Element3.default);
			
			exports.default = Input;
			
			var styles = _reactNative.StyleSheet.create({
				placeholder: {
					position: "absolute",
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center"
				},
				placeholderIcon: {
					width: 13,
					height: 13,
					marginRight: 5
				},
				placeholderText: {
					color: "#999"
				},
				input: {
					flex: 1,
					paddingLeft: 23,
					textAlign: "left",
					backgroundColor: "transparent"
				}
			});
		},		// dist/tools/Geolocation.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _NativeModules = __inner_require__(29 /*dist/lib/NativeModules.js*/);
			
			var _NativeModules2 = _interopRequireDefault(_NativeModules);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function transPosition(position) {
				if (!position.addressDic) {
					position.addressDic = {};
				}
			
				return {
					lat: position.latitude,
					lng: position.longitude,
					accuracy: position.accuracy,
					address: position.fullAddress,
					country: position.addressDic.country,
					province: position.addressDic.province,
					city: position.addressDic.city,
					district: position.addressDic.district,
					streetName: position.addressDic.streetName,
					streetNumber: position.addressDic.streetNumber
				};
			}
			
			exports.default = {
				get: function get() {
					return new Promise(function (resolve, reject) {
						_NativeModules2.default.onReady(function () {
							_NativeModules2.default.MozartGetLocation.getLocationInfoWithCallback(function (err, position) {
								if (err) {
									reject(err);
									return;
								}
			
								if (!position) {
									reject({
										message: ""
									});
									return;
								}
			
								if (_reactNative.Platform.OS === "android") {
									try {
										position = JSON.parse(position);
									} catch (e) {
										reject(e);
										return;
									}
								}
			
								if (position instanceof Array) {
									position = position[0];
								}
			
								try {
									position = transPosition(position);
									resolve(position);
								} catch (e) {
									reject(e);
								}
							});
						});
						// navigator.geolocation.getCurrentPosition((position) => {
						// 	resolve(transPosition(position));
						// }, (error) => {
						// 	switch(error.code)
						// 	{
						// 		case error.PERMISSION_DENIED:
						// 			reject({
						// 				message: "用户不允许地理定位"
						// 			});
						// 			break;
						// 		case error.POSITION_UNAVAILABLE:
						// 			reject({
						// 				message: "无法获取当前位置"
						// 			});
						// 			break;
						// 		case error.TIMEOUT:
						// 			reject({
						// 				message: "获取地理位置超时"
						// 			});
						// 			break;
						// 		case error.UNKNOWN_ERROR:
						// 			reject({
						// 				message: "位置错误"
						// 			});
						// 			break;
						// 	}
						// });
					});
				},
				watch: function watch(listener) {
					// navigator.geolocation.watchPosition((position) => {
					// 	listener(transPosition(position));
					// });
				},
				clearWatch: function clearWatch() {
					// navigator.geolocation.clearWatch();
				}
			};
		},		// dist/tools/Ajax.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (url, options) {
				options = options || {};
			
				return new Promise(function (resolve, reject) {
					_NativeModules2.default.onReady(function () {
						_NativeModules2.default.MozartRequester.request(JSON.stringify({
							"url": url,
							"method": (options.method || "Get").toLowerCase().replace(/^[a-z]/, function (char) {
								return char.toUpperCase();
							}),
							"attris": options.params
						}), function (err, data) {
							if (err) {
								reject(err);
								return;
							}
			
							if (_reactNative.Platform.OS === "android") {
								try {
									data = JSON.parse(data);
								} catch (e) {
									reject(e);
									return;
								}
							}
			
							if (data instanceof Array) {
								data = data[0];
							}
			
							resolve(data);
						});
					});
				});
			};
			
			var _NativeModules = __inner_require__(29 /*dist/lib/NativeModules.js*/);
			
			var _NativeModules2 = _interopRequireDefault(_NativeModules);
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
		},		// dist/tools/Trap.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();
			
			var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
			};
			
			var _NativeModules = __inner_require__(29 /*dist/lib/NativeModules.js*/);
			
			var _NativeModules2 = _interopRequireDefault(_NativeModules);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			
			/**
			 * baseInfo:
				{
					of: ""
				}
			 */
			var baseInfo = {
				"biz": "app-perfecthotel",
				"ch": "",
				"chid": "",
				"if": "11009",
				"of": ""
			};
			
			function send(params) {
				requestAnimationFrame(function () {
					// 由于打点API，只接受string类型的值，所以需要把所有类型的值转为string
					// 傻×的API
					for (var key in params) {
						var value = params[key];
						var type = typeof value === "undefined" ? "undefined" : _typeof(value);
						if (type !== "string") {
							if (type === "undefined" || value === null) {
								params[key] = "";
							} else if (value.toString) {
								params[key] = value.toString();
							}
						}
					}
			
					_NativeModules2.default.MozartCountly.countlyWith(JSON.stringify(params), function (err, data) {
						if (err) {
							console.error(err);
						}
					});
				});
			}
			
			/**
			 * pageInfo:
				{
					页面名称
					pt: ""
				}
			 */
			
			var Trap = function () {
				function Trap(pageInfo) {
					_classCallCheck(this, Trap);
			
					this.pageInfo = pageInfo;
				}
			
				_createClass(Trap, [{
					key: "capture",
					value: function capture(info) {
						var type = info.type;
			
						if (type === "show") {
							this.show(info.params);
						} else if (type === "click") {
							this.click(info.params);
						} else if (type === "info") {
							this.info(info.params);
						}
					}
				}, {
					key: "show",
					value: function show(params) {
						var obj = Object.assign({
							countlyType: "show"
						}, baseInfo, this.pageInfo, params);
			
						send(obj);
					}
			
					// params:
					// {
					// 	cspot: ""
					// }
			
				}, {
					key: "click",
					value: function click(params) {
						var obj = Object.assign({
							countlyType: "click"
						}, baseInfo, this.pageInfo, params);
			
						send(obj);
					}
			
					// params:
					// {
					//	type: "info-n",
					// 	tri: "",
					// 	...
					// }
			
				}, {
					key: "info",
					value: function info(params) {
						var obj = Object.assign({
							countlyType: "info"
						}, baseInfo, this.pageInfo, params);
			
						send(obj);
					}
				}]);
			
				return Trap;
			}();
			
			exports.default = Trap;
		},		// dist/tools/Platform.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			exports.default = {
				OS: _reactNative.Platform.OS,
				isRN: true,
				isIOS: _reactNative.Platform.OS === "ios",
				isAndroid: _reactNative.Platform.OS === "android",
				isWeb: false,
				isH5: false,
				isWeixin: false
			};
		},		// dist/tools/Storage.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			exports.default = {
				get: function get(key) {
					return new Promise(function (resolve, reject) {
						_reactNative.AsyncStorage.getItem(key).then(function (value) {
							resolve(JSON.parse(value));
						}).catch(function (e) {
							reject(e);
						});
					});
				},
				set: function set(key, value) {
					return _reactNative.AsyncStorage.setItem(key, JSON.stringify(value));
				},
				remove: function remove(key) {
					return _reactNative.AsyncStorage.removeItem(key);
				},
				clear: function clear() {
					return _reactNative.AsyncStorage.clear();
				}
			};
		}
	];
});