import * as React from 'react';
import { FelaComponent } from '@filou/core';
import Title from './title';

export interface MenuListProps {
  extra?: React.ReactNode;
  title?: React.ReactNode;
  collapsed?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void);
}

interface InnerProps extends MenuListProps {
  theme: any;
}

const rule = ({ theme }: InnerProps) => ({
  width: '100%',
  height: 40,
  margin: 0,
  paddingX: theme.space3,
  paddingY: theme.space2,
  WebkitTapHighlightColor: theme.light,
  boxShadow: 'none',
  outline: 0,
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  borderRadius: theme.borderRadius,
  color: theme.inverted ? theme.light2 : theme.dark2,
  // backgroundColor: 'transparent',
  // border: 0,
  border: `1px solid ${theme.dark4}`,
  transition: 'box-shadow .1s ease,border-color .1s ease',
  '::placeholder': {
    color: theme.inverted ? theme.light4 : theme.dark4
  }
});

const MenuList: React.ComponentType<MenuListProps> = ({
  children,
  extra,
  title,
  onClick,
  collapsed
}) => (
  <FelaComponent
    rule={rule}
    render={({ className }) => (
      <div className={className} onClick={!title ? onClick : undefined}>
        {title && (
          <Title collapsed={collapsed} onClick={onClick} extra={extra}>
            {title}
          </Title>
        )}
        {React.Children.map(
          children,
          child =>
            child && typeof child === 'string' && typeof child === 'number'
              ? React.cloneElement(child, { collapsed })
              : child
        )}{' '}
      </div>
    )}
  />
);

export default MenuList;

/*
const List = ({
  children,
  className,
  _ref,
  innerRef,
  ref,
  style,
  extra,
  title,
  onClick,
  collapsed
}) => (
  <div
    className={className}
    ref={_ref || innerRef || ref}
    style={style}
    onClick={!title ? onClick : null}
  >
  </div>
);
*/
