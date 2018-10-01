import * as React from 'react';
//@ts-ignore
import { createComponent, FelaComponent } from 'react-fela';

export interface CalendarContainerProps {}

const rule = ({ theme }: { theme: any }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  fontSize: '90%',
  marginTop: theme.space1,
  minWidth: 200,
  '> *': {
    width: `${100 / 7}%`,
    textAlign: 'center'
  }
});

const CalendarContainer: React.ComponentType<
  CalendarContainerProps
> = props => (
  <FelaComponent
    rule={rule}
    render={({ className }: { className: string }) => (
      <div {...props} className={className} />
    )}
  />
);

export default CalendarContainer;
