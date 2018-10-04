import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuImageProps {
  inverted?: boolean;
  collapsed?: boolean;
  large?: boolean;
  extra?: React.ReactNode;
}

interface InnerProps extends MenuImageProps {
  theme: any;
}

const rule = ({ theme, large, extra, inverted, collapsed }: InnerProps) => {
  const width = (collapsed && (large ? 54 : 40)) || (!extra ? 54 : 'auto');

  return {
    width,
    minWidth: width,
    textAlign: extra && 'right',
    display: extra && collapsed && 'none',
    ellipsis: true,
    overflowY: 'hidden',
    color: (inverted !== undefined
    ? inverted
    : theme.inverted)
      ? theme.light2
      : theme.dark2,
    fontSize: '80%',
    '> *': {
      display: 'block',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 200
    },
    '& svg': {
      size: (!!large && 36) || (!extra && 20) || 14,
      fill:
        !!extra &&
        ((inverted !== undefined
        ? inverted
        : theme.inverted)
          ? theme.light2
          : theme.dark2),
      marginTop: !!extra && 2
    },
    '& i': {
      fontSize: (!!large && 36) || (!extra && 20) || 14,
      color:
        (!!extra &&
          ((inverted !== undefined
          ? inverted
          : theme.inverted)
            ? theme.light2
            : theme.dark2)) ||
        theme.dark,
      marginTop: !!extra && 2
    },
    '& img': {
      size: (!!large && 40) || (!extra && 32) || 20,
      borderRadius: theme.borderRadius
      // borderRadius: collapsed ? '50%' : theme.borderRadius
    }
  };
};

export const MenuImage: React.StatelessComponent<MenuImageProps> = ({
  children,
  inverted,
  collapsed,
  large,
  extra
}) => (
  <FelaComponent
    rule={rule}
    inverted={inverted}
    large={large}
    extra={extra}
    collapsed={collapsed}
  >
    {children}
  </FelaComponent>
);

export default MenuImage;
