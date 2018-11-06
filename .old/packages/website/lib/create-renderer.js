"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _fela = require("@orgilla/fela");

var _default = function _default(typography, options) {
  var renderer = (0, _fela.createRenderer)(options);

  if (typography) {
    renderer.renderStatic(typography.toString());

    if (typeof window !== 'undefined' && typography.options.googleFonts && typography.options.googleFonts.length) {
      var WebFont = require('webfontloader');

      WebFont.load({
        google: {
          families: typography.options.googleFonts.reduce(function (result, item) {
            return (0, _toConsumableArray2.default)(result).concat(["".concat(item.name, ":").concat(item.styles.join(','))]);
          }, [])
        }
      });
    }
  }

  return renderer;
};

exports.default = _default;