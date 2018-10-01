import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';
import MaterialTabs, { TabsProps } from '@material-ui/core/Tabs';
import MaterialTab, { TabProps } from '@material-ui/core/Tab';

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

class Tabs extends React.Component<TabsProps> {
  static Tab = MaterialTab;
  state: { value: any } = { value: 0 };
  onChange = (event: any, value: number) => {
    this.setState({ value });
  };
  render() {
    let content: React.ReactElement<any> | null = null;
    const children = React.Children.map(this.props.children, (child, index) => {
      if (this.state.value === index) {
        content = child['props'].children;
      }
      return React.cloneElement(child as React.ReactElement<TabProps>, {
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
