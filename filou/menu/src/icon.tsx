import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';

export interface IMenuIcon {
  children?: React.ReactNode;
  className?: string;
  extra?: boolean;
  inverted?: boolean;
  size?: 'large' | 'medium' | 'small' | number;
}

const rule = ({ theme, extra, inverted, size: s }: IFelaRule<IMenuIcon>) => {
  const width = !extra ? 36 : 'auto';

  let size: number = typeof s === 'number' ? s : 20;
  switch (s) {
    case 'medium':
      size = 20;
      break;

    case 'small':
      size = 16;
      break;

    case 'large':
      size = 24;
      break;
  }
  if (extra) size = 12;

  return {
    width: width,
    minWidth: width,
    overflowY: 'hidden',
    '> *': {
      display: 'block',
      margin: '0 auto',
      textAlign: 'center'
    },
    '& svg': {
      size,
      fill: inverted ? theme.light : theme.dark
    },
    '& i': {
      fontSize: size,
      color: inverted ? theme.light : theme.dark
    },
    '& img': {
      width: Math.floor(size * 1.4),
      height: Math.floor(size * 1.4),
      borderRadius: theme.borderRadius
    }
  };
};

const MenuIcon = ({ className, children, ...rest }: IMenuIcon) => (
  <FelaComponent rule={rule} className={className} {...rest}>
    {children}
  </FelaComponent>
);

export default MenuIcon;
