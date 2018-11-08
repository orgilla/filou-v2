import * as React from 'react';
import { Spinner, Button } from '@blueprintjs/core';
import Form from '@filou/blueprint-form';
import { Consumer } from './context';

class AuthCallback extends React.Component<any> {
  state: { token?: string; err?: any } = {};
  constructor(props: any) {
    super(props);
    this.state = { token: props.location.hash.substr(1) };
  }

  componentDidMount = async () => {
    const { token } = this.state;
    const { auth, navigate } = this.props;
    if (token) {
      auth
        .handleToken(token)
        .then(() => {
          navigate('/');
        })
        .catch((err: any) => this.setState({ err }));
    }
  };

  render() {
    const { token, err } = this.state;
    const { navigate } = this.props;

    if (err) {
      return (
        <Form
          initialValues={{ email: '' }}
          title="Fehler"
          error={err}
          submitDisabled
          submitLabel="Fehler"
          additionalButton={
            <Button
              intent="warning"
              minimal
              onClick={() => navigate('/auth/login')}
            >
              Zurück
            </Button>
          }
          description="Der Link ist ungültig oder abgelaufen. Versuchen Sie es nochmal."
        />
      );
    }

    if (token) {
      return (
        <h2>
          <Spinner size={24} /> Bitte kurz warten ...
        </h2>
      );
    }
    return (
      <>
        <span>Erfolg, bitte prüfen Sie ihre Mails</span>
        <span>
          Sie erhalten eine Mail mit einem Link. Wenn Sie dem Link folgen, sind
          Sie sofort mit Ihrem Profil angemeldet und können Diego.ONE im Browser
          nutzen.
        </span>
        <br />
        <span>
          Diese Art der Anmeldung im Browser schützt Sie und Ihre Anmeldedaten,
          besonders wenn Sie an öffentlichen PCs arbeiten.
        </span>
      </>
    );
  }
}

export default (p: any) => (
  <Consumer>{(auth: any) => <AuthCallback auth={auth} {...p} />}</Consumer>
);
