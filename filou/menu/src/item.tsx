import * as React from 'react';
import {
  FelaComponent,
  IFelaRule,
  ElementType,
  createElement
} from '@filou/core';
import { IMenuProps } from './menu';
import Content from './content';
import Icon from './icon';
import Extra from './extra';
const tinycolor = require('tinycolor2');

export interface IMenuItem extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  subtitle?: string;
  icon?: ElementType;
  extra?: ElementType;
  _ref?: (element: HTMLElement | null) => any;
  innerRef?: React.RefObject<HTMLDivElement>;
  ref?: React.RefObject<HTMLDivElement>;
  color?: string | number | boolean;
  palette?: number;
  onClick?: any;
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
  collapsed?: boolean;
}

const rule = ({
  theme,
  active,
  onClick,
  color,
  // palette,
  disabled,
  collapsed,
  size,
  inverted
}: IFelaRule<IMenuItem>) => {
  // const bgColor = getColor(color, palette);
  const bgColor = color;
  const alpha = tinycolor(bgColor).getAlpha();
  const hoverColor = !bgColor
    ? inverted
      ? theme.light4
      : theme.dark4
    : (alpha === 1 &&
        (inverted
          ? tinycolor(bgColor)
              .lighten()
              .toString()
          : tinycolor(bgColor)
              .darken()
              .toString())) ||
      tinycolor(bgColor)
        .setAlpha(alpha * 1.5)
        .toString();

  let height: number = 34;
  switch (size) {
    case 'medium':
      height = 34;
      break;

    case 'small':
      height = 30;
      break;

    case 'large':
      height = 38;
      break;
  }

  return {
    width: collapsed && height,
    height,
    flexShrink: 0,
    marginY: size === 'small' ? 2 : theme.space1,
    paddingLeft: theme.space1,
    paddingRight: theme.space2,
    display: 'flex',
    alignItems: 'center',
    alignSelf: collapsed && 'center',
    justifyContent: collapsed && 'center',
    cursor: !!onClick && !disabled && 'pointer',
    borderRadius: collapsed ? '50%' : theme.borderRadius,
    opacity: disabled ? 0.67 : 1,
    backgroundColor:
      (!!bgColor && !!active && hoverColor) ||
      bgColor ||
      (!!active && theme.dark4),
    color: inverted ? theme.light : theme.dark,
    userSelect: 'none',
    onHover: {
      backgroundColor: !!onClick && !disabled && hoverColor
    },
    '> *': collapsed && {
      ellipsis: true,
      '&:not(:first-child)': {
        display: 'none'
      }
    }
  };
};

const MenuItem = ({
  children,
  subtitle,
  icon,
  extra,
  _ref,
  innerRef,
  ref,
  loading,
  onClick,
  disabled,
  className,
  inverted,
  size,
  ...rest
}: IMenuItem) => (
  <FelaComponent
    rule={rule}
    className={className}
    inverted={inverted}
    size={size}
    disabled={disabled}
    onClick={onClick}
    {...rest}
    render={({ className }) => (
      <div
        className={className}
        ref={_ref || innerRef || ref}
        onClick={disabled ? undefined : onClick}
      >
        {!!icon && (
          <Icon size={size} inverted={inverted}>
            {createElement(icon)}
          </Icon>
        )}
        {React.Children.map(children, child =>
          React.isValidElement(child) ? (
            React.cloneElement(child as React.ReactElement<any>, {
              inverted:
                child.props['inverted'] !== undefined
                  ? child.props['inverted']
                  : inverted,
              size:
                child.props['size'] !== undefined ? child.props['size'] : size
            })
          ) : (
            <Content inverted={inverted} subtitle={subtitle}>
              {child}
            </Content>
          )
        )}
        {!!extra && !loading && (
          <Extra disabled={disabled} inverted={inverted}>
            {typeof extra === 'string' ? (
              extra
            ) : (
              <Icon extra inverted={inverted}>
                {createElement(extra)}
              </Icon>
            )}
          </Extra>
        )}
        {loading && (
          <Extra disabled={disabled} inverted={inverted}>
            <Icon extra inverted={inverted}>
              ...
            </Icon>
          </Extra>
        )}
      </div>
    )}
  />
);

export default MenuItem;
