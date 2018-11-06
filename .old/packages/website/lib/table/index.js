"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var Thead = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    '> tr': {
      textAlign: 'left',
      '> th': {
        padding: theme.space2,
        borderBottom: "2px solid ".concat(theme.color)
      }
    }
  };
}, 'thead', function (p) {
  return Object.keys(p);
});
var Tbody = (0, _reactFela.createComponent)(function () {
  return {};
}, 'tbody', function (p) {
  return Object.keys(p);
});
var Tfoot = (0, _reactFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    '> tr': {
      textAlign: 'right',
      '> td': {
        fontSize: theme.fontSizeSmall,
        paddingX: theme.space2,
        paddingY: theme.space1,
        borderTop: "1px solid ".concat(theme.color)
      }
    }
  };
}, 'tfoot', function (p) {
  return Object.keys(p);
});
var Tr = (0, _reactFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme,
      active = _ref3.active;
  return {
    cursor: 'pointer',
    backgroundColor: active && theme.dark5,
    onHover: {
      backgroundColor: theme.dark4
    }
  };
}, 'tr', function (p) {
  return Object.keys(p);
});
var Td = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme;
  return {
    padding: theme.space2
  };
}, 'td', function (p) {
  return Object.keys(p);
});
var Table = (0, _reactFela.createComponent)(function () {
  return {
    width: '100%',
    borderSpacing: 0
  };
}, function (_ref5) {
  var columns = _ref5.columns,
      children = _ref5.children,
      foot = _ref5.foot,
      head = _ref5.head,
      rest = (0, _objectWithoutProperties2.default)(_ref5, ["columns", "children", "foot", "head"]);
  return _react.default.createElement("table", rest, columns && _react.default.createElement(Thead, null, _react.default.createElement("tr", null, columns.map(function (column, i) {
    return _react.default.createElement("th", {
      key: i
    }, column);
  }))), _react.default.createElement(Tbody, null, head, children), foot && _react.default.createElement(Tfoot, null, foot));
}, function (p) {
  return Object.keys(p);
});
Table.displayName = 'Table';
Table.Tr = Tr;
Table.Td = Td;
var _default = Table;
exports.default = _default;