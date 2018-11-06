import * as React from 'react';
import { IRoute, IMatch } from 'filou';
import * as isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import { Form, FormText, FormSpace } from '@filou/blueprint-form';
import { Button } from '@blueprintjs/core';

interface IAuthRegister {}

function AuthRegister(props: IRoute<IAuthRegister>) {
  const { navigate } = props as IMatch<IAuthRegister>;
  const [error, setError] = React['useState'](null);

  const onSubmit = React['useCallback'](
    (values: any) => {
      return axios
        .post(`/api/auth/register`, values)
        .then(({ data }) => {
          navigate(`/auth/callback${data.token ? `#${data.token}` : ''}`);
        })
        .catch(err => setError(err.response.data));
    },
    [1]
  );
  const validate = React['useCallback'](
    (values: any) => {
      const errors: any = {};
      if (!values.email) {
        errors.email = 'Erforderlich';
      } else if (!isEmail(values.email, { require_tld: true })) {
        errors.email = 'Keine gültige E-Mail';
      }
      if (values.password !== values.password2) {
        errors.password2 = 'Passwort muss übereinstimmen';
      }
      return errors;
    },
    [1]
  );
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: '' }}
      validate={validate}
      title="Registrieren"
      error={error}
      submitLabel="Jetzt registrieren"
      additionalButton={
        <Button minimal onClick={() => navigate('/auth')} intent="danger">
          Abbruch
        </Button>
      }
      description="Registriere dich kostenlos um deine Bee | ID zu erhalten."
    >
      <FormText name="email" label="E-Mail" type="email" />
      <FormText name="name" label="Vollständiger Name" />
      <FormText name="password" label="Passwort" type="password" size={1.5} />
      <FormText
        name="password2"
        label="Passwort (erneut)"
        type="password"
        size={1.5}
      />
      <FormSpace size={1} />
    </Form>
  );
}

export default AuthRegister;
