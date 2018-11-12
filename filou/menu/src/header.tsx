import * as React from 'react';
import { cx, css, getColor, useTheme } from '@filou/core';
import { IMenuProps } from './menu';

export interface IMenuHeader extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  color?: string | number | boolean;
  palette?: number;
}

const rule = (
  color?: string | number | boolean,
  palette?: number,
  inverted?: boolean
) =>
  css({
    // minHeight: 72,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    alignItems: 'center',
    fontSize: '120%',
    marginX: -9,
    // paddingX: 9,
    marginTop: `-${useTheme('space2')}`,
    paddingTop: useTheme('space2'),
    marginBottom: useTheme('space2'),
    paddingBottom: useTheme('space2'),
    backgroundColor: getColor(color, palette),
    color: inverted ? useTheme('light') : useTheme('dark')
    /* '> *': {
      width: '100%'
    },
    '& svg': {
      size: 36,
      fill: inverted ? useTheme('light') : useTheme('dark')
    },
    '& img': {
      size: 48,
      borderRadius: useTheme('borderRadius')
    } */
  });

const MenuHeader = ({
  children,
  className,
  color,
  palette,
  inverted
}: IMenuHeader) => (
  <div className={cx(rule(color, palette, inverted), className)}>
    {children}
  </div>
);

export default MenuHeader;
