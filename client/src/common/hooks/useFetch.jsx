import { useState, useEffect, useCallback } from "react";
import { apiClient } from "../api/apiClient";

/**
 * Custom hook for fetching data using apiClient.
 * @param {string|null} endpoint - The API endpoint to fetch from. If null, the fetch is skipped.
 * @returns {object} - { data, loading, error, refetch }
 */
export const useFetch = (endpoint = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!endpoint);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!endpoint) return;

    setLoading(true);
    setError(null);
    try {
      const result = await apiClient.get(endpoint);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
