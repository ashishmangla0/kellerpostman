import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
console.log(url);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!signal.aborted) {
            setResponse(json);
          setError(false);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(true);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { response, error, loading };
};
export default useFetch;