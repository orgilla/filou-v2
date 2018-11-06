import * as React from 'react';
import MaterialTab, {
  TabProps as MaterialTabProps
} from '@material-ui/core/Tab';

export interface TabProps extends MaterialTabProps {}

export const TabsTab: React.StatelessComponent<TabProps> = props => (
  <MaterialTab {...props} />
);
TabsTab.displayName = 'TabsTab';
export default TabsTab;
