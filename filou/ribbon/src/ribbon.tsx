import * as React from 'react';
import { FelaComponent, isElectron } from '@filou/core';
import IsMaximized from './is-maximized';
import Actions from './actions';
import Tabs from './tabs';
import Title, { RibbonOSStyle } from './title';
import Spacer from './spacer';
import Item from './item';
import Foot from './foot';
import Divider from './divider';
import DarkProvider from './context';

interface RibbonProps {
  maximized?: boolean;
  width?: string;
  height?: string;
  dark?: boolean;
}

const rule = ({
  theme,
  isMaximized,
  width = '100vw',
  height = '100vh'
}: {
  theme: any;
  isMaximized: boolean;
  width: string;
  height: string;
}) => ({
  fontFamily: theme.fontFamily,
  display: 'flex',
  width,
  height,
  flex: 1,
  flexDirection: 'column',
  borderLeft: isMaximized ? undefined : `1px solid ${theme.color}`,
  borderRight: isMaximized ? undefined : `1px solid ${theme.color}`,
  borderBottom: isMaximized ? undefined : `1px solid ${theme.color}`
});

export class Ribbon extends React.Component<RibbonProps> {
  static OSStyle = RibbonOSStyle;
  static Spacer = Spacer;
  static Space = Spacer;
  static Actions = Actions;
  static Tabs = Tabs;
  static Item = Item;
  static Title = Title;
  static Foot = Foot;
  static Divider = Divider;
  static displayName = 'Ribbon';

  render() {
    const { children, maximized, width, height, dark = false } = this.props;
    return (
      <DarkProvider dark={dark}>
        <IsMaximized>
          {({ isMaximized }) => (
            <FelaComponent
              rule={rule}
              width={width}
              height={height}
              isMaximized={
                !isElectron ||
                (maximized !== undefined ? maximized : isMaximized)
              }
            >
              {children}
            </FelaComponent>
          )}
        </IsMaximized>
      </DarkProvider>
    );
  }
}

export default Ribbon;
