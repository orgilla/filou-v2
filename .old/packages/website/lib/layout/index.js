"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _scrollTopRestoration = _interopRequireDefault(require("../scroll-top-restoration"));

var Layout = (0, _reactFela.createComponent)(function () {
  return {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    // overflowX: 'hidden',
    minHeight: '100vh'
  };
}, function (_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: className
  }, children, _react.default.createElement(_scrollTopRestoration.default, null));
});
var _default = Layout;
exports.default = _default;