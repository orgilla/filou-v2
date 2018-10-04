import * as React from 'react';
import { FelaComponent, color as getColor, fade } from '@filou/core';
import Content from './item-content';
import Loader from './item-loader';
import Image from './image';

export interface MenuItemProps {
  large?: boolean;
  small?: boolean;
  active?: boolean;
  // icon?: React.ReactNode | React.ComponentClass;
  icon?: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void);
  color?: string | number;
  palette?: number;
  disabled?: boolean;
  ellipsis?: boolean;
  collapsed?: boolean;
  inverted?: boolean;
  subtitle?: string | React.ReactNode;
  extra?: string | React.ReactNode;
  loading?: boolean;
}

interface InnerProps extends MenuItemProps {
  theme: any;
}

const rule = ({
  theme,
  large,
  small,
  active,
  icon,
  onClick,
  color,
  palette,
  disabled,
  ellipsis,
  collapsed,
  inverted = color ? !!color || color === 0 : undefined
}: InnerProps) => {
  const bgColor = getColor(theme, `${color || theme.dark4}`, palette);
  const hoverColor = fade(bgColor, 10);
  /*const alpha = tinycolor(bgColor).getAlpha();
  const hoverColor = !bgColor
    ? theme.dark4
    : (alpha === 1 && darken(bgColor)) ||
      darken(bgColor)
        .setAlpha(alpha * 1.5)*/

  return {
    height: ellipsis === false ? undefined : large ? 54 : small ? 32 : 40,
    flexShrink: 0,
    width: !collapsed ? 'initial' : large ? 54 : small ? 32 : 40,
    marginLeft: collapsed && !large && 7,
    marginY: theme.space1,
    paddingLeft: !icon && theme.space3,
    paddingRight: theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: !!onClick && !disabled && 'pointer',
    borderRadius: collapsed ? '50%' : theme.borderRadius,
    opacity: disabled ? 0.67 : 1,
    backgroundColor:
      (bgColor && active && hoverColor) || bgColor || (active && theme.dark4),
    color: !!inverted && theme.light,
    userSelect: 'none',
    onHover: {
      backgroundColor: !!onClick && !disabled && hoverColor
    }
  };
};

export const MenuItem: React.StatelessComponent<MenuItemProps> = ({
  large,
  children,
  subtitle,
  icon: FaIcon,
  extra,
  color,
  loading,
  onClick,
  disabled,
  ellipsis,
  palette,
  active,
  small,
  inverted = color ? !!color : undefined,
  collapsed
}) => (
  <FelaComponent
    rule={rule}
    small={small}
    large={large}
    active={active}
    icon={FaIcon}
    onClick={onClick}
    color={color}
    palette={palette}
    disabled={disabled}
    ellipsis={ellipsis}
    collapsed={collapsed}
    inverted={color ? !!color || color === 0 : undefined}
    render={({ className }) => (
      <div onClick={disabled ? () => {} : onClick} className={className}>
        {!!FaIcon && (
          <Image collapsed={collapsed} large={large}>
            {FaIcon}
            {/*React.isValidElement(FaIcon) ? FaIcon : <FaIcon />*/}
          </Image>
        )}
        <Content collapsed={collapsed} ellipsis={ellipsis} inverted={inverted}>
          {children}
          {!!subtitle && <small>{subtitle}</small>}
        </Content>
        {!!extra &&
          !loading && (
            <Image collapsed={collapsed} extra inverted={inverted}>
              {extra}
            </Image>
          )}
        {loading && (
          <Image collapsed={collapsed} extra inverted={inverted}>
            <Loader>...</Loader>
          </Image>
        )}
      </div>
    )}
  />
);
MenuItem.displayName = 'MenuItem';

export default MenuItem;
