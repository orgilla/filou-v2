"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.astToReact = exports.renderers = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _astToReact = _interopRequireDefault(require("react-markdown/lib/ast-to-react"));

var _reactFela = require("react-fela");

var _renderers = _interopRequireDefault(require("react-markdown/lib/renderers"));

var _slugify = _interopRequireDefault(require("slugify"));

var _getImg = _interopRequireDefault(require("../get-img"));

_renderers.default.link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MDLink, _Component);

  function MDLink() {
    (0, _classCallCheck2.default)(this, MDLink);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MDLink).apply(this, arguments));
  }

  (0, _createClass2.default)(MDLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);

      if (children && children.length && children.length === 2 && typeof children[1] === 'string') {
        var text = children[1];
        var Image = renderers.image;
        return _react.default.createElement(Image, {
          src: rest.href,
          text: text
        });
      }

      return _react.default.createElement("a", this.props, children);
    }
  }]);
  return MDLink;
}(_react.Component);
/* renderers.blockquote = class MDCode extends Component {
  render() {
    const { value } = this.props;
    console.log(this.props);
    return <span>Nicht gefunden: {value}</span>;
  }
}; */


_renderers.default.code =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(MDCode, _Component2);

  function MDCode() {
    (0, _classCallCheck2.default)(this, MDCode);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MDCode).apply(this, arguments));
  }

  (0, _createClass2.default)(MDCode, [{
    key: "render",
    value: function render() {
      var value = this.props.value;
      return _react.default.createElement("span", null, "Nicht gefunden: ", value);
    }
  }]);
  return MDCode;
}(_react.Component);

_renderers.default.inlineCode =
/*#__PURE__*/
function (_Component3) {
  (0, _inherits2.default)(MDCode, _Component3);

  function MDCode() {
    (0, _classCallCheck2.default)(this, MDCode);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MDCode).apply(this, arguments));
  }

  (0, _createClass2.default)(MDCode, [{
    key: "render",
    value: function render() {
      var value = this.props.value;

      if (value === 'literatur') {// return <Literatur />;
      }

      return _react.default.createElement("span", null, "Nicht gefunden: ", value);
    }
  }]);
  return MDCode;
}(_react.Component);

_renderers.default.heading =
/*#__PURE__*/
function (_Component4) {
  (0, _inherits2.default)(MDHeading, _Component4);

  function MDHeading(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MDHeading);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MDHeading).call(this, props));

    if (props.children && props.children.length === 1 && typeof props.children[0] === 'string') {
      _this.id = (0, _slugify.default)(props.children[0] || '');
    }

    return _this;
  }

  (0, _createClass2.default)(MDHeading, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          level = _this$props2.level;
      return (0, _react.createElement)("h".concat(level), {
        id: this.id,
        children: children,
        ref: function ref(_ref) {
          return _this2.ref = _ref;
        }
      });
    }
  }]);
  return MDHeading;
}(_react.Component);

var images = [];
_renderers.default.image = (0, _reactFela.createComponent)(function (_ref2) {
  var _ref2$dur = _ref2.dur,
      dur = _ref2$dur === void 0 ? Math.random(8) + 2 : _ref2$dur;
  return {
    ifMediumDown: {
      width: '100%',
      height: 'auto',
      marginY: 10,
      onHover: {
        transform: 'scale(1.05)'
      }
    },
    ifMediumUp: {
      position: 'absolute',
      left: 0,
      transform: 'translateX(-120%)',
      onHover: {
        zIndex: 10,
        transform: 'translateX(-120%) scale(1.05)'
      }
    },
    transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
    cursor: 'pointer',
    animationName: {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    },
    animationDuration: "".concat(dur, "s"),
    animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
  };
},
/*#__PURE__*/
function (_Component5) {
  (0, _inherits2.default)(Image, _Component5);

  function Image(props) {
    var _this3;

    (0, _classCallCheck2.default)(this, Image);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Image).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), "state", {
      open: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), "onClick", function () {
      _this3.lightGallery = node;
    });
    var src = props.src;
    _this3.src = (0, _getImg.default)(src);
    return _this3;
  }

  (0, _createClass2.default)(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      images.push({
        original: this.src,
        thumbnail: this.src
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      images = images.filter(function (x) {
        return x.original !== _this4.src;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var className = this.props.className;
      return _react.default.createElement("img", {
        className: className,
        src: this.src,
        onClick: function onClick() {
          return _this5.setState({
            open: true
          });
        }
      });
    }
  }]);
  return Image;
}(_react.Component), ['src']);

var Markdown = function Markdown(_ref3) {
  var source = _ref3.source;
  return (0, _astToReact.default)(source, {
    renderers: _renderers.default,
    definitions: []
  });
};

var renderers = _renderers.default;
exports.renderers = renderers;
var astToReact = _astToReact.default;
exports.astToReact = astToReact;
var _default = Markdown;
exports.default = _default;