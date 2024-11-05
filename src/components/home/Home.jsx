import { useEffect, useState } from "react";

const Home = () => {
    const [travelsFiltered, setTravelsFiltered] = useState([]);

    const apiUrlTravel = import.meta.env.VITE_API_URL_TRAVEL;

    useEffect(() => {
      fetch(`${apiUrlTravel}/Travel/Historical`, {
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((travelData) => {
          const travelsMapped = travelData
            .map((travel) => ({
              id: travel.id,
              hour: travel.hour,
              capacity: travel.capacity,
              state: travel.state,
              district: travel.district,
              schoolName: travel.school?.name,
              schoolAddress: travel.school?.schoolAdress,
              driverName: travel.driver?.fullName,
              driverPhone: travel.driver?.phoneNumber,
              passengers: travel.passengers?.map((passenger) => ({
                id: passenger.id,
                name: passenger.fullName,
                district: passenger.district,
              })),
            }))
            .sort((a, b) => b.id - a.id);
          setTravelsFiltered(travelsMapped);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <>
        <h1>Bienvenido!</h1>
    </>
  )
}

export default Home