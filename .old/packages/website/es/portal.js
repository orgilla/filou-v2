import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Portal, [{
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

      return createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(React.Component);

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};
export default Portal;