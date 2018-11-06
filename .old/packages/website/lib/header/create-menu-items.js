"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var createMenuItems = function createMenuItems(Group, Item) {
  var menu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var MenuItem = function MenuItem(_ref) {
    var slug = _ref.slug,
        title = _ref.title,
        children = _ref.children,
        hide = _ref.hide,
        rest = (0, _objectWithoutProperties2.default)(_ref, ["slug", "title", "children", "hide"]);

    if (hide) {
      return null;
    }

    var childs = children && children.filter(function (x) {
      return x.hide !== true;
    }).map(function (item, i) {
      return _react.default.createElement(MenuItem, (0, _extends2.default)({}, props, item, {
        key: item.slug || item.title || i
      }));
    });
    return childs && childs.length ? _react.default.createElement(Group, (0, _extends2.default)({}, props, rest, {
      title: slug ? _react.default.createElement(Item, {
        to: slug
      }, title) : _react.default.createElement(Item, null, title)
    }), childs) : _react.default.createElement(Item, (0, _extends2.default)({}, props, rest, {
      to: slug
    }), title);
  };

  return menu.map(function (item, i) {
    return _react.default.createElement(MenuItem, (0, _extends2.default)({}, props, item, {
      key: item.slug || item.title || i
    }));
  });
};

var _default = createMenuItems;
exports.default = _default;