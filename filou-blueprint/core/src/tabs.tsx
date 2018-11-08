import * as React from 'react';
import { FelaComponent } from '@filou/core';
import { Tabs as BPTabs, Tab as BPTab, ITabsProps } from '@blueprintjs/core';

const rule = ({ theme }: { theme: any }) => ({
  '& .bp3-tab[aria-selected="true"]': {
    color: theme.color
  },
  '& .bp3-tab:not([aria-disabled="true"]):hover': {
    color: theme.color
  },
  '& .bp3-tab-indicator-wrapper .bp3-tab-indicator': {
    backgroundColor: theme.color
  }
});

export class Tabs extends React.Component<ITabsProps> {
  static Tab = BPTab;
  render() {
    return (
      <FelaComponent
        rule={rule}
        render={({ className }: { className: string }) => (
          <BPTabs {...this.props} className={className} />
        )}
      />
    );
  }
}

export default Tabs;
