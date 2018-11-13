import * as React from 'react';
import { FelaComponent, Container } from '@filou/core';

interface IBanner {
  src: string;
  title: string;
  description: string;
}
const Banner: React.SFC<IBanner> = ({ src, title, description }) => (
  <FelaComponent
    style={{
      position: 'relative',
      color: 'white',
      '> div > div > h1': {
        fontSize: 30,
        fontWeight: 400,
        margin: 0
      },
      '> div > div > h2': {
        fontSize: 18,
        fontWeight: 400,
        margin: 0
      },
      '> div > div': {
        paddingTop: 20,
        paddingBottom: 20
      },
      overflow: 'hidden',
      background: `url(${src}) no-repeat center center`,
      backgroundSize: 'cover',
      top: 0,
      left: 0,
      width: '100%'
    }}
  >
    <Container>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </Container>
  </FelaComponent>
);

export default Banner;
