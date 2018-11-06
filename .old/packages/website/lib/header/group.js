"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _get = _interopRequireDefault(require("lodash/get"));

var _item = _interopRequireDefault(require("./item"));

var Backdrop = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return (0, _objectSpread2.default)({
    position: 'absolute',
    left: "-".concat(theme.space3),
    bottom: 0,
    transform: 'translateY(90%)',
    zIndex: 13,
    opacity: 0,
    transition: theme.transition,
    pointerEvents: 'none',
    width: 'auto',
    '> a': {
      marginY: 4
      /* onAfter: {
        left: -theme.space3,
        maxWidth: '33%'
        // transform: 'translateX(0)'
      } */

    },
    paddingX: theme.space3,
    paddingY: theme.space2,
    display: 'flex',
    flexDirection: 'column',
    // overflowX: 'hidden',
    // overflowY: 'auto',
    backgroundColor: theme.inverted ? theme.color : theme.light,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow
  }, (0, _get.default)(theme, 'filou/static/HeaderMenu', {}));
});
var Group = (0, _reactFela.createComponent)(function () {
  return {
    position: 'relative',
    onHover: {
      '> div': {
        transform: 'translateY(100%)',
        pointerEvents: 'initial',
        opacity: 1
      }
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      title = _ref2.title,
      theme = _ref2.theme,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted;
  return _react.default.createElement(_item.default, {
    nolink: true,
    className: className
  }, title, _react.default.createElement(_reactFela.ThemeProvider, {
    theme: (0, _objectSpread2.default)({}, theme, {
      inverted: inverted
    })
  }, _react.default.createElement(Backdrop, null, children)));
}, function (p) {
  return Object.keys(p);
});

var _default = (0, _reactFela.withTheme)(Group);

exports.default = _default;