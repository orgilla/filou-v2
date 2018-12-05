import * as React from 'react';
import { IRoute, IMatch } from '@filou/router';
import { Button } from '@filou/blueprint';
import isEmail from 'validator/lib/isEmail';
import Form from '@filou/blueprint-form';
import { useAuth } from './context';

interface IAuthLogin {}

function AuthLogin(props: IRoute<IAuthLogin>) {
  const { navigate } = props as IMatch<IAuthLogin>;
  const [loginType, setLoginType] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { login } = useAuth();

  const onSubmit = React.useCallback(
    (values: any) => {
      console.log('LOGIN', values);
      return login(values)
        .then(token => {
          navigate(`/auth/callback${token ? `#${token}` : ''}`);
        })
        .catch(err => setError(err));
    },
    [loginType]
  );
  const validate = React.useCallback(
    (values: any) => {
      const errors: any = {};
      setError(null);
      if (!values.email) {
        errors.email = 'Erforderlich';
        setLoginType(null);
      } else if (!isEmail(values.email, { require_tld: true })) {
        errors.email = 'Keine gültige E-Mail';
        setLoginType(null);
      }
      return errors;
    },
    [loginType]
  );
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: '' }}
      validate={validate}
      title="Anmeldung"
      error={error}
      submitLabel="Anmelden"
      additionalButton={
        <Button
          intent="primary"
          minimal
          onClick={() => navigate('/auth/register')}
        >
          Registrieren
        </Button>
      }
      description="Geben Sie Ihre E-Mail Adresse an um sich in Ihrem Konto anzumelden oder ein neues zu registrieren."
    >
      <Form.Text name="email" label="E-Mail" type="email" />
      <Form.Text name="password" label="Passwort" type="password" />
    </Form>
  );
}

export default AuthLogin;
