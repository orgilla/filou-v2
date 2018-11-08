import materialColors from './material-colors';
import defaultTheme from './default-theme';

export default (getTheme = (colors: Array<Array<string>>): any => {}) => {
  const colors = materialColors.map((color: any) => color.palette);
  const theme = getTheme(colors);

  return {
    colors,
    ...defaultTheme(theme)
  };
};
