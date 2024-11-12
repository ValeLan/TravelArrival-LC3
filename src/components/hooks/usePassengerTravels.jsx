import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../services/authentication/AuthContext';

export default function usePassengerTravels () {
  const { token } = useContext(AuthContext); 
  const [travel, setTravel] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTravels = async () => {
      if (!token) {
        console.log("Token ausente");
        setError("Token no encontrado");
        return error;
      }

      try {
        const response = await fetch('https://localhost:7016/api/Passenger/MyTravels', {
          method: 'GET',
          headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error("Error en la respuesta de la API:", response.status);
          throw new Error(`Error al obtener los viajes: ${response.status}`);
        }

        const data = await response.json();
        console.log("Datos recibidos del fetch:", data); 
        setTravel(data);
      } catch (error) {
        setError("Error al obtener los viajes: " + error.message);
        console.error("Error:", error);
      }
    };

    fetchTravels();
  }, [token]);

  return { travel, error };
};