"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _header = _interopRequireDefault(require("./header"));

var Info = (0, _reactFela.createComponent)(function () {
  return {
    zIndex: 11,
    height: '100%'
  };
}, function (props) {
  return _react.default.createElement(_header.default, props);
}, function (p) {
  return Object.keys(p);
});
var _default = Info;
exports.default = _default;