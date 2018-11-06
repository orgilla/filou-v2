"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Navigation = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactFela = require("react-fela");

var _fela = require("@orgilla/fela");

var _recompose = require("recompose");

var _reactSwipeable = _interopRequireDefault(require("react-swipeable"));

var _reactScrolllock = _interopRequireDefault(require("react-scrolllock"));

var _portal = _interopRequireDefault(require("./portal"));

var Navigation = (0, _reactFela.createComponent)(function (_ref) {
  var collapsed = _ref.collapsed,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 240 : _ref$width,
      right = _ref.right;
  return {
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    flex: 0,
    flexWidth: 72,
    height: '100%',
    position: 'relative',
    '> div': {
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      zIndex: 5,
      position: 'absolute',
      right: right ? 0 : undefined,
      left: right ? undefined : 0,
      height: '100%',
      flexWidth: !collapsed ? width : 72
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      setCollapsed = _ref2.setCollapsed,
      right = _ref2.right;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement(_reactSwipeable.default, {
    onSwipedRight: function onSwipedRight() {
      return right ? setCollapsed(true) : setCollapsed(false);
    },
    onSwipedLeft: function onSwipedLeft() {
      return right ? setCollapsed(false) : setCollapsed(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setCollapsed(true);
    },
    onMouseEnter: function onMouseEnter() {
      return setCollapsed(false);
    }
  }, children));
}, ['setCollapsed', 'right']);
exports.Navigation = Navigation;
var enhance = (0, _recompose.compose)((0, _recompose.withState)('collapsed', 'setCollapsed', true), (0, _fela.withStyle)(function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color,
      palette = _ref3.palette,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? 312 : _ref3$width,
      right = _ref3.right,
      left = _ref3.left,
      open = _ref3.open,
      fixed = _ref3.fixed,
      inverted = _ref3.inverted;
  return {
    zIndex: 15,
    pointerEvents: 'initial',
    position: fixed ? 'fixed' : 'absolute',
    // position: flex ? 'absolute' : 'fixed',
    // top: 'env(safe-area-inset-top)',
    top: 0,
    height: '100%',
    '-webkit-overflow-scrolling': 'touch',
    bottom: 0,
    extend: right !== undefined ? {
      right: right !== true && right || 0,
      justifyContent: 'flex-end',
      transform: open ? null : 'translateX(101%)'
    } : {
      left: left !== true && left || 0,
      transform: open ? null : 'translateX(-101%)'
    },
    width: width,
    maxWidth: '100%',
    overflow: !open ? 'hidden' : 'auto',
    boxShadow: open ? theme.boxShadow : undefined,
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    backgroundColor: (inverted !== undefined ? !inverted : (0, _fela.getColor)(theme, color, palette) || theme.inverted) ? theme.light : theme.dark // display: open ? 'flex' : 'none',

  };
}));
var Drawer = enhance(function (_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      open = _ref4.open,
      onClose = _ref4.onClose,
      _onClick = _ref4.onClick,
      right = _ref4.right,
      menu = _ref4.menu,
      setCollapsed = _ref4.setCollapsed,
      collapsed = _ref4.collapsed,
      width = _ref4.width,
      fixed = _ref4.fixed,
      inverted = _ref4.inverted,
      rest = (0, _objectWithoutProperties2.default)(_ref4, ["className", "children", "open", "onClose", "onClick", "right", "menu", "setCollapsed", "collapsed", "width", "fixed", "inverted"]);
  return _react.default.createElement("aside", (0, _extends2.default)({
    className: className
  }, rest, {
    onClick: function onClick(e) {
      e.stopPropagation();
      if (_onClick) _onClick(e);
    }
  }), children, menu && _react.default.createElement(Navigation, {
    right: right,
    setCollapsed: setCollapsed,
    collapsed: collapsed
  }, (0, _react.cloneElement)(menu, {
    collapsed: collapsed
  })));
});
var Dimmer = (0, _reactFela.createComponent)(function (_ref5) {
  var theme = _ref5.theme,
      open = _ref5.open,
      inverted = _ref5.inverted,
      fixed = _ref5.fixed,
      transparent = _ref5.transparent;
  return {
    top: 0,
    bottom: 0,
    position: fixed ? 'fixed' : 'absolute',
    right: 0,
    left: 0,
    backgroundColor: transparent ? undefined : inverted ? theme.light2 : theme.dark3,
    zIndex: 14,
    display: open ? undefined : 'none',
    opacity: !open ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    pointerEvents: !open ? 'none' : undefined
  };
}, 'div', ['onClick']);

var _default = function _default(_ref6) {
  var _ref6$dim = _ref6.dim,
      dim = _ref6$dim === void 0 ? true : _ref6$dim,
      rootElement = _ref6.rootElement,
      children = _ref6.children,
      className = _ref6.className,
      onClose = _ref6.onClose,
      open = _ref6.open,
      props = (0, _objectWithoutProperties2.default)(_ref6, ["dim", "rootElement", "children", "className", "onClose", "open"]);
  return _react.default.createElement(_react.Fragment, null, dim && open ? _react.default.createElement(_reactScrolllock.default, null) : null, _react.default.createElement(_portal.default, {
    open: true
  }, _react.default.createElement(_react.Fragment, null, _react.default.createElement(Dimmer, (0, _extends2.default)({}, props, {
    open: open,
    transparent: dim === false,
    onClick: onClose
  })), _react.default.createElement(Drawer, (0, _extends2.default)({
    className: className,
    open: open
  }, props), children))));
};

exports.default = _default;