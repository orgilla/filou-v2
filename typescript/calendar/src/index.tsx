import * as React from 'react';
import { FelaStatic, FelaComponent, fade } from '@filou/core';
import DayPicker, {
  DayPickerProps,
  NavbarElementProps
} from 'react-day-picker';
import DE from './de';
// import Left from './icons/left';
// import Right from './icons/right';

const css = `
  .DayPicker {
    display: inline-block;
    font-size: 1rem;
  }
  
  .DayPicker-wrapper {
    position: relative;
  
    flex-direction: row;
    padding-bottom: 1em;
  
    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .DayPicker-Month {
    display: table;
    margin: 0 1em;
    margin-top: 1em;
    border-spacing: 0;
    border-collapse: collapse;
  
    user-select: none;
  }
  
  .DayPicker-NavBar {
  }
  
  .DayPicker-NavButton {
    position: absolute;
    top: 1em;
    right: 1.5em;
    left: auto;
  
    display: inline-block;
    margin-top: 2px;
    width: 1.25em;
    height: 1.25em;
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    color: #8B9898;
    cursor: pointer;
  }
  
  .DayPicker-NavButton:hover {
    opacity: 0.8;
  }
  
  .DayPicker-NavButton--prev {
    margin-right: 1.5em;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
  }
  
  .DayPicker-NavButton--next {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
  }
  
  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }
  
  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: 0.5em;
    padding: 0 0.5em;
    text-align: left;
  }
  
  .DayPicker-Caption > div {
    // font-weight: 500;
    // font-size: 1.15em;
  }
  
  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1em;
  }
  
  .DayPicker-WeekdaysRow {
    display: table-row;
  }
  
  .DayPicker-Weekday {
    display: table-cell;
    padding: 0.5em;
    color: #8B9898;
    text-align: center;
    font-size: 0.875em;
  }
  
  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }
  
  .DayPicker-Body {
    display: table-row-group;
  }
  
  .DayPicker-Week {
    display: table-row;
  }
  
  .DayPicker-Day {
    display: table-cell;
    padding: 0.5em;
    // border-radius: 50%;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
  }
  
  .DayPicker-WeekNumber {
    display: table-cell;
    padding: 0.5em;
    min-width: 1em;
    border-right: 1px solid #EAECEC;
    color: #8B9898;
    vertical-align: middle;
    text-align: right;
    font-size: 0.75em;
    cursor: pointer;
  }
  
  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }
  
  .DayPicker-Footer {
    padding-top: 0.5em;
  }
  
  .DayPicker-TodayButton {
    border: none;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    font-size: 0.875em;
    cursor: pointer;
  }
  
  /* Default modifiers */
  
  .DayPicker-Day--today {
    color: #D0021B;
    font-weight: 700;
  }
  
  .DayPicker-Day--outside {
    color: #8B9898;
    cursor: default;
  }
  
  .DayPicker-Day--disabled {
    color: #DCE0E0;
    cursor: default;
    /* background-color: #eff1f1; */
  }
  
  /* Example modifiers */
  
  .DayPicker-Day--sunday {
    background-color: #F7F8F8;
  }
  
  .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #DCE0E0;
  }
  
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    color: #F0F8FF;
  }
  
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #51A0FA;
  }
  
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #F0F8FF;
  }
  
  /* DayPickerInput */
  
  .DayPickerInput {
    display: inline-block;
  }
  
  .DayPickerInput-OverlayWrapper {
    position: relative;
  }
  
  .DayPickerInput-Overlay {
    position: absolute;
    left: 0;
    z-index: 1;
  
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
`;

const rule = ({
  theme,
  width = 320,
  selectedDays = []
}: {
  theme: any;
  width: number | string;
  selectedDays: any;
}) => ({
  fontFamily: theme.fontFamily,
  width,
  '& .DayPicker-Day--busy': {
    fontWeight: 'bold'
  },
  '& .DayPicker-Day--monday': {
    color: theme.dark4
  },
  '& .DayPicker-Day--today': {
    color: theme.color
  },
  '& .DayPicker-TodayButton': {
    color: theme.color
  },
  '& .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside)': {
    backgroundColor:
      Array.isArray(selectedDays) && selectedDays.length > 1
        ? fade(theme.color, 10)
        : theme.color,
    color:
      Array.isArray(selectedDays) && selectedDays.length > 1
        ? theme.dark
        : theme.light
  }
});

const formRule = ({ theme }: { theme: any }) => ({
  display: 'flex',
  paddingTop: 10,
  paddingLeft: 10,
  paddingRight: 10,
  marginBottom: 0
});

interface FilouDayPickerProps extends DayPickerProps {
  width?: number | string;
}

interface FilouDayPickerNavProps extends NavbarElementProps {
  onChange: (month: Date) => void;
  months: String[];
}

const Navbar: React.StatelessComponent<FilouDayPickerNavProps> = ({
  onPreviousClick,
  onNextClick,
  className,
  month,
  months,
  onChange
}) => {
  const years = [];
  const currentYear = new Date().getFullYear();
  const fromMonth = new Date(currentYear - 5, 0);
  const toMonth = new Date(currentYear + 5, 11);
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  return (
    <FelaComponent className={className} render="form" rule={formRule}>
      <select
        name="month"
        onChange={e =>
          e.target.form &&
          onChange(
            new Date(e.target.form.year.value, e.target.form.month.value)
          )
        }
        value={month.getMonth()}
      >
        {months.map((month, i) => (
          <option key={`${month}`} value={i}>
            {month}
          </option>
        ))}
      </select>
      &nbsp;
      <select
        name="year"
        onChange={e =>
          e.target.form &&
          onChange(
            new Date(e.target.form.year.value, e.target.form.month.value)
          )
        }
        value={month.getFullYear()}
      >
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <span style={{ flex: 1 }} />
      {/*<Button onClick={() => onPreviousClick()}>
        <Left size={12} />
      </Button>
      <Button onClick={() => onNextClick()}>
        <Right size={12} />
      </Button>*/}
    </FelaComponent>
  );
};

export class Calendar extends React.Component<FilouDayPickerProps> {
  state = { month: new Date() };
  handleYearMonthChange = (month: Date) => {
    const { onMonthChange } = this.props;
    if (onMonthChange) {
      onMonthChange(month);
    } else {
      this.setState({ month });
    }
  };
  render() {
    const { width, selectedDays } = this.props;
    return (
      <FelaStatic css={css}>
        <FelaComponent
          rule={rule}
          width={width}
          selectedDays={selectedDays}
          render={({ className }) => (
            <DayPicker
              month={this.state.month}
              navbarElement={
                <Navbar
                  {...DE as any}
                  {...{} as any}
                  onChange={this.handleYearMonthChange}
                />
              }
              showWeekNumbers
              numberOfMonths={4}
              showOutsideDays
              firstDayOfWeek={1}
              {...DE as any}
              {...this.props}
              onMonthChange={this.handleYearMonthChange}
              selectedDays={selectedDays}
              className={className}
            />
          )}
        />
      </FelaStatic>
    );
  }
}

export default Calendar;
