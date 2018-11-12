import * as React from 'react';
import { FelaComponent, IFelaRule, getColor } from '@filou/core';
import { IMenuProps } from './menu';

export interface IMenuHeader extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  color?: string | number | boolean;
  palette?: number;
}

const rule = ({ theme, color, palette, inverted }: IFelaRule<IMenuHeader>) => ({
  // minHeight: 72,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'center',
  fontSize: '120%',
  marginX: -9,
  // paddingX: 9,
  marginTop: `-${theme.space2}`,
  paddingTop: theme.space2,
  marginBottom: theme.space2,
  paddingBottom: theme.space2,
  backgroundColor: getColor(color, palette),
  color: inverted ? theme.light : theme.dark,
  '> *': {
    width: '100%'
  },
  '& svg': {
    size: 36,
    fill: inverted ? theme.light : theme.dark
  },
  '& img': {
    size: 48,
    borderRadius: theme.borderRadius
  }
});

const MenuHeader = ({ children, ...rest }: IMenuHeader) => (
  <FelaComponent rule={rule} {...rest}>
    {children}
  </FelaComponent>
);

export default MenuHeader;
