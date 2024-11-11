import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./driver.css";
import { useLocation, useNavigate } from "react-router-dom";

const DriverDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, hour, capacity, state, school, driver, district, passengers } =
    location.state;

  const clickHandler = () => {
    navigate("/driver");
  };

  // import { useContext } from "react";
  // import { TravelsContext } from "../../TravelsContext";

  // const { travels, error } = useContext(TravelsContext);

  return (
    <div className="text-center d-flex flex-column container-driver">
      <div className="title-container text-center mb-5">
        <h1 className="pb-5">Mis viajes</h1>
      </div>

      <Card className="shadow p-3 card-border" style={{ minWidth: "300px" }}>
        <Card.Body>
          <h2 className="text-center mb-5">Viaje a escuela: {school.name}</h2>

          <Row>
            <Col md={6} className="text-start">
              <Card.Text>
                <strong>Hora de salida:</strong> {hour}
              </Card.Text>
              <Card.Text>
                <strong>Capacidad:</strong> {capacity}
              </Card.Text>
              <Card.Text>
                <strong>Estado:</strong> {state}
              </Card.Text>
              <Card.Text>
                <strong>Escuela:</strong> {school.name} ({school.schoolAdress})
              </Card.Text>
              <Card.Text>
                <strong>Chofer:</strong> {driver.fullName}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {driver.email}
              </Card.Text>
              <Card.Text>
                <strong>Distrito:</strong> {district}
              </Card.Text>
              <Card.Text>
                <strong>Pasajeros:</strong> {passengers.length}
              </Card.Text>
            </Col>

            <Col md="auto" className="d-flex align-items-start">
              <hr
                className="vr"
                style={{ height: "100%", width: "2px", color: "#3f3f3f" }}
              />
            </Col>

            <Col md={5}>
              <h3 className="mb-4">Pasajeros</h3>
              <div className="overflow-auto" style={{ maxHeight: "250px" }}>
                <ListGroup>
                  {passengers?.length === 0 ? (
                    <p>No hay pasajeros inscriptos.</p>
                  ) : (
                    passengers?.map((p) => (
                      <ListGroup.Item key={p.id} className="m-3 bg-light">
                        <p>
                          <strong>Nombre:</strong> {p.fullName}
                        </p>
                        <p>
                          <strong>Email:</strong> {p.email}
                        </p>
                        <p>
                          <strong>Teléfono:</strong> {p.phoneNumber}
                        </p>
                        <p>
                          <strong>DNI:</strong> {p.dni}
                        </p>
                        <p>
                          <strong>Distrito:</strong> {p.district}
                        </p>
                      </ListGroup.Item>
                    ))
                  )}
                </ListGroup>
              </div>
            </Col>
          </Row>
          <Button className="mt-5 btn-details" onClick={clickHandler}>
            Volver atrás.
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DriverDetails;
