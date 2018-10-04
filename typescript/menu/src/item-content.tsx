import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuItemContentProps {
  inverted?: boolean;
  ellipsis?: boolean;
  collapsed?: boolean;
}

interface InnerProps extends MenuItemContentProps {
  theme: any;
}

const rule = ({ theme, collapsed, ellipsis = true, inverted }: InnerProps) => ({
  ellipsis,
  flexGrow: 1,
  opacity: collapsed ? 0 : 1,
  transition: 'opacity 200ms ease-out',
  overflowY: 'hidden',
  '> small': {
    ellipsis: true,
    display: 'block',
    marginTop: `-${theme.space1}`,
    color: (inverted !== undefined
    ? inverted
    : theme.inverted)
      ? theme.light2
      : theme.dark2
  }
});

const MenuItemContent: React.ComponentType<MenuItemContentProps> = ({
  children,
  collapsed,
  ellipsis,
  inverted
}) => (
  <FelaComponent
    rule={rule}
    ellipsis={ellipsis}
    collapsed={collapsed}
    inverted={inverted}
  >
    {children}
  </FelaComponent>
);

export default MenuItemContent;
