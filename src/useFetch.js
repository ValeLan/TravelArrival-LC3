import { useState, useEffect } from "react";

export function useFetch(url, method) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7016/api${url}`, {
          method: method,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener los viajes:", error);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, error };
}
