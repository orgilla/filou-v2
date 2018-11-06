import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { createComponent } from 'react-fela';
var Thead = createComponent(function (_ref) {
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
var Tbody = createComponent(function () {
  return {};
}, 'tbody', function (p) {
  return Object.keys(p);
});
var Tfoot = createComponent(function (_ref2) {
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
var Tr = createComponent(function (_ref3) {
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
var Td = createComponent(function (_ref4) {
  var theme = _ref4.theme;
  return {
    padding: theme.space2
  };
}, 'td', function (p) {
  return Object.keys(p);
});
var Table = createComponent(function () {
  return {
    width: '100%',
    borderSpacing: 0
  };
}, function (_ref5) {
  var columns = _ref5.columns,
      children = _ref5.children,
      foot = _ref5.foot,
      head = _ref5.head,
      rest = _objectWithoutProperties(_ref5, ["columns", "children", "foot", "head"]);

  return React.createElement("table", rest, columns && React.createElement(Thead, null, React.createElement("tr", null, columns.map(function (column, i) {
    return React.createElement("th", {
      key: i
    }, column);
  }))), React.createElement(Tbody, null, head, children), foot && React.createElement(Tfoot, null, foot));
}, function (p) {
  return Object.keys(p);
});
Table.displayName = 'Table';
Table.Tr = Tr;
Table.Td = Td;
export default Table;