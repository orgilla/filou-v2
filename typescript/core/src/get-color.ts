const getColor = (theme: any, color: string | boolean, palette: Number) => {
  if (color === true) {
    return theme.color;
  } else if (color === false) {
    return undefined;
  } else if (theme[color]) {
    return theme[color];
  } else if (theme.colors && theme.colors[color]) {
    return theme.colors[color][palette !== undefined ? palette : theme.palette];
  }
  return color;
};

export default getColor;
