import * as React from 'react';
import { FelaComponent } from '@filou/core';
import Image from './image';

export interface MenuTitleProps {
  collapsed?: boolean;
  extra?: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void);
}

interface InnerProps extends MenuTitleProps {
  theme: any;
}

const rule = ({ theme, collapsed }: InnerProps) => ({
  color: theme.inverted ? theme.light2 : theme.dark2,
  ellipsis: true,
  textTransform: 'uppercase',
  fontSize: theme.fontSizeSmall,
  marginTop: theme.space2,
  marginBottom: theme.space1,
  width: '100%',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-between',
  opacity: collapsed ? 0 : 1,
  transition: 'opacity 200ms ease-in-out',
  userSelect: 'none'
});

const Divider: React.ComponentType<MenuTitleProps> = ({
  collapsed,
  children,
  onClick,
  extra
}) => (
  <FelaComponent
    rule={rule}
    collapsed={collapsed}
    render={({ className }) => (
      <div onClick={onClick} className={className}>
        {children}
        {!!extra && <Image extra>{extra}</Image>}
      </div>
    )}
  />
);

export default Divider;
