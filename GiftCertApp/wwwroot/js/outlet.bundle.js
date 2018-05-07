/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(3);

	var _reactRedux = __webpack_require__(4);

	var _reduxThunk = __webpack_require__(5);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _Immutable = __webpack_require__(6);

	var _reactReduxToastr = __webpack_require__(7);

	var _reactReduxToastr2 = _interopRequireDefault(_reactReduxToastr);

	var _Actions = __webpack_require__(526);

	var actions = _interopRequireWildcard(_Actions);

	var _Reducer = __webpack_require__(528);

	var _Reducer2 = _interopRequireDefault(_Reducer);

	var _List = __webpack_require__(529);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Outlet = function (_React$Component) {
	  _inherits(Outlet, _React$Component);

	  function Outlet() {
	    _classCallCheck(this, Outlet);

	    return _possibleConstructorReturn(this, (Outlet.__proto__ || Object.getPrototypeOf(Outlet)).apply(this, arguments));
	  }

	  _createClass(Outlet, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.populateData((0, _Immutable.fromJS)(JSON.parse($('#outlets').val())));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        container: {
	          padding: '15px'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { style: style.container },
	        _react2.default.createElement(_List2.default, null)
	      );
	    }
	  }]);

	  return Outlet;
	}(_react2.default.Component);

	function mapStateToProps(_ref) {
	  var outlet = _ref.outlet;

	  return {
	    outlet: outlet
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}

	var OutletContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Outlet);

	var rootReducers = (0, _redux.combineReducers)({
	  outlet: _Reducer2.default,
	  toastr: _reactReduxToastr.reducer
	});

	var store = (0, _redux.createStore)(rootReducers, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	  return f;
	}));

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(OutletContainer, null),
	    _react2.default.createElement(_reactReduxToastr2.default, null)
	  )
	), document.getElementById('content'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = Redux;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = ReactRedux;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = ReduxThunk;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = Immutable;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toastr = exports.reducer = exports.actions = undefined;

	var _ReduxToastr = __webpack_require__(8);

	var _ReduxToastr2 = _interopRequireDefault(_ReduxToastr);

	var _actions = __webpack_require__(21);

	var ReduxToastrActions = _interopRequireWildcard(_actions);

	var _reducer = __webpack_require__(24);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _toastrEmitter = __webpack_require__(23);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ReduxToastr2.default;
	var actions = exports.actions = ReduxToastrActions;
	var reducer = exports.reducer = _reducer2.default;
	var toastr = exports.toastr = _toastrEmitter.toastrEmitter;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(4);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ToastrBox = __webpack_require__(10);

	var _ToastrBox2 = _interopRequireDefault(_ToastrBox);

	var _ToastrConfirm = __webpack_require__(19);

	var _ToastrConfirm2 = _interopRequireDefault(_ToastrConfirm);

	var _actions = __webpack_require__(21);

	var actions = _interopRequireWildcard(_actions);

	var _toastrEmitter = __webpack_require__(23);

	var _config = __webpack_require__(25);

	var _config2 = _interopRequireDefault(_config);

	var _utils = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ReduxToastr = function (_Component) {
	  _inherits(ReduxToastr, _Component);

	  function ReduxToastr(props) {
	    _classCallCheck(this, ReduxToastr);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.toastrFired = {};

	    (0, _utils.updateConfig)(_config2.default, _this.props);
	    (0, _utils._bind)('_addToMemory', _this);
	    return _this;
	  }

	  ReduxToastr.prototype.componentDidMount = function componentDidMount() {
	    var _props = this.props;
	    var addToastrAction = _props.addToastrAction;
	    var showConfirm = _props.showConfirm;
	    var clean = _props.clean;

	    _toastrEmitter.EE.on('toastr/confirm', showConfirm);
	    _toastrEmitter.EE.on('add/toastr', addToastrAction);
	    _toastrEmitter.EE.on('clean/toastr', clean);
	  };

	  ReduxToastr.prototype.componentWillUnmount = function componentWillUnmount() {
	    _toastrEmitter.EE.removeListener('toastr/confirm');
	    _toastrEmitter.EE.removeListener('add/toastr');
	    _toastrEmitter.EE.removeListener('clean/toastr');
	    this.toastrFired = {};
	  };

	  ReduxToastr.prototype._addToMemory = function _addToMemory(id) {
	    this.toastrFired[id] = true;
	  };

	  ReduxToastr.prototype._renderToastrBox = function _renderToastrBox(item) {
	    // Default options from props, but item can override them with own.
	    var mergedItem = _extends({}, item, {
	      options: _extends({
	        progressBar: this.props.progressBar,
	        transitionIn: this.props.transitionIn,
	        transitionOut: this.props.transitionOut
	      }, item.options)
	    });

	    return _react2.default.createElement(_ToastrBox2.default, _extends({
	      key: item.id,
	      inMemory: this.toastrFired,
	      addToMemory: this._addToMemory,
	      item: mergedItem
	    }, this.props));
	  };

	  ReduxToastr.prototype.render = function render() {
	    var _this2 = this;

	    return _react2.default.createElement(
	      'div',
	      { className: (0, _classnames2.default)('redux-toastr', this.props.position, this.props.className) },
	      this.props.toastr.confirm && _react2.default.createElement(_ToastrConfirm2.default, _extends({
	        key: this.props.toastr.confirm.id,
	        confirm: this.props.toastr.confirm
	      }, this.props)),
	      this.props.toastr && this.props.toastr.toastrs.map(function (item) {
	        return _this2._renderToastrBox(item);
	      })
	    );
	  };

	  return ReduxToastr;
	}(_react.Component);

	ReduxToastr.displayName = 'ReduxToastr';
	ReduxToastr.propTypes = {
	  toastr: _react.PropTypes.object,
	  options: _react.PropTypes.object,
	  position: _react.PropTypes.string,
	  newestOnTop: _react.PropTypes.bool,
	  timeOut: _react.PropTypes.number,
	  confirmOption: _react.PropTypes.object,
	  progressBar: _react.PropTypes.bool,
	  transitionIn: _react.PropTypes.string,
	  transitionOut: _react.PropTypes.string,
	  preventDuplicates: _react.PropTypes.bool
	};
	ReduxToastr.defaultProps = {
	  position: 'top-right',
	  newestOnTop: true,
	  timeOut: 5000,
	  progressBar: false,
	  transitionIn: 'bounceIn',
	  transitionOut: 'bounceOut',
	  preventDuplicates: false,
	  confirmOption: {
	    transitionIn: 'bounceInDown',
	    transitionOut: 'bounceOutUp',
	    okText: 'ok',
	    cancelText: 'cancel'
	  }
	};
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    toastr: state.toastr ? state.toastr : state.get('toastr')
	  };
	}, actions)(ReduxToastr);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CSSCore = __webpack_require__(11);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ProgressBar = __webpack_require__(14);

	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

	var _utils = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //  eslint-disable-line no-unused-vars


	var ToastrBox = function (_Component) {
	  _inherits(ToastrBox, _Component);

	  function ToastrBox(props) {
	    _classCallCheck(this, ToastrBox);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    var _props$item = props.item;
	    var transitionIn = _props$item.transitionIn;
	    var transitionOut = _props$item.transitionOut;


	    _this.isHiding = false;
	    _this.intervalId = null;

	    _this.transitionIn = transitionIn || _this.props.transitionIn;
	    _this.transitionOut = transitionOut || _this.props.transitionOut;

	    _this.state = { progressBar: null };
	    (0, _utils._bind)('renderSubComponent _onAnimationComplete _removeToastr _setTransition _clearTransition _setIntervalId _setIsHiding', _this);
	    return _this;
	  }

	  ToastrBox.prototype.componentDidMount = function componentDidMount() {
	    var item = this.props.item;

	    if (this.props.inMemory[item.id]) return;

	    var timeOut = this._getItemTimeOut();

	    if (timeOut) {
	      this._setIntervalId(setTimeout(this._removeToastr, timeOut));
	    }

	    if (timeOut && item.options.progressBar) {
	      this.setState({ progressBar: { duration: this._getItemTimeOut() } });
	    }

	    this._setTransition();
	    (0, _utils.onCSSTransitionEnd)(this.toastrBox, this._onAnimationComplete);
	    this.props.addToMemory(item.id);
	  };

	  ToastrBox.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.intervalId) {
	      clearTimeout(this.intervalId);
	    }
	  };

	  ToastrBox.prototype.handleClick = function handleClick() {
	    this._removeToastr();
	  };

	  ToastrBox.prototype.mouseEnter = function mouseEnter() {
	    clearTimeout(this.intervalId);
	    this._setIntervalId(null);
	    this._setIsHiding(false);

	    var progressBar = this.props.item.options.progressBar;

	    var timeOut = this._getItemTimeOut();
	    if (timeOut && progressBar) {
	      this.setState({ progressBar: null });
	    }
	  };

	  ToastrBox.prototype.mouseLeave = function mouseLeave() {
	    var removeOnHover = this.props.item.options.removeOnHover;

	    if (!this.isHiding && this.props.item.type !== 'message' && removeOnHover == true) {
	      this._setIntervalId(setTimeout(this._removeToastr, 1000));
	      var progressBar = this.props.item.options.progressBar;

	      var timeOut = this._getItemTimeOut();
	      if (timeOut && progressBar) {
	        this.setState({ progressBar: { duration: 1000 } });
	      }
	    }
	  };

	  ToastrBox.prototype._getItemTimeOut = function _getItemTimeOut() {
	    var item = this.props.item;
	    var timeOut = item.options.timeOut;

	    if (typeof timeOut === 'undefined' && item.type !== 'message') {
	      timeOut = this.props.timeOut;
	    }

	    return timeOut;
	  };

	  ToastrBox.prototype._onAnimationComplete = function _onAnimationComplete() {
	    var _props = this.props;
	    var remove = _props.remove;
	    var item = _props.item;
	    var options = item.options;
	    var id = item.id;


	    if (this.isHiding) {
	      this._setIsHiding(false);
	      remove(id);
	      if (options.onHideComplete) {
	        options.onHideComplete();
	      }
	    } else if (!this.isHiding && options.onShowComplete) {
	      options.onShowComplete();
	    }
	  };

	  ToastrBox.prototype._removeToastr = function _removeToastr() {
	    if (!this.isHiding) {
	      this._setIsHiding(true);
	      this._setTransition(true);
	      (0, _utils.onCSSTransitionEnd)(this.toastrBox, this._onAnimationComplete);
	    }
	  };

	  ToastrBox.prototype._setTransition = function _setTransition(hide) {
	    var node = this.toastrBox;
	    var animationType = hide ? this.transitionOut : this.transitionIn;

	    var onEndListener = function onEndListener(e) {
	      if (e && e.target == node) {
	        _CSSCore2.default.removeClass(node, animationType);
	      }
	    };

	    (0, _utils.onCSSTransitionEnd)(this.toastrBox, onEndListener);
	    _CSSCore2.default.addClass(node, animationType);
	  };

	  ToastrBox.prototype._clearTransition = function _clearTransition() {
	    var node = this.toastrBox;
	    _CSSCore2.default.removeClass(node, this.transitionIn);
	    _CSSCore2.default.removeClass(node, this.transitionOut);
	  };

	  ToastrBox.prototype._setIntervalId = function _setIntervalId(intervalId) {
	    this.intervalId = intervalId;
	  };

	  ToastrBox.prototype._setIsHiding = function _setIsHiding(val) {
	    this.isHiding = val;
	  };

	  ToastrBox.prototype.renderSubComponent = function renderSubComponent(SubComponent) {
	    var _this2 = this;

	    var removeCurrentToastrFunc = function removeCurrentToastrFunc() {
	      return _this2.props.remove(_this2.props.item.id);
	    };

	    if ((0, _react.isValidElement)(SubComponent)) {
	      return _react2.default.cloneElement(SubComponent, {
	        remove: removeCurrentToastrFunc
	      });
	    }

	    return _react2.default.createElement(SubComponent, { remove: removeCurrentToastrFunc });
	  };

	  ToastrBox.prototype.render = function render() {
	    var _this3 = this;

	    var _props$item2 = this.props.item;
	    var options = _props$item2.options;
	    var type = _props$item2.type;
	    var message = _props$item2.message;
	    var title = _props$item2.title;

	    return _react2.default.createElement(
	      'div',
	      {
	        ref: function ref(_ref) {
	          return _this3.toastrBox = _ref;
	        },
	        className: (0, _classnames2.default)('toastr', 'animated', type, options.icon, options.className),
	        onMouseEnter: this.mouseEnter.bind(this),
	        onMouseLeave: this.mouseLeave.bind(this)
	      },
	      _react2.default.createElement(
	        'div',
	        { className: 'message-holder' },
	        title && _react2.default.createElement(
	          'div',
	          { className: 'title' },
	          title
	        ),
	        message && _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          message
	        ),
	        options.component && _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          this.renderSubComponent(options.component)
	        )
	      ),
	      options.showCloseButton && _react2.default.createElement(
	        'button',
	        {
	          type: 'button',
	          className: 'close-toastr',
	          onClick: this.handleClick.bind(this)
	        },
	        'x'
	      ),
	      this.state.progressBar ? _react2.default.createElement(_ProgressBar2.default, this.state.progressBar) : null
	    );
	  };

	  return ToastrBox;
	}(_react.Component);

	ToastrBox.displayName = 'ToastrBox';
	ToastrBox.propTypes = {
	  item: _react.PropTypes.object.isRequired
	};
	exports.default = ToastrBox;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(13);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }

	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }

	};

	module.exports = CSSCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ProgressBar = function (_Component) {
	  _inherits(ProgressBar, _Component);

	  function ProgressBar(props) {
	    _classCallCheck(this, ProgressBar);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.state = { percent: 100 };
	    _this.intervalId = null;
	    return _this;
	  }

	  ProgressBar.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    var distance = 100 / (this.props.duration / 10);
	    this.intervalId = setInterval(function () {
	      var percent = _this2.state.percent - distance;

	      _this2.setState({ percent: percent > 0 ? percent : 0 });
	    }, 10);
	  };

	  ProgressBar.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this.state.percent <= 0 && this.intervalId) {
	      clearTimeout(this.intervalId);
	    }
	  };

	  ProgressBar.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.intervalId) {
	      clearTimeout(this.intervalId);
	    }
	  };

	  ProgressBar.prototype.render = function render() {
	    var percent = this.state.percent;


	    return _react2.default.createElement(
	      'div',
	      { className: 'toastr-progress-container' },
	      _react2.default.createElement('div', { className: 'toastr-progressbar', style: { width: percent + '%' } })
	    );
	  };

	  return ProgressBar;
	}(_react.Component);

	ProgressBar.displayName = 'ProgressBar';
	ProgressBar.propTypes = {
	  duration: _react.PropTypes.number.isRequired
	};
	exports.default = ProgressBar;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.createReducer = createReducer;
	exports.checkPositionName = checkPositionName;
	exports.keyCode = keyCode;
	exports.mapToToastrMessage = mapToToastrMessage;
	exports.mapToIcon = mapToIcon;
	exports.hasProperty = hasProperty;
	exports.guid = guid;
	exports.onCSSTransitionEnd = onCSSTransitionEnd;
	exports.preventDuplication = preventDuplication;
	exports.updateConfig = updateConfig;
	exports._bind = _bind;

	var _ReactTransitionEvents = __webpack_require__(16);

	var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createReducer(initialState, fnMap) {
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var _ref = arguments[1];
	    var type = _ref.type;
	    var payload = _ref.payload;

	    var handle = fnMap[type];
	    return handle ? handle(state, payload) : state;
	  };
	}

	function checkPositionName(name) {
	  var positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
	  var isValidName = positions.indexOf(name);

	  if (isValidName > -1) {
	    return name;
	  }
	  return positions[1];
	}

	function isString(obj) {
	  if (typeof obj == 'string') {
	    return true;
	  }
	  return false;
	}

	function keyCode(e) {
	  return e.which ? e.which : e.keyCode;
	}

	function mapToToastrMessage(type, array) {
	  var obj = {};
	  obj.type = type;

	  obj.options = array.filter(function (item) {
	    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object';
	  })[0] || {};

	  if (!obj.options.icon) {
	    obj.options.icon = mapToIcon(type);
	  }

	  if (!obj.options.hasOwnProperty('removeOnHover')) {
	    obj.options.removeOnHover = true;
	  }

	  if (!obj.options.hasOwnProperty('showCloseButton')) {
	    obj.options.showCloseButton = true;
	  }

	  if (isString(array[0]) && isString(array[1])) {
	    obj.title = array[0];
	    obj.message = array[1];
	  } else if (isString(array[0]) && !isString(array[1])) {
	    obj.title = array[0];
	  } else {
	    obj.message = array[0];
	  }

	  return obj;
	}

	function mapToIcon(type) {
	  switch (type) {
	    case 'info':
	      return 'toastr-icon-information-circle';
	    case 'success':
	      return 'toastr-icon-check-1';
	    case 'warning':
	      return 'toastr-icon-exclamation-triangle';
	    case 'error':
	      return 'toastr-icon-exclamation-alert';
	    default:
	      return type;
	  }
	}

	function hasProperty(obj, property) {
	  if (obj == null) {
	    return false;
	  }
	  return typeof obj[property] !== 'undefined';
	}

	function guid() {
	  var r = function r() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  };
	  return r() + r() + r() + '-' + r() + '_' + r() + '-' + r() + '_' + r() + r() + r();
	}

	function onCSSTransitionEnd(node, callback) {
	  var runOnce = function runOnce(e) {
	    // stopPropagation is not working in IE11 and Edge, the transitionend from the Button.js is waiting
	    // on the confirm animation to end first and not the Button.js
	    e.stopPropagation();
	    callback && callback(e);
	    _ReactTransitionEvents2.default.removeEndEventListener(node, runOnce);
	  };
	  _ReactTransitionEvents2.default.addEndEventListener(node, runOnce);
	}

	function preventDuplication(currentData, newObjec) {
	  var hasDuplication = false;
	  currentData.forEach(function (item) {
	    // Because the toastr has a unic id we will check by the title and message.
	    if (item.title === newObjec.title && item.message === newObjec.message && item.type === newObjec.type) {
	      hasDuplication = true;
	    }
	  });
	  return hasDuplication;
	}

	function updateConfig(config, obj) {
	  Object.keys(config).forEach(function (key) {
	    if (obj.hasOwnProperty(key)) {
	      config[key] = obj[key];
	    }
	  });
	}

	function _bind(strinOrAray, scope) {
	  var array = strinOrAray;
	  if (!Array.isArray(strinOrAray)) {
	    array = strinOrAray.split(' ');
	  }
	  return array.map(function (item) {
	    return scope[item] = scope[item].bind(scope);
	  });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(17);

	var getVendorPrefixedEventName = __webpack_require__(18);

	var endEvents = [];

	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');

	  if (animEnd) {
	    endEvents.push(animEnd);
	  }

	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(17);

	/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};

	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
	  prefixes['Moz' + styleProp] = 'moz' + eventName;
	  prefixes['ms' + styleProp] = 'MS' + eventName;
	  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

	  return prefixes;
	}

	/**
	 * A list of event names to a configurable list of vendor prefixes.
	 */
	var vendorPrefixes = {
	  animationend: makePrefixMap('Animation', 'AnimationEnd'),
	  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
	  animationstart: makePrefixMap('Animation', 'AnimationStart'),
	  transitionend: makePrefixMap('Transition', 'TransitionEnd')
	};

	/**
	 * Event names that have already been detected and prefixed (if applicable).
	 */
	var prefixedEventNames = {};

	/**
	 * Element to check for prefixes on.
	 */
	var style = {};

	/**
	 * Bootstrap if a DOM exists.
	 */
	if (ExecutionEnvironment.canUseDOM) {
	  style = document.createElement('div').style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are usable, and if not remove them from the map.
	  if (!('AnimationEvent' in window)) {
	    delete vendorPrefixes.animationend.animation;
	    delete vendorPrefixes.animationiteration.animation;
	    delete vendorPrefixes.animationstart.animation;
	  }

	  // Same as above
	  if (!('TransitionEvent' in window)) {
	    delete vendorPrefixes.transitionend.transition;
	  }
	}

	/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) {
	    return prefixedEventNames[eventName];
	  } else if (!vendorPrefixes[eventName]) {
	    return eventName;
	  }

	  var prefixMap = vendorPrefixes[eventName];

	  for (var styleProp in prefixMap) {
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
	      return prefixedEventNames[eventName] = prefixMap[styleProp];
	    }
	  }

	  return '';
	}

	module.exports = getVendorPrefixedEventName;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CSSCore = __webpack_require__(11);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _utils = __webpack_require__(15);

	var _Button = __webpack_require__(20);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ENTER = 13;
	var ESC = 27;

	var ToastrConfirm = function (_Component) {
	  _inherits(ToastrConfirm, _Component);

	  function ToastrConfirm(props) {
	    _classCallCheck(this, ToastrConfirm);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    var _this$props = _this.props;
	    var confirmOption = _this$props.confirmOption;
	    var confirm = _this$props.confirm;
	    var _confirm$options = confirm.options;
	    var okText = _confirm$options.okText;
	    var cancelText = _confirm$options.cancelText;
	    var transitionIn = _confirm$options.transitionIn;
	    var transitionOut = _confirm$options.transitionOut;


	    _this.okText = okText || confirmOption.okText;
	    _this.cancelText = cancelText || confirmOption.cancelText;
	    _this.transitionIn = transitionIn || confirmOption.transitionIn;
	    _this.transitionOut = transitionOut || confirmOption.transitionOut;

	    (0, _utils._bind)('setTransition removeConfirm handleOnKeyUp handleOnKeyDown', _this);
	    _this.isKeyDown = false;
	    return _this;
	  }

	  ToastrConfirm.prototype.componentDidMount = function componentDidMount() {
	    this.isHiding = false;
	    this.hasClicked = false;

	    if (this.props.confirm.show) {
	      this.setTransition(true);
	    }
	    if (window) {
	      window.addEventListener('keyup', this.handleOnKeyUp);
	      window.addEventListener('keydown', this.handleOnKeyDown);
	    }
	  };

	  ToastrConfirm.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (window) {
	      window.removeEventListener('keyup', this.handleOnKeyUp);
	      window.removeEventListener('keydown', this.handleOnKeyDown);
	    }
	  };

	  ToastrConfirm.prototype.handleOnKeyDown = function handleOnKeyDown(e) {
	    if ((0, _utils.keyCode)(e) == ENTER) {
	      e.preventDefault();
	    }
	    this.isKeyDown = true;
	  };

	  ToastrConfirm.prototype.handleConfirmClick = function handleConfirmClick() {
	    var _this2 = this;

	    if (this.hasClicked) return;
	    this.hasClicked = true;

	    var options = this.props.confirm.options;

	    var onAnimationEnd = function onAnimationEnd() {
	      _this2.removeConfirm();
	      if (options && options.onOk) {
	        options.onOk();
	      }
	    };

	    this.setTransition();
	    (0, _utils.onCSSTransitionEnd)(this.confirm, onAnimationEnd);
	  };

	  ToastrConfirm.prototype.handleCancelClick = function handleCancelClick() {
	    var _this3 = this;

	    if (this.hasClicked) return;
	    this.hasClicked = true;

	    var options = this.props.confirm.options;

	    var onAnimationEnd = function onAnimationEnd() {
	      _this3.removeConfirm();
	      if (options && options.onCancel) {
	        options.onCancel();
	      }
	    };

	    this.setTransition();
	    (0, _utils.onCSSTransitionEnd)(this.confirm, onAnimationEnd);
	  };

	  ToastrConfirm.prototype.setTransition = function setTransition(add) {
	    var body = document.querySelector('body');

	    if (add) {
	      this.isHiding = false;
	      _CSSCore2.default.addClass(body, 'toastr-confirm-active');
	      _CSSCore2.default.addClass(this.confirm, this.transitionIn);
	      return;
	    }

	    this.isHiding = true;
	    _CSSCore2.default.addClass(this.confirm, this.transitionOut);
	  };

	  ToastrConfirm.prototype.removeConfirm = function removeConfirm() {
	    this.isHiding = false;
	    this.props.hideConfirm();
	    var body = document.querySelector('body');
	    _CSSCore2.default.removeClass(body, 'toastr-confirm-active');
	  };

	  ToastrConfirm.prototype.handleOnKeyUp = function handleOnKeyUp(e) {
	    var code = (0, _utils.keyCode)(e);
	    if (code == ESC) {
	      this.handleCancelClick();
	    } else if (code == ENTER && this.isKeyDown) {
	      this.isKeyDown = false;
	      this.handleConfirmClick();
	    }
	  };

	  ToastrConfirm.prototype.render = function render() {
	    var _this4 = this;

	    return _react2.default.createElement(
	      'div',
	      { className: 'confirm-holder' },
	      _react2.default.createElement(
	        'div',
	        { className: 'confirm animated', ref: function ref(_ref) {
	            return _this4.confirm = _ref;
	          } },
	        _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          this.props.confirm.message
	        ),
	        _react2.default.createElement(
	          _Button2.default,
	          { onClick: this.handleConfirmClick.bind(this) },
	          this.okText
	        ),
	        _react2.default.createElement(
	          _Button2.default,
	          { onClick: this.handleCancelClick.bind(this) },
	          this.cancelText
	        )
	      ),
	      _react2.default.createElement('div', { className: 'shadow' })
	    );
	  };

	  return ToastrConfirm;
	}(_react.Component);

	ToastrConfirm.displayName = 'ToastrConfirm';
	ToastrConfirm.propTypes = {
	  confirm: _react.PropTypes.object.isRequired
	};

	exports.default = ToastrConfirm;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Button = function Button(props) {
	  return _react2.default.createElement(
	    'button',
	    { type: 'button', onClick: function onClick() {
	        return props.onClick();
	      } },
	    _react2.default.createElement(
	      'p',
	      null,
	      props.children
	    )
	  );
	};

	Button.displayName = 'ReduxConfirmButton';

	exports.default = Button;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addToastrAction = addToastrAction;
	exports.clean = clean;
	exports.remove = remove;
	exports.success = success;
	exports.info = info;
	exports.warning = warning;
	exports.error = error;
	exports.showConfirm = showConfirm;
	exports.hideConfirm = hideConfirm;

	var _constants = __webpack_require__(22);

	var _utils = __webpack_require__(15);

	function addToastrAction(toastr) {
	  return {
	    type: _constants.ADD_TOASTR,
	    payload: toastr
	  };
	}

	function clean() {
	  return {
	    type: _constants.CLEAN_TOASTR
	  };
	}

	function remove(id) {
	  return {
	    type: _constants.REMOVE_TOASTR,
	    payload: {
	      id: id
	    }
	  };
	}

	// In case the user wanna bind the actions
	// we need to use the func 'mapToToastrMessage' here as well.
	function success() {
	  for (var _len = arguments.length, toastr = Array(_len), _key = 0; _key < _len; _key++) {
	    toastr[_key] = arguments[_key];
	  }

	  return {
	    type: _constants.ADD_TOASTR,
	    payload: (0, _utils.mapToToastrMessage)('success', toastr)
	  };
	}

	function info() {
	  for (var _len2 = arguments.length, toastr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    toastr[_key2] = arguments[_key2];
	  }

	  return {
	    type: _constants.ADD_TOASTR,
	    payload: (0, _utils.mapToToastrMessage)('info', toastr)
	  };
	}

	function warning() {
	  for (var _len3 = arguments.length, toastr = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    toastr[_key3] = arguments[_key3];
	  }

	  return {
	    type: _constants.ADD_TOASTR,
	    payload: (0, _utils.mapToToastrMessage)('warning', toastr)
	  };
	}

	function error() {
	  for (var _len4 = arguments.length, toastr = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    toastr[_key4] = arguments[_key4];
	  }

	  return {
	    type: _constants.ADD_TOASTR,
	    payload: (0, _utils.mapToToastrMessage)('error', toastr)
	  };
	}

	function showConfirm(obj) {
	  return {
	    type: _constants.SHOW_CONFIRM,
	    payload: obj
	  };
	}

	function hideConfirm() {
	  return {
	    type: _constants.HIDE_CONFIRM
	  };
	}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_TOASTR = exports.ADD_TOASTR = '@ReduxToastr/toastr/ADD';
	var REMOVE_TOASTR = exports.REMOVE_TOASTR = '@ReduxToastr/toastr/REMOVE';
	var CLEAN_TOASTR = exports.CLEAN_TOASTR = '@ReduxToastr/toastr/CLEAN';
	var SHOW_CONFIRM = exports.SHOW_CONFIRM = '@ReduxToastr/confirm/SHOW';
	var HIDE_CONFIRM = exports.HIDE_CONFIRM = '@ReduxToastr/confirm/HIDE';

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toastrEmitter = exports.EE = undefined;

	var _utils = __webpack_require__(15);

	var _reducer = __webpack_require__(24);

	var _config = __webpack_require__(25);

	var _config2 = _interopRequireDefault(_config);

	var _eventemitter = __webpack_require__(26);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var emitter = new _eventemitter2.default();

	var addToToastr = function addToToastr(type, array) {
	  var toastr = (0, _utils.mapToToastrMessage)(type, array);
	  if (_config2.default.preventDuplicates && (0, _utils.preventDuplication)(_reducer.toastrsCache, toastr)) return;
	  emitter.emit('add/toastr', toastr);
	};

	var actions = {};

	['message', 'info', 'success', 'warning', 'error'].forEach(function (item) {
	  actions[item] = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return addToToastr(item, args);
	  };
	});

	actions.clean = function () {
	  return emitter.emit('clean/toastr');
	};

	actions.confirm = function () {
	  emitter.emit('toastr/confirm', {
	    message: arguments.length <= 0 ? undefined : arguments[0],
	    options: (arguments.length <= 1 ? undefined : arguments[1]) || {}
	  });
	};

	var EE = exports.EE = emitter;
	var toastrEmitter = exports.toastrEmitter = actions;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toastrsCache = undefined;

	var _createReducer;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _utils = __webpack_require__(15);

	var _config = __webpack_require__(25);

	var _config2 = _interopRequireDefault(_config);

	var _constants = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// We will cache data so we can check for duplicated before fire the add action.
	var toastrsCache = exports.toastrsCache = [];

	var initialState = {
	  toastrs: [],
	  confirm: null
	};

	exports.default = (0, _utils.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, _constants.ADD_TOASTR, function (state, _ref) {
	  var type = _ref.type;
	  var title = _ref.title;
	  var message = _ref.message;
	  var options = _ref.options;

	  var newToastr = {
	    id: (0, _utils.guid)(),
	    type: type,
	    title: title,
	    message: message,
	    options: options
	  };

	  var newState = {};
	  if (!_config2.default.newestOnTop) {
	    newState = _extends({}, state, {
	      toastrs: [].concat(_toConsumableArray(state.toastrs), [newToastr])
	    });
	  } else {
	    newState = _extends({}, state, {
	      toastrs: [newToastr].concat(_toConsumableArray(state.toastrs))
	    });
	  }
	  exports.toastrsCache = toastrsCache = newState.toastrs;
	  return newState;
	}), _defineProperty(_createReducer, _constants.REMOVE_TOASTR, function (state, payload) {
	  var newState = _extends({}, state, {
	    toastrs: state.toastrs.filter(function (toastr) {
	      return toastr.id !== payload.id;
	    })
	  });

	  exports.toastrsCache = toastrsCache = newState.toastrs;
	  return newState;
	}), _defineProperty(_createReducer, _constants.CLEAN_TOASTR, function (state) {
	  exports.toastrsCache = toastrsCache = [];
	  return _extends({}, state, {
	    toastrs: []
	  });
	}), _defineProperty(_createReducer, _constants.SHOW_CONFIRM, function (state, payload) {
	  return _extends({}, state, {
	    confirm: {
	      id: (0, _utils.guid)(),
	      show: true,
	      message: payload.message,
	      options: payload.options || {}
	    }
	  });
	}), _defineProperty(_createReducer, _constants.HIDE_CONFIRM, function (state) {
	  return _extends({}, state, {
	    confirm: null
	  });
	}), _createReducer));

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var toastr = {
	  newestOnTop: true,
	  preventDuplicates: true
	};

	exports.default = toastr;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.updateOutlet = exports.addNewOutlet = exports.updateGcType = exports.addNewGcType = exports.updateServiceType = exports.addNewServiceType = undefined;
	exports.checkPartNumber = checkPartNumber;
	exports.getSubRequestType = getSubRequestType;
	exports.getGcType = getGcType;
	exports.getChannels = getChannels;
	exports.getPackageType = getPackageType;
	exports.getPackageTypeGroup = getPackageTypeGroup;
	exports.getDivisions = getDivisions;
	exports.getTargetLabs = getTargetLabs;
	exports.getTestRequestTypes = getTestRequestTypes;
	exports.addTestRequest = addTestRequest;
	exports.deleteRole = deleteRole;
	exports.addRole = addRole;
	exports.editRole = editRole;
	exports.searchUserAInAd = searchUserAInAd;
	exports.editUser = editUser;
	exports.addUser = addUser;
	exports.activateUser = activateUser;
	exports.deactivateUser = deactivateUser;
	exports.getTestSelection = getTestSelection;
	exports.queryMyRequests = queryMyRequests;
	exports.queryGiftCerts = queryGiftCerts;
	exports.getRequestsToAccept = getRequestsToAccept;
	exports.updateTestRequestForMultipleReview = updateTestRequestForMultipleReview;
	exports.setPartReceived = setPartReceived;
	exports.setManagerAccept = setManagerAccept;
	exports.setReleaseToLab = setReleaseToLab;
	exports.rejectRequestToRequester = rejectRequestToRequester;
	exports.setPriority = setPriority;
	exports.setFastTrack = setFastTrack;
	exports.resubmitRequest = resubmitRequest;
	exports.deleteRequest = deleteRequest;
	exports.createNewFormAndHandle = createNewFormAndHandle;
	exports.createNewFormAndHandleAllProjects = createNewFormAndHandleAllProjects;
	exports.setStartTest = setStartTest;
	exports.setStoptTest = setStoptTest;
	exports.setPauseTest = setPauseTest;
	exports.setOnHoldTest = setOnHoldTest;
	exports.setResumeTest = setResumeTest;
	exports.filterProjects = filterProjects;
	exports.prepareAllProjectsExport = prepareAllProjectsExport;
	exports.setTestPriority = setTestPriority;
	exports.setTestTechnician = setTestTechnician;
	exports.setProjectToOnHold = setProjectToOnHold;
	exports.setProjectToResume = setProjectToResume;
	exports.setProjectToCancel = setProjectToCancel;
	exports.setProjectToClosed = setProjectToClosed;
	exports.setToWebDateFromAllProjects = setToWebDateFromAllProjects;
	exports.rejectTestRequest = rejectTestRequest;
	exports.reviewTestRequest = reviewTestRequest;
	exports.setTestRequestReviewLink = setTestRequestReviewLink;
	exports.setTestRequestToWeb = setTestRequestToWeb;
	exports.setTestRequestToApprove = setTestRequestToApprove;
	exports.setTestRequestToClosed = setTestRequestToClosed;
	exports.setProjectTestForReTest = setProjectTestForReTest;
	exports.addReTestToProjectTest = addReTestToProjectTest;
	exports.startProjectTest = startProjectTest;
	exports.stopProjectTest = stopProjectTest;
	exports.pauseProjecteTest = pauseProjecteTest;
	exports.setOnHoldProjectTest = setOnHoldProjectTest;
	exports.setResumeProjectTest = setResumeProjectTest;
	exports.deleteProjectTest = deleteProjectTest;
	exports.getWiP = getWiP;
	exports.changeTestTechnician = changeTestTechnician;
	exports.acceptDatasheet = acceptDatasheet;
	exports.acceptQualtiyReview = acceptQualtiyReview;
	exports.startReview = startReview;
	exports.reviewOut = reviewOut;
	exports.multipleReviewOut = multipleReviewOut;
	exports.rejectReview = rejectReview;
	exports.saveTestCondition = saveTestCondition;
	exports.saveTest = saveTest;
	exports.setDatasheetToCancel = setDatasheetToCancel;
	exports.setDatasheetToOnHold = setDatasheetToOnHold;
	exports.setDatasheetToReject = setDatasheetToReject;
	exports.setQualityReviewToCancel = setQualityReviewToCancel;
	exports.setQualityReviewToOnHold = setQualityReviewToOnHold;
	exports.setQualityRejectReview = setQualityRejectReview;
	exports.updateTechnicianSchedule = updateTechnicianSchedule;
	exports.updateEquipmentCapacity = updateEquipmentCapacity;
	exports.getDataSheetProcessingList = getDataSheetProcessingList;
	exports.modifySubType = modifySubType;
	exports.saveDeviceCharacteristic = saveDeviceCharacteristic;
	exports.deleteDevice = deleteDevice;
	exports.addNewDivision = addNewDivision;
	exports.addNewBusinessLine = addNewBusinessLine;
	exports.addNewProductLine = addNewProductLine;
	exports.addNewSegment = addNewSegment;
	exports.updateDivision = updateDivision;
	exports.updateBusinessLine = updateBusinessLine;
	exports.updateProductLine = updateProductLine;
	exports.updateSegment = updateSegment;
	exports.addNewRequestType = addNewRequestType;
	exports.addNewSubRequestType = addNewSubRequestType;
	exports.updateRequestType = updateRequestType;
	exports.updateSubRequestType = updateSubRequestType;
	exports.addNewTargetLab = addNewTargetLab;
	exports.updateTargetLab = updateTargetLab;
	exports.getMyTestInfo = getMyTestInfo;
	exports.copyTest = copyTest;
	exports.addNewChannel = addNewChannel;
	exports.updateChannel = updateChannel;
	exports.addPackageTypeGroup = addPackageTypeGroup;
	exports.updatePackageTypeGroup = updatePackageTypeGroup;
	exports.addPackageType = addPackageType;
	exports.updatePackageType = updatePackageType;

	var _axios = __webpack_require__(30);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Service Type
	var addNewServiceType = exports.addNewServiceType = function addNewServiceType(serviceType, callback) {
	    return _axios2.default.post('/api/ServiceType', serviceType).then(callback);
	};

	var updateServiceType = exports.updateServiceType = function updateServiceType(serviceType, callback) {
	    return _axios2.default.put('/api/ServiceType/' + serviceType.id, serviceType).then(callback);
	};

	// GC Type
	var addNewGcType = exports.addNewGcType = function addNewGcType(GcType, callback) {
	    return _axios2.default.post('/api/GcType', GcType).then(callback);
	};

	var updateGcType = exports.updateGcType = function updateGcType(GcType, callback) {
	    return _axios2.default.put('/api/GcType/' + GcType.id, GcType).then(callback);
	};

	// Outlet
	var addNewOutlet = exports.addNewOutlet = function addNewOutlet(outlet, callback) {
	    return _axios2.default.post('/api/Outlet', outlet).then(callback);
	};

	var updateOutlet = exports.updateOutlet = function updateOutlet(outlet, callback) {
	    return _axios2.default.put('/api/Outlet/' + outlet.id, outlet).then(callback);
	};

	function checkPartNumber(partNumber, callback) {
	    $.post('partNumber/check', { partNumber: partNumber }).done(callback);
	}

	function getSubRequestType(callback) {
	    $.get('subRequestType/get').done(function (data) {
	        callback(data);
	    });
	}

	function getGcType(callback) {
	    return _axios2.default.get('/api/GcType').then(callback).catch(function (error) {
	        console.log(error);
	    });
	}

	function getChannels(callback) {
	    $.get('channel/get').done(function (data) {
	        callback(data);
	    });
	}

	function getPackageType(callback) {
	    $.get('packageType/get').done(function (data) {
	        callback(data);
	    });
	}

	function getPackageTypeGroup(callback) {
	    $.get('packageTypeGroup/get').done(function (data) {
	        callback(data);
	    });
	}

	function getDivisions(callback) {
	    $.get('divisions/get').done(callback);
	}

	function getTargetLabs(callback) {
	    $.get('targetlabs/get').done(callback);
	}

	function getTestRequestTypes(callback) {
	    $.get('testRequestTypes/get').done(callback);
	}

	function addTestRequest(testRequest, callback) {
	    $.post('testRequestForm/add', testRequest).done(callback);
	}

	function deleteRole(id, callback) {
	    $.post('role/delete', { id: id }).done(callback);
	}

	function addRole(role, callback) {
	    $.post('role/add', role).done(callback);
	}

	function editRole(role, callback) {
	    $.post('role/update', role).done(callback);
	}

	function searchUserAInAd(query, callback) {
	    $.post('user/searchAd', { q: query }).done(callback);
	}

	function editUser(user, callback) {
	    $.post('user/edit', user).done(callback);
	}

	function addUser(user, callback) {
	    $.post('user/add', user).done(callback);
	}

	function activateUser(id, callback) {
	    $.post('user/activate', { id: id }).done(callback);
	}

	function deactivateUser(id, callback) {
	    $.post('user/deactivate', { id: id }).done(callback);
	}

	function getTestSelection(params, callback) {
	    $.post('testSelection/get', params).done(callback);
	}

	function queryMyRequests(params, callback) {
	    $.post('myRequests/post', params).done(callback);
	}

	function queryGiftCerts(params, callback) {
	    return _axios2.default.post('/api/GiftCert/PostGiftCertByFilter', params).then(callback);
	}

	function getRequestsToAccept(statusFilter, callback) {
	    $.post('requestsToAccept/Get', { statusFilter: statusFilter }).done(callback);
	}

	function updateTestRequestForMultipleReview(params, callback) {
	    $.post('requestsToAccept/MultipleDataReviews/' + params.id, { isAllowed: params.isAllowed }).done(callback);
	}

	function setPartReceived(id, callback) {
	    $.post('requestsToAccept/PartsReceived/' + id).done(callback);
	}

	function setManagerAccept(param, callback) {
	    $.post('requestsToAccept/ManagerAccepted/' + param.id, { subRequestType: param.subRequestType }).done(callback);
	}

	function setReleaseToLab(id, callback) {
	    $.post('requestsToAccept/ReleasedToLab/' + id).done(callback);
	}

	function rejectRequestToRequester(params, callback) {
	    $.post('requestsToAccept/RejectedToRequester/' + params.id, { adminSupportNotes: params.reason }).done(callback);
	}

	function setPriority(params, callback) {
	    $.post('requestsToAccept/Priority/' + params.id, { priority: params.priority }).done(callback);
	}

	function setFastTrack(params, callback) {
	    $.post('requestsToAccept/FastTrack/' + params.id, { fastTrack: params.fastTrack }).done(callback);
	}
	function resubmitRequest(id, callback) {
	    $.post('myRequests/ReSubmit/' + id).done(callback);
	}

	function deleteRequest(id, callback) {
	    $.post('myRequests/DeleteRequest/' + id).done(callback);
	}

	function createNewFormAndHandle(params, callback) {
	    $.post('myRequests/CreateNew/' + params.id, { keepTests: params.keepTests }).done(callback);
	}

	function createNewFormAndHandleAllProjects(params, callback) {
	    $.post('home/CreateNew/' + params.id, { keepTests: params.keepTests }).done(callback);
	}

	function setStartTest(id, callback) {
	    $.post('myTests/Start/' + id).done(callback);
	}

	function setStoptTest(params, callback) {
	    $.post('myTests/Stop/' + params.id, { wipStation: params.note }).done(callback);
	}

	function setPauseTest(id, callback) {
	    $.post('myTests/Pause/' + id).done(callback);
	}

	function setOnHoldTest(params, callback) {
	    $.post('myTests/OnHold/' + params.id, { techNotes: params.reason }).done(callback);
	}

	function setResumeTest(id, callback) {
	    $.post('myTests/Resume/' + id).done(callback);
	}

	function filterProjects(filter, callback) {
	    $.post('Home/GetRequests', { request: filter }).done(callback);
	}

	function prepareAllProjectsExport(filter, callback) {
	    $.post('Home/PrepareExport', { request: filter }).done(callback);
	}

	function setTestPriority(data, callback) {
	    $.post('TestAssignment/TestPriority/' + data.id, { priority: data.priority }).done(callback);
	}

	function setTestTechnician(data, callback) {
	    $.post('TestAssignment/Technician/' + data.id, { technicianId: data.technician.id }).done(callback);
	}

	function setProjectToOnHold(id, callback) {
	    $.post('Home/OnHold/' + id).done(callback);
	}

	function setProjectToResume(id, callback) {
	    $.post('Home/Resume/' + id).done(callback);
	}

	function setProjectToCancel(id, callback) {
	    $.post('Home/Cancel/' + id).done(callback);
	}

	function setProjectToClosed(id, callback) {
	    $.post('Home/Close/' + id).done(callback);
	}

	function setToWebDateFromAllProjects(id, callback) {
	    $.post('Home/ToWeb/' + id).done(callback);
	}

	function rejectTestRequest(params, callback) {
	    $.post('DatasheetProcessing/Reject/' + params.id, {
	        comments: params.comments,
	        testDataIds: params.testDataIds
	    }).done(callback);
	}

	function reviewTestRequest(params, callback) {
	    $.post('DatasheetProcessing/ToReview/' + params.id).done(callback);
	}

	function setTestRequestReviewLink(params, callback) {
	    $.post('DatasheetProcessing/SetReviewLink/' + params.id, {
	        reviewLink: params.reviewLink
	    }).done(callback);
	}

	function setTestRequestToWeb(params, callback) {
	    $.post('DatasheetProcessing/ToWeb/' + params.id).done(callback);
	}

	function setTestRequestToApprove(params, callback) {
	    $.post('DatasheetProcessing/Approve/' + params.id).done(callback);
	}

	function setTestRequestToClosed(params, callback) {
	    $.post('DatasheetProcessing/Close/' + params.id).done(callback);
	}

	function setProjectTestForReTest(params, callback) {
	    $.post('ProjectTests/SetReTest/' + params.id, { isReTest: params.isReTest }).done(callback);
	}

	function addReTestToProjectTest(params, callback) {
	    $.post('ProjectTests/AddReTest/' + params.id, { testRequestId: params.testRequestId }).done(callback);
	}

	function startProjectTest(id, callback) {
	    $.post('ProjectTests/Start/' + id).done(callback);
	}

	function stopProjectTest(params, callback) {
	    $.post('ProjectTests/Stop/' + params.id, { wipStation: params.note }).done(callback);
	}

	function pauseProjecteTest(id, callback) {
	    $.post('ProjectTests/Pause/' + id).done(callback);
	}

	function setOnHoldProjectTest(params, callback) {
	    $.post('ProjectTests/OnHold/' + params.id, { techNotes: params.reason }).done(callback);
	}

	function setResumeProjectTest(id, callback) {
	    $.post('ProjectTests/Resume/' + id).done(callback);
	}

	function deleteProjectTest(id, callback) {
	    $.post('ProjectTests/Delete/' + id).done(callback);
	}

	function getWiP(param, callback) {
	    var postData = {};
	    postData.groupType = param.groupType;
	    if (postData.groupType == 3) {
	        postData.groupType = 1;
	        postData.id = param.testGroupFilterValue.get('id');
	    }

	    if (postData.groupType == 4) {
	        postData.groupType = 2;
	        postData.id = param.techFilterValue.get('id');
	    }

	    $.post('WipProjects/Get', postData).done(callback);
	}

	function changeTestTechnician(params, callback) {
	    $.post('WipProjects/Technician/' + params.id, { technicianId: params.technician.id }).done(callback);
	}

	function acceptDatasheet(id, callback) {
	    $.post('DatasheetAcceptance/Accept/' + id).done(callback);
	}

	function acceptQualtiyReview(id, callback) {
	    $.post('QualityAcceptance/Accept/' + id).done(callback);
	}

	function startReview(id, callback) {
	    $.post('QualityReview/StartReview/' + id).done(callback);
	}

	function reviewOut(id, callback) {
	    $.post('QualityReview/ReviewOut/' + id).done(callback);
	}

	function multipleReviewOut(params, callback) {
	    $.post('QualityReview/MultiReviewOut/' + params.id, { testDataIds: params.testDataIds }).done(callback);
	}

	function rejectReview(params, callback) {
	    $.post('QualityReview/RejectTests/' + params.id, { reviewerComments: params.reason, testDataIds: params.testDataIds }).done(callback);
	}

	function saveTestCondition(condition, callback) {
	    $.post('TestConditionAdmin/Save', { data: condition }).done(callback);
	}

	function saveTest(test, callback) {
	    $.post('TestAdmin/Save/', { data: test }).done(callback);
	}

	function setDatasheetToCancel(id, callback) {
	    $.post('DatasheetAcceptance/Cancel/' + id).done(callback);
	}

	function setDatasheetToOnHold(id, callback) {
	    $.post('DatasheetAcceptance/OnHold/' + id).done(callback);
	}

	function setDatasheetToReject(data, callback) {
	    $.post('DatasheetAcceptance/RejectTests/' + data.id, { reviewerComments: data.reason, testDataIds: data.testDataIds }).done(callback);
	}

	function setQualityReviewToCancel(id, callback) {
	    $.post('QualityAcceptance/Cancel/' + id).done(callback);
	}

	function setQualityReviewToOnHold(id, callback) {
	    $.post('QualityAcceptance/OnHold/' + id).done(callback);
	}

	function setQualityRejectReview(data, callback) {
	    $.post('QualityAcceptance/RejectTests/' + data.id, { reviewerComments: data.reason, testDataIds: data.testDataIds }).done(callback);
	}

	function updateTechnicianSchedule(data, callback) {
	    $.post('TechSchedule/Save/', { date: data }).done(callback);
	}

	function updateEquipmentCapacity(data, callback) {
	    $.post('EquipmentCapacity/Save/', { date: data }).done(callback);
	}

	function getDataSheetProcessingList(viewType, callback) {
	    $.get('DatasheetProcessing/GetList?viewType=' + viewType).done(callback);
	}

	function modifySubType(subType, callback) {
	    $.post('SubTypeTable/Save', { data: subType }).done(callback);
	}

	function saveDeviceCharacteristic(device, callback) {
	    $.post('DeviceCharacteristicAdmin/Save', { device: device }).done(callback);
	}

	function deleteDevice(id, callback) {
	    $.post('DeviceCharacteristicAdmin/delete/' + id).done(callback);
	}

	function addNewDivision(division, callback) {
	    $.post('DivisionAdmin/InsertDivision', { division: division }).done(callback);
	}

	function addNewBusinessLine(postData, callback) {
	    $.post('DivisionAdmin/InsertBusinessLine', {
	        businessLine: postData.businessLine,
	        divisionId: postData.divisionId
	    }).done(callback);
	}

	function addNewProductLine(postData, callback) {
	    $.post('DivisionAdmin/InsertProductLine', {
	        productLine: postData.productLine,
	        businessLineId: postData.businessLineId
	    }).done(callback);
	}

	function addNewSegment(postData, callback) {
	    $.post('DivisionAdmin/InsertSegment', {
	        segment: postData.segment,
	        productLineId: postData.productLineId
	    }).done(callback);
	}

	function updateDivision(division, callback) {
	    $.post('DivisionAdmin/updateDivision', { division: division }).done(callback);
	}

	function updateBusinessLine(businessLine, callback) {
	    $.post('DivisionAdmin/UpdateBusinessLine', { businessLine: businessLine }).done(callback);
	}

	function updateProductLine(productLine, callback) {
	    $.post('DivisionAdmin/UpdateProductLine', { productLine: productLine }).done(callback);
	}

	function updateSegment(segment, callback) {
	    $.post('DivisionAdmin/UpdateSegment', { segment: segment }).done(callback);
	}

	function addNewRequestType(requestType, callback) {
	    $.post('RequestTypeAdmin/AddNewRequestType', { requestType: requestType }).done(callback);
	}

	function addNewSubRequestType(subRequestType, callback) {
	    $.post('RequestTypeAdmin/AddNewSubRequestType', { subRequestType: subRequestType }).done(callback);
	}

	function updateRequestType(requestType, callback) {
	    $.post('RequestTypeAdmin/UpdateRequestType', { requestType: requestType }).done(callback);
	}

	function updateSubRequestType(subRequestType, callback) {
	    $.post('RequestTypeAdmin/UpdateSubRequestType', { subRequestType: subRequestType }).done(callback);
	}

	function addNewTargetLab(targetLab, callback) {
	    $.post('TargetLabAdmin/Insert', { targetLab: targetLab }).done(callback);
	}

	function updateTargetLab(targetLab, callback) {
	    $.post('TargetLabAdmin/Update', { targetLab: targetLab }).done(callback);
	}

	function getMyTestInfo(id, callback) {
	    $.get('MyTests/GetTestInfo/' + id).done(callback);
	}

	function copyTest(test, callback) {
	    $.post('MyTests/copyTest', { test: test }).done(callback);
	}
	function addNewChannel(channel, callback) {
	    $.post('ChannelsAdministration/Insert', { channel: channel }).done(callback);
	}

	function updateChannel(channel, callback) {
	    $.post('ChannelsAdministration/Update', { channel: channel }).done(callback);
	}
	function addPackageTypeGroup(packageTypeGroup, callback) {
	    $.post('PackageTypeAdmin/InsertPackageTypeGroup', { packageTypeGroup: packageTypeGroup }).done(callback);
	}

	function updatePackageTypeGroup(packageTypeGroup, callback) {
	    $.post('PackageTypeAdmin/UpdatePackageTypeGroup', { packageTypeGroup: packageTypeGroup }).done(callback);
	}

	function addPackageType(packageType, callback) {
	    $.post('PackageTypeAdmin/InsertPackageType', { packageType: packageType }).done(callback);
	}

	function updatePackageType(packageType, callback) {
	    $.post('PackageTypeAdmin/UpdatePackageType', { packageType: packageType }).done(callback);
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);
	var bind = __webpack_require__(33);
	var Axios = __webpack_require__(34);
	var defaults = __webpack_require__(35);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(52);
	axios.CancelToken = __webpack_require__(53);
	axios.isCancel = __webpack_require__(49);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(54);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(33);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(35);
	var utils = __webpack_require__(32);
	var InterceptorManager = __webpack_require__(46);
	var dispatchRequest = __webpack_require__(47);
	var isAbsoluteURL = __webpack_require__(50);
	var combineURLs = __webpack_require__(51);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(32);
	var normalizeHeaderName = __webpack_require__(36);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(37);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(37);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(32);
	var settle = __webpack_require__(38);
	var buildURL = __webpack_require__(41);
	var parseHeaders = __webpack_require__(42);
	var isURLSameOrigin = __webpack_require__(43);
	var createError = __webpack_require__(39);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(44);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(45);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(39);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(40);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);
	var transformData = __webpack_require__(48);
	var isCancel = __webpack_require__(49);
	var defaults = __webpack_require__(35);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(32);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(52);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.redirect = redirect;
	exports.openInNewWindow = openInNewWindow;
	exports.showDialog = showDialog;
	exports.showSubTypeEditor = showSubTypeEditor;
	exports.showManagerAcceptDialog = showManagerAcceptDialog;
	exports.showEquipmentScheduleEditor = showEquipmentScheduleEditor;
	exports.showTechnicianScheduleEditor = showTechnicianScheduleEditor;
	exports.showTestEditor = showTestEditor;
	exports.showTestConditionEditor = showTestConditionEditor;
	exports.showConfirmationDialogWithTest = showConfirmationDialogWithTest;
	exports.showConfirmationDialog = showConfirmationDialog;
	exports.showConfirmationDialogWithReason = showConfirmationDialogWithReason;
	exports.showConfirmationDialogWithReasonForTest = showConfirmationDialogWithReasonForTest;
	exports.showConfirmationDialogWithFlag = showConfirmationDialogWithFlag;
	exports.showConfirmationDialogWithUrlLink = showConfirmationDialogWithUrlLink;
	exports.showConfirmationDialogWithNote = showConfirmationDialogWithNote;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ConfirmationModal = __webpack_require__(58);

	var _ConfirmationModal2 = _interopRequireDefault(_ConfirmationModal);

	var _ConfirmationModalWithFlag = __webpack_require__(126);

	var _ConfirmationModalWithFlag2 = _interopRequireDefault(_ConfirmationModalWithFlag);

	var _ConfirmationModalWithNote = __webpack_require__(127);

	var _ConfirmationModalWithNote2 = _interopRequireDefault(_ConfirmationModalWithNote);

	var _ConfirmationModalWithUrlLink = __webpack_require__(128);

	var _ConfirmationModalWithUrlLink2 = _interopRequireDefault(_ConfirmationModalWithUrlLink);

	var _ConfirmationModalWithReason = __webpack_require__(129);

	var _ConfirmationModalWithReason2 = _interopRequireDefault(_ConfirmationModalWithReason);

	var _ConfirmationModalWithReasonForTest = __webpack_require__(130);

	var _ConfirmationModalWithReasonForTest2 = _interopRequireDefault(_ConfirmationModalWithReasonForTest);

	var _ConfirmationModalWithTest = __webpack_require__(133);

	var _ConfirmationModalWithTest2 = _interopRequireDefault(_ConfirmationModalWithTest);

	var _TestConditionEditor = __webpack_require__(134);

	var _TestConditionEditor2 = _interopRequireDefault(_TestConditionEditor);

	var _TestEditor = __webpack_require__(135);

	var _TestEditor2 = _interopRequireDefault(_TestEditor);

	var _TechnicianScheduleEditor = __webpack_require__(138);

	var _TechnicianScheduleEditor2 = _interopRequireDefault(_TechnicianScheduleEditor);

	var _EquipmentCapacityEditor = __webpack_require__(139);

	var _EquipmentCapacityEditor2 = _interopRequireDefault(_EquipmentCapacityEditor);

	var _ManagerAcceptModal = __webpack_require__(140);

	var _ManagerAcceptModal2 = _interopRequireDefault(_ManagerAcceptModal);

	var _SubTypeEditorModal = __webpack_require__(141);

	var _SubTypeEditorModal2 = _interopRequireDefault(_SubTypeEditorModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function redirect(url) {
	  window.location = $('base').attr('href') + url;
	}

	function openInNewWindow(url) {
	  window.open(url, '_blank');
	}

	function showDialog(elem) {
	  var wrapper = document.body.appendChild(document.createElement('div'));
	  var modal = _reactDom2.default.render(elem, wrapper);
	  var cleanup = function cleanup() {
	    _reactDom2.default.unmountComponentAtNode(wrapper);
	    return setTimeout(function () {
	      return wrapper.remove();
	    });
	  };

	  modal.promise.always(cleanup).promise();
	}

	function showSubTypeEditor(props) {
	  var elem = _react2.default.createElement(_SubTypeEditorModal2.default, props);
	  showDialog(elem);
	}

	function showManagerAcceptDialog(props) {
	  var elem = _react2.default.createElement(_ManagerAcceptModal2.default, props);
	  showDialog(elem);
	}

	function showEquipmentScheduleEditor(props) {
	  var elem = _react2.default.createElement(_EquipmentCapacityEditor2.default, props);
	  showDialog(elem);
	}

	function showTechnicianScheduleEditor(props) {
	  var elem = _react2.default.createElement(_TechnicianScheduleEditor2.default, props);
	  showDialog(elem);
	}

	function showTestEditor(props) {
	  var elem = _react2.default.createElement(_TestEditor2.default, props);
	  showDialog(elem);
	}

	function showTestConditionEditor(props) {
	  var elem = _react2.default.createElement(_TestConditionEditor2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialogWithTest(props) {
	  var elem = _react2.default.createElement(_ConfirmationModalWithTest2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialog(props) {
	  var elem = _react2.default.createElement(_ConfirmationModal2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialogWithReason(props) {
	  var elem = _react2.default.createElement(_ConfirmationModalWithReason2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialogWithReasonForTest(props) {
	  var elem = _react2.default.createElement(_ConfirmationModalWithReasonForTest2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialogWithFlag(props) {
	  var elem = _react2.default.createElement(_ConfirmationModalWithFlag2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialogWithUrlLink(props) {
	  var elem = _react2.default.createElement(_ConfirmationModalWithUrlLink2.default, props);
	  showDialog(elem);
	}

	function showConfirmationDialogWithNote(props) {
	  var elem = _react2.default.createElement(_ConfirmationModalWithNote2.default, props);
	  showDialog(elem);
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      this.setState(_extends({}, this.state, {
	        isProcessing: true
	      }));

	      this.props.onSuccess(function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'p',
	                null,
	                dataUtils.renderMultiline(this.props.message)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _Modal = __webpack_require__(60);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _isOverflowing = __webpack_require__(85);

	var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

	var _Fade = __webpack_require__(94);

	var _Fade2 = _interopRequireDefault(_Fade);

	var _Body = __webpack_require__(96);

	var _Body2 = _interopRequireDefault(_Body);

	var _Header = __webpack_require__(97);

	var _Header2 = _interopRequireDefault(_Header);

	var _Title = __webpack_require__(99);

	var _Title2 = _interopRequireDefault(_Title);

	var _Footer = __webpack_require__(100);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Dismiss = __webpack_require__(98);

	var _Dismiss2 = _interopRequireDefault(_Dismiss);

	var _ownerDocument = __webpack_require__(101);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	var _inDOM = __webpack_require__(102);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	var _contains = __webpack_require__(103);

	var _contains2 = _interopRequireDefault(_contains);

	var _class = __webpack_require__(104);

	var _class2 = _interopRequireDefault(_class);

	var _events = __webpack_require__(108);

	var _events2 = _interopRequireDefault(_events);

	var _scrollbarSize = __webpack_require__(113);

	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

	var _style = __webpack_require__(114);

	var _style2 = _interopRequireDefault(_style);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseIndex = {};
	var PREFIX = 'modal';

	var getZIndex;

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  Modal.getDefaultPrefix = function getDefaultPrefix() {
	    return PREFIX;
	  };

	  Modal.prototype.getChildContext = function getChildContext() {
	    return this._context || (this._context = { onModalHide: this.props.onHide });
	  };

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	    _this._show = _this._show.bind(_this);
	    _this._removeAttentionClasses = _this._removeAttentionClasses.bind(_this);

	    _this.state = {
	      classes: ''
	    };
	    return _this;
	  }

	  Modal.prototype.componentDidMount = function componentDidMount() {
	    getZIndex = getZIndex || function () {
	      var modal = document.createElement("div"),
	          backdrop = document.createElement("div"),
	          zIndexFactor;

	      modal.className = 'modal hide';
	      backdrop.className = 'modal-backdrop hide';

	      document.body.appendChild(modal);
	      document.body.appendChild(backdrop);

	      baseIndex.modal = +(0, _style2.default)(modal, 'z-index');
	      baseIndex.backdrop = +(0, _style2.default)(backdrop, 'z-index');
	      zIndexFactor = baseIndex.modal - baseIndex.backdrop;

	      document.body.removeChild(modal);
	      document.body.removeChild(backdrop);

	      return function (type) {
	        return baseIndex[type] + zIndexFactor * (_Modal2.default.manager.modals.length - 1);
	      };
	    }();
	  };

	  Modal.prototype._show = function _show(prevProps) {
	    if (this.props.show) this.setState(this._getStyles());
	  };

	  Modal.prototype.render = function render() {
	    var _this2 = this,
	        _cn;

	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var keyboard = _props.keyboard;
	    var transition = _props.transition;
	    var props = _objectWithoutProperties(_props, ['className', 'children', 'keyboard', 'transition']);
	    var _state = this.state;
	    var dialog = _state.dialog;
	    var backdrop = _state.backdrop;


	    var prefix = this.props.modalPrefix || Modal.getDefaultPrefix();

	    if (transition === true) transition = _Fade2.default;

	    var modal = _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        ref: function ref(r) {
	          return _this2.dialog = r;
	        },
	        style: dialog,
	        className: (0, _classnames2.default)(className, prefix, { in: props.show && !transition }),
	        onClick: this.props.backdrop ? function (e) {
	          return _this2.handleBackdropClick(e);
	        } : null
	      }),
	      _react2.default.createElement(
	        'div',
	        {
	          key: 'modal',
	          ref: 'inner',
	          className: (0, _classnames2.default)(prefix + '-dialog', this.props.dialogClassName, this.state.classes, (_cn = {}, _cn[prefix + '-sm'] = props.small || props.sm, _cn[prefix + '-lg'] = props.large || props.lg, _cn))
	        },
	        _react2.default.createElement(
	          'div',
	          { className: prefix + '-content' },
	          children
	        )
	      )
	    );

	    return _react2.default.createElement(
	      _Modal2.default,
	      {
	        keyboard: keyboard,
	        ref: function ref(_ref) {
	          _this2.modal = _ref && _ref.refs.modal;
	          _this2.backdrop = _ref && _ref.refs.backdrop;
	        },
	        backdrop: props.backdrop,
	        show: props.show,
	        onHide: this.props.onHide,
	        onEntering: this._show,
	        onExiting: this._removeAttentionClasses,
	        backdropStyle: backdrop,
	        backdropClassName: prefix + '-backdrop',
	        containerClassName: prefix + '-open',
	        transition: transition,
	        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
	        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
	      },
	      modal
	    );
	  };

	  Modal.prototype.attention = function attention() {
	    var _this3 = this;

	    var animate = this.state.animate;
	    var classes = this.props.attentionAnimation + ' animated';

	    if (!animate) this.setState({ classes: '', animate: true }, function () {

	      if (_this3.props.show) {
	        // trigger reflow to allow animation
	        _this3.refs.inner.offsetWidth;
	        _this3.setState({ animate: false, classes: classes });
	      }
	    });
	  };

	  Modal.prototype.handleBackdropClick = function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) return;
	    if (this.props.backdrop === 'static') return this.attention();

	    this.props.onHide();
	  };

	  Modal.prototype._getStyles = function _getStyles() {
	    if (!_inDOM2.default) return {};

	    var node = (0, _reactDom.findDOMNode)(this.dialog),
	        doc = (0, _ownerDocument2.default)(node),
	        scrollHt = node.scrollHeight,
	        bodyIsOverflowing = (0, _isOverflowing2.default)(this.props.container || doc.body),
	        modalIsOverflowing = scrollHt > doc.documentElement.clientHeight;

	    return {
	      dialog: {
	        zIndex: getZIndex('modal'),
	        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize2.default)() : void 0,
	        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize2.default)() : void 0
	      },
	      backdrop: {
	        zIndex: getZIndex('backdrop')
	      }
	    };
	  };

	  Modal.prototype._removeAttentionClasses = function _removeAttentionClasses() {
	    this.setState({ classes: '' });
	  };

	  return Modal;
	}(_react2.default.Component);

	Modal.propTypes = {
	  show: _react2.default.PropTypes.bool,

	  backdrop: _react2.default.PropTypes.oneOf(['static', true, false]),
	  keyboard: _react2.default.PropTypes.bool,
	  animate: _react2.default.PropTypes.bool,
	  transition: _react2.default.PropTypes.any,
	  onHide: _react2.default.PropTypes.func,

	  modalPrefix: _react2.default.PropTypes.string,
	  dialogClassName: _react2.default.PropTypes.string
	};
	Modal.defaultProps = {
	  backdrop: true,
	  keyboard: true,
	  animate: true,
	  transition: true,
	  attentionAnimation: 'shake'
	};
	Modal.childContextTypes = {
	  onModalHide: _react2.default.PropTypes.func
	};


	Modal.injectCSSPrefix = function (prefix) {
	  PREFIX = prefix;
	};

	function getDefaultPrefix() {
	  return PREFIX;
	}

	_Body2.default.getDefaultPrefix = getDefaultPrefix;
	_Header2.default.getDefaultPrefix = getDefaultPrefix;
	_Title2.default.getDefaultPrefix = getDefaultPrefix;
	_Footer2.default.getDefaultPrefix = getDefaultPrefix;

	Modal.Body = _Body2.default;
	Modal.Header = _Header2.default;
	Modal.Title = _Title2.default;
	Modal.Footer = _Footer2.default;
	Modal.Dismiss = _Dismiss2.default;

	Modal.BaseModal = Modal;

	Modal.TRANSITION_DURATION = 300;
	Modal.BACKDROP_TRANSITION_DURATION = 150;

	exports.default = Modal;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-disable react/prop-types */


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(61);

	var _warning2 = _interopRequireDefault(_warning);

	var _componentOrElement = __webpack_require__(62);

	var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

	var _elementType = __webpack_require__(64);

	var _elementType2 = _interopRequireDefault(_elementType);

	var _Portal = __webpack_require__(65);

	var _Portal2 = _interopRequireDefault(_Portal);

	var _ModalManager = __webpack_require__(69);

	var _ModalManager2 = _interopRequireDefault(_ModalManager);

	var _ownerDocument = __webpack_require__(66);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	var _addEventListener = __webpack_require__(88);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _addFocusListener = __webpack_require__(91);

	var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

	var _inDOM = __webpack_require__(78);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	var _activeElement = __webpack_require__(92);

	var _activeElement2 = _interopRequireDefault(_activeElement);

	var _contains = __webpack_require__(93);

	var _contains2 = _interopRequireDefault(_contains);

	var _getContainer = __webpack_require__(68);

	var _getContainer2 = _interopRequireDefault(_getContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modalManager = new _ModalManager2.default();

	/**
	 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
	 * The Modal component renders its `children` node in front of a backdrop component.
	 *
	 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
	 *
	 * - Manages dialog stacking when one-at-a-time just isn't enough.
	 * - Creates a backdrop, for disabling interaction below the modal.
	 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
	 * - It disables scrolling of the page content while open.
	 * - Adds the appropriate ARIA roles are automatically.
	 * - Easily pluggable animations via a `<Transition/>` component.
	 *
	 * Note that, in the same way the backdrop element prevents users from clicking or interacting
	 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
	 * interact with page content while the Modal is open. To do this, we use a common technique of applying
	 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
	 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
	 * React hierarchy (such as the default: document.body).
	 */
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',


	  propTypes: _extends({}, _Portal2.default.propTypes, {

	    /**
	     * Set the visibility of the Modal
	     */
	    show: _react2.default.PropTypes.bool,

	    /**
	     * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
	     *
	     * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
	     * page content can be placed behind a virtual backdrop as well as a visual one.
	     */
	    container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func]),

	    /**
	     * A callback fired when the Modal is opening.
	     */
	    onShow: _react2.default.PropTypes.func,

	    /**
	     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
	     *
	     * The `onHide` callback only signals intent from the Modal,
	     * you must actually set the `show` prop to `false` for the Modal to close.
	     */
	    onHide: _react2.default.PropTypes.func,

	    /**
	     * Include a backdrop component.
	     */
	    backdrop: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['static'])]),

	    /**
	     * A function that returns a backdrop component. Useful for custom
	     * backdrop rendering.
	     *
	     * ```js
	     *  renderBackdrop={props => <MyBackdrop {...props} />}
	     * ```
	     */
	    renderBackdrop: _react2.default.PropTypes.func,

	    /**
	     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
	     */
	    onEscapeKeyUp: _react2.default.PropTypes.func,

	    /**
	     * A callback fired when the backdrop, if specified, is clicked.
	     */
	    onBackdropClick: _react2.default.PropTypes.func,

	    /**
	     * A style object for the backdrop component.
	     */
	    backdropStyle: _react2.default.PropTypes.object,

	    /**
	     * A css class or classes for the backdrop component.
	     */
	    backdropClassName: _react2.default.PropTypes.string,

	    /**
	     * A css class or set of classes applied to the modal container when the modal is open,
	     * and removed when it is closed.
	     */
	    containerClassName: _react2.default.PropTypes.string,

	    /**
	     * Close the modal when escape key is pressed
	     */
	    keyboard: _react2.default.PropTypes.bool,

	    /**
	     * A `<Transition/>` component to use for the dialog and backdrop components.
	     */
	    transition: _elementType2.default,

	    /**
	     * The `timeout` of the dialog transition if specified. This number is used to ensure that
	     * transition callbacks are always fired, even if browser transition events are canceled.
	     *
	     * See the Transition `timeout` prop for more infomation.
	     */
	    dialogTransitionTimeout: _react2.default.PropTypes.number,

	    /**
	     * The `timeout` of the backdrop transition if specified. This number is used to
	     * ensure that transition callbacks are always fired, even if browser transition events are canceled.
	     *
	     * See the Transition `timeout` prop for more infomation.
	     */
	    backdropTransitionTimeout: _react2.default.PropTypes.number,

	    /**
	     * When `true` The modal will automatically shift focus to itself when it opens, and
	     * replace it to the last focused element when it closes. This also
	     * works correctly with any Modal children that have the `autoFocus` prop.
	     *
	     * Generally this should never be set to `false` as it makes the Modal less
	     * accessible to assistive technologies, like screen readers.
	     */
	    autoFocus: _react2.default.PropTypes.bool,

	    /**
	     * When `true` The modal will prevent focus from leaving the Modal while open.
	     *
	     * Generally this should never be set to `false` as it makes the Modal less
	     * accessible to assistive technologies, like screen readers.
	     */
	    enforceFocus: _react2.default.PropTypes.bool,

	    /**
	     * When `true` The modal will restore focus to previously focused element once
	     * modal is hidden
	     */
	    restoreFocus: _react2.default.PropTypes.bool,

	    /**
	     * Callback fired before the Modal transitions in
	     */
	    onEnter: _react2.default.PropTypes.func,

	    /**
	     * Callback fired as the Modal begins to transition in
	     */
	    onEntering: _react2.default.PropTypes.func,

	    /**
	     * Callback fired after the Modal finishes transitioning in
	     */
	    onEntered: _react2.default.PropTypes.func,

	    /**
	     * Callback fired right before the Modal transitions out
	     */
	    onExit: _react2.default.PropTypes.func,

	    /**
	     * Callback fired as the Modal begins to transition out
	     */
	    onExiting: _react2.default.PropTypes.func,

	    /**
	     * Callback fired after the Modal finishes transitioning out
	     */
	    onExited: _react2.default.PropTypes.func,

	    /**
	     * A ModalManager instance used to track and manage the state of open
	     * Modals. Useful when customizing how modals interact within a container
	     */
	    manager: _react2.default.PropTypes.object.isRequired
	  }),

	  getDefaultProps: function getDefaultProps() {
	    var noop = function noop() {};

	    return {
	      show: false,
	      backdrop: true,
	      keyboard: true,
	      autoFocus: true,
	      enforceFocus: true,
	      restoreFocus: true,
	      onHide: noop,
	      manager: modalManager,
	      renderBackdrop: function renderBackdrop(props) {
	        return _react2.default.createElement('div', props);
	      }
	    };
	  },
	  omitProps: function omitProps(props, propTypes) {

	    var keys = Object.keys(props);
	    var newProps = {};
	    keys.map(function (prop) {
	      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
	        newProps[prop] = props[prop];
	      }
	    });

	    return newProps;
	  },
	  getInitialState: function getInitialState() {
	    return { exited: !this.props.show };
	  },
	  render: function render() {
	    var _props = this.props,
	        show = _props.show,
	        container = _props.container,
	        children = _props.children,
	        Transition = _props.transition,
	        backdrop = _props.backdrop,
	        dialogTransitionTimeout = _props.dialogTransitionTimeout,
	        className = _props.className,
	        style = _props.style,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered;


	    var dialog = _react2.default.Children.only(children);
	    var filteredProps = this.omitProps(this.props, Modal.propTypes);

	    var mountModal = show || Transition && !this.state.exited;
	    if (!mountModal) {
	      return null;
	    }

	    var _dialog$props = dialog.props,
	        role = _dialog$props.role,
	        tabIndex = _dialog$props.tabIndex;


	    if (role === undefined || tabIndex === undefined) {
	      dialog = (0, _react.cloneElement)(dialog, {
	        role: role === undefined ? 'document' : role,
	        tabIndex: tabIndex == null ? '-1' : tabIndex
	      });
	    }

	    if (Transition) {
	      dialog = _react2.default.createElement(
	        Transition,
	        {
	          transitionAppear: true,
	          unmountOnExit: true,
	          'in': show,
	          timeout: dialogTransitionTimeout,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.handleHidden,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        dialog
	      );
	    }

	    return _react2.default.createElement(
	      _Portal2.default,
	      {
	        ref: this.setMountNode,
	        container: container
	      },
	      _react2.default.createElement(
	        'div',
	        _extends({
	          ref: 'modal',
	          role: role || 'dialog'
	        }, filteredProps, {
	          style: style,
	          className: className
	        }),
	        backdrop && this.renderBackdrop(),
	        dialog
	      )
	    );
	  },
	  renderBackdrop: function renderBackdrop() {
	    var _this = this;

	    var _props2 = this.props,
	        backdropStyle = _props2.backdropStyle,
	        backdropClassName = _props2.backdropClassName,
	        renderBackdrop = _props2.renderBackdrop,
	        Transition = _props2.transition,
	        backdropTransitionTimeout = _props2.backdropTransitionTimeout;


	    var backdropRef = function backdropRef(ref) {
	      return _this.backdrop = ref;
	    };

	    var backdrop = _react2.default.createElement('div', {
	      ref: backdropRef,
	      style: this.props.backdropStyle,
	      className: this.props.backdropClassName,
	      onClick: this.handleBackdropClick
	    });

	    if (Transition) {
	      backdrop = _react2.default.createElement(
	        Transition,
	        { transitionAppear: true,
	          'in': this.props.show,
	          timeout: backdropTransitionTimeout
	        },
	        renderBackdrop({
	          ref: backdropRef,
	          style: backdropStyle,
	          className: backdropClassName,
	          onClick: this.handleBackdropClick
	        })
	      );
	    }

	    return backdrop;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.transition) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps) {
	    if (!this.props.show && nextProps.show) {
	      this.checkForFocus();
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this.onShow();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var transition = this.props.transition;


	    if (prevProps.show && !this.props.show && !transition) {
	      // Otherwise handleHidden will call this.
	      this.onHide();
	    } else if (!prevProps.show && this.props.show) {
	      this.onShow();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var _props3 = this.props,
	        show = _props3.show,
	        transition = _props3.transition;


	    if (show || transition && !this.state.exited) {
	      this.onHide();
	    }
	  },
	  onShow: function onShow() {
	    var doc = (0, _ownerDocument2.default)(this);
	    var container = (0, _getContainer2.default)(this.props.container, doc.body);

	    this.props.manager.add(this, container, this.props.containerClassName);

	    this._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleDocumentKeyUp);

	    this._onFocusinListener = (0, _addFocusListener2.default)(this.enforceFocus);

	    this.focus();

	    if (this.props.onShow) {
	      this.props.onShow();
	    }
	  },
	  onHide: function onHide() {
	    this.props.manager.remove(this);

	    this._onDocumentKeyupListener.remove();

	    this._onFocusinListener.remove();

	    if (this.props.restoreFocus) {
	      this.restoreLastFocus();
	    }
	  },
	  setMountNode: function setMountNode(ref) {
	    this.mountNode = ref ? ref.getMountNode() : ref;
	  },
	  handleHidden: function handleHidden() {
	    this.setState({ exited: true });
	    this.onHide();

	    if (this.props.onExited) {
	      var _props4;

	      (_props4 = this.props).onExited.apply(_props4, arguments);
	    }
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }

	    if (this.props.onBackdropClick) {
	      this.props.onBackdropClick(e);
	    }

	    if (this.props.backdrop === true) {
	      this.props.onHide();
	    }
	  },
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
	      if (this.props.onEscapeKeyUp) {
	        this.props.onEscapeKeyUp(e);
	      }
	      this.props.onHide();
	    }
	  },
	  checkForFocus: function checkForFocus() {
	    if (_inDOM2.default) {
	      this.lastFocus = (0, _activeElement2.default)();
	    }
	  },
	  focus: function focus() {
	    var autoFocus = this.props.autoFocus;
	    var modalContent = this.getDialogElement();
	    var current = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
	    var focusInModal = current && (0, _contains2.default)(modalContent, current);

	    if (modalContent && autoFocus && !focusInModal) {
	      this.lastFocus = current;

	      if (!modalContent.hasAttribute('tabIndex')) {
	        modalContent.setAttribute('tabIndex', -1);
	        (0, _warning2.default)(false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
	      }

	      modalContent.focus();
	    }
	  },
	  restoreLastFocus: function restoreLastFocus() {
	    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
	    if (this.lastFocus && this.lastFocus.focus) {
	      this.lastFocus.focus();
	      this.lastFocus = null;
	    }
	  },
	  enforceFocus: function enforceFocus() {
	    var enforceFocus = this.props.enforceFocus;


	    if (!enforceFocus || !this.isMounted() || !this.isTopModal()) {
	      return;
	    }

	    var active = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
	    var modal = this.getDialogElement();

	    if (modal && modal !== active && !(0, _contains2.default)(modal, active)) {
	      modal.focus();
	    }
	  },


	  //instead of a ref, which might conflict with one the parent applied.
	  getDialogElement: function getDialogElement() {
	    var node = this.refs.modal;
	    return node && node.lastChild;
	  },
	  isTopModal: function isTopModal() {
	    return this.props.manager.isTopModal(this);
	  }
	});

	Modal.Manager = _ModalManager2.default;

	exports.default = Modal;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(63);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }

	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Mostly taken from ReactPropTypes.

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }

	      return null;
	    }

	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }

	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(63);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _componentOrElement = __webpack_require__(62);

	var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

	var _ownerDocument = __webpack_require__(66);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	var _getContainer = __webpack_require__(68);

	var _getContainer2 = _interopRequireDefault(_getContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
	 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
	 * The children of `<Portal/>` component will be appended to the `container` specified.
	 */
	var Portal = _react2.default.createClass({

	  displayName: 'Portal',

	  propTypes: {
	    /**
	     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
	     * appended to it.
	     */
	    container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react2.default.PropTypes.func])
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this._overlayTarget && nextProps.container !== this.props.container) {
	      this._portalContainerNode.removeChild(this._overlayTarget);
	      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
	      this._portalContainerNode.appendChild(this._overlayTarget);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderOverlay();
	    this._unmountOverlayTarget();
	  },
	  _mountOverlayTarget: function _mountOverlayTarget() {
	    if (!this._overlayTarget) {
	      this._overlayTarget = document.createElement('div');
	      this._portalContainerNode = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);
	      this._portalContainerNode.appendChild(this._overlayTarget);
	    }
	  },
	  _unmountOverlayTarget: function _unmountOverlayTarget() {
	    if (this._overlayTarget) {
	      this._portalContainerNode.removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	    this._portalContainerNode = null;
	  },
	  _renderOverlay: function _renderOverlay() {

	    var overlay = !this.props.children ? null : _react2.default.Children.only(this.props.children);

	    // Save reference for future access.
	    if (overlay !== null) {
	      this._mountOverlayTarget();
	      this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	      this._unmountOverlayTarget();
	    }
	  },
	  _unrenderOverlay: function _unrenderOverlay() {
	    if (this._overlayTarget) {
	      _reactDom2.default.unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  },
	  render: function render() {
	    return null;
	  },
	  getMountNode: function getMountNode() {
	    return this._overlayTarget;
	  },
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      return _reactDom2.default.findDOMNode(this._overlayInstance);
	    }

	    return null;
	  }
	});

	exports.default = Portal;
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (componentOrElement) {
	  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
	};

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ownerDocument = __webpack_require__(67);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ownerDocument;
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	module.exports = exports["default"];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getContainer;

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getContainer(container, defaultContainer) {
	  container = typeof container === 'function' ? container() : container;
	  return _reactDom2.default.findDOMNode(container) || defaultContainer;
	}
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(70);

	var _style2 = _interopRequireDefault(_style);

	var _class = __webpack_require__(80);

	var _class2 = _interopRequireDefault(_class);

	var _scrollbarSize = __webpack_require__(84);

	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

	var _isOverflowing = __webpack_require__(85);

	var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

	var _manageAriaHidden = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function findIndexOf(arr, cb) {
	  var idx = -1;
	  arr.some(function (d, i) {
	    if (cb(d, i)) {
	      idx = i;
	      return true;
	    }
	  });
	  return idx;
	}

	function findContainer(data, modal) {
	  return findIndexOf(data, function (d) {
	    return d.modals.indexOf(modal) !== -1;
	  });
	}

	function setContainerStyle(state, container) {
	  var style = { overflow: 'hidden' };

	  // we are only interested in the actual `style` here
	  // becasue we will override it
	  state.style = {
	    overflow: container.style.overflow,
	    paddingRight: container.style.paddingRight
	  };

	  if (state.overflowing) {
	    // use computed style, here to get the real padding
	    // to add our scrollbar width
	    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
	  }

	  (0, _style2.default)(container, style);
	}

	function removeContainerStyle(_ref, container) {
	  var style = _ref.style;


	  Object.keys(style).forEach(function (key) {
	    return container.style[key] = style[key];
	  });
	}
	/**
	 * Proper state managment for containers and the modals in those containers.
	 *
	 * @internal Used by the Modal to ensure proper styling of containers.
	 */

	var ModalManager = function () {
	  function ModalManager() {
	    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
	        hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
	        _ref2$handleContainer = _ref2.handleContainerOverflow,
	        handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

	    _classCallCheck(this, ModalManager);

	    this.hideSiblingNodes = hideSiblingNodes;
	    this.handleContainerOverflow = handleContainerOverflow;
	    this.modals = [];
	    this.containers = [];
	    this.data = [];
	  }

	  _createClass(ModalManager, [{
	    key: 'add',
	    value: function add(modal, container, className) {
	      var modalIdx = this.modals.indexOf(modal);
	      var containerIdx = this.containers.indexOf(container);

	      if (modalIdx !== -1) {
	        return modalIdx;
	      }

	      modalIdx = this.modals.length;
	      this.modals.push(modal);

	      if (this.hideSiblingNodes) {
	        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
	      }

	      if (containerIdx !== -1) {
	        this.data[containerIdx].modals.push(modal);
	        return modalIdx;
	      }

	      var data = {
	        modals: [modal],
	        //right now only the first modal of a container will have its classes applied
	        classes: className ? className.split(/\s+/) : [],

	        overflowing: (0, _isOverflowing2.default)(container)
	      };

	      if (this.handleContainerOverflow) {
	        setContainerStyle(data, container);
	      }

	      data.classes.forEach(_class2.default.addClass.bind(null, container));

	      this.containers.push(container);
	      this.data.push(data);

	      return modalIdx;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(modal) {
	      var modalIdx = this.modals.indexOf(modal);

	      if (modalIdx === -1) {
	        return;
	      }

	      var containerIdx = findContainer(this.data, modal);
	      var data = this.data[containerIdx];
	      var container = this.containers[containerIdx];

	      data.modals.splice(data.modals.indexOf(modal), 1);

	      this.modals.splice(modalIdx, 1);

	      // if that was the last modal in a container,
	      // clean up the container
	      if (data.modals.length === 0) {
	        data.classes.forEach(_class2.default.removeClass.bind(null, container));

	        if (this.handleContainerOverflow) {
	          removeContainerStyle(data, container);
	        }

	        if (this.hideSiblingNodes) {
	          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
	        }
	        this.containers.splice(containerIdx, 1);
	        this.data.splice(containerIdx, 1);
	      } else if (this.hideSiblingNodes) {
	        //otherwise make sure the next top modal is visible to a SR
	        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
	      }
	    }
	  }, {
	    key: 'isTopModal',
	    value: function isTopModal(modal) {
	      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
	    }
	  }]);

	  return ModalManager;
	}();

	exports.default = ModalManager;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;

	var _camelizeStyle = __webpack_require__(71);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	var _hyphenateStyle = __webpack_require__(73);

	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

	var _getComputedStyle2 = __webpack_require__(75);

	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

	var _removeStyle = __webpack_require__(76);

	var _removeStyle2 = _interopRequireDefault(_removeStyle);

	var _properties = __webpack_require__(77);

	var _isTransform = __webpack_require__(79);

	var _isTransform2 = _interopRequireDefault(_isTransform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;

	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }

	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });

	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }

	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;

	var _camelize = __webpack_require__(72);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;

	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;

	var _hyphenate = __webpack_require__(74);

	var _hyphenate2 = _interopRequireDefault(_hyphenate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */

	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;

	var rUpper = /([A-Z])/g;

	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;

	var _camelizeStyle = __webpack_require__(71);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _camelizeStyle2.default)(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(78);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var style = document.createElement('div').style;

	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };

	  var vendors = Object.keys(vendorMap);

	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';

	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];

	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }

	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasClass = exports.removeClass = exports.addClass = undefined;

	var _addClass = __webpack_require__(81);

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(83);

	var _removeClass2 = _interopRequireDefault(_removeClass);

	var _hasClass = __webpack_require__(82);

	var _hasClass2 = _interopRequireDefault(_hasClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.addClass = _addClass2.default;
	exports.removeClass = _removeClass2.default;
	exports.hasClass = _hasClass2.default;
	exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addClass;

	var _hasClass = __webpack_require__(82);

	var _hasClass2 = _interopRequireDefault(_hasClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
	}
	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hasClass;
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	}
	module.exports = exports["default"];

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	'use strict';

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}

	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (recalc) {
	  if (!size && size !== 0 || recalc) {
	    if (_inDOM2.default) {
	      var scrollDiv = document.createElement('div');

	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';

	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }

	  return size;
	};

	var _inDOM = __webpack_require__(78);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var size = void 0;

	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isOverflowing;

	var _isWindow = __webpack_require__(86);

	var _isWindow2 = _interopRequireDefault(_isWindow);

	var _ownerDocument = __webpack_require__(67);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBody(node) {
	  return node && node.tagName.toLowerCase() === 'body';
	}

	function bodyIsOverflowing(node) {
	  var doc = (0, _ownerDocument2.default)(node);
	  var win = (0, _isWindow2.default)(doc);
	  var fullWidth = win.innerWidth;

	  // Support: ie8, no innerWidth
	  if (!fullWidth) {
	    var documentElementRect = doc.documentElement.getBoundingClientRect();
	    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	  }

	  return doc.body.clientWidth < fullWidth;
	}

	function isOverflowing(container) {
	  var win = (0, _isWindow2.default)(container);

	  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
	}
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getWindow;
	function getWindow(node) {
	  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
	}
	module.exports = exports["default"];

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ariaHidden = ariaHidden;
	exports.hideSiblings = hideSiblings;
	exports.showSiblings = showSiblings;

	var BLACKLIST = ['template', 'script', 'style'];

	var isHidable = function isHidable(_ref) {
	  var nodeType = _ref.nodeType,
	      tagName = _ref.tagName;
	  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
	};

	var siblings = function siblings(container, mount, cb) {
	  mount = [].concat(mount);

	  [].forEach.call(container.children, function (node) {
	    if (mount.indexOf(node) === -1 && isHidable(node)) {
	      cb(node);
	    }
	  });
	};

	function ariaHidden(show, node) {
	  if (!node) {
	    return;
	  }
	  if (show) {
	    node.setAttribute('aria-hidden', 'true');
	  } else {
	    node.removeAttribute('aria-hidden');
	  }
	}

	function hideSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(true, node);
	  });
	}

	function showSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(false, node);
	  });
	}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node, event, handler, capture) {
	  (0, _on2.default)(node, event, handler, capture);

	  return {
	    remove: function remove() {
	      (0, _off2.default)(node, event, handler, capture);
	    }
	  };
	};

	var _on = __webpack_require__(89);

	var _on2 = _interopRequireDefault(_on);

	var _off = __webpack_require__(90);

	var _off2 = _interopRequireDefault(_off);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(78);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}

	exports.default = on;
	module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(78);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var off = function off() {};
	if (_inDOM2.default) {
	  off = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  }();
	}

	exports.default = off;
	module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addFocusListener;
	/**
	 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
	 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
	 *
	 * We only allow one Listener at a time to avoid stack overflows
	 */
	function addFocusListener(handler) {
	  var useFocusin = !document.addEventListener;
	  var remove = void 0;

	  if (useFocusin) {
	    document.attachEvent('onfocusin', handler);
	    remove = function remove() {
	      return document.detachEvent('onfocusin', handler);
	    };
	  } else {
	    document.addEventListener('focus', handler, true);
	    remove = function remove() {
	      return document.removeEventListener('focus', handler, true);
	    };
	  }

	  return { remove: remove };
	}
	module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = activeElement;

	var _ownerDocument = __webpack_require__(67);

	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function activeElement() {
	  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

	  try {
	    return doc.activeElement;
	  } catch (e) {/* ie throws if no active element */}
	}
	module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(78);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  return _inDOM2.default ? function (context, node) {
	    if (context.contains) {
	      return context.contains(node);
	    } else if (context.compareDocumentPosition) {
	      return context === node || !!(context.compareDocumentPosition(node) & 16);
	    } else {
	      return fallback(context, node);
	    }
	  } : fallback;
	}();

	function fallback(context, node) {
	  if (node) do {
	    if (node === context) return true;
	  } while (node = node.parentNode);

	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(95);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);

	  function Fade(props, context) {
	    _classCallCheck(this, Fade);

	    return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	  }

	  Fade.prototype.render = function render() {
	    return _react2.default.createElement(
	      _Transition2.default,
	      _extends({}, this.props, {
	        'in': this.props.in,
	        className: 'fade',
	        enteredClassName: 'in',
	        enteringClassName: 'in'
	      }),
	      this.props.children
	    );
	  };

	  return Fade;
	}(_react2.default.Component);

	exports.default = Fade;
	module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _on = __webpack_require__(89);

	var _on2 = _interopRequireDefault(_on);

	var _properties = __webpack_require__(77);

	var _properties2 = _interopRequireDefault(_properties);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var transitionEndEvent = _properties2.default.end;

	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	/**
	 * The Transition component lets you define and run css transitions with a simple declarative api.
	 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
	 * but is specifically optimized for transitioning a single child "in" or "out".
	 *
	 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
	 * The extensive set of lifecycle callbacks means you have control over
	 * the transitioning now at each step of the way.
	 */

	var Transition = function (_React$Component) {
	  _inherits(Transition, _React$Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).call(this, props, context));

	    var initialStatus = void 0;
	    _this.nextStatus = null;

	    if (props.in) {
	      if (props.transitionAppear) {
	        initialStatus = EXITED;
	        _this.nextStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }

	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  _createClass(Transition, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateStatus();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var status = this.state.status;


	      if (nextProps.in) {
	        if (status === UNMOUNTED) {
	          this.setState({ status: EXITED });
	        }
	        if (status !== ENTERING && status !== ENTERED) {
	          this.nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.nextStatus = EXITING;
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateStatus();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.cancelNextCallback();
	    }
	  }, {
	    key: 'updateStatus',
	    value: function updateStatus() {
	      var _this2 = this;

	      if (this.nextStatus !== null) {
	        // nextStatus will always be ENTERING or EXITING.
	        this.cancelNextCallback();
	        var node = _reactDom2.default.findDOMNode(this);

	        if (this.nextStatus === ENTERING) {
	          this.props.onEnter(node);

	          this.safeSetState({ status: ENTERING }, function () {
	            _this2.props.onEntering(node);

	            _this2.onTransitionEnd(node, function () {
	              _this2.safeSetState({ status: ENTERED }, function () {
	                _this2.props.onEntered(node);
	              });
	            });
	          });
	        } else {
	          this.props.onExit(node);

	          this.safeSetState({ status: EXITING }, function () {
	            _this2.props.onExiting(node);

	            _this2.onTransitionEnd(node, function () {
	              _this2.safeSetState({ status: EXITED }, function () {
	                _this2.props.onExited(node);
	              });
	            });
	          });
	        }

	        this.nextStatus = null;
	      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	        this.setState({ status: UNMOUNTED });
	      }
	    }
	  }, {
	    key: 'cancelNextCallback',
	    value: function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    }
	  }, {
	    key: 'safeSetState',
	    value: function safeSetState(nextState, callback) {
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      this.setState(nextState, this.setNextCallback(callback));
	    }
	  }, {
	    key: 'setNextCallback',
	    value: function setNextCallback(callback) {
	      var _this3 = this;

	      var active = true;

	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this3.nextCallback = null;

	          callback(event);
	        }
	      };

	      this.nextCallback.cancel = function () {
	        active = false;
	      };

	      return this.nextCallback;
	    }
	  }, {
	    key: 'onTransitionEnd',
	    value: function onTransitionEnd(node, handler) {
	      this.setNextCallback(handler);

	      if (node) {
	        (0, _on2.default)(node, transitionEndEvent, this.nextCallback);
	        setTimeout(this.nextCallback, this.props.timeout);
	      } else {
	        setTimeout(this.nextCallback, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var status = this.state.status;
	      if (status === UNMOUNTED) {
	        return null;
	      }

	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          childProps = _objectWithoutProperties(_props, ['children', 'className']);

	      Object.keys(Transition.propTypes).forEach(function (key) {
	        return delete childProps[key];
	      });

	      var transitionClassName = void 0;
	      if (status === EXITED) {
	        transitionClassName = this.props.exitedClassName;
	      } else if (status === ENTERING) {
	        transitionClassName = this.props.enteringClassName;
	      } else if (status === ENTERED) {
	        transitionClassName = this.props.enteredClassName;
	      } else if (status === EXITING) {
	        transitionClassName = this.props.exitingClassName;
	      }

	      var child = _react2.default.Children.only(children);
	      return _react2.default.cloneElement(child, _extends({}, childProps, {
	        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
	      }));
	    }
	  }]);

	  return Transition;
	}(_react2.default.Component);

	Transition.propTypes = {
	  /**
	   * Show the component; triggers the enter or exit animation
	   */
	  in: _react2.default.PropTypes.bool,

	  /**
	   * Wait until the first "enter" transition to mount the component (add it to the DOM)
	   */
	  mountOnEnter: _react2.default.PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown
	   */
	  unmountOnExit: _react2.default.PropTypes.bool,

	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2.default.PropTypes.bool,

	  /**
	   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	   * transition indefinately if the browser transitionEnd events are
	   * canceled or interrupted.
	   *
	   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	   * setting this to the duration of your animation (or a bit above it).
	   */
	  timeout: _react2.default.PropTypes.number,

	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  exitedClassName: _react2.default.PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is exiting
	   */
	  exitingClassName: _react2.default.PropTypes.string,
	  /**
	   * CSS class or classes applied when the component is entered
	   */
	  enteredClassName: _react2.default.PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is entering
	   */
	  enteringClassName: _react2.default.PropTypes.string,

	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _react2.default.PropTypes.func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _react2.default.PropTypes.func
	};

	// Name the function so it is clearer in the documentation
	function noop() {}

	Transition.displayName = 'Transition';

	Transition.defaultProps = {
	  in: false,
	  unmountOnExit: false,
	  transitionAppear: false,

	  timeout: 5000,

	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,

	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	exports.default = Transition;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalBody = function (_React$Component) {
	  _inherits(ModalBody, _React$Component);

	  function ModalBody() {
	    _classCallCheck(this, ModalBody);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ModalBody.getDefaultPrefix = function getDefaultPrefix() {
	    return 'modal';
	  };

	  ModalBody.prototype.render = function render() {
	    var prefix = this.props.modalPrefix || ModalBody.getDefaultPrefix();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: (0, _classnames2.default)(this.props.className, prefix + '-body') }),
	      this.props.children
	    );
	  };

	  return ModalBody;
	}(_react2.default.Component);

	ModalBody.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalPrefix: _react2.default.PropTypes.string
	};

	module.exports = ModalBody;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Dismiss = __webpack_require__(98);

	var _Dismiss2 = _interopRequireDefault(_Dismiss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalHeader = function (_React$Component) {
	  _inherits(ModalHeader, _React$Component);

	  function ModalHeader() {
	    _classCallCheck(this, ModalHeader);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ModalHeader.getDefaultPrefix = function getDefaultPrefix() {
	    return 'modal';
	  };

	  ModalHeader.prototype.render = function render() {
	    var prefix = this.props.modalPrefix || ModalHeader.getDefaultPrefix();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: (0, _classnames2.default)(this.props.className, prefix + '-header')
	      }),
	      this.props.closeButton && _react2.default.createElement(
	        _Dismiss2.default,
	        {
	          className: 'close',
	          'aria-label': this.props['aria-label'] || 'Close Modal',
	          style: { marginTop: -2 }
	        },
	        _react2.default.createElement(
	          'span',
	          { 'aria-hidden': 'true' },
	          '×'
	        )
	      ),
	      this.props.children
	    );
	  };

	  return ModalHeader;
	}(_react2.default.Component);

	ModalHeader._isModalHeader = true;
	ModalHeader.defaultProps = {
	  closeButton: false
	};
	ModalHeader.contextTypes = {
	  onModalHide: _react2.default.PropTypes.func
	};


	module.exports = ModalHeader;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var chain = function chain(a, b) {
	  return function () {
	    a && a.apply(undefined, arguments);
	    b && b.apply(undefined, arguments);
	  };
	};

	var Dismiss = function (_React$Component) {
	  _inherits(Dismiss, _React$Component);

	  function Dismiss() {
	    _classCallCheck(this, Dismiss);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Dismiss.prototype.render = function render() {
	    var _props = this.props;
	    var Tag = _props.component;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['component', 'children']);

	    return _react2.default.createElement(
	      Tag,
	      _extends({}, props, { onClick: chain(props.onClick, this.context.onModalHide) }),
	      children
	    );
	  };

	  return Dismiss;
	}(_react2.default.Component);

	Dismiss.propTypes = {
	  component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func])
	};
	Dismiss.defaultProps = {
	  component: 'button'
	};
	Dismiss.contextTypes = {
	  onModalHide: _react2.default.PropTypes.func
	};


	module.exports = Dismiss;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalTitle = function (_React$Component) {
	  _inherits(ModalTitle, _React$Component);

	  function ModalTitle() {
	    _classCallCheck(this, ModalTitle);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ModalTitle.getDefaultPrefix = function getDefaultPrefix() {
	    return 'modal';
	  };

	  ModalTitle.prototype.render = function render() {
	    var prefix = this.props.modalPrefix || ModalTitle.getDefaultPrefix();

	    return _react2.default.createElement(
	      'h4',
	      _extends({}, this.props, { className: (0, _classnames2.default)(this.props.className, prefix + '-title') }),
	      this.props.children
	    );
	  };

	  return ModalTitle;
	}(_react2.default.Component);

	ModalTitle.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalPrefix: _react2.default.PropTypes.string
	};

	module.exports = ModalTitle;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalFooter = function (_React$Component) {
	  _inherits(ModalFooter, _React$Component);

	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ModalFooter.getDefaultPrefix = function getDefaultPrefix() {
	    return 'modal';
	  };

	  ModalFooter.prototype.render = function render() {
	    var prefix = this.props.modalPrefix || ModalFooter.getDefaultPrefix();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { className: (0, _classnames2.default)(this.props.className, prefix + '-footer') }),
	      this.props.children
	    );
	  };

	  return ModalFooter;
	}(_react2.default.Component);

	ModalFooter.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalPrefix: _react2.default.PropTypes.string
	};

	module.exports = ModalFooter;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = ownerDocument;

	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}

	module.exports = exports["default"];

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(102);

	var contains = (function () {
	  var root = canUseDOM && document.documentElement;

	  return root && root.contains ? function (context, node) {
	    return context.contains(node);
	  } : root && root.compareDocumentPosition ? function (context, node) {
	    return context === node || !!(context.compareDocumentPosition(node) & 16);
	  } : function (context, node) {
	    if (node) do {
	      if (node === context) return true;
	    } while (node = node.parentNode);

	    return false;
	  };
	})();

	module.exports = contains;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  addClass: __webpack_require__(105),
	  removeClass: __webpack_require__(107),
	  hasClass: __webpack_require__(106)
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hasClass = __webpack_require__(106);

	module.exports = function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element)) element.className = element.className + ' ' + className;
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
	};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var on = __webpack_require__(109),
	    off = __webpack_require__(110),
	    filter = __webpack_require__(111);

	module.exports = { on: on, off: off, filter: filter };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(102);
	var on = function on() {};

	if (canUseDOM) {
	  on = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = on;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(102);
	var off = function off() {};

	if (canUseDOM) {

	  off = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = off;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var contains = __webpack_require__(103),
	    qsa = __webpack_require__(112);

	module.exports = function (selector, handler) {
	  return function (e) {
	    var top = e.currentTarget,
	        target = e.target,
	        matches = qsa(top, selector);

	    if (matches.some(function (match) {
	      return contains(match, target);
	    })) handler.call(this, e);
	  };
	};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	'use strict';
	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.
	var simpleSelectorRE = /^[\w-]*$/,
	    toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

	module.exports = function qsa(element, selector) {
	  var maybeID = selector[0] === '#',
	      maybeClass = selector[0] === '.',
	      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
	      isSimple = simpleSelectorRE.test(nameOnly),
	      found;

	  if (isSimple) {
	    if (maybeID) {
	      element = element.getElementById ? element : document;
	      return (found = element.getElementById(nameOnly)) ? [found] : [];
	    }

	    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));

	    return toArray(element.getElementsByTagName(selector));
	  }

	  return toArray(element.querySelectorAll(selector));
	};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var canUseDOM = __webpack_require__(102);

	var size;

	module.exports = function (recalc) {
	  if (!size || recalc) {
	    if (canUseDOM) {
	      var scrollDiv = document.createElement('div');

	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';

	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }

	  return size;
	};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var camelize = __webpack_require__(115),
	    hyphenate = __webpack_require__(117),
	    _getComputedStyle = __webpack_require__(119),
	    removeStyle = __webpack_require__(121);

	var has = Object.prototype.hasOwnProperty;

	module.exports = function style(node, property, value) {
	  var css = '',
	      props = property;

	  if (typeof property === 'string') {

	    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
	  }

	  for (var key in props) if (has.call(props, key)) {
	    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
	  }

	  node.style.cssText += ';' + css;
	};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */

	'use strict';
	var camelize = __webpack_require__(116);
	var msPattern = /^-ms-/;

	module.exports = function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	"use strict";

	var rHyphen = /-(.)/g;

	module.exports = function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */

	"use strict";

	var hyphenate = __webpack_require__(118);
	var msPattern = /^ms-/;

	module.exports = function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, "-ms-");
	};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';

	var rUpper = /([A-Z])/g;

	module.exports = function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var babelHelpers = __webpack_require__(120);

	var _utilCamelizeStyle = __webpack_require__(115);

	var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	module.exports = function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _utilCamelizeStyle2['default'])(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(this, function (global) {
	  var babelHelpers = global;

	  babelHelpers.interopRequireDefault = function (obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  };

	  babelHelpers._extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	})

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DATETIME_FORMAT = exports.DATE_FORMAT = undefined;
	exports.isValidUrl = isValidUrl;
	exports.isEmpty = isEmpty;
	exports.trim = trim;
	exports.validPartNumber = validPartNumber;
	exports.validNumber = validNumber;
	exports.renderToLocalDate = renderToLocalDate;
	exports.renderToLocalDateTime = renderToLocalDateTime;
	exports.renderMultiline = renderMultiline;
	exports.hasTrueValue = hasTrueValue;
	exports.formatToThreeDecimals = formatToThreeDecimals;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(123);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _validUrl = __webpack_require__(124);

	var _validUrl2 = _interopRequireDefault(_validUrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DATE_FORMAT = exports.DATE_FORMAT = 'DD/MM/YYYY';
	var DATETIME_FORMAT = exports.DATETIME_FORMAT = 'DD/MM/YYYY HH:mm';

	function isValidUrl(url) {
	  return _validUrl2.default.isUri(url);
	}

	function isEmpty(str) {
	  if (str == undefined || str == null) {
	    return true;
	  }

	  return _lodash2.default.isEmpty(String(str));
	}

	function trim(str) {
	  return _lodash2.default.trim(str);
	}

	function validPartNumber(str) {
	  var re = /[0-9a-zA-Z]/;
	  return re.exec(str);
	}

	function validNumber(str) {
	  return !isNaN(parseInt(str));
	}

	function renderToLocalDate(date) {
	  if (date == undefined) {
	    return '';
	  }

	  return moment(date).format(DATE_FORMAT);
	}

	function renderToLocalDateTime(date) {
	  if (date == undefined) {
	    return '';
	  }

	  return moment(date).format(DATETIME_FORMAT);
	}

	function renderMultiline(str) {
	  if (str) {
	    return str.split('\n').map(function (item, idx) {
	      return _react2.default.createElement(
	        'span',
	        { key: idx },
	        item,
	        _react2.default.createElement('br', null)
	      );
	    });
	  }

	  return '';
	}

	function hasTrueValue(obj) {
	  for (var o in obj) {
	    if (obj[o]) return true;
	  }

	  return false;
	}

	function formatToThreeDecimals(num) {
	  return Math.round(num * 1000) / 1000;
	}

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = _;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function(module) {
	    'use strict';

	    module.exports.is_uri = is_iri;
	    module.exports.is_http_uri = is_http_iri;
	    module.exports.is_https_uri = is_https_iri;
	    module.exports.is_web_uri = is_web_iri;
	    // Create aliases
	    module.exports.isUri = is_iri;
	    module.exports.isHttpUri = is_http_iri;
	    module.exports.isHttpsUri = is_https_iri;
	    module.exports.isWebUri = is_web_iri;


	    // private function
	    // internal URI spitter method - direct from RFC 3986
	    var splitUri = function(uri) {
	        var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
	        return splitted;
	    };

	    function is_iri(value) {
	        if (!value) {
	            return;
	        }

	        // check for illegal characters
	        if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return;

	        // check for hex escapes that aren't complete
	        if (/%[^0-9a-f]/i.test(value)) return;
	        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;

	        var splitted = [];
	        var scheme = '';
	        var authority = '';
	        var path = '';
	        var query = '';
	        var fragment = '';
	        var out = '';

	        // from RFC 3986
	        splitted = splitUri(value);
	        scheme = splitted[1]; 
	        authority = splitted[2];
	        path = splitted[3];
	        query = splitted[4];
	        fragment = splitted[5];

	        // scheme and path are required, though the path can be empty
	        if (!(scheme && scheme.length && path.length >= 0)) return;

	        // if authority is present, the path must be empty or begin with a /
	        if (authority && authority.length) {
	            if (!(path.length === 0 || /^\//.test(path))) return;
	        } else {
	            // if authority is not present, the path must not start with //
	            if (/^\/\//.test(path)) return;
	        }

	        // scheme must begin with a letter, then consist of letters, digits, +, ., or -
	        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))  return;

	        // re-assemble the URL per section 5.3 in RFC 3986
	        out += scheme + ':';
	        if (authority && authority.length) {
	            out += '//' + authority;
	        }

	        out += path;

	        if (query && query.length) {
	            out += '?' + query;
	        }

	        if (fragment && fragment.length) {
	            out += '#' + fragment;
	        }

	        return out;
	    }

	    function is_http_iri(value, allowHttps) {
	        if (!is_iri(value)) {
	            return;
	        }

	        var splitted = [];
	        var scheme = '';
	        var authority = '';
	        var path = '';
	        var port = '';
	        var query = '';
	        var fragment = '';
	        var out = '';

	        // from RFC 3986
	        splitted = splitUri(value);
	        scheme = splitted[1]; 
	        authority = splitted[2];
	        path = splitted[3];
	        query = splitted[4];
	        fragment = splitted[5];

	        if (!scheme)  return;

	        if(allowHttps) {
	            if (scheme.toLowerCase() != 'https') return;
	        } else {
	            if (scheme.toLowerCase() != 'http') return;
	        }

	        // fully-qualified URIs must have an authority section that is
	        // a valid host
	        if (!authority) {
	            return;
	        }

	        // enable port component
	        if (/:(\d+)$/.test(authority)) {
	            port = authority.match(/:(\d+)$/)[0];
	            authority = authority.replace(/:\d+$/, '');
	        }

	        out += scheme + ':';
	        out += '//' + authority;
	        
	        if (port) {
	            out += port;
	        }
	        
	        out += path;
	        
	        if(query && query.length){
	            out += '?' + query;
	        }

	        if(fragment && fragment.length){
	            out += '#' + fragment;
	        }
	        
	        return out;
	    }

	    function is_https_iri(value) {
	        return is_http_iri(value, true);
	    }

	    function is_web_iri(value) {
	        return (is_http_iri(value) || is_https_iri(value));
	    }

	})(module);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(125)(module)))

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var checked = $(this.refs.flag).is(':checked');

	      this.setState(_extends({}, this.state, {
	        isProcessing: true
	      }));

	      this.props.onSuccess(checked, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var inputDivClass = (0, _classnames2.default)('col-xs-12', {
	        'has-error': this.state.isError
	      });

	      var style = {
	        message: {
	          marginBottom: '15px'
	        },
	        testAreaStyle: {
	          resize: 'vertical'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'p',
	                { style: style.message },
	                this.props.message
	              ),
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'checkbox' },
	                      _react2.default.createElement(
	                        'label',
	                        null,
	                        _react2.default.createElement('input', { ref: 'flag', type: 'checkbox', defaultChecked: true }),
	                        ' ',
	                        this.props.flagMessage
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var note = $(this.refs.note).val();

	      if (dataUtils.isEmpty(note)) {
	        this.setState(_extends({}, this.state, {
	          isError: true
	        }));

	        return;
	      }

	      this.setState(_extends({}, this.state, {
	        isError: false,
	        isProcessing: true
	      }));

	      this.props.onSuccess(note, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var inputDivClass = (0, _classnames2.default)('col-xs-12', {
	        'has-error': this.state.isError
	      });

	      var style = {
	        message: {
	          marginBottom: '15px'
	        },
	        testAreaStyle: {
	          resize: 'vertical'
	        }
	      };

	      var noteProps = {};

	      if (this.props.maxLength) {
	        noteProps.maxLength = this.props.maxLength;
	      }

	      if (this.props.value) {
	        noteProps.defaultValue = this.props.value;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'form',
	              { className: 'form-horizontal' },
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'close', onClick: this.onAbort },
	                  _react2.default.createElement(
	                    'span',
	                    { 'aria-hidden': 'true' },
	                    '\xD7'
	                  )
	                ),
	                _react2.default.createElement(
	                  'h4',
	                  { className: 'modal-title' },
	                  this.props.title
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-body' },
	                _react2.default.createElement(
	                  'p',
	                  { style: style.message },
	                  this.props.message
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: inputDivClass },
	                    _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', ref: 'note',
	                      placeholder: this.props.placeholder }, noteProps))
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-footer' },
	                _react2.default.createElement(
	                  'button',
	                  _extends({ type: 'submit', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                  loadingIndicator,
	                  ' Confirm'
	                ),
	                _react2.default.createElement(
	                  'button',
	                  _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                  'Close'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var note = $(this.refs.note).val();

	      if (dataUtils.isEmpty(note)) {
	        this.setState(_extends({}, this.state, {
	          isError: true
	        }));

	        return;
	      }

	      if (!dataUtils.isValidUrl(note)) {
	        this.setState(_extends({}, this.state, {
	          isError: true
	        }));

	        return;
	      }

	      this.setState(_extends({}, this.state, {
	        isError: false,
	        isProcessing: true
	      }));

	      this.props.onSuccess(note, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var inputDivClass = (0, _classnames2.default)('col-xs-12', {
	        'has-error': this.state.isError
	      });

	      var style = {
	        message: {
	          marginBottom: '15px'
	        },
	        testAreaStyle: {
	          resize: 'vertical'
	        }
	      };

	      var noteProps = {};

	      if (this.props.maxLength) {
	        noteProps.maxLength = this.props.maxLength;
	      }

	      if (this.props.value) {
	        noteProps.defaultValue = this.props.value;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'form',
	              { className: 'form-horizontal' },
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'close', onClick: this.onAbort },
	                  _react2.default.createElement(
	                    'span',
	                    { 'aria-hidden': 'true' },
	                    '\xD7'
	                  )
	                ),
	                _react2.default.createElement(
	                  'h4',
	                  { className: 'modal-title' },
	                  this.props.title
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-body' },
	                _react2.default.createElement(
	                  'p',
	                  { style: style.message },
	                  this.props.message
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: inputDivClass },
	                    _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', ref: 'note',
	                      placeholder: this.props.placeholder }, noteProps))
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-footer' },
	                _react2.default.createElement(
	                  'button',
	                  _extends({ type: 'submit', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                  loadingIndicator,
	                  ' Confirm'
	                ),
	                _react2.default.createElement(
	                  'button',
	                  _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                  'Close'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var reason = $(this.refs.reason).val();

	      if (dataUtils.isEmpty(reason)) {
	        this.setState(_extends({}, this.state, {
	          isError: true
	        }));

	        return;
	      }

	      this.setState(_extends({}, this.state, {
	        isError: false,
	        isProcessing: true
	      }));

	      this.props.onSuccess(reason, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var inputDivClass = (0, _classnames2.default)('col-xs-12', {
	        'has-error': this.state.isError
	      });

	      var style = {
	        message: {
	          marginBottom: '15px'
	        },
	        testAreaStyle: {
	          resize: 'vertical'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'p',
	                { style: style.message },
	                this.props.message
	              ),
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: inputDivClass },
	                    _react2.default.createElement('textarea', { className: 'form-control', style: style.testAreaStyle, ref: 'reason', rows: '3',
	                      placeholder: 'Reason...' })
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _TestStatus = __webpack_require__(131);

	var _TestStatus2 = _interopRequireDefault(_TestStatus);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var reason = $(this.refs.reason).val();
	      var selectedTests = [];

	      $('input:checked').each(function (idx, item) {
	        var id = parseInt(item.value);
	        selectedTests.push(_this2.props.testSelections.filter(function (testSelection) {
	          return testSelection.testDataId == id;
	        })[0]);
	      });

	      var hasError = false;
	      var isReasonEmpty = dataUtils.isEmpty(reason);
	      var isTestNotSelected = selectedTests.length == 0;

	      var state = this.state;

	      if (isReasonEmpty || isTestNotSelected) {
	        hasError = true;
	      }

	      state.isReasonEmpty = isReasonEmpty;
	      state.isTestNotSelected = isTestNotSelected;

	      if (hasError) {
	        this.setState(_extends({}, state));
	        return;
	      }

	      this.setState(_extends({}, state, {
	        isProcessing: true
	      }));

	      this.props.onSuccess({
	        reason: reason,
	        selectedTests: selectedTests
	      }, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var inputDivClass = (0, _classnames2.default)('col-xs-12', {
	        'has-error': this.state.isReasonEmpty
	      });

	      var listErrorMessage = _react2.default.createElement('i', null);

	      if (this.state.isTestNotSelected) {
	        listErrorMessage = _react2.default.createElement(
	          'div',
	          { className: 'alert alert-danger', role: 'alert' },
	          'At least one test must be selected'
	        );
	      }

	      var style = {
	        message: {
	          marginBottom: '15px'
	        },
	        testAreaStyle: {
	          resize: 'vertical'
	        },
	        list: {
	          height: '100px',
	          overflow: 'hidden',
	          overflowY: 'scroll'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'p',
	                { style: style.message },
	                this.props.message
	              ),
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: inputDivClass },
	                    _react2.default.createElement('textarea', { className: 'form-control', style: style.testAreaStyle, ref: 'reason', rows: '3',
	                      placeholder: 'Reason...' })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    listErrorMessage,
	                    _react2.default.createElement(
	                      'div',
	                      { style: style.list, ref: 'tests' },
	                      this.props.testSelections.sort(function (first, second) {
	                        if (first.name < second.name) {
	                          return -1;
	                        }

	                        if (first.name > second.name) {
	                          return 1;
	                        }

	                        return 0;
	                      }).map(function (item, idx) {
	                        var chckboxProps = {};
	                        var labelProps = {};

	                        if (!item.canReject) {
	                          chckboxProps.disabled = true;

	                          labelProps = {
	                            title: 'Test is not in the correct state to be selected',
	                            className: 'disabled-text'
	                          };
	                        }
	                        return _react2.default.createElement(
	                          'div',
	                          { className: 'col-xs-6 checkbox', key: idx },
	                          _react2.default.createElement(
	                            'label',
	                            labelProps,
	                            _react2.default.createElement('input', _extends({ type: 'checkbox', value: item.testDataId }, chckboxProps)),
	                            ' ',
	                            item.name,
	                            ' (',
	                            _react2.default.createElement(_TestStatus2.default, { value: item.status }),
	                            ')'
	                          )
	                        );
	                      })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TestStatus;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TestStatusEnum = __webpack_require__(132);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TestStatus(_ref) {
	  var value = _ref.value;

	  return _react2.default.createElement(
	    'span',
	    null,
	    _TestStatusEnum.statusList.filter(function (item) {
	      return item.id == value;
	    })[0].name
	  );
	}

	TestStatus.props = {
	  value: _react.PropTypes.number.isRequired
	};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var statusList = exports.statusList = [{ id: 1, name: 'Open' }, { id: 2, name: 'WiP' }, { id: 10, name: 'Paused' }, { id: 20, name: 'On Hold' }, { id: 90, name: 'Test Completed' }, { id: 99, name: 'Rejected' }, { id: 100, name: 'Reviewed' }];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _TestStatus = __webpack_require__(131);

	var _TestStatus2 = _interopRequireDefault(_TestStatus);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.state = {
	      isProcessing: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var selectedTests = [];

	      $('input:checked').each(function (idx, item) {
	        var id = parseInt(item.value);
	        selectedTests.push(_this2.props.testSelections.filter(function (testSelection) {
	          return testSelection.testDataId == id;
	        })[0]);
	      });

	      var hasError = false;
	      var isTestNotSelected = selectedTests.length == 0;

	      var state = this.state;

	      if (isTestNotSelected) {
	        hasError = true;
	      }

	      state.isTestNotSelected = isTestNotSelected;

	      if (hasError) {
	        this.setState(_extends({}, state));
	        return;
	      }

	      this.setState(_extends({}, state, {
	        isProcessing: true
	      }));

	      this.props.onSuccess(selectedTests, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var listErrorMessage = _react2.default.createElement('i', null);

	      if (this.state.isTestNotSelected) {
	        listErrorMessage = _react2.default.createElement(
	          'div',
	          { className: 'alert alert-danger', role: 'alert' },
	          'At least one test must be selected'
	        );
	      }

	      var style = {
	        list: {
	          height: '100px',
	          overflow: 'hidden',
	          overflowY: 'scroll'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'p',
	                { style: style.message },
	                this.props.message
	              ),
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    listErrorMessage,
	                    _react2.default.createElement(
	                      'div',
	                      { style: style.list, ref: 'tests' },
	                      this.props.testSelections.sort(function (first, second) {
	                        if (first.name < second.name) {
	                          return -1;
	                        }

	                        if (first.name > second.name) {
	                          return 1;
	                        }

	                        return 0;
	                      }).map(function (item, idx) {
	                        var chckboxProps = {};
	                        var labelProps = {};

	                        if (!item.canReject) {
	                          chckboxProps.disabled = true;

	                          labelProps = {
	                            title: 'Test is not in the correct state to be selected',
	                            className: 'disabled-text'
	                          };
	                        }
	                        return _react2.default.createElement(
	                          'div',
	                          { className: 'col-xs-6 checkbox', key: idx },
	                          _react2.default.createElement(
	                            'label',
	                            labelProps,
	                            _react2.default.createElement('input', _extends({ type: 'checkbox', value: item.testDataId }, chckboxProps)),
	                            ' ',
	                            item.name,
	                            ' (',
	                            _react2.default.createElement(_TestStatus2.default, { value: item.status }),
	                            ')'
	                          )
	                        );
	                      })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  message: _react.PropTypes.string.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _Immutable = __webpack_require__(6);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);
	    _this.onFieldChanged = _this.onFieldChanged.bind(_this);
	    _this.onStepApplicableChanged = _this.onStepApplicableChanged.bind(_this);
	    _this.onActiveChanged = _this.onActiveChanged.bind(_this);

	    _this.state = {
	      isProcessing: false,
	      condition: (0, _Immutable.fromJS)({}),
	      isNameEmpty: false,
	      isLabelEmpty: false,
	      isHelpTextEmpty: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });

	      this.setState(_extends({}, this.state, {
	        condition: this.props.condition
	      }));
	    }
	  }, {
	    key: 'onFieldChanged',
	    value: function onFieldChanged(name, e) {
	      this.setState(_extends({}, this.state, {
	        condition: this.state.condition.set(name, e.target.value)
	      }));
	    }
	  }, {
	    key: 'onStepApplicableChanged',
	    value: function onStepApplicableChanged(e) {
	      var checked = $(e.target).is(":checked");

	      this.setState(_extends({}, this.state, {
	        condition: this.state.condition.set('stepApplicable', checked)
	      }));
	    }
	  }, {
	    key: 'onActiveChanged',
	    value: function onActiveChanged(e) {
	      var item = this.state.item;
	      var checked = $(e.target).is(':checked');

	      this.setState(_extends({}, this.state, {
	        condition: this.state.condition.set('isDeleted', !checked)
	      }));
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var isNameEmpty = dataUtils.isEmpty(this.state.condition.get('name'));
	      var isLabelEmpty = dataUtils.isEmpty(this.state.condition.get('label'));
	      var isHelpTextEmpty = dataUtils.isEmpty(this.state.condition.get('helpText'));
	      var hasError = isNameEmpty || isLabelEmpty || isHelpTextEmpty;

	      this.setState(_extends({}, this.state, {
	        isProcessing: !hasError,
	        isNameEmpty: isNameEmpty,
	        isLabelEmpty: isLabelEmpty,
	        isHelpTextEmpty: isHelpTextEmpty
	      }));

	      if (hasError) {
	        return;
	      }

	      this.props.onSuccess(this.state.condition, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var nameInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isNameEmpty
	      });

	      var labelInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isLabelEmpty
	      });

	      var helpTextInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isHelpTextEmpty
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Name'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: nameInputDivClass },
	                      _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.condition.get('name'),
	                        onChange: _.partial(this.onFieldChanged, 'name') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Label'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: labelInputDivClass },
	                      _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.condition.get('label'),
	                        onChange: _.partial(this.onFieldChanged, 'label') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Steps Appl.'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'checkbox' },
	                        _react2.default.createElement(
	                          'label',
	                          null,
	                          _react2.default.createElement('input', { type: 'checkbox', checked: this.state.condition.get('stepApplicable'),
	                            onChange: this.onStepApplicableChanged })
	                        )
	                      )
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Help Text'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: helpTextInputDivClass },
	                      _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.condition.get('helpText'),
	                        onChange: _.partial(this.onFieldChanged, 'helpText') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Active'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'checkbox' },
	                        _react2.default.createElement(
	                          'label',
	                          null,
	                          _react2.default.createElement('input', { type: 'checkbox',
	                            onChange: this.onActiveChanged,
	                            checked: !this.state.condition.get('isDeleted') })
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  condition: _react.PropTypes.object.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _Immutable = __webpack_require__(6);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _CommonMultiSelector = __webpack_require__(136);

	var _CommonMultiSelector2 = _interopRequireDefault(_CommonMultiSelector);

	var _TimePicker = __webpack_require__(137);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);
	    _this.onFieldChanged = _this.onFieldChanged.bind(_this);

	    _this.onDeviceTypeSelect = _this.onDeviceTypeSelect.bind(_this);
	    _this.onConditionSelect = _this.onConditionSelect.bind(_this);

	    _this.onSetupTimeChanged = _this.onSetupTimeChanged.bind(_this);
	    _this.onTemperatureChangeTimeChanged = _this.onTemperatureChangeTimeChanged.bind(_this);
	    _this.onTestConditionChangeTimeChanged = _this.onTestConditionChangeTimeChanged.bind(_this);

	    _this.onTestGroupChanged = _this.onTestGroupChanged.bind(_this);
	    _this.onTargetLabChanged = _this.onTargetLabChanged.bind(_this);

	    _this.onActiveChanged = _this.onActiveChanged.bind(_this);

	    _this.state = {
	      isProcessing: false,
	      test: (0, _Immutable.fromJS)({
	        conditions: [],
	        deviceTypes: []
	      }),
	      isNameEmpty: false,
	      isTestGroupEmpty: false,
	      isTargetLabEmpty: false,
	      isConditionEmpty: false,
	      isExpUnitPerHourEmpty: false,
	      isPrevUnitPerHourEmpty: false,
	      isDeviceTypeEmpty: false
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState(_extends({}, this.state, {
	        test: this.props.test
	      }));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });
	    }
	  }, {
	    key: 'onSetupTimeChanged',
	    value: function onSetupTimeChanged(value) {
	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('testSetupTime', value)
	      }));
	    }
	  }, {
	    key: 'onTemperatureChangeTimeChanged',
	    value: function onTemperatureChangeTimeChanged(value) {
	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('temperatureChangeTime', value)
	      }));
	    }
	  }, {
	    key: 'onTestConditionChangeTimeChanged',
	    value: function onTestConditionChangeTimeChanged(value) {
	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('testConditionChangeTime', value)
	      }));
	    }
	  }, {
	    key: 'onConditionSelect',
	    value: function onConditionSelect(selected) {
	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('conditions', (0, _Immutable.fromJS)(selected))
	      }));
	    }
	  }, {
	    key: 'onDeviceTypeSelect',
	    value: function onDeviceTypeSelect(selected) {
	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('deviceTypes', (0, _Immutable.fromJS)(selected))
	      }));
	    }
	  }, {
	    key: 'onTestGroupChanged',
	    value: function onTestGroupChanged(e) {
	      var value = $(e.target).val();

	      var testGroup = this.props.testGroupsData.find(function (i) {
	        return i.get('id') === parseInt(value);
	      });

	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('testGroup', (0, _Immutable.fromJS)(testGroup))
	      }));
	    }
	  }, {
	    key: 'onTargetLabChanged',
	    value: function onTargetLabChanged(e) {
	      var value = $(e.target).val();

	      var targetLab = this.props.targetLabsData.find(function (i) {
	        return i.get('id') === parseInt(value);
	      });

	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('targetLab', (0, _Immutable.fromJS)(targetLab))
	      }));
	    }
	  }, {
	    key: 'onFieldChanged',
	    value: function onFieldChanged(name, e) {
	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set(name, e.target.value)
	      }));
	    }
	  }, {
	    key: 'onActiveChanged',
	    value: function onActiveChanged(e) {
	      var item = this.state.item;
	      var checked = $(e.target).is(':checked');

	      this.setState(_extends({}, this.state, {
	        test: this.state.test.set('isDeleted', !checked)
	      }));
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var isNameEmpty = dataUtils.isEmpty(this.state.test.get('name'));

	      var testExpectedUnitPerHour = this.state.test.get('testExpectedUnitPerHour');
	      var isExpUnitPerHourEmpty = dataUtils.isEmpty(testExpectedUnitPerHour) || parseInt(testExpectedUnitPerHour) <= 0;

	      var isDeviceTypeEmpty = this.state.test.get('deviceTypes').count() == 0;

	      var isTestGroupEmpty = this.state.test.get('testGroup').get('id') == 0;
	      var isTargetLabEmpty = this.state.test.get('targetLab').get('id') == 0;

	      var hasError = isNameEmpty || isTargetLabEmpty || isTestGroupEmpty || isExpUnitPerHourEmpty || isDeviceTypeEmpty;

	      this.setState(_extends({}, this.state, {
	        isProcessing: !hasError,
	        isNameEmpty: isNameEmpty,
	        isTestGroupEmpty: isTestGroupEmpty,
	        isTargetLabEmpty: isTargetLabEmpty,
	        isExpUnitPerHourEmpty: isExpUnitPerHourEmpty,
	        isDeviceTypeEmpty: isDeviceTypeEmpty
	      }));

	      if (hasError) {
	        return;
	      }

	      this.props.onSuccess(this.state.test, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var nameInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isNameEmpty
	      });

	      var targetLabInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isTargetLabEmpty
	      });

	      var testGroupInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isTestGroupEmpty
	      });

	      var expUnitPerHourDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isExpUnitPerHourEmpty
	      });

	      var deviceTypesDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': this.state.isDeviceTypeEmpty
	      });

	      var style = {
	        commonMultiSelector: {
	          width: '100%'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Name'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: nameInputDivClass },
	                    _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                      onChange: _.partial(this.onFieldChanged, 'name'),
	                      value: this.state.test.get('name') })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Test Group'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: testGroupInputDivClass },
	                    _react2.default.createElement(
	                      'select',
	                      { className: 'form-control', value: this.state.test.get('testGroup').get('id'),
	                        onChange: this.onTestGroupChanged },
	                      _react2.default.createElement(
	                        'option',
	                        { key: '0', value: '0' },
	                        'Please select a Test Group'
	                      ),
	                      this.props.testGroupsData.map(function (item, idx) {
	                        return _react2.default.createElement(
	                          'option',
	                          { key: idx, value: item.get('id') },
	                          item.get('name')
	                        );
	                      })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Target Lab'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: targetLabInputDivClass },
	                    _react2.default.createElement(
	                      'select',
	                      { className: 'form-control', value: this.state.test.get('targetLab').get('id'),
	                        onChange: this.onTargetLabChanged },
	                      _react2.default.createElement(
	                        'option',
	                        { key: '0', value: '0' },
	                        'Please select a Target Lab'
	                      ),
	                      this.props.targetLabsData.map(function (item, idx) {
	                        return _react2.default.createElement(
	                          'option',
	                          { key: idx, value: item.get('id') },
	                          item.get('name')
	                        );
	                      })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Conditions'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    _react2.default.createElement(_CommonMultiSelector2.default, { style: style.commonMultiSelector,
	                      defaultValue: this.state.test.get('conditions').toJS(),
	                      list: this.props.conditionsData.toJS(),
	                      multiple: 'multiple',
	                      onSelect: this.onConditionSelect })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Setup Time'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    _react2.default.createElement(_TimePicker2.default, { defaultValue: this.state.test.get('testSetupTime'), onChange: this.onSetupTimeChanged })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Cond. Change Time'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    _react2.default.createElement(_TimePicker2.default, { defaultValue: this.state.test.get('testConditionChangeTime'), onChange: this.onTestConditionChangeTimeChanged })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Temp. Change Time'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    _react2.default.createElement(_TimePicker2.default, { defaultValue: this.state.test.get('temperatureChangeTime'), onChange: this.onTemperatureChangeTimeChanged })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Exp. Units/Hour'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: expUnitPerHourDivClass },
	                    _react2.default.createElement('input', { type: 'number', className: 'form-control',
	                      onChange: _.partial(this.onFieldChanged, 'testExpectedUnitPerHour'),
	                      value: this.state.test.get('testExpectedUnitPerHour') })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Prev. Units/Hour'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    _react2.default.createElement('input', { type: 'number', className: 'form-control',
	                      onChange: _.partial(this.onFieldChanged, 'testPreviousUnitPerHour'),
	                      value: this.state.test.get('testPreviousUnitPerHour') })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Device Types'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: deviceTypesDivClass },
	                    _react2.default.createElement(_CommonMultiSelector2.default, { style: style.commonMultiSelector,
	                      defaultValue: this.state.test.get('deviceTypes').toJS(),
	                      list: this.props.deviceTypesData.toJS(),
	                      multiple: 'multiple',
	                      onSelect: this.onDeviceTypeSelect })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { className: 'col-xs-4 control-label' },
	                    'Active'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'checkbox' },
	                      _react2.default.createElement(
	                        'label',
	                        null,
	                        _react2.default.createElement('input', { type: 'checkbox',
	                          onChange: this.onActiveChanged,
	                          checked: !this.state.test.get('isDeleted') })
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  test: _react.PropTypes.object.isRequired,
	  testGroupsData: _react.PropTypes.object.isRequired,
	  targetLabsData: _react.PropTypes.object.isRequired,
	  conditionsData: _react.PropTypes.object.isRequired,
	  deviceTypesData: _react.PropTypes.object.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommonMultiSelector = function (_Component) {
	  _inherits(CommonMultiSelector, _Component);

	  function CommonMultiSelector() {
	    _classCallCheck(this, CommonMultiSelector);

	    return _possibleConstructorReturn(this, (CommonMultiSelector.__proto__ || Object.getPrototypeOf(CommonMultiSelector)).apply(this, arguments));
	  }

	  _createClass(CommonMultiSelector, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      this.onSelectImpl = this.onSelectImpl.bind(this);

	      var el = $(_reactDom2.default.findDOMNode(this));
	      el.selectpicker({
	        countSelectedText: '{0} selected'
	      });
	      el.on('changed.bs.select', this.onSelectImpl);
	    }
	  }, {
	    key: 'onSelectImpl',
	    value: function onSelectImpl(e) {
	      var _this2 = this;

	      var values = $(e.target).val();

	      var selected = [];

	      values.forEach(function (id) {
	        var item = _this2.props.list.find(function (i) {
	          return i.id === parseInt(id);
	        });

	        selected.push(item);
	      });

	      this.props.onSelect(selected);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var params = {};

	      if (this.props.defaultValue) {
	        params.defaultValue = this.props.defaultValue.map(function (item) {
	          return item.id;
	        });
	      }

	      if (this.props.multiple) {
	        params.multiple = 'multiple';
	      }

	      var textFormat = '';

	      if (this.props.textFormat) {
	        textFormat = this.props.textFormat;
	      } else {
	        textFormat = 'count > 2';
	      }

	      return _react2.default.createElement(
	        'select',
	        _extends({ style: this.props.style }, params, { 'data-width': this.props.style.width,
	          'data-selected-text-format': textFormat }),
	        this.props.list.map(function (item) {
	          return _react2.default.createElement(
	            'option',
	            { key: item.id, value: item.id },
	            item.name
	          );
	        })
	      );
	    }
	  }]);

	  return CommonMultiSelector;
	}(_react.Component);

	exports.default = CommonMultiSelector;


	CommonMultiSelector.propTypes = {
	  defaultValue: _react.PropTypes.array,
	  style: _react.PropTypes.object,
	  multiple: _react.PropTypes.string,
	  onSelect: _react.PropTypes.func,
	  list: _react.PropTypes.array
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimePicker = function (_Component) {
	  _inherits(TimePicker, _Component);

	  function TimePicker() {
	    _classCallCheck(this, TimePicker);

	    return _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).apply(this, arguments));
	  }

	  _createClass(TimePicker, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      $(this.refs.timePicker).clockpicker({
	        autoclose: false,
	        twelvehour: false,
	        donetext: 'Done'
	      });

	      var input = $('input', this.refs.timePicker);

	      input.css('background-color', 'white');
	      input.change(function (e) {
	        var value = $(e.target).val();
	        _this2.props.onChange(_this2.toMinutes(value));
	      });

	      if (this.props.defaultValue != undefined) {
	        input.val(this.toText(this.props.defaultValue));
	      }
	    }
	  }, {
	    key: 'toMinutes',
	    value: function toMinutes(hh) {
	      hh = hh.split(':');
	      return parseInt(hh[0], 10) * 60 + parseInt(hh[1], 10);
	    }
	  }, {
	    key: 'toText',
	    value: function toText(m) {
	      var minutes = m % 60;
	      var hours = Math.floor(m / 60);

	      minutes = (minutes < 10 ? '0' : '') + minutes;
	      hours = (hours < 10 ? '0' : '') + hours;

	      return hours + ':' + minutes;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'timePicker', className: 'input-group clockpicker' },
	        _react2.default.createElement('input', { className: 'form-control', type: 'text', readOnly: true }),
	        _react2.default.createElement(
	          'span',
	          { className: 'input-group-addon' },
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-time' })
	        )
	      );
	    }
	  }]);

	  return TimePicker;
	}(_react.Component);

	exports.default = TimePicker;


	TimePicker.props = {
	  defaultValue: _react.PropTypes.object, // in minutes
	  onChange: _react.PropTypes.func
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _Immutable = __webpack_require__(6);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.onNumericFieldChanged = _this.onNumericFieldChanged.bind(_this);
	    _this.onFieldChanged = _this.onFieldChanged.bind(_this);

	    _this.state = {
	      isProcessing: false,
	      schedule: (0, _Immutable.fromJS)({}),
	      isBaseHourValid: true
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });

	      this.setState(_extends({}, this.state, {
	        schedule: this.props.schedule
	      }));
	    }
	  }, {
	    key: 'onFieldChanged',
	    value: function onFieldChanged(name, e) {
	      this.setState(_extends({}, this.state, {
	        schedule: this.state.schedule.set(name, e.target.value)
	      }));
	    }
	  }, {
	    key: 'onNumericFieldChanged',
	    value: function onNumericFieldChanged(name, e) {
	      var value = e.target.value;

	      if (value == undefined || value == null || value == '') {
	        value = 0;
	      }

	      this.setState(_extends({}, this.state, {
	        schedule: this.state.schedule.set(name, value)
	      }));
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var baseHours = this.state.schedule.get('baseHours');
	      var isBaseHourValid = !dataUtils.isEmpty(baseHours) && baseHours > 0;

	      var hasError = !isBaseHourValid;

	      this.setState(_extends({}, this.state, {
	        isProcessing: !hasError,
	        isBaseHourValid: isBaseHourValid
	      }));

	      if (hasError) {
	        return;
	      }

	      this.props.onSuccess(this.state.schedule, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var baseHoursInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': !this.state.isBaseHourValid
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Base Hours'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: baseHoursInputDivClass },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.schedule.get('baseHours'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'baseHours') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Time Off'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.schedule.get('timeOff'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'timeOff') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Overtime'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.schedule.get('overtime'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'overtime') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Comments'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement('textArea', { className: 'form-control', value: this.state.schedule.get('comment'),
	                        onChange: _.partial(this.onFieldChanged, 'comment') })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  condition: _react.PropTypes.object.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _Immutable = __webpack_require__(6);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.onNumericFieldChanged = _this.onNumericFieldChanged.bind(_this);
	    _this.onFieldChanged = _this.onFieldChanged.bind(_this);

	    _this.state = {
	      isProcessing: false,
	      schedule: (0, _Immutable.fromJS)({}),
	      isBaseHourValid: true
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });

	      this.setState(_extends({}, this.state, {
	        schedule: this.props.schedule
	      }));
	    }
	  }, {
	    key: 'onFieldChanged',
	    value: function onFieldChanged(name, e) {
	      this.setState(_extends({}, this.state, {
	        schedule: this.state.schedule.set(name, e.target.value)
	      }));
	    }
	  }, {
	    key: 'onNumericFieldChanged',
	    value: function onNumericFieldChanged(name, e) {
	      var value = e.target.value;

	      if (value == undefined || value == null || value == '') {
	        value = 0;
	      }

	      this.setState(_extends({}, this.state, {
	        schedule: this.state.schedule.set(name, value)
	      }));
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var baseHours = this.state.schedule.get('baseHours');
	      var isBaseHourValid = !dataUtils.isEmpty(baseHours) && baseHours > 0;

	      var hasError = !isBaseHourValid;

	      this.setState(_extends({}, this.state, {
	        isProcessing: !hasError,
	        isBaseHourValid: isBaseHourValid
	      }));

	      if (hasError) {
	        return;
	      }

	      this.props.onSuccess(this.state.schedule, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var baseHoursInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': !this.state.isBaseHourValid
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Base Hours'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: baseHoursInputDivClass },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.schedule.get('baseHours'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'baseHours') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Down Time'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.schedule.get('downtime'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'downtime') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'Comments'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-8' },
	                      _react2.default.createElement('textArea', { className: 'form-control', value: this.state.schedule.get('comment'),
	                        onChange: _.partial(this.onFieldChanged, 'comment') })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  condition: _react.PropTypes.object.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Immutable = __webpack_require__(6);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);
	    _this.onSubTypeChanged = _this.onSubTypeChanged.bind(_this);

	    _this.state = {
	      isProcessing: false,
	      subRequestType: (0, _Immutable.fromJS)({ id: 0 })
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });

	      this.setState(_extends({}, this.state, {
	        subRequestType: this.props.subRequestType
	      }));
	    }
	  }, {
	    key: 'onSubTypeChanged',
	    value: function onSubTypeChanged(e) {
	      var subRequestTypeVal = parseInt($(this.refs.subRequestType).val());
	      this.setState(_extends({}, this.state, {
	        subRequestType: (0, _Immutable.fromJS)({
	          id: subRequestTypeVal,
	          name: $('option:selected', this.refs.subRequestType).text()
	        })
	      }));
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();
	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var subRequestType = this.state.subRequestType.toJS();

	      if (subRequestType.id == 0) {
	        this.setState(_extends({}, this.state, {
	          isError: true
	        }));

	        return;
	      }

	      this.setState(_extends({}, this.state, {
	        isError: false,
	        isProcessing: true
	      }));

	      this.props.onSuccess(this.state.subRequestType.toJS(), function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var inputDivClass = (0, _classnames2.default)('col-xs-12', {
	        'has-error': this.state.isError
	      });

	      var style = {
	        message: {
	          marginBottom: '15px'
	        }
	      };

	      var value = this.state.subRequestType != undefined ? this.state.subRequestType.get('id') : 0;

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'form',
	              { className: 'form-horizontal' },
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'close', onClick: this.onAbort },
	                  _react2.default.createElement(
	                    'span',
	                    { 'aria-hidden': 'true' },
	                    '\xD7'
	                  )
	                ),
	                _react2.default.createElement(
	                  'h4',
	                  { className: 'modal-title' },
	                  this.props.title
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-body' },
	                _react2.default.createElement(
	                  'p',
	                  { style: style.message },
	                  this.props.message
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: inputDivClass },
	                    _react2.default.createElement(
	                      'select',
	                      { className: 'form-control', ref: 'subRequestType',
	                        onChange: this.onSubTypeChanged,
	                        value: value },
	                      _react2.default.createElement(
	                        'option',
	                        { value: '0' },
	                        'Please select a sub request type'
	                      ),
	                      this.props.subRequestTypes.map(function (item, idx) {
	                        return _react2.default.createElement(
	                          'option',
	                          { value: item.get('id'), key: idx },
	                          item.get('name')
	                        );
	                      })
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'modal-footer' },
	                _react2.default.createElement(
	                  'button',
	                  _extends({ type: 'submit', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                  loadingIndicator,
	                  ' Confirm'
	                ),
	                _react2.default.createElement(
	                  'button',
	                  _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                  'Close'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  subRequestType: _react.PropTypes.object.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _Immutable = __webpack_require__(6);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	    _this.onConfirm = _this.onConfirm.bind(_this);
	    _this.onAbort = _this.onAbort.bind(_this);

	    _this.onNumericFieldChanged = _this.onNumericFieldChanged.bind(_this);
	    _this.onFieldChanged = _this.onFieldChanged.bind(_this);

	    _this.state = {
	      isProcessing: false,
	      subType: (0, _Immutable.fromJS)({}),
	      timeTstValid: true,
	      timeDspValid: true,
	      timeTstPrevValid: true,
	      timeDspPrevValid: true
	    };
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.promise = new $.Deferred();
	      $(this.refs.Modal).modal({
	        show: true
	      });

	      this.setState(_extends({}, this.state, {
	        subType: this.props.subType
	      }));
	    }
	  }, {
	    key: 'onFieldChanged',
	    value: function onFieldChanged(name, e) {
	      this.setState(_extends({}, this.state, {
	        subType: this.state.subType.set(name, e.target.value)
	      }));
	    }
	  }, {
	    key: 'onNumericFieldChanged',
	    value: function onNumericFieldChanged(name, e) {
	      var value = e.target.value;

	      if (value == undefined || value == null || value == '') {
	        value = 0;
	      }

	      this.setState(_extends({}, this.state, {
	        subType: this.state.subType.set(name, value)
	      }));
	    }
	  }, {
	    key: 'onConfirm',
	    value: function onConfirm(e) {
	      var _this2 = this;

	      e.preventDefault();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this2.promise.resolve();
	      });

	      var timeTst = this.state.subType.get('timeTst');
	      var timeDsp = this.state.subType.get('timeDsp');
	      var timeTstPrev = this.state.subType.get('timeTstPrev');
	      var timeDspPrev = this.state.subType.get('timeDsp');

	      var timeTstValid = !dataUtils.isEmpty(timeTst);
	      var timeDspValid = !dataUtils.isEmpty(timeDsp);
	      var timeTstPrevValid = !dataUtils.isEmpty(timeTstPrev);
	      var timeDspPrevValid = !dataUtils.isEmpty(timeDspPrev);

	      var hasError = !timeTstValid || !timeDspValid || !timeTstPrevValid || !timeDspPrevValid;

	      this.setState(_extends({}, this.state, {
	        isProcessing: !hasError,
	        timeTstValid: timeTstValid,
	        timeDspValid: timeDspValid,
	        timeTstPrevValid: timeTstPrevValid,
	        timeDspPrevValid: timeDspPrevValid
	      }));

	      if (hasError) {
	        return;
	      }

	      this.props.onSuccess(this.state.subType, function () {
	        _this2.closeModal();
	      });
	    }
	  }, {
	    key: 'onAbort',
	    value: function onAbort(e) {
	      var _this3 = this;

	      this.closeModal();

	      $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	        return _this3.promise.reject();
	      });
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      $(this.refs.Modal).modal('hide');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actionButtonStyle = {};
	      var loadingIndicator = void 0;

	      if (this.state.isProcessing) {
	        actionButtonStyle.disabled = 'disabled';

	        loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	      }

	      var timeTstInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': !this.state.timeTstValid
	      });

	      var timeDspInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': !this.state.timeDspValid
	      });

	      var timeTstPrevInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': !this.state.timeTstPrevValid
	      });

	      var timeDspPrevInputDivClass = (0, _classnames2.default)('col-xs-8', {
	        'has-error': !this.state.timeDspPrevValid
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-dialog', role: 'document' },
	          _react2.default.createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'close', onClick: this.onAbort },
	                _react2.default.createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '\xD7'
	                )
	              ),
	              _react2.default.createElement(
	                'h4',
	                { className: 'modal-title' },
	                this.props.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2.default.createElement(
	                'form',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'TimeTST'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: timeTstInputDivClass },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.subType.get('timeTst'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'timeTst') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'TimeDSP'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: timeDspInputDivClass },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.subType.get('timeDsp'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'timeDsp') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'TimeTSTprev'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: timeTstPrevInputDivClass },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.subType.get('timeTstPrev'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'timeTstPrev') })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    _react2.default.createElement(
	                      'label',
	                      { className: 'col-xs-4 form-label' },
	                      'TimeDSPprev'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: timeDspPrevInputDivClass },
	                      _react2.default.createElement('input', { type: 'number', step: 'any', className: 'form-control', value: this.state.subType.get('timeDspPrev'),
	                        onChange: _.partial(this.onNumericFieldChanged, 'timeDspPrev') })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                loadingIndicator,
	                ' Confirm'
	              ),
	              _react2.default.createElement(
	                'button',
	                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                'Close'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	  title: _react.PropTypes.string.isRequired,
	  subType: _react.PropTypes.object.isRequired,
	  onSuccess: _react.PropTypes.func.isRequired
	};

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.populateData = populateData;
	exports.insertNewItemAndHandle = insertNewItemAndHandle;
	exports.modifyItemAndHandle = modifyItemAndHandle;

	var _ActionTypes = __webpack_require__(527);

	var _Api = __webpack_require__(29);

	var api = _interopRequireWildcard(_Api);

	var _reactReduxToastr = __webpack_require__(7);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function populateData(list) {
	  return {
	    type: _ActionTypes.POPULATE_DATA,
	    list: list
	  };
	}

	function insertNewItemAndHandle(item, callback) {
	  return function (dispatch) {
	    api.addNewOutlet(item.toJS(), function (data) {
	      data.ok = data.status == 201 ? true : false;
	      data.payload = data.data;
	      if (data.ok) {
	        var newItem = item.set('id', data.payload.id);
	        dispatch(addNewItem(newItem));
	      } else {
	        _reactReduxToastr.toastr.error("Failed to save changes. Please try again.");
	      }

	      callback(data.ok);
	    });
	  };
	}

	function addNewItem(item) {
	  return {
	    type: _ActionTypes.INSERT_ITEM,
	    item: item
	  };
	}

	function modifyItemAndHandle(item, callback) {
	  return function (dispatch) {
	    api.updateOutlet(item.toJS(), function (data) {
	      data.ok = data.status == 204 ? true : false;

	      if (data.ok) {
	        dispatch(modifyItem(item));
	      } else {
	        _reactReduxToastr.toastr.error("Failed to save changes. Please try again.");
	      }

	      callback(data.ok);
	    });
	  };
	}

	function modifyItem(item) {
	  return {
	    type: _ActionTypes.UPDATE_ITEM,
	    item: item
	  };
	}

