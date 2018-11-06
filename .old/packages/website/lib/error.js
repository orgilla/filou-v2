"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFela = require("react-fela");

var _default = (0, _reactFela.createComponent)(function () {
  return {
    color: '#9b9b9b',
    position: 'relative',
    height: '100vh',
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
    '& h1': {
      fontSize: 32,
      marginTop: 32
    },
    '& p': {
      textAlign: 'center',
      fontSize: 32,
      marginTop: 32
    },
    '& .boo-wrapper': {
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      paddingY: 64
    },
    '& .shadow': {
      width: 128,
      height: 16,
      backgroundColor: 'rgba(234, 234, 234, 0.75)',
      marginTop: 40,
      marginX: 'auto',
      borderRadius: '50%',
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationName: {
        '0%': {
          transform: 'scale(1)'
        },
        '45%': {
          transform: 'scale(0.85)'
        },
        '55%': {
          transform: 'scale(0.85)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    },
    '& .boo': {
      width: 160,
      height: 184,
      backgroundColor: 'white',
      marginX: 'auto',
      border: '3.3939393939px solid #9b9b9b',
      borderBottom: 0,
      overflow: 'hidden',
      borderRadius: '80px 80px 0 0',
      boxShadow: '-16px 0 0 2px rgba(234, 234, 234, 0.5) inset',
      position: 'relative',
      paddingBottom: 32,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationName: {
        '0%': {
          transform: 'translate3d(0, 0, 0)'
        },
        '45%': {
          transform: 'translate3d(0, -10%, 0)'
        },
        '55%': {
          transform: 'translate3d(0, -10%, 0)'
        },
        '100%': {
          transform: 'translate3d(0, 0, 0)'
        }
      },
      '> .face': {
        width: 24,
        height: 3.2,
        borderRadius: 5,
        backgroundColor: '#9b9b9b',
        position: 'absolute',
        left: '50%',
        bottom: 56,
        transform: 'translateX(-50%)',
        onBefore: {
          left: -24,
          content: '""',
          display: 'block',
          width: 6,
          height: 6,
          backgroundColor: '#9b9b9b',
          borderRadius: '50%',
          position: 'absolute',
          bottom: 40
        },
        onAfter: {
          right: -24,
          content: '""',
          display: 'block',
          width: 6,
          height: 6,
          backgroundColor: '#9b9b9b',
          borderRadius: '50%',
          position: 'absolute',
          bottom: 40
        }
      },
      onAfter: {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: -18.8235294118,
        bottom: -8.3116883117,
        width: 'calc(100% + 32px)',
        height: 32,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '32px 32px',
        backgroundPosition: 'left bottom',
        backgroundImage: 'linear-gradient(-45deg, white 16px, transparent 0), linear-gradient(45deg, white 16px, transparent 0), linear-gradient(-45deg, #9b9b9b 18.8235294118px, transparent 0), linear-gradient(45deg, #9b9b9b 18.8235294118px, transparent 0)'
      }
    }
  };
}, function (_ref) {
  var className = _ref.className;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "boo-wrapper"
  }, _react.default.createElement("div", {
    className: "boo"
  }, _react.default.createElement("div", {
    className: "face"
  })), _react.default.createElement("div", {
    className: "shadow"
  }), _react.default.createElement("h1", null, "404 - Nicht gefunden"), _react.default.createElement("p", null, "Die gesuchte Seite wurde nicht gefunden", _react.default.createElement("br", null), "oder kein Zugriff m\xF6glich.")));
}, function (p) {
  return Object.keys(p);
});

exports.default = _default;