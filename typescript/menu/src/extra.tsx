import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';
import { IMenuProps } from './menu';

export interface IMenuExtra extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  disabled?: boolean;
}

export interface IMenuExtraRule extends IMenuExtra {
  isString?: boolean;
}

const rule = ({
  theme,
  onClick,
  disabled,
  inverted,
  isString
}: IFelaRule<IMenuExtraRule>) => ({
  size: !isString && 22,
  padding: isString && theme.space1,
  marginRight: 0,
  borderRadius: isString ? theme.borderRadius : '50%',
  position: 'relative',
  cursor: onClick && !disabled ? 'pointer' : undefined,
  opacity: disabled ? 0.67 : 1,
  ellipsis: true,
  color: inverted ? theme.light2 : theme.dark2,
  fontSize: '80%',
  '> *': {
    center: true
  },
  onHover: {
    backgroundColor:
      onClick && !disabled ? (inverted ? theme.light4 : theme.dark4) : undefined
  }
});

const MenuExtra = ({
  className,
  children,
  onClick,
  disabled,
  inverted
}: IMenuExtra) => (
  <FelaComponent
    rule={rule}
    className={className}
    onClick={disabled ? () => {} : onClick}
    disabled={disabled}
    inverted={inverted}
    isString={typeof children === 'string'}
  >
    {children}
  </FelaComponent>
);

export default MenuExtra;
