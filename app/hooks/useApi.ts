import { useState } from "react";

interface ApiReturnType {
  data: any[];
  hasError: boolean;
  loading: boolean;
  request: (...args: any[]) => Promise<any>;
}

export default function useApi(apiFunction): ApiReturnType {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunction(...args);
    setLoading(false);

    setHasError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, hasError, loading, request };
}
