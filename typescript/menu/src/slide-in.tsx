import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface MenuSlideInProps {
  isBack?: boolean;
}

interface InnerProps extends MenuSlideInProps {
  theme: any;
}

const rule = ({ isBack }: InnerProps) => {
  return {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
    '> :nth-child(1)': {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0
    },
    '> :nth-child(2)': {
      position: 'absolute',
      zIndex: 1,
      animationDuration: '200ms',
      animationTimingFunction: 'ease-out',
      animationName: {
        '0%': {
          transform: isBack ? 'translateX(-101%)' : 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
      }
    }
  };
};

const MenuSlideIn: React.ComponentType<MenuSlideInProps> = ({
  children,
  isBack
}) => (
  <FelaComponent rule={rule} isBack={isBack}>
    {children}
  </FelaComponent>
);

export default MenuSlideIn;
