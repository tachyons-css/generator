'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = require('/Users/johno/code/tachyons-generator/app/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getPrototypeOf = require('/Users/johno/code/tachyons-generator/app/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/johno/code/tachyons-generator/app/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/johno/code/tachyons-generator/app/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/johno/code/tachyons-generator/app/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _react = require('/Users/johno/code/tachyons-generator/app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _ansiHtml = require('/Users/johno/code/tachyons-generator/app/node_modules/ansi-html/index.js');

var _ansiHtml2 = _interopRequireDefault(_ansiHtml);

var _head = require('/Users/johno/code/tachyons-generator/app/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _css = require('/Users/johno/code/tachyons-generator/app/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorDebug = function (_React$Component) {
  (0, _inherits3.default)(ErrorDebug, _React$Component);

  function ErrorDebug() {
    (0, _classCallCheck3.default)(this, ErrorDebug);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorDebug.__proto__ || (0, _getPrototypeOf2.default)(ErrorDebug)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorDebug, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          path = _props.path;

      return _react2.default.createElement('div', { className: styles.errorDebug }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: '\n          body {\n            background: #a6004c;\n            margin: 0;\n          }\n        ' } })), _react2.default.createElement('div', { className: styles.heading }, 'Error in ', path), _react2.default.createElement('pre', { className: styles.message, dangerouslySetInnerHTML: { __html: (0, _ansiHtml2.default)(encodeHtml(message)) } }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var err = _ref.err;
      var message = err.message,
          module = err.module;

      return { message: message, path: module.rawRequest };
    }
  }]);
  return ErrorDebug;
}(_react2.default.Component);

exports.default = ErrorDebug;

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

var styles = {
  body: (0, _css2.default)({
    background: '#a6004c',
    margin: 0
  }),

  errorDebug: (0, _css2.default)({
    height: '100%',
    padding: '16px',
    boxSizing: 'border-box'
  }),

  message: (0, _css2.default)({
    fontFamily: '"SF Mono", "Roboto Mono", "Fira Mono", menlo-regular, monospace',
    fontSize: '10px',
    color: '#fbe7f1',
    margin: 0
  }),

  heading: (0, _css2.default)({
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#ff84bf',
    marginBottom: '20px'
  })
};

// see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js

_ansiHtml2.default.setColors({
  reset: 'fff',
  darkgrey: 'e54590',
  yellow: 'ee8cbb',
  green: 'f2a2c7',
  magenta: 'fbe7f1',
  blue: 'fff',
  cyan: 'ef8bb9',
  red: 'fff'
});
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/_error-debug"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/_error-debug") {
            next.router.update(r, Component)
          }
        }
      }
    }
  