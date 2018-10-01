import * as React from 'react';
//@ts-ignore
import { createComponent, FelaComponent } from 'react-fela';
import Field from './field';

export interface CalendarHeaderProps {}

const rule = ({ theme }: { theme: any }) => ({
  color: theme.dark3,
  fontSize: '85%'
});

const CalendarHeader: React.ComponentType<CalendarHeaderProps> = props => (
  <FelaComponent
    rule={rule}
    render={({ className }: { className: string }) => (
      <Field isHeader {...props} className={className} />
    )}
  />
);

export default CalendarHeader;
