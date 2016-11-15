'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/johno/code/tachyons-generator/app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/johno/code/tachyons-generator/app/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement(
      'title',
      null,
      'Tachyons Generator'
    ),
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' })
  );
};