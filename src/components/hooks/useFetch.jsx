import { useState, useEffect } from "react";

export default function useFetch (url, method) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {                         //https://localhost:7016/api${url}
        const response = await fetch(`http://localhost:5165/api${url}`, {
          method: method,
          //GET-DELETE
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        console.log("Lista de viajes:", jsonData);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener los viajes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, error, isLoading };
}
