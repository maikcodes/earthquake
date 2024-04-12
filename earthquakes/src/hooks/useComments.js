import { Comment } from "@services/Comment";
import { useCallback, useEffect, useState } from "react";

function useComments(id, page, limit) {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchFeatures = useCallback(async () => {
    try {
      setLoading(true);
      const earthquakes = await Comment.indexByFeatureId(id, page, limit);
      setData(earthquakes);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id, page, limit]);

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);

  const refetch = () => fetchFeatures();

  return { data, error, loading, refetch };
}

export default useComments;
