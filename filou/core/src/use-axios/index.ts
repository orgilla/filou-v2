import * as React from 'react';
import axios from 'axios';

export interface AsyncState<T> {
  loading: boolean;
  error?: Error | any;
  value?: T;
}

const useAxios = <T>(
  url: string,
  headers = {},
  cacheBuster: Array<any> = []
): [T, any | undefined, boolean] => {
  const [state, set] = React['useState']<AsyncState<T>>({
    loading: true
  });
  const memoized = React['useCallback'](() => axios.get(url, { headers }), [
    url,
    ...cacheBuster
  ]);

  React['useEffect'](
    () => {
      let mounted = true;
      const promise = memoized();

      promise.then(
        (value: any) => {
          if (mounted) {
            set({
              loading: false,
              value: value.data
            });
          }
        },
        (error: any) => {
          if (mounted) {
            set({
              loading: false,
              error
            });
          }
        }
      );

      return () => {
        mounted = false;
      };
    },
    [memoized]
  );

  return [state.value, state.error, state.loading];
};

export default useAxios;
