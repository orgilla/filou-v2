"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Consumer = exports.logout = exports.verify = exports.handleRegisterToken = exports.handleRefreshToken = exports.handleAccessToken = exports.TOKEN_TYPES = void 0;

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

var _jwtDecode2 = _interopRequireDefault(require("jwt-decode"));

var _axios = _interopRequireDefault(require("axios"));

var TOKEN_TYPES = {
  REGISTER: 0,
  VERIFY: 1,
  VERIFY_MASTER: 2,
  MASTER: 3,
  REFRESH: 4,
  ACCESS: 5
};
exports.TOKEN_TYPES = TOKEN_TYPES;

var handleAccessToken = function handleAccessToken(token) {
  return _axios.default.get("".concat(process.env.API, "/auth/profile"), {
    headers: {
      authorization: token
    }
  }).then(function (_ref) {
    var data = _ref.data;
    localStorage.setItem('access_token', token);
    localStorage.setItem('access_token_expiry', JSON.stringify((0, _jwtDecode2.default)(token).exp * 1000 + new Date().getTime()));
    localStorage.setItem('profile', JSON.stringify(data));
    return data;
  });
};

exports.handleAccessToken = handleAccessToken;

var handleRefreshToken = function handleRefreshToken(token) {
  return _axios.default.get("".concat(process.env.API, "/auth/access-token"), {
    headers: {
      authorization: token
    }
  }).then(function (_ref2) {
    var data = _ref2.data;
    localStorage.setItem('refresh_token', token);
    localStorage.setItem('refresh_token_expiry', JSON.stringify((0, _jwtDecode2.default)(token).exp * 1000 + new Date().getTime()));
    return handleAccessToken(data);
  });
};

exports.handleRefreshToken = handleRefreshToken;

var handleRegisterToken = function handleRegisterToken(token) {
  return _axios.default.get("".concat(process.env.API, "/auth/refresh-token"), {
    headers: {
      authorization: token
    }
  }).then(function (_ref3) {
    var data = _ref3.data;
    return handleRefreshToken(data);
  });
};

exports.handleRegisterToken = handleRegisterToken;

var verify = function verify() {
  var refreshToken = localStorage.getItem('refresh_token');
  var refreshTokenExp = JSON.parse(localStorage.getItem('refresh_token_expiry'));
  var accessToken = localStorage.getItem('access_token');
  var accessTokenExp = JSON.parse(localStorage.getItem('access_token_expiry'));
  var profile = JSON.parse(localStorage.getItem('profile'));

  if (accessToken && accessTokenExp > new Date()) {
    return handleAccessToken(accessToken);
  }

  if (refreshToken && refreshTokenExp > new Date()) {
    return handleRefreshToken(refreshToken);
  }

  return logout();
};

exports.verify = verify;

var logout = function logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('access_token_expiry');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('refresh_token_expiry');
  localStorage.removeItem('profile');
};

exports.logout = logout;
var Context = (0, _react.createContext)();
var Consumer = Context.Consumer;
exports.Consumer = Consumer;

var AuthReact =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AuthReact, _Component);

  function AuthReact(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AuthReact);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthReact).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "auth", {
      isAuthenticated: function isAuthenticated() {
        return false;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleToken",
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(token) {
        var _jwtDecode, t;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _jwtDecode = (0, _jwtDecode2.default)(token), t = _jwtDecode.t;

                if (!(t === TOKEN_TYPES.REGISTER || t === TOKEN_TYPES.VERIFY)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", handleRegisterToken(token));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "login",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return verify();

            case 2:
              _this.setState({});

              _this.history.push('/profile');

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "logout",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return logout();

            case 2:
              _this.setState({});

              _this.history.push('/');

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "isAuthenticated", function () {
      var expiresAt = JSON.parse(localStorage.getItem('access_token_expiry'));
      var profile = localStorage.getItem('profile');

      if (new Date().getTime() < expiresAt && profile) {
        return JSON.parse(profile);
      }

      return null;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "can", function (arg1, arg2) {
      return false;
    });
    _this.history = props.history;
    verify();
    return _this;
  }

  (0, _createClass2.default)(AuthReact, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(Context.Provider, {
        value: this
      }, children);
    }
  }]);
  return AuthReact;
}(_react.Component);

var _default = (0, _reactRouter.withRouter)(AuthReact);

exports.default = _default;