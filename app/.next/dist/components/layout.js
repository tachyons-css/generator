'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/johno/code/tachyons-generator/app/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_head2.default, null),
    children
  );
};