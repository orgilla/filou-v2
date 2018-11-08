import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';

interface ISitemapItem {
  className?: string;
  label?: React.ReactNode;
  level?: number;
  children?:
    | React.ReactElement<ISitemapItem>
    | React.ReactElement<ISitemapItem>[];
}
interface ISitemapUl {
  className?: string;
  level?: number;
  children?:
    | React.ReactElement<ISitemapItem>
    | React.ReactElement<ISitemapItem>[];
}
const rule = ({ theme, level = 0 }: IFelaRule<ISitemapUl>) => ({
  listStyleType: 'none',
  paddingLeft: 10 * level
});

const ruleItem = ({
  theme,
  hasChildren
}: {
  theme: any;
  hasChildren: boolean;
}) => ({
  color: theme.light,
  marginTop: hasChildren ? theme.space3 : undefined,
  '> a': {
    display: 'block',
    marginBottom: hasChildren ? theme.space2 : undefined,
    fontSize: hasChildren ? theme.fontSizeSmall : theme.fontSize,
    color: theme.light,
    textDecoration: 'none',
    onHover: {
      color: theme.light1
    }
  },
  marginBottom: hasChildren ? theme.space2 : undefined
});

class Sitemap extends React.Component<ISitemapUl> {
  static Item: React.SFC<ISitemapItem> = ({
    children,
    label,
    level = 0,
    className
  }) => (
    <FelaComponent
      rule={ruleItem}
      className={className}
      hasChildren={!!React.Children.count(children)}
      render={({ className }) => (
        <li className={className}>
          {typeof label === 'string' ? (
            <a href="javascript:;">{label}</a>
          ) : (
            label
          )}
          {React.Children.count(children) ? (
            <Sitemap level={level + 1}>{children}</Sitemap>
          ) : null}
        </li>
      )}
    />
  );
  render() {
    const { children, level = 0, className } = this.props;
    const arr = React.Children.toArray(children) as React.ReactElement<
      ISitemapItem
    >[];
    return (
      <FelaComponent
        rule={rule}
        level={level}
        className={className}
        render={({ className }) => (
          <ul className={className}>
            {arr.map(child =>
              React.cloneElement(child, {
                level
              })
            )}
          </ul>
        )}
      />
    );
  }
}

export default Sitemap;
