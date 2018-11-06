"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _iubenda = require("../iubenda");

var About = function About(_ref) {
  var children = _ref.children,
      title = _ref.title,
      iubendaPolicyId = _ref.iubendaPolicyId;
  return _react.default.createElement(_react.Fragment, null, title && _react.default.createElement("h3", null, title), _react.default.createElement("p", null, children), _react.default.createElement("h5", null, "Informationen zu Datenschutz und Cookies"), _react.default.createElement(_iubenda.Privacy, {
    iubendaPolicyId: iubendaPolicyId
  }), _react.default.createElement(_iubenda.Cookie, {
    iubendaPolicyId: iubendaPolicyId
  }));
};

var _default = About;
exports.default = _default;