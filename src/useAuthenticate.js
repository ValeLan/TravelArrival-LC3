import { useState, useEffect } from "react";

export function useAuthenticate({email, password}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(`https://localhost:7016/api/Authenticate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const jsonData = await response.text();
        setData(jsonData);
        console.log("El token es:", jsonData);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener el Token:", error);
      }
    };

    fetchToken();
  }, [email, password]);

  return { data, error };
}