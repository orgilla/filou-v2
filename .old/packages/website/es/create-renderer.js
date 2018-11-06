import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import { createRenderer } from '@orgilla/fela';
export default (function (typography, options) {
  var renderer = createRenderer(options);

  if (typography) {
    renderer.renderStatic(typography.toString());

    if (typeof window !== 'undefined' && typography.options.googleFonts && typography.options.googleFonts.length) {
      var WebFont = require('webfontloader');

      WebFont.load({
        google: {
          families: typography.options.googleFonts.reduce(function (result, item) {
            return _toConsumableArray(result).concat(["".concat(item.name, ":").concat(item.styles.join(','))]);
          }, [])
        }
      });
    }
  }

  return renderer;
});