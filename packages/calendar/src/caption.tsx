import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';
import Field from './field';

export interface CalendarCaptionProps {}

const rule = ({ theme }: { theme: any }) => ({
  color: theme.dark3,
  fontSize: '85%',
  borderRight: `1px solid ${theme.dark4}`,
  borderRadius: 0
});

const CalendarCaption: React.ComponentType<CalendarCaptionProps> = props => (
  <FelaComponent
    rule={rule}
    render={({ className }: { className: string }) => (
      <Field isCaption {...props} className={className} />
    )}
  />
);

export default CalendarCaption;
