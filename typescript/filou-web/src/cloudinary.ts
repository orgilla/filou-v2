export default (src = '', params = '') => {
  if (!src) {
    return undefined;
  }
  const options = `c_fill,f_auto,q_auto:eco,fl_lossy,g_auto${
    params ? `/${params}` : ''
  }`;
  if (src.indexOf('res.cloudinary.com') !== -1) {
    return src.split('image/upload/').join(`image/upload/${options}/`);
  } else if (
    src.indexOf('http') !== 0 &&
    src.indexOf('//') !== 0 &&
    process.env.URL
  ) {
    src = `${process.env.URL}${src}`;
  } else if (src.indexOf('http') !== 0 && src.indexOf('//') !== 0) {
    return src;
  }
  return `https://res.cloudinary.com/x23/image/fetch/${options}/${src}`;
};
