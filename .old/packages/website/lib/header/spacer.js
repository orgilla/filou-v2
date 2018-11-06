"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactFela = _interopRequireWildcard(require("react-fela"));

var Spacer = (0, _reactFela.createComponent)(function (_ref) {
  var hideIfSmall = _ref.hideIfSmall;
  return {
    flex: 1,
    extend: [{
      condition: hideIfSmall,
      style: {
        ifSmallDown: {
          display: 'none'
        }
      }
    }]
  };
}, 'div');
var HideIfSmall = (0, _reactFela.createComponent)(function () {
  return {
    flex: 1
  };
}, function () {
  return _reactFela.default.createElement(Spacer, null);
});
Spacer.HideIfSmall = HideIfSmall;
var _default = Spacer;
exports.default = _default;