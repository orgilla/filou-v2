const tinycolor = require('tinycolor2');
import { useTheme } from './theme';

// COLOR-TRANSFORMATIONS
export const lighten = (color: string, percent?: number) =>
  tinycolor(color)
    .lighten(percent || 8)
    .toRgbString();
export const darken = (color: string, percent?: number) =>
  tinycolor(color)
    .darken(percent || 4)
    .toRgbString();
export const spin = (color: string, deg?: number) =>
  tinycolor(color)
    .spin(deg || 180)
    .toRgbString();
export const fade = (color: string, percent = 67) =>
  tinycolor(color)
    .setAlpha(percent / 100)
    .toRgbString();

// BORDERS

export const border = (theme: any, color: string) =>
  `${theme.borderWidth}px ${theme.borderStyle} ${color || theme.borderColor}`;
// SHADOWS
export const boxShadow = (color = 'rgba(0, 0, 0, 0.1)', intense = 10) =>
  `0px 0px ${intense}px 0px ${tinycolor(color).toRgbString()}`;
export const innerShadow = (color: string) => `inset ${boxShadow(color)}`;

export const gradient = (color1: string, color2: string, deg: number) => {
  let tColor1 = tinycolor(lighten(color1)).spin(6);
  let tColor2 = tinycolor(darken(color1)).spin(-3);
  let tDeg = deg || 90;

  if (typeof color2 === 'string') {
    // color1, color2, (deg)
    tColor1 = tinycolor(color1);
    tColor2 = tinycolor(color2);
  } else if (!deg && color2 === parseInt(color2, 10)) {
    // color1, deg
    tDeg = color2;
  }

  return `linear-gradient(${tDeg +
    90}deg, ${tColor1.toRgbString()} 0%, ${tColor2.toRgbString()} 100%)`;
};

export const getColor = (
  color: string | number | boolean | undefined,
  palette?: number
): string | undefined => {
  const theme = useTheme() as any;

  if (color === true) {
    return theme.color;
  } else if (color === false) {
    return 'transparent';
  } else if (color !== undefined && theme[color]) {
    return theme[color];
  } else if (typeof color === 'number') {
    if (theme.colors && theme.colors[color]) {
      const p = palette !== undefined ? palette : theme.palette;

      return theme.colors[color].palette[p];
    }

    return undefined; // if no color found
  }

  return color;
};

export const isDark = (
  color: string | number | boolean | undefined,
  palette?: number
): boolean | undefined => {
  const theme = useTheme() as any;

  if (color === true) {
    return tinycolor(theme.color).isLighten();
  } else if (color === false) {
    return undefined;
  } else if (color !== undefined && theme[color]) {
    return tinycolor(theme[color]).isLighten();
  } else if (typeof color === 'number') {
    if (color !== undefined && theme.colors && theme.colors[color]) {
      const p = palette !== undefined ? palette : theme.palette;

      return theme.colors[color].inverted[p];
    }
  }

  return undefined; // if no color found
};
