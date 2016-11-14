loader.define("react@15.3/lib/React.js", ["object-assign@4/index.js", "react@15.3/lib/ReactChildren.js", "react@15.3/lib/ReactComponent.js", "react@15.3/lib/ReactClass.js", "react@15.3/lib/ReactElement.js", "react@15.3/lib/ReactPropTypes.js", "react@15.3/lib/ReactVersion.js", "fbjs@0.8/lib/warning.js", "react@15.3/lib/ReactNoopUpdateQueue.js", "fbjs@0.8/lib/emptyObject.js", "react@15.3/lib/ReactCurrentOwner.js", "react@15.3/lib/ReactComponentTreeHook.js", "react@15.3/lib/ReactPropTypeLocations.js", "react@15.3/lib/checkReactTypeSpec.js", "react@15.3/lib/canDefineProperty.js", "react@15.3/lib/getIteratorFn.js", "react@15.3/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/React.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var ReactChildren = require('react@15.3/lib/ReactChildren.js');
			var ReactComponent = require('react@15.3/lib/ReactComponent.js');
			var ReactPureComponent = __inner_require__(1 /*lib/ReactPureComponent.js*/);
			var ReactClass = require('react@15.3/lib/ReactClass.js');
			var ReactDOMFactories = __inner_require__(2 /*lib/ReactDOMFactories.js*/);
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			var ReactPropTypes = require('react@15.3/lib/ReactPropTypes.js');
			var ReactVersion = require('react@15.3/lib/ReactVersion.js');
			
			var onlyChild = __inner_require__(4 /*lib/onlyChild.js*/);
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var createElement = ReactElement.createElement;
			var createFactory = ReactElement.createFactory;
			var cloneElement = ReactElement.cloneElement;
			
			if (process.env.NODE_ENV !== 'production') {
			  var ReactElementValidator = __inner_require__(3 /*lib/ReactElementValidator.js*/);
			  createElement = ReactElementValidator.createElement;
			  createFactory = ReactElementValidator.createFactory;
			  cloneElement = ReactElementValidator.cloneElement;
			}
			
			var __spread = _assign;
			
			if (process.env.NODE_ENV !== 'production') {
			  var warned = false;
			  __spread = function __spread() {
			    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
			    warned = true;
			    return _assign.apply(null, arguments);
			  };
			}
			
			var React = {
			
			  // Modern
			
			  Children: {
			    map: ReactChildren.map,
			    forEach: ReactChildren.forEach,
			    count: ReactChildren.count,
			    toArray: ReactChildren.toArray,
			    only: onlyChild
			  },
			
			  Component: ReactComponent,
			  PureComponent: ReactPureComponent,
			
			  createElement: createElement,
			  cloneElement: cloneElement,
			  isValidElement: ReactElement.isValidElement,
			
			  // Classic
			
			  PropTypes: ReactPropTypes,
			  createClass: ReactClass.createClass,
			  createFactory: createFactory,
			  createMixin: function createMixin(mixin) {
			    // Currently a noop. Will be used to validate and trace mixins.
			    return mixin;
			  },
			
			  // This looks DOM specific but these are actually isomorphic helpers
			  // since they are just generating DOM strings.
			  DOM: ReactDOMFactories,
			
			  version: ReactVersion,
			
			  // Deprecated hook for JSX spread, don't use this for anything.
			  __spread: __spread
			};
			
			module.exports = React;
		},		// lib/ReactPureComponent.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var ReactComponent = require('react@15.3/lib/ReactComponent.js');
			var ReactNoopUpdateQueue = require('react@15.3/lib/ReactNoopUpdateQueue.js');
			
			var emptyObject = require('fbjs@0.8/lib/emptyObject.js');
			
			/**
			 * Base class helpers for the updating state of a component.
			 */
			function ReactPureComponent(props, context, updater) {
			  // Duplicated from ReactComponent.
			  this.props = props;
			  this.context = context;
			  this.refs = emptyObject;
			  // We initialize the default updater but the real one gets injected by the
			  // renderer.
			  this.updater = updater || ReactNoopUpdateQueue;
			}
			
			function ComponentDummy() {}
			ComponentDummy.prototype = ReactComponent.prototype;
			ReactPureComponent.prototype = new ComponentDummy();
			ReactPureComponent.prototype.constructor = ReactPureComponent;
			// Avoid an extra prototype jump for these methods.
			_assign(ReactPureComponent.prototype, ReactComponent.prototype);
			ReactPureComponent.prototype.isPureReactComponent = true;
			
			module.exports = ReactPureComponent;
		},		// lib/ReactDOMFactories.js
		function(__inner_require__, exports, module){
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			
			/**
			 * Create a factory that creates HTML tag elements.
			 *
			 * @private
			 */
			var createDOMFactory = ReactElement.createFactory;
			if (process.env.NODE_ENV !== 'production') {
			  var ReactElementValidator = __inner_require__(3 /*lib/ReactElementValidator.js*/);
			  createDOMFactory = ReactElementValidator.createFactory;
			}
			
			/**
			 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
			 * This is also accessible via `React.DOM`.
			 *
			 * @public
			 */
			var ReactDOMFactories = {
			  a: createDOMFactory('a'),
			  abbr: createDOMFactory('abbr'),
			  address: createDOMFactory('address'),
			  area: createDOMFactory('area'),
			  article: createDOMFactory('article'),
			  aside: createDOMFactory('aside'),
			  audio: createDOMFactory('audio'),
			  b: createDOMFactory('b'),
			  base: createDOMFactory('base'),
			  bdi: createDOMFactory('bdi'),
			  bdo: createDOMFactory('bdo'),
			  big: createDOMFactory('big'),
			  blockquote: createDOMFactory('blockquote'),
			  body: createDOMFactory('body'),
			  br: createDOMFactory('br'),
			  button: createDOMFactory('button'),
			  canvas: createDOMFactory('canvas'),
			  caption: createDOMFactory('caption'),
			  cite: createDOMFactory('cite'),
			  code: createDOMFactory('code'),
			  col: createDOMFactory('col'),
			  colgroup: createDOMFactory('colgroup'),
			  data: createDOMFactory('data'),
			  datalist: createDOMFactory('datalist'),
			  dd: createDOMFactory('dd'),
			  del: createDOMFactory('del'),
			  details: createDOMFactory('details'),
			  dfn: createDOMFactory('dfn'),
			  dialog: createDOMFactory('dialog'),
			  div: createDOMFactory('div'),
			  dl: createDOMFactory('dl'),
			  dt: createDOMFactory('dt'),
			  em: createDOMFactory('em'),
			  embed: createDOMFactory('embed'),
			  fieldset: createDOMFactory('fieldset'),
			  figcaption: createDOMFactory('figcaption'),
			  figure: createDOMFactory('figure'),
			  footer: createDOMFactory('footer'),
			  form: createDOMFactory('form'),
			  h1: createDOMFactory('h1'),
			  h2: createDOMFactory('h2'),
			  h3: createDOMFactory('h3'),
			  h4: createDOMFactory('h4'),
			  h5: createDOMFactory('h5'),
			  h6: createDOMFactory('h6'),
			  head: createDOMFactory('head'),
			  header: createDOMFactory('header'),
			  hgroup: createDOMFactory('hgroup'),
			  hr: createDOMFactory('hr'),
			  html: createDOMFactory('html'),
			  i: createDOMFactory('i'),
			  iframe: createDOMFactory('iframe'),
			  img: createDOMFactory('img'),
			  input: createDOMFactory('input'),
			  ins: createDOMFactory('ins'),
			  kbd: createDOMFactory('kbd'),
			  keygen: createDOMFactory('keygen'),
			  label: createDOMFactory('label'),
			  legend: createDOMFactory('legend'),
			  li: createDOMFactory('li'),
			  link: createDOMFactory('link'),
			  main: createDOMFactory('main'),
			  map: createDOMFactory('map'),
			  mark: createDOMFactory('mark'),
			  menu: createDOMFactory('menu'),
			  menuitem: createDOMFactory('menuitem'),
			  meta: createDOMFactory('meta'),
			  meter: createDOMFactory('meter'),
			  nav: createDOMFactory('nav'),
			  noscript: createDOMFactory('noscript'),
			  object: createDOMFactory('object'),
			  ol: createDOMFactory('ol'),
			  optgroup: createDOMFactory('optgroup'),
			  option: createDOMFactory('option'),
			  output: createDOMFactory('output'),
			  p: createDOMFactory('p'),
			  param: createDOMFactory('param'),
			  picture: createDOMFactory('picture'),
			  pre: createDOMFactory('pre'),
			  progress: createDOMFactory('progress'),
			  q: createDOMFactory('q'),
			  rp: createDOMFactory('rp'),
			  rt: createDOMFactory('rt'),
			  ruby: createDOMFactory('ruby'),
			  s: createDOMFactory('s'),
			  samp: createDOMFactory('samp'),
			  script: createDOMFactory('script'),
			  section: createDOMFactory('section'),
			  select: createDOMFactory('select'),
			  small: createDOMFactory('small'),
			  source: createDOMFactory('source'),
			  span: createDOMFactory('span'),
			  strong: createDOMFactory('strong'),
			  style: createDOMFactory('style'),
			  sub: createDOMFactory('sub'),
			  summary: createDOMFactory('summary'),
			  sup: createDOMFactory('sup'),
			  table: createDOMFactory('table'),
			  tbody: createDOMFactory('tbody'),
			  td: createDOMFactory('td'),
			  textarea: createDOMFactory('textarea'),
			  tfoot: createDOMFactory('tfoot'),
			  th: createDOMFactory('th'),
			  thead: createDOMFactory('thead'),
			  time: createDOMFactory('time'),
			  title: createDOMFactory('title'),
			  tr: createDOMFactory('tr'),
			  track: createDOMFactory('track'),
			  u: createDOMFactory('u'),
			  ul: createDOMFactory('ul'),
			  'var': createDOMFactory('var'),
			  video: createDOMFactory('video'),
			  wbr: createDOMFactory('wbr'),
			
			  // SVG
			  circle: createDOMFactory('circle'),
			  clipPath: createDOMFactory('clipPath'),
			  defs: createDOMFactory('defs'),
			  ellipse: createDOMFactory('ellipse'),
			  g: createDOMFactory('g'),
			  image: createDOMFactory('image'),
			  line: createDOMFactory('line'),
			  linearGradient: createDOMFactory('linearGradient'),
			  mask: createDOMFactory('mask'),
			  path: createDOMFactory('path'),
			  pattern: createDOMFactory('pattern'),
			  polygon: createDOMFactory('polygon'),
			  polyline: createDOMFactory('polyline'),
			  radialGradient: createDOMFactory('radialGradient'),
			  rect: createDOMFactory('rect'),
			  stop: createDOMFactory('stop'),
			  svg: createDOMFactory('svg'),
			  text: createDOMFactory('text'),
			  tspan: createDOMFactory('tspan')
			};
			
			module.exports = ReactDOMFactories;
		},		// lib/ReactElementValidator.js
		function(__inner_require__, exports, module){
			var ReactCurrentOwner = require('react@15.3/lib/ReactCurrentOwner.js');
			var ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			var ReactPropTypeLocations = require('react@15.3/lib/ReactPropTypeLocations.js');
			
			var checkReactTypeSpec = require('react@15.3/lib/checkReactTypeSpec.js');
			
			var canDefineProperty = require('react@15.3/lib/canDefineProperty.js');
			var getIteratorFn = require('react@15.3/lib/getIteratorFn.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			function getDeclarationErrorAddendum() {
			  if (ReactCurrentOwner.current) {
			    var name = ReactCurrentOwner.current.getName();
			    if (name) {
			      return ' Check the render method of `' + name + '`.';
			    }
			  }
			  return '';
			}
			
			/**
			 * Warn if there's no key explicitly set on dynamic arrays of children or
			 * object keys are not valid. This allows us to keep track of children between
			 * updates.
			 */
			var ownerHasKeyUseWarning = {};
			
			function getCurrentComponentErrorInfo(parentType) {
			  var info = getDeclarationErrorAddendum();
			
			  if (!info) {
			    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
			    if (parentName) {
			      info = ' Check the top-level render call using <' + parentName + '>.';
			    }
			  }
			  return info;
			}
			
			/**
			 * Warn if the element doesn't have an explicit key assigned to it.
			 * This element is in an array. The array could grow and shrink or be
			 * reordered. All children that haven't already been validated are required to
			 * have a "key" property assigned to it. Error statuses are cached so a warning
			 * will only be shown once.
			 *
			 * @internal
			 * @param {ReactElement} element Element that requires a key.
			 * @param {*} parentType element's parent's type.
			 */
			function validateExplicitKey(element, parentType) {
			  if (!element._store || element._store.validated || element.key != null) {
			    return;
			  }
			  element._store.validated = true;
			
			  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
			
			  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
			  if (memoizer[currentComponentErrorInfo]) {
			    return;
			  }
			  memoizer[currentComponentErrorInfo] = true;
			
			  // Usually the current owner is the offender, but if it accepts children as a
			  // property, it may be the creator of the child that's responsible for
			  // assigning it a key.
			  var childOwner = '';
			  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
			    // Give the component that originally created this child.
			    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
			  }
			
			  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
			}
			
			/**
			 * Ensure that every element either is passed in a static location, in an
			 * array with an explicit keys property defined, or in an object literal
			 * with valid key property.
			 *
			 * @internal
			 * @param {ReactNode} node Statically passed child of any type.
			 * @param {*} parentType node's parent's type.
			 */
			function validateChildKeys(node, parentType) {
			  if ((typeof node === 'undefined' ? 'undefined' : babelHelpers.typeof(node)) !== 'object') {
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
			    // This element was passed in a valid location.
			    if (node._store) {
			      node._store.validated = true;
			    }
			  } else if (node) {
			    var iteratorFn = getIteratorFn(node);
			    // Entry iterators provide implicit keys.
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
			
			/**
			 * Given an element, validate that its props follow the propTypes definition,
			 * provided by the type.
			 *
			 * @param {ReactElement} element
			 */
			function validatePropTypes(element) {
			  var componentClass = element.type;
			  if (typeof componentClass !== 'function') {
			    return;
			  }
			  var name = componentClass.displayName || componentClass.name;
			  if (componentClass.propTypes) {
			    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
			  }
			  if (typeof componentClass.getDefaultProps === 'function') {
			    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
			  }
			}
			
			var ReactElementValidator = {
			
			  createElement: function createElement(type, props, children) {
			    var validType = typeof type === 'string' || typeof type === 'function';
			    // We warn in this case but don't throw. We expect the element creation to
			    // succeed and there will likely be errors in render.
			    if (!validType) {
			      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
			    }
			
			    var element = ReactElement.createElement.apply(this, arguments);
			
			    // The result can be nullish if a mock or a custom function is used.
			    // TODO: Drop this when these are no longer allowed as the type argument.
			    if (element == null) {
			      return element;
			    }
			
			    // Skip key warning if the type isn't valid since our key validation logic
			    // doesn't expect a non-string/function type and can throw confusing errors.
			    // We don't want exception behavior to differ between dev and prod.
			    // (Rendering will throw with a helpful message and as soon as the type is
			    // fixed, the key warnings will appear.)
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
			    // Legacy hook TODO: Warn if this is accessed
			    validatedFactory.type = type;
			
			    if (process.env.NODE_ENV !== 'production') {
			      if (canDefineProperty) {
			        Object.defineProperty(validatedFactory, 'type', {
			          enumerable: false,
			          get: function get() {
			            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
			            Object.defineProperty(this, 'type', {
			              value: type
			            });
			            return type;
			          }
			        });
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
			  }
			
			};
			
			module.exports = ReactElementValidator;
		},		// lib/onlyChild.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Returns the first child in a collection of children and verifies that there
			 * is only one child in the collection.
			 *
			 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
			 *
			 * The current implementation of this function assumes that a single child gets
			 * passed without a wrapper, but the purpose of this helper function is to
			 * abstract away the particular structure of children.
			 *
			 * @param {?object} children Child collection structure.
			 * @return {ReactElement} The first and only `ReactElement` contained in the
			 * structure.
			 */
			function onlyChild(children) {
			  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
			  return children;
			}
			
			module.exports = onlyChild;
		}
	];
});