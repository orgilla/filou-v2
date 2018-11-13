import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';
import underliner from '../../underliner';

interface IAnchorLink {
  to: string;
  active?: boolean;
}
const rule = ({ theme, active }: IFelaRule<IAnchorLink>) => ({
  marginLeft: 20,
  '@media (max-width: 991px)': {
    marginLeft: 10
  },
  color: theme.dark,
  textDecoration: 'none',
  ...underliner(theme, 16, active)
});

const Link: React.SFC<IAnchorLink> = ({ children, to, active }) => (
  <FelaComponent
    rule={rule}
    active={active}
    render={({ className }) => (
      <a
        onClick={e => {
          const element = document.getElementById(to.substr(1));
          if (element) {
            e.preventDefault();
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}
        href={to}
        className={className}
      >
        {children}
      </a>
    )}
  />
);

export default Link;
