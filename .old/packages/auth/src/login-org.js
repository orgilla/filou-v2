import React from 'react';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import { Form, Field } from 'react-final-form';
import Typography from '@material-ui/core/Typography';
import { TextInput, CheckInput } from '../form';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Erforderlich';
  } else if (!isEmail(values.email, { require_tld: true })) {
    errors.email = 'Keine gültige E-Mail';
  }
  return errors;
};

const enhance = compose(
  withRouter,
  withHandlers({
    onSubmit: props => data => {
      const { history } = props;
      return axios
        .post(`${process.env.API}/auth`, data)
        .then(() => history.push('/auth/callback'))
        .catch(() => history.push(`/auth/register#${data.email}`));
    }
  })
);

export default enhance(({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ email: '' }}
    validate={validate}
    render={({ handleSubmit, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <Typography variant="headline">Anmeldung an Organisation</Typography>
        <Typography>
          Geben Sie den Identifikator der Organisation sowie den Geheimschlüssel
          ein.
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={2}>
            <Field
              component={TextInput}
              name="ref"
              type="text"
              label="ID"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <Field
              component={TextInput}
              name="secretKey"
              type="text"
              label="Geheimschlüssel"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Field
              component={CheckInput}
              name="ok"
              label="Angemeldet bleiben"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
      </form>
    )}
  />
));
