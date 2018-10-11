//@ts-ignore
import tinycolor from 'tinycolor2';

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
  theme: any,
  color: string | boolean,
  palette?: number
): string => {
  if (color === true) {
    return theme.color;
  } else if (color === false) {
    return 'transparent';
  } else if (theme[color]) {
    return theme[color];
  } else if (theme.colors && theme.colors[color]) {
    return theme.colors[color][palette !== undefined ? palette : theme.palette];
  }
  return color;
};

export const color = getColor;

export default getColor;
