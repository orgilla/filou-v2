import * as React from 'react';
import { FelaComponent } from '@filou/core';
import MaterialTabs from '@material-ui/core/Tabs';
import Tab, { TabProps } from './tab';

interface FilouTabsProps {
  value?: number;
  onChange?: ((event: React.ChangeEvent<{}>, value: any) => void) | undefined;
  children: React.ReactElement<TabProps>[];
}

const rule = ({ theme }: { theme: any }) => ({
  '& .indicator': {
    backgroundColor: theme.color
  },
  '& .tab': {
    fontWeight: 'normal',
    textTransform: 'none',
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize
  }
});

export class Tabs extends React.Component<FilouTabsProps> {
  static Tab = Tab;
  state: { value: any } = { value: 0 };
  onChange = (event: any, value: number) => {
    this.setState({ value });
  };
  render() {
    let content: React.ReactNode = null;
    const children = React.Children.map(this.props.children, (child, index) => {
      if (this.state.value === index) {
        content = child['props']['children'];
      }
      return React.cloneElement(child as any, {
        key: index,
        children: undefined,
        disableRipple: true,
        classes: {
          root: 'tab',
          selected: 'tab-selected'
        }
      });
    });
    return (
      <React.Fragment>
        <FelaComponent
          rule={rule}
          render={({ className }: { className: string }) => (
            <MaterialTabs
              value={this.state.value}
              onChange={this.onChange}
              {...this.props}
              classes={{
                root: className,
                indicator: 'indicator'
              }}
            >
              {children}
            </MaterialTabs>
          )}
        />
        {content}
      </React.Fragment>
    );
  }
}

export default Tabs;
