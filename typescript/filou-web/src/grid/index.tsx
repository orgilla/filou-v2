import * as React from 'react';
import { FelaComponent, Container, IFelaRule, FlexGrid } from '@filou/core';
import cloudinary from '../cloudinary';

const Reveal = require('react-reveal/Reveal');

interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  size?: number;
  padding?: number | string;
  title?: string;
  subtitle?: string;
  background?: 'banner' | 'color' | 'light' | 'dark' | 'dark5';
  elements?: React.ReactNode;
  verticalGutter?: number;
  gutter?: number;
  align?: 'left' | 'right' | 'center';
  alignText?: 'left' | 'right' | 'center';
  alignTitle?: 'left' | 'right' | 'center';
}

interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  img?: string;
  size?: number;
  gridSize?: number;
  render?: React.ReactType;
  gutter?: number;
  background?: string;
  children?: React.ReactElement<IGridItem>[] | React.ReactElement<IGridItem>;
}

const ruleItem = ({ theme, subtitle, background }: IFelaRule<IGridItem>) => ({
  // color: theme.dark,
  color: 'inherit',
  textDecoration: 'none',
  backgroundColor: background,
  '> h3': {
    paddingX: background ? 5 : 0,
    margin: 0,
    marginBottom: subtitle ? 5 : 20,
    fontWeight: 300
  },
  '> h4': {
    paddingX: background ? 5 : 0,
    margin: 0,
    marginBottom: 20,
    opacity: 0.8,
    fontWeight: 300
  }
});

const ruleGrid = ({
  theme,
  isDark,
  background,
  padding,
  alignTitle,
  align,
  subtitle,
  alignText
}: any) => ({
  backgroundColor: theme[background] || undefined,
  padding,
  position: 'relative',
  overflow: 'hidden',
  color: isDark ? theme.light : theme.dark,
  transition: `all 500ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
  extend: [
    {
      condition: background === 'banner',
      style: {
        background: `url(${cloudinary('/banner.jpg')}) no-repeat center center`,
        backgroundSize: 'cover!important'
      }
    }
  ],
  '& [data-scroll-anchor]': {
    position: 'absolute',
    top: -45
  },
  '> div > div > h2': {
    fontSize: '3em',
    textAlign:
      (alignTitle || align) !== 'left' ? alignTitle || align : undefined,
    color: isDark ? theme.light : undefined,
    margin: 0,
    marginBottom: subtitle ? 0 : 20,
    fontWeight: 300
  },
  '> div > div > h3': {
    fontSize: '2em',
    textAlign:
      (alignTitle || align) !== 'left' ? alignTitle || align : undefined,
    color: isDark ? theme.light : theme.dark,
    opacity: 0.8,
    margin: 0,
    marginBottom: 40,
    fontWeight: 300
  },
  '> div > div > div': {
    textAlign: (alignText || align) !== 'left' ? alignText || align : undefined
  }
});

class Grid extends React.Component<IGrid> {
  static Item: React.StatelessComponent<IGridItem> = ({
    title = '',
    subtitle = '',
    children,
    img = '',
    size,
    gridSize,
    render,
    gutter,
    background = '',
    className,
    ...rest
  }) => {
    const childs = (
      <>
        {img && <img width="100%" height="auto" src={img} />}
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        {children}
      </>
    );
    const Element = render || 'div';
    return (
      <FelaComponent
        rule={ruleItem}
        background={background}
        subtitle={subtitle}
        className={className}
        render={({ className }) => (
          <FlexGrid.Item
            gridSize={gridSize}
            gutter={gutter}
            size={size}
            render={({ className }) => (
              <Element className={className}>{childs}</Element>
            )}
            className={className}
            {...rest}
          />
        )}
      />
    );
  };
  render() {
    const {
      children,
      size,
      padding = '3em 0',
      title = '',
      subtitle = '',
      background = '',
      id = '',
      elements,
      verticalGutter = 0,
      alignTitle,
      alignText,
      align,
      className,
      ...rest
    } = this.props;
    const isDark = ['banner', 'color', 'dark'].indexOf(background) !== -1;
    return (
      <Reveal effect="fadeInUp">
        <FelaComponent
          className={className}
          isDark={isDark}
          background={background}
          padding={padding}
          alignTitle={alignTitle}
          align={align}
          subtitle={subtitle}
          alignText={alignText}
          rule={ruleGrid}
        >
          {elements}
          <Container>
            {id && <span data-scroll-anchor id={id} />}
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            <FlexGrid
              {...rest}
              gutter={2}
              size={size}
              verticalGutter={verticalGutter}
            >
              {children as any}
            </FlexGrid>
          </Container>
        </FelaComponent>
      </Reveal>
    );
  }
}
export default Grid;
