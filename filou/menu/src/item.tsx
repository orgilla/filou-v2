import * as React from 'react';
import {
  cx,
  css,
  ElementType,
  createElement,
  getColor,
  useTheme
} from '@filou/core';
import { IMenuProps } from './menu';
import Content from './content';
import Icon from './icon';
import Extra from './extra';
const tinycolor = require('tinycolor2');

export interface IMenuItem extends IMenuProps {
  subtitle?: string;
  icon?: ElementType;
  extra?: ElementType;
  _ref?: (element: HTMLElement | null) => any;
  innerRef?: React.RefObject<HTMLDivElement>;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: any;
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
}

const rule = ({
  active,
  onClick,
  color,
  palette,
  disabled,
  collapsed,
  size,
  inverted
}: IMenuItem) => {
  const bgColor = getColor(color, palette);
  const alpha = tinycolor(bgColor).getAlpha();
  const hoverColor = !bgColor
    ? inverted
      ? useTheme('light4')
      : useTheme('dark4')
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

  console.log(size === 'small' ? 2 : useTheme('space1'));

  return css({
    width: collapsed ? height : 'auto',
    height,
    flexShrink: 0,
    marginTop: size === 'small' ? 2 : useTheme('space1'),
    marginBottom: size === 'small' ? 2 : useTheme('space1'),
    paddingLeft: useTheme('space1'),
    paddingRight: useTheme('space2'),
    display: 'flex',
    alignItems: 'center',
    alignSelf: collapsed ? 'center' : 'initial',
    justifyContent: collapsed ? 'center' : 'initial',
    cursor: !!onClick && !disabled ? 'pointer' : 'initial',
    borderRadius: collapsed ? '50%' : useTheme('borderRadius'),
    opacity: disabled ? 0.67 : 1,
    backgroundColor:
      (!!bgColor && !!active && hoverColor) ||
      bgColor ||
      (!!active && useTheme('dark4')),
    color: (inverted ? useTheme('light') : useTheme('dark')) + '',
    userSelect: 'none',
    onHover: {
      backgroundColor: !!onClick && !disabled && hoverColor
    },
    '> *': collapsed && {
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      '&:not(:first-child)': {
        display: 'none'
      }
    }
  });
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
  active,
  color,
  palette,
  collapsed
}: IMenuItem) => (
  <div
    className={cx(
      rule({
        active,
        onClick,
        color,
        palette,
        disabled,
        collapsed,
        size,
        inverted
      }),
      className
    )}
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
          size: child.props['size'] !== undefined ? child.props['size'] : size
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
);

export default MenuItem;
