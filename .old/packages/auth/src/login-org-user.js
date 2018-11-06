import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { withRouter } from 'react-router';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import { Form, Field } from 'react-final-form';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { withStyles } from '@material-ui/core';
import { TextInput, SelectInput } from '../form';
import { FindOne } from '../rx';

const LOGIN_TYPES = {
  PIN: 'PIN',
  PASSWORD: 'PASSWORD',
  PASSWORDLESS: 'PASSWORDLESS',
  UNREGISTERED: 'UNREGISTERED'
};

const styles = {
  avatar: {
    marginRight: 10
  },
  orangeAvatar: {
    marginRight: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    marginRight: 10,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
  row: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'start'
  }
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
  withStyles(styles),
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

export default enhance(({ onSubmit, validate, loginType, error, classes }) => (
  <FindOne type="tenant">
    {data => (
      <Form
        onSubmit={onSubmit}
        initialValues={{ email: '' }}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Typography variant="display2">Anmeldung</Typography>
            <Typography variant="headline">{data.name}</Typography>
            <br />
            <Typography>
              Geben Sie Ihre E-Mail Adresse an um sich in Ihrem Konto anzumelden
              oder ein neues zu registrieren.
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} md={12}>
                <Field
                  component={SelectInput}
                  name="email"
                  label="E-Mail"
                  type="email"
                  fullWidth
                  onSearch={v =>
                    [{ id: 1, label: 'Benjamin Kniffler', ref: 'bk' }].filter(
                      x => x.label.indexOf(v) !== -1 || x.ref.indexOf(v) !== -1
                    )
                  }
                  onChange={v => console.log(v)}
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
            <br />
            <Typography variant="subheading">Zuletzt angemeldet</Typography>
            <div className={classes.row}>
              <Avatar className={classes.avatar}>bk</Avatar>
              <Avatar className={classes.orangeAvatar}>hk</Avatar>
              <Avatar className={classes.purpleAvatar}>nf</Avatar>
            </div>
          </form>
        )}
      />
    )}
    {/* (data, collection) => (
      <Fragment>
        <ul>
          {data.map(doc => (
            <li key={doc._id}>
              {doc.ref}
              <button onClick={() => doc.remove()}>Remove</button>
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() =>
            collection.insert({
              ref: 'gzk',
              name: 'GesundheitsZentrum Kelkheim',
              type: 'OP'
            })
          }
        >
          BAM
        </Button>
      </Fragment>
        ) */}
  </FindOne>
));
