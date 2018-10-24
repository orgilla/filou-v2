import transform, { IPrismicData } from './transform';
const groupBy = require('lodash/groupBy');

export interface IPrismicQueryResponse {
  results: Array<IPrismicData>;
}

export interface IPrismicAPI {
  query: (query: string) => IPrismicQueryResponse;
}

const fetchData = async (api: IPrismicAPI) => {
  const { results } = await api.query('');
  const mapped = groupBy(
    results.map(data => ({
      ...transform(data),
      id: data.id,
      type: data.type
    })),
    'type'
  );
  return mapped;
};

export default fetchData;
