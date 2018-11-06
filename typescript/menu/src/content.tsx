import * as React from 'react';
//@ts-ignore
import tinycolor from 'tinycolor2';
import { FelaComponent, IFelaRule } from 'filou';
import { IMenuProps } from './menu';

export interface IMenuContent extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const rule = ({ theme, inverted }: IFelaRule<IMenuContent>) => ({
  ellipsis: true,
  flexGrow: 1,
  overflowY: 'hidden',
  color: inverted ? theme.light : theme.dark,
  marginX: theme.space1,
  '> small': {
    ellipsis: true,
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
