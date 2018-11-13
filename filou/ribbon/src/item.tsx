import * as React from 'react';
import { FelaComponent } from '@filou/core';
import cn from 'classnames';

const rule = ({
  theme,
  marginLeft
}: {
  theme: any;
  marginLeft: string | boolean | number;
}) => ({
  paddingLeft: 8,
  paddingRight: 8,
  color: theme.light,
  minWidth: 22,
  height: 22,
  alignItems: 'center',
  fontSize: 14,
  // fontWeight: 500,
  justifyContent: 'center',
  margin: '6 8',
  marginLeft: marginLeft ? `${marginLeft}!important` : undefined,
  outline: 0,
  // textTransform: 'uppercase',
  textDecoration: 'none',
  // transition: .3s cubic-bezier(.25,.8,.5,1),color 1ms;
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  userSelect: 'none'
});

export interface RibbonItemProps {
  marginLeft?: string | boolean | number;
  active?: boolean;
  className?: string;
  onClick?: (ev: any) => any;
  to?: string;
  component?: string | React.ComponentClass;
  children?: React.ReactNode;
}

export const RibbonItem: React.StatelessComponent<RibbonItemProps> = ({
  marginLeft,
  active,
  children,
  onClick,
  to,
  className,
  component: Link
}) => (
  <FelaComponent
    rule={rule}
    marginLeft={marginLeft}
    className={className}
    active={active}
    render={({ className }: { className: string }) =>
      React.createElement(
        (Link as 'a') || 'a',
        {
          href: Link ? undefined : 'javascript:;',
          onClick,
          to,
          className: cn(className, active ? 'active' : undefined)
        },
        children
      )
    }
  />
);
RibbonItem.displayName = 'RibbonItem';

export default RibbonItem;
