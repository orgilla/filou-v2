import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component, Fragment } from 'react';
import { withPropsOnChange } from 'recompose';
import { StickyContainer, Sticky } from 'react-sticky';
import Sidebar from './sidebar';
import Mobile from './mobile';
var deco = withPropsOnChange(['container', 'distanceFromTop', 'top', 'double'], function (_ref) {
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
var DecoSidebar = deco(Sidebar);
var DecoMobile = deco(Mobile);

var HeadingsContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(HeadingsContainer, _Component);

  function HeadingsContainer() {
    _classCallCheck(this, HeadingsContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeadingsContainer).apply(this, arguments));
  }

  _createClass(HeadingsContainer, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          headings = _this$props.headings,
          children = _this$props.children,
          _this$props$headerHei = _this$props.headerHeight,
          headerHeight = _this$props$headerHei === void 0 ? 56 : _this$props$headerHei;

      if (!headings || headings.length < 2) {
        return React.createElement(Fragment, null, children);
      }

      return React.createElement(Fragment, null, React.createElement(DecoSidebar, {
        top: headerHeight,
        double: true,
        container: this.ref,
        headings: headings
      }), children);
      return React.createElement(StickyContainer, {
        ref: function ref(_ref2) {
          _this.ref = _ref2 && _ref2.node;
        }
      }, React.createElement(Sticky, {
        topOffset: 0
      }, function (props) {
        return React.createElement(DecoSidebar, {
          top: headerHeight,
          double: true,
          container: _this.ref,
          styles: props.style,
          distanceFromTop: props.distanceFromTop,
          headings: headings
        });
      }), React.createElement(Sticky, {
        topOffset: -headerHeight
      }, function (props) {
        return React.createElement(DecoMobile, {
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
}(Component);

export default HeadingsContainer;