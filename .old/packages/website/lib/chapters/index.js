"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _reactSticky = require("react-sticky");

var _sidebar = _interopRequireDefault(require("./sidebar"));

var _mobile = _interopRequireDefault(require("./mobile"));

var deco = (0, _recompose.withPropsOnChange)(['container', 'distanceFromTop', 'top', 'double'], function (_ref) {
  var container = _ref.container,
      distanceFromTop = _ref.distanceFromTop,
      top = _ref.top,
      double = _ref.double;
  return {
    element: container && Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter(function (e) {
      return e.offsetTop + distanceFromTop - e.offsetHeight - (double ? top : 0) < 0;
    }).reverse()[0]
  };
});
var DecoSidebar = deco(_sidebar.default);
var DecoMobile = deco(_mobile.default);

var HeadingsContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeadingsContainer, _Component);

  function HeadingsContainer() {
    (0, _classCallCheck2.default)(this, HeadingsContainer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeadingsContainer).apply(this, arguments));
  }

  (0, _createClass2.default)(HeadingsContainer, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          headings = _this$props.headings,
          children = _this$props.children,
          _this$props$headerHei = _this$props.headerHeight,
          headerHeight = _this$props$headerHei === void 0 ? 56 : _this$props$headerHei;

      if (!headings || headings.length < 2) {
        return _react.default.createElement(_react.Fragment, null, children);
      }

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(DecoSidebar, {
        top: headerHeight,
        double: true,
        container: this.ref,
        headings: headings
      }), children);
      return _react.default.createElement(_reactSticky.StickyContainer, {
        ref: function ref(_ref2) {
          _this.ref = _ref2 && _ref2.node;
        }
      }, _react.default.createElement(_reactSticky.Sticky, {
        topOffset: 0
      }, function (props) {
        return _react.default.createElement(DecoSidebar, {
          top: headerHeight,
          double: true,
          container: _this.ref,
          styles: props.style,
          distanceFromTop: props.distanceFromTop,
          headings: headings
        });
      }), _react.default.createElement(_reactSticky.Sticky, {
        topOffset: -headerHeight
      }, function (props) {
        return _react.default.createElement(DecoMobile, {
          top: headerHeight,
          container: _this.ref,
          styles: props.style,
          distanceFromTop: props.distanceFromTop,
          headings: headings
        });
      }), children);
    }
  }]);
  return HeadingsContainer;
}(_react.Component);

var _default = HeadingsContainer;
exports.default = _default;