import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';
import Field from './field';

export interface CalendarDayProps {
  active: boolean;
  today: boolean;
  bold: boolean;
  disabled: boolean;
  pointColor: string;
  color: string;
  backgroundColor: string;
  palette: string;
  points: number;
  placeholder: React.ReactNode;
}
export interface CalendarDayPropsInner extends CalendarDayProps {
  theme?: any;
}

const rule = ({
  theme,
  disabled,
  active,
  today,
  pointColor,
  color,
  backgroundColor,
  bold,
  palette
}: CalendarDayPropsInner) => ({
  
    centerX: true,
    top: 10,
    color:
      (!!active && theme.light2) ||
      (pointColor && getColor(theme, pointColor, palette)) ||
      (disabled && theme.dark5) ||
      theme.dark2,
    fontSize: '90%'
  }
});

const CalendarCaption: React.ComponentType<CalendarDayProps> = ({
  active,
  today,
  bold,
  disabled,
  pointColor,
  color,
  backgroundColor,
  palette,
  children,
  points,
  placeholder
}) => (
  <FelaComponent
    rule={rule}
    render={({ className }: { className: string }) => (
      <Field className={className} placeholder={placeholder}>
        {children}
        {!!points && (
          <div className="points">
            {Array.from(Array(points)).map((x, y) => (
              <span key={y}>&bull;</span>
            ))}
          </div>
        )}
      </Field>
    )}
  />
);

export default CalendarCaption;
