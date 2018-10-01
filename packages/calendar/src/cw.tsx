import * as React from 'react';
//@ts-ignore
import { createComponent, FelaComponent } from 'react-fela';
import Header from './header';

export interface CalendarCWProps {}

const rule = ({ theme }: { theme: any }) => ({
  borderRight: `1px solid ${theme.dark4}`,
  borderRadius: 0
});

const CalendarCW: React.ComponentType<CalendarCWProps> = props => (
  <FelaComponent
    rule={rule}
    render={({ className }: { className: string }) => (
      <Header {...props} className={className} />
    )}
  />
);

export default CalendarCW;
