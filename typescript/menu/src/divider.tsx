import * as React from 'react';
import { FelaComponent, border } from '@filou/core';

export interface MenuDividerProps {
  marginBottom?: string | boolean | number;
}

interface InnerProps extends MenuDividerProps {
  theme: any;
}

const rule = ({ theme, marginBottom }: InnerProps) => ({
  width: '100%',
  border: 'none',
  borderTop: border(theme, theme.dark4),
  marginBottom
});

const MenuDivider: React.StatelessComponent<MenuDividerProps> = ({
  marginBottom,
  children
}) => (
  <FelaComponent rule={rule} marginBottom={marginBottom} render="hr">
    {children}
  </FelaComponent>
);

export default MenuDivider;
