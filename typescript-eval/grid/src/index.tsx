import * as React from 'react';
import Item from './item';
//@ts-ignore
import { createComponent, FelaComponent } from 'react-fela';

interface GridProps {
  size?: number;
  height?: number | string;
  marginX?: number | string | boolean;
  padding?: number | string;
}

const rule = ({
  theme,
  height,
  marginX
}: {
  theme: any;
  height?: number | string;
  marginX?: number | string | boolean;
}) => ({
  height,
  minWidth: '100%',
  marginX: marginX || (marginX !== false ? `-${theme.space2}` : null),
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0
  }
});

export default class Grid extends React.Component<GridProps> {
  static Item = Item;
  render() {
    const {
      size = 12,
      height,
      marginX,
      padding,
      children,
      ...rest
    } = this.props;
    return (
      <FelaComponent
        rule={rule}
        height={height}
        marginX={marginX}
        padding={padding}
        render={({ className }: { className: string }) => (
          <div {...rest} className={className}>
            {React.Children.map(
              children,
              child =>
                child && typeof child !== 'string' && typeof child !== 'number'
                  ? React.cloneElement(child, { gridSize: size })
                  : child
            )}
          </div>
        )}
      />
    );
  }
}
