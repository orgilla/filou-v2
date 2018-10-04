import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';

interface FelaComponentRenderProps {
  className?: string;
}
interface FelaComponentProps {
  style?: any | ((theme: any) => any);
  rule?: (themeAndProps: any) => any;
  render?: string | ((props: FelaComponentRenderProps) => React.ReactNode);
  [x: string]: any;
}

const FilouFelaComponent: React.SFC<FelaComponentProps> = props => (
  <FelaComponent {...props} />
);
FilouFelaComponent.displayName = 'FelaComponent';

export default FilouFelaComponent;
