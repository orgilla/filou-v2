import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react'; // import Img from 'gatsby-image';

import { createComponent } from 'react-fela';
import slugify from 'slugify';
import get from 'lodash/get';
import Nav from '../nav';
export default createComponent(function (_ref) {
  var theme = _ref.theme,
      top = _ref.top;
  return {
    zIndex: 9,
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: top,
    animationName: {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    },
    animationDuration: '1.2s',
    animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    width: 200,
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    ifMediumDown: {
      display: 'none',
      transform: 'translateX(200%)'
    },
    '> a': _objectSpread({
      hyphens: 'auto',
      fontSize: 18,
      justifyContent: 'flex-end',
      textAlign: 'right',
      paddingX: 0,
      textDecoration: 'none'
    }, get(theme, 'filou/static/ChaptersLink', {}))
  };
}, function (_ref2) {
  var headings = _ref2.headings,
      className = _ref2.className,
      element = _ref2.element;
  return React.createElement("div", {
    className: className
  }, headings.filter(function (x) {
    return x.value;
  }).map(function (_ref3, i) {
    var value = _ref3.value,
        depth = _ref3.depth;
    return React.createElement(Nav.Item, {
      key: value + i,
      depth: depth,
      active: element && value === element.innerText,
      to: "#".concat(slugify(value))
    }, value);
  }));
}, function (p) {
  return Object.keys(p);
});