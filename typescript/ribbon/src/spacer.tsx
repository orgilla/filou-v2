import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';

const rule = () => ({
  flex: 1
});

export interface RibbonSpacerProps {}

export const RibbonSpacer: React.StatelessComponent<
  RibbonSpacerProps
> = ({}) => <FelaComponent rule={rule} />;
RibbonSpacer.displayName = 'RibbonSpacer';

export default RibbonSpacer;
