import * as React from 'react';
import { css } from 'emotion';

interface IBanner {
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}
const rule = (theme: any, backgroundImage?: string) =>
  css({
    height: '100%',
    width: '100%',
    // backgroundColor: '#42387a',
    // background: 'linear-gradient(177deg, rgb(35, 35, 51), #28286A)',
    // transform: `translateY(-300px)`,
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    paddingY: theme.space4,
    '& a': {
      color: theme.light,
      textDecoration: 'none'
    },
    '> div': {
      zIndex: 1,
      cursor: 'default',
      userSelect: 'none',
      '> div > div': {
        flexDirection: 'row',
        display: 'flex'
      },
      paddingLeft: 10,
      '& h1': {
        fontSize: 80,
        marginY: 0,
        borderBottom: 0,
        color: theme.light
      },
      fontWeight: theme.headerFontWeight
    },
    ':before': {
      pointerEvents: 'none',
      content: "' '",
      backgroundColor: 'gray',
      /* backgroundColor: tinyColor(theme.color)
      .saturate(30)
      .toString(), */
      zIndex: -1,
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden'
    },
    /* onHover: {
    onAfter: {
      transform: 'rotate(-2deg) scale(1.05)'
    }
  }, */
    ':after': {
      pointerEvents: 'none',
      content: "' '",
      backgroundColor: theme.color,
      backgroundImage: `url(${backgroundImage})`,
      zIndex: 0,
      position: 'absolute',
      height: '100%',
      width: '100%',
      // opacity: 0.6,
      top: 0,
      left: 0,
      overflow: 'hidden',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      transform: 'translateZ(0) scale(1)',
      transition: 'transform 6s ease'
    }
  });

function Banner({ children, className, backgroundImage }: IBanner) {
  return (
    <div className={rule({}, backgroundImage)}>
      <div>{children}</div>
    </div>
  );
}

export default Banner;
