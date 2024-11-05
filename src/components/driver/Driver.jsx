import PropTypes from "prop-types"
import { Card, Row, Col, Button} from "react-bootstrap";
import { passengers } from "../../data/passengers";
import "./driver.css"

const Driver = ({ travels }) => {
  
  return (
    <div className="text-center d-flex flex-column container-driver">
      <div className="title-container text-center mb-5">
        <h1 className="pb-5">Mis viajes</h1>
      </div>

      <Row>
        {travels.map((travel) => (
          <Col key={travel.id} md={4} className="mb-4">
            <Card className="shadow h-100 p-3 card-border">
              <Card.Body className="">
                <h2 className="mb-3">Viaje {travel.id}</h2>
                <Card.Text className="text-start">
                  <strong>Hora:</strong> {travel.hour}
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
                <Card.Text className="text-start">
                  <strong>Pasajeros:</strong> {passengers.length}
                </Card.Text>

                <Button className="mt-3 btn-details">Details</Button>
                {/* PODRIAMOS MOSTRAR SOLO LA CANTIDAD DE PASAJEROS INSCRIPTOS Y CUANDO QUIERA MAS DETALLES EL CHOFER, QUE UTILICE EL BOTON DE DETALLES Y AHI SI APAREZCA LA LISTA DE LOS PASAJEROS */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

Driver.propTypes = {
  travels: PropTypes.array,
};

export default Driver;
