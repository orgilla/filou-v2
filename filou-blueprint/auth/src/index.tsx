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
  height?: string | number;
  company?: string;
  dark?: boolean;
}
function Auth(props: IAuth) {
  const { backgroundImage, title, company, logo, dark = false, height } = props;
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Redirect noThrow to="/" />
  ) : (
    <Layout
      logo={logo}
      height={height}
      backgroundImage={backgroundImage}
      title={title}
      company={company}
    >
      <FormPane company={company} dark={dark}>
        <Callback path="callback" />
        <Register path="register" />
        <Login default />
      </FormPane>
    </Layout>
  );
}
export default Auth;
