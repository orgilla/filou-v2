import React, { Fragment } from 'react';
import { FaBars } from '@filou/icons';
import { createComponent, ThemeProvider, withTheme } from 'react-fela';
import { withState } from 'recompose';
import Nav from '../nav';
var Bars = withState('nav', 'setNav', false)(createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'none',
    marginX: 0,
    ifMediumDown: {
      display: 'flex'
    },
    '& svg': {
      fill: theme.inverted ? theme.light : theme.linkColor
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      nav = _ref2.nav,
      setNav = _ref2.setNav,
      theme = _ref2.theme,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted;
  return React.createElement(Fragment, null, React.createElement(ThemeProvider, {
    theme: {
      inverted: inverted
    }
  }, React.createElement(Nav, {
    open: nav,
    onClose: function onClose() {
      return setNav(!nav);
    }
  }, children)), React.createElement("div", {
    className: className,
    onClick: function onClick() {
      return setNav(true);
    }
  }, React.createElement(FaBars, {
    size: 30
  })));
}, function (p) {
  return Object.keys(p);
}));
export default withTheme(Bars);