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

var _core = require("@filou/core");

var _item = _interopRequireDefault(require("./item"));

var Backdrop = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      height = _ref.height;
  return (0, _objectSpread2.default)({
    position: 'fixed',
    top: height,
    left: 0,
    // height: 25,
    transition: "".concat(theme.transition),
    // transitionDelay: '0.2s',
    pointerEvents: 'none',
    // transitionDuration: '0.1s',
    width: '100%',
    // marginY: `-${theme.space2}`,
    backgroundColor: theme.inverted ? theme.color : theme.light,
    zIndex: -1,
    opacity: 0,
    transform: "translateY(-".concat(theme.space3, ")"),
    // pointerEvents: 'none',
    onBefore: {
      zIndex: 0,
      content: '""',
      position: 'absolute',
      top: -20,
      bottom: -30,
      left: 0,
      width: '100%'
    },
    '> div > a': {
      marginLeft: theme.space3
    },
    '> div > span': {
      marginLeft: theme.space3
    },
    '> div': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      display: 'flex'
    }
  }, (0, _get.default)(theme, 'filou/static/HeaderMenu', {}));
});
var Group = (0, _reactFela.createComponent)(function () {
  return {
    position: 'relative',
    onHover: {
      '> div': {
        zIndex: 14,
        transitionDelay: '0s',
        transform: 'translateY(0)',
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
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted,
      height = _ref2.height;
  return _react.default.createElement(_item.default, {
    nolink: true,
    className: className
  }, title, _react.default.createElement(_reactFela.ThemeProvider, {
    theme: (0, _objectSpread2.default)({}, theme, {
      inverted: inverted
    })
  }, _react.default.createElement(Backdrop, {
    height: height
  }, _react.default.createElement(_core.Container, null, children))));
}, function (p) {
  return Object.keys(p);
});

var _default = (0, _reactFela.withTheme)(Group);

exports.default = _default;