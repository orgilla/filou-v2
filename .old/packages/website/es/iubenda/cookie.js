import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react';
export var IubendaCookie =
/*#__PURE__*/
function (_Component) {
  _inherits(IubendaCookie, _Component);

  function IubendaCookie() {
    _classCallCheck(this, IubendaCookie);

    return _possibleConstructorReturn(this, _getPrototypeOf(IubendaCookie).apply(this, arguments));
  }

  _createClass(IubendaCookie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var d = document;
      var s = d.createElement('script');
      var tag = d.getElementsByTagName('script')[0];
      s.src = 'https://cdn.iubenda.com/iubenda.js';
      tag.parentNode.insertBefore(s, tag);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var iubendaPolicyId = this.props.iubendaPolicyId;
      return React.createElement("a", {
        href: "https://www.iubenda.com/privacy-policy/".concat(iubendaPolicyId, "/cookie-policy"),
        className: "no-brand iubenda-embed",
        title: "Cookies"
      }, "Cookies");
    }
  }]);

  return IubendaCookie;
}(Component);
export default IubendaCookie;