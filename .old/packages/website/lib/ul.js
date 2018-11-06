"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getStyle = void 0;

var _reactFela = require("react-fela");

var getStyle = function getStyle(_ref) {
  var theme = _ref.theme;
  return {
    marginBottom: 0,
    marginLeft: 0,
    listStyleType: 'none',
    '> li': {
      position: 'relative',
      // display: 'inline-block',
      paddingLeft: theme.space3,
      '> ul': {
        marginTop: 3
      },
      '> a': {// display: 'inline-block'
      }
    },
    '> li:before': {
      content: '"■"',
      float: 'left',
      fontSize: '50%',
      // display: 'inline-block',
      transform: "translateY(50%) translateX(-".concat(theme.space3, ")"),
      ifMediumDown: {
        transform: "translateX(-".concat(theme.space3, ")")
      },
      // transform: `translateY(-75%) translateX(-${theme.space3})`,
      width: 0,
      color: theme.color
    }
  };
};

exports.getStyle = getStyle;
var List = (0, _reactFela.createComponent)(getStyle, 'ul');
var _default = List;
exports.default = _default;