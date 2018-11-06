"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _context2 = require("./context");

var AuthCallback =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AuthCallback, _Component);

  function AuthCallback(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AuthCallback);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthCallback).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "componentDidMount",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var token, _this$props, auth, history;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = _this.state.token;
              _this$props = _this.props, auth = _this$props.auth, history = _this$props.history;

              if (token) {
                console.log('MOUNT');
                auth.handleToken(token).then(function (x) {
                  console.log('redirect', x);
                  history.push('/profile');
                }).catch(function (err) {
                  return _this.setState({
                    err: err
                  });
                });
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
    _this.state = {
      token: props.location.hash.substr(1)
    };
    return _this;
  }

  (0, _createClass2.default)(AuthCallback, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          token = _this$state.token,
          type = _this$state.type,
          err = _this$state.err;
      var history = this.props.history;

      if (err) {
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Typography.default, {
          variant: "headline"
        }, "Fehler"), _react.default.createElement(_Typography.default, null, "Der Link ist ung\xFCltig oder abgelaufen. Versuchen Sie es nochmal."), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_Grid.default, {
          container: true,
          spacing: 24
        }, _react.default.createElement(_Grid.default, {
          item: true,
          xs: 12
        }, _react.default.createElement(_Button.default, {
          variant: "contained",
          onClick: function onClick() {
            return history.push('/auth');
          }
        }, "Zur\xFCck"))));
      }

      if (token) {
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, _react.default.createElement(_CircularProgress.default, {
          size: 24
        }), " Bitte kurz warten ..."), _react.default.createElement(_Grid.default, {
          container: true,
          spacing: 24
        }, _react.default.createElement(_Grid.default, {
          item: true,
          xs: 12
        }, _react.default.createElement(_Button.default, {
          variant: "contained",
          onClick: function onClick() {
            return history.push('/auth');
          }
        }, "Zur\xFCck"))));
      }

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Typography.default, {
        variant: "headline"
      }, "Erfolg, bitte pr\xFCfen Sie ihre Mails"), _react.default.createElement(_Typography.default, null, "Sie erhalten eine Mail mit einem Link. Wenn Sie dem Link folgen, sind Sie sofort mit Ihrem Profil angemeldet und k\xF6nnen Diego.ONE im Browser nutzen."), _react.default.createElement("br", null), _react.default.createElement(_Typography.default, null, "Diese Art der Anmeldung im Browser sch\xFCtzt Sie und Ihre Anmeldedaten, besonders wenn Sie an \xF6ffentlichen PCs arbeiten."), _react.default.createElement("br", null), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        onClick: function onClick() {
          return history.push('/auth');
        }
      }, "Zur\xFCck"))));
    }
  }]);
  return AuthCallback;
}(_react.Component);

var _default = (0, _reactRouter.withRouter)(function (p) {
  return _react.default.createElement(_context2.Consumer, null, function (auth) {
    return _react.default.createElement(AuthCallback, (0, _extends2.default)({
      auth: auth
    }, p));
  });
});

exports.default = _default;