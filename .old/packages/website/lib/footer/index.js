"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _grid = _interopRequireDefault(require("@filou/grid"));

var _core = require("@filou/core");

var _get = _interopRequireDefault(require("lodash/get"));

var Footer = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      backgroundColor = _ref.backgroundColor;
  return (0, _objectSpread2.default)({
    position: 'relative',
    bottom: 0,
    paddingBottom: 10,
    // borderTop: '1px solid lightgray',
    left: 0,
    width: '100%',
    // height: 61,
    // paddingY: 60,
    overflow: 'hidden',
    backgroundColor: backgroundColor && theme[backgroundColor] ? theme[backgroundColor] : backgroundColor || (!theme.inverted ? theme.light : theme.color),
    color: theme.light,
    '& h2': {
      color: theme.light
    },
    '& h3': {
      color: theme.light
    },
    '& h4': {
      color: theme.light
    },
    '& h5': {
      color: theme.light
    },
    '& a': {
      color: theme.light
    },
    '& .o-nav-item-lvl-0': {
      padding: 5,
      paddingX: 12
    },
    '> div': {
      paddingTop: 30,
      '> nav > div > div > div > div > span': {},
      '& a': {
        onHover: {}
      }
    }
  }, (0, _get.default)(theme, 'filou/static/FooterContainer', {}));
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement(_core.Container, null, _react.default.createElement(_grid.default, {
    size: 12,
    marginX: false
  }, children)));
}, function (p) {
  return Object.keys(p);
});

Footer.Column = function (props) {
  return _react.default.createElement(_grid.default.Item, (0, _extends2.default)({
    medium: 4,
    padding: 10
  }, props), props.title && _react.default.createElement("h3", null, props.title), props.children);
};

var _default = Footer;
exports.default = _default;
var Column = Footer.Column;
exports.Column = Column;