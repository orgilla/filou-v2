import materialColors from './material-colors';
import defaultTheme from './default-theme';

export default (getTheme = (colors: object): any => {}) => {
  const colors = materialColors;
  const theme = getTheme(colors);

  return {
    colors,
    ...defaultTheme(theme)
  };
};
