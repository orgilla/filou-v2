import * as React from 'react';
import MaterialTabs, {
  TabsProps as MaterialTabsProps
} from '@material-ui/core/Tabs';
import MaterialTab from '@material-ui/core/Tab';

interface TabsProps extends MaterialTabsProps {}

class Tabs extends React.Component<TabsProps> {
  static Tab = MaterialTab;
  render() {
    return <MaterialTabs {...this.props} />;
  }
}

export default Tabs;
