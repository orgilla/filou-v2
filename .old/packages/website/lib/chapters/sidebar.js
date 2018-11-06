"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _slugify = _interopRequireDefault(require("slugify"));

var _get = _interopRequireDefault(require("lodash/get"));

var _nav = _interopRequireDefault(require("../nav"));

// import Img from 'gatsby-image';
var _default = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      top = _ref.top;
  return {
    zIndex: 9,
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: top,
    animationName: {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    },
    animationDuration: '1.2s',
    animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    width: 200,
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    ifMediumDown: {
      display: 'none',
      transform: 'translateX(200%)'
    },
    '> a': (0, _objectSpread2.default)({
      hyphens: 'auto',
      fontSize: 18,
      justifyContent: 'flex-end',
      textAlign: 'right',
      paddingX: 0,
      textDecoration: 'none'
    }, (0, _get.default)(theme, 'filou/static/ChaptersLink', {}))
  };
}, function (_ref2) {
  var headings = _ref2.headings,
      className = _ref2.className,
      element = _ref2.element;
  return _react.default.createElement("div", {
    className: className
  }, headings.filter(function (x) {
    return x.value;
  }).map(function (_ref3, i) {
    var value = _ref3.value,
        depth = _ref3.depth;
    return _react.default.createElement(_nav.default.Item, {
      key: value + i,
      depth: depth,
      active: element && value === element.innerText,
      to: "#".concat((0, _slugify.default)(value))
    }, value);
  }));
}, function (p) {
  return Object.keys(p);
});

exports.default = _default;