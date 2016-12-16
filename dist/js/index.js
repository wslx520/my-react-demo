webpackJsonp([1,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(191);


/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _app = __webpack_require__(192);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(188); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _TabSelector = __webpack_require__(193);

	var _TabSelector2 = _interopRequireDefault(_TabSelector);

	var _react = __webpack_require__(82);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(98);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(194);

	var data = [{ name: 'Red', value: 'red' }, { name: 'Blue', value: 'blue' }, { name: 'Yellow', value: 'yellow' }, { name: 'Green', value: 'green' }, { name: 'White', value: 'White' }];

	var node = document.createElement('div');
	document.body.appendChild(node);

	// wrap to a factory
	// TabSelector = React.createFactory(TabSelector);
	// then you can do this
	// ReactDom.render(
	//   TabSelector({label: 'Color', data: data, selected: 1}), node
	// );

	// if not , you must do like this:

	_reactDom2.default.render(_react2.default.createElement(_TabSelector2.default, { label: 'color', data: data, selected: 'blue' }), node);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(188); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(82);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TabSelector = function (_React$Component) {
	  _inherits(TabSelector, _React$Component);

	  function TabSelector(props) {
	    _classCallCheck(this, TabSelector);

	    var _this = _possibleConstructorReturn(this, (TabSelector.__proto__ || Object.getPrototypeOf(TabSelector)).call(this, props));

	    _this.state = { selected: _this.props.selected };
	    _this.handleOnClick = _this.handleOnClick.bind(_this);
	    return _this;
	  }

	  _createClass(TabSelector, [{
	    key: 'handleOnClick',
	    value: function handleOnClick(evt) {
	      this.setState({ 'selected': evt.target.getAttribute('data-value') });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tabs = this.props.data.map(function (item, i) {
	        var selected = item.value == this.state.selected ? 'selected' : '';
	        return _react2.default.createElement(
	          'li',
	          { key: i, 'data-value': item.value,
	            className: selected,
	            onClick: this.handleOnClick
	          },
	          item.name
	        );
	      }, this);

	      return _react2.default.createElement(
	        'div',
	        { className: 'tab-selector' },
	        _react2.default.createElement(
	          'label',
	          null,
	          this.props.label
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          tabs
	        )
	      );
	    }
	  }]);

	  return TabSelector;
	}(_react2.default.Component);

	;

	exports.default = TabSelector;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(188); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TabSelector.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(187)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(195, function() {
				var newContent = __webpack_require__(195);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(186)();
	// imports


	// module
	exports.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.tab-selector {\r\n  margin: 50px;\r\n}\r\n\r\n.tab-selector {\r\n  overflow: hidden;\r\n}\r\n\r\n.tab-selector label {\r\n  float: left;\r\n  margin-right: 10px;\r\n  padding: 5px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n}\r\n\r\n.tab-selector ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.tab-selector li {\r\n  cursor: pointer;\r\n  float: left;\r\n  padding: 5px 15px;\r\n  border: 1px solid #ddd;\r\n  margin: 0 10px;\r\n  list-style: none;\r\n}\r\n\r\n.tab-selector li.selected {\r\n  border-color: #2175bc;\r\n  background-color: #2175bc;\r\n  color: #fff;\r\n}\r\n", ""]);

	// exports


/***/ }

});