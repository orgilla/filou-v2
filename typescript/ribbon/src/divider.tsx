import * as React from 'react';
import { FelaComponent } from '@filou/core';

const rule = ({
  theme,
  marginLeft,
  color,
  dark
}: {
  theme: any;
  marginLeft: string | boolean | number;
  color: string;
  dark: boolean;
}) => ({
  color: theme.light,
  alignItems: 'center',
  fontSize: 14,
  // fontWeight: 500,
  justifyContent: 'center',
  margin: '6px 8px',
  borderRight: `1px solid ${
    color ? theme[color] : dark ? theme.dark4 : theme.light4
  }`,
  marginLeft: marginLeft ? `${marginLeft}!important` : undefined,
  outline: 0,
  // textTransform: 'uppercase',
  textDecoration: 'none',
  transform: 'scaleX(-20%)',
  // transition: .3s cubic-bezier(.25,.8,.5,1),color 1ms;
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  userSelect: 'none'
});

export interface RibbonDividerProps {
  marginLeft?: string | boolean | number;
  color?: string;
  dark?: boolean;
}
const Divider: React.ComponentType<RibbonDividerProps> = ({
  marginLeft,
  children,
  dark,
  color
}) => (
  <FelaComponent
    rule={rule}
    color={color}
    dark={dark}
    marginLeft={marginLeft}
    component="b"
  >
    {children}
  </FelaComponent>
);

export default Divider;
