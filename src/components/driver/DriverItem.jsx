import PropTypes from "prop-types"
import { Card, Col, Button } from "react-bootstrap";
import "./driver.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverItem = ({
  id,
  hour,
  capacity,
  state,
  school,
  driver,
  district,
  passengers,
}) => {
  const [title, setTitle] = useState(school.name);

  const navigate = useNavigate();

  const clickHandler = () => {
    setTitle(school.name);
    navigate(`/details/${id}`, {
      state: {
        id,
        hour,
        capacity,
        state,
        school,
        driver,
        district,
        passengers,
      },
    });
  };

  return (
    <Col key={id} md={4} className="mb-4 w-50">
      <Card className="shadow h-100 p-3 card-border">
        <Card.Body className="">
          <h2 className="mb-3 fs-3">
            Viaje a escuela: <br /> {school.name}
          </h2>
          <Card.Text className="text-start">
            <strong>Hora de salida:</strong> {hour}
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Capacidad:</strong> {capacity}
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Estado:</strong> {state}
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Escuela:</strong> {school.name} ({school.schoolAdress})
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Chofer:</strong> {driver.fullName}
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Email:</strong> {driver.email}
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Distrito:</strong> {district}
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Pasajeros:</strong> {passengers.length}
          </Card.Text>

          <Button className="mt-3 btn-details" onClick={clickHandler}>
            Details
          </Button>
          {/* PODRIAMOS MOSTRAR SOLO LA CANTIDAD DE PASAJEROS INSCRIPTOS Y CUANDO QUIERA MAS DETALLES EL CHOFER, QUE UTILICE EL BOTON DE DETALLES Y AHI SI APAREZCA LA LISTA DE LOS PASAJEROS */}
        </Card.Body>
      </Card>
    </Col>
  );
};

DriverItem.propTypes = {
    id: PropTypes.number,
    hour: PropTypes.string,
    capacity: PropTypes.number,
    state: PropTypes.string,
    school: PropTypes.object,
    driver: PropTypes.object,
    district: PropTypes.string,
    passengers: PropTypes.array,
};

export default DriverItem;