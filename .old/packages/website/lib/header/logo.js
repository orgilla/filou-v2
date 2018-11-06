"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _link = _interopRequireDefault(require("../link"));

var LogoInner = function LogoInner(_ref) {
  var onClick = _ref.onClick,
      to = _ref.to,
      className = _ref.className,
      RawLogo = _ref.logo,
      logoText = _ref.logoText;
  return _react.default.createElement(_link.default, null, function (Link) {
    return _react.default.createElement(Link, {
      to: to,
      onClick: onClick,
      className: className
    }, (0, _typeof2.default)(RawLogo) === 'object' ? RawLogo : _react.default.createElement(RawLogo, {
      key: "logo"
    }));
  });
};

var Logo = (0, _reactFela.createComponent)(function () {
  return {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
    '> svg': {
      // height: '100%',
      width: 'auto'
    },
    // marginLeft: -10,
    // height: 56,
    transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
    textDecoration: 'none' // transform: sticky.isSticky ? 'scale(0.8) translateX(-26px)' : undefined

  };
}, LogoInner, function (p) {
  return Object.keys(p);
});
var _default = Logo;
exports.default = _default;