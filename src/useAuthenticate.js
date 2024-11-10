import { useState} from "react";

export function useAuthenticate() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

    const fetchToken = async ({email, password}) => {

      if (!email || !password) {
        setError("Por favor, ingresa email y contraseña.");
        return;
      }
      
      try {                         //https://localhost:7016/api/Authenticate
        const response = await fetch(`http://localhost:5165/api/Authenticate`, {
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

  return { data, error };
  }