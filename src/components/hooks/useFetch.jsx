import { useState, useEffect } from "react";

export default function useFetch(url, method) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7016/api${url}`, {
          method: method,
        });

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        return jsonData; // Retornamos el jsonData aquí
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener los viajes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData().then((jsonData) => {
      if (jsonData) {
        console.log("Datos recibidos del fetch y asignados a data:", jsonData);
      }
    });

  }, [url, method]);

  return { data, error, isLoading };
}
