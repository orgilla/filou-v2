import * as React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from './theme';

const rule = ({ size }: IContainer) =>
  css({
    minHeight: 30,
    height: '100%',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    '> div': {
      paddingLeft: useTheme('space2'),
      paddingRight: useTheme('space2')
    },
    ':after': {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0
    },
    '@media (max-width: 479px)': {
      width: '100%'
    },
    '@media (min-width: 480px)': {
      width: 540,
      maxWidth: '100%'
    },
    '@media (min-width: 768px)': {
      width: size === 'small' ? 400 : 720,
      maxWidth: '100%'
    },
    '@media (min-width: 992px)': {
      width: size === 'small' ? 520 : 960,
      maxWidth: '100%'
    },
    '@media (min-width: 1200px)': {
      width: size === 'small' ? 640 : 1140,
      maxWidth: '100%'
    }
  } as any);

export interface IContainer {
  render?: React.ComponentType;
  className?: string;
  size?: 'small';
}

export const Container: React.StatelessComponent<IContainer> = ({
  children,
  size,
  className
}) => <div className={cx(rule({ size }), className)}>{children}</div>;
Container.displayName = 'Container';

export default Container;
