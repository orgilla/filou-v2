"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _reactFela = require("react-fela");

var AntiContainer = (0, _reactFela.createComponent)(function () {
  return {
    ifMediumUp: {
      marginX: -200
    },
    ifLargeUp: {
      marginX: -300
    }
  };
}, 'div', function (_ref) {
  var minHeight = _ref.minHeight,
      p = (0, _objectWithoutProperties2.default)(_ref, ["minHeight"]);
  return Object.keys(p);
});
var _default = AntiContainer;
exports.default = _default;