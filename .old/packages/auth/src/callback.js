import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { Consumer } from './context';

class AuthCallback extends Component {
  constructor(props) {
    super(props);
    this.state = { token: props.location.hash.substr(1) };
  }

  componentDidMount = async () => {
    const { token } = this.state;
    const { auth, history } = this.props;
    if (token) {
      console.log('MOUNT');
      auth
        .handleToken(token)
        .then(x => {
          console.log('redirect', x);
          history.push('/profile');
        })
        .catch(err => this.setState({ err }));
    }
  };

  render() {
    const { token, type, err } = this.state;
    const { history } = this.props;
    if (err) {
      return (
        <Fragment>
          <Typography variant="headline">Fehler</Typography>
          <Typography>
            Der Link ist ungültig oder abgelaufen. Versuchen Sie es nochmal.
          </Typography>
          <br />
          <br />
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => history.push('/auth')}>
                Zurück
              </Button>
            </Grid>
          </Grid>
        </Fragment>
      );
    }

    if (token) {
      return (
        <Fragment>
          <h2>
            <CircularProgress size={24} /> Bitte kurz warten ...
          </h2>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => history.push('/auth')}>
                Zurück
              </Button>
            </Grid>
          </Grid>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Typography variant="headline">
          Erfolg, bitte prüfen Sie ihre Mails
        </Typography>
        <Typography>
          Sie erhalten eine Mail mit einem Link. Wenn Sie dem Link folgen, sind
          Sie sofort mit Ihrem Profil angemeldet und können Diego.ONE im Browser
          nutzen.
        </Typography>
        <br />
        <Typography>
          Diese Art der Anmeldung im Browser schützt Sie und Ihre Anmeldedaten,
          besonders wenn Sie an öffentlichen PCs arbeiten.
        </Typography>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => history.push('/auth')}>
              Zurück
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default withRouter(p => (
  <Consumer>{auth => <AuthCallback auth={auth} {...p} />}</Consumer>
));
