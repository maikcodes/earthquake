import { Earthquakes } from "@services/Earthquakes";
import { useCallback, useEffect, useState } from "react";

function useFeatures(page, limit) {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchFeatures = useCallback(async () => {
    try {
      setLoading(true);
      const earthquakes = await Earthquakes.index(page, limit);
      setData(earthquakes);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);

  return { data, error, loading };
}

export default useFeatures;
