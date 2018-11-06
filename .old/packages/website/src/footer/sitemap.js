import React from 'react';
import { ThemeProvider, withTheme } from 'react-fela';
import Item from '../header/item';
import Ul from '../ul';

const MenuItem = ({ slug, title, children }) => {
  const inner = <Item flex={false} to={slug}>{title}</Item>;
  const childs = children ? (
    <Ul>
      {children
        .filter(x => x.slug.indexOf('#') === -1)
        .map((item, i) => (
          <MenuItem {...item} key={item.slug || item.title || i} />
        ))}
    </Ul>
  ) : null;
  return (
    <li>
      {inner}
      {childs}
    </li>
  );
};

const Sitemap = ({
  sitemap = [],
  className,
  theme,
  inverted = theme.inverted,
  fontSize = theme.fontSize,
  fontWeight = theme.fontWeight,
  color = theme.dark
}) => (
  <ThemeProvider
    theme={{
      inverted,
      fontSize: theme[fontSize] || fontSize || theme.fontSize,
      fontWeight: theme[fontWeight] || fontWeight || theme.fontWeight,
      linkColor: theme[color] || color || theme.color
    }}
  >
    <div className={className}>
      <Ul>
        {(sitemap || []).map((item, i) => (
          <MenuItem {...item} key={item.slug || item.title || i} />
        ))}
      </Ul>
    </div>
  </ThemeProvider>
);

export default withTheme(Sitemap);
