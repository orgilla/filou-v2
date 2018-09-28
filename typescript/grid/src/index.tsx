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
type GridType = React.ComponentType<GridProps> & { Item?: any };

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

const Grid: GridType = ({
  size = 12,
  height,
  marginX,
  padding,
  children,
  ...rest
}) => (
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

Grid.Item = Item;

export default Grid;
