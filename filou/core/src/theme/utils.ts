const tinycolor = require('tinycolor2');
import { useTheme } from './theme';

export const lighten = (
  color: string,
  step?: 0 | 1 | 2 | 3 | 4 | 5 | string
) => {
  const stepMode = tinycolor(color).isLighten() ? 'stepLight' : 'stepDark';
  const steps = useTheme(stepMode);
  const percent = typeof step === 'string' ? parseInt(step) : steps[step || 0];

  return tinycolor(color)
    .lighten(percent * 100)
    .toRgbString();
};

export const darken = (
  color: string,
  step?: 0 | 1 | 2 | 3 | 4 | 5 | string
) => {
  const stepMode = tinycolor(color).isLighten() ? 'stepLight' : 'stepDark';
  const steps = useTheme(stepMode);
  const percent = typeof step === 'string' ? parseInt(step) : steps[step || 0];

  return tinycolor(color)
    .darken(percent * 100)
    .toRgbString();
};

export const fade = (color: string, step?: 0 | 1 | 2 | 3 | 4 | 5 | string) => {
  const stepMode = tinycolor(color).isLighten() ? 'stepLight' : 'stepDark';
  const steps = useTheme(stepMode);
  const percent = typeof step === 'string' ? parseInt(step) : steps[step || 0];

  return tinycolor(color)
    .setAlpha(percent)
    .toRgbString();
};

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

export const textColor = (
  color: string,
  step?: 0 | 1 | 2 | 3 | 4 | 5 | string
) => {
  const { light, dark } = useTheme('colors');

  return tinycolor(color).isLighten()
    ? lighten(light, step)
    : darken(dark, step);
};

export const getColor = (color?: string) => {
  const colors = useTheme<any>('colors');

  return !color ? colors.primary : colors[color] || color;
};
