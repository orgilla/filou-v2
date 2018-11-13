import * as React from 'react';
import { FelaComponent } from '@filou/core';

const rule = ({ theme }: { theme: any }) => ({
  '& h5': {
    marginBottom: theme.space1,
    marginTop: 10
  },
  '& label': {
    marginBottom: theme.space1,
    fontSize: '0.87055rem',
    color: theme.light
  },
  '& fieldset': {
    // boxShadow: '0 1px 0 #ebebec',
    border: 0,
    borderRadius: theme.borderRadius,
    paddingTop: theme.space1,
    paddingBottom: theme.space1,
    paddingLeft: 0,
    paddingRight: 0,
    '> legend': {
      fontSize: '0.87055rem',
      color: theme.light
    },
    '> label': {
      marginRight: theme.space1
    }
  },
  '> fieldset > input': {
    // boxShadow: '0 1px 0 #ebebec',
    borderRadius: theme.borderRadius,
    marginTop: 10,
    width: '100%',
    color: theme.color,
    border: '1px solid lightgray',
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5
  },
  '> fieldset > textarea': {
    // boxShadow: '0 1px 0 #ebebec',
    marginTop: 10,
    fontSize: theme.fontSize,
    color: theme.color,
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    width: '100%',
    border: '1px solid lightgray',
    marginBottom: 5
  },
  '> button': {
    backgroundColor: theme.light,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: theme.color,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    lineHeight: '18px',
    // boxShadow: '0 1px 0 #ebebec',
    border: 0,
    borderRadius: theme.borderRadius,
    onHover: {
      backgroundColor: theme.light1
    }
  },
  '> button:disabled': {
    opacity: 0.5
  }
});

const Form: React.SFC<React.HTMLAttributes<HTMLFormElement>> = ({
  children,
  ...rest
}) => (
  <FelaComponent
    rule={rule}
    render={({ className }) => (
      <form {...rest} className={className}>
        {children}
      </form>
    )}
  />
);

export default Form;
