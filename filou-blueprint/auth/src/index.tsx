import * as React from 'react';
import { Redirect, RouteComponentProps } from '@filou/router';
import { useAuth } from './context';
import Login from './login';
import Register from './register';
import Callback from './callback';
import FormPane from './form-pane';
import Layout from './layout';

export { default as Provider } from './context';
export { Consumer, useAuth } from './context';

interface IAuth extends RouteComponentProps {
  backgroundImage?: string;
  title?: string;
  logo?: React.ReactNode;
  company?: string;
  inverted?: boolean;
}
function Auth(props: IAuth) {
  const { backgroundImage, title, company, logo, inverted = false } = props;
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Redirect noThrow to="/" />
  ) : (
    <Layout
      logo={logo}
      backgroundImage={backgroundImage}
      title={title}
      company={company}
    >
      <FormPane company={company} inverted={inverted}>
        <Callback path="callback" />
        <Register path="register" />
        <Login default />
      </FormPane>
    </Layout>
  );
}
export default Auth;
