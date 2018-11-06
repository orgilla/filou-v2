import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react';
import HistoryConsumer from './history';

var ScrollToTop =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTop).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.pathname !== prevProps.pathname) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollToTop;
}(Component);

export default (function () {
  return React.createElement(HistoryConsumer, null, function (History) {
    return React.createElement(History, null, function (_ref) {
      var pathname = _ref.pathname;
      return React.createElement(ScrollToTop, {
        pathname: pathname
      });
    });
  });
});