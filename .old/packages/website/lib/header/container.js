"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _core = require("@filou/core");

var OuterContainer = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      sticky = _ref.sticky,
      height = _ref.height,
      nested = _ref.nested,
      top = _ref.top,
      backgroundColor = _ref.backgroundColor;
  return {
    ifMediumDown: nested && {
      display: 'none'
    },
    top: top,
    // overflowX: 'hidden',
    zIndex: sticky ? 12 : undefined,
    height: height || (nested ? '100%' : undefined),
    position: sticky ? 'sticky' : 'relative',
    width: nested ? undefined : '100%',

    /* boxShadow:
      sticky.isSticky && sticky.distanceFromTop !== 0
        ? theme.boxShadow
        : undefined, */
    // paddingY: sticky.isSticky ? 0 : 10,
    // marginBottom: sticky.isSticky ? 20 : 0,
    transition: theme.transition,
    paddingX: nested ? undefined : theme.space2,
    // marginTop: sticky.isSticky ? 0 : 25,
    left: 0,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: backgroundColor && theme[backgroundColor] ? theme[backgroundColor] : backgroundColor || (nested ? undefined : !theme.inverted ? theme.light : theme.color)
  };
}, function (_ref2) {
  var container = _ref2.container,
      className = _ref2.className,
      children = _ref2.children,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["container", "className", "children"]);
  return _react.default.createElement("div", {
    className: className
  }, container ? _react.default.createElement(_core.Container, rest) : children);
}, ['container']);
var InnerContainer = (0, _reactFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    flex: 1,
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    '> *': {
      marginRight: theme.space3,
      ':last-child': {
        marginRight: 0
      },
      ':first-child': {
        marginLeft: 0
      }
    },
    '> a': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };
}, function (_ref4) {
  var container = _ref4.container,
      sticky = _ref4.sticky,
      height = _ref4.height,
      nested = _ref4.nested,
      top = _ref4.top,
      backgroundColor = _ref4.backgroundColor,
      rest = (0, _objectWithoutProperties2.default)(_ref4, ["container", "sticky", "height", "nested", "top", "backgroundColor"]);
  return _react.default.createElement(OuterContainer, {
    sticky: sticky,
    height: height,
    top: top,
    nested: nested,
    backgroundColor: backgroundColor
  }, container ? _react.default.createElement(_core.Container, rest) : _react.default.createElement("div", rest));
}, ['container', 'height', 'nested', 'sticky', 'top', 'backgroundColor']);
var _default = InnerContainer;
exports.default = _default;