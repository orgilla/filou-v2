import * as React from 'react';
import { Container, FelaComponent } from '@filou/core';
import Banner from '../banner';

interface IAuthLayout {
  children?: React.ReactNode;
  backgroundImage?: string;
  logo?: React.ReactNode;
  height?: string | number;
  title?: string;
  company?: string;
}

const rule = ({ height = '100%' }: IAuthLayout) => ({
  alignItems: 'stretch',
  flexDirection: 'row',
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
  width: '100%',
  height: height
});
function AuthLayout({
  children,
  backgroundImage,
  logo,
  height,
  title = 'Welcome',
  company = 'Company'
}: IAuthLayout) {
  return (
    <FelaComponent rule={rule} height={height}>
      <Banner backgroundImage={backgroundImage}>
        <Container>
          {logo}
          <h1>{title}</h1>
          {/*Melden Sie sich mit Ihren Benutzerdaten an oder registrieren
          Sie sich.*/}
        </Container>
      </Banner>
      {children}
    </FelaComponent>
  );
}

export default AuthLayout;
