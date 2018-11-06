import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import { createComponent, ThemeProvider, withTheme } from 'react-fela';
import get from 'lodash/get';
import Item from './item';
var Backdrop = createComponent(function (_ref) {
  var theme = _ref.theme;
  return _objectSpread({
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
  }, get(theme, 'filou/static/HeaderMenu', {}));
});
var Group = createComponent(function () {
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
  return React.createElement(Item, {
    nolink: true,
    className: className
  }, title, React.createElement(ThemeProvider, {
    theme: _objectSpread({}, theme, {
      inverted: inverted
    })
  }, React.createElement(Backdrop, null, children)));
}, function (p) {
  return Object.keys(p);
});
export default withTheme(Group);