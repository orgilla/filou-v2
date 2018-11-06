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

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var _reactFinalForm = require("react-final-form");

var _v = _interopRequireDefault(require("uuid/v5"));

var _shortid = _interopRequireDefault(require("shortid"));

var _if = _interopRequireDefault(require("../if"));

var _form = require("../form");

var validate = function validate(values) {
  var errors = {};

  if (!values.name) {
    errors.name = 'Erforderlich';
  }

  if (!values.pin) {
    errors.pin = 'Erforderlich';
  } else if (values.pin2 && values.pin2 !== values.pin) {
    errors.pin2 = 'PIN muss übereinstimmen';
  }

  if (!values.email) {
    errors.email = 'Erforderlich';
  } else if (!(0, _isEmail.default)(values.email, {
    require_tld: true
  })) {
    errors.email = 'Keine gültige E-Mail';
  }

  return errors;
};

var secretKey = (0, _v.default)('access.diego.one', _v.default.DNS);

var ref = _shortid.default.generate().split('-').join('').substr(0, 3).toLowerCase();

var enhance = (0, _recompose.compose)(_reactRouter.withRouter, (0, _recompose.withState)('error', 'setError', null), (0, _recompose.withHandlers)({
  onSubmit: function onSubmit(_ref) {
    var setError = _ref.setError,
        history = _ref.history;
    return function (data) {
      return _axios.default.post("".concat(process.env.API, "/auth/register"), data, {
        timeout: 1000 * 7.5
      }).then(function () {
        return history.push("/auth/callback");
      }).catch(function (err) {
        return setError(err);
      });
    };
  },
  onCancel: function onCancel(props) {
    return function () {
      var history = props.history;
      return history.push('/auth');
    };
  }
}));

var _default = enhance(function (_ref2) {
  var onSubmit = _ref2.onSubmit,
      onCancel = _ref2.onCancel,
      email = _ref2.email,
      error = _ref2.error;
  return _react.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    initialValues: {
      email: email,
      secretKey: secretKey,
      ref: ref
    },
    validate: validate,
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          submitting = _ref3.submitting,
          pristine = _ref3.pristine;
      return _react.default.createElement("form", {
        onSubmit: handleSubmit
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 8
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_Typography.default, {
        variant: "headline"
      }, "Registrierung"), _react.default.createElement(_Typography.default, null, "Hier k\xF6nnen Sie Daten f\xFCr ihr pers\xF6nliches Benutzerkonto angeben."), _react.default.createElement("br", null)), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "email",
        type: "email",
        label: "E-Mail",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "name",
        type: "text",
        label: "Vollst\xE4ndiger Name",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "role",
        type: "text",
        label: "Rolle",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "pin",
        type: "password",
        label: "PIN",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "pin2",
        type: "password",
        label: "PIN (erneut)",
        fullWidth: true
      })), error && _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement("br", null), "Bitte pr\xFCfen Sie ihr Internet und versuchen es erneut."), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement("br", null), _react.default.createElement(_Button.default, {
        variant: "contained",
        onClick: onCancel
      }, "Zur\xFCck"), "\xA0", _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: submitting || pristine,
        type: "submit"
      }, "Abschicken"))), _react.default.createElement(_if.default, {
        condition: false
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 8
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_Typography.default, {
        variant: "headline"
      }, "Organisation"), _react.default.createElement(_Typography.default, null, "Ein Benutzerkonto kann nur in Verbindung mit einer Organisation erstellt werden.")), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 9
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "tenant",
        type: "text",
        label: "Name der Organisation",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 3
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "country",
        type: "text",
        label: "Land",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 7
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "city",
        type: "text",
        label: "Stadt",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 5
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "zip",
        type: "text",
        label: "PLZ",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement("br", null), _react.default.createElement(_Typography.default, {
        variant: "headline"
      }, "Geheimschl\xFCssel"), _react.default.createElement(_Typography.default, null, "Der Geheimschl\xFCssel erlaubt das Verbinden der Organisation mit dem Windows/Mac/Linux Clients sowie das Administrieren Ihrer Organisation. Der Geheimschl\xFCssel wird nicht auf unseren Servern gespeichert und ist ausschlie\xDFlich Ihnen bekannt.")), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 2
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.TextInput,
        name: "ref",
        type: "text",
        label: "ID",
        disabled: true,
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
        disabled: true,
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 12
      }, _react.default.createElement(_reactFinalForm.Field, {
        component: _form.CheckInput,
        name: "ok",
        label: "Ich habe Identifikator und Geheimschl\xFCssel notiert",
        fullWidth: true
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement("br", null), _react.default.createElement(_Button.default, {
        variant: "contained",
        onClick: function onClick() {
          return setPage(0);
        }
      }, "Zur\xFCck"), "\xA0", _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: submitting || pristine,
        type: "submit"
      }, "Weiter")))));
    }
  });
});

exports.default = _default;