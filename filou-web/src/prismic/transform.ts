const geEntries = (obj: any) => {
  var ownProps = Object.keys(obj),
    i = ownProps.length,
    resArray = new Array(i); // preallocate the Array
  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

  return resArray;
};

export interface IPrismicData {
  id?: string;
  type?: string;
  body?: Array<any>;
}

const transform = (prismicData: any) => {
  if (!prismicData) {
    return prismicData;
  }
  const data = prismicData.data || prismicData;
  const result: IPrismicData = {};
  const entries = geEntries(data);

  for (let i = 0; i < entries.length; i += 1) {
    const name = entries[i][0];
    const value = entries[i][1];

    if (
      value &&
      value.length === 1 &&
      value[0].text !== undefined &&
      value[0].text !== null
    ) {
      result[name] = value[0].text;
    } else if (value && value.length === 0) {
      result[name] = null;
    } else {
      result[name] = value;
    }
  }

  if (result.body) {
    result.body = result.body.map(slice => ({
      type: slice.slice_type,
      ...transform(slice.primary),
      items: slice.items.map(transform)
    }));
  }
  return result;
};

export default transform;
