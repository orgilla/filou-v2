import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import { createComponent, ThemeProvider, withTheme } from 'react-fela';
import get from 'lodash/get';
import { Container } from '@filou/core';
import Item from './item';
var Backdrop = createComponent(function (_ref) {
  var theme = _ref.theme,
      height = _ref.height;
  return _objectSpread({
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
  }, get(theme, 'filou/static/HeaderMenu', {}));
});
var Group = createComponent(function () {
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
  return React.createElement(Item, {
    nolink: true,
    className: className
  }, title, React.createElement(ThemeProvider, {
    theme: _objectSpread({}, theme, {
      inverted: inverted
    })
  }, React.createElement(Backdrop, {
    height: height
  }, React.createElement(Container, null, children))));
}, function (p) {
  return Object.keys(p);
});
export default withTheme(Group);