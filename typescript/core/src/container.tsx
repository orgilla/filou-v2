import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';

const rule = ({
  theme,
  height,
  size,
  marginTop
}: {
  theme: any;
  height: number | string;
  marginTop: number | string;
  size?: 'small';
}) => ({
  minHeight: 30,
  height,
  marginTop,
  position: 'relative',
  marginX: 'auto',
  paddingX: theme.space2,
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0
  },
  ifMini: {
    width: '100%'
  },
  ifSmallUp: {
    width: 540,
    maxWidth: '100%'
  },
  ifMediumUp: {
    width: 720,
    maxWidth: '100%'
  },
  ifLargeUp: {
    width: 960,
    maxWidth: '100%'
  },
  ifHugeUp: {
    width: 1140,
    maxWidth: '100%'
  },
  extend: [
    {
      condition: size === 'small',
      style: {
        onAfter: {
          content: '""',
          clear: 'both',
          display: 'block',
          visibility: 'hidden',
          height: 0
        },
        ifMediumUp: {
          width: 400,
          maxWidth: '100%'
        },
        ifLargeUp: {
          width: 520,
          maxWidth: '100%'
        },
        ifHugeUp: {
          width: 640,
          maxWidth: '100%'
        }
      }
    }
  ]
});

export interface IContainer {
  component?: String;
  height?: number | string;
  marginTop?: number | string;
  size?: 'small';
}

export const Container: React.StatelessComponent<IContainer> = ({
  component = 'div',
  marginTop,
  height,
  size
}) => (
  <FelaComponent
    rule={rule}
    height={height}
    marginTop={marginTop}
    size={size}
    render={component}
  />
);
Container.displayName = 'Container';

export default Container;
