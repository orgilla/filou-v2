import materialColors from './material-colors';
import defaultTheme from './default-theme';

export default (theme: object) => {
  const colors = materialColors;

  return {
    colors,
    ...defaultTheme(theme)
  };
};
