import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';

var createMenuItems = function createMenuItems(Group, Item) {
  var menu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var MenuItem = function MenuItem(_ref) {
    var slug = _ref.slug,
        title = _ref.title,
        children = _ref.children,
        hide = _ref.hide,
        rest = _objectWithoutProperties(_ref, ["slug", "title", "children", "hide"]);

    if (hide) {
      return null;
    }

    var childs = children && children.filter(function (x) {
      return x.hide !== true;
    }).map(function (item, i) {
      return React.createElement(MenuItem, _extends({}, props, item, {
        key: item.slug || item.title || i
      }));
    });
    return childs && childs.length ? React.createElement(Group, _extends({}, props, rest, {
      title: slug ? React.createElement(Item, {
        to: slug
      }, title) : React.createElement(Item, null, title)
    }), childs) : React.createElement(Item, _extends({}, props, rest, {
      to: slug
    }), title);
  };

  return menu.map(function (item, i) {
    return React.createElement(MenuItem, _extends({}, props, item, {
      key: item.slug || item.title || i
    }));
  });
};

export default createMenuItems;