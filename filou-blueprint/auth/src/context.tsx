import * as React from 'react';
import { navigate } from '@filou/router';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const TOKEN_TYPES = {
  REGISTER: 0,
  VERIFY: 1,
  VERIFY_MASTER: 2,
  MASTER: 3,
  REFRESH: 4,
  ACCESS: 5
};

interface ITokenResult {
  exp: number;
}
export const handleAccessToken = (apiEndpoint: string, token: string) =>
  axios
    .get(`${apiEndpoint}/profile`, {
      headers: {
        authorization: token
      }
    })
    .then(({ data }) => {
      localStorage.setItem('access_token', token);
      localStorage.setItem(
        'access_token_expiry',
        JSON.stringify(
          jwtDecode<ITokenResult>(token).exp * 1000 + new Date().getTime()
        )
      );
      localStorage.setItem('profile', JSON.stringify(data));
      return data;
    });

export const handleRefreshToken = (apiEndpoint: string, token: string) =>
  axios
    .get(`${apiEndpoint}/access-token`, {
      headers: {
        authorization: token
      }
    })
    .then(({ data }) => {
      localStorage.setItem('refresh_token', token);
      localStorage.setItem(
        'refresh_token_expiry',
        JSON.stringify(
          jwtDecode<ITokenResult>(token).exp * 1000 + new Date().getTime()
        )
      );
      return handleAccessToken(apiEndpoint, data.token);
    });

export const handleRegisterToken = (apiEndpoint: string, token: string) =>
  axios
    .get(`${apiEndpoint}/refresh-token`, {
      headers: {
        authorization: token
      }
    })
    .then(({ data }) => handleRefreshToken(apiEndpoint, data.token));

export const verify = (apiEndpoint: string) => {
  const refreshToken = localStorage.getItem('refresh_token');
  const refreshTokenExp = JSON.parse(
    localStorage.getItem('refresh_token_expiry') || 'null'
  );
  const accessToken = localStorage.getItem('access_token');
  const accessTokenExp = JSON.parse(
    localStorage.getItem('access_token_expiry') || 'null'
  );
  // const profile = JSON.parse(localStorage.getItem('profile') || 'null');
  if (accessToken && accessTokenExp > new Date()) {
    return handleAccessToken(apiEndpoint, accessToken);
  }
  if (refreshToken && refreshTokenExp > new Date()) {
    return handleRefreshToken(apiEndpoint, refreshToken);
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

const Context = React.createContext({});

export const { Consumer } = Context;
export function useAuth(): IAuthState {
  const context = React['useContext']<IAuthState>(Context);
  return context;
}

interface IAuthReact {
  skip?: boolean;
  apiEndpoint?: string;
}

interface IAuthState {
  apiEndpoint: string;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: any;
  can: (subject: string) => boolean;
  handleToken: (token: string) => Promise<void>;
}

class AuthReact extends React.Component<IAuthReact> {
  auth = {
    isAuthenticated: () => false
  };

  static defaultProps = {
    apiEndpoint: '/api/auth'
  };

  state: IAuthState;

  constructor(props: IAuthReact) {
    super(props);
    const apiEndpoint = props.apiEndpoint || AuthReact.defaultProps.apiEndpoint;
    verify(apiEndpoint);
    const user = this.isAuthenticated();
    this.state = {
      apiEndpoint,
      login: this.login,
      logout: this.logout,
      isAuthenticated: !!user,
      user,
      can: this.can,
      handleToken: this.handleToken
    };
  }

  handleToken = async (token: string) => {
    const { t } = jwtDecode(token);
    if (t === TOKEN_TYPES.REGISTER || t === TOKEN_TYPES.VERIFY) {
      return handleRegisterToken(this.state.apiEndpoint, token).then(
        this.login
      );
    }
  };

  login = async () => {
    await verify(this.state.apiEndpoint);
    const user = this.isAuthenticated();
    this.setState({
      isAuthenticated: !!user,
      user
    });
    navigate('/');
  };

  logout = async () => {
    await logout();
    const user = this.isAuthenticated();
    this.setState({
      isAuthenticated: !!user,
      user
    });
    navigate('/');
  };

  isAuthenticated = () => {
    if (this.props.skip) {
      return true;
    }
    const expiresAt = JSON.parse(
      localStorage.getItem('access_token_expiry') || 'null'
    );
    const profile = localStorage.getItem('profile');
    const token = localStorage.getItem('access_token');
    if (new Date().getTime() < expiresAt && profile) {
      return { ...JSON.parse(profile), token };
    }
    return null;
  };

  can = (arg1: string) => {
    if (arg1 === 'op') {
      return true;
    }
    return false;
  };

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export default AuthReact;
