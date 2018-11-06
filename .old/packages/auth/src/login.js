import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { withRouter } from 'react-router';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import { Form, Field } from 'react-final-form';
import Typography from '@material-ui/core/Typography';
import { Intent, Spinner } from '@blueprintjs/core';
import { TextInput } from '../form';

const LOGIN_TYPES = {
  PIN: 'PIN',
  PASSWORD: 'PASSWORD',
  PASSWORDLESS: 'PASSWORDLESS',
  UNREGISTERED: 'UNREGISTERED'
};

let cachedMail = null;
let cachedPIN = null;
const enhance = compose(
  withRouter,
  withState('loginType', 'setLoginType', null),
  withState('error', 'setError', null),
  withHandlers({
    onSubmit: ({ history, setError, loginType }) => values => {
      if (loginType === LOGIN_TYPES.UNREGISTERED) {
        return history.push(`/auth/register#${values.email}`);
      }
      return axios
        .post(`${process.env.API}/auth/login`, values)
        .then(({ data }) =>
          history.push(`/auth/callback${data.token ? `#${data.token}` : ''}`)
        )
        .catch(err => setError(err));
    }
  }),
  withHandlers({
    validate: ({ setLoginType, loginType, history, onSubmit }) => values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Erforderlich';
        setLoginType(null);
      } else if (!isEmail(values.email, { require_tld: true })) {
        errors.email = 'Keine gültige E-Mail';
        setLoginType(null);
      } else if (values.email !== cachedMail) {
        cachedMail = values.email;
        axios
          .post(`${process.env.API}/auth/login-type`, { email: values.email })
          .then(({ data }) => {
            setLoginType(data.loginType);
            if (data.loginType === 'PASSWORDLESS') {
              history.push('/auth/callback');
            } else if (data.loginType === LOGIN_TYPES.PIN) {
              setTimeout(() => document.getElementsByName('pin')[0].focus());
            } else if (data.loginType === LOGIN_TYPES.PASSWORD) {
              setTimeout(() =>
                document.getElementsByName('password')[0].focus()
              );
            }
          })
          .catch(() => setLoginType(LOGIN_TYPES.UNREGISTERED));
      }
      if (
        values.pin &&
        loginType === LOGIN_TYPES.PIN &&
        values.pin.length === 4 &&
        cachedPIN !== values.pin
      ) {
        cachedPIN = values.pin;
        return onSubmit(values);
      }
      return errors;
    }
  })
);

export default enhance(({ onSubmit, validate, loginType, error }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ email: '' }}
    validate={validate}
    render={({ handleSubmit, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <Typography variant="headline">Anmeldung</Typography>
        <Spinner intent={Intent.PRIMARY} />
        <Typography>
          Geben Sie Ihre E-Mail Adresse an um sich in Ihrem Konto anzumelden
          oder ein neues zu registrieren.
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={12}>
            <Field
              component={TextInput}
              name="email"
              label="E-Mail"
              type="email"
              fullWidth
            />
          </Grid>
          {loginType === LOGIN_TYPES.PIN && (
            <Grid item xs={12} md={12}>
              <Field
                component={TextInput}
                name="pin"
                label="PIN"
                type="password"
                fullWidth
              />
            </Grid>
          )}
          {loginType === LOGIN_TYPES.PASSWORD && (
            <Grid item xs={12} md={12}>
              <Field
                component={TextInput}
                name="password"
                label="Passwort"
                type="password"
                fullWidth
              />
            </Grid>
          )}
          {error && (
            <Grid item xs={12} md={12}>
              {error.message}
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={submitting || pristine || !loginType}
              type="submit"
            >
              {loginType === LOGIN_TYPES.UNREGISTERED
                ? 'Registrieren'
                : 'Weiter'}
            </Button>
          </Grid>
        </Grid>
      </form>
    )}
  />
));
