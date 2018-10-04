import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuExtraProps {
  large?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void);
  disabled?: boolean;
  marginBottom?: string | boolean | number;
}

interface InnerProps extends MenuExtraProps {
  theme: any;
}

const rule = ({ theme, large, disabled, onClick }: InnerProps) => ({
  width: large ? 30 : 22,
  height: large ? 30 : 22,
  marginRight: 0,
  borderRadius: '50%',
  position: 'relative',
  cursor: onClick && !disabled ? 'pointer' : undefined,
  opacity: disabled ? 0.67 : 1,
  '> *': {
    center: true
  },
  onHover: {
    backgroundColor: onClick && !disabled ? theme.dark5 : undefined
  }
});

const MenuExtra: React.StatelessComponent<MenuExtraProps> = ({
  large,
  disabled,
  onClick,
  children
}) => (
  <FelaComponent
    rule={rule}
    large={large}
    onClick={onClick}
    disabled={disabled}
    render={({ className }) => (
      <div className={className} onClick={disabled ? undefined : onClick}>
        {React.Children.map(
          children,
          child =>
            child && typeof child !== 'string' && typeof child !== 'number'
              ? React.cloneElement(child, { size: large ? 20 : 14 })
              : child
        )}
      </div>
    )}
  />
);

export default MenuExtra;
