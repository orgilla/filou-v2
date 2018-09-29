import * as React from 'react';
//@ts-ignore
import { createComponent, FelaComponent } from 'react-fela';

export interface GridItemProps {
  gridSize?: number;
  offsetMini?: number;
  offsetSmall?: number;
  offsetMedium?: number;
  offsetLarge?: number;
  offsetHuge?: number;
  mini?: number | boolean;
  small?: number | boolean;
  medium?: number | boolean;
  large?: number | boolean;
  huge?: number | boolean;
  paddingMini?: number | boolean;
  paddingSmall?: number | boolean;
  paddingMedium?: number | boolean;
  paddingLarge?: number | boolean;
  paddingHuge?: number | boolean;
  height?: number;
  relative?: boolean;
  padding?: number | boolean;
}

// Force require gridSize internally since it is given by grid automatically
interface GridItemPropsInner extends GridItemProps {
  gridSize: number;
}

const rule = ({
  gridSize,
  offsetMini,
  offsetSmall,
  offsetMedium,
  offsetLarge,
  offsetHuge,
  mini,
  small,
  medium,
  large,
  huge,
  padding,
  paddingMini,
  paddingSmall,
  paddingMedium,
  paddingLarge,
  paddingHuge,
  height,
  relative
}: GridItemPropsInner) => ({
  float: 'left',
  padding,
  position: relative ? 'relative' : undefined,
  height,
  width: `${(100 / gridSize) * (typeof mini === 'number' ? mini : gridSize)}%`,
  marginLeft: `${(100 / gridSize) * (offsetMini || 0)}%`,
  ifMini: {
    display: (mini === 0 || mini === false) && 'none',
    padding: paddingMini
  },
  ifSmall: {
    display: (small === 0 || small === false) && 'none',
    padding: paddingSmall || paddingMini
  },
  ifSmallUp:
    typeof small === 'number'
      ? {
          width: `${(100 / gridSize) * small}%`,
          marginLeft: `${(100 / gridSize) * (offsetSmall || 0)}%`
        }
      : {},
  ifMedium: {
    display: (medium === 0 || medium === false) && 'none',
    padding: paddingMedium || paddingSmall || paddingMini
  },
  ifMediumUp:
    typeof medium === 'number'
      ? {
          width: `${(100 / gridSize) * medium}%`,
          marginLeft: `${(100 / gridSize) * (offsetMedium || 0)}%`
        }
      : {},
  ifLarge: {
    display: (large === 0 || large === false) && 'none',
    padding: paddingLarge || paddingMedium || paddingSmall || paddingMini
  },
  ifLargeUp:
    typeof large === 'number'
      ? {
          width: `${(100 / gridSize) * large}%`,
          marginLeft: `${(100 / gridSize) * (offsetLarge || 0)}%`
        }
      : {},
  ifHuge: {
    display: (huge === 0 || huge === false) && 'none',
    padding:
      paddingHuge ||
      paddingLarge ||
      paddingMedium ||
      paddingSmall ||
      paddingMini
  },
  ifHugeUp:
    typeof huge === 'number'
      ? {
          width: `${(100 / gridSize) * huge}%`,
          marginLeft: `${(100 / gridSize) * (offsetHuge || 0)}%`
        }
      : {}
});

const GridItem: React.ComponentType<GridItemProps> = ({
  gridSize = 12,
  offsetMini = 0,
  offsetSmall = 0,
  offsetMedium = 0,
  offsetLarge = 0,
  offsetHuge = 0,
  mini,
  small,
  medium,
  large,
  huge,
  paddingMini,
  paddingSmall,
  paddingMedium,
  paddingLarge,
  paddingHuge,
  height,
  relative,
  padding,
  ...rest
}) => (
  <FelaComponent
    rule={rule}
    gridSize={gridSize}
    offsetMini={offsetMini}
    offsetSmall={offsetSmall}
    offsetMedium={offsetMedium}
    offsetLarge={offsetLarge}
    offsetHuge={offsetHuge}
    mini={mini}
    small={small}
    medium={medium}
    large={large}
    huge={huge}
    paddingMini={paddingMini}
    paddingSmall={paddingSmall}
    paddingMedium={paddingMedium}
    paddingLarge={paddingLarge}
    paddingHuge={paddingHuge}
    height={height}
    relative={relative}
    padding={padding}
    render={({ className }: { className: string }) => (
      <div {...rest} className={className} />
    )}
  />
);

export default GridItem;
