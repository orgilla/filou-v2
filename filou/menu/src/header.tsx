import * as React from 'react';
import { cx, css, getColor, useTheme } from '@filou/core';
import { IMenuProps } from './menu';

export interface IMenuHeader extends IMenuProps {}

const rule = ({ color, palette, inverted }: IMenuHeader) =>
  css({
    // minHeight: 72,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    alignItems: 'center',
    fontSize: '120%',
    marginLeft: -9,
    marginRight: -9,
    // paddingLeft: 9,
    // paddingRight: 9,
    marginTop: `-${useTheme('space2')}`,
    paddingTop: useTheme('space2'),
    marginBottom: useTheme('space2'),
    paddingBottom: useTheme('space2'),
    backgroundColor: getColor(color, palette),
    color: inverted ? useTheme('light') : useTheme('dark'),
    '> *': {
      width: '100%'
    },
    '& svg': {
      width: 36,
      height: 36,
      fill: (inverted ? useTheme('light') : useTheme('dark')) + ''
    },
    '& img': {
      width: 48,
      height: 48,
      borderRadius: useTheme('borderRadius')
    }
  } as any);

const MenuHeader = ({
  children,
  className,
  color,
  palette,
  inverted
}: IMenuHeader) => (
  <div className={cx(rule({ color, palette, inverted }), className)}>
    {children}
  </div>
);

export default MenuHeader;
