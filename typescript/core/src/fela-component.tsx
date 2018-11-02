import * as React from "react";
import { FelaComponent as FelaCom } from "react-fela";

export type IFelaRule<T extends {} = {}> = T & {
  // '{}' can be replaced with 'any'
  theme: any;
};

interface IFelaComponent {
  className?: string;
  style?: any | ((theme: any) => any);
  rule?: (themeAndProps: any) => any;
  render?: React.ReactType;
  [x: string]: any;
}

const FelaComponent: React.SFC<IFelaComponent> = ({
  customClass,
  className,
  children,
  rule,
  style,
  render,
  ...rest
}) => {
  return (
    <FelaCom
      customClass={customClass || className}
      render={render}
      rule={rule}
      style={style}
      children={children}
      {...rest}
    />
  );
};

export default FelaComponent;
