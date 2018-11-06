"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _nav = _interopRequireDefault(require("../nav"));

var _mobileBars = _interopRequireDefault(require("./mobile-bars"));

var _container = _interopRequireDefault(require("./container"));

var _createMenuItems = _interopRequireDefault(require("./create-menu-items"));

var _spacer = _interopRequireDefault(require("./spacer"));

var _logo = _interopRequireDefault(require("./logo"));

var _group = _interopRequireDefault(require("./group"));

var _mega = _interopRequireDefault(require("./mega"));

var _item = _interopRequireDefault(require("./item"));

var HeaderGroup = function HeaderGroup(_ref) {
  var mega = _ref.mega,
      props = (0, _objectWithoutProperties2.default)(_ref, ["mega"]);
  return mega ? _react.default.createElement(_mega.default, props) : _react.default.createElement(_group.default, props);
};

var H3 = (0, _reactFela.createComponent)(function () {
  return {
    marginY: 0
  };
}, 'h3', function (p) {
  return Object.keys(p);
});

var Header = function Header(_ref2) {
  var theme = _ref2.theme,
      sticky = _ref2.sticky,
      height = _ref2.height,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted,
      backgroundColor = _ref2.backgroundColor,
      _ref2$subMenuInverted = _ref2.subMenuInverted,
      subMenuInverted = _ref2$subMenuInverted === void 0 ? inverted : _ref2$subMenuInverted,
      _ref2$mobileNavInvert = _ref2.mobileNavInverted,
      mobileNavInverted = _ref2$mobileNavInvert === void 0 ? inverted : _ref2$mobileNavInvert,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? theme.fontSize : _ref2$fontSize,
      _ref2$fontStyle = _ref2.fontStyle,
      fontStyle = _ref2$fontStyle === void 0 ? theme.fontStyle : _ref2$fontStyle,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === void 0 ? theme.fontWeight : _ref2$fontWeight,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? theme.color : _ref2$color,
      _ref2$container = _ref2.container,
      container = _ref2$container === void 0 ? false : _ref2$container,
      className = _ref2.className,
      logo = _ref2.logo,
      children = _ref2.children,
      logoText = _ref2.logoText,
      sitemap = _ref2.sitemap;
  return _react.default.createElement(_reactFela.ThemeProvider, {
    theme: {
      inverted: inverted,
      fontSize: theme[fontSize] || fontSize || theme.fontSize,
      fontStyle: theme[fontStyle] || fontStyle || theme.fontStyle,
      fontWeight: theme[fontWeight] || fontWeight || theme.fontWeight,
      linkColor: theme[color] || color || theme.color
    }
  }, _react.default.createElement(_container.default, {
    backgroundColor: backgroundColor,
    sticky: sticky,
    top: 0,
    container: container,
    className: className,
    height: height
  }, logo && _react.default.createElement(_logo.default, {
    to: "/",
    sticky: sticky,
    logo: logo,
    logoText: logoText
  }), logoText && _react.default.createElement(_item.default, {
    to: "/"
  }, _react.default.createElement(H3, null, logoText)), sitemap && _react.default.createElement(_spacer.default, null), sitemap && _react.default.createElement(_mobileBars.default, {
    inverted: mobileNavInverted
  }, (0, _createMenuItems.default)(_nav.default.Group, _nav.default.Item, sitemap)), sitemap && _react.default.createElement(_container.default, {
    nested: true
  }, (0, _createMenuItems.default)(HeaderGroup, _item.default, sitemap, {
    inverted: subMenuInverted,
    height: height
  })), children));
};

var _default = (0, _reactFela.withTheme)(Header);

exports.default = _default;