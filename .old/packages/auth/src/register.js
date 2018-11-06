import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { withRouter } from 'react-router';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import { Form, Field } from 'react-final-form';
import uuidv5 from 'uuid/v5';
import shortID from 'shortid';
import If from '../if';
import { TextInput, CheckInput } from '../form';

const validate = values => {
  const errors = {};
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
  } else if (!isEmail(values.email, { require_tld: true })) {
    errors.email = 'Keine gültige E-Mail';
  }
  return errors;
};

const secretKey = uuidv5('access.diego.one', uuidv5.DNS);
const ref = shortID
  .generate()
  .split('-')
  .join('')
  .substr(0, 3)
  .toLowerCase();

const enhance = compose(
  withRouter,
  withState('error', 'setError', null),
  withHandlers({
    onSubmit: ({ setError, history }) => data =>
      axios
        .post(`${process.env.API}/auth/register`, data, { timeout: 1000 * 7.5 })
        .then(() => history.push(`/auth/callback`))
        .catch(err => setError(err)),
    onCancel: props => () => {
      const { history } = props;
      return history.push('/auth');
    }
  })
);

export default enhance(({ onSubmit, onCancel, email, error }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ email, secretKey, ref }}
    validate={validate}
    render={({ handleSubmit, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={12}>
            <Typography variant="headline">Registrierung</Typography>
            <Typography>
              Hier können Sie Daten für ihr persönliches Benutzerkonto angeben.
            </Typography>
            <br />
          </Grid>
          <Grid item xs={12} md={12}>
            <Field
              component={TextInput}
              name="email"
              type="email"
              label="E-Mail"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Field
              component={TextInput}
              name="name"
              type="text"
              label="Vollständiger Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Field
              component={TextInput}
              name="role"
              type="text"
              label="Rolle"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextInput}
              name="pin"
              type="password"
              label="PIN"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextInput}
              name="pin2"
              type="password"
              label="PIN (erneut)"
              fullWidth
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <br />
              Bitte prüfen Sie ihr Internet und versuchen es erneut.
            </Grid>
          )}
          <Grid item xs={12}>
            <br />
            <Button variant="contained" onClick={onCancel}>
              Zurück
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              disabled={submitting || pristine}
              type="submit"
            >
              Abschicken
            </Button>
          </Grid>
          {/* <Grid item xs={12} md={12}>
              <br />
              <Typography variant="headline">Anmeldedaten</Typography>
              <Typography>
                Der Benutzername und die PIN werden zur Anmeldung Ihres
                persönlichen Benutzerkonto am Windows/Mac/Linux Client
                abgefragt.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                component={TextInput}
                name="user"
                type="text"
                label="Benutzername"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Field
                component={TextInput}
                name="pin"
                type="password"
                label="PIN"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Field
                component={TextInput}
                name="pin2"
                type="password"
                label="PIN (erneut)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <br />
              <Button variant="contained" onClick={onCancel}>
                Abbruch
              </Button>
              &nbsp;
              <Button
                variant="contained"
                color="primary"
                disabled={submitting || pristine}
                onClick={() => setPage(1)}
              >
                Weiter
              </Button>
          </Grid> */}
        </Grid>
        <If condition={false}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12}>
              <Typography variant="headline">Organisation</Typography>
              <Typography>
                Ein Benutzerkonto kann nur in Verbindung mit einer Organisation
                erstellt werden.
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Field
                component={TextInput}
                name="tenant"
                type="text"
                label="Name der Organisation"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Field
                component={TextInput}
                name="country"
                type="text"
                label="Land"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Field
                component={TextInput}
                name="city"
                type="text"
                label="Stadt"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Field
                component={TextInput}
                name="zip"
                type="text"
                label="PLZ"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <br />
              <Typography variant="headline">Geheimschlüssel</Typography>
              <Typography>
                Der Geheimschlüssel erlaubt das Verbinden der Organisation mit
                dem Windows/Mac/Linux Clients sowie das Administrieren Ihrer
                Organisation. Der Geheimschlüssel wird nicht auf unseren Servern
                gespeichert und ist ausschließlich Ihnen bekannt.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Field
                component={TextInput}
                name="ref"
                type="text"
                label="ID"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <Field
                component={TextInput}
                name="secretKey"
                type="text"
                label="Geheimschlüssel"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Field
                component={CheckInput}
                name="ok"
                label="Ich habe Identifikator und Geheimschlüssel notiert"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <br />
              <Button variant="contained" onClick={() => setPage(0)}>
                Zurück
              </Button>
              &nbsp;
              <Button
                variant="contained"
                color="primary"
                disabled={submitting || pristine}
                type="submit"
              >
                Weiter
              </Button>
            </Grid>
          </Grid>
        </If>
      </form>
    )}
  />
));
