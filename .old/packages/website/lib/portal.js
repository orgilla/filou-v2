"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {});
    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }

      this.defaultNode = null; // TODO: this is a hack for FELA SSR issues

      this.setState({
        mounted: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }

      this.defaultNode = null;
    }
  }, {
    key: "render",
    value: function render() {
      if (!canUseDOM || !this.state.mounted) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return (0, _reactDom.createPortal)(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal;
}(_react.default.Component);

Portal.propTypes = {
  children: _propTypes.default.node.isRequired,
  node: _propTypes.default.any
};
var _default = Portal;
exports.default = _default;