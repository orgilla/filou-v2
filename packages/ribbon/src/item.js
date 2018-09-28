import { createElement } from 'react';
import { createComponent } from 'react-fela';
import cn from 'classnames';

const Item = createComponent(
  ({ theme, marginLeft }) => ({
    paddingX: 8,
    color: theme.light,
    minWidth: 22,
    height: 22,
    alignItems: 'center',
    fontSize: 14,
    // fontWeight: 500,
    justifyContent: 'center',
    margin: '6 8',
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
  ({ active, className, children, onClick, to, icon: Icon, component: Link }) =>
    createElement(
      Link || 'a',
      {
        href: Link ? undefined : 'javascript:;',
        onClick,
        to,
        className: cn(className, active && 'active')
      },
      children
    ),
  ['active', 'onClick', 'to', 'icon', 'component']
);

export default Item;
