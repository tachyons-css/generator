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

var _css = require('/Users/johno/code/tachyons-generator/app/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      var statusCode = this.props.statusCode;

      var title = statusCode === 404 ? 'This page could not be found' : 'Internal Server Error';

      return _react2.default.createElement('div', { className: (0, _css.merge)(styles.error, styles['error_' + statusCode]) }, _react2.default.createElement('div', { className: styles.text }, _react2.default.createElement('h1', { className: styles.h1 }, statusCode), _react2.default.createElement('div', { className: styles.desc }, _react2.default.createElement('h2', { className: styles.h2 }, title, '.'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr.status;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;

var styles = {
  error: (0, _css2.default)({
    color: '#000',
    background: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    textAlign: 'center',
    paddingTop: '20%'
  }),

  desc: (0, _css2.default)({
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  }),

  h1: (0, _css2.default)({
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  }),

  h2: (0, _css2.default)({
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0,
    padding: 0
  })
};
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/_error"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/_error") {
            next.router.update(r, Component)
          }
        }
      }
    }
  