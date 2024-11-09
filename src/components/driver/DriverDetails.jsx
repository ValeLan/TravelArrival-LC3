import PropTypes from "prop-types";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./driver.css";

const DriverDetails = ({travels}) => {
  const location = useLocation();
  const navigate = useNavigate();


  const { id, fullName, hour, capacity, state, school, driver, district, passenger } = location.state;


  const clickHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center d-flex flex-column">
      <div className="title-container text-center mb-5">
        <h1 className="pb-5">Mis viajes</h1>
      </div>

      <Row>
        {travels.map((travel) => (
          <Col key={travel.id} md={4} className="mb-4">
            <Card className="shadow h-100 p-3 card-border background-driver">
              <Card.Body className="">
                <h2 className="mb-3">Viaje {travel.id}</h2>
                <Card.Text className="text-start">
                  <strong>Hora de salida:</strong> {travel.hour}
                </Card.Text>
                <Card.Text className="text-start">
                  <strong>Capacidad:</strong> {travel.capacity}
                </Card.Text>
                <Card.Text className="text-start">
                  <strong>Estado:</strong> {travel.state}
                </Card.Text>
                <Card.Text className="text-start">
                  <strong>Escuela:</strong> {travel.school.name} (
                  {travel.school.schoolAdress})
                </Card.Text>
                <Card.Text className="text-start">
                  <strong>Chofer:</strong> {travel.driver.fullName}
                </Card.Text>
                <Card.Text className="text-start">
                  <strong>Email:</strong> {travel.driver.email}
                </Card.Text>
                <Card.Text className="text-start">
                  <strong>Distrito:</strong> {travel.district}
                </Card.Text>

                <hr />

                <h3 className="mt-3">Pasajeros</h3>
                <ListGroup>
                  {travel.passengers.map((passenger) => (
                    <ListGroup.Item key={passenger.id} className="m-3 bg-light">
                      <p>
                        <strong>Nombre:</strong> {passenger.fullName}
                      </p>
                      <p>
                        <strong>Email:</strong> {passenger.email}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {passenger.phoneNumber}
                      </p>
                      <p>
                        <strong>DNI:</strong> {passenger.dni}
                      </p>
                      <p>
                        <strong>Distrito:</strong> {passenger.district}
                      </p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

DriverDetails.propTypes = {
  travels: PropTypes.array,
};

export default DriverDetails;
