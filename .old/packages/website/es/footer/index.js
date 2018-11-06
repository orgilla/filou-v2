import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import { createComponent } from 'react-fela';
import Grid from '@filou/grid';
import { Container } from '@filou/core';
import get from 'lodash/get';
var Footer = createComponent(function (_ref) {
  var theme = _ref.theme,
      backgroundColor = _ref.backgroundColor;
  return _objectSpread({
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
  }, get(theme, 'filou/static/FooterContainer', {}));
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return React.createElement("div", {
    className: className
  }, React.createElement(Container, null, React.createElement(Grid, {
    size: 12,
    marginX: false
  }, children)));
}, function (p) {
  return Object.keys(p);
});

Footer.Column = function (props) {
  return React.createElement(Grid.Item, _extends({
    medium: 4,
    padding: 10
  }, props), props.title && React.createElement("h3", null, props.title), props.children);
};

export default Footer;
export var Column = Footer.Column;