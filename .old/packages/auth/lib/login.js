"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _reactRouter = require("react-router");

var _axios = _interopRequireDefault(require("axios"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var _reactFinalForm = require("react-final-form");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _core = require("@blueprintjs/core");

var _form = require("../form");

var LOGIN_TYPES = {
  PIN: 'PIN',
  PASSWORD: 'PASSWORD',
  PASSWORDLESS: 'PASSWORDLESS',
  UNREGISTERED: 'UNREGISTERED'
};
var cachedMail = null;
var cachedPIN = null;
var enhance = (0, _recompose.compose)(_reactRouter.withRouter, (0, _recompose.withState)('loginType', 'setLoginType', null), (0, _recompose.withState)('error', 'setError', null), (0, _recompose.withHandlers)({
  onSubmit: function onSubmit(_ref) {
    var history = _ref.history,
        setError = _ref.setError,
        loginType = _ref.loginType;
    return function (values) {
      if (loginType === LOGIN_TYPES.UNREGISTERED) {
        return history.push("/auth/register#".concat(values.email));
      }

      return _axios.default.post("".concat(process.env.API, "/auth/login"), values).then(function (_ref2) {
        var data = _ref2.data;
        return history.push("/auth/callback".concat(data.token ? "#".concat(data.token) : ''));
      }).catch(function (err) {
        return setError(err);
      });
    };
  }
}), (0, _recompose.withHandlers)({
  validate: function validate(_ref3) {
    var setLoginType = _ref3.setLoginType,
        loginType = _ref3.loginType,
        history = _ref3.history,
        onSubmit = _ref3.onSubmit;
    return function (values) {
      var errors = {};

      if (!values.email) {
        errors.email = 'Erforderlich';
        setLoginType(null);
      } else if (!(0, _isEmail.default)(values.email, {
        require_tld: true
      })) {
        errors.email = 'Keine gültige E-Mail';
        setLoginType(null);
      } else if (values.email !== cachedMail) {
        cachedMail = values.email;

        _axios.default.post("".concat(process.env.API, "/auth/login-type"), {
          email: values.email
        }).then(function (_ref4) {
          var data = _ref4.data;
          setLoginType(data.loginType);

          if (data.loginType === 'PASSWORDLESS') {
            history.push('/auth/callback');
          } else if (data.loginType === LOGIN_TYPES.PIN) {
            setTimeout(function () {
              return document.getElementsByName('pin')[0].focus();
            });
          } else if (data.loginType === LOGIN_TYPES.PASSWORD) {
            setTimeout(function () {
              return document.getElementsByName('password')[0].focus();
            });
          }
        }).catch(function () {
          return setLoginType(LOGIN_TYPES.UNREGISTERED);
        });
      }

      if (values.pin && loginType === LOGIN_TYPES.PIN && values.pin.length === 4 && cachedPIN !== values.pin) {
        cachedPIN = values.pin;
        return onSubmit(values);
      }

      return errors;
    };
  }
}));

var _default = enhance(function (_ref5) {
  var onSubmit = _ref5.onSubmit,
      validate = _ref5.validate,
      loginType = _ref5.loginType,
      error = _ref5.error;
  return _react.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    initialValues: {
      email: ''
    },
    validate: validate,
    render: function render(_ref6) {
      var handleSubmit = _ref6.handleSubmit,
          submitting = _ref6.submitting,
          pristine = _ref6.pristine;
      return _react.default.createElement("form", {
        onSubmit: handleSubmit
      }, _react.default.createElement(_Typography.default, {
        variant: "headline"
      }, "Anmeldung"), _react.default.createElement(_core.Spinner, {
        intent: _core.Intent.PRIMARY
      }), _react.default.createElement(_Typography.default, null, "Geben Sie Ihre E-Mail Adresse an um sich in Ihrem Konto anzumelden oder ein neues zu registrieren."), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "email",
        label: "E-Mail",
        type: "email",
        fullWidth: true
      })), loginType === LOGIN_TYPES.PIN && _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "pin",
        label: "PIN",
        type: "password",
        fullWidth: true
      })), loginType === LOGIN_TYPES.PASSWORD && _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "password",
        label: "Passwort",
        type: "password",
        fullWidth: true
      })), error && _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, error.message), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: submitting || pristine || !loginType,
        type: "submit"
      }, loginType === LOGIN_TYPES.UNREGISTERED ? 'Registrieren' : 'Weiter'))));
    }
  });
});

exports.default = _default;