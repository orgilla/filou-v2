import * as React from 'react';
import { FelaComponent } from 'filou';
import Title from './title';
import { IMenuProps } from './menu';

export interface IMenuList extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  _ref?: (element: HTMLElement | null) => any;
  innerRef?: React.RefObject<HTMLDivElement>;
  ref?: React.RefObject<HTMLDivElement>;
  extra?: React.ReactNode | typeof React.Component;
  onClick?: any;
  title?: string;
  collapsed?: boolean;
}

const MenuList = ({
  children,
  className,
  _ref,
  innerRef,
  ref,
  extra,
  title,
  onClick,
  collapsed,
  inverted,
  size
}: IMenuList) => (
  <FelaComponent
    style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}
    className={className}
    ref={_ref || innerRef || ref}
    onClick={!title ? onClick : null}
  >
    {title && (
      <Title onClick={onClick} extra={extra} inverted={inverted}>
        {title}
      </Title>
    )}
    {React.Children.map(
      children,
      (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              index,
              collapsed,
              inverted:
                child.props['inverted'] !== undefined
                  ? child.props['inverted']
                  : inverted,
              size:
                child.props['size'] !== undefined ? child.props['size'] : size
            })
          : child
    )}
  </FelaComponent>
);

export default MenuList;
