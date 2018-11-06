"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _get = _interopRequireDefault(require("lodash/get"));

var _history = _interopRequireDefault(require("../history"));

var _link = _interopRequireDefault(require("../link"));

var func = function func() {
  return {};
};

var Item = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      flex = _ref.flex,
      nolink = _ref.nolink,
      active = _ref.active,
      hideIfSmall = _ref.hideIfSmall,
      hideIfMini = _ref.hideIfMini,
      hideIfMedium = _ref.hideIfMedium,
      color = _ref.color;
  return (0, _objectSpread2.default)({
    fontSize: theme.fontSize,
    cursor: 'pointer',
    fontStyle: theme.fontStyle,
    fontWeight: theme.fontWeight,
    color: color === true ? theme.color : color ? theme[color] : theme.inverted ? theme.light : theme.linkColor,
    textDecoration: 'none',
    transition: theme.transition,
    position: 'relative',
    extend: [{
      condition: !nolink,
      style: {
        overflow: 'hidden'
      }
    }, {
      condition: hideIfMini,
      style: {
        ifMini: {
          display: 'none'
        }
      }
    }, {
      condition: hideIfMedium,
      style: {
        ifMediumDown: {
          display: 'none'
        }
      }
    }, {
      condition: hideIfSmall,
      style: {
        ifSmallDown: {
          display: 'none'
        }
      }
    }, {
      condition: active,
      style: theme.activeStyle || (0, _objectSpread2.default)({}, (0, _get.default)(theme, 'linkAnimation.active', func)(theme))
    }],
    minWidth: 0,
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
    height: '100%',
    display: flex !== false ? 'flex' : undefined,
    alignItems: 'center',
    onHover: !nolink && (0, _objectSpread2.default)({
      textDecoration: 'none',
      color: theme.inverted ? theme.light : theme.linkColor,
      opacity: 0.6
    }, (0, _get.default)(theme, 'linkAnimation.hover', func)(theme))
  }, (0, _get.default)(theme, 'linkAnimation.default', func)(theme));
}, function (_ref2) {
  var children = _ref2.children,
      onClick = _ref2.onClick,
      to = _ref2.to,
      className = _ref2.className,
      nolink = _ref2.nolink;
  return to ? _react.default.createElement(_link.default, null, function (Link) {
    return _react.default.createElement(Link, {
      to: to,
      onClick: onClick,
      className: className
    }, children);
  }) : _react.default.createElement("span", {
    className: className,
    onClick: onClick
  }, children);
}, function (p) {
  return Object.keys(p);
});

var ActiveItem = function ActiveItem(_ref3) {
  var to = _ref3.to,
      exact = _ref3.exact,
      rest = (0, _objectWithoutProperties2.default)(_ref3, ["to", "exact"]);
  return to ? _react.default.createElement(_history.default, null, function (History) {
    return _react.default.createElement(History, (0, _extends2.default)({
      to: to,
      exact: exact
    }, rest), function (_ref4) {
      var pathname = _ref4.pathname;
      return _react.default.createElement(Item, (0, _extends2.default)({
        to: to,
        active: pathname === to
      }, rest));
    });
  }) : _react.default.createElement(Item, rest);
};

var _default = ActiveItem;
exports.default = _default;