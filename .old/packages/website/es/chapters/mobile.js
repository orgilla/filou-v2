import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react'; // import Img from 'gatsby-image';

import { FaHashtag } from '@filou/icons';
import { createComponent } from 'react-fela';
import { withState } from 'recompose';
import slugify from 'slugify';
import get from 'lodash/get';
import Nav from '../nav';
export default withState('open', 'setOpen', false)(createComponent(function (_ref) {
  var theme = _ref.theme,
      styles = _ref.styles,
      top = _ref.top;
  return _objectSpread({}, styles, {
    zIndex: 13,
    top: top,
    overflow: 'hidden',
    height: 0,
    paddingY: 0,
    paddingLeft: 40,
    paddingRight: 10,
    display: 'flex',
    transition: theme.transition,
    backgroundColor: 'rgb(85, 85, 85)',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: styles.position === 'fixed' ? theme.boxShadow : undefined,
    '> h2': _objectSpread({
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: 'white',
      flex: 1,
      margin: 0
    }, get(theme, 'filou/static/ChaptersLink', {})),
    ifMediumDown: {
      paddingY: 10,
      height: 'initial'
    }
  });
}, function (_ref2) {
  var headings = _ref2.headings,
      className = _ref2.className,
      open = _ref2.open,
      setOpen = _ref2.setOpen,
      element = _ref2.element;
  return React.createElement("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: className
  }, React.createElement("h2", null, element ? element.innerText : 'Kapitel zeigen'), React.createElement(FaHashtag, {
    size: 30,
    color: "white"
  }), React.createElement(Nav, {
    inverted: true,
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, headings.filter(function (x) {
    return x.value;
  }).map(function (_ref3, i) {
    var value = _ref3.value;
    return React.createElement(Nav.Item, {
      key: value + i,
      active: element && value === element.innerText,
      to: "#".concat(slugify(value))
    }, value);
  })));
}, function (p) {
  return Object.keys(p);
}));