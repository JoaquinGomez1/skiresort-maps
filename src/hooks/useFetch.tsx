import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let shouldCancelFetch = false;
    !shouldCancelFetch && fetchData();

    return () => {
      shouldCancelFetch = true;
    };
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const req = await fetch(url);
    const res = await req.json();
    setIsLoading(false);
    setData(res);
  };
  return { data, isLoading };
}
