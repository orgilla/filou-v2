import * as React from 'react';
import { FelaComponent, IFelaRule } from 'filou';
import { IMenuProps } from './menu';

export interface IMenuInput extends IMenuProps {
  className?: string;
  disabled?: boolean;
}

const rule = ({ theme, inverted, disabled }: IFelaRule<IMenuInput>) => ({
  width: '100%',
  height: 36,
  margin: 0,
  paddingX: theme.space3,
  paddingY: theme.space2,
  WebkitTapHighlightColor: theme.light,
  boxShadow: 'none',
  outline: 0,
  borderRadius: theme.borderRadius,
  color: inverted ? theme.light : theme.dark,
  backgroundColor: inverted
    ? disabled
      ? theme.light5
      : theme.light4
    : disabled
      ? theme.dark5
      : theme.dark4,
  border: `1px solid ${inverted ? theme.light4 : theme.dark4}`,
  transition: 'box-shadow .1s ease,border-color .1s ease',
  '::placeholder': {
    color: inverted ? theme.light3 : theme.dark3
  }
});

const MenuInput = ({ className, inverted, ...rest }: IMenuInput) => (
  <FelaComponent
    rule={rule}
    className={className}
    inverted={inverted}
    render={({ className }) => (
      <input className={className} placeholder="the question is?" />
    )}
    {...rest}
  />
);

export default MenuInput;
