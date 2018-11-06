import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { createComponent } from 'react-fela';
import { Container } from '@filou/core';
var OuterContainer = createComponent(function (_ref) {
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
      rest = _objectWithoutProperties(_ref2, ["container", "className", "children"]);

  return React.createElement("div", {
    className: className
  }, container ? React.createElement(Container, rest) : children);
}, ['container']);
var InnerContainer = createComponent(function (_ref3) {
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
      rest = _objectWithoutProperties(_ref4, ["container", "sticky", "height", "nested", "top", "backgroundColor"]);

  return React.createElement(OuterContainer, {
    sticky: sticky,
    height: height,
    top: top,
    nested: nested,
    backgroundColor: backgroundColor
  }, container ? React.createElement(Container, rest) : React.createElement("div", rest));
}, ['container', 'height', 'nested', 'sticky', 'top', 'backgroundColor']);
export default InnerContainer;