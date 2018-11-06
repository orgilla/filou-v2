"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function get() {
    return _route.default;
  }
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});
Object.defineProperty(exports, "Consumer", {
  enumerable: true,
  get: function get() {
    return _context.Consumer;
  }
});

var _route = _interopRequireDefault(require("./route"));

var _context = _interopRequireWildcard(require("./context"));