"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _form = _interopRequireDefault(require("../form"));

var ContactForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ContactForm, _Component);

  function ContactForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ContactForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ContactForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      done: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSubmit", function (event) {
      event.preventDefault();

      if (!_this.props.post) {
        console.error('Please define post endpoint');
        return;
      }

      var data = new FormData(event.target);
      var obj = {};
      (0, _toConsumableArray2.default)(data.keys()).filter(function (x) {
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

  (0, _createClass2.default)(ContactForm, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var done = this.state.done;

      if (done) {
        return _react.default.createElement("span", null, "Anfrage wurde abgeschickt.");
      }

      return _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit
      }, _react.default.createElement("p", null, children), _react.default.createElement("fieldset", null, _react.default.createElement("label", {
        htmlFor: "email"
      }, "E-Mail"), _react.default.createElement("input", {
        type: "email",
        name: "email"
      })), _react.default.createElement("fieldset", null, _react.default.createElement("label", {
        htmlFor: "name"
      }, "Name"), _react.default.createElement("input", {
        type: "text",
        name: "name"
      })), _react.default.createElement("fieldset", null, _react.default.createElement("label", {
        htmlFor: "text"
      }, "Text"), _react.default.createElement("textarea", {
        name: "message",
        rows: "4"
      })), _react.default.createElement("button", {
        type: "submit"
      }, "Absenden"));
    }
  }]);
  return ContactForm;
}(_react.Component);

var _default = ContactForm;
exports.default = _default;