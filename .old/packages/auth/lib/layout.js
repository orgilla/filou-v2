"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _logo = _interopRequireDefault(require("../logo2"));

var _container = _interopRequireDefault(require("../container"));

var _banner2 = _interopRequireDefault(require("../banner"));

// import { Divider } from 'antd';
var styles = function styles(theme) {
  return {
    fill: {
      flex: 1
    },
    padding: {
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      justifyContent: 'space-between'
    },
    inline: {
      display: 'inline'
    },
    banner: (0, _defineProperty2.default)({
      fontSize: 100,
      margin: 0
    }, theme.breakpoints.down('md'), {
      fontSize: 64
    }),
    bg: (0, _defineProperty2.default)({
      backgroundColor: theme.palette.primary.main,
      // paddingLeft: 16,
      flex: 1,
      display: 'flex',
      zIndex: 0,
      position: 'relative',
      color: 'white',
      overflow: 'hidden'
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    })
  };
};
/* ({ theme }) => ({
  '& form.ant-form.ant-form-horizontal .ant-row.ant-form-item': {
    marginBottom: 0
  },
  '& .ant-form-item-label': {
    lineHeight: 'initial'
  },
  display: 'flex',
  // alignItems: 'center',
  flex: 1,
  '& .ant-btn': {
    background: `linear-gradient(${theme.dark5}, ${theme.dark4})`,
    border: '1px solid rgba(128, 128, 128, 0.6)',
    boxShadow:
      '0px 1px 0px 0px rgb(255, 255, 255), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75)',
    onActive: {
      background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))',
      boxShadow:
        'rgb(255, 255, 255) 0px 1px 0px 0px, rgba(0, 0, 0, 0.19) 0px 4px 4px 0px inset'
    }
  },
  '> div': {
    backgroundColor: theme.color,
    flex: 1,
    zIndex: 0,
    height: '100%',
    position: 'relative',
    color: 'white',
    overflow: 'hidden',
    onBefore: {
      pointerEvents: 'none',
      content: "' '",
      backgroundImage: `url(medical.jpg)`,
      zIndex: -1,
      position: 'absolute',
      height: '100%',
      width: '100%',
      opacity: 0.6,
      top: 0,
      left: 0,
      overflow: 'hidden',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      transform: 'translateZ(0) scale(1)',
      transition: 'transform 6s ease'
    },
    onHover: {
      onBefore: {
        transform: 'rotate(-2deg) scale(1.05)'
      }
    },
    ifSmallDown: {
      display: 'none'
    }
  },
  '> section': {
    display: 'flex',
    flexDirection: 'column',
    paddingY: 20,
    paddingX: 40,
    marginX: 'auto',
    width: 500,
    '> .logo': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      color: theme.color,
      fontWeight: 'bold'
    },
    '& form': {
      width: '100%'
    },
    '> div': {
      flex: 1
    }
  }
}), */


var LoginContainer = (0, _styles.withStyles)(styles)(function (_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react.default.createElement(_Grid.default, {
    container: true,
    alignItems: "stretch",
    className: classes.fill
  }, _react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    md: 7,
    lg: 9,
    xl: 10,
    className: classes.bg
  }, _react.default.createElement(_banner2.default, null, _react.default.createElement(_container.default, null, _react.default.createElement("h1", null, "Authentifizierung"), "Melden Sie sich mit Ihren Benutzerdaten an oder registrieren Sie sich."))), _react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 6,
    md: 5,
    lg: 3,
    xl: 2,
    className: classes.padding
  }, _react.default.createElement("div", null, children), _react.default.createElement("div", null), _react.default.createElement("div", null, _react.default.createElement("a", {
    href: "javascript:;"
  }, _react.default.createElement(_Typography.default, {
    variant: "body1",
    component: "span",
    className: classes.inline
  }, "Gesch\xE4ftsvereinbarung")), ' | ', _react.default.createElement("a", {
    href: "javascript:;"
  }, _react.default.createElement(_Typography.default, {
    variant: "body1",
    component: "span",
    className: classes.inline
  }, "Datenschutz")), _react.default.createElement(_Typography.default, {
    variant: "caption"
  }, "\xA9 ", new Date().getFullYear(), " Diego ONE"))));
});
var _default = LoginContainer;
exports.default = _default;