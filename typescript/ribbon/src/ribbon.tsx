import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';
import IsMaximized from './is-maximized';
import Actions from './actions';
import Tabs from './tabs';
import Title, { RibbonOSStyle } from './title';
import Spacer from './spacer';
import Item from './item';
import Foot from './foot';
import Divider from './divider';

interface RibbonProps {
  maximized?: boolean;
}

const rule = ({
  theme,
  isMaximized
}: {
  theme: any;
  isMaximized: boolean;
}) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
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
    const { children, maximized } = this.props;
    return (
      <IsMaximized>
        {({ isMaximized }) => (
          <FelaComponent
            rule={rule}
            isMaximized={maximized !== undefined ? maximized : isMaximized}
          >
            {children}
          </FelaComponent>
        )}
      </IsMaximized>
    );
  }
}

export default Ribbon;
