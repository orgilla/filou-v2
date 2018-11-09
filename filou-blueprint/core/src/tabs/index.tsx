import * as React from 'react';
import { css, cx, useTheme } from '@filou/core';
import { Tabs as BPTabs, Tab as BPTab, ITabsProps } from '@blueprintjs/core';

function Tabs({ className, ...props }: ITabsProps) {
  const color = useTheme<string>('color');
  return (
    <BPTabs
      {...props}
      className={cx(
        css({
          '& .bp3-tab[aria-selected="true"]': {
            color
          },
          '& .bp3-tab:not([aria-disabled="true"]):hover': {
            color
          },
          '& .bp3-tab-indicator-wrapper .bp3-tab-indicator': {
            backgroundColor: color
          }
        }),
        className
      )}
    />
  );
}
Tabs.Tab = BPTab;

export default Tabs;
