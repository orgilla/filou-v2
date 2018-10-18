import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';

interface FelaComponentRenderProps {
  className?: string;
}

export type IFelaRule<T extends {} = {}> = T & {
  // '{}' can be replaced with 'any'
  theme: any;
};

interface FelaComponentProps {
  className?: string;
  style?: any | ((theme: any) => any);
  rule?: (themeAndProps: any) => any;
  render?: string | ((props: FelaComponentRenderProps) => React.ReactNode);
  [x: string]: any;
}

const FilouFelaComponent: React.SFC<FelaComponentProps> = ({
  customClass,
  className,
  ...rest
}) => <FelaComponent customClass={customClass || className} {...rest} />;
FilouFelaComponent.displayName = 'FelaComponent';

export default FilouFelaComponent;
