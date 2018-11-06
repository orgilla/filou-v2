import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import { createComponent } from 'react-fela';
import get from 'lodash/get';
import HistoryConsumer from '../history';
import LinkConsumer from '../link';

var func = function func() {
  return {};
};

var Item = createComponent(function (_ref) {
  var theme = _ref.theme,
      flex = _ref.flex,
      nolink = _ref.nolink,
      active = _ref.active,
      hideIfSmall = _ref.hideIfSmall,
      hideIfMini = _ref.hideIfMini,
      hideIfMedium = _ref.hideIfMedium,
      color = _ref.color;
  return _objectSpread({
    fontSize: theme.fontSize,
    cursor: 'pointer',
    fontStyle: theme.fontStyle,
    fontWeight: theme.fontWeight,
    color: color === true ? theme.color : color ? theme[color] : theme.inverted ? theme.light : theme.linkColor,
    textDecoration: 'none',
    transition: theme.transition,
    position: 'relative',
    extend: [{
      condition: !nolink,
      style: {
        overflow: 'hidden'
      }
    }, {
      condition: hideIfMini,
      style: {
        ifMini: {
          display: 'none'
        }
      }
    }, {
      condition: hideIfMedium,
      style: {
        ifMediumDown: {
          display: 'none'
        }
      }
    }, {
      condition: hideIfSmall,
      style: {
        ifSmallDown: {
          display: 'none'
        }
      }
    }, {
      condition: active,
      style: theme.activeStyle || _objectSpread({}, get(theme, 'linkAnimation.active', func)(theme))
    }],
    minWidth: 0,
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
    height: '100%',
    display: flex !== false ? 'flex' : undefined,
    alignItems: 'center',
    onHover: !nolink && _objectSpread({
      textDecoration: 'none',
      color: theme.inverted ? theme.light : theme.linkColor,
      opacity: 0.6
    }, get(theme, 'linkAnimation.hover', func)(theme))
  }, get(theme, 'linkAnimation.default', func)(theme));
}, function (_ref2) {
  var children = _ref2.children,
      onClick = _ref2.onClick,
      to = _ref2.to,
      className = _ref2.className,
      nolink = _ref2.nolink;
  return to ? React.createElement(LinkConsumer, null, function (Link) {
    return React.createElement(Link, {
      to: to,
      onClick: onClick,
      className: className
    }, children);
  }) : React.createElement("span", {
    className: className,
    onClick: onClick
  }, children);
}, function (p) {
  return Object.keys(p);
});

var ActiveItem = function ActiveItem(_ref3) {
  var to = _ref3.to,
      exact = _ref3.exact,
      rest = _objectWithoutProperties(_ref3, ["to", "exact"]);

  return to ? React.createElement(HistoryConsumer, null, function (History) {
    return React.createElement(History, _extends({
      to: to,
      exact: exact
    }, rest), function (_ref4) {
      var pathname = _ref4.pathname;
      return React.createElement(Item, _extends({
        to: to,
        active: pathname === to
      }, rest));
    });
  }) : React.createElement(Item, rest);
};

export default ActiveItem;