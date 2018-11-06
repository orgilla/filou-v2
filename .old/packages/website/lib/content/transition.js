"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactTransitionGroup = require("react-transition-group");

var Transition = createComponent(function (_ref) {
  var theme = _ref.theme,
      timeout = _ref.timeout;
  return {
    '&.fade-enter': {
      opacity: 0,
      transition: theme.transition,
      transitionDuration: "".concat(timeout.enter, "ms")
    },
    '&.fade-enter.fade-enter-active': {
      opacity: 0
    },
    '&.fade-exit': {
      opacity: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      transition: theme.transition,
      transitionDuration: "".concat(timeout.exit, "ms")
    },
    '&.fade-exit.fade-exit-active': {
      opacity: 0
    },
    '&.slide-enter.slide-enter-active': {
      zIndex: 10,
      animationName: {
        '0%': {
          transform: 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
      },
      animationDuration: "".concat(timeout.enter, "ms"),
      animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    },
    '&.slide-exit.slide-exit-active': {
      zIndex: 9,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      animationName: {
        '0%': {
          opacity: 1 // transform: 'translateX(0)'

        },
        '100%': {
          opacity: 0 // transform: 'translateX(-100%)'

        }
      },
      animationDuration: "".concat(timeout.exit, "ms"),
      animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    }
  };
}, function (props) {
  return React.createElement(_reactTransitionGroup.CSSTransition, props);
}, function (p) {
  return Object.keys(p);
});

var _default = function _default() {
  return React.createElement(RouteData, null, function (_ref2) {
    var history = _ref2.history;
    return React.createElement(_reactTransitionGroup.TransitionGroup, {
      component: "main",
      style: {
        position: 'relative'
      }
    }, React.createElement(Transition, {
      key: history.location.key,
      timeout: {
        enter: 10000,
        exit: 10000
      },
      classNames: "fade",
      enter: true,
      exit: true
    }, React.createElement(Content, null, children)));
  });
};

exports.default = _default;