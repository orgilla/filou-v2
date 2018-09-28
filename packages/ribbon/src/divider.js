import { createElement } from 'react';
import { createComponent } from 'react-fela';
import cn from 'classnames';

const Item = createComponent(
  ({ theme, marginLeft, color, dark }) => ({
    color: theme.light,
    alignItems: 'center',
    fontSize: 14,
    // fontWeight: 500,
    justifyContent: 'center',
    margin: '6 8',
    borderRight: `1px solid ${
      color ? theme[color] : dark ? theme.dark4 : theme.light4
    }`,
    marginLeft: marginLeft ? `${marginLeft}!important` : undefined,
    outline: 0,
    // textTransform: 'uppercase',
    textDecoration: 'none',
    // transition: .3s cubic-bezier(.25,.8,.5,1),color 1ms;
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    userSelect: 'none'
  }),
  ({ active, className, children }) =>
    createElement(
      'b',
      {
        className: cn(className, active && 'active')
      },
      children
    )
);

export default Item;
