"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _core = require("@filou/core");

var _format = _interopRequireDefault(require("date-fns/format"));

var _grid = _interopRequireDefault(require("@filou/grid"));

var _button = _interopRequireDefault(require("../button"));

var _getImg = _interopRequireDefault(require("../get-img"));

var _link = _interopRequireDefault(require("../link"));

var Panel = (0, _reactFela.createComponent)(function (_ref) {
  var image = _ref.image,
      theme = _ref.theme;
  return {
    padding: '0 16px 24px 16px',
    '> a': {
      '> div': image ? {
        height: 150,
        backgroundColor: 'lightgray',
        width: '100%',
        backgroundImage: "url(".concat((0, _getImg.default)(image), ")"),
        backgroundSize: 'cover'
      } : null,
      display: 'block',
      backgroundColor: '#FFFFFF',
      borderRadius: theme.borderRadius,
      overflow: 'hidden',
      height: '100%',
      boxShadow: theme.boxShadow,
      textDecoration: 'none',
      '> h3': {
        paddingX: !theme.boxShadow ? undefined : theme.space2,
        minHeight: 60,
        marginBottom: 0,
        marginTop: 0,
        paddingBottom: 0
      },
      '> p': {
        paddingX: !theme.boxShadow ? undefined : theme.space2,
        marginBottom: theme.space2,
        textDecoration: 'none'
      },
      '> span': {
        paddingX: !theme.boxShadow ? undefined : theme.space2,
        paddingY: theme.space2,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        '> b': {
          flex: 1
        }
      }
    }
  };
}, function (_ref2) {
  var title = _ref2.title,
      image = _ref2.image,
      text = _ref2.text,
      date = _ref2.date,
      className = _ref2.className,
      type = _ref2.type,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["title", "image", "text", "date", "className", "type"]);
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement(_link.default, null, function (Link) {
    return _react.default.createElement(Link, rest, _react.default.createElement("div", null), _react.default.createElement("span", null, date && _react.default.createElement("span", null, (0, _format.default)(date, 'DD.MM.YYYY HH:mm')), _react.default.createElement("b", null), type && _react.default.createElement(_button.default, null, type)), _react.default.createElement("h3", null, title), _react.default.createElement("p", null, text));
  }));
}, function (p) {
  return Object.keys(p);
});

var GridPanels = function GridPanels(_ref3) {
  var items = _ref3.items;
  return _react.default.createElement(_core.Container, null, _react.default.createElement(_grid.default, {
    size: 4,
    marginX: -27
  }, items.map(function (item, i) {
    return _react.default.createElement(_grid.default.Item, {
      small: 1,
      key: item.to || item.id || i
    }, _react.default.createElement(Panel, item));
  })));
};

var _default = GridPanels;
exports.default = _default;