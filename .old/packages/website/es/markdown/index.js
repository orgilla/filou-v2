import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component, createElement } from 'react';
import astToReact2 from 'react-markdown/lib/ast-to-react';
import { createComponent } from 'react-fela';
import renderers2 from 'react-markdown/lib/renderers';
import slugify from 'slugify';
import getImg from '../get-img';

renderers2.link =
/*#__PURE__*/
function (_Component) {
  _inherits(MDLink, _Component);

  function MDLink() {
    _classCallCheck(this, MDLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDLink).apply(this, arguments));
  }

  _createClass(MDLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      if (children && children.length && children.length === 2 && typeof children[1] === 'string') {
        var text = children[1];
        var Image = renderers.image;
        return React.createElement(Image, {
          src: rest.href,
          text: text
        });
      }

      return React.createElement("a", this.props, children);
    }
  }]);

  return MDLink;
}(Component);
/* renderers.blockquote = class MDCode extends Component {
  render() {
    const { value } = this.props;
    console.log(this.props);
    return <span>Nicht gefunden: {value}</span>;
  }
}; */


renderers2.code =
/*#__PURE__*/
function (_Component2) {
  _inherits(MDCode, _Component2);

  function MDCode() {
    _classCallCheck(this, MDCode);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCode).apply(this, arguments));
  }

  _createClass(MDCode, [{
    key: "render",
    value: function render() {
      var value = this.props.value;
      return React.createElement("span", null, "Nicht gefunden: ", value);
    }
  }]);

  return MDCode;
}(Component);

renderers2.inlineCode =
/*#__PURE__*/
function (_Component3) {
  _inherits(MDCode, _Component3);

  function MDCode() {
    _classCallCheck(this, MDCode);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCode).apply(this, arguments));
  }

  _createClass(MDCode, [{
    key: "render",
    value: function render() {
      var value = this.props.value;

      if (value === 'literatur') {// return <Literatur />;
      }

      return React.createElement("span", null, "Nicht gefunden: ", value);
    }
  }]);

  return MDCode;
}(Component);

renderers2.heading =
/*#__PURE__*/
function (_Component4) {
  _inherits(MDHeading, _Component4);

  function MDHeading(props) {
    var _this;

    _classCallCheck(this, MDHeading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDHeading).call(this, props));

    if (props.children && props.children.length === 1 && typeof props.children[0] === 'string') {
      _this.id = slugify(props.children[0] || '');
    }

    return _this;
  }

  _createClass(MDHeading, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          level = _this$props2.level;
      return createElement("h".concat(level), {
        id: this.id,
        children: children,
        ref: function ref(_ref) {
          return _this2.ref = _ref;
        }
      });
    }
  }]);

  return MDHeading;
}(Component);

var images = [];
renderers2.image = createComponent(function (_ref2) {
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
  _inherits(Image, _Component5);

  function Image(props) {
    var _this3;

    _classCallCheck(this, Image);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onClick", function () {
      _this3.lightGallery = node;
    });

    var src = props.src;
    _this3.src = getImg(src);
    return _this3;
  }

  _createClass(Image, [{
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
      return React.createElement("img", {
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
}(Component), ['src']);

var Markdown = function Markdown(_ref3) {
  var source = _ref3.source;
  return astToReact2(source, {
    renderers: renderers2,
    definitions: []
  });
};

export var renderers = renderers2;
export var astToReact = astToReact2;
export default Markdown;