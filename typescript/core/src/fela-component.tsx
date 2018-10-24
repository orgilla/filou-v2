import * as React from 'react';
import { FelaComponent as FelaCom } from 'react-fela';

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

class FelaComponent extends React.Component<IFelaComponent> {
  /*renderer = ({ className }: { className: string }) => {
    const { render, children } = this.props;
    const Element = render || 'div';
    return <Element className={className}>{children}</Element>;
  };*/
  render() {
    const {
      customClass,
      className,
      children,
      rule,
      style,
      render,
      ...rest
    } = this.props;
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
  }
}

export default FelaComponent;
