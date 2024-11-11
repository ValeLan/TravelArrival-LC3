import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../services/authentication/AuthContext";

export default function useToken (email, password) {
    const { saveToken } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchToken = async ({ email, password }) => {
        if (!email || !password) {
          setError("Por favor, ingresa email y contraseña.");
          return;
        }

        try {
          const response = await fetch(
            `https://localhost:7016/api/Authenticate`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          if (email == email && password == password) {
            console.log("correcto");
          }

          const jsonData = await response.text();
          saveToken(jsonData);
          setData(jsonData);
          console.log("El token es:", jsonData);
        } catch (error) {
          setError(error.message);
          console.error("Error al obtener el Token:", error);
        }
      };

      fetchToken();
    }, [email, password])
    
  return { data, error };
}