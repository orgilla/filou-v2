"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(src) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (src.indexOf('res.cloudinary.com') !== -1) {
    return src.split('image/upload/').join("image/upload/".concat(params || 'c_fill,f_auto,q_auto:eco,fl_lossy,g_auto', "/"));
  } else if (src.indexOf('http') !== 0 && src.indexOf('//') !== 0 && process.env.URL) {
    src = "".concat(process.env.URL).concat(src);
  } else if (src.indexOf('http') !== 0 && src.indexOf('//') !== 0) {
    return src;
  }

  return "https://res.cloudinary.com/x23/image/fetch/".concat(params || 'c_fill,f_auto,q_auto:eco,fl_lossy,g_auto', "/").concat(src);
};

exports.default = _default;