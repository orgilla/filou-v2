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

var _form = require("../form");

var validate = function validate(values) {
  var errors = {};

  if (!values.email) {
    errors.email = 'Erforderlich';
  } else if (!(0, _isEmail.default)(values.email, {
    require_tld: true
  })) {
    errors.email = 'Keine gültige E-Mail';
  }

  return errors;
};

var enhance = (0, _recompose.compose)(_reactRouter.withRouter, (0, _recompose.withHandlers)({
  onSubmit: function onSubmit(props) {
    return function (data) {
      var history = props.history;
      return _axios.default.post("".concat(process.env.API, "/auth"), data).then(function () {
        return history.push('/auth/callback');
      }).catch(function () {
        return history.push("/auth/register#".concat(data.email));
      });
    };
  }
}));

var _default = enhance(function (_ref) {
  var onSubmit = _ref.onSubmit;
  return _react.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    initialValues: {
      email: ''
    },
    validate: validate,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
          submitting = _ref2.submitting,
          pristine = _ref2.pristine;
      return _react.default.createElement("form", {
        onSubmit: handleSubmit
      }, _react.default.createElement(_Typography.default, {
        variant: "headline"
      }, "Anmeldung an Organisation"), _react.default.createElement(_Typography.default, null, "Geben Sie den Identifikator der Organisation sowie den Geheimschl\xFCssel ein."), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 2
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "ref",
        type: "text",
        label: "ID",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 10
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "secretKey",
        type: "text",
        label: "Geheimschl\xFCssel",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.CheckInput,
        name: "ok",
        label: "Angemeldet bleiben",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: submitting || pristine,
        type: "submit"
      }, "Weiter"))));
    }
  });
});

exports.default = _default;