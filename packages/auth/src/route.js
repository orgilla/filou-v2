import React, { Fragment } from 'react';
import { Redirect, withRouter } from 'react-router';
import Layout from './layout';
import { Consumer } from './context';
import If from '../if';
import Register from './register';
// import LoginOrg from './login-org';
import Login from './login';
import Callback from './callback';

const Auth = ({ view, location }) => (
  <Consumer>
    {auth =>
      auth.isAuthenticated() ? (
        <Redirect to="/profile" />
      ) : (
        <Layout>
          <Fragment>
            <If condition={location.pathname === '/auth/register'}>
              <Register email={location.hash.substr(1)} />
            </If>
            <If condition={location.pathname === '/auth/callback'}>
              <Callback />
            </If>
            <If condition={!view}>
              <Login />
            </If>
          </Fragment>
        </Layout>
      )
    }
  </Consumer>
);

export default withRouter(Auth);
