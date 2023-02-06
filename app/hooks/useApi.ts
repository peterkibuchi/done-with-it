import { useState } from "react";

export default function useApi(apiFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunction(...args);
    setLoading(false);

    if (!response.ok) return setHasError(true);

    setHasError(false);
    setData(response.data);
  };

  return { data, hasError, loading, request };
}
