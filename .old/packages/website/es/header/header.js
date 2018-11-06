import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { createComponent, ThemeProvider, withTheme } from 'react-fela';
import Nav from '../nav';
import MobileBars from './mobile-bars';
import Container from './container';
import createMenuItems from './create-menu-items';
import Spacer from './spacer';
import Logo from './logo';
import Group from './group';
import Mega from './mega';
import Item from './item';

var HeaderGroup = function HeaderGroup(_ref) {
  var mega = _ref.mega,
      props = _objectWithoutProperties(_ref, ["mega"]);

  return mega ? React.createElement(Mega, props) : React.createElement(Group, props);
};

var H3 = createComponent(function () {
  return {
    marginY: 0
  };
}, 'h3', function (p) {
  return Object.keys(p);
});

var Header = function Header(_ref2) {
  var theme = _ref2.theme,
      sticky = _ref2.sticky,
      height = _ref2.height,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted,
      backgroundColor = _ref2.backgroundColor,
      _ref2$subMenuInverted = _ref2.subMenuInverted,
      subMenuInverted = _ref2$subMenuInverted === void 0 ? inverted : _ref2$subMenuInverted,
      _ref2$mobileNavInvert = _ref2.mobileNavInverted,
      mobileNavInverted = _ref2$mobileNavInvert === void 0 ? inverted : _ref2$mobileNavInvert,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? theme.fontSize : _ref2$fontSize,
      _ref2$fontStyle = _ref2.fontStyle,
      fontStyle = _ref2$fontStyle === void 0 ? theme.fontStyle : _ref2$fontStyle,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === void 0 ? theme.fontWeight : _ref2$fontWeight,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? theme.color : _ref2$color,
      _ref2$container = _ref2.container,
      container = _ref2$container === void 0 ? false : _ref2$container,
      className = _ref2.className,
      logo = _ref2.logo,
      children = _ref2.children,
      logoText = _ref2.logoText,
      sitemap = _ref2.sitemap;
  return React.createElement(ThemeProvider, {
    theme: {
      inverted: inverted,
      fontSize: theme[fontSize] || fontSize || theme.fontSize,
      fontStyle: theme[fontStyle] || fontStyle || theme.fontStyle,
      fontWeight: theme[fontWeight] || fontWeight || theme.fontWeight,
      linkColor: theme[color] || color || theme.color
    }
  }, React.createElement(Container, {
    backgroundColor: backgroundColor,
    sticky: sticky,
    top: 0,
    container: container,
    className: className,
    height: height
  }, logo && React.createElement(Logo, {
    to: "/",
    sticky: sticky,
    logo: logo,
    logoText: logoText
  }), logoText && React.createElement(Item, {
    to: "/"
  }, React.createElement(H3, null, logoText)), sitemap && React.createElement(Spacer, null), sitemap && React.createElement(MobileBars, {
    inverted: mobileNavInverted
  }, createMenuItems(Nav.Group, Nav.Item, sitemap)), sitemap && React.createElement(Container, {
    nested: true
  }, createMenuItems(HeaderGroup, Item, sitemap, {
    inverted: subMenuInverted,
    height: height
  })), children));
};

export default withTheme(Header);