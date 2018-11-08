import * as React from 'react';
import { FelaComponent } from '@filou/core';

interface IImage {
  src: string;
}
const Image: React.SFC<IImage> = ({ src }) => (
  <FelaComponent
    style={{
      overflow: 'hidden',
      height: 450,
      width: 'auto',
      background: `url(${src}) no-repeat center center`,
      backgroundSize: 'cover'
    }}
  />
);

export default Image;
