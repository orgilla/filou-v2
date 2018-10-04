import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuInputProps {}

interface InnerProps extends MenuInputProps {
  theme: any;
}

const rule = ({ theme }: InnerProps) => ({
  width: '100%',
  height: 40,
  margin: 0,
  paddingX: theme.space3,
  paddingY: theme.space2,
  WebkitTapHighlightColor: theme.light,
  boxShadow: 'none',
  outline: 0,
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  borderRadius: theme.borderRadius,
  color: theme.inverted ? theme.light2 : theme.dark2,
  // backgroundColor: 'transparent',
  // border: 0,
  border: `1px solid ${theme.dark4}`,
  transition: 'box-shadow .1s ease,border-color .1s ease',
  '::placeholder': {
    color: theme.inverted ? theme.light4 : theme.dark4
  }
});

export const MenuImage: React.StatelessComponent<MenuInputProps> = ({
  children
}) => (
  <FelaComponent rule={rule} render="input">
    {children}
  </FelaComponent>
);

export default MenuImage;
