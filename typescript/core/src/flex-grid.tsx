import * as React from 'react';
import FelaComponent from './fela-component';

interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  verticalGutter?: number | string;
  gutter?: number;
  children?: React.ReactElement<IGridItem>[] | React.ReactElement<IGridItem>;
}

interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
  component?: React.ComponentType;
  size?: number;
  gridSize?: number;
  gutter?: number;
  background?: string;
}

const gridItemRule = ({
  calcWidth,
  gutter
}: {
  calcWidth: number;
  gutter: number;
}) => ({
  width: `${calcWidth - (calcWidth === 100 ? 0 : gutter)}%`,
  position: 'relative'
});
const GridItem: React.SFC<IGridItem> = ({
  children,
  component = 'div',
  className,
  gridSize = 12,
  size = 1,
  gutter = 0,
  ...rest
}) => {
  const calcWidth = (100 / gridSize) * size;
  return (
    <FelaComponent
      rule={gridItemRule}
      calcWidth={calcWidth}
      gutter={gutter}
      className={className}
      render={({ className }) =>
        React.createElement(
          component as React.ReactType,
          { ...rest, className },
          children
        )
      }
    />
  );
};

const rule = ({ verticalGutter }: { verticalGutter?: number | string }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  ifSmallDown: { display: 'block' },
  '> *': {
    ifSmallDown: { width: 'initial' },
    marginBottom: verticalGutter
  },
  '> *:not(:last-child)': {
    ifSmallDown: { marginBottom: '2em' }
  }
});
class Grid extends React.Component<IGrid> {
  static Item = GridItem;
  render() {
    const {
      children,
      size,
      gutter = 0,
      verticalGutter = 0,
      className,
      ...rest
    } = this.props;
    const arr = React.Children.toArray(children) as React.ReactElement<
      IGridItem
    >[];
    return (
      <FelaComponent
        rule={rule}
        className={className}
        render={({ className }) => (
          <div {...rest} className={className}>
            {arr.map(child =>
              React.cloneElement(child, {
                gridSize: size || arr.length,
                gutter
              })
            )}
          </div>
        )}
      />
    );
  }
}

export default Grid;
