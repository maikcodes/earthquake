import { Earthquake } from "@services/Earthquake";
import { useCallback, useEffect, useState } from "react";

function useFeatures(page, limit, filters) {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchFeatures = useCallback(async () => {
    try {
      setLoading(true);
      const earthquakes = await Earthquake.index(page, limit, filters);
      setData(earthquakes);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [page, limit, filters]);

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);

  return { data, error, loading };
}

export default useFeatures;
