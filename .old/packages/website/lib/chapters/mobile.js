"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@filou/icons");

var _reactFela = require("react-fela");

var _recompose = require("recompose");

var _slugify = _interopRequireDefault(require("slugify"));

var _get = _interopRequireDefault(require("lodash/get"));

var _nav = _interopRequireDefault(require("../nav"));

// import Img from 'gatsby-image';
var _default = (0, _recompose.withState)('open', 'setOpen', false)((0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      styles = _ref.styles,
      top = _ref.top;
  return (0, _objectSpread2.default)({}, styles, {
    zIndex: 13,
    top: top,
    overflow: 'hidden',
    height: 0,
    paddingY: 0,
    paddingLeft: 40,
    paddingRight: 10,
    display: 'flex',
    transition: theme.transition,
    backgroundColor: 'rgb(85, 85, 85)',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: styles.position === 'fixed' ? theme.boxShadow : undefined,
    '> h2': (0, _objectSpread2.default)({
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: 'white',
      flex: 1,
      margin: 0
    }, (0, _get.default)(theme, 'filou/static/ChaptersLink', {})),
    ifMediumDown: {
      paddingY: 10,
      height: 'initial'
    }
  });
}, function (_ref2) {
  var headings = _ref2.headings,
      className = _ref2.className,
      open = _ref2.open,
      setOpen = _ref2.setOpen,
      element = _ref2.element;
  return _react.default.createElement("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: className
  }, _react.default.createElement("h2", null, element ? element.innerText : 'Kapitel zeigen'), _react.default.createElement(_icons.FaHashtag, {
    size: 30,
    color: "white"
  }), _react.default.createElement(_nav.default, {
    inverted: true,
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, headings.filter(function (x) {
    return x.value;
  }).map(function (_ref3, i) {
    var value = _ref3.value;
    return _react.default.createElement(_nav.default.Item, {
      key: value + i,
      active: element && value === element.innerText,
      to: "#".concat((0, _slugify.default)(value))
    }, value);
  })));
}, function (p) {
  return Object.keys(p);
}));

exports.default = _default;