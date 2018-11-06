"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@filou/icons");

var _reactFela = require("react-fela");

var _recompose = require("recompose");

var _nav = _interopRequireDefault(require("../nav"));

var Bars = (0, _recompose.withState)('nav', 'setNav', false)((0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'none',
    marginX: 0,
    ifMediumDown: {
      display: 'flex'
    },
    '& svg': {
      fill: theme.inverted ? theme.light : theme.linkColor
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      nav = _ref2.nav,
      setNav = _ref2.setNav,
      theme = _ref2.theme,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactFela.ThemeProvider, {
    theme: {
      inverted: inverted
    }
  }, _react.default.createElement(_nav.default, {
    open: nav,
    onClose: function onClose() {
      return setNav(!nav);
    }
  }, children)), _react.default.createElement("div", {
    className: className,
    onClick: function onClick() {
      return setNav(true);
    }
  }, _react.default.createElement(_icons.FaBars, {
    size: 30
  })));
}, function (p) {
  return Object.keys(p);
}));

var _default = (0, _reactFela.withTheme)(Bars);

exports.default = _default;