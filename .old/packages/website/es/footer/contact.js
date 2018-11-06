import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Form from '../form';

var ContactForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ContactForm, _Component);

  function ContactForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContactForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContactForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      done: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      event.preventDefault();

      if (!_this.props.post) {
        console.error('Please define post endpoint');
        return;
      }

      var data = new FormData(event.target);
      var obj = {};

      _toConsumableArray(data.keys()).filter(function (x) {
        return x;
      }).forEach(function (key) {
        obj[key] = data.get(key);
      });

      fetch(_this.props.post, {
        method: 'POST',
        body: JSON.stringify({
          data: obj
        })
      }).then(function () {
        _this.setState({
          done: true
        });
      });
    });

    return _this;
  }

  _createClass(ContactForm, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var done = this.state.done;

      if (done) {
        return React.createElement("span", null, "Anfrage wurde abgeschickt.");
      }

      return React.createElement(Form, {
        onSubmit: this.handleSubmit
      }, React.createElement("p", null, children), React.createElement("fieldset", null, React.createElement("label", {
        htmlFor: "email"
      }, "E-Mail"), React.createElement("input", {
        type: "email",
        name: "email"
      })), React.createElement("fieldset", null, React.createElement("label", {
        htmlFor: "name"
      }, "Name"), React.createElement("input", {
        type: "text",
        name: "name"
      })), React.createElement("fieldset", null, React.createElement("label", {
        htmlFor: "text"
      }, "Text"), React.createElement("textarea", {
        name: "message",
        rows: "4"
      })), React.createElement("button", {
        type: "submit"
      }, "Absenden"));
    }
  }]);

  return ContactForm;
}(Component);

export default ContactForm;