/***/ }),
/* 527 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var POPULATE_DATA = exports.POPULATE_DATA = 'Outlet/POPULATE_DATA';
	var INSERT_ITEM = exports.INSERT_ITEM = 'Outlet/INSERT_ITEM';
	var UPDATE_ITEM = exports.UPDATE_ITEM = 'Outlet/UPDATE_ITEM';

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _ActionTypes.POPULATE_DATA:
	      {
	        return state.set('list', action.list);
	      }
	    case _ActionTypes.INSERT_ITEM:
	      {
	        var list = state.get('list');
	        return state.set('list', list.push(action.item));
	      }
	    case _ActionTypes.UPDATE_ITEM:
	      {
	        var _list = state.get('list');
	        var itemIdx = _list.findIndex(function (item) {
	          return item.get('id') == action.item.get('id');
	        });

	        var newList = _list.set(itemIdx, action.item);
	        return state.set('list', newList);
	      }
	    default:
	      {
	        return state;
	      }
	  }
	};

	var _ActionTypes = __webpack_require__(527);

	var _Immutable = __webpack_require__(6);

	var initialState = (0, _Immutable.fromJS)({
	  list: []
	});

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(3);

	var _reactRedux = __webpack_require__(4);

	var _Immutable = __webpack_require__(6);

	var _UiUtils = __webpack_require__(57);

	var uiUtils = _interopRequireWildcard(_UiUtils);

	var _Actions = __webpack_require__(526);

	var actions = _interopRequireWildcard(_Actions);

	var _Editor = __webpack_require__(530);

	var _Editor2 = _interopRequireDefault(_Editor);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_React$Component) {
	  _inherits(List, _React$Component);

	  function List() {
	    _classCallCheck(this, List);

	    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

	    _this.onNew = _this.onNew.bind(_this);
	    _this.onModify = _this.onModify.bind(_this);
	    return _this;
	  }

	  _createClass(List, [{
	    key: 'onNew',
	    value: function onNew(e) {
	      var _this2 = this;

	      e.preventDefault();
	      var template = {
	        name: '',
	        active: true
	      };

	      var props = {
	        title: 'New',
	        item: (0, _Immutable.fromJS)(template),
	        onSuccess: function onSuccess(newItem, callback) {
	          _this2.props.insertNewItemAndHandle(newItem, function (isOk) {
	            callback(isOk);
	          });
	        }
	      };

	      uiUtils.showDialog(_react2.default.createElement(_Editor2.default, props));
	    }
	  }, {
	    key: 'onModify',
	    value: function onModify(e, item) {
	      var _this3 = this;

	      e.preventDefault();

	      var props = {
	        title: 'Modify',
	        item: item,
	        onSuccess: function onSuccess(updatedItem, callback) {
	          _this3.props.modifyItemAndHandle(updatedItem, function (isOk) {
	            callback(isOk);
	          });
	        }
	      };

	      uiUtils.showDialog(_react2.default.createElement(_Editor2.default, props));
	    }
	  }, {
	    key: 'renderBooleanFlag',
	    value: function renderBooleanFlag(val) {
	      if (val) {
	        return _react2.default.createElement('i', { className: 'fa fa-check' });
	      }

	      return _react2.default.createElement('i', { className: 'fa fa-times' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var path = [];

	      var style = {
	        activeColumn: {
	          width: '100px'
	        },
	        actionColumn: {
	          width: '100px'
	        },
	        buttonStyle: {
	          marginLeft: '3px'
	        }
	      };

	      var outlet = this.props.outlet;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'table',
	          { className: 'table' },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'th',
	                null,
	                'Name'
	              ),
	              _react2.default.createElement(
	                'th',
	                { style: style.activeColumn },
	                'Active'
	              ),
	              _react2.default.createElement(
	                'th',
	                { style: style.actionColumn },
	                _react2.default.createElement(
	                  'button',
	                  { className: 'btn btn-primary btn-xs', style: style.buttonStyle,
	                    onClick: this.onNew },
	                  _react2.default.createElement('i', { className: 'fa fa-plus' }),
	                  ' Add New'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            this.props.outlet.get('list').sortBy(function (item) {
	              return item.get('name');
	            }).map(function (item, idx) {
	              return _react2.default.createElement(
	                'tr',
	                { key: idx },
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  item.get('name')
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _this4.renderBooleanFlag(item.get('active'))
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-default', style: style.buttonStyle,
	                      onClick: function onClick(e) {
	                        return _this4.onModify(e, item);
	                      } },
	                    _react2.default.createElement('i', { className: 'fa fa-edit' })
	                  )
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return List;
	}(_react2.default.Component);

	function mapStateToProps(_ref) {
	  var outlet = _ref.outlet;

	  return {
	    outlet: outlet
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrapModal = __webpack_require__(59);

	var _reactBootstrapModal2 = _interopRequireDefault(_reactBootstrapModal);

	var _DataUtils = __webpack_require__(122);

	var dataUtils = _interopRequireWildcard(_DataUtils);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Immutable = __webpack_require__(6);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	    _inherits(Modal, _React$Component);

	    function Modal() {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	        _this.onConfirm = _this.onConfirm.bind(_this);
	        _this.onAbort = _this.onAbort.bind(_this);

	        _this.onNameChanged = _this.onNameChanged.bind(_this);
	        _this.onFlagChanged = _this.onFlagChanged.bind(_this);

	        _this.state = {
	            item: (0, _Immutable.fromJS)({}),
	            isProcessing: false,
	            isNameEmpty: false
	        };
	        return _this;
	    }

	    _createClass(Modal, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.promise = new $.Deferred();
	            $(this.refs.Modal).modal({
	                show: true
	            });

	            this.setState(_extends({}, this.state, {
	                item: this.props.item
	            }));
	        }
	    }, {
	        key: 'onNameChanged',
	        value: function onNameChanged(e) {
	            var item = this.state.item;
	            this.setState(_extends({}, this.state, {
	                item: item.set('name', e.target.value)
	            }));
	        }
	    }, {
	        key: 'onFlagChanged',
	        value: function onFlagChanged(name, e) {
	            var item = this.state.item;
	            var checked = $(e.target).is(':checked');

	            this.setState(_extends({}, this.state, {
	                item: item.set(name, checked)
	            }));
	        }
	    }, {
	        key: 'onConfirm',
	        value: function onConfirm(e) {
	            var _this2 = this;

	            e.preventDefault();
	            $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	                return _this2.promise.resolve();
	            });
	            var item = this.state.item;

	            if (dataUtils.isEmpty(item.get('name'))) {
	                this.setState(_extends({}, this.state, {
	                    isNameEmpty: true
	                }));

	                return;
	            }

	            this.setState(_extends({}, this.state, {
	                isProcessing: true
	            }));

	            this.props.onSuccess(item, function (isOk) {
	                _this2.setState(_extends({}, _this2.state, {
	                    isProcessing: false
	                }));

	                if (isOk) {
	                    _this2.closeModal();
	                }
	            });
	        }
	    }, {
	        key: 'onAbort',
	        value: function onAbort(e) {
	            var _this3 = this;

	            this.closeModal();

	            $(this.refs.Modal).on('hidden.bs.modal', function (e) {
	                return _this3.promise.reject();
	            });
	        }
	    }, {
	        key: 'closeModal',
	        value: function closeModal() {
	            $(this.refs.Modal).modal('hide');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var actionButtonStyle = {};
	            var loadingIndicator = void 0;

	            if (this.state.isProcessing) {
	                actionButtonStyle.disabled = 'disabled';

	                loadingIndicator = _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' });
	            }

	            var item = this.state.item;

	            var nameInputDivClass = (0, _classnames2.default)('col-xs-8', {
	                'has-error': this.state.isNameEmpty
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: 'modal fade', role: 'dialog', ref: 'Modal' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'modal-dialog', role: 'document' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-header' },
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'close', onClick: this.onAbort },
	                                _react2.default.createElement(
	                                    'span',
	                                    { 'aria-hidden': 'true' },
	                                    '\xD7'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'h4',
	                                { className: 'modal-title' },
	                                this.props.title
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            _react2.default.createElement(
	                                'form',
	                                { className: 'form-horizontal' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { className: 'col-xs-4 control-label' },
	                                        'Name'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: nameInputDivClass },
	                                        _react2.default.createElement('input', { type: 'text', className: 'form-control',
	                                            onChange: this.onNameChanged,
	                                            value: item.get('name') })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { className: 'col-xs-4 control-label' },
	                                        'Active'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-8' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'checkbox' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                _react2.default.createElement('input', { type: 'checkbox',
	                                                    onChange: _.partial(this.onFlagChanged, 'active'),
	                                                    checked: item.get('active') })
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-footer' },
	                            _react2.default.createElement(
	                                'button',
	                                _extends({ type: 'button', className: 'btn btn-primary' }, actionButtonStyle, { onClick: this.onConfirm }),
	                                loadingIndicator,
	                                ' Confirm'
	                            ),
	                            _react2.default.createElement(
	                                'button',
	                                _extends({ type: 'button', className: 'btn btn-link' }, actionButtonStyle, { onClick: this.onAbort }),
	                                'Close'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Modal;
	}(_react2.default.Component);

	exports.default = Modal;


	Modal.props = {
	    title: _react.PropTypes.string.isRequired,
	    item: _react.PropTypes.object.isRequired,
	    onSuccess: _react.PropTypes.func.isRequired
	};

/***/ })
/******/ ]);