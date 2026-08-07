import { useState, useEffect, useCallback } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMeals = useCallback(async (signal) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(url, { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch meals.");
      }

      const result = await response.json();

      // MealDB returns { meals: [...] } or { meals: null }
      setData(result.meals || []);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong.");
        setData([]);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();

    fetchMeals(controller.signal);

    return () => controller.abort();
  }, [fetchMeals]);

  const retry = () => {
    const controller = new AbortController();
    fetchMeals(controller.signal);
  };

  return {
    data,
    loading,
    error,
    retry,
  };
}