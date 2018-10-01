import * as React from 'react';
//@ts-ignore
import { createComponent, FelaComponent } from 'react-fela';

export interface CalendarSelectProps {}

const rule = ({ theme }: { theme: any }) => ({
  border: 0,
  fontWeight: 600,
  // color: theme.dark2,
  textAlign: 'center',
  marginY: theme.space1,
  position: 'relative'
});

const CalendarSelect: React.ComponentType<CalendarSelectProps> = props => (
  <FelaComponent
    rule={rule}
    render={({ className }: { className: string }) => (
      <select {...props} className={className} />
    )}
  />
);

export default CalendarSelect;
