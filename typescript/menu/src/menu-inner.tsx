import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuInnerProps {
  overflowY?: string | boolean | number;
}

interface InnerProps extends MenuInnerProps {
  theme: any;
}

const rule = ({ overflowY }: InnerProps) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  overflowY,
  overflowX: 'hidden'
});

const MenuInner: React.ComponentType<MenuInnerProps> = ({
  overflowY,
  children
}) => (
  <FelaComponent rule={rule} overflowY={overflowY}>
    {children}
  </FelaComponent>
);

export default MenuInner;
