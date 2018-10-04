import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuItemLoaderProps {}

interface InnerProps extends MenuItemLoaderProps {
  theme: any;
}

const rule = ({ theme }: InnerProps) => ({
  width: 14,
  marginTop: -6,
  marginX: theme.space2,
  overflow: 'hidden',
  '> i.anticon': {
    color: theme.color
  }
});

const MenuItemLoader: React.ComponentType<MenuItemLoaderProps> = ({
  children
}) => <FelaComponent rule={rule}>{children}</FelaComponent>;

export default MenuItemLoader;
