"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _layout = _interopRequireDefault(require("./layout"));

var _context = require("./context");

var _if = _interopRequireDefault(require("../if"));

var _register = _interopRequireDefault(require("./register"));

var _login = _interopRequireDefault(require("./login"));

var _callback = _interopRequireDefault(require("./callback"));

// import LoginOrg from './login-org';
var Auth = function Auth(_ref) {
  var view = _ref.view,
      location = _ref.location;
  return _react.default.createElement(_context.Consumer, null, function (auth) {
    return auth.isAuthenticated() ? _react.default.createElement(_reactRouter.Redirect, {
      to: "/profile"
    }) : _react.default.createElement(_layout.default, null, _react.default.createElement(_react.Fragment, null, _react.default.createElement(_if.default, {
      condition: location.pathname === '/auth/register'
    }, _react.default.createElement(_register.default, {
      email: location.hash.substr(1)
    })), _react.default.createElement(_if.default, {
      condition: location.pathname === '/auth/callback'
    }, _react.default.createElement(_callback.default, null)), _react.default.createElement(_if.default, {
      condition: !view
    }, _react.default.createElement(_login.default, null))));
  });
};

var _default = (0, _reactRouter.withRouter)(Auth);

exports.default = _default;