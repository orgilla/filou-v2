import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';
import { IMenuProps } from './menu';

export interface IMenuContent extends IMenuProps {
  subtitle?: string;
}

const rule = ({ theme, inverted }: IFelaRule<IMenuContent>) => ({
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  flexGrow: 1,
  overflowY: 'hidden',
  color: inverted ? theme.light : theme.dark,
  marginLeft: theme.space1,
  marginRight: theme.space1,
  '> small': {
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    display: 'block',
    marginTop: `-${theme.space1}`,
    color: inverted ? theme.light2 : theme.dark2
  }
});

const MenuContent = ({
  children,
  className,
  subtitle,
  ...rest
}: IMenuContent) => (
  <FelaComponent rule={rule} className={className} {...rest}>
    {children}
    {!!subtitle && <small>{subtitle}</small>}
  </FelaComponent>
);

export default MenuContent;
