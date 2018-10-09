import * as React from 'react';
import { FelaComponent, fade } from '@filou/core';
import { BigCalendarProps } from 'react-big-calendar';
export { default as DE } from './de';
export { default as StaticStyle } from './style';

const Calendar = require('react-big-calendar');

interface SchedulerProps extends BigCalendarProps {
  hideHeader?: boolean;
  timeslotWidth?: number;
  usePresence?: boolean;
}
interface SchedulerPropsTheme extends SchedulerProps {
  theme: any;
}
const rule = ({
  theme,
  hideHeader,
  defaultView = 'month',
  view = defaultView,
  timeslotWidth,
  resources = [],
  usePresence
}: SchedulerPropsTheme) => ({
  flex: 1,
  height: 'initial',
  '> div': {
    border: 0
  },
  '& .rbc-timeslot-highlight': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  },
  '& .rbc-header-gutter': {
    width: '75px!important'
  },
  '> .rbc-month-view': {
    border: 0,
    position: 'relative',
    onAfter: {
      content: '""',
      position: 'absolute',
      left: 0,
      height: '100%'
      // borderLeft: '1px solid #DDD'
    }
  },
  '> .rbc-time-view': {
    // marginTop: 2,
    border: 0,
    '> .rbc-time-header': {
      display: hideHeader ? 'none' : undefined,
      marginY: theme.space1,
      '> .rbc-row': {
        border: 0,
        '> .rbc-header': {
          userSelect: 'none',
          border: 0,
          fontWeight: 300
        }
      },
      '> .rbc-row:nth-child(1)': {
        display: view === 'day' && 'none',
        '& .rbc-header': {
          fontSize: theme.fontSizeH2
        }
      },
      '> .rbc-row:nth-child(2)': {
        '& .rbc-header': {
          fontSize: view === 'day' ? theme.fontSizeH2 : theme.fontSizeH5
        }
      },
      '> .rbc-row:nth-child(3)': {
        display: 'none'
      }
    },

    '> .rbc-time-content': {
      borderTopWidth: 1,
      alignItems: 'initial',
      '> .rbc-time-gutter': {
        width: 'initial!important',
        '> .rbc-timeslot-group': {
          borderLeft: 0,
          position: 'relative',
          width: timeslotWidth,
          ifSmallDown: {
            width: 50
          },
          '> .rbc-label': {
            userSelect: 'none',
            center: true,
            color: theme.dark3,
            fontSize: '80%'
          }
        }
      },
      '> .rbc-day-slot': {
        minWidth: view.indexOf('day') !== -1 ? 175 : 50,
        '> .rbc-timeslot-group': {
          border: 0,
          '> .rbc-time-slot': {
            borderBottom: '1px solid #DDD'
          },
          '> .rbc-time-slot:nth-child(2)': {
            borderBottom: '1px solid #DDD'
          }
        },
        '> .rbc-slot-selection': {
          width: '100%',
          '> *': {
            // center: true
            // fontSize: theme.fontSizeH5
          }
        }
      },
      [`> .rbc-day-slot:nth-child(${resources.length}n + 2)`]: {
        borderRight: view === 'work_week' && '2px solid #DDD'
      }
    }
  },
  '> .rbc-agenda-view': {
    '& table': {
      border: 0,
      '& .rbc-header': {
        fontSize: theme.fontSizeH5,
        fontWeight: 300
      },
      '& .rbc-agenda-time-cell': {
        textTransform: 'none'
      }
    },
    '> .rbc-agenda-content': {
      borderBottom: '1px solid #ddd'
    }
  },
  '> .rbc-toolbar': {
    display: 'none',
    '> .rbc-toolbar-label': {
      color: theme.color,
      fontWeight: 300,
      fontSize: theme.fontSizeH1
    },
    '> .rbc-btn-group': {
      padding: theme.space2,
      '> button': {
        borderRadius: theme.borderRadius,
        fontSize: '80%',
        color: theme.dark2
      }
    }
  },
  '& .rbc-today': {
    backgroundColor: 'transparent'
  },
  '& .rbc-events-container': {
    width: '100%',
    pointerEvents: 'none' // drag/drop won't work else :(
  },
  '& .rbc-event': {
    border: 0,
    borderRadius: theme.borderRadius,
    borderBottom: '1px solid white',
    marginTop: -1,
    boxShadow: `inset 0 0 0 1px ${fade(theme.color, 20)}, inset 0 -1px 0 ${fade(
      theme.color,
      10
    )}`,
    backgroundColor: fade(theme.color, 10),
    backgroundImage:
      'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))',
    color: theme.dark,
    fontWeight: 500,
    width: usePresence ? 'calc(100% - 24px) !important' : '100% !important',
    left: 'initial !important',
    right: '0 !important',
    '&.rbc-event-present': usePresence && {
      zIndex: 1,
      width: '18px !important',
      left: '0 !important',
      right: 'initial !important',
      padding: 0,
      '> .rbc-event-label': {
        display: 'none'
      },
      '> .rbc-event-content': {
        transform: 'rotate(180deg)',
        writingMode: 'vertical-rl',
        fontSize: '80%',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        marginLeft: '3px !important'
      }
    },
    '&.right': {
      width: '3px !important',
      zIndex: 2
    },
    '> .rbc-event-label': {
      display: resources.length > 2 && view === 'work_week' && 'none'
    },
    '> .rbc-event-content': {
      display: resources.length > 2 && view === 'work_week' && 'none'
    }
  },
  ...(theme.colors || []).reduce(
    (state: any, color: string, i: number) => ({
      ...state,
      [`& .rbc-event-color-${i}`]: {
        border: `1px solid ${color[theme.palette]}`,
        background: color[theme.palette],
        borderBottom: '1px solid white'
      }
    }),
    {}
  )
});

const Scheduler: React.StatelessComponent<SchedulerProps> = ({
  hideHeader,
  defaultView = 'month',
  view = defaultView,
  timeslotWidth,
  resources = [],
  usePresence,
  ...rest
}) => (
  <FelaComponent
    rule={rule}
    hideHeader={hideHeader}
    defaultView={defaultView}
    view={view}
    timeslotWidth={timeslotWidth}
    resources={resources}
    usePresence={usePresence}
    render={({ className }) => (
      <Calendar
        selectable
        {...rest}
        className={className}
        view={view}
        defaultView={defaultView}
        resources={resources}
      />
    )}
  />
);

export default Scheduler;
