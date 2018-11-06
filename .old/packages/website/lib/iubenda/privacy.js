"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IubendaPrivacy = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var IubendaPrivacy =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(IubendaPrivacy, _Component);

  function IubendaPrivacy() {
    (0, _classCallCheck2.default)(this, IubendaPrivacy);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IubendaPrivacy).apply(this, arguments));
  }

  (0, _createClass2.default)(IubendaPrivacy, [{
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
      return _react.default.createElement("a", {
        href: "https://www.iubenda.com/privacy-policy/".concat(iubendaPolicyId),
        className: "no-brand iubenda-embed ",
        title: "Datenschutz"
      }, "Datenschutz");
    }
  }]);
  return IubendaPrivacy;
}(_react.Component);

exports.IubendaPrivacy = IubendaPrivacy;
var _default = IubendaPrivacy;
exports.default = _default;