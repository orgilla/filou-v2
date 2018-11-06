"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactStatic = require("react-static");

var _link = require("./link");

var _history = require("./history");

var ReactStaticLink = function ReactStaticLink(_ref) {
  var className = _ref.className,
      to = _ref.to,
      children = _ref.children,
      onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "to", "children", "onClick"]);
  return _react.default.createElement(_reactStatic.Link, {
    to: to,
    className: className
  }, children);
};

var ReactStaticHistory = function ReactStaticHistory(props) {
  return _react.default.createElement(_reactStatic.Route, null, function (_ref2) {
    var location = _ref2.location;
    return props.children(location);
  });
};

var _default = function _default(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement(_history.Provider, {
    value: ReactStaticHistory
  }, _react.default.createElement(_link.Provider, {
    value: ReactStaticLink
  }, children));
};

exports.default = _default;