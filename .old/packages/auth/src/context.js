import React, { Component, createContext } from 'react';
import { withRouter } from 'react-router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const TOKEN_TYPES = {
  REGISTER: 0,
  VERIFY: 1,
  VERIFY_MASTER: 2,
  MASTER: 3,
  REFRESH: 4,
  ACCESS: 5
};

export const handleAccessToken = token =>
  axios
    .get(`${process.env.API}/auth/profile`, {
      headers: {
        authorization: token
      }
    })
    .then(({ data }) => {
      localStorage.setItem('access_token', token);
      localStorage.setItem(
        'access_token_expiry',
        JSON.stringify(jwtDecode(token).exp * 1000 + new Date().getTime())
      );
      localStorage.setItem('profile', JSON.stringify(data));
      return data;
    });

export const handleRefreshToken = token =>
  axios
    .get(`${process.env.API}/auth/access-token`, {
      headers: {
        authorization: token
      }
    })
    .then(({ data }) => {
      localStorage.setItem('refresh_token', token);
      localStorage.setItem(
        'refresh_token_expiry',
        JSON.stringify(jwtDecode(token).exp * 1000 + new Date().getTime())
      );
      return handleAccessToken(data);
    });

export const handleRegisterToken = token =>
  axios
    .get(`${process.env.API}/auth/refresh-token`, {
      headers: {
        authorization: token
      }
    })
    .then(({ data }) => handleRefreshToken(data));

export const verify = () => {
  const refreshToken = localStorage.getItem('refresh_token');
  const refreshTokenExp = JSON.parse(
    localStorage.getItem('refresh_token_expiry')
  );
  const accessToken = localStorage.getItem('access_token');
  const accessTokenExp = JSON.parse(
    localStorage.getItem('access_token_expiry')
  );
  const profile = JSON.parse(localStorage.getItem('profile'));
  if (accessToken && accessTokenExp > new Date()) {
    return handleAccessToken(accessToken);
  }
  if (refreshToken && refreshTokenExp > new Date()) {
    return handleRefreshToken(refreshToken);
  }
  return logout();
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('access_token_expiry');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('refresh_token_expiry');
  localStorage.removeItem('profile');
};

const Context = createContext();

export const { Consumer } = Context;

class AuthReact extends Component {
  auth = {
    isAuthenticated: () => false
  };

  state = {};

  constructor(props) {
    super(props);
    this.history = props.history;
    verify();
  }

  handleToken = async token => {
    const { t } = jwtDecode(token);
    if (t === TOKEN_TYPES.REGISTER || t === TOKEN_TYPES.VERIFY) {
      return handleRegisterToken(token);
    }
  };

  login = async () => {
    await verify();
    this.setState({});
    this.history.push('/profile');
  };

  logout = async () => {
    await logout();
    this.setState({});
    this.history.push('/');
  };

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem('access_token_expiry'));
    const profile = localStorage.getItem('profile');
    if (new Date().getTime() < expiresAt && profile) {
      return JSON.parse(profile);
    }
    return null;
  };

  can = (arg1, arg2) => false;

  render() {
    const { children } = this.props;
    return <Context.Provider value={this}>{children}</Context.Provider>;
  }
}

export default withRouter(AuthReact);
