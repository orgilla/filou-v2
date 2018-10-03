import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';

interface FelaComponentRenderProps {
  className?: string;
}
interface FelaComponentProps {
  style?: (theme: any) => any | any;
  rule?: (themeAndProps: any) => any;
  render?: (props: FelaComponentRenderProps) => React.ReactNode;
}

const FilouFelaComponent: React.SFC<FelaComponentProps> = props => (
  <FelaComponent {...props} />
);
FilouFelaComponent.displayName = 'FelaComponent';

export default FilouFelaComponent;
