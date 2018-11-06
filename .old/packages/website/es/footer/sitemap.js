import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { ThemeProvider, withTheme } from 'react-fela';
import Item from '../header/item';
import Ul from '../ul';

var MenuItem = function MenuItem(_ref) {
  var slug = _ref.slug,
      title = _ref.title,
      children = _ref.children;
  var inner = React.createElement(Item, {
    flex: false,
    to: slug
  }, title);
  var childs = children ? React.createElement(Ul, null, children.filter(function (x) {
    return x.slug.indexOf('#') === -1;
  }).map(function (item, i) {
    return React.createElement(MenuItem, _extends({}, item, {
      key: item.slug || item.title || i
    }));
  })) : null;
  return React.createElement("li", null, inner, childs);
};

var Sitemap = function Sitemap(_ref2) {
  var _ref2$sitemap = _ref2.sitemap,
      sitemap = _ref2$sitemap === void 0 ? [] : _ref2$sitemap,
      className = _ref2.className,
      theme = _ref2.theme,
      _ref2$inverted = _ref2.inverted,
      inverted = _ref2$inverted === void 0 ? theme.inverted : _ref2$inverted,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? theme.fontSize : _ref2$fontSize,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === void 0 ? theme.fontWeight : _ref2$fontWeight,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? theme.dark : _ref2$color;
  return React.createElement(ThemeProvider, {
    theme: {
      inverted: inverted,
      fontSize: theme[fontSize] || fontSize || theme.fontSize,
      fontWeight: theme[fontWeight] || fontWeight || theme.fontWeight,
      linkColor: theme[color] || color || theme.color
    }
  }, React.createElement("div", {
    className: className
  }, React.createElement(Ul, null, (sitemap || []).map(function (item, i) {
    return React.createElement(MenuItem, _extends({}, item, {
      key: item.slug || item.title || i
    }));
  }))));
};

export default withTheme(Sitemap);