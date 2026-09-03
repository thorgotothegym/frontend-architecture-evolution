import { useEffect, useState } from 'react';

type Result<T> = {
  data: T | null;
  error: Error | null;
  settledUrl: string | null;
};

export const useFetch = (url: string) => {
  const [result, setResult] = useState<Result<unknown>>({
    data: null,
    error: null,
    settledUrl: null,
  });

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!ignore) {
          setResult({ data: json, error: null, settledUrl: url });
        }
      })
      .catch((err) => {
        if (!ignore) {
          setResult({ data: null, error: err, settledUrl: url });
        }
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  const isLoading = result.settledUrl !== url;

  return {
    data: isLoading ? null : result.data,
    error: isLoading ? null : result.error,
    isLoading,
  };
};
