"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _item = _interopRequireDefault(require("../header/item"));

var _ul = _interopRequireDefault(require("../ul"));

var MenuItem = function MenuItem(_ref) {
  var slug = _ref.slug,
      title = _ref.title,
      children = _ref.children;

  var inner = _react.default.createElement(_item.default, {
    flex: false,
    to: slug
  }, title);

  var childs = children ? _react.default.createElement(_ul.default, null, children.filter(function (x) {
    return x.slug.indexOf('#') === -1;
  }).map(function (item, i) {
    return _react.default.createElement(MenuItem, (0, _extends2.default)({}, item, {
      key: item.slug || item.title || i
    }));
  })) : null;
  return _react.default.createElement("li", null, inner, childs);
};

var Sitemap = function Sitemap(_ref2) {
  var _ref2$sitemap = _ref2.sitemap,
      sitemap = _ref2$sitemap === void 0 ? [] : _ref2$sitemap,
      className = _ref2.className,
      theme = _ref2.theme,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? theme.fontSize : _ref2$fontSize,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === void 0 ? theme.fontWeight : _ref2$fontWeight,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? theme.dark : _ref2$color;
  return _react.default.createElement(_reactFela.ThemeProvider, {
    theme: {
      inverted: inverted,
      fontSize: theme[fontSize] || fontSize || theme.fontSize,
      fontWeight: theme[fontWeight] || fontWeight || theme.fontWeight,
      linkColor: theme[color] || color || theme.color
    }
  }, _react.default.createElement("div", {
    className: className
  }, _react.default.createElement(_ul.default, null, (sitemap || []).map(function (item, i) {
    return _react.default.createElement(MenuItem, (0, _extends2.default)({}, item, {
      key: item.slug || item.title || i
    }));
  }))));
};

var _default = (0, _reactFela.withTheme)(Sitemap);

exports.default = _default;