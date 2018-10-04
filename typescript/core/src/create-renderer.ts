import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
//@ts-ignore
import namedKeys from 'fela-plugin-named-keys';
//@ts-ignore
import embedded from 'fela-plugin-embedded';
//@ts-ignore
import normalize from './normalize';

interface CreateRendererProps {
  ua?: any;
}

export default ({ ua }: CreateRendererProps = {}) => {
  const browser = ua && ua.getBrowser && ua.getBrowser();
  const isBrowser = (type: string, maxVersion: number, minVersion?: number) => {
    if (!browser) {
      return false;
    }
    if (minVersion) {
      return (
        browser.name === type &&
        parseInt(browser.major, 10) <= maxVersion &&
        parseInt(browser.major, 10) >= minVersion
      );
    }

    return browser.name === type && parseInt(browser.major, 10) <= maxVersion;
  };

  const renderer = createRenderer({
    // selectorPrefix: 'o-',
    plugins: [
      extend(),
      embedded(),
      prefixer(),
      fallbackValue(),
      unit(),
      namedKeys({
        // From
        ifHugeUp: '@media (min-width: 1200px)',
        ifLargeUp: '@media (min-width: 992px)',
        ifMediumUp: '@media (min-width: 768px)',
        ifSmallUp: '@media (min-width: 480px)',
        // To
        ifLargeDown: '@media (max-width: 1199px)',
        ifMediumDown: '@media (max-width: 991px)',
        ifSmallDown: '@media (max-width: 767px)',
        // On
        ifHuge: '@media (min-width: 1200px)',
        ifLarge: '@media (max-width: 1199px, min-width: 992)',
        ifMedium: '@media (max-width: 991px, min-width: 768)',
        ifSmall: '@media (max-width: 767px, min-width: 480)',
        ifMini: '@media (max-width: 479px)'
      }),
      friendlyPseudoClass(),
      //@ts-ignore
      customProperty({
        size: (size?: Number | string) => ({
          width: size,
          height: size
        }),
        paddingX: (padding?: Number | string) => ({
          paddingLeft: padding,
          paddingRight: padding
        }),
        paddingY: (padding?: Number | string) => ({
          paddingTop: padding,
          paddingBottom: padding
        }),
        marginX: (margin?: Number | string) => ({
          marginLeft: margin,
          marginRight: margin
        }),
        marginY: (margin?: Number | string) => ({
          marginTop: margin,
          marginBottom: margin
        }),
        borderX: (border?: Number | string) => ({
          borderLeft: border,
          borderRight: border
        }),
        borderY: (border?: Number | string) => ({
          borderTop: border,
          borderBottom: border
        }),
        ellipsis: (ellipsis?: boolean) =>
          ellipsis === true
            ? {
                whiteSpace: 'nowrap',
                overflowX: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%'
              }
            : {},
        clearfix: (clearfix?: boolean) =>
          clearfix === true
            ? {
                ':after': {
                  content: '""',
                  clear: 'both',
                  display: 'block',
                  visibility: 'hidden',
                  height: 0
                }
              }
            : {},
        center: (center?: boolean) =>
          center === true
            ? {
                position: 'absolute',
                ...(isBrowser('IE', 10)
                  ? {
                      margin: 'auto',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    }
                  : {
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    })
              }
            : {},
        centerX: (center?: boolean) =>
          center === true
            ? {
                position: 'absolute',
                ...(isBrowser('IE', 10)
                  ? {
                      marginLeft: 'auto',
                      left: 0,
                      marginRight: 'auto',
                      right: 0
                    }
                  : {
                      left: '50%',
                      transform: 'translateX(-50%)'
                    })
              }
            : {},
        centerY: (center?: boolean) =>
          center === true
            ? {
                position: 'absolute',
                ...(isBrowser('IE', 10)
                  ? {
                      marginTop: 'auto',
                      top: 0,
                      marginBottom: 'auto',
                      bottom: 0
                    }
                  : {
                      top: '50%',
                      transform: 'translateY(-50%)'
                    })
              }
            : {},
        flexWidth: (width?: Number | string) => ({
          maxWidth: width,
          minWidth: width,
          width
        }),
        hasFlex: (styles?: any) => {
          if (!isBrowser('IE', 10)) {
            return styles;
          }

          return { display: 'block' };
        }
      })
      // removeUndefined(),
    ]
    // enhancers: [monolithic ? monolithicEnhancer() : null].filter(x => x)
    // enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic').default()],
  });
  /* if (typeof window !== 'undefined') {
    rehydrate(renderer);
  } */
  renderer.renderStatic(normalize);
  renderer.renderStatic(`
    .with-portal {
      overflow: hidden;
    }
  `);
  return renderer;
};
