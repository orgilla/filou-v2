"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _reactFela = require("react-fela");

var _get = _interopRequireDefault(require("lodash/get"));

var _ul = require("../ul");

var Content = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return (0, _objectSpread2.default)({
    flex: 1,
    minHeight: 'calc(85vh)',
    marginBottom: 100,
    '& p': {
      textAlign: 'justify',
      hyphens: 'auto'
    },
    '& ul': (0, _ul.getStyle)({
      theme: theme
    })
  }, (0, _get.default)(theme, 'filou/static/Content', {}));
});
var _default = Content;
exports.default = _default;