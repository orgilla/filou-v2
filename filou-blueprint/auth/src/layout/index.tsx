import * as React from 'react';
import { Container, useTheme, Text } from '@filou/core';
import { css } from 'emotion';
import Banner from '../banner';

interface IAuthLayout {
  children?: React.ReactNode;
  backgroundImage?: string;
  logo?: React.ReactNode;
  height?: string | number;
  title?: string;
  company?: string;
}

const rule = (height: string | number = '100%') =>
  css({
    '& h1': {
      fontWeight: useTheme('fontWeight'),
      textShadow: `0 0 10px ${useTheme('dark')}`
    },
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
  title = 'Welcome'
}: IAuthLayout) {
  return (
    <div className={rule(height)}>
      <Banner backgroundImage={backgroundImage}>
        <Container>
          {logo}
          <Text type="h1">{title}</Text>
          {/*Melden Sie sich mit Ihren Benutzerdaten an oder registrieren
          Sie sich.*/}
        </Container>
      </Banner>
      {children}
    </div>
  );
}

export default AuthLayout;
