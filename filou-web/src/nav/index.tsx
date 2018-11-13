import * as React from 'react';
import { FelaComponent, Container } from '@filou/core';
import ScrollListener from './scroll-listener';
import Spacer from './spacer';
import Link from './anchor-link';

const NavBarNav: React.StatelessComponent = ({ children }) => (
  <FelaComponent
    style={{
      display: 'flex',
      '@media (max-width: 767px)': {
        display: 'none'
      }
    }}
    render={({ className }) => <div className={className}>{children}</div>}
  />
);

interface INavBar {
  logo: React.ComponentType<any>;
  nav: Array<string>;
}
const NavBar: React.SFC<INavBar> = ({ logo: Logo, nav = [] }) => (
  <ScrollListener
    render={(top, activeId) => (
      <>
        <FelaComponent
          style={{
            height: 20
          }}
        />
        <FelaComponent
          rule={({ theme }) => ({
            height: 50,
            backgroundColor: 'white',
            position: 'sticky',
            zIndex: 1,
            top: 0,
            left: 0,
            width: '100%',
            marginTop: 20,
            marginBottom: 20,
            boxShadow: top > 50 + 28 ? theme.boxShadow : undefined
          })}
        >
          <FelaComponent
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
            render={({ className }) => (
              <Container className={className}>
                <Logo key="logo" scale={top > 50 ? 0.8 : 1} />
                <Spacer />
                <NavBarNav>
                  {nav.map(x => (
                    <Link
                      key={x}
                      to={`#${x.toLowerCase()}`}
                      active={activeId === x.toLowerCase()}
                    >
                      {x}
                    </Link>
                  ))}
                </NavBarNav>
              </Container>
            )}
          />
        </FelaComponent>
        <FelaComponent
          style={{
            height: 20
          }}
        />
      </>
    )}
  />
);

export default NavBar;
