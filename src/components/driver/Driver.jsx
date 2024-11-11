import PropTypes from "prop-types";
import DriverItem from "./DriverItem";
import { Row, Spinner } from "react-bootstrap";
import "./driver.css";
import { useContext } from "react";
import { AuthContext } from "../services/authentication/AuthContext";

const Driver = ({ data, isLoading }) => {
  //const { token } = useContext(AuthContext);
  if (isLoading) return <Spinner />;

  // const myTravelsDriver = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://localhost:7016/api/Register/DropTravel",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Error cancelar el viaje: ${response.status}`);
  //     }
  //     console.log("El viaje fue cancelado exitosamente.");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  //   navigate("/TravelsCards");
  // };

  return (
    <div className="text-center d-flex flex-column container-driver">
      <div className="title-container text-center mb-5">
        <h1 className="pb-5">Mis viajes</h1>
      </div>
      <Row>
        {data == null ? (
          <p>No hay viajes</p>
        ) : (
          data?.map((i) => (
            <DriverItem
              key={i.id}
              id={i.id}
              hour={i.hour}
              capacity={i.capacity}
              state={i.state}
              school={i.school}
              driver={i.driver}
              district={i.distict}
              passengers={i.passengers}
            />
          ))
        )}
      </Row>
    </div>
  );
};

Driver.propTypes = {
  driver: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Driver;
