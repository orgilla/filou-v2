import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import { createComponent } from 'react-fela';
import get from 'lodash/get';
import Drawer from '../drawer';
import LinkConsumer from '../link';
var StyledDrawer = createComponent(function () {
  return {
    boxShadow: '-1px 0 28px 0 rgba(0, 0, 0, .15)',
    padding: 20,
    paddingBottom: 0,
    zIndex: 15,
    // backgroundColor: 'white',
    maxWidth: '80%!important'
  };
}, function (p) {
  return React.createElement(Drawer, p);
}, function (p) {
  return Object.keys(p);
});
var Container = createComponent(function () {
  return {
    flex: 1,
    flexDirection: 'column'
  };
}, function (p) {
  return React.createElement("div", p);
}, function (p) {
  return Object.keys(p);
});
var Group = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    padding: 10,
    paddingBottom: 0,
    color: theme.color,
    fontSize: 22,
    lineHeight: '20px',
    position: 'relative',
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    '> a': {
      textDecoration: 'none'
    },
    '> div': {
      zIndex: 13,
      transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
      width: 200,
      '> div': {
        padding: 0,
        paddingBottom: 10,
        paddingX: 10,
        display: 'flex',
        flexDirection: 'column',
        '> a': {
          padding: 0,
          paddingTop: 5,
          fontSize: 18
        }
      }
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      title = _ref2.title;
  return React.createElement("span", {
    className: className
  }, title, React.createElement("div", null, React.createElement("div", null, children)));
}, function (p) {
  return Object.keys(p);
});
var Item = createComponent(function (_ref3) {
  var theme = _ref3.theme,
      active = _ref3.active,
      _ref3$depth = _ref3.depth,
      depth = _ref3$depth === void 0 ? 1 : _ref3$depth;
  return {
    // flex: 1,
    cursor: 'pointer',
    display: 'flex',
    textDecoration: 'none',
    paddingTop: 10,
    paddingLeft: depth * 10,
    paddingRight: 10,
    paddingBottom: 0,
    color: theme.color,
    fontSize: 22,
    lineHeight: '20px',
    position: 'relative',
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    transform: active ? 'scale(1.05)' : undefined,
    '> a': _objectSpread({
      textDecoration: 'none'
    }, get(theme, 'filou/static/NavItemLink', {})),
    onBefore: active && {
      zIndex: 100,
      content: '"■"',
      position: 'absolute',
      marginRight: 10,
      fontWeight: 'bold',
      color: theme.color,
      left: '-0.5em'
    }
  };
}, function (p) {
  return React.createElement(LinkConsumer, null, function (Link) {
    return React.createElement(Link, p);
  });
}, function (p) {
  return Object.keys(p);
});

var Nav = function Nav(_ref4) {
  var open = _ref4.open,
      onClose = _ref4.onClose,
      children = _ref4.children;
  return React.createElement(StyledDrawer, {
    open: open,
    onClose: onClose,
    right: true,
    fixed: true
  }, React.createElement(Container, null, children));
};

Nav.Item = Item;
Nav.Group = Group;
export default Nav;