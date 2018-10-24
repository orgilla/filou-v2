import * as React from 'react';
import { FelaComponent as FelaCom } from 'react-fela';

interface IFelaComponentRender {
  className: string;
}

export type IFelaRule<T extends {} = {}> = T & {
  // '{}' can be replaced with 'any'
  theme: any;
};

interface IFelaComponent {
  className?: string;
  style?: any | ((theme: any) => any);
  rule?: (themeAndProps: any) => any;
  render?: string | ((props: IFelaComponentRender) => React.ReactNode);
  [x: string]: any;
}

const FelaComponent: React.SFC<IFelaComponent> = ({
  customClass,
  className,
  ...rest
}) => <FelaCom customClass={customClass || className} {...rest} />;
FelaComponent.displayName = 'FelaComponent';

export default FelaComponent;